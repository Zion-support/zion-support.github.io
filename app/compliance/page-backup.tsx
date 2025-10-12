import React from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle, Shield, FileText } from 'lucide-react'
import Layout from '../layout'

export default function ComplianceBackupPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-100">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Compliance Backup
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Backup compliance solutions for regulatory requirements
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <CheckCircle className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Regulatory Compliance</h3>
              <p className="text-gray-600">Meet all regulatory requirements with our backup solutions</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <Shield className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Data Security</h3>
              <p className="text-gray-600">Secure backup storage with encryption and access controls</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <FileText className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Documentation</h3>
              <p className="text-gray-600">Comprehensive documentation for audit trails</p>
            </div>
          </div>

          <div className="text-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 bg-yellow-600 text-white font-semibold rounded-lg hover:bg-yellow-700 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}

