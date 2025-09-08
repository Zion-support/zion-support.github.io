import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cloud, 
  Brain, 
  Zap, 
  Shield, 
  CheckCircle,
  ArrowRight,
  Clock,
  Award,
  Star,
  Users,
  Settings,
  BarChart3,
  Mail,
  MessageSquare,
  ShoppingCart,
  FileText,
  Target,
  Globe,
  Lock,
  Calendar,
  Code
const microSaasProducts = [
  {
    title: 'AI Content Marketing',
    description: 'Automated content creation and marketing campaigns powered by AI.',
    icon: Brain,
    features: ['AI Content Generation', 'Social Media Automation', 'SEO Optimization', 'Analytics Dashboard'],
    pricing: '$19/month',
    category: 'Marketing',
    popular: true,
    benefits: ['Save 10+ hours/week', 'Increase engagement by 40%', 'Automated posting', 'ROI tracking']
  },
  {
    title: 'Smart Lead Management',
    description: 'Intelligent lead scoring and management system for sales teams.',
    icon: Target,
    features: ['Lead Scoring', 'CRM Integration', 'Email Automation', 'Pipeline Analytics'],
    pricing: '$29/month',
    category: 'Sales',
    popular: true,
    benefits: ['25% more qualified leads', 'Automated follow-ups', 'Better conversion rates', 'Sales insights']
  },
  {
    title: 'Analytics Dashboard',
    description: 'Comprehensive business analytics and reporting dashboard.',
    icon: BarChart3,
    features: ['Real-time Analytics', 'Custom Reports', 'Data Visualization', 'Export Options'],
    pricing: '$15/month',
    category: 'Analytics',
    popular: false,
    benefits: ['Data-driven decisions', 'Custom dashboards', 'Real-time insights', 'Easy reporting']
  },
  {
    title: 'Workflow Automation',
    description: 'Automate repetitive tasks and streamline business processes.',
    icon: Settings,
    features: ['Task Automation', 'Integration Hub', 'Custom Workflows', 'Monitoring'],
    pricing: '$25/month',
    category: 'Automation',
    popular: false,
    benefits: ['Reduce manual work', 'Improve efficiency', 'Error reduction', 'Time savings']
  },
  {
    title: 'Customer Support Bot',
    description: 'AI-powered chatbot for 24/7 customer support and assistance.',
    icon: MessageSquare,
    features: ['AI Chatbot', 'Multi-language Support', 'Ticket Management', 'Analytics'],
    pricing: '$35/month',
    category: 'Support',
    popular: true,
    benefits: ['24/7 support', 'Instant responses', 'Reduced support costs', 'Customer satisfaction']
  },
  {
    title: 'Inventory Management',
    description: 'Smart inventory tracking and management for e-commerce businesses.',
    icon: ShoppingCart,
    features: ['Stock Tracking', 'Low Stock Alerts', 'Supplier Management', 'Reports'],
    pricing: '$20/month',
    category: 'E-commerce',
    popular: false,
    benefits: ['Prevent stockouts', 'Optimize inventory', 'Cost reduction', 'Better planning']
  },
  {
    title: 'Email Marketing',
    description: 'Advanced email marketing platform with automation and analytics.',
    icon: Mail,
    features: ['Email Automation', 'A/B Testing', 'Segmentation', 'Analytics'],
    pricing: '$22/month',
    category: 'Marketing',
    popular: false,
    benefits: ['Higher open rates', 'Automated campaigns', 'Better targeting', 'ROI tracking']
  },
  {
    title: 'Project Management',
    description: 'Collaborative project management tool for teams and freelancers.',
    icon: FileText,
    features: ['Task Management', 'Team Collaboration', 'Time Tracking', 'Reporting'],
    pricing: '$18/month',
    category: 'Productivity',
    popular: false,
    benefits: ['Better organization', 'Team coordination', 'Progress tracking', 'Deadline management']
  },
  {
    title: 'AI-Powered Social Media Scheduler',
    description: 'Intelligent social media scheduling with optimal timing and content suggestions.',
    icon: Globe,
    features: ['Smart Scheduling', 'Content Suggestions', 'Analytics', 'Multi-platform'],
    pricing: '$24/month',
    category: 'Marketing',
    popular: true,
    benefits: ['Optimal posting times', 'Content optimization', 'Time savings', 'Better engagement']
  },
  {
    title: 'Invoice Generator Pro',
    description: 'Professional invoice creation and management for freelancers and small businesses.',
    icon: FileText,
    features: ['Custom Templates', 'Payment Tracking', 'Tax Calculations', 'Client Portal'],
    pricing: '$12/month',
    category: 'Finance',
    popular: true,
    benefits: ['Professional invoices', 'Faster payments', 'Tax compliance', 'Client satisfaction']
  },
  {
    title: 'Password Manager Business',
    description: 'Secure password management and team sharing for businesses.',
    icon: Lock,
    features: ['Secure Storage', 'Team Sharing', 'Password Generator', 'Security Audit'],
    pricing: '$16/month',
    category: 'Security',
    popular: false,
    benefits: ['Enhanced security', 'Team collaboration', 'Password strength', 'Compliance']
  },
  {
    title: 'Time Tracking & Billing',
    description: 'Accurate time tracking and automated billing for service businesses.',
    icon: Clock,
    features: ['Time Tracking', 'Automatic Billing', 'Project Reports', 'Client Portal'],
    pricing: '$20/month',
    category: 'Productivity',
    popular: true,
    benefits: ['Accurate billing', 'Time optimization', 'Client transparency', 'Revenue tracking']
  },
  {
    title: 'AI Writing Assistant',
    description: 'AI-powered writing tool for content creation, editing, and optimization.',
    icon: Brain,
    features: ['Content Generation', 'Grammar Check', 'SEO Optimization', 'Tone Analysis'],
    pricing: '$28/month',
    category: 'Content',
    popular: true,
    benefits: ['Better writing', 'SEO improvement', 'Time savings', 'Consistent quality']
  },
  {
    title: 'Customer Feedback Manager',
    description: 'Collect, analyze, and act on customer feedback across all channels.',
    icon: MessageSquare,
    features: ['Feedback Collection', 'Sentiment Analysis', 'Action Planning', 'Reporting'],
    pricing: '$22/month',
    category: 'Customer Success',
    popular: false,
    benefits: ['Better insights', 'Customer satisfaction', 'Data-driven decisions', 'Retention improvement']
  },
  {
    title: 'Expense Tracker Pro',
    description: 'Smart expense tracking and receipt management for businesses.',
    icon: BarChart3,
    features: ['Receipt Scanning', 'Category Management', 'Tax Preparation', 'Reporting'],
    pricing: '$14/month',
    category: 'Finance',
    popular: false,
    benefits: ['Expense control', 'Tax compliance', 'Receipt organization', 'Budget tracking']
  },
  {
    title: 'Team Communication Hub',
    description: 'Centralized communication platform for remote and hybrid teams.',
    icon: Users,
    features: ['Chat & Video', 'File Sharing', 'Project Channels', 'Integration Hub'],
    pricing: '$26/month',
    category: 'Communication',
    popular: true,
    benefits: ['Better collaboration', 'Reduced emails', 'Centralized info', 'Team productivity']
  },
  {
    title: 'AI SEO Optimizer',
    description: 'Automated SEO analysis and optimization for websites and content.',
    icon: Target,
    features: ['SEO Analysis', 'Keyword Research', 'Content Optimization', 'Rank Tracking'],
    pricing: '$32/month',
    category: 'Marketing',
    popular: true,
    benefits: ['Better rankings', 'Traffic increase', 'SEO insights', 'Competitive advantage']
  },
  {
    title: 'Subscription Management',
    description: 'Track and manage all your business subscriptions and recurring payments.',
    icon: Settings,
    features: ['Subscription Tracking', 'Cost Analysis', 'Renewal Alerts', 'Usage Monitoring'],
    pricing: '$10/month',
    category: 'Finance',
    popular: false,
    benefits: ['Cost control', 'No surprises', 'Usage insights', 'Budget optimization']
  },
  {
    title: 'AI Customer Support',
    description: 'Intelligent customer support with automated responses and ticket routing.',
    icon: MessageSquare,
    features: ['AI Responses', 'Ticket Routing', 'Knowledge Base', 'Analytics'],
    pricing: '$30/month',
    category: 'Support',
    popular: true,
    benefits: ['Faster responses', '24/7 support', 'Cost reduction', 'Customer satisfaction']
  },
  {
    title: 'Document Collaboration',
    description: 'Real-time document collaboration and version control for teams.',
    icon: FileText,
    features: ['Real-time Editing', 'Version Control', 'Comments', 'Approval Workflow'],
    pricing: '$18/month',
    category: 'Productivity',
    popular: false,
    benefits: ['Better collaboration', 'Version control', 'Efficient reviews', 'Team coordination']
  },
  {
    title: 'AI Data Analytics',
    description: 'Automated data analysis and insights for business intelligence.',
    icon: BarChart3,
    features: ['Data Visualization', 'Automated Reports', 'Predictive Analytics', 'Custom Dashboards'],
    pricing: '$35/month',
    category: 'Analytics',
    popular: true,
    benefits: ['Data insights', 'Automated reports', 'Better decisions', 'Competitive advantage']
  },
  {
    title: 'Employee Onboarding',
    description: 'Streamlined employee onboarding process with automated workflows.',
    icon: Users,
    features: ['Workflow Automation', 'Document Management', 'Progress Tracking', 'Compliance'],
    pricing: '$25/month',
    category: 'HR',
    popular: false,
    benefits: ['Faster onboarding', 'Consistency', 'Compliance', 'Better experience']
  },
  {
    title: 'AI Meeting Scheduler',
    description: 'Intelligent meeting scheduling with calendar integration and optimization.',
    icon: Clock,
    features: ['Smart Scheduling', 'Calendar Sync', 'Time Zone Handling', 'Meeting Analytics'],
    pricing: '$16/month',
    category: 'Productivity',
    popular: true,
    benefits: ['Time savings', 'No conflicts', 'Optimal timing', 'Better meetings']
  },
  {
    title: 'Content Calendar Manager',
    description: 'Plan, schedule, and manage all your content across multiple platforms.',
    icon: Calendar,
    features: ['Content Planning', 'Multi-platform', 'Collaboration', 'Analytics'],
    pricing: '$20/month',
    category: 'Content',
    popular: false,
    benefits: ['Better planning', 'Consistency', 'Team coordination', 'Content strategy']
  },
  {
    title: 'AI Lead Qualification',
    description: 'Automated lead scoring and qualification using AI and machine learning.',
    icon: Target,
    features: ['Lead Scoring', 'Qualification Rules', 'CRM Integration', 'Analytics'],
    pricing: '$28/month',
    category: 'Sales',
    popular: true,
    benefits: ['Better leads', 'Higher conversion', 'Time savings', 'Sales efficiency']
  },
  {
    title: 'Team Performance Analytics',
    description: 'Track and analyze team performance with detailed insights and recommendations.',
    icon: BarChart3,
    features: ['Performance Metrics', 'Goal Tracking', 'Team Insights', 'Recommendations'],
    pricing: '$24/month',
    category: 'HR',
    popular: false,
    benefits: ['Performance insights', 'Goal alignment', 'Team improvement', 'Data-driven HR']
  },
  {
    title: 'AI Code Review Assistant',
    description: 'Automated code review and quality assurance for development teams.',
    icon: Code,
    features: ['Code Analysis', 'Quality Metrics', 'Security Checks', 'Best Practices'],
    pricing: '$40/month',
    category: 'Development',
    popular: true,
    benefits: ['Code quality', 'Security', 'Best practices', 'Team learning']
  'All Products',
  'Marketing',
  'Sales',
  'Analytics',
  'Automation',
  'Support',
  'E-commerce',
  'Productivity',
  'Finance',
  'Security',
  'Content',
  'Customer Success',
  'Communication',
  'HR',
  'Development'
];

const benefits = [
  {
    icon: Clock,
    title: "Quick Setup",
    description: "Get up and running in minutes, not weeks"
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Enterprise-grade security and 99.9% uptime"
  },
  {
    icon: Award,
    title: "Proven Results",
    description: "Trusted by thousands of businesses worldwide"
  }
];

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized for speed and performance"
  },
  {
    icon: Globe,
    title: "Global Scale",
    description: "Works seamlessly across all time zones"
  },
  {
    icon: Lock,
    title: "Data Security",
    description: "Your data is protected with enterprise security"
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Built for teams of all sizes"
  }
];

