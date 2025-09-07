export const metadata = {
  title: 'Data Analytics | Zion Tech Group',
  description: 'Transform your data into actionable insights with our advanced analytics solutions.',
  keywords: 'data analytics, business intelligence, data visualization, insights'
};

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Data Analytics
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your data into actionable insights. Advanced analytics solutions that drive business growth and informed decision-making.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Business Intelligence</h3>
            <p className="text-gray-300 mb-6">Comprehensive dashboards and reports that turn data into business insights.</p>
            <ul className="space-y-2 text-gray-300">
              <li>• Interactive dashboards</li>
              <li>• Real-time reporting</li>
              <li>• KPI tracking</li>
              <li>• Trend analysis</li>
            </ul>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Data Visualization</h3>
            <p className="text-gray-300 mb-6">Beautiful, interactive charts and graphs that make complex data easy to understand.</p>
            <ul className="space-y-2 text-gray-300">
              <li>• Custom visualizations</li>
              <li>• Interactive charts</li>
              <li>• Mobile-responsive design</li>
              <li>• Export capabilities</li>
            </ul>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Predictive Analytics</h3>
            <p className="text-gray-300 mb-6">AI-powered predictions that help you anticipate trends and make proactive decisions.</p>
            <ul className="space-y-2 text-gray-300">
              <li>• Machine learning models</li>
              <li>• Forecasting</li>
              <li>• Risk assessment</li>
              <li>• Optimization recommendations</li>
            </ul>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Unlock Your Data&apos;s Potential?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Let our data analytics experts help you transform raw data into strategic insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              Get Started
            </a>
            <a
              href="tel:+13024640950"
              className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-colors"
            >
              Call +1 302 464 0950
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}