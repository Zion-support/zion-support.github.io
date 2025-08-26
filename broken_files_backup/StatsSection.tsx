import React from 'react';
export function StatsSection() {
  const stats = [
    {
      number: '500+',
      label: 'Happy Clients',
      description: 'Satisfied customers across industries',
      icon: '👥',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      number: '1000+',
      label: 'Projects Delivered',
      description: 'Successful implementations completed',
      icon: '🚀',
      color: 'from-purple-500 to-pink-500'
    },
    {
      number: '99.9%',
      label: 'Uptime Guarantee',
      description: 'Reliable service availability',
      icon: '⚡',
      color: 'from-green-500 to-emerald-500'
    },
    {
      number: '24/7',
      label: 'Support Available',
      description: 'Round-the-clock technical assistance',
      icon: '🔄',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      number: '50+',
      label: 'Expert Team',
      description: 'Certified professionals',
      icon: '💡',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      number: '15+',
      label: 'Years Experience',
      description: 'Industry expertise and knowledge',
      icon: '🏆',
      color: 'from-red-500 to-pink-500'
    }
  ];
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Zion Tech Group by the Numbers
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our track record speaks for itself - delivering exceptional results and building lasting partnerships
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gray-50 rounded-xl p-8 h-full border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300">
                <div className={`w-20 h-20 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center text-3xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {stat.number}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {stat.label}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Join Our Success Story
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Be part of the next 500+ successful projects and experience the Zion Tech Group difference
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                Start Your Project
              </a>
              <a
                href="/about"
                className="inline-flex items-center px-8 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                Learn More About Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}