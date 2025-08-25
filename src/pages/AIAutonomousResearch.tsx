import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Search, 
  BookOpen, 
  TrendingUp, 
  Users, 
  Globe, 
  Database, 
  Zap,
  CheckCircle,
  ArrowRight,
  Rocket,
  Microscope,
  Lightbulb,
  Target,
  BarChart3,
  Network
} from 'lucide-react';

export default function AIAutonomousResearch() {
  const features = [
    {
      icon: Brain,
      title: "Intelligent Research Automation",
      description: "AI-powered research systems that autonomously discover, analyze, and synthesize information from multiple sources."
    },
    {
      icon: Search,
      title: "Advanced Data Mining",
      description: "Deep learning algorithms that extract meaningful insights from vast datasets and research papers."
    },
    {
      icon: BookOpen,
      title: "Literature Review Automation",
      description: "Automated systematic literature reviews with intelligent citation analysis and trend identification."
    },
    {
      icon: TrendingUp,
      title: "Predictive Research Insights",
      description: "Forecast research trends and identify emerging opportunities in your field of study."
    },
    {
      icon: Users,
      title: "Collaborative Research",
      description: "AI-facilitated collaboration between researchers across different disciplines and institutions."
    },
    {
      icon: Globe,
      title: "Global Research Network",
      description: "Access to worldwide research databases and cross-cultural research collaboration."
    }
  ];

  const researchAreas = [
    {
      title: "Scientific Research",
      description: "Automated hypothesis generation, experimental design, and data analysis for scientific breakthroughs.",
      icon: Microscope
    },
    {
      title: "Market Research",
      description: "Intelligent market analysis, competitor research, and trend forecasting for business decisions.",
      icon: BarChart3
    },
    {
      title: "Academic Research",
      description: "Automated literature reviews, citation analysis, and research paper generation.",
      icon: BookOpen
    },
    {
      title: "Technology Research",
      description: "Emerging technology analysis, patent research, and innovation tracking.",
      icon: Lightbulb
    }
  ];

  const benefits = [
    "10x faster research completion",
    "Comprehensive data coverage",
    "Real-time insights and updates",
    "Reduced research bias",
    "24/7 autonomous operation",
    "Multi-language support"
  ];

  const useCases = [
    {
      title: "Pharmaceutical Research",
      description: "AI-powered drug discovery and clinical trial analysis."
    },
    {
      title: "Financial Research",
      description: "Market analysis, risk assessment, and investment opportunity identification."
    },
    {
      title: "Academic Publishing",
      description: "Automated literature reviews and research paper generation."
    },
    {
      title: "Competitive Intelligence",
      description: "Real-time competitor analysis and market positioning."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
              AI Autonomous Research
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Revolutionize your research capabilities with autonomous AI systems that discover, 
              analyze, and synthesize information 24/7, accelerating breakthroughs across all fields.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Researching
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Watch Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Autonomous Research Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI systems autonomously conduct comprehensive research across multiple domains, 
              providing insights that would take humans months or years to discover.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Areas Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Research Domains
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From scientific discovery to market intelligence, our AI research systems cover 
              every major research area with unprecedented depth and speed.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {researchAreas.map((area, index) => (
              <div
                key={index}
                className="bg-gray-700/50 rounded-xl p-6 border border-gray-600 hover:border-cyan-500 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mb-4">
                  <area.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{area.title}</h3>
                <p className="text-gray-300">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits and Use Cases */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Key Benefits</h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-cyan-500 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Use Cases</h2>
              <div className="space-y-4">
                {useCases.map((useCase, index) => (
                  <div key={index} className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                    <h4 className="text-lg font-semibold text-white mb-2">{useCase.title}</h4>
                    <p className="text-gray-300 text-sm">{useCase.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Research Technology
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built with cutting-edge AI and machine learning technologies for maximum research efficiency.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Brain, name: "Deep Learning", desc: "Neural networks" },
              { icon: Database, name: "Big Data", desc: "Real-time processing" },
              { icon: Network, name: "Cloud Computing", desc: "Scalable resources" },
              { icon: Zap, name: "Natural Language", desc: "Text understanding" }
            ].map((tech, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <tech.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{tech.name}</h3>
                <p className="text-gray-400 text-sm">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600/20 to-blue-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Accelerate Your Research?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the future of autonomous research with Zion Tech Group.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Start Researching
              <Rocket className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}