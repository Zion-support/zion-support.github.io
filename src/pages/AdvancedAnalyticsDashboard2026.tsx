import React, { useState } from 'react';
import { motion } from 'framer-motion';

const AdvancedAnalyticsDashboard2026: React.FC = () => {
  const [selectedMetric, setSelectedMetric] = useState('revenue');
  const [timeRange, setTimeRange] = useState('30d');

  const metrics = {
    revenue: { value: '$2.4M', change: '+23.5%', trend: 'up' },
    users: { value: '45.2K', change: '+18.2%', trend: 'up' },
    conversion: { value: '12.8%', change: '+5.3%', trend: 'up' },
    retention: { value: '89.4%', change: '+2.1%', trend: 'up' }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-zinc-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              📊 ADVANCED ANALYTICS 2026 • DATA-DRIVEN INSIGHTS
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Advanced Analytics Dashboard 2026
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Transform your data into actionable insights with our revolutionary analytics platform. 
              Experience real-time intelligence, predictive analytics, and AI-powered recommendations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Explore Analytics
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
                View Live Demo
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Interactive Dashboard */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">📊 Interactive Analytics Dashboard</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Experience real-time analytics with interactive visualizations and AI-powered insights
            </p>
          </motion.div>

          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-br from-slate-800/50 to-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-400/30">
              {/* Dashboard Controls */}
              <div className="flex flex-wrap justify-between items-center mb-8">
                <div className="flex space-x-4">
                  {Object.keys(metrics).map((metric) => (
                    <button
                      key={metric}
                      onClick={() => setSelectedMetric(metric)}
                      className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                        selectedMetric === metric
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                          : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                      }`}
                    >
                      {metric.charAt(0).toUpperCase() + metric.slice(1)}
                    </button>
                  ))}
                </div>
                <div className="flex space-x-2">
                  {['7d', '30d', '90d', '1y'].map((range) => (
                    <button
                      key={range}
                      onClick={() => setTimeRange(range)}
                      className={`px-3 py-1 rounded text-sm font-medium transition-all duration-300 ${
                        timeRange === range
                          ? 'bg-blue-600 text-white'
                          : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                      }`}
                    >
                      {range}
                    </button>
                  ))}
                </div>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {Object.entries(metrics).map(([key, metric]) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className={`p-6 rounded-lg ${
                      selectedMetric === key
                        ? 'bg-gradient-to-r from-blue-600/30 to-purple-600/30 border-2 border-blue-400'
                        : 'bg-slate-700/50 border border-slate-600'
                    }`}
                  >
                    <div className="text-sm text-slate-400 mb-1">
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                    </div>
                    <div className="text-3xl font-bold mb-2">{metric.value}</div>
                    <div className={`flex items-center text-sm ${
                      metric.trend === 'up' ? 'text-green-400' : 'text-red-400'
                    }`}>
                      <span className="mr-1">{metric.trend === 'up' ? '↗' : '↘'}</span>
                      {metric.change}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Chart Visualization */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-slate-800/50 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4">Performance Trends</h3>
                  <div className="h-64 flex items-end space-x-1">
                    {Array.from({ length: 30 }, (_, i) => (
                      <div
                        key={i}
                        className="bg-gradient-to-t from-blue-500 to-purple-500 rounded-sm flex-1"
                        style={{
                          height: `${Math.random() * 80 + 20}%`,
                          animationDelay: `${i * 0.1}s`
                        }}
                      />
                    ))}
                  </div>
                  <div className="text-center mt-4 text-slate-400 text-sm">
                    {timeRange} performance data
                  </div>
                </div>

                <div className="bg-slate-800/50 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4">AI Insights</h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-green-600/20 border border-green-400/30 rounded-lg">
                      <div className="text-green-400 font-semibold mb-1">🎯 Optimization Opportunity</div>
                      <div className="text-sm text-green-200">
                        Your conversion rate could increase by 15% with targeted A/B testing
                      </div>
                    </div>
                    <div className="p-4 bg-blue-600/20 border border-blue-400/30 rounded-lg">
                      <div className="text-blue-400 font-semibold mb-1">📈 Growth Trend</div>
                      <div className="text-sm text-blue-200">
                        Revenue is trending 23% higher than last month
                      </div>
                    </div>
                    <div className="p-4 bg-purple-600/20 border border-purple-400/30 rounded-lg">
                      <div className="text-purple-400 font-semibold mb-1">⚠️ Alert</div>
                      <div className="text-sm text-purple-200">
                        User engagement dropped 5% in the last 3 days
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Analytics Features */}
      <section className="py-20 bg-gradient-to-r from-slate-800/30 to-gray-800/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">🔬 Advanced Analytics Features</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Discover the powerful features that make our analytics platform the most advanced in the industry
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🤖",
                title: "AI-Powered Insights",
                description: "Machine learning algorithms that automatically identify patterns and provide actionable recommendations",
                features: ["Pattern Recognition", "Predictive Analytics", "Anomaly Detection", "Smart Alerts"]
              },
              {
                icon: "📊",
                title: "Real-time Visualization",
                description: "Interactive charts and graphs that update in real-time with your data",
                features: ["Live Dashboards", "Interactive Charts", "Custom Visualizations", "Real-time Updates"]
              },
              {
                icon: "🔮",
                title: "Predictive Modeling",
                description: "Advanced forecasting models that predict future trends and outcomes",
                features: ["Trend Forecasting", "Scenario Planning", "Risk Analysis", "Growth Projections"]
              },
              {
                icon: "🎯",
                title: "Custom Metrics",
                description: "Create and track custom KPIs that matter most to your business",
                features: ["Custom KPIs", "Goal Tracking", "Performance Metrics", "ROI Analysis"]
              },
              {
                icon: "📱",
                title: "Mobile Analytics",
                description: "Access your analytics anywhere with our mobile-optimized dashboard",
                features: ["Mobile Dashboard", "Push Notifications", "Offline Access", "Touch Optimization"]
              },
              {
                icon: "🔒",
                title: "Enterprise Security",
                description: "Bank-level security with role-based access control and data encryption",
                features: ["Role-based Access", "Data Encryption", "Audit Logs", "Compliance"]
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-700/50 to-gray-700/50 backdrop-blur-sm rounded-xl p-8 border border-slate-500/30 hover:scale-105 transition-all duration-300"
              >
                <div className="text-6xl mb-4 text-center">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-center">{feature.title}</h3>
                <p className="text-slate-200 mb-6 text-center">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.features.map((item, featureIndex) => (
                    <li key={featureIndex} className="text-slate-300 text-sm flex items-center">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Applications */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">🚀 Analytics Applications</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Powerful analytics solutions for every industry and use case
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: "E-commerce Analytics",
                description: "Comprehensive analytics for online retailers to optimize sales and customer experience",
                benefits: [
                  "Sales performance tracking",
                  "Customer behavior analysis",
                  "Inventory optimization",
                  "Conversion rate optimization"
                ],
                icon: "🛒"
              },
              {
                title: "Marketing Analytics",
                description: "Advanced marketing analytics to measure ROI and optimize campaigns",
                benefits: [
                  "Campaign performance",
                  "Attribution modeling",
                  "Customer journey analysis",
                  "Marketing ROI tracking"
                ],
                icon: "📈"
              },
              {
                title: "Financial Analytics",
                description: "Real-time financial analytics for better decision making and risk management",
                benefits: [
                  "Revenue forecasting",
                  "Expense tracking",
                  "Risk analysis",
                  "Profitability analysis"
                ],
                icon: "💰"
              },
              {
                title: "Operations Analytics",
                description: "Operational analytics to improve efficiency and reduce costs",
                benefits: [
                  "Process optimization",
                  "Resource utilization",
                  "Performance monitoring",
                  "Cost reduction analysis"
                ],
                icon: "⚙️"
              }
            ].map((app, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-700/50 to-gray-700/50 backdrop-blur-sm rounded-xl p-8 border border-slate-500/30 hover:scale-105 transition-all duration-300"
              >
                <div className="text-6xl mb-4 text-center">{app.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-center">{app.title}</h3>
                <p className="text-slate-200 mb-6 text-center">{app.description}</p>
                <ul className="space-y-3">
                  {app.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="text-slate-300 text-sm flex items-center">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gradient-to-r from-slate-800/30 to-gray-800/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">🏆 Analytics Success Stories</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              See how our analytics platform is transforming businesses and driving growth
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                company: "TechStart Inc",
                result: "300% Revenue Growth",
                description: "Used our analytics to identify high-value customers and optimize pricing, resulting in 300% revenue growth",
                icon: "📈"
              },
              {
                company: "RetailMax Corp",
                result: "50% Cost Reduction",
                description: "Implemented operational analytics to optimize inventory and reduce costs by 50% while improving efficiency",
                icon: "💰"
              },
              {
                company: "MarketingPro LLC",
                result: "400% ROI Improvement",
                description: "Leveraged marketing analytics to optimize campaigns and achieve 400% improvement in marketing ROI",
                icon: "🎯"
              }
            ].map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-700/50 to-gray-700/50 backdrop-blur-sm rounded-xl p-8 border border-slate-500/30 hover:scale-105 transition-all duration-300"
              >
                <div className="text-6xl mb-4 text-center">{story.icon}</div>
                <h3 className="text-2xl font-bold mb-2 text-center">{story.company}</h3>
                <div className="text-center mb-4">
                  <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-bold">
                    {story.result}
                  </span>
                </div>
                <p className="text-slate-200 text-center">{story.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Data?</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
              Start making data-driven decisions with our advanced analytics platform
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Start Analytics Journey
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold text-lg">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AdvancedAnalyticsDashboard2026;