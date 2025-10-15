import React, { memo, useMemo } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from './components/SEOHead';

const HomePage: React.FC = memo(() => {
  const structuredData = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "description": "Leading provider of AI and IT solutions for modern businesses",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1 302 464 0950",
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
  }), []);

  return (
    <>
      <SEOHead
        title="Zion Tech Group - Advanced AI and IT Solutions"
        description="Leading provider of AI and IT solutions for modern businesses. Expert services in artificial intelligence, cloud infrastructure, and digital transformation."
        keywords="AI solutions, IT services, cloud infrastructure, digital transformation, machine learning, artificial intelligence"
        canonicalUrl="https://ziontechgroup.com"
        structuredData={structuredData}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Welcome to Zion Tech Group
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
              We provide cutting-edge AI and IT solutions to help your business thrive in the digital age.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <Link to="/contact" className="bg-blue-600 text-white px-6 sm:px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-center font-medium">
                Get Started
              </Link>
              <Link to="/about" className="border border-blue-600 text-blue-600 px-6 sm:px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors text-center font-medium">
                Learn More
              </Link>
            </div>
          </div>
          
          {/* Services Preview */}
          <div className="mt-12 sm:mt-16 lg:mt-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8 sm:mb-12 px-4">Our Comprehensive Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-4">🤖</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Services</h3>
                <p className="text-gray-600 mb-4">
                  Advanced artificial intelligence solutions including machine learning, natural language processing, computer vision, and predictive analytics.
                </p>
                <div className="text-sm text-gray-500 mb-3">Starting from $99/month</div>
                <Link to="/ai-services" className="text-blue-600 hover:text-blue-800 font-medium">Learn More →</Link>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-4">☁️</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Cloud Infrastructure</h3>
                <p className="text-gray-600 mb-4">
                  Scalable cloud solutions that provide reliability, security, and performance for your business applications with 24/7 monitoring.
                </p>
                <div className="text-sm text-gray-500 mb-3">Starting from $1,000/month</div>
                <Link to="/cloud-infrastructure" className="text-blue-600 hover:text-blue-800 font-medium">Learn More →</Link>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Micro SaaS Solutions</h3>
                <p className="text-gray-600 mb-4">
                  Ready-to-use micro SaaS applications including CRM, HR management, invoicing, analytics, and more.
                </p>
                <div className="text-sm text-gray-500 mb-3">Starting from $19/month</div>
                <Link to="/micro-saas-solutions" className="text-blue-600 hover:text-blue-800 font-medium">Learn More →</Link>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-4">🔒</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Cybersecurity</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive cybersecurity solutions with threat detection, prevention, and incident response.
                </p>
                <div className="text-sm text-gray-500 mb-3">Starting from $2,000/month</div>
                <Link to="/cybersecurity" className="text-blue-600 hover:text-blue-800 font-medium">Learn More →</Link>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-4">📊</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Data Analytics</h3>
                <p className="text-gray-600 mb-4">
                  Advanced data analytics and business intelligence solutions with real-time insights and reporting.
                </p>
                <div className="text-sm text-gray-500 mb-3">Starting from $1,500/month</div>
                <Link to="/data-analytics" className="text-blue-600 hover:text-blue-800 font-medium">Learn More →</Link>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-4">🌐</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Web Development</h3>
                <p className="text-gray-600 mb-4">
                  Modern web development with responsive design, performance optimization, and cutting-edge technologies.
                </p>
                <div className="text-sm text-gray-500 mb-3">Starting from $3,000</div>
                <Link to="/web-development" className="text-blue-600 hover:text-blue-800 font-medium">Learn More →</Link>
              </div>
            </div>
          </div>
          
          {/* AI Tools Preview */}
          <div className="mt-12 sm:mt-16 lg:mt-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8 sm:mb-12 px-4">AI-Powered Tools & Solutions</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-2xl mb-2">🛡️</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Content Moderator</h3>
                <p className="text-gray-600 text-sm mb-3">Automated content moderation using AI</p>
                <div className="text-xs text-gray-500 mb-2">$99/month</div>
                <Link to="/zion-ai-content-moderator" className="text-blue-600 hover:text-blue-800 text-sm font-medium">Try Now →</Link>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-2xl mb-2">📈</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Sales Predictor</h3>
                <p className="text-gray-600 text-sm mb-3">Predict sales trends with AI</p>
                <div className="text-xs text-gray-500 mb-2">$149/month</div>
                <Link to="/zion-ai-sales-predictor" className="text-blue-600 hover:text-blue-800 text-sm font-medium">Try Now →</Link>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-2xl mb-2">⚡</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Workflow Automator</h3>
                <p className="text-gray-600 text-sm mb-3">Automate business workflows</p>
                <div className="text-xs text-gray-500 mb-2">$59/month</div>
                <Link to="/zion-ai-workflow-automator" className="text-blue-600 hover:text-blue-800 text-sm font-medium">Try Now →</Link>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-2xl mb-2">💰</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Financial Forecaster</h3>
                <p className="text-gray-600 text-sm mb-3">AI-powered financial predictions</p>
                <div className="text-xs text-gray-500 mb-2">$199/month</div>
                <Link to="/zion-ai-financial-forecaster" className="text-blue-600 hover:text-blue-800 text-sm font-medium">Try Now →</Link>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-2xl mb-2">👁️</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Image Recognition</h3>
                <p className="text-gray-600 text-sm mb-3">Advanced computer vision solutions</p>
                <div className="text-xs text-gray-500 mb-2">$149/month</div>
                <Link to="/zion-ai-image-recognition" className="text-blue-600 hover:text-blue-800 text-sm font-medium">Try Now →</Link>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-2xl mb-2">🎤</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Voice Assistant</h3>
                <p className="text-gray-600 text-sm mb-3">Build intelligent voice interfaces</p>
                <div className="text-xs text-gray-500 mb-2">$199/month</div>
                <Link to="/zion-ai-voice-assistant" className="text-blue-600 hover:text-blue-800 text-sm font-medium">Try Now →</Link>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-2xl mb-2">🎯</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Recommendation Engine</h3>
                <p className="text-gray-600 text-sm mb-3">Personalized recommendations with AI</p>
                <div className="text-xs text-gray-500 mb-2">$149/month</div>
                <Link to="/zion-ai-recommendation-engine" className="text-blue-600 hover:text-blue-800 text-sm font-medium">Try Now →</Link>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-2xl mb-2">📊</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Predictive Analytics</h3>
                <p className="text-gray-600 text-sm mb-3">Advanced forecasting and trend analysis</p>
                <div className="text-xs text-gray-500 mb-2">$199/month</div>
                <Link to="/zion-ai-predictive-analytics" className="text-blue-600 hover:text-blue-800 text-sm font-medium">Try Now →</Link>
              </div>
            </div>
            <div className="text-center mt-8">
              <Link to="/services" className="text-blue-600 hover:text-blue-800 font-medium">View All Services →</Link>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mt-12 sm:mt-16 lg:mt-20 bg-gray-900 text-white rounded-2xl p-6 sm:p-8">
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Ready to Transform Your Business?</h2>
              <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8">
                Get in touch with our experts to discuss your AI and IT needs
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-center">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">📞</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Call Us</h3>
                <a href="tel:+13024640950" className="text-blue-400 hover:text-blue-300 text-lg">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">✉️</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Email Us</h3>
                <a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:text-blue-300 text-lg">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">📍</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
                <p className="text-gray-300">
                  364 E Main St STE 1008<br />
                  Middletown, DE 19709
                </p>
              </div>
            </div>
            <div className="text-center mt-8">
              <Link 
                to="/contact" 
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium"
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

HomePage.displayName = 'HomePage';

export default HomePage;