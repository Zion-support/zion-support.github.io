import React from 'react';
import { motion } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/solid';

export function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "CTO, TechFlow Solutions",
      company: "TechFlow Solutions",
      content: "Zion Tech Group transformed our AI infrastructure completely. Their quantum computing solutions reduced our processing time by 80% and opened new possibilities we never thought possible.",
      rating: 5,
      avatar: "👩‍💼"
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      role: "VP of Engineering",
      company: "InnovateCorp",
      content: "The AI-powered automation platform from Zion has revolutionized our business processes. We've seen a 300% increase in efficiency and significant cost savings.",
      rating: 5,
      avatar: "👨‍💻"
    },
    {
      id: 3,
      name: "Dr. Emily Watson",
      role: "Research Director",
      company: "Quantum Research Institute",
      content: "Working with Zion's quantum neural networks has accelerated our research breakthroughs. Their expertise in cutting-edge technology is unmatched in the industry.",
      rating: 5,
      avatar: "👩‍🔬"
    },
    {
      id: 4,
      name: "James Thompson",
      role: "CEO",
      company: "Blockchain Ventures",
      content: "Zion's blockchain and Web3 solutions helped us build a secure, scalable platform that's now processing millions of transactions daily. Exceptional service and results.",
      rating: 5,
      avatar: "👨‍💼"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Discover how leading companies are transforming their businesses with Zion Tech Group's innovative solutions
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-slate-200 mb-6 text-sm leading-relaxed">
                "{testimonial.content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-2xl mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-slate-400">{testimonial.role}</div>
                  <div className="text-xs text-slate-500">{testimonial.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Join hundreds of companies already leveraging Zion Tech Group's cutting-edge solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                Get Started Today
              </button>
              <button className="px-8 py-3 border-2 border-blue-500 text-blue-400 font-semibold rounded-xl hover:bg-blue-500 hover:text-white transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}