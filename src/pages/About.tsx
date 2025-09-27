import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function About(): React.JSX.Element {
  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group | Leading AI & IT Solutions</title>
        <meta name="description" content="Learn about Zion Tech Group, a leading provider of AI and IT solutions. Our mission is to transform businesses through innovative technology." />
        <meta property="og:title" content="About Us - Zion Tech Group" />
        <meta property="og:description" content="Leading AI & IT solutions provider" />
      </Helmet>
      
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Zion Tech Group</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a leading technology company specializing in AI and IT solutions that transform businesses and drive innovation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-semibold mb-6">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              At Zion Tech Group, our mission is to empower businesses with cutting-edge AI and IT solutions that drive growth, efficiency, and innovation. We believe technology should be accessible, reliable, and transformative.
            </p>
            <p className="text-gray-600">
              Founded in 2020, we have been at the forefront of technological advancement, helping organizations across various industries leverage the power of artificial intelligence and modern IT infrastructure.
            </p>
          </div>
          
          <div>
            <h2 className="text-3xl font-semibold mb-6">Our Vision</h2>
            <p className="text-gray-600 mb-6">
              We envision a future where technology seamlessly integrates with human potential, creating opportunities for unprecedented growth and innovation. Our goal is to be the catalyst for this transformation.
            </p>
            <p className="text-gray-600">
              Through our commitment to excellence, innovation, and client success, we strive to be the trusted partner for businesses seeking to embrace the digital future.
            </p>
          </div>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-semibold text-center mb-8">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-gray-600">We continuously push the boundaries of what's possible with technology.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality</h3>
              <p className="text-gray-600">We deliver solutions that meet the highest standards of excellence.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Collaboration</h3>
              <p className="text-gray-600">We work closely with our clients to achieve their goals.</p>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-6">Our Team</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Our diverse team of experts brings together decades of experience in AI, machine learning, software development, and IT infrastructure.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-20 h-20 bg-blue-100 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">Sarah Johnson</h3>
              <p className="text-blue-600 mb-2">CEO & Founder</p>
              <p className="text-gray-600">15+ years in AI and technology leadership</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-20 h-20 bg-green-100 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">Michael Chen</h3>
              <p className="text-blue-600 mb-2">CTO</p>
              <p className="text-gray-600">Expert in machine learning and cloud architecture</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-20 h-20 bg-purple-100 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">Emily Rodriguez</h3>
              <p className="text-blue-600 mb-2">Head of AI Research</p>
              <p className="text-gray-600">PhD in Computer Science, AI researcher</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}