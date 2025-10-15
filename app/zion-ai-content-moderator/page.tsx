import React from 'react';
import { Helmet } from 'react-helmet-async';

const ZionAIContentModeratorPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Zion AI Content Moderator - Advanced AI Content Moderation | Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered content moderation solution with real-time filtering, sentiment analysis, and automated content review. Protect your platform with intelligent moderation." />
        <meta name="keywords" content="AI content moderation, content filtering, automated moderation, sentiment analysis, content safety, platform protection" />
        <meta property="og:title" content="Zion AI Content Moderator - Advanced AI Content Moderation" />
        <meta property="og:description" content="Protect your platform with our advanced AI content moderation solution featuring real-time filtering and automated content review." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/zion-ai-content-moderator" />
        <link rel="canonical" href="https://ziontechgroup.com/zion-ai-content-moderator" />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Zion AI Content Moderator
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
                Advanced AI-powered content moderation solution with real-time filtering, sentiment analysis, and automated content review to protect your platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                  Get Started Today
                </a>
                <a href="#features" className="border border-white text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div id="features" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Powerful AI Content Moderation Features</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Protect your platform with intelligent content moderation powered by advanced AI technology
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="text-3xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Real-time Content Analysis</h3>
                <p className="text-gray-600">Instantly analyze and filter content as it's posted with advanced AI algorithms</p>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <div className="text-3xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Sentiment Analysis</h3>
                <p className="text-gray-600">Detect toxic, harmful, or inappropriate content with high accuracy</p>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <div className="text-3xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Automated Actions</h3>
                <p className="text-gray-600">Automatically flag, hide, or remove content based on your moderation rules</p>
              </div>
              
              <div className="bg-orange-50 p-6 rounded-lg">
                <div className="text-3xl mb-4">🌐</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Multi-language Support</h3>
                <p className="text-gray-600">Moderate content in multiple languages with global language support</p>
              </div>
              
              <div className="bg-red-50 p-6 rounded-lg">
                <div className="text-3xl mb-4">📊</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Analytics Dashboard</h3>
                <p className="text-gray-600">Monitor moderation activity with detailed analytics and reporting</p>
              </div>
              
              <div className="bg-indigo-50 p-6 rounded-lg">
                <div className="text-3xl mb-4">🔧</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Custom Rules</h3>
                <p className="text-gray-600">Create custom moderation rules tailored to your platform's needs</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
              <p className="text-xl text-gray-600">Choose the plan that fits your content moderation needs</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Starter</h3>
                <div className="text-4xl font-bold text-blue-600 mb-6">$29<span className="text-lg text-gray-500">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Up to 10,000 content reviews/month
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Basic sentiment analysis
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Email support
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Basic analytics
                  </li>
                </ul>
                <a href="#contact" className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-center block">
                  Get Started
                </a>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-blue-600 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Professional</h3>
                <div className="text-4xl font-bold text-blue-600 mb-6">$99<span className="text-lg text-gray-500">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Up to 100,000 content reviews/month
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Advanced sentiment analysis
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Custom moderation rules
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Priority support
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Advanced analytics
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    API access
                  </li>
                </ul>
                <a href="#contact" className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-center block">
                  Get Started
                </a>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-blue-600 mb-6">$299<span className="text-lg text-gray-500">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Unlimited content reviews
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    AI-powered content classification
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Custom AI model training
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    24/7 dedicated support
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    White-label solution
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    On-premise deployment
                  </li>
                </ul>
                <a href="#contact" className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-center block">
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div id="contact" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Contact our team to discuss your content moderation needs and find the perfect solution for your platform.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <span className="text-2xl mr-4">📞</span>
                    <div>
                      <p className="font-semibold text-gray-900">Phone</p>
                      <p className="text-gray-600">+1 302 464 0950</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-2xl mr-4">✉️</span>
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <p className="text-gray-600">kleber@ziontechgroup.com</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-2xl mr-4">📍</span>
                    <div>
                      <p className="font-semibold text-gray-900">Address</p>
                      <p className="text-gray-600">364 E Main St STE 1008<br />Middletown DE 19709</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Why Choose Our Content Moderator?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <div>
                      <p className="font-semibold text-gray-900">High Accuracy</p>
                      <p className="text-gray-600">Advanced AI models with 95%+ accuracy in content detection</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <div>
                      <p className="font-semibold text-gray-900">Real-time Processing</p>
                      <p className="text-gray-600">Instant content analysis and moderation decisions</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <div>
                      <p className="font-semibold text-gray-900">Scalable Solution</p>
                      <p className="text-gray-600">Handles millions of content pieces with ease</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <div>
                      <p className="font-semibold text-gray-900">Custom Integration</p>
                      <p className="text-gray-600">Easy integration with your existing platform</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ZionAIContentModeratorPage;
