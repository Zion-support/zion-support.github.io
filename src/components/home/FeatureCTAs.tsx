import React from 'react';
import { Link } from 'react-router-dom';

export function FeatureCTAs() {
  const ctaItems = [
    {
      title: "Hire AI Talent",
      description: "Find the perfect AI professionals for your project",
      buttonText: "Browse AI Talent",
      path: "/talent",
      icon: "🤖",
      color: "from-purple-600 to-pink-600",
      bgColor: "from-purple-500/20 to-pink-500/20"
    },
    {
      title: "Get IT Support",
      description: "24/7 on-site and remote technical assistance",
      buttonText: "Request Support",
      path: "/it-onsite-services",
      icon: "🛠️",
      color: "from-blue-600 to-cyan-600",
      bgColor: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "Request Quote",
      description: "Get a customized quote for your project",
      buttonText: "Get Quote",
      path: "/request-quote",
      icon: "💰",
      color: "from-green-600 to-emerald-600",
      bgColor: "from-green-500/20 to-emerald-500/20"
    }
  ];

  return (
    <section className="py-16 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Choose the path that best fits your needs and let Zion Tech Group help you achieve your technology goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ctaItems.map((item, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${item.bgColor} backdrop-blur-lg border border-white/10 rounded-2xl p-8 text-center hover:scale-105 transition-all duration-300`}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center text-3xl mx-auto mb-6`}>
                {item.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">
                {item.title}
              </h3>
              
              <p className="text-gray-300 mb-8 leading-relaxed">
                {item.description}
              </p>
              
              <Link
                to={item.path}
                className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${item.color} text-white font-semibold rounded-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
              >
                {item.buttonText}
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-4 bg-white/5 backdrop-blur-lg border border-white/10 rounded-full px-8 py-4">
            <span className="text-white font-semibold">Need something else?</span>
            <Link
              to="/contact"
              className="text-blue-400 hover:text-blue-300 font-medium transition-colors duration-300"
            >
              Contact us directly
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}