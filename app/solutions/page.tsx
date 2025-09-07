<<<<<<< HEAD
import React from 'react';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
=======
import Link from "next/link";
>>>>>>> 3441e9d6a0ae777ba99028aadbff2beb86775349

export const metadata = {
  title: "Solutions | Zion Tech Group",
  description: "Professional solutions for your business needs.",
  keywords: "solutions, business, technology"
};

export default function SolutionsPage() {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Our Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive AI and technology solutions designed to transform your business operations and drive growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">{solution.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{solution.title}</h3>
              <p className="text-gray-600 mb-6">{solution.description}</p>
              <ul className="space-y-2">
                {solution.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-gray-600 flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
=======
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Solutions
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Professional solutions for your business needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
            <span className="text-2xl">🚀</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Business Solutions
          </h3>
          <p className="text-gray-600">
            Comprehensive business solutions tailored to your specific needs.
          </p>
>>>>>>> 3441e9d6a0ae777ba99028aadbff2beb86775349
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how our solutions can help transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
            >
              Contact Us
              <ArrowRightIcon className="h-5 w-5 ml-2" />
            </Link>
            <Link
              href="/services"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
            >
              View Services
            </Link>
          </div>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
            <span className="text-2xl">🎯</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Custom Solutions
          </h3>
          <p className="text-gray-600">
            Create custom solutions tailored to your specific business needs.
          </p>
        </div>
      </div>

      <div className="text-center">
        <Link 
          href="/contact" 
          className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}