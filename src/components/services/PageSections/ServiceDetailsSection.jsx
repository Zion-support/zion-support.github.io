import React from 'react';
import { motion } from 'framer-motion';
import { Clock, MapPin, DollarSign, Shield, Users, CheckCircle, Phone, Mail, Calendar } from 'lucide-react';

export function ServiceDetailsSection({ selectedCountry, setSelectedCountry }) {
  if (!selectedCountry) {
    return (
      <div className="py-16 text-center">
        <div className="w-20 h-20 bg-zion-slate-light/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <MapPin className="w-10 h-10 text-zion-slate-light" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">Select a Country</h3>
        <p className="text-zion-slate-light max-w-md mx-auto">
          Choose a country from the list above to view detailed service information and pricing.
        </p>
      </div>
    );
  }

  const serviceFeatures = [
    {
      icon: Clock,
      title: 'Response Time',
      value: selectedCountry.responseTime,
      description: 'Average time to arrive on-site'
    },
    {
      icon: Shield,
      title: 'Availability',
      value: selectedCountry.availability,
      description: 'Service availability hours'
    },
    {
      icon: Users,
      title: 'Team Size',
      value: '2-4 technicians',
      description: 'Typical team deployment'
    },
    {
      icon: CheckCircle,
      title: 'Coverage',
      value: selectedCountry.coverage,
      description: 'Geographic service area'
    }
  ];

  const serviceTypes = [
    {
      name: 'Emergency Response',
      description: 'Immediate on-site support for critical issues',
      price: selectedCountry.emergencyRate,
      currency: selectedCountry.currency,
      features: ['24/7 availability', '2-4 hour response', 'Priority support']
    },
    {
      name: 'Scheduled Maintenance',
      description: 'Regular system maintenance and updates',
      price: selectedCountry.basePrice,
      currency: selectedCountry.currency,
      features: ['Planned visits', 'Comprehensive reports', 'Preventive care']
    },
    {
      name: 'Project Implementation',
      description: 'New system deployment and configuration',
      price: selectedCountry.basePrice * 0.8,
      currency: selectedCountry.currency,
      features: ['Project planning', 'Installation', 'Training']
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-br from-zion-slate-dark to-zion-slate-light/5">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-zion-cyan/20 text-zion-cyan px-4 py-2 rounded-full mb-6"
          >
            <MapPin className="w-5 h-5" />
            <span className="font-medium">{selectedCountry.region}</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-bold text-white mb-4"
          >
            IT Services in {selectedCountry.country}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-zion-slate-light max-w-3xl mx-auto"
          >
            Professional on-site IT services with local expertise and global standards. 
            {selectedCountry.specialNotes && ` ${selectedCountry.specialNotes}`}
          </motion.p>
        </div>

        {/* Service Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {serviceFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="bg-zion-slate-dark border border-zion-slate-light rounded-xl p-6 text-center hover:border-zion-cyan transition-all duration-300"
            >
              <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-zion-cyan" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-2xl font-bold text-zion-cyan mb-2">{feature.value}</p>
              <p className="text-zion-slate-light text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Service Types */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">Service Types & Pricing</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceTypes.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-zion-slate-dark border border-zion-slate-light rounded-xl p-6 hover:border-zion-cyan transition-all duration-300"
              >
                <h4 className="text-xl font-semibold text-white mb-3">{service.name}</h4>
                <p className="text-zion-slate-light mb-4">{service.description}</p>
                
                <div className="mb-6">
                  <div className="text-3xl font-bold text-zion-cyan mb-1">
                    {service.currency} {service.price}
                  </div>
                  <div className="text-zion-slate-light text-sm">per hour</div>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-zion-cyan" />
                      <span className="text-zion-slate-light">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className="w-full py-3 bg-zion-cyan text-futuristic font-medium rounded-lg hover:bg-zion-cyan/90 transition-colors">
                  Request Service
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Pricing Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-zion-slate-dark border border-zion-slate-light rounded-xl p-8 mb-16"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">Detailed Pricing</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Base Services</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-zion-slate-light">Hourly Rate:</span>
                  <span className="text-white">{selectedCountry.currency} {selectedCountry.basePrice}/hr</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zion-slate-light">Travel Fee:</span>
                  <span className="text-white">{selectedCountry.currency} {selectedCountry.travelFee}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zion-slate-light">Emergency Rate:</span>
                  <span className="text-white">{selectedCountry.currency} {selectedCountry.emergencyRate}/hr</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Additional Costs</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-zion-slate-light">Weekend Rate:</span>
                  <span className="text-white">+25%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zion-slate-light">Holiday Rate:</span>
                  <span className="text-white">+50%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zion-slate-light">Remote Locations:</span>
                  <span className="text-white">+{selectedCountry.travelFee * 0.5}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
          <p className="text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Contact our team to discuss your specific needs and get a customized quote for {selectedCountry.country}.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-8 py-4 bg-zion-cyan text-futuristic font-semibold rounded-xl hover:bg-zion-cyan/90 transition-all duration-300 flex items-center gap-2">
              <Phone className="w-5 h-5" />
              Call Now
            </button>
            <button className="px-8 py-4 bg-zion-blue text-white font-semibold rounded-xl hover:bg-zion-blue/90 transition-all duration-300 flex items-center gap-2">
              <Mail className="w-5 h-5" />
              Send Email
            </button>
            <button className="px-8 py-4 bg-zion-purple text-white font-semibold rounded-xl hover:bg-zion-purple/90 transition-all duration-300 flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Schedule Visit
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}