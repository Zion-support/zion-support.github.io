import React from 'react'
import { Helmet } from 'react-helmet-async'
import Layout from '../layout'

const DataCenterPage: React.FC = () => {
  return (
    <Layout
      title="Data Center Solutions - Zion Tech Group"
      description="Comprehensive data center solutions including infrastructure, cloud services, and disaster recovery for enterprise needs."
      keywords="data center, infrastructure, cloud services, disaster recovery, enterprise solutions"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Data Center
              </span>
              <br />
              <span className="text-white">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your business with our advanced data center solutions. 
              Powered by cutting-edge infrastructure technology and industry expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">Infrastructure Design</h3>
              <p className="text-gray-300 mb-4">
                Custom data center infrastructure designed for scalability, reliability, and performance.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Server architecture design</li>
                <li>• Network infrastructure</li>
                <li>• Power and cooling systems</li>
                <li>• Security implementation</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">Cloud Migration</h3>
              <p className="text-gray-300 mb-4">
                Seamless migration of your on-premises infrastructure to cloud-based solutions.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Hybrid cloud solutions</li>
                <li>• Multi-cloud strategies</li>
                <li>• Data migration</li>
                <li>• Cost optimization</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">Disaster Recovery</h3>
              <p className="text-gray-300 mb-4">
                Comprehensive disaster recovery solutions to ensure business continuity.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Backup strategies</li>
                <li>• Recovery planning</li>
                <li>• Testing and validation</li>
                <li>• 24/7 monitoring</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default DataCenterPage