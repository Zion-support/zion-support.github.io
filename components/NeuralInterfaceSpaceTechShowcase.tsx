import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Rocket, Satellite, Zap, Globe, Users, Shield, Cpu, Target } from 'lucide-react';

const NeuralInterfaceSpaceTechShowcase: React.FC = () => {
  const neuralInterfaceContent = [
    {
      id: 'neural-interface-2026',
      title: 'Direct Neural Interface Technology',
      description: 'Revolutionary brain-computer interfaces enabling seamless communication between human consciousness and AI systems with real-time data transfer.',
      year: '2026',
      category: 'Neural Interfaces',
      readTime: '12 min read',
      impact: 'Revolutionary',
      features: {
        connectionSpeed: 'Real-time',
        accuracy: '99.5%',
        safety: '100%',
        applications: '50+'
      },
      tags: ['Neural Interfaces', 'Brain-Computer', 'Consciousness', '2026 Innovation']
    },
    {
      id: 'space-ai-2026',
      title: 'Space Technology AI Solutions',
      description: 'Advanced AI systems for space exploration, satellite management, and interplanetary communication networks with autonomous decision-making capabilities.',
      year: '2026',
      category: 'Space Technology',
      readTime: '15 min read',
      impact: 'Transformative',
      features: {
        coverage: 'Global',
        reliability: '99.9%',
        range: 'Unlimited',
        autonomy: '100%'
      },
      tags: ['Space Technology', 'Satellite AI', 'Space Exploration', '2026 Space']
    },
    {
      id: 'neural-space-fusion-2027',
      title: 'Neural-Space Technology Fusion',
      description: 'Integration of neural interfaces with space technology, enabling direct human control of space systems and real-time space exploration.',
      year: '2027',
      category: 'Neural-Space Fusion',
      readTime: '18 min read',
      impact: 'Paradigm Shift',
      features: {
        integration: 'Seamless',
        control: 'Direct',
        exploration: 'Real-time',
        efficiency: 'Maximum'
      },
      tags: ['Neural-Space', 'Space Control', 'Real-time Exploration', '2027 Fusion']
    },
    {
      id: 'interplanetary-ai-2028',
      title: 'Interplanetary AI Networks',
      description: 'Distributed AI networks across multiple planets enabling autonomous space operations, resource management, and interplanetary communication.',
      year: '2028',
      category: 'Interplanetary AI',
      readTime: '20 min read',
      impact: 'Revolutionary',
      features: {
        distribution: 'Multi-planetary',
        autonomy: 'Complete',
        communication: 'Instant',
        management: 'Autonomous'
      },
      tags: ['Interplanetary AI', 'Space Networks', 'Autonomous Operations', '2028 Vision']
    }
  ];

  const spaceTechContent = [
    {
      id: 'quantum-space-2026',
      title: 'Quantum Space Communication',
      description: 'Quantum-encrypted communication systems for space missions with unbreakable security and instant data transfer across vast distances.',
      year: '2026',
      category: 'Quantum Space',
      readTime: '14 min read',
      impact: 'Revolutionary',
      features: {
        security: 'Unbreakable',
        speed: 'Instant',
        range: 'Unlimited',
        reliability: '99.9%'
      },
      tags: ['Quantum Space', 'Space Communication', 'Quantum Encryption', '2026 Security']
    },
    {
      id: 'autonomous-space-2027',
      title: 'Autonomous Space Operations',
      description: 'Fully autonomous space missions with AI-driven decision making, self-repairing systems, and independent resource management.',
      year: '2027',
      category: 'Autonomous Space',
      readTime: '16 min read',
      impact: 'Transformative',
      features: {
        autonomy: '100%',
        selfRepair: 'Advanced',
        decisionMaking: 'AI-Driven',
        resourceManagement: 'Independent'
      },
      tags: ['Autonomous Space', 'Self-Repair', 'AI Decision Making', '2027 Autonomy']
    },
    {
      id: 'space-colonization-2028',
      title: 'AI-Powered Space Colonization',
      description: 'Intelligent systems for space colonization with automated habitat construction, resource extraction, and life support management.',
      year: '2028',
      category: 'Space Colonization',
      readTime: '22 min read',
      impact: 'Existential',
      features: {
        construction: 'Automated',
        resourceExtraction: 'Intelligent',
        lifeSupport: 'Autonomous',
        sustainability: 'Complete'
      },
      tags: ['Space Colonization', 'Habitat Construction', 'Resource Extraction', '2028 Colonization']
    }
  ];

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'Revolutionary': return 'from-red-600 to-pink-600';
      case 'Transformative': return 'from-blue-600 to-cyan-600';
      case 'Paradigm Shift': return 'from-purple-600 to-indigo-600';
      case 'Existential': return 'from-yellow-600 to-orange-600';
      default: return 'from-gray-600 to-slate-600';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Neural Interfaces': return <Brain className="w-6 h-6" />;
      case 'Space Technology': return <Rocket className="w-6 h-6" />;
      case 'Neural-Space Fusion': return <Zap className="w-6 h-6" />;
      case 'Interplanetary AI': return <Globe className="w-6 h-6" />;
      case 'Quantum Space': return <Shield className="w-6 h-6" />;
      case 'Autonomous Space': return <Cpu className="w-6 h-6" />;
      case 'Space Colonization': return <Users className="w-6 h-6" />;
      default: return <Target className="w-6 h-6" />;
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-red-600 to-orange-600 text-white text-sm font-semibold mb-4">
            <Brain className="w-4 h-4 mr-2" />
            Neural Interfaces & Space Technology
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            The Future of Human-Space Integration
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Explore revolutionary neural interface technologies and advanced space systems that will 
            enable direct human-space interaction and autonomous space operations.
          </p>
        </div>

        {/* Neural Interface Content */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Neural Interface Technologies</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {neuralInterfaceContent.map((content) => (
              <div key={content.id} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-red-400/50 transition-all duration-300 group">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${getImpactColor(content.impact)}`}>
                      {getCategoryIcon(content.category)}
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-red-400">{content.year}</div>
                      <span className="px-3 py-1 bg-red-600/20 text-red-300 rounded-full text-sm font-medium">
                        {content.category}
                      </span>
                    </div>
                  </div>
                  <span className="text-gray-400 text-sm">{content.readTime}</span>
                </div>

                {/* Title and Description */}
                <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-red-300 transition-colors">
                  {content.title}
                </h4>
                <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                  {content.description}
                </p>

                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {Object.entries(content.features).map(([key, value]) => (
                    <div key={key} className="bg-white/5 rounded-lg p-4 text-center">
                      <div className="text-lg font-bold text-red-400 mb-1">{value}</div>
                      <div className="text-xs text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {content.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                <Link 
                  to={`/neural-interfaces/${content.id}`}
                  className="inline-flex items-center text-red-400 hover:text-red-300 font-semibold group-hover:translate-x-1 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Space Technology Content */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Space Technology Solutions</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {spaceTechContent.map((content) => (
              <div key={content.id} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-orange-400/50 transition-all duration-300 group">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${getImpactColor(content.impact)}`}>
                      {getCategoryIcon(content.category)}
                    </div>
                    <div>
                      <div className="text-xl font-bold text-orange-400">{content.year}</div>
                      <span className="px-2 py-1 bg-orange-600/20 text-orange-300 rounded-full text-xs font-medium">
                        {content.category}
                      </span>
                    </div>
                  </div>
                  <span className="text-gray-400 text-xs">{content.readTime}</span>
                </div>

                {/* Title and Description */}
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-orange-300 transition-colors">
                  {content.title}
                </h4>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {content.description}
                </p>

                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {Object.entries(content.features).map(([key, value]) => (
                    <div key={key} className="bg-white/5 rounded-lg p-3 text-center">
                      <div className="text-sm font-bold text-orange-400 mb-1">{value}</div>
                      <div className="text-xs text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {content.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                <Link 
                  to={`/space-technology/${content.id}`}
                  className="inline-flex items-center text-orange-400 hover:text-orange-300 font-medium text-sm group-hover:translate-x-1 transition-all duration-300"
                >
                  Explore
                  <ArrowRight className="w-3 h-3 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Integration Vision */}
        <div className="bg-gradient-to-r from-red-600/20 to-orange-600/20 rounded-2xl p-8 border border-white/20 mb-16">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">The Integration Vision</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Neural Integration</h4>
              <p className="text-gray-300 text-sm">Direct brain-computer interfaces enabling seamless human-AI collaboration in space operations.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Space Autonomy</h4>
              <p className="text-gray-300 text-sm">Fully autonomous space systems with AI-driven decision making and self-repair capabilities.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Interplanetary Networks</h4>
              <p className="text-gray-300 text-sm">Distributed AI networks across multiple planets enabling autonomous space colonization.</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-red-600/20 to-orange-600/20 rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Explore the Neural-Space Frontier?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join the pioneers who are already developing the technologies that will enable 
              human-space integration and autonomous space operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/neural-space-technology"
                className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Explore Technologies
              </Link>
              <Link 
                to="/neural-space-consulting"
                className="border border-white/30 hover:border-red-400 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-white/10"
              >
                Get Expert Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NeuralInterfaceSpaceTechShowcase;