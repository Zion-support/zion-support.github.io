
import React from 'react';
import { Link } from 'react-router-dom';

export const FeatureCTAs = () => {
  const features = [
    {
      title: "AI-Powered Solutions",
      description: "Transform your business with cutting-edge artificial intelligence",
      icon: "🤖",
      href: "/services/ai",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Cloud & DevOps",
      description: "Scale your infrastructure with modern cloud technologies",
      icon: "☁️",
      href: "/services/cloud",
      color: "from-purple-500 to-blue-500"
    },
    {
      title: "Cybersecurity",
      description: "Protect your digital assets with enterprise-grade security",
      icon: "🛡️",
      href: "/services/cybersecurity",
      color: "from-red-500 to-orange-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Solutions</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our most innovative and effective technology solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-2xl border border-slate-600 hover:border-cyan-400 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/25"
            >
              <div className={`w-20 h-20 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-4xl">{feature.icon}</span>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                {feature.description}
              </p>
              
              <Link
                to={feature.href}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform group-hover:scale-105"
              >
                Learn More
                <span className="ml-2">→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
