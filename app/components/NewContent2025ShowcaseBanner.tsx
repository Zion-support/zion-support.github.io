import React from 'react'
import Link from 'next/link'
export default function NewContent2025ShowcaseBanner() {
  return (
    <section className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div>
        <div className="absolute inset-0" style={{,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http: //www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}} />
      </div>
      <div>
        <div>
          <div>
            <span className="text-sm font-medium">✨ NEW CONTENT 2025</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Revolutionary AI Content Now Live,
          </h2>
          <p>
            Discover the latest insights, case studies, and implementation guides that are transforming businesses worldwide in 2025,
          </p>
        </div>
        <div>
          {/* Featured Blog Post */}
          <div>
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-xl font-bold mb-4">AI 2025: Autonomous Business Revolution</h3>
            <p>
              Learn how autonomous AI systems are revolutionizing business operations with unprecedented efficiency and ROI.,
            </p>
            <Link,
              href="/blog/ai-2025-autonomous-business-revolution-ultimate",
              className="inline-flex items-center bg-white text-purple-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Read Article,
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <p>
              </svg>
            </Link>
          </div>
          {/* Featured Case Study */}
          <div>
            <div className="text-4xl mb-4">📈</div>
            <h3 className="text-xl font-bold mb-4">Enterprise AI Transformation Success</h3>
            <p>
              See how a Fortune 100 company achieved 450% ROI and $75M annual savings through comprehensive AI transformation.,
            </p>
            <Link,
              href="/case-studies/enterprise-ai-transformation-2025-ultimate-success-story",
              className="inline-flex items-center bg-white text-purple-900 px-6 py-3 rounded-lg font-semibold hover: bg-gray-100 transition-colors"
            >
              View Case Study,
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <p>
              </svg>
            </Link>
          </div>
          {/* Implementation Guide */}
          <div>
            <div className="text-4xl mb-4">📚</div>
            <h3 className="text-xl font-bold mb-4">Autonomous Systems Implementation Guide</h3>
            <p>
              Complete roadmap for implementing autonomous AI systems with step-by-step instructions and best practices.,
            </p>
            <Link,
              href="/resources/ai-2025-autonomous-systems-implementation-guide",
              className="inline-flex items-center bg-white text-purple-900 px-6 py-3 rounded-lg font-semibold hover: bg-gray-100 transition-colors"
            >
              Get Guide,
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <p>
              </svg>
            </Link>
          </div>
        </div>
        {/* Success Metrics */}
        <div>
          <div>
            <div className="text-3xl font-bold text-yellow-400 mb-2">450%</div>
            <div className="text-sm text-gray-200">Average ROI</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-400 mb-2">$75M</div>
            <div className="text-sm text-gray-200">Annual Savings</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-400 mb-2">90%</div>
            <div className="text-sm text-gray-200">Efficiency Gain</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
            <div className="text-sm text-gray-200">Autonomous Operations</div>
          </div>
        </div>
        {/* Call to Action */}
        <div>
          <div>
            <Link,
              href="/contact",
              className="bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              Start Your AI Transformation,
            </Link>
            <Link,
              href="/resources",
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors text-lg"
            >
              Explore All Resources,
            </Link>
          </div>
        </div>
      </div>
    </section>
  )}