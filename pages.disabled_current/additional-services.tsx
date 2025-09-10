import React from "react";
import Head from "next/head";
import Link from "next/link";
import {
  Brain,
  Code,
  Cloud,
  Shield,
  Network,
  Server,
  BarChart3,
  Settings,
  Zap,
  Monitor,
  Search,
  MessageSquare,
  CheckCircle,
  ArrowRight,
  DollarSign
} from "lucide-react";
import PageTransition from "../src/components/PageTransition";
export default function AdditionalServices() {
  const title = "Expanded Services Catalog — Zion Tech Group";
  const description = "New micro SaaS, IT, and AI solutions added to our production-ready catalog with transparent pricing and fast delivery.";
  const sections = [
    {
      id: "micro-saas",
      title: "Micro SaaS — New Products",
      icon: Code,
      color: "orange",
      items: [
        {
          name: "Cloud Cost Guard (FinOps Assistant)",
          blurb: "Automated cloud cost anomaly detection, budget alerts, rightsizing, and savings recommendations.",
          price: "$299 - $1,499/month",
          eta: "1-2 weeks",
          bullets: [
            "Anomaly detection across AWS/Azure/GCP bills",
            "Automated rightsizing and idle resource cleanup",
            "Forecasting and budget guardrails with alerts",
            "Exec-ready savings reports and benchmarks"
          ],
          link: "/micro-saas"
        },
        {
          name: "LLM Evaluation & Safety Suite",
          blurb: "Red-teaming, prompt evaluation, and policy guardrails for safer generative AI deployments.",
          price: "$799 - $3,500/month",
          eta: "2-3 weeks",
          bullets: [
            "Safety/quality test harness, bias & toxicity checks",
            "Prompt injection, jailbreak, and hallucination tests",
            "Guardrail policies and observability dashboards",
            "CI integration for pre-release gating"
          ],
          link: "/ai-services"
        },
        {
          name: "Headless Commerce Accelerator",
          blurb: "Composable storefront, payments, and catalog with analytics and SEO built-in.",
          price: "$2,500 - $12,000/month",
          eta: "3-6 weeks",
          bullets: [
            "Next.js storefront with edge caching",
            "Stripe/Adyen payments, tax & shipping add-ons",
            "CMS-driven content and merchandising",
            "A/B testing and conversion analytics"
          ],
          link: "/micro-saas"
        },
        {
          name: "AI Localization & Multilingual SEO",
          blurb: "Translate, localize, and optimize content for global audiences with workflows.",
          price: "$399 - $1,999/month",
          eta: "2-4 weeks",
          bullets: [
            "Neural translation with tone and glossary control",
            "Hreflang, sitemaps, and geo-targeting automation",
            "Editorial approval flows and QA checks",
            "Market-specific keyword research"
          ],
          link: "/micro-saas"