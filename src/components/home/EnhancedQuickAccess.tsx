import React from 'react';
import { Link } from 'react-router-dom';

export const EnhancedQuickAccess: React.FC = () => {
  const quickAccessItems = [
    {
      title: "🚀 AI Services Guide",
      description: "Complete AI solutions with proven ROI",
      url: "/ai-services-comprehensive-guide-2026",
      isNew: true,
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "⚛️ Quantum Computing",
      description: "Revolutionary quantum technologies",
      url: "/quantum-computing-solutions-showcase-2026",
      isNew: true,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "🌟 All Tech Solutions",
      description: "Complete technology portfolio",
      url: "/revolutionary-technology-showcase-2026",
      isNew: true,
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "🤖 Innovation Lab",
      description: "Cutting-edge AI research",
      url: "/innovation-lab",
      isNew: false,
      color: "from-green-500 to-teal-500"
    },
    {
      title: "🛠️ Technology Showcase",
      description: "Advanced tech demonstrations",
      url: "/technology-showcase",
      isNew: false,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "📞 Contact Us",
      description: "Get expert consultation",
      url: "/contact",
      isNew: false,
      color: "from-gray-500 to-slate-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Quick Access to Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Jump directly to our most popular technology solutions and services. 
            Explore comprehensive guides, showcases, and expert consultations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quickAccessItems.map((item, index) => (
            <Link
              key={index}
              to={item.url}
              className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-gray-200 transform hover:scale-105"
            >
              {item.isNew && (
                <div className="absolute -top-2 -right-2 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                  NEW
                </div>
              )}
              
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center text-2xl text-white mr-4`}>
                  {item.title.split(' ')[0]}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-cyan-600 transition-colors">
                    {item.title.replace(/^[^\s]+\s/, '')}
                  </h3>
                </div>
              </div>
              
              <p className="text-gray-600 text-sm mb-4">{item.description}</p>
              
              <div className="flex items-center text-cyan-600 font-semibold text-sm group-hover:text-cyan-700 transition-colors">
                Explore Now →
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/revolutionary-technology-showcase-2026"
            className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-xl font-bold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 text-lg shadow-2xl transform hover:scale-105"
          >
            🌟 Explore All Solutions
          </Link>
        </div>
      </div>
    </section>
  );
};