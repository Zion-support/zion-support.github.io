import React, { useState } from 'react';
import SEO from '@/components/SEO';
import Header from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function NewProductsPage() {
  const [listings] = useState([
    {
      id: 1,
      title: "AI-Powered Analytics Dashboard",
      description: "Advanced analytics dashboard with machine learning insights",
      price: 299,
      category: "AI Tools",
      image: "/images/products/analytics-dashboard.jpg"
    },
    {
      id: 2,
      title: "Cloud Security Suite",
      description: "Comprehensive cloud security solution for enterprise",
      price: 599,
      category: "Security",
      image: "/images/products/cloud-security.jpg"
    },
    {
      id: 3,
      title: "Mobile App Development Kit",
      description: "Complete toolkit for cross-platform mobile development",
      price: 199,
      category: "Development",
      image: "/images/products/mobile-dev-kit.jpg"
    }
  ]);

  const categories = Array.from(new Set(listings.map(p => p.category)));

  return (
    <>
      <SEO
        title="New Products - Zion Tech Group"
        description="Explore our latest products priced for today's market."
        keywords="new products, latest technology, AI tools, software solutions"
        canonical="https://ziontechgroup.com/new-products"
      />
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-white mb-4">New Products</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our latest products priced for today's market
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {listings.map((product) => (
              <div key={product.id} className="bg-slate-800/50 rounded-lg overflow-hidden border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
                <div className="aspect-video bg-slate-700 flex items-center justify-center">
                  <span className="text-4xl">📦</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-blue-400 bg-blue-500/10 px-2 py-1 rounded-full">
                      {product.category}
                    </span>
                    <span className="text-2xl font-bold text-white">${product.price}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{product.title}</h3>
                  <p className="text-gray-300 mb-4">{product.description}</p>
                  <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}