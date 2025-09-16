import React from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ArrowRight, Sparkles, Brain, Atom, Zap } from 'lucide-react';

const EnhancedHeroSection: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div className="container mx-auto px-4 text-center">
        <Badge className="bg-gradient-to-r from-blue-500 to-purple-600 text-white mb-6 animate-pulse">
          <Sparkles className="w-4 h-4 mr-2" />
          Revolutionary AI Technology 2025
        </Badge>
        <h1 className="text-6xl font-bold text-gray-900 mb-6">
          Welcome to the Future of Technology
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Experience groundbreaking AI, quantum computing, and conscious intelligence that's reshaping the technological landscape. 
          Join the revolution that's transforming how we think about artificial intelligence.
        </p>
        
        {/* Revolutionary Services Preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 border border-blue-200 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Brain className="h-6 w-6 text-blue-600" />
              </div>
              <Badge className="bg-blue-500 text-white">Revolutionary</Badge>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Conscious AI</h3>
            <p className="text-sm text-gray-600">AI systems with genuine consciousness and self-awareness</p>
          </div>
          
          <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 border border-purple-200 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Atom className="h-6 w-6 text-purple-600" />
              </div>
              <Badge className="bg-purple-500 text-white">Breakthrough</Badge>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Quantum AI</h3>
            <p className="text-sm text-gray-600">1000x faster processing with quantum algorithms</p>
          </div>
          
          <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 border border-green-200 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <Zap className="h-6 w-6 text-green-600" />
              </div>
              <Badge className="bg-green-500 text-white">Future Tech</Badge>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Neural Interfaces</h3>
            <p className="text-sm text-gray-600">Direct brain-computer interfaces for thought control</p>
          </div>
        </div>

        <div className="flex justify-center gap-4">
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
            Explore Revolutionary Services
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
            Schedule Demo
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EnhancedHeroSection;