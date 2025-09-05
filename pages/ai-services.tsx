import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Brain, Zap, Eye, MessageSquare, BarChart3, Shield } from 'lucide-react';

export default function AIServices() {
  const services = [
    {
      icon: Brain,
      title: 'AI-Powered Email Responder',
      description: 'Automated email responses using advanced NLP and machine learning algorithms.',
      features: ['Natural Language Processing', 'Sentiment Analysis', 'Auto-categorization', '24/7 Availability']
    },
    {
      icon: BarChart3,
      title: 'Predictive Analytics Platform',
      description: 'Data-driven insights and forecasting for business decision making.',
      features: ['Data Visualization', 'Trend Analysis', 'Risk Assessment', 'Real-time Monitoring']
    },
    {
      icon: MessageSquare,
      title: 'Intelligent Chatbot System',
      description: 'Advanced conversational AI for customer support and engagement.',
      features: ['Multi-language Support', 'Context Awareness', 'Integration APIs', 'Custom Training']
    },
    {
      icon: Eye,
      title: 'Computer Vision Solutions',
      description: 'Image and video analysis for various business applications.',
      features: ['Object Detection', 'Facial Recognition', 'Quality Control', 'Automated Tagging']
    },
    {
      icon: Zap,
      title: 'AI Content Generation',
      description: 'Automated content creation for marketing and communication.',
      features: ['Text Generation', 'Image Creation', 'Video Production', 'SEO Optimization']
    },
    {
      icon: Shield,
      title: 'AI Fraud Detection',
      description: 'Advanced security systems using machine learning for threat detection.',
      features: ['Real-time Monitoring', 'Pattern Recognition', 'Risk Scoring', 'Automated Alerts']
    }
  ];

  return (
    <div>
      <Head>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Advanced AI solutions including machine learning, natural language processing, computer vision, and predictive analytics." />
      </Head>
      
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-900 to-purple-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                AI Services
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
                Transform your business with cutting-edge artificial intelligence solutions. 
                From machine learning to computer vision, we deliver AI that works.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Get Started
                </Link>
                <Link href="/pricing" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors">
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our AI Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive AI services designed to solve real business challenges and drive innovation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                        <IconComponent className="w-6 h-6 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Let&apos;s discuss how our AI solutions can help you achieve your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Schedule Consultation
              </Link>
              <a href="tel:+13024640950" className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">
                Call Now
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}