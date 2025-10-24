'use client'
import React from 'react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About Zion Tech Group
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Leading the future of technology with innovative solutions and exceptional service.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">Our Mission</h2>
              <p className="text-gray-300 mb-6">
                To empower businesses with cutting-edge technology solutions that drive growth, 
                efficiency, and innovation. We believe in the transformative power of technology 
                and its ability to solve complex challenges.
              </p>
              
              <h2 className="text-2xl font-semibold text-white mb-4">Our Vision</h2>
              <p className="text-gray-300">
                To be the global leader in technology consulting and implementation, 
                recognized for our expertise, innovation, and commitment to client success.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">Why Choose Us</h2>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                  <span className="text-gray-300">Expert team with years of experience</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                  <span className="text-gray-300">Cutting-edge technology solutions</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                  <span className="text-gray-300">24/7 support and maintenance</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                  <span className="text-gray-300">Proven track record of success</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
'use client'

import React from 'react'
import Footer from '../components/Footer'

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <main className="container mx-auto px-4 py-16 pt-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
            About Zion Tech Group
          </h1>
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-xl text-gray-300 mb-6">
              Zion Tech Group is a leading provider of advanced AI solutions, cloud services, and IT consulting for modern businesses.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              We specialize in delivering cutting-edge technology solutions that help businesses transform their operations and achieve unprecedented growth.
            </p>
            <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-lg text-gray-300 mb-6">
              To empower businesses with innovative AI and IT solutions that drive efficiency, growth, and competitive advantage.
            </p>
            <h2 className="text-2xl font-bold text-white mb-4">Our Services</h2>
            <ul className="list-disc list-inside text-lg text-gray-300 mb-6 space-y-2">
              <li>AI-Powered Solutions</li>
              <li>Cloud Services</li>
              <li>IT Consulting</li>
              <li>Digital Transformation</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default AboutPage
=======
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-18b5
