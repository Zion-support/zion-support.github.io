import React from 'react';
import { Helmet } from "react-helmet-async";
import { Activity, AlertTriangle, ArrowRight, CheckCircle, Zap, BarChart3 } from 'lucide-react';

const PerformanceMonitoringPage: React.FC = () => {
  const features = [
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Real-time Monitoring",
      description: "24/7 monitoring of your applications and infrastructure with instant alerts.",
      features: [
        "Live Dashboards",
        "Custom Metrics",
        "Alert Management",
        "Performance Tracking"
      ]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Analytics & Reporting",
      description: "Comprehensive analytics and detailed reports on system performance.",
      features: [
        "Performance Reports",
        "Trend Analysis",
        "Capacity Planning",
        "ROI Metrics"
      ]
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: "Proactive Alerts",
      description: "Smart alerting system that prevents issues before they impact users.",
      features: [
        "Threshold Alerts",
        "Predictive Analysis",
        "Escalation Rules",
        "Notification Channels"
      ]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance Optimization",
      description: "Continuous optimization recommendations to improve system performance.",
      features: [
        "Bottleneck Detection",
        "Resource Optimization",
        "Code Profiling",
        "Database Tuning"
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Performance Monitoring - Zion Tech Group</title>
        <meta name="description" content="Advanced performance monitoring solutions with real-time analytics, proactive alerts, and optimization recommendations for your applications." />
        <meta name="keywords" content="performance monitoring, application monitoring, system monitoring, performance analytics, alerting" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-8">
                <Activity className="w-4 h-4 mr-2" />
                Performance Monitoring
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Monitor & Optimize
                <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Performance
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Advanced performance monitoring solutions that provide real-time insights, 
                proactive alerts, and optimization recommendations for your applications and infrastructure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors">
                  Start Monitoring
                </button>
                <button className="px-8 py-3 border border-cyan-600 text-cyan-400 rounded-lg hover:bg-cyan-600 hover:text-white transition-colors">
                  View Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Comprehensive Monitoring Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors">
                  <div className="text-cyan-400 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="text-sm text-gray-400 flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Why Choose Our Monitoring Solutions?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Activity className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Real-time Insights
                </h3>
                <p className="text-gray-300">
                  Get instant visibility into your system performance with live dashboards and metrics.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Proactive Alerts
                </h3>
                <p className="text-gray-300">
                  Prevent issues before they impact users with intelligent alerting and predictive analysis.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Continuous Optimization
                </h3>
                <p className="text-gray-300">
                  Get actionable recommendations to improve performance and reduce costs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Optimize Your Performance?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start monitoring your applications and infrastructure with our advanced performance monitoring solutions.
            </p>
            <button className="px-8 py-3 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors inline-flex items-center">
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default PerformanceMonitoringPage;