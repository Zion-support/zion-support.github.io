import React from 'react';
import { Helmet } from 'react-helmet-async';
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
  DollarSign,
  Clock,
  Star,
  TrendingUp,
  Smartphone,
  Globe,
  Lock,
  Database,
  Cpu,
  Target,
  Rocket
} from 'lucide-react';

export default function AdditionalServices() {
  const title = 'Expanded Services Catalog — Zion Tech Group';
  const description = 'New micro SaaS, IT, and AI solutions added to our production-ready catalog with transparent pricing and fast delivery.';

  const sections = [
    {
      id: 'micro-saas',
      title: 'Micro SaaS — Innovative Solutions',
      icon: Code,
      color: 'orange',
      items: [
        {
          name: 'Cloud Cost Guard (FinOps Assistant)',
          blurb: 'Automated cloud cost anomaly detection, budget alerts, rightsizing, and savings recommendations.',
          price: '$299 - $1,499/month',
          eta: '1-2 weeks',
          bullets: [
            'Anomaly detection across AWS/Azure/GCP bills',
            'Automated rightsizing and idle resource cleanup',
            'Forecasting and budget guardrails with alerts',
            'Exec-ready savings reports and benchmarks'
          ],
          link: '/contact'
        },
        {
          name: 'LLM Evaluation & Safety Suite',
          blurb: 'Red-teaming, prompt evaluation, and policy guardrails for safer generative AI deployments.',
          price: '$799 - $3,500/month',
          eta: '2-3 weeks',
          bullets: [
            'Safety/quality test harness, bias & toxicity checks',
            'Prompt injection, jailbreak, and hallucination tests',
            'Guardrail policies and observability dashboards',
            'CI integration for pre-release gating'
          ],
          link: '/contact'
        },
        {
          name: 'Headless Commerce Accelerator',
          blurb: 'Composable storefront, payments, and catalog with analytics and SEO built-in.',
          price: '$2,500 - $12,000/month',
          eta: '3-6 weeks',
          bullets: [
            'Next.js storefront with edge caching',
            'Stripe/Adyen payments, tax & shipping add-ons',
            'CMS-driven content and merchandising',
            'A/B testing and conversion analytics'
          ],
          link: '/contact'
        },
        {
          name: 'AI Localization & Multilingual SEO',
          blurb: 'Translate, localize, and optimize content for global audiences with workflows.',
          price: '$399 - $1,999/month',
          eta: '2-4 weeks',
          bullets: [
            'Neural translation with tone and glossary control',
            'Hreflang, sitemaps, and geo-targeting automation',
            'Editorial approval flows and QA checks',
            'Market-specific keyword research'
          ],
          link: '/contact'
        },
        {
          name: 'Smart Contract Audit Platform',
          blurb: 'Automated smart contract security analysis with comprehensive vulnerability detection.',
          price: '$1,200 - $5,000/month',
          eta: '2-4 weeks',
          bullets: [
            'Automated vulnerability scanning and detection',
            'Gas optimization recommendations',
            'Compliance checking for DeFi protocols',
            'Real-time monitoring and alerting'
          ],
          link: '/contact'
        },
        {
          name: 'API Rate Limiting & Monetization',
          blurb: 'Intelligent API rate limiting with usage-based billing and analytics.',
          price: '$199 - $999/month',
          eta: '1-2 weeks',
          bullets: [
            'Dynamic rate limiting based on user tiers',
            'Usage analytics and billing automation',
            'DDoS protection and traffic shaping',
            'Developer portal with API documentation'
          ],
          link: '/contact'
        },
        {
          name: 'Real Estate Investment Analytics',
          blurb: 'AI-powered property valuation and investment opportunity analysis.',
          price: '$499 - $2,499/month',
          eta: '3-5 weeks',
          bullets: [
            'Automated property valuation models',
            'Market trend analysis and predictions',
            'ROI calculations and risk assessment',
            'Portfolio optimization recommendations'
          ],
          link: '/contact'
        },
        {
          name: 'Supply Chain Risk Intelligence',
          blurb: 'Real-time supply chain monitoring with risk assessment and alternative sourcing.',
          price: '$899 - $4,500/month',
          eta: '4-6 weeks',
          bullets: [
            'Global supply chain mapping and monitoring',
            'Risk scoring and early warning systems',
            'Alternative supplier recommendations',
            'Compliance tracking and reporting'
          ],
          link: '/contact'
        }
      ]
    },
    {
      id: 'ai',
      title: 'AI Services — Advanced Capabilities',
      icon: Brain,
      color: 'blue',
      items: [
        {
          name: 'RAG Platform-in-a-Box',
          blurb: 'End-to-end retrieval augmented generation stack with governance and analytics.',
          price: '$4,000 - $18,000/month',
          eta: '4-8 weeks',
          bullets: [
            'Connectors for docs, tickets, CRM, and data lakes',
            'Chunking/embedding strategy and vector stores',
            'Citations, feedback loops, and analytics',
            'PII scrubbers and policy guardrails'
          ],
          link: '/contact'
        },
        {
          name: 'MLOps as a Service',
          blurb: 'Managed pipelines for training, evaluation, deployment, and monitoring.',
          price: '$3,500 - $16,000/month',
          eta: '4-8 weeks',
          bullets: [
            'Feature stores, model registry, canary/AB deploys',
            'Data drift, performance & cost monitoring',
            'Model cards, lineage, and reproducibility',
            'Compliance-ready audit trails'
          ],
          link: '/contact'
        },
        {
          name: 'Call Center Voice Intelligence',
          blurb: 'Real-time transcription, summarization, QA scoring, and agent coaching.',
          price: '$1,200 - $6,000/month',
          eta: '3-6 weeks',
          bullets: [
            'PCI/PII redaction and consent workflows',
            'Auto-summary to CRM and action items',
            'Sentiment and compliance QA scoring',
            'Multilingual, low-latency streaming'
          ],
          link: '/contact'
        },
        {
          name: 'AI-Powered Code Review Assistant',
          blurb: 'Automated code analysis, security scanning, and quality improvement suggestions.',
          price: '$599 - $2,999/month',
          eta: '2-4 weeks',
          bullets: [
            'Automated vulnerability detection and fixes',
            'Code quality metrics and improvement suggestions',
            'Security compliance checking',
            'Performance optimization recommendations'
          ],
          link: '/contact'
        },
        {
          name: 'Predictive Maintenance AI',
          blurb: 'IoT sensor data analysis for predictive equipment maintenance and failure prevention.',
          price: '$1,500 - $7,500/month',
          eta: '4-8 weeks',
          bullets: [
            'Real-time sensor data processing',
            'Failure prediction with confidence intervals',
            'Maintenance scheduling optimization',
            'Cost reduction through proactive maintenance'
          ],
          link: '/contact'
        },
        {
          name: 'AI Customer Journey Analytics',
          blurb: 'Advanced customer behavior analysis with personalized journey optimization.',
          price: '$899 - $4,500/month',
          eta: '3-6 weeks',
          bullets: [
            'Customer segmentation and persona analysis',
            'Journey mapping and optimization recommendations',
            'Churn prediction and retention strategies',
            'Personalized marketing automation triggers'
          ],
          link: '/contact'
        },
        {
          name: 'Autonomous Document Processing',
          blurb: 'End-to-end document workflow automation with intelligent data extraction.',
          price: '$1,200 - $5,500/month',
          eta: '3-5 weeks',
          bullets: [
            'Multi-format document processing (PDF, images, forms)',
            'Intelligent data extraction and validation',
            'Workflow automation and approval routing',
            'Compliance tracking and audit trails'
          ],
          link: '/contact'
        },
        {
          name: 'AI-Powered Fraud Detection',
          blurb: 'Real-time fraud detection with machine learning models and behavioral analysis.',
          price: '$2,000 - $10,000/month',
          eta: '4-8 weeks',
          bullets: [
            'Real-time transaction monitoring',
            'Behavioral pattern analysis',
            'Risk scoring and automated responses',
            'False positive reduction through ML'
          ],
          link: '/contact'
        }
      ]
    },
    {
      id: 'it',
      title: 'IT Services — Comprehensive Solutions',
      icon: Cloud,
      color: 'green',
      items: [
        {
          name: 'Platform Engineering for Kubernetes',
          blurb: 'Golden paths, templates, and paved roads for secure, fast delivery.',
          price: '$6,000 - $28,000/month',
          eta: '4-10 weeks',
          bullets: [
            'IDP portals, Backstage/Score templates',
            'Multi-tenant clusters with policy guardrails',
            'GitOps, secrets, and SSO baked-in',
            'SRE dashboards and runbooks'
          ],
          link: '/contact'
        },
        {
          name: 'Data Compliance Toolkit (SOC 2/HIPAA/GDPR)',
          blurb: 'Blueprints, controls, and automation to reach and maintain compliance.',
          price: '$2,500 - $14,000/month',
          eta: '3-8 weeks',
          bullets: [
            'Policy packs, access reviews, and evidence capture',
            'Data mapping and DPIA workflows',
            'Continuous controls monitoring',
            'Audit-ready reports and gap analysis'
          ],
          link: '/contact'
        },
        {
          name: 'Observability Stack (OpenTelemetry + Grafana)',
          blurb: 'Unified logs, metrics, traces, and SLOs with cost-efficient pipelines.',
          price: '$1,800 - $9,500/month',
          eta: '2-5 weeks',
          bullets: [
            'Otel auto-instrumentation and sampling',
            'SLO/SLA error budget burn alerts',
            'Cost controls and retention policies',
            'Incident workflows with on-call integration'
          ],
          link: '/contact'
        },
        {
          name: 'Zero Trust Security Architecture',
          blurb: 'Comprehensive zero trust implementation with identity verification and micro-segmentation.',
          price: '$4,500 - $22,000/month',
          eta: '6-12 weeks',
          bullets: [
            'Identity and access management (IAM) implementation',
            'Network micro-segmentation and policy enforcement',
            'Device trust and endpoint security',
            'Continuous security monitoring and threat detection'
          ],
          link: '/contact'
        },
        {
          name: 'Cloud Migration & Modernization',
          blurb: 'Complete cloud migration strategy with application modernization and optimization.',
          price: '$8,000 - $45,000/month',
          eta: '8-16 weeks',
          bullets: [
            'Legacy application assessment and migration planning',
            'Containerization and microservices architecture',
            'Database migration and optimization',
            'Cost optimization and performance tuning'
          ],
          link: '/contact'
        },
        {
          name: 'DevSecOps Pipeline Implementation',
          blurb: 'Secure CI/CD pipelines with automated security testing and compliance.',
          price: '$3,200 - $15,000/month',
          eta: '4-8 weeks',
          bullets: [
            'Automated security scanning and vulnerability management',
            'Infrastructure as Code (IaC) security validation',
            'Secrets management and secure deployment',
            'Compliance automation and reporting'
          ],
          link: '/contact'
        },
        {
          name: 'Disaster Recovery & Business Continuity',
          blurb: 'Comprehensive disaster recovery planning with automated failover and testing.',
          price: '$2,800 - $18,000/month',
          eta: '6-10 weeks',
          bullets: [
            'Multi-region backup and replication strategies',
            'Automated failover and recovery procedures',
            'Business continuity planning and testing',
            'RTO/RPO optimization and monitoring'
          ],
          link: '/contact'
        },
        {
          name: 'API Gateway & Microservices Management',
          blurb: 'Enterprise API management with security, monitoring, and developer portal.',
          price: '$1,500 - $8,500/month',
          eta: '3-6 weeks',
          bullets: [
            'API gateway configuration and management',
            'Rate limiting, authentication, and authorization',
            'API analytics and performance monitoring',
            'Developer portal and documentation'
          ],
          link: '/contact'
        }
      ]
    }
  ];

  const phoneHref = 'tel:+13024640950';
  const emailHref = 'mailto:kleber@ziontechgroup.com';
  const websiteUrl = 'https://ziontechgroup.com';
  const address = '364 E Main St STE 1008, Middletown DE 19709';

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="micro SaaS, AI services, IT solutions, automation, cloud services, enterprise software" />
        <link rel="canonical" href="https://ziontechgroup.com/additional-services" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-16">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <DollarSign className="h-8 w-8 text-cyan-400 mr-3" />
              <span className="text-lg font-semibold text-cyan-400">Expanded Catalog</span>
            </div>
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              New Services We Now Offer
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-4xl mx-auto">
              We regularly add pragmatic, production-grade services to maximize ROI. Explore our latest micro SaaS, AI, and IT solutions below, then contact us to get a tailored proposal.
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-blue-200">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                <span>Fast Delivery</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                <span>Proven ROI</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                <span>Expert Support</span>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 gap-8">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <div key={section.id} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
                  <div className="flex items-center gap-x-3 mb-6">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-lg bg-${section.color}-600`}>
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <h2 className="text-2xl font-semibold text-white">{section.title}</h2>
                  </div>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {section.items.map((item) => (
                      <div key={item.name} className="group relative rounded-xl border border-slate-700/50 p-6 hover:border-cyan-500/50 transition-all duration-300">
                        <h3 className="text-lg font-semibold text-white mb-2">{item.name}</h3>
                        <p className="text-sm text-slate-300 mb-4">{item.blurb}</p>
                        
                        <ul className="space-y-2 mb-4">
                          {item.bullets.map((bullet, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm text-slate-400">
                              <CheckCircle className={`h-4 w-4 text-${section.color}-400`} />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <div className="flex items-center justify-between text-sm">
                          <div className="text-slate-300">
                            <span className="font-semibold text-cyan-400">{item.price}</span>
                            <span className="text-slate-500 ml-2">•</span>
                            <span className="ml-2">{item.eta} delivery</span>
                          </div>
                          <a 
                            href={item.link} 
                            className={`inline-flex items-center font-semibold text-${section.color}-400 hover:text-${section.color}-300 transition-colors`}
                          >
                            Learn more
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Contact Section */}
        <section className="container mx-auto px-6 py-16">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-500/20">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
              <p className="text-blue-100 max-w-2xl mx-auto">
                Get a custom proposal for your specific needs. Most engagements start with a 30-60 minute consultation and a detailed proposal within 48 hours.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 text-center mb-8">
              <div>
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Fast Quotes</h3>
                <p className="text-sm text-slate-300">Most engagements start with a 30–60 minute call and a fixed-price proposal within 48 hours.</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Star className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Contact</h3>
                <p className="text-sm text-slate-300">
                  Phone: <a className="hover:underline text-blue-400" href={phoneHref}>+1 302 464 0950</a><br />
                  Email: <a className="hover:underline text-blue-400" href={emailHref}>kleber@ziontechgroup.com</a>
                </p>
              </div>
              <div>
                <div className="w-12 h-12 bg-fuchsia-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-6 h-6 text-fuchsia-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                <p className="text-sm text-slate-300">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
                <a 
                  href={phoneHref} 
                  className="inline-flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors"
                >
                  <Smartphone className="w-4 h-4" />
                  +1 302 464 0950
                </a>
                <a 
                  href={emailHref} 
                  className="inline-flex items-center gap-2 bg-slate-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-600 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  kleber@ziontechgroup.com
                </a>
              </div>
              <p className="text-sm text-slate-400">
                Visit our website: <a href="https://ziontechgroup.com" className="text-cyan-400 hover:underline">https://ziontechgroup.com</a>
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}