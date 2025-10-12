import React from 'react'
import { Helmet } from 'react-helmet-async'
import Layout from '../layout'

const FivegMobileApplicationsPage: React.FC = () => {
  return (
    <Layout
      title="5g Mobile Applications - Zion Tech Group"
      description="Professional 5g mobile applications services and solutions by Zion Tech Group."
      keywords="5g mobile applications, services, solutions, technology, Zion Tech Group"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                5g Mobile Applications
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional 5g mobile applications services and solutions by Zion Tech Group.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">Feature 1</h3>
              <p className="text-gray-300 mb-4">
                Description of the first key feature or service.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Benefit 1</li>
                <li>• Benefit 2</li>
                <li>• Benefit 3</li>
                <li>• Benefit 4</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">Feature 2</h3>
              <p className="text-gray-300 mb-4">
                Description of the second key feature or service.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Benefit 1</li>
                <li>• Benefit 2</li>
                <li>• Benefit 3</li>
                <li>• Benefit 4</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">Feature 3</h3>
              <p className="text-gray-300 mb-4">
                Description of the third key feature or service.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Benefit 1</li>
                <li>• Benefit 2</li>
                <li>• Benefit 3</li>
                <li>• Benefit 4</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default FivegMobileApplicationsPage