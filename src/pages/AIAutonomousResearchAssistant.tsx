import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Search, BookOpen, Zap, TrendingUp, Users, Globe, ArrowRight, Cpu, Database, Network, Microscope, TestTube, Beaker } from 'lucide-react';

export default function AIAutonomousResearchAssistant() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Research",
      description: "Intelligent research automation that learns from your queries and provides comprehensive insights."
    },
    {
      icon: Search,
      title: "Advanced Search",
      description: "Deep search capabilities across multiple databases, papers, and research sources."
    },
    {
      icon: BookOpen,
      title: "Literature Review",
      description: "Automated literature review and analysis with intelligent summarization."
    },
    {
      icon: Zap,
      title: "Real-time Updates",
      description: "Stay current with the latest research developments and publications."
    },
    {
      icon: Database,
      title: "Data Integration",
      description: "Seamless integration with research databases and academic resources."
    },
    {
      icon: Network,
      title: "Collaboration Tools",
      description: "Enhanced collaboration features for research teams and academic partnerships."
    }
  ];

  const useCases = [
    {
      icon: Microscope,
      title: "Scientific Research",
      description: "Accelerate scientific discovery with AI-powered research assistance and data analysis."
    },
    {
      icon: TestTube,
      title: "Laboratory Research",
      description: "Streamline laboratory research processes with intelligent automation and insights."
    },
    {
      icon: Beaker,
      title: "Academic Research",
      description: "Enhance academic research productivity with comprehensive AI assistance."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            AI Autonomous Research Assistant
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Transform your research with AI-powered automation that discovers, analyzes, and synthesizes information 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get Started
            </Link>
            <Link 
              to="/request-quote" 
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-900 transition-colors"
            >
              Request Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Key Features</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how AI can revolutionize your research process with intelligent automation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <feature.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Use Cases</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how AI research assistance can be applied across different research domains.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <useCase.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Research?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact our team to discuss how AI research assistance can accelerate your discoveries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Contact Us
            </Link>
            <Link 
              to="/revolutionary-services-2025" 
              className="inline-flex items-center px-8 py-3 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}