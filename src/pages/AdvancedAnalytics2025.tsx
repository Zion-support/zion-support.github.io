import React from 'react';
import { motion } from 'framer-motion';
import Header from '../Header';
import Footer from '../Footer';

const AdvancedAnalytics2025: React.FC = () => {
  const features = [
    {
      title: "Real-time Analytics",
      description: "Instant insights from your data with real-time processing and visualization.",
      icon: "⚡",
      capabilities: ["Live Dashboards", "Stream Processing", "Real-time Alerts", "Instant Reports"]
    },
    {
      title: "Predictive Modeling",
      description: "Advanced machine learning models to forecast trends and outcomes.",
      icon: "🔮",
      capabilities: ["Trend Forecasting", "Risk Prediction", "Demand Planning", "Performance Optimization"]
    },
    {
      title: "Business Intelligence",
      description: "Comprehensive BI solutions with interactive dashboards and reports.",
      icon: "📊",
      capabilities: ["Interactive Dashboards", "Custom Reports", "Data Visualization", "KPI Monitoring"]
    },
    {
      title: "Data Visualization",
      description: "Beautiful, interactive visualizations that make data insights accessible.",
      icon: "📈",
      capabilities: ["Interactive Charts", "3D Visualizations", "Mobile Dashboards", "Export Options"]
    }
  ];

  const analyticsTypes = [
    {
      type: "Descriptive Analytics",
      description: "Understanding what happened in the past with comprehensive data analysis.",
      icon: "📋",
      examples: ["Sales Reports", "Performance Metrics", "Historical Trends", "Data Summaries"]
    },
    {
      type: "Diagnostic Analytics",
      description: "Analyzing why something happened with root cause analysis.",
      icon: "🔍",
      examples: ["Root Cause Analysis", "Drill-down Reports", "Correlation Studies", "Impact Assessment"]
    },
    {
      type: "Predictive Analytics",
      description: "Forecasting future outcomes using machine learning and statistical models.",
      icon: "🎯",
      examples: ["Demand Forecasting", "Risk Assessment", "Trend Prediction", "Performance Projections"]
    },
    {
      type: "Prescriptive Analytics",
      description: "Recommending optimal actions based on data insights and business rules.",
      icon: "💡",
      examples: ["Action Recommendations", "Optimization Suggestions", "Decision Support", "Automated Actions"]
    }
  ];

  const industries = [
    {
      industry: "E-commerce",
      useCase: "Customer Behavior Analysis",
      impact: "25% increase in conversion rates",
      description: "Analyze customer journey, preferences, and purchasing patterns to optimize marketing campaigns and improve conversion rates."
    },
    {
      industry: "Healthcare",
      useCase: "Patient Outcome Prediction",
      impact: "30% improvement in treatment outcomes",
      description: "Predict patient outcomes and identify high-risk cases using advanced analytics and machine learning models."
    },
    {
      industry: "Finance",
      useCase: "Fraud Detection & Risk Management",
      impact: "99.5% fraud detection accuracy",
      description: "Real-time fraud detection and risk assessment using advanced analytics and behavioral pattern recognition."
    },
    {
      industry: "Manufacturing",
      useCase: "Predictive Maintenance",
      impact: "40% reduction in downtime",
      description: "Predict equipment failures and optimize maintenance schedules using IoT data and predictive analytics."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full text-sm font-semibold mb-6">
                📊 NEW: Advanced Analytics 2025
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Advanced Analytics Platform
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Next-generation analytics with real-time insights, predictive modeling, 
                and business intelligence dashboards. Transform your data into actionable 
                business intelligence.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                  Start Analytics Journey
                </button>
                <button className="px-8 py-4 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                  View Demo
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Advanced Analytics Capabilities
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive analytics solutions that turn your data into strategic insights 
                and competitive advantages.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.capabilities.map((capability, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-500">
                        <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mr-2"></div>
                        {capability}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Analytics Types Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Types of Analytics
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From descriptive to prescriptive analytics, we cover the full spectrum 
                of data analysis capabilities.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {analyticsTypes.map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{type.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{type.type}</h3>
                  <p className="text-gray-600 mb-4">{type.description}</p>
                  <div className="space-y-2">
                    {type.examples.map((example, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-500">
                        <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mr-2"></div>
                        {example}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Applications */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Industry Applications
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See how advanced analytics is transforming businesses across different industries.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                      {industry.industry.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{industry.industry}</h3>
                      <p className="text-gray-500">{industry.useCase}</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-sm font-semibold rounded-full">
                      {industry.impact}
                    </span>
                  </div>
                  <p className="text-gray-600">{industry.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Analytics Technology Stack
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Built on cutting-edge technologies and platforms for maximum performance and scalability.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🗄️</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Data Processing</h3>
                <p className="text-gray-600">Apache Spark, Hadoop, Kafka for big data processing</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤖</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Machine Learning</h3>
                <p className="text-gray-600">TensorFlow, PyTorch, Scikit-learn for ML models</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Visualization</h3>
                <p className="text-gray-600">D3.js, Tableau, Power BI for data visualization</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Ready to Unlock Your Data's Potential?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                Transform your data into strategic insights and competitive advantages with 
                our advanced analytics platform. Get started today.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="px-8 py-4 bg-white text-red-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Start Analytics Journey
                </button>
                <button className="px-8 py-4 border border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  Schedule Demo
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AdvancedAnalytics2025;