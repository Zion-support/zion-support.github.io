'use client'
import React from 'react';
import { ArrowRight, CheckCircle, Target, Award } from 'lucide-react';
import Link from 'next/link';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

export default function GlobalError() {
  const features = [
    {
      icon: <CheckCircle className="h-8 w-8 text-blue-600" />,
      title: 'Feature 1',
      description: 'Professional services and solutions for your business needs.'
    },
    {
      icon: <Target className="h-8 w-8 text-green-600" />,
      title: 'Feature 2',
      description: 'Advanced technology solutions to help you succeed.'
    },
    {
      icon: <Award className="h-8 w-8 text-yellow-600" />,
      title: 'Feature 3',
      description: 'Expert guidance and support for your projects.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              Professional Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional services and solutions for modern businesses.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  {feature.icon}
                  <h3 className="text-xl font-semibold text-gray-900 ml-3">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}