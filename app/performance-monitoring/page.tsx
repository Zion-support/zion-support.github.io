import React from 'react';
import { Helmet } from "react-helmet-async";
import { Activity, AlertTriangle, ArrowRight, CheckCircle, Zap, BarChart3 } from 'lucide-react';

const PerformanceMonitoringPage: React.FC = () => {
  const features = [
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Real-time Monitoring",
      description: "24/7 monitoring of your applications and infrastructure with instant alerts.",
      features: ["Live Dashboards", "Custom Metrics", "Alert Management", "Performance Tracking"]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Analytics & Reporting",
      description: "Comprehensive analytics and detailed reports on system performance.",
      features: ["Performance Reports", "Trend Analysis", "Capacity Planning", "ROI Metrics"]
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: "Proactive Alerts",
      description: "Smart alerting system that prevents issues before they impact users.",
      features: ["Threshold Alerts", "Predictive Analysis", "Escalation Rules", "Notification Channels"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance Optimization",
      description: "Continuous optimization recommendations to improve system performance.",
      features: ["Bottleneck Detection", "Resource Optimization", "Code Profiling", "Database Tuning"]
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
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Performance Monitoring
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Advanced monitoring solutions that provide real-time insights into your application 
                performance, helping you maintain optimal system health and user experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                  Start Free Trial
                </button>
                <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Key Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive monitoring capabilities designed for modern applications
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="text-cyan-400 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.features.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Optimize Your Performance?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Get started with our performance monitoring solutions and ensure your applications run at peak efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                  Start Free Trial
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PerformanceMonitoringPage;