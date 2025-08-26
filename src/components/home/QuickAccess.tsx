import React from 'react';
import { Link } from 'react-router-dom';

export function QuickAccess() {
  const quickLinks = [
    {
      title: 'AI Solutions',
      description: 'Machine Learning & AI Services',
      href: '/services/ai',
      icon: '🤖',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Cloud & DevOps',
      description: 'Cloud Migration & Automation',
      href: '/services/cloud',
      icon: '☁️',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Cybersecurity',
      description: 'Security & Threat Protection',
      href: '/services/cybersecurity',
      icon: '🔒',
      color: 'from-red-500 to-orange-500'
    },
    {
      title: 'IT Infrastructure',
      description: 'Network & System Management',
      href: '/services/infrastructure',
      icon: '🏗️',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Digital Transformation',
      description: 'Business Process Optimization',
      href: '/services/transformation',
      icon: '🚀',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Consulting',
      description: 'Technology Strategy & Advisory',
      href: '/services/consulting',
      icon: '💡',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Quick Access to Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get instant access to our comprehensive range of technology services and solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quickLinks.map((link, index) => (
            <Link
              key={index}
              to={link.href}
              className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 hover:border-gray-300"
            >
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${link.color} rounded-lg flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}>
                  {link.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {link.title}
                  </h3>
                  <p className="text-gray-600 mt-1">
                    {link.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}