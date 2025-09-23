import React from 'react';
import { motion } from 'framer-motion';

const globalOffices = [
  {
    city: "Middletown, DE",
    country: "United States",
    type: "Headquarters",
    icon: "🇺🇸",
    description: "Main office and innovation center"
  },
  {
    city: "London",
    country: "United Kingdom",
    type: "European Hub",
    icon: "🇬🇧",
    description: "European operations and client services"
  },
  {
    city: "Singapore",
    country: "Singapore",
    type: "Asia-Pacific Hub",
    icon: "🇸🇬",
    description: "APAC market expansion and support"
  },
  {
    city: "Toronto",
    country: "Canada",
    type: "North American Hub",
    icon: "🇨🇦",
    description: "Canadian market and development center"
  }
];

const globalStats = [
  { label: "Countries Served", value: "25+", icon: "🌍" },
  { label: "Global Clients", value: "500+", icon: "👥" },
  { label: "Languages Supported", value: "15+", icon: "🗣️" },
  { label: "24/7 Support", value: "Global", icon: "⏰" }
];

export function GlobalPresenceSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Global Presence
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Serving clients worldwide with innovative technology solutions and local expertise
          </p>
        </motion.div>

        {/* Global Statistics */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {globalStats.map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">{stat.icon}</span>
              </div>
              <div className="text-3xl font-bold text-blue-400 mb-2">{stat.value}</div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Global Offices */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Strategic Global Locations
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {globalOffices.map((office, index) => (
              <motion.div
                key={office.city}
                className="bg-slate-800 border border-slate-700 rounded-xl p-6 text-center hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">{office.icon}</span>
                </div>
                
                <div className="mb-2">
                  <span className="px-3 py-1 bg-blue-600/20 text-blue-400 text-xs font-semibold rounded-full">
                    {office.type}
                  </span>
                </div>
                
                <h4 className="text-lg font-bold text-white mb-1">{office.city}</h4>
                <p className="text-gray-400 text-sm mb-3">{office.country}</p>
                <p className="text-gray-300 text-xs">{office.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Global Map Visualization */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">🌍</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Worldwide Coverage</h3>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Our distributed team and cloud infrastructure ensure seamless service delivery 
              across all time zones and regions, with local expertise and global capabilities.
            </p>
          </div>
        </motion.div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold">
            <span>Ready to go global?</span>
            <span className="text-2xl">→</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}