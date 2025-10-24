<<<<<<< HEAD
import React from 'react'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">About Zion Tech Group</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-6">
              Zion Tech Group is a leading technology company specializing in cutting-edge solutions 
              for modern businesses. We combine expertise in artificial intelligence, 5G technology, 
              cybersecurity, and digital transformation to deliver innovative solutions that drive growth.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              To empower businesses with advanced technology solutions that enhance efficiency, 
              security, and innovation while maintaining the highest standards of quality and service.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Our Vision</h2>
            <p className="text-gray-600 mb-6">
              To be the global leader in technology solutions, recognized for our innovation, 
              reliability, and commitment to client success.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Why Choose Us</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Expert team with decades of combined experience</li>
              <li>Cutting-edge technology and methodologies</li>
              <li>Proven track record of successful implementations</li>
              <li>24/7 support and maintenance</li>
              <li>Custom solutions tailored to your needs</li>
            </ul>
          </div>
          
          <div className="mt-12 text-center">
            <Link 
              href="/contact" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
=======
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
>>>>>>> cursor/fix-errors-and-merge-to-main-0ea5
