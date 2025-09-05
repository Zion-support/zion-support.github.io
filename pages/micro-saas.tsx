import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Cloud, 
  Zap, 
  Shield, 
  Users, 
  BarChart3, 
  CheckCircle, 
  ArrowRight, 
  Clock, 
  Star, 
  DollarSign, 
  Award, 
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
  Server, 
  Network, 
  Car, 
  Rocket, 
  Heart, 
  Building, 
  Sprout,
  Mail,
  MessageSquare,
  Search,
  Eye,
  Target,
  TrendingUp,
  Share2,
  Receipt,
  Package,
  Calendar,
  Headphones,
  Kanban,
  HardDrive,
  Bell,
  Home,
  BookOpen,
  Brain
} from 'lucide-react';
import Layout from '../components/Layout';

const microSaasProducts = [
  {
    title: 'Cloud Cost Guard (FinOps Assistant)',
    description: 'Anomaly detection, rightsizing, forecasting and budget guardrails across AWS/Azure/GCP.',
    icon: DollarSign,
    features: ['Cost Anomaly Detection', 'Auto Rightsizing', 'Budget Forecasting', 'Multi-cloud Support'],
    pricing: '$299 - $1,499/month',
    category: 'FinOps',
    popular: true,
    link: 'https://cloudcostguard.ziontechgroup.com'
  },
  {
    title: 'LLM Evaluation & Safety Suite',
    description: 'Prompt evaluation, bias/toxicity checks, jailbreak tests and guardrail policies.',
    icon: Shield,
    features: ['Prompt Testing', 'Bias Detection', 'Safety Checks', 'Guardrail Policies'],
    pricing: '$799 - $3,500/month',
    category: 'AI Safety',
    link: 'https://llmsafety.ziontechgroup.com'
  },
  {
    title: 'Customer Feedback & NPS Micro-App',
    description: 'Embed surveys, analyze sentiment and route issues to the right team automatically.',
    icon: MessageSquare,
    features: ['Survey Builder', 'Sentiment Analysis', 'Auto Routing', 'NPS Tracking'],
    pricing: '$149 - $799/month',
    category: 'Customer Success',
    link: 'https://feedbackpro.ziontechgroup.com'
  },
  {
    title: 'API Rate Limiting & Analytics',
    description: 'Intelligent rate limiting with detailed analytics and usage insights.',
    icon: BarChart3,
    features: ['Smart Rate Limiting', 'Usage Analytics', 'Real-time Monitoring', 'Custom Rules'],
    pricing: '$199 - $999/month',
    category: 'API Management',
    link: 'https://apiguard.ziontechgroup.com'
  },
  {
    title: 'Content Moderation AI',
    description: 'Automated content moderation using advanced AI for text, images, and videos.',
    icon: Eye,
    features: ['Multi-modal Detection', 'Custom Rules', 'Real-time Processing', 'API Integration'],
    pricing: '$399 - $1,999/month',
    category: 'Content Safety',
    link: 'https://contentmod.ziontechgroup.com'
  },
  {
    title: 'Workflow Automation Engine',
    description: 'No-code workflow automation with integrations to popular business tools.',
    icon: Settings,
    features: ['Visual Builder', '100+ Integrations', 'Conditional Logic', 'Scheduled Tasks'],
    pricing: '$99 - $599/month',
    category: 'Automation',
    link: 'https://workflowpro.ziontechgroup.com'
  },
  {
    title: 'Social Media Scheduler Pro',
    description: 'AI-powered social media management with optimal posting times and content suggestions.',
    icon: Share2,
    features: ['Multi-platform Posting', 'AI Content Suggestions', 'Analytics Dashboard', 'Team Collaboration'],
    pricing: '$49 - $299/month',
    category: 'Social Media',
    popular: true,
    link: 'https://socialscheduler.ziontechgroup.com'
  },
  {
    title: 'Invoice & Payment Tracker',
    description: 'Automated invoicing, payment tracking, and financial reporting for small businesses.',
    icon: Receipt,
    features: ['Auto Invoice Generation', 'Payment Tracking', 'Tax Calculations', 'Financial Reports'],
    pricing: '$29 - $149/month',
    category: 'Finance',
    link: 'https://invoicetracker.ziontechgroup.com'
  },
  {
    title: 'Employee Time Tracking Hub',
    description: 'Comprehensive time tracking with project management and productivity analytics.',
    icon: Clock,
    features: ['Time Tracking', 'Project Management', 'Productivity Analytics', 'Team Reports'],
    pricing: '$19 - $99/month',
    category: 'Productivity',
    link: 'https://timetracker.ziontechgroup.com'
  },
  {
    title: 'Email Marketing Automation',
    description: 'Advanced email marketing with AI-driven personalization and campaign optimization.',
    icon: Mail,
    features: ['AI Personalization', 'A/B Testing', 'Behavioral Triggers', 'Advanced Analytics'],
    pricing: '$79 - $399/month',
    category: 'Marketing',
    link: 'https://emailpro.ziontechgroup.com'
  },
  {
    title: 'Inventory Management System',
    description: 'Real-time inventory tracking with predictive analytics and automated reordering.',
    icon: Package,
    features: ['Real-time Tracking', 'Predictive Analytics', 'Auto Reordering', 'Multi-location Support'],
    pricing: '$99 - $499/month',
    category: 'E-commerce',
    link: 'https://inventorypro.ziontechgroup.com'
  },
  {
    title: 'Lead Generation Engine',
    description: 'AI-powered lead generation with automated outreach and qualification scoring.',
    icon: Target,
    features: ['AI Lead Scoring', 'Automated Outreach', 'CRM Integration', 'Conversion Tracking'],
    pricing: '$199 - $999/month',
    category: 'Sales',
    link: 'https://leadgen.ziontechgroup.com'
  },
  {
    title: 'Document Management Pro',
    description: 'Secure document storage with AI-powered search, OCR, and collaboration features.',
    icon: FileText,
    features: ['AI Search', 'OCR Processing', 'Version Control', 'Team Collaboration'],
    pricing: '$39 - $199/month',
    category: 'Document Management',
    link: 'https://docmanager.ziontechgroup.com'
  },
  {
    title: 'Website Performance Monitor',
    description: 'Real-time website monitoring with performance optimization recommendations.',
    icon: Monitor,
    features: ['Real-time Monitoring', 'Performance Optimization', 'Uptime Tracking', 'Alert System'],
    pricing: '$29 - $149/month',
    category: 'Web Performance',
    link: 'https://webmonitor.ziontechgroup.com'
  },
  {
    title: 'Password Manager for Teams',
    description: 'Secure password management with team sharing and enterprise security features.',
    icon: Lock,
    features: ['Team Sharing', 'Enterprise Security', 'Password Generator', 'Breach Monitoring'],
    pricing: '$49 - $199/month',
    category: 'Security',
    link: 'https://passwordmanager.ziontechgroup.com'
  },
  {
    title: 'Meeting Scheduler AI',
    description: 'Intelligent meeting scheduling with calendar integration and conflict resolution.',
    icon: Calendar,
    features: ['Smart Scheduling', 'Calendar Integration', 'Conflict Resolution', 'Time Zone Handling'],
    pricing: '$19 - $99/month',
    category: 'Scheduling',
    link: 'https://meetingscheduler.ziontechgroup.com'
  },
  {
    title: 'Code Review Assistant',
    description: 'AI-powered code review with automated suggestions and security vulnerability detection.',
    icon: Code,
    features: ['AI Code Review', 'Security Scanning', 'Performance Analysis', 'Team Collaboration'],
    pricing: '$99 - $499/month',
    category: 'Development',
    link: 'https://codereview.ziontechgroup.com'
  },
  {
    title: 'Customer Support Ticketing',
    description: 'AI-enhanced customer support with automated ticket routing and response suggestions.',
    icon: Headphones,
    features: ['AI Ticket Routing', 'Response Suggestions', 'Knowledge Base', 'Multi-channel Support'],
    pricing: '$79 - $399/month',
    category: 'Customer Support',
    link: 'https://supporttickets.ziontechgroup.com'
  },
  {
    title: 'Project Management Hub',
    description: 'Comprehensive project management with AI-powered resource allocation and timeline optimization.',
    icon: Kanban,
    features: ['AI Resource Allocation', 'Timeline Optimization', 'Team Collaboration', 'Progress Tracking'],
    pricing: '$59 - $299/month',
    category: 'Project Management',
    link: 'https://projecthub.ziontechgroup.com'
  },
  {
    title: 'Data Backup & Recovery',
    description: 'Automated data backup with instant recovery and cross-platform synchronization.',
    icon: HardDrive,
    features: ['Automated Backups', 'Instant Recovery', 'Cross-platform Sync', 'Version History'],
    pricing: '$39 - $199/month',
    category: 'Data Management',
    link: 'https://databackup.ziontechgroup.com'
  },
  {
    title: 'AI-Powered SEO Optimizer',
    description: 'Automated SEO analysis and optimization with real-time keyword tracking and content suggestions.',
    icon: Search,
    features: ['Keyword Research', 'Content Optimization', 'Rank Tracking', 'Competitor Analysis'],
    pricing: '$149 - $799/month',
    category: 'SEO',
    popular: true,
    link: 'https://seooptimizer.ziontechgroup.com'
  },
  {
    title: 'Smart Analytics Dashboard',
    description: 'Real-time business intelligence with AI-driven insights and predictive analytics.',
    icon: BarChart3,
    features: ['Real-time Dashboards', 'Predictive Analytics', 'Custom Reports', 'Data Visualization'],
    pricing: '$199 - $999/month',
    category: 'Analytics',
    link: 'https://smartanalytics.ziontechgroup.com'
  },
  {
    title: 'Automated Testing Suite',
    description: 'Comprehensive automated testing platform for web and mobile applications.',
    icon: CheckCircle,
    features: ['UI Testing', 'API Testing', 'Performance Testing', 'Cross-browser Testing'],
    pricing: '$299 - $1,499/month',
    category: 'Quality Assurance',
    link: 'https://autotesting.ziontechgroup.com'
  },
  {
    title: 'Customer Onboarding Platform',
    description: 'Streamlined customer onboarding with interactive tutorials and progress tracking.',
    icon: Rocket,
    features: ['Interactive Tutorials', 'Progress Tracking', 'Personalized Paths', 'Analytics'],
    pricing: '$99 - $499/month',
    category: 'Customer Success',
    link: 'https://onboarding.ziontechgroup.com'
  },
  {
    title: 'AI Content Moderation',
    description: 'Advanced content moderation using machine learning for text, images, and video content.',
    icon: Eye,
    features: ['Multi-modal Detection', 'Custom Rules Engine', 'Real-time Processing', 'API Integration'],
    pricing: '$399 - $1,999/month',
    category: 'Content Safety',
    link: 'https://contentmoderation.ziontechgroup.com'
  },
  {
    title: 'Subscription Management Hub',
    description: 'Complete subscription lifecycle management with billing automation and analytics.',
    icon: Receipt,
    features: ['Billing Automation', 'Subscription Analytics', 'Churn Prevention', 'Payment Processing'],
    pricing: '$199 - $999/month',
    category: 'Subscription Management',
    link: 'https://subscriptionhub.ziontechgroup.com'
  },
  {
    title: 'API Documentation Generator',
    description: 'Automated API documentation with interactive testing and version management.',
    icon: Code,
    features: ['Auto Documentation', 'Interactive Testing', 'Version Management', 'Team Collaboration'],
    pricing: '$79 - $399/month',
    category: 'API Development',
    link: 'https://apidocs.ziontechgroup.com'
  },
  {
    title: 'AI Voice Assistant Builder',
    description: 'Create custom voice assistants with natural language processing and multi-platform deployment.',
    icon: Mic,
    features: ['Voice Recognition', 'Natural Language Processing', 'Multi-platform Deployment', 'Custom Commands'],
    pricing: '$299 - $1,499/month',
    category: 'Voice AI',
    popular: true,
    link: 'https://voiceassistant.ziontechgroup.com'
  },
  {
    title: 'Blockchain Analytics Dashboard',
    description: 'Real-time blockchain transaction monitoring and analytics for cryptocurrency businesses.',
    icon: Network,
    features: ['Transaction Monitoring', 'Wallet Analytics', 'Risk Assessment', 'Compliance Reporting'],
    pricing: '$499 - $2,999/month',
    category: 'Blockchain',
    link: 'https://blockchainanalytics.ziontechgroup.com'
  },
  {
    title: 'Quantum Computing Simulator',
    description: 'Cloud-based quantum computing simulation for research and development projects.',
    icon: Cpu,
    features: ['Quantum Circuit Design', 'Simulation Engine', 'Algorithm Testing', 'Research Tools'],
    pricing: '$999 - $4,999/month',
    category: 'Quantum Computing',
    link: 'https://quantumsim.ziontechgroup.com'
  },
  {
    title: 'Edge Computing Orchestrator',
    description: 'Manage and deploy applications across edge computing infrastructure with intelligent routing.',
    icon: Server,
    features: ['Edge Deployment', 'Intelligent Routing', 'Performance Optimization', 'Global Distribution'],
    pricing: '$399 - $1,999/month',
    category: 'Edge Computing',
    link: 'https://edgeorchestrator.ziontechgroup.com'
  },
  {
    title: 'AR/VR Content Creator',
    description: 'AI-powered augmented and virtual reality content creation and management platform.',
    icon: Video,
    features: ['3D Content Creation', 'AR/VR Publishing', 'Interactive Experiences', 'Analytics Dashboard'],
    pricing: '$199 - $999/month',
    category: 'AR/VR',
    link: 'https://arvrcreator.ziontechgroup.com'
  },
  {
    title: 'IoT Device Manager',
    description: 'Comprehensive IoT device management with real-time monitoring and automated maintenance.',
    icon: Settings,
    features: ['Device Monitoring', 'Automated Maintenance', 'Firmware Updates', 'Security Management'],
    pricing: '$149 - $799/month',
    category: 'IoT',
    link: 'https://iotmanager.ziontechgroup.com'
  },
  {
    title: 'Digital Twin Platform',
    description: 'Create and manage digital twins of physical assets with real-time synchronization.',
    icon: Building,
    features: ['3D Modeling', 'Real-time Sync', 'Predictive Maintenance', 'Simulation Engine'],
    pricing: '$599 - $2,999/month',
    category: 'Digital Twin',
    link: 'https://digitaltwin.ziontechgroup.com'
  },
  {
    title: 'Neural Network Designer',
    description: 'Visual neural network design and training platform with pre-built models and datasets.',
    icon: Brain,
    features: ['Visual Designer', 'Pre-built Models', 'Dataset Management', 'Model Training'],
    pricing: '$399 - $1,999/month',
    category: 'Machine Learning',
    link: 'https://neuraldesigner.ziontechgroup.com'
  },
  {
    title: 'Robotic Process Automation',
    description: 'Intelligent automation for repetitive tasks with AI-powered decision making.',
    icon: Bot,
    features: ['Task Automation', 'AI Decision Making', 'Process Optimization', 'Error Handling'],
    pricing: '$299 - $1,499/month',
    category: 'RPA',
    popular: true,
    link: 'https://rpaplatform.ziontechgroup.com'
  }
];

const benefits = [
  {
    icon: Rocket,
    title: 'Fast Time to Market',
    description: 'Launch your SaaS in weeks, not months',
    stat: '80%'
  },
  {
    icon: DollarSign,
    title: 'Cost Effective',
    description: 'Lower development and maintenance costs',
    stat: '60%'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Built-in security and compliance features',
    stat: '99.9%'
  },
  {
    icon: TrendingUp,
    title: 'Scalable',
    description: 'Handles growth from startup to enterprise',
    stat: '10x'
  }
];

const pricingPlans = [
  {
    name: 'Starter',
    description: 'Perfect for small teams and MVPs',
    price: '$299',
    period: '/month',
    features: [
      'Up to 1,000 users',
      'Basic analytics',
      'Email support',
      'Standard integrations'
    ],
    popular: false
  },
  {
    name: 'Professional',
    description: 'Ideal for growing businesses',
    price: '$799',
    period: '/month',
    features: [
      'Priority support',
      'Enhanced security',
      '5 custom integrations',
      'API access'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    description: 'For large organizations',
    price: 'Custom',
    period: '',
    features: [
      'Dedicated support',
      'Enterprise security',
      'Unlimited integrations',
      'Custom development'
    ],
    popular: false
  }
];

export default function MicroSaaSPage() {
  return (
    <Layout
      title="Micro SaaS Solutions - Zion Tech Group"
      description="Innovative micro SaaS solutions for specialized business needs. Rapid deployment, enterprise security, and built-in analytics."
      keywords="micro SaaS, software as a service, business solutions, automation, productivity tools"
    >
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex items-center justify-center mb-6">
                <Cloud className="h-16 w-16 text-purple-400 mr-4" />
                <h1 className="text-4xl md:text-6xl font-bold">
                  Micro{' '}
                  <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                    SaaS
                  </span>
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Scalable software solutions designed for specific business needs. Rapid deployment, enterprise security, and built-in analytics.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Get Started
                </Link>
                <Link href="/services" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  View All Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Micro SaaS Products
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Choose from our comprehensive suite of micro SaaS solutions designed to solve specific business challenges
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasProducts.map((product, index) => {
                const IconComponent = product.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="flex items-center mb-4">
                      <IconComponent className="h-8 w-8 text-purple-600 mr-3" />
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">{product.title}</h3>
                        <span className="text-sm text-purple-600 font-semibold">{product.category}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <div className="mb-4">
                      <span className="text-lg font-semibold text-purple-600">{product.pricing}</span>
                    </div>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {product.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex items-center justify-between">
                      <a
                        href={product.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-800 font-semibold inline-flex items-center"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </a>
                      {product.popular && (
                        <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">
                          Popular
                        </span>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Micro SaaS?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Micro SaaS solutions offer unique advantages for modern businesses
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 mb-2">{benefit.description}</p>
                    <div className="text-2xl font-bold text-purple-600">{benefit.stat}</div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Flexible Pricing Plans
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Choose the plan that fits your business needs
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={index}
                  className={`bg-white rounded-lg shadow-lg p-8 ${
                    plan.popular ? 'ring-2 ring-purple-500 relative' : ''
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-4">{plan.description}</p>
                    <div className="text-4xl font-bold text-purple-600">
                      {plan.price}
                      <span className="text-lg text-gray-500">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors font-semibold">
                    Get Started
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}