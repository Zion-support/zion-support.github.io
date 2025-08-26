import React from 'react';
import { Link } from 'react-router-dom';

interface CategoriesSectionProps {
  showTitle?: boolean;
}

export function CategoriesSection({ showTitle = true }: CategoriesSectionProps) {
  const categories = [
    {
      title: "AI & Machine Learning",
      description: "Cutting-edge artificial intelligence solutions",
      icon: "🤖",
      path: "/services",
      color: "from-purple-500 to-pink-500",
      features: ["Predictive Analytics", "NLP", "Computer Vision", "AutoML"]
    },
    {
      title: "Cybersecurity",
      description: "Advanced security and compliance solutions",
      icon: "🔒",
      path: "/services",
      color: "from-red-500 to-orange-500",
      features: ["Zero Trust", "SOC 2", "Penetration Testing", "Incident Response"]
    },
    {
      title: "Cloud & DevOps",
      description: "Scalable infrastructure and automation",
      icon: "☁️",
      path: "/services",
      color: "from-blue-500 to-cyan-500",
      features: ["Multi-Cloud", "Kubernetes", "CI/CD", "IaC"]
    },
    {
      title: "Quantum Computing",
      description: "Next-generation quantum solutions",
      icon: "🧠",
      path: "/services",
      color: "from-indigo-500 to-purple-500",
      features: ["Quantum Algorithms", "QML", "Optimization", "Research"]
    },
    {
      title: "Blockchain & Web3",
      description: "Decentralized technology solutions",
      icon: "⛓️",
      path: "/services",
      color: "from-green-500 to-emerald-500",
      features: ["Smart Contracts", "DeFi", "NFTs", "DApps"]
    },
    {
      title: "Green IT",
      description: "Sustainable technology solutions",
      icon: "🌱",
      path: "/services",
      color: "from-yellow-500 to-orange-500",
      features: ["Energy Efficiency", "Carbon Reduction", "Sustainable Tech", "Green Cloud"]
    }
  ];

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showTitle && (
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Technology Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology services designed to accelerate your digital transformation and drive innovation.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Link
              key={index}
              to={category.path}
              className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center text-2xl mr-4 group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                    {category.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {category.description}
                  </p>
                </div>
              </div>
              
              <div className="space-y-2 mb-4">
                {category.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex items-center text-blue-400 text-sm font-medium group-hover:text-blue-300 transition-colors duration-300">
                Learn More
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            View All Services
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}