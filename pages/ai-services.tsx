import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { 
  Brain, 
  BarChart3, 
  MessageSquare, 
  Settings, 
  Target, 
  Building, 
  CheckCircle, 
  ArrowRight, 
  Heart, 
  DollarSign, 
  ShoppingCart, 
  BookOpen, 
  Car
} from 'lucide-react';

const aiServices = [
  {
    title: 'AI Business Intelligence',
    description: 'Transform your data into actionable insights with advanced AI analytics and reporting.',
    icon: BarChart3,
    features: ['Predictive Analytics', 'Real-time Dashboards', 'Custom Reports', 'Data Visualization'],
    price: 'Starting at $2,500/month',
    category: 'Analytics'
  },
  {
    title: 'AI Customer Support',
    description: '24/7 intelligent customer support powered by advanced natural language processing.',
    icon: MessageSquare,
    features: ['Chatbots', 'Voice Assistants', 'Multi-language Support', 'Sentiment Analysis'],
    price: 'Starting at $1,800/month',
    category: 'Customer Service'
  },
  {
    title: 'AI Project Management',
    description: 'Streamline project workflows with AI-powered task management and resource optimization.',
    icon: Settings,
    features: ['Smart Scheduling', 'Resource Allocation', 'Risk Assessment', 'Progress Tracking'],
    price: 'Starting at $2,200/month',
    category: 'Productivity'
  },
  {
    title: 'AI Marketing Automation',
    description: 'Personalize marketing campaigns and optimize customer engagement with AI-driven insights.',
    icon: Target,
    features: ['Personalized Content', 'A/B Testing', 'Customer Segmentation', 'Campaign Optimization'],
    price: 'Starting at $3,000/month',
    category: 'Marketing'
  },
  {
    title: 'AI Enterprise Automation',
    description: 'Automate complex business processes with intelligent workflow management systems.',
    icon: Building,
    features: ['Process Automation', 'Document Processing', 'Workflow Optimization', 'Compliance Monitoring'],
    price: 'Starting at $5,000/month',
    category: 'Enterprise'
  }
];

const benefits = [
  {
    icon: Brain,
    title: 'Advanced AI Technology',
    description: 'Cutting-edge machine learning and AI algorithms'
  },
  {
    icon: CheckCircle,
    title: 'Proven Results',
    description: 'Track record of successful AI implementations'
  },
  {
    icon: Heart,
    title: 'Customer-Focused',
    description: 'Solutions tailored to your specific business needs'
  },
  {
    icon: DollarSign,
    title: 'Cost-Effective',
    description: 'ROI-driven pricing with flexible payment options'
  }
];

export default function AIServices() {
  return (
    <Layout
      title="AI Services - Zion Tech Group"
      description="Transform your business with cutting-edge AI solutions including machine learning, automation, and intelligent analytics."
      keywords="AI services, artificial intelligence, machine learning, automation, business intelligence"
    >
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                AI Services That
                <span className="text-blue-600 block">Drive Results</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Harness the power of artificial intelligence to automate processes, 
                gain insights, and transform your business operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center px-8 py-4 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our AI Service Portfolio
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive AI solutions designed to address your specific business challenges 
                and drive measurable results.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-blue-100 rounded-lg mr-4">
                      <service.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {service.title}
                      </h3>
                      <span className="text-sm text-blue-600 font-medium">
                        {service.category}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-blue-600">
                      {service.price}
                    </span>
                    <Link
                      href="/contact"
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Learn More
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our AI Services?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We combine cutting-edge technology with deep industry expertise to deliver 
                AI solutions that drive real business value.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="p-4 bg-blue-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <benefit.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
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

        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Let our AI experts help you identify opportunities, implement solutions, 
                and achieve your business goals with cutting-edge artificial intelligence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Start Your AI Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center px-8 py-4 border border-blue-300 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Meet Our Team
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}