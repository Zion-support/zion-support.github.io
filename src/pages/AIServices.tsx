import React from 'react';
import { SEO } from '@/components/SEO';
import { Link } from 'react-router-dom';
import { Brain, Zap, BarChart3, LineChart, Activity, Search, Bot, Wand2 } from 'lucide-react';

export default function AIServices() {
  const plans = [
    {
      name: 'Starter AI',
      price: '$1,500/mo',
      ideal: 'Startups and SMBs',
      features: [
        'AI chat assistant setup (Zendesk/Intercom integration)',
        'Basic analytics dashboard (Mixpanel/GA4)',
        'Monthly model updates and prompt tuning',
        'Up to 5,000 AI messages/mo',
      ],
      cta: '/contact',
    },
    {
      name: 'Growth AI',
      price: '$4,000/mo',
      ideal: 'Growing teams',
      features: [
        'Custom retrieval-augmented generation (RAG)',
        'Fine-tuned models for your domain',
        'A/B testing for prompts and flows',
        'Up to 50,000 AI messages/mo',
      ],
      cta: '/contact',
      highlighted: true,
    },
    {
      name: 'Enterprise AI',
      price: 'Custom',
      ideal: 'Large orgs and regulated industries',
      features: [
        'SLA, SSO, data residency, compliance',
        'On-prem or VPC deployment options',
        'MLOps pipelines and monitoring',
        'Multi-LLM safety and guardrails',
      ],
      cta: '/contact',
    },
  ];

  const links = [
    { name: 'Zion Tech Group', url: 'https://ziontechgroup.com' },
    { name: 'AI Safety Spec', url: 'https://ziontechgroup.com/solutions' },
    { name: 'Case Studies', url: 'https://ziontechgroup.com/case-studies' },
  ];

  return (
    <div className="min-h-screen bg-futuristic">
      <SEO 
        title="AI Services - Zion Tech Group"
        description="Applied AI services: chat assistants, RAG, analytics, fine-tuning, MLOps, safety guardrails."
      />

      <section className="relative pt-28 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">
              AI Services to Ship Production Value Fast
            </h1>
            <p className="mt-4 text-slate-300 max-w-3xl mx-auto">
              We deploy measurable AI outcomes: conversion lift, faster support, lower costs. Built with robust
              MLOps and safety-by-default.
            </p>
            <div className="mt-8 flex items-center justify-center gap-3">
              <Link to="/contact" className="btn-futuristic">Get Proposal</Link>
              <Link to="/case-studies" className="btn-neon">View Case Studies</Link>
            </div>
          </div>

          {/* Capabilities */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Brain, title: 'Chat & Agents', desc: 'Multilingual, tool-using assistants with guardrails.' },
              { icon: Search, title: 'RAG & Search', desc: 'Accurate answers grounded in your content.' },
              { icon: BarChart3, title: 'Analytics & BI', desc: 'AI insights embedded into dashboards and apps.' },
              { icon: Activity, title: 'Automation', desc: 'AI workflows to triage, route, and summarize.' },
              { icon: Wand2, title: 'Fine-tuning', desc: 'Domain-adapted models for tone and accuracy.' },
              { icon: Bot, title: 'Safety & QA', desc: 'Hallucination, PII, toxicity filters and audits.' },
            ].map((c) => (
              <div key={c.title} className="card-futuristic">
                <div className="flex items-center gap-3">
                  <c.icon className="w-6 h-6 text-cyan-400" />
                  <h3 className="text-white font-semibold">{c.title}</h3>
                </div>
                <p className="mt-2 text-slate-300">{c.desc}</p>
              </div>
            ))}
          </div>

          {/* Pricing */}
          <div className="mt-20">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center">Transparent Pricing</h2>
            <p className="text-slate-300 text-center mt-2">Market-aligned, value-focused. Cancel anytime.</p>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              {plans.map((p) => (
                <div key={p.name} className={`card-futuristic ${p.highlighted ? 'ring-2 ring-cyan-400' : ''}`}>
                  <div className="flex items-center justify-between">
                    <h3 className="text-white font-semibold">{p.name}</h3>
                    <Zap className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div className="mt-2 text-3xl font-extrabold text-white">{p.price}</div>
                  <div className="text-slate-400 text-sm">{p.ideal}</div>
                  <ul className="mt-4 space-y-2 text-slate-300">
                    {p.features.map((f) => (
                      <li key={f} className="flex gap-2">
                        <LineChart className="w-4 h-4 text-cyan-400 mt-1" /> {f}
                      </li>
                    ))}
                  </ul>
                  <Link to={p.cta} className="mt-6 inline-flex btn-futuristic">Talk to Sales</Link>
                </div>
              ))}
            </div>
          </div>

          {/* Helpful links */}
          <div className="mt-16 text-center">
            <div className="text-slate-400 text-sm">Learn more:</div>
            <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
              {links.map((l) => (
                <a key={l.name} href={l.url} className="text-cyan-400 hover:text-cyan-300" target="_blank" rel="noreferrer">
                  {l.name}
                </a>
              ))}
            </div>
            <div className="mt-4 text-slate-400 text-xs">Published at https://ziontechgroup.com</div>
          </div>
        </div>
      </section>
    </div>
  );
}

