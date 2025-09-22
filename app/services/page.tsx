import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Services | Zion Tech Group',
  description: 'Comprehensive technology services and solutions for your business needs.',
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive technology services and solutions designed to help your business grow and succeed.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link href="/services/ai-services" className="group">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-4">AI Services</h3>
              <p className="text-gray-300 mb-4">
                Advanced AI solutions and machine learning platforms.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• AI Analytics</li>
                <li>• Chatbots</li>
                <li>• Content Generation</li>
                <li>• Predictive Analytics</li>
              </ul>
            </div>
          </Link>

          <Link href="/services/web-development" className="group">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-4">Web Development</h3>
              <p className="text-gray-300 mb-4">
                Modern web applications and digital solutions.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• React Applications</li>
                <li>• Next.js Development</li>
                <li>• E-commerce Solutions</li>
                <li>• API Development</li>
              </ul>
            </div>
          </Link>

          <Link href="/services/cloud-services" className="group">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-4">Cloud Services</h3>
              <p className="text-gray-300 mb-4">
                Scalable cloud infrastructure and solutions.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Cloud Migration</li>
                <li>• Infrastructure Setup</li>
                <li>• Security & Compliance</li>
                <li>• Monitoring & Optimization</li>
              </ul>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

