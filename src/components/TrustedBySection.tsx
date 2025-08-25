<<<<<<< HEAD

import { GradientHeading } from "@/components/GradientHeading";
import { motion } from "framer-motion";
import { Star, Shield, Award, Users, Globe, Zap } from "lucide-react";

const companies = [
  { name: "Microsoft", logo: "MS", tier: "Platinum" },
  { name: "Google", logo: "G", tier: "Platinum" },
  { name: "Amazon", logo: "A", tier: "Gold" },
  { name: "Meta", logo: "M", tier: "Gold" },
  { name: "Apple", logo: "🍎", tier: "Silver" },
  { name: "Netflix", logo: "N", tier: "Silver" },
  { name: "Tesla", logo: "T", tier: "Silver" },
  { name: "OpenAI", logo: "AI", tier: "Partner" }
];

const trustMetrics = [
  { number: "500+", label: "Enterprise Clients", icon: Users, color: "from-zion-purple to-zion-purple-dark" },
  { number: "99.9%", label: "Uptime SLA", icon: Shield, color: "from-zion-cyan to-zion-blue" },
  { number: "ISO 27001", label: "Security Certified", icon: Award, color: "from-zion-blue to-zion-blue-dark" },
  { number: "150+", label: "Countries Served", icon: Globe, color: "from-zion-cyan-light to-zion-cyan" }
];

const testimonials = [
  {
    quote: "Zion has transformed how we source AI talent and services. The quality and speed are unmatched.",
    author: "Sarah Chen",
    role: "CTO, TechCorp",
    rating: 5
  },
  {
    quote: "The marketplace connects us with world-class developers and cutting-edge solutions in real-time.",
    author: "Marcus Rodriguez",
    role: "VP Engineering, InnovateLab",
    rating: 5
  },
  {
    quote: "Zion's AI matchmaking has reduced our hiring time by 70% while improving quality significantly.",
    author: "Dr. Emily Watson",
    role: "Head of AI, FutureTech",
    rating: 5
  }
];

