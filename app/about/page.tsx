import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Zion Tech Group',
  description: 'Learn about Zion Tech Group\'s mission to deliver enterprise-grade AI, micro SaaS, and IT solutions that drive real business results.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Zion Tech Group
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're a team of passionate technologists dedicated to building the future of AI and automation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-gray-300 mb-6">
              To democratize AI and automation technology, making it accessible and practical for businesses of all sizes. 
              We believe that every company should have access to cutting-edge technology that can transform their operations.
            </p>
            <p className="text-gray-300">
              Our mission is to bridge the gap between complex AI research and real-world business applications, 
              delivering solutions that actually work and drive measurable results.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Our Vision</h2>
            <p className="text-gray-300 mb-6">
              A world where AI and automation seamlessly integrate into every aspect of business operations, 
              creating more efficient, intelligent, and sustainable organizations.
            </p>
            <p className="text-gray-300">
              We envision a future where technology serves humanity, not the other way around, 
              and where every business can leverage the power of AI to achieve their goals.
            </p>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Why Choose Zion Tech Group?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Expert Team</h3>
              <p className="text-gray-300">
                Our team consists of experienced engineers, data scientists, and business strategists 
                with deep expertise in AI, machine learning, and enterprise software development.
              </p>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Proven Results</h3>
              <p className="text-gray-300">
                We've helped hundreds of companies transform their operations with our AI and automation solutions, 
                delivering measurable improvements in efficiency and productivity.
              </p>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Innovation Focus</h3>
              <p className="text-gray-300">
                We stay at the forefront of technology trends, constantly innovating and adapting our solutions 
                to meet the evolving needs of our clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}