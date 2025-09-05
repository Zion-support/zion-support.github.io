import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, values, and commitment to innovation in technology solutions." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        {/* Navigation */}
        <nav className="bg-black/20 backdrop-blur-sm border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-6">
              <div className="flex items-center">
                <Link href="/" className="text-2xl font-bold text-white">Zion Tech Group</Link>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link href="/about" className="text-white px-3 py-2 rounded-md text-sm font-medium">
                    About
                  </Link>
                  <Link href="/services" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Services
                  </Link>
                  <Link href="/contact" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">About Zion Tech Group</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We are a forward-thinking technology company dedicated to delivering innovative solutions that transform businesses and drive growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-gray-300 text-lg mb-4">
                To revolutionize the technology landscape by providing cutting-edge solutions that empower businesses to achieve unprecedented levels of efficiency, security, and innovation.
              </p>
              <p className="text-gray-300 text-lg">
                We believe in the transformative power of technology and are committed to making advanced solutions accessible to organizations of all sizes.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
              <h3 className="text-2xl font-semibold text-white mb-4">Our Values</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-300">
                  <span className="text-blue-400 mr-3">✓</span>
                  Innovation First
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-blue-400 mr-3">✓</span>
                  Client Success
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-blue-400 mr-3">✓</span>
                  Security & Trust
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-blue-400 mr-3">✓</span>
                  Excellence
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <Link 
              href="/contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}