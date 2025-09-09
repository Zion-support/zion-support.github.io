import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
}

const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating 
            ? 'text-yellow-400 fill-current' 
            : 'text-zion-slate-light/30'
        }`}
        aria-hidden="true"
      />
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-zion-slate/50 to-zion-slate-dark/50 backdrop-blur-xl" role="region" aria-label="Customer testimonials">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            What Our <span className="text-gradient-primary">Clients Say</span>
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Don't just take our word for it. Hear from the businesses that have transformed their operations with Zion Tech Group.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="group relative"
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-6 w-8 h-8 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-full flex items-center justify-center z-10">
                <Quote className="w-4 h-4 text-white" aria-hidden="true" />
              </div>

              {/* Testimonial Card */}
              <div className="relative bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-8 pt-12 hover:border-zion-cyan/40 hover:bg-zion-slate-dark/70 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4" role="img" aria-label={`${testimonial.rating} out of 5 stars`}>
                  {renderStars(testimonial.rating)}
                  <span className="ml-2 text-sm text-zion-slate-light">({testimonial.rating}.0)</span>
                </div>

                {/* Content */}
                <blockquote className="text-zion-slate-light leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  {/* Avatar */}
                  <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-full flex items-center justify-center text-2xl">
                    {testimonial.avatar}
                  </div>
                  
                  {/* Name and Role */}
                  <div>
                    <cite className="not-italic text-white font-semibold block">
                      {testimonial.name}
                    </cite>
                    <span className="text-zion-slate-light text-sm">
                      {testimonial.role}
                    </span>
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-6 px-8 py-6 bg-zion-slate-dark/30 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-zion-slate-light text-sm">100% Satisfaction Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-zion-slate-light text-sm">24/7 Expert Support</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
              <span className="text-zion-slate-light text-sm">ISO 27001 Certified</span>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-zion-slate-light mb-6">
            Ready to join our satisfied clients?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary group">
              Start Your Project
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
            </button>
            <button className="btn-secondary">
              View Case Studies
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;