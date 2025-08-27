import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, Shield, Clock, Users, Globe, Wrench, FileText } from 'lucide-react';

export function ServiceIncludes() {
  const includedServices = [
    {
      icon: Shield,
      title: 'Security Assessment',
      description: 'Comprehensive security evaluation and recommendations',
      included: true
    },
    {
      icon: Clock,
      title: '24/7 Emergency Support',
      description: 'Round-the-clock availability for critical issues',
      included: true
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Certified IT professionals with specialized training',
      included: true
    },
    {
      icon: Globe,
      title: 'Global Coverage',
      description: 'Services available in 50+ countries worldwide',
      included: true
    },
    {
              icon: Wrench,
      title: 'Hardware & Software',
      description: 'All necessary tools and equipment provided',
      included: true
    },
    {
      icon: FileText,
      title: 'Detailed Reporting',
      description: 'Comprehensive service reports and documentation',
      included: true
    }
  ];

  const notIncluded = [
    {
      icon: XCircle,
      title: 'Travel Expenses',
      description: 'Additional travel costs for remote locations',
      included: false
    },
    {
      icon: XCircle,
      title: 'Hardware Replacement',
      description: 'Cost of new hardware or replacement parts',
      included: false
    },
    {
      icon: XCircle,
      title: 'Software Licenses',
      description: 'Third-party software licenses and subscriptions',
      included: false
    },
    {
      icon: XCircle,
      title: 'Extended Projects',
      description: 'Large-scale implementations beyond scope',
      included: false
    }
  ];

  const additionalServices = [
    {
      title: 'Extended Hours',
      description: 'After-hours and weekend support',
      price: '+25%',
      popular: false
    },
    {
      title: 'Holiday Support',
      description: 'Service during holidays and special occasions',
      price: '+50%',
      popular: false
    },
    {
      title: 'Remote Locations',
      description: 'Service in hard-to-reach areas',
      price: '+Travel Fee',
      popular: true
    },
    {
      title: 'Priority Response',
      description: 'Guaranteed response within 2 hours',
      price: '+100%',
      popular: false
    }
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-white mb-6"
          >
            What's Included in Your Service
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-zion-slate-light max-w-3xl mx-auto"
          >
            Transparent pricing with clear understanding of what's included and what's not. 
            No hidden fees or surprises.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Included Services */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-zion-slate-dark border border-zion-cyan rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-xl flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-zion-cyan" />
                </div>
                <h3 className="text-2xl font-bold text-white">Included Services</h3>
              </div>
              
              <div className="space-y-4">
                {includedServices.map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-white mb-1">{service.title}</h4>
                      <p className="text-zion-slate-light text-sm">{service.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Not Included */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-zion-slate-dark border border-zion-slate-light rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-zion-slate-light/20 rounded-xl flex items-center justify-center">
                  <XCircle className="w-6 h-6 text-zion-slate-light" />
                </div>
                <h3 className="text-2xl font-bold text-white">Not Included</h3>
              </div>
              
              <div className="space-y-4">
                {notIncluded.map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="flex items-start gap-3"
                  >
                    <XCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-white mb-1">{service.title}</h4>
                      <p className="text-zion-slate-light text-sm">{service.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">Additional Services Available</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className={`bg-zion-slate-dark border rounded-xl p-6 ${
                  service.popular 
                    ? 'border-zion-cyan shadow-2xl shadow-zion-cyan/20' 
                    : 'border-zion-slate-light'
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-zion-cyan text-futuristic px-3 py-1 rounded-full text-xs font-medium">
                      Popular
                    </span>
                  </div>
                )}
                
                <h4 className="text-lg font-semibold text-white mb-3">{service.title}</h4>
                <p className="text-zion-slate-light text-sm mb-4">{service.description}</p>
                
                <div className="text-center">
                  <div className="text-2xl font-bold text-zion-cyan mb-2">{service.price}</div>
                  <button className="w-full py-2 bg-zion-cyan text-futuristic font-medium rounded-lg hover:bg-zion-cyan/90 transition-colors text-sm">
                    Add Service
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Service Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20 border border-zion-cyan rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Our Service Guarantee</h3>
            <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
              We stand behind our work with a 100% satisfaction guarantee. If you're not completely 
              satisfied with our service, we'll make it right at no additional cost.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="flex items-center gap-2 text-zion-cyan">
                <CheckCircle className="w-5 h-5" />
                <span className="font-medium">Quality Assured</span>
              </div>
              <div className="flex items-center gap-2 text-zion-cyan">
                <CheckCircle className="w-5 h-5" />
                <span className="font-medium">No Hidden Fees</span>
              </div>
              <div className="flex items-center gap-2 text-zion-cyan">
                <CheckCircle className="w-5 h-5" />
                <span className="font-medium">24/7 Support</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}