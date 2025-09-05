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
  Lock
} from 'lucide-react';
import Layout from '../components/Layout';

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
  }
];

const categories = [
  'All Products',
  'Marketing',
  'Sales',
  'Analytics',
  'Automation',
  'Support',
  'E-commerce',
  'Productivity'
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
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Micro SaaS Solutions
              </h1>
              <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-3xl mx-auto">
                Powerful, focused applications that solve specific business challenges. 
                Affordable, scalable, and easy to use.
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
              </div>
            </motion.div>
          </div>
        </section>

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
            </div>
          </div>
        </section>

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
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We focus on creating simple, powerful solutions that deliver immediate value.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="bg-gradient-to-br from-purple-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Built for Modern Businesses
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our products are designed with the latest technologies and best practices 
                to ensure optimal performance and user experience.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
                >
                  <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {feature.description}
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
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}