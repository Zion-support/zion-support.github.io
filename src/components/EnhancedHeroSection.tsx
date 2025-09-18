import React from 'react';
<<<<<<< HEAD

=======
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ArrowRight, Sparkles, Brain, Atom, Zap } from 'lucide-react';
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
const EnhancedHeroSection: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Welcome to Zion Tech Group
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Leading the future of technology with AI, blockchain, and innovative solutions
        </p>
<<<<<<< HEAD
=======
        {/* Revolutionary Services Preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 border border-blue-200 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Brain className="h-6 w-6 text-blue-600" />
              </div>
              <Badge className="bg-blue-500 text-white">Revolutionary</Badge>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">AI Consciousness 2026</h3>
            <p className="text-sm text-gray-600">Revolutionary AI systems with genuine digital sentience</p>
          </div>
          <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 border border-purple-200 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Atom className="h-6 w-6 text-purple-600" />
              </div>
              <Badge className="bg-purple-500 text-white">Revolutionary</Badge>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Quantum Neural Networks</h3>
            <p className="text-sm text-gray-600">Computing at the speed of thought with quantum processing</p>
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
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white"
            onClick={() => window.location.href = '/ai-innovation-hub-2026'}
          >
            Explore AI Innovation Hub
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white"
            onClick={() => window.location.href = '/advanced-tech-solutions-2026'}
          >
            View Tech Solutions
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
            onClick={() => window.location.href = '/quantum-computing-guide-2026'}
          >
            Quantum Guide
          </Button>
        </div>
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
      </div>
    </div>
  );
};
export default EnhancedHeroSection;