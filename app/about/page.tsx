import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'About Us - Zion Tech Group',
  description: 'Learn about Zion Tech Group\'s mission, vision, and expertise in AI, micro SaaS, and IT solutions.',
  keywords: 'about zion tech group, AI company, IT solutions, micro SaaS, enterprise technology',
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          About Zion Tech Group
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Pioneering the future of enterprise technology with cutting-edge AI solutions, 
          micro SaaS platforms, and comprehensive IT services.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-blue-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-700">
            To empower businesses with transformative AI and technology solutions that drive 
            innovation, efficiency, and sustainable growth in the digital age.
          </p>
        </div>
        <div className="bg-purple-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Vision</h2>
          <p className="text-gray-700">
            To be the global leader in autonomous enterprise solutions, creating a world 
            where AI seamlessly integrates with human intelligence to solve complex challenges.
          </p>
        </div>
      </div>

      {/* Company Story */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 mb-4">
            Founded with a vision to revolutionize enterprise technology, Zion Tech Group 
            has emerged as a leading provider of AI-powered solutions and IT services. 
            Our journey began with a simple belief: technology should enhance human 
            capabilities, not replace them.
          </p>
          <p className="text-gray-700 mb-4">
            Over the years, we've helped Fortune 500 companies and innovative startups 
            alike transform their operations through cutting-edge AI implementations, 
            autonomous business processes, and scalable micro SaaS solutions.
          </p>
          <p className="text-gray-700">
            Today, we continue to push the boundaries of what's possible, delivering 
            solutions that generate billions in ROI for our clients while maintaining 
            our commitment to ethical AI and sustainable technology practices.
          </p>
        </div>
      </div>

      {/* Core Values */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Core Values</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center p-6 border border-gray-200 rounded-lg">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation</h3>
            <p className="text-gray-600">
              We constantly push the boundaries of technology to deliver breakthrough solutions.
            </p>
          </div>
          <div className="text-center p-6 border border-gray-200 rounded-lg">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Security</h3>
            <p className="text-gray-600">
              We prioritize security and privacy in all our solutions and implementations.
            </p>
          </div>
          <div className="text-center p-6 border border-gray-200 rounded-lg">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Collaboration</h3>
            <p className="text-gray-600">
              We work closely with our clients as partners in their digital transformation journey.
            </p>
          </div>
        </div>
      </div>

      {/* Expertise Areas */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Expertise</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
              <span className="text-gray-700">Artificial Intelligence & Machine Learning</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
              <span className="text-gray-700">Autonomous Business Process Automation</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
              <span className="text-gray-700">Micro SaaS Platform Development</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
              <span className="text-gray-700">Cloud Infrastructure & Migration</span>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
              <span className="text-gray-700">Quantum Computing Solutions</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
              <span className="text-gray-700">Enterprise Data Analytics</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
              <span className="text-gray-700">Cybersecurity & Compliance</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
              <span className="text-gray-700">DevOps & Site Reliability Engineering</span>
            </div>
          </div>
        </div>
      </div>

      {/* Leadership Team */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Leadership Team</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Kleber Santos</h3>
            <p className="text-blue-600 font-medium mb-2">Founder & CEO</p>
            <p className="text-gray-700">
              Visionary leader with over 15 years of experience in enterprise technology 
              and AI implementation. Kleber has led digital transformation initiatives 
              for Fortune 500 companies, generating over $2.8 billion in ROI.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Team</h3>
            <p className="text-blue-600 font-medium mb-2">AI & Technology Specialists</p>
            <p className="text-gray-700">
              Our diverse team of AI researchers, software engineers, and business 
              consultants brings together deep technical expertise and industry knowledge 
              to deliver exceptional results.
            </p>
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h2>
        <p className="text-blue-100 mb-6">
          Let's discuss how our AI and technology solutions can drive your next breakthrough.
        </p>
        <Link 
          href="/contact" 
          className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
        >
          Get Started Today
        </Link>
      </div>
    </div>
  );
}