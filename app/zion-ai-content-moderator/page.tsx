import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function ZionaicontentmoderatorPage() {
  return (
    <>
      <Helmet>
        <title>Zion AI Content Moderator - Advanced AI-Powered Content Moderation | Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered content moderation system with 99.9% accuracy. Real-time analysis, multi-language support, and automated filtering for social media, e-commerce, and online communities." />
        <meta name="keywords" content="AI content moderation, automated content filtering, social media moderation, e-commerce content, real-time analysis, machine learning" />
        <meta property="og:title" content="Zion AI Content Moderator - Advanced AI-Powered Content Moderation" />
        <meta property="og:description" content="Advanced AI-powered content moderation system with 99.9% accuracy for social media, e-commerce, and online communities." />
        <meta property="og:url" content="https://ziontechgroup.com/zion-ai-content-moderator" />
      </Helmet>
      
      <div className="min-h-screen animated-bg-dark">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold mb-8">
                <span className="neon-glow-cyan">Zion AI</span>
                <br />
                <span className="neon-glow-purple">Content Moderator</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
                Advanced AI-powered content moderation system with 99.9% accuracy. 
                Real-time analysis, multi-language support, and automated filtering for your platform.
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
                Powerful Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive content moderation capabilities powered by advanced AI technology
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="card-futuristic hover-lift text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold text-cyan-400 mb-4">Real-time Analysis</h3>
                <p className="text-gray-300">Process content in milliseconds with instant moderation decisions</p>
              </div>
              
              <div className="card-futuristic hover-lift text-center">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="text-xl font-bold text-cyan-400 mb-4">Multi-language Support</h3>
                <p className="text-gray-300">Supports 50+ languages with cultural context understanding</p>
              </div>
              
              <div className="card-futuristic hover-lift text-center">
                <div className="text-4xl mb-4">🖼️</div>
                <h3 className="text-xl font-bold text-cyan-400 mb-4">Image & Video Moderation</h3>
                <p className="text-gray-300">Advanced computer vision for visual content analysis</p>
              </div>
              
              <div className="card-futuristic hover-lift text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-cyan-400 mb-4">Custom Rules Engine</h3>
                <p className="text-gray-300">Create custom moderation rules tailored to your platform</p>
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
                Choose the perfect plan for your content moderation needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card-futuristic hover-lift">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-cyan-400 mb-4">Basic</h3>
                  <div className="text-4xl font-bold text-white mb-2">$99</div>
                  <div className="text-gray-400 mb-6">per month</div>
                  <ul className="space-y-3 mb-8 text-left">
                    <li className="flex items-center text-gray-300">
                      <span className="text-cyan-400 mr-2">✓</span>
                      Up to 10,000 posts/month
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="text-cyan-400 mr-2">✓</span>
                      Real-time moderation
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="text-cyan-400 mr-2">✓</span>
                      Basic analytics
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="text-cyan-400 mr-2">✓</span>
                      Email support
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
                  <div className="text-4xl font-bold text-white mb-2">$299</div>
                  <div className="text-gray-400 mb-6">per month</div>
                  <ul className="space-y-3 mb-8 text-left">
                    <li className="flex items-center text-gray-300">
                      <span className="text-purple-400 mr-2">✓</span>
                      Up to 100,000 posts/month
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="text-purple-400 mr-2">✓</span>
                      Advanced AI models
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="text-purple-400 mr-2">✓</span>
                      Custom rule engine
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="text-purple-400 mr-2">✓</span>
                      Detailed analytics
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
                  <div className="text-4xl font-bold text-white mb-2">$999</div>
                  <div className="text-gray-400 mb-6">per month</div>
                  <ul className="space-y-3 mb-8 text-left">
                    <li className="flex items-center text-gray-300">
                      <span className="text-green-400 mr-2">✓</span>
                      Unlimited posts
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="text-green-400 mr-2">✓</span>
                      Custom AI training
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
                Why Choose Our AI Content Moderator?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven results and industry-leading technology
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-6xl font-bold neon-glow-cyan mb-4">99.9%</div>
                <h3 className="text-xl font-bold text-cyan-400 mb-2">Accuracy Rate</h3>
                <p className="text-gray-300">Industry-leading accuracy in content detection and classification</p>
              </div>
              
              <div className="text-center">
                <div className="text-6xl font-bold neon-glow-purple mb-4">80%</div>
                <h3 className="text-xl font-bold text-purple-400 mb-2">Cost Reduction</h3>
                <p className="text-gray-300">Significant reduction in moderation costs and manual effort</p>
              </div>
              
              <div className="text-center">
                <div className="text-6xl font-bold neon-glow-pink mb-4">24/7</div>
                <h3 className="text-xl font-bold text-pink-400 mb-2">Monitoring</h3>
                <p className="text-gray-300">Continuous automated monitoring and instant response</p>
              </div>
              
              <div className="text-center">
                <div className="text-6xl font-bold neon-glow-green mb-4">50+</div>
                <h3 className="text-xl font-bold text-green-400 mb-2">Languages</h3>
                <p className="text-gray-300">Multi-language support with cultural context understanding</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="card-futuristic">
              <h2 className="text-4xl md:text-5xl font-bold neon-glow-pink mb-6">
                Ready to Secure Your Platform?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Get started with our AI Content Moderator today and protect your platform with industry-leading technology.
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
