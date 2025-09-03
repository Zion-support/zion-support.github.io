import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Brain, Cloud, Layers } from 'lucide-react';

export default function ServicesCatalog() {
  const contact = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    site: 'https://ziontechgroup.com'
  };

  const sections = [
    {
      id: 'micro-saas',
      title: 'Micro SaaS Products',
      icon: Layers,
      items: [
        {
          name: 'Cloud Cost Guard (FinOps Assistant)',
          blurb: 'Automated cloud cost anomaly detection, budget guardrails, and rightsizing recommendations across AWS/Azure/GCP.',
          price: '$299 – $1,499/month',
          eta: '1–2 weeks',
          bullets: [
            'Anomaly detection on daily spend and resources',
            'Idle/overprovisioned resource cleanup suggestions',
            'Forecasting, budgets, and team alerts (Slack/Email)',
            'Executive savings dashboards and benchmarks'
          ],
          link: '/micro-saas'
        },
        {
          name: 'Smart Document Processor',
          blurb: 'AI-powered document extraction, classification, and workflow automation for businesses.',
          price: '$399 – $2,499/month',
          eta: '2–3 weeks',
          bullets: [
            'OCR and intelligent data extraction',
            'Document classification and routing',
            'Workflow automation and approval processes',
            'Integration with existing business systems'
          ],
          link: '/micro-saas'
        },
        {
          name: 'API Rate Limiter & Analytics',
          blurb: 'Intelligent rate limiting, usage analytics, and API monetization for SaaS platforms.',
          price: '$199 – $1,299/month',
          eta: '1–2 weeks',
          bullets: [
            'Dynamic rate limiting based on user tiers',
            'Real-time usage analytics and reporting',
            'API monetization and billing integration',
            'DDoS protection and abuse prevention'
          ],
          link: '/micro-saas'
        },
        {
          name: 'Lead Scoring & Qualification Engine',
          blurb: 'AI-powered lead scoring, qualification workflows, and CRM integration.',
          price: '$299 – $1,999/month',
          eta: '2–4 weeks',
          bullets: [
            'Machine learning-based lead scoring',
            'Automated qualification workflows',
            'CRM integration and data synchronization',
            'Predictive analytics and conversion optimization'
          ],
          link: '/micro-saas'
        }
      ]
    },
    {
      id: 'ai',
      title: 'AI Services & Platforms',
      icon: Brain,
      items: [
        {
          name: 'RAG Platform‑in‑a‑Box',
          blurb: 'End‑to‑end retrieval augmented generation with connectors, governance, analytics, and feedback loops.',
          price: '$4,000 – $18,000/month',
          eta: '4–8 weeks',
          bullets: [
            'Connectors for docs, tickets, CRM, and data lakes',
            'Embedding strategy and vector stores (FAISS/PGVector)',
            'Citations, human feedback loops, analytics',
            'PII scrubbers and policy guardrails'
          ],
          link: '/ai-services'
        },
        {
          name: 'Computer Vision & Image Recognition',
          blurb: 'Object detection, facial recognition, OCR, and visual content analysis.',
          price: '$5,000 – $25,000 setup',
          eta: '6–12 weeks',
          bullets: [
            'Custom object detection and classification',
            'Facial recognition and biometric authentication',
            'OCR and document text extraction',
            'Real-time image processing and analysis'
          ],
          link: '/ai-services'
        },
        {
          name: 'AI-Powered Fraud Detection',
          blurb: 'Real-time fraud scoring, anomaly detection, and risk assessment for transactions.',
          price: '$8,000 – $40,000 setup',
          eta: '8–16 weeks',
          bullets: [
            'Real-time transaction fraud scoring',
            'Behavioral anomaly detection',
            'Machine learning model training and deployment',
            'Risk assessment and decision automation'
          ],
          link: '/ai-services'
        },
        {
          name: 'Voice AI & Speech Recognition',
          blurb: 'Voice-to-text, speech synthesis, voice biometrics, and conversational AI.',
          price: '$6,000 – $30,000 setup',
          eta: '6–10 weeks',
          bullets: [
            'High-accuracy speech-to-text conversion',
            'Natural language understanding and processing',
            'Voice biometric authentication',
            'Conversational AI and chatbot integration'
          ],
          link: '/ai-services'
        }
      ]
    },
    {
      id: 'it',
      title: 'IT & Cloud Services',
      icon: Cloud,
      items: [
        {
          name: 'Cloud Landing Zone + Migration',
          blurb: 'Secure multi‑account AWS/Azure/GCP landing zone, IaC, guardrails, and app migration.',
          price: '$8,000 – $45,000 fixed or $150 – $220/hr',
          eta: '3–10 weeks',
          bullets: [
            'Networking, IAM, SSO, logging, backups',
            'Foundational IaC (Terraform/Pulumi)',
            'VPC design, cost and security guardrails',
            'Application assessment and phased migration'
          ],
          link: '/it-services'
        },
        {
          name: 'Enterprise Architecture Consulting',
          blurb: 'System design, technology stack selection, and scalability planning.',
          price: '$150 – $300/hour or $15,000 – $75,000/project',
          eta: '2–8 weeks',
          bullets: [
            'Technology stack evaluation and selection',
            'System architecture design and documentation',
            'Scalability and performance planning',
            'Integration strategy and roadmap development'
          ],
          link: '/it-services'
        },
        {
          name: 'API Development & Integration',
          blurb: 'REST/GraphQL APIs, microservices, and third-party integrations.',
          price: '$120 – $280/hour or $10,000 – $50,000/project',
          eta: '3–12 weeks',
          bullets: [
            'RESTful and GraphQL API development',
            'Microservices architecture implementation',
            'Third-party service integration',
            'API documentation and testing frameworks'
          ],
          link: '/it-services'
        },
        {
          name: 'Blockchain & Web3 Development',
          blurb: 'Smart contracts, DeFi protocols, and blockchain integration.',
          price: '$150 – $350/hour or $30,000 – $200,000/project',
          eta: '8–24 weeks',
          bullets: [
            'Smart contract development and auditing',
            'DeFi protocol design and implementation',
            'Blockchain integration and dApp development',
            'Tokenomics and governance system design'
          ],
          link: '/it-services'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <Head>
        <title>Services Catalog — Zion Tech Group</title>
        <meta name="description" content="Expanded catalog of Micro SaaS products, AI platforms, and IT services with transparent pricing and timelines." />
        <link rel="canonical" href={`${contact.site}/services-catalog`} />
      </Head>

      <header className="py-20 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Services Catalog</h1>
        <p className="mt-4 text-slate-300 max-w-3xl mx-auto">
          Production‑ready Micro SaaS, AI, and Cloud solutions. Transparent pricing, clear timelines, and measurable outcomes.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href={`tel:${contact.phone.replace(/[^\d+]/g,'')}`} className="px-5 py-2 rounded bg-blue-600 hover:bg-blue-700">Call {contact.phone}</a>
          <a href={`mailto:${contact.email}`} className="px-5 py-2 rounded bg-purple-600 hover:bg-purple-700">Email {contact.email}</a>
          <Link href="/contact" className="px-5 py-2 rounded bg-slate-800 hover:bg-slate-700 border border-white/10">Contact Form</Link>
        </div>
        <div className="mt-2 text-slate-400 text-sm">{contact.address}</div>
      </header>

      <main className="max-w-6xl mx-auto px-4 pb-24 space-y-16">
        {sections.map(section => (
          <section key={section.id} id={section.id}>
            <div className="flex items-center gap-3 mb-6">
              <section.icon className="w-6 h-6 text-blue-400" />
              <h2 className="text-2xl md:text-3xl font-bold">{section.title}</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {section.items.map(item => (
                <div key={item.name} className="rounded-xl border border-white/10 bg-slate-900/60 p-6 hover:border-blue-500/40 transition-colors">
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <p className="mt-2 text-slate-300">{item.blurb}</p>
                  <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
                    <span className="px-2.5 py-1 rounded bg-slate-800/70 border border-white/10">{item.price}</span>
                    <span className="px-2.5 py-1 rounded bg-slate-800/70 border border-white/10">Lead time: {item.eta}</span>
                  </div>
                  <ul className="mt-4 space-y-2 text-slate-300 list-disc list-inside">
                    {item.bullets.map(point => (<li key={point}>{point}</li>))}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <Link href={item.link} className="px-3 py-1.5 rounded bg-blue-600 hover:bg-blue-700 text-sm">Learn more</Link>
                    <Link href="/contact" className="px-3 py-1.5 rounded bg-slate-800 hover:bg-slate-700 border border-white/10 text-sm">Request quote</Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

        <section className="pt-4">
          <h2 className="text-xl font-semibold mb-2">Need something custom?</h2>
          <p className="text-slate-300">We scope custom builds with fixed‑bid or time‑and‑materials. Typical rates: $120 – $220/hr depending on skillset and urgency.</p>
          <div className="mt-3">
            <a href={`${contact.site}/contact`} className="underline">Discuss your project</a>
          </div>
        </section>
      </main>
    </div>
  );
}