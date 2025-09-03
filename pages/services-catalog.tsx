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
          link: '/micro-saas',
          refs: [
            { label: 'AWS Cost Explorer', href: 'https://aws.amazon.com/aws-cost-management/aws-cost-explorer/' },
            { label: 'FinOps Foundation', href: 'https://www.finops.org/' }
          ]
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
        },
        {
          name: 'AI-Powered Email Follow-Up Automation',
          blurb: 'Intelligent email sequences that adapt based on recipient behavior, engagement metrics, and response patterns.',
          price: '$199 – $899/month',
          eta: '1–2 weeks',
          bullets: [
            'Behavioral triggers and smart timing optimization',
            'A/B testing for subject lines and content',
            'Integration with CRM and marketing platforms',
            'Advanced analytics and conversion tracking'
          ],
          link: '/micro-saas',
          refs: [
            { label: 'Mailchimp', href: 'https://mailchimp.com' },
            { label: 'HubSpot', href: 'https://hubspot.com' }
          ]
        },
        {
          name: 'E-Commerce Return Management SaaS',
          blurb: 'Streamlined return processing with automated workflows, fraud detection, and customer satisfaction tracking.',
          price: '$299 – $1,299/month',
          eta: '2–3 weeks',
          bullets: [
            'Automated return authorization and tracking',
            'Fraud detection and prevention algorithms',
            'Customer self-service portal integration',
            'Analytics dashboard for return patterns'
          ],
          link: '/micro-saas'
        },
        {
          name: 'Mobile-First Survey & Feedback Platform',
          blurb: 'Adaptive surveys that personalize based on responses, with real-time analytics and sentiment analysis.',
          price: '$149 – $699/month',
          eta: '1–2 weeks',
          bullets: [
            'Dynamic question branching and personalization',
            'Real-time sentiment analysis and insights',
            'Multi-channel distribution (SMS, email, web)',
            'Advanced reporting and data visualization'
          ],
          link: '/micro-saas'
        },
        {
          name: 'AI Content Creation & SEO Suite',
          blurb: 'End-to-end content generation with SEO optimization, plagiarism detection, and performance tracking.',
          price: '$399 – $1,999/month',
          eta: '2–4 weeks',
          bullets: [
            'AI-powered content generation and optimization',
            'SEO analysis and keyword research automation',
            'Plagiarism detection and originality scoring',
            'Content performance tracking and optimization'
          ],
          link: '/micro-saas',
          refs: [
            { label: 'OpenAI GPT', href: 'https://openai.com' },
            { label: 'Ahrefs', href: 'https://ahrefs.com' }
          ]
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
          link: '/ai-services'
        },
        {
          name: 'AI-Powered Email Responder',
          blurb: 'Intelligent email management that reads, categorizes, and responds to emails with human oversight.',
          price: '$800 – $4,000/month',
          eta: '2–4 weeks',
          bullets: [
            'Automatic email classification and prioritization',
            'Smart response suggestions with tone matching',
            'Integration with existing email systems',
            'Learning from user feedback and corrections'
          ],
          link: '/ai-services',
          refs: [
            { label: 'Gmail API', href: 'https://developers.google.com/gmail' },
            { label: 'Outlook API', href: 'https://docs.microsoft.com/en-us/graph/api/resources/mail-api-overview' }
          ]
        },
        {
          name: 'Computer Vision Analytics Platform',
          blurb: 'Advanced image and video analysis for quality control, security, and business intelligence.',
          price: '$2,500 – $12,000/month',
          eta: '4–8 weeks',
          bullets: [
            'Real-time object detection and classification',
            'Quality control and defect detection',
            'Facial recognition and access control',
            'Custom model training and deployment'
          ],
          link: '/ai-services'
        },
        {
          name: 'AI-Powered Business Intelligence',
          blurb: 'Automated insights generation from business data with natural language querying and predictive analytics.',
          price: '$1,500 – $7,000/month',
          eta: '3–6 weeks',
          bullets: [
            'Natural language data querying',
            'Automated insight generation and alerts',
            'Predictive analytics and forecasting',
            'Interactive dashboards and reports'
          ],
          link: '/ai-services'
        },
        {
          name: 'Voice AI & Speech Processing',
          blurb: 'Advanced speech recognition, synthesis, and voice analytics for customer service and accessibility.',
          price: '$1,000 – $5,000/month',
          eta: '3–5 weeks',
          bullets: [
            'Multi-language speech recognition',
            'Voice synthesis and text-to-speech',
            'Sentiment analysis from voice patterns',
            'Real-time transcription and translation'
          ],
          link: '/ai-services',
          refs: [
            { label: 'Google Speech-to-Text', href: 'https://cloud.google.com/speech-to-text' },
            { label: 'Azure Speech Services', href: 'https://azure.microsoft.com/en-us/services/cognitive-services/speech-services/' }
          ]
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
          link: '/it-services'
        },
        {
          name: 'Zero Trust Security Architecture',
          blurb: 'Comprehensive security framework with identity verification, network segmentation, and continuous monitoring.',
          price: '$8,000 – $40,000 fixed or $160 – $220/hr',
          eta: '4–10 weeks',
          bullets: [
            'Identity and access management (IAM) implementation',
            'Network micro-segmentation and policy enforcement',
            'Continuous security monitoring and threat detection',
            'Security awareness training and incident response'
          ],
          link: '/it-services',
          refs: [
            { label: 'Okta', href: 'https://okta.com' },
            { label: 'CrowdStrike', href: 'https://crowdstrike.com' }
          ]
        },
        {
          name: 'Kubernetes & Container Orchestration',
          blurb: 'Production-ready containerization with auto-scaling, service mesh, and monitoring.',
          price: '$5,000 – $25,000 fixed or $140 – $200/hr',
          eta: '3–8 weeks',
          bullets: [
            'Kubernetes cluster setup and configuration',
            'Service mesh implementation (Istio/Linkerd)',
            'Auto-scaling and load balancing configuration',
            'Monitoring, logging, and observability setup'
          ],
          link: '/it-services'
        },
        {
          name: 'API Gateway & Microservices Architecture',
          blurb: 'Scalable microservices architecture with API management, rate limiting, and security.',
          price: '$4,000 – $20,000 fixed or $130 – $190/hr',
          eta: '3–6 weeks',
          bullets: [
            'API gateway configuration and management',
            'Microservices design and implementation',
            'Rate limiting and traffic management',
            'API documentation and developer portal'
          ],
          link: '/it-services',
          refs: [
            { label: 'Kong', href: 'https://konghq.com' },
            { label: 'AWS API Gateway', href: 'https://aws.amazon.com/api-gateway/' }
          ]
        },
        {
          name: 'Disaster Recovery & Business Continuity',
          blurb: 'Comprehensive backup, replication, and disaster recovery solutions with RTO/RPO optimization.',
          price: '$3,000 – $18,000 fixed or $120 – $180/hr',
          eta: '2–6 weeks',
          bullets: [
            'Automated backup and replication systems',
            'Disaster recovery testing and validation',
            'Business continuity planning and documentation',
            'Recovery time and point objectives optimization'
          ],
          link: '/it-services'
        },
        {
          name: 'Performance Optimization & Monitoring',
          blurb: 'Application and infrastructure performance tuning with comprehensive monitoring and alerting.',
          price: '$2,500 – $15,000 fixed or $120 – $180/hr',
          eta: '2–5 weeks',
          bullets: [
            'Performance profiling and bottleneck identification',
            'Database optimization and query tuning',
            'Infrastructure scaling and resource optimization',
            'Real-time monitoring and alerting setup'
          ],
          link: '/it-services'
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

