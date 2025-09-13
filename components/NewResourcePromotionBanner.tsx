import React from 'react';
import Link from 'next/link';

const NewResourcePromotionBanner = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-emerald-900 via-teal-900 to-cyan-900 py-16">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 via-teal-600/20 to-cyan-600/20"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23A7F3D0" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4 animate-pulse">
            📋 NEW RESOURCE - FREE DOWNLOAD
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Automation <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Implementation Checklist</span>
          </h2>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto mb-8">
            Download our comprehensive 50+ point checklist covering every aspect of AI automation implementation. Avoid common pitfalls and ensure project success.
          </p>
        </div>

        {/* Resource Highlights */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm border border-emerald-500/30 rounded-2xl p-6 text-center">
            <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📊</span>
            </div>
            <h3 className="text-xl font-bold text-emerald-400 mb-3">Pre-Implementation</h3>
            <p className="text-gray-300 text-sm">Business case development, ROI analysis, stakeholder alignment, and technology assessment</p>
          </div>
          <div className="bg-gradient-to-br from-teal-600/20 to-cyan-600/20 backdrop-blur-sm border border-teal-500/30 rounded-2xl p-6 text-center">
            <div className="bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🔧</span>
            </div>
            <h3 className="text-xl font-bold text-teal-400 mb-3">Implementation</h3>
            <p className="text-gray-300 text-sm">Pilot programs, data preparation, system integration, testing, and change management</p>
          </div>
          <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-6 text-center">
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📈</span>
            </div>
            <h3 className="text-xl font-bold text-cyan-400 mb-3">Optimization</h3>
            <p className="text-gray-300 text-sm">Performance monitoring, ROI measurement, scaling strategies, and continuous improvement</p>
          </div>
        </div>

        {/* What's Included */}
        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">What's Included in Your Free Checklist</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-bold text-emerald-400 mb-3">✅ Comprehensive Coverage</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• 50+ detailed checklist items</li>
                <li>• Pre, during, and post-implementation phases</li>
                <li>• Risk assessment and mitigation strategies</li>
                <li>• ROI calculation frameworks</li>
                <li>• Change management best practices</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold text-teal-400 mb-3">🎯 Practical Tools</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• Ready-to-use templates and forms</li>
                <li>• Success metrics and KPIs</li>
                <li>• Common pitfalls and how to avoid them</li>
                <li>• Industry best practices and case studies</li>
                <li>• Expert tips from successful implementations</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <div className="text-center mb-12">
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <div className="flex text-yellow-400">
                {'★'.repeat(5)}
              </div>
              <span className="text-white ml-2 font-semibold">4.9/5</span>
            </div>
            <p className="text-gray-300 italic mb-4">
              "This checklist saved us months of planning time and helped us avoid costly mistakes. Our AI automation project was delivered on time and exceeded ROI expectations."
            </p>
            <p className="text-emerald-400 font-semibold">- Sarah Chen, CTO, TechCorp</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Get Your Free Implementation Checklist</h3>
            <p className="text-emerald-100 mb-6">Join 10,000+ enterprise leaders who have successfully implemented AI automation using our proven framework.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/resources/ai-automation-implementation-checklist-2025" className="bg-white text-emerald-600 px-8 py-3 rounded-full font-semibold hover:bg-emerald-50 transition-colors">
                📥 Download Now
              </Link>
              <Link href="/case-studies" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-emerald-600 transition-colors">
                View Success Stories
              </Link>
            </div>
            <p className="text-emerald-200 text-sm mt-4">No email required • Instant download • 100% free</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewResourcePromotionBanner;