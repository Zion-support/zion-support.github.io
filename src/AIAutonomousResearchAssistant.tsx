import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Brain, 
  Search, 
  BookOpen, 
  Zap, 
  Database, 
  Globe, 
  ArrowRight
} from 'lucide-react';

const AIAutonomousResearchAssistant = () => {
  return (
    <>
      <Helmet>
        <title>AI Autonomous Research Assistant - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered research assistant that autonomously conducts research, analyzes data, and generates insights across multiple domains." />
        <meta name="keywords" content="AI research,autonomous research,research assistant,data analysis,AI insights" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="pt-32 pb-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-800/20 to-blue-800/20"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-purple-500/20 rounded-full px-6 py-3 mb-6">
                <Brain className="w-5 h-5 text-purple-400" />
                <span className="text-purple-300 font-medium">AI Autonomous Research Assistant</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Autonomous{' '}
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent block">
                  Research Intelligence
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Advanced AI-powered research assistant that autonomously conducts research, 
                analyzes data, and generates insights across multiple domains with unprecedented accuracy and speed.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Research Capabilities</h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Comprehensive research tools powered by advanced AI algorithms
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: Search,
                  title: 'Intelligent Search',
                  description: 'Advanced search algorithms that find relevant information across multiple sources and databases'
                },
                {
                  icon: BookOpen,
                  title: 'Literature Review',
                  description: 'Automated literature review and analysis of academic papers, journals, and research publications'
                },
                {
                  icon: Database,
                  title: 'Data Analysis',
                  description: 'Comprehensive data analysis and statistical modeling for research insights and conclusions'
                },
                {
                  icon: Brain,
                  title: 'Pattern Recognition',
                  description: 'AI-powered pattern recognition to identify trends, correlations, and hidden insights in data'
                },
                {
                  icon: Globe,
                  title: 'Multi-Domain Research',
                  description: 'Cross-domain research capabilities spanning science, technology, business, and social sciences'
                },
                {
                  icon: Zap,
                  title: 'Real-time Processing',
                  description: 'High-speed processing of large datasets and real-time research updates'
                }
              ].map((capability, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-colors">
                  <capability.icon className="w-12 h-12 text-purple-400 mb-6" />
                  <h3 className="text-xl font-semibold text-white mb-4">{capability.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{capability.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Research Applications</h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Transform your research process with AI-powered automation
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Academic Research',
                  description: 'Automated literature reviews, hypothesis generation, and research paper analysis for academic institutions.'
                },
                {
                  title: 'Market Research',
                  description: 'Comprehensive market analysis, competitor research, and trend identification for business intelligence.'
                },
                {
                  title: 'Scientific Discovery',
                  description: 'AI-assisted scientific research, data analysis, and hypothesis testing across various scientific disciplines.'
                },
                {
                  title: 'Policy Research',
                  description: 'Policy analysis, impact assessment, and evidence-based research for government and organizations.'
                }
              ].map((application, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                  <h3 className="text-xl font-semibold text-white mb-4">{application.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{application.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Revolutionize Your Research?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get started with our AI Autonomous Research Assistant and accelerate your research process today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center gap-2 justify-center">
                Start Research Trial
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-purple-500 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-500/10 transition-all">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIAutonomousResearchAssistant;