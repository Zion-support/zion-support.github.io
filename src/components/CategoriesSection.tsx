import React from 'react';
import { Link } from 'react-router-dom';

export function CategoriesSection() {
  const categories = [
    {
      title: "AI Solutions",
      description: "Advanced artificial intelligence and machine learning solutions",
      icon: "🤖",
      link: "/services/ai",
      color: "from-zion-purple to-zion-cyan"
    },
    {
      title: "Cybersecurity",
      description: "Comprehensive security and compliance solutions",
      icon: "🔒",
      link: "/services/cybersecurity",
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Cloud Services",
      description: "Scalable cloud infrastructure and DevOps solutions",
      icon: "☁️",
      link: "/services/cloud",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Digital Transformation",
      description: "End-to-end business process modernization",
      icon: "⚡",
      link: "/services/transformation",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section className="py-20 bg-zion-slate-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Explore Our Service Categories
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Discover comprehensive solutions across multiple domains
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div key={index}>
              <Link to={category.link} className="group block h-full">
                <div className="rounded-2xl overflow-hidden h-full border border-zion-purple/30 bg-zion-slate p-8 transition-all duration-500 hover:border-zion-cyan/60 hover:translate-y-[-8px] hover:shadow-2xl hover:shadow-zion-cyan/20">
                  <div className={`rounded-2xl w-20 h-20 bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <div className="text-white text-3xl">
                      {category.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-white text-2xl font-bold mb-4 group-hover:text-zion-cyan transition-colors">
                    {category.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {category.description}
                  </p>

                  <div className="flex items-center text-zion-cyan group-hover:text-zion-cyan/80 transition-colors">
                    <span className="text-sm font-medium">Learn More</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        
        <div className="mt-16 flex justify-center">
          <Link 
            to="/services" 
            className="group inline-flex items-center gap-3 text-zion-cyan border-b-2 border-zion-cyan hover:border-zion-cyan/80 transition-colors text-lg font-medium py-2"
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
