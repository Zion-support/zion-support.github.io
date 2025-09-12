import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function NewContentPromoBanner() {
  return (
    <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="text-2xl">🚀</div>
            <div>
              <h3 className="text-lg font-bold">NEW: AI Content Hub 2025</h3>
              <p className="text-sm opacity-90">
                Fresh articles, case studies, and resources added weekly
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <Link 
              href="/blog/ai-2025-generative-ai-enterprise-adoption"
              className="bg-white bg-opacity-20 hover:bg-opacity-30 px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
            >
              🤖 Generative AI Guide
            </Link>
            <Link 
              href="/blog/ai-2025-automation-revolution"
              className="bg-white bg-opacity-20 hover:bg-opacity-30 px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
            >
              ⚡ Automation Revolution
            </Link>
            <Link 
              href="/case-studies/ai-healthcare-diagnosis-revolution-2025"
              className="bg-white bg-opacity-20 hover:bg-opacity-30 px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
            >
              🏥 Healthcare Success
            </Link>
            <Link 
              href="/resources"
              className="bg-white text-purple-600 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-opacity-90 transition-colors"
            >
              📚 Free Resources
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContentPromoBanner;