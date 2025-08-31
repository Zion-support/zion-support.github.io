import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight, User, Building, Globe } from 'lucide-react';
const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    position: "CTO",
    company: "TechFlow Solutions",
    content: "Zion Tech Group transformed our entire infrastructure with their AI-powered solutions. Our operational efficiency increased by 300% within the first quarter.",
    rating: 5,
    industry: "FinTech",
    project: "AI-Powered Trading Platform"
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    position: "VP of Engineering",
    company: "Global Retail Corp",
    content: "The cybersecurity implementation by Zion Tech Group was seamless and comprehensive. We've had zero security breaches since deployment.",
    rating: 5,
    industry: "Retail",
    project: "Enterprise Security Overhaul"
  },
  {
    id: 3,
    name: "Dr. Emily Watson",
    position: "Research Director",
    company: "Quantum Research Institute",
    content: "Working with Zion Tech Group on our quantum computing project was revolutionary. Their expertise in emerging technologies is unmatched.",
    rating: 5,
    industry: "Research",
    project: "Quantum Computing Platform"
  },
  {
    id: 4,
    name: "James Thompson",
    position: "CEO",
    company: "Green Energy Co",
    content: "Zion Tech Group's digital transformation services helped us modernize our entire operation. The results exceeded our expectations.",
    rating: 5,
    industry: "Energy",
    project: "Digital Transformation Initiative"
  },
  {
    id: 5,
    name: "Lisa Park",
    position: "Head of IT",
    company: "Healthcare Innovations",
    content: "The cloud infrastructure solution provided by Zion Tech Group has dramatically improved our system reliability and scalability.",
    rating: 5,
    industry: "Healthcare",
    project: "Cloud Migration & Optimization"
  }
];
export function TestimonialsSection() {
  return (
    <section className="py-20 bg-zion-blue-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our Users Say
          </h2>
          <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
            Join thousands of satisfied professionals who trust Zion for their technology needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-zion-blue border border-zion-blue-light rounded-xl p-6 hover:border-zion-purple/50 transition-all duration-300 hover:transform hover:scale-105 group"
            >
              {/* Quote icon */}
              <div className="mb-4">
                <Quote className="w-8 h-8 text-zion-cyan opacity-60" />
              </div>
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              {/* Content */}
              <p className="text-zion-slate-light mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-zion-purple to-zion-cyan rounded-full flex items-center justify-center text-white font-semibold text-lg mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="text-white font-semibold">{testimonial.name}</div>
                  <div className="text-zion-slate-light text-sm">{testimonial.role}</div>
                  <div className="text-zion-cyan text-sm">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Trust indicators */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-6 bg-zion-blue/50 backdrop-blur-sm border border-zion-cyan/20 rounded-full px-8 py-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-zion-cyan text-sm font-medium">Verified Reviews</span>
            </div>
            <div className="w-px h-4 bg-zion-cyan/30"></div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-zion-cyan text-sm font-medium">Real Users</span>
            </div>
            <div className="w-px h-4 bg-zion-cyan/30"></div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
              <span className="text-zion-cyan text-sm font-medium">Recent Feedback</span>
            </div>
          </div>
        </div>
        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-zion-cyan mb-2">98%</div>
            <div className="text-zion-slate-light">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-zion-cyan mb-2">500+</div>
            <div className="text-zion-slate-light">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-zion-cyan mb-2">25+</div>
            <div className="text-zion-slate-light">Industries Served</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-zion-cyan mb-2">24/7</div>
            <div className="text-zion-slate-light">Support Available</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
