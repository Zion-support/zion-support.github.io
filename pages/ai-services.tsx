import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {
  Brain,
  Zap,
  Shield,
  Database,
  BarChart3,
  Users,
  MessageSquare,
  Search,
  Eye,
  Target,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Clock,
  Award,
  Star,
  Globe,
  Lock,
  Cpu,
  Bot,
  FileText,
  Image,
  Video,
  Mic,
  Code,
  Settings,
  Monitor,
  Smartphone,
  Cloud,
  Server
} from 'lucide-react';
import PageTransition from '../src/components/PageTransition';

export default function AIServices() {
  const title = 'AI Services — Zion Tech Group';
  const description = 'Cutting-edge AI solutions including autonomous systems, machine learning, natural language processing, and intelligent automation.';

  const aiServices = [
    {
      title: 'AI-Powered Email Responder',
      description: 'Automated email responses with sentiment analysis and intelligent categorization',
      icon: MessageSquare,
      features: [
        'Smart email categorization and prioritization',
        'Automated response generation with personalization',
        'Sentiment analysis and escalation triggers',
        'Integration with CRM and helpdesk systems',
        'Multi-language support and compliance'
      ],
      pricing: '$2,500 - $8,000/month',
      delivery: '2-3 weeks',
      category: 'Communication AI'
    },
    {
      title: 'AI Content Creation Suite',
      description: 'Comprehensive AI-powered content generation for marketing, social media, and documentation',
      icon: FileText,
      features: [
        'Automated blog posts and articles',
        'Social media content generation',
        'Product descriptions and marketing copy',
        'Technical documentation creation',
        'SEO-optimized content with keyword integration'
      ],
      pricing: '$1,500 - $5,000/month',
      delivery: '1-2 weeks',
      category: 'Content AI'
    },
    {
      title: 'Intelligent Document Processing',
      description: 'AI-powered document analysis, extraction, and processing for business automation',
      icon: FileText,
      features: [
        'Automated data extraction from PDFs and forms',
        'Document classification and routing',
        'OCR with 99%+ accuracy',
        'Contract analysis and risk assessment',
        'Compliance monitoring and reporting'
      ],
      pricing: '$3,000 - $12,000/month',
      delivery: '3-4 weeks',
      category: 'Document AI'
    },
    {
      title: 'AI-Powered Talent Matching',
      description: 'Advanced recruitment platform with AI-driven candidate screening and matching',
      icon: Users,
      features: [
        'Resume parsing and skill extraction',
        'Cultural fit and personality analysis',
        'Automated interview scheduling',
        'Bias detection and elimination',
        'Predictive hiring success metrics'
      ],
      pricing: '$4,000 - $15,000/month',
      delivery: '4-6 weeks',
      category: 'HR AI'
    },
    {
      title: 'Computer Vision Solutions',
      description: 'Image and video analysis for quality control, security, and automation',
      icon: Eye,
      features: [
        'Real-time object detection and recognition',
        'Quality control and defect detection',
        'Facial recognition and access control',
        'Video analytics and monitoring',
        'Custom model training and deployment'
      ],
      pricing: '$5,000 - $20,000/month',
      delivery: '6-8 weeks',
      category: 'Vision AI'
    },
    {
      title: 'AI Chatbot & Virtual Assistant',
      description: 'Intelligent conversational AI for customer support and business automation',
      icon: Bot,
      features: [
        'Natural language understanding',
        'Multi-channel deployment (web, mobile, voice)',
        'Integration with business systems',
        'Sentiment analysis and escalation',
        'Continuous learning and improvement'
      ],
      pricing: '$2,000 - $10,000/month',
      delivery: '2-4 weeks',
      category: 'Conversational AI'
    },
    {
      title: 'Predictive Analytics Platform',
      description: 'AI-driven forecasting and predictive modeling for business intelligence',
      icon: TrendingUp,
      features: [
        'Sales forecasting and demand planning',
        'Customer churn prediction',
        'Financial risk assessment',
        'Market trend analysis',
        'Real-time dashboard and alerts'
      ],
      pricing: '$6,000 - $25,000/month',
      delivery: '8-12 weeks',
      category: 'Analytics AI'
    },
    {
      title: 'AI-Powered Search Engine',
      description: 'Intelligent search with semantic understanding and personalized results',
      icon: Search,
      features: [
        'Semantic search with natural language queries',
        'Personalized search results',
        'Auto-complete and suggestions',
        'Multi-language support',
        'Analytics and search optimization'
      ],
      pricing: '$3,500 - $12,000/month',
      delivery: '4-6 weeks',
      category: 'Search AI'
    },
    {
      title: 'AI-Powered Fraud Detection',
      description: 'Advanced fraud detection and prevention using machine learning algorithms',
      icon: Shield,
      features: [
        'Real-time transaction monitoring',
        'Behavioral pattern analysis',
        'Risk scoring and assessment',
        'Adaptive learning algorithms',
        'False positive reduction',
        'Compliance reporting and audit trails'
      ],
      pricing: '$8,000 - $30,000/month',
      delivery: '6-10 weeks',
      category: 'Security AI'
    },
    {
      title: 'AI Voice Cloning & Synthesis',
      description: 'High-quality voice synthesis and cloning for personalized audio content',
      icon: Mic,
      features: [
        'Natural voice synthesis in multiple languages',
        'Voice cloning with minimal training data',
        'Emotion and tone control',
        'Real-time voice conversion',
        'API integration for applications',
        'Voice authentication and verification'
      ],
      pricing: '$5,000 - $20,000/month',
      delivery: '4-8 weeks',
      category: 'Voice AI'
    },
    {
      title: 'AI-Powered Code Generation',
      description: 'Intelligent code generation and software development assistance',
      icon: Code,
      features: [
        'Automated code generation from natural language',
        'Code review and optimization suggestions',
        'Bug detection and fixing recommendations',
        'Documentation generation',
        'Multi-language support (Python, JavaScript, Java, etc.)',
        'Integration with popular IDEs and development tools'
      ],
      pricing: '$4,000 - $15,000/month',
      delivery: '3-6 weeks',
      category: 'Development AI'
    },
    {
      title: 'AI-Powered Medical Diagnosis',
      description: 'Medical image analysis and diagnostic assistance using deep learning',
      icon: Eye,
      features: [
        'Medical image analysis (X-rays, MRIs, CT scans)',
        'Disease detection and classification',
        'Treatment recommendation systems',
        'Drug interaction analysis',
        'Patient risk assessment',
        'HIPAA-compliant data handling'
      ],
      pricing: '$15,000 - $50,000/month',
      delivery: '8-16 weeks',
      category: 'Healthcare AI'
    },
    {
      title: 'AI-Powered Supply Chain Optimization',
      description: 'Intelligent supply chain management with predictive analytics',
      icon: TrendingUp,
      features: [
        'Demand forecasting and planning',
        'Route optimization and logistics',
        'Inventory optimization algorithms',
        'Supplier performance analysis',
        'Risk assessment and mitigation',
        'Cost optimization recommendations'
      ],
      pricing: '$10,000 - $40,000/month',
      delivery: '6-12 weeks',
      category: 'Supply Chain AI'
    },
    {
      title: 'AI-Powered Personalization Engine',
      description: 'Real-time personalization for e-commerce and content platforms',
      icon: Users,
      features: [
        'Real-time recommendation systems',
        'Behavioral pattern analysis',
        'Dynamic content personalization',
        'A/B testing automation',
        'Cross-platform user journey tracking',
        'Conversion optimization algorithms'
      ],
      pricing: '$6,000 - $25,000/month',
      delivery: '4-8 weeks',
      category: 'Personalization AI'
    },
    {
      title: 'AI-Powered Quality Assurance',
      description: 'Automated quality testing and assurance for software and products',
      icon: CheckCircle,
      features: [
        'Automated test case generation',
        'Visual regression testing',
        'Performance testing automation',
        'Defect prediction and prevention',
        'Quality metrics and reporting',
        'Integration with CI/CD pipelines'
      ],
      pricing: '$3,500 - $12,000/month',
      delivery: '3-6 weeks',
      category: 'QA AI'
    },
    {
      title: 'AI-Powered Financial Trading',
      description: 'Algorithmic trading and financial market analysis using AI',
      icon: BarChart3,
      features: [
        'Market trend analysis and prediction',
        'Automated trading strategies',
        'Risk management and portfolio optimization',
        'Real-time market monitoring',
        'Sentiment analysis of financial news',
        'Backtesting and strategy validation'
      ],
      pricing: '$12,000 - $50,000/month',
      delivery: '8-16 weeks',
      category: 'FinTech AI'
    },
    {
      title: 'AI-Powered Energy Management',
      description: 'Smart energy optimization and consumption prediction systems',
      icon: Zap,
      features: [
        'Energy consumption prediction and optimization',
        'Smart grid management',
        'Renewable energy integration',
        'Load balancing algorithms',
        'Cost optimization and savings analysis',
        'Environmental impact monitoring'
      ],
      pricing: '$8,000 - $30,000/month',
      delivery: '6-12 weeks',
      category: 'Energy AI'
    },
    {
      title: 'AI-Powered Language Translation',
      description: 'Real-time, context-aware translation with cultural adaptation',
      icon: Globe,
      features: [
        'Real-time translation in 100+ languages',
        'Context-aware translation with cultural adaptation',
        'Document and website translation',
        'Voice translation and interpretation',
        'Custom domain-specific translation models',
        'API integration for applications'
      ],
      pricing: '$2,500 - $10,000/month',
      delivery: '2-4 weeks',
      category: 'Translation AI'
    },
    {
      title: 'AI-Powered Cybersecurity',
      description: 'Advanced threat detection and cybersecurity automation',
      icon: Shield,
      features: [
        'Real-time threat detection and analysis',
        'Automated incident response',
        'Behavioral anomaly detection',
        'Vulnerability assessment and prioritization',
        'Security orchestration and automation',
        'Compliance monitoring and reporting'
      ],
      pricing: '$7,000 - $25,000/month',
      delivery: '4-8 weeks',
      category: 'Cybersecurity AI'
    }
  ];

  const aiTechnologies = [
    { name: 'Machine Learning', icon: Brain, description: 'Custom ML models and algorithms' },
    { name: 'Natural Language Processing', icon: MessageSquare, description: 'Text analysis and generation' },
    { name: 'Computer Vision', icon: Eye, description: 'Image and video processing' },
    { name: 'Deep Learning', icon: Cpu, description: 'Neural networks and deep architectures' },
    { name: 'Reinforcement Learning', icon: Target, description: 'Autonomous decision making' },
    { name: 'Generative AI', icon: FileText, description: 'Content creation and synthesis' }
  ];

  const benefits = [
    {
      title: 'Increased Efficiency',
      description: 'Automate repetitive tasks and processes',
      icon: Zap,
      stat: '80%'
    },
    {
      title: 'Cost Reduction',
      description: 'Reduce operational costs through automation',
      icon: TrendingUp,
      stat: '60%'
    },
    {
      title: 'Enhanced Accuracy',
      description: 'Minimize human errors with AI precision',
      icon: Target,
      stat: '95%'
    },
    {
      title: '24/7 Availability',
      description: 'Round-the-clock AI-powered services',
      icon: Clock,
      stat: '99.9%'
    }
  ];

  return (
    <PageTransition>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-services" />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex items-center justify-center mb-6">
              <Brain className="h-12 w-12 text-blue-600 mr-4" />
              <Award className="h-6 w-6 text-blue-600 mr-2" />
              <span className="text-base font-semibold leading-7 text-blue-600">AI Services</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Artificial Intelligence Solutions
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Transform your business with cutting-edge AI technologies. From machine learning to natural language processing, 
              we deliver intelligent solutions that drive growth and efficiency.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 inline" />
              </Link>
              <Link
                href="/pricing-guide"
                className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600"
              >
                View Pricing <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Choose Our AI Services?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Proven results and measurable impact for your business
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{benefit.stat}</h3>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Technologies */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              AI Technologies We Master
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Cutting-edge AI technologies powering the future of business
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {aiTechnologies.map((tech, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                    <tech.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 ml-4">{tech.name}</h3>
                </div>
                <p className="text-gray-600">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Services Grid */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our AI Service Portfolio
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Comprehensive AI solutions tailored to your business needs. All services include implementation, 
              training, and ongoing support. Contact us at{' '}
              <a href="mailto:kleber@ziontechgroup.com" className="text-blue-600 hover:text-blue-500">
                kleber@ziontechgroup.com
              </a>{' '}
              or call{' '}
              <a href="tel:+13024640950" className="text-blue-600 hover:text-blue-500">
                +1 302 464 0950
              </a>{' '}
              for custom pricing.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {aiServices.map((service, index) => (
              <div key={index} className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-x-3 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 group-hover:bg-blue-700 transition-colors">
                    <service.icon className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                    <p className="text-sm text-blue-600 font-medium">{service.category}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-x-3">
                      <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{service.delivery}</span>
                    </div>
                    <div className="font-semibold text-blue-600">{service.pricing}</div>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-500 transition-colors group"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Let's discuss how our AI solutions can drive your business forward. 
              Get a free consultation and custom proposal.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-blue-600 shadow-sm hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Schedule Consultation
              </Link>
              <a
                href="tel:+13024640950"
                className="text-sm font-semibold leading-6 text-white hover:text-blue-100"
              >
                Call +1 302 464 0950 <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}