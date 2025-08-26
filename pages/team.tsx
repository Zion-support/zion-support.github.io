import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function TeamPage() {
  return (
    <>
      <Head>
        <title>Our Team - Zion Tech Group</title>
        <meta name="description" content="Meet the talented team behind Zion Tech Group's innovative solutions." />
      </Head>
      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Team</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the talented professionals who are driving innovation and delivering cutting-edge solutions at Zion Tech Group.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Leadership */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">K</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Dr. Kleber Santos</h3>
              <p className="text-blue-600 mb-4">Founder & Chief Executive Officer</p>
              <p className="text-gray-600 mb-4">
                Visionary leader with 15+ years of experience in AI, quantum computing, and technology innovation.
              </p>
              <div className="space-y-2 text-sm text-gray-500">
                <p>📧 kleber@ziontechgroup.com</p>
                <p>📱 +1 302 464 0950</p>
              </div>
            </div>

            {/* Technology Team */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">T</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Technology Team</h3>
              <p className="text-green-600 mb-4">AI & Development Experts</p>
              <p className="text-gray-600 mb-4">
                Our team of engineers and researchers are building the future of AI and technology solutions.
              </p>
              <div className="space-y-2 text-sm text-gray-500">
                <p>🔬 AI Research & Development</p>
                <p>💻 Software Engineering</p>
              </div>
            </div>

            {/* Business Team */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">B</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Business Team</h3>
              <p className="text-purple-600 mb-4">Strategy & Operations</p>
              <p className="text-gray-600 mb-4">
                Dedicated professionals ensuring our solutions meet your business needs and drive growth.
              </p>
              <div className="space-y-2 text-sm text-gray-500">
                <p>📊 Business Strategy</p>
                <p>🚀 Growth & Operations</p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Work With Us?</h2>
            <p className="text-xl mb-6 opacity-90">
              Let's discuss how our team can help transform your business with innovative technology solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get in Touch
              </Link>
              <Link
                href="/services"
                className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Explore Our Services
              </Link>
            </div>
          </div>

          {/* Company Info */}
          <div className="mt-16 text-center">
            <div className="bg-gray-50 rounded-lg p-6 inline-block">
              <h3 className="text-lg font-semibold mb-4">Zion Tech Group</h3>
              <div className="space-y-2 text-gray-600">
                <p>📍 364 E Main St STE 1008 Middletown DE 19709</p>
                <p>📞 +1 302 464 0950</p>
                <p>🌐 https://ziontechgroup.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}