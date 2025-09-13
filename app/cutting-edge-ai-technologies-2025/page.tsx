import React from 'react';
import Link from 'next/link';
import { 
  Brain, 
  Zap, 
  Shield, 
  Globe, 
  Cpu, 
  Database, 
  Eye, 
  MessageSquare, 
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Users,
  Award
} from 'lucide-react';

export const metadata = {
  title: 'Cutting-Edge AI Technologies 2025 - Revolutionary Innovations',
  description: 'Explore the most advanced AI technologies revolutionizing industries. Quantum AI, Neural Interfaces, Autonomous Systems, and breakthrough innovations shaping the future.',
  keywords: ['AI Technologies 2025', 'Quantum AI', 'Neural Interfaces', 'Autonomous Systems', 'AI Innovations', 'Machine Learning', 'Deep Learning', 'AI Breakthroughs']
};

export default function CuttingEdgeAITechnologies2025() {
  const technologies = [
    {
      title: 'Quantum Neural Networks',
      description: 'Revolutionary fusion of quantum computing and neural networks for unprecedented processing power',
      icon: Brain,
      status: 'Breakthrough',
      impact: '1000x faster processing',
      applications: ['Drug Discovery', 'Financial Modeling', 'Climate Prediction', 'Cryptography']
    },
    {
      title: 'Consciousness AI',
      description: 'AI systems with self-awareness and emotional intelligence capabilities',
      icon: Eye,
      status: 'Experimental',
      impact: 'Human-like reasoning',
      applications: ['Therapy', 'Education', 'Customer Service', 'Creative Industries']
    },
    {
      title: 'Neural Interface Integration',
      description: 'Direct brain-computer interfaces enabling seamless human-AI collaboration',
      icon: Cpu,
      status: 'Prototype',
      impact: 'Direct thought control',
      applications: ['Medical Rehabilitation', 'Gaming', 'Communication', 'Learning Acceleration']
    },
    {
      title: 'Autonomous AI Agents',
      description: 'Self-managing AI systems that operate independently with minimal human oversight',
      icon: Globe,
      status: 'Production',
      impact: '24/7 autonomous operations',
      applications: ['Business Process Automation', 'Supply Chain Management', 'Customer Support', 'Research']
    },
    {
      title: 'Quantum Machine Learning',
      description: 'Machine learning algorithms enhanced by quantum computing principles',
      icon: Database,
      status: 'Advanced',
      impact: 'Exponential speedup',
      applications: ['Pattern Recognition', 'Optimization', 'Simulation', 'Data Analysis']
    },
    {
      title: 'AI Security Frameworks',
      description: 'Advanced security systems protecting against AI-generated threats',
      icon: Shield,
      status: 'Critical',
      impact: '99.9% threat detection',
      applications: ['Cybersecurity', 'Fraud Detection', 'Privacy Protection', 'System Integrity']
    }
  ];

  const innovationHighlights = [
    {
      title: 'Real-time AI Processing',
      description: 'Process complex AI models in real-time with zero latency',
      metric: '< 1ms',
      icon: Zap
    },
    {
      title: 'Autonomous Decision Making',
      description: 'AI systems making complex decisions without human intervention',
      metric: '99.7%',
      icon: CheckCircle
    },
    {
      title: 'Quantum Supremacy',
      description: 'Achieving computational advantages over classical systems',
      metric: '10^6x',
      icon: Star
    },
    {
      title: 'Global AI Network',
      description: 'Connected AI systems across the globe for collective intelligence',
      metric: '1B+',
      icon: Globe
    }
  ];

  const industryImpact = [
    {
      industry: 'Healthcare',
      impact: 'Revolutionary drug discovery and personalized medicine',
      technologies: ['Quantum Neural Networks', 'Consciousness AI', 'Neural Interfaces'],
      improvement: '85% faster diagnosis'
    },
    {
      industry: 'Finance',
      impact: 'Ultra-high-frequency trading and risk management',
      technologies: ['Quantum ML', 'Autonomous Agents', 'AI Security'],
      improvement: '300% ROI increase'
    },
    {
      industry: 'Manufacturing',
      impact: 'Fully autonomous production lines and predictive maintenance',
      technologies: ['Autonomous AI', 'Quantum Processing', 'Neural Networks'],
      improvement: '99.9% uptime'
    },
    {
      industry: 'Education',
      impact: 'Personalized learning with AI tutors and neural enhancement',
      technologies: ['Consciousness AI', 'Neural Interfaces', 'Quantum ML'],
      improvement: '500% learning acceleration'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-indigo-600/20"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent mb-6">
              Cutting-Edge AI Technologies 2025
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover the revolutionary AI technologies that are reshaping our world. 
              From quantum neural networks to consciousness AI, explore the future today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="#technologies"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Explore Technologies
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="#industry-impact"
                className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-slate-900 transition-all duration-300"
              >
                See Industry Impact
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Highlights */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Innovation Highlights
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Breakthrough metrics that define the future of AI technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {innovationHighlights.map((highlight, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-8 shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl mb-6">
                  <highlight.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{highlight.metric}</div>
                <h3 className="text-xl font-bold text-white mb-3">{highlight.title}</h3>
                <p className="text-gray-300">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="technologies" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 to-purple-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Revolutionary Technologies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The most advanced AI technologies currently in development and production
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:-translate-y-2 border border-slate-700">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl">
                    <tech.icon className="h-8 w-8 text-white" />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    tech.status === 'Breakthrough' ? 'bg-green-500/20 text-green-400' :
                    tech.status === 'Production' ? 'bg-blue-500/20 text-blue-400' :
                    tech.status === 'Advanced' ? 'bg-purple-500/20 text-purple-400' :
                    tech.status === 'Critical' ? 'bg-red-500/20 text-red-400' :
                    'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {tech.status}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{tech.title}</h3>
                <p className="text-gray-300 mb-4">{tech.description}</p>
                <div className="mb-4">
                  <span className="text-sm font-medium text-purple-400">Impact: </span>
                  <span className="text-sm text-gray-300">{tech.impact}</span>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-white mb-2">Applications:</h4>
                  <div className="flex flex-wrap gap-2">
                    {tech.applications.map((app, appIndex) => (
                      <span key={appIndex} className="px-2 py-1 bg-slate-700 text-gray-300 text-xs rounded">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Impact Section */}
      <section id="industry-impact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Industry Impact
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              How cutting-edge AI technologies are transforming industries worldwide
            </p>
          </div>

          <div className="space-y-8">
            {industryImpact.map((impact, index) => (
              <div key={index} className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl hover:shadow-purple-500/25 transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{impact.industry}</h3>
                    <p className="text-gray-300 mb-4">{impact.impact}</p>
                    <div className="text-lg font-semibold text-purple-400">{impact.improvement}</div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Key Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {impact.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <TrendingUp className="h-12 w-12 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Vision Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            The Future is Here
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            These cutting-edge AI technologies are not science fiction—they're the reality of 2025. 
            Join us in shaping the future of artificial intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Partner With Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              href="/ai-interactive-learning-hub-2025"
              className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-slate-900 transition-all duration-300"
            >
              Learn AI Technologies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}