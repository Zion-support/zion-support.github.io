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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Welcome to Zion Tech Group
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Leading provider of advanced AI and IT solutions. We help businesses transform through cutting-edge technology, 
              intelligent automation, and innovative micro SAAS platforms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link to="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-center">
                Get Started
              </Link>
              <Link to="/pricing" className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors text-center">
                View Pricing
              </Link>
              <Link to="/about" className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors text-center">
                Learn More
              </Link>
            </div>
            
            {/* Contact Information */}
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Get in Touch</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center justify-center">
                  <span className="text-blue-600 mr-2">📞</span>
                  <a href="tel:+13024640950" className="text-gray-700 hover:text-blue-600">+1 302 464 0950</a>
                </div>
                <div className="flex items-center justify-center">
                  <span className="text-blue-600 mr-2">✉️</span>
                  <a href="mailto:kleber@ziontechgroup.com" className="text-gray-700 hover:text-blue-600">kleber@ziontechgroup.com</a>
                </div>
                <div className="flex items-center justify-center">
                  <span className="text-blue-600 mr-2">📍</span>
                  <span className="text-gray-700">Middletown, DE 19709</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Services Preview */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Comprehensive Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-4">🤖</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">AI & Machine Learning</h3>
                <p className="text-gray-600 mb-4">
                  Advanced AI solutions including voice assistants, image recognition, predictive analytics, and custom AI development.
                </p>
                <div className="text-sm text-gray-500 mb-4">Starting from $199/month</div>
                <Link to="/ai-services" className="text-blue-600 hover:text-blue-800 font-medium">Explore AI Services →</Link>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-4">☁️</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Cloud & Infrastructure</h3>
                <p className="text-gray-600 mb-4">
                  Scalable cloud solutions, DevOps automation, edge computing, and comprehensive infrastructure management.
                </p>
                <div className="text-sm text-gray-500 mb-4">Starting from $1,000/month</div>
                <Link to="/cloud-infrastructure" className="text-blue-600 hover:text-blue-800 font-medium">View Cloud Solutions →</Link>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-4">💼</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Micro SAAS Solutions</h3>
                <p className="text-gray-600 mb-4">
                  Ready-to-use business applications including CRM, project management, HR tools, and marketing automation.
                </p>
                <div className="text-sm text-gray-500 mb-4">Starting from $29/month</div>
                <Link to="/micro-saas-solutions" className="text-blue-600 hover:text-blue-800 font-medium">Browse SAAS Tools →</Link>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-4">🌐</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Web & Mobile Development</h3>
                <p className="text-gray-600 mb-4">
                  Modern web applications, mobile apps, API development, and progressive web applications.
                </p>
                <div className="text-sm text-gray-500 mb-4">Starting from $3,000</div>
                <Link to="/web-development" className="text-blue-600 hover:text-blue-800 font-medium">See Development →</Link>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-4">🔒</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Cybersecurity & Compliance</h3>
                <p className="text-gray-600 mb-4">
                  Advanced security solutions, compliance management, fraud detection, and security audits.
                </p>
                <div className="text-sm text-gray-500 mb-4">Starting from $2,000/month</div>
                <Link to="/it-services" className="text-blue-600 hover:text-blue-800 font-medium">Security Solutions →</Link>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-4">📊</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Data & Analytics</h3>
                <p className="text-gray-600 mb-4">
                  Business intelligence, data visualization, predictive analytics, and comprehensive reporting solutions.
                </p>
                <div className="text-sm text-gray-500 mb-4">Starting from $1,500/month</div>
                <Link to="/data-analytics" className="text-blue-600 hover:text-blue-800 font-medium">Analytics Tools →</Link>
              </div>
            </div>
          </div>
          
          {/* AI Tools Preview */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">AI-Powered Business Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-2xl mb-3">🛡️</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Content Moderator</h3>
                <p className="text-gray-600 text-sm mb-3">Automated content moderation using AI</p>
                <div className="text-xs text-gray-500 mb-3">From $99/month</div>
                <Link to="/zion-ai-content-moderator" className="text-blue-600 hover:text-blue-800 text-sm font-medium">Try Now →</Link>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-2xl mb-3">📈</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Sales Predictor</h3>
                <p className="text-gray-600 text-sm mb-3">Predict sales trends with AI</p>
                <div className="text-xs text-gray-500 mb-3">From $299/month</div>
                <Link to="/zion-ai-sales-predictor" className="text-blue-600 hover:text-blue-800 text-sm font-medium">Try Now →</Link>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-2xl mb-3">⚡</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Workflow Automator</h3>
                <p className="text-gray-600 text-sm mb-3">Automate business workflows</p>
                <div className="text-xs text-gray-500 mb-3">From $59/month</div>
                <Link to="/zion-ai-workflow-automator" className="text-blue-600 hover:text-blue-800 text-sm font-medium">Try Now →</Link>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-2xl mb-3">💰</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Financial Forecaster</h3>
                <p className="text-gray-600 text-sm mb-3">AI-powered financial predictions</p>
                <div className="text-xs text-gray-500 mb-3">From $299/month</div>
                <Link to="/zion-ai-financial-forecaster" className="text-blue-600 hover:text-blue-800 text-sm font-medium">Try Now →</Link>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-2xl mb-3">📧</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Marketing Pro</h3>
                <p className="text-gray-600 text-sm mb-3">AI-powered email campaigns</p>
                <div className="text-xs text-gray-500 mb-3">From $39/month</div>
                <Link to="/zion-ai-email-marketing-pro" className="text-blue-600 hover:text-blue-800 text-sm font-medium">Try Now →</Link>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-2xl mb-3">📱</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Social Scheduler Pro</h3>
                <p className="text-gray-600 text-sm mb-3">AI social media management</p>
                <div className="text-xs text-gray-500 mb-3">From $49/month</div>
                <Link to="/zion-ai-social-scheduler-pro" className="text-blue-600 hover:text-blue-800 text-sm font-medium">Try Now →</Link>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-2xl mb-3">📦</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Inventory Optimizer</h3>
                <p className="text-gray-600 text-sm mb-3">Smart inventory management</p>
                <div className="text-xs text-gray-500 mb-3">From $79/month</div>
                <Link to="/zion-ai-inventory-optimizer-pro" className="text-blue-600 hover:text-blue-800 text-sm font-medium">Try Now →</Link>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-2xl mb-3">🎯</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">CRM Platform Pro</h3>
                <p className="text-gray-600 text-sm mb-3">AI-powered customer management</p>
                <div className="text-xs text-gray-500 mb-3">From $49/month</div>
                <Link to="/ai-crm-platform" className="text-blue-600 hover:text-blue-800 text-sm font-medium">Try Now →</Link>
              </div>
            </div>
            <div className="text-center mt-8">
              <Link to="/services" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                View All 50+ AI Tools →
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