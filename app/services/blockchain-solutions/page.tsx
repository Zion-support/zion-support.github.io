<<<<<<< HEAD
import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blockchain Solutions | Zion Tech Group',
  description: 'Professional blockchain solutions services for your business needs.',
  keywords: 'blockchain solutions, services, business, technology'
}

=======
<<<<<<< HEAD
export const metadata = {
  title: 'Blockchain Solutions | Zion Tech Group',
  description: 'Comprehensive blockchain solutions for modern businesses.',
  keywords: 'blockchain-solutions, services, business, technology'
}
>>>>>>> origin/chore/fix-lint-and-merge
export default function ServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
<<<<<<< HEAD
=======

>>>>>>> origin/chore/fix-lint-and-merge
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Blockchain Solutions
          </h1>
<<<<<<< HEAD
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional blockchain solutions services for your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-800 rounded-lg p-6">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-bold text-white mb-4">Fast & Reliable</h3>
            <p className="text-gray-300">
              High-performance solutions that deliver results quickly and consistently.
=======
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive blockchain solutions for modern businesses.
=======
import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blockchain Solutions | Zion Tech Group',
  description: 'Professional blockchain solutions services for your business needs.',
  keywords: 'blockchain, solutions'
};

export default function BlockchainsolutionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Blockchain Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional blockchain solutions services for your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Professional Service</h3>
            <p className="text-gray-600">
              Expert blockchainsolutions solutions tailored to your business needs.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Custom Solutions</h3>
            <p className="text-gray-600">
              Personalized approach to meet your specific requirements and goals.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Expert Support</h3>
            <p className="text-gray-600">
              Dedicated support team to ensure your success and satisfaction.
            </p>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}