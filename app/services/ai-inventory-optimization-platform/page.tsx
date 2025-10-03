import React from 'react';
// Metadata handled by React Helmet
import { Link } from 'react-router-dom';

export const metadata: Metadata = {
  title: 'AI Inventory Optimization Platform - Zion Tech Group',
  description: 'Optimize inventory management with AI-powered demand forecasting, automated reordering, and intelligent stock optimization. Reduce costs by 30%.',
  keywords: 'inventory optimization, AI inventory management, demand forecasting, supply chain optimization, stock management, inventory analytics',
  robots: {
    index: true,
    follow: true,
  },
};

export default function AIInventoryOptimization() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">AI Inventory Optimization Platform</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Transform your inventory management with AI-powered optimization. 
          Reduce costs, eliminate stockouts, and maximize profitability with intelligent demand forecasting.
        </p>
      </div>

      <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-8 mb-12">
        <div className="grid md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold text-orange-600 mb-2">30%</div>
            <div className="text-gray-600">Cost Reduction</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
            <div className="text-gray-600">Forecast Accuracy</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">50%</div>
            <div className="text-gray-600">Stockout Reduction</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
            <div className="text-gray-600">Automated Monitoring</div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Demand Forecasting</h3>
          <p className="text-gray-600 mb-4">
            Advanced AI models predict demand with 95% accuracy using historical data, seasonality, and market trends.
          </p>
          <ul className="text-sm text-gray-500 mb-4">
            <li>• Machine learning models</li>
            <li>• Seasonal adjustments</li>
            <li>• Trend analysis</li>
            <li>• External factors</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Automated Reordering</h3>
          <p className="text-gray-600 mb-4">
            Intelligent reorder points and quantities based on lead times, demand patterns, and supplier reliability.
          </p>
          <ul className="text-sm text-gray-500 mb-4">
            <li>• Smart reorder points</li>
            <li>• Economic order quantity</li>
            <li>• Supplier integration</li>
            <li>• Lead time optimization</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Stock Optimization</h3>
          <p className="text-gray-600 mb-4">
            Optimize inventory levels across multiple locations and channels to minimize costs and maximize availability.
          </p>
          <ul className="text-sm text-gray-500 mb-4">
            <li>• Multi-location optimization</li>
            <li>• Safety stock calculation</li>
            <li>• ABC analysis</li>
            <li>• Dead stock identification</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Supplier Management</h3>
          <p className="text-gray-600 mb-4">
            Optimize supplier relationships with performance tracking, risk assessment, and automated procurement.
          </p>
          <ul className="text-sm text-gray-500 mb-4">
            <li>• Supplier performance</li>
            <li>• Risk assessment</li>
            <li>• Automated procurement</li>
            <li>• Contract management</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Risk Management</h3>
          <p className="text-gray-600 mb-4">
            Identify and mitigate inventory risks including obsolescence, spoilage, and supply chain disruptions.
          </p>
          <ul className="text-sm text-gray-500 mb-4">
            <li>• Obsolescence tracking</li>
            <li>• Spoilage prevention</li>
            <li>• Supply chain alerts</li>
            <li>• Risk scoring</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Analytics & Reporting</h3>
          <p className="text-gray-600 mb-4">
            Comprehensive analytics and reporting with real-time dashboards and actionable insights.
          </p>
          <ul className="text-sm text-gray-500 mb-4">
            <li>• Real-time dashboards</li>
            <li>• Performance metrics</li>
            <li>• Cost analysis</li>
            <li>• Trend reporting</li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Pricing Plans</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Small Business</h3>
            <div className="text-3xl font-bold text-orange-600 mb-4">$599/month</div>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li>• Up to 1,000 SKUs</li>
              <li>• Basic forecasting</li>
              <li>• Standard integrations</li>
              <li>• Email support</li>
              <li>• Monthly reports</li>
            </ul>
            <Link href="/contact" className="w-full bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700 transition-colors text-center block">
              Get Started
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-orange-500">
            <div className="bg-orange-500 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">Most Popular</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Enterprise</h3>
            <div className="text-3xl font-bold text-orange-600 mb-4">$1,999/month</div>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li>• Up to 10,000 SKUs</li>
              <li>• Advanced AI models</li>
              <li>• Multi-location support</li>
              <li>• Priority support</li>
              <li>• Real-time analytics</li>
              <li>• API access</li>
            </ul>
            <Link href="/contact" className="w-full bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700 transition-colors text-center block">
              Get Started
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Multi-Channel Retailer</h3>
            <div className="text-3xl font-bold text-orange-600 mb-4">Custom</div>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li>• Unlimited SKUs</li>
              <li>• Custom AI models</li>
              <li>• Dedicated support</li>
              <li>• On-premise deployment</li>
              <li>• Custom integrations</li>
              <li>• SLA guarantee</li>
            </ul>
            <Link href="/contact" className="w-full bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700 transition-colors text-center block">
              Contact Sales
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-orange-50 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Industry Applications</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Retail & E-commerce</h3>
            <p className="text-gray-600 text-sm">
              Optimize inventory across online and offline channels, reduce stockouts, and improve customer satisfaction.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Manufacturing</h3>
            <p className="text-gray-600 text-sm">
              Manage raw materials, work-in-progress, and finished goods with AI-powered demand planning.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Food & Beverage</h3>
            <p className="text-gray-600 text-sm">
              Prevent spoilage, optimize freshness, and manage seasonal demand with intelligent forecasting.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Pharmaceutical</h3>
            <p className="text-gray-600 text-sm">
              Ensure critical medication availability while managing expiration dates and regulatory compliance.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Automotive</h3>
            <p className="text-gray-600 text-sm">
              Optimize spare parts inventory, manage supplier relationships, and reduce maintenance downtime.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Fashion & Apparel</h3>
            <p className="text-gray-600 text-sm">
              Manage seasonal collections, reduce markdowns, and optimize size and color distribution.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Multi-Channel Retailer</h3>
            <p className="text-gray-600 mb-4">
              "Reduced inventory costs by 35% and stockouts by 60% using AI-powered demand forecasting. Our profit margins improved significantly."
            </p>
            <div className="text-sm text-gray-500">- Lisa Thompson, VP Operations</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Manufacturing Company</h3>
            <p className="text-gray-600 mb-4">
              "Optimized raw material procurement and reduced waste by 45% with intelligent inventory management and supplier optimization."
            </p>
            <div className="text-sm text-gray-500">- David Park, Supply Chain Director</div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Optimize Your Inventory Today</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Join leading companies using our AI inventory optimization platform to reduce costs, improve efficiency, and maximize profitability.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="bg-orange-600 text-white py-3 px-8 rounded-lg hover:bg-orange-700 transition-colors">
            Schedule Demo
          </Link>
          <Link href="tel:+13024640950" className="bg-green-600 text-white py-3 px-8 rounded-lg hover:bg-green-700 transition-colors">
            Call +1 302 464 0950
          </Link>
        </div>
        <p className="text-sm text-gray-500 mt-4">
          Email: <a href="mailto:kleber@ziontechgroup.com" className="text-blue-600 hover:underline">kleber@ziontechgroup.com</a>
        </p>
      </div>
    </div>
  );
}