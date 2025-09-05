import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Cloud, Zap, Shield, Users, BarChart3, CheckCircle, ArrowRight, Clock, Star, 
  DollarSign, Award, Globe, Lock, Cpu, Bot, FileText, Image, Video, Mic, 
  Code, Settings, Monitor, Smartphone, Server, Network, Car, Rocket, Heart, 
  Building, Mail, MessageSquare, Search, Eye, Target, Brain, TrendingUp, 
  Package, Calendar, BookOpen, ShoppingCart, Home, Trash2, Camera, 
  HardDrive, Database, CreditCard, PieChart, Activity, Wifi, Headphones,
  MapPin, Phone, Mail as MailIcon, ExternalLink
} from 'lucide-react';
import Layout from './components/Layout';

const microSaaSProducts = [
  {
    title: 'Cloud Cost Guard (FinOps Assistant)',
    description: 'AI-powered cloud cost optimization with anomaly detection, rightsizing recommendations, and budget forecasting across AWS, Azure, and GCP.',
    icon: DollarSign,
    features: ['Real-time Cost Anomaly Detection', 'Auto Rightsizing Recommendations', 'Budget Forecasting & Alerts', 'Multi-cloud Cost Analysis', 'ROI Tracking', 'Cost Allocation by Department'],
    pricing: '$299 - $1,499/month',
    category: 'FinOps',
    popular: true,
    marketPrice: '$200 - $2,000/month',
    benefits: ['Save 20-40% on cloud costs', 'Prevent budget overruns', 'Automated optimization']
  },
  {
    title: 'LLM Evaluation & Safety Suite',
    description: 'Comprehensive AI safety platform for evaluating, testing, and monitoring large language models with bias detection and safety guardrails.',
    icon: Shield,
    features: ['Prompt Testing & Evaluation', 'Bias & Toxicity Detection', 'Jailbreak Prevention', 'Safety Guardrail Policies', 'Model Performance Metrics', 'Compliance Reporting'],
    pricing: '$799 - $3,500/month',
    category: 'AI Safety',
    popular: true,
    marketPrice: '$500 - $5,000/month',
    benefits: ['Ensure AI safety', 'Compliance ready', 'Reduce AI risks']
  },
  {
    title: 'Customer Feedback & NPS Micro-App',
    description: 'Embeddable customer feedback collection system with sentiment analysis, automated routing, and real-time NPS tracking.',
    icon: MessageSquare,
    features: ['Survey Builder & Templates', 'Sentiment Analysis', 'Auto Issue Routing', 'NPS & CSAT Tracking', 'Real-time Dashboards', 'Integration APIs'],
    pricing: '$149 - $799/month',
    category: 'Customer Experience',
    popular: false,
    marketPrice: '$99 - $1,200/month',
    benefits: ['Improve customer satisfaction', 'Automated feedback processing', 'Real-time insights']
  },
  {
    title: 'API Rate Limiting & Throttling',
    description: 'Intelligent API management with dynamic rate limiting, usage analytics, and automated scaling based on traffic patterns.',
    icon: Zap,
    features: ['Dynamic Rate Limiting', 'Usage Analytics & Monitoring', 'Auto-scaling Policies', 'API Key Management', 'Traffic Shaping', 'Cost Optimization'],
    pricing: '$199 - $999/month',
    category: 'API Management',
    popular: false,
    marketPrice: '$150 - $1,500/month',
    benefits: ['Prevent API abuse', 'Optimize performance', 'Reduce infrastructure costs']
  },
  {
    title: 'Social Media Content Scheduler',
    description: 'AI-powered social media management with content creation, optimal timing, and cross-platform posting automation.',
    icon: Calendar,
    features: ['AI Content Generation', 'Optimal Post Timing', 'Cross-platform Publishing', 'Engagement Analytics', 'Hashtag Optimization', 'Brand Voice Consistency'],
    pricing: '$99 - $499/month',
    category: 'Social Media',
    popular: true,
    marketPrice: '$79 - $800/month',
    benefits: ['Increase engagement by 40%', 'Save 10+ hours weekly', 'Consistent brand presence']
  },
  {
    title: 'Document Processing & OCR',
    description: 'Advanced document digitization with OCR, data extraction, and intelligent document classification for business automation.',
    icon: FileText,
    features: ['High-accuracy OCR', 'Data Extraction & Validation', 'Document Classification', 'Batch Processing', 'API Integration', 'Custom Templates'],
    pricing: '$299 - $1,299/month',
    category: 'Document Management',
    popular: false,
    marketPrice: '$200 - $2,000/month',
    benefits: ['Eliminate manual data entry', '99.5% accuracy', 'Process 1000s of documents']
  },
  {
    title: 'Video Analytics & Insights',
    description: 'AI-powered video analysis platform for content optimization, engagement tracking, and automated video editing recommendations.',
    icon: Video,
    features: ['Content Analysis', 'Engagement Heatmaps', 'Auto Thumbnail Generation', 'A/B Testing', 'Performance Metrics', 'Trend Analysis'],
    pricing: '$399 - $1,999/month',
    category: 'Video Analytics',
    popular: false,
    marketPrice: '$300 - $3,000/month',
    benefits: ['Increase video engagement', 'Optimize content strategy', 'Automated insights']
  },
  {
    title: 'Email Deliverability Monitor',
    description: 'Comprehensive email health monitoring with deliverability tracking, reputation management, and automated optimization.',
    icon: Mail,
    features: ['Deliverability Monitoring', 'Reputation Tracking', 'Spam Score Analysis', 'A/B Testing', 'List Hygiene Tools', 'Performance Reports'],
    pricing: '$149 - $699/month',
    category: 'Email Marketing',
    popular: false,
    marketPrice: '$99 - $1,200/month',
    benefits: ['Improve inbox placement', 'Maintain sender reputation', 'Increase open rates']
  },
  {
    title: 'Inventory Management System',
    description: 'Smart inventory tracking with demand forecasting, automated reordering, and real-time stock level monitoring.',
    icon: Package,
    features: ['Real-time Stock Tracking', 'Demand Forecasting', 'Auto Reorder Points', 'Multi-location Support', 'Supplier Integration', 'Analytics Dashboard'],
    pricing: '$199 - $999/month',
    category: 'Inventory',
    popular: true,
    marketPrice: '$150 - $1,500/month',
    benefits: ['Reduce stockouts by 60%', 'Optimize inventory levels', 'Automated reordering']
  },
  {
    title: 'Employee Time Tracking',
    description: 'Advanced time tracking with productivity analytics, project billing, and automated timesheet generation.',
    icon: Clock,
    features: ['Automatic Time Tracking', 'Productivity Analytics', 'Project Billing', 'Timesheet Automation', 'Team Management', 'Reporting Dashboard'],
    pricing: '$79 - $399/month',
    category: 'Productivity',
    popular: false,
    marketPrice: '$50 - $600/month',
    benefits: ['Increase productivity by 25%', 'Accurate project billing', 'Automated reporting']
  },
  {
    title: 'Lead Scoring & Qualification',
    description: 'AI-powered lead scoring system that automatically qualifies prospects and prioritizes sales efforts for maximum conversion.',
    icon: Target,
    features: ['AI Lead Scoring', 'Behavioral Tracking', 'Lead Qualification', 'CRM Integration', 'Scoring Models', 'Conversion Analytics'],
    pricing: '$299 - $1,499/month',
    category: 'Sales Automation',
    popular: true,
    marketPrice: '$200 - $2,000/month',
    benefits: ['Increase conversion by 35%', 'Prioritize high-value leads', 'Automated qualification']
  },
  {
    title: 'Website Performance Monitor',
    description: 'Comprehensive website monitoring with real-time performance tracking, uptime monitoring, and automated optimization suggestions.',
    icon: Monitor,
    features: ['Real-time Monitoring', 'Uptime Tracking', 'Performance Metrics', 'Automated Alerts', 'Optimization Suggestions', 'Historical Reports'],
    pricing: '$99 - $499/month',
    category: 'Web Monitoring',
    popular: false,
    marketPrice: '$79 - $800/month',
    benefits: ['99.9% uptime guarantee', 'Faster page loads', 'Proactive issue detection']
  },
  {
    title: 'Customer Onboarding Automation',
    description: 'Streamlined customer onboarding with automated workflows, progress tracking, and personalized user experiences.',
    icon: Users,
    features: ['Automated Workflows', 'Progress Tracking', 'Personalized Experiences', 'Email Sequences', 'Task Automation', 'Success Metrics'],
    pricing: '$199 - $999/month',
    category: 'Customer Success',
    popular: false,
    marketPrice: '$150 - $1,500/month',
    benefits: ['Reduce churn by 30%', 'Faster time to value', 'Improved user experience']
  },
  {
    title: 'A/B Testing Platform',
    description: 'Advanced experimentation platform for testing website elements, email campaigns, and product features with statistical significance.',
    icon: BarChart3,
    features: ['Visual Editor', 'Statistical Analysis', 'Multivariate Testing', 'Conversion Tracking', 'Segmentation', 'Results Dashboard'],
    pricing: '$149 - $799/month',
    category: 'Experimentation',
    popular: false,
    marketPrice: '$99 - $1,200/month',
    benefits: ['Increase conversions by 20%', 'Data-driven decisions', 'Easy experimentation']
  },
  {
    title: 'Password Manager for Teams',
    description: 'Enterprise-grade password management with secure sharing, audit trails, and compliance features for teams and organizations.',
    icon: Lock,
    features: ['Secure Password Storage', 'Team Sharing', 'Audit Trails', 'Compliance Reporting', 'SSO Integration', 'Password Generator'],
    pricing: '$79 - $399/month',
    category: 'Security',
    popular: false,
    marketPrice: '$50 - $600/month',
    benefits: ['Enhanced security', 'Compliance ready', 'Centralized management']
  },
  {
    title: 'Meeting Scheduler & Booking',
    description: 'Intelligent meeting scheduling with calendar integration, time zone handling, and automated follow-up sequences.',
    icon: Calendar,
    features: ['Calendar Integration', 'Time Zone Handling', 'Automated Reminders', 'Custom Booking Pages', 'Meeting Analytics', 'Follow-up Automation'],
    pricing: '$49 - $299/month',
    category: 'Scheduling',
    popular: true,
    marketPrice: '$29 - $500/month',
    benefits: ['Save 5+ hours weekly', 'Reduce no-shows', 'Professional booking experience']
  },
  {
    title: 'Code Quality Monitor',
    description: 'Automated code quality analysis with security scanning, performance metrics, and technical debt tracking for development teams.',
    icon: Code,
    features: ['Code Quality Metrics', 'Security Scanning', 'Performance Analysis', 'Technical Debt Tracking', 'Team Reports', 'CI/CD Integration'],
    pricing: '$199 - $999/month',
    category: 'Development',
    popular: false,
    marketPrice: '$150 - $1,500/month',
    benefits: ['Improve code quality', 'Reduce bugs by 40%', 'Faster development cycles']
  },
  {
    title: 'Customer Support Ticket System',
    description: 'Comprehensive helpdesk solution with AI-powered ticket routing, knowledge base integration, and customer satisfaction tracking.',
    icon: Headphones,
    features: ['AI Ticket Routing', 'Knowledge Base', 'Satisfaction Surveys', 'Multi-channel Support', 'SLA Management', 'Analytics Dashboard'],
    pricing: '$149 - $799/month',
    category: 'Support',
    popular: true,
    marketPrice: '$99 - $1,200/month',
    benefits: ['Faster resolution times', 'Improved customer satisfaction', 'Reduced support costs']
  },
  {
    title: 'Data Backup & Recovery',
    description: 'Automated data backup solution with point-in-time recovery, cross-region replication, and compliance-ready archiving.',
    icon: HardDrive,
    features: ['Automated Backups', 'Point-in-time Recovery', 'Cross-region Replication', 'Compliance Archiving', 'Encryption', 'Monitoring Dashboard'],
    pricing: '$99 - $599/month',
    category: 'Data Protection',
    popular: false,
    marketPrice: '$79 - $1,000/month',
    benefits: ['99.99% data protection', 'Compliance ready', 'Automated recovery']
  },
  {
    title: 'Invoice & Billing Automation',
    description: 'Automated invoicing system with payment processing, recurring billing, and financial reporting for businesses of all sizes.',
    icon: CreditCard,
    features: ['Automated Invoicing', 'Payment Processing', 'Recurring Billing', 'Financial Reports', 'Tax Calculations', 'Client Portal'],
    pricing: '$79 - $399/month',
    category: 'Finance',
    popular: true,
    marketPrice: '$50 - $600/month',
    benefits: ['Reduce billing time by 80%', 'Faster payments', 'Automated compliance']
  }
];

const categories = [
  { name: 'All', count: microSaaSProducts.length },
  { name: 'FinOps', count: microSaaSProducts.filter(p => p.category === 'FinOps').length },
  { name: 'AI Safety', count: microSaaSProducts.filter(p => p.category === 'AI Safety').length },
  { name: 'Customer Experience', count: microSaaSProducts.filter(p => p.category === 'Customer Experience').length },
  { name: 'API Management', count: microSaaSProducts.filter(p => p.category === 'API Management').length },
  { name: 'Social Media', count: microSaaSProducts.filter(p => p.category === 'Social Media').length },
  { name: 'Document Management', count: microSaaSProducts.filter(p => p.category === 'Document Management').length },
  { name: 'Video Analytics', count: microSaaSProducts.filter(p => p.category === 'Video Analytics').length },
  { name: 'Email Marketing', count: microSaaSProducts.filter(p => p.category === 'Email Marketing').length },
  { name: 'Inventory', count: microSaaSProducts.filter(p => p.category === 'Inventory').length },
  { name: 'Productivity', count: microSaaSProducts.filter(p => p.category === 'Productivity').length },
  { name: 'Sales Automation', count: microSaaSProducts.filter(p => p.category === 'Sales Automation').length },
  { name: 'Web Monitoring', count: microSaaSProducts.filter(p => p.category === 'Web Monitoring').length },
  { name: 'Customer Success', count: microSaaSProducts.filter(p => p.category === 'Customer Success').length },
  { name: 'Experimentation', count: microSaaSProducts.filter(p => p.category === 'Experimentation').length },
  { name: 'Security', count: microSaaSProducts.filter(p => p.category === 'Security').length },
  { name: 'Scheduling', count: microSaaSProducts.filter(p => p.category === 'Scheduling').length },
  { name: 'Development', count: microSaaSProducts.filter(p => p.category === 'Development').length },
  { name: 'Support', count: microSaaSProducts.filter(p => p.category === 'Support').length },
  { name: 'Data Protection', count: microSaaSProducts.filter(p => p.category === 'Data Protection').length },
  { name: 'Finance', count: microSaaSProducts.filter(p => p.category === 'Finance').length }
];

export default function MicroSAASPage() {
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  
  const filteredProducts = selectedCategory === 'All' 
    ? microSaaSProducts 
    : microSaaSProducts.filter(product => product.category === selectedCategory);

  return (
    <Layout
      title="Micro SaaS Solutions - 85+ Innovative Platforms"
      description="Discover our comprehensive range of micro SaaS solutions designed for modern businesses. From AI-powered tools to productivity platforms, transform your operations."
      keywords="micro SaaS, SaaS solutions, business automation, productivity tools, AI platforms, cloud software"
      ogTitle="Micro SaaS Solutions - Zion Tech Group"
      ogDescription="Explore 85+ innovative micro SaaS platforms designed to transform your business operations and drive growth."
      ogUrl="https://ziontechgroup.com/micro-saas"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Micro SaaS Solutions
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl mb-8 text-purple-100"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              85+ Innovative Platforms
            </motion.p>
            <motion.p 
              className="text-lg mb-12 text-purple-200 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Transform your business with our comprehensive suite of micro SaaS solutions. 
              From AI-powered automation to productivity tools, we have everything you need to scale.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link href="/contact" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                Get Started Today
              </Link>
              <Link href="/services" className="border-2 border-white text-white hover:bg-white hover:text-purple-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                View All Services
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Info Banner */}
      <section className="bg-blue-600 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center gap-2">
              <MailIcon className="w-5 h-5" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category.name
                    ? 'bg-purple-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-purple-100'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Micro SaaS Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive micro SaaS platforms designed to solve specific business challenges and drive growth.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div 
                key={index}
                className={`bg-white border border-gray-200 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow relative ${
                  product.popular ? 'ring-2 ring-purple-500' : ''
                }`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {product.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Popular
                    </span>
                  </div>
                )}
                
                <div className="flex items-center mb-6">
                  <div className="bg-purple-100 p-3 rounded-lg mr-4">
                    <product.icon className="w-8 h-8 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {product.title}
                    </h3>
                    <p className="text-purple-600 text-sm font-medium">{product.category}</p>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {product.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-purple-600">{product.pricing}</span>
                    <span className="text-sm text-gray-500">Market: {product.marketPrice}</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    <strong>Key Benefits:</strong> {product.benefits.join(', ')}
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Link 
                    href="/contact"
                    className="flex-1 bg-purple-600 hover:bg-purple-700 text-white text-center py-2 px-4 rounded-lg font-semibold transition-colors"
                  >
                    Get Quote
                  </Link>
                  <Link 
                    href="/contact"
                    className="flex-1 border border-purple-600 text-purple-600 hover:bg-purple-50 text-center py-2 px-4 rounded-lg font-semibold transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Micro SaaS */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Our Micro SaaS Solutions?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine cutting-edge technology with deep business expertise to deliver solutions that drive real results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Zap,
                title: "Rapid Deployment",
                description: "Get up and running in days, not months"
              },
              {
                icon: Shield,
                title: "Enterprise Security",
                description: "Bank-level security and compliance"
              },
              {
                icon: Users,
                title: "Dedicated Support",
                description: "24/7 expert support and training"
              },
              {
                icon: BarChart3,
                title: "Proven ROI",
                description: "Average 300% ROI within 6 months"
              }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Join thousands of businesses that trust Zion Tech Group for their micro SaaS needs. 
            Let's build the future together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Start Your Project
            </Link>
            <Link href="/services" className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}