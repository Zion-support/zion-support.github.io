import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Search, BookOpen, Zap, TrendingUp, Users, Globe, ArrowRight, Cpu, Database, Network } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const AIAutonomousResearchAssistant: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "Autonomous Research",
      description: "AI-powered research that operates independently to discover new insights and connections."
    },
    {
      icon: Search,
      title: "Intelligent Discovery",
      description: "Advanced search algorithms that find relevant information across multiple sources."
    },
    {
      icon: BookOpen,
      title: "Knowledge Synthesis",
      description: "Automated synthesis of research findings into comprehensive reports and insights."
    },
    {
      icon: Zap,
      title: "Real-time Updates",
      description: "Continuous monitoring and updates on research topics and emerging trends."
    }
  ];

  const capabilities = [
    {
      title: "Literature Review",
      description: "Automated comprehensive literature reviews across multiple databases and sources."
    },
    {
      title: "Data Analysis",
      description: "Advanced data analysis and statistical modeling for research insights."
    },
    {
      title: "Trend Identification",
      description: "AI-powered identification of emerging trends and research opportunities."
    },
    {
      title: "Collaboration Tools",
      description: "Seamless collaboration features for research teams and stakeholders."
    }
  ];

  const researchAreas = [
    "Scientific Research",
    "Market Analysis",
    "Academic Studies",
    "Technology Trends",
    "Healthcare Research",
    "Financial Analysis"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      <SEOHead 
        title="AI Autonomous Research Assistant - Zion Tech Group"
        description="Revolutionary AI-powered research assistant that autonomously conducts research, analyzes data, and generates insights across multiple domains."
        keywords="AI research assistant, autonomous research, research automation, AI analysis, research insights, automated research"
      />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="p-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full">
              <Brain className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            AI Autonomous Research Assistant
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your research capabilities with our revolutionary AI-powered assistant that autonomously 
            conducts research, analyzes data, and generates insights across multiple domains.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/services/ai-autonomous-systems"
              className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-500 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Revolutionary Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our platform combines cutting-edge AI with comprehensive research capabilities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300">
                <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg w-fit mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover the powerful capabilities that make our research assistant truly autonomous.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
                <h3 className="text-2xl font-semibold text-white mb-4">{capability.title}</h3>
                <p className="text-gray-300 text-lg">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Areas Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Research Domains
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our AI assistant covers a wide range of research areas and disciplines.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {researchAreas.map((area, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 text-center hover:border-cyan-500 transition-all duration-300">
                <h3 className="text-lg font-semibold text-white">{area}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Technology Stack
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Built with cutting-edge technologies for maximum research capabilities and reliability.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Cpu, name: "AI Processing" },
              { icon: Database, name: "Big Data" },
              { icon: Network, name: "Cloud Native" },
              { icon: Brain, name: "Machine Learning" }
            ].map((tech, index) => (
              <div key={index} className="text-center">
                <div className="p-4 bg-gray-800/50 rounded-xl mb-4 mx-auto w-fit">
                  <tech.icon className="h-8 w-8 text-cyan-500 mx-auto" />
                </div>
                <p className="text-white font-medium">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Revolutionize Your Research?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the AI-powered research revolution and transform your research capabilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
            >
              Schedule a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/services/ai-autonomous-systems"
              className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-500 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              Explore AI Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIAutonomousResearchAssistant;