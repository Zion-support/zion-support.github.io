import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Zap, Shield, Users, Clock, TrendingUp } from 'lucide-react';

export default function BenefitsSection() {
  const benefits = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast Delivery",
      description: "Rapid development and deployment cycles to get your solutions to market faster"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enterprise Security",
      description: "Bank-level security protocols and compliance standards for your peace of mind"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Team",
      description: "Certified professionals with years of experience in cutting-edge technologies"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "24/7 Support",
      description: "Round-the-clock technical support and monitoring for your critical systems"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Scalable Solutions",
      description: "Future-proof architecture that grows with your business needs"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Proven Results",
      description: "Track record of successful implementations and satisfied clients"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose Zion Tech Group?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We deliver exceptional value through innovation, expertise, and unwavering commitment to your success
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-slate-700 to-slate-600 rounded-2xl p-8 border border-slate-500 hover:border-cyan-500 transition-all duration-300 group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl mb-6 text-white group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                {benefit.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
