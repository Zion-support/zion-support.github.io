import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';

export default function HomePage() {
  return (
    <Layout
      title="Zion Tech Group - Leading AI & Technology Solutions"
      description="Transform your business with cutting-edge AI solutions, cloud services, and technology consulting."
      keywords="AI solutions, cloud services, technology consulting"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Leading provider of AI solutions, cloud services, and innovative technology consulting
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Services
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive technology solutions for modern businesses
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-3">AI Services</h3>
                <p className="text-gray-600">Advanced AI solutions for your business needs</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-3">Cloud Solutions</h3>
                <p className="text-gray-600">Scalable cloud infrastructure and services</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-3">IT Consulting</h3>
                <p className="text-gray-600">Expert technology consulting and support</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}