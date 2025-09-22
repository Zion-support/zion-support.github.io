import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Solutions | Zion Tech Group',
  description: 'Innovative technology solutions for modern businesses.',
};

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Our Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Innovative technology solutions designed to transform your business and drive growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link href="/services/ai-services" className="group">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-4">AI Solutions</h3>
              <p className="text-gray-300 mb-4">
                Harness the power of artificial intelligence for your business.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Machine Learning</li>
                <li>• Natural Language Processing</li>
                <li>• Computer Vision</li>
                <li>• Predictive Analytics</li>
              </ul>
            </div>
          </Link>

          <Link href="/services/cloud-services" className="group">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-4">Cloud Solutions</h3>
              <p className="text-gray-300 mb-4">
                Scalable and secure cloud infrastructure solutions.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Cloud Migration</li>
                <li>• Infrastructure as Code</li>
                <li>• DevOps Automation</li>
                <li>• Security & Compliance</li>
              </ul>
            </div>
          </Link>

          <Link href="/services/web-development" className="group">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-4">Web Solutions</h3>
              <p className="text-gray-300 mb-4">
                Modern web applications and digital experiences.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Progressive Web Apps</li>
                <li>• E-commerce Platforms</li>
                <li>• API Development</li>
                <li>• Performance Optimization</li>
              </ul>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

