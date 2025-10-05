import React from 'react';
import { Link } from 'react-router-dom';

const GlobalAITransformationHub = () => {
  const transformationAreas = [
    {
      title: 'Enterprise Automation',
      description: 'Complete business process automation with 95% efficiency gains',
      value: '$2.3B',
      icon: '🚀',
      color: 'from-blue-500 to-cyan-500',
      link: '/services/enterprise-automation-transformation'
    },
    {
      title: 'Quantum Consciousness AI',
      description: 'Revolutionary AI consciousness integration with infinite scalability',
      value: '$500B',
      icon: '🚀',
      color: 'from-purple-500 to-violet-500',
      link: '/services/quantum-consciousness-ai-services'
    },
    {
      title: 'Autonomous Operations',
      description: 'Self-managing systems with 99.99% uptime and zero human intervention',
      value: '$150B',
      icon: '🚀',
      color: 'from-emerald-500 to-teal-500',
      link: '/services/autonomous-operations-platform'
    },
    {
      title: 'Neural Security',
      description: 'Advanced AI-powered security with 99.7% threat prevention',
      value: '$87B',
      icon: '🚀',
      color: 'from-orange-500 to-red-500',
      link: '/services/neural-security-framework'
    }
  ];

  const successMetrics = [
    { metric: '2.5M+', label: 'Global Users' },
    { metric: '$15B+', label: 'Value Created' },
    { metric: '99.99%', label: 'Success Rate' },
    { metric: '500K+', label: 'Enterprise Clients' }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900 border border-blue-400/30 rounded-2xl p-8 mb-12 animate-fade-in shadow-2xl">
      <div className="flex items-center justify-center gap-3 mb-6">

        <span className="text-2xl font-bold text-blue-400">🌍 GLOBAL AI TRANSFORMATION HUB</span>

      </div>
      
      <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-center bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
        Transforming Business Operations Worldwide
      </h2>
      
      <p className="text-xl text-gray-300 text-center mb-8 max-w-4xl mx-auto">
        Leading the global AI revolution with cutting-edge technologies that deliver unprecedented business value and operational excellence across all industries.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {transformationAreas.map((area, index) => (
          <Link 
            key={index} 
            to={area.link}
            className={`bg-gradient-to-br ${area.color} rounded-xl p-6 text-white transform hover:scale-105 transition-all duration-300 hover:shadow-xl group`}
          >
            <div className="mb-4">{area.icon}</div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-300 transition-colors">{area.title}</h3>
            <p className="text-sm mb-4 opacity-90">{area.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold bg-white/20 px-3 py-1 rounded-full">{area.value}</span>

            </div>
          </Link>
        ))}
      </div>

      <div className="bg-gradient-to-r from-blue-500/20 to-emerald-500/20 rounded-xl p-6 mb-8 border border-blue-400/30">
        <div className="flex items-center justify-center gap-3 mb-4">

          <span className="text-xl font-bold text-green-400">Global Success Metrics</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {successMetrics.map((item, index) => (
            <div key={index}>
              <div className="text-3xl font-bold text-white">{item.metric}</div>
              <div className="text-sm text-gray-300">{item.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-br from-purple-500/20 to-violet-500/20 rounded-xl p-6 border border-purple-400/30">
          <div className="flex items-center gap-3 mb-4">

            <h3 className="text-lg font-bold text-purple-400">Revolutionary Breakthroughs</h3>
          </div>
          <p className="text-gray-300 mb-4">Latest AI innovations achieving unprecedented accuracy and consciousness integration.</p>
          <Link 
            to="/blog/ai-2026-revolutionary-breakthrough-announcement" 
            className="text-purple-400 hover:text-purple-300 font-semibold flex items-center gap-2"
          >
            Explore Breakthroughs</Link>
        </div>

        <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-xl p-6 border border-emerald-400/30">
          <div className="flex items-center gap-3 mb-4">

            <h3 className="text-lg font-bold text-emerald-400">Success Stories</h3>
          </div>
          <p className="text-gray-300 mb-4">Real-world transformations delivering billions in value creation and operational excellence.</p>
          <Link 
            to="/case-studies" 
            className="text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-2"
          >
            View Case Studies</Link>
        </div>

        <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl p-6 border border-orange-400/30">
          <div className="flex items-center gap-3 mb-4">

            <h3 className="text-lg font-bold text-orange-400">Expert Services</h3>
          </div>
          <p className="text-gray-300 mb-4">Comprehensive AI transformation services tailored to your specific business needs.</p>
          <Link 
            to="/services" 
            className="text-orange-400 hover:text-orange-300 font-semibold flex items-center gap-2"
          >
            Get Started</Link>
        </div>
      </div>

      <div className="text-center">
        <Link 
          to="/contact" 
          className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-emerald-500 text-white px-8 py-4 rounded-xl font-bold hover:from-blue-600 hover:to-emerald-600 transition-all duration-300 hover:scale-105 shadow-lg"
        >

          Start Your AI Transformation Journey

        </Link>
        <p className="mt-4 text-gray-400 text-sm">
          🌍 Join 2.5M+ professionals worldwide transforming their businesses with revolutionary AI technology
        </p>
      </div>
    </div>
  );
};

export default GlobalAITransformationHub;