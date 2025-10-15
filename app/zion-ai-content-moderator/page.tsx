import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function ZionAIContentModeratorPage() {
  const features = [
    {
      title: "Automated Content Filtering",
      description: "AI-powered content moderation that automatically detects and filters inappropriate content across text, images, and videos.",
      icon: "🛡️"
    },
    {
      title: "Real-time Monitoring",
      description: "24/7 real-time content monitoring with instant alerts and automated responses to policy violations.",
      icon: "⚡"
    },
    {
      title: "Multi-language Support",
      description: "Advanced NLP capabilities supporting content moderation in over 50 languages with cultural context awareness.",
      icon: "🌍"
    },
    {
      title: "Customizable Rules",
      description: "Flexible rule engine allowing you to customize moderation policies based on your specific community guidelines.",
      icon: "⚙️"
    },
    {
      title: "Scalable Performance",
      description: "Handle millions of content pieces daily with our cloud-based infrastructure designed for high-volume processing.",
      icon: "📈"
    },
    {
      title: "Analytics Dashboard",
      description: "Comprehensive analytics and reporting tools to track moderation effectiveness and community health metrics.",
      icon: "📊"
    }
  ];

  const useCases = [
    "Social Media Platforms",
    "Online Communities",
    "E-commerce Marketplaces",
    "Educational Platforms",
    "Gaming Communities",
    "News and Media Sites"
  ];

  return (
    <>
      <Helmet>
        <title>AI Content Moderator - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered content moderation solution for automated filtering, real-time monitoring, and scalable content management across multiple platforms." />
        <meta name="keywords" content="AI content moderation, automated filtering, content safety, community management, real-time monitoring, NLP content analysis" />
        <meta property="og:title" content="AI Content Moderator - Zion Tech Group" />
        <meta property="og:description" content="Advanced AI-powered content moderation solution for automated filtering and real-time monitoring." />
        <meta property="og:type" content="product" />
        <meta property="og:url" content="https://ziontechgroup.com/zion-ai-content-moderator" />
        <link rel="canonical" href="https://ziontechgroup.com/zion-ai-content-moderator" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-600 to-purple-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                AI Content Moderator
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
                Advanced AI-powered content moderation that automatically filters, monitors, and manages content across your platforms with precision and scale.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Get Started
                </Link>
                <Link 
                  to="/pricing" 
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Powerful Content Moderation Features</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our AI Content Moderator provides comprehensive content filtering and monitoring capabilities
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Perfect for Every Platform</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our content moderation solution works across various industries and platforms
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg text-center hover:bg-gray-100 transition-colors">
                  <p className="font-medium text-gray-900">{useCase}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="py-16 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Our AI Content Moderator?</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-lg font-semibold text-gray-900">99.9% Accuracy</h3>
                      <p className="text-gray-600">Advanced machine learning models ensure highly accurate content classification</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-lg font-semibold text-gray-900">Lightning Fast</h3>
                      <p className="text-gray-600">Process content in milliseconds with our optimized AI infrastructure</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-lg font-semibold text-gray-900">Cost Effective</h3>
                      <p className="text-gray-600">Reduce moderation costs by up to 80% compared to human-only moderation</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Ready to Get Started?</h3>
                <p className="text-gray-600 mb-6">
                  Join thousands of businesses already using our AI Content Moderator to maintain safe, healthy online communities.
                </p>
                <div className="space-y-4">
                  <Link 
                    to="/contact" 
                    className="block w-full bg-blue-600 text-white text-center py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Contact Sales
                  </Link>
                  <Link 
                    to="/pricing" 
                    className="block w-full border border-blue-600 text-blue-600 text-center py-3 px-6 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                  >
                    View Pricing Plans
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Transform Your Content Moderation Today</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Experience the power of AI-driven content moderation and keep your platforms safe, engaging, and compliant.
            </p>
            <Link 
              to="/contact" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Start Free Trial
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
