'use client';
import React from 'react';
import { Mic, Phone, MessageSquare, Zap, Shield, Globe, Users, BarChart, Clock, CheckCircle, Star, ArrowRight } from 'lucide-react';
import SEOOptimizer from '../components/SEOOptimizer';

const AIVoiceAssistantPage: React.FC = () => {
  return (
    <>
      <SEOOptimizer
        title="AI Voice Assistant Platform - Zion Tech Group"
        description="Revolutionary AI voice assistant platform with natural language processing, multi-language support, and enterprise-grade security. Transform customer interactions with intelligent voice automation."
        keywords={['AI voice assistant', 'voice automation', 'NLP', 'voice AI', 'conversational AI', 'voice recognition', 'speech synthesis']}
        canonicalUrl="https://ziontechgroup.com/ai-voice-assistant"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
                AI Voice Assistant Platform
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Revolutionary voice AI that understands, responds, and learns. Transform customer interactions with our advanced natural language processing and speech synthesis technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+13024640950" className="cyber-button">
                  📞 Call: (302) 464-0950
                </a>
                <a href="mailto:kleber@ziontechgroup.com" className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                  📧 Get Demo
                </a>
              </div>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="cyber-card hologram-card p-8 text-center">
                <Mic className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">Natural Language Processing</h3>
                <p className="text-gray-300">Advanced NLP engine that understands context, intent, and emotion in human speech with 99.2% accuracy.</p>
              </div>
              <div className="cyber-card hologram-card p-8 text-center">
                <Globe className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">Multi-Language Support</h3>
                <p className="text-gray-300">Supports 50+ languages with real-time translation and cultural context understanding.</p>
              </div>
              <div className="cyber-card hologram-card p-8 text-center">
                <Shield className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise Security</h3>
                <p className="text-gray-300">Bank-level encryption, GDPR compliance, and secure voice data processing.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-12 neon-text">
              Advanced Voice AI Capabilities
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div className="space-y-8">
                <div className="cyber-card p-6">
                  <div className="flex items-start space-x-4">
                    <MessageSquare className="w-8 h-8 text-cyan-400 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Conversational AI</h3>
                      <p className="text-gray-300">Engage in natural, context-aware conversations with memory of previous interactions and user preferences.</p>
                    </div>
                  </div>
                </div>
                
                <div className="cyber-card p-6">
                  <div className="flex items-start space-x-4">
                    <Zap className="w-8 h-8 text-yellow-400 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Real-time Processing</h3>
                      <p className="text-gray-300">Ultra-low latency voice processing with sub-200ms response times for seamless interactions.</p>
                    </div>
                  </div>
                </div>
                
                <div className="cyber-card p-6">
                  <div className="flex items-start space-x-4">
                    <BarChart className="w-8 h-8 text-green-400 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Analytics & Insights</h3>
                      <p className="text-gray-300">Comprehensive analytics on conversation patterns, user satisfaction, and performance metrics.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="cyber-card p-6">
                  <div className="flex items-start space-x-4">
                    <Phone className="w-8 h-8 text-blue-400 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Voice Integration</h3>
                      <p className="text-gray-300">Seamlessly integrate with existing phone systems, CRM, and business applications.</p>
                    </div>
                  </div>
                </div>
                
                <div className="cyber-card p-6">
                  <div className="flex items-start space-x-4">
                    <Users className="w-8 h-8 text-pink-400 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Custom Voice Training</h3>
                      <p className="text-gray-300">Train custom voice models for your brand voice and specific industry terminology.</p>
                    </div>
                  </div>
                </div>
                
                <div className="cyber-card p-6">
                  <div className="flex items-start space-x-4">
                    <Clock className="w-8 h-8 text-orange-400 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">24/7 Availability</h3>
                      <p className="text-gray-300">Always-on voice assistant that never sleeps, providing instant support and information.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 px-4 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-12 neon-text">
              Industry Applications
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="cyber-card hologram-card p-6">
                <h3 className="text-xl font-bold text-white mb-4">Customer Service</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Automated call handling</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Issue resolution</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Appointment scheduling</span>
                  </li>
                </ul>
              </div>
              
              <div className="cyber-card hologram-card p-6">
                <h3 className="text-xl font-bold text-white mb-4">Healthcare</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Patient intake</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Symptom assessment</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Medication reminders</span>
                  </li>
                </ul>
              </div>
              
              <div className="cyber-card hologram-card p-6">
                <h3 className="text-xl font-bold text-white mb-4">E-commerce</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Product recommendations</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Order tracking</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Voice shopping</span>
                  </li>
                </ul>
              </div>
              
              <div className="cyber-card hologram-card p-6">
                <h3 className="text-xl font-bold text-white mb-4">Banking & Finance</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Account inquiries</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Transaction support</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Fraud detection</span>
                  </li>
                </ul>
              </div>
              
              <div className="cyber-card hologram-card p-6">
                <h3 className="text-xl font-bold text-white mb-4">Education</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Interactive learning</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Language practice</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Student support</span>
                  </li>
                </ul>
              </div>
              
              <div className="cyber-card hologram-card p-6">
                <h3 className="text-xl font-bold text-white mb-4">Real Estate</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Property inquiries</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Virtual tours</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Lead qualification</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-12 neon-text">
              Pricing Plans
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="cyber-card hologram-card p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">$299/month</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">1,000 voice interactions/month</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">5 languages supported</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Basic analytics</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Email support</span>
                  </li>
                </ul>
                <a href="/contact" className="w-full cyber-button text-center block">
                  Get Started
                </a>
              </div>
              
              <div className="cyber-card hologram-card p-8 border-2 border-cyan-400">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white">Professional</h3>
                  <span className="bg-cyan-400 text-slate-900 px-3 py-1 rounded-full text-sm font-bold">Most Popular</span>
                </div>
                <div className="text-4xl font-bold text-cyan-400 mb-6">$799/month</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">10,000 voice interactions/month</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">25 languages supported</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Advanced analytics</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Custom voice training</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Priority support</span>
                  </li>
                </ul>
                <a href="/contact" className="w-full cyber-button text-center block">
                  Get Started
                </a>
              </div>
              
              <div className="cyber-card hologram-card p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">Custom</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Unlimited interactions</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">50+ languages supported</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Real-time analytics</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Custom integrations</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">24/7 dedicated support</span>
                  </li>
                </ul>
                <a href="/contact" className="w-full cyber-button text-center block">
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6 neon-text">
              Ready to Transform Your Voice Interactions?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join 500+ companies already using our AI Voice Assistant platform to revolutionize customer experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+13024640950" className="cyber-button">
                📞 Call: (302) 464-0950
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                📧 Schedule Demo
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIVoiceAssistantPage;