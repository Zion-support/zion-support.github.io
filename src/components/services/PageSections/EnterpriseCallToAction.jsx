import React from 'react';
import { motion } from 'framer-motion';
import { Building, Users, Shield, Globe, ArrowRight, Phone, Mail, Calendar } from 'lucide-react';

export function EnterpriseCallToAction() {
  const enterpriseFeatures = [
    {
      icon: Building,
      title: 'Enterprise Solutions',
      description: 'Scalable IT infrastructure and enterprise-grade security'
    },
    {
      icon: Users,
      title: 'Dedicated Teams',
      description: 'Assigned technical teams for ongoing support'
    },
    {
      icon: Shield,
      title: 'Compliance Ready',
      description: 'SOC 2, ISO 27001, GDPR, and HIPAA compliance'
    },
    {
      icon: Globe,
      title: 'Global Presence',
      description: 'Consistent service quality across all locations'
    }
  ];

  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      description: '+1 (302) 464-0950',
      action: 'Call Now',
      color: 'bg-zion-cyan',
      hoverColor: 'hover:bg-zion-cyan/90'
    },
    {
      icon: Mail,
      title: 'Send Email',
      description: 'enterprise@ziontechgroup.com',
      action: 'Send Email',
      color: 'bg-zion-blue',
      hoverColor: 'hover:bg-zion-blue/90'
    },
    {
      icon: Calendar,
      title: 'Schedule Meeting',
      description: 'Book a consultation call',
      action: 'Book Meeting',
      color: 'bg-zion-purple',
      hoverColor: 'hover:bg-zion-purple/90'
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-zion-slate-dark to-zion-slate-light/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-zion-cyan/20 text-zion-cyan px-4 py-2 rounded-full mb-6"
            >
              <Building className="w-5 h-5" />
              <span className="font-medium">Enterprise Solutions</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl font-bold text-white mb-6"
            >
              Ready to Transform Your Enterprise IT?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-zion-slate-light max-w-3xl mx-auto"
            >
              Join hundreds of enterprises worldwide who trust Zion Tech Group for their 
              critical IT infrastructure and support needs. Let's discuss how we can help 
              your organization achieve its technology goals.
            </motion.p>
          </div>

          {/* Enterprise Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {enterpriseFeatures.map((feature, index) => (
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
                <h3 className="text-lg font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-zion-slate-light text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-white text-center mb-8">Get in Touch</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-zion-slate-dark border border-zion-slate-light rounded-xl p-6 text-center hover:border-zion-cyan transition-all duration-300"
                >
                  <div className={`w-16 h-16 ${method.color}/20 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <method.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">{method.title}</h4>
                  <p className="text-zion-slate-light text-sm mb-4">{method.description}</p>
                  <button className={`w-full py-3 ${method.color} text-white font-medium rounded-lg ${method.hoverColor} transition-colors`}>
                    {method.action}
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Enterprise Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20 border border-zion-cyan rounded-xl p-8 mb-16"
          >
            <h3 className="text-2xl font-bold text-white text-center mb-8">Why Enterprises Choose Zion Tech Group</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-zion-cyan mb-2">500+</div>
                <div className="text-zion-slate-light">Enterprise Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-zion-cyan mb-2">99.9%</div>
                <div className="text-zion-slate-light">Uptime Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-zion-cyan mb-2">24/7</div>
                <div className="text-zion-slate-light">Global Support</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-zion-cyan mb-2">50+</div>
                <div className="text-zion-slate-light">Countries Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-zion-cyan mb-2">15+</div>
                <div className="text-zion-slate-light">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-zion-cyan mb-2">100%</div>
                <div className="text-zion-slate-light">Satisfaction Rate</div>
              </div>
            </div>
          </motion.div>

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center"
          >
            <h3 className="text-3xl font-bold text-white mb-6">Start Your Enterprise Journey Today</h3>
            <p className="text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Don't wait to modernize your IT infrastructure. Our team of experts is ready to 
              help you build a robust, scalable, and secure technology foundation for your enterprise.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-futuristic font-semibold rounded-xl hover:from-zion-cyan/90 hover:to-zion-blue/90 transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                Get Enterprise Quote
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 bg-zion-slate-light/20 text-white font-semibold rounded-xl hover:bg-zion-slate-light/30 transition-all duration-300 border border-zion-slate-light">
                Download Brochure
              </button>
            </div>
            
            <p className="text-zion-slate-light text-sm mt-6">
              Response guaranteed within 2 hours for enterprise inquiries
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}