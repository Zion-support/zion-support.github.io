import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Brain, 
  Zap, 
  Shield, 
  Target,
  BarChart3,
  Cpu,
  Database,
  Eye,
  MessageSquare,
  Search,
  TrendingUp,
  CheckCircle,
  Star,
  Users,
  Award
} from 'lucide-react';

const aiServices = [
  {
    icon: Brain,
    title: 'Machine Learning Solutions',
    description: 'Custom ML models tailored to your business needs, from predictive analytics to recommendation systems.',
    features: [
      'Predictive Analytics',
      'Recommendation Engines',
      'Pattern Recognition',
      'Data Mining',
      'Model Training & Optimization'
    ],
    pricing: 'Starting at $5,000/month'
  },
  {
    icon: MessageSquare,
    title: 'Natural Language Processing',
    description: 'Advanced NLP solutions for text analysis, sentiment analysis, and automated content generation.',
    features: [
      'Sentiment Analysis',
      'Text Classification',
      'Language Translation',
      'Chatbot Development',
      'Content Generation'
    ],
    pricing: 'Starting at $3,000/month'
  },
  {
    icon: Eye,
    title: 'Computer Vision',
    description: 'Image and video analysis solutions for object detection, facial recognition, and visual inspection.',
    features: [
      'Object Detection',
      'Facial Recognition',
      'Image Classification',
      'Video Analysis',
      'Quality Inspection'
    ],
    pricing: 'Starting at $4,000/month'
  },
  {
    icon: BarChart3,
    title: 'Predictive Analytics',
    description: 'Data-driven insights and forecasting to help you make informed business decisions.',
    features: [
      'Sales Forecasting',
      'Risk Assessment',
      'Customer Behavior Analysis',
      'Market Trend Analysis',
      'Performance Optimization'
    ],
    pricing: 'Starting at $2,500/month'
  },
  {
    icon: Search,
    title: 'Intelligent Search',
    description: 'AI-powered search solutions that understand context and deliver relevant results.',
    features: [
      'Semantic Search',
      'Voice Search',
      'Auto-complete',
      'Search Analytics',
      'Personalized Results'
    ],
    pricing: 'Starting at $1,500/month'
  },
  {
    icon: Zap,
    title: 'Process Automation',
    description: 'Automate repetitive tasks and workflows with intelligent automation solutions.',
    features: [
      'Workflow Automation',
      'Document Processing',
      'Email Automation',
      'Data Entry Automation',
      'Task Scheduling'
    ],
    pricing: 'Starting at $2,000/month'
  }
];

const useCases = [
  {
    industry: 'Healthcare',
    title: 'Medical Image Analysis',
    description: 'AI-powered analysis of medical images for faster and more accurate diagnoses.',
    icon: Eye
  },
  {
    industry: 'Finance',
    title: 'Fraud Detection',
    description: 'Real-time fraud detection using machine learning algorithms.',
    icon: Shield
  },
  {
    industry: 'E-commerce',
    title: 'Product Recommendations',
    description: 'Personalized product recommendations to increase sales and customer satisfaction.',
    icon: Target
  },
  {
    industry: 'Manufacturing',
    title: 'Quality Control',
    description: 'Automated quality inspection using computer vision technology.',
    icon: Cpu
  }
];

const benefits = [
  {
    icon: TrendingUp,
    title: 'Increased Efficiency',
    description: 'Automate repetitive tasks and optimize processes for better productivity.'
  },
  {
    icon: Target,
    title: 'Better Decision Making',
    description: 'Data-driven insights help you make informed business decisions.'
  },
  {
    icon: Shield,
    title: 'Enhanced Security',
    description: 'AI-powered security solutions protect your business from threats.'
  },
  {
    icon: Users,
    title: 'Improved Customer Experience',
    description: 'Personalized experiences that delight your customers.'
  }
];

export default function AIServicesPage() {
  return (
    <>
      <Head>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Transform your business with our cutting-edge AI services including machine learning, NLP, computer vision, and predictive analytics." />
        <meta name="keywords" content="AI services, machine learning, NLP, computer vision, predictive analytics, artificial intelligence" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Navigation */}
        <nav className="relative z-10 px-6 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-white text-xl font-bold">Zion Tech Group</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/about" className="text-gray-300 hover:text-white transition-colors">About</Link>
              <Link href="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link>
              <Link href="/ai-services" className="text-white font-semibold">AI Services</Link>
              <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="px-6 py-20">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                AI
                <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Services
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your business with cutting-edge artificial intelligence solutions. 
                From machine learning to computer vision, we help you harness the power of AI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="#services" className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">
                  Explore Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-colors">
                  Get Started
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* AI Services Grid */}
        <section id="services" className="px-6 py-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our AI Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI solutions designed to solve real business challenges and drive growth.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-8 hover:bg-white/20 transition-all duration-300"
                >
                  <service.icon className="h-12 w-12 text-blue-400 mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="text-blue-400 font-semibold mb-4">{service.pricing}</div>
                  <Link href="/contact" className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="px-6 py-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Industry Use Cases</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how AI is transforming different industries and how we can help your business.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-6 hover:bg-white/20 transition-all duration-300 text-center"
                >
                  <useCase.icon className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                  <div className="text-blue-400 font-semibold mb-2">{useCase.industry}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300 text-sm">{useCase.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="px-6 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Why Choose Our AI Services?</h2>
                <p className="text-lg text-gray-300 mb-8">
                  Our AI solutions are designed to deliver measurable results and drive business growth. 
                  We combine cutting-edge technology with deep industry expertise.
                </p>
                <div className="space-y-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <benefit.icon className="h-6 w-6 text-blue-400 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                        <p className="text-gray-300">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold text-white mb-6">Ready to Get Started?</h3>
                <p className="text-blue-100 mb-6">
                  Let's discuss how AI can transform your business. Our experts are ready to help you 
                  identify opportunities and implement the right solutions.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Award className="h-5 w-5 text-blue-200" />
                    <span className="text-blue-100">5+ Years AI Experience</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-blue-200" />
                    <span className="text-blue-100">50+ Successful Projects</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Star className="h-5 w-5 text-blue-200" />
                    <span className="text-blue-100">98% Client Satisfaction</span>
                  </div>
                </div>
                <Link href="/contact" className="mt-6 inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                  Start Your AI Journey
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Let's discuss how our AI services can help you achieve your business goals.
              </p>
              <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-6 py-12 border-t border-gray-800">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">Z</span>
                  </div>
                  <span className="text-white text-xl font-bold">Zion Tech Group</span>
                </div>
                <p className="text-gray-400">
                  Transforming businesses with cutting-edge technology solutions.
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-4">Services</h3>
                <ul className="space-y-2">
                  <li><Link href="/ai-services" className="text-white font-semibold">AI Services</Link></li>
                  <li><Link href="/it-services" className="text-gray-400 hover:text-white">IT Services</Link></li>
                  <li><Link href="/micro-saas" className="text-gray-400 hover:text-white">Micro SaaS</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-4">Company</h3>
                <ul className="space-y-2">
                  <li><Link href="/about" className="text-gray-400 hover:text-white">About</Link></li>
                  <li><Link href="/blog" className="text-gray-400 hover:text-white">Blog</Link></li>
                  <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-4">Contact</h3>
                <p className="text-gray-400">info@ziontechgroup.com</p>
                <p className="text-gray-400">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center">
              <p className="text-gray-400">&copy; 2024 Zion Tech Group. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}