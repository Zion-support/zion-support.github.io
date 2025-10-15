import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions</title>
        <meta name="description" content="Leading provider of AI and IT solutions for modern businesses. Expert services in artificial intelligence, cloud infrastructure, and digital transformation." />
        <meta name="keywords" content="AI services, IT solutions, cloud infrastructure, micro SAAS, artificial intelligence, digital transformation, business automation" />
        <meta name="author" content="Zion Tech Group" />
        <meta property="og:title" content="Zion Tech Group - Advanced AI and IT Solutions" />
        <meta property="og:description" content="Leading provider of AI and IT solutions for modern businesses. Expert services in artificial intelligence, cloud infrastructure, and digital transformation." />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - Advanced AI and IT Solutions" />
        <meta name="twitter:description" content="Leading provider of AI and IT solutions for modern businesses." />
      </Helmet>
      
      <div className="min-h-screen futuristic-bg animated-bg">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center relative z-10">
              <h1 className="text-5xl md:text-7xl font-bold neon-text mb-8 floating">
                Welcome to Zion Tech Group
              </h1>
              <p className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                We provide cutting-edge <span className="neon-text-purple">AI and IT solutions</span> to help your business thrive in the digital age.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                <Link to="/contact" className="neon-button glow-border pulse-neon">
                  Get Started
                </Link>
                <Link to="/services" className="neon-button glow-border pulse-neon-slow" style={{background: 'linear-gradient(135deg, #bf00ff 0%, #ff0080 100%)', borderColor: '#bf00ff'}}>
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Services Preview */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold neon-text-purple mb-6">
              Our Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI and IT solutions designed to transform your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI Services */}
            <div className="futuristic-card p-8 floating">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold neon-text-green mb-4">AI Services</h3>
              <p className="text-gray-300 mb-6">
                Advanced artificial intelligence solutions including machine learning, natural language processing, and computer vision.
              </p>
              <ul className="text-gray-300 space-y-2 mb-6">
                <li>• AI Development & Consulting</li>
                <li>• Content Generation</li>
                <li>• Customer Support Automation</li>
                <li>• Predictive Analytics</li>
              </ul>
              <Link to="/ai-services" className="neon-button w-full text-center">
                Learn More
              </Link>
            </div>

            {/* Micro SAAS */}
            <div className="futuristic-card p-8 floating-delayed">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold neon-text-pink mb-4">Micro SAAS Solutions</h3>
              <p className="text-gray-300 mb-6">
                Powerful, focused software solutions that solve specific business problems with AI-powered automation.
              </p>
              <ul className="text-gray-300 space-y-2 mb-6">
                <li>• Task Management Pro</li>
                <li>• Smart Expense Tracker</li>
                <li>• Email Marketing Automation</li>
                <li>• Workflow Automator</li>
              </ul>
              <Link to="/micro-saas-solutions" className="neon-button w-full text-center" style={{background: 'linear-gradient(135deg, #ff0080 0%, #ff6b00 100%)', borderColor: '#ff0080'}}>
                Explore SAAS
              </Link>
            </div>

            {/* IT Solutions */}
            <div className="futuristic-card p-8 floating-slow">
              <div className="text-4xl mb-4">☁️</div>
              <h3 className="text-2xl font-bold neon-text mb-4">IT Solutions</h3>
              <p className="text-gray-300 mb-6">
                Complete IT infrastructure and development services to modernize and scale your business operations.
              </p>
              <ul className="text-gray-300 space-y-2 mb-6">
                <li>• Cloud Infrastructure</li>
                <li>• Web & Mobile Development</li>
                <li>• Data Analytics</li>
                <li>• Network Security</li>
              </ul>
              <Link to="/it-services" className="neon-button w-full text-center" style={{background: 'linear-gradient(135deg, #00ff41 0%, #00f5ff 100%)', borderColor: '#00ff41'}}>
                View Solutions
              </Link>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="futuristic-card p-12 text-center holographic">
            <h2 className="text-4xl md:text-5xl font-bold neon-text mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Contact us today to discuss how our AI and IT solutions can accelerate your digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/contact" className="neon-button glow-border pulse-neon">
                Contact Us
              </Link>
              <div className="text-gray-300">
                <p className="font-semibold">Call: <span className="neon-text-green">+1 302 464 0950</span></p>
                <p className="font-semibold">Email: <span className="neon-text-purple">kleber@ziontechgroup.com</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;