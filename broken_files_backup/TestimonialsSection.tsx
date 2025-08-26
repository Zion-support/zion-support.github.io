import React from 'react';
import { motion } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/solid';
export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO",
      company: "TechFlow Solutions",
      content: "Zion Tech Group transformed our entire infrastructure. Their AI solutions increased our efficiency by 300% and reduced costs significantly.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      role: "VP of Engineering",
      company: "InnovateCorp",
      content: "The team's expertise in cloud migration was exceptional. They completed our transition in half the expected time with zero downtime.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      role: "Director of IT",
      company: "Global Manufacturing Inc.",
      content: "Their cybersecurity solutions gave us peace of mind. We're now SOC 2 compliant and have a robust security posture.",
      rating: 5,
      avatar: "ER"
    },
    {
      name: "David Thompson",
      role: "CEO",
      company: "StartupXYZ",
      content: "Zion Tech Group helped us build a scalable SaaS platform from scratch. Their microservices approach was game-changing.",
      rating: 5,
      avatar: "DT"
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
    <section className="py-20 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-quantum-mesh opacity-20"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-zion-cyan/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-zion-purple/10 rounded-full blur-3xl"></div>
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Don't just take our word for it. Here's what industry leaders have to say
            about their experience working with Zion Tech Group.
          </p>
        </motion.div>
        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-zion-cyan/30 transition-all duration-300 hover:scale-105">
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                  ))}
                </div>
                {/* Content */}
                <blockquote className="text-zion-slate-light mb-6 italic">
                  "{testimonial.content}"
                </blockquote>
                {/* Author */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-zion-slate-light">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-zion-cyan mb-2">98%</div>
              <div className="text-zion-slate-light">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-zion-purple mb-2">4.9/5</div>
              <div className="text-zion-slate-light">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-zion-cyan mb-2">85%</div>
              <div className="text-zion-slate-light">Repeat Business</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}