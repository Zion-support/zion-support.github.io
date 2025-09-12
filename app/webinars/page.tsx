import React from 'react';
import SEO from '../../components/SEO';
import Link from 'next/link';

export default function WebinarsPage() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="AI Webinars 2025: Live Training & Masterclasses"
        description="Join our exclusive live webinars and masterclasses on AI transformation, implementation strategies, and cutting-edge technologies. Learn from industry experts."
        keywords="AI webinars, live training, AI masterclass, AI education, enterprise AI, 2025"
        url="/webinars"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            🎓 AI Webinars 2025
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Join our exclusive live webinars and masterclasses featuring proven strategies, 
            real-world case studies, and expert insights from successful AI transformations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/webinars/ai-2025-enterprise-transformation-masterclass"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
            >
              🚀 View Featured Masterclass
            </Link>
            <Link
              href="/contact"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors text-lg"
            >
              📧 Get Notified of New Webinars
            </Link>
          </div>
        </div>

        {/* Featured Webinar */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">🔥 Featured This Month</h2>
          
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-200">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-2/3">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">LIVE</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">3-PART SERIES</span>
                </div>
                
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  AI 2025 Enterprise Transformation Masterclass
                </h3>
                
                <p className="text-lg text-gray-700 mb-6">
                  Join our exclusive 3-part live webinar series featuring proven strategies, frameworks, 
                  and real-world case studies from successful Fortune 500 AI transformations. 
                  Limited seats available.
                </p>
                
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Session 1: Foundation</h4>
                    <p className="text-sm text-gray-600">Feb 15, 2025 • 2:00 PM EST</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Session 2: Implementation</h4>
                    <p className="text-sm text-gray-600">Feb 16, 2025 • 2:00 PM EST</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Session 3: Scaling</h4>
                    <p className="text-sm text-gray-600">Feb 17, 2025 • 2:00 PM EST</p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/webinars/ai-2025-enterprise-transformation-masterclass"
                    className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
                  >
                    🎯 Register Now - $497
                  </Link>
                  <Link
                    href="/webinars/ai-2025-enterprise-transformation-masterclass"
                    className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors text-center"
                  >
                    📖 Learn More
                  </Link>
                </div>
              </div>
              
              <div className="lg:w-1/3">
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">What's Included:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ 3 Live Interactive Sessions</li>
                    <li>✓ Lifetime Access to Recordings</li>
                    <li>✓ $2,000+ Worth of Resources</li>
                    <li>✓ Private Community Access</li>
                    <li>✓ 30-Day Money-Back Guarantee</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming Webinars */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">📅 Upcoming Webinars</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200">
              <div className="text-3xl mb-4">🤖</div>
              <div className="bg-orange-100 text-orange-800 text-sm font-medium px-3 py-1 rounded-full inline-block mb-3">
                UPCOMING
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                AI Automation Implementation Workshop
              </h3>
              <p className="text-gray-700 mb-4">
                Hands-on workshop covering practical AI automation implementation strategies 
                and best practices for enterprise environments.
              </p>
              <div className="text-sm text-gray-600 mb-4">
                <strong>Date:</strong> March 5, 2025<br />
                <strong>Time:</strong> 2:00 PM EST<br />
                <strong>Duration:</strong> 2 hours
              </div>
              <button className="w-full bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-orange-700 transition-colors">
                Register Interest
              </button>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200">
              <div className="text-3xl mb-4">🛡️</div>
              <div className="bg-red-100 text-red-800 text-sm font-medium px-3 py-1 rounded-full inline-block mb-3">
                UPCOMING
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                AI Security & Governance Masterclass
              </h3>
              <p className="text-gray-700 mb-4">
                Comprehensive guide to AI security, ethical considerations, and governance 
                frameworks for responsible AI implementation.
              </p>
              <div className="text-sm text-gray-600 mb-4">
                <strong>Date:</strong> March 12, 2025<br />
                <strong>Time:</strong> 2:00 PM EST<br />
                <strong>Duration:</strong> 2.5 hours
              </div>
              <button className="w-full bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                Register Interest
              </button>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200">
              <div className="text-3xl mb-4">📊</div>
              <div className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full inline-block mb-3">
                UPCOMING
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                AI ROI Measurement & Analytics
              </h3>
              <p className="text-gray-700 mb-4">
                Learn how to measure, track, and optimize AI ROI with proven frameworks 
                and analytics strategies used by Fortune 500 companies.
              </p>
              <div className="text-sm text-gray-600 mb-4">
                <strong>Date:</strong> March 19, 2025<br />
                <strong>Time:</strong> 2:00 PM EST<br />
                <strong>Duration:</strong> 2 hours
              </div>
              <button className="w-full bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                Register Interest
              </button>
            </div>
          </div>
        </div>

        {/* Past Webinars */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">📚 Past Webinars (Recordings Available)</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="text-3xl mb-4">🏢</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Enterprise AI Strategy Workshop
              </h3>
              <p className="text-gray-700 mb-4">
                Comprehensive workshop covering AI strategy development, business case creation, 
                and organizational alignment for successful AI transformation.
              </p>
              <div className="text-sm text-gray-600 mb-4">
                <strong>Originally aired:</strong> January 15, 2025<br />
                <strong>Duration:</strong> 2 hours
              </div>
              <button className="bg-gray-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-700 transition-colors">
                Watch Recording
              </button>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="text-3xl mb-4">🔧</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                AI Implementation Technical Deep Dive
              </h3>
              <p className="text-gray-700 mb-4">
                Technical deep dive into AI implementation, covering architecture, 
                data pipelines, model deployment, and monitoring strategies.
              </p>
              <div className="text-sm text-gray-600 mb-4">
                <strong>Originally aired:</strong> January 22, 2025<br />
                <strong>Duration:</strong> 2.5 hours
              </div>
              <button className="bg-gray-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-700 transition-colors">
                Watch Recording
              </button>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            📧 Stay Updated with New Webinars
          </h2>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Get notified about new webinars, exclusive content, and early access to 
            registration. Join 5,000+ AI professionals in our community.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            No spam. Unsubscribe anytime. Read our privacy policy.
          </p>
        </div>
      </div>
    </div>
  );
}