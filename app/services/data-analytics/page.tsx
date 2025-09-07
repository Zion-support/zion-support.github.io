export const metadata = { 
  title: 'Advanced Data Analytics & BI | Zion Tech Group',
  description: 'Transform your data into actionable insights with advanced analytics, real-time dashboards, and AI-powered business intelligence solutions.'
};

export default function DataAnalyticsPage() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Advanced Data Analytics & BI</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Transform your data into actionable insights with our comprehensive analytics solutions. 
          From data engineering to advanced visualization, we help you make data-driven decisions.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <span className="text-2xl">📊</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Business Intelligence</h3>
          <p className="text-gray-600 mb-4">
            Comprehensive BI solutions with interactive dashboards, KPI tracking, and automated reporting.
          </p>
          <ul className="text-sm text-gray-500 space-y-1">
            <li>• Interactive Dashboards</li>
            <li>• KPI Monitoring</li>
            <li>• Automated Reports</li>
            <li>• Data Visualization</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
            <span className="text-2xl">🤖</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Machine Learning</h3>
          <p className="text-gray-600 mb-4">
            Advanced ML models for predictive analytics, pattern recognition, and automated insights.
          </p>
          <ul className="text-sm text-gray-500 space-y-1">
            <li>• Predictive Models</li>
            <li>• Pattern Recognition</li>
            <li>• Automated Insights</li>
            <li>• Model Deployment</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
            <span className="text-2xl">🔧</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Data Engineering</h3>
          <p className="text-gray-600 mb-4">
            Robust data pipelines and infrastructure for reliable data processing and storage.
          </p>
          <ul className="text-sm text-gray-500 space-y-1">
            <li>• Data Pipelines</li>
            <li>• ETL Processes</li>
            <li>• Data Warehousing</li>
            <li>• Real-time Processing</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
            <span className="text-2xl">📈</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Data Visualization</h3>
          <p className="text-gray-600 mb-4">
            Beautiful, interactive charts and graphs that make complex data easy to understand.
          </p>
          <ul className="text-sm text-gray-500 space-y-1">
            <li>• Interactive Charts</li>
            <li>• Custom Dashboards</li>
            <li>• Real-time Updates</li>
            <li>• Mobile Responsive</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
            <span className="text-2xl">⚡</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Real-time Analytics</h3>
          <p className="text-gray-600 mb-4">
            Live data processing and analytics for immediate insights and decision making.
          </p>
          <ul className="text-sm text-gray-500 space-y-1">
            <li>• Live Dashboards</li>
            <li>• Stream Processing</li>
            <li>• Instant Alerts</li>
            <li>• Real-time KPIs</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
            <span className="text-2xl">🔍</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Data Mining</h3>
          <p className="text-gray-600 mb-4">
            Discover hidden patterns and insights in your data using advanced mining techniques.
          </p>
          <ul className="text-sm text-gray-500 space-y-1">
            <li>• Pattern Discovery</li>
            <li>• Anomaly Detection</li>
            <li>• Trend Analysis</li>
            <li>• Data Exploration</li>
          </ul>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to Unlock Your Data's Potential?</h2>
        <p className="text-xl mb-6 text-blue-100">
          Let our experts help you transform your data into powerful business insights.
        </p>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
          Get Started Today
        </button>
      </div>
    </section>
  );
}