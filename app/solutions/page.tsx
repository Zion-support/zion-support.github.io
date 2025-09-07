<<<<<<< HEAD
import React from 'react';
=======
import Link from "next/link";
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-17f0

export const metadata = {
  title: "Solutions | Zion Tech Group",
  description: "Comprehensive technology solutions for your business needs.",
  keywords: "solutions, technology, business, services"
};

export default function SolutionsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Our Solutions
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Comprehensive technology solutions for your business needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
            <span className="text-2xl">🤖</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            AI-Powered Solutions
          </h3>
          <p className="text-gray-600">
            Advanced AI solutions including machine learning, natural language processing, and computer vision.
          </p>
        </div>

<<<<<<< HEAD
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-gray-800 rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">01</div>
            <h3 className="text-xl font-bold text-white mb-4">Discovery & Assessment</h3>
            <p className="text-gray-300">
              We analyze your current systems, identify opportunities, and develop a comprehensive AI strategy.
            </p>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">02</div>
            <h3 className="text-xl font-bold text-white mb-4">Solution Design</h3>
            <p className="text-gray-300">
              Our experts design custom AI solutions tailored to your specific business needs and objectives.
            </p>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">03</div>
            <h3 className="text-xl font-bold text-white mb-4">Development & Testing</h3>
            <p className="text-gray-300">
              We develop and rigorously test your AI solution to ensure optimal performance and reliability.
            </p>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">04</div>
            <h3 className="text-xl font-bold text-white mb-4">Deployment & Training</h3>
            <p className="text-gray-300">
              Seamless deployment with comprehensive training for your team to maximize solution adoption.
            </p>
          </div>
=======
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
            <span className="text-2xl">🚀</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Micro SaaS
          </h3>
          <p className="text-gray-600">
            Complete micro SaaS development services for niche markets and specialized business needs.
          </p>
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-17f0
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
            <span className="text-2xl">💰</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            FinTech Solutions
          </h3>
          <p className="text-gray-600">
            Secure financial technology solutions including payment processing, trading platforms, and risk management.
          </p>
<<<<<<< HEAD
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Get Started
            </a>
            <a
              href="/services"
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
            >
              View Services
            </a>
          </div>
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-17f0
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Ready to Transform Your Business?
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Contact us today to discuss your technology needs and implement cutting-edge solutions.
        </p>
        <a
          href="/contact"
          className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
        >
          Get Started Today
        </a>
      </div>
    </div>
  );
}