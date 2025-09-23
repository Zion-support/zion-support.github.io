import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const quickLinks = [
  {
    title: "AI Services",
    description: "Artificial Intelligence & Machine Learning",
    icon: "🤖",
    link: "/ai-services",
    color: "from-purple-500 to-indigo-600"
  },
  {
    title: "Micro SAAS",
    description: "Cloud-based Software Solutions",
    icon: "☁️",
    link: "/micro-saas",
    color: "from-cyan-500 to-blue-600"
  },
  {
    title: "IT Services",
    description: "Infrastructure & Technical Consulting",
    icon: "⚡",
    link: "/it-services",
    color: "from-amber-500 to-orange-600"
  },
  {
    title: "Contact Us",
    description: "Get in touch with our team",
    icon: "📞",
    link: "/contact",
    color: "from-green-500 to-emerald-600"
  }
];

export function QuickAccess() {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-800 via-slate-900 to-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Quick Access
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Navigate quickly to our most popular services and resources
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickLinks.map((link, index) => (
            <motion.div
              key={link.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link 
                to={link.link}
                className="block group"
              >
                <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 h-full transition-all duration-300 hover:border-blue-500/50 hover:bg-slate-700 hover:shadow-lg hover:shadow-blue-500/25">
                  <div className={`w-16 h-16 bg-gradient-to-br ${link.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-2xl">{link.icon}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-200">
                    {link.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {link.description}
                  </p>
                  
                  <div className="mt-4 flex items-center text-blue-400 text-sm font-semibold group-hover:text-blue-300 transition-colors duration-200">
                    Learn More
                    <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">→</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link 
            to="/services"
            className="inline-flex items-center gap-2 px-6 py-3 border border-blue-500 text-blue-400 rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-200"
          >
            View All Services
            <span className="text-sm">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}