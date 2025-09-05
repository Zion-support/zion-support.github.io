import React from "react";
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Cloud,
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
  Server,
  Network,
  Car,
  Rocket,
  Heart,
  Building,
  Sprout,
  Mail,
  ShoppingCart,
  BookOpen,
  Home,
  Gamepad2,
  Package,
  CreditCard,
  Calendar,
  Phone,
  MapPin,
  Mail as MailIcon,
  Phone as PhoneIcon
} from 'lucide-react';

const microSaasServices = [
  {
    title: 'AI-Powered Lead Scoring Platform',
    description: 'Intelligent lead qualification and scoring using machine learning algorithms to identify high-value prospects.',
    icon: Target,
    features: ['Machine Learning Scoring', 'CRM Integration', 'Real-time Analytics', 'Custom Scoring Models'],
    pricing: '$99 - $499/month',
    category: 'Sales & Marketing',
    popular: true,
    setupFee: '$2,000',
    trialPeriod: '14 days'
  },
  {
    title: 'Smart Invoice Management System',
    description: 'Automated invoice processing, approval workflows, and payment tracking with AI-powered categorization.',
    icon: FileText,
    features: ['OCR Processing', 'Automated Approval', 'Payment Tracking', 'Expense Categorization'],
    pricing: '$49 - $199/month',
    category: 'Finance',
    popular: true,
    setupFee: '$500',
    trialPeriod: '30 days'
  },
  {
    title: 'AI Customer Support Chatbot',
    description: 'Intelligent customer support automation with natural language processing and multi-channel support.',
    icon: MessageSquare,
    features: ['NLP Processing', 'Multi-channel Support', 'Knowledge Base Integration', 'Escalation Management'],
    pricing: '$79 - $299/month',
    category: 'Customer Service',
    popular: true,
    setupFee: '$1,500',
    trialPeriod: '21 days'
  },
  {
    title: 'Predictive Inventory Management',
    description: 'AI-driven inventory optimization with demand forecasting and automated reorder points.',
    icon: Package,
    features: ['Demand Forecasting', 'Automated Reordering', 'Stock Optimization', 'Supplier Management'],
    pricing: '$149 - $599/month',
    category: 'Inventory',
    popular: true,
    setupFee: '$3,000',
    trialPeriod: '30 days'
  },
  {
    title: 'Smart Social Media Scheduler',
    description: 'AI-powered social media content creation, scheduling, and performance analytics across all platforms.',
    icon: Globe,
    features: ['AI Content Generation', 'Multi-platform Scheduling', 'Performance Analytics', 'Hashtag Optimization'],
    pricing: '$39 - $149/month',
    category: 'Social Media',
    popular: true,
    setupFee: '$200',
    trialPeriod: '14 days'
  },
  {
    title: 'Automated Email Marketing Suite',
    description: 'Intelligent email campaign management with personalization, A/B testing, and behavioral triggers.',
    icon: Mail,
    features: ['Behavioral Triggers', 'A/B Testing', 'Personalization Engine', 'Advanced Analytics'],
    pricing: '$69 - $249/month',
    category: 'Email Marketing',
    popular: true,
    setupFee: '$800',
    trialPeriod: '14 days'
  },
  {
    title: 'AI-Powered Project Management',
    description: 'Intelligent project planning, resource allocation, and deadline prediction with automated task management.',
    icon: Calendar,
    features: ['Resource Optimization', 'Deadline Prediction', 'Task Automation', 'Progress Tracking'],
    pricing: '$89 - $349/month',
    category: 'Project Management',
    popular: true,
    setupFee: '$1,200',
    trialPeriod: '21 days'
  },
  {
    title: 'Smart Document Processing Hub',
    description: 'Automated document extraction, classification, and workflow management using OCR and AI.',
    icon: FileText,
    features: ['OCR Technology', 'Document Classification', 'Workflow Automation', 'Data Extraction'],
    pricing: '$59 - $199/month',
    category: 'Document Management',
    popular: true,
    setupFee: '$1,000',
    trialPeriod: '14 days'
  },
  {
    title: 'AI Financial Analytics Dashboard',
    description: 'Real-time financial insights, cash flow forecasting, and automated financial reporting.',
    icon: BarChart3,
    features: ['Cash Flow Forecasting', 'Financial Insights', 'Automated Reports', 'Budget Tracking'],
    pricing: '$99 - $399/month',
    category: 'Finance',
    popular: true,
    setupFee: '$1,500',
    trialPeriod: '30 days'
  },
  {
    title: 'Intelligent HR Management System',
    description: 'AI-powered HR automation including recruitment, onboarding, performance tracking, and employee analytics.',
    icon: Users,
    features: ['Recruitment Automation', 'Performance Analytics', 'Employee Onboarding', 'Compliance Tracking'],
    pricing: '$79 - $299/month',
    category: 'Human Resources',
    popular: true,
    setupFee: '$2,000',
    trialPeriod: '30 days'
  },
  {
    title: 'Smart Energy Management Platform',
    description: 'AI-driven energy consumption optimization for buildings and facilities with cost reduction analytics.',
    icon: Zap,
    features: ['Energy Optimization', 'Cost Analysis', 'Predictive Maintenance', 'Sustainability Metrics'],
    pricing: '$199 - $799/month',
    category: 'Energy Management',
    popular: true,
    setupFee: '$5,000',
    trialPeriod: '30 days'
  },
  {
    title: 'AI-Powered SEO Optimizer',
    description: 'Automated SEO analysis, keyword research, content optimization, and ranking tracking.',
    icon: Search,
    features: ['Keyword Research', 'Content Optimization', 'Ranking Tracking', 'Competitor Analysis'],
    pricing: '$49 - $199/month',
    category: 'SEO & Marketing',
    popular: true,
    setupFee: '$500',
    trialPeriod: '14 days'
  },
  {
    title: 'Intelligent Survey & Feedback Platform',
    description: 'AI-powered survey creation, distribution, and analysis with sentiment analysis and actionable insights.',
    icon: BarChart3,
    features: ['Survey Automation', 'Sentiment Analysis', 'Real-time Analytics', 'Actionable Insights'],
    pricing: '$29 - $99/month',
    category: 'Research & Analytics',
    popular: true,
    setupFee: '$200',
    trialPeriod: '14 days'
  },
  {
    title: 'Smart Contract Management System',
    description: 'Automated contract lifecycle management with AI-powered risk assessment and compliance monitoring.',
    icon: Shield,
    features: ['Contract Analysis', 'Risk Assessment', 'Compliance Monitoring', 'Renewal Alerts'],
    pricing: '$149 - $599/month',
    category: 'Legal & Compliance',
    popular: true,
    setupFee: '$2,500',
    trialPeriod: '30 days'
  },
  {
    title: 'AI-Powered Content Moderation',
    description: 'Automated content moderation using AI to detect inappropriate content, spam, and policy violations.',
    icon: Eye,
    features: ['Content Detection', 'Spam Filtering', 'Policy Enforcement', 'Real-time Moderation'],
    pricing: '$39 - $149/month',
    category: 'Content Management',
    popular: true,
    setupFee: '$800',
    trialPeriod: '14 days'
  },
  {
    title: 'Intelligent Time Tracking & Billing',
    description: 'AI-powered time tracking with automatic project categorization and intelligent billing generation.',
    icon: Clock,
    features: ['Automatic Tracking', 'Project Categorization', 'Billing Generation', 'Productivity Analytics'],
    pricing: '$19 - $79/month',
    category: 'Time Management',
    popular: true,
    setupFee: '$100',
    trialPeriod: '14 days'
  },
  {
    title: 'Smart Supply Chain Analytics',
    description: 'AI-driven supply chain optimization with demand forecasting, supplier risk analysis, and cost optimization.',
    icon: Network,
    features: ['Demand Forecasting', 'Supplier Risk Analysis', 'Cost Optimization', 'Performance Monitoring'],
    pricing: '$299 - $1,199/month',
    category: 'Supply Chain',
    popular: true,
    setupFee: '$5,000',
    trialPeriod: '30 days'
  },
  {
    title: 'AI-Powered Website Analytics',
    description: 'Advanced website analytics with user behavior prediction, conversion optimization, and personalized insights.',
    icon: Monitor,
    features: ['User Behavior Analysis', 'Conversion Optimization', 'Personalized Insights', 'A/B Testing'],
    pricing: '$39 - $149/month',
    category: 'Web Analytics',
    popular: true,
    setupFee: '$300',
    trialPeriod: '14 days'
  },
  {
    title: 'Intelligent Customer Segmentation',
    description: 'AI-powered customer segmentation and targeting with behavioral analysis and personalized marketing campaigns.',
    icon: Target,
    features: ['Behavioral Analysis', 'Customer Segmentation', 'Personalized Campaigns', 'Lifetime Value Prediction'],
    pricing: '$69 - $249/month',
    category: 'Customer Analytics',
    popular: true,
    setupFee: '$1,200',
    trialPeriod: '21 days'
  },
  {
    title: 'Smart Compliance Monitoring',
    description: 'Automated compliance monitoring and reporting with AI-powered risk assessment and regulatory updates.',
    icon: Shield,
    features: ['Compliance Monitoring', 'Risk Assessment', 'Regulatory Updates', 'Automated Reporting'],
    pricing: '$199 - $799/month',
    category: 'Compliance',
    popular: true,
    setupFee: '$3,000',
    trialPeriod: '30 days'
  },
  {
    title: 'AI-Powered Voice Analytics',
    description: 'Voice data analysis for customer service optimization, sentiment analysis, and call center performance insights.',
    icon: Mic,
    features: ['Voice Analysis', 'Sentiment Detection', 'Performance Insights', 'Quality Scoring'],
    pricing: '$89 - $349/month',
    category: 'Voice Analytics',
    popular: true,
    setupFee: '$2,000',
    trialPeriod: '21 days'
  },
  {
    title: 'Intelligent Fleet Management',
    description: 'AI-powered fleet optimization with route planning, fuel efficiency, and predictive maintenance.',
    icon: Car,
    features: ['Route Optimization', 'Fuel Efficiency', 'Predictive Maintenance', 'Driver Analytics'],
    pricing: '$149 - $599/month',
    category: 'Fleet Management',
    popular: true,
    setupFee: '$3,500',
    trialPeriod: '30 days'
  },
  {
    title: 'Smart Learning Management System',
    description: 'AI-powered learning platform with personalized content delivery, progress tracking, and skill assessment.',
    icon: BookOpen,
    features: ['Personalized Learning', 'Progress Tracking', 'Skill Assessment', 'Content Recommendation'],
    pricing: '$59 - $199/month',
    category: 'Education',
    popular: true,
    setupFee: '$1,500',
    trialPeriod: '30 days'
  },
  {
    title: 'AI-Powered Quality Assurance',
    description: 'Automated quality testing and assurance with AI-driven test case generation and defect prediction.',
    icon: CheckCircle,
    features: ['Test Case Generation', 'Defect Prediction', 'Automated Testing', 'Quality Metrics'],
    pricing: '$99 - $399/month',
    category: 'Quality Assurance',
    popular: true,
    setupFee: '$2,000',
    trialPeriod: '21 days'
  },
  {
    title: 'Intelligent Data Backup & Recovery',
    description: 'AI-powered data backup with intelligent scheduling, deduplication, and automated disaster recovery.',
    icon: Database,
    features: ['Intelligent Scheduling', 'Data Deduplication', 'Disaster Recovery', 'Compliance Backup'],
    pricing: '$29 - $99/month',
    category: 'Data Management',
    popular: true,
    setupFee: '$500',
    trialPeriod: '14 days'
  },
  {
    title: 'Smart Event Management Platform',
    description: 'AI-powered event planning with attendee management, scheduling optimization, and real-time analytics.',
    icon: Calendar,
    features: ['Event Planning', 'Attendee Management', 'Scheduling Optimization', 'Real-time Analytics'],
    pricing: '$49 - $199/month',
    category: 'Event Management',
    popular: true,
    setupFee: '$800',
    trialPeriod: '14 days'
  },
  {
    title: 'AI-Powered Translation Management',
    description: 'Intelligent translation workflow management with quality assurance and automated language detection.',
    icon: Globe,
    features: ['Workflow Management', 'Quality Assurance', 'Language Detection', 'Translation Memory'],
    pricing: '$39 - $149/month',
    category: 'Translation',
    popular: true,
    setupFee: '$600',
    trialPeriod: '14 days'
  }
];

