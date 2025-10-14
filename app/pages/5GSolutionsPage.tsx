import React from "react";
import { Helmet } from "react-helmet-async";

export default function FiveGSolutionsPage() {
  return (
    <>
      <Helmet>
        <title>5G Solutions - Zion Tech Group</title>
        <meta name="description" content="Professional 5G solutions by Zion Tech Group." />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              5G Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Next-generation 5G solutions designed to transform your business
              with ultra-fast connectivity and low latency.
            </p>
          </div>
        </section>
        
        {/* Content Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our 5G Services</h2>
                <p className="text-lg text-gray-600 mb-6">
                  We provide comprehensive 5G solutions
                  tailored to your specific business needs.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    5G Network Design
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Infrastructure Implementation
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Performance Optimization
                  </li>
                </ul>
              </div>
              <div className="bg-gray-100 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Get Started</h3>
                <p className="text-gray-600 mb-6">
                  Contact us today to learn more about our 5G solutions.
                </p>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}