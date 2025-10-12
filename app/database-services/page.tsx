import React from 'react'
import { Helmet } from 'react-helmet-async'
import Layout from '../layout'

const DatabaseServicesPage: React.FC = () => {
  return (
    <Layout
      title="Database Services - Zion Tech Group"
      description="Comprehensive database services including design, implementation, optimization, and maintenance for modern applications."
      keywords="database services, database design, database optimization, data management, SQL, NoSQL"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Database
              </span>
              <br />
              <span className="text-white">Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your business with our advanced database solutions. 
              Powered by cutting-edge database technology and industry expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">Database Design</h3>
              <p className="text-gray-300 mb-4">
                Custom database architecture designed for your specific business needs and scalability requirements.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Schema design and optimization</li>
                <li>• Data modeling and normalization</li>
                <li>• Performance tuning</li>
                <li>• Security implementation</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">Database Migration</h3>
              <p className="text-gray-300 mb-4">
                Seamless migration of your existing databases to modern, scalable solutions.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Legacy system migration</li>
                <li>• Cloud database migration</li>
                <li>• Data transformation</li>
                <li>• Zero-downtime migration</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">Database Maintenance</h3>
              <p className="text-gray-300 mb-4">
                Ongoing maintenance and optimization to ensure peak performance and reliability.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Performance monitoring</li>
                <li>• Backup and recovery</li>
                <li>• Security updates</li>
                <li>• 24/7 support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default DatabaseServicesPage