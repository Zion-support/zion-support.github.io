import React from 'react';
import { SEO } from '@/components/SEO';
import { Link } from 'react-router-dom';
import { Brain, Shield, LineChart, Bot, Database, Workflow } from 'lucide-react';

export default function AIServices() {
  const offerings = [
    {
      icon: Brain,
      title: 'AI Strategy & Roadmapping',
      desc: 'Define vision, use-cases, governance, data readiness, and a pragmatic 90-day plan.',
      price: 'from $8,000 engagement',
      link: '/services/ai-business-intelligence'
    },
    {
      icon: LineChart,
      title: 'Predictive Analytics & BI',
      desc: 'Time-series forecasting, churn prediction, and embedded analytics dashboards.',
      price: 'from $3,500/mo + setup',
      link: '/services/data-analytics'
    },
    {
      icon: Bot,
      title: 'LLM Assistants & RAG',
      desc: 'Private copilots with Retrieval-Augmented Generation, secure vector stores, and audit logs.',
      price: 'from $2,500/mo + usage',
      link: '/services/llm-content-studio'
    },
    {
      icon: Shield,
      title: 'AI Compliance & Risk',
      desc: 'Model risk, bias detection, red-teaming, and policy workflows for SOC2/ISO readiness.',
      price: 'from $6,000 engagement',
      link: '/services/ai-compliance-copilot'
    },
    {
      icon: Database,
      title: 'Data Engineering & MLOps',
      desc: 'Pipelines, feature stores, CI/CD for ML, monitoring, and drift detection.',
      price: 'from $5,000/mo',
      link: '/services/cloud-devops'
    },
    {
      icon: Workflow,
      title: 'Workflow Orchestration',
      desc: 'Automate human-in-the-loop processes with guardrails, approvals, and traceability.',
      price: 'from $2,000/mo',
      link: '/services/ai-workflow-orchestrator'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <SEO
        title="AI Services – Zion Tech Group"
        description="Enterprise-grade AI strategy, copilots, analytics, governance, and MLOps."
        canonical="https://ziontechgroup.com/ai-services"
      />

      <section className="relative py-20 px-6 md:px-10 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">AI Services</h1>
        <p className="text-zinc-300 text-lg md:text-xl max-w-3xl">
          We help teams ship responsible, reliable AI—fast. From roadmap to production,
          we bring strong data foundations, governance, and measurable business value.
        </p>
        <div className="mt-6 text-zinc-400 text-sm">
          Contact: <a className="underline hover:text-cyan-400" href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a> ·
          <a className="underline hover:text-cyan-400 ml-2" href="tel:+13024640950">+1 302 464 0950</a>
        </div>
      </section>

      <section className="px-6 md:px-10 max-w-6xl mx-auto pb-20 grid gap-6 md:grid-cols-2">
        {offerings.map((o) => (
          <Link key={o.title} to={o.link} className="group rounded-xl border border-slate-800 bg-slate-900/40 p-6 hover:border-cyan-500/40 transition-all">
            <div className="flex items-start gap-4">
              <o.icon className="w-8 h-8 text-cyan-400" />
              <div>
                <h3 className="text-xl font-semibold mb-1">{o.title}</h3>
                <p className="text-zinc-400 mb-2">{o.desc}</p>
                <div className="text-sm text-zinc-300">{o.price}</div>
              </div>
            </div>
          </Link>
        ))}
      </section>

      <section className="px-6 md:px-10 max-w-6xl mx-auto pb-24">
        <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6">
          <h2 className="text-2xl font-bold mb-2">Average Market Prices</h2>
          <ul className="list-disc pl-5 text-zinc-300 space-y-1">
            <li>Custom LLM assistant (SMB): $2k–$6k/mo plus usage</li>
            <li>BI dashboards and forecasting: $3.5k–$10k/mo</li>
            <li>AI strategy and governance: $8k–$30k engagement</li>
          </ul>
          <p className="text-zinc-400 mt-3 text-sm">Pricing varies by scope, users, and compliance needs.</p>
        </div>
      </section>
    </div>
  );
}

