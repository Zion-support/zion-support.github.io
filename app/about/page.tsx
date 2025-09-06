import React from 'react';
<<<<<<< HEAD

export const metadata = {
=======
import { Metadata } from 'next';

export const metadata: Metadata = {
>>>>>>> 3318f2d5c61f28687a5ae16b4f86d7fc33cf285c
  title: 'About | Zion Tech Group',
  description: 'Learn about Zion Tech Group\'s mission to deliver enterprise-grade AI, micro SaaS, and IT solutions that drive real business results.',
};

export default function AboutPage() {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Zion Tech Group
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We are a leading technology company specializing in AI, autonomous systems, quantum computing, and innovative business solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-gray-300 text-lg mb-6">
              To empower businesses with cutting-edge technology solutions that
              drive growth, efficiency, and innovation. We believe in the
              transformative power of AI, blockchain, and modern IT
              infrastructure.
            </p>
            <p className="text-gray-300 text-lg">
              Our team of experts is dedicated to delivering solutions that not
              only meet today's challenges but also prepare our clients for
              tomorrow's opportunities.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Our Vision</h2>
            <p className="text-gray-300 text-lg mb-6">
              To be the world's most trusted technology partner, known for
              delivering innovative solutions that transform businesses and
              create lasting value.
            </p>
            <p className="text-gray-300 text-lg">
              We envision a future where technology seamlessly integrates with
              business processes, enabling organizations to achieve their full
              potential.
            </p>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">
                Expert Team
              </h3>
              <p className="text-gray-300">
=======
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Zion Tech Group
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a leading technology company specializing in AI, micro SaaS development, and comprehensive IT solutions that drive business transformation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-6">
              To democratize access to enterprise-grade technology solutions, making AI, 
              cloud infrastructure, and software development accessible to businesses of all sizes.
            </p>
            <p className="text-lg text-gray-600">
              We believe that every company, regardless of size, should have access to 
              the same powerful tools and technologies that drive innovation at the world's 
              largest enterprises.
            </p>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="text-blue-600 mr-3">✓</span>
                Innovation and Excellence
              </li>
              <li className="flex items-center">
                <span className="text-blue-600 mr-3">✓</span>
                Client Success
              </li>
              <li className="flex items-center">
                <span className="text-blue-600 mr-3">✓</span>
                Ethical Technology
              </li>
              <li className="flex items-center">
                <span className="text-blue-600 mr-3">✓</span>
                Continuous Learning
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Expert Team
              </h3>
              <p className="text-gray-600">
>>>>>>> 3318f2d5c61f28687a5ae16b4f86d7fc33cf285c
                Our team consists of industry experts with years of experience
                in AI, blockchain, and IT solutions.
              </p>
            </div>
<<<<<<< HEAD
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">
                Proven Track Record
              </h3>
              <p className="text-gray-300">
                We have successfully delivered projects for clients across
                various industries and scales.
              </p>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">
                Innovation Focus
              </h3>
              <p className="text-gray-300">
=======
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Proven Track Record
              </h3>
              <p className="text-gray-600">
                We have successfully delivered 1000+ projects for clients across
                various industries and scales.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Innovation Focus
              </h3>
              <p className="text-gray-600">
>>>>>>> 3318f2d5c61f28687a5ae16b4f86d7fc33cf285c
                We stay at the forefront of technology trends and continuously
                innovate our solutions.
              </p>
            </div>
          </div>
        </div>
<<<<<<< HEAD
=======

        <div className="bg-blue-50 rounded-xl p-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to transform your business?
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Let's discuss how we can help you achieve your goals with our 
              comprehensive technology solutions.
            </p>
            <a
              href="/contact"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Contact Us Today
            </a>
          </div>
        </div>
>>>>>>> 3318f2d5c61f28687a5ae16b4f86d7fc33cf285c
      </div>
    </div>
  );
}