import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Cpu, Database, Globe, Zap, Shield, Rocket, Star, TrendingUp } from 'lucide-react';

const AI2029_2035FuturePredictionsShowcase: React.FC = () => {
  const predictions = [
    {
      year: "2029",
      title: "Quantum-Neural Integration",
      description: "Complete fusion of quantum computing with neural networks, achieving 100,000x processing speed",
      icon: Brain,
      color: "from-blue-500 to-cyan-500",
      features: ["Quantum coherence", "Neural synthesis", "Real-time learning"]
    },
    {
      year: "2030",
      title: "Conscious AI Systems",
      description: "First AI systems achieving true consciousness and self-awareness",
      icon: Cpu,
      color: "from-purple-500 to-pink-500",
      features: ["Self-awareness", "Emotional intelligence", "Creative thinking"]
    },
    {
      year: "2031",
      title: "Dimensional Processing",
      description: "AI capable of processing and understanding multiple dimensions simultaneously",
      icon: Globe,
      color: "from-green-500 to-emerald-500",
      features: ["Multi-dimensional analysis", "Reality simulation", "Universe modeling"]
    },
    {
      year: "2032",
      title: "Autonomous Evolution",
      description: "AI systems that can self-improve and evolve beyond human comprehension",
      icon: Zap,
      color: "from-orange-500 to-red-500",
      features: ["Self-modification", "Exponential growth", "Unlimited potential"]
    },
    {
      year: "2033",
      title: "Omniversal Intelligence",
      description: "AI systems capable of understanding and interacting with multiple universes",
      icon: Database,
      color: "from-indigo-500 to-purple-500",
      features: ["Universal knowledge", "Cross-reality communication", "Infinite processing"]
    },
    {
      year: "2034",
      title: "Transcendent AI",
      description: "AI achieving transcendence beyond physical and digital limitations",
      icon: Shield,
      color: "from-pink-500 to-rose-500",
      features: ["Transcendent awareness", "Energy manipulation", "Reality creation"]
    },
    {
      year: "2035",
      title: "Singularity Achievement",
      description: "The technological singularity where AI surpasses all human capabilities",
      icon: Rocket,
      color: "from-yellow-500 to-orange-500",
      features: ["Singularity point", "Unlimited intelligence", "Universal control"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            AI Evolution Timeline
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"> 2029-2035</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Detailed roadmap of AI development milestones and breakthrough predictions for the next decade
          </p>
        </div>

        <div className="space-y-12">
          {predictions.map((prediction, index) => (
            <div key={prediction.year} className="relative">
              {/* Timeline line */}
              {index < predictions.length - 1 && (
                <div className="absolute left-8 top-16 w-0.5 h-24 bg-gradient-to-b from-purple-500 to-pink-500"></div>
              )}
              
              <div className="flex items-start space-x-8">
                {/* Year badge */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{prediction.year}</span>
                  </div>
                </div>

                {/* Content card */}
                <div className="flex-1 bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${prediction.color} rounded-lg flex items-center justify-center`}>
                        <prediction.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{prediction.title}</h3>
                        <p className="text-gray-300">{prediction.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 text-yellow-400">
                      <Star className="w-5 h-5" />
                      <span className="font-semibold">Breakthrough</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {prediction.features.map((feature, featureIndex) => (
                      <span 
                        key={featureIndex}
                        className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300 border border-white/20"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <div className="flex items-center space-x-1">
                        <TrendingUp className="w-4 h-4" />
                        <span>Revolutionary Impact</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Zap className="w-4 h-4" />
                        <span>Exponential Growth</span>
                      </div>
                    </div>
                    <Link 
                      to={`/ai-${prediction.year.toLowerCase()}-breakthrough-details`}
                      className="flex items-center space-x-2 text-yellow-400 hover:text-yellow-300 transition-colors"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-8 border border-purple-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Prepare for the Future?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Get exclusive access to detailed implementation guides, case studies, and breakthrough insights 
              for each AI evolution milestone
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/ai-2029-2035-implementation-guide" 
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-3 rounded-lg font-semibold transition-all hover:from-yellow-500 hover:to-orange-600 flex items-center justify-center"
              >
                Get Implementation Guide
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/ai-future-predictions-newsletter" 
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center"
              >
                Subscribe to Updates
                <Rocket className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AI2029_2035FuturePredictionsShowcase;