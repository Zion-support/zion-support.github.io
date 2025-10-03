// import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Rocket, TrendingUp, Zap, DollarSign } from 'lucide-react';

export default function MLOpsTransformationBanner() {
  return (
    <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-16 px-4 sm:px-6 lg:px-8 my-8 rounded-2xl shadow-2xl overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-white/20 backdrop-blur-sm border border-white/30">
            <Rocket className="w-4 h-4 mr-2" />
            NEW: MLOps Success Story
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 leading-tight">
          From 18 Models to 500+ in Production
        </h2>
        
        <p className="text-xl md:text-2xl text-center text-blue-100 mb-8 max-w-4xl mx-auto">
          How a Fortune 500 tech company achieved <span className="font-bold text-white">92% faster deployments</span> and <span className="font-bold text-white">$340M in value</span> with automated MLOps
        </p>

        {/* Key metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10 max-w-5xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <div className="flex items-center justify-center mb-2">
              <TrendingUp className="w-8 h-8 text-green-300" />
            </div>
            <div className="text-3xl font-bold text-center mb-1">29x</div>
            <div className="text-sm text-blue-100 text-center">More Models in Production</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <div className="flex items-center justify-center mb-2">
              <Zap className="w-8 h-8 text-yellow-300" />
            </div>
            <div className="text-3xl font-bold text-center mb-1">92%</div>
            <div className="text-sm text-blue-100 text-center">Faster Deployment Time</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <div className="flex items-center justify-center mb-2">
              <DollarSign className="w-8 h-8 text-green-300" />
            </div>
            <div className="text-3xl font-bold text-center mb-1">$340M</div>
            <div className="text-sm text-blue-100 text-center">Total Value Created</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <div className="flex items-center justify-center mb-2">
              <TrendingUp className="w-8 h-8 text-blue-300" />
            </div>
            <div className="text-3xl font-bold text-center mb-1">67%</div>
            <div className="text-sm text-blue-100 text-center">Cost Reduction</div>
          </div>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/case-studies/ai-2025-oct-02-global-tech-mlops-transformation-340m-success"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-700 font-bold rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 group"
          >
            Read Full Case Study
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <Link to="/blog/ai-2025-oct-02-advanced-mlops-automation-platform"
            className="inline-flex items-center px-8 py-4 bg-blue-800/50 backdrop-blur-sm text-white font-semibold rounded-xl border-2 border-white/30 hover:bg-blue-700/50 transition-all duration-300"
          >
            Implementation Guide
          </Link>
        </div>

        {/* Additional info */}
        <div className="mt-8 text-center">
          <p className="text-blue-100 text-sm">
            <span className="font-semibold">Platform:</span> Kubernetes • Kubeflow • MLflow • Ray • TensorFlow
          </p>
          <p className="text-blue-100 text-sm mt-2">
            <span className="font-semibold">Timeline:</span> 12 months | <span className="font-semibold">ROI:</span> 1,737% over 18 months
          </p>
        </div>
      </div>
    </div>
  );
}

// Alternative compact version for later in the page
export function MLOpsTransformationCompactBanner() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-8 px-6 my-6 rounded-xl shadow-lg">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <Rocket className="w-5 h-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">Success Story</span>
          </div>
          <h3 className="text-2xl font-bold mb-2">
            MLOps Transformation: 500+ Models Deployed
          </h3>
          <p className="text-blue-100">
            See how automated MLOps delivered $340M in value and 92% faster deployments
          </p>
        </div>
        
        <Link to="/case-studies/ai-2025-oct-02-global-tech-mlops-transformation-340m-success"
          className="inline-flex items-center px-6 py-3 bg-white text-blue-700 font-bold rounded-lg hover:bg-blue-50 transition-all duration-200 shadow-md hover:shadow-lg whitespace-nowrap"
        >
          Read Case Study
          <ArrowRight className="ml-2 w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
