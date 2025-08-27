import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Calendar, MapPin, CheckCircle, Clock, Users } from 'lucide-react';

export function ServiceProcessSteps() {
  const steps = [
    {
      icon: Phone,
      title: 'Initial Contact',
      description: 'Call or email to describe your IT issue or service need',
      duration: '5-10 minutes',
      color: 'text-blue-400'
    },
    {
      icon: Calendar,
      title: 'Assessment & Scheduling',
      description: 'Our team assesses the issue and schedules an on-site visit',
      duration: '1-2 hours',
      color: 'text-green-400'
    },
    {
      icon: MapPin,
      title: 'On-Site Arrival',
      description: 'Technicians arrive at your location within the promised timeframe',
      duration: '2-4 hours',
      color: 'text-purple-400'
    },
    {
      icon: CheckCircle,
      title: 'Service Delivery',
      description: 'Professional IT services delivered with detailed reporting',
      duration: 'Varies by service',
      color: 'text-orange-400'
    },
    {
      icon: Clock,
      title: 'Follow-up',
      description: 'Post-service support and ongoing maintenance planning',
      duration: '24-48 hours',
      color: 'text-cyan-400'
    },
    {
      icon: Users,
      title: 'Long-term Partnership',
      description: 'Ongoing relationship for future IT needs and support',
      duration: 'Ongoing',
      color: 'text-red-400'
    }
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
            Our Service Process
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-zion-slate-light max-w-3xl mx-auto"
          >
            From initial contact to long-term partnership, we ensure a seamless and professional 
            experience at every step of your IT service journey.
          </motion.p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="relative"
              >
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-zion-cyan text-futuristic rounded-full flex items-center justify-center font-bold text-sm z-10">
                  {index + 1}
                </div>
                
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-1/2 w-px h-32 bg-zion-slate-light/30 transform -translate-x-1/2 z-0" />
                )}
                
                <div className="bg-zion-slate-dark border border-zion-slate-light rounded-xl p-6 hover:border-zion-cyan transition-all duration-300 relative">
                  <div className="w-16 h-16 bg-zion-slate-light/10 rounded-xl flex items-center justify-center mb-4">
                    <step.icon className={`w-8 h-8 ${step.color}`} />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-zion-slate-light mb-4">{step.description}</p>
                  
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-zion-cyan" />
                    <span className="text-zion-cyan font-medium">{step.duration}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Process Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-20"
        >
          <div className="bg-zion-slate-dark border border-zion-slate-light rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white text-center mb-8">Why Choose Our Process?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-zion-cyan" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Transparent Communication</h4>
                <p className="text-zion-slate-light text-sm">
                  Clear updates at every step with detailed progress tracking
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-zion-cyan" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Fast Response Times</h4>
                <p className="text-zion-slate-light text-sm">
                  Quick assessment and rapid deployment of solutions
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-zion-cyan" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Expert Team</h4>
                <p className="text-zion-slate-light text-sm">
                  Certified professionals with proven track records
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
          <p className="text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Contact us today to begin your IT service journey. Our team is ready to help 
            you with any technical challenges or service needs.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-futuristic font-semibold rounded-xl hover:from-zion-cyan/90 hover:to-zion-blue/90 transition-all duration-300 transform hover:scale-105">
            Start Your Service Request
          </button>
        </motion.div>
      </div>
    </div>
  );
}