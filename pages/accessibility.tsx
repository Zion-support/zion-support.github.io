import React from 'react';
import Layout from '../components/Layout';

export default function AccessibilityPage() {
  return (
    <Layout title="Accessibility - Zion Tech Group" description="Learn about our commitment to web accessibility">
      <div className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Web Accessibility Excellence
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Building inclusive digital experiences that work for everyone
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Accessibility Commitment
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We are committed to making our website and services accessible to all users, 
                including those with disabilities. Our team follows WCAG 2.1 AA guidelines 
                and continuously works to improve accessibility.
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}