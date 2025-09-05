import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function HomePage() {
  return (
    <Layout 
      title="Zion Tech Group - Leading AI & Technology Solutions"
      description="Transform your business with cutting-edge AI solutions, cloud services, and technology consulting."
    >
      <div className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Welcome to Zion Tech Group
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Transform your business with cutting-edge AI solutions, cloud services, and technology consulting.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/services"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Our Services
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}