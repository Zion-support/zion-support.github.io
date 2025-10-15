import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions | Future-Ready Technology</title>
        <meta name="description" content="Leading provider of AI and IT solutions for modern businesses. Expert services in artificial intelligence, cloud infrastructure, micro SaaS solutions, and digital transformation. Contact: +1 302 464 0950" />
        <meta name="keywords" content="AI services, IT solutions, cloud infrastructure, micro SaaS, digital transformation, machine learning, cybersecurity, web development" />
        <link rel="canonical" href="https://ziontechgroup.com" />
      </Helmet>
      
      <div className="min-h-screen futuristic-bg relative overflow-hidden">
        {/* Hero Section */}
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold neon-text mb-6 floating-element">
                Welcome to Zion Tech Group
              </h1>
              <p className="text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Pioneering the future with cutting-edge AI and IT solutions. 
                Transform your business with our innovative micro SaaS platforms, 
                advanced AI services, and comprehensive IT solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                <Link to="/contact" className="neon-button text-lg px-12 py-4">
                  Get Started Now
                </Link>
                <Link to="/services" className="border-2 border-cyan-400 text-cyan-400 px-12 py-4 rounded-lg hover:bg-cyan-400/10 transition-all duration-300 text-lg font-semibold">
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Services Preview Section */}
        <div className="relative z-10 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold neon-text-purple mb-6">
                Our Revolutionary Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our comprehensive suite of AI-powered solutions and cutting-edge IT services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* AI Services */}
              <div className="cyber-card group hover:scale-105 transition-transform duration-300">
                <div className="text-center">
                  <div className="text-6xl mb-4">🤖</div>
                  <h3 className="text-2xl font-bold neon-text-green mb-4">AI Services</h3>
                  <p className="text-gray-300 mb-6">
                    Advanced AI development, content generation, data analytics, and intelligent automation solutions.
                  </p>
                  <div className="space-y-2 text-sm text-gray-400">
                    <div>• AI Development & Consulting</div>
                    <div>• Content Generator Pro</div>
                    <div>• Data Analytics Platform</div>
                    <div>• Customer Support AI</div>
                  </div>
                  <Link to="/ai-services" className="neon-button mt-6 inline-block">
                    Explore AI Services
                  </Link>
                </div>
              </div>

              {/* Micro SaaS */}
              <div className="cyber-card group hover:scale-105 transition-transform duration-300">
                <div className="text-center">
                  <div className="text-6xl mb-4">⚡</div>
                  <h3 className="text-2xl font-bold neon-text mb-4">Micro SaaS Solutions</h3>
                  <p className="text-gray-300 mb-6">
                    Powerful, specialized software solutions designed to streamline your business operations.
                  </p>
                  <div className="space-y-2 text-sm text-gray-400">
                    <div>• Task Manager Pro</div>
                    <div>• Smart Expense Tracker</div>
                    <div>• Email Marketing Pro</div>
                    <div>• Workflow Automator</div>
                  </div>
                  <Link to="/micro-saas-solutions" className="neon-button mt-6 inline-block">
                    View Micro SaaS
                  </Link>
                </div>
              </div>

              {/* IT Services */}
              <div className="cyber-card group hover:scale-105 transition-transform duration-300">
                <div className="text-center">
                  <div className="text-6xl mb-4">💻</div>
                  <h3 className="text-2xl font-bold neon-text-purple mb-4">IT Services</h3>
                  <p className="text-gray-300 mb-6">
                    Comprehensive IT solutions including cloud infrastructure, cybersecurity, and custom development.
                  </p>
                  <div className="space-y-2 text-sm text-gray-400">
                    <div>• Cloud Infrastructure</div>
                    <div>• Cybersecurity Solutions</div>
                    <div>• Web & Mobile Development</div>
                    <div>• Database Management</div>
                  </div>
                  <Link to="/it-services" className="neon-button mt-6 inline-block">
                    Discover IT Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="relative z-10 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="cyber-card text-center">
              <h2 className="text-3xl md:text-4xl font-bold neon-text mb-8">
                Ready to Transform Your Business?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-4xl mb-4">📞</div>
                  <h3 className="text-xl font-semibold text-cyan-400 mb-2">Call Us</h3>
                  <p className="text-gray-300">+1 302 464 0950</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">✉️</div>
                  <h3 className="text-xl font-semibold text-cyan-400 mb-2">Email Us</h3>
                  <p className="text-gray-300">kleber@ziontechgroup.com</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">📍</div>
                  <h3 className="text-xl font-semibold text-cyan-400 mb-2">Visit Us</h3>
                  <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
              <Link to="/contact" className="neon-button text-xl px-12 py-4">
                Get In Touch
              </Link>
            </div>
          </div>
        </div>

        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl floating-element"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl floating-element" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-green-400/5 rounded-full blur-3xl floating-element" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>
    </>
  );
};

export default HomePage;