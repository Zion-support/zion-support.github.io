import React from 'react';
import { motion  } from 'framer-motion';
import { Globe, 
  MapPin, 
  Users, 
  Clock, 
  Star,
  Award,
  CheckCircle
 } from 'lucide-react';

export const GlobalPresenceSection: React.FC = (): JSX.Element => {
  const locations = [
    {
      city: 'New York',
      country: 'United States',
      flag: '🇺🇸',
      timezone: 'EST (UTC-5)',
      services['AI Development', 'Cloud Solutions', 'Cybersecurity'],
      teamSize: '25+',
      established: '2018'
    },
    {
      city: 'London',
      country: 'United Kingdom',
      flag: '🇬🇧',
      timezone: 'GMT (UTC+0)',
      services['Digital Transformation', 'FinTech Solutions', 'Compliance'],
      teamSize: '20+',
      established: '2019'
    },
    {
      city: 'Singapore',
      country: 'Singapore',
      flag: '🇸🇬',
      timezone: 'SGT (UTC+8)',
      services['APAC Operations', 'Supply Chain Tech', 'Smart Cities'],
      teamSize: '15+',
      established: '2020'
    },
    {
      city: 'Toronto',
      country: 'Canada',
      flag: '🇨🇦',
      timezone: 'EST (UTC-5)',
      services['Healthcare Tech', 'AI Research', 'Startup Incubation'],
      teamSize: '18+',
      established: '2021'
    },
    {
      city: 'Berlin',
      country: 'Germ',
      flag: '🇩🇪',
      timezone: 'CET (UTC+1)',
      services['IoT Solutions', 'Manufacturing Tech', 'Green Tech'],
      teamSize: '12+',
      established: '2022'
    },
    {
      city: 'Sydney',
      country: 'Australia',
      flag: '🇦🇺',
      timezone: 'AEST (UTC+10)',
      services['EdTech Solutions', 'Renewable Energy', 'Digital Health'],
      teamSize: '10+',
      established: '2022'
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
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 md: grid-cols-3 lg:grid-cols-6 gap-6 mb-16"
        >
          {globalStats.map((stat, index)  => {
            const IconComponent = stat.icon;
            return (
              <div key={stat.label} className="text-center">
                <div className="flex justify-center mb-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <IconComponent className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            )})}
        </motion.div>

        {/* Locations Grid */}
        <div className="grid md: grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {locations.map((location, index)  => (
            <motion.div
              key={location.city}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">{location.flag}</span>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {location.city}
                  </h3>
                  <p className="text-gray-600 text-sm">{location.country}</p>
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
  )};

export default GlobalPresenceSection;
