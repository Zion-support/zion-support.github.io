import React from 'react';
import Link from 'next/link';

export default function AutonomousBusinessIntelligence2026Banner() {
  return (
    <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white p-6 rounded-lg mb-8 shadow-lg">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-green-400 text-black px-3 py-1 rounded-full text-sm font-bold">
                FEATURED 2026
              </span>
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
                🧠 AUTONOMOUS AI
              </span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              🧠 AI 2026: Autonomous Business Intelligence
            </h2>
            
            <p className="text-lg lg:text-xl opacity-90 mb-6">
              Discover how <strong>self-optimizing AI systems</strong> are delivering 
              <strong> 300% ROI improvements</strong> without human intervention. 
              Learn from real enterprise implementations.
            </p>
            
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="bg-white/20 px-3 py-1 rounded-full">
                📈 300% ROI Improvement
              </div>
              <div className="bg-white/20 px-3 py-1 rounded-full">
                🤖 Self-Optimizing Systems
              </div>
              <div className="bg-white/20 px-3 py-1 rounded-full">
                ⚡ Real-Time Decisions
              </div>
            </div>
          </div>
          
          <div className="flex flex-col gap-4">
            <Link 
              href="/blog/ai-2026-autonomous-business-intelligence"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors text-center whitespace-nowrap"
            >
              Read Full Guide →
            </Link>
            
            <Link 
              href="/services/ai-autonomous-cloud-ops"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-colors text-center whitespace-nowrap"
            >
              Get Autonomous AI Solutions
            </Link>
            
            <Link 
              href="/contact"
              className="bg-green-400 text-black px-6 py-3 rounded-lg font-bold hover:bg-green-300 transition-colors text-center whitespace-nowrap"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}