const categories = [
  'All',
  'Sales & Marketing',
  'Finance',
  'Customer Service',
  'Inventory',
  'Social Media',
  'Email Marketing',
  'Project Management',
  'Document Management',
  'Human Resources',
  'Energy Management',
  'SEO & Marketing',
  'Research & Analytics',
  'Legal & Compliance',
  'Content Management',
  'Time Management',
  'Supply Chain',
  'Web Analytics',
  'Customer Analytics',
  'Compliance',
  'Voice Analytics',
  'Fleet Management',
  'Education',
  'Quality Assurance',
  'Data Management',
  'Event Management',
  'Translation'
];

const benefits = [
  {
    icon: CheckCircle,
    title: "Rapid Deployment",
    description: "Get up and running in days, not months with our pre-built solutions"
  },
  {
    icon: Star,
    title: "AI-Powered Intelligence",
    description: "Every solution includes advanced AI capabilities for maximum efficiency"
  },
  {
    icon: Users,
    title: "24/7 Support",
    description: "Round-the-clock technical support and maintenance"
  },
  {
    icon: Award,
    title: "Scalable Solutions",
    description: "Grow with your business with flexible pricing and feature scaling"
  }
];

const processSteps = [
  {
    step: "01",
    title: "Choose Your Solution",
    description: "Select from our comprehensive catalog of micro SAAS solutions"
  },
  {
    step: "02",
    title: "Free Trial",
    description: "Test drive your chosen solution with our risk-free trial period"
  },
  {
    step: "03",
    title: "Quick Setup",
    description: "Our team handles the technical setup and integration for you"
  },
  {
    step: "04",
    title: "Go Live",
    description: "Start using your solution immediately with full support"
  }
];

