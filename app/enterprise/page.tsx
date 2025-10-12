import React from 'react'
import { Helmet } from 'react-helmet-async'
import Layout from '../layout'

const EnterprisePage: React.FC = () => {
  return (
    <Layout
      title="Enterprise Solutions - Zion Tech Group"
      description="Comprehensive enterprise-grade solutions for large-scale business operations including AI, cloud, and digital transformation."
      keywords="enterprise solutions, enterprise software, large-scale solutions, enterprise integration, business solutions"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Enterprise
              </span>
              <br />
              <span className="text-white">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your enterprise with our comprehensive solutions. 
              Powered by cutting-edge technology and industry expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">Enterprise AI</h3>
              <p className="text-gray-300 mb-4">
                Advanced AI solutions designed for large-scale enterprise operations and decision-making.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Machine learning platforms</li>
                <li>• Predictive analytics</li>
                <li>• Process automation</li>
                <li>• Data intelligence</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">Cloud Infrastructure</h3>
              <p className="text-gray-300 mb-4">
                Scalable cloud solutions for enterprise-grade performance and reliability.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Multi-cloud strategies</li>
                <li>• Hybrid cloud solutions</li>
                <li>• Disaster recovery</li>
                <li>• Security compliance</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">Digital Transformation</h3>
              <p className="text-gray-300 mb-4">
                Complete digital transformation services to modernize your enterprise operations.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Legacy system modernization</li>
                <li>• Process optimization</li>
                <li>• Change management</li>
                <li>• Training and support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default EnterprisePage