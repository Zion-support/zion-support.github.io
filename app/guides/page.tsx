import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { BookOpen, Code, Database, Cloud, Shield, Zap, Brain, Target } from 'lucide-react';

const GuidesPage: React.FC = () => {
  const guides = [
    {
      title: 'AI 2026 Implementation Roadmap',
      description: 'Comprehensive guide to implementing AI solutions in your enterprise for 2026',
      url: '/guides/ai-2026-implementation-roadmap',
      category: 'AI Implementation',
      icon: Brain,
      difficulty: 'Intermediate',
      duration: '45 min read'
    },
    {
      title: 'AI 2027 Implementation Roadmap',
      description: 'Advanced roadmap for AI implementation strategies in 2027',
      url: '/guides/ai-2027-implementation-roadmap',
      category: 'AI Implementation',
      icon: Brain,
      difficulty: 'Advanced',
      duration: '60 min read'
    },
    {
      title: 'Autonomous Business Processes Implementation Guide 2026',
      description: 'Step-by-step guide to implementing autonomous business processes',
      url: '/guides/autonomous-business-processes-implementation-guide-2026',
      category: 'Process Automation',
      icon: Zap,
      difficulty: 'Expert',
      duration: '90 min read'
    }
  ];

  const categories = [
    { name: 'AI Implementation', icon: Brain, color: 'text-purple-400' },
    { name: 'Process Automation', icon: Zap, color: 'text-blue-400' },
    { name: 'Security', icon: Shield, color: 'text-red-400' },
    { name: 'Cloud Infrastructure', icon: Cloud, color: 'text-cyan-400' },
    { name: 'Data Management', icon: Database, color: 'text-green-400' },
    { name: 'Development', icon: Code, color: 'text-orange-400' }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'text-green-400 bg-green-400/20';
      case 'Intermediate': return 'text-yellow-400 bg-yellow-400/20';
      case 'Advanced': return 'text-orange-400 bg-orange-400/20';
      case 'Expert': return 'text-red-400 bg-red-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  return (
    <>
      <Helmet>
        <title>Implementation Guides - Zion Tech Group</title>
        <meta name="description" content="Comprehensive guides for implementing AI, automation, and digital transformation solutions in your enterprise." />
        <meta name="keywords" content="AI implementation, automation guides, digital transformation, enterprise solutions, technical guides" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Navigation */}
        <nav className="bg-slate-900/90 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-cyan-500/20">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <Link to="/" className="flex items-center space-x-2 text-2xl font-bold text-cyan-400">
                <span className="text-3xl">⚡</span>
                <span>Zion Tech Group</span>
              </Link>
              <div className="hidden lg:flex items-center space-x-8">
                <Link to="/" className="text-white hover:text-cyan-400 transition-colors">Home</Link>
                <Link to="/about" className="text-white hover:text-cyan-400 transition-colors">About</Link>
                <Link to="/services" className="text-white hover:text-cyan-400 transition-colors">Services</Link>
                <Link to="/guides" className="text-cyan-400 font-semibold">Guides</Link>
                <Link to="/contact" className="text-white hover:text-cyan-400 transition-colors">Contact</Link>
              </div>
            </div>
          </div>
        </nav>

        <main className="container mx-auto px-4 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <BookOpen className="w-16 h-16 text-cyan-400" />
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                Implementation <span className="text-cyan-400">Guides</span>
              </h1>
            </div>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Step-by-step guides to help you implement AI, automation, and digital transformation 
              solutions in your enterprise with confidence.
            </p>
          </div>

          {/* Categories */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">Guide Categories</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {categories.map((category, index) => (
                <div key={index} className="bg-slate-800 rounded-lg p-4 text-center hover:bg-slate-700 transition-colors">
                  <category.icon className={`w-8 h-8 mx-auto mb-2 ${category.color}`} />
                  <h3 className="text-white font-semibold text-sm">{category.name}</h3>
                </div>
              ))}
            </div>
          </section>

          {/* Guides Grid */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">Available Guides</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {guides.map((guide, index) => (
                <div key={index} className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-cyan-500/50 transition-all duration-200">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center flex-shrink-0">
                      <guide.icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">{guide.title}</h3>
                      <p className="text-gray-300 text-sm mb-3">{guide.description}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-cyan-400 text-sm font-medium">{guide.category}</span>
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${getDifficultyColor(guide.difficulty)}`}>
                      {guide.difficulty}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">{guide.duration}</span>
                    <Link
                      to={guide.url}
                      className="text-cyan-400 hover:text-cyan-300 font-medium text-sm transition-colors"
                    >
                      Read Guide →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Getting Started */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">Getting Started</h2>
            <div className="bg-slate-800 rounded-lg p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">New to AI Implementation?</h3>
                  <p className="text-gray-300 mb-4">
                    Start with our comprehensive AI 2026 Implementation Roadmap to understand 
                    the fundamentals and plan your AI transformation journey.
                  </p>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Assess your current AI readiness</li>
                    <li>• Plan your implementation strategy</li>
                    <li>• Choose the right technologies</li>
                    <li>• Measure success and ROI</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Ready for Advanced Topics?</h3>
                  <p className="text-gray-300 mb-4">
                    Explore our advanced guides for autonomous systems, process automation, 
                    and cutting-edge AI implementations.
                  </p>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Autonomous business processes</li>
                    <li>• Advanced AI architectures</li>
                    <li>• Enterprise automation strategies</li>
                    <li>• Future-ready implementations</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center bg-gradient-to-r from-slate-800 to-purple-900 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Need Personalized Guidance?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Our experts are available to provide personalized implementation guidance 
              tailored to your specific business needs and requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
              >
                Get Expert Consultation
              </Link>
              <Link
                to="/services"
                className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-200"
              >
                View Our Services
              </Link>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default GuidesPage;