export default function MicroSaasPage() {
  return (
    <>
      <Head>
        <title>Micro SAAS Solutions - Zion Tech Group</title>
        <meta name="description" content="Discover innovative micro SAAS solutions designed to solve specific business challenges. AI-powered tools, automation platforms, and specialized software services." />
        <meta name="keywords" content="micro saas, software as a service, business automation, AI tools, specialized software, business solutions" />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h1 
                className="text-5xl md:text-6xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Micro SAAS Solutions
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl mb-8 text-blue-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Innovative software solutions designed to solve specific business challenges with AI-powered intelligence
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Link href="#services" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Explore Solutions
                </Link>
                <Link href="#contact" className="border border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                  Get Started
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-600">Micro SAAS Solutions</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">99.9%</div>
                <div className="text-gray-600">Uptime Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
                <div className="text-gray-600">Support Available</div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Micro SAAS Solutions</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose from our comprehensive catalog of specialized software solutions designed to address specific business needs
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-6 py-2 rounded-full border border-gray-300 hover:border-blue-500 hover:text-blue-500 transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasServices.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-blue-100 rounded-lg mr-4">
                      <service.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                      <span className="text-sm text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                        {service.category}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-2xl font-bold text-blue-600">{service.pricing}</span>
                      {service.popular && (
                        <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full">
                          Popular
                        </span>
                      )}
                    </div>
                    <div className="text-sm text-gray-600 mb-4">
                      <div>Setup Fee: {service.setupFee}</div>
                      <div>Free Trial: {service.trialPeriod}</div>
                    </div>
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors">
                      Start Free Trial
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Micro SAAS Solutions?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our solutions are designed with your business success in mind
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="p-4 bg-blue-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <benefit.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get started with your micro SAAS solution in just a few simple steps
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="bg-blue-600 text-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center text-2xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-blue-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-xl mb-8 text-blue-100">
                Contact us today to discuss your micro SAAS needs and get a personalized solution
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="flex items-center justify-center">
                  <PhoneIcon className="h-6 w-6 mr-3" />
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className="text-blue-100">+1 302 464 0950</div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <MailIcon className="h-6 w-6 mr-3" />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-blue-100">kleber@ziontechgroup.com</div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <MapPin className="h-6 w-6 mr-3" />
                  <div>
                    <div className="font-semibold">Address</div>
                    <div className="text-blue-100">364 E Main St STE 1008<br />Middletown DE 19709</div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
                  Contact Us
                </Link>
                <Link href="/ai-services" className="border border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                  View AI Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}