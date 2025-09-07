import React from 'react';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export const metadata = {
  title: "About | Zion Tech Group",
  description: "Learn about Zion Tech Group's mission to deliver enterprise-grade AI, micro SaaS, and IT solutions that drive real business results.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            About Zion Tech Group
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a leading technology company specializing in AI solutions, micro SaaS development, and enterprise IT services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-6">
              To empower businesses with cutting-edge technology solutions that drive growth, efficiency, and innovation.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              We believe in the power of technology to transform industries and create meaningful impact for our clients.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get in Touch
              <ArrowRightIcon className="ml-2 w-5 h-5" />
            </Link>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                <span className="text-gray-600">Innovation and Excellence</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                <span className="text-gray-600">Client Success</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                <span className="text-gray-600">Integrity and Trust</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                <span className="text-gray-600">Continuous Learning</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Solutions</h3>
              <p className="text-gray-600">
                Custom AI implementations that solve real business problems and drive efficiency.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Micro SaaS</h3>
              <p className="text-gray-600">
                Scalable software solutions designed for rapid deployment and growth.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Enterprise IT</h3>
              <p className="text-gray-600">
                Comprehensive IT services to support your business infrastructure needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}