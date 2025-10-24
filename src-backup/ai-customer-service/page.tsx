'use client';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function AICustomerServicePage() {
  return (
    <div>
      <Helmet>
        <title>AI Customer Service Solutions - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered customer service solutions with 24/7 support, multilingual capabilities, and 95% customer satisfaction rates. Starting at $299/month." />
        <meta name="keywords" content="AI customer service, chatbot, virtual assistant, customer support automation, multilingual support" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-customer-service" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
        <Navigation />
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text cyber-text">
              AI Customer Service Solutions
            </h1>
            <p className="text-xl text-cyan-400 mb-8 font-medium">
              Revolutionary 24/7 AI-powered customer support
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
              Transform your customer service with intelligent AI agents that provide instant, accurate, and personalized support in 50+ languages.
            </p>
          </section>

          {/* Features Grid */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="cyber-card p-6 energy-pulse">
                <div className="text-4xl mb-4 text-center">🤖</div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">Intelligent Chatbots</h3>
                <p className="text-gray-300 text-center">
                  Advanced conversational AI that understands context, emotions, and complex queries with 95% accuracy.
                </p>
              </div>
              
              <div className="cyber-card p-6 energy-pulse">
                <div className="text-4xl mb-4 text-center">🌍</div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">Multilingual Support</h3>
                <p className="text-gray-300 text-center">
                  Support customers in 50+ languages with natural, culturally-aware responses.
                </p>
              </div>
              
              <div className="cyber-card p-6 energy-pulse">
                <div className="text-4xl mb-4 text-center">⚡</div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">Instant Response</h3>
                <p className="text-gray-300 text-center">
                  Sub-second response times with 99.9% uptime guarantee for seamless customer experience.
                </p>
              </div>
              
              <div className="cyber-card p-6 energy-pulse">
                <div className="text-4xl mb-4 text-center">📊</div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">Analytics & Insights</h3>
                <p className="text-gray-300 text-center">
                  Real-time analytics and customer insights to optimize your support strategy.
                </p>
              </div>
              
              <div className="cyber-card p-6 energy-pulse">
                <div className="text-4xl mb-4 text-center">🔒</div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">Secure & Compliant</h3>
                <p className="text-gray-300 text-center">
                  Enterprise-grade security with GDPR, HIPAA, and SOC 2 compliance.
                </p>
              </div>
              
              <div className="cyber-card p-6 energy-pulse">
                <div className="text-4xl mb-4 text-center">🎯</div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">Personalized Experience</h3>
                <p className="text-gray-300 text-center">
                  AI learns from each interaction to provide increasingly personalized support.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="cyber-card p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
                Ready to Transform Your Customer Service?
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of businesses already using our AI customer service solutions to deliver exceptional customer experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a href="tel:+13024640950" className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300">
                  Call: (302) 464-0950
                </a>
                <a href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300">
                  Get Free Demo
                </a>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </div>
  );
}