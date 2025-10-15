import React from 'react';
import { Helmet } from 'react-helmet-async';
import { allServices, getPopularServices, getNewServices } from './data/servicesData';
import { contactInfo } from './data/contactData';

const HomePage: React.FC = () => {
  const popularServices = getPopularServices();
  const newServices = getNewServices();

  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions | Leading Technology Company</title>
        <meta name="description" content="Leading provider of AI automation, micro SaaS solutions, and IT services. Expert solutions in artificial intelligence, cloud infrastructure, cybersecurity, and digital transformation. Contact us at +1 302 464 0950." />
        <meta name="keywords" content="AI solutions, micro SaaS, IT services, cloud infrastructure, cybersecurity, machine learning, digital transformation, business automation" />
        <meta property="og:title" content="Zion Tech Group - Advanced AI and IT Solutions" />
        <meta property="og:description" content="Leading provider of AI automation, micro SaaS solutions, and IT services for modern businesses." />
        <meta property="og:url" content={contactInfo.domain} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={contactInfo.domain} />
      </Helmet>
      
      {/* Hero Section with Futuristic Design */}
      <div className="min-h-screen bg-matrix relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 cyber-grid opacity-20"></div>
        <div className="absolute top-20 left-10 w-20 h-20 bg-neon-blue rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-neon-purple rounded-full opacity-40 animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-1/4 w-12 h-12 bg-neon-pink rounded-full opacity-50 animate-pulse delay-2000"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 neon-text">
              Welcome to Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Leading provider of <span className="text-neon-blue font-semibold">AI automation</span>, 
              <span className="text-neon-purple font-semibold"> micro SaaS solutions</span>, and 
              <span className="text-neon-pink font-semibold"> IT services</span> for modern businesses.
            </p>
            
            {/* Contact Information */}
            <div className="mb-12 p-6 glass-morphism rounded-xl max-w-2xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-neon-blue">📞</span>
                  <a href={`tel:${contactInfo.mobile}`} className="text-white hover:text-neon-blue transition-colors">
                    {contactInfo.mobile}
                  </a>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-neon-purple">✉️</span>
                  <a href={`mailto:${contactInfo.email}`} className="text-white hover:text-neon-purple transition-colors">
                    {contactInfo.email}
                  </a>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="/contact" className="neon-button text-lg px-10 py-4 rounded-lg">
                Get Started Today
              </a>
              <a href="/about" className="glass-morphism text-white px-10 py-4 rounded-lg hover:bg-opacity-20 transition-all duration-300 text-lg">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Services Overview */}
      <div className="py-20 bg-dark-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-neon-blue">Comprehensive</span> Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From micro SaaS solutions to enterprise AI services, we provide cutting-edge technology solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Micro SaaS Services */}
            <div className="card-hover bg-dark-surface-light p-8 rounded-xl border border-neon-blue border-opacity-30">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-white mb-4">Micro SaaS Solutions</h3>
              <p className="text-gray-300 mb-6">
                Specialized software solutions for specific business needs. From AI-powered tools to workflow automation.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-300">
                  <span className="text-neon-green mr-2">✓</span>
                  AI Content Moderator
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <span className="text-neon-green mr-2">✓</span>
                  Customer Churn Predictor
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <span className="text-neon-green mr-2">✓</span>
                  Workflow Automator
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <span className="text-neon-green mr-2">✓</span>
                  Financial Forecaster
                </div>
              </div>
              <div className="text-neon-blue font-semibold mb-4">Starting at $29/month</div>
              <a href="/micro-saas-solutions" className="text-neon-blue hover:text-neon-purple font-medium">
                Explore Micro SaaS →</a>
            </div>

            {/* IT Services */}
            <div className="card-hover bg-dark-surface-light p-8 rounded-xl border border-neon-purple border-opacity-30">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-2xl font-bold text-white mb-4">IT Services</h3>
              <p className="text-gray-300 mb-6">
                Comprehensive IT solutions including cloud infrastructure, cybersecurity, and network management.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-300">
                  <span className="text-neon-green mr-2">✓</span>
                  Cloud Infrastructure
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <span className="text-neon-green mr-2">✓</span>
                  Cybersecurity Solutions
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <span className="text-neon-green mr-2">✓</span>
                  Network Infrastructure
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <span className="text-neon-green mr-2">✓</span>
                  Database Management
                </div>
              </div>
              <div className="text-neon-purple font-semibold mb-4">Starting at $999/month</div>
              <a href="/it-services" className="text-neon-purple hover:text-neon-pink font-medium">
                Explore IT Services →</a>
            </div>

            {/* AI Services */}
            <div className="card-hover bg-dark-surface-light p-8 rounded-xl border border-neon-pink border-opacity-30">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold text-white mb-4">AI Services</h3>
              <p className="text-gray-300 mb-6">
                Advanced artificial intelligence solutions including machine learning, NLP, and computer vision.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-300">
                  <span className="text-neon-green mr-2">✓</span>
                  AI Strategy Consulting
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <span className="text-neon-green mr-2">✓</span>
                  Machine Learning Solutions
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <span className="text-neon-green mr-2">✓</span>
                  Natural Language Processing
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <span className="text-neon-green mr-2">✓</span>
                  Computer Vision
                </div>
              </div>
              <div className="text-neon-pink font-semibold mb-4">Starting at $2,999/month</div>
              <a href="/ai-services" className="text-neon-pink hover:text-neon-blue font-medium">
                Explore AI Services →</a>
            </div>
          </div>
        </div>
      </div>

      {/* Popular AI Tools */}
      <div className="py-20 bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Popular <span className="text-neon-green">AI-Powered</span> Tools
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready-to-use AI tools that can transform your business operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularServices.slice(0, 6).map((service, index) => (
              <div key={service.id} className={`card-hover bg-dark-surface-light p-6 rounded-xl border border-opacity-30 ${
                index % 3 === 0 ? 'border-neon-blue' : 
                index % 3 === 1 ? 'border-neon-purple' : 'border-neon-pink'
              }`}>
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{service.icon}</span>
                  <h3 className="text-xl font-bold text-white">{service.name}</h3>
                </div>
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  {service.description}
                </p>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-neon-green font-semibold">
                    From ${service.pricing.basic}/month
                  </div>
                  {service.isPopular && (
                    <span className="bg-neon-blue text-dark-bg px-2 py-1 rounded text-xs font-semibold">
                      Popular
                    </span>
                  )}
                </div>
                <a 
                  href={service.link} 
                  className={`inline-flex items-center text-sm font-medium ${
                    index % 3 === 0 ? 'text-neon-blue hover:text-neon-purple' : 
                    index % 3 === 1 ? 'text-neon-purple hover:text-neon-pink' : 
                    'text-neon-pink hover:text-neon-blue'
                  } transition-colors`}
                >
                  Try Now →
                </a>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a href="/services" className="neon-button text-lg px-8 py-3 rounded-lg">
              View All Services
            </a>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-20 bg-dark-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose <span className="text-neon-blue">Zion Tech Group</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine cutting-edge technology with deep industry expertise to deliver exceptional results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-neon-blue bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Proven Results</h3>
              <p className="text-gray-300 text-sm">
                99.2% accuracy in AI predictions and 40% average cost reduction for our clients
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-neon-purple bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Fast Implementation</h3>
              <p className="text-gray-300 text-sm">
                Deploy solutions in weeks, not months, with our streamlined implementation process
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-neon-pink bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Enterprise Security</h3>
              <p className="text-gray-300 text-sm">
                Bank-level security with SOC 2 compliance and 24/7 monitoring
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-neon-green bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Scalable Solutions</h3>
              <p className="text-gray-300 text-sm">
                From startups to enterprises, our solutions scale with your business growth
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-accent">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white text-opacity-90 mb-8">
            Join thousands of companies already using our AI and IT solutions to drive growth and innovation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-dark-bg px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 text-lg"
            >
              Get Started Today
            </a>
            <a 
              href={`tel:${contactInfo.mobile}`} 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-dark-bg transition-all duration-300 text-lg"
            >
              Call {contactInfo.mobile}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;