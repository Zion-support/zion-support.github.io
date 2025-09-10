import React from 'react'
import { Link } from 'react-router-dom'

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Welcome to Zion Tech Group
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Advanced Technology Solutions for the Modern World
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/services"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Our Services
            </Link>
            <Link
              to="/contact"
              className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Innovation</h3>
            <p className="text-gray-600">
              Cutting-edge technology solutions that drive business growth and efficiency.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Excellence</h3>
            <p className="text-gray-600">
              Delivering high-quality solutions with attention to detail and customer satisfaction.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Reliability</h3>
            <p className="text-gray-600">
              Trusted partner for all your technology needs with proven track record.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage