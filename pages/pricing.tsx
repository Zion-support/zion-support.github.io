import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function PricingPage() {
  return (
    <>
      <Head>
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Transparent, flexible pricing for AI, IT, and Micro SaaS services." />
      </Head>
      <section className="bg-white">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Pricing</h1>
          <p className="text-gray-600 mb-10 max-w-3xl">
            We tailor solutions to your needs. Below are typical starting ranges observed in the market. Get a custom quote at any time.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Services</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Custom AI Models</span>
                  <span className="font-medium">$5,000 - $50,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">AI Integration</span>
                  <span className="font-medium">$2,000 - $15,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">AI Consulting</span>
                  <span className="font-medium">$150 - $300/hr</span>
                </div>
              </div>
            </div>

            <div className="border rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">IT Services</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Web Development</span>
                  <span className="font-medium">$3,000 - $25,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Mobile Apps</span>
                  <span className="font-medium">$5,000 - $40,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Cloud Migration</span>
                  <span className="font-medium">$2,000 - $20,000</span>
                </div>
              </div>
            </div>

            <div className="border rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Micro SaaS</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">MVP Development</span>
                  <span className="font-medium">$10,000 - $50,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">SaaS Platform</span>
                  <span className="font-medium">$25,000 - $100,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Maintenance</span>
                  <span className="font-medium">$500 - $2,000/mo</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Need a Custom Quote?</h2>
            <p className="text-gray-600 mb-6">
              Every project is unique. Contact us for a personalized estimate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Quote
              </a>
              <a
                href="tel:+13024640950"
                className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Call Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}