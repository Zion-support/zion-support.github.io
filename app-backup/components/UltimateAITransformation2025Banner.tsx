import React from 'react'
import Link from 'next/link'

const UltimateAITransformation2025Banner: React.FC = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Ultimate AI Transformation 2025
        </h2>
        <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-4xl mx-auto">
          Join thousands of businesses that have already transformed their operations with our AI solutions. 
          Experience the future of business intelligence today.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Enterprise Solutions</h3>
            <p className="text-gray-200 mb-6">
              Comprehensive AI solutions designed for large enterprises with complex needs.
            </p>
            <Link href="/enterprise" className="text-white font-semibold hover:underline">
              Learn More →
            </Link>
          </div>
          <div className="bg-gradient-to-br from-green-600 to-blue-600 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">SMB Solutions</h3>
            <p className="text-gray-200 mb-6">
              Affordable AI solutions tailored for small and medium-sized businesses.
            </p>
            <Link href="/smb" className="text-white font-semibold hover:underline">
              Learn More →
            </Link>
          </div>
          <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Custom Development</h3>
            <p className="text-gray-200 mb-6">
              Bespoke AI solutions built specifically for your unique business requirements.
            </p>
            <Link href="/custom" className="text-white font-semibold hover:underline">
              Learn More →
            </Link>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
          >
            Start Your Transformation
          </Link>
          <Link
            href="/case-studies"
            className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors"
          >
            View Success Stories
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UltimateAITransformation2025Banner;