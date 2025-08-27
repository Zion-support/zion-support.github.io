import React from "react";
import { Link } from "react-router-dom";

export function FeatureCTAs() {
  const features = [
    {
      title: "AI Services & Solutions",
      description: "Comprehensive AI services from strategy to implementation, including custom model development and AI consulting.",
      icon: "🤖",
      link: "/ai-services",
      badge: "New"
    },
    {
      title: "IT Services & Infrastructure",
      description: "Complete IT solutions including cloud management, cybersecurity, DevOps, and infrastructure modernization.",
      icon: "🖥️",
      link: "/it-services",
      badge: "Popular"
    },
    {
      title: "Digital Marketing Services",
      description: "Full-service digital marketing including SEO, PPC, social media, content marketing, and analytics.",
      icon: "📈",
      link: "/digital-marketing",
      badge: "Featured"
    },
    {
      title: "Business Solutions & Consulting",
      description: "Strategic business consulting, process optimization, and digital transformation services.",
      icon: "💼",
      link: "/business-solutions"
    },
    {
      title: "AI Talent Matching",
      description: "Our AI-powered matching algorithm connects you with the perfect talent or job based on skills, experience, and preferences.",
      icon: "🔍",
      link: "/marketplace",
      badge: "Popular"
    },
    {
      title: "Talent Directory",
      description: "Browse our extensive database of verified AI and tech specialists, filtered by expertise and availability.",
      icon: "👥",
      link: "/talent"
    }
  ];

  return (
    <section className="py-20 bg-zion-slate-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Explore Our Features
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Discover the comprehensive suite of tools and services designed to accelerate your digital transformation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-zion-slate border border-zion-purple/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/20 group">
              <div className="flex items-center justify-between mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-purple to-zion-cyan rounded-xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                {feature.badge && (
                  <span className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-xs font-medium rounded-full border border-zion-cyan/30">
                    {feature.badge}
                  </span>
                )}
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                {feature.description}
              </p>
              
              <Link
                to={feature.link}
                className="inline-flex items-center text-zion-cyan hover:text-zion-cyan/80 font-medium text-sm group-hover:underline transition-colors"
              >
                Learn More
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            to="/services"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-purple to-zion-cyan text-white font-semibold rounded-lg hover:from-zion-purple/80 hover:to-zion-cyan/80 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-zion-cyan/25"
          >
            View All Services
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
