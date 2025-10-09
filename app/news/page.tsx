import React from 'react';
import Link from 'next/link';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';

const NewsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Latest News
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Stay updated with the latest developments in AI and technology
            </p>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industry News & Updates
            </h2>
            <p className="text-xl text-gray-600">
              Latest insights and developments in AI, technology, and business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600"></div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>December 15, 2024</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  AI Revolution in Enterprise Solutions
                </h3>
                <p className="text-gray-600 mb-4">
                  How artificial intelligence is transforming business operations and driving unprecedented growth.
                </p>
                <Link href="#" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-r from-green-500 to-blue-600"></div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>December 10, 2024</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Quantum Computing Breakthrough
                </h3>
                <p className="text-gray-600 mb-4">
                  New quantum algorithms promise to revolutionize data processing and cryptography.
                </p>
                <Link href="#" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-r from-purple-500 to-pink-600"></div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>December 5, 2024</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Micro SAAS Market Growth
                </h3>
                <p className="text-gray-600 mb-4">
                  The micro SAAS market continues to expand with innovative solutions for every business need.
                </p>
                <Link href="#" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsPage;

