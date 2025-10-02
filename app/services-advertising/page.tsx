import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
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
  Users,
  Database,
  Globe,
  Smartphone,
  Lock,
  TrendingUp,
  Target,
  Clock,
  Star,
  Phone,
  Mail,
  MapPin,
  Rocket,
  Cpu,
  FileText,
  Camera,
  Mic,
  Eye,
  Heart,
  ShoppingCart,
  CreditCard,
  Building,
  Wrench,
  Layers,
  GitBranch,
  Container,
  Key,
  AlertTriangle,
  CheckSquare,
  PieChart,
  Activity,
  Zap as Lightning,
  Award,
  Fingerprint
} from 'lucide-react';

export default function ServicesAdvertisingPage() {
  const title = 'Zion Tech Group Services — AI, Micro SaaS & IT Solutions';
  const description = 'Comprehensive AI services, micro SaaS solutions, and IT services with transparent pricing, proven ROI, and fast delivery. Contact us for custom solutions.';

  const aiServices = [
    {
      name: 'AI Quantum Computing Solutions',
      description: 'Revolutionary quantum AI for optimization, cryptography, and scientific computing',
      icon: Cpu,
      pricing: '$25,000 - $150,000/month',
      marketPrice: '$50,000 - $300,000/month',
      benefits: '1000x speedup, breakthrough performance',
      category: 'Quantum AI',
      features: ['Quantum ML', 'Cryptography', 'Optimization', 'Drug Discovery'],
      link: '/services/ai-quantum-computing-2026'
    },
    {
      name: 'Autonomous Business Operations',
      description: 'AI-powered systems that run your business operations autonomously',
      icon: Zap,
      pricing: '$15,000 - $75,000/month',
      marketPrice: '$30,000 - $150,000/month',
      benefits: '85% efficiency improvement, 95% automation',
      category: 'Autonomous AI',
      features: ['Process Automation', 'Infrastructure', 'Customer Experience', 'Financial Ops'],
      link: '/services/ai-autonomous-business-operations'
    },
    {
      name: 'Advanced Fraud Detection',
      description: 'Next-generation AI fraud detection with 99.9% accuracy',
      icon: Shield,
      pricing: '$5,000 - $35,000/month',
      marketPrice: '$10,000 - $70,000/month',
      benefits: '90% fraud reduction, 85% fewer false positives',
      category: 'Security AI',
      features: ['Transaction Monitoring', 'Behavioral Analytics', 'Threat Intelligence', 'Document Verification'],
      link: '/services/ai-services/ai-fraud-detection-advanced'
    },
    {
      name: 'Computer Vision Analytics',
      description: 'AI-powered visual inspection and analysis for manufacturing and healthcare',
      icon: Eye,
      pricing: '$3,500 - $25,000/month',
      marketPrice: '$5,000 - $50,000/month',
      benefits: '99.5% accuracy, 90% defect reduction',
      category: 'Computer Vision',
      features: ['Quality Control', 'Medical Imaging', 'Security Monitoring', 'Automotive'],
      link: '/services/ai-services'
    },
    {
      name: 'Natural Language Processing',
      description: 'Advanced NLP for document analysis, sentiment, and content generation',
      icon: FileText,
      pricing: '$2,000 - $15,000/month',
      marketPrice: '$3,000 - $30,000/month',
      benefits: '80% automation, 95% accuracy improvement',
      category: 'NLP',
      features: ['Document Analysis', 'Sentiment Analysis', 'Content Generation', 'Translation'],
      link: '/services/ai-services'
    },
    {
      name: 'Predictive Analytics Engine',
      description: 'Machine learning models for forecasting, risk assessment, and optimization',
      icon: BarChart3,
      pricing: '$4,000 - $20,000/month',
      marketPrice: '$6,000 - $40,000/month',
      benefits: '60% accuracy improvement, 75% risk reduction',
      category: 'Predictive Analytics',
      features: ['Sales Forecasting', 'Risk Management', 'Supply Chain', 'Financial Planning'],
      link: '/services/ai-services'
    }
  ];

  const microSaaSServices = [
    {
      name: 'AI Predictive Maintenance',
      description: 'IoT-powered predictive maintenance with AI failure prediction',
      icon: Wrench,
      pricing: '$299 - $2,500/month',
      marketPrice: '$500 - $5,000/month',
      benefits: '80% downtime reduction, 30% cost savings',
      category: 'IoT & Maintenance',
      features: ['Sensor Integration', 'Failure Prediction', 'Smart Scheduling', 'Mobile Apps'],
      link: '/services/micro-saas/ai-predictive-maintenance'
    },
    {
      name: 'AI Customer Support Automation',
      description: 'Intelligent chatbot with sentiment analysis and escalation management',
      icon: MessageSquare,
      pricing: '$1,200 - $8,500/month',
      marketPrice: '$2,000 - $15,000/month',
      benefits: '60% cost reduction, 80% response time improvement',
      category: 'Customer Experience',
      features: ['Natural Language', 'Multi-channel', 'Sentiment Analysis', 'CRM Integration'],
      link: '/services/micro-saas'
    },
    {
      name: 'Cloud Cost Optimization',
      description: 'Automated cloud cost monitoring, rightsizing, and savings recommendations',
      icon: TrendingUp,
      pricing: '$299 - $2,500/month',
      marketPrice: '$500 - $5,000/month',
      benefits: '35% cost reduction, ROI in 3 months',
      category: 'FinOps',
      features: ['Cost Monitoring', 'Rightsizing', 'Budget Alerts', 'Multi-cloud Support'],
      link: '/services/micro-saas'
    },
    {
      name: 'AI Content Localization',
      description: 'Automated translation, localization, and SEO optimization for global markets',
      icon: Globe,
      pricing: '$399 - $3,200/month',
      marketPrice: '$800 - $8,000/month',
      benefits: '70% cost reduction, faster time-to-market',
      category: 'Globalization',
      features: ['Neural Translation', 'Cultural Adaptation', 'SEO Optimization', 'Workflow Management'],
      link: '/services/micro-saas'
    },
    {
      name: 'Healthcare Scheduling System',
      description: 'Smart scheduling with patient management, reminders, and telemedicine',
      icon: Heart,
      pricing: '$599 - $4,500/month',
      marketPrice: '$1,200 - $12,000/month',
      benefits: '40% no-show reduction, improved satisfaction',
      category: 'Healthcare',
      features: ['Smart Scheduling', 'Patient Portal', 'Telemedicine', 'HIPAA Compliance'],
      link: '/services/micro-saas'
    },
    {
      name: 'E-commerce Analytics Dashboard',
      description: 'Real-time analytics, conversion tracking, and customer behavior insights',
      icon: ShoppingCart,
      pricing: '$199 - $1,800/month',
      marketPrice: '$400 - $6,000/month',
      benefits: '25% conversion increase, optimized inventory',
      category: 'E-commerce',
      features: ['Real-time Analytics', 'Conversion Tracking', 'Inventory Integration', 'Predictive Analytics'],
      link: '/services/micro-saas'
    }
  ];

  const itServices = [
    {
      name: 'Cloud Migration & Architecture',
      description: 'Complete cloud transformation with modern architecture and best practices',
      icon: Cloud,
      pricing: '$8,000 - $75,000/project',
      marketPrice: '$15,000 - $150,000/project',
      benefits: '40% cost reduction, improved scalability',
      category: 'Cloud Services',
      features: ['Multi-cloud Strategy', 'Legacy Modernization', 'Kubernetes', 'Microservices'],
      link: '/services/it-services'
    },
    {
      name: 'DevOps & CI/CD Pipeline',
      description: 'Automated deployment pipelines with monitoring and security integration',
      icon: GitBranch,
      pricing: '$5,000 - $35,000/project',
      marketPrice: '$10,000 - $70,000/project',
      benefits: '5x faster deployment, 90% fewer failures',
      category: 'DevOps',
      features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Container Orchestration', 'Monitoring'],
      link: '/services/it-services'
    },
    {
      name: 'Cybersecurity & Compliance',
      description: 'Comprehensive security assessment, implementation, and compliance management',
      icon: Lock,
      pricing: '$3,000 - $50,000/project',
      marketPrice: '$6,000 - $100,000/project',
      benefits: 'Faster compliance, reduced security risks',
      category: 'Security',
      features: ['Security Assessment', 'Compliance Frameworks', 'Monitoring', 'Incident Response'],
      link: '/services/it-services'
    },
    {
      name: 'Data Engineering & Analytics',
      description: 'Modern data platform with real-time processing and advanced analytics',
      icon: Database,
      pricing: '$6,000 - $45,000/project',
      marketPrice: '$12,000 - $90,000/project',
      benefits: 'Unlock data insights, improve decision-making',
      category: 'Data Services',
      features: ['Data Lakes', 'Real-time Processing', 'ETL/ELT', 'Business Intelligence'],
      link: '/services/it-services'
    },
    {
      name: 'Platform Engineering',
      description: 'Internal developer platform with golden paths and self-service capabilities',
      icon: Layers,
      pricing: '$10,000 - $60,000/project',
      marketPrice: '$20,000 - $120,000/project',
      benefits: '3x faster development, improved consistency',
      category: 'Platform Engineering',
      features: ['Developer Portal', 'Golden Paths', 'Multi-tenant Infrastructure', 'GitOps'],
      link: '/services/it-services'
    },
    {
      name: 'Observability & Monitoring',
      description: 'Comprehensive monitoring solution with logs, metrics, traces, and alerting',
      icon: Activity,
      pricing: '$2,000 - $25,000/project',
      marketPrice: '$4,000 - $50,000/project',
      benefits: '70% MTTR reduction, improved reliability',
      category: 'Monitoring',
      features: ['Unified Observability', 'APM', 'Log Analysis', 'Distributed Tracing'],
      link: '/services/it-services'
    }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const stats = [
    { label: 'Projects Completed', value: '500+', icon: Target },
    { label: 'Average ROI', value: '340%', icon: DollarSign },
    { label: 'Client Satisfaction', value: '98%', icon: Star },
    { label: 'Average Delivery', value: '4 weeks', icon: Clock }
  ];

  const pricing = [
    {
      tier: 'Basic Services',
      range: '$99 - $299/month',
      description: 'Essential AI and micro SaaS solutions for small businesses',
      features: ['Basic AI tools', 'Simple automation', 'Standard support', 'Monthly updates']
    },
    {
      tier: 'Professional Services',
      range: '$399 - $1,299/month',
      description: 'Advanced solutions for growing businesses',
      features: ['Advanced AI', 'Custom automation', 'Priority support', 'Weekly updates']
    },
    {
      tier: 'Enterprise Solutions',
      range: '$2,499 - $15,000/month',
      description: 'Comprehensive solutions for large organizations',
      features: ['Enterprise AI', 'Full automation', '24/7 support', 'Daily updates']
    },
    {
      tier: 'Custom Solutions',
      range: 'Contact Us',
      description: 'Tailored solutions for specific business needs',
      features: ['Custom development', 'Dedicated team', 'White-glove service', 'Flexible pricing']
    }
  ];

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={`${contactInfo.website}/services-advertising`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
        {/* Header Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
          <div className="container mx-auto px-6 text-center">
            <div className="flex items-center justify-center mb-4">
              <Rocket className="h-8 w-8 mr-3" />
              <span className="text-lg font-semibold">Zion Tech Group Services</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI, Micro SaaS & IT Solutions
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-lg">
              <a 
                href={`tel:${contactInfo.phone}`} 
                className="flex items-center bg-white/20 hover:bg-white/30 px-6 py-3 rounded-lg transition-colors"
              >
                <Phone className="h-5 w-5 mr-2" />
                {contactInfo.phone}
              </a>
              <a 
                href={`mailto:${contactInfo.email}`} 
                className="flex items-center bg-white/20 hover:bg-white/30 px-6 py-3 rounded-lg transition-colors"
              >
                <Mail className="h-5 w-5 mr-2" />
                {contactInfo.email}
              </a>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <stat.icon className="h-12 w-12 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Services Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-4">
                <Brain className="h-8 w-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">AI Services & Solutions</h2>
              </div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Cutting-edge artificial intelligence solutions with proven ROI and fast implementation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-100">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{service.name}</h3>
                      <span className="text-sm text-blue-600 font-medium">{service.category}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="bg-blue-50 rounded-lg p-4 mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-lg font-bold text-blue-600">{service.pricing}</span>
                    </div>
                    <div className="text-sm text-gray-600 mb-2">
                      <strong>Market Price:</strong> {service.marketPrice}
                    </div>
                    <div className="text-sm text-green-700 font-medium">
                      <strong>Benefits:</strong> {service.benefits}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, idx) => (
                        <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Link 
                    href={service.link}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Micro SaaS Services Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-4">
                <Code className="h-8 w-8 text-orange-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Micro SaaS Solutions</h2>
              </div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Production-ready micro SaaS applications with fast deployment and transparent pricing.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaaSServices.map((service, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-100">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mr-4">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{service.name}</h3>
                      <span className="text-sm text-orange-600 font-medium">{service.category}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="bg-orange-50 rounded-lg p-4 mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-lg font-bold text-orange-600">{service.pricing}</span>
                    </div>
                    <div className="text-sm text-gray-600 mb-2">
                      <strong>Market Price:</strong> {service.marketPrice}
                    </div>
                    <div className="text-sm text-green-700 font-medium">
                      <strong>Benefits:</strong> {service.benefits}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, idx) => (
                        <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Link 
                    href={service.link}
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IT Services Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-4">
                <Cloud className="h-8 w-8 text-green-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">IT Services & Solutions</h2>
              </div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Enterprise-grade IT services with modern architecture and best practices.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-100">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl flex items-center justify-center mr-4">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{service.name}</h3>
                      <span className="text-sm text-green-600 font-medium">{service.category}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="bg-green-50 rounded-lg p-4 mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-lg font-bold text-green-600">{service.pricing}</span>
                    </div>
                    <div className="text-sm text-gray-600 mb-2">
                      <strong>Market Price:</strong> {service.marketPrice}
                    </div>
                    <div className="text-sm text-green-700 font-medium">
                      <strong>Benefits:</strong> {service.benefits}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, idx) => (
                        <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Link 
                    href={service.link}
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Transparent Pricing</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Clear pricing with no hidden costs. Choose the plan that fits your business needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {pricing.map((tier, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{tier.tier}</h3>
                  <div className="text-2xl font-bold text-blue-600 mb-4">{tier.range}</div>
                  <p className="text-gray-600 mb-6">{tier.description}</p>
                  
                  <div className="space-y-3">
                    {tier.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Contact us today for a free consultation and custom solution proposal tailored to your business needs.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="flex flex-col items-center">
                <Phone className="h-8 w-8 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Call Us</h3>
                <a href={`tel:${contactInfo.phone}`} className="text-blue-100 hover:text-white">
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="h-8 w-8 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Email Us</h3>
                <a href={`mailto:${contactInfo.email}`} className="text-blue-100 hover:text-white">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="h-8 w-8 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
                <span className="text-blue-100 text-center">{contactInfo.address}</span>
              </div>
            </div>
            
            <div className="bg-white/10 rounded-lg p-6 max-w-4xl mx-auto">
              <h3 className="text-xl font-semibold mb-4">Why Choose Zion Tech Group?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span>Transparent pricing with no hidden costs</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span>Fast delivery with proven methodologies</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span>Production-ready solutions with ongoing support</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span>Expert team with 10+ years experience</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}