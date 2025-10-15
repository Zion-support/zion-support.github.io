import React from 'react';
import SEOHead from '../components/SEOHead';

const AIPriceOptimizerPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="AI Price Optimizer - Zion Tech Group"
        description="AI-powered dynamic pricing optimization. Maximize revenue and profit margins with intelligent pricing strategies based on market conditions, demand, and competitor analysis."
        keywords="AI price optimization, dynamic pricing, revenue optimization, pricing strategy, competitive pricing, profit maximization"
        canonicalUrl="https://ziontechgroup.com/ai-price-optimizer"
      />
      
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">AI Price Optimizer</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Maximize revenue and profit margins with AI-powered dynamic pricing. Analyze market conditions, competitor pricing, and demand patterns to optimize your pricing strategy in real-time.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Optimization Features</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-900">Dynamic Pricing</h3>
                    <p className="text-gray-600">Automatically adjust prices based on demand, inventory, and market conditions</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-900">Competitor Analysis</h3>
                    <p className="text-gray-600">Monitor competitor pricing and market trends to stay competitive</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-900">Demand Forecasting</h3>
                    <p className="text-gray-600">Predict demand patterns to optimize pricing and inventory management</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-900">A/B Testing</h3>
                    <p className="text-gray-600">Test different pricing strategies and measure their impact on sales</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-900">Revenue Analytics</h3>
                    <p className="text-gray-600">Track pricing performance and revenue impact with detailed analytics</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Pricing Plans</h3>
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-gray-900">Starter</h4>
                  <p className="text-3xl font-bold text-yellow-600">$149<span className="text-lg text-gray-600">/month</span></p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-600">
                    <li>• Up to 100 products</li>
                    <li>• Basic price optimization</li>
                    <li>• Competitor monitoring</li>
                    <li>• Standard reporting</li>
                    <li>• Email support</li>
                  </ul>
                </div>
                <div className="border border-yellow-500 rounded-lg p-4 bg-yellow-50">
                  <h4 className="text-lg font-semibold text-gray-900">Professional</h4>
                  <p className="text-3xl font-bold text-yellow-600">$399<span className="text-lg text-gray-600">/month</span></p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-600">
                    <li>• Up to 1,000 products</li>
                    <li>• Advanced AI optimization</li>
                    <li>• Real-time pricing</li>
                    <li>• A/B testing</li>
                    <li>• API integration</li>
                    <li>• Priority support</li>
                  </ul>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-gray-900">Enterprise</h4>
                  <p className="text-3xl font-bold text-yellow-600">$999<span className="text-lg text-gray-600">/month</span></p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-600">
                    <li>• Unlimited products</li>
                    <li>• Custom AI models</li>
                    <li>• Multi-channel pricing</li>
                    <li>• Advanced analytics</li>
                    <li>• 24/7 support</li>
                    <li>• Custom integrations</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Optimize Your Pricing Strategy</h2>
            <p className="text-gray-600 mb-6">Maximize revenue with AI-powered dynamic pricing.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-yellow-600 text-white px-8 py-3 rounded-lg hover:bg-yellow-700 transition-colors">
                Get Pricing Analysis
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="border border-yellow-600 text-yellow-600 px-8 py-3 rounded-lg hover:bg-yellow-50 transition-colors">
                Email: kleber@ziontechgroup.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIPriceOptimizerPage;