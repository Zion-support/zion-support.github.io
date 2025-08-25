import React from 'react';
import { Brain, Search, Zap, Target, ArrowRight, BookOpen, Globe, TrendingUp } from 'lucide-react';

const AIAutonomousResearchAssistant: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "Intelligent Research",
      description: "AI-powered research capabilities that understand context and generate comprehensive insights."
    },
    {
      icon: Search,
      title: "Multi-Source Analysis",
      description: "Automated analysis across academic papers, industry reports, and real-time data sources."
    },
    {
      icon: Zap,
      title: "Real-time Updates",
      description: "Continuous monitoring and updates on research topics and emerging trends."
    },
    {
      icon: Target,
      title: "Predictive Insights",
      description: "Forward-looking analysis and trend prediction based on comprehensive data analysis."
    }
  ];

  const benefits = [
    "Reduce research time by 70%",
    "Access to 100M+ research sources",
    "Real-time trend analysis",
    "Automated report generation"
  ];

  const researchAreas = [
    {
      title: "Market Research",
      description: "Comprehensive market analysis, competitor research, and industry trend identification."
    },
    {
      title: "Academic Research",
      description: "Literature reviews, citation analysis, and academic paper synthesis."
    },
    {
      title: "Technology Trends",
      description: "Emerging technology analysis, patent research, and innovation tracking."
    },
    {
      title: "Business Intelligence",
      description: "Industry reports, financial analysis, and strategic business insights."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium mb-6">
              <Brain className="w-4 h-4 mr-2" />
              AI Research Assistant
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-6">
              AI Autonomous Research Assistant
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your research capabilities with intelligent AI that works autonomously 
              to discover insights, analyze trends, and generate comprehensive reports.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-blue-500/30 text-blue-400 hover:bg-blue-500/20 rounded-lg font-semibold transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Platform Features</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Discover the intelligent research capabilities that revolutionize information discovery.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-gray-800/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Research Impact</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              See measurable improvements in your research efficiency and insight quality.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <p className="text-gray-300">{benefit}</p>
                </div>
              ))}
            </div>
            
            <div className="bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-xl p-8 border border-blue-500/20">
              <h3 className="text-2xl font-semibold mb-4">Performance Metrics</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Time Savings</span>
                  <span className="text-blue-400 font-semibold">70%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Source Coverage</span>
                  <span className="text-blue-400 font-semibold">100M+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Accuracy</span>
                  <span className="text-blue-400 font-semibold">95%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Research Areas</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Comprehensive coverage across all major research domains and industries.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {researchAreas.map((area, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-3 text-blue-400">{area.title}</h3>
                <p className="text-gray-400">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Revolutionize Your Research?</h2>
          <p className="text-xl text-gray-400 mb-8">
            Join the AI research revolution and discover insights faster than ever before.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              Get Started Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="px-8 py-4 border border-blue-500/30 text-blue-400 hover:bg-blue-500/20 rounded-lg font-semibold transition-all duration-300">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIAutonomousResearchAssistant;