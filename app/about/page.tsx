import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Zion Tech Group',
  description: 'Learn about Zion Tech Group\'s mission, vision, and commitment to delivering cutting-edge AI, micro SaaS, and IT solutions.',
  keywords: 'about, company, mission, vision, AI solutions, micro SaaS, IT services',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Zion Tech Group
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a leading technology company dedicated to transforming businesses 
            through innovative AI solutions, micro SaaS platforms, and comprehensive IT services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-6">
              To empower businesses with cutting-edge technology solutions that drive 
              innovation, efficiency, and growth. We believe in the transformative power 
              of AI and technology to solve complex business challenges.
            </p>
            <p className="text-lg text-gray-600">
              Our team of experts is committed to delivering exceptional value through 
              personalized solutions that meet the unique needs of each client.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
            <p className="text-lg text-gray-600 mb-6">
              To be the global leader in AI-powered business solutions, setting the 
              standard for innovation, reliability, and customer satisfaction in the 
              technology services industry.
            </p>
            <p className="text-lg text-gray-600">
              We envision a future where every business can leverage advanced technology 
              to achieve unprecedented success and growth.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Innovation</h3>
              <p className="text-gray-600">
                We continuously push the boundaries of what's possible with technology, 
                always seeking new and better ways to solve problems.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Excellence</h3>
              <p className="text-gray-600">
                We are committed to delivering the highest quality solutions and 
                maintaining the highest standards in everything we do.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Partnership</h3>
              <p className="text-gray-600">
                We work closely with our clients as partners, understanding their 
                goals and challenges to deliver tailored solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}