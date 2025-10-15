import React from "react";
import { Helmet } from "react-helmet-async";
import { TrendingUp, Shield, Zap, CheckCircle } from "lucide-react";

const ZionAIPredictiveMaintenancePage: React.FC = () => {
  const features = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Predictive Analytics",
      description: "AI-powered predictions to prevent equipment failures before they happen.",
      features: ["Machine Learning Models", "Real-time Analysis", "Failure Prediction", "Risk Assessment"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Asset Protection",
      description: "Protect your valuable assets with proactive maintenance strategies.",
      features: ["Asset Monitoring", "Condition Assessment", "Maintenance Scheduling", "Cost Optimization"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Smart Automation",
      description: "Automated maintenance workflows that adapt to your equipment needs.",
      features: ["Automated Alerts", "Workflow Automation", "Resource Optimization", "Performance Tracking"]
    }
  ];

  const stats = [
    { value: "95%", label: "Prediction Accuracy" },
    { value: "60%", label: "Cost Reduction" },
    { value: "40%", label: "Downtime Reduction" },
    { value: "24/7", label: "Monitoring" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Helmet>
        <title>Zion AI Predictive Maintenance - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered predictive maintenance solutions to prevent equipment failures and optimize maintenance schedules." />
        <meta name="keywords" content="predictive maintenance, AI maintenance, equipment monitoring, asset management, maintenance optimization" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Zion AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Predictive Maintenance</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Prevent equipment failures before they happen with our advanced AI-powered predictive maintenance solutions.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-6 h-6 text-blue-400" />
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Key Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive predictive maintenance solutions powered by advanced AI technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="text-blue-400 mr-3">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.features.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ZionAIPredictiveMaintenancePage;