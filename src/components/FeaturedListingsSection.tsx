import React from 'react';
import { Link } from 'react-router-dom';

export function FeaturedListingsSection() {
  const featuredItems = [
    {
      id: 1,
      title: "AI-Powered Cybersecurity Suite",
      description: "Advanced threat detection and response using machine learning algorithms for real-time protection.",
      category: "Cybersecurity",
      rating: 4.9,
      reviews: 127,
      price: "From $2,500/month",
      image: "🔒",
      path: "/services",
      features: ["ML Threat Detection", "Automated Response", "24/7 Monitoring", "Compliance Ready"]
    },
    {
      id: 2,
      title: "Quantum Computing Solutions",
      description: "Next-generation quantum algorithms for optimization, cryptography, and scientific research applications.",
      category: "Quantum Computing",
      rating: 4.8,
      reviews: 89,
      price: "Custom Pricing",
      image: "🧠",
      path: "/services",
      features: ["Quantum Algorithms", "Optimization", "Research Support", "Expert Consultation"]
    },
    {
      id: 3,
      title: "Enterprise Cloud Migration",
      description: "Seamless migration to multi-cloud environments with zero-downtime and automated optimization.",
      category: "Cloud & DevOps",
      rating: 4.9,
      reviews: 203,
      price: "From $5,000",
      image: "☁️",
      path: "/services",
      features: ["Multi-Cloud Strategy", "Zero Downtime", "Cost Optimization", "24/7 Support"]
    },
    {
      id: 4,
      title: "AI Talent Matching Platform",
      description: "Intelligent platform connecting businesses with top AI and technology professionals worldwide.",
      category: "Talent Solutions",
      rating: 4.7,
      reviews: 156,
      price: "Free to Start",
      image: "👥",
      path: "/talent",
      features: ["AI Matching", "Global Talent", "Verified Profiles", "Instant Hiring"]
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-sm ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`}>
        ★
      </span>
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured Solutions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our most popular and innovative technology solutions that are transforming businesses worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="text-4xl">{item.image}</div>
                  <div>
                    <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-medium rounded-full border border-blue-500/30">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-white">{item.price}</div>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-3">
                {item.title}
              </h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {item.description}
              </p>
              
              <div className="space-y-3 mb-6">
                {item.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2">
                  <div className="flex">
                    {renderStars(item.rating)}
                  </div>
                  <span className="text-gray-400 text-sm ml-2">
                    {item.rating} ({item.reviews} reviews)
                  </span>
                </div>
              </div>
              
              <Link
                to={item.path}
                className="block w-full text-center bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold py-3 rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-lg border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300"
          >
            View All Solutions
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}