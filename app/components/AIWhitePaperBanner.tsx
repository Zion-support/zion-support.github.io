import React from 'react'
import Link from 'next/link'
export default function AIWhitePaperBanner() {
  return (
    <section className="py-8 bg-gradient-to-r from-gray-900 via-slate-900 to-gray-900">
      <div>
        <div>
          <div>
            <div>
              <div>
                <span className="text-sm font-semibold text-gray-300">📋 NEW WHITE PAPER</span>
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                AI Implementation White Paper 2025,
              </h2>
              <p>
                Comprehensive guide to enterprise AI implementation strategies, best practices, and proven frameworks for successful transformation.,
              </p>
              <div>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  340% Average ROI,
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  78% Success Rate,
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  8-14 Month Payback,
                </span>
              </div>
            </div>
            <div>
              <Link,
                href="/ai-implementation-white-paper-2025",
                className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
              >
                Read White Paper,
              </Link>
              <Link,
                href="/contact",
                className="border-2 border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors text-center"
              >
                Get Consultation,
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>)}