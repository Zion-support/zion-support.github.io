export const metadata = { 
  title: 'Data Analytics Services | Zion Tech Group',
  description: 'Advanced data analytics solutions including business intelligence, data visualization, machine learning, and data engineering.',
  keywords: 'data analytics, business intelligence, data visualization, predictive analytics, data science, machine learning, data consulting'
};

export default function DataAnalyticsPage() {
  return (
    <div className="space-y-16">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Data Analytics Services</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Transform your data into actionable insights with advanced analytics, 
          real-time dashboards, and AI-powered business intelligence solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <div className="text-4xl mb-4">📊</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Business Intelligence</h3>
          <p className="text-gray-600 mb-4">
            Comprehensive BI solutions with interactive dashboards and real-time reporting.
          </p>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• Interactive dashboards</li>
            <li>• Real-time reporting</li>
            <li>• KPI tracking</li>
            <li>• Executive summaries</li>
          </ul>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <div className="text-4xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Data Visualization</h3>
          <p className="text-gray-600 mb-4">
            Create compelling visual stories from your data with advanced visualization tools.
          </p>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• Custom charts and graphs</li>
            <li>• Interactive maps</li>
            <li>• 3D visualizations</li>
            <li>• Mobile-responsive designs</li>
          </ul>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <div className="text-4xl mb-4">🤖</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Predictive Analytics</h3>
          <p className="text-gray-600 mb-4">
            Leverage machine learning to predict future trends and behaviors.
          </p>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• Forecasting models</li>
            <li>• Risk assessment</li>
            <li>• Customer segmentation</li>
            <li>• Demand planning</li>
          </ul>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <div className="text-4xl mb-4">⚙️</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Data Engineering</h3>
          <p className="text-gray-600 mb-4">
            Build robust data pipelines and infrastructure for reliable data processing.
          </p>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• ETL/ELT pipelines</li>
            <li>• Data warehousing</li>
            <li>• Real-time streaming</li>
            <li>• Data quality assurance</li>
          </ul>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <div className="text-4xl mb-4">📈</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Performance Analytics</h3>
          <p className="text-gray-600 mb-4">
            Monitor and optimize business performance with advanced analytics.
          </p>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• ROI analysis</li>
            <li>• A/B testing</li>
            <li>• Conversion tracking</li>
            <li>• Performance benchmarking</li>
          </ul>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <div className="text-4xl mb-4">🎯</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Custom Analytics</h3>
          <p className="text-gray-600 mb-4">
            Tailored analytics solutions designed for your specific business needs.
          </p>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• Industry-specific metrics</li>
            <li>• Custom algorithms</li>
            <li>• Integration services</li>
            <li>• Training and support</li>
          </ul>
        </div>
      </div>

      <div className="bg-blue-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Unlock Your Data?</h2>
        <p className="text-gray-600 mb-6">
          Let's discuss how we can help you transform your data into actionable insights.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get Free Consultation
          </a>
          <a
            href="tel:+13024640950"
            className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
          >
            Call +1 302 464 0950
          </a>
        </div>
      </div>
    </div>
  );
}