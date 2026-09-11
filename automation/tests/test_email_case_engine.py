#!/usr/bin/env python3
"""Case-by-case email engine tests — no Gmail required."""

from __future__ import annotations

import sys
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
sys.path.insert(0, str(ROOT / "automation" / "scripts"))

import email_case_engine as eng  # noqa: E402


class ReplayLiveInboxCases(unittest.TestCase):
    def test_all_demo_cases(self):
        report = eng.replay_demo_cases()
        misses = report["misses"]
        self.assertEqual(
            report["failed"], 0,
            msg=f"case mismatches: {misses}",
        )
        self.assertEqual(report["passed"], report["total"])


class ActionPolicyTests(unittest.TestCase):
    def test_otp_never_replies_or_autosends(self):
        d = eng.analyze_email(
            subject="TikTok Shop Partner Center verification code",
            sender="partner@email.tiktok.com",
            body="enter this code : YBSM62 Do not forward this code to anyone. Verification codes expire after 2 hours.",
        )
        self.assertEqual(d.intent, "otp_verification")
        self.assertFalse(d.should_reply)
        self.assertFalse(d.auto_send_allowed)
        self.assertIsNone(d.reply_body)
        self.assertIn("needs_human", d.actions)

    def test_github_not_treated_as_support(self):
        d = eng.analyze_email(
            subject="Re: [Zion-support/zion-support.github.io] Restore healthcare pages (PR #1)",
            sender="notifications@github.com",
            body="kilo-code-bot left a comment on this pull request ticket. 9 Issues Found.",
        )
        self.assertEqual(d.intent, "github_noise")
        self.assertIn("archive", d.actions)
        self.assertFalse(d.should_reply)

    def test_clara_ticket_ack_is_not_a_lead(self):
        d = eng.analyze_email(
            subject="Solicitação Recebida! Parceria Zion Tech Group — crescimento para Clara",
            sender="meajuda@clara.com.br",
            body="Sua solicitação (1039168) foi recebida, e nosso time já está analisando.",
        )
        self.assertEqual(d.intent, "ticket_auto_ack")
        self.assertFalse(d.should_reply)

    def test_elastic_dd_is_legal_not_sales(self):
        d = eng.analyze_email(
            subject="Re: Elastic Partner DD Questionnaire",
            sender="melissa.garre@elastic.co",
            body="We are resending Elastic's Due Diligence Questionnaire for your review.",
        )
        self.assertEqual(d.intent, "legal_compliance")
        self.assertFalse(d.should_reply)
        self.assertIn("needs_human", d.actions)

    def test_rfq_reply_is_quote_ack_not_discovery_upsell(self):
        d = eng.analyze_email(
            subject="ENC: Solicitação de proposta - Workstations de alto desempenho",
            sender="Paulo <pauloblotto@somaticabrasil.com>",
            body="Segue demanda da FUNCATE para avaliação, solicitação de proposta de workstations.",
        )
        self.assertEqual(d.intent, "pricing_rfq")
        self.assertTrue(d.should_reply)
        self.assertFalse(d.auto_send_allowed)
        self.assertIn("24–48h", d.reply_body)
        self.assertIn("commercial@ziontechgroup.com", d.reply_body)
        self.assertNotIn("Vejo potencial para avançarmos juntos", d.reply_body)
        self.assertNotIn("Discovery (US$99)", d.reply_body)

    def test_meeting_reply_offers_times(self):
        d = eng.analyze_email(
            subject="Re: Discovery next step",
            sender="Carla <carla@kenlo.com.br>",
            body="Thanks, can we talk Thursday?",
        )
        self.assertEqual(d.intent, "meeting_request")
        self.assertEqual(d.label, "inbound_reply")
        self.assertIn("20 min", d.reply_body.lower() + d.reply_body)
        self.assertIn("https://ziontechgroup.com/book/", d.reply_body)

    def test_internal_not_drafted_as_customer(self):
        d = eng.analyze_email(
            subject="Fwd: Solicitação de proposta - Workstations",
            sender="Carlos <carlos@ziontechgroup.com>",
            body="Oi Kleber, segue a proposta pronta já com 35% de margem.",
        )
        self.assertEqual(d.intent, "internal")
        self.assertFalse(d.should_reply)

    def test_bounce_vs_delay(self):
        fail = eng.analyze_email(
            "Delivery Status Notification (Failure)",
            "mailer-daemon@googlemail.com",
            "Address not found",
        )
        delay = eng.analyze_email(
            "Delivery Status Notification (Delay)",
            "mailer-daemon@googlemail.com",
            "Delivery incomplete There was a temporary problem delivering your message.",
        )
        self.assertEqual(fail.intent, "bounce")
        self.assertEqual(delay.intent, "delivery_delay")

    def test_batch_picks_different_actions(self):
        decisions = eng.analyze_batch(eng.DEMO_CASES)
        intents = {d.intent for d in decisions}
        self.assertGreaterEqual(len(intents), 10)
        actions = {d.primary_action for d in decisions}
        self.assertGreaterEqual(len(actions), 6)


class LanguageAndDraftTests(unittest.TestCase):
    def test_generic_draft_keeps_book_and_sair(self):
        body = eng.build_reply_for_intent("partnership", "Ana", "pt")
        self.assertIn("https://ziontechgroup.com/book/", body)
        self.assertIn("SAIR", body)

    def test_lang_pt(self):
        self.assertEqual(eng.detect_lang("Olá, obrigado pelo projeto"), "pt")


if __name__ == "__main__":
    unittest.main()
