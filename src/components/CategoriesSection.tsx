import React from 'react';
import { Link } from 'react-router-dom';

export function CategoriesSection({ showTitle = true }: { showTitle?: boolean }) {
  const categories = [
    {
      title: "AI Solutions",
      description: "Custom AI models, machine learning, and intelligent automation solutions",
      icon: "🤖",
      link: "/services/ai",
      color: "from-purple-500 to-pink-500",
      features: ["Custom AI Models", "Machine Learning", "Process Automation"]
    },
    {
      title: "Cloud & DevOps",
      description: "Cloud migration, infrastructure automation, and DevOps best practices",
      icon: "☁️",
      link: "/services/cloud",
      color: "from-blue-500 to-cyan-500",
      features: ["Cloud Migration", "DevOps Automation", "Infrastructure as Code"]
    },
    {
      title: "Cybersecurity",
      description: "Comprehensive security solutions and threat protection services",
      icon: "🔒",
      link: "/services/cybersecurity",
      color: "from-red-500 to-orange-500",
      features: ["Threat Detection", "Security Audits", "Compliance"]
    },
    {
      title: "IT Infrastructure",
      description: "Network management, system administration, and infrastructure optimization",
      icon: "🏗️",
      link: "/services/infrastructure",
      color: "from-green-500 to-emerald-500",
      features: ["Network Design", "System Management", "Performance Optimization"]
    }
  ];

  const specialServices = [
    {
      title: "24/7 IT Support",
      link: "/contact",
      icon: "🔄"
    },
    {
      title: "Digital Transformation",
      link: "/services/transformation",
      icon: "🚀"
    },
    {
      title: "Technology Consulting",
      link: "/services/consulting",
      icon: "💡"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 0)`,
          backgroundSize: '80px 80px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {showTitle && (
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Explore Our Tech Ecosystem
            </h2>
            <p className="text-gray-300 text-xl md:text-2xl mt-6 max-w-4xl mx-auto leading-relaxed">
              Discover our comprehensive ecosystem of cutting-edge services, world-class expertise, 
              and breakthrough innovations
            </p>
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div key={category.title}>
              <Link to={category.link} className="group block h-full">
                <div className="rounded-2xl overflow-hidden h-full border border-blue-400/30 bg-gradient-to-br from-slate-800/50 to-slate-800 p-8 transition-all duration-500 hover:border-blue-400/60 hover:translate-y-[-8px] hover:shadow-2xl hover:shadow-blue-400/20 backdrop-blur-sm">
                  <div className={`rounded-2xl w-20 h-20 bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <div className="text-white text-3xl">
                      {category.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-white text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">
                    {category.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Feature list */}
                  <ul className="space-y-2 mb-6">
                    {category.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-300 text-sm">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
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
        
        <div className="mt-16">
          <h3 className="text-center text-2xl font-bold text-white mb-8">Premium Services</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {specialServices.map((service) => (
              <Link 
                key={service.title}
                to={service.link}
                className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 hover:from-blue-600/30 hover:to-cyan-600/30 border border-blue-400/30 hover:border-blue-400/50 rounded-2xl text-blue-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-400/20 backdrop-blur-sm"
              >
                <span className="text-xl">{service.icon}</span>
                <span className="font-medium">{service.title}</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
        
        <div className="mt-16 flex justify-center">
          <Link 
            to="/services" 
            className="group inline-flex items-center gap-3 text-blue-400 border-b-2 border-blue-400 hover:border-blue-300 transition-colors text-lg font-medium py-2"
          >
            Explore All Services
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}