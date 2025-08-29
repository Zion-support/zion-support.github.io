import React from 'react';
import { motion } from 'framer-motion';
import {
  Globe,
  MapPin,
  Users,
  Clock,
  Star,
  Award,
  CheckCircle
} from 'lucide-react';

export const GlobalPresenceSection: React.FC = () => {
  const locations = [
    {
      city: 'New York',
      country: 'United States',
      flag: '🇺🇸',
      timezone: 'EST (UTC-5)',
      services: ['AI Development', 'Cloud Solutions', 'Cybersecurity'],
      teamSize: '25+',
      established: '2018'
    },
    {
      city: 'London',
      country: 'United Kingdom',
      flag: '🇬🇧',
      timezone: 'GMT (UTC+0)',
      services: ['Digital Transformation', 'FinTech Solutions', 'Compliance'],
      teamSize: '20+',
      established: '2019'
    },
    {
      city: 'Singapore',
      country: 'Singapore',
      flag: '🇸🇬',
      timezone: 'SGT (UTC+8)',
      services: ['APAC Operations', 'Supply Chain Tech', 'Smart Cities'],
      teamSize: '15+',
      established: '2020'
    },
    {
      city: 'Toronto',
      country: 'Canada',
      flag: '🇨🇦',
      timezone: 'EST (UTC-5)',
      services: ['Healthcare Tech', 'AI Research', 'Startup Incubation'],
      teamSize: '18+',
      established: '2021'
    },
    {
      city: 'Berlin',
      country: 'Germany',
      flag: '🇩🇪',
      timezone: 'CET (UTC+1)',
      services: ['IoT Solutions', 'Manufacturing Tech', 'Green Tech'],
      teamSize: '12+',
      established: '2022'
    },
    {
      city: 'Sydney',
      country: 'Australia',
      flag: '🇦🇺',
      timezone: 'AEST (UTC+10)',
      services: ['EdTech Solutions', 'Renewable Energy', 'Digital Health'],
      teamSize: '10+',
      established: '2022'
    }
  ];

  const globalStats = [
    { label: 'Countries', value: '6', icon: Globe },
    { label: 'Cities', value: '6', icon: MapPin },
    { label: 'Team Members', value: '100+', icon: Users },
    { label: '24/7 Support', value: 'Yes', icon: Clock },
    { label: 'Client Satisfaction', value: '98%', icon: Star },
    { label: 'Certifications', value: '50+', icon: Award }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Global Presence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Serving clients worldwide with local expertise and global reach.
            Our distributed team ensures 24/7 support and cultural understanding.
          </p>
        </motion.div>

        {/* Global Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16"
        >
          {globalStats.map((stat, index) => {
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
            );
          })}
        </motion.div>

        {/* Locations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {locations.map((location, index) => (
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
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <Clock className="h-4 w-4 mr-2 text-blue-500" />
                  <span>{location.timezone}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Users className="h-4 w-4 mr-2 text-blue-500" />
                  <span>Team: {location.teamSize}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 mr-2 text-blue-500" />
                  <span>Since {location.established}</span>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2 text-sm">Services:</h4>
                <div className="flex flex-wrap gap-2">
                  {location.services.map((service, serviceIndex) => (
                    <span
                      key={serviceIndex}
                      className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              <button className="w-full text-center py-2 px-4 border border-blue-200 text-blue-600 hover:bg-blue-50 rounded-lg text-sm font-medium transition-colors duration-200">
                Contact Local Team
              </button>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Go Global?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Whether you're expanding internationally or need local expertise,
              our global presence ensures you get the support you need, when you need it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-6 py-3 bg-white text-blue-600 hover:bg-gray-100 rounded-lg font-medium transition-colors duration-200">
                Find Your Local Team
                <MapPin className="ml-2 h-5 w-5" />
              </button>
              <button className="inline-flex items-center px-6 py-3 border border-white text-white hover:bg-white hover:text-blue-600 rounded-lg font-medium transition-colors duration-200">
                Global Services
                <Globe className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GlobalPresenceSection;
