import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Zap, Target, TrendingUp, Users, Globe, Shield } from 'lucide-react';

const AI2027BreakthroughContentShowcase = () => {
  const breakthroughContent = [
    {
      id: 'ai-2027-neural-synthesis',
      title: '🧠 AI 2027 Neural Synthesis Breakthrough',
      description: 'Revolutionary neural network synthesis achieving 99.7% accuracy in complex decision-making tasks',
      category: 'Neural Networks',
      readTime: '12 min read',
      difficulty: 'Advanced',
      roi: '5000%',
      tags: ['Neural Networks', 'Machine Learning', 'Breakthrough'],
      featured: true,
      new: true
    },
    {
      id: 'ai-2027-quantum-ai-fusion',
      title: '⚛️ Quantum-AI Fusion Revolution 2027',
      description: 'First successful integration of quantum computing with AI, delivering unprecedented processing power',
      category: 'Quantum Computing',
      readTime: '15 min read',
      difficulty: 'Expert',
      roi: '8000%',
      tags: ['Quantum Computing', 'AI Integration', 'Revolution'],
      featured: true,
      new: true
    },
    {
      id: 'ai-2027-autonomous-systems',
      title: '🤖 Autonomous Systems Mastery 2027',
      description: 'Complete guide to building self-managing AI systems that operate independently for months',
      category: 'Autonomous Systems',
      readTime: '20 min read',
      difficulty: 'Advanced',
      roi: '3000%',
      tags: ['Autonomous Systems', 'Self-Management', 'AI Operations'],
      featured: true,
      new: true
    },
    {
      id: 'ai-2027-enterprise-transformation',
      title: '🏢 Enterprise AI Transformation 2027',
      description: 'Case study: Fortune 500 company achieves 4000% ROI through comprehensive AI implementation',
      category: 'Case Study',
      readTime: '18 min read',
      difficulty: 'Intermediate',
      roi: '4000%',
      tags: ['Enterprise', 'ROI', 'Transformation'],
      featured: true,
      new: true
    },
    {
      id: 'ai-2027-ethical-ai-framework',
      title: '🛡️ Ethical AI Framework 2027',
      description: 'Comprehensive framework for building ethical, transparent, and accountable AI systems',
      category: 'Ethics & Governance',
      readTime: '14 min read',
      difficulty: 'Intermediate',
      roi: '2500%',
      tags: ['Ethics', 'Governance', 'Transparency'],
      featured: false,
      new: true
    },
    {
      id: 'ai-2027-edge-intelligence',
      title: '🌐 Edge Intelligence Revolution 2027',
      description: 'Advanced edge computing solutions delivering real-time AI processing at the network edge',
      category: 'Edge Computing',
      readTime: '16 min read',
      difficulty: 'Advanced',
      roi: '3500%',
      tags: ['Edge Computing', 'Real-time', 'Intelligence'],
      featured: false,
      new: true
    }
  ];

  const stats = [
    { label: 'Breakthrough Technologies', value: '12+', icon: Brain },
    { label: 'Average ROI', value: '4500%', icon: TrendingUp },
    { label: 'Enterprise Clients', value: '500+', icon: Users },
    { label: 'Global Impact', value: '50+ Countries', icon: Globe }
  ];

  return (
    <div className="py-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold mb-4">
            <Zap className="w-4 h-4 mr-2" />
            AI 2027 BREAKTHROUGH CONTENT
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Revolutionary AI Breakthroughs
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Coming in 2027
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the most advanced AI technologies and methodologies that will reshape industries 
            and create unprecedented opportunities for growth and innovation.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-100">
              <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Featured Content Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Featured Breakthrough Content
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {breakthroughContent.filter(item => item.featured).map((content) => (
              <div key={content.id} className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-xs font-semibold rounded-full">
                      {content.category}
                    </span>
                    {content.new && (
                      <span className="px-2 py-1 bg-red-500 text-white text-xs font-bold rounded-full animate-pulse">
                        NEW
                      </span>
                    )}
                  </div>
                  
                  <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {content.title}
                  </h4>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {content.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>{content.readTime}</span>
                      <span>•</span>
                      <span className="font-medium text-green-600">{content.roi} ROI</span>
                    </div>
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                      {content.difficulty}
                    </span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {content.tags.map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Link
                    to={`/blog/${content.id}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold group-hover:translate-x-1 transition-transform"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Content Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            More Breakthrough Content
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {breakthroughContent.filter(item => !item.featured).map((content) => (
              <div key={content.id} className="group bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded">
                      {content.category}
                    </span>
                    {content.new && (
                      <span className="px-2 py-1 bg-green-500 text-white text-xs font-bold rounded-full">
                        NEW
                      </span>
                    )}
                  </div>
                  
                  <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {content.title}
                  </h4>
                  
                  <p className="text-gray-600 mb-3 text-sm line-clamp-2">
                    {content.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3 text-xs text-gray-500">
                      <span>{content.readTime}</span>
                      <span>•</span>
                      <span className="font-medium text-green-600">{content.roi} ROI</span>
                    </div>
                    <Link
                      to={`/blog/${content.id}`}
                      className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                    >
                      Read →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Lead the AI Revolution?
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Get exclusive access to our complete AI 2027 breakthrough content library and 
            implementation guides. Transform your business with cutting-edge AI technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/ai-2027-breakthrough-mastery"
              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Target className="w-5 h-5 mr-2" />
              Access Master Guide
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              <Users className="w-5 h-5 mr-2" />
              Schedule Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AI2027BreakthroughContentShowcase;