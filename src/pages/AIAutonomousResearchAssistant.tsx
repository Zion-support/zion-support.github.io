import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Search, 
  BookOpen, 
  Zap, 
  Globe, 
  BarChart3, 
  Cpu, 
  Database,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Clock,
  Award,
  Lightbulb,
  Target,
  Shield
} from 'lucide-react';

const AIAutonomousResearchAssistant = () => {
  const features = [
    {
      icon: Brain,
      title: "Autonomous Research",
      description: "AI-powered research that works independently to discover insights and patterns"
    },
    {
      icon: Search,
      title: "Intelligent Discovery",
      description: "Advanced algorithms that find relevant information across multiple data sources"
    },
    {
      icon: BookOpen,
      title: "Knowledge Synthesis",
      description: "Automatically synthesize information from multiple sources into coherent insights"
    },
    {
      icon: Zap,
      title: "Real-time Analysis",
      description: "Instant analysis and insights as new data becomes available"
    },
    {
      icon: Globe,
      title: "Multi-source Integration",
      description: "Connect to academic databases, research papers, and industry reports"
    },
    {
      icon: BarChart3,
      title: "Data Visualization",
      description: "Transform complex research data into clear, actionable visualizations"
    }
  ];

  const capabilities = [
    {
      title: "Academic Research",
      description: "Access to peer-reviewed journals, research papers, and academic databases",
      benefits: ["Literature review automation", "Citation management", "Research gap identification"]
    },
    {
      title: "Market Intelligence",
      description: "Real-time market analysis and competitive intelligence gathering",
      benefits: ["Trend analysis", "Competitor monitoring", "Market opportunity identification"]
    },
    {
      title: "Scientific Discovery",
      description: "AI-powered hypothesis generation and experimental design",
      benefits: ["Pattern recognition", "Hypothesis testing", "Experimental optimization"]
    },
    {
      title: "Patent Analysis",
      description: "Comprehensive patent research and intellectual property analysis",
      benefits: ["Patent landscape mapping", "Prior art search", "Innovation tracking"]
    }
  ];

  const benefits = [
    "10x faster research completion",
    "24/7 autonomous operation",
    "Multi-language support",
    "Real-time updates and alerts",
    "Comprehensive source verification",
    "Customizable research parameters"
  ];

  const useCases = [
    {
      title: "R&D Departments",
      description: "Accelerate product development with comprehensive research insights"
    },
    {
      title: "Academic Institutions",
      description: "Enhance research capabilities and publication quality"
    },
    {
      title: "Consulting Firms",
      description: "Deliver deeper insights to clients with comprehensive research"
    },
    {
      title: "Legal Teams",
      description: "Comprehensive case research and precedent analysis"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Brain className="w-12 h-12 text-cyan-400 mr-3" />
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                AI Autonomous Research Assistant
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Revolutionize your research process with our AI-powered autonomous research assistant. 
              Discover insights faster, analyze deeper, and stay ahead of the competition with 
              intelligent research automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                View All Services
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
              Advanced AI Research Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI research assistant combines cutting-edge artificial intelligence with 
              comprehensive data access to deliver unprecedented research capabilities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Research Domains & Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive research coverage across multiple domains with specialized AI capabilities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700"
              >
                <h3 className="text-2xl font-semibold text-white mb-4">{capability.title}</h3>
                <p className="text-gray-300 mb-6">{capability.description}</p>
                <ul className="space-y-2">
                  {capability.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Key Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your research process with AI-powered automation and insights.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700"
              >
                <Star className="w-6 h-6 text-cyan-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Who Benefits?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI research assistant is designed for organizations that need comprehensive, 
              fast, and accurate research capabilities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700"
              >
                <h3 className="text-2xl font-semibold text-white mb-4">{useCase.title}</h3>
                <p className="text-gray-300">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/50 to-purple-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Research?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the research revolution with AI-powered autonomous research capabilities. 
            Our expert team is ready to help you implement cutting-edge research automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Schedule Demo
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              Explore All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIAutonomousResearchAssistant;