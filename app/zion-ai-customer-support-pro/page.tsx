import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function ZionaicustomersupportproPage() {
  return (
    <>
      <Helmet>
        <title>Zion AI Customer Support Pro - Intelligent AI-Powered Customer Service | Zion Tech Group</title>
        <meta name="description" content="Intelligent customer support automation with natural language processing and sentiment analysis. Reduce response time by 90% and handle 80% of queries automatically." />
        <meta name="keywords" content="AI customer support, chatbot, natural language processing, sentiment analysis, customer service automation, multi-channel support" />
        <meta property="og:title" content="Zion AI Customer Support Pro - Intelligent AI-Powered Customer Service" />
        <meta property="og:description" content="Intelligent customer support automation with natural language processing and sentiment analysis for better customer experience." />
        <meta property="og:url" content="https://ziontechgroup.com/zion-ai-customer-support-pro" />
      </Helmet>
      
      <div className="min-h-screen animated-bg-dark">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold mb-8">
                <span className="neon-glow-cyan">Zion AI</span>
                <br />
                <span className="neon-glow-purple">Customer Support Pro</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
                Intelligent customer support automation with natural language processing and sentiment analysis. 
                Reduce response time by 90% and handle 80% of queries automatically.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to="/contact" className="btn-neon hover-glow">
                  Get Started Today
                </Link>
                <Link to="/pricing" className="glass-dark border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 hover-glow">
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-cyan-400/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-purple-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold neon-glow-cyan mb-6">
                Advanced Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive customer support automation powered by cutting-edge AI technology
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="card-futuristic hover-lift text-center">
                <div className="text-4xl mb-4">🧠</div>
                <h3 className="text-xl font-bold text-cyan-400 mb-4">Natural Language Processing</h3>
                <p className="text-gray-300">Understand customer intent and context with advanced NLP</p>
              </div>
              
              <div className="card-futuristic hover-lift text-center">
                <div className="text-4xl mb-4">😊</div>
                <h3 className="text-xl font-bold text-cyan-400 mb-4">Sentiment Analysis</h3>
                <p className="text-gray-300">Detect customer emotions and adjust responses accordingly</p>
              </div>
              
              <div className="card-futuristic hover-lift text-center">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-xl font-bold text-cyan-400 mb-4">Multi-channel Support</h3>
                <p className="text-gray-300">Support across email, chat, social media, and phone</p>
              </div>
              
              <div className="card-futuristic hover-lift text-center">
                <div className="text-4xl mb-4">📚</div>
                <h3 className="text-xl font-bold text-cyan-400 mb-4">Knowledge Base Integration</h3>
                <p className="text-gray-300">Seamlessly integrate with your existing knowledge base</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold neon-glow-purple mb-6">
                Pricing Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your customer support needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card-futuristic hover-lift">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-cyan-400 mb-4">Basic</h3>
                  <div className="text-4xl font-bold text-white mb-2">$199</div>
                  <div className="text-gray-400 mb-6">per month</div>
                  <ul className="space-y-3 mb-8 text-left">
                    <li className="flex items-center text-gray-300">
                      <span className="text-cyan-400 mr-2">✓</span>
                      Up to 1,000 conversations/month
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="text-cyan-400 mr-2">✓</span>
                      Basic NLP capabilities
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="text-cyan-400 mr-2">✓</span>
                      Email support
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="text-cyan-400 mr-2">✓</span>
                      Basic analytics
                    </li>
                  </ul>
                  <Link to="/contact" className="btn-neon w-full">
                    Get Started
                  </Link>
                </div>
              </div>
              
              <div className="card-futuristic hover-lift border-2 border-purple-400">
                <div className="text-center">
                  <div className="bg-purple-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold mb-4 inline-block">
                    Most Popular
                  </div>
                  <h3 className="text-2xl font-bold text-purple-400 mb-4">Pro</h3>
                  <div className="text-4xl font-bold text-white mb-2">$499</div>
                  <div className="text-gray-400 mb-6">per month</div>
                  <ul className="space-y-3 mb-8 text-left">
                    <li className="flex items-center text-gray-300">
                      <span className="text-purple-400 mr-2">✓</span>
                      Up to 10,000 conversations/month
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="text-purple-400 mr-2">✓</span>
                      Advanced NLP & sentiment analysis
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="text-purple-400 mr-2">✓</span>
                      Multi-channel support
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="text-purple-400 mr-2">✓</span>
                      Custom training
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="text-purple-400 mr-2">✓</span>
                      Priority support
                    </li>
                  </ul>
                  <Link to="/contact" className="btn-neon w-full">
                    Get Started
                  </Link>
                </div>
              </div>
              
              <div className="card-futuristic hover-lift">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-green-400 mb-4">Enterprise</h3>
                  <div className="text-4xl font-bold text-white mb-2">$1,299</div>
                  <div className="text-gray-400 mb-6">per month</div>
                  <ul className="space-y-3 mb-8 text-left">
                    <li className="flex items-center text-gray-300">
                      <span className="text-green-400 mr-2">✓</span>
                      Unlimited conversations
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="text-green-400 mr-2">✓</span>
                      Custom AI models
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="text-green-400 mr-2">✓</span>
                      API integration
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="text-green-400 mr-2">✓</span>
                      Dedicated support
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="text-green-400 mr-2">✓</span>
                      SLA guarantee
                    </li>
                  </ul>
                  <Link to="/contact" className="btn-neon w-full">
                    Contact Sales
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold neon-glow-green mb-6">
                Proven Results
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your customer support with measurable improvements
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-6xl font-bold neon-glow-cyan mb-4">90%</div>
                <h3 className="text-xl font-bold text-cyan-400 mb-2">Faster Response</h3>
                <p className="text-gray-300">Reduce response time with instant AI-powered answers</p>
              </div>
              
              <div className="text-center">
                <div className="text-6xl font-bold neon-glow-purple mb-4">80%</div>
                <h3 className="text-xl font-bold text-purple-400 mb-2">Automation Rate</h3>
                <p className="text-gray-300">Handle majority of queries without human intervention</p>
              </div>
              
              <div className="text-center">
                <div className="text-6xl font-bold neon-glow-pink mb-4">24/7</div>
                <h3 className="text-xl font-bold text-pink-400 mb-2">Availability</h3>
                <p className="text-gray-300">Round-the-clock customer support without breaks</p>
              </div>
              
              <div className="text-center">
                <div className="text-6xl font-bold neon-glow-green mb-4">95%</div>
                <h3 className="text-xl font-bold text-green-400 mb-2">Satisfaction</h3>
                <p className="text-gray-300">Higher customer satisfaction with faster, accurate responses</p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold neon-glow-yellow mb-6">
                Perfect For
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Ideal for businesses looking to enhance their customer support experience
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="card-futuristic hover-lift text-center">
                <div className="text-4xl mb-4">🛒</div>
                <h3 className="text-xl font-bold text-yellow-400 mb-4">E-commerce</h3>
                <p className="text-gray-300">Handle order inquiries, product questions, and returns</p>
              </div>
              
              <div className="card-futuristic hover-lift text-center">
                <div className="text-4xl mb-4">💻</div>
                <h3 className="text-xl font-bold text-yellow-400 mb-4">SaaS Companies</h3>
                <p className="text-gray-300">Provide technical support and onboarding assistance</p>
              </div>
              
              <div className="card-futuristic hover-lift text-center">
                <div className="text-4xl mb-4">🏦</div>
                <h3 className="text-xl font-bold text-yellow-400 mb-4">Financial Services</h3>
                <p className="text-gray-300">Handle account inquiries and transaction support</p>
              </div>
              
              <div className="card-futuristic hover-lift text-center">
                <div className="text-4xl mb-4">🏥</div>
                <h3 className="text-xl font-bold text-yellow-400 mb-4">Healthcare</h3>
                <p className="text-gray-300">Provide appointment scheduling and general inquiries</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="card-futuristic">
              <h2 className="text-4xl md:text-5xl font-bold neon-glow-pink mb-6">
                Ready to Transform Your Customer Support?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Get started with our AI Customer Support Pro today and provide exceptional customer service 24/7.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="btn-neon hover-glow">
                  Start Free Trial
                </Link>
                <Link to="/contact" className="glass-dark border border-pink-400 text-pink-400 px-8 py-3 rounded-lg hover:bg-pink-400 hover:text-gray-900 transition-all duration-300 hover-glow">
                  Schedule Demo
                </Link>
              </div>
              <div className="mt-8 text-gray-400">
                <p>📞 +1 302 464 0950 | ✉️ kleber@ziontechgroup.com</p>
                <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
