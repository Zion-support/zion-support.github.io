'use client';
import React from 'react';
import { Search, BookOpen, Lightbulb, BarChart, Users, Target, Zap, CheckCircle, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIResearchAssistantPage: React.FC = () => {
  const features = [
    {
      icon: Search,
      title: 'Intelligent Research',
      description: 'AI-powered research that finds relevant information 10x faster than traditional methods.'
    },
    {
      icon: BookOpen,
      title: 'Document Analysis',
      description: 'Analyze and summarize complex documents, papers, and reports automatically.'
    },
    {
      icon: Lightbulb,
      title: 'Insight Generation',
      description: 'Generate actionable insights and recommendations from research data.'
    },
    {
      icon: BarChart,
      title: 'Data Visualization',
      description: 'Create compelling visualizations and reports from research findings.'
    }
  ];

  const benefits = [
    '10x faster research',
    '95% accuracy in findings',
    'Multi-source data integration',
    'Automated report generation',
    'Real-time collaboration',
    'ROI within 1 month'
  ];

  const useCases = [
    {
      title: 'Market Research',
      description: 'Conduct comprehensive market analysis and competitive intelligence research.',
      icon: Target
    },
    {
      title: 'Academic Research',
      description: 'Assist researchers with literature reviews and data analysis.',
      icon: BookOpen
    },
    {
      title: 'Business Intelligence',
      description: 'Gather and analyze business intelligence for strategic decision making.',
      icon: BarChart
    },
    {
      title: 'Legal Research',
      description: 'Find relevant case law and legal precedents for legal professionals.',
      icon: Search
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
              AI Research Assistant
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Accelerate your research with AI-powered intelligence. Our research assistant finds relevant 
              information 10x faster and delivers 95% accuracy in research findings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button inline-flex items-center justify-center px-8 py-4 text-lg"
              >
                Start Research
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="tel:+13024640950"
                className="cyber-button-secondary inline-flex items-center justify-center px-8 py-4 text-lg"
              >
                <Phone className="mr-2 w-5 h-5" />
                (302) 464-0950
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Advanced Research Features</h2>
            <p className="text-xl text-gray-300">Intelligent research powered by AI</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card p-6 text-center">
                <feature.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Research Assistant?</h2>
            <p className="text-xl text-gray-300">Proven technology that accelerates discovery</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-gray-300 text-lg">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Research Assistant Applications</h2>
            <p className="text-xl text-gray-300">Transform your research process with AI intelligence</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="cyber-card p-8">
                <useCase.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-2xl font-semibold text-white mb-4">{useCase.title}</h3>
                <p className="text-gray-300 text-lg">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Accelerate Research?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Start using AI to find information faster and generate insights that drive results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="cyber-button inline-flex items-center justify-center px-8 py-4 text-lg"
            >
              Start Researching
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="tel:+13024640950"
              className="cyber-button-secondary inline-flex items-center justify-center px-8 py-4 text-lg"
            >
              <Phone className="mr-2 w-5 h-5" />
              Call (302) 464-0950
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIResearchAssistantPage;