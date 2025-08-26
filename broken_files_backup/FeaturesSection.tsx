import React from 'react';
import { motion } from 'framer-motion';
import {
  CheckCircleIcon,
  ClockIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  CogIcon
} from '@heroicons/react/24/outline';
export function FeaturesSection() {
  const features = [
    {
      icon: CheckCircleIcon,
      title: "Proven Track Record",
      description: "500+ successful projects delivered across various industries with measurable results",
      color: "text-zion-cyan"
    },
    {
      icon: ClockIcon,
      title: "Rapid Delivery",
      description: "Fast turnaround times with agile methodologies and efficient development processes",
      color: "text-zion-purple"
    },
    {
      icon: UserGroupIcon,
      title: "Expert Team",
      description: "Certified professionals with deep expertise in cutting-edge technologies",
      color: "text-zion-cyan"
    },
    {
      icon: ShieldCheckIcon,
      title: "Enterprise Security",
      description: "SOC 2 compliant with industry-leading security practices and protocols",
      color: "text-zion-purple"
    },
    {
      icon: RocketLaunchIcon,
      title: "Scalable Solutions",
      description: "Architected for growth with cloud-native and microservices approaches",
      color: "text-zion-cyan"
    },
    {
      icon: CogIcon,
      title: "24/7 Support",
      description: "Round-the-clock technical support and maintenance services",
      color: "text-zion-purple"
    }
  ];
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-zion-slate-light to-white opacity-50"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-zion-cyan/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-zion-purple/5 rounded-full blur-3xl"></div>
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-zion-blue-dark mb-6">
            Why Choose Zion Tech Group?
          </h2>
          <p className="text-xl text-zion-slate max-w-3xl mx-auto">
            We combine cutting-edge technology with proven methodologies to deliver
            exceptional results that drive your business forward.
          </p>
        </motion.div>
        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 border border-zion-slate-light/20 hover:border-zion-cyan/30 transition-all duration-300 hover:shadow-xl hover:shadow-zion-cyan/10 hover:-translate-y-1">
                {/* Icon */}
                <div className={`w-16 h-16 bg-zion-slate-light/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-zion-cyan/10 transition-colors duration-300`}>
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                {/* Content */}
                <h3 className="text-xl font-bold text-zion-blue-dark mb-4 group-hover:text-zion-cyan transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-zion-slate leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 rounded-2xl p-8 border border-zion-cyan/20">
            <h3 className="text-2xl font-bold text-zion-blue-dark mb-4">
              Ready to Experience the Difference?
            </h3>
            <p className="text-zion-slate mb-6 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who have transformed their businesses
              with our innovative technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-gradient-to-r from-zion-purple to-zion-cyan hover:from-zion-purple-light hover:to-zion-cyan-light text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg">
                Get Started Today
              </button>
              <button className="px-6 py-3 border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105">
                Learn More
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}