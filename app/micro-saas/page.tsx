import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ArrowRight, CheckCircle, Zap, Shield, BarChart3 } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

const MicroSaasPage: React.FC = () => {
  const saasProducts = [
    {
      id: 1,
      name: "Zion Analytics Pro",
      description: "AI-powered business intelligence platform with real-time dashboards and predictive analytics",
      price: "From $299/month",
      features: [
        "Real-time analytics dashboard",
        "Predictive analytics",
        "Custom reporting",
        "Data visualization",
        "API integration"
      ],
      category: "Analytics",
      rating: 4.9,
      reviews: 1892,
      image: "/images/saas/analytics-pro.jpg",
      featured: true
    },
    {
      id: 2,
      name: "Zion Security Shield",
      description: "Advanced cybersecurity protection with AI-powered threat detection and automated response",
      price: "From $499/month",
      features: [
        "AI threat detection",
        "Automated response",
        "24/7 monitoring",
        "Compliance reporting",
        "Security audits"
      ],
      category: "Security",
      rating: 4.8,
      reviews: 1245,
      image: "/images/saas/security-shield.jpg",
      featured: true
    },
    {
      id: 3,
      name: "Zion Cloud Vault",
      description: "Secure cloud storage solution with end-to-end encryption and unlimited scalability",
      price: "From $99/month",
      features: [
        "End-to-end encryption",
        "Unlimited storage",
        "File sharing",
        "Version control",
        "Mobile access"
      ],
      category: "Storage",
      rating: 4.7,
      reviews: 2156,
      image: "/images/saas/cloud-vault.jpg",
      featured: false
    }
  ];

  const categories = ["All", "Analytics", "Security", "Storage", "CRM", "Marketing", "Productivity"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Micro SAAS Solutions - Zion Tech Group | Ready-to-Use Software"
        description="Discover our comprehensive collection of micro SAAS solutions designed to accelerate your business growth. From analytics to security, we have the tools you need."
        keywords="micro saas, software solutions, business tools, analytics, security, cloud storage, ready-to-use software"
        canonical="https://ziontechgroup.com/micro-saas"
      />
      
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Micro SAAS Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready-to-use software solutions that can transform your business operations immediately. 
              No complex setup, no lengthy implementation - just powerful tools that work.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Featured Products */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8">Featured Solutions</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {saasProducts.filter(product => product.featured).map((product) => (
                <div key={product.id} className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm font-semibold rounded-full">
                        {product.category}
                      </span>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-white ml-1">{product.rating}</span>
                        <span className="text-gray-400 ml-1">({product.reviews})</span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{product.name}</h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">{product.description}</p>
                    <div className="mb-4">
                      <ul className="space-y-2">
                        {product.features.map((feature, index) => (
                          <li key={index} className="flex items-center text-gray-300 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-cyan-400">{product.price}</span>
                      <Link 
                        to={`/micro-saas/${product.id}`}
                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* All Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {saasProducts.map((product) => (
              <div key={product.id} className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm font-semibold rounded-full">
                      {product.category}
                    </span>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-white ml-1">{product.rating}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{product.name}</h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-cyan-400">{product.price}</span>
                    <Link 
                      to={`/micro-saas/${product.id}`}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MicroSaasPage;
