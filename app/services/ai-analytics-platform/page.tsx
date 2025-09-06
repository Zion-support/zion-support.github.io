export const metadata = { title: "AI Analytics Platform | Zion Tech Group" };

export default function AIAnalyticsPlatformPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          AI Analytics Platform
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Comprehensive AI-powered analytics platform that transforms your data into actionable business insights.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white rounded-lg p-6 shadow-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Data Integration & Processing</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span className="text-gray-600">Connect to 100+ data sources</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span className="text-gray-600">Real-time data processing</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span className="text-gray-600">Data cleansing & validation</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span className="text-gray-600">Automated ETL pipelines</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Advanced Analytics</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span className="text-gray-600">Machine learning models</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span className="text-gray-600">Predictive analytics</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span className="text-gray-600">Statistical analysis</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span className="text-gray-600">Custom algorithms</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Visualization & Reporting</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span className="text-gray-600">Interactive dashboards</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span className="text-gray-600">Custom visualizations</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span className="text-gray-600">Automated reports</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span className="text-gray-600">Mobile access</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Our Platform?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-start">
            <span className="text-green-500 mr-3 text-xl">✓</span>
            <div>
              <h3 className="font-semibold text-gray-900">Enterprise-Grade Security</h3>
              <p className="text-gray-600">
                Bank-level encryption and compliance with industry standards
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="text-green-500 mr-3 text-xl">✓</span>
            <div>
              <h3 className="font-semibold text-gray-900">Scalable Architecture</h3>
              <p className="text-gray-600">
                Handles millions of data points with sub-second response times
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="text-green-500 mr-3 text-xl">✓</span>
            <div>
              <h3 className="font-semibold text-gray-900">24/7 Support</h3>
              <p className="text-gray-600">
                Dedicated support team available around the clock
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="text-green-500 mr-3 text-xl">✓</span>
            <div>
              <h3 className="font-semibold text-gray-900">Easy Integration</h3>
              <p className="text-gray-600">
                RESTful APIs and pre-built connectors for seamless integration
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-gray-600 mb-6">
          Contact us today for a free consultation and demo of our AI analytics platform.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+13024640950"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Call +1 302 464 0950
          </a>
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
          >
            Email Us
          </a>
        </div>
      </div>
    </div>
  );
}