import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function AIServices() {
  return (
    <Layout
      title="AI Services - Zion Tech Group"
      description="Cutting-edge AI solutions including content creation, email automation, and customer support."
      keywords="AI services, artificial intelligence, content creation, email automation, customer support"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Services That Transform Your Business
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Leverage cutting-edge artificial intelligence to automate processes and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Get Started Today
              </Link>
              <Link href="/services" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                View All Services
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Our AI Service Portfolio
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
                Choose from our comprehensive suite of AI-powered solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Content Creation</h3>
                <p className="text-gray-600 mb-6">Automated content generation for blogs, social media, and marketing.</p>
                <div className="text-3xl font-bold text-blue-600 mb-4">$299/month</div>
                <Link href="/contact" className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold inline-block text-center">
                  Get Started
                </Link>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Email Automation</h3>
                <p className="text-gray-600 mb-6">Intelligent email management and automated responses.</p>
                <div className="text-3xl font-bold text-blue-600 mb-4">$199/month</div>
                <Link href="/contact" className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold inline-block text-center">
                  Get Started
                </Link>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Customer Support</h3>
                <p className="text-gray-600 mb-6">24/7 AI-powered customer support and assistance.</p>
                <div className="text-3xl font-bold text-blue-600 mb-4">$399/month</div>
                <Link href="/contact" className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold inline-block text-center">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}