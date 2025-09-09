import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Users, Globe, Building, Award, Clock } from 'lucide-react';

const globalStats = [
  {
    icon: MapPin,
    metric: '25+',
    label: 'Countries Served',
    description: 'Global reach across continents'
  },
  {
    icon: Users,
    metric: '500+',
    label: 'Global Clients',
    description: 'Trusted by businesses worldwide'
  },
  {
    icon: Building,
    metric: '15',
    label: 'Office Locations',
    description: 'Strategic presence worldwide'
  },
  {
    icon: Award,
    metric: '50+',
    label: 'Industry Awards',
    description: 'Recognition for excellence'
  },
  {
    icon: Clock,
    metric: '24/7',
    label: 'Global Support',
    description: 'Round-the-clock assistance'
  },
  {
    icon: Globe,
    metric: '100%',
    label: 'Remote Capable',
    description: 'Seamless global delivery'
  }
];

const regions = [
  {
    name: 'North America',
    countries: ['United States', 'Canada', 'Mexico'],
    clients: 200,
    specialties: ['AI/ML', 'Cloud', 'Cybersecurity'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    name: 'Europe',
    countries: ['UK', 'Germany', 'France', 'Netherlands', 'Sweden'],
    clients: 150,
    specialties: ['Digital Transformation', 'IoT', 'FinTech'],
    color: 'from-green-500 to-emerald-500'
  },
  {
    name: 'Asia Pacific',
    countries: ['Japan', 'Singapore', 'Australia', 'India', 'South Korea'],
    clients: 120,
    specialties: ['AI Solutions', 'E-commerce', 'Manufacturing'],
    color: 'from-purple-500 to-pink-500'
  },
  {
    name: 'Middle East',
    countries: ['UAE', 'Saudi Arabia', 'Israel', 'Qatar'],
    clients: 80,
    specialties: ['Smart Cities', 'Energy Tech', 'Financial Services'],
    color: 'from-red-500 to-orange-500'
  }
];

export function GlobalPresenceSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-slate-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, currentColor 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Global <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Presence</span>
          </h2>
          <p className="text-zion-slate-light text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            From Silicon Valley to Singapore, we're helping businesses worldwide transform 
            their operations with cutting-edge technology solutions.
          </p>
        </motion.div>

        {/* Global Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-20 max-w-6xl mx-auto">
          {globalStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.metric}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{stat.label}</h3>
                <p className="text-zion-slate-light text-sm leading-relaxed">{stat.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Regional Breakdown */}
        <div className="mb-16">
          <motion.h3 
            className="text-3xl font-bold text-white text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Regional Expertise
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {regions.map((region, index) => (
              <motion.div
                key={region.name}
                className="group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-2xl p-6 h-full hover:border-zion-cyan/40 hover:bg-zion-slate-dark/70 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-zion-cyan/25">
                  <div className={`w-16 h-16 bg-gradient-to-r ${region.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  
                  <h4 className="text-xl font-bold text-white mb-3 text-center">{region.name}</h4>
                  
                  <div className="mb-4">
                    <h5 className="text-sm font-medium text-zion-cyan mb-2">Countries:</h5>
                    <div className="flex flex-wrap gap-1">
                      {region.countries.map((country, countryIndex) => (
                        <span key={countryIndex} className="text-xs text-zion-slate-light bg-zion-slate-light/10 px-2 py-1 rounded-full">
                          {country}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h5 className="text-sm font-medium text-zion-cyan mb-2">Active Clients:</h5>
                    <p className="text-white font-bold text-lg">{region.clients}+</p>
                  </div>
                  
                  <div className="mb-4">
                    <h5 className="text-sm font-medium text-zion-cyan mb-2">Specialties:</h5>
                    <div className="space-y-1">
                      {region.specialties.map((specialty, specialtyIndex) => (
                        <div key={specialtyIndex} className="flex items-center text-xs text-zion-slate-light">
                          <div className="w-2 h-2 bg-zion-cyan rounded-full mr-2 flex-shrink-0"></div>
                          {specialty}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Global CTA */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="bg-zion-slate-dark/30 backdrop-blur-sm border border-zion-cyan/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Go Global?
            </h3>
            <p className="text-zion-slate-light mb-6">
              Whether you're in New York or Tokyo, our global team is ready to help 
              you scale your technology solutions worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-3 rounded-xl font-medium hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300">
                Start Global Project
              </button>
              <button className="border border-zion-cyan/20 text-zion-cyan px-8 py-3 rounded-xl font-medium hover:bg-zion-cyan/20 transition-all duration-300">
                Find Local Office
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}