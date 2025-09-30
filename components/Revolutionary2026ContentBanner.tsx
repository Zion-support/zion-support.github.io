import React from 'react';
import Link from 'next/link';
import { ArrowRight, Brain, Rocket, Zap, TrendingUp } from 'lucide-react';

export default function Revolutionary2026ContentBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white opacity-5 rounded-full"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-white opacity-5 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white opacity-5 rounded-full"></div>
        <div className="absolute bottom-32 right-1/3 w-8 h-8 bg-white opacity-5 rounded-full"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white bg-opacity-20 text-sm font-medium mb-6">
            <span className="w-4 h-4 mr-2">🚀</span>
            REVOLUTIONARY 2026 CONTENT
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Breakthrough AI Technologies
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
              That Will Transform 2026
            </span>
          </h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto mb-8">
            Discover the revolutionary AI technologies that are reshaping industries and creating unprecedented opportunities for growth and innovation.
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Neural Interfaces */}
          <Link href="/blog/ai-neural-interfaces-2026" className="group">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 hover:bg-opacity-20 transition-all duration-300 hover:scale-105 border border-white border-opacity-20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-yellow-400">NEW 2026</div>
                  <div className="text-sm text-purple-200">Neural Computing</div>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-400 transition-colors">
                AI Neural Interfaces 2026
              </h3>
              <p className="text-purple-100 text-sm mb-4">
                Revolutionary brain-computer integration with 95% accuracy and $12M+ ROI potential.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex gap-4 text-sm">
                  <div className="text-center">
                    <div className="font-bold text-yellow-400">95%</div>
                    <div className="text-purple-200">Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-green-400">$12M+</div>
                    <div className="text-purple-200">ROI</div>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>

          {/* Space Technology */}
          <Link href="/blog/ai-space-tech-2026" className="group">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 hover:bg-opacity-20 transition-all duration-300 hover:scale-105 border border-white border-opacity-20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-yellow-400">NEW 2026</div>
                  <div className="text-sm text-purple-200">Space Technology</div>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-400 transition-colors">
                AI Space Technology 2026
              </h3>
              <p className="text-purple-100 text-sm mb-4">
                Autonomous space operations with 99.9% reliability and $500M+ cost savings.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex gap-4 text-sm">
                  <div className="text-center">
                    <div className="font-bold text-yellow-400">99.9%</div>
                    <div className="text-purple-200">Reliability</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-green-400">$500M+</div>
                    <div className="text-purple-200">Savings</div>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>

          {/* Success Story */}
          <Link href="/case-studies/ai-neural-interface-success-2026" className="group">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 hover:bg-opacity-20 transition-all duration-300 hover:scale-105 border border-white border-opacity-20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-yellow-400">CASE STUDY</div>
                  <div className="text-sm text-purple-200">Fortune 500</div>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-400 transition-colors">
                $12M Neural Interface Success
              </h3>
              <p className="text-purple-100 text-sm mb-4">
                See how a Fortune 500 company achieved $12M ROI with neural interface implementation.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex gap-4 text-sm">
                  <div className="text-center">
                    <div className="font-bold text-yellow-400">$12M</div>
                    <div className="text-purple-200">ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-green-400">6mo</div>
                    <div className="text-purple-200">Payback</div>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Link
              href="/blog"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
            >
              Explore All 2026 Content
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-600 transition-colors"
            >
              View Success Stories
            </Link>
          </div>
          <p className="text-purple-200 text-sm mt-4">
            Join 10,000+ professionals transforming their organizations with cutting-edge AI technology
          </p>
        </div>
      </div>
    </section>
  );
}