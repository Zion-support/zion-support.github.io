import React from 'react';
import type { NextPage } from 'next';
import { ArrowRight, CheckCircle, Star, Zap, Shield, Globe, TrendingUp, Award, Clock, Users } from 'lucide-react';

const Products: NextPage = () => {
  const products = [
    {
      id: 1,
      name: "AI Customer Sentiment Analyzer",
      category: "AI Tools",
      description: "Monitor customer feedback across all channels in real-time with AI-powered sentiment analysis.",
      price: "From $199/month",
      features: [
        "Real-time sentiment monitoring",
        "Multi-channel data integration",
        "Advanced emotion detection",
        "Automated alert system",
        "Custom dashboard"
      ],
      rating: 4.9,
      reviews: 127,
      image: "/products/sentiment-analyzer.jpg"
    },
    {
      id: 2,
      name: "AI Automated Email Follow-up",
      category: "AI Tools",
      description: "Intelligent email automation with personalized sequences and optimal timing predictions.",
      price: "From $49/month",
      features: [
        "AI-powered personalization",
        "Optimal timing predictions",
        "Multi-channel automation",
        "A/B testing",
        "CRM integration"
      ],
      rating: 4.8,
      reviews: 89,
      image: "/products/email-automation.jpg"
    },
    {
      id: 3,
      name: "AI Content Generator",
      category: "AI Tools",
      description: "AI-powered content generation for blogs, social media, and marketing materials.",
      price: "From $29/month",
      features: [
        "Multi-language support",
        "SEO optimization",
        "Brand voice customization",
        "Content templates",
        "Plagiarism detection"
      ],
      rating: 4.7,
      reviews: 156,
      image: "/products/content-generator.jpg"
    },
    {
      id: 4,
      name: "AI-Powered CRM",
      category: "Productivity",
      description: "Intelligent CRM with AI-powered lead scoring and automated follow-ups.",
      price: "From $79/month",
      features: [
        "AI lead scoring",
        "Automated follow-ups",
        "Predictive analytics",
        "Email integration",
        "Mobile app"
      ],
      rating: 4.9,
      reviews: 203,
      image: "/products/ai-crm.jpg"
    },
    {
      id: 5,
      name: "AI Project Management",
      category: "Productivity",
      description: "Smart project management with AI-powered scheduling and resource allocation.",
      price: "From $89/month",
      features: [
        "AI task prioritization",
        "Resource allocation",
        "Progress tracking",
        "Risk assessment",
        "Team collaboration"
      ],
      rating: 4.8,
      reviews: 94,
      image: "/products/project-management.jpg"
    },
    {
      id: 6,
      name: "Zero Trust Security Platform",
      category: "Security",
      description: "Comprehensive security solution with identity verification and network segmentation.",
      price: "From $2,000/month",
      features: [
        "Identity management",
        "Network segmentation",
        "Continuous monitoring",
        "Threat detection",
        "Compliance management"
      ],
      rating: 4.9,
      reviews: 67,
      image: "/products/zero-trust.jpg"
    }
  ];

  const categories = ['All', 'AI Tools', 'Productivity', 'Marketing', 'Finance', 'Sales', 'Security'];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Products
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-4xl mx-auto">
              Discover our comprehensive suite of AI-powered tools and solutions designed to transform your business operations.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-colors ${
                  category === 'All'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="bg-gray-200 h-48 flex items-center justify-center">
                  <span className="text-gray-500">Product Image</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
                      {product.category}
                    </span>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
                      <span className="ml-1 text-sm text-gray-500">({product.reviews})</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {product.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-blue-600">{product.price}</span>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Get started with our AI-powered solutions today and see the difference they can make.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors cursor-pointer inline-flex items-center">
              Get Free Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a href="tel:+13024640950" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Call +1 302 464 0950
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;