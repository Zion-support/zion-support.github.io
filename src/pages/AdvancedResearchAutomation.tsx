import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Zap, BarChart3, Globe, Users, Database, Settings, ArrowRight, Search, BookOpen, Lightbulb, Target } from 'lucide-react';

const AdvancedResearchAutomation: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Research",
      description: "Advanced AI algorithms for automated research and data analysis."
    },
    {
      icon: Search,
      title: "Intelligent Search",
      description: "Smart search algorithms that understand context and intent."
    },
    {
      icon: BookOpen,
      title: "Literature Review",
      description: "Automated literature review and citation management."
    },
    {
      icon: BarChart3,
      title: "Data Analytics",
      description: "Advanced data analytics and visualization capabilities."
    },
    {
      icon: Lightbulb,
      title: "Insight Generation",
      description: "AI-generated insights and research recommendations."
    },
    {
      icon: Target,
      title: "Research Planning",
      description: "Intelligent research planning and methodology suggestions."
    }
  ];

  const researchAreas = [
    {
      title: "Scientific Research",
      description: "Automated research workflows for scientific publications and studies."
    },
    {
      title: "Market Research",
      description: "Intelligent market analysis and competitive intelligence gathering."
    },
    {
      title: "Academic Research",
      description: "Academic research automation for universities and research institutions."
    },
    {
      title: "Business Intelligence",
      description: "Automated business research and competitive analysis."
    },
    {
      title: "Medical Research",
      description: "Healthcare research automation and clinical trial analysis."
    },
    {
      title: "Technology Research",
      description: "Emerging technology research and trend analysis."
    }
  ];

  const benefits = [
    {
      metric: "10x",
      label: "Research Speed",
      description: "Dramatically faster research completion"
    },
    {
      metric: "90%",
      label: "Accuracy",
      description: "High accuracy in research findings"
    },
    {
      metric: "24/7",
      label: "Availability",
      description: "Continuous research capabilities"
    },
    {
      metric: "100%",
      label: "Coverage",
      description: "Comprehensive research coverage"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 quantum-particles"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-cyan-500/20 border border-cyan-500/50 rounded-full text-cyan-400 text-sm font-medium mb-6">
              <Brain className="w-4 h-4 mr-2" />
              Advanced Research Automation
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
              Advanced Research
              <br />
              <span className="text-white">Automation</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your research process with AI-powered automation, intelligent search, 
              and advanced analytics. Accelerate discovery and gain deeper insights faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Automate Your Research
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 font-semibold rounded-lg transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Automation Features
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Advanced capabilities for intelligent research automation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Areas Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Research Applications
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive research automation across multiple domains
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {researchAreas.map((area, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-3">
                  {area.title}
                </h3>
                <p className="text-gray-400">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Research Benefits
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Key advantages of our research automation platform
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="text-4xl font-bold text-cyan-400 mb-2">
                  {benefit.metric}
                </div>
                <div className="text-lg font-semibold text-white mb-2">
                  {benefit.label}
                </div>
                <p className="text-gray-400 text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Automate Your Research?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Our research automation experts can help you accelerate your research process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Start Automation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-4 border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 font-semibold rounded-lg transition-all duration-300"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdvancedResearchAutomation;