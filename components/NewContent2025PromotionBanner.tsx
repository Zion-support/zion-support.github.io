import React from 'react';
import Link from 'next/link';

export default function NewContent2025PromotionBanner() {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold mb-2">
            🚀 New AI Content Drop - January 2025
          </h2>
          <p className="text-lg opacity-90">
            Discover cutting-edge insights, real-world case studies, and practical implementation guides
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
            <div className="flex items-center mb-3">
              <span className="text-2xl mr-3">📝</span>
              <h3 className="text-xl font-semibold">Latest Blog Posts</h3>
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/blog/ai-2025-multimodal-revolution" className="hover:text-yellow-300 transition-colors">
                  → Multimodal AI Revolution
                </Link>
              </li>
              <li>
                <Link href="/blog/ai-2025-quantum-machine-learning-breakthrough" className="hover:text-yellow-300 transition-colors">
                  → Quantum ML Breakthrough
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-yellow-300 transition-colors">
                  → View All Posts
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
            <div className="flex items-center mb-3">
              <span className="text-2xl mr-3">📊</span>
              <h3 className="text-xl font-semibold">Case Studies</h3>
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/case-studies/ai-2025-autonomous-manufacturing-revolution" className="hover:text-yellow-300 transition-colors">
                  → Manufacturing AI Revolution
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-yellow-300 transition-colors">
                  → View All Case Studies
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
            <div className="flex items-center mb-3">
              <span className="text-2xl mr-3">🛠️</span>
              <h3 className="text-xl font-semibold">Resources</h3>
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/resources/ai-2025-implementation-master-checklist" className="hover:text-yellow-300 transition-colors">
                  → Implementation Checklist
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-yellow-300 transition-colors">
                  → View All Resources
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="text-center">
          <div className="inline-flex items-center space-x-4">
            <Link 
              href="/mega-content-showcase-2026" 
              className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Explore All New Content
            </Link>
            <Link 
              href="/contact" 
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              Get Expert Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}