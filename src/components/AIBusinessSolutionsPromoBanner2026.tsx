import {
  ArrowRight,
  BarChart3,
  CheckCircle,
  Circle,
  Sparkles,
  TrendingUp,
  X,
  Zap
} from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const AIBusinessSolutionsPromoBanner2026: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  const stats = [
    { value: "300%", label: "ROI Increase" },
    { value: "95%", label: "Time Savings" },
    { value: "99.9%", label: "Uptime" },
    { value: "24/7", label: "AI Support" }
  ];

  const solutions = [
    "Business Intelligence",
    "Process Automation", 
    "Customer Experience",
    "Predictive Analytics"
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-green-900 via-blue-900 to-purple-900 border-b border-green-400/30">
      {/* Animated background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 via-blue-600/10 to-purple-600/10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-6 left-6 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          <div className="absolute top-12 right-12 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
          <div className="absolute bottom-6 left-1/3 w-2.5 h-2.5 bg-purple-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-12 right-1/3 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Left side - Main content */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-center lg:justify-start mb-4">
              <div className="flex items-center bg-gradient-to-r from-green-400 to-blue-400 text-black px-4 py-2 rounded-full text-sm font-bold mr-4">
                <Circle className="h-4 w-4 mr-1" />
                BUSINESS SOLUTIONS
              </div>
              <div className="flex items-center text-green-300 text-sm">
                <TrendingUp className="h-4 w-4 mr-1" />
                Proven Results
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              💼 Transform Your Business with AI 2026
            </h2>
            <p className="text-green-200 text-lg mb-6">
              Revolutionary AI business solutions delivering unprecedented growth, efficiency, and innovation. 
              Join thousands of companies already transforming their operations.
            </p>
            
            {/* Solutions grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
              {solutions.map((solution, index) => (
                <div 
                  key={index}
                  className="inline-flex items-center px-3 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-sm text-white"
                >
                  <CheckCircle className="h-4 w-4 mr-2 text-green-400" />
                  {solution}
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Stats and CTA */}
          <div className="lg:col-span-1">
            <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 text-center">Proven Results</h3>
              
              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-green-400">{stat.value}</div>
                    <div className="text-sm text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </div>
              
              {/* CTA buttons */}
              <div className="space-y-3">
                <Link 
                  to="/ai-business-solutions-2026"
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  <BarChart3 className="h-5 w-5 mr-2" />
                  View Solutions
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
                
                <Link 
                  to="/contact"
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300"
                >
                  <Zap className="h-5 w-5 mr-2" />
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom progress indicator */}
        <div className="mt-6 flex items-center justify-center">
          <div className="flex items-center space-x-2 text-sm text-green-300">
            <Sparkles className="h-4 w-4 animate-pulse" />
            <span>Limited Time: 50% Off First 3 Months</span>
            <Sparkles className="h-4 w-4 animate-pulse" />
          </div>
        </div>

        {/* Progress bar */}
        <div className="mt-4 w-full bg-white/10 rounded-full h-1">
          <div className="bg-gradient-to-r from-green-400 to-blue-400 h-1 rounded-full animate-pulse" style={{width: '85%'}}></div>
        </div>
      </div>

      {/* Close button */}
      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors duration-200"
        aria-label="Close banner"
      >
        <X className="h-5 w-5" />
      </button>

      {/* Floating success indicators */}
      <div className="absolute top-3 left-12 text-green-300/40 text-xs animate-bounce">
        ✓
      </div>
      <div className="absolute top-8 right-16 text-blue-300/40 text-xs animate-bounce delay-1000">
        📈
      </div>
      <div className="absolute bottom-3 left-1/4 text-purple-300/40 text-xs animate-bounce delay-500">
        🎯
      </div>
    </div>
  );
};

export default AIBusinessSolutionsPromoBanner2026;