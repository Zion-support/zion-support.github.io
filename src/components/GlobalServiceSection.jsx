import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Clock, Users, Shield, CheckCircle, MapPin } from 'lucide-react';

export function GlobalServiceSection() {
  const globalFeatures = [
    {
      icon: Globe,
      title: 'Global Coverage',
      description: 'Serving clients across 50+ countries with localized support and expertise.',
      color: 'text-blue-400'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock technical support and emergency response services.',
      color: 'text-green-400'
    },
    {
      icon: Users,
      title: 'Local Teams',
      description: 'Dedicated local teams with deep understanding of regional markets.',
      color: 'text-purple-400'
    },
    {
      icon: Shield,
      title: 'Compliance Ready',
      description: 'Meeting international standards and local regulatory requirements.',
      color: 'text-orange-400'
    },
    {
      icon: CheckCircle,
      title: 'Certified Partners',
      description: 'Network of certified technology partners and service providers.',
      color: 'text-cyan-400'
    },
    {
      icon: MapPin,
      title: 'Strategic Locations',
      description: 'Strategic presence in major business hubs and technology centers.',
      color: 'text-red-400'
    }
  ];

  const regions = [
    { name: 'North America', countries: 3, offices: 12 },
    { name: 'Europe', countries: 28, offices: 25 },
    { name: 'Asia Pacific', countries: 15, offices: 18 },
    { name: 'Latin America', countries: 8, offices: 10 },
    { name: 'Middle East', countries: 6, offices: 8 },
    { name: 'Africa', countries: 12, offices: 15 }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-zion-slate-dark to-zion-slate-light/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-white mb-6"
          >
            Global Service Network
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-zion-slate-light max-w-3xl mx-auto"
          >
            Delivering world-class IT services and solutions across the globe with local expertise and global standards.
          </motion.p>
        </div>

        {/* Global Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {globalFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="bg-zion-slate-dark border border-zion-slate-light rounded-xl p-6 hover:border-zion-cyan transition-all duration-300"
            >
              <div className="w-16 h-16 bg-zion-slate-light/10 rounded-xl flex items-center justify-center mb-4">
                <feature.icon className={`w-8 h-8 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-zion-slate-light">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Global Presence */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-zion-slate-dark border border-zion-slate-light rounded-xl p-8"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">Global Presence</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regions.map((region, index) => (
              <motion.div
                key={region.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="text-center p-4 bg-zion-slate-light/10 rounded-lg"
              >
                <h4 className="text-lg font-semibold text-white mb-2">{region.name}</h4>
                <div className="space-y-1">
                  <p className="text-zion-cyan text-sm">{region.countries} Countries</p>
                  <p className="text-zion-slate-light text-sm">{region.offices} Offices</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Go Global?</h3>
          <p className="text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Connect with our global team to discuss how we can support your international technology needs.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-futuristic font-semibold rounded-xl hover:from-zion-cyan/90 hover:to-zion-blue/90 transition-all duration-300 transform hover:scale-105">
            Contact Global Team
          </button>
        </motion.div>
      </div>
    </div>
  );
}