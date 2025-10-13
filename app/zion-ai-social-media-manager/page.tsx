import React from 'react';
import { Share2, BarChart3, Target, Zap } from 'lucide-react';

export default function ZionAISocialMediaManagerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Zion AI Social Media <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Manager</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Manage and optimize your social media presence with AI
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mb-6">
              <Share2 className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Content Scheduling</h3>
            <p className="text-gray-300 mb-6">AI-powered content scheduling and posting</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mb-6">
              <BarChart3 className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Analytics</h3>
            <p className="text-gray-300 mb-6">Comprehensive social media analytics</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Audience Targeting</h3>
            <p className="text-gray-300 mb-6">Smart audience targeting and engagement</p>
          </div>
        </div>
      </div>
    </div>
  );
}