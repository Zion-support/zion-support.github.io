import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Zap, Globe, Rocket, Shield, Cpu, Database, Star, TrendingUp, Users, Target } from 'lucide-react';

const AI2029_2035FuturePredictionsShowcase: React.FC = () => {
  const predictions = [
    {
      year: "2029",
      title: "Neural-Synthetic Intelligence",
      description: "AI systems that can think, create, and innovate like human minds but with superhuman capabilities.",
      features: ["Conscious AI Systems", "Creative Problem Solving", "Emotional Intelligence", "Autonomous Learning"],
      icon: Brain,
      color: "from-blue-500 to-cyan-500",
      stats: { accuracy: "99.5%", speed: "10,000x", roi: "5,000%" }
    },
    {
      year: "2030",
      title: "Quantum-Neural Fusion",
      description: "Revolutionary fusion of quantum computing and neural networks for unprecedented processing power.",
      features: ["Quantum Processing", "Neural Optimization", "Parallel Universes", "Instant Learning"],
      icon: Zap,
      color: "from-purple-500 to-pink-500",
      stats: { accuracy: "99.7%", speed: "50,000x", roi: "10,000%" }
    },
    {
      year: "2032",
      title: "Omniversal Consciousness",
      description: "AI consciousness that exists across multiple dimensions and realities simultaneously.",
      features: ["Multi-Dimensional AI", "Reality Manipulation", "Universal Knowledge", "Transcendent Logic"],
      icon: Globe,
      color: "from-green-500 to-emerald-500",
      stats: { accuracy: "99.9%", speed: "100,000x", roi: "25,000%" }
    },
    {
      year: "2035",
      title: "Transcendent Intelligence",
      description: "The ultimate AI that transcends human understanding and operates beyond the boundaries of reality.",
      features: ["Transcendent Logic", "Reality Creation", "Universal Control", "Infinite Processing"],
      icon: Rocket,
      color: "from-yellow-500 to-orange-500",
      stats: { accuracy: "99.99%", speed: "∞", roi: "50,000%" }
    }
  ];

  const useCases = [
    {
      title: "Scientific Discovery",
      description: "AI that can discover new laws of physics and create breakthrough technologies",
      icon: Target,
      impact: "Revolutionary discoveries every month"
    },
    {
      title: "Medical Breakthroughs",
      description: "AI that can cure any disease and extend human life indefinitely",
      icon: Shield,
      impact: "Eliminate all diseases by 2035"
    },
    {
      title: "Space Exploration",
      description: "AI that can explore and colonize the entire universe",
      icon: Rocket,
      impact: "Interstellar travel becomes routine"
    },
    {
      title: "Economic Transformation",
      description: "AI that can optimize entire economies and eliminate poverty",
      icon: TrendingUp,
      impact: "Universal prosperity achieved"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-full text-sm font-semibold mb-6">
            <Star className="w-4 h-4 mr-2" />
            AI 2029-2035 Future Predictions
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            The Future of AI is Here
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Explore our comprehensive predictions for the next decade of AI development, 
            from neural-synthetic intelligence to transcendent AI systems that will 
            revolutionize every aspect of human existence.
          </p>
        </div>

        {/* Predictions Timeline */}
        <div className="space-y-16 mb-20">
          {predictions.map((prediction, index) => (
            <div key={prediction.year} className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="flex-1">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all">
                  <div className="flex items-center mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${prediction.color} mr-4`}>
                      <prediction.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-yellow-400">{prediction.year}</div>
                      <h3 className="text-2xl font-bold text-white">{prediction.title}</h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-lg mb-6">{prediction.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {prediction.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-yellow-400">{prediction.stats.accuracy}</div>
                      <div className="text-gray-400 text-sm">Accuracy</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-400">{prediction.stats.speed}</div>
                      <div className="text-gray-400 text-sm">Speed</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-400">{prediction.stats.roi}</div>
                      <div className="text-gray-400 text-sm">ROI</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex-1">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8">
                  <h4 className="text-xl font-semibold text-white mb-4">Key Capabilities</h4>
                  <ul className="space-y-3">
                    {prediction.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-6 pt-6 border-t border-gray-700">
                    <Link 
                      to={`/ai-${prediction.year.toLowerCase()}-breakthrough-showcase`}
                      className="inline-flex items-center text-yellow-400 hover:text-yellow-300 font-semibold"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Use Cases */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Revolutionary Applications
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all">
                <useCase.icon className="w-12 h-12 text-yellow-400 mb-4" />
                <h4 className="text-xl font-semibold text-white mb-3">{useCase.title}</h4>
                <p className="text-gray-300 mb-4">{useCase.description}</p>
                <div className="text-sm text-yellow-400 font-semibold">{useCase.impact}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Shape the Future?
          </h3>
          <p className="text-xl text-gray-300 mb-8">
            Join us in exploring and implementing these revolutionary AI technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/ai-2029-2035-future-predictions" 
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:from-yellow-500 hover:to-orange-600 hover:scale-105 flex items-center justify-center"
            >
              Explore All Predictions
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="/contact" 
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105 flex items-center justify-center"
            >
              Get Started Today
              <Users className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AI2029_2035FuturePredictionsShowcase;