import React from 'react';
import Link from 'next/link';
import { Brain, Users, TrendingUp, Clock, CheckCircle, ArrowRight } from 'lucide-react';

const NeuralConsensusRevolutionBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-purple-600/20 rounded-full px-4 py-2 mb-6">
            <Brain className="w-5 h-5 mr-2 text-purple-400" />
            <span className="text-sm font-medium">🧠 NEW: Neural Consensus Revolution</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Transform Decision Making with
            <span className="block text-purple-400">Neural Consensus AI</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-8">
            Revolutionary AI algorithms that combine neural networks with consensus mechanisms to deliver 
            <span className="text-purple-300 font-semibold"> 300% more accurate decisions</span> and 
            <span className="text-purple-300 font-semibold"> 65% faster consensus</span>
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="flex items-center mb-4">
              <Brain className="w-8 h-8 text-purple-400 mr-3" />
              <h3 className="text-xl font-bold">Neural Intelligence</h3>
            </div>
            <p className="text-blue-100 mb-4">
              Advanced neural networks process multiple perspectives and weigh inputs based on expertise
            </p>
            <div className="text-2xl font-bold text-purple-400">300% Accuracy</div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="flex items-center mb-4">
              <Users className="w-8 h-8 text-blue-400 mr-3" />
              <h3 className="text-xl font-bold">Stakeholder Consensus</h3>
            </div>
            <p className="text-blue-100 mb-4">
              Byzantine fault-tolerant consensus mechanisms ensure reliable decision outcomes
            </p>
            <div className="text-2xl font-bold text-blue-400">99.99% Reliability</div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="flex items-center mb-4">
              <Clock className="w-8 h-8 text-green-400 mr-3" />
              <h3 className="text-xl font-bold">Rapid Decisions</h3>
            </div>
            <p className="text-blue-100 mb-4">
              Real-time processing and consensus building reduces decision cycles dramatically
            </p>
            <div className="text-2xl font-bold text-green-400">65% Faster</div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            🎯 Fortune 500 Success Story: 300% Decision Accuracy
          </h3>
          <p className="text-lg text-purple-100 mb-6 max-w-3xl mx-auto">
            See how a Fortune 500 manufacturing giant achieved unprecedented decision accuracy 
            with neural consensus algorithms, saving $2.8B annually through better decisions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/case-studies/fortune-500-neural-consensus-transformation-2025"
              className="bg-white text-purple-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center group"
            >
              Read Success Story
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              href="/blog/ai-2025-neural-consensus-revolution"
              className="bg-purple-700 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-purple-800 transition-all duration-300 flex items-center group border-2 border-white/20"
            >
              Learn More
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold text-purple-400 mb-2">300%</div>
            <div className="text-blue-100">Decision Accuracy</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-400 mb-2">$2.8B</div>
            <div className="text-blue-100">Annual Savings</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-400 mb-2">65%</div>
            <div className="text-blue-100">Faster Decisions</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-yellow-400 mb-2">99.99%</div>
            <div className="text-blue-100">System Uptime</div>
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-8 text-blue-200">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-purple-400 rounded-full mr-2 animate-pulse"></div>
              <span>Neural Intelligence</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-blue-400 rounded-full mr-2 animate-pulse"></div>
              <span>Consensus Protocols</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              <span>Real-time Processing</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeuralConsensusRevolutionBanner;