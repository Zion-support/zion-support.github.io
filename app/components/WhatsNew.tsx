import React from 'react'
import Link from 'next/link'
const WhatsNew: React.FC = () => {;
  return (
    <section className="py-12 bg-gradient-to-r from-blue-50 to-purple-50">
      <div>
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What's New</h2>
          <p className="text-lg text-gray-600">Stay updated with our latest features and content</p>
        </div>
        <div>
          <div>
            <div className="text-sm font-semibold text-blue-600 mb-2">New Feature</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">AI 2026 Content Hub</h3>
            <p className="text-gray-600 mb-4">Discover the latest AI insights and breakthroughs for 2026.</p>
            <Link href="/blog" className="text-blue-600 font-semibold hover:text-blue-800">
              Explore →,
            </Link>
          </div>
          <div>
            <div className="text-sm font-semibold text-purple-600 mb-2">Update</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Enhanced Analytics</h3>
            <p className="text-gray-600 mb-4">New analytics dashboard with real-time insights and reporting.</p>
            <Link href="/analytics" className="text-purple-600 font-semibold hover:text-purple-800">
              Learn More →,
            </Link>
          </div>
          <div>
            <div className="text-sm font-semibold text-green-600 mb-2">Case Study</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Success Stories</h3>
            <p className="text-gray-600 mb-4">Read how our clients achieved 500%+ ROI with our solutions.</p>
            <Link href="/case-studies" className="text-green-600 font-semibold hover:text-green-800">
              View Stories →,
            </Link>
          </div>
        </div>
      </div>
    </section>)}
export default WhatsNew;