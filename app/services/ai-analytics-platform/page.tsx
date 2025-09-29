import Link from 'next/link';

export const metadata = {
  title: 'AI Analytics Platform | Real-time Data Insights & Predictive Analytics | Zion Tech Group',
  description: 'Transform your data into actionable insights with our AI-powered analytics platform. Real-time dashboards, predictive modeling, and automated reporting for data-driven decisions.',
  keywords: 'AI analytics platform, predictive analytics, data insights, business intelligence, real-time dashboards, machine learning',
};

export default function AIAnalyticsPlatformPage() {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                  New Service
                </span>
                <span className="text-sm text-gray-600">AI & Analytics</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                AI Analytics
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  {' '}Platform
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Transform raw data into powerful insights with our advanced AI analytics platform. 
                Get real-time dashboards, predictive analytics, and automated reporting that drive 
                data-driven business decisions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="#pricing"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
                >
                  View Pricing
                </Link>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 hover:text-white transition-colors"
                >
                  Call +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>30-day free trial</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>24/7 support</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>No setup fees</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white p-8 rounded-2xl shadow-2xl border border-gray-200">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">📊</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Live Dashboard Preview</h3>
                  <p className="text-gray-600">Real-time analytics in action</p>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <span className="text-sm text-gray-600">Revenue Growth</span>
                    <span className="font-bold text-blue-600">+24.5%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                    <span className="text-sm text-gray-600">Customer Satisfaction</span>
                    <span className="font-bold text-green-600">94.2%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                    <span className="text-sm text-gray-600">Predictive Accuracy</span>
                    <span className="font-bold text-purple-600">98.7%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                    <span className="text-sm text-gray-600">Cost Optimization</span>
                    <span className="font-bold text-orange-600">-18.3%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Powerful AI Analytics Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform combines cutting-edge AI with intuitive design to deliver 
              actionable insights that drive business growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
              <div className="text-4xl mb-4">🔮</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Predictive Analytics</h3>
              <p className="text-gray-600 mb-4">
                Forecast trends, identify opportunities, and predict outcomes with advanced machine learning algorithms
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Sales forecasting</li>
                <li>• Demand prediction</li>
                <li>• Risk assessment</li>
                <li>• Market trend analysis</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Real-time Dashboards</h3>
              <p className="text-gray-600 mb-4">
                Monitor key metrics and KPIs with customizable, real-time dashboards that update automatically
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Custom dashboard builder</li>
                <li>• Real-time data updates</li>
                <li>• Interactive visualizations</li>
                <li>• Mobile-responsive design</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">AI-Powered Insights</h3>
              <p className="text-gray-600 mb-4">
                Get intelligent recommendations and automated insights generated by advanced AI models
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Automated anomaly detection</li>
                <li>• Smart recommendations</li>
                <li>• Pattern recognition</li>
                <li>• Natural language insights</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Advanced Reporting</h3>
              <p className="text-gray-600 mb-4">
                Generate comprehensive reports with automated scheduling and customizable templates
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Automated report generation</li>
                <li>• Custom report templates</li>
                <li>• Scheduled delivery</li>
                <li>• Multi-format export</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-xl">
              <div className="text-4xl mb-4">🔗</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Data Integration</h3>
              <p className="text-gray-600 mb-4">
                Connect with 100+ data sources and seamlessly integrate your existing business systems
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• 100+ data connectors</li>
                <li>• API integrations</li>
                <li>• Real-time data sync</li>
                <li>• Data transformation tools</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Enterprise Security</h3>
              <p className="text-gray-600 mb-4">
                Bank-level security with role-based access control and comprehensive audit trails
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Role-based permissions</li>
                <li>• Data encryption</li>
                <li>• Audit logging</li>
                <li>• Compliance ready</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get started with AI analytics in just 3 simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Connect Your Data</h3>
              <p className="text-gray-600 mb-6">
                Integrate your data sources with our platform using our simple connectors or APIs. 
                No complex setup required.
              </p>
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <div className="text-sm text-gray-600 mb-2">Supported Sources:</div>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">CRM</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">ERP</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Database</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">APIs</span>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">AI Analysis</h3>
              <p className="text-gray-600 mb-6">
                Our AI algorithms automatically analyze your data, identify patterns, 
                and generate insights tailored to your business.
              </p>
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <div className="text-sm text-gray-600 mb-2">AI Capabilities:</div>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">ML Models</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Predictions</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Anomalies</span>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Get Insights</h3>
              <p className="text-gray-600 mb-6">
                Access your insights through interactive dashboards, automated reports, 
                and AI-powered recommendations.
              </p>
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <div className="text-sm text-gray-600 mb-2">Deliverables:</div>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">Dashboards</span>
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">Reports</span>
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">Alerts</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that fits your business needs. All plans include 30-day free trial.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border-2 border-gray-200 rounded-xl p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter</h3>
                <p className="text-gray-600 mb-4">Perfect for small businesses</p>
                <div className="text-4xl font-bold text-gray-900 mb-2">$199</div>
                <div className="text-gray-600">/month</div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Up to 5 data sources</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Basic dashboards</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Monthly reports</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Email support</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Up to 10 users</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="block w-full bg-gray-100 text-gray-900 text-center py-3 px-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
              >
                Start Free Trial
              </Link>
            </div>

            <div className="bg-blue-600 text-white rounded-xl p-8 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Professional</h3>
                <p className="opacity-90 mb-4">Ideal for growing companies</p>
                <div className="text-4xl font-bold mb-2">$499</div>
                <div className="opacity-90">/month</div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>Up to 25 data sources</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>Advanced dashboards</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>Predictive analytics</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>Weekly reports</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>Priority support</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>Up to 50 users</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>API access</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-600 text-center py-3 px-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Free Trial
              </Link>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
                <p className="text-gray-600 mb-4">For large organizations</p>
                <div className="text-4xl font-bold text-gray-900 mb-2">Custom</div>
                <div className="text-gray-600">pricing</div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Unlimited data sources</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Custom dashboards</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Advanced AI models</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Real-time reports</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Dedicated support</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Unlimited users</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Custom integrations</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>On-premise deployment</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="block w-full bg-gray-100 text-gray-900 text-center py-3 px-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Proven Results
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              See how our AI Analytics Platform is transforming businesses
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">85%</div>
              <div className="text-lg opacity-90">Faster Decision Making</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">60%</div>
              <div className="text-lg opacity-90">Cost Reduction</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-lg opacity-90">Prediction Accuracy</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">300%</div>
              <div className="text-lg opacity-90">ROI Improvement</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Data into Insights?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join hundreds of companies using our AI Analytics Platform to make data-driven decisions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg"
            >
              Start Your Free Trial
            </Link>
            <a
              href="tel:+13024640950"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 hover:text-white transition-colors"
            >
              Call +1 302 464 0950
            </a>
          </div>
          <div className="text-sm text-gray-500">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            <p>📧 kleber@ziontechgroup.com | 📞 +1 302 464 0950</p>
          </div>
        </div>
      </section>
    </div>
  );
}