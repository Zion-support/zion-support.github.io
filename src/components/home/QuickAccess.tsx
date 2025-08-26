import React from 'react';
import { Link } from 'react-router-dom';

export function QuickAccess() {
  const quickAccessItems = [
    {
      title: "AI Solutions",
      description: "Cutting-edge AI services and automation",
      icon: "🤖",
      path: "/services",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Cybersecurity",
      description: "Advanced security and compliance solutions",
      icon: "🔒",
      path: "/services",
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Cloud & DevOps",
      description: "Scalable infrastructure and automation",
      icon: "☁️",
      path: "/services",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Talent Network",
      description: "Find top tech professionals",
      icon: "👥",
      path: "/talent",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Equipment",
      description: "High-quality tech hardware",
      icon: "🖥️",
      path: "/equipment",
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Get Support",
      description: "24/7 technical assistance",
      icon: "🆘",
      path: "/contact",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section className="py-16 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Quick Access to Our Services
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Get instant access to Zion Tech Group's comprehensive technology solutions and support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quickAccessItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-lg flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
              
              <div className="mt-4 flex items-center text-blue-400 text-sm font-medium group-hover:text-blue-300 transition-colors duration-300">
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