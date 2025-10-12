import React from 'react'
import { Link } from 'react-router-dom'
import { Cloud, ArrowRight, Server, Shield } from 'lucide-react'
import Layout from '../layout'

export default function CloudInfrastructureManagementPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Cloud Infrastructure Management
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive cloud solutions for scalable and secure infrastructure
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <Cloud className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Cloud Migration</h3>
              <p className="text-gray-600">Seamless migration to cloud platforms</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <Server className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Server Management</h3>
              <p className="text-gray-600">24/7 monitoring and maintenance</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <Shield className="h-12 w-12 text-red-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Security</h3>
              <p className="text-gray-600">Advanced security protocols and compliance</p>
            </div>
          </div>

          <div className="text-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}

