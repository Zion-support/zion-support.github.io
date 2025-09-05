import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Brain, Zap, Shield, Eye, Mic, TrendingUp, Database, FileText, Code, Cog, Search, Users } from 'lucide-react';

export default function AIServices() {
  const contact = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    site: 'https://ziontechgroup.com'
  };

  const aiServices = [
    {
      icon: Brain,
      name: 'AI Customer Support Automation',
      description: 'Intelligent chatbots and automated customer service solutions that reduce response times by 80% and improve customer satisfaction.',
      features: [
        'Natural language processing and understanding',
        'Multi-channel support (chat, email, phone)',
        'Human-in-the-loop escalation',
        'Knowledge base integration and mining',
        'Sentiment analysis and mood detection',
        '24/7 availability with instant responses'
      ],
      price: '$2,500/month',
      delivery: '2-4 weeks'
    },
    {
      icon: Zap,
      name: 'AI-Powered Business Intelligence',
      description: 'Advanced analytics and predictive insights that transform raw data into actionable business intelligence.',
      features: [
        'Real-time data processing and analysis',
        'Predictive modeling and forecasting',
        'Custom dashboard creation',
        'Automated report generation',
        'Anomaly detection and alerting',
        'Integration with existing systems'
      ],
      price: '$3,500/month',
      delivery: '3-6 weeks'
    },
    {
      icon: Shield,
      name: 'AI Security & Fraud Detection',
      description: 'Machine learning-powered security solutions that protect your business from threats and fraudulent activities.',
      features: [
        'Real-time threat detection',
        'Behavioral analysis and pattern recognition',
        'Automated incident response',
        'Compliance monitoring',
        'Risk assessment and scoring',
        'Integration with security tools'
      ],
      price: '$4,000/month',
      delivery: '4-8 weeks'
    },
    {
      icon: Eye,
      name: 'Computer Vision Solutions',
      description: 'Advanced image and video analysis capabilities for various business applications.',
      features: [
        'Object detection and recognition',
        'Facial recognition and verification',
        'Quality control and inspection',
        'Document processing and OCR',
        'Video analytics and monitoring',
        'Custom model training'
      ],
      price: '$3,000/month',
      delivery: '3-5 weeks'
    },
    {
      icon: Mic,
      name: 'Voice AI & Speech Processing',
      description: 'Natural language processing and speech recognition solutions for voice-enabled applications.',
      features: [
        'Speech-to-text conversion',
        'Text-to-speech synthesis',
        'Voice command recognition',
        'Multi-language support',
        'Real-time processing',
        'Custom voice training'
      ],
      price: '$2,800/month',
      delivery: '2-4 weeks'
    },
    {
      icon: TrendingUp,
      name: 'AI Marketing Automation',
      description: 'Intelligent marketing tools that optimize campaigns and improve customer engagement.',
      features: [
        'Customer segmentation and targeting',
        'Content personalization',
        'Email marketing optimization',
        'Social media management',
        'A/B testing and optimization',
        'ROI tracking and analytics'
      ],
      price: '$2,200/month',
      delivery: '2-3 weeks'
    }
  ];

  return (
    <>
      <Head>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Transform your business with our cutting-edge AI services. From customer support automation to business intelligence, we deliver intelligent solutions that drive growth." />
        <link rel="canonical" href={`${contact.site}/ai-services`} />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Header */}
        <header className="bg-black/20 backdrop-blur-sm border-b border-purple-500/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-6">
              <div className="flex items-center">
                <Link href="/" className="text-2xl font-bold text-white">
                  Zion Tech Group
                </Link>
              </div>
              <nav className="hidden md:flex space-x-8">
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
                <Link href="/ai-services" className="text-white font-medium">
                  AI Services
                </Link>
                <Link href="/blockchain" className="text-gray-300 hover:text-white transition-colors">
                  Blockchain
                </Link>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </nav>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Services That
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Transform
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Harness the power of artificial intelligence to automate processes, gain insights, and drive innovation across your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
              >
                Get Started
              </Link>
              <Link 
                href="#services" 
                className="border border-purple-400 text-purple-400 px-8 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                View Services
              </Link>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              Our AI Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="bg-purple-600 p-3 rounded-lg mr-4">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{service.name}</h3>
                  </div>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-white">{service.price}</span>
                    <span className="text-purple-400 text-sm">{service.delivery}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our AI solutions can help you achieve your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
              >
                Contact Us Today
              </Link>
              <a 
                href={`tel:${contact.phone}`} 
                className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                Call {contact.phone}
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black/20 backdrop-blur-sm border-t border-purple-500/20 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Zion Tech Group</h3>
                <p className="text-gray-300 mb-4">
                  Transforming businesses through innovative AI and technology solutions.
                </p>
                <div className="text-gray-300">
                  <p>{contact.address}</p>
                  <p>Phone: {contact.phone}</p>
                  <p>Email: {contact.email}</p>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
                <ul className="space-y-2 text-gray-300">
                  <li><Link href="/ai-services" className="hover:text-white transition-colors">AI Services</Link></li>
                  <li><Link href="/blockchain" className="hover:text-white transition-colors">Blockchain</Link></li>
                  <li><Link href="/contact" className="hover:text-white transition-colors">Consulting</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
                <ul className="space-y-2 text-gray-300">
                  <li><Link href="/contact" className="hover:text-white transition-colors">Get Quote</Link></li>
                  <li><a href={`tel:${contact.phone}`} className="hover:text-white transition-colors">Call Us</a></li>
                  <li><a href={`mailto:${contact.email}`} className="hover:text-white transition-colors">Email Us</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-purple-500/20 mt-8 pt-8 text-center text-gray-300">
              <p>&copy; 2024 Zion Tech Group. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}