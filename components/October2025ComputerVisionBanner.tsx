// import React from 'react';
import { Eye, Camera, CheckCircle, TrendingUp } from 'lucide-react';

const October2025ComputerVisionBanner: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-cyan-900 via-blue-900 to-indigo-900 border-y-4 border-cyan-500">
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Animated background effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse -top-48 -left-48"></div>
        <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse -bottom-48 -right-48 animation-delay-2000"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Badge */}
        <div className="flex items-center justify-center mb-6">
          <div className="inline-flex items-center gap-2 bg-cyan-500/20 backdrop-blur-sm border border-cyan-400/30 rounded-full px-6 py-2">
            <Camera className="w-5 h-5 text-cyan-400 animate-pulse" />
            <span className="text-cyan-300 font-bold text-sm tracking-wider">
              👁️ BREAKING: OCTOBER 1, 2025 - COMPUTER VISION REVOLUTION 👁️
            </span>
            <Camera className="w-5 h-5 text-cyan-400 animate-pulse" />
          </div>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="space-y-3">
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                Advanced Computer Vision for Enterprise
              </h2>
              <p className="text-xl text-cyan-200 font-medium">
                Production-ready vision AI systems delivering 97% accuracy and $4.2B in value
              </p>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-cyan-500/10 backdrop-blur-sm border border-cyan-400/30 rounded-lg p-4">
                <div className="text-3xl font-bold text-cyan-300 mb-1">$4.2B</div>
                <div className="text-sm text-cyan-200">Annual Value</div>
              </div>
              <div className="bg-blue-500/10 backdrop-blur-sm border border-blue-400/30 rounded-lg p-4">
                <div className="text-3xl font-bold text-blue-300 mb-1">97%</div>
                <div className="text-sm text-blue-200">Accuracy</div>
              </div>
              <div className="bg-indigo-500/10 backdrop-blur-sm border border-indigo-400/30 rounded-lg p-4">
                <div className="text-3xl font-bold text-indigo-300 mb-1">92%</div>
                <div className="text-sm text-indigo-200">Labor Reduction</div>
              </div>
              <div className="bg-cyan-500/10 backdrop-blur-sm border border-cyan-400/30 rounded-lg p-4">
                <div className="text-3xl font-bold text-cyan-300 mb-1">850%</div>
                <div className="text-sm text-cyan-200">ROI in 24 Months</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="/blog/ai-2025-oct-advanced-computer-vision-enterprise"
                className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-cyan-500/50 group"
              >
                <Eye className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Read Complete Guide
              </a>
              <a
                href="/case-studies/ai-2025-oct-global-retail-computer-vision-4-2-billion-success"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 group"
              >
                <CheckCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                View $4.2B Success Story
              </a>
            </div>
          </div>

          {/* Right Column - Features */}
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-cyan-400/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-cyan-400" />
                Enterprise Applications
              </h3>
              <ul className="space-y-3 text-cyan-100">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 font-bold mt-1">✓</span>
                  <span><strong>Manufacturing:</strong> 97% defect detection accuracy</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 font-bold mt-1">✓</span>
                  <span><strong>Retail:</strong> 340% operational efficiency gains</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 font-bold mt-1">✓</span>
                  <span><strong>Healthcare:</strong> 94% diagnostic accuracy</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 font-bold mt-1">✓</span>
                  <span><strong>Security:</strong> 99.7% threat detection</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 font-bold mt-1">✓</span>
                  <span>YOLOv8, SAM, Vision Transformers, CLIP</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 font-bold mt-1">✓</span>
                  <span>Edge deployment with TensorRT optimization</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-blue-500/20 to-indigo-500/20 backdrop-blur-sm border border-blue-400/30 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-2">🏆 Fortune 100 Retail Success</h3>
              <p className="text-blue-100 text-sm mb-3">
                Global retailer deploys <span className="text-blue-300 font-bold">12,000 cameras</span> across 2,400 stores, achieving <span className="text-blue-300 font-bold">$4.2B annual value</span>
              </p>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="text-blue-200">• 97.3% accuracy</div>
                <div className="text-blue-200">• 0.8s inspection time</div>
                <div className="text-blue-200">• 92% labor reduction</div>
                <div className="text-blue-200">• 850% ROI</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-3 text-cyan-200 text-sm">
            <span className="animate-pulse">👁️</span>
            <span className="font-semibold">
              Featured: YOLOv8 • Vision Transformers • Edge AI • Production deployment • $4.2B case study • ROI calculator
            </span>
            <span className="animate-pulse">👁️</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default October2025ComputerVisionBanner;
