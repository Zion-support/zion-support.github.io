import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Head>
        <title>About Us — Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, values, and commitment to delivering cutting-edge IT and AI solutions." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="text-2xl font-bold text-white">Zion Tech Group</Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/about" className="text-purple-300 font-semibold">About</Link>
              <Link href="/services" className="text-white hover:text-purple-300 transition-colors">Services</Link>
              <Link href="/contact" className="text-white hover:text-purple-300 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Zion Tech Group</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Pioneering the future of technology with innovative IT solutions and cutting-edge AI services.
            </p>
          </div>

          {/* Mission Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-gray-300 text-lg mb-6">
                At Zion Tech Group, we believe technology should empower businesses to achieve extraordinary results. 
                Our mission is to deliver innovative IT solutions and AI services that transform how organizations 
                operate, compete, and grow in the digital age.
              </p>
              <p className="text-gray-300 text-lg">
                We combine deep technical expertise with a passion for innovation to create solutions that are 
                not just cutting-edge, but practical and impactful for real-world challenges.
              </p>
            </div>
            <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">Our Values</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="text-purple-400 mr-3">✓</span>
                  Innovation & Excellence
                </li>
                <li className="flex items-center">
                  <span className="text-purple-400 mr-3">✓</span>
                  Client Success Focus
                </li>
                <li className="flex items-center">
                  <span className="text-purple-400 mr-3">✓</span>
                  Ethical Technology
                </li>
                <li className="flex items-center">
                  <span className="text-purple-400 mr-3">✓</span>
                  Continuous Learning
                </li>
              </ul>
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-white text-center mb-12">Our Expertise</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20 text-center">
                <div className="text-4xl mb-4">🧠</div>
                <h3 className="text-xl font-semibold text-white mb-3">AI & Machine Learning</h3>
                <p className="text-gray-300">Advanced AI solutions, machine learning models, and intelligent automation systems.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20 text-center">
                <div className="text-4xl mb-4">☁️</div>
                <h3 className="text-xl font-semibold text-white mb-3">Cloud Infrastructure</h3>
                <p className="text-gray-300">Scalable cloud architectures, DevOps practices, and infrastructure optimization.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20 text-center">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-xl font-semibold text-white mb-3">Cybersecurity</h3>
                <p className="text-gray-300">Comprehensive security solutions, threat detection, and compliance frameworks.</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Work With Us?</h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Let's discuss how we can help transform your business with innovative technology solutions.
              </p>
              <Link href="/contact" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105 inline-block">
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black/40 backdrop-blur-md border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-400">
            <p>&copy; 2025 Zion Tech Group. All rights reserved.</p>
            <div className="mt-4 flex justify-center space-x-6">
              <Link href="/about" className="hover:text-white transition-colors">About</Link>
              <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
              <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default About
