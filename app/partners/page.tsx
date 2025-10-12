import React from 'react'
import { Helmet } from 'react-helmet-async'
import Layout from '../layout'

const PartnersPage: React.FC = () => {
  return (
    <Layout
      title="Partners - Zion Tech Group"
      description="Strategic partnerships and collaboration opportunities with Zion Tech Group for mutual growth and innovation."
      keywords="partners, partnerships, collaboration, strategic alliances, business partnerships"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Partners
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Strategic partnerships and collaboration opportunities for mutual growth and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">Strategic Partners</h3>
              <p className="text-gray-300 mb-4">
                Long-term strategic partnerships for joint innovation and market expansion.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Joint product development</li>
                <li>• Market expansion</li>
                <li>• Technology integration</li>
                <li>• Revenue sharing</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">Technology Partners</h3>
              <p className="text-gray-300 mb-4">
                Technology partnerships for enhanced solutions and platform integration.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• API integrations</li>
                <li>• Platform compatibility</li>
                <li>• Technical support</li>
                <li>• Co-marketing</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">Channel Partners</h3>
              <p className="text-gray-300 mb-4">
                Channel partnerships for distribution and sales collaboration.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Reseller programs</li>
                <li>• Referral programs</li>
                <li>• Training and certification</li>
                <li>• Marketing support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default PartnersPage