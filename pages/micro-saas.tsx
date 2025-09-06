<<<<<<< HEAD
=======
import Link from 'next/link',
import Head from 'next/head';
import { useState, useEffect  } from 'react';
import { ContactInfo  } from '../types';
import ErrorBoundary from '../components/ErrorBoundary';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
<<<<<<< HEAD
import { 
  Zap, 
  Shield, 
  BarChart3, 
  Users, 
  Smartphone, 
  Globe, 
  Database, 
  Lock, 
  CheckCircle, 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin, 
  DollarSign, 
  Clock, 
  Award,
  TrendingUp,
  Target,
  Star,
  Rocket,
  Brain,
  Cpu,
  Cloud,
  FileText,
  Settings,
  Monitor
} from 'lucide-react';

const contactInfo = {
  phone: "+1 302 464 0950",
  email: "kleber@ziontechgroup.com",
  address: "364 E Main St STE 1008 Middletown DE 19709"
};

const microSaasServices = [
  {
    id: 1,
    title: 'AI-Powered Analytics Dashboard',
    description: 'Real-time business intelligence with predictive analytics, automated reporting, and custom KPI tracking for data-driven decision making.',
    icon: BarChart3,
    category: 'Analytics',
    price: 'Starting at $299/month',
    marketPrice: '$599-1,200/month',
    setupTime: '2-3 weeks',
    features: [
      'Real-time data visualization',
      'Predictive analytics & forecasting',
      'Custom KPI dashboards',
      'Automated report generation',
      'Multi-source data integration',
      'Mobile-responsive design',
      'White-label customization',
      'API access & webhooks'
    ],
    benefits: [
      'Increase decision speed by 70%',
      'Reduce manual reporting by 90%',
      'Improve forecast accuracy by 40%',
      'Enable data-driven growth'
    ],
    targetUsers: 'SMBs, Startups, Agencies, Consultants',
    roi: '300-500%',
    popular: true
  },
  {
    id: 2,
    title: 'Smart CRM & Lead Management',
    description: 'Intelligent customer relationship management with AI-powered lead scoring, automated follow-ups, and sales pipeline optimization.',
    icon: Users,
    category: 'CRM',
    price: 'Starting at $199/month',
    marketPrice: '$399-800/month',
    setupTime: '1-2 weeks',
    features: [
      'AI-powered lead scoring',
      'Automated email sequences',
      'Sales pipeline management',
      'Contact & company profiles',
      'Deal tracking & forecasting',
      'Integration with 100+ tools',
      'Mobile app included',
      'Custom field creation'
    ],
    benefits: [
      'Increase sales conversion by 35%',
      'Reduce lead response time by 80%',
      'Improve sales forecasting accuracy',
      'Streamline customer management'
    ],
    targetUsers: 'Sales Teams, Agencies, Consultants, SMBs',
    roi: '250-400%',
    popular: true
  },
  {
    id: 3,
    title: 'Automated Social Media Manager',
    description: 'AI-driven social media management with content creation, scheduling, engagement tracking, and performance analytics across all platforms.',
    icon: Globe,
    category: 'Social Media',
    price: 'Starting at $149/month',
    marketPrice: '$299-600/month',
    setupTime: '1-2 weeks',
    features: [
      'AI content generation',
      'Multi-platform posting',
      'Engagement automation',
      'Hashtag optimization',
      'Performance analytics',
      'Competitor analysis',
      'Content calendar management',
      'Team collaboration tools'
    ],
    benefits: [
      'Save 15+ hours per week',
      'Increase engagement by 60%',
      'Grow followers by 200%',
      'Improve brand consistency'
    ],
    targetUsers: 'Marketing Agencies, Brands, Influencers, SMBs',
    roi: '200-350%',
    popular: true
  },
  {
    id: 4,
    title: 'Intelligent Project Management',
    description: 'AI-enhanced project management with automated task assignment, resource optimization, deadline tracking, and team collaboration tools.',
    icon: Target,
    category: 'Project Management',
    price: 'Starting at $179/month',
    marketPrice: '$359-700/month',
    setupTime: '1-2 weeks',
    features: [
      'AI task prioritization',
      'Automated resource allocation',
      'Time tracking & reporting',
      'Team collaboration tools',
      'Gantt charts & timelines',
      'Budget tracking',
      'Risk assessment',
      'Integration with 50+ tools'
    ],
    benefits: [
      'Complete projects 25% faster',
      'Reduce project overruns by 40%',
      'Improve team productivity by 30%',
      'Better resource utilization'
    ],
    targetUsers: 'Project Managers, Agencies, Consultants, Teams',
    roi: '180-300%',
    popular: false
  },
  {
    id: 5,
    title: 'Smart Email Marketing Platform',
    description: 'Advanced email marketing with AI-powered segmentation, personalization, A/B testing, and automated campaign optimization.',
    icon: Mail,
    category: 'Email Marketing',
    price: 'Starting at $99/month',
    marketPrice: '$199-400/month',
    setupTime: '1 week',
    features: [
      'AI-powered segmentation',
      'Dynamic content personalization',
      'Automated A/B testing',
      'Behavioral triggers',
      'Advanced analytics',
      'Template library',
      'Deliverability optimization',
      'Compliance tools (GDPR, CAN-SPAM)'
    ],
    benefits: [
      'Increase open rates by 45%',
      'Boost click-through rates by 60%',
      'Reduce unsubscribe rates by 30%',
      'Improve email deliverability'
    ],
    targetUsers: 'E-commerce, SaaS, Agencies, Marketers',
    roi: '220-380%',
    popular: true
  },
  {
    id: 6,
    title: 'AI Content Creation Suite',
    description: 'Comprehensive content creation platform with AI writing, image generation, video editing, and multi-format content optimization.',
    icon: FileText,
    category: 'Content Creation',
    price: 'Starting at $129/month',
    marketPrice: '$259-500/month',
    setupTime: '1 week',
    features: [
      'AI writing assistant',
      'Image generation & editing',
      'Video creation tools',
      'SEO optimization',
      'Multi-language support',
      'Brand voice training',
      'Content calendar',
      'Performance tracking'
    ],
    benefits: [
      'Create content 10x faster',
      'Reduce content costs by 70%',
      'Improve SEO rankings',
      'Maintain brand consistency'
    ],
    targetUsers: 'Content Creators, Agencies, Marketers, Bloggers',
    roi: '300-500%',
    popular: true
  },
  {
    id: 7,
    title: 'Automated Customer Support',
    description: 'AI-powered customer support with chatbots, ticket management, knowledge base, and multi-channel communication automation.',
    icon: Shield,
    category: 'Customer Support',
    price: 'Starting at $199/month',
    marketPrice: '$399-800/month',
    setupTime: '2-3 weeks',
    features: [
      'AI chatbot with NLP',
      'Ticket management system',
      'Knowledge base automation',
      'Multi-channel support',
      'Sentiment analysis',
      'Escalation management',
      'Performance analytics',
      'Integration with CRM'
    ],
    benefits: [
      'Reduce support costs by 60%',
      'Improve response time by 90%',
      'Increase customer satisfaction',
      'Handle 24/7 support automatically'
    ],
    targetUsers: 'E-commerce, SaaS, Service Businesses, Agencies',
    roi: '250-400%',
    popular: false
  },
  {
    id: 8,
    title: 'Smart Inventory Management',
    description: 'AI-powered inventory optimization with demand forecasting, automated reordering, supplier management, and cost optimization.',
    icon: Database,
    category: 'Inventory',
    price: 'Starting at $249/month',
    marketPrice: '$499-1,000/month',
    setupTime: '2-4 weeks',
    features: [
      'AI demand forecasting',
      'Automated reorder points',
      'Supplier management',
      'Cost optimization',
      'Multi-location tracking',
      'Barcode scanning',
      'Integration with POS/ERP',
      'Real-time reporting'
    ],
    benefits: [
      'Reduce inventory costs by 25%',
      'Eliminate stockouts by 80%',
      'Improve cash flow',
      'Optimize supplier relationships'
    ],
    targetUsers: 'Retailers, E-commerce, Manufacturers, Distributors',
    roi: '200-350%',
    popular: false
  }
];

