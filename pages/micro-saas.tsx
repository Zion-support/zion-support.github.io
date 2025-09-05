import { motion } from 'framer-motion';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import { Cloud, Zap, Shield, Users, BarChart3, CheckCircle, ArrowRight, Clock, Star, DollarSign, Award, Globe, Lock, Cpu, Bot, FileText, Video, Mic, Code, Settings, Monitor, Smartphone, Server, Network, Car, Rocket, Heart, Building, Sprout, Mail, MessageSquare, Search, Eye, Target, TrendingUp, Package, Calendar, BookOpen, ShoppingCart, Home, Trash2, Camera, HardDrive, UserCheck, Lightbulb, Truck } from 'lucide-react';
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
    benefits: ['Cost Reduction', 'Automated Optimization', 'Budget Control', 'Multi-cloud Support'],
    marketPrice: '$500 - $2,000/month',
    link: 'https://cloudcostguard.ziontechgroup.com'
  },
  {
    title: 'AI Content Marketing Suite',
    description: 'Automated content creation, SEO optimization, and social media management platform.',
    icon: FileText,
    features: ['AI Content Generation', 'SEO Optimization', 'Social Media Scheduling', 'Analytics Dashboard'],
    pricing: '$29 - $199/month',
    category: 'Marketing',
    popular: true,
    benefits: ['10x Content Output', 'SEO Boost', 'Time Savings', 'Better Engagement'],
    marketPrice: '$50 - $300/month',
    link: 'https://contentmarketing.ziontechgroup.com'
  },
  {
    title: 'Smart Lead Management System',
    description: 'AI-powered lead scoring, nurturing, and conversion optimization platform.',
    icon: Target,
    features: ['Lead Scoring', 'Automated Nurturing', 'CRM Integration', 'Conversion Tracking'],
    pricing: '$49 - $299/month',
    category: 'Sales',
    popular: true,
    benefits: ['Higher Conversion', 'Automated Workflows', 'Better ROI', 'Data Insights'],
    marketPrice: '$75 - $500/month',
    link: 'https://leadmanagement.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Analytics Dashboard',
    description: 'Real-time business intelligence with predictive analytics and custom reporting.',
    icon: BarChart3,
    features: ['Real-time Analytics', 'Predictive Insights', 'Custom Reports', 'Data Visualization'],
    pricing: '$39 - $249/month',
    category: 'Analytics',
    popular: true,
    benefits: ['Data-Driven Decisions', 'Predictive Insights', 'Custom Reports', 'Real-time Monitoring'],
    marketPrice: '$60 - $400/month',
    link: 'https://analytics.ziontechgroup.com'
  },
  {
    title: 'AI Business Validation Platform',
    description: 'Validate startup ideas and business concepts with AI-powered market analysis and competitor research.',
    icon: Target,
    features: ['Market Analysis', 'Competitor Research', 'SWOT Analysis', 'Validation Scoring'],
    pricing: '$15 - $25/month',
    category: 'Business Validation',
    popular: true,
    benefits: ['Risk Reduction', 'Market Insights', 'Data-Driven Decisions', 'Time Savings'],
    marketPrice: '$20 - $50/month',
    link: 'https://businessvalidator.ziontechgroup.com'
  },
  {
    title: 'AI Co-Founder as a Service',
    description: 'AI-powered business strategy, planning, and execution support for startups and entrepreneurs.',
    icon: Users,
    features: ['Business Strategy', 'Market Research', 'Financial Planning', 'Execution Support'],
    pricing: '$99 - $499/month',
    category: 'Business Strategy',
    popular: true,
    benefits: ['Expert Guidance', 'Cost Effective', '24/7 Availability', 'Scalable Support'],
    marketPrice: '$150 - $800/month',
    link: 'https://aico-founder.ziontechgroup.com'
  },
  {
    title: 'AI Content Creation Studio',
    description: 'AI-powered content creation platform for blogs, social media, and marketing materials.',
    icon: FileText,
    features: ['Blog Writing', 'Social Media Content', 'Marketing Copy', 'SEO Optimization'],
    pricing: '$19 - $99/month',
    category: 'Content Creation',
    benefits: ['High-Quality Content', 'SEO Optimized', 'Time Saving', 'Consistent Output'],
    marketPrice: '$30 - $150/month',
    link: 'https://contentstudio.ziontechgroup.com'
  },
  {
    title: 'AI Micro SaaS Idea Generator',
    description: 'AI-powered platform that generates and validates micro SaaS business ideas based on market trends.',
    icon: Lightbulb,
    features: ['Idea Generation', 'Market Validation', 'Trend Analysis', 'Feasibility Scoring'],
    pricing: '$29 - $79/month',
    category: 'Idea Generation',
    benefits: ['Innovative Ideas', 'Market Validation', 'Trend Analysis', 'Feasibility Assessment'],
    marketPrice: '$50 - $120/month',
    link: 'https://ideagenerator.ziontechgroup.com'
  },
  {
    title: 'AI White-Label Platform',
    description: 'Complete white-label AI platform for agencies and businesses to offer AI services under their brand.',
    icon: Globe,
    features: ['White-label Solution', 'Custom Branding', 'API Access', 'Multi-tenant Support'],
    pricing: '$199 - $999/month',
    category: 'White-label',
    benefits: ['Brand Control', 'Revenue Generation', 'Scalable Platform', 'Custom Features'],
    marketPrice: '$300 - $1,500/month',
    link: 'https://whitelabel.ziontechgroup.com'
  },
  {
    title: 'AI Process Automation Suite',
    description: 'AI-powered workflow automation platform for business processes and repetitive tasks.',
    icon: Settings,
    features: ['Workflow Automation', 'Task Automation', 'Integration Support', 'Custom Workflows'],
    pricing: '$49 - $299/month',
    category: 'Automation',
    benefits: ['Efficiency Gains', 'Cost Reduction', 'Error Reduction', 'Scalable Automation'],
    marketPrice: '$75 - $450/month',
    link: 'https://processautomation.ziontechgroup.com'
  },
  {
    title: 'AI Financial Analysis Platform',
    description: 'AI-powered financial analysis and forecasting platform for businesses and investors.',
    icon: DollarSign,
    features: ['Financial Forecasting', 'Risk Analysis', 'Investment Insights', 'Portfolio Management'],
    pricing: '$79 - $399/month',
    category: 'Financial Analysis',
    benefits: ['Better Decisions', 'Risk Management', 'Investment Insights', 'Automated Analysis'],
    marketPrice: '$120 - $600/month',
    link: 'https://financialanalysis.ziontechgroup.com'
  },
  {
    title: 'AI Legal Document Assistant',
    description: 'AI-powered legal document analysis, generation, and review platform for law firms and businesses.',
    icon: FileText,
    features: ['Document Analysis', 'Contract Review', 'Legal Research', 'Compliance Checking'],
    pricing: '$99 - $499/month',
    category: 'Legal Tech',
    benefits: ['Time Savings', 'Accuracy', 'Cost Reduction', 'Compliance Assurance'],
    marketPrice: '$150 - $750/month',
    link: 'https://legalassistant.ziontechgroup.com'
  },
  {
    title: 'AI Healthcare Management System',
    description: 'AI-powered healthcare management platform for patient care, scheduling, and medical records.',
    icon: Heart,
    features: ['Patient Management', 'Appointment Scheduling', 'Medical Records', 'Health Analytics'],
    pricing: '$149 - $799/month',
    category: 'Healthcare',
    benefits: ['Better Patient Care', 'Efficiency', 'Data Security', 'Compliance'],
    marketPrice: '$200 - $1,200/month',
    link: 'https://healthcare.ziontechgroup.com'
  },
  {
    title: 'AI Real Estate Analytics',
    description: 'AI-powered real estate market analysis and property valuation platform.',
    icon: Building,
    features: ['Market Analysis', 'Property Valuation', 'Investment Insights', 'Trend Prediction'],
    pricing: '$59 - $299/month',
    category: 'Real Estate',
    benefits: ['Market Insights', 'Accurate Valuations', 'Investment Guidance', 'Trend Analysis'],
    marketPrice: '$90 - $450/month',
    link: 'https://realestate.ziontechgroup.com'
  },
  {
    title: 'AI Supply Chain Optimizer',
    description: 'AI-powered supply chain optimization and management platform for businesses.',
    icon: Truck,
    features: ['Supply Chain Optimization', 'Inventory Management', 'Demand Forecasting', 'Risk Assessment'],
    pricing: '$199 - $999/month',
    category: 'Supply Chain',
    benefits: ['Cost Reduction', 'Efficiency', 'Risk Management', 'Optimization'],
    marketPrice: '$300 - $1,500/month',
    link: 'https://supplychain.ziontechgroup.com'
  },
  {
    title: 'AI HR Management Platform',
    description: 'AI-powered human resources management platform for recruitment, performance, and employee engagement.',
    icon: Users,
    features: ['Recruitment', 'Performance Management', 'Employee Engagement', 'HR Analytics'],
    pricing: '$79 - $399/month',
    category: 'HR Management',
    benefits: ['Better Hiring', 'Performance Insights', 'Employee Satisfaction', 'HR Efficiency'],
    marketPrice: '$120 - $600/month',
    link: 'https://hrmanagement.ziontechgroup.com'
  },
  {
    title: 'AI Cybersecurity Monitor',
    description: 'AI-powered cybersecurity monitoring and threat detection platform for businesses.',
    icon: Shield,
    features: ['Threat Detection', 'Security Monitoring', 'Incident Response', 'Compliance Reporting'],
    pricing: '$149 - $799/month',
    category: 'Cybersecurity',
    benefits: ['Enhanced Security', 'Threat Prevention', 'Compliance', 'Peace of Mind'],
    marketPrice: '$200 - $1,200/month',
    link: 'https://cybersecurity.ziontechgroup.com'
  },
  {
    title: 'AI E-commerce Optimizer',
    description: 'AI-powered e-commerce optimization platform for online stores and marketplaces.',
    icon: ShoppingCart,
    features: ['Product Optimization', 'Pricing Strategy', 'Inventory Management', 'Customer Analytics'],
    pricing: '$99 - $499/month',
    category: 'E-commerce',
    benefits: ['Increased Sales', 'Better Pricing', 'Inventory Efficiency', 'Customer Insights'],
    marketPrice: '$150 - $750/month',
    link: 'https://ecommerce.ziontechgroup.com'
  },
  {
    title: 'AI Learning Management System',
    description: 'AI-powered personalized learning, content creation, and progress tracking for education.',
    icon: BookOpen,
    features: ['Personalized Learning', 'Content Generation', 'Progress Tracking', 'Assessment Tools'],
    pricing: '$39 - $199/month',
    category: 'Education',
    benefits: ['Better Learning', 'Personalization', 'Engagement', 'Efficiency'],
    marketPrice: '$60 - $300/month',
    link: 'https://learningai.ziontechgroup.com'
  }
];

export default function MicroSaaS() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Micro SaaS Solutions - Zion Tech Group</title>
        <meta name="description" content="Innovative micro SaaS solutions powered by AI for modern businesses" />
      </Head>

      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Micro SaaS Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Innovative micro SaaS solutions powered by AI to help your business grow and succeed.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {microSaasProducts.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <product.icon className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">{product.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-4">{product.description}</p>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
                <ul className="space-y-1">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-4">
                <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                  {product.category}
                </span>
                {product.popular && (
                  <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded ml-2">
                    Popular
                  </span>
                )}
              </div>
              
              <div className="text-2xl font-bold text-gray-900 mb-4">
                {product.pricing}
              </div>
              
              <Link href="/contact">
                <a className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold">
                  Learn More
                  <ArrowRight className="h-4 w-4 ml-1" />
                </a>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}