<<<<<<< HEAD
export function TrustedBySection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-purple-dark relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 0)`,
          backgroundSize: '100px 100px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <GradientHeading className="text-4xl md:text-5xl lg:text-6xl mb-6">
            Trusted by Industry Leaders
          </GradientHeading>
          <p className="text-zion-slate-light text-xl md:text-2xl mt-6 max-w-4xl mx-auto leading-relaxed">
            Join thousands of companies worldwide who trust Zion for their AI, technology, and talent needs. 
            From startups to Fortune 500 companies, we're the platform of choice for innovation.
          </p>
        </motion.div>

        {/* Trust Metrics */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {trustMetrics.map((metric, index) => (
            <motion.div key={index} variants={itemVariants}>
              <div className="text-center">
                <div className={`w-20 h-20 bg-gradient-to-br ${metric.color} rounded-2xl flex items-center justify-center mx-auto mb-4 border border-zion-purple/30 shadow-lg`}>
                  <metric.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{metric.number}</div>
                <div className="text-zion-slate-light text-sm md:text-base">{metric.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Company Logos */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-center text-2xl font-bold text-white mb-12">Our Enterprise Partners</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
            {companies.map((company, index) => (
              <motion.div 
                key={index}
                className="text-center group"
                variants={logoVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-zion-blue-dark/50 to-zion-purple-dark/50 rounded-2xl flex items-center justify-center mx-auto mb-3 border border-zion-purple/30 group-hover:border-zion-cyan/50 transition-colors backdrop-blur-sm">
                  <div className="text-2xl font-bold text-white group-hover:text-zion-cyan transition-colors">
                    {company.logo}
                  </div>
                </div>
                <div className="text-white font-semibold text-sm mb-1">{company.name}</div>
                <div className="text-zion-slate-light text-xs">{company.tier}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-center text-2xl font-bold text-white mb-12">What Our Clients Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                className="bg-gradient-to-br from-zion-blue-dark/30 to-zion-purple-dark/30 backdrop-blur-sm border border-zion-purple/30 rounded-2xl p-8 hover:border-zion-cyan/50 transition-all duration-300 hover:translate-y-[-8px] hover:shadow-2xl hover:shadow-zion-purple/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 * index }}
                viewport={{ once: true }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-zion-cyan fill-current" />
                  ))}
                </div>
                <blockquote className="text-zion-slate-light text-lg leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <div className="text-white font-semibold">{testimonial.author}</div>
                  <div className="text-zion-slate-light text-sm">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
=======
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/Card';

const trustedCompanies = [
  {
    name: 'TechCorp',
    logo: '🚀',
    industry: 'Technology',
    testimonial: 'Zion Tech Group transformed our AI infrastructure completely.'
  },
  {
    name: 'SecureBank',
    logo: '🏦',
    industry: 'Finance',
    testimonial: 'Their cybersecurity solutions are unmatched in the industry.'
  },
  {
    name: 'CloudFlow',
    logo: '☁️',
    industry: 'Cloud Services',
    testimonial: 'Seamless cloud migration with zero downtime.'
  },
  {
    name: 'DataVault',
    logo: '💾',
    industry: 'Data Analytics',
    testimonial: 'Revolutionary insights through their AI-powered analytics.'
  },
  {
    name: 'InnovateLab',
    logo: '🔬',
    industry: 'Research',
    testimonial: 'Cutting-edge solutions that push the boundaries of possibility.'
  },
  {
    name: 'GlobalTech',
    logo: '🌍',
    industry: 'International',
    testimonial: 'World-class service with local expertise worldwide.'
  }
];

export function TrustedBySection() {
  return (
    <section className="py-20 bg-gradient-to-br from-zion-slate-800 to-zion-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-zion-slate-300 max-w-3xl mx-auto">
            Join hundreds of companies worldwide who trust Zion Tech Group to deliver innovative solutions that drive growth and success.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trustedCompanies.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full bg-zion-slate-700/50 border-zion-slate-600 hover:border-zion-cyan/50 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-2">{company.logo}</div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      {company.name}
                    </h3>
                    <p className="text-zion-cyan text-sm font-medium">
                      {company.industry}
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-zion-slate-300 italic">
                      "{company.testimonial}"
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold text-zion-cyan mb-2">99.9%</div>
              <div className="text-zion-slate-300">Uptime Guarantee</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-zion-purple mb-2">24/7</div>
              <div className="text-zion-slate-300">Expert Support</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-zion-cyan mb-2">ISO 27001</div>
              <div className="text-zion-slate-300">Security Certified</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-zion-purple mb-2">100%</div>
              <div className="text-zion-slate-300">Satisfaction Rate</div>
            </div>
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
          </div>
        </motion.div>

        {/* CTA Section */}
<<<<<<< HEAD
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 backdrop-blur-sm border border-zion-purple/30 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Join the Elite?</h3>
            <p className="text-zion-slate-light text-xl mb-8">
              Experience the same level of service and quality that industry leaders trust
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-10 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-2xl shadow-zion-purple/25">
                Start Free Trial
              </button>
              <button className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark px-10 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105">
                Schedule Enterprise Demo
              </button>
            </div>
            <p className="text-zion-slate-light text-sm mt-4">
              No credit card required • 14-day free trial • Enterprise support included
            </p>
          </div>
        </motion.div>
=======
export const TrustedBySection: React.FC = () => {
  return (
    <section className="py-16 bg-zion-blue-dark">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold text-white mb-8">Trusted By Leading Companies</h2>
        <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
          <div className="text-zion-slate-light text-lg font-semibold">Microsoft</div>
          <div className="text-zion-slate-light text-lg font-semibold">Google</div>
          <div className="text-zion-slate-light text-lg font-semibold">Amazon</div>
          <div className="text-zion-slate-light text-lg font-semibold">Apple</div>
          <div className="text-zion-slate-light text-lg font-semibold">Meta</div>
          <div className="text-zion-slate-light text-lg font-semibold">TechCorp</div>
          <div className="text-zion-slate-light text-lg font-semibold">InnovateLab</div>
          <div className="text-zion-slate-light text-lg font-semibold">FutureTech</div>
          <div className="text-zion-slate-light text-lg font-semibold">DigitalFlow</div>
        </div>
>>>>>>> origin/cursor/build-and-fix-errors-c9ef
      </div>
    </section>
  );
};
=======
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 rounded-2xl p-8 border border-zion-cyan/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Join the Future?
            </h3>
            <p className="text-zion-slate-300 mb-6 max-w-2xl mx-auto">
              Experience the power of cutting-edge technology solutions that have already transformed hundreds of businesses worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold hover:from-zion-purple hover:to-zion-cyan transition-all duration-300 hover:shadow-xl hover:shadow-zion-cyan/25">
                Get Started Today
              </button>
              <button className="px-8 py-3 border border-zion-cyan text-zion-cyan rounded-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
