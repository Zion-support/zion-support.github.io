import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Brain, Zap, TrendingUp, Calendar, ArrowRight } from 'lucide-react';

export default function NewContentNavigation() {
  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🚀</span>
              <span className="font-bold text-lg text-gray-900">New Content</span>
            </div>
            
            <nav className="hidden md:flex items-center gap-6">
              <Link to="/blog/ai-2025-january-autonomous-enterprise-revolution"
                className="flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
              >
                <Brain className="h-4 w-4" />
                Autonomous Enterprise
              </Link>
              
              <Link to="/blog/ai-2025-january-quantum-computing-breakthrough"
                className="flex items-center gap-2 text-sm font-medium text-purple-600 hover:text-purple-800 transition-colors"
              >
                <Zap className="h-4 w-4" />
                Quantum Computing
              </Link>
              
              <Link to="/content/case-studies/fortune-500-quantum-ai-transformation"
                className="flex items-center gap-2 text-sm font-medium text-green-600 hover:text-green-800 transition-colors"
              >
                <TrendingUp className="h-4 w-4" />
                Success Story
              </Link>
              
              <Link to="/content/services/quantum-ai-consulting"
                className="flex items-center gap-2 text-sm font-medium text-orange-600 hover:text-orange-800 transition-colors"
              >
                <BookOpen className="h-4 w-4" />
                Services
              </Link>
            </nav>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Calendar className="h-4 w-4" />
            <span>January 2025</span>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <div className="md:hidden mt-4">
          <div className="grid grid-cols-2 gap-3">
            <Link to="/blog/ai-2025-january-autonomous-enterprise-revolution"
              className="flex items-center gap-2 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
            >
              <Brain className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-800">Autonomous Enterprise</span>
            </Link>
            
            <Link to="/blog/ai-2025-january-quantum-computing-breakthrough"
              className="flex items-center gap-2 p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors"
            >
              <Zap className="h-4 w-4 text-purple-600" />
              <span className="text-sm font-medium text-purple-800">Quantum Computing</span>
            </Link>
            
            <Link to="/content/case-studies/fortune-500-quantum-ai-transformation"
              className="flex items-center gap-2 p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
            >
              <TrendingUp className="h-4 w-4 text-green-600" />
              <span className="text-sm font-medium text-green-800">Success Story</span>
            </Link>
            
            <Link to="/content/services/quantum-ai-consulting"
              className="flex items-center gap-2 p-3 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors"
            >
              <BookOpen className="h-4 w-4 text-orange-600" />
              <span className="text-sm font-medium text-orange-800">Services</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}