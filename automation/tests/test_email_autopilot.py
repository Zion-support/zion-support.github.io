#!/usr/bin/env python3
"""Unit tests for email autopilot classification — no Gmail / gog required."""

from __future__ import annotations

import sys
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
sys.path.insert(0, str(ROOT / "automation" / "scripts"))

import email_autopilot as ea  # noqa: E402


class DomainAndSkipTests(unittest.TestCase):
    def test_github_notifications_are_noise(self):
        contact = "notifications@github.com"
        self.assertTrue(ea.domain_matches(contact, ea.SKIP_DOMAINS))
        noise, _ = ea.is_noise_sender(contact, "GitHub <notifications@github.com>")
        self.assertTrue(noise)

    def test_does_not_false_positive_similar_domain(self):
        self.assertFalse(ea.domain_matches("ceo@notgithub.com", ea.SKIP_DOMAINS))
        self.assertFalse(ea.domain_matches("alerts@evilegithub.com", ea.SKIP_DOMAINS))

    def test_xai_quiet_report(self):
        self.assertTrue(
            ea.is_quiet_automation_report(
                "Quiet inbox, no replies needed",
                "(a) SENT: none (0/5)\nSkipped: Samsung promo",
                "noreply@x.ai",
            )
        )
        self.assertFalse(
            ea.is_quiet_automation_report(
                "Elastic DD link ready",
                "(a) SENT (1/5) Re: Elastic Partner DD",
                "noreply@x.ai",
            )
        )


class ClassifyTests(unittest.TestCase):
    def test_bounce(self):
        c = ea.classify_message(
            "1",
            "Delivery Status Notification (Failure)",
            "mailer-daemon@googlemail.com",
            "Message not delivered to contact@runpod.com",
        )
        self.assertEqual(c["label"], "bounce")

    def test_suppress(self):
        c = ea.classify_message("1", "Please stop", "Ada <ada@acme.com>", "unsubscribe me")
        self.assertEqual(c["label"], "suppress")
        c = ea.classify_message("1", "Please stop", "Ada <ada@acme.com>", "unsubscribe me")
        self.assertEqual(c["label"], "suppress")

    def test_quiet_grok_archived(self):
        c = ea.classify_message(
            "1",
            "Quiet day — no client replies",
            "noreply@x.ai",
            "Zion Client Email Agent is ready\n(a) SENT: none (0/5)",
        )
        self.assertEqual(c["label"], "automation_quiet")
        self.assertIn("archive", c["actions"])

    def test_grok_sent_is_not_archived_as_quiet(self):
        c = ea.classify_message(
            "1",
            "Elastic DD link ready",
            "noreply@x.ai",
            "(a) SENT (1/5) Re: Elastic Partner DD → melissa@elastic.co",
        )
        self.assertEqual(c["label"], "automation_action")

    def test_samsung_promo_noise(self):
        c = ea.classify_message(
            "1",
            "Você tem mais de R$ 4.000 OFF esperando",
            "samsunglatam@br.email.samsung.com",
            "Não perca as ofertas da Tech Week",
        )
        self.assertEqual(c["label"], "noise")

    def test_stripe_security_needs_human(self):
        c = ea.classify_message(
            "1",
            "Um dispositivo não reconhecido entrou na sua conta Stripe",
            "notifications@stripe.com",
            "Se você fez isso, não é preciso fazer nada.",
        )
        self.assertEqual(c["label"], "security")
        self.assertIn("needs_human", c["actions"])

    def test_nibo_accounting(self):
        c = ea.classify_message(
            "1",
            "Novos documentos para Kleber",
            "obrigacoes@nibo.com.br",
            "Existem novos documentos da empresa ZION",
        )
        self.assertEqual(c["label"], "accounting")

    def test_voicemail(self):
        c = ea.classify_message(
            "1",
            "Correio de voz de (13) 98137-0461",
            "noreply@voicemail.goto.com",
            "Nova mensagem do correio de voz",
        )
        self.assertEqual(c["label"], "voicemail")

    def test_vendor_wts(self):
        c = ea.classify_message(
            "1",
            "WTS: HP EliteBook 840G8",
            "p.jain@pncalifornia.com",
            "We have the following laptops to offer",
        )
        self.assertIn(c["label"], {"vendor_offer", "noise"})

    def test_rfq_portuguese(self):
        c = ea.classify_message(
            "1",
            "Pedido de orçamento",
            "Ana Costa <ana@industria.com.br>",
            "Podem enviar um orçamento de automação para a planta?",
        )
        self.assertEqual(c["label"], "rfq")
        self.assertIn("draft_reply", c["actions"])

    def test_partnership(self):
        c = ea.classify_message(
            "1",
            "Parceria comercial",
            "João <joao@msp.com.br>",
            "Gostaríamos de discutir uma parceria em automação.",
        )
        self.assertEqual(c["label"], "lead_opportunity")

    def test_github_not_support(self):
        c = ea.classify_message(
            "1",
            "Re: [Zion-support] Restore healthcare pages",
            "notifications@github.com",
            "kilo-code-bot left a comment on this pull request ticket",
        )
        self.assertEqual(c["label"], "noise")

    def test_inbound_reply(self):
        c = ea.classify_message(
            "1",
            "Re: Discovery next step",
            "Carla <carla@kenlo.com.br>",
            "Thanks, can we talk Thursday?",
        )
        self.assertEqual(c["label"], "inbound_reply")

    def test_clara_ticket_ack_is_inbound_reply(self):
        c = ea.classify_message(
            "1a08d03211778232",
            "Solicitação Recebida! Parceria Zion Tech Group — crescimento para Clara",
            "Clara <meajuda@clara.com.br>",
            "Sua solicitação (1039168) foi recebida, e nosso time já está analisando.",
        )
        self.assertEqual(c["label"], "inbound_reply")
        self.assertIn("draft_reply", c["actions"])

    def test_discovery_paid_calendar_is_success_win_not_reply(self):
        c = ea.classify_message(
            "cal1",
            "New Event: AI/IT Discovery — PAGO $99",
            "Calendly <calendar-notification@calendly.com>",
            "AI/IT Discovery $99 paid. Kleber Garcia Alcatrão and Fergus Martin.",
        )
        self.assertEqual(c["label"], "success_win")
        self.assertIn("store_history", c["actions"])
        self.assertNotIn("draft_reply", c["actions"])

    def test_human_accepted_meeting_is_success_win_with_followup(self):
        c = ea.classify_message(
            "1a08696143b434b8",
            "Accepted: Fergus Martin and Kleber Garcia Alcatrão",
            "Fergus Martin <fmartin@ilha.capital>",
            "Fergus Martin has accepted this invitation.",
        )
        self.assertEqual(c["label"], "success_win")
        self.assertIn("draft_reply", c["actions"])
        self.assertIn("store_history", c["actions"])

    def test_google_calendar_notification_without_discovery_is_noise(self):
        c = ea.classify_message(
            "gcal",
            "Accepted: Weekly standup",
            "Calendar <calendar-notification@google.com>",
            "This is a calendar notification.",
        )
        self.assertEqual(c["label"], "noise")

    def test_procurement_digest(self):
        c = ea.classify_message(
            "lic1",
            "Alerta de Licitações — novas oportunidades",
            "Portal <alertas@portaldecompraspublicas.com.br>",
            "Novas licitações de TI na sua região.",
        )
        self.assertEqual(c["label"], "procurement_digest")
        self.assertIn("needs_human", c["actions"])
        self.assertNotIn("draft_reply", c["actions"])

    def test_github_re_subject_is_still_noise_not_inbound(self):
        c = ea.classify_message(
            "gh2",
            "Re: [Zion-support/zion-support.github.io] Catalog watchdog",
            "kilo-code-bot <notifications@github.com>",
            "You were mentioned in a pull request ticket.",
        )
        self.assertEqual(c["label"], "noise")


class DraftAndLangTests(unittest.TestCase):
    def test_lang_pt(self):
        self.assertEqual(ea.detect_lang("Olá, obrigado pelo projeto"), "pt")

    def test_lang_es(self):
        self.assertEqual(ea.detect_lang("Gracias, hay una oportunidad de proyecto"), "es")

    def test_lang_en(self):
        self.assertEqual(ea.detect_lang("Thanks for the proposal"), "en")

    def test_draft_points_to_book_not_broken_discovery(self):
        body = ea.build_reply_draft("Ana", "Parceria", "pt")
        self.assertIn("https://ziontechgroup.com/book/", body)
        self.assertIn("SAIR", body)

    def test_extract_name_from_header(self):
        self.assertEqual(ea.extract_name("Ana Costa <ana@industria.com.br>"), "Ana")
        self.assertEqual(ea.extract_name("ana.costa@industria.com.br"), "Ana Costa")

    def test_deal_followup_clara_and_fergus_keep_book_cta(self):
        clara = ea.build_deal_followup({
            "name": "Clara",
            "kind": "partnership_ticket",
            "lang": "pt",
        })
        self.assertIn("https://ziontechgroup.com/book/", clara)
        self.assertIn("SAIR", clara)
        fergus = ea.build_deal_followup({
            "name": "Fergus",
            "kind": "discovery_booked",
            "lang": "en",
        })
        self.assertIn("https://ziontechgroup.com/book/", fergus)
        self.assertIn("Discovery", fergus)


class SendGateTests(unittest.TestCase):
    def test_rejects_noise_and_security(self):
        self.assertFalse(ea.can_send_to("notifications@github.com"))
        self.assertFalse(ea.can_send_to("noreply@x.ai"))
        self.assertFalse(ea.can_send_to("notifications@stripe.com"))
        self.assertFalse(ea.can_send_to("calendar-notification@google.com"))

    def test_allows_real_humans(self):
        self.assertTrue(ea.can_send_to("ana@industria.com.br"))
        self.assertTrue(ea.can_send_to("fmartin@ilha.capital"))
        self.assertTrue(ea.can_send_to("meajuda@clara.com.br"))

    def test_max_sends_default(self):
        self.assertGreaterEqual(ea.MAX_SENDS, 1)
        self.assertLessEqual(ea.MAX_SENDS, 5)


if __name__ == "__main__":
    unittest.main()
