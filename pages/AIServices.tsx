import React from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import { 
  Brain, 
  Eye, 
  MessageSquare, 
  BarChart3, 
<<<<<<< HEAD
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
  Cog,
  Shield
=======
  Zap, 
  Shield, 
  ArrowRight, 
  CheckCircle, 
  Star,
  Clock,
  Users,
  Award,
  TrendingUp,
  Database,
  Cpu,
  Network,
  Target,
  Rocket
>>>>>>> cursor/automate-test-improve-and-merge-code-59d5
} from 'lucide-react';

const aiServices = [
  {
    title: "AI Content Generation",
    description: "Automated content creation for blogs, social media, and marketing materials",
    icon: FileText,
    category: "Content",
    features: ["Natural Language Processing", "SEO Optimization", "Multi-language Support", "Brand Voice Consistency"],
    pricing: "Starting at $299/month",
    setupTime: "1-2 weeks",
    targetUsers: "Content Teams, Marketing Agencies, Bloggers"
  },
  {
    title: "AI Security",
    description: "Advanced threat detection and security solutions powered by artificial intelligence",
    icon: Shield,
<<<<<<< HEAD
    category: "Security",
    features: ["Threat Detection", "Anomaly Detection", "Fraud Prevention", "Security Monitoring"],
    pricing: "Starting at $3,200/month",
    setupTime: "2-4 weeks",
    targetUsers: "Enterprises, Security Teams, IT Departments"
=======
    features: [
      'Threat detection and analysis',
      'Automated incident response',
      'Behavioral analytics',
      'Vulnerability assessment',
      'Security monitoring'
    ],
    price: '$4,000 - $15,000/month',
    benefits: [
      'Enhanced security posture',
      'Reduced false positives',
      'Faster threat response',
      'Compliance automation'
    ],
    marketPrice: '$7,000 - $25,000/month',
    setupTime: '3-6 weeks',
    targetUsers: 'Financial Services, Healthcare, Government, Enterprise'
  },
  {
    id: 6,
    name: 'Conversational AI & Chatbots',
    description: 'Intelligent virtual assistants and customer service automation',
    icon: MessageSquare,
    features: [
      'Natural language understanding',
      'Multi-channel deployment',
      'Context-aware conversations',
      'Integration with CRM systems',
      'Analytics and reporting'
    ],
    price: '$1,500 - $5,000/month',
    benefits: [
      '24/7 customer support',
      'Reduced support costs',
      'Improved customer satisfaction',
      'Scalable customer service'
    ],
    marketPrice: '$2,500 - $8,000/month',
    setupTime: '2-4 weeks',
    targetUsers: 'E-commerce, SaaS, Customer Service, Healthcare'
  },
  {
    id: 7,
    name: 'Quantum AI & Machine Learning',
    description: 'Next-generation AI powered by quantum computing principles',
    icon: Cpu,
    features: [
      'Quantum machine learning algorithms',
      'Quantum neural networks',
      'Optimization problems solving',
      'Quantum data processing',
      'Hybrid classical-quantum systems'
    ],
    price: '$5,500 - $15,000/month',
    benefits: [
      'Exponential processing power',
      'Complex problem solving',
      'Advanced optimization',
      'Future-proof technology'
    ],
    marketPrice: '$8,000 - $25,000/month',
    setupTime: '6-12 weeks',
    targetUsers: 'Research Institutions, Pharmaceutical, Financial Services'
  },
  {
    id: 8,
    name: 'AI Drug Discovery & Development',
    description: 'Accelerated pharmaceutical research using AI and machine learning',
    icon: Brain,
    features: [
      'Molecular property prediction',
      'Drug-target interaction modeling',
      'Clinical trial optimization',
      'Side effect prediction',
      'Drug repurposing analysis'
    ],
    price: '$4,500 - $20,000/month',
    benefits: [
      'Faster drug development',
      'Reduced R&D costs',
      'Improved success rates',
      'Personalized medicine'
    ],
    marketPrice: '$7,000 - $35,000/month',
    setupTime: '8-16 weeks',
    targetUsers: 'Pharmaceutical Companies, Research Labs, Biotech'
  },
  {
    id: 9,
    name: 'AI Climate & Environmental Solutions',
    description: 'Environmental monitoring and climate change mitigation using AI',
    icon: TrendingUp,
    features: [
      'Climate data analysis',
      'Environmental monitoring',
      'Carbon footprint optimization',
      'Renewable energy forecasting',
      'Sustainability reporting'
    ],
    price: '$2,200 - $7,000/month',
    benefits: [
      'Environmental compliance',
      'Cost savings on energy',
      'Sustainability goals achievement',
      'Risk mitigation'
    ],
    marketPrice: '$3,500 - $12,000/month',
    setupTime: '4-8 weeks',
    targetUsers: 'Energy Companies, Government, Environmental Organizations'
  },
  {
    id: 10,
    name: 'AI Space Technology & Research',
    description: 'Space exploration and satellite data analysis using advanced AI',
    icon: Rocket,
    features: [
      'Satellite data processing',
      'Space mission optimization',
      'Astronomical data analysis',
      'Space weather prediction',
      'Autonomous space systems'
    ],
    price: '$3,500 - $12,000/month',
    benefits: [
      'Enhanced space missions',
      'Improved data accuracy',
      'Cost-effective operations',
      'Scientific breakthroughs'
    ],
    marketPrice: '$5,500 - $20,000/month',
    setupTime: '6-12 weeks',
    targetUsers: 'Space Agencies, Satellite Companies, Research Institutions'
>>>>>>> cursor/automate-test-improve-and-merge-code-59d5
  }
];

const stats = [
  { number: "24/7", label: "AI Monitoring" },
  { number: "48hrs", label: "Average Response Time" }
];

export default function AIServices() {
  return (
    <Layout 
      title="AI Services - Zion Tech Group"
<<<<<<< HEAD
      description="Comprehensive AI solutions for modern businesses"
=======
      description="Comprehensive AI services including machine learning, computer vision, NLP, and cutting-edge quantum AI solutions."
>>>>>>> cursor/automate-test-improve-and-merge-code-59d5
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
<<<<<<< HEAD
                AI Services
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
                Transform your business with cutting-edge artificial intelligence solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Started
=======
                AI Services That Transform Businesses
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Harness the power of artificial intelligence to drive innovation and growth
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                >
                  Get AI Consultation
>>>>>>> cursor/automate-test-improve-and-merge-code-59d5
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
<<<<<<< HEAD
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                >
=======
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                >
                  View AI Portfolio
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Our AI Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive AI solutions designed to solve complex business challenges and drive innovation.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
                  >
                    <div className="flex items-center mb-4">
                      <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white mr-4">
                        <IconComponent size={24} />
                      </div>
                      <h3 className="text-2xl font-bold">{service.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle size={16} className="text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold text-gray-900">{service.pricing}</span>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                      >
                        Learn More
                      </motion.button>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">AI Excellence in Numbers</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our track record speaks for itself with proven results and satisfied clients.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-lg text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Harness AI Power?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Let's discuss how AI can transform your business and give you a competitive edge.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                >
                  Start AI Project
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                >
>>>>>>> cursor/automate-test-improve-and-merge-code-59d5
                  Schedule Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}