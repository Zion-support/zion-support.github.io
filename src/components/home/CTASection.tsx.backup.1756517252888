import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Rocket, MessageCircle, Calendar, Star } from 'lucide-react';

const CTASection: React.FC = () => {
  const features = [
    {
      icon: Rocket,
      title: "Fast Implementation",
      description: "Get started in weeks, not months"
    },
    {
      icon: MessageCircle,
      title: "24/7 Support",
      description: "Expert assistance whenever you need it"
    },
    {
      icon: Calendar,
      title: "Flexible Plans",
      description: "Scale up or down as your business grows"
    },
    {
      icon: Star,
      title: "Proven Results",
      description: "Trusted by industry leaders worldwide"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-slate-dark/90 to-zion-slate-dark relative overflow-hidden" role="region" aria-labelledby="cta-heading">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-zion-cyan/5 via-zion-blue/5 to-zion-purple/5" />
        <div className="absolute top-20 right-20 w-64 h-64 bg-zion-cyan/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-zion-purple/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <div className="inline-flex items-center px-4 py-2 bg-zion-cyan/10 border border-zion-cyan/20 rounded-full mb-6">
              <Star className="w-4 h-4 text-zion-cyan mr-2" />
              <span className="text-zion-cyan text-sm font-medium">Ready to Transform?</span>
            </div>
          </motion.div>

          <motion.h2
            id="cta-heading"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Ready to <span className="bg-gradient-to-r from-zion-cyan via-zion-blue to-zion-purple bg-clip-text text-transparent">Transform</span> Your Business?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed mb-8"
          >
            Join hundreds of companies that have already revolutionized their operations with Zion Tech Group's cutting-edge solutions.
          </motion.p>
        </div>

        {/* Feature Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="text-center p-6 bg-zion-slate-dark/30 backdrop-blur-xl border border-zion-cyan/20 rounded-xl hover:border-zion-cyan/40 transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-xl flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-6 h-6 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-zion-slate-light text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <Link
            to="/contact"
            className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-bold text-lg rounded-2xl hover:from-zion-blue hover:to-zion-purple transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-zion-cyan/30 focus:outline-none focus:ring-4 focus:ring-zion-cyan/30 focus:ring-offset-2 focus:ring-offset-zion-slate-dark"
          >
            Start Your Journey
            <Rocket className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
          </Link>

          <Link
            to="/services"
            className="group inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-bold text-lg rounded-2xl hover:bg-zion-cyan hover:text-zion-slate-dark transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-zion-cyan/30 focus:ring-offset-2 focus:ring-offset-zion-slate-dark"
          >
            Explore Services
            <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
          </Link>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-zion-slate-light text-sm mb-4">Trusted by industry leaders worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-zion-cyan font-bold text-lg">Fortune 500</div>
            <div className="text-zion-blue font-bold text-lg">Startups</div>
            <div className="text-zion-purple font-bold text-lg">Enterprises</div>
            <div className="text-zion-cyan font-bold text-lg">Government</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;