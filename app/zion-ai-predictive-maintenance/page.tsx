import React from "react";
import { Helmet } from "react-helmet-async";
import { TrendingUp, Shield, Zap, CheckCircle, ArrowRight } from "lucide-react";

const ZionAIPredictiveMaintenancePage: React.FC = () => {
  const features = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Predictive Analytics",
      description: "Advanced AI algorithms predict equipment failures before they occur.",
      benefits: ["95% prediction accuracy", "Reduced downtime", "Cost savings", "Improved reliability"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Risk Assessment",
      description: "Comprehensive risk analysis and mitigation strategies for critical assets.",
      benefits: ["Real-time monitoring", "Risk scoring", "Alert systems", "Compliance tracking"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Automated Maintenance",
      description: "Intelligent scheduling and execution of maintenance tasks based on AI predictions.",
      benefits: ["Optimized schedules", "Resource allocation", "Work order automation", "Performance tracking"]
    }
  ];

  const stats = [
    { value: "95%", label: "Prediction Accuracy" },
    { value: "60%", label: "Cost Reduction" },
    { value: "40%", label: "Downtime Reduction" },
    { value: "24/7", label: "Monitoring" }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Predictive Maintenance - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered predictive maintenance solutions that prevent equipment failures and optimize maintenance schedules." />
        <meta name="keywords" content="predictive maintenance, AI maintenance, equipment monitoring, preventive maintenance, asset management" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-8">
                <Zap className="w-4 h-4 mr-2" />
                AI Predictive Maintenance
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Zion AI Predictive Maintenance
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Prevent equipment failures before they happen with our advanced AI-powered 
                predictive maintenance solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300">
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </button>
                <button className="border border-blue-400 text-blue-300 px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
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
              <h2 className="text-4xl font-bold text-white mb-4">Key Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive predictive maintenance solutions powered by advanced AI technology
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
                  <div className="text-blue-400 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-sm text-gray-400 flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-cyan-600">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Prevent Equipment Failures?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Start using AI-powered predictive maintenance to optimize your operations and reduce costs.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Monitoring
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default ZionAIPredictiveMaintenancePage;