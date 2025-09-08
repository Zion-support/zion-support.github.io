import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Brain, Cloud, Layers, Shield, Sparkles, BarChart3, Zap, Database, Bot, Search, Workflow, Globe } from 'lucide-react'

export default function ServicesCatalog() {
  const contact = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    site: 'https://ziontechgroup.com'
  }

  const sections: Array<{
    id: string
    title: string
    icon: any
    items: Array<{
      name: string
      blurb: string
      price: string
      eta: string
      bullets: string[]
      link: string
      refs?: Array<{ label: string; href: string }>
    }>
  }> = [
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
          link: '/services/micro-saas',
          refs: [
            { label: 'AWS Cost Explorer', href: 'https://aws.amazon.com/aws-cost-management/aws-cost-explorer/' },
            { label: 'FinOps Foundation', href: 'https://www.finops.org/' }
          ]
        },
        {
          name: 'Event Management Dashboard',
          blurb: 'Comprehensive event management platform with ticket sales, attendee tracking, scheduling, and real-time analytics.',
          price: '$199 – $999/month',
          eta: '2–3 weeks',
          bullets: [
            'Ticket management and sales automation',
            'Attendee tracking and check-in systems',
            'Event scheduling and calendar integration',
            'Real-time analytics and reporting dashboard'
          ],
          link: '/services/micro-saas'
        },
        {
          name: 'Customer Support & Helpdesk Platform',
          blurb: 'Complete customer support solution with ticket management, knowledge base, live chat, and AI-powered chatbots.',
          price: '$99 – $599/month',
          eta: '2–4 weeks',
          bullets: [
            'Multi-channel ticket management system',
            'Knowledge base and FAQ automation',
            'Live chat integration and support',
            'AI-powered chatbots for instant responses'
          ],
          link: '/services/micro-saas'
        },
        {
          name: 'Project Management & Collaboration',
          blurb: 'Streamlined project management tool with task tracking, team collaboration, time tracking, and resource management.',
          price: '$79 – $399/month',
          eta: '2–3 weeks',
          bullets: [
            'Task management and workflow automation',
            'Team collaboration and communication tools',
            'Time tracking and productivity analytics',
            'Resource planning and allocation'
          ],
          link: '/services/micro-saas'
        },
        {
          name: 'Invoice & Billing Management',
          blurb: 'Automated invoicing and billing system with payment processing, expense tracking, and financial reporting.',
          price: '$49 – $299/month',
          eta: '1–2 weeks',
          bullets: [
            'Automated invoice generation and sending',
            'Payment processing and tracking',
            'Expense tracking and categorization',
            'Financial reporting and analytics'
          ],
          link: '/services/micro-saas'
        },
        {
          name: 'Headless Commerce Accelerator',
          blurb: 'Composable storefront with payments, CMS, analytics and SEO built-in. Optimized for conversion and scale.',
          price: '$2,500 – $12,000/month',
          eta: '3–6 weeks',
          bullets: [
            'Next.js storefront with edge caching',
            'Stripe payments, tax & shipping add‑ons',
            'CMS-driven content and merchandising',
            'A/B testing and conversion analytics'
          ],
          link: '/micro-saas',
          refs: [
            { label: 'Stripe', href: 'https://stripe.com' },
            { label: 'Vercel Edge', href: 'https://vercel.com/features/edge-functions' }
          ]
        },
        {
          name: 'Compliance Monitor (SOC2/GDPR/ISO)',
          blurb: 'Continuous control monitoring, evidence collection, and audit‑ready reporting for modern teams.',
          price: '$499 – $2,999/month',
          eta: '2–4 weeks',
          bullets: [
            'Policy templates and automated control checks',
            'Evidence capture from cloud and SaaS systems',
            'Risk register with workflows and approvals',
            'Audit‑ready reports and reminders'
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
          link: '/ai-services',
          refs: [
            { label: 'pgvector', href: 'https://github.com/pgvector/pgvector' }
          ]
        },
        {
          name: 'MLOps as a Service',
          blurb: 'Managed pipelines for training, evaluation, deployment, and monitoring with cost/perf visibility.',
          price: '$3,500 – $16,000/month',
          eta: '4–8 weeks',
          bullets: [
            'Feature stores, model registry, canary/AB deploys',
            'Data drift and performance monitoring',
            'Model cards, lineage, reproducibility',
            'Compliance‑ready audit trails'
          ],
          link: '/ai-services'
        },
        {
          name: 'AI Support Copilot',
          blurb: 'Context‑aware agent for tier‑1/2 support with safe actions and analytics.',
          price: '$1,200 – $8,000/month',
          eta: '2–5 weeks',
          bullets: [
            'Semantic search across knowledge bases',
            'Suggested replies, macros, and safe actions',
            'Quality, deflection, CSAT analytics',
            'Works with Zendesk, Intercom, Freshdesk'
          ],
          link: '/services/ai-services'
        },
        {
          name: 'AI-Powered Email Responder',
          blurb: 'Intelligent email automation that reads, categorizes, and responds to emails with human-like accuracy.',
          price: '$1,500 – $8,000 setup, $0.05 – $0.15/email',
          eta: '2–4 weeks',
          bullets: [
            'Smart email classification and priority flagging',
            'Auto-response generation with context awareness',
            'Sentiment analysis and escalation triggers',
            'Integration with existing email systems'
          ],
          link: '/services/ai-services'
        },
        {
          name: 'AI Document Processing & OCR',
          blurb: 'Advanced document digitization with intelligent data extraction, form processing, and workflow automation.',
          price: '$3,000 – $15,000 setup, $0.02 – $0.10/page',
          eta: '3–6 weeks',
          bullets: [
            'OCR and text extraction from various formats',
            'Intelligent form processing and data validation',
            'Workflow automation and integration',
            'Quality assurance and error detection'
          ],
          link: '/services/ai-services'
        },
        {
          name: 'AI Voice Assistant & IVR',
          blurb: 'Intelligent voice assistants and interactive voice response systems with natural language understanding.',
          price: '$5,000 – $25,000 setup, $0.10 – $0.50/call',
          eta: '4–8 weeks',
          bullets: [
            'Natural language processing and understanding',
            'Multi-language support and voice analytics',
            'CRM integration and call routing',
            'Real-time transcription and sentiment analysis'
          ],
          link: '/services/ai-services'
        },
        {
          name: 'AI Fraud Detection & Security',
          blurb: 'Advanced fraud detection systems using machine learning to identify suspicious activities and prevent losses.',
          price: '$8,000 – $40,000 setup, $0.01 – $0.05/transaction',
          eta: '6–12 weeks',
          bullets: [
            'Real-time transaction monitoring and analysis',
            'Pattern recognition and anomaly detection',
            'Risk scoring and alert management',
            'Machine learning model training and optimization'
          ],
          link: '/services/ai-services'
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
          name: 'DevSecOps Enablement',
          blurb: 'Build and release pipelines, policy controls, and runtime security with clear SLAs.',
          price: '$5,000 – $28,000 fixed or $140 – $200/hr',
          eta: '3–8 weeks',
          bullets: [
            'CI/CD with GitHub Actions/GitLab',
            'SBOM, SCA, SAST/DAST integration',
            'Kubernetes security baselines',
            'Observability (logs, metrics, traces)'
          ],
          link: '/it-services'
        },
        {
          name: 'Data Platform Quickstart',
          blurb: 'Modern data stack with ingestion, warehousing, dashboards, and governance.',
          price: '$6,000 – $35,000 fixed',
          eta: '4–9 weeks',
          bullets: [
            'Airbyte/Fivetran ingestion and dbt transformation',
            'Snowflake/BigQuery/Redshift warehousing',
            'BI with Looker/Metabase',
            'Data catalog and access governance'
          ],
          link: '/services/it-services'
        },
        {
          name: 'Cloud Architecture & Design',
          blurb: 'Expert cloud architecture design and implementation for scalable, secure, and cost-effective solutions.',
          price: '$8,000 – $50,000 project',
          eta: '4–8 weeks',
          bullets: [
            'Cloud strategy and architecture design',
            'Cost optimization and security implementation',
            'Scalability and performance planning',
            'Migration strategy and implementation'
          ],
          link: '/services/it-services'
        },
        {
          name: 'Disaster Recovery & Backup',
          blurb: 'Comprehensive disaster recovery and backup solutions to protect your data and ensure business continuity.',
          price: '$5,000 – $25,000 setup, $500 – $2,000/month',
          eta: '2–6 weeks',
          bullets: [
            'Backup strategy and implementation',
            'Disaster recovery planning and testing',
            'Data replication and synchronization',
            'Recovery time and point objectives'
          ],
          link: '/services/it-services'
        },
        {
          name: 'API Development & Integration',
          blurb: 'Custom API development and third-party integrations to connect your systems and streamline operations.',
          price: '$3,000 – $20,000 project',
          eta: '2–6 weeks',
          bullets: [
            'RESTful and GraphQL API development',
            'Third-party system integrations',
            'API documentation and testing',
            'Performance optimization and monitoring'
          ],
          link: '/services/it-services'
        },
        {
          name: 'Mobile App Development',
          blurb: 'Native and cross-platform mobile application development for iOS and Android with modern frameworks.',
          price: '$10,000 – $100,000 project',
          eta: '8–16 weeks',
          bullets: [
            'Native iOS and Android development',
            'Cross-platform React Native/Flutter apps',
            'UI/UX design and user experience optimization',
            'App store deployment and maintenance'
          ],
          link: '/services/it-services'
        },
        {
          name: 'Web Application Development',
          blurb: 'Custom web application development with modern frameworks, responsive design, and scalable architecture.',
          price: '$8,000 – $80,000 project',
          eta: '6–14 weeks',
          bullets: [
            'Custom web application development',
            'Responsive design and mobile optimization',
            'Scalable architecture and performance optimization',
            'Modern frameworks and best practices'
          ],
          link: '/services/it-services'
        }
      ]
    }
  ]

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
                  {item.refs && item.refs.length > 0 && (
                    <div className="mt-4 text-xs text-slate-400">
                      <div className="mb-1">References:</div>
                      <ul className="list-disc list-inside space-y-1">
                        {item.refs.map(r => (
                          <li key={r.href}><a className="underline hover:text-slate-200" href={r.href} target="_blank" rel="noopener noreferrer">{r.label}</a></li>
                        ))}
                      </ul>
                    </div>
                  )}
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
  )
}

