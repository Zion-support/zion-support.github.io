'use client';
import React from 'react';
import { Phone, CheckCircle, TrendingUp, Mic, Volume2, Headphones, Radio } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const AIVoiceAssistantPage: React.FC = () => {
  const features = [
    'Advanced Voice Recognition Technology',
    'Natural Language Processing',
    'Multi-language Support (50+ languages)',
    'Custom Voice Training',
    'Real-time Speech-to-Text',
    'Intelligent Response Generation',
    'Integration with Business Systems',
    '24/7 Voice Support Capability',
    'Emotion Detection in Voice',
    'Custom Wake Word Configuration',
    'Voice Analytics & Insights',
    'Scalable Cloud Infrastructure'
  ];

  const benefits = [
    '95% Voice Recognition Accuracy',
    '24/7 Automated Customer Support',
    '60% Reduction in Call Center Costs',
    '50% Faster Response Times',
    'Multi-language Customer Support',
    'Improved Customer Satisfaction',
    'Reduced Human Error',
    'Scalable Voice Solutions',
    'Real-time Analytics',
    'Custom Business Logic Integration'
  ];

  const useCases = [
    {
      title: 'Customer Service',
      description: 'Automated voice support for common inquiries, order status, and technical support',
      icon: '🎧'
    },
    {
      title: 'Sales Automation',
      description: 'AI-powered voice agents for lead qualification and sales conversations',
      icon: '📞'
    },
    {
      title: 'Healthcare Support',
      description: 'Voice assistants for appointment scheduling and patient inquiries',
      icon: '🏥'
    },
    {
      title: 'E-commerce',
      description: 'Voice shopping assistants and order management through voice commands',
      icon: '🛒'
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="AI Voice Assistant - Zion Tech Group"
        description="Custom voice AI solutions for customer service and business automation. 95% accuracy, multi-language support, and 24/7 voice capabilities."
        keywords={['AI voice assistant', 'voice recognition', 'voice AI', 'customer service automation', 'voice technology', 'speech recognition']}
        canonicalUrl="https://ziontechgroup.com/ai-voice-assistant"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <div className="max-w-4xl mx-auto">
              <div className="text-6xl mb-6">🎤</div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
                AI Voice Assistant
              </h1>
              <p className="text-xl text-cyan-400 mb-8 font-medium">
                Custom voice AI solutions for customer service and business automation
              </p>
              <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your customer interactions with our advanced AI voice assistant. 
                Featuring 95% accuracy, multi-language support, and seamless integration with your existing systems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                >
                  Get Started - $129/month
                </a>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  Call (302) 464-0950
                </a>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Advanced Voice AI Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
                    <h3 className="text-lg font-semibold text-white">{feature}</h3>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Proven Business Benefits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="cyber-card p-8">
                <h3 className="text-2xl font-bold text-cyan-400 mb-6">Performance Metrics</h3>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center">
                      <TrendingUp className="w-5 h-5 text-pink-400 mr-3" />
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="cyber-card p-8">
                <h3 className="text-2xl font-bold text-purple-400 mb-6">Key Capabilities</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Mic className="w-5 h-5 text-blue-400 mr-3 mt-1" />
                    <span className="text-gray-300">Advanced speech recognition with noise cancellation</span>
                  </li>
                  <li className="flex items-start">
                    <Volume2 className="w-5 h-5 text-green-400 mr-3 mt-1" />
                    <span className="text-gray-300">Natural voice synthesis and emotion detection</span>
                  </li>
                  <li className="flex items-start">
                    <Headphones className="w-5 h-5 text-yellow-400 mr-3 mt-1" />
                    <span className="text-gray-300">Multi-channel audio processing and routing</span>
                  </li>
                  <li className="flex items-start">
                    <Radio className="w-5 h-5 text-red-400 mr-3 mt-1" />
                    <span className="text-gray-300">Real-time voice analytics and reporting</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Use Cases Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Industry Applications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {useCases.map((useCase, index) => (
                <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <div className="text-4xl mb-4">{useCase.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300 text-sm">{useCase.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Flexible Pricing Plans
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="cyber-card p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">$129/month</div>
                <ul className="space-y-3 mb-8">
                  <li className="text-gray-300">Up to 1,000 voice interactions</li>
                  <li className="text-gray-300">5 languages supported</li>
                  <li className="text-gray-300">Basic voice recognition</li>
                  <li className="text-gray-300">Email support</li>
                </ul>
                <a href="/contact" className="cyber-button w-full py-3">Get Started</a>
              </div>
              
              <div className="cyber-card p-8 text-center ring-2 ring-cyan-400">
                <div className="bg-cyan-400 text-slate-900 px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                  Most Popular
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">$299/month</div>
                <ul className="space-y-3 mb-8">
                  <li className="text-gray-300">Up to 10,000 voice interactions</li>
                  <li className="text-gray-300">20 languages supported</li>
                  <li className="text-gray-300">Advanced voice recognition</li>
                  <li className="text-gray-300">Custom voice training</li>
                  <li className="text-gray-300">Priority support</li>
                </ul>
                <a href="/contact" className="cyber-button w-full py-3">Get Started</a>
              </div>
              
              <div className="cyber-card p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">Custom</div>
                <ul className="space-y-3 mb-8">
                  <li className="text-gray-300">Unlimited voice interactions</li>
                  <li className="text-gray-300">50+ languages supported</li>
                  <li className="text-gray-300">Premium voice recognition</li>
                  <li className="text-gray-300">Custom integrations</li>
                  <li className="text-gray-300">24/7 dedicated support</li>
                </ul>
                <a href="/contact" className="cyber-button w-full py-3">Contact Sales</a>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Implement AI Voice Assistant?
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Get a free consultation and discover how our AI voice assistant can transform your customer interactions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                >
                  Get Free Consultation
                </a>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  Call (302) 464-0950
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AIVoiceAssistantPage;
