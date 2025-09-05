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
  BookOpen
} from 'lucide-react';

const microSaaSProducts = [
  {
    title: 'AI-Powered Analytics Dashboard',
    description: 'Real-time business analytics with AI insights and predictive modeling.',
    icon: BarChart3,
    features: ['Real-time Analytics', 'AI Insights', 'Predictive Modeling', 'Custom Reports'],
    pricing: '$29 - $199/month',
    category: 'Analytics',
    popular: true
  },
  {
    title: 'Customer Support Automation',
    description: 'AI-powered customer support with automated responses and ticket management.',
    icon: MessageSquare,
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
    category: 'Data Management'
  },
  {
    title: 'AI-Powered Code Review Assistant',
    description: 'Automated code review with security analysis and performance optimization.',
    icon: Code,
    features: ['Security Analysis', 'Performance Optimization', 'Code Quality Metrics', 'Automated Fixes'],
    pricing: '$199 - $999/month',
    category: 'Development',
    popular: true
  },
  {
    title: 'Blockchain Payment Gateway',
    description: 'Cryptocurrency payment processing with multi-chain support and DeFi integration.',
    icon: DollarSign,
    features: ['Multi-chain Support', 'DeFi Integration', 'Smart Contracts', 'Real-time Settlement'],
    pricing: '$299 - $1,999/month',
    category: 'FinTech',
    popular: true
  },
  {
    title: 'AI Social Media Manager',
    description: 'Automated social media content creation, scheduling, and engagement optimization.',
    icon: Share2,
    features: ['Content Generation', 'Optimal Posting Times', 'Engagement Analytics', 'Multi-platform Management'],
    pricing: '$49 - $299/month',
    category: 'Social Media',
    popular: true,
    link: 'https://socialai.ziontechgroup.com'
  },
  {
    title: 'Smart Inventory Management',
    description: 'AI-powered inventory optimization with demand forecasting and automated reordering.',
    icon: Package,
    features: ['Demand Forecasting', 'Automated Reordering', 'Stock Optimization', 'Supplier Integration'],
    pricing: '$89 - $499/month',
    category: 'E-commerce',
    link: 'https://inventoryai.ziontechgroup.com'
  },
  {
    title: 'AI Email Marketing Platform',
    description: 'Intelligent email campaigns with personalization, A/B testing, and performance optimization.',
    icon: Mail,
    features: ['AI Personalization', 'A/B Testing', 'Send Time Optimization', 'Advanced Analytics'],
    pricing: '$39 - $199/month',
    category: 'Marketing',
    link: 'https://emailai.ziontechgroup.com'
  },
  {
    title: 'Voice-to-Text Transcription Service',
    description: 'High-accuracy voice transcription with speaker identification and real-time processing.',
    icon: Mic,
    features: ['Real-time Transcription', 'Speaker Identification', 'Multiple Languages', 'API Integration'],
    pricing: '$0.02 - $0.10/minute',
    category: 'Voice Technology',
    link: 'https://voicetranscribe.ziontechgroup.com'
  },
  {
    title: 'AI Document Processing',
    description: 'Intelligent document extraction, classification, and data processing automation.',
    icon: FileText,
    features: ['Document Classification', 'Data Extraction', 'OCR Processing', 'Workflow Automation'],
    pricing: '$0.50 - $2.00/document',
    category: 'Document Management',
    link: 'https://docai.ziontechgroup.com'
  },
  {
    title: 'Smart Meeting Scheduler',
    description: 'AI-powered meeting scheduling with calendar integration and conflict resolution.',
    icon: Calendar,
    features: ['Calendar Integration', 'Conflict Resolution', 'Time Zone Management', 'Meeting Analytics'],
    pricing: '$19 - $99/month',
    category: 'Productivity',
    link: 'https://meetingsmart.ziontechgroup.com'
  },
  {
    title: 'AI Content Moderation',
    description: 'Automated content moderation for text, images, and videos with customizable rules.',
    icon: Eye,
    features: ['Multi-media Support', 'Custom Rules', 'Real-time Processing', 'API Integration'],
    pricing: '$0.01 - $0.05/content',
    category: 'Content Moderation',
    link: 'https://contentmod.ziontechgroup.com'
  },
  {
    title: 'Smart Expense Tracker',
    description: 'AI-powered expense management with receipt scanning and automatic categorization.',
    icon: Receipt,
    features: ['Receipt Scanning', 'Auto-categorization', 'Expense Reports', 'Budget Tracking'],
    pricing: '$9 - $49/month',
    category: 'Finance',
    link: 'https://expensetrack.ziontechgroup.com'
  },
  {
    title: 'AI Website Builder',
    description: 'Intelligent website creation with design suggestions and content optimization.',
    icon: Globe,
    features: ['Design Suggestions', 'Content Optimization', 'SEO Integration', 'Mobile Responsive'],
    pricing: '$29 - $149/month',
    category: 'Web Development',
    popular: true,
    link: 'https://websiteai.ziontechgroup.com'
  },
  {
    title: 'Smart Lead Scoring',
    description: 'AI-powered lead qualification and scoring for improved sales conversion.',
    icon: Target,
    features: ['Lead Scoring', 'Behavioral Analysis', 'CRM Integration', 'Conversion Tracking'],
    pricing: '$99 - $499/month',
    category: 'Sales',
    link: 'https://leadscore.ziontechgroup.com'
  },
  {
    title: 'AI Video Editor',
    description: 'Automated video editing with smart cuts, transitions, and content optimization.',
    icon: Video,
    features: ['Auto-editing', 'Smart Transitions', 'Content Optimization', 'Multi-format Export'],
    pricing: '$49 - $299/month',
    category: 'Video Production',
    link: 'https://videoai.ziontechgroup.com'
  },
  {
    title: 'Smart Password Manager',
    description: 'AI-enhanced password management with security analysis and breach monitoring.',
    icon: Lock,
    features: ['Password Generation', 'Security Analysis', 'Breach Monitoring', 'Multi-device Sync'],
    pricing: '$4.99 - $19.99/month',
    category: 'Security',
    link: 'https://passwordai.ziontechgroup.com'
  },
  {
    title: 'AI Customer Feedback Analyzer',
    description: 'Intelligent analysis of customer feedback with sentiment analysis and actionable insights.',
    icon: MessageSquare,
    features: ['Sentiment Analysis', 'Topic Extraction', 'Trend Analysis', 'Actionable Insights'],
    pricing: '$79 - $399/month',
    category: 'Customer Analytics',
    link: 'https://feedbackai.ziontechgroup.com'
  },
  {
    title: 'Smart Time Tracking',
    description: 'AI-powered time tracking with automatic task detection and productivity insights.',
    icon: Clock,
    features: ['Auto Task Detection', 'Productivity Insights', 'Project Tracking', 'Team Analytics'],
    pricing: '$15 - $79/month',
    category: 'Productivity',
    link: 'https://timetrack.ziontechgroup.com'
  },
  {
    title: 'AI Logo Generator',
    description: 'Intelligent logo creation with brand analysis and design optimization.',
    icon: Image,
    features: ['Brand Analysis', 'Design Optimization', 'Multiple Formats', 'Brand Guidelines'],
    pricing: '$29 - $149/logo',
    category: 'Design',
    link: 'https://logoai.ziontechgroup.com'
  },
  {
    title: 'Smart Contract Analytics',
    description: 'Blockchain smart contract analysis with security auditing and optimization suggestions.',
    icon: Code,
    features: ['Security Auditing', 'Gas Optimization', 'Vulnerability Detection', 'Code Review'],
    pricing: '$199 - $999/contract',
    category: 'Blockchain',
    link: 'https://contractai.ziontechgroup.com'
  },
  {
    title: 'AI Weather Prediction API',
    description: 'Advanced weather forecasting with machine learning and hyperlocal predictions.',
    icon: Cloud,
    features: ['Hyperlocal Forecasts', 'ML Predictions', 'Historical Analysis', 'API Integration'],
    pricing: '$0.10 - $1.00/forecast',
    category: 'Weather',
    link: 'https://weatherai.ziontechgroup.com'
  },
  {
    title: 'Smart Home Automation',
    description: 'AI-powered home automation with learning capabilities and energy optimization.',
    icon: Home,
    features: ['Learning Automation', 'Energy Optimization', 'Voice Control', 'Device Integration'],
    pricing: '$99 - $499/setup',
    category: 'IoT',
    link: 'https://homeai.ziontechgroup.com'
  },
  {
    title: 'AI Language Learning',
    description: 'Personalized language learning with adaptive curriculum and pronunciation analysis.',
    icon: BookOpen,
    features: ['Adaptive Learning', 'Pronunciation Analysis', 'Progress Tracking', 'Conversation Practice'],
    pricing: '$19 - $99/month',
    category: 'Education',
    link: 'https://languageai.ziontechgroup.com'
  },
  {
    title: 'Smart Fitness Tracker',
    description: 'AI-powered fitness tracking with personalized workout recommendations and health insights.',
    icon: Heart,
    features: ['Personalized Workouts', 'Health Insights', 'Progress Tracking', 'Wearable Integration'],
    pricing: '$9.99 - $49.99/month',
    category: 'Health & Fitness',
    link: 'https://fitnessai.ziontechgroup.com'
  }
];

