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
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Welcome to Zion Tech Group
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto px-4">
              We provide cutting-edge AI and IT solutions to help your business thrive in the digital age.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <Link to="/contact" className="bg-blue-600 text-white px-6 sm:px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-center font-medium">
                Get Started
              </Link>
              <Link to="/about" className="border border-blue-600 text-blue-600 px-6 sm:px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors text-center font-medium">
                Learn More
              </Link>
            </div>
          </div>
          
          {/* Services Preview */}
          <div className="mt-16 sm:mt-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8 sm:mb-12">Our Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Services</h3>
                <p className="text-gray-600 mb-4">
                  Advanced artificial intelligence solutions including machine learning, natural language processing, and computer vision.
                </p>
                <div className="text-sm text-gray-500 mb-2">Starting at $199/month</div>
                <Link to="/ai-services" className="text-blue-600 hover:text-blue-800 font-medium">Learn More →</Link>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">☁️</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Cloud Infrastructure</h3>
                <p className="text-gray-600 mb-4">
                  Scalable cloud solutions that provide reliability, security, and performance for your business applications.
                </p>
                <div className="text-sm text-gray-500 mb-2">Starting at $1,000/month</div>
                <Link to="/cloud-infrastructure" className="text-blue-600 hover:text-blue-800 font-medium">Learn More →</Link>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🔄</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Digital Transformation</h3>
                <p className="text-gray-600 mb-4">
                  Complete digital transformation services to modernize your business processes and systems.
                </p>
                <div className="text-sm text-gray-500 mb-2">Custom pricing</div>
                <Link to="/digital-transformation" className="text-blue-600 hover:text-blue-800 font-medium">Learn More →</Link>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">💻</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Micro SaaS Solutions</h3>
                <p className="text-gray-600 mb-4">
                  Specialized software solutions designed to solve specific business challenges with immediate value.
                </p>
                <div className="text-sm text-gray-500 mb-2">Starting at $19/month</div>
                <Link to="/micro-saas-solutions" className="text-blue-600 hover:text-blue-800 font-medium">Learn More →</Link>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🔧</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">IT Services</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive IT solutions including development, infrastructure, and support services.
                </p>
                <div className="text-sm text-gray-500 mb-2">Starting at $1,500/month</div>
                <Link to="/it-services" className="text-blue-600 hover:text-blue-800 font-medium">Learn More →</Link>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">⚛️</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Specialized Services</h3>
                <p className="text-gray-600 mb-4">
                  Cutting-edge solutions including quantum computing, AR/VR, and robotics automation.
                </p>
                <div className="text-sm text-gray-500 mb-2">Custom pricing</div>
                <Link to="/specialized-services" className="text-blue-600 hover:text-blue-800 font-medium">Learn More →</Link>
              </div>
            </div>
          </div>
          
          {/* AI Tools Preview */}
          <div className="mt-16 sm:mt-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8 sm:mb-12">AI-Powered Tools</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-2xl mb-2">🎯</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Meeting Assistant</h3>
                <p className="text-gray-600 text-sm mb-3">AI-powered meeting transcription and insights</p>
                <div className="text-xs text-gray-500 mb-2">$39/month</div>
                <Link to="/zion-ai-meeting-assistant" className="text-blue-600 hover:text-blue-800 text-sm font-medium">Try Now →</Link>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-2xl mb-2">💻</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Code Assistant</h3>
                <p className="text-gray-600 text-sm mb-3">Intelligent coding assistance and optimization</p>
                <div className="text-xs text-gray-500 mb-2">$29/month</div>
                <Link to="/zion-ai-code-assistant" className="text-blue-600 hover:text-blue-800 text-sm font-medium">Try Now →</Link>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-2xl mb-2">🌍</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Translator Pro</h3>
                <p className="text-gray-600 text-sm mb-3">Advanced AI translation with context understanding</p>
                <div className="text-xs text-gray-500 mb-2">$19/month</div>
                <Link to="/zion-ai-translator-pro" className="text-blue-600 hover:text-blue-800 text-sm font-medium">Try Now →</Link>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-2xl mb-2">🎬</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Video Generator</h3>
                <p className="text-gray-600 text-sm mb-3">Create professional videos with AI assistance</p>
                <div className="text-xs text-gray-500 mb-2">$39/month</div>
                <Link to="/zion-ai-video-generator" className="text-blue-600 hover:text-blue-800 text-sm font-medium">Try Now →</Link>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-2xl mb-2">🔬</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Data Scientist</h3>
                <p className="text-gray-600 text-sm mb-3">Automated machine learning model building</p>
                <div className="text-xs text-gray-500 mb-2">$199/month</div>
                <Link to="/zion-ai-data-scientist" className="text-blue-600 hover:text-blue-800 text-sm font-medium">Try Now →</Link>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-2xl mb-2">⚖️</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Legal Assistant</h3>
                <p className="text-gray-600 text-sm mb-3">AI-powered legal research and analysis</p>
                <div className="text-xs text-gray-500 mb-2">$299/month</div>
                <Link to="/zion-ai-legal-assistant" className="text-blue-600 hover:text-blue-800 text-sm font-medium">Try Now →</Link>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-2xl mb-2">🏥</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Healthcare Assistant</h3>
                <p className="text-gray-600 text-sm mb-3">Medical image analysis and diagnostic assistance</p>
                <div className="text-xs text-gray-500 mb-2">$499/month</div>
                <Link to="/zion-ai-healthcare-assistant" className="text-blue-600 hover:text-blue-800 text-sm font-medium">Try Now →</Link>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-2xl mb-2">📊</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Customer Insights</h3>
                <p className="text-gray-600 text-sm mb-3">Advanced customer analytics and segmentation</p>
                <div className="text-xs text-gray-500 mb-2">$99/month</div>
                <Link to="/zion-ai-customer-insights" className="text-blue-600 hover:text-blue-800 text-sm font-medium">Try Now →</Link>
              </div>
            </div>
            <div className="text-center mt-8">
              <Link to="/services" className="text-blue-600 hover:text-blue-800 font-medium">View All Services →</Link>
            </div>
          </div>
          
          {/* Contact Information */}
          <div className="mt-16 sm:mt-20 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-6 sm:p-8 text-center text-white">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90">
              Get in touch with our experts to discuss your project and discover how we can help you succeed.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div className="text-center">
                <div className="text-2xl mb-2">📞</div>
                <h3 className="text-base sm:text-lg font-semibold mb-2">Phone</h3>
                <p className="text-sm sm:text-lg">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">✉️</div>
                <h3 className="text-base sm:text-lg font-semibold mb-2">Email</h3>
                <p className="text-sm sm:text-lg break-all">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">📍</div>
                <h3 className="text-base sm:text-lg font-semibold mb-2">Address</h3>
                <p className="text-sm sm:text-lg">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-white text-blue-600 px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Contact Us Now
              </Link>
              <Link 
                to="/pricing" 
                className="border-2 border-white text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                View Pricing
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