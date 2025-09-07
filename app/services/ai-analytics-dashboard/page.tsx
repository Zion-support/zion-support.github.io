// eslint-disable-next-line react-refresh/only-export-components
export const metadata = {
  title: 'AI Analytics Dashboard | Zion Tech Group',
  description: 'Transform your data into actionable insights with our AI-powered analytics dashboard. Real-time business intelligence, predictive analytics, and custom reporting.',
  keywords: 'ai-analytics, business-intelligence, data-visualization, predictive-analytics, dashboard, reporting'
};

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI-Powered Analytics Dashboard
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Transform your raw data into actionable business insights with our intelligent analytics platform. 
            Get real-time dashboards, predictive analytics, and automated reporting that drives decision-making.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Request Demo
            </a>
          </div>
        </div>
        
        {/* Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-2xl font-bold text-white mb-4">Real-time Dashboards</h3>
            <p className="text-gray-300 mb-6">Interactive dashboards that update in real-time with customizable widgets and KPI tracking.</p>
            <ul className="space-y-2 text-gray-300">
              <li>• Live data streaming and updates</li>
              <li>• Customizable widget library</li>
              <li>• Drag-and-drop dashboard builder</li>
              <li>• Mobile-responsive design</li>
            </ul>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <div className="text-4xl mb-4">🔮</div>
            <h3 className="text-2xl font-bold text-white mb-4">Predictive Analytics</h3>
            <p className="text-gray-300 mb-6">AI-powered forecasting and trend analysis to predict future outcomes and identify opportunities.</p>
            <ul className="space-y-2 text-gray-300">
              <li>• Machine learning forecasting models</li>
              <li>• Trend analysis and pattern recognition</li>
              <li>• Anomaly detection and alerts</li>
              <li>• What-if scenario planning</li>
            </ul>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-2xl font-bold text-white mb-4">AI Insights Engine</h3>
            <p className="text-gray-300 mb-6">Automated insights generation that explains data patterns and suggests actionable recommendations.</p>
            <ul className="space-y-2 text-gray-300">
              <li>• Natural language insights</li>
              <li>• Automated report generation</li>
              <li>• Smart recommendations</li>
              <li>• Voice-activated queries</li>
            </ul>
          </div>
        </div>

        {/* Industry Solutions */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Industry-Specific Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-3xl mb-4">🛒</div>
              <h3 className="text-xl font-bold text-white mb-3">E-commerce</h3>
              <p className="text-gray-300 text-sm">Customer behavior analysis, conversion tracking, inventory optimization</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-3xl mb-4">🏥</div>
              <h3 className="text-xl font-bold text-white mb-3">Healthcare</h3>
              <p className="text-gray-300 text-sm">Patient outcomes, resource utilization, clinical decision support</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-3xl mb-4">🏦</div>
              <h3 className="text-xl font-bold text-white mb-3">Finance</h3>
              <p className="text-gray-300 text-sm">Risk assessment, fraud detection, portfolio optimization</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-3xl mb-4">🏭</div>
              <h3 className="text-xl font-bold text-white mb-3">Manufacturing</h3>
              <p className="text-gray-300 text-sm">Quality control, predictive maintenance, supply chain optimization</p>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Flexible Pricing Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
              <div className="text-4xl font-bold text-blue-400 mb-6">$499<span className="text-lg text-gray-300">/month</span></div>
              <ul className="space-y-3 text-gray-300 mb-8">
                <li>• Up to 5 data sources</li>
                <li>• 3 custom dashboards</li>
                <li>• Basic AI insights</li>
                <li>• Email support</li>
                <li>• Standard integrations</li>
                <li>• 1GB data storage</li>
              </ul>
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Analytics Starter Plan"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors block text-center"
              >
                Get Started
              </a>
            </div>

            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-8 border-2 border-blue-400">
              <div className="bg-blue-500 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="text-4xl font-bold text-blue-400 mb-6">$1,299<span className="text-lg text-gray-300">/month</span></div>
              <ul className="space-y-3 text-gray-300 mb-8">
                <li>• Up to 20 data sources</li>
                <li>• Unlimited dashboards</li>
                <li>• Advanced AI insights</li>
                <li>• Priority support</li>
                <li>• Custom integrations</li>
                <li>• 10GB data storage</li>
                <li>• Predictive analytics</li>
                <li>• API access</li>
              </ul>
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Analytics Professional Plan"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors block text-center"
              >
                Get Started
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-blue-400 mb-6">Custom<span className="text-lg text-gray-300"> pricing</span></div>
              <ul className="space-y-3 text-gray-300 mb-8">
                <li>• Unlimited data sources</li>
                <li>• White-label solution</li>
                <li>• Custom AI models</li>
                <li>• Dedicated support</li>
                <li>• On-premise deployment</li>
                <li>• Unlimited storage</li>
                <li>• Advanced security</li>
                <li>• SLA guarantees</li>
              </ul>
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Analytics Enterprise Plan"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors block text-center"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </div>

        {/* ROI Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Proven Business Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">35%</div>
              <div className="text-gray-300">Faster decision making</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">50%</div>
              <div className="text-gray-300">Reduction in reporting time</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">25%</div>
              <div className="text-gray-300">Increase in operational efficiency</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime guarantee</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Unlock Your Data's Potential?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join 200+ companies using our AI analytics platform to make data-driven decisions. 
            Schedule a free demo and see your data in action.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Email kleber@ziontechgroup.com
            </a>
          </div>
          <div className="mt-8 text-gray-400">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </div>
    </div>
  );
}