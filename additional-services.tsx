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
  Rocket,
  Phone,
  Mail,
  MapPin,
  Users,
  FileText,
  CreditCard,
  ShoppingCart,
  Camera,
  Mic,
  Video,
  Headphones,
  Wifi,
  Battery,
  Wrench,
  Tool
} from 'lucide-react';

export default function AdditionalServices() {
  const title = 'Expanded Services Catalog — Zion Tech Group';
  const description = 'New micro SaaS, IT, and AI solutions added to our production-ready catalog with transparent pricing and fast delivery.';

  const sections = [
    {
      id: 'micro-saas',
      title: 'Micro SaaS — New Products',
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
          name: 'AI-Powered Invoice Generator Pro',
          blurb: 'Automated invoice creation with smart categorization, payment tracking, and client communication.',
          price: '$49 - $199/month',
          eta: '1-2 weeks',
          bullets: [
            'AI-powered expense categorization and tax optimization',
            'Automated payment reminders and follow-ups',
            'Multi-currency support with real-time exchange rates',
            'Client portal with payment history and analytics',
            'Integration with accounting software (QuickBooks, Xero)',
            'Custom branding and professional templates'
          ],
          link: '/contact'
        },
        {
          name: 'Smart Social Media Scheduler',
          blurb: 'AI-driven social media management with optimal posting times and content optimization.',
          price: '$29 - $149/month',
          eta: '1-2 weeks',
          bullets: [
            'AI-powered optimal posting time detection',
            'Content performance prediction and optimization',
            'Multi-platform scheduling (Instagram, Facebook, Twitter, LinkedIn)',
            'Hashtag research and trending topic integration',
            'Analytics dashboard with engagement insights',
            'Team collaboration and approval workflows'
          ],
          link: '/contact'
        },
        {
          name: 'AI Customer Support Chatbot',
          blurb: 'Intelligent chatbot with natural language processing and seamless human handoff.',
          price: '$99 - $499/month',
          eta: '2-3 weeks',
          bullets: [
            'Natural language processing with 95% accuracy',
            'Multi-language support and sentiment analysis',
            'Seamless human agent handoff when needed',
            'Integration with CRM and helpdesk systems',
            'Custom knowledge base training and updates',
            'Real-time analytics and performance metrics'
          ],
          link: '/contact'
        },
        {
          name: 'Smart Inventory Management System',
          blurb: 'AI-powered inventory optimization with demand forecasting and automated reordering.',
          price: '$199 - $799/month',
          eta: '2-4 weeks',
          bullets: [
            'AI demand forecasting with 92% accuracy',
            'Automated reorder point calculations',
            'Multi-location inventory tracking',
            'Supplier management and purchase order automation',
            'Real-time stock alerts and low inventory warnings',
            'Integration with e-commerce platforms and POS systems'
          ],
          link: '/contact'
        },
        {
          name: 'AI-Powered Email Marketing Suite',
          blurb: 'Advanced email marketing with AI-driven personalization and campaign optimization.',
          price: '$79 - $299/month',
          eta: '2-3 weeks',
          bullets: [
            'AI-powered subject line optimization',
            'Dynamic content personalization',
            'Send time optimization based on user behavior',
            'A/B testing with statistical significance',
            'Advanced segmentation and targeting',
            'Deliverability monitoring and optimization'
          ],
          link: '/contact'
        },
        {
          name: 'Smart Project Management Tool',
          blurb: 'AI-enhanced project management with predictive analytics and resource optimization.',
          price: '$39 - $199/month',
          eta: '2-3 weeks',
          bullets: [
            'AI-powered project timeline prediction',
            'Resource allocation optimization',
            'Risk assessment and mitigation suggestions',
            'Team productivity analytics and insights',
            'Automated status updates and reporting',
            'Integration with popular development tools'
          ],
          link: '/contact'
        },
        {
          name: 'AI-Powered Lead Scoring Platform',
          blurb: 'Intelligent lead qualification with behavioral analysis and conversion prediction.',
          price: '$149 - $599/month',
          eta: '2-3 weeks',
          bullets: [
            'Behavioral scoring with machine learning',
            'Lead qualification and prioritization',
            'Integration with CRM and marketing automation',
            'Predictive conversion analytics',
            'Custom scoring models for different industries',
            'Real-time lead alerts and notifications'
          ],
          link: '/contact'
        },
        {
          name: 'Smart Document Management System',
          blurb: 'AI-powered document organization with intelligent search and automated categorization.',
          price: '$59 - $249/month',
          eta: '2-3 weeks',
          bullets: [
            'AI-powered document classification',
            'Intelligent search with natural language queries',
            'Automated metadata extraction and tagging',
            'Version control and collaboration features',
            'Compliance monitoring and audit trails',
            'Integration with cloud storage platforms'
          ],
          link: '/contact'
        },
        {
          name: 'AI-Powered Analytics Dashboard',
          blurb: 'Intelligent business intelligence with automated insights and predictive analytics.',
          price: '$199 - $799/month',
          eta: '3-4 weeks',
          bullets: [
            'Automated insight generation and alerts',
            'Predictive analytics with machine learning',
            'Custom dashboard creation and visualization',
            'Real-time data processing and updates',
            'Integration with multiple data sources',
            'Natural language query interface'
          ],
          link: '/contact'
        },
        {
          name: 'Smart Appointment Booking System',
          blurb: 'AI-enhanced scheduling with conflict resolution and optimal time slot suggestions.',
          price: '$29 - $149/month',
          eta: '1-2 weeks',
          bullets: [
            'AI-powered optimal scheduling suggestions',
            'Automatic conflict detection and resolution',
            'Multi-timezone support and calendar sync',
            'Automated reminders and confirmations',
            'Custom booking forms and questionnaires',
            'Integration with payment processing'
          ],
          link: '/contact'
        }
      ]
    },
    {
      id: 'ai',
      title: 'AI Services — New Capabilities',
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
          name: 'AI-Powered Content Generation Suite',
          blurb: 'Advanced AI content creation with brand voice consistency and SEO optimization.',
          price: '$199 - $999/month',
          eta: '2-3 weeks',
          bullets: [
            'GPT-4 powered content generation',
            'Brand voice training and consistency',
            'SEO optimization with keyword integration',
            'Multi-format content (blogs, social, emails)',
            'Plagiarism detection and originality scoring',
            'Content performance analytics and optimization'
          ],
          link: '/contact'
        },
        {
          name: 'AI Customer Sentiment Analysis',
          blurb: 'Real-time sentiment monitoring across all customer touchpoints with actionable insights.',
          price: '$299 - $1,299/month',
          eta: '2-3 weeks',
          bullets: [
            'Real-time sentiment analysis across channels',
            'Emotion detection and trend analysis',
            'Automated alert system for negative sentiment',
            'Customer journey sentiment mapping',
            'Integration with CRM and support systems',
            'Predictive customer churn analysis'
          ],
          link: '/contact'
        },
        {
          name: 'AI-Powered Fraud Detection System',
          blurb: 'Advanced fraud prevention with machine learning and real-time transaction monitoring.',
          price: '$1,999 - $9,999/month',
          eta: '4-6 weeks',
          bullets: [
            'Machine learning fraud detection models',
            'Real-time transaction monitoring',
            'Behavioral analysis and anomaly detection',
            'Multi-channel fraud prevention',
            'Custom rule engine and risk scoring',
            'Compliance reporting and audit trails'
          ],
          link: '/contact'
        },
        {
          name: 'AI-Powered Recommendation Engine',
          blurb: 'Personalized recommendation system with collaborative filtering and deep learning.',
          price: '$799 - $3,999/month',
          eta: '3-4 weeks',
          bullets: [
            'Collaborative and content-based filtering',
            'Deep learning recommendation models',
            'Real-time personalization engine',
            'A/B testing for recommendation algorithms',
            'Multi-domain recommendation support',
            'Performance analytics and optimization'
          ],
          link: '/contact'
        },
        {
          name: 'AI-Powered Predictive Analytics Platform',
          blurb: 'Advanced predictive modeling with machine learning for business forecasting and insights.',
          price: '$1,299 - $5,999/month',
          eta: '4-6 weeks',
          bullets: [
            'Machine learning predictive models',
            'Time series forecasting and trend analysis',
            'Customer lifetime value prediction',
            'Demand forecasting and inventory optimization',
            'Risk assessment and mitigation strategies',
            'Real-time prediction updates and monitoring'
          ],
          link: '/contact'
        },
        {
          name: 'AI-Powered Image Recognition System',
          blurb: 'Advanced computer vision with object detection, classification, and analysis capabilities.',
          price: '$399 - $1,999/month',
          eta: '3-4 weeks',
          bullets: [
            'Object detection and classification',
            'Facial recognition and analysis',
            'Quality control and defect detection',
            'Content moderation and filtering',
            'Custom model training and optimization',
            'Real-time processing and API integration'
          ],
          link: '/contact'
        },
        {
          name: 'AI-Powered Language Translation Service',
          blurb: 'Real-time multilingual translation with context awareness and domain-specific accuracy.',
          price: '$199 - $999/month',
          eta: '2-3 weeks',
          bullets: [
            'Real-time translation across 100+ languages',
            'Context-aware translation with domain expertise',
            'Document translation with formatting preservation',
            'Voice translation and speech synthesis',
            'Custom terminology and glossary management',
            'API integration and batch processing'
          ],
          link: '/contact'
        }
      ]
    },
    {
      id: 'it',
      title: 'IT Services — New Offers',
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
          name: 'Cloud Migration & Optimization',
          blurb: 'Comprehensive cloud migration services with cost optimization and security implementation.',
          price: '$5,000 - $50,000/project',
          eta: '4-8 weeks',
          bullets: [
            'Multi-cloud migration strategy and planning',
            'Cost optimization and rightsizing recommendations',
            'Security implementation and compliance',
            'Performance monitoring and optimization',
            'Disaster recovery and backup solutions',
            '24/7 cloud infrastructure monitoring'
          ],
          link: '/contact'
        },
        {
          name: 'DevOps Automation & CI/CD',
          blurb: 'Complete DevOps transformation with automated pipelines and infrastructure as code.',
          price: '$3,000 - $25,000/project',
          eta: '3-6 weeks',
          bullets: [
            'Automated CI/CD pipeline setup',
            'Infrastructure as Code (IaC) implementation',
            'Container orchestration with Kubernetes',
            'Monitoring and logging solutions',
            'Security scanning and compliance automation',
            'Performance optimization and scaling'
          ],
          link: '/contact'
        },
        {
          name: 'Cybersecurity Assessment & Implementation',
          blurb: 'Comprehensive security assessment with threat modeling and security implementation.',
          price: '$2,500 - $20,000/project',
          eta: '2-4 weeks',
          bullets: [
            'Security vulnerability assessment',
            'Penetration testing and threat modeling',
            'Security policy development and implementation',
            'Incident response planning and training',
            'Compliance audit and certification support',
            'Ongoing security monitoring and updates'
          ],
          link: '/contact'
        },
        {
          name: 'Data Analytics & Business Intelligence',
          blurb: 'Advanced data analytics platform with machine learning and predictive insights.',
          price: '$4,000 - $30,000/project',
          eta: '4-8 weeks',
          bullets: [
            'Data warehouse design and implementation',
            'ETL/ELT pipeline development',
            'Machine learning model development',
            'Interactive dashboard and reporting',
            'Real-time data processing and analytics',
            'Data governance and quality management'
          ],
          link: '/contact'
        },
        {
          name: 'API Development & Integration',
          blurb: 'RESTful API development with microservices architecture and third-party integrations.',
          price: '$2,000 - $15,000/project',
          eta: '2-4 weeks',
          bullets: [
            'RESTful API design and development',
            'Microservices architecture implementation',
            'Third-party API integration',
            'API documentation and testing',
            'Rate limiting and security implementation',
            'Performance monitoring and optimization'
          ],
          link: '/contact'
        },
        {
          name: 'Database Design & Optimization',
          blurb: 'Advanced database architecture with performance optimization and scalability solutions.',
          price: '$1,500 - $12,000/project',
          eta: '2-4 weeks',
          bullets: [
            'Database architecture design and planning',
            'Performance optimization and indexing',
            'Data migration and synchronization',
            'Backup and disaster recovery solutions',
            'Security implementation and access control',
            'Monitoring and maintenance automation'
          ],
          link: '/contact'
        },
        {
          name: 'Mobile App Development',
          blurb: 'Cross-platform mobile application development with native performance and features.',
          price: '$5,000 - $40,000/project',
          eta: '6-12 weeks',
          bullets: [
            'Cross-platform development (React Native, Flutter)',
            'Native iOS and Android app development',
            'UI/UX design and user experience optimization',
            'Backend integration and API development',
            'App store optimization and deployment',
            'Performance monitoring and analytics'
          ],
          link: '/contact'
        },
        {
          name: 'E-commerce Platform Development',
          blurb: 'Complete e-commerce solution with payment integration and inventory management.',
          price: '$8,000 - $60,000/project',
          eta: '8-16 weeks',
          bullets: [
            'Custom e-commerce platform development',
            'Payment gateway integration (Stripe, PayPal)',
            'Inventory management and order processing',
            'Customer portal and account management',
            'SEO optimization and marketing tools',
            'Analytics and reporting dashboard'
          ],
          link: '/contact'
        },
        {
          name: 'Blockchain & Web3 Solutions',
          blurb: 'Blockchain development with smart contracts, DeFi, and NFT marketplace solutions.',
          price: '$10,000 - $100,000/project',
          eta: '8-20 weeks',
          bullets: [
            'Smart contract development and auditing',
            'DeFi protocol development',
            'NFT marketplace and tokenization',
            'Blockchain integration and APIs',
            'Cryptocurrency payment solutions',
            'Web3 wallet integration'
          ],
          link: '/contact'
        }
      ]
    }
  ];

  const phoneHref = 'tel:+13024640950';
  const emailHref = 'mailto:kleber@ziontechgroup.com';
  const websiteHref = 'https://ziontechgroup.com';
  const contactHref = 'https://ziontechgroup.com/contact';

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