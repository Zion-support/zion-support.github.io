import React from 'react'
import Link from 'next/link'
export default function Fortune500TransformationBanner() {
  return (
    <section className="py-8 bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900">
      <div>
        <div>
          <div>
            <div>
              <div>
                <span className="text-sm font-semibold text-blue-300">🏆 NEW CASE STUDY</span>
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                Fortune 500 AI Transformation Success Stories,
              </h2>
              <p>
                Discover how leading Fortune 500 companies achieved 400%+ ROI through strategic AI implementation.,
                Real-world case studies with measurable results.,
              </p>
              <div>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  $2.3B Average Savings,
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  425% ROI Increase,
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  78% Efficiency Gain,
                </span>
              </div>
            </div>
            <div>
              <Link,
                href="/fortune-500-ai-transformation",
                className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
              >
                View Case Studies,
              </Link>
              <Link,
                href="/contact",
                className="border-2 border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors text-center"
              >
                Start Your Journey,
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>)}