import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Search, 
  BookOpen, 
  BarChart3, 
  Globe, 
  Users, 
  Zap,
  ArrowRight,
  CheckCircle,
  Star,
  Clock,
  Target,
  Database,
  Cpu,
  Shield,
  Lightbulb,
  TrendingUp,
  FileText,
  Code,
  Microscope
} from 'lucide-react';

export default function AIAutonomousResearchAssistant() {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Research',
      description: 'Advanced AI algorithms that autonomously conduct comprehensive research'
    },
    {
      icon: Search,
      title: 'Intelligent Discovery',
      description: 'Smart search and discovery across multiple data sources and databases'
    },
    {
      icon: BarChart3,
      title: 'Data Analysis',
      description: 'Automated data processing, analysis, and visualization'
    },
    {
      icon: Globe,
      title: 'Global Knowledge',
      description: 'Access to worldwide research databases and academic resources'
    }
  ];

  const capabilities = [
    {
      title: 'Literature Review',
      description: 'Automated comprehensive literature reviews across multiple domains',
      features: ['Citation analysis', 'Trend identification', 'Gap analysis', 'Meta-analysis']
    },
    {
      title: 'Data Mining',
      description: 'Intelligent extraction and processing of research data',
      features: ['Pattern recognition', 'Statistical analysis', 'Data validation', 'Insight generation']
    },
    {
      title: 'Hypothesis Generation',
      description: 'AI-driven hypothesis formation based on data patterns',
      features: ['Correlation analysis', 'Predictive modeling', 'Risk assessment', 'Opportunity identification']
    },
    {
      title: 'Research Synthesis',
      description: 'Automated synthesis of research findings and conclusions',
      features: ['Multi-source integration', 'Contradiction resolution', 'Evidence weighting', 'Conclusion generation']
    }
  ];

  const applications = [
    {
      industry: 'Academic Research',
      useCases: ['Literature reviews', 'Meta-analyses', 'Research gap identification', 'Citation analysis']
    },
    {
      industry: 'Healthcare',
      useCases: ['Medical research', 'Drug discovery', 'Clinical trial analysis', 'Patient data research']
    },
    {
      industry: 'Business Intelligence',
      useCases: ['Market research', 'Competitive analysis', 'Trend forecasting', 'Risk assessment']
    },
    {
      industry: 'Scientific Discovery',
      useCases: ['Experimental design', 'Data analysis', 'Hypothesis testing', 'Publication analysis']
    }
  ];

  const benefits = [
    {
      metric: '10x',
      label: 'Faster Research',
      description: 'Dramatically accelerate research timelines'
    },
    {
      metric: '24/7',
      label: 'Continuous Operation',
      description: 'Round-the-clock research capabilities'
    },
    {
      metric: '99%',
      label: 'Accuracy',
      description: 'High-precision research results'
    },
    {
      metric: '100+',
      label: 'Data Sources',
      description: 'Access to extensive research databases'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              AI Autonomous Research Assistant
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Revolutionize your research with AI-powered autonomous research capabilities. 
              Discover insights faster, analyze data intelligently, and accelerate breakthroughs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg text-white font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-200 transform hover:scale-105"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 border border-purple-500 text-purple-400 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-200"
              >
                Try Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Advanced AI Research Capabilities
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              State-of-the-art AI technology designed for comprehensive research automation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-purple-500 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Research Capabilities
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive research tools powered by artificial intelligence
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="p-8 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-purple-500 transition-all duration-300">
                <h3 className="text-2xl font-semibold mb-4">{capability.title}</h3>
                <p className="text-gray-400 mb-6">{capability.description}</p>
                <ul className="space-y-2">
                  {capability.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Research Performance Metrics
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Quantifiable improvements in research efficiency and effectiveness
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-purple-500 transition-all duration-300">
                <div className="text-4xl font-bold text-purple-400 mb-2">
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

      {/* Applications Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Versatile research assistant for diverse industries and domains
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {applications.map((application, index) => (
              <div key={index} className="p-6 bg-gray-800/50 rounded-xl border border-gray-700">
                <h3 className="text-2xl font-semibold mb-4 text-purple-400">{application.industry}</h3>
                <ul className="space-y-2">
                  {application.useCases.map((useCase, useCaseIndex) => (
                    <li key={useCaseIndex} className="flex items-center text-gray-300">
                      <Target className="w-4 h-4 text-purple-400 mr-3 flex-shrink-0" />
                      {useCase}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Research?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Experience the future of research with AI-powered autonomous assistance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg text-white font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-200 transform hover:scale-105"
            >
              Schedule Demo
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center px-8 py-4 border border-purple-500 text-purple-400 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-200"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}