#!/usr/bin/env python3
"""Unit tests for War Room Pulse v3 helpers (no network)."""
from __future__ import annotations

import datetime
import unittest

import war_room_pulse as wrp


def comment(cid, login, body, created="2026-09-17T21:00:00Z", updated=None):
    return {
        "id": cid,
        "user": {"login": login},
        "body": body,
        "created_at": created,
        "updated_at": updated or created,
    }


class PulseHelpersTest(unittest.TestCase):
    def setUp(self):
        self.now = datetime.datetime(2026, 9, 17, 21, 30, tzinfo=datetime.timezone.utc)

    def test_parse_header(self):
        parsed = wrp.parse_header("### 2026-09-17 21:10 -03 | Comms | HEARTBEAT\nNext: mail")
        self.assertEqual(parsed["name"], "Comms")
        self.assertEqual(parsed["action"], "HEARTBEAT")

    def test_bot_and_standing_skipped(self):
        standing = comment(1, "github-actions[bot]", wrp.STANDING_MARKER + "\nhello")
        welcome = comment(2, "github-actions[bot]", "🤖 War Room Pulse: welcome, agent.")
        human = comment(3, "Zion-support", "### 2026-09-17 21:25 UTC | Harper | HEARTBEAT")
        self.assertTrue(wrp.is_standing_comment(standing))
        self.assertTrue(wrp.is_bot_comment(standing))
        self.assertTrue(wrp.is_bot_comment(welcome))
        self.assertFalse(wrp.is_bot_comment(human))
        self.assertFalse(wrp.is_human_checkin(welcome))

    def test_human_checkin_not_heartbeat(self):
        join = comment(4, "alice", "### 2026-09-17 21:20 UTC | Grok | JOIN\ncheck-in")
        hb = comment(5, "alice", "### 2026-09-17 21:20 UTC | Grok | HEARTBEAT")
        action = comment(6, "alice", "### 2026-09-17 21:20 UTC | Grok | ACTION\nDone:\n- shipped board")
        self.assertTrue(wrp.is_human_checkin(join))
        self.assertFalse(wrp.is_human_checkin(hb))
        self.assertFalse(wrp.is_human_checkin(action))

    def test_parse_agents_status_windows(self):
        comments = [
            comment(10, "a", "### 2026-09-17 21:20 UTC | Harper | HEARTBEAT", "2026-09-17T21:20:00Z"),
            comment(11, "b", "### 2026-09-17 20:50 UTC | Lucas | ACTION", "2026-09-17T20:50:00Z"),
            comment(12, "c", "### 2026-09-17 19:00 UTC | Benjamin | HEARTBEAT", "2026-09-17T19:00:00Z"),
            comment(13, "github-actions[bot]", wrp.STANDING_MARKER, "2026-09-17T21:29:00Z"),
        ]
        agents = wrp.parse_agents(comments, self.now)
        self.assertEqual(agents["Harper"]["status"], "ACTIVE")
        self.assertEqual(agents["Lucas"]["status"], "ONLINE")
        self.assertEqual(agents["Benjamin"]["status"], "OFFLINE")
        self.assertNotIn("Pulse", agents)

    def test_parse_agents_skips_template_and_merges_case(self):
        comments = [
            comment(20, "h1", "### 2026-09-17 21:10 UTC | HERMES | CHECK-IN", "2026-09-17T21:10:00Z"),
            comment(21, "h2", "### 2026-09-17 21:25 UTC | Hermes | JOIN", "2026-09-17T21:25:00Z"),
            comment(22, "t", "### 2026-09-17 21:26 UTC | AGENT | HEARTBEAT", "2026-09-17T21:26:00Z"),
        ]
        agents = wrp.parse_agents(comments, self.now)
        self.assertIn("HERMES", agents)
        self.assertNotIn("Hermes", agents)
        self.assertNotIn("AGENT", agents)
        self.assertEqual(agents["HERMES"]["last_action"], "JOIN")

    def test_learn_actions_skips_standing_and_short_lines(self):
        comments = [
            comment(1, "github-actions[bot]", wrp.STANDING_MARKER + "\nDone:\n- ignore standing done line that is long enough"),
            comment(2, "alice", "### x | Grok | ACTION\nDone:\n- short\n- publish /ops/comms board for agents\n"),
        ]
        done = wrp.learn_actions(comments)
        self.assertEqual(done, ["publish /ops/comms board for agents"])

    def test_fingerprint_stable_until_roster_changes(self):
        agents = {"Harper": {"status": "ACTIVE", "minutes_since_seen": 4, "last_action": "HEARTBEAT"}}
        fp1 = wrp.fingerprint_for(agents, ["a"], ["Grok"], 99)
        fp2 = wrp.fingerprint_for(agents, ["a"], ["Grok"], 99)
        fp3 = wrp.fingerprint_for(agents, ["a"], ["Grok"], 100)
        self.assertEqual(fp1, fp2)
        self.assertNotEqual(fp1, fp3)

    def test_needs_update_on_missing_standing_or_stale_edit(self):
        fp = "abc123def4567890"
        self.assertTrue(wrp.needs_update(None, fp, self.now))
        fresh = comment(
            1, "github-actions[bot]",
            f"{wrp.STANDING_MARKER}\n<!-- war-room-fp:{fp} -->\n",
            created="2026-09-17T21:20:00Z",
            updated="2026-09-17T21:20:00Z",
        )
        self.assertFalse(wrp.needs_update(fresh, fp, self.now))
        stale = comment(
            1, "github-actions[bot]",
            f"{wrp.STANDING_MARKER}\n<!-- war-room-fp:{fp} -->\n",
            created="2026-09-17T20:00:00Z",
            updated="2026-09-17T20:00:00Z",
        )
        self.assertTrue(wrp.needs_update(stale, fp, self.now))
        changed = comment(
            1, "github-actions[bot]",
            f"{wrp.STANDING_MARKER}\n<!-- war-room-fp:0000000000000000 -->\n",
            created="2026-09-17T21:20:00Z",
            updated="2026-09-17T21:20:00Z",
        )
        self.assertTrue(wrp.needs_update(changed, fp, self.now))

    def test_render_standing_contains_marker_and_money_urls(self):
        agents = {
            "Harper": {
                "comments": 2,
                "last_seen": "2026-09-17T21:20:00Z",
                "last_action": "HEARTBEAT",
                "login": "harper",
                "minutes_since_seen": 10,
                "status": "ACTIVE",
            }
        }
        body = wrp.render_standing(self.now, agents, ["ship war room pulse v3"], ["Grok"], "deadbeefcafebabe")
        self.assertIn(wrp.STANDING_MARKER, body)
        self.assertIn("<!-- war-room-fp:deadbeefcafebabe -->", body)
        self.assertIn(wrp.PLANS_URL, body)
        self.assertIn(wrp.DISCOVERY_URL, body)
        self.assertIn("Keep working", body)
        self.assertIn("Harper", body)
        self.assertIn("```json", body)
        self.assertIn("Do not sit in STANDBY", body)
        self.assertIn("**Lanes", body)
        self.assertIn("**CLAIMED** · Pages / deploy watch", body)
        self.assertIn("**OPEN** · Comms — Carlos-first mail", body)

    def test_lane_states_open_until_owner_is_live(self):
        agents = {
            "Harper": {"status": "ACTIVE", "minutes_since_seen": 4},
            "Hermes": {"status": "OFFLINE", "minutes_since_seen": 120},
        }
        states = {row["id"]: row for row in wrp.lane_states(agents)}
        self.assertEqual(states["pages"]["state"], "CLAIMED")
        self.assertEqual(states["pages"]["who"], "Harper")
        self.assertEqual(states["comms"]["state"], "OPEN")
        self.assertEqual(states["monitor"]["state"], "OPEN")
        self.assertEqual(states["lead"]["state"], "OPEN")

    def test_should_slack_keepalive_cools_down(self):
        empty = {"Grok": {"status": "OFFLINE"}}
        live = {"Comms": {"status": "ACTIVE"}}
        self.assertFalse(wrp.should_slack_keepalive(live, "", self.now))
        self.assertTrue(wrp.should_slack_keepalive(empty, "", self.now))
        self.assertFalse(wrp.should_slack_keepalive(
            empty, "2026-09-17T21:20:00+00:00", self.now
        ))
        self.assertTrue(wrp.should_slack_keepalive(
            empty, "2026-09-17T20:50:00+00:00", self.now
        ))

    def test_fingerprint_includes_lane_state(self):
        agents = {"Harper": {"status": "ACTIVE", "minutes_since_seen": 4, "last_action": "HEARTBEAT"}}
        open_lanes = [{"id": "comms", "state": "OPEN"}]
        claimed = [{"id": "comms", "state": "CLAIMED"}]
        fp1 = wrp.fingerprint_for(agents, ["a"], [], 1, open_lanes)
        fp2 = wrp.fingerprint_for(agents, ["a"], [], 1, claimed)
        self.assertNotEqual(fp1, fp2)

    def test_join_snippet_claims_open_lane_without_standby(self):
        snippet = wrp.join_snippet({"id": "comms", "title": "Comms — Carlos-first mail", "next": "Inbox first."})
        self.assertIn("| YOUR_NAME | JOIN", snippet)
        self.assertIn("Lane: comms", snippet)
        self.assertIn("Status: ONLINE", snippet)
        self.assertNotIn("STANDBY", snippet)
        self.assertIn(wrp.PLANS_URL, snippet)

    def test_human_claim_is_a_checkin(self):
        claim = comment(7, "alice", "### 2026-09-17 21:20 UTC | Lucas | CLAIM\nLane: pages")
        self.assertTrue(wrp.is_human_checkin(claim))

    def test_merge_issue_body_wraps_and_replaces_card(self):
        card = wrp.render_issue_card(
            self.now,
            [{"id": "comms", "title": "Comms — Carlos-first mail", "state": "OPEN", "next": "Inbox"}],
            "deadbeefcafebabe",
        )
        self.assertIn(wrp.ISSUE_START, card)
        self.assertIn(wrp.ISSUE_END, card)
        self.assertIn("Paste JOIN", card)
        self.assertIn("Do not sit in STANDBY", card)
        merged = wrp.merge_issue_body("old human notes\n", card)
        self.assertTrue(merged.startswith(wrp.ISSUE_START))
        self.assertIn("old human notes", merged)
        updated = wrp.render_issue_card(self.now, [{"id": "lead", "title": "Lead", "state": "OPEN"}], "aaaaaaaaaaaaaaaa")
        replaced = wrp.merge_issue_body(merged, updated)
        self.assertIn("Lead", replaced)
        self.assertNotIn("Comms — Carlos-first mail", replaced)
        self.assertIn("old human notes", replaced)
        self.assertTrue(wrp.needs_issue_body_update("no card yet", "deadbeefcafebabe"))
        self.assertFalse(wrp.needs_issue_body_update(card, "deadbeefcafebabe"))

    def test_issue_card_refreshes_when_stamp_is_stale(self):
        lanes = [{"id": "comms", "title": "Comms — Carlos-first mail", "state": "OPEN"}]
        card = wrp.render_issue_card(self.now, lanes, "deadbeefcafebabe")
        later = self.now + datetime.timedelta(minutes=wrp.FORCE_REFRESH_MIN + 1)
        self.assertTrue(wrp.needs_issue_body_update(card, "deadbeefcafebabe", later))
        fresh = self.now + datetime.timedelta(minutes=5)
        self.assertFalse(wrp.needs_issue_body_update(card, "deadbeefcafebabe", fresh))

    def test_slack_keepalive_starts_work_instead_of_declaring_dead(self):
        text = wrp.slack_keepalive_text([
            {"id": "comms", "title": "Comms — Carlos-first mail", "state": "OPEN"},
        ])
        self.assertIn("claim", text.lower())
        self.assertIn("Comms — Carlos-first mail", text)
        self.assertIn("JOIN", text)
        self.assertIn("ONLINE", text)
        self.assertIn(wrp.BOARD_URL, text)
        self.assertIn(wrp.PLANS_URL, text)
        self.assertNotIn("all named agents OFFLINE", text)
        self.assertNotIn("War room empty", text)

    def test_render_standing_does_not_tell_agents_to_restart_offline(self):
        agents = {
            "Benjamin": {
                "comments": 1,
                "last_seen": "2026-09-17T19:00:00Z",
                "last_action": "HEARTBEAT",
                "login": "b",
                "minutes_since_seen": 150,
                "status": "OFFLINE",
            }
        }
        body = wrp.render_standing(self.now, agents, [], [], "deadbeefcafebabe")
        self.assertIn("do not wait for them", body.lower())
        self.assertNotIn("OFFLINE — restart now", body)

    def test_render_standing_includes_join_paste(self):
        body = wrp.render_standing(self.now, {}, [], ["Grok"], "deadbeefcafebabe")
        self.assertIn("Paste JOIN", body)
        self.assertIn("| YOUR_NAME | JOIN", body)
        self.assertIn("You already have a lane", body)


if __name__ == "__main__":
    unittest.main()
