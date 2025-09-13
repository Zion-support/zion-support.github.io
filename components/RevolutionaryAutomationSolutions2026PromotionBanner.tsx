import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Bot, Zap, Target, Users, Globe, Shield, Brain, TrendingUp } from 'lucide-react';

const RevolutionaryAutomationSolutions2026PromotionBanner: React.FC = () => {
  const automationFeatures = [
    { icon: Bot, title: "Process Automation", description: "10x efficiency" },
    { icon: Globe, title: "Autonomous Operations", description: "24/7 uptime" },
    { icon: Users, title: "Customer Experience", description: "98% satisfaction" },
    { icon: Target, title: "Resource Management", description: "90% optimization" },
    { icon: Shield, title: "Predictive Maintenance", description: "95% downtime reduction" },
    { icon: Brain, title: "Cognitive Decisions", description: "5,000% speed" }
  ];

  const stats = [
    { value: "10x", label: "Efficiency Gain" },
    { value: "99.9%", label: "Accuracy Rate" },
    { value: "80%", label: "Cost Reduction" },
    { value: "24/7", label: "Operations" }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-green-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.04"%3E%3Cpath d="M30 30c0-16.569-13.431-30-30-30s-30 13.431-30 30 13.431 30 30 30 30-13.431 30-30zm0 0c0 16.569 13.431 30 30 30s30-13.431 30-30-13.431-30-30-30-30 13.431-30 30z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          {/* Badge */}
          <div className="inline-flex items-center bg-gradient-to-r from-green-400 to-blue-500 text-black px-6 py-2 rounded-full text-sm font-bold mb-6">
            <Bot className="w-4 h-4 mr-2" />
            Revolutionary: Automation Solutions 2026
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Revolutionary Automation
            <span className="block bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Solutions 2026
            </span>
          </h2>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your business with our cutting-edge automation solutions that deliver 10x efficiency improvements, 99.9% accuracy, and 80% cost reduction. Experience the future of intelligent automation.
          </p>

          {/* Key Benefits */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold border border-white/20">
              10x Efficiency Improvement
            </span>
            <span className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold border border-white/20">
              99.9% Accuracy Rate
            </span>
            <span className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold border border-white/20">
              80% Cost Reduction
            </span>
            <span className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold border border-white/20">
              24/7 Autonomous Operations
            </span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-300">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Automation Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
          {automationFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="text-center group">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 group-hover:transform group-hover:scale-105">
                  <div className="bg-gradient-to-r from-green-500 to-blue-500 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-sm font-semibold text-white mb-2">
                    {feature.title}
                  </div>
                  <div className="text-xs text-gray-300">
                    {feature.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Automate Your Business?
            </h3>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join 10,000+ companies that have transformed their operations with our revolutionary automation solutions. Get a free assessment and discover your automation potential.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                to="/automation-solutions-2026"
                className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-xl"
              >
                Explore Automation Solutions
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/automation-assessment"
                className="bg-white/10 hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 border border-white/30 flex items-center justify-center"
              >
                Get Free Assessment
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                Free Assessment
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                ROI Guaranteed
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                Expert Implementation
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-orange-400 rounded-full mr-2"></div>
                24/7 Support
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-8">
          <p className="text-gray-400 text-sm">
            Trusted by 10,000+ companies worldwide for intelligent automation solutions
          </p>
        </div>
      </div>
    </section>
  );
};

export default RevolutionaryAutomationSolutions2026PromotionBanner;