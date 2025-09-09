import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

export function TestimonialsSection({ 
  title = "What Our Clients Say",
  subtitle = "Don't just take our word for it. Here's what industry leaders have to say about our services.",
  testimonials,
  className = ""
}) {
  return (
    <section className={`py-16 bg-zion-slate-dark ${className}`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
            {subtitle}
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-zion-blue-dark/30 p-6 rounded-lg border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/10 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <Quote className="w-8 h-8 text-zion-cyan/60 group-hover:text-zion-cyan transition-colors" />
              </div>
              
              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
                <span className="text-zion-slate-light text-sm ml-2">
                  {testimonial.rating}/5
                </span>
              </div>
              
              {/* Content */}
              <p className="text-zion-slate-light mb-6 italic leading-relaxed">
                "{testimonial.content}"
              </p>
              
              {/* Author Info */}
              <div className="flex items-center gap-3">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-zion-cyan/20"
                />
                <div className="flex-1">
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-zion-cyan font-medium text-sm">{testimonial.role}</div>
                  <div className="text-zion-slate-light text-sm">{testimonial.company}</div>
                </div>
              </div>
              
              {/* Date */}
              <div className="text-zion-slate-light text-xs mt-3 text-right">
                {testimonial.date}
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* View All Button */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <button className="px-8 py-3 border border-zion-cyan text-zion-cyan rounded-lg font-semibold hover:bg-zion-cyan hover:text-white transition-colors">
            View All Testimonials
          </button>
        </motion.div>
      </div>
    </section>
  );
}
