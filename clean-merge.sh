#!/bin/bash

# Clean merge by removing all conflict markers and keeping the main content
echo "Cleaning merge conflicts..."

# Fix Layout.tsx
cat > components/Layout.tsx << 'EOF'
import React, { useState } from 'react';
import Head from 'next/head';
import Header from './Header';
import { Sidebar } from './Sidebar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  noIndex?: boolean;
}

export default function Layout({
  children,
  title = 'Zion Tech Group - Leading AI & Technology Solutions',
  description = 'Transform your business with cutting-edge AI solutions, cloud services, and technology consulting. Expert team delivering innovative results.',
  keywords = 'AI solutions, cloud services, technology consulting, digital transformation, IT services, machine learning, cybersecurity',
  ogImage = '/images/og-image.jpg',
  noIndex = false
}: LayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
        {noIndex && <meta name="robots" content="noindex,nofollow" />}
        <link rel="canonical" href="https://ziontechgroup.com" />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        <Header onMenuClick={() => setIsSidebarOpen(true)} />
        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}
EOF

# Fix AIServices.tsx
cat > pages/AIServices.tsx << 'EOF'
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { 
  Brain, 
  Cpu, 
  Eye, 
  MessageSquare, 
  BarChart3, 
  Shield, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Star,
  TrendingUp,
  Building,
  Rocket,
  Lightbulb,
  Handshake,
  Car
} from 'lucide-react';

const aiServices = [
  {
    id: 1,
    name: 'Machine Learning & AI Development',
    description: 'Custom AI solutions and machine learning models tailored to your business needs',
    icon: Brain,
    features: [
      'Custom ML model development',
      'Data preprocessing and analysis',
      'Model training and optimization',
      'Real-time prediction systems',
      'Model deployment and monitoring'
    ],
    price: '$2,500 - $8,000/month',
    benefits: [
      '40% increase in operational efficiency',
      'Automated decision making',
      'Predictive analytics capabilities',
      'Reduced manual workload'
    ],
    marketPrice: '$4,000 - $12,000/month',
    setupTime: '2-4 weeks',
    targetUsers: 'Enterprises, Startups, SMBs'
  },
  {
    id: 2,
    name: 'Computer Vision Solutions',
    description: 'Advanced image and video analysis using cutting-edge computer vision technology',
    icon: Eye,
    features: [
      'Object detection and recognition',
      'Facial recognition systems',
      'Image classification',
      'Video analytics',
      'Real-time processing'
    ],
    price: '$3,000 - $10,000/month',
    benefits: [
      'Enhanced security systems',
      'Automated quality control',
      'Real-time monitoring',
      'Cost reduction in manual inspection'
    ],
    marketPrice: '$5,000 - $15,000/month',
    setupTime: '3-6 weeks',
    targetUsers: 'Manufacturing, Security, Healthcare'
  },
  {
    id: 3,
    name: 'Natural Language Processing',
    description: 'Text analysis, sentiment analysis, and language understanding solutions',
    icon: MessageSquare,
    features: [
      'Text classification and analysis',
      'Sentiment analysis',
      'Language translation',
      'Chatbot development',
      'Document processing'
    ],
    price: '$2,000 - $7,000/month',
    benefits: [
      'Automated customer support',
      'Improved content analysis',
      'Multilingual capabilities',
      'Enhanced user experience'
    ],
    marketPrice: '$3,500 - $10,000/month',
    setupTime: '2-4 weeks',
    targetUsers: 'E-commerce, Customer Service, Content Platforms'
  },
  {
    id: 4,
    name: 'Predictive Analytics Platform',
    description: 'Data-driven insights and forecasting to optimize business decisions',
    icon: BarChart3,
    features: [
      'Advanced statistical modeling',
      'Time series forecasting',
      'Risk assessment',
      'Performance optimization',
      'Real-time dashboards'
    ],
    price: '$3,500 - $12,000/month',
    benefits: [
      'Improved decision making',
      'Risk mitigation',
      'Revenue optimization',
      'Operational efficiency gains'
    ],
    marketPrice: '$6,000 - $18,000/month',
    setupTime: '4-8 weeks',
    targetUsers: 'Finance, Retail, Healthcare, Manufacturing'
  },
  {
    id: 5,
    name: 'AI-Powered Cybersecurity',
    description: 'Intelligent threat detection and automated security response systems',
    icon: Shield,
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
  }
];

const stats = [
  { number: "500+", label: "AI Projects Completed" },
  { number: "99.9%", label: "Accuracy Rate" },
  { number: "24/7", label: "AI Monitoring" },
  { number: "48hrs", label: "Average Response Time" }
];

export default function AIServices() {
  return (
    <Layout
      title="AI Services - Zion Tech Group"
      description="Comprehensive AI services including machine learning, computer vision, NLP, and cutting-edge quantum AI solutions."
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                AI Services & Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto">
                Transform your business with cutting-edge artificial intelligence solutions. 
                From machine learning to quantum AI, we deliver innovative results.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Get Started
                </Link>
                <Link href="/pricing" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  View Pricing
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our AI Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive AI solutions designed to accelerate your digital transformation
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center mb-4">
                    <service.icon className="w-8 h-8 text-blue-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">
                      {service.name}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-lg font-semibold text-blue-600">
                        {service.price}
                      </span>
                      <span className="text-sm text-gray-500 line-through">
                        {service.marketPrice}
                      </span>
                    </div>
                    <div className="text-sm text-gray-600">
                      Setup: {service.setupTime}
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Link 
                      href="/contact" 
                      className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg text-center hover:bg-blue-700 transition-colors"
                    >
                      Get Quote
                    </Link>
                    <Link 
                      href={`/ai-services#${service.name.toLowerCase().replace(/\s+/g, '-')}`}
                      className="flex-1 border border-blue-600 text-blue-600 px-4 py-2 rounded-lg text-center hover:bg-blue-50 transition-colors"
                    >
                      Learn More
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Contact our AI experts today for a free consultation and discover how our solutions can accelerate your success.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Start Your AI Journey
                </Link>
                <Link href="/pricing" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  View All Pricing
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
EOF

echo "Files cleaned successfully!"