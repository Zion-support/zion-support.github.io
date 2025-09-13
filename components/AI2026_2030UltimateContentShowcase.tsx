import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Zap, Globe, Shield, Target, TrendingUp, Users, Clock, CheckCircle } from 'lucide-react';

const AI2026_2030UltimateContentShowcase: React.FC = () => {
  const contentSections = [
    {
      id: 'ai-2026-breakthroughs',
      title: 'AI 2026 Revolutionary Breakthroughs',
      description: 'Discover the most advanced AI technologies that will reshape industries in 2026',
      icon: Brain,
      features: [
        'Neural Synthesis Technology',
        'Quantum-AI Fusion Systems',
        'Autonomous Decision Networks',
        'Predictive Intelligence Models'
      ],
      link: '/ai-2026-breakthroughs',
      color: 'from-blue-600 to-purple-600'
    },
    {
      id: 'quantum-computing-2026',
      title: 'Quantum Computing Revolution 2026',
      description: 'Experience the next generation of quantum computing solutions',
      icon: Zap,
      features: [
        'Error-Corrected Quantum Computers',
        'Quantum Machine Learning',
        'Quantum Internet Infrastructure',
        'Quantum-AI Hybrid Systems'
      ],
      link: '/quantum-computing-2026',
      color: 'from-purple-600 to-pink-600'
    },
    {
      id: 'automation-solutions-2026',
      title: 'Advanced Automation Solutions 2026',
      description: 'Transform your business with intelligent automation systems',
      icon: Target,
      features: [
        'Intelligent Process Automation',
        'Autonomous Business Operations',
        'Smart Resource Management',
        'Predictive Maintenance Systems'
      ],
      link: '/automation-solutions-2026',
      color: 'from-green-600 to-teal-600'
    },
    {
      id: 'future-predictions-2026-2030',
      title: 'Future Technology Predictions 2026-2030',
      description: 'Explore comprehensive predictions for the next 5 years of technology',
      icon: Globe,
      features: [
        'AI Evolution Roadmap',
        'Quantum Supremacy Timeline',
        'Space Technology Integration',
        'Neural Interface Development'
      ],
      link: '/future-predictions-2026-2030',
      color: 'from-orange-600 to-red-600'
    }
  ];

  const stats = [
    { label: 'ROI Improvement', value: '2,500%', icon: TrendingUp },
    { label: 'Processing Speed', value: '10,000x', icon: Zap },
    { label: 'Accuracy Rate', value: '99.9%', icon: CheckCircle },
    { label: 'Implementation Time', value: '90 Days', icon: Clock }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            AI 2026-2030 Ultimate Content Showcase
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover the most comprehensive collection of AI, quantum computing, and automation content 
            that will define the next 5 years of technological advancement.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 rounded-lg mb-3">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Content Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {contentSections.map((section) => (
            <div
              key={section.id}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
            >
              <div className="flex items-center mb-6">
                <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${section.color} rounded-lg mr-4`}>
                  <section.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">{section.title}</h3>
              </div>
              
              <p className="text-gray-300 mb-6">{section.description}</p>
              
              <ul className="space-y-3 mb-6">
                {section.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Link
                to={section.link}
                className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold group-hover:translate-x-2 transition-transform duration-300"
              >
                Explore Content
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-12 border border-white/20">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of forward-thinking companies already implementing these 
            revolutionary technologies and achieving unprecedented results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/case-studies"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              View Success Stories
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AI2026_2030UltimateContentShowcase;