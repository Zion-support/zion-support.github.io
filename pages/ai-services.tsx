import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Brain, Zap, Shield, Database, BarChart3, Users, MessageSquare, Search, Eye, Target, TrendingUp, CheckCircle, ArrowRight, Clock, Award, Star, Globe, Lock, Cpu, Bot, FileText, Video, Mic, Code, Settings, Monitor, Smartphone, Cloud, Server, Network, Car, Rocket, Heart, Building, Sprout, Mail, ShoppingCart, BookOpen, Home, Gamepad2 } from 'lucide-react';
import Layout from './components/Layout';

const aiServices = [
  {
    title: 'AI-Powered Email Responder',
    description: 'Automatically respond to customer emails with personalized, context-aware replies.',
    icon: Mail,
    features: ['Natural Language Processing', 'Sentiment Analysis', 'Auto-Response Generation', 'Multi-language Support'],
    pricing: '$500 - $2,000/month',
    category: 'Communication AI'
  },
  {
    title: 'AI Content Generator',
    description: 'Create high-quality, SEO-optimized content for blogs, social media, and marketing.',
    icon: FileText,
    features: ['Content Templates', 'SEO Optimization', 'Brand Voice Consistency', 'Multi-format Output'],
    pricing: '$300 - $1,500/month',
    category: 'Content AI'
  },
  {
    title: 'AI Customer Support Chatbot',
    description: 'Intelligent chatbot that provides 24/7 customer support with human-like responses.',
    icon: MessageSquare,
    features: ['Natural Conversations', 'Knowledge Base Integration', 'Escalation to Humans', 'Multi-channel Support'],
    pricing: '$800 - $3,000/month',
    category: 'Support AI'
  },
  {
    title: 'AI Data Analytics Dashboard',
    description: 'Transform raw data into actionable insights with AI-powered analytics.',
    icon: BarChart3,
    features: ['Predictive Analytics', 'Real-time Dashboards', 'Automated Reporting', 'Custom Visualizations'],
    pricing: '$1,000 - $5,000/month',
    category: 'Analytics AI'
  },
  {
    title: 'AI Image Recognition System',
    description: 'Advanced computer vision for object detection, classification, and analysis.',
    icon: Eye,
    features: ['Object Detection', 'Image Classification', 'Facial Recognition', 'Quality Assessment'],
    pricing: '$1,200 - $4,000/month',
    category: 'Vision AI'
  },
  {
    title: 'AI Voice Assistant',
    description: 'Custom voice assistant for hands-free interaction and automation.',
    icon: Mic,
    features: ['Voice Commands', 'Natural Language Understanding', 'Multi-language Support', 'Custom Wake Words'],
    pricing: '$600 - $2,500/month',
    category: 'Voice AI'
  }
];

export default function AIServicesPage() {
  return (
    <Layout
      title="AI Services - 80+ Cutting-Edge AI Solutions"
      description="Explore our comprehensive range of AI services including machine learning, natural language processing, computer vision, and more. Transform your business with AI."
      keywords="AI services, machine learning, natural language processing, computer vision, AI chatbots, AI analytics, artificial intelligence"
      ogTitle="AI Services - Zion Tech Group"
      ogDescription="Discover 80+ cutting-edge AI solutions designed to transform your business operations and drive innovation."
      ogUrl="https://ziontechgroup.com/ai-services"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              AI Services
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl mb-8 text-blue-100"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              80+ Cutting-Edge AI Solutions
            </motion.p>
            <motion.p 
              className="text-lg mb-12 text-blue-200 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Transform your business with our comprehensive AI services. From machine learning 
              and natural language processing to computer vision and predictive analytics.
            </motion.p>
          </div>
        </div>
      </section>

      {/* AI Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our AI Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI solutions designed to accelerate your digital transformation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <motion.div 
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <service.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {service.title}
                    </h3>
                    <p className="text-blue-600 text-sm font-medium">{service.category}</p>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-blue-600">{service.pricing}</span>
                  <Link 
                    href="/contact"
                    className="text-blue-600 hover:text-blue-700 font-semibold text-sm"
                  >
                    Learn More →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform with AI?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let's discuss how our AI services can revolutionize your business operations 
            and drive unprecedented growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Get AI Consultation
            </Link>
            <Link href="/services" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}