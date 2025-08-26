import React from 'react';
import { Link } from 'react-router-dom';

export const QuickAccess = () => {
  const quickLinks = [
    { title: "AI Services", href: "/services/ai", icon: "🤖", color: "from-blue-500 to-cyan-500" },
    { title: "Cloud Solutions", href: "/services/cloud", icon: "☁️", color: "from-purple-500 to-blue-500" },
    { title: "Cybersecurity", href: "/services/cybersecurity", icon: "🛡️", color: "from-red-500 to-orange-500" },
    { title: "Contact Us", href: "/contact", icon: "📞", color: "from-green-500 to-emerald-500" }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Quick <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Access</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Get instant access to our most popular services and solutions
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {quickLinks.map((link, index) => (
            <Link
              key={index}
              to={link.href}
              className="group block"
            >
              <div className="bg-gradient-to-br from-slate-700 to-slate-800 p-6 rounded-xl border border-slate-600 hover:border-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 text-center">
                <div className={`w-16 h-16 bg-gradient-to-r ${link.color} rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-3xl">{link.icon}</span>
                </div>
                <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {link.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
