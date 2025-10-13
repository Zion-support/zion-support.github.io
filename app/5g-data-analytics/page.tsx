import React from 'react';
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD

export default function PagePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Page - Zion Tech Group</title>
        <meta name="description" content="Advanced Page solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Page
=======
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function FiveGDataAnalyticsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>5G Data Analytics - Zion Tech Group</title>
        <meta name="description" content="Advanced 5G data analytics solutions by Zion Tech Group" />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            5G Data Analytics
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Transform your business with advanced 5G data analytics solutions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            5G Data Analytics Solutions
>>>>>>> cursor/fix-errors-and-merge-to-main-5de4
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            This page is under development. Please check back later.
          </p>
        </div>
<<<<<<< HEAD
=======

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Real-time Analytics</h3>
            <p className="text-gray-600">
              Comprehensive real-time data processing and analysis solutions.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Integration</h3>
            <p className="text-gray-600">
              Advanced AI and machine learning integration for data insights.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Scalable Infrastructure</h3>
            <p className="text-gray-600">
              Scalable and secure 5G data analytics implementation.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            to="/contact"
            className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get Started
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-5de4
      </div>
    </div>
  );
}