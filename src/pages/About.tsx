import React from 'react'

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Zion Tech Group</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a leading technology company specializing in AI solutions, cloud services, and digital transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-4">
              To empower businesses with cutting-edge technology solutions that drive innovation, efficiency, and growth.
            </p>
            <p className="text-lg text-gray-600">
              We believe in the transformative power of technology and are committed to delivering exceptional value to our clients.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-lg">
            <div className="text-6xl mb-4">🚀</div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">Innovation First</h3>
            <p className="text-gray-600">
              We stay at the forefront of technology trends to deliver solutions that matter.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold mb-2">Our Values</h3>
            <p className="text-gray-600">
              Excellence, integrity, and innovation guide everything we do.
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">👥</div>
            <h3 className="text-xl font-semibold mb-2">Our Team</h3>
            <p className="text-gray-600">
              Experienced professionals passionate about technology and client success.
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🌍</div>
            <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
            <p className="text-gray-600">
              Serving clients worldwide with localized expertise and support.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About