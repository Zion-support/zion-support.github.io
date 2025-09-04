import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ShoppingCart, Star, ArrowRight } from 'lucide-react';

export default function Marketplace() {
  const marketplaceCategories = [
    {
      title: "Products",
      description: "Discover innovative technology products and solutions",
      icon: "🛍️",
      items: [
        { name: "AI-Powered Analytics Platform", price: "Starting at $299/month", category: "AI & Analytics" },
        { name: "Micro SaaS Starter Kit", price: "Starting at $99/month", category: "Micro SaaS" },
        { name: "Cloud Infrastructure Suite", price: "Starting at $199/month", category: "Cloud Services" }
      ]
    },
    {
      title: "Services",
      description: "Professional services to help your business grow",
      icon: "🔧",
      items: [
        { name: "Custom Development", price: "Starting at $150/hour", category: "Development" },
        { name: "Consulting Services", price: "Starting at $200/hour", category: "Consulting" },
        { name: "Technical Support", price: "Starting at $50/hour", category: "Support" }
      ]
    },
    {
      title: "Templates",
      description: "Ready-to-use templates and components",
      icon: "📄",
      items: [
        { name: "React Component Library", price: "Free", category: "Frontend" },
        { name: "API Documentation Template", price: "Free", category: "Documentation" },
        { name: "Project Management Template", price: "$29", category: "Productivity" }
      ]
    }
  ];

  return (
    <>
      <Head>
        <title>Marketplace - Zion Tech Group</title>
        <meta name="description" content="Discover products, services, and templates from Zion Tech Group's marketplace." />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Marketplace
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover innovative products, services, and templates to accelerate your business growth.
            </p>
          </div>

          {/* Categories */}
          <div className="space-y-16">
            {marketplaceCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-center mb-8">
                  <div className="text-4xl mr-4">{category.icon}</div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                      {category.title}
                    </h2>
                    <p className="text-lg text-gray-600">
                      {category.description}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {item.name}
                      </h3>
                      <p className="text-blue-600 font-semibold mb-2">
                        {item.price}
                      </p>
                      <p className="text-sm text-gray-500 mb-4">
                        {item.category}
                      </p>
                      <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Add to Cart
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-12 text-white text-center mt-16">
            <h2 className="text-3xl font-bold mb-6">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              We can create custom solutions tailored to your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                Request Custom Solution
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link href="/services" className="inline-flex items-center px-8 py-4 bg-transparent text-white border-2 border-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold">
                Browse All Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}