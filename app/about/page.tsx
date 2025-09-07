import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - Zion Tech Group',
  description: 'Learn about Zion Tech Group, a leading provider of enterprise AI solutions, micro SaaS development, and IT services.',
};

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Zion Tech Group
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a leading technology company specializing in AI solutions, micro SaaS development, and comprehensive IT services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-6">
              To empower businesses with cutting-edge technology solutions that drive growth, efficiency, and innovation.
            </p>
            <p className="text-lg text-gray-600">
              We believe in the transformative power of AI and technology to solve complex business challenges and create opportunities for our clients.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
            <p className="text-lg text-gray-600 mb-6">
              To be the global leader in AI-powered business solutions and micro SaaS development.
            </p>
            <p className="text-lg text-gray-600">
              We envision a future where every business can leverage advanced technology to achieve unprecedented success.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Expertise</h3>
              <p className="text-gray-600">
                Our team consists of experienced professionals with deep expertise in AI, software development, and IT services.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Innovation</h3>
              <p className="text-gray-600">
                We stay at the forefront of technology trends and continuously innovate to deliver cutting-edge solutions.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Support</h3>
              <p className="text-gray-600">
                We provide comprehensive support and maintenance to ensure your solutions continue to deliver value.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}