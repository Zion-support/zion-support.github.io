import React from 'react';
import Link from 'next/link';
import { Globe, Users, Zap, ArrowRight } from 'lucide-react';

export default function MetaverseEnterpriseMegaBanner2026() {
  return (
    <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <Globe className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-2">
                  AI Metaverse Enterprise Transformation 2026
                </h2>
                <p className="text-lg opacity-90">
                  The Future of Virtual Workspaces and Global Collaboration
                </p>
              </div>
            </div>
            
            <p className="text-xl mb-8 opacity-90">
              Revolutionary virtual workspace technology delivering 400% productivity gains, 
              99% collaboration efficiency, and $200M+ ROI for global corporations.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold">400%</div>
                <div className="text-sm opacity-90">Productivity Gain</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">$200M+</div>
                <div className="text-sm opacity-90">Average ROI</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">99%</div>
                <div className="text-sm opacity-90">Collaboration Efficiency</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm opacity-90">Global Operations</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/blog/ai-metaverse-enterprise-transformation-2026"
                className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg inline-flex items-center justify-center"
              >
                Explore Metaverse AI <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/case-studies/ai-metaverse-enterprise-mega-success-2026"
                className="border-2 border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center"
              >
                View $400M Success Story
              </Link>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-8 h-8 text-yellow-400" />
                <h3 className="text-lg font-bold">AI Avatar Intelligence</h3>
              </div>
              <p className="text-sm opacity-90 mb-3">
                Advanced AI avatars learning preferences and optimizing collaboration patterns for maximum efficiency.
              </p>
              <div className="text-2xl font-bold text-yellow-400">99%</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="w-8 h-8 text-cyan-400" />
                <h3 className="text-lg font-bold">Global Virtual Offices</h3>
              </div>
              <p className="text-sm opacity-90 mb-3">
                Seamless virtual environments enabling 24/7 global collaboration without boundaries.
              </p>
              <div className="text-2xl font-bold text-cyan-400">24/7</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-8 h-8 text-green-400" />
                <h3 className="text-lg font-bold">Revolutionary Features</h3>
              </div>
              <p className="text-sm opacity-90 mb-3">
                Virtual corporate campuses, immersive training, and real-time collaboration 
                transforming how enterprises operate globally.
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-lg font-bold text-green-400">400%</div>
                  <div className="text-xs opacity-90">Productivity</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-green-400">95%</div>
                  <div className="text-xs opacity-90">Travel Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-green-400">$50M</div>
                  <div className="text-xs opacity-90">Annual Savings</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}