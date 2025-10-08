import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIDataVisualizationPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
            AI Data Visualization
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
            Transform Data into Actionable Insights with AI
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Create stunning, interactive data visualizations that tell compelling stories. 
            Our AI automatically generates the most effective charts, graphs, and dashboards for your data.
          </p>
        </section>

        {/* Features Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Visualization Capabilities
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="cyber-card hologram-card">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-white mb-4">Interactive Dashboards</h3>
              <p className="text-gray-300 mb-4">
                Create dynamic, real-time dashboards that update automatically with your data.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Real-time data updates</li>
                <li>• Interactive filtering</li>
                <li>• Customizable layouts</li>
                <li>• Mobile responsive</li>
              </ul>
            </div>

            <div className="cyber-card hologram-card">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-bold text-white mb-4">AI-Generated Charts</h3>
              <p className="text-gray-300 mb-4">
                AI automatically selects the best chart types and designs for your specific data.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Smart chart selection</li>
                <li>• Color optimization</li>
                <li>• Layout optimization</li>
                <li>• Accessibility features</li>
              </ul>
            </div>

            <div className="cyber-card hologram-card">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold text-white mb-4">Predictive Analytics</h3>
              <p className="text-gray-300 mb-4">
                Visualize future trends and predictions with advanced forecasting models.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Trend forecasting</li>
                <li>• Anomaly detection</li>
                <li>• Scenario modeling</li>
                <li>• Confidence intervals</li>
              </ul>
            </div>

            <div className="cyber-card hologram-card">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-xl font-bold text-white mb-4">Geographic Visualizations</h3>
              <p className="text-gray-300 mb-4">
                Create stunning maps and geographic visualizations with location-based insights.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Interactive maps</li>
                <li>• Heat maps</li>
                <li>• Choropleth maps</li>
                <li>• Location analytics</li>
              </ul>
            </div>

            <div className="cyber-card hologram-card">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-white mb-4">Mobile Dashboards</h3>
              <p className="text-gray-300 mb-4">
                Responsive visualizations that look perfect on any device, anywhere.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Touch-friendly interactions</li>
                <li>• Adaptive layouts</li>
                <li>• Offline capabilities</li>
                <li>• Push notifications</li>
              </ul>
            </div>

            <div className="cyber-card hologram-card">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-bold text-white mb-4">Automated Reports</h3>
              <p className="text-gray-300 mb-4">
                Generate beautiful, automated reports with AI-powered insights and recommendations.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Scheduled reports</li>
                <li>• AI insights</li>
                <li>• Custom templates</li>
                <li>• Multi-format export</li>
              </ul>
            </div>
          </div>
        </section>

        {/* AI Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            AI-Powered Features
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="cyber-card hologram-card">
              <h3 className="text-2xl font-bold text-white mb-4">Smart Data Analysis</h3>
              <p className="text-gray-300 mb-6">
                AI automatically analyzes your data to identify patterns, trends, and insights you might miss.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>✓ Pattern recognition</li>
                <li>✓ Correlation analysis</li>
                <li>✓ Statistical significance</li>
                <li>✓ Insight generation</li>
              </ul>
            </div>
            <div className="cyber-card hologram-card">
              <h3 className="text-2xl font-bold text-white mb-4">Natural Language Queries</h3>
              <p className="text-gray-300 mb-6">
                Ask questions about your data in plain English and get instant visual answers.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>✓ Voice commands</li>
                <li>✓ Text queries</li>
                <li>✓ Context understanding</li>
                <li>✓ Follow-up questions</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Pricing Plans
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="cyber-card hologram-card">
              <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$99/month</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>✓ Up to 5 dashboards</li>
                <li>✓ 10 data sources</li>
                <li>✓ Basic chart types</li>
                <li>✓ Email support</li>
                <li>✓ Standard templates</li>
              </ul>
              <a href="/contact" className="cyber-button w-full text-center block">
                Get Started
              </a>
            </div>

            <div className="cyber-card hologram-card border-2 border-cyan-400">
              <div className="text-center mb-4">
                <span className="bg-cyan-400 text-black px-3 py-1 rounded-full text-sm font-bold">MOST POPULAR</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$299/month</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>✓ Up to 25 dashboards</li>
                <li>✓ 50 data sources</li>
                <li>✓ All chart types</li>
                <li>✓ Priority support</li>
                <li>✓ Custom templates</li>
                <li>✓ AI insights</li>
                <li>✓ API access</li>
              </ul>
              <a href="/contact" className="cyber-button w-full text-center block">
                Get Started
              </a>
            </div>

            <div className="cyber-card hologram-card">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$799/month</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>✓ Unlimited dashboards</li>
                <li>✓ Unlimited data sources</li>
                <li>✓ Advanced AI features</li>
                <li>✓ 24/7 dedicated support</li>
                <li>✓ White-label options</li>
                <li>✓ Custom development</li>
                <li>✓ On-premise deployment</li>
              </ul>
              <a href="/contact" className="cyber-button w-full text-center block">
                Contact Sales
              </a>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Why Choose Our AI Data Visualization?
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Proven Results</h3>
              <div className="space-y-6">
                <div className="cyber-card">
                  <div className="text-3xl font-bold text-green-400 mb-2">5x</div>
                  <div className="text-gray-300">Faster insight generation</div>
                </div>
                <div className="cyber-card">
                  <div className="text-3xl font-bold text-blue-400 mb-2">90%</div>
                  <div className="text-gray-300">Reduction in report creation time</div>
                </div>
                <div className="cyber-card">
                  <div className="text-3xl font-bold text-purple-400 mb-2">200%</div>
                  <div className="text-gray-300">Increase in data-driven decisions</div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Key Benefits</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3">✓</span>
                  <span>AI automatically selects optimal visualizations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3">✓</span>
                  <span>Interactive dashboards for better engagement</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3">✓</span>
                  <span>Real-time data updates and synchronization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3">✓</span>
                  <span>Natural language queries for easy exploration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3">✓</span>
                  <span>Mobile-optimized for anywhere access</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-slate-800 to-purple-900 rounded-2xl p-12 cyber-card">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
            Start Visualizing Your Data Today
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join 200+ companies using our AI data visualization to make better, faster decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="cyber-button"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="/contact"
              className="cyber-button"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Get Free Demo
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AIDataVisualizationPage;