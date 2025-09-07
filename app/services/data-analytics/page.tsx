import type { Metadata } from 'next';
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Data Analytics Solutions - Advanced Analytics & BI | Zion Tech Group',
  description: 'Advanced data analytics solutions including business intelligence, data visualization, predictive analytics, and data engineering. Turn data into actionable insights.',
  keywords: 'data analytics, business intelligence, data visualization, predictive analytics, data engineering',
};

export default function DataAnalyticsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Data Analytics Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Advanced data analytics solutions including business intelligence, data visualization, 
            predictive analytics, and data engineering. Turn data into actionable insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-semibold text-white mb-3">Business Intelligence</h3>
            <p className="text-gray-300 mb-4">Comprehensive BI solutions to transform raw data into actionable business insights.</p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>• Interactive dashboards</li>
              <li>• KPI tracking</li>
              <li>• Performance metrics</li>
              <li>• Executive reporting</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-4xl mb-4">📈</div>
            <h3 className="text-xl font-semibold text-white mb-3">Data Visualization</h3>
            <p className="text-gray-300 mb-4">Create compelling visualizations that make complex data easy to understand.</p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>• Interactive charts</li>
              <li>• Real-time dashboards</li>
              <li>• Custom visualizations</li>
              <li>• Mobile-responsive design</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-4xl mb-4">🔮</div>
            <h3 className="text-xl font-semibold text-white mb-3">Predictive Analytics</h3>
            <p className="text-gray-300 mb-4">Leverage machine learning to predict future trends and outcomes.</p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>• Forecasting models</li>
              <li>• Trend analysis</li>
              <li>• Risk assessment</li>
              <li>• Recommendation engines</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-4xl mb-4">⚙️</div>
            <h3 className="text-xl font-semibold text-white mb-3">Data Engineering</h3>
            <p className="text-gray-300 mb-4">Build robust data pipelines and infrastructure for reliable data processing.</p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>• ETL/ELT pipelines</li>
              <li>• Data warehousing</li>
              <li>• Real-time processing</li>
              <li>• Data quality management</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-white mb-3">Data Mining</h3>
            <p className="text-gray-300 mb-4">Discover hidden patterns and insights in your data using advanced mining techniques.</p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>• Pattern recognition</li>
              <li>• Clustering analysis</li>
              <li>• Association rules</li>
              <li>• Anomaly detection</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-4xl mb-4">📱</div>
            <h3 className="text-xl font-semibold text-white mb-3">Self-Service Analytics</h3>
            <p className="text-gray-300 mb-4">Empower users with self-service analytics tools and platforms.</p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>• Drag-and-drop interfaces</li>
              <li>• Natural language queries</li>
              <li>• Automated insights</li>
              <li>• Collaborative features</li>
            </ul>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Pricing Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 rounded-xl p-6 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
              <div className="text-4xl font-bold text-blue-400 mb-6">$2,500<span className="text-lg text-gray-300">/month</span></div>
              <ul className="space-y-3 text-gray-300 mb-8">
                <li>Basic dashboards</li>
                <li>Standard reporting</li>
                <li>Data visualization</li>
                <li>Email support</li>
                <li>Up to 5 users</li>
              </ul>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Get Started
              </button>
            </div>
            <div className="bg-white/5 rounded-xl p-6 text-center border-2 border-blue-500">
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="text-4xl font-bold text-blue-400 mb-6">$4,500<span className="text-lg text-gray-300">/month</span></div>
              <ul className="space-y-3 text-gray-300 mb-8">
                <li>Advanced analytics</li>
                <li>Predictive modeling</li>
                <li>Real-time dashboards</li>
                <li>Priority support</li>
                <li>Up to 25 users</li>
                <li>Custom integrations</li>
              </ul>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Most Popular
              </button>
            </div>
            <div className="bg-white/5 rounded-xl p-6 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-blue-400 mb-6">$8,500<span className="text-lg text-gray-300">/month</span></div>
              <ul className="space-y-3 text-gray-300 mb-8">
                <li>Full analytics suite</li>
                <li>Custom AI models</li>
                <li>Advanced data engineering</li>
                <li>24/7 dedicated support</li>
                <li>Unlimited users</li>
                <li>White-label solution</li>
              </ul>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Ready to Transform Your Data?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let our data analytics experts help you unlock the full potential of your data.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors">
              Start Your Project
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-slate-900 font-semibold py-4 px-8 rounded-lg transition-colors">
              Schedule Consultation
            </button>
          </div>
          <div className="mt-8 text-gray-400">
            <p>📧 kleber@ziontechgroup.com | 📞 +1 302 464 0950</p>
          </div>
        </div>
      </div>
    </div>
  );
}