import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Data Analytics - Predictive Analytics & Business Intelligence | Zion Tech Group',
  description: 'Transform your data into actionable insights with AI-powered analytics. Get predictive modeling, real-time dashboards, and automated business intelligence.',
  keywords: 'AI data analytics, predictive modeling, business intelligence, data visualization, machine learning, real-time dashboards',
};

function FeatureItem({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="flex items-start space-x-4">
      <div className="text-3xl">{icon}</div>
      <div>
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
}

export default function AIDataAnalyticsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            AI Data Analytics
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your data into actionable insights with our AI-powered
            analytics platform. Get predictive modeling, real-time dashboards, and
            automated business intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">
              Analytics Capabilities
            </h2>
            <div className="space-y-6">
              <FeatureItem
                icon="🧠"
                title="Predictive Modeling"
                description="Machine learning models for forecasting, trend analysis, and predictive insights"
              />
              <FeatureItem
                icon="📊"
                title="Real-Time Dashboards"
                description="Interactive dashboards with live data visualization and customizable KPIs"
              />
              <FeatureItem
                icon="🔍"
                title="Data Mining"
                description="Advanced data mining techniques to discover hidden patterns and correlations"
              />
              <FeatureItem
                icon="📈"
                title="Business Intelligence"
                description="Automated BI reports with natural language insights and recommendations"
              />
              <FeatureItem
                icon="🔄"
                title="Data Integration"
                description="Connect to 100+ data sources including databases, APIs, and cloud platforms"
              />
              <FeatureItem
                icon="🎯"
                title="Anomaly Detection"
                description="Automated detection of unusual patterns and outliers in your data"
              />
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-white mb-8">
              Key Benefits
            </h2>
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Data-Driven Decisions</h3>
                <p className="text-gray-300">Make informed business decisions based on comprehensive data analysis and AI insights.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Predictive Insights</h3>
                <p className="text-gray-300">Anticipate trends and opportunities with advanced predictive modeling and forecasting.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Real-Time Monitoring</h3>
                <p className="text-gray-300">Monitor key metrics and KPIs in real-time with interactive dashboards and alerts.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Automated Reporting</h3>
                <p className="text-gray-300">Generate comprehensive reports automatically with natural language insights and recommendations.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Pricing Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 rounded-xl p-6 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
              <div className="text-4xl font-bold text-blue-400 mb-6">$499<span className="text-lg text-gray-300">/month</span></div>
              <ul className="space-y-3 text-gray-300 mb-8">
                <li>Up to 5 data sources</li>
                <li>Basic dashboards</li>
                <li>Standard analytics</li>
                <li>Email support</li>
                <li>Monthly reports</li>
              </ul>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Get Started
              </button>
            </div>
            <div className="bg-white/5 rounded-xl p-6 text-center border-2 border-blue-500">
              <h3 className="text-2xl font-bold text-white mb-4">Business</h3>
              <div className="text-4xl font-bold text-blue-400 mb-6">$899<span className="text-lg text-gray-300">/month</span></div>
              <ul className="space-y-3 text-gray-300 mb-8">
                <li>Up to 25 data sources</li>
                <li>Advanced dashboards</li>
                <li>Predictive modeling</li>
                <li>Real-time analytics</li>
                <li>Priority support</li>
                <li>Custom integrations</li>
              </ul>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Most Popular
              </button>
            </div>
            <div className="bg-white/5 rounded-xl p-6 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-blue-400 mb-6">$1,299<span className="text-lg text-gray-300">/month</span></div>
              <ul className="space-y-3 text-gray-300 mb-8">
                <li>Unlimited data sources</li>
                <li>Custom dashboards</li>
                <li>Advanced AI models</li>
                <li>Real-time monitoring</li>
                <li>24/7 dedicated support</li>
                <li>White-label solution</li>
              </ul>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Ready to Unlock Your Data&apos;s Potential?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join leading companies who trust our AI Data Analytics platform to make data-driven decisions and drive business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors">
              Start Free Trial
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-slate-900 font-semibold py-4 px-8 rounded-lg transition-colors">
              Schedule Demo
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