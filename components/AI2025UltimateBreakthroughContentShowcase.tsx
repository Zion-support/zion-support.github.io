import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Users, Award, Clock, Shield } from 'lucide-react';

const AI2025UltimateBreakthroughContentShowcase: React.FC = () => {
  const breakthroughFeatures = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Neural Synthesis Processing",
      description: "Revolutionary brain-computer interface technology enabling direct neural processing",
      metrics: "10,000x faster processing",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Quantum Security Protocols",
      description: "Unbreakable quantum encryption protecting all AI operations",
      metrics: "100% security guarantee",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Real-time Autonomous Operations",
      description: "Self-managing AI systems that operate 24/7 without human intervention",
      metrics: "99.9% uptime achieved",
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Human-AI Collaboration",
      description: "Seamless integration between human creativity and AI capabilities",
      metrics: "500% productivity boost",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Industry-Leading Accuracy",
      description: "Unprecedented precision in decision-making and problem-solving",
      metrics: "99.9% accuracy rate",
      color: "from-indigo-500 to-blue-500"
    }
  ];

  const successMetrics = [
    { label: "ROI Increase", value: "5,000%", icon: <TrendingUp className="w-6 h-6" /> },
    { label: "Processing Speed", value: "10,000x", icon: <Clock className="w-6 h-6" /> },
    { label: "Accuracy Rate", value: "99.9%", icon: <Award className="w-6 h-6" /> },
    { label: "Client Satisfaction", value: "100%", icon: <Users className="w-6 h-6" /> }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            AI 2025 Ultimate Breakthrough
            <span className="block text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text">
              Content Showcase
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the revolutionary content and insights behind the most advanced AI breakthrough of 2025
          </p>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {successMetrics.map((metric, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-2xl p-6 text-center backdrop-blur-sm">
              <div className="flex justify-center mb-3">
                <div className="p-3 bg-blue-500/20 rounded-xl text-blue-400">
                  {metric.icon}
                </div>
              </div>
              <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
              <div className="text-gray-300 text-sm">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Breakthrough Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {breakthroughFeatures.map((feature, index) => (
            <div key={index} className="group">
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-2xl p-8 h-full hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <div className="text-blue-400 font-semibold text-sm">{feature.metrics}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Content Sections */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-500/30 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-6">Implementation Guide</h3>
            <p className="text-gray-300 mb-6">
              Step-by-step guide to implementing AI 2025 Ultimate Breakthrough in your organization. 
              Includes technical specifications, deployment strategies, and optimization techniques.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Neural architecture setup</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Quantum processing integration</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Autonomous operations configuration</span>
              </div>
            </div>
            <Link 
              to="/ai-2025-implementation-guide" 
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Access Implementation Guide
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 border border-green-500/30 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-6">Success Stories</h3>
            <p className="text-gray-300 mb-6">
              Real-world case studies showcasing how organizations achieved unprecedented results 
              with AI 2025 Ultimate Breakthrough technology.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Fortune 500 implementation</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Healthcare breakthrough results</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Manufacturing optimization</span>
              </div>
            </div>
            <Link 
              to="/ai-2025-success-stories" 
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              View Success Stories
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-purple-900/50 to-blue-900/50 border border-purple-500/30 rounded-2xl p-12 backdrop-blur-sm">
          <h3 className="text-3xl font-bold text-white mb-6">
            Ready to Experience the AI 2025 Ultimate Breakthrough?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the revolution and transform your organization with the most advanced AI technology available
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/ai-2025-ultimate-breakthrough" 
              className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Explore Full Breakthrough
            </Link>
            <Link 
              to="/contact" 
              className="bg-white/10 hover:bg-white/20 border border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 backdrop-blur-sm"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AI2025UltimateBreakthroughContentShowcase;