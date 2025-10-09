'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Search, BookOpen, Lightbulb, FileText, CheckCircle, ArrowRight, Star, Users, Award, Zap } from 'lucide-react';

const AIResearchAssistantPage: React.FC = () => {
  const features = [
    {
      icon: Search,
      title: 'Intelligent Search',
      description: 'Find relevant information across multiple sources with AI-powered semantic search.'
    },
    {
      icon: BookOpen,
      title: 'Literature Review',
      description: 'Automatically analyze and summarize research papers, articles, and publications.'
    },
    {
      icon: Lightbulb,
      title: 'Insight Generation',
      description: 'Generate new insights and connections between different research topics and findings.'
    },
    {
      icon: FileText,
      title: 'Report Generation',
      description: 'Create comprehensive research reports and summaries with citations and references.'
    }
  ];

  const applications = [
    {
      title: 'Academic Research',
      description: 'Accelerate literature reviews and hypothesis generation for academic papers.',
      efficiency: '80%',
      icon: '🎓'
    },
    {
      title: 'Market Research',
      description: 'Analyze market trends, competitor intelligence, and industry reports.',
      efficiency: '75%',
      icon: '📊'
    },
    {
      title: 'Legal Research',
      description: 'Find relevant case law, statutes, and legal precedents quickly and accurately.',
      efficiency: '85%',
      icon: '⚖️'
    },
    {
      title: 'Medical Research',
      description: 'Analyze clinical studies, drug interactions, and treatment protocols.',
      efficiency: '90%',
      icon: '🏥'
    },
    {
      title: 'Business Intelligence',
      description: 'Research market opportunities, customer needs, and competitive landscape.',
      efficiency: '70%',
      icon: '💼'
    },
    {
      title: 'Patent Research',
      description: 'Search and analyze patent databases for innovation and IP protection.',
      efficiency: '88%',
      icon: '🔬'
    }
  ];

  const benefits = [
    'Reduce research time by up to 80%',
    'Improve research quality and accuracy',
    'Discover hidden connections and insights',
    'Generate comprehensive reports automatically',
    'Stay updated with latest research trends',
    'Collaborate effectively with research teams'
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
                AI Research Assistant
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Accelerate your research with our intelligent AI research assistant. 
                Find insights, analyze data, and generate reports faster than ever before.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="cyber-button px-8 py-4 text-lg">
                  Start Researching
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400/10 transition-colors">
                  View Demo
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">80%</div>
                <div className="text-gray-300">Time Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">95%</div>
                <div className="text-gray-300">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">1000+</div>
                <div className="text-gray-300">Sources</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">24/7</div>
                <div className="text-gray-300">Available</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Advanced Research Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI research assistant combines natural language processing, machine learning, 
                and knowledge graphs to deliver comprehensive research capabilities.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 hover:bg-slate-800/70 transition-colors">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Research Assistant Applications</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From academic research to business intelligence, our AI research assistant 
                accelerates discovery across all fields and industries.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {applications.map((app, index) => (
                <div key={index} className="bg-slate-900/50 rounded-xl p-6 hover:bg-slate-900/70 transition-colors">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl">{app.icon}</div>
                    <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-semibold">
                      {app.efficiency} efficiency
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{app.title}</h3>
                  <p className="text-gray-300">{app.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our Research Assistant?</h2>
                <p className="text-xl text-gray-300 mb-8">
                  Our AI research assistant delivers comprehensive research capabilities 
                  that accelerate discovery and improve research quality.
                </p>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Research Performance</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Time Reduction:</span>
                    <span className="text-green-400 font-semibold">80%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Accuracy Rate:</span>
                    <span className="text-green-400 font-semibold">95%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Sources Covered:</span>
                    <span className="text-green-400 font-semibold">1000+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Report Quality:</span>
                    <span className="text-green-400 font-semibold">98%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-cyan-600/20 to-purple-600/20">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Accelerate Your Research Today</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join researchers worldwide who trust our AI assistant to accelerate discovery and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button px-8 py-4 text-lg">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400/10 transition-colors">
                Request Demo
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AIResearchAssistantPage;