import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'About Us - Zion Tech Group',
  description: 'Learn about Zion Tech Group\'s mission, vision, and team of AI and IT experts delivering enterprise solutions.',
  keywords: 'about zion tech group, AI company, IT solutions, enterprise technology, team',
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
          Pioneering the future of enterprise AI and IT solutions with cutting-edge technology and innovative approaches.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-blue-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-700">
            To empower enterprises with transformative AI and IT solutions that drive innovation, 
            efficiency, and sustainable growth. We bridge the gap between cutting-edge technology 
            and practical business applications.
          </p>
        </div>
        <div className="bg-purple-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Vision</h2>
          <p className="text-gray-700">
            To be the global leader in autonomous enterprise solutions, creating a world where 
            AI seamlessly integrates with human expertise to solve complex business challenges 
            and unlock unprecedented value.
          </p>
        </div>
      </div>

      {/* Company Story */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">Our Story</h2>
        <div className="prose prose-lg text-gray-700">
          <p className="mb-4">
            Founded with a vision to revolutionize enterprise technology, Zion Tech Group has 
            emerged as a leading provider of AI and IT solutions. Our journey began with a 
            simple belief: technology should empower businesses, not complicate them.
          </p>
          <p className="mb-4">
            Over the years, we've built a reputation for delivering innovative solutions that 
            combine the power of artificial intelligence with practical business applications. 
            Our team of experts brings together decades of experience in AI, machine learning, 
            cloud computing, and enterprise software development.
          </p>
          <p className="mb-4">
            Today, we're proud to serve Fortune 500 companies and growing enterprises worldwide, 
            helping them achieve unprecedented levels of automation, efficiency, and innovation 
            through our comprehensive suite of AI and IT services.
          </p>
        </div>
      </div>

      {/* Core Values */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">Our Core Values</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation</h3>
            <p className="text-gray-600">
              We constantly push the boundaries of what's possible with AI and technology.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Excellence</h3>
            <p className="text-gray-600">
              We deliver solutions that exceed expectations and drive measurable results.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Partnership</h3>
            <p className="text-gray-600">
              We work closely with our clients as trusted partners in their digital transformation.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">Our Team</h2>
        <div className="bg-gray-50 p-8 rounded-lg">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Leadership Team</h3>
              <p className="text-gray-700 mb-4">
                Our leadership team brings together decades of experience in AI, enterprise software, 
                and business transformation. They guide our strategic vision and ensure we deliver 
                exceptional value to our clients.
              </p>
              <ul className="text-gray-700 space-y-2">
                <li>• AI Research & Development Experts</li>
                <li>• Enterprise Architecture Specialists</li>
                <li>• Business Transformation Consultants</li>
                <li>• Cloud & DevOps Engineers</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Technical Experts</h3>
              <p className="text-gray-700 mb-4">
                Our technical team consists of world-class engineers, data scientists, and AI specialists 
                who are passionate about solving complex challenges and pushing the boundaries of technology.
              </p>
              <ul className="text-gray-700 space-y-2">
                <li>• Machine Learning Engineers</li>
                <li>• Data Scientists & Analysts</li>
                <li>• Full-Stack Developers</li>
                <li>• Cybersecurity Specialists</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="bg-blue-600 text-white p-8 rounded-lg text-center">
        <h2 className="text-2xl font-semibold mb-4">Ready to Work With Us?</h2>
        <p className="text-blue-100 mb-6">
          Let's discuss how Zion Tech Group can help transform your business with AI and IT solutions.
        </p>
        <Link 
          href="/contact" 
          className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
        >
          Get In Touch
        </Link>
      </div>
    </div>
  );
}