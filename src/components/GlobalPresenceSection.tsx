import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Globe, Users, Clock, Award, CheckCircle } from 'lucide-react';

export function GlobalPresenceSection() {
  const globalOffices = [
    {
      city: "New York",
      country: "United States",
      address: "123 Tech Avenue, Manhattan, NY 10001",
      phone: "+1 (212) 555-0123",
      email: "nyc@ziontechgroup.com",
      services: ["AI Solutions", "Cybersecurity", "Cloud Services"],
      timezone: "EST (UTC-5)",
      image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      city: "London",
      country: "United Kingdom",
      address: "456 Innovation Street, Canary Wharf, E14 5AB",
      phone: "+44 20 7123 4567",
      email: "london@ziontechgroup.com",
      services: ["Digital Transformation", "IT Consulting", "AI Research"],
      timezone: "GMT (UTC+0)",
      image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      city: "Singapore",
      country: "Singapore",
      address: "789 Digital Hub, Marina Bay, 018956",
      phone: "+65 6789 0123",
      email: "singapore@ziontechgroup.com",
      services: ["Cloud Solutions", "DevOps", "FinTech"],
      timezone: "SGT (UTC+8)",
      image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      city: "São Paulo",
      country: "Brazil",
      address: "321 Tech Plaza, Vila Madalena, 05433-000",
      phone: "+55 11 98765 4321",
      email: "saopaulo@ziontechgroup.com",
      services: ["Latin America HQ", "AI Development", "Local Support"],
      timezone: "BRT (UTC-3)",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    }
  ];

  const globalStats = [
    { icon: Globe, value: "25+", label: "Countries Served" },
    { icon: Users, value: "500+", label: "Global Team Members" },
    { icon: Clock, value: "24/7", label: "Global Support" },
    { icon: Award, value: "15+", label: "Years Experience" }
  ];

  const globalCapabilities = [
    "Multi-language Support",
    "Local Compliance & Regulations",
    "Cultural Adaptation",
    "Time Zone Coverage",
    "Local Talent Networks",
    "Regional Expertise"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Global Presence
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Serving clients worldwide with local expertise and global reach. Our international 
            presence ensures 24/7 support and localized solutions.
          </p>
        </motion.div>

        {/* Global Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {globalStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-500/10 border border-cyan-500/20 rounded-xl mb-4">
                <stat.icon className="w-8 h-8 text-cyan-400" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Global Offices */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {globalOffices.map((office, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group"
            >
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden transition-all duration-300 group-hover:border-slate-500 group-hover:bg-slate-800/70">
                <div className="relative">
                  <img
                    src={office.image}
                    alt={`${office.city} office`}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {office.country}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <MapPin className="w-5 h-5 text-cyan-400 mr-2" />
                    <h3 className="text-xl font-semibold text-white">{office.city}</h3>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="text-gray-400 text-sm">
                      <strong className="text-gray-300">Address:</strong> {office.address}
                    </div>
                    <div className="text-gray-400 text-sm">
                      <strong className="text-gray-300">Phone:</strong> {office.phone}
                    </div>
                    <div className="text-gray-400 text-sm">
                      <strong className="text-gray-300">Email:</strong> {office.email}
                    </div>
                    <div className="text-gray-400 text-sm">
                      <strong className="text-gray-300">Timezone:</strong> {office.timezone}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">Services:</h4>
                    <div className="flex flex-wrap gap-2">
                      {office.services.map((service, serviceIndex) => (
                        <span
                          key={serviceIndex}
                          className="px-3 py-1 bg-slate-700/50 text-cyan-400 text-xs rounded-full border border-slate-600"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Capabilities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-slate-800/30 border border-slate-700 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6">
              Global Capabilities
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {globalCapabilities.map((capability, index) => (
                <div key={index} className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  {capability}
                </div>
              ))}
            </div>
            <p className="text-gray-300 text-lg">
              Our global network ensures that no matter where you are, you have access to 
              world-class technology solutions with local expertise and cultural understanding.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}