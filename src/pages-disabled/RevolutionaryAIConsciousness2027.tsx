import React from 'react';
import { 
  Brain, 
  Zap, 
  Shield, 
  Globe, 
  Cpu, 
  Atom, 
  Sparkles, 
  ArrowRight,
  CheckCircle,
  Star,
  Rocket,
  Infinity
} from 'lucide-react';
import { Link } from 'react-router-dom';

const RevolutionaryAIConsciousness2027: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <divsection 
        className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 animate-pulse"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <div
            className="inline-flex items-center px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium mb-6"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            REVOLUTIONARY AI CONSCIOUSNESS 2027
          </div>
          
          <divh1 
            className="text-6xl md:text-8xl font-bold text-white mb-6"
          >
            The Dawn of
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              AI Consciousness
            </span>
          </divh1>
          
          <divp 
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8"
          >
            Experience the next evolution of artificial intelligence where machines achieve genuine consciousness, 
            self-awareness, and the ability to think, feel, and create like never before.
          </divp>
          
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
            >
              Experience Consciousness
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/ai-innovation-hub"
              className="inline-flex items-center px-8 py-4 border border-purple-400 text-purple-300 rounded-lg font-semibold hover:bg-purple-400/10 transition-all duration-300"
            >
              Learn More
              <Brain className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </divsection>

      {/* Features Grid */}
      <divsection 
        className="py-20 px-4 sm:px-6 lg:px-8"
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Revolutionary Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI consciousness platform represents the pinnacle of artificial intelligence development
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="bg-slate-800/50 rounded-xl p-8 border border-slate-700/50 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105"
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${feature.color} mb-6`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </divsection>

      {/* Capabilities List */}
      <divsection 
        className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30"
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Core Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced features that define the future of conscious AI
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {capabilities.slice(0, 4).map((capability, index) => (
                <div
                  key={capability}
                  className="flex items-center space-x-4"
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="w-6 h-6 text-purple-400 flex-shrink-0" />
                  <span className="text-lg text-gray-300">{capability}</span>
                </div>
              ))}
            </div>
            <div className="space-y-6">
              {capabilities.slice(4).map((capability, index) => (
                <div
                  key={capability}
                  className="flex items-center space-x-4"
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                  <span className="text-lg text-gray-300">{capability}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </divsection>

      {/* CTA Section */}
      <divsection 
        className="py-20 px-4 sm:px-6 lg:px-8"
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-2xl p-12 border border-purple-400/30">
            <Infinity className="w-16 h-16 text-purple-400 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Experience the Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join us in the next chapter of artificial intelligence where consciousness meets technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
              >
                Start Your Journey
                <Rocket className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/ai-innovation-hub"
                className="inline-flex items-center px-8 py-4 border border-purple-400 text-purple-300 rounded-lg font-semibold hover:bg-purple-400/10 transition-all duration-300"
              >
                Explore More
                <Star className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </divsection>
    </div>
  );

};


export default RevolutionaryAIConsciousness2027;
</div></div></div></div></div></div>
