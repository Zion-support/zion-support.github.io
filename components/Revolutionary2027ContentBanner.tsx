import React from 'react';
import Link from 'next/link';

export default function Revolutionary2027ContentBanner() {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-8 mb-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold mb-2">
            🚀 Revolutionary 2027 Content is Here!
          </h2>
          <p className="text-xl text-blue-100 mb-4">
            Discover breakthrough AI technologies and $750M success stories
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <Link href="/blog/ai-2027-autonomous-enterprise-transformation" 
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                BREAKTHROUGH
              </span>
              <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
                FEATURED
              </span>
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-blue-200 transition-colors">
              🏢 Autonomous Enterprise Transformation
            </h3>
            <p className="text-blue-100 text-sm mb-3">
              How AI-driven autonomous operations are revolutionizing business with 300% efficiency gains
            </p>
            <div className="text-xs text-blue-200">
              ⏱️ 12 min read • 📅 Jan 15, 2027
            </div>
          </Link>

          <Link href="/blog/ai-2027-neuromorphic-computing-breakthrough" 
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                REVOLUTIONARY
              </span>
              <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                NEW
              </span>
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-blue-200 transition-colors">
              🧠 Neuromorphic Computing Breakthrough
            </h3>
            <p className="text-blue-100 text-sm mb-3">
              Brain-inspired AI systems delivering 1,000x power efficiency and cognitive capabilities
            </p>
            <div className="text-xs text-blue-200">
              ⏱️ 15 min read • 📅 Jan 20, 2027
            </div>
          </Link>

          <Link href="/case-studies/ai-2027-neuromorphic-breakthrough-success" 
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                $750M SUCCESS
              </span>
              <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                CASE STUDY
              </span>
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-blue-200 transition-colors">
              💰 Fortune 100 Transformation
            </h3>
            <p className="text-blue-100 text-sm mb-3">
              How neuromorphic AI delivered 400% efficiency gains and $750M in value creation
            </p>
            <div className="text-xs text-blue-200">
              ⏱️ 8 min read • 📅 Jan 25, 2027
            </div>
          </Link>
        </div>

        <div className="text-center mt-6">
          <Link href="/blog" 
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block">
            Explore All 2027 Content →
          </Link>
        </div>
      </div>
    </div>
  );
}