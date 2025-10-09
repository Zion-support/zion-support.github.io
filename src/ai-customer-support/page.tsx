'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { MessageCircle, Headphones, Bot, Zap, Shield, BarChart, Clock, Users, CheckCircle, Star, ArrowRight, Phone, Mail } from 'lucide-react';

const AICustomerSupportPage: React.FC = () => {
  const features = [
    {
      icon: MessageCircle,
      title: '24/7 AI Chat Support',
      description: 'Intelligent chatbots that provide instant responses to customer queries with natural language understanding.',
      benefits: ['Instant Response', 'Multi-language Support', 'Context Awareness', 'Escalation to Humans']
    },
    {
      icon: Users,
      title: 'Smart Ticket Routing',
      description: 'AI-powered ticket classification and routing to the most appropriate support agent based on expertise and workload.',
      benefits: ['Intelligent Routing', 'Priority Classification', 'Load Balancing', 'Expert Matching']
    },
    {
      icon: Bot,
      title: 'Predictive Analytics',
      description: 'Advanced analytics that predict customer issues and proactively address them before they become problems.',
      benefits: ['Proactive Support', 'Issue Prevention', 'Trend Analysis', 'Performance Insights']
    },
    {
      icon: Zap,
      title: 'Omnichannel Integration',
      description: 'Seamless support across all channels including email, chat, phone, and social media with unified customer history.',
      benefits: ['Unified Experience', 'Cross-channel Consistency', 'Complete History', 'Flexible Communication']
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security with data encryption, compliance with industry standards, and audit trails.',
      benefits: ['Data Protection', 'Compliance Ready', 'Audit Trails', 'Secure Communication']
    },
    {
      icon: BarChart,
      title: 'Performance Analytics',
      description: 'Comprehensive reporting and analytics to measure support performance and identify improvement opportunities.',
      benefits: ['Real-time Metrics', 'Performance Tracking', 'ROI Analysis', 'Continuous Improvement']
    }
  ];

  const stats = [
    { number: '95%', label: 'Customer Satisfaction' },
    { number: '60%', label: 'Cost Reduction' },
    { number: '60%', label: 'Faster Resolution' },
    { number: '24/7', label: 'Availability' },
    { number: '50+', label: 'Languages Supported' }
  ];
  
  return (
    <>
      <SEOOptimizer
        title="AI Customer Support Solutions - Zion Tech Group"
        description="Revolutionary AI-powered customer support with chatbots, omnichannel support, and intelligent automation. Boost satisfaction by 95% and reduce costs by 60%."
        keywords={['AI customer support', 'chatbots', 'omnichannel support', 'customer service automation', 'AI helpdesk']}
        canonicalUrl="https://ziontechgroup.com/ai-customer-support"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
        <Navigation />
        
        <main className="pt-24 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Hero Section */}
            <section className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
                AI Customer Support
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8">
                Transform your customer service with intelligent AI that never sleeps
              </p>
              <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
                Our AI-powered customer support platform combines advanced chatbots, omnichannel communication, 
                and intelligent automation to deliver exceptional customer experiences while reducing costs by up to 60%.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                <a
                  href="tel:+13024640950"
                  className="cyber-button flex items-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call (302) 464-0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="cyber-button flex items-center space-x-2"
                  style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                >
                  <Mail className="w-5 h-5" />
                  <span>Get Free Demo</span>
                </a>
              </div>
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                {stats.map((stat, index) => (
                  <div key={index} className="cyber-card p-6 text-center">
                    <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2 neon-text">
                      {stat.number}
                    </div>
                    <div className="text-gray-300 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Features Section */}
            <section className="mb-20">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Advanced AI Features
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Our AI customer support solution includes cutting-edge features designed to revolutionize your customer service operations.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="cyber-card p-8 hover:border-cyan-400/50 transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <feature.icon className="w-8 h-8 text-cyan-400 mr-3" />
                      <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                    </div>
                    <p className="text-gray-300 mb-6">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA Section */}
            <section className="text-center py-16 bg-gradient-to-r from-cyan-600/20 to-purple-600/20 rounded-2xl border border-cyan-400/20">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Customer Support?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join hundreds of companies already using our AI-powered customer support to deliver exceptional experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button flex items-center justify-center space-x-2"
                >
                  <span>Get Started Today</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="tel:+13024640950"
                  className="cyber-button flex items-center justify-center space-x-2"
                  style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                >
                  <Phone className="w-5 h-5" />
                  <span>Call (302) 464-0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="cyber-button flex items-center justify-center space-x-2"
                  style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                >
                  <Mail className="w-5 h-5" />
                  <span>Schedule Demo</span>
                </a>
              </div>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default AICustomerSupportPage;