import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Wrench, TrendingUp, Shield, Clock, CheckCircle, ArrowRight } from 'lucide-react';

const ZionAIPredictiveMaintenancePage: React.FC = () => {
  const features = [
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Predictive Analytics",
      description: "AI-powered algorithms predict equipment failures before they occur.",
      features: [
        "Machine Learning Models",
        "Sensor Data Analysis",
        "Failure Prediction",
        "Maintenance Scheduling"
      ]
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Performance Optimization",
      description: "Optimize equipment performance and reduce operational costs.",
      features: [
        "Efficiency Monitoring",
        "Cost Reduction",
        "Performance Metrics",
        "Optimization Recommendations"
      ]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Risk Management",
      description: "Identify and mitigate potential risks before they impact operations.",
      features: [
        "Risk Assessment",
        "Safety Monitoring",
        "Compliance Tracking",
        "Incident Prevention"
      ]
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Real-time Monitoring",
      description: "24/7 monitoring of equipment health and performance metrics.",
      features: [
        "Live Dashboards",
        "Alert Systems",
        "Status Updates",
        "Remote Monitoring"
      ]
    }
  ];

  const stats = [
    { value: "95%", label: "Prediction Accuracy" },
    { value: "60%", label: "Cost Reduction" },
    { value: "99.9%", label: "Uptime Guarantee" },
    { value: "24/7", label: "Monitoring" }
  ];

  return (
    <>
      <Helmet>
        <title>AI Predictive Maintenance - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered predictive maintenance solutions to optimize equipment performance and reduce downtime." />
        <meta name="keywords" content="predictive maintenance, AI maintenance, equipment monitoring, maintenance optimization" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium mb-8">
                <Wrench className="w-4 h-4 mr-2" />
                AI-Powered Maintenance
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Predictive Maintenance
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                  Powered by AI
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
                Transform your maintenance operations with AI-driven predictive analytics that prevent failures, 
                reduce costs, and maximize equipment uptime.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 font-semibold">
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </button>
                <button className="px-8 py-4 border border-white/30 text-white rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-black/20 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="w-6 h-6 text-purple-400" />
                  </div>
                  <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Key Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI-powered maintenance solutions designed to optimize your operations
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="text-purple-400 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.features.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-sm text-gray-300">
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

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600/20 to-cyan-600/20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Optimize Your Maintenance?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let our AI experts help you implement predictive maintenance solutions that reduce costs and improve reliability.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 font-semibold">
              Schedule Consultation
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default ZionAIPredictiveMaintenancePage;
