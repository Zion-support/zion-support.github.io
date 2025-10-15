import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const AISEOOptimizerPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Zion AI SEO Optimizer - Boost Your Search Rankings | Zion Tech Group</title>
        <meta name="description" content="AI-powered SEO optimization tool that improves your search rankings. Keyword research, content optimization, and technical SEO analysis." />
        <meta name="keywords" content="AI SEO optimizer, search engine optimization, keyword research, content optimization, technical SEO, ranking improvement" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Zion AI SEO Optimizer
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Boost your search rankings with AI-powered SEO optimization. 
              Get keyword insights, content recommendations, and technical analysis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://ziontechgroup.com/ai-seo-optimizer" className="bg-orange-600 text-white px-8 py-3 rounded-lg hover:bg-orange-700 transition-colors text-center">
                Start Optimizing
              </a>
              <Link to="/contact" className="border border-orange-600 text-orange-600 px-8 py-3 rounded-lg hover:bg-orange-50 transition-colors text-center">
                Free SEO Audit
              </Link>
            </div>
          </div>

          {/* Features Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Comprehensive SEO Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Keyword Research</h3>
                <p className="text-gray-600 mb-4">
                  Discover high-value keywords with AI-powered research and competitor analysis.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Long-tail keyword discovery</li>
                  <li>• Search volume analysis</li>
                  <li>• Competitor keyword tracking</li>
                  <li>• Keyword difficulty scoring</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">📝</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Content Optimization</h3>
                <p className="text-gray-600 mb-4">
                  AI-powered content analysis and optimization suggestions for better rankings.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Content quality scoring</li>
                  <li>• SEO writing suggestions</li>
                  <li>• Readability optimization</li>
                  <li>• Meta tag optimization</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Technical SEO</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive technical analysis and optimization recommendations.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Site speed analysis</li>
                  <li>• Mobile optimization</li>
                  <li>• Schema markup suggestions</li>
                  <li>• Core Web Vitals monitoring</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Ranking Tracking</h3>
                <p className="text-gray-600 mb-4">
                  Monitor your search rankings and track progress over time.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Daily ranking updates</li>
                  <li>• Competitor comparison</li>
                  <li>• Local SEO tracking</li>
                  <li>• Ranking reports</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🔗</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Link Building</h3>
                <p className="text-gray-600 mb-4">
                  AI-powered link building strategies and opportunity identification.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Backlink analysis</li>
                  <li>• Link opportunity discovery</li>
                  <li>• Competitor backlink tracking</li>
                  <li>• Link quality assessment</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">📈</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Performance Analytics</h3>
                <p className="text-gray-600 mb-4">
                  Detailed analytics and reporting on your SEO performance.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Traffic analysis</li>
                  <li>• Conversion tracking</li>
                  <li>• ROI measurement</li>
                  <li>• Custom reports</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Pricing Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">SEO Optimization Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Starter</h3>
                <div className="text-4xl font-bold text-orange-600 mb-4">$59<span className="text-lg text-gray-500">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Up to 5 websites
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Basic keyword research
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Content optimization
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Email support
                  </li>
                </ul>
                <a href="https://ziontechgroup.com/ai-seo-optimizer/starter" className="w-full bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700 transition-colors text-center block">
                  Start Free Trial
                </a>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md border-2 border-orange-600 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-orange-600 text-white px-4 py-1 rounded-full text-sm">Most Popular</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional</h3>
                <div className="text-4xl font-bold text-orange-600 mb-4">$149<span className="text-lg text-gray-500">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Up to 25 websites
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Advanced keyword research
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Technical SEO analysis
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Competitor tracking
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Priority support
                  </li>
                </ul>
                <a href="https://ziontechgroup.com/ai-seo-optimizer/professional" className="w-full bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700 transition-colors text-center block">
                  Get Started
                </a>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-orange-600 mb-4">$399<span className="text-lg text-gray-500">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Unlimited websites
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    AI-powered content generation
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Custom reporting
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    API access
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    24/7 dedicated support
                  </li>
                </ul>
                <a href="https://ziontechgroup.com/ai-seo-optimizer/enterprise" className="w-full bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700 transition-colors text-center block">
                  Contact Sales
                </a>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Choose Our SEO Optimizer?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">🚀 Faster Results</h3>
                <p className="text-gray-600">
                  See SEO improvements in weeks, not months. Our AI identifies the most impactful 
                  optimizations and prioritizes them for maximum results.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">🎯 AI-Powered Insights</h3>
                <p className="text-gray-600">
                  Get intelligent recommendations based on your specific industry, competitors, 
                  and target audience. No more guessing what works.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">📈 Proven Results</h3>
                <p className="text-gray-600">
                  Our clients see an average 150% increase in organic traffic within 3 months. 
                  Join thousands of successful businesses using our platform.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">💰 Cost Effective</h3>
                <p className="text-gray-600">
                  Save up to 80% compared to hiring SEO agencies. Get professional-level 
                  optimization at a fraction of the cost.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-orange-600 text-white rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Dominate Search Results?</h2>
            <p className="text-xl mb-8 opacity-90">
              Start your free SEO audit today and see how much traffic you're missing out on.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://ziontechgroup.com/ai-seo-optimizer" className="bg-white text-orange-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
                Start Free Audit
              </a>
              <Link to="/contact" className="border border-white text-white px-8 py-3 rounded-lg hover:bg-orange-700 transition-colors">
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AISEOOptimizerPage;