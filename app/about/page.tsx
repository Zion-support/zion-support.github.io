'use client';

import React from 'react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <main className="container mx-auto px-4 py-16">
        <section className="mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">About Zion Tech Group</h1>
          <p className="text-xl text-gray-700 mb-8">
            Leading the future of AI-powered enterprise solutions and digital transformation.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              To empower businesses with cutting-edge AI and technology solutions that drive
              innovation, efficiency, and growth in the digital age.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-700 leading-relaxed">
              To be the global leader in AI-powered enterprise transformation, helping organizations
              achieve unprecedented levels of automation and intelligence.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-8">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600">
                Continuously pushing boundaries with cutting-edge technology solutions.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-600">
                Delivering exceptional quality in every project and interaction.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Partnership</h3>
              <p className="text-gray-600">
                Building lasting relationships through trust and collaboration.
              </p>
            </div>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">Ready to Transform Your Business?</h2>
          <a
            href="tel:+13026009898"
            className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
          >
            Contact Us Today
          </a>
        </section>
      </main>
    </div>
  );
}