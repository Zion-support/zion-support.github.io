import React from 'react';
import Link from 'next/link';
import { ArrowRight, TrendingUp, Target, Zap, Award, Star, CheckCircle } from 'lucide-react';

export default function UltimateTransformationBanner2025() {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Star className="w-4 h-4 mr-2" />
            NEW: Ultimate Transformation Guide
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            AI 2025: The Ultimate Enterprise Transformation Complete Guide
          </h2>
          
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto">
            Discover how Fortune 500 companies are achieving <strong>1000%+ ROI</strong> with revolutionary AI implementations. 
            The most comprehensive guide to AI transformation in 2025.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">$2.5T</div>
              <div className="text-sm opacity-90">Global AI Market</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">1000%+</div>
              <div className="text-sm opacity-90">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">95%</div>
              <div className="text-sm opacity-90">Fortune 500 Adoption</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">25 min</div>
              <div className="text-sm opacity-90">Complete Guide</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white bg-opacity-10 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <Target className="w-5 h-5 mr-2" />
              What You'll Learn
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                <span>Revolutionary AI Stack of 2025</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                <span>Fortune 500 Case Studies with 1000%+ ROI</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                <span>Complete 36-Month Implementation Framework</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                <span>Technology Stack Revolution</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                <span>ROI and Business Impact Analysis</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                <span>Implementation Checklist</span>
              </li>
            </ul>
          </div>

          <div className="bg-white bg-opacity-10 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <TrendingUp className="w-5 h-5 mr-2" />
              Key Benefits
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Zap className="w-5 h-5 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
                <span><strong>1000%+ ROI</strong> within 24 months</span>
              </li>
              <li className="flex items-start">
                <Zap className="w-5 h-5 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
                <span><strong>70-90% cost reduction</strong> in operational expenses</span>
              </li>
              <li className="flex items-start">
                <Zap className="w-5 h-5 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
                <span><strong>10-50x faster</strong> process execution</span>
              </li>
              <li className="flex items-start">
                <Zap className="w-5 h-5 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
                <span><strong>99%+ accuracy</strong> improvement in data processing</span>
              </li>
              <li className="flex items-start">
                <Zap className="w-5 h-5 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
                <span><strong>500% increase</strong> in new product development</span>
              </li>
              <li className="flex items-start">
                <Zap className="w-5 h-5 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
                <span><strong>Market leadership</strong> in AI transformation</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/blog/ai-2025-ultimate-transformation-complete-guide"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center text-lg"
            >
              Read Complete Guide
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors flex items-center text-lg"
            >
              <Award className="w-5 h-5 mr-2" />
              Get Expert Consultation
            </Link>
          </div>
          
          <p className="text-sm opacity-75 mt-4">
            Join 500+ Fortune 500 companies already transforming with AI
          </p>
        </div>
      </div>
    </div>
  );
}