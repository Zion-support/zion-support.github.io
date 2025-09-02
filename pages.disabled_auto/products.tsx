import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import Link from 'next/link';
import { ArrowRight, Star, CheckCircle, Zap, Shield, Globe, Users, TrendingUp } from 'lucide-react';

const Products: NextPage = () => {
  const products = [
    {
      id: 1,
      name: "AI Content Generator Pro",
      category: "Micro SaaS",
      description: "Advanced AI-powered content creation tool for blogs, social media, and marketing materials.",
      price: "$29/month",
      features: [
        "AI-powered content generation",
        "Multiple content formats",
        "SEO optimization",
        "Brand voice customization",
        "Analytics dashboard"
      ],
      rating: 4.8,
      reviews: 124,
      icon: Zap,
      color: "blue"
    },
    {
      id: 2,
      name: "Cloud Security Suite",
      category: "IT Services",
      description: "Comprehensive cloud security solution with real-time monitoring and threat detection.",
      price: "$199/month",
      features: [
        "Real-time threat monitoring",
        "Automated security scans",
        "Compliance reporting",
        "24/7 security support",
        "Multi-cloud support"
      ],
      rating: 4.9,
      reviews: 89,
      icon: Shield,
      color: "green"
    },
    {
      id: 3,
      name: "Business Intelligence Platform",
      category: "AI Services",
      description: "Advanced analytics and business intelligence platform with AI-powered insights.",
      price: "$149/month",
      features: [
        "AI-powered analytics",
        "Custom dashboards",
        "Predictive modeling",
        "Data visualization",
        "Automated reporting"
      ],
      rating: 4.7,
      reviews: 156,
      icon: TrendingUp,
      color: "purple"
    },
    {
      id: 4,
      name: "Project Management Suite",
      category: "Micro SaaS",
      description: "Complete project management solution with AI-powered task optimization.",
      price: "$19/month",
      features: [
        "AI task optimization",
        "Team collaboration tools",
        "Time tracking",
        "Resource management",
        "Progress analytics"
      ],
      rating: 4.6,
      reviews: 203,
      icon: Users,
      color: "orange"
    },
    {
      id: 5,
      name: "Global CDN Network",
      category: "IT Services",
      description: "High-performance content delivery network for global website acceleration.",
      price: "$99/month",
      features: [
        "Global edge locations",
        "Automatic optimization",
        "DDoS protection",
        "SSL certificates",
        "Real-time analytics"
      ],
      rating: 4.8,
      reviews: 167,
      icon: Globe,
      color: "indigo"
    },
    {
      id: 6,
      name: "AI Customer Support Bot",
      category: "AI Services",
      description: "Intelligent customer support automation with natural language processing.",
      price: "$79/month",
      features: [
        "Natural language processing",
        "Multi-channel support",
        "Sentiment analysis",
        "Knowledge base integration",
        "Human handoff capability"
      ],
      rating: 4.5,
      reviews: 98,
      icon: Star,
      color: "pink"
    }
  ];

  const categories = [
    { name: "All Products", count: products.length },
    { name: "Micro SaaS", count: products.filter(p => p.category === "Micro SaaS").length },
    { name: "IT Services", count: products.filter(p => p.category === "IT Services").length },
    { name: "AI Services", count: products.filter(p => p.category === "AI Services").length }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "bg-blue-100 text-blue-600",
      green: "bg-green-100 text-green-600",
      purple: "bg-purple-100 text-purple-600",
      orange: "bg-orange-100 text-orange-600",
      indigo: "bg-indigo-100 text-indigo-600",
      pink: "bg-pink-100 text-pink-600"
    };
    return colorMap[color as keyof typeof colorMap] || "bg-gray-100 text-gray-600";
  };

  return (
    <MainLayout
      title="Products - Zion Tech Group"
      description="Explore our comprehensive suite of technology products including AI solutions, cloud services, and micro SaaS applications."
      keywords="products, AI solutions, cloud services, micro SaaS, technology products, software solutions"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Product Suite</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
              Discover our comprehensive range of technology products designed to accelerate your business growth 
              and digital transformation.
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-6 py-3 rounded-full font-medium transition-colors ${
                    index === 0
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  {/* Product Header */}
                  <div className="p-6 border-b">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${getColorClasses(product.color)}`}>
                        <product.icon className="w-6 h-6" />
                      </div>
                      <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                        {product.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(product.rating)
                                  ? "text-yellow-400 fill-current"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-600">
                          {product.rating} ({product.reviews} reviews)
                        </span>
                      </div>
                      <div className="text-2xl font-bold text-blue-600">{product.price}</div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="p-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <div className="p-6 bg-gray-50">
                    <Link
                      href={`/products/${product.id}`}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enterprise Solutions CTA */}
        <section className="py-16 bg-blue-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Need Custom Solutions?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Our enterprise solutions are tailored to meet your specific business requirements. 
              Contact us to discuss your custom needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors inline-block"
              >
                Contact Sales
              </Link>
              <Link
                href="/solutions/enterprise"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors inline-block"
              >
                View Enterprise Solutions
              </Link>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default Products;