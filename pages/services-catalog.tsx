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
          name: 'API Rate Limiter & Analytics',
          blurb: 'Intelligent rate limiting, usage analytics, and API monetization for SaaS platforms.',
          price: '$199 – $1,299/month',
          eta: '1–3 weeks',
          bullets: [
            'Dynamic rate limiting with ML-based optimization',
            'Real-time usage analytics and billing integration',
            'API key management and developer portal',
            'Revenue optimization and usage forecasting'
          ],
          link: '/micro-saas'
        },
        {
          name: 'Social Media Scheduler Pro',
          blurb: 'AI-powered content scheduling, hashtag optimization, and engagement analytics across platforms.',
          price: '$99 – $599/month',
          eta: '1–2 weeks',
          bullets: [
            'Multi-platform posting with optimal timing',
            'AI-generated hashtag suggestions and trending topics',
            'Engagement analytics and competitor tracking',
            'Content calendar with collaboration features'
          ],
          link: '/micro-saas'
        },
        {
          name: 'Invoice & Payment Automation',
          blurb: 'Automated invoicing, payment processing, and financial reporting for freelancers and agencies.',
          price: '$49 – $299/month',
          eta: '1–2 weeks',
          bullets: [
            'Automated invoice generation and delivery',
            'Multiple payment gateway integration',
            'Expense tracking and tax reporting',
            'Client portal with payment history'
          ],
          link: '/micro-saas'
        },
        {
          name: 'SEO Content Optimizer',
          blurb: 'AI-driven content optimization, keyword research, and SERP tracking for better rankings.',
          price: '$149 – $899/month',
          eta: '1–3 weeks',
          bullets: [
            'AI-powered content optimization suggestions',
            'Competitive keyword research and tracking',
            'SERP position monitoring and alerts',
            'Content gap analysis and recommendations'
          ],
          link: '/micro-saas'
        },
        {
          name: 'Lead Scoring & CRM Automation',
          blurb: 'Intelligent lead scoring, automated follow-ups, and CRM integration for sales teams.',
          price: '$199 – $1,199/month',
          eta: '2–4 weeks',
          bullets: [
            'ML-based lead scoring and qualification',
            'Automated email sequences and follow-ups',
            'CRM integration with popular platforms',
            'Sales pipeline analytics and forecasting'
          ],
          link: '/micro-saas'
        },
        {
          name: 'Password Manager for Teams',
          blurb: 'Secure password sharing, team vaults, and enterprise-grade security for organizations.',
          price: '$5 – $15/user/month',
          eta: '1–2 weeks',
          bullets: [
            'Team password vaults with role-based access',
            'Secure password sharing and inheritance',
            'Enterprise SSO integration',
            'Security audit logs and compliance reporting'
          ],
          link: '/micro-saas'
        },
        {
          name: 'Time Tracking & Productivity Analytics',
          blurb: 'Advanced time tracking, productivity insights, and team performance analytics.',
          price: '$8 – $25/user/month',
          eta: '1–3 weeks',
          bullets: [
            'Automatic time tracking with AI categorization',
            'Productivity insights and distraction analysis',
            'Team performance dashboards and reports',
            'Integration with project management tools'
          ],
          link: '/micro-saas'
        },
        {
          name: 'Email Marketing Automation',
          blurb: 'Behavioral triggers, A/B testing, and advanced segmentation for email campaigns.',
          price: '$99 – $699/month',
          eta: '1–3 weeks',
          bullets: [
            'Behavioral trigger automation and workflows',
            'Advanced segmentation and personalization',
            'A/B testing and performance optimization',
            'Deliverability monitoring and optimization'
          ],
          link: '/micro-saas'
        },
        {
          name: 'Project Management & Collaboration',
          blurb: 'Kanban boards, Gantt charts, and team collaboration tools with AI-powered insights.',
          price: '$10 – $50/user/month',
          eta: '2–4 weeks',
          bullets: [
            'Advanced project planning and resource management',
            'AI-powered task prioritization and scheduling',
            'Team collaboration with real-time updates',
            'Performance analytics and project insights'
          ],
          link: '/micro-saas'
        },
        {
          name: 'Customer Support Ticketing System',
          blurb: 'Multi-channel support, AI-powered responses, and customer satisfaction tracking.',
          price: '$29 – $199/month',
          eta: '1–3 weeks',
          bullets: [
            'Multi-channel ticket management (email, chat, phone)',
            'AI-powered response suggestions and automation',
            'Customer satisfaction tracking and analytics',
            'Knowledge base integration and self-service'
          ],
          link: '/micro-saas'
        },
        {
          name: 'Inventory Management System',
          blurb: 'Real-time inventory tracking, automated reordering, and supply chain optimization.',
          price: '$199 – $1,499/month',
          eta: '2–5 weeks',
          bullets: [
            'Real-time inventory tracking across multiple locations',
            'Automated reorder points and supplier management',
            'Supply chain optimization and demand forecasting',
            'Integration with e-commerce and accounting systems'
          ],
          link: '/micro-saas'
        },
        {
          name: 'Employee Onboarding Platform',
          blurb: 'Automated onboarding workflows, document collection, and compliance tracking.',
          price: '$5 – $20/employee/month',
          eta: '1–3 weeks',
          bullets: [
            'Automated onboarding workflows and checklists',
            'Digital document collection and e-signatures',
            'Compliance tracking and reporting',
            'Integration with HR systems and payroll'
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
          link: '/ai-services'
        },
        {
          name: 'Computer Vision & Image Recognition',
          blurb: 'Object detection, facial recognition, OCR, and automated image processing solutions.',
          price: '$5,000 – $25,000 setup, $0.01 – $0.05/image',
          eta: '4–8 weeks',
          bullets: [
            'Custom object detection and classification models',
            'Facial recognition and biometric authentication',
            'OCR and document text extraction',
            'Image quality enhancement and processing'
          ],
          link: '/ai-services'
        },
        {
          name: 'Natural Language Processing (NLP)',
          blurb: 'Text analysis, sentiment analysis, language translation, and document processing.',
          price: '$3,000 – $15,000 setup, $0.001 – $0.01/request',
          eta: '3–6 weeks',
          bullets: [
            'Sentiment analysis and emotion detection',
            'Multi-language translation and localization',
            'Text summarization and content extraction',
            'Named entity recognition and classification'
          ],
          link: '/ai-services'
        },
        {
          name: 'Machine Learning Model Development',
          blurb: 'Custom ML models for classification, regression, and recommendation systems.',
          price: '$10,000 – $50,000 project',
          eta: '6–12 weeks',
          bullets: [
            'Custom model development and training',
            'Feature engineering and data preprocessing',
            'Model validation and performance optimization',
            'Deployment and monitoring infrastructure'
          ],
          link: '/ai-services'
        },
        {
          name: 'AI-Powered Data Analytics',
          blurb: 'Automated insights, anomaly detection, and predictive modeling for business intelligence.',
          price: '$5,000 – $30,000 setup, $2,000 – $10,000/month',
          eta: '4–8 weeks',
          bullets: [
            'Automated data insights and pattern recognition',
            'Anomaly detection and alerting systems',
            'Predictive modeling and forecasting',
            'Interactive dashboards and reporting'
          ],
          link: '/ai-services'
        },
        {
          name: 'Conversational AI & Voice Assistants',
          blurb: 'Voice-enabled chatbots, IVR systems, and multi-modal conversational interfaces.',
          price: '$8,000 – $40,000 setup, $0.05 – $0.20/interaction',
          eta: '4–10 weeks',
          bullets: [
            'Voice-enabled chatbot development',
            'IVR system integration and optimization',
            'Multi-modal conversation interfaces',
            'Speech recognition and synthesis'
          ],
          link: '/ai-services'
        },
        {
          name: 'AI-Powered Fraud Detection',
          blurb: 'Real-time fraud prevention, risk scoring, and transaction monitoring systems.',
          price: '$15,000 – $75,000 setup, $0.01 – $0.05/transaction',
          eta: '6–12 weeks',
          bullets: [
            'Real-time fraud detection and prevention',
            'Risk scoring and transaction monitoring',
            'Behavioral analysis and pattern recognition',
            'Integration with payment and banking systems'
          ],
          link: '/ai-services'
        },
        {
          name: 'Recommendation Engine Development',
          blurb: 'Personalized product recommendations, content suggestions, and user behavior analysis.',
          price: '$12,000 – $60,000 setup, $1,000 – $5,000/month',
          eta: '4–10 weeks',
          bullets: [
            'Personalized recommendation algorithms',
            'Content-based and collaborative filtering',
            'Real-time recommendation serving',
            'A/B testing and performance optimization'
          ],
          link: '/ai-services'
        },
        {
          name: 'AI-Powered Document Processing',
          blurb: 'Automated document extraction, classification, and intelligent data capture.',
          price: '$6,000 – $25,000 setup, $0.10 – $0.50/document',
          eta: '3–8 weeks',
          bullets: [
            'Automated document classification and routing',
            'Data extraction and validation',
            'Document workflow automation',
            'Integration with existing business systems'
          ],
          link: '/ai-services'
        },
        {
          name: 'AI Chatbot & Virtual Assistant',
          blurb: 'Intelligent conversational agents with context awareness and multi-platform deployment.',
          price: '$3,000 – $15,000 setup, $0.02 – $0.10/message',
          eta: '2–6 weeks',
          bullets: [
            'Context-aware conversation management',
            'Multi-platform deployment (web, mobile, social)',
            'Integration with business systems and APIs',
            'Analytics and conversation optimization'
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
          name: 'Network Infrastructure & Security',
          blurb: 'Network design, firewall configuration, VPN setup, and network monitoring solutions.',
          price: '$8,000 – $50,000 project, $1,000 – $5,000/month managed',
          eta: '3–8 weeks',
          bullets: [
            'Network architecture design and implementation',
            'Firewall configuration and security policies',
            'VPN setup and remote access solutions',
            'Network monitoring and performance optimization'
          ],
          link: '/it-services'
        },
        {
          name: 'Database Administration & Optimization',
          blurb: 'Database design, performance tuning, backup strategies, and high availability setup.',
          price: '$5,000 – $25,000 project, $2,000 – $8,000/month managed',
          eta: '2–6 weeks',
          bullets: [
            'Database architecture design and optimization',
            'Performance tuning and query optimization',
            'Backup and disaster recovery strategies',
            'High availability and clustering setup'
          ],
          link: '/it-services'
        },
        {
          name: 'IT Infrastructure Management',
          blurb: 'Server management, virtualization, monitoring, and 24/7 IT support services.',
          price: '$3,000 – $15,000/month managed services',
          eta: '1–3 weeks',
          bullets: [
            '24/7 server monitoring and management',
            'Virtualization and container orchestration',
            'Proactive maintenance and updates',
            'Help desk and technical support'
          ],
          link: '/it-services'
        },
        {
          name: 'Disaster Recovery & Business Continuity',
          blurb: 'Backup solutions, disaster recovery planning, and business continuity strategies.',
          price: '$10,000 – $60,000 setup, $2,000 – $10,000/month',
          eta: '4–10 weeks',
          bullets: [
            'Comprehensive disaster recovery planning',
            'Automated backup and replication systems',
            'Business continuity strategy development',
            'Testing and validation procedures'
          ],
          link: '/it-services'
        },
        {
          name: 'Compliance & Audit Services',
          blurb: 'SOC 2, GDPR, HIPAA compliance, security audits, and regulatory consulting.',
          price: '$15,000 – $75,000 project',
          eta: '6–16 weeks',
          bullets: [
            'SOC 2 Type I and Type II compliance',
            'GDPR and data privacy compliance',
            'HIPAA and healthcare compliance',
            'Security audits and risk assessments'
          ],
          link: '/it-services'
        },
        {
          name: 'API Development & Integration',
          blurb: 'RESTful APIs, microservices architecture, third-party integrations, and API management.',
          price: '$8,000 – $40,000 project',
          eta: '3–8 weeks',
          bullets: [
            'RESTful API design and development',
            'Microservices architecture implementation',
            'Third-party system integrations',
            'API management and documentation'
          ],
          link: '/it-services'
        },
        {
          name: 'Mobile App Development',
          blurb: 'Native iOS/Android apps, cross-platform solutions, and mobile backend services.',
          price: '$15,000 – $100,000 project',
          eta: '8–20 weeks',
          bullets: [
            'Native iOS and Android app development',
            'Cross-platform solutions (React Native, Flutter)',
            'Mobile backend and API development',
            'App store optimization and deployment'
          ],
          link: '/it-services'
        },
        {
          name: 'Web Application Development',
          blurb: 'Custom web applications, e-commerce solutions, and enterprise web platforms.',
          price: '$10,000 – $80,000 project',
          eta: '6–16 weeks',
          bullets: [
            'Custom web application development',
            'E-commerce platform development',
            'Enterprise web solutions',
            'Performance optimization and scaling'
          ],
          link: '/it-services'
        },
        {
          name: 'IT Consulting & Strategy',
          blurb: 'Technology roadmap planning, digital transformation, and IT strategy consulting.',
          price: '$150 – $300/hour',
          eta: 'Ongoing',
          bullets: [
            'Technology roadmap and strategy development',
            'Digital transformation consulting',
            'IT architecture and design reviews',
            'Technology vendor selection and evaluation'
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

