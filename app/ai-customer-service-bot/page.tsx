'use client';
import React from 'react';
import { SEOOptimizer } from '../components/SEOOptimizer';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Phone, Mail, MapPin, CheckCircle, Star, Zap, Brain, Target, TrendingUp, Users, Clock, DollarSign } from 'lucide-react';

const AICustomerServiceBot: React.FC = () => {
  return (
    <>
      <SEOOptimizer
        title="AI Customer Service Bot - 24/7 Intelligent Support | Zion Tech Group"
        description="Revolutionary AI customer service bot with natural language processing. Handle 95% of customer inquiries automatically. Reduce support costs by 80%. Starting at $199/month. Call (302) 464-0950."
        keywords={['AI customer service bot', 'chatbot', 'AI support automation', 'customer service AI', 'intelligent chatbot']}
        canonicalUrl="https://ziontechgroup.com/ai-customer-service-bot"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <div className="max-w-6xl mx-auto">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 holographic-text cyber-text glitch">
                AI Customer Service Bot
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow neon-text">
                24/7 Intelligent Customer Support
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Transform your customer service with our advanced AI chatbot. Handle 95% of customer inquiries 
                automatically with natural language processing. Reduce support costs by 80% while improving 
                customer satisfaction by 300%.
              </p>
              
              {/* Key Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
                <div className="cyber-card hologram-card p-6 text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">95%</div>
                  <div className="text-sm text-gray-300">Query Resolution</div>
                </div>
                <div className="cyber-card hologram-card p-6 text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">80%</div>
                  <div className="text-sm text-gray-300">Cost Reduction</div>
                </div>
                <div className="cyber-card hologram-card p-6 text-center">
                  <div className="text-3xl font-bold text-pink-400 mb-2">24/7</div>
                  <div className="text-sm text-gray-300">Always Available</div>
                </div>
                <div className="cyber-card hologram-card p-6 text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">300%</div>
                  <div className="text-sm text-gray-300">Satisfaction Increase</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button w-full sm:w-auto text-center"
                >
                  📞 Call: (302) 464-0950
                </a>
                <a 
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
                >
                  Get Free Demo
                </a>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
              Advanced AI Bot Features
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="quantum-card p-6 energy-pulse">
                <div className="text-4xl mb-4 text-center">🤖</div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">Natural Language Processing</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Understands context & intent</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Multi-language support</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Sentiment analysis</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Conversation memory</li>
                </ul>
              </div>

              <div className="quantum-card p-6 energy-pulse">
                <div className="text-4xl mb-4 text-center">🎯</div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">Intelligent Routing</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Smart ticket categorization</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Priority assessment</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Agent matching</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Escalation management</li>
                </ul>
              </div>

              <div className="quantum-card p-6 energy-pulse">
                <div className="text-4xl mb-4 text-center">📚</div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">Knowledge Base</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Auto-updating knowledge</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Document search</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />FAQ automation</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Product information</li>
                </ul>
              </div>

              <div className="quantum-card p-6 energy-pulse">
                <div className="text-4xl mb-4 text-center">📊</div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">Analytics & Insights</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Real-time performance metrics</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Customer satisfaction tracking</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Common issue identification</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Response time optimization</li>
                </ul>
              </div>

              <div className="quantum-card p-6 energy-pulse">
                <div className="text-4xl mb-4 text-center">🔗</div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">Integrations</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />CRM integration</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Help desk systems</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Live chat platforms</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />API connections</li>
                </ul>
              </div>

              <div className="quantum-card p-6 energy-pulse">
                <div className="text-4xl mb-4 text-center">🔒</div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">Enterprise Security</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Data encryption</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />GDPR compliance</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Access controls</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Audit logging</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
              Affordable Pricing Plans
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="cyber-card p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">$199<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 text-gray-300 mb-8">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />1,000 conversations/month</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Basic AI features</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Email support</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Standard integrations</li>
                </ul>
                <a href="/contact" className="cyber-button w-full">Get Started</a>
              </div>

              <div className="cyber-card p-8 text-center border-2 border-cyan-400 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-cyan-400 text-black px-4 py-1 rounded-full text-sm font-bold">
                  Most Popular
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">$499<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 text-gray-300 mb-8">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />10,000 conversations/month</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Advanced AI features</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Priority support</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Custom integrations</li>
                </ul>
                <a href="/contact" className="cyber-button w-full">Get Started</a>
              </div>

              <div className="cyber-card p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">$999<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 text-gray-300 mb-8">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Unlimited conversations</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Full AI suite</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />White-label solution</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />24/7 phone support</li>
                </ul>
                <a href="/contact" className="cyber-button w-full">Contact Sales</a>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="mb-16">
            <div className="cyber-card p-8 text-center max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-6">Ready to Automate Your Customer Service?</h2>
              <p className="text-gray-300 mb-8 text-lg">
                Join thousands of businesses using our AI Customer Service Bot to improve their support efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button w-full sm:w-auto"
                >
                  📞 Call: (302) 464-0950
                </a>
                <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 font-medium">
                  📧 kleber@ziontechgroup.com
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

export default AICustomerServiceBot;