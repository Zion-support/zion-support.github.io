import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions</title>
        <meta name="description" content="Leading provider of AI and IT solutions for modern businesses. Expert services in artificial intelligence, cloud infrastructure, and digital transformation." />
        <meta name="keywords" content="AI services, IT solutions, micro SaaS, cloud infrastructure, data analytics, mobile development, cybersecurity" />
        <meta name="author" content="Zion Tech Group" />
        <meta property="og:title" content="Zion Tech Group - Advanced AI and IT Solutions" />
        <meta property="og:description" content="Leading provider of AI and IT solutions for modern businesses." />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="min-h-screen animated-bg-dark">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold mb-8">
                <span className="neon-glow-cyan text-reveal">Welcome to</span>
                <br />
                <span className="neon-glow-purple text-reveal text-reveal-delay-1">Zion Tech Group</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto text-reveal text-reveal-delay-2">
                Leading provider of advanced AI and IT solutions for modern businesses. 
                Empowering your digital transformation with cutting-edge technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center text-reveal text-reveal-delay-3">
                <Link to="/contact" className="btn-neon hover-glow">
                  Get Started Today
                </Link>
                <Link to="/services" className="glass-dark border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 hover-glow">
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-cyan-400/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-purple-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-pink-400/20 rounded-full blur-xl animate-pulse delay-2000"></div>
        </section>

        {/* Services Overview */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold neon-glow-cyan mb-6">
                Our Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI and IT solutions designed to accelerate your business growth
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* AI Services */}
              <div className="card-futuristic hover-lift">
                <div className="text-center">
                  <div className="text-6xl mb-4">🤖</div>
                  <h3 className="text-2xl font-bold text-cyan-400 mb-4">AI Services</h3>
                  <p className="text-gray-300 mb-6">
                    Advanced artificial intelligence solutions including machine learning, 
                    natural language processing, and computer vision.
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="text-sm text-gray-400">• Content Moderation</div>
                    <div className="text-sm text-gray-400">• Customer Support AI</div>
                    <div className="text-sm text-gray-400">• Document Analysis</div>
                    <div className="text-sm text-gray-400">• Financial Forecasting</div>
                  </div>
                  <Link to="/ai-services" className="btn-neon w-full">
                    Explore AI Services
                  </Link>
                </div>
              </div>

              {/* Micro SaaS */}
              <div className="card-futuristic hover-lift">
                <div className="text-center">
                  <div className="text-6xl mb-4">⚡</div>
                  <h3 className="text-2xl font-bold text-purple-400 mb-4">Micro SaaS</h3>
                  <p className="text-gray-300 mb-6">
                    Specialized software solutions for specific business needs and workflows.
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="text-sm text-gray-400">• Smart Expense Tracker</div>
                    <div className="text-sm text-gray-400">• Customer Satisfaction Monitor</div>
                    <div className="text-sm text-gray-400">• AI Task Scheduler</div>
                    <div className="text-sm text-gray-400">• Workflow Automator</div>
                  </div>
                  <Link to="/micro-saas-solutions" className="btn-neon w-full">
                    Explore Micro SaaS
                  </Link>
                </div>
              </div>

              {/* IT Solutions */}
              <div className="card-futuristic hover-lift">
                <div className="text-center">
                  <div className="text-6xl mb-4">☁️</div>
                  <h3 className="text-2xl font-bold text-green-400 mb-4">IT Solutions</h3>
                  <p className="text-gray-300 mb-6">
                    Comprehensive IT services including cloud infrastructure, 
                    cybersecurity, and digital transformation.
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="text-sm text-gray-400">• Cloud Infrastructure</div>
                    <div className="text-sm text-gray-400">• Cybersecurity</div>
                    <div className="text-sm text-gray-400">• Data Analytics</div>
                    <div className="text-sm text-gray-400">• Mobile Development</div>
                  </div>
                  <Link to="/it-services" className="btn-neon w-full">
                    Explore IT Solutions
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Services */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold neon-glow-purple mb-6">
                Featured Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our most popular and innovative solutions trusted by businesses worldwide
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link to="/zion-ai-content-moderator" className="card-futuristic hover-glow group">
                <div className="text-center">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">🛡️</div>
                  <h3 className="text-lg font-semibold text-cyan-400 mb-2">AI Content Moderator</h3>
                  <p className="text-sm text-gray-400 mb-3">Automated content moderation with 99.9% accuracy</p>
                  <div className="text-xs text-gray-500">Starting at $99/month</div>
                </div>
              </Link>

              <Link to="/zion-ai-customer-support-pro" className="card-futuristic hover-glow group">
                <div className="text-center">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">🤖</div>
                  <h3 className="text-lg font-semibold text-cyan-400 mb-2">Customer Support Pro</h3>
                  <p className="text-sm text-gray-400 mb-3">AI-powered customer support automation</p>
                  <div className="text-xs text-gray-500">Starting at $199/month</div>
                </div>
              </Link>

              <Link to="/zion-smart-expense-tracker" className="card-futuristic hover-glow group">
                <div className="text-center">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">💰</div>
                  <h3 className="text-lg font-semibold text-purple-400 mb-2">Smart Expense Tracker</h3>
                  <p className="text-sm text-gray-400 mb-3">AI-powered expense tracking and management</p>
                  <div className="text-xs text-gray-500">Starting at $9.99/month</div>
                </div>
              </Link>

              <Link to="/cloud-infrastructure" className="card-futuristic hover-glow group">
                <div className="text-center">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">☁️</div>
                  <h3 className="text-lg font-semibold text-green-400 mb-2">Cloud Infrastructure</h3>
                  <p className="text-sm text-gray-400 mb-3">Scalable and secure cloud solutions</p>
                  <div className="text-xs text-gray-500">Starting at $2000/month</div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="card-futuristic">
              <h2 className="text-4xl md:text-5xl font-bold neon-glow-pink mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Get in touch with our experts to discuss your specific needs and discover 
                how our solutions can accelerate your digital transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="btn-neon hover-glow">
                  Contact Us Today
                </Link>
                <Link to="/pricing" className="glass-dark border border-pink-400 text-pink-400 px-8 py-3 rounded-lg hover:bg-pink-400 hover:text-gray-900 transition-all duration-300 hover-glow">
                  View Pricing
                </Link>
              </div>
              <div className="mt-8 text-gray-400">
                <p>📞 +1 302 464 0950 | ✉️ kleber@ziontechgroup.com</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;