const industries = [
  {
    title: "E-commerce & Retail",
    description: "Complete digital transformation solutions for online and offline retail businesses",
    icon: "🛒",
    useCases: ["Inventory management", "Customer analytics", "Marketing automation", "Order processing"]
  },
  {
    title: "Professional Services",
    description: "Streamlined operations for agencies, consultants, and service providers",
    icon: "💼",
    useCases: ["Client management", "Project tracking", "Time billing", "Resource planning"]
  },
  {
    title: "Healthcare & Wellness",
    description: "HIPAA-compliant solutions for healthcare providers and wellness businesses",
    icon: "🏥",
    useCases: ["Patient management", "Appointment scheduling", "Billing automation", "Compliance tracking"]
  },
  {
    title: "Real Estate",
    description: "Property management and client relationship tools for real estate professionals",
    icon: "🏠",
    useCases: ["Lead management", "Property listings", "Client communication", "Transaction tracking"]
  },
  {
    title: "Education & Training",
    description: "Learning management and student engagement platforms for educational institutions",
    icon: "🎓",
    useCases: ["Course management", "Student tracking", "Assessment tools", "Progress monitoring"]
  },
  {
    title: "Manufacturing",
    description: "Production optimization and supply chain management for manufacturing companies",
    icon: "🏭",
    useCases: ["Production planning", "Quality control", "Supplier management", "Cost tracking"]
  }
];

