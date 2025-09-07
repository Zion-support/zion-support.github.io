<<<<<<< HEAD
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export const metadata = {
  title: 'Cybersecurity - Zion Tech Group',
  description: 'Professional cybersecurity solutions for your business needs.',
=======
import React from 'react';


export const metadata = { 
  title: 'Cybersecurity Services | Zion Tech Group',
  description: 'Comprehensive cybersecurity solutions including threat detection, compliance management, security audits, and incident response. Protect your business from cyber threats.',
  keywords: 'cybersecurity, threat detection, compliance management, security audits, incident response, penetration testing'
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-45a7
};

export default function CybersecurityPage() {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Cybersecurity
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional cybersecurity solutions designed to meet your business requirements 
            and drive growth. Our expert team delivers high-quality, scalable solutions.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Fast Implementation</h3>
              <p className="text-gray-600">
                Quick deployment and setup to get your solution running in no time.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-3xl">🔒</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Secure & Reliable</h3>
              <p className="text-gray-600">
                Enterprise-grade security and reliability for your peace of mind.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-3xl">📈</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Scalable Solutions</h3>
              <p className="text-gray-600">
                Built to grow with your business and adapt to changing needs.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-white rounded-xl shadow-lg p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your cybersecurity requirements 
              and get a custom solution tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
              >
                Get Started
                <ArrowRightIcon className="h-5 w-5 ml-2" />
              </Link>
              <Link
                href="/services"
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-blue-400 hover:text-blue-600 transition-colors"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </div>
=======
    <div className="space-y-16">
      <section className="text-center py-16 bg-gradient-to-br from-red-50 to-orange-100 rounded-lg">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Cybersecurity Services
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Protect your business with comprehensive cybersecurity solutions. 
          From threat detection to compliance management, we keep your data secure.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=Cybersecurity Services Inquiry"
            className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
          >
            Get Security Assessment
          </a>
          <a
            href="tel:+13024640950"
            className="border-2 border-red-600 text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition-colors"
          >
            Call +1 302 464 0950
          </a>
        </div>
      </section>
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-45a7
    </div>
  );
}
