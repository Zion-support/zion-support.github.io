import React from 'react';
import { Helmet } from 'react-helmet-async';
import { comprehensiveServicesData } from './data/comprehensiveServicesData';

const HomePage: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "description": "Leading provider of AI and IT solutions for modern businesses",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-302-464-0950",
      "contactType": "customer service",
      "email": "kleber@ziontechgroup.com"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "364 E Main St STE 1008",
      "addressLocality": "Middletown",
      "addressRegion": "DE",
      "postalCode": "19709",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://linkedin.com/company/ziontechgroup",
      "https://twitter.com/ziontechgroup"
    ]
  };

  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions</title>
        <meta name="description" content="Leading provider of AI and IT solutions for modern businesses. Expert services in artificial intelligence, cloud infrastructure, and digital transformation." />
        <meta name="keywords" content="AI solutions, IT services, cloud infrastructure, digital transformation, machine learning, artificial intelligence, micro SaaS, blockchain, IoT, AR/VR" />
        <meta property="og:title" content="Zion Tech Group - Advanced AI and IT Solutions" />
        <meta property="og:description" content="Leading provider of AI and IT solutions for modern businesses. Expert services in artificial intelligence, cloud infrastructure, and digital transformation." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - Advanced AI and IT Solutions" />
        <meta name="twitter:description" content="Leading provider of AI and IT solutions for modern businesses." />
        <meta name="twitter:image" content="https://ziontechgroup.com/og-image.jpg" />
        <link rel="canonical" href="https://ziontechgroup.com" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      <div className="min-h-screen relative">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-32">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              <span className="gradient-text">Welcome to</span><br />
              <span className="neon-text neon-blue">Zion Tech Group</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              We provide cutting-edge AI and IT solutions to help your business thrive in the digital age. 
              From micro SaaS applications to enterprise AI platforms, we're your technology partner for the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="/contact" className="futuristic-btn text-lg px-10 py-4">
                Get Started
              </a>
              <a href="/about" className="neon-btn text-lg px-10 py-4">
                Learn More
              </a>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">Our Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI and IT solutions for modern businesses. From micro SaaS applications to enterprise platforms.
              </p>
            </div>
            
            {/* AI Services */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-neon-blue mb-8 text-center">AI Services & Solutions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {comprehensiveServicesData.aiServices.slice(0, 6).map((service) => (
                  <div key={service.id} className="glass-card p-6 hover-lift">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h4 className="text-xl font-semibold text-white mb-3">{service.title}</h4>
                    <p className="text-gray-300 mb-4 text-sm">{service.shortDescription}</p>
                    <div className="mb-4">
                      <span className="text-neon-green font-semibold">{service.marketPrice}</span>
                    </div>
                    <a href={`/${service.id}`} className="text-neon-blue hover:text-white font-medium transition-colors duration-300">
                      Learn More →
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Micro SaaS Solutions */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-neon-purple mb-8 text-center">Micro SaaS Solutions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {comprehensiveServicesData.microSaas.slice(0, 6).map((service) => (
                  <div key={service.id} className="dark-glass-card p-6 hover-lift">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h4 className="text-xl font-semibold text-white mb-3">{service.title}</h4>
                    <p className="text-gray-300 mb-4 text-sm">{service.shortDescription}</p>
                    <div className="mb-4">
                      <span className="text-neon-green font-semibold">{service.marketPrice}</span>
                    </div>
                    <a href={`/${service.id}`} className="text-neon-purple hover:text-white font-medium transition-colors duration-300">
                      Learn More →
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* IT Solutions */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-neon-green mb-8 text-center">IT Services & Solutions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {comprehensiveServicesData.itSolutions.slice(0, 6).map((service) => (
                  <div key={service.id} className="glass-card p-6 hover-lift">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h4 className="text-xl font-semibold text-white mb-3">{service.title}</h4>
                    <p className="text-gray-300 mb-4 text-sm">{service.shortDescription}</p>
                    <div className="mb-4">
                      <span className="text-neon-green font-semibold">{service.marketPrice}</span>
                    </div>
                    <a href={`/${service.id}`} className="text-neon-green hover:text-white font-medium transition-colors duration-300">
                      Learn More →
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Zion AI Products Section */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text-secondary">Zion AI Products</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Ready-to-use AI solutions for immediate business impact. Deploy in minutes, scale infinitely.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              <div className="dark-glass-card p-6 hover-lift">
                <div className="text-3xl mb-4">🤖</div>
                <h3 className="text-lg font-semibold text-white mb-2">Content Moderator</h3>
                <p className="text-gray-300 text-sm mb-4">Automated content moderation using advanced AI algorithms.</p>
                <div className="mb-4">
                  <span className="text-neon-green font-semibold text-sm">$99 - $999/month</span>
                </div>
                <a href="/zion-ai-content-moderator" className="text-neon-blue hover:text-white text-sm font-medium transition-colors duration-300">Explore →</a>
              </div>
              
              <div className="dark-glass-card p-6 hover-lift">
                <div className="text-3xl mb-4">📊</div>
                <h3 className="text-lg font-semibold text-white mb-2">Customer Churn Predictor</h3>
                <p className="text-gray-300 text-sm mb-4">Predict and prevent customer churn with machine learning.</p>
                <div className="mb-4">
                  <span className="text-neon-green font-semibold text-sm">$199 - $1,999/month</span>
                </div>
                <a href="/zion-ai-customer-churn-predictor" className="text-neon-blue hover:text-white text-sm font-medium transition-colors duration-300">Explore →</a>
              </div>
              
              <div className="dark-glass-card p-6 hover-lift">
                <div className="text-3xl mb-4">⚡</div>
                <h3 className="text-lg font-semibold text-white mb-2">Workflow Automator</h3>
                <p className="text-gray-300 text-sm mb-4">Automate business processes with intelligent workflow management.</p>
                <div className="mb-4">
                  <span className="text-neon-green font-semibold text-sm">$59 - $499/month</span>
                </div>
                <a href="/zion-ai-workflow-automator" className="text-neon-blue hover:text-white text-sm font-medium transition-colors duration-300">Explore →</a>
              </div>
              
              <div className="dark-glass-card p-6 hover-lift">
                <div className="text-3xl mb-4">💰</div>
                <h3 className="text-lg font-semibold text-white mb-2">Financial Forecaster</h3>
                <p className="text-gray-300 text-sm mb-4">Advanced financial forecasting and analysis tools.</p>
                <div className="mb-4">
                  <span className="text-neon-green font-semibold text-sm">$299 - $2,499/month</span>
                </div>
                <a href="/zion-ai-financial-forecaster" className="text-neon-blue hover:text-white text-sm font-medium transition-colors duration-300">Explore →</a>
              </div>
              
              <div className="dark-glass-card p-6 hover-lift">
                <div className="text-3xl mb-4">📄</div>
                <h3 className="text-lg font-semibold text-white mb-2">Document Analyzer</h3>
                <p className="text-gray-300 text-sm mb-4">Intelligent document processing and analysis.</p>
                <div className="mb-4">
                  <span className="text-neon-green font-semibold text-sm">$149 - $1,499/month</span>
                </div>
                <a href="/zion-ai-document-analyzer" className="text-neon-blue hover:text-white text-sm font-medium transition-colors duration-300">Explore →</a>
              </div>
              
              <div className="dark-glass-card p-6 hover-lift">
                <div className="text-3xl mb-4">💳</div>
                <h3 className="text-lg font-semibold text-white mb-2">Smart Expense Tracker</h3>
                <p className="text-gray-300 text-sm mb-4">AI-powered expense tracking and management.</p>
                <div className="mb-4">
                  <span className="text-neon-green font-semibold text-sm">$19 - $149/month</span>
                </div>
                <a href="/zion-smart-expense-tracker" className="text-neon-blue hover:text-white text-sm font-medium transition-colors duration-300">Explore →</a>
              </div>
              
              <div className="dark-glass-card p-6 hover-lift">
                <div className="text-3xl mb-4">📧</div>
                <h3 className="text-lg font-semibold text-white mb-2">Email Marketing Pro</h3>
                <p className="text-gray-300 text-sm mb-4">AI-powered email marketing automation platform.</p>
                <div className="mb-4">
                  <span className="text-neon-green font-semibold text-sm">$39 - $299/month</span>
                </div>
                <a href="/zion-ai-email-marketing-pro" className="text-neon-blue hover:text-white text-sm font-medium transition-colors duration-300">Explore →</a>
              </div>
              
              <div className="dark-glass-card p-6 hover-lift">
                <div className="text-3xl mb-4">📱</div>
                <h3 className="text-lg font-semibold text-white mb-2">Social Scheduler Pro</h3>
                <p className="text-gray-300 text-sm mb-4">Intelligent social media management and scheduling.</p>
                <div className="mb-4">
                  <span className="text-neon-green font-semibold text-sm">$49 - $399/month</span>
                </div>
                <a href="/zion-ai-social-scheduler-pro" className="text-neon-blue hover:text-white text-sm font-medium transition-colors duration-300">Explore →</a>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <a href="/services" className="futuristic-btn text-lg px-8 py-4">
                View All Products
              </a>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="glass-card p-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text-accent">Ready to Transform Your Business?</span>
              </h2>
              <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                Get started with our AI and IT solutions today and see the difference technology can make. 
                Join thousands of businesses already using our innovative solutions.
              </p>
              
              {/* Contact Information */}
              <div className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-neon-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-neon-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                  <p className="text-neon-blue font-medium">+1 (302) 464-0950</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-neon-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-neon-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                  <p className="text-neon-purple font-medium">kleber@ziontechgroup.com</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-neon-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-neon-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
                  <p className="text-neon-green font-medium text-sm">364 E Main St STE 1008<br />Middletown, DE 19709</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a href="/contact" className="futuristic-btn text-lg px-10 py-4">
                  Contact Us
                </a>
                <a href="/pricing" className="neon-btn text-lg px-10 py-4">
                  View Pricing
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;