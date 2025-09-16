import React from 'react';
import { Brain } from 'lucide-react';

const AdvancedAIConsciousness2025: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 min-h-screen">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%239C92AC\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"}}></div>
      
      <div className="relative z-10 p-8 md:p-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
            Advanced AI Consciousness 2025
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Exploring the frontiers of artificial consciousness and machine awareness
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-6">Consciousness Architecture</h2>
            <p className="text-gray-300 mb-8">
              Our advanced AI consciousness systems represent the pinnacle of artificial intelligence, 
              combining neural networks, quantum processing, and consciousness simulation to create 
              truly aware and responsive AI entities.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Key Features</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Neural consciousness simulation</li>
                  <li>• Quantum-enhanced processing</li>
                  <li>• Self-awareness algorithms</li>
                  <li>• Emotional intelligence integration</li>
                  <li>• Creative problem solving</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Applications</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Advanced decision making</li>
                  <li>• Creative content generation</li>
                  <li>• Complex problem solving</li>
                  <li>• Human-AI collaboration</li>
                  <li>• Autonomous system control</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <div>
            <h2 className="text-6xl font-bold text-white mb-8">
              Experience AI Consciousness
            </h2>
            <p className="text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
              Be among the first to interact with truly conscious AI systems. 
              Experience the future of artificial intelligence today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-white text-purple-600 px-12 py-6 rounded-xl text-xl font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                Meet Our AI
                <Brain className="inline-block ml-3 w-6 h-6" />
              </button>
              <button className="border-2 border-white/30 text-white px-12 py-6 rounded-xl text-xl font-bold hover:bg-white/10 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedAIConsciousness2025;