const features = [
  {
    icon: Zap,
    title: 'Rapid Deployment',
    description: 'Get up and running in days, not months'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-level security and compliance'
  },
  {
    icon: Users,
    title: '24/7 Support',
    description: 'Round-the-clock technical support'
  },
  {
    icon: BarChart3,
    title: 'Analytics & Insights',
    description: 'Comprehensive analytics and reporting'
  }
];

export default function MicroSaaSPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Head>
        <title>Micro SaaS Solutions - Zion Tech Group</title>
        <meta name="description" content="Scalable micro SaaS solutions for modern businesses" />
        <meta name="keywords" content="micro saas, software as a service, business solutions, automation" />
      </Head>
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Micro SaaS Solutions
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Innovative, scalable software solutions that transform your business operations with cutting-edge technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold inline-flex items-center"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="#products"
                className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-slate-900 transition-all duration-300 font-semibold"
              >
                Explore Products
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Our Micro SaaS Solutions?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our micro SaaS products are designed to solve specific business challenges with precision, efficiency, and scalability.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <section id="products" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Micro SaaS Products
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive suite of micro SaaS solutions designed to accelerate your business growth.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaaSProducts.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <product.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  {product.title}
                </h3>
                <p className="text-gray-600 mb-6 text-center">
                  {product.description}
                </p>
                <div className="space-y-2 mb-6">
                  {product.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 mb-2">
                    {product.pricing}
                  </div>
                  {product.popular && (
                    <div className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full mb-4">
                      Most Popular
                    </div>
                  )}
                  <Link
                    href={product.link || '/contact'}
                    className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold"
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
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
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your specific needs and discover how our micro SaaS solutions can accelerate your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
              >
                Contact Us Now
              </Link>
              <Link
                href="/ai-services"
                className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
              >
                Explore AI Services
              </Link>
            </div>
            <div className="mt-12 text-center">
              <p className="text-lg font-semibold mb-4">Get in Touch</p>
              <div className="space-y-2 text-gray-200">
                <p>📞 Mobile: +1 302 464 0950</p>
                <p>📧 Email: kleber@ziontechgroup.com</p>
                <p>📍 Address: 364 E Main St STE 1008, Middletown DE 19709</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}