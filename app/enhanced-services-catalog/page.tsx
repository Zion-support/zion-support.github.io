import React from 'react';
import Head from 'next/head';
import { Link } from 'react-router-dom';
import { 
  Brain, Code, Cloud, Shield, Network, Server, BarChart3, Settings, 
  Zap, Monitor, Search, MessageSquare, CheckCircle, ArrowRight, 
  DollarSign, Clock, Users, Globe, Smartphone, Database, 
  Lock, TrendingUp, Target, Lightbulb, Rocket, Cpu, 
  Wifi, Eye, Headphones, FileText, Calendar, Mail,
  Phone, MapPin, ExternalLink, Star, Award, Bot, 
  Database as DbIcon, ShieldCheck, Activity, Layers,
  Workflow, BrainCircuit, Microscope, Cog, Globe2
} from 'lucide-react';

export const metadata = {
  title: 'Enhanced Services Catalog — Zion Tech Group | Micro SaaS, AI & IT Solutions',
  description: 'Comprehensive catalog of innovative micro SaaS, AI services, and IT solutions. Transform your business with cutting-edge technology and automation.',
  keywords: 'micro SaaS, AI services, IT solutions, business automation, cloud services, enterprise software, digital transformation',
};

export default function EnhancedServicesCatalog() {
  const phoneHref = "tel:+13024640950"
  const emailHref = "mailto:kleber@ziontechgroup.com"
  const websiteHref = "https://ziontechgroup.com"
  const microSaaSServices = [
    {
      name: 'AI-Powered Customer Sentiment Analytics',
      description: 'Real-time customer sentiment analysis across all touchpoints with predictive insights and automated response recommendations.',
      price: '$299 - $1,499/month',
      delivery: '1-2 weeks',
      features: [
        'Real-time sentiment monitoring across email, chat, social media',
        'Predictive customer churn analysis with early warning alerts',
        'Automated response recommendations and escalation triggers',
        'Multi-language support with cultural context understanding',
        'Integration with CRM, helpdesk, and marketing platforms',
        'Custom sentiment models trained on your industry data'
      ],
      benefits: [
        'Increase customer satisfaction by 35%',
        'Reduce churn rate by 25%',
        'Improve response time by 60%',
        'Boost customer lifetime value by 40%'
      ],
      category: 'Customer Intelligence',
      popular: true,
      link: '/services/customer-sentiment-analytics'
    },
    {
      name: 'Smart Inventory Optimization Platform',
      description: 'AI-driven inventory management with demand forecasting, automated reordering, and cost optimization.',
      price: '$249 - $1,299/month',
      delivery: '2-3 weeks',
      features: [
        'Advanced demand forecasting using machine learning',
        'Automated reorder point calculations and purchase orders',
        'Multi-supplier optimization and vendor performance tracking',
        'Seasonal trend analysis and promotional impact modeling',
        'Real-time inventory tracking with IoT sensor integration',
        'Cost optimization algorithms for storage and logistics'
      ],
      benefits: [
        'Reduce inventory costs by 30%',
        'Increase stock turnover by 45%',
        'Minimize stockouts by 80%',
        'Optimize cash flow by 25%'
      ],
      category: 'Supply Chain',
      popular: true,
      link: '/services/inventory-optimization'
    },
    {
      name: 'AI Content Marketing Automation Suite',
      description: 'Automated content creation, SEO optimization, and multi-channel distribution with performance analytics.',
      price: '$149 - $799/month',
      delivery: '1-2 weeks',
      features: [
        'AI-generated blog posts, social media content, and email campaigns',
        'SEO optimization with keyword research and content scoring',
        'Multi-platform distribution to social media, blogs, and newsletters',
        'A/B testing and performance optimization recommendations',
        'Content calendar automation with trend-based scheduling',
        'Brand voice consistency across all content types'
      ],
      benefits: [
        'Increase content output by 300%',
        'Improve SEO rankings by 50%',
        'Boost engagement rates by 65%',
        'Reduce content creation costs by 70%'
      ],
      category: 'Marketing Automation',
      popular: false,
      link: '/services/content-marketing-automation'
    },
    {
      name: 'Healthcare Appointment Intelligence System',
      description: 'Smart scheduling system with patient preferences, provider optimization, and telehealth integration.',
      price: '$399 - $1,999/month',
      delivery: '3-4 weeks',
      features: [
        'AI-powered appointment optimization based on patient history',
        'Provider workload balancing and availability management',
        'Telehealth integration with automated room booking',
        'Patient preference learning and personalized scheduling',
        'HIPAA-compliant data handling and security protocols',
        'Integration with EHR systems and billing platforms'
      ],
      benefits: [
        'Reduce no-show rates by 40%',
        'Increase provider utilization by 25%',
        'Improve patient satisfaction by 50%',
        'Optimize revenue per appointment by 30%'
      ],
      category: 'Healthcare Tech',
      popular: true,
      link: '/services/healthcare-appointment-intelligence'
    },
    {
      name: 'Financial Risk Assessment Platform',
      description: 'Real-time financial risk analysis with fraud detection, credit scoring, and compliance monitoring.',
      price: '$499 - $2,499/month',
      delivery: '2-4 weeks',
      features: [
        'Advanced fraud detection using behavioral analytics',
        'Real-time credit scoring with alternative data sources',
        'Regulatory compliance monitoring and reporting',
        'Risk portfolio analysis and stress testing',
        'Automated alerts and escalation workflows',
        'Integration with banking and payment systems'
      ],
      benefits: [
        'Reduce fraud losses by 60%',
        'Improve credit decision accuracy by 35%',
        'Ensure 100% regulatory compliance',
        'Accelerate loan processing by 50%'
      ],
      category: 'FinTech',
      popular: false,
      link: '/services/financial-risk-assessment'
    },
    {
      name: 'Smart Energy Management System',
      description: 'AI-driven energy optimization for buildings, factories, and smart cities with IoT integration.',
      price: '$199 - $999/month',
      delivery: '2-3 weeks',
      features: [
        'Real-time energy consumption monitoring and analysis',
        'Predictive maintenance for energy equipment',
        'Automated demand response and load balancing',
        'Carbon footprint tracking and sustainability reporting',
        'Integration with smart meters and IoT sensors',
        'Cost optimization algorithms for energy procurement'
      ],
      benefits: [
        'Reduce energy costs by 25%',
        'Decrease carbon emissions by 30%',
        'Improve equipment uptime by 40%',
        'Optimize energy efficiency by 35%'
      ],
      category: 'Energy Tech',
      popular: false,
      link: '/services/smart-energy-management'
    }
  ];

  const aiServices = [
    {
      name: 'Autonomous Business Process Orchestration',
      description: 'Self-managing workflows that adapt and optimize business processes in real-time without human intervention.',
      price: '$2,999 - $12,999/month',
      delivery: '4-8 weeks',
      features: [
        'Self-healing automation with automatic error recovery',
        'Dynamic process optimization based on performance data',
        'Cross-system integration with API orchestration',
        'Predictive process failure prevention',
        'Machine learning-driven workflow improvements',
        'Real-time monitoring and performance analytics'
      ],
      benefits: [
        'Reduce process execution time by 60%',
        'Eliminate manual errors by 95%',
        'Increase operational efficiency by 45%',
        'Lower operational costs by 35%'
      ],
      category: 'Process Automation',
      popular: true,
      link: '/services/autonomous-process-orchestration'
    },
    {
      name: 'Advanced Fraud Detection & Prevention',
      description: 'Real-time fraud detection using deep learning, behavioral analytics, and anomaly detection.',
      price: '$1,999 - $8,999/month',
      delivery: '3-6 weeks',
      features: [
        'Real-time transaction monitoring and scoring',
        'Behavioral pattern analysis and anomaly detection',
        'Machine learning models trained on fraud patterns',
        'Automated response and blocking mechanisms',
        'Multi-channel fraud detection (web, mobile, API)',
        'Continuous model retraining and improvement'
      ],
      benefits: [
        'Detect fraud 10x faster than traditional methods',
        'Reduce false positives by 70%',
        'Prevent 95% of fraudulent transactions',
        'Save millions in fraud losses annually'
      ],
      category: 'Security AI',
      popular: true,
      link: '/services/advanced-fraud-detection'
    },
    {
      name: 'Predictive Maintenance Intelligence',
      description: 'AI-powered equipment monitoring for manufacturing, IoT, and industrial applications.',
      price: '$3,499 - $15,999/month',
      delivery: '4-8 weeks',
      features: [
        'IoT sensor data analysis and pattern recognition',
        'Predictive failure modeling with maintenance scheduling',
        'Equipment performance optimization recommendations',
        'Cost-benefit analysis for maintenance decisions',
        'Integration with CMMS and ERP systems',
        'Real-time alerts and mobile notifications'
      ],
      benefits: [
        'Reduce unplanned downtime by 50%',
        'Extend equipment lifespan by 30%',
        'Lower maintenance costs by 40%',
        'Improve production efficiency by 25%'
      ],
      category: 'Industrial AI',
      popular: true,
      link: '/services/predictive-maintenance-intelligence'
    },
    {
      name: 'Intelligent Document Processing Suite',
      description: 'AI-powered document analysis, extraction, and processing with 99.8% accuracy.',
      price: '$799 - $3,999/month',
      delivery: '2-4 weeks',
      features: [
        'OCR with 99.8% accuracy across multiple languages',
        'Automated data extraction from complex documents',
        'Document classification and intelligent routing',
        'Contract analysis and risk assessment',
        'Compliance monitoring and audit trail generation',
        'Integration with document management systems'
      ],
      benefits: [
        'Process documents 20x faster than manual methods',
        'Reduce processing errors by 95%',
        'Cut document processing costs by 80%',
        'Ensure 100% compliance with regulations'
      ],
      category: 'Document AI',
      popular: false,
      link: '/services/intelligent-document-processing'
    },
    {
      name: 'AI-Powered Legal Document Analysis',
      description: 'Automated contract review, risk assessment, and compliance monitoring for legal teams.',
      price: '$2,499 - $9,999/month',
      delivery: '3-6 weeks',
      features: [
        'Automated contract analysis and clause identification',
        'Risk assessment and compliance gap analysis',
        'Legal research and precedent analysis',
        'Document comparison and version control',
        'Automated contract generation from templates',
        'Integration with legal case management systems'
      ],
      benefits: [
        'Reduce contract review time by 75%',
        'Identify risks 10x faster than manual review',
        'Ensure 100% compliance with legal requirements',
        'Lower legal costs by 60%'
      ],
      category: 'Legal AI',
      popular: false,
      link: '/services/legal-document-analysis'
    },
    {
      name: 'Conversational AI Platform',
      description: 'Advanced AI customer service with natural language understanding and multi-channel support.',
      price: '$1,200 - $6,000/month',
      delivery: '2-4 weeks',
      features: [
        'Natural language processing with context understanding',
        'Multi-channel support (chat, voice, email, social)',
        'Intelligent routing and escalation management',
        'Sentiment analysis and emotional intelligence',
        'Continuous learning from customer interactions',
        'Integration with CRM and knowledge base systems'
      ],
      benefits: [
        'Handle 80% of customer inquiries automatically',
        'Improve response time by 90%',
        'Increase customer satisfaction by 40%',
        'Reduce support costs by 70%'
      ],
      category: 'Customer Service AI',
      popular: true,
      link: '/services/conversational-ai-platform'
    }
  ];

  const itServices = [
    {
      name: 'Zero-Trust Security Architecture',
      description: 'Comprehensive security framework implementing zero-trust principles across all systems and networks.',
      price: '$4,999 - $24,999/month',
      delivery: '6-12 weeks',
      features: [
        'Identity and access management (IAM) implementation',
        'Network segmentation and micro-segmentation',
        'Continuous security monitoring and threat detection',
        'Multi-factor authentication and privileged access management',
        'Security policy automation and compliance reporting',
        'Incident response and forensic analysis capabilities'
      ],
      benefits: [
        'Reduce security breaches by 90%',
        'Ensure compliance with industry standards',
        'Improve security posture significantly',
        'Lower security management costs by 50%'
      ],
      category: 'Cybersecurity',
      popular: true,
      link: '/services/zero-trust-security'
    },
    {
      name: 'Cloud Migration & DevOps Automation',
      description: 'Seamless cloud transitions with automated DevOps pipelines and infrastructure management.',
      price: '$6,000 - $28,000/month',
      delivery: '4-10 weeks',
      features: [
        'Cloud architecture design and migration planning',
        'Automated CI/CD pipeline development',
        'Infrastructure as Code (IaC) implementation',
        'Container orchestration with Kubernetes',
        'Monitoring and observability setup',
        'Disaster recovery and backup automation'
      ],
      benefits: [
        'Reduce deployment time by 80%',
        'Improve system reliability by 95%',
        'Lower infrastructure costs by 40%',
        'Enable rapid scaling and innovation'
      ],
      category: 'Cloud Services',
      popular: true,
      link: '/services/cloud-migration-devops'
    },
    {
      name: 'Data Compliance Toolkit (SOC 2/HIPAA/GDPR)',
      description: 'Comprehensive compliance solution for data protection regulations with automated monitoring.',
      price: '$2,500 - $14,000/month',
      delivery: '3-8 weeks',
      features: [
        'Automated compliance assessment and gap analysis',
        'Policy management and access control implementation',
        'Data mapping and privacy impact assessments',
        'Continuous monitoring and audit trail generation',
        'Incident response and breach notification automation',
        'Compliance reporting and certification support'
      ],
      benefits: [
        'Achieve compliance 3x faster than traditional methods',
        'Reduce compliance costs by 60%',
        'Ensure continuous compliance monitoring',
        'Minimize risk of regulatory penalties'
      ],
      category: 'Compliance',
      popular: false,
      link: '/services/data-compliance-toolkit'
    },
    {
      name: 'Observability Stack (OpenTelemetry + Grafana)',
      description: 'Unified monitoring solution with logs, metrics, traces, and SLOs for comprehensive system visibility.',
      price: '$1,800 - $9,500/month',
      delivery: '2-5 weeks',
      features: [
        'OpenTelemetry auto-instrumentation and sampling',
        'Unified logging, metrics, and distributed tracing',
        'SLO/SLA monitoring with error budget tracking',
        'Automated alerting and incident management',
        'Cost optimization and retention policy management',
        'Integration with on-call systems and ticketing'
      ],
      benefits: [
        'Reduce mean time to resolution by 70%',
        'Improve system uptime by 25%',
        'Lower monitoring costs by 40%',
        'Enable proactive issue detection and prevention'
      ],
      category: 'Monitoring',
      popular: false,
      link: '/services/observability-stack'
    },
    {
      name: 'Platform Engineering for Kubernetes',
      description: 'Developer platform with golden paths, templates, and paved roads for secure, fast delivery.',
      price: '$6,000 - $28,000/month',
      delivery: '4-10 weeks',
      features: [
        'Internal Developer Platform (IDP) implementation',
        'Backstage/Score templates and service catalogs',
        'Multi-tenant Kubernetes clusters with policy guardrails',
        'GitOps workflows with automated deployments',
        'Secrets management and SSO integration',
        'SRE dashboards and operational runbooks'
      ],
      benefits: [
        'Accelerate developer productivity by 50%',
        'Reduce deployment failures by 80%',
        'Improve security posture significantly',
        'Enable self-service infrastructure provisioning'
      ],
      category: 'Platform Engineering',
      popular: true,
      link: '/services/platform-engineering-kubernetes'
    },
    {
      name: 'MLOps as a Service',
      description: 'Managed machine learning operations with automated pipelines, monitoring, and governance.',
      price: '$3,500 - $16,000/month',
      delivery: '4-8 weeks',
      features: [
        'Feature stores and model registry management',
        'Automated model training and evaluation pipelines',
        'Canary deployments and A/B testing frameworks',
        'Data drift and model performance monitoring',
        'Model cards, lineage tracking, and reproducibility',
        'Compliance-ready audit trails and governance'
      ],
      benefits: [
        'Reduce ML model deployment time by 75%',
        'Improve model accuracy and reliability',
        'Ensure compliance with ML governance standards',
        'Lower ML operations costs by 60%'
      ],
      category: 'MLOps',
      popular: false,
      link: '/services/mlops-as-a-service'
    }
  ];

  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <link rel="canonical" href={`${websiteHref}/enhanced-services-catalog`} />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Header Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Enhanced Services Catalog
              </h1>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Comprehensive suite of innovative micro SaaS, AI services, and IT solutions designed to transform your business with cutting-edge technology and automation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a 
                  href={phoneHref} 
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Call: +1 302 464 0950
                </a>
                <a 
                  href={emailHref} 
                  className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Email: kleber@ziontechgroup.com
                </a>
              </div>
              <div className="text-sm text-blue-200">
                <p>364 E Main St STE 1008, Middletown DE 19709</p>
                <p>Visit us at: <a href={websiteHref} className="underline hover:text-white">{websiteHref}</a></p>
              </div>
            </div>
          </div>
        </section>

        {/* Micro SaaS Services Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-4">
                <Code className="h-8 w-8 text-orange-600 mr-3" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Micro SaaS Solutions</h2>
              </div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Targeted business applications with rapid deployment, immediate ROI, and scalable architecture designed for specific industry needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaaSServices.map((service, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center mr-3">
                          <Code className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <span className="text-sm text-gray-500">{service.category}</span>
                          {service.popular && (
                            <div className="flex items-center mt-1">
                              <Star className="w-4 h-4 text-yellow-400 fill-current" />
                              <span className="text-xs text-yellow-600 ml-1">Popular</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.name}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>

                    <div className="space-y-2 mb-6">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-start text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                      {service.features.length > 4 && (
                        <div className="text-sm text-gray-500">
                          +{service.features.length - 4} more features
                        </div>
                      )}
                    </div>

                    <div className="border-t pt-4">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-lg font-semibold text-orange-600">{service.price}</span>
                        <span className="text-sm text-gray-500">{service.delivery}</span>
                      </div>
                      <Link 
                        href={service.link}
                        className="w-full bg-orange-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors text-center block"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Services Section */}
        <section className="py-16 bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-4">
                <Brain className="h-8 w-8 text-blue-400 mr-3" />
                <h2 className="text-3xl md:text-4xl font-bold text-white">AI Services</h2>
              </div>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Cutting-edge artificial intelligence solutions for enterprise transformation, automation, and intelligent decision-making.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <div key={index} className="bg-slate-800 rounded-2xl shadow-lg border border-slate-700 overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-3">
                          <Brain className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <span className="text-sm text-blue-300">{service.category}</span>
                          {service.popular && (
                            <div className="flex items-center mt-1">
                              <Star className="w-4 h-4 text-yellow-400 fill-current" />
                              <span className="text-xs text-yellow-400 ml-1">Popular</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-white mb-3">{service.name}</h3>
                    <p className="text-blue-100 mb-4">{service.description}</p>

                    <div className="space-y-2 mb-6">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-start text-sm text-blue-200">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                      {service.features.length > 4 && (
                        <div className="text-sm text-blue-300">
                          +{service.features.length - 4} more features
                        </div>
                      )}
                    </div>

                    <div className="border-t border-slate-700 pt-4">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-lg font-semibold text-blue-400">{service.price}</span>
                        <span className="text-sm text-blue-300">{service.delivery}</span>
                      </div>
                      <Link 
                        href={service.link}
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center block"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IT Services Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-4">
                <Cloud className="h-8 w-8 text-green-600 mr-3" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">IT Services</h2>
              </div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Enterprise-grade infrastructure, security, and cloud solutions designed for scalability, reliability, and performance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg flex items-center justify-center mr-3">
                          <Cloud className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <span className="text-sm text-gray-500">{service.category}</span>
                          {service.popular && (
                            <div className="flex items-center mt-1">
                              <Star className="w-4 h-4 text-yellow-400 fill-current" />
                              <span className="text-xs text-yellow-600 ml-1">Popular</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.name}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>

                    <div className="space-y-2 mb-6">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-start text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                      {service.features.length > 4 && (
                        <div className="text-sm text-gray-500">
                          +{service.features.length - 4} more features
                        </div>
                      )}
                    </div>

                    <div className="border-t pt-4">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-lg font-semibold text-green-600">{service.price}</span>
                        <span className="text-sm text-gray-500">{service.delivery}</span>
                      </div>
                      <Link 
                        href={service.link}
                        className="w-full bg-green-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors text-center block"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Get a customized proposal for your specific needs. Our team of experts is ready to help you implement the perfect solution.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <Phone className="h-8 w-8 text-blue-200 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold mb-2">Call Us</h3>
                  <a href={phoneHref} className="text-blue-200 hover:text-white transition-colors">
                    +1 302 464 0950
                  </a>
                </div>
                <div className="text-center">
                  <Mail className="h-8 w-8 text-blue-200 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold mb-2">Email Us</h3>
                  <a href={emailHref} className="text-blue-200 hover:text-white transition-colors">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="text-center">
                  <MapPin className="h-8 w-8 text-blue-200 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
                  <p className="text-blue-200">
                    364 E Main St STE 1008<br />
                    Middletown DE 19709
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href={phoneHref} 
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Schedule a Call
                </a>
                <a 
                  href={emailHref} 
                  className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Get Custom Quote
                </a>
                <a 
                  href={websiteHref} 
                  className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 transition-colors"
                >
                  Visit Our Website
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}