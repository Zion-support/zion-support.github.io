import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Zion Tech Group',
  description: 'Learn about Zion Tech Group\'s mission, vision, and commitment to delivering cutting-edge AI and technology solutions.',
  keywords: 'about, mission, vision, AI, technology, innovation, zion tech group',
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">About Zion Tech Group</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600 mb-6">
          Zion Tech Group is a leading technology company specializing in AI, autonomous systems, quantum computing, and innovative business solutions. We are committed to transforming businesses through cutting-edge technology and innovative approaches.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
        <p className="text-gray-600 mb-6">
          To empower businesses with cutting-edge AI and technology solutions that drive innovation, efficiency, and growth. We strive to be the bridge between complex technology and practical business applications.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Vision</h2>
        <p className="text-gray-600 mb-6">
          To be the global leader in AI and technology solutions, recognized for our innovation, reliability, and commitment to client success. We envision a future where technology seamlessly integrates with business operations to create unprecedented value.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Why Choose Us</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
          <li>Expert team with deep expertise in AI and emerging technologies</li>
          <li>Proven track record of delivering successful projects</li>
          <li>Commitment to innovation and continuous learning</li>
          <li>Client-focused approach with personalized solutions</li>
          <li>Comprehensive support and maintenance services</li>
        </ul>
        
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Innovation</h3>
            <p className="text-gray-600">We constantly explore new technologies and approaches to deliver cutting-edge solutions.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality</h3>
            <p className="text-gray-600">We maintain the highest standards in all our deliverables and services.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Integrity</h3>
            <p className="text-gray-600">We conduct business with honesty, transparency, and ethical practices.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Collaboration</h3>
            <p className="text-gray-600">We work closely with our clients to understand their needs and deliver tailored solutions.</p>
          </div>
        </div>
      </div>
    </div>
  );
}