export default function MicroSAASPage() {
  return (
    <Layout
      title="Micro SaaS Solutions - Zion Tech Group"
      description="Discover our collection of powerful micro SaaS applications designed to solve specific business challenges. Affordable, scalable, and easy to use."
      keywords="micro SaaS, SaaS applications, business software, productivity tools, automation, AI tools"
    >
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Micro SaaS Solutions
              </h1>
              <p
                className={`text-xl md:text-2xl text-slate-300 mb-8 transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              >
                150+ Innovative Solutions for Modern Businesses
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="#products"
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Explore Products
                </a>
                <a
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
                >
                  Get Started
                </a>
        {/* Products Grid */}
        <section id="products" className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our Micro SaaS Products
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Each product is designed to solve a specific business problem with 
                powerful features and intuitive interfaces.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {microSaasProducts.map((product, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
                >
                  {product.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <product.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {product.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4">
                    {product.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-gray-900 mb-2">
                      Key Features:
                    </h4>
                    <ul className="space-y-1">
                      {product.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-xs text-gray-600">
                          <CheckCircle className="w-3 h-3 text-green-500 mr-1" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-gray-900 mb-2">
                      Benefits:
                    </h4>
                    <ul className="space-y-1">
                      {product.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-xs text-gray-600">
                          <Star className="w-3 h-3 text-yellow-500 mr-1" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600 mb-2">
                      {product.pricing}
                    </div>
                    <a
                      href="/contact"
                      className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors text-sm block"
                    >
                      Try Free
                    </a>
                  </div>
                </motion.div>
              ))}
        {/* Benefits Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
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
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
                Start with any of our micro SaaS products and see immediate results. 
                No long-term contracts, cancel anytime.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="/contact"
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center space-x-2"
                >
                  <span>Start Free Trial</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="/case-studies"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
                >
                  View Success Stories
                </a>
