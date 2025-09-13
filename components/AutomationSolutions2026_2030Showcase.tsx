import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Bot, Zap, Target, TrendingUp, Users, Globe, Shield, Cpu, Brain } from 'lucide-react';

const AutomationSolutions2026_2030Showcase: React.FC = () => {
  const automationSolutions = [
    {
      id: 'autonomous-business-2026',
      title: 'Fully Autonomous Business Operations',
      description: 'Complete end-to-end automation of business processes with self-healing, self-optimizing systems that require zero human intervention.',
      year: '2026',
      category: 'Business Automation',
      readTime: '10 min read',
      impact: 'Transformative',
      features: {
        automation: '100%',
        efficiency: '500%',
        costReduction: '80%',
        accuracy: '99.9%'
      },
      tags: ['Autonomous Systems', 'Business Process', 'Self-Healing', '2026 Solutions']
    },
    {
      id: 'intelligent-process-2027',
      title: 'Intelligent Process Automation 2.0',
      description: 'Next-generation process automation with AI-driven decision making, predictive maintenance, and adaptive workflow optimization.',
      year: '2027',
      category: 'Process Automation',
      readTime: '12 min read',
      impact: 'Revolutionary',
      features: {
        intelligence: 'Advanced AI',
        adaptability: 'Real-time',
        optimization: 'Continuous',
        scalability: 'Unlimited'
      },
      tags: ['Process Automation', 'AI-Driven', 'Predictive', '2027 Innovation']
    },
    {
      id: 'cognitive-automation-2028',
      title: 'Cognitive Automation Systems',
      description: 'Human-level cognitive automation that can understand context, make complex decisions, and learn from experience without human oversight.',
      year: '2028',
      category: 'Cognitive Automation',
      readTime: '15 min read',
      impact: 'Paradigm Shift',
      features: {
        cognition: 'Human-level',
        learning: 'Continuous',
        decision: 'Complex',
        context: 'Full Understanding'
      },
      tags: ['Cognitive AI', 'Decision Making', 'Context Understanding', '2028 Breakthrough']
    },
    {
      id: 'autonomous-ecosystem-2029',
      title: 'Autonomous Business Ecosystem',
      description: 'Complete business ecosystem automation where all systems, processes, and operations work together autonomously with perfect coordination.',
      year: '2029',
      category: 'Ecosystem Automation',
      readTime: '18 min read',
      impact: 'Revolutionary',
      features: {
        coordination: 'Perfect',
        integration: 'Seamless',
        optimization: 'Global',
        efficiency: 'Maximum'
      },
      tags: ['Ecosystem Automation', 'System Integration', 'Global Optimization', '2029 Vision']
    },
    {
      id: 'transcendent-automation-2030',
      title: 'Transcendent Automation Intelligence',
      description: 'Beyond-human automation intelligence that can solve problems, create solutions, and optimize systems beyond current human capabilities.',
      year: '2030',
      category: 'Transcendent AI',
      readTime: '20 min read',
      impact: 'Existential',
      features: {
        intelligence: 'Transcendent',
        creativity: 'Unlimited',
        problemSolving: 'Universal',
        optimization: 'Perfect'
      },
      tags: ['Transcendent AI', 'Superintelligence', 'Universal Problem Solving', '2030 Singularity']
    }
  ];

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'Transformative': return 'from-green-600 to-emerald-600';
      case 'Revolutionary': return 'from-blue-600 to-cyan-600';
      case 'Paradigm Shift': return 'from-purple-600 to-indigo-600';
      case 'Existential': return 'from-yellow-600 to-orange-600';
      default: return 'from-gray-600 to-slate-600';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Business Automation': return <Bot className="w-6 h-6" />;
      case 'Process Automation': return <Zap className="w-6 h-6" />;
      case 'Cognitive Automation': return <Brain className="w-6 h-6" />;
      case 'Ecosystem Automation': return <Globe className="w-6 h-6" />;
      case 'Transcendent AI': return <Cpu className="w-6 h-6" />;
      default: return <Target className="w-6 h-6" />;
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-600 to-blue-600 text-white text-sm font-semibold mb-4">
            <Bot className="w-4 h-4 mr-2" />
            Automation Solutions 2026-2030
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            The Future of Business Automation
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Discover the complete evolution of automation from basic process automation to transcendent 
            AI systems that will revolutionize how businesses operate and compete in the digital age.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {automationSolutions.map((solution, index) => (
            <div key={solution.id} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-green-400/50 transition-all duration-300 group">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${getImpactColor(solution.impact)}`}>
                    {getCategoryIcon(solution.category)}
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-400">{solution.year}</div>
                    <span className="px-3 py-1 bg-green-600/20 text-green-300 rounded-full text-sm font-medium">
                      {solution.category}
                    </span>
                  </div>
                </div>
                <span className="text-gray-400 text-sm">{solution.readTime}</span>
              </div>

              {/* Title and Description */}
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-300 transition-colors">
                {solution.title}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                {solution.description}
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {Object.entries(solution.features).map(([key, value]) => (
                  <div key={key} className="bg-white/5 rounded-lg p-4 text-center">
                    <div className="text-lg font-bold text-green-400 mb-1">{value}</div>
                    <div className="text-xs text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {solution.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Button */}
              <Link 
                to={`/automation-solutions/${solution.id}`}
                className="inline-flex items-center text-green-400 hover:text-green-300 font-semibold group-hover:translate-x-1 transition-all duration-300"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          ))}
        </div>

        {/* Implementation Roadmap */}
        <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-2xl p-8 border border-white/20 mb-16">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Implementation Roadmap</h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">1</span>
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Assessment</h4>
              <p className="text-gray-300 text-sm">Evaluate current processes and identify automation opportunities</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">2</span>
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Strategy</h4>
              <p className="text-gray-300 text-sm">Develop comprehensive automation strategy and roadmap</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">3</span>
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Implementation</h4>
              <p className="text-gray-300 text-sm">Deploy automation solutions with phased approach</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">4</span>
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Optimization</h4>
              <p className="text-gray-300 text-sm">Continuously optimize and enhance automation systems</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">5</span>
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Evolution</h4>
              <p className="text-gray-300 text-sm">Evolve to next-generation automation capabilities</p>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <div className="flex items-center justify-center w-12 h-12 bg-green-600/20 rounded-lg mb-4">
              <TrendingUp className="w-6 h-6 text-green-400" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Exponential Efficiency</h4>
            <p className="text-gray-300 text-sm">Achieve 500% efficiency improvements with autonomous systems that work 24/7 without breaks.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-600/20 rounded-lg mb-4">
              <Shield className="w-6 h-6 text-blue-400" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Perfect Accuracy</h4>
            <p className="text-gray-300 text-sm">99.9% accuracy rates eliminate human errors and ensure consistent, reliable operations.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <div className="flex items-center justify-center w-12 h-12 bg-purple-600/20 rounded-lg mb-4">
              <Users className="w-6 h-6 text-purple-400" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Cost Reduction</h4>
            <p className="text-gray-300 text-sm">Reduce operational costs by up to 80% while maintaining or improving service quality.</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Start your automation journey today with our comprehensive implementation guides, 
              expert consulting, and proven methodologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/automation-implementation-guide"
                className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Get Implementation Guide
              </Link>
              <Link 
                to="/automation-consulting"
                className="border border-white/30 hover:border-green-400 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-white/10"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomationSolutions2026_2030Showcase;