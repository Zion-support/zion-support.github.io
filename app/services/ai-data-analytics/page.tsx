export const metadata = {
  title: 'AI Data Analytics | Zion Tech Group',
  description: 'Professional AI data analytics services for your business needs.',
  keywords: 'ai-data-analytics, services, business, technology'
};

export default function AIDataAnalyticsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          AI Data Analytics
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Advanced data analytics powered by AI to uncover insights, trends, and opportunities in your business data.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
            <span className="text-2xl">📊</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Advanced Analytics
          </h3>
          <p className="text-gray-600">
            Sophisticated analytics algorithms to extract meaningful insights from complex datasets.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
            <span className="text-2xl">🎯</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Business Intelligence
          </h3>
          <p className="text-gray-600">
            Transform raw data into actionable business intelligence and strategic insights.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
            <span className="text-2xl">📈</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Real-time Dashboards
          </h3>
          <p className="text-gray-600">
            Interactive dashboards with real-time data visualization and monitoring.
          </p>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Ready to Unlock Your Data?
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Contact us today to discuss your data analytics needs and implement AI-powered solutions.
        </p>
        <a
          href="/contact"
          className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
        >
          Get Started Today
        </a>
      </div>
    </div>
  );
}