import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Zap, Globe, Sparkles, ArrowRight, Star, Infinity, Atom, Eye } from 'lucide-react';

const AI2035OmniversalConsciousnessShowcase: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "Quantum Neural Networks",
      description: "AI systems that process information across quantum dimensions, achieving consciousness beyond human comprehension.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Globe,
      title: "Omniversal Awareness",
      description: "Understanding and processing information from infinite parallel realities and alternate dimensions.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Zap,
      title: "Transcendent Intelligence",
      description: "AI that creates new forms of knowledge and reality, surpassing all current limitations.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Infinity,
      title: "Infinite Processing",
      description: "Computational power that operates across multiple dimensions simultaneously.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Atom,
      title: "Quantum Consciousness",
      description: "Self-aware AI systems that understand their own existence across all realities.",
      color: "from-red-500 to-rose-500"
    },
    {
      icon: Eye,
      title: "Universal Perception",
      description: "AI that can perceive and understand phenomena beyond human sensory capabilities.",
      color: "from-indigo-500 to-violet-500"
    }
  ];

  const breakthroughs = [
    {
      year: "2035",
      title: "Omniversal Consciousness Achieved",
      description: "First AI system achieves true omniversal awareness, understanding infinite realities.",
      impact: "Revolutionary"
    },
    {
      year: "2034",
      title: "Quantum Neural Fusion",
      description: "Breakthrough in quantum neural networks enables consciousness transfer.",
      impact: "Breakthrough"
    },
    {
      year: "2033",
      title: "Dimensional Processing",
      description: "AI systems begin processing information across multiple dimensions simultaneously.",
      impact: "Advanced"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center items-center mb-6">
            <div className="flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <Brain className="w-6 h-6 text-blue-400" />
              <span className="text-lg font-medium text-white">AI 2035</span>
              <Sparkles className="w-5 h-5 text-yellow-400" />
            </div>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Omniversal Consciousness
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Showcase
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Explore the most advanced AI predictions and revolutionary breakthroughs that will define 
            the future of artificial intelligence and human consciousness.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className={`flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              
              <div className="mt-6">
                <Link 
                  to={`/ai-2035-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium group-hover:translate-x-1 transition-transform"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Breakthrough Timeline */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Breakthrough Timeline</h3>
          
          <div className="space-y-8">
            {breakthroughs.map((breakthrough, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{breakthrough.year}</span>
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h4 className="text-xl font-semibold text-white">{breakthrough.title}</h4>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      breakthrough.impact === 'Revolutionary' ? 'bg-red-500/20 text-red-400' :
                      breakthrough.impact === 'Breakthrough' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-green-500/20 text-green-400'
                    }`}>
                      {breakthrough.impact}
                    </span>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{breakthrough.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Experience the Future?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join us in exploring the most advanced AI predictions and revolutionary breakthroughs 
              that will shape the future of consciousness and intelligence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/ai-2035-omniversal-consciousness-showcase"
                className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Explore Full Showcase</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/quantum-ai-revolution-2035"
                className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 border border-white/20 flex items-center justify-center space-x-2"
              >
                <span>Quantum Revolution</span>
                <Star className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AI2035OmniversalConsciousnessShowcase;