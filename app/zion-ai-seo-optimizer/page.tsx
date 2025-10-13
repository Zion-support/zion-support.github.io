import React from 'react';
import { Brain, ArrowRight, Zap } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const ZionAiSeoOptimizerPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="ZionAiSeoOptimizer - AI-Powered Business Solution"
        description="Advanced AI-powered solution for enhanced business productivity and efficiency."
        keywords="AI solution, business automation, productivity tools"
      />
      
      <ResponsiveContainer>
        <div className="pt-20 pb-16 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mr-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                ZionAiSeoOptimizer
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              AI-powered solution for enhanced business productivity and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="/contact"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Get Started
              </FuturisticButton>
              <FuturisticButton
                href="/demo"
                variant="secondary"
                size="lg"
                icon={<Zap className="w-5 h-5" />}
              >
                View Demo
              </FuturisticButton>
            </div>
          </div>
        </div>
      </ResponsiveContainer>
    </div>
  );
};

export default ZionAiSeoOptimizerPage;
