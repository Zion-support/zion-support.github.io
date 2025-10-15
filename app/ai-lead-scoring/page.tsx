import React from 'react';
import { Helmet } from 'react-helmet-async';

const AILeadScoringPage: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Zion AI Lead Scoring Engine",
    "description": "Intelligent lead scoring system that uses AI to analyze customer behavior and predict conversion probability.",
    "url": "https://ziontechgroup.com/ai-lead-scoring",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web, API",
    "offers": {
      "@type": "Offer",
      "price": "79",
      "priceCurrency": "USD",
      "priceValidUntil": "2025-12-31"
    },
    "provider": {
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": "https://ziontechgroup.com"
    }
  };

  return (
    <>
      <Helmet>
        <title>Zion AI Lead Scoring Engine - Intelligent Sales Optimization | Zion Tech Group</title>
        <meta name="description" content="Boost your sales with AI Lead Scoring Engine. Analyze customer behavior, predict conversions, and optimize your sales pipeline. Starting from $79/month." />
        <meta name="keywords" content="AI lead scoring, sales optimization, lead qualification, conversion prediction, sales analytics, CRM integration" />
        <meta property="og:title" content="Zion AI Lead Scoring Engine - Intelligent Sales Optimization" />
        <meta property="og:description" content="Intelligent lead scoring system that uses AI to analyze customer behavior and predict conversion probability." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-lead-scoring" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="text-6xl mb-6">🎯</div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Zion AI Lead Scoring Engine
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
                Intelligent lead scoring system that uses AI to analyze customer behavior, engagement patterns, 
                and demographic data to predict conversion probability and optimize sales efforts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a href="/contact?service=ai-lead-scoring" className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg">
                  Try Lead Scoring
                </a>
                <a href="tel:+13024640950" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors text-lg">
                  Call +1 302 464 0950
                </a>
              </div>
              <div className="text-center text-sm opacity-90">
                <p>📧 kleber@ziontechgroup.com | 📍 364 E Main St STE 1008, Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Intelligent Lead Analysis Features</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Advanced AI-powered lead scoring and qualification capabilities to maximize your sales performance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Behavioral Analysis</h3>
              <p className="text-gray-600">Analyze customer behavior patterns, website interactions, and engagement metrics to score leads accurately.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl mb-4">🔮</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Predictive Scoring</h3>
              <p className="text-gray-600">Machine learning algorithms predict conversion probability with high accuracy and confidence levels.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl mb-4">👥</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Demographic Analysis</h3>
              <p className="text-gray-600">Comprehensive demographic analysis to identify high-value prospects and market segments.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl mb-4">📈</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Engagement Tracking</h3>
              <p className="text-gray-600">Monitor and track customer engagement across multiple channels and touchpoints.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl mb-4">🔗</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">CRM Integration</h3>
              <p className="text-gray-600">Seamless integration with popular CRM systems for automated lead management and workflow.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Real-time Updates</h3>
              <p className="text-gray-600">Dynamic lead scoring that updates in real-time as new data becomes available.</p>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Smart Lead Scoring Pricing</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Choose the perfect plan for your lead scoring needs. All plans include our core AI analysis features.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Basic</h3>
                <div className="text-4xl font-bold text-purple-600 mb-4">$79<span className="text-lg text-gray-500">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Up to 1,000 leads/month</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Basic scoring models</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Email integration</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Email support</li>
                </ul>
                <a href="/contact?service=ai-lead-scoring&plan=basic" className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors text-center block">
                  Get Started
                </a>
              </div>
              
              <div className="bg-purple-600 text-white p-8 rounded-xl relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Pro</h3>
                <div className="text-4xl font-bold mb-4">$199<span className="text-lg opacity-80">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> Up to 10,000 leads/month</li>
                  <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> Advanced ML models</li>
                  <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> CRM integration</li>
                  <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> Custom scoring rules</li>
                  <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> Priority support</li>
                </ul>
                <a href="/contact?service=ai-lead-scoring&plan=pro" className="w-full bg-white text-purple-600 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center block">
                  Get Started
                </a>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-purple-600 mb-4">$499<span className="text-lg text-gray-500">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Unlimited leads</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Custom ML models</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Full API access</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Advanced analytics</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 24/7 dedicated support</li>
                </ul>
                <a href="/contact?service=ai-lead-scoring&plan=enterprise" className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors text-center block">
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-700 text-white py-16">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-4">Boost Your Sales Performance Today</h2>
            <p className="text-xl mb-8">
              Transform your lead qualification process with AI-powered insights and predictive analytics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact?service=ai-lead-scoring" className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Start Free Trial
              </a>
              <a href="tel:+13024640950" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
                Call +1 302 464 0950
              </a>
            </div>
            <div className="mt-8 text-sm">
              <p>Email: kleber@ziontechgroup.com | Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AILeadScoringPage;