export default function MicroSaasPage() {
  return (
    <>
      <Head>
        <title>Micro SAAS Solutions - Zion Tech Group | AI-Powered Business Tools</title>
        <meta name="description" content="Comprehensive micro SAAS solutions including AI analytics, CRM, social media management, and more. Transform your business with affordable, powerful tools." />
        <meta name="keywords" content="micro saas, business software, AI tools, CRM, analytics, automation, project management, email marketing" />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Micro SAAS Solutions
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Powerful, affordable business tools that scale with your growth. From AI-powered analytics to automated workflows, 
                our micro SAAS solutions help you work smarter, not harder.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
=======
import {
  Cloud
  Zap
  BarChart3
  Leaf
  Truck
  FileText
  Target
  Users
  Shield
  Globe
  Smartphone
  Laptop
  Monitor
  Database
  Camera
  HardDrive
  ArrowRight
  CheckCircle
  Star
  Award
  Clock
  DollarSign
  TrendingUp
  Building
  ShoppingCart
  BookOpen
  Heart
  Car
  Cpu
  Settings
  Lock
  Wifi
  Network
  Server
  Code
  Package
  GraduationCap
  Atom
  AlertTriangle
  Link as LinkIcon
  Award as AwardIcon
  Star as StarIcon
  Home;
} from 'lucide-react';
import Layout from '../components/Layout';
export default function MicroSaaS() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  useEffect(() => {
    const timer = null;
      features: [
        'AI Content Analysis'
        'Auto-Editing'
        'Multiple Formats'
        'Cloud Processing'
      ]
      price: '$29/month'
      popular: true
    }
    {
      id: 2
      name: 'Smart Contract Analyzer'
      description:
        'Comprehensive analysis and security auditing for blockchain smart contracts.'
      category: 'security'
      features: [
        'Vulnerability Detection'
        'Gas Optimization'
        'Code Review'
        'Audit Reports'
      ]
      price: '$99/month'
      popular: false
    }
    {
      id: 3
      name: 'Cybersecurity Threat Intelligence'
      description:
        'Real-time threat monitoring and intelligence gathering for enhanced security.'
      category: 'security'
      features: [
        'Threat Detection'
        'Risk Assessment'
        'Incident Response'
        'Compliance Monitoring'
      ]
      price: '$149/month'
      popular: true
    }
    {
      id: 4
      name: 'Multi-Language Website Translator'
      description:
        'Automatically translate websites into multiple languages with context awareness.'
      category: 'automation'
      features: [
        '100+ Languages'
        'Context Translation'
        'SEO Optimization'
        'Real-time Updates'
      ]
      price: '$49/month'
      popular: false
    }
    {
      id: 5
      name: 'Predictive Inventory Optimizer'
      description:
        'AI-driven inventory management with demand forecasting and optimization.'
      category: 'analytics'
      features: [
        'Demand Forecasting'
        'Stock Optimization'
        'Cost Analysis'
        'Integration APIs'
      ]
      price: '$79/month'
      popular: true
    }
    {
      id: 6
      name: 'Real-Time Analytics Dashboard'
      description:
        'Comprehensive business intelligence dashboard with real-time data visualization.'
      category: 'analytics'
      features: [
        'Real-time Data'
        'Custom Dashboards'
        'Alert System'
        'Export Capabilities'
      ]
      price: '$59/month'
      popular: false
    }
    {
      id: 7
      name: 'Automated Customer Support'
      description:
        'AI-powered customer support system with natural language processing.'
      category: 'ai'
      features: [
        'Chatbot Integration'
        'Ticket Management'
        'Knowledge Base'
        'Multi-channel Support'
      ]
      price: '$89/month'
      popular: true
    }
    {
      id: 8
      name: 'Blockchain Transaction Monitor'
      description:
        'Monitor and analyze blockchain transactions across multiple networks.'
      category: 'analytics'
      features: [
        'Multi-chain Support'
        'Transaction Tracking'
        'Alert System'
        'API Access'
      ]
      price: '$69/month'
      popular: false
    }
    {
      id: 9
      name: 'Social Media Scheduler'
      description:
        'Advanced social media management with AI-powered content optimization.'
      category: 'marketing'
      features: [
        'Multi-platform'
        'Content Calendar'
        'Analytics'
        'Auto-posting'
      ]
      price: '$39/month'
      popular: false
    }
    {
      id: 10
      name: 'Document Processing AI'
      description:
        'Intelligent document processing with OCR and data extraction capabilities.'
      category: 'ai'
      features: [
        'OCR Technology'
        'Data Extraction'
        'Format Conversion'
        'Batch Processing'
      ]
      price: '$59/month'
      popular: true
    }
    {
      id: 11
      name: 'Workflow Automation Engine'
      description:
        'Create and manage complex business workflows with drag-and-drop interface.'
      category: 'automation'
      features: [
        'Visual Builder'
        'Integration Hub'
        'Conditional Logic'
        'Monitoring'
      ]
      price: '$79/month'
      popular: false
    }
    {
      id: 12
      name: 'Email Marketing Optimizer'
      description:
        'AI-powered email marketing with personalization and performance optimization.'
      category: 'marketing'
      features: [
        'Personalization'
        'A/B Testing'
        'Analytics'
        'Template Library'
      ]
      price: '$49/month'
      popular: true
    }
  ];
  const filteredProducts =
    selectedCategory === 'all'
      ? products
      : products.filter(product => product.category === selectedCategory);
export default function MicroSaas() {
  return (
    <Layout>
      <Head>
        <title>Micro SaaS Products - Zion Tech Group</title>
        <meta
          name='description'
          content='Explore our 150+ innovative micro SaaS products including AI-powered tools, analytics dashboards, automation solutions, and security services.'
        />
        <meta
          name='keywords'
          content='micro SaaS, SaaS products, AI tools, analytics, automation, security, productivity, marketing tools'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='robots' content='index, follow' />
        <link rel='canonical' href={`${contact.site}/micro-saas`} />
      </Head>
      <ErrorBoundary level='page'>
        <main className='min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white'>
          {/* Hero Section */}
          <section className='py-20 px-4 text-center' role='banner'>
            <div className='max-w-4xl mx-auto'>
              <h1
                className={`text-5xl md:text-6xl font-extrabold tracking-tight mb-6 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              >
                Micro SaaS Products
              </h1>
<p
                className={`text-xl md:text-2xl text-slate-300 mb-8 transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              >
                150+ Innovative Solutions for Modern Businesses
              </p>
              <p
                className={`text-lg text-slate-400 mb-12 max-w-3xl mx-auto transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              >
                Discover our comprehensive collection of micro SaaS products
                designed to solve specific business challenges with focused,
                efficient, and cost-effective solutions.
              </p>
            </div>
          </section>
          {/* Category Filter */}
<section className='py-8 px-4'>
            <div className='max-w-6xl mx-auto'>
              <div className='flex flex-wrap justify-center gap-4 mb-8'>
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>
          </section>
          {/* Products Grid */}
<section className='py-16 px-4' role='main'>
            <div className='max-w-7xl mx-auto'>
              <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {filteredProducts.map((product, index) => (
                  <div
                    key={product.id}
                    className={`p-6 bg-slate-900/60 rounded-xl border border-white/10 hover:border-blue-500/40 transition-all duration-300 hover:scale-105 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    {product.popular && (
<div className='absolute -top-2 -right-2 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full'>
                        Popular
                      </div>
                    )}
                    <h3 className='text-xl font-bold mb-3'>{product.name}</h3>
                    <p className='text-slate-300 mb-4 text-sm'>
                      {product.description}
                    </p>
                    <div className='mb-4'>
                      <h4 className='text-sm font-semibold text-blue-400 mb-2'>
                        Key Features:
                      </h4>
                      <ul className='text-slate-400 text-sm space-y-1'>
                        {product.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className='flex items-center'>
                            <span className='w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 flex-shrink-0'></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
<div className='flex items-center justify-between mb-4'>
                      <span className='text-2xl font-bold text-green-400'>
                        {product.price}
                      </span>
                      <span className='text-xs text-slate-500 capitalize'>
                        {product.category}
                      </span>
                    </div>

                    <button className='w-full py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors'>
                      Learn More
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>
          {/* Features Section */}
<section className='py-16 px-4 bg-slate-900/40'>
            <div className='max-w-6xl mx-auto'>
              <h2 className='text-3xl md:text-4xl font-bold text-center mb-12'>
                Why Choose Our Micro SaaS Products?
              </h2>
              <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                <div className='text-center'>
                  <div className='w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4'>
                    <svg
                      className='w-8 h-8 text-white'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M13 10V3L4 14h7v7l9-11h-7z'
                      />
                    </svg>
                  </div>
                  <h3 className='text-xl font-bold mb-2'>Lightning Fast</h3>
                  <p className='text-slate-400'>
                    Quick setup and deployment in minutes, not months
                  </p>
                </div>
                <div className='text-center'>
                  <div className='w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4'>
                    <svg
                      className='w-8 h-8 text-white'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1'
                      />
                    </svg>
                  </div>
                  <h3 className='text-xl font-bold mb-2'>Cost Effective</h3>
                  <p className='text-slate-400'>
                    Affordable pricing with no hidden costs or long-term
                    contracts
                  </p>
                </div>
                <div className='text-center'>
                  <div className='w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4'>
                    <svg
                      className='w-8 h-8 text-white'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                      />
                    </svg>
                  </div>
                  <h3 className='text-xl font-bold mb-2'>Focused Solutions</h3>
                  <p className='text-slate-400'>
                    Specialized tools that solve specific business problems
                  </p>
                </div>
                <div className='text-center'>
                  <div className='w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4'>
                    <svg
                      className='w-8 h-8 text-white'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
                      />
                    </svg>
                  </div>
                  <h3 className='text-xl font-bold mb-2'>Easy Integration</h3>
                  <p className='text-slate-400'>
                    Seamless integration with your existing tools and workflows
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* CTA Section */}
<section className='py-16 px-4'>
            <div className='max-w-4xl mx-auto text-center'>
              <h2 className='text-3xl md:text-4xl font-bold mb-8'>
                Ready to Get Started?
              </h2>
              <p className='text-lg text-slate-300 mb-8'>
                Contact our experts to discuss which micro SaaS products are
                right for your business and get started with a free trial.
              </p>
              <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
                <Link
                  href='/contact'
                  className='px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors'
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
                >
                  Get Free Consultation
                </Link>
                <a 
                  href={`tel:${contactInfo.phone}`}
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-lg"
                >
<<<<<<< HEAD
                  Call {contactInfo.phone}
=======
                  Call {contact.phone}
                </a>
                <a
                  href={`mailto:${contact.email}`}
                  className='px-8 py-3 bg-slate-800 hover:bg-slate-700 border border-white/10 rounded-lg font-semibold transition-colors'
                >
                  Email Us
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
                </a>
              </div>
</motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Micro SAAS Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Affordable, powerful business tools that deliver real results. Choose from our comprehensive suite of micro SAAS solutions.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  {service.popular && (
                    <div className="absolute -top-3 -right-3 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                      <Star className="w-4 h-4 fill-current" />
                      Popular
                    </div>
                  )}
                  
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <service.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Clock className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-500">{service.setupTime}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                      <span className="text-sm text-gray-500 line-through">{service.marketPrice}</span>
                    </div>
                    <div className="text-sm text-green-600 font-medium">
                      Save up to 50% vs market rate
                    </div>
                  </div>

                  {/* ROI and Popularity */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm">
                      <span className="text-gray-500">Expected ROI:</span>
                      <span className="text-green-600 font-semibold ml-1">
                        {service.roi.split(' ')[0]} ROI
                      </span>
                    </div>
                    {service.popular && (
                      <div className="flex items-center gap-1 text-yellow-600">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="text-sm font-medium">Popular</span>
                      </div>
                    )}
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-700">
                          <ArrowRight className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <div className="text-sm text-gray-600">
                      <strong>Target Users:</strong> {service.targetUsers}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2">
                    <Link
                      href="/contact"
                      className="flex-1 bg-blue-600 text-white px-4 py-2 rounded text-center hover:bg-blue-700 transition-colors font-semibold"
                    >
                      Get Quote
                    </Link>
                    <Link
                      href={`/contact?service=${encodeURIComponent(service.title)}`}
                      className="flex-1 border border-blue-600 text-blue-600 px-4 py-2 rounded text-center hover:bg-blue-50 transition-colors font-semibold"
                    >
                      Learn More
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Industries We Serve
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our micro SAAS solutions are designed to meet the unique needs of various industries and business types.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 p-8 rounded-xl hover:bg-gray-100 transition-colors"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-4xl mb-4">{industry.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{industry.title}</h3>
                  <p className="text-gray-600 mb-4">{industry.description}</p>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Use Cases:</h4>
                    <ul className="space-y-1">
                      {industry.useCases.map((useCase, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-center">
                          <ArrowRight className="w-3 h-3 text-blue-500 mr-2 flex-shrink-0" />
                          {useCase}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our Micro SAAS Solutions?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We combine cutting-edge technology with affordable pricing to deliver solutions that provide real business value.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Award,
                  title: "Proven Technology",
                  description: "Built with latest AI and cloud technologies for maximum performance"
                },
                {
                  icon: DollarSign,
                  title: "Affordable Pricing",
                  description: "50% lower than market rates with transparent, no-hidden-fees pricing"
                },
                {
                  icon: Clock,
                  title: "Quick Setup",
                  description: "Get up and running in 1-4 weeks with our streamlined onboarding"
                },
                {
                  icon: Shield,
                  title: "Secure & Reliable",
                  description: "Enterprise-grade security with 99.9% uptime guarantee"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
                Join thousands of businesses that have already transformed their operations with our micro SAAS solutions. 
                Start your free trial today and see the difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link 
                  href="/contact"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
                >
                  Start Free Trial
                </Link>
                <a 
                  href={`tel:${contactInfo.phone}`}
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-lg"
                >
                  Call {contactInfo.phone}
                </a>
              </div>
              
              {/* Contact Information */}
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="flex items-center justify-center">
                  <Phone className="w-6 h-6 mr-2" />
                  <span>{contactInfo.phone}</span>
                </div>
                <div className="flex items-center justify-center">
                  <Mail className="w-6 h-6 mr-2" />
                  <span>{contactInfo.email}</span>
                </div>
                <div className="flex items-center justify-center">
                  <MapPin className="w-6 h-6 mr-2" />
                  <span>{contactInfo.address}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
<<<<<<< HEAD
    </>
  );
}
=======
    </Layout>
  );
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
