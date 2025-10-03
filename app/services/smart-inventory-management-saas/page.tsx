import { Link } from 'react-router-dom';


export default function SmartInventoryManagementSaaS() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Smart Inventory Management SaaS</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Revolutionize your inventory management with AI-powered optimization. Reduce costs, 
          prevent stockouts, and maximize profitability with intelligent stock management.
        </p>
      </div>

      {/* Pricing Section */}
      <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-8 mb-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Flexible Pricing Plans</h2>
          <p className="text-lg text-gray-600">Scale with your business needs</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Starter</h3>
            <div className="text-3xl font-bold text-orange-600 mb-4">$79/month</div>
            <ul className="space-y-2 text-gray-600">
              <li>✓ Up to 1,000 SKUs</li>
              <li>✓ Basic AI predictions</li>
              <li>✓ Stock level alerts</li>
              <li>✓ Email support</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-orange-500">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Professional</h3>
            <div className="text-3xl font-bold text-orange-600 mb-4">$199/month</div>
            <ul className="space-y-2 text-gray-600">
              <li>✓ Up to 10,000 SKUs</li>
              <li>✓ Advanced AI optimization</li>
              <li>✓ Multi-location support</li>
              <li>✓ API integrations</li>
              <li>✓ Priority support</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise</h3>
            <div className="text-3xl font-bold text-orange-600 mb-4">Custom</div>
            <ul className="space-y-2 text-gray-600">
              <li>✓ Unlimited SKUs</li>
              <li>✓ Custom AI models</li>
              <li>✓ White-label solution</li>
              <li>✓ Dedicated support</li>
              <li>✓ On-premise deployment</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">AI Demand Forecasting</h3>
          <p className="text-gray-600 mb-4">
            Machine learning algorithms analyze sales patterns, seasonality, and market trends 
            to predict demand with 85% accuracy.
          </p>
          <div className="text-sm text-green-600 font-medium">✓ 85% demand prediction accuracy</div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Automated Reordering</h3>
          <p className="text-gray-600 mb-4">
            Smart reorder points automatically trigger purchase orders based on lead times, 
            demand forecasts, and supplier reliability.
          </p>
          <div className="text-sm text-green-600 font-medium">✓ 60% reduction in stockouts</div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Cost Optimization</h3>
          <p className="text-gray-600 mb-4">
            AI analyzes holding costs, ordering costs, and stockout costs to optimize 
            inventory levels and reduce total costs by 30%.
          </p>
          <div className="text-sm text-green-600 font-medium">✓ 30% cost reduction</div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Real-time Tracking</h3>
          <p className="text-gray-600 mb-4">
            Live inventory tracking across multiple locations with instant updates 
            and comprehensive reporting dashboards.
          </p>
          <div className="text-sm text-green-600 font-medium">✓ Real-time visibility</div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Smart Alerts</h3>
          <p className="text-gray-600 mb-4">
            Intelligent alerts for low stock, overstock, slow-moving items, and 
            unusual demand patterns to prevent costly inventory issues.
          </p>
          <div className="text-sm text-green-600 font-medium">✓ Proactive issue prevention</div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Supplier Integration</h3>
          <p className="text-gray-600 mb-4">
            Seamless integration with suppliers and vendors for automated ordering, 
            tracking, and invoice management.
          </p>
          <div className="text-sm text-green-600 font-medium">✓ 50+ supplier integrations</div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gray-50 rounded-lg p-8 mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Businesses Choose Our Smart Inventory Platform</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Proven Business Results</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                30% reduction in inventory costs
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                60% decrease in stockouts
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                85% accuracy in demand forecasting
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                40% improvement in cash flow
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Advanced Technology</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">✓</span>
                Machine learning demand forecasting
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">✓</span>
                Real-time inventory tracking
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">✓</span>
                Automated reorder optimization
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">✓</span>
                Multi-location inventory management
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Use Cases Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Perfect For</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">E-commerce</h3>
            <p className="text-gray-600 text-sm">Online retail inventory optimization</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Manufacturing</h3>
            <p className="text-gray-600 text-sm">Raw materials and production planning</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Retail Chains</h3>
            <p className="text-gray-600 text-sm">Multi-location inventory management</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Distribution</h3>
            <p className="text-gray-600 text-sm">Warehouse and logistics optimization</p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="text-center bg-orange-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Optimize Your Inventory?</h2>
        <p className="text-lg text-gray-600 mb-6">
          Join 300+ businesses using our Smart Inventory Management SaaS to reduce costs and improve efficiency.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/contact" 
            className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
          >
            Start Free Trial
          </Link>
          <Link 
            href="tel:+13024640950" 
            className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold border border-orange-600 hover:bg-orange-50 transition-colors"
          >
            Call +1 302 464 0950
          </Link>
        </div>
        <p className="text-sm text-gray-500 mt-4">
          Email: <a href="mailto:kleber@ziontechgroup.com" className="text-orange-600 hover:underline">kleber@ziontechgroup.com</a>
        </p>
      </div>
    </div>
  );
}