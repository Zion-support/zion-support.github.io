import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
  industry: string;
}

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "CTO",
      company: "TechFlow Solutions",
      content: "Zion Tech Group transformed our entire IT infrastructure. Their AI solutions helped us reduce operational costs by 40% while improving efficiency. The team's expertise in cybersecurity gave us peace of mind.",
      rating: 5,
      avatar: "/images/testimonials/sarah-chen.jpg",
      industry: "Technology"
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      role: "VP of Operations",
      company: "Global Manufacturing Co.",
      content: "Implementing Zion's cloud solutions was seamless. Our development cycles went from months to weeks, and the scalability has been incredible. Their support team is always available when we need them.",
      rating: 5,
      avatar: "/images/testimonials/marcus-rodriguez.jpg",
      industry: "Manufacturing"
    },
    {
      id: 3,
      name: "Dr. Emily Watson",
      role: "Research Director",
      company: "Quantum Research Institute",
      content: "Working with Zion on our quantum computing initiatives has been groundbreaking. Their expertise in cutting-edge technologies is unmatched. They've helped us achieve breakthroughs we never thought possible.",
      rating: 5,
      avatar: "/images/testimonials/emily-watson.jpg",
      industry: "Research"
    },
    {
      id: 4,
      name: "David Kim",
      role: "CEO",
      company: "FinTech Innovations",
      content: "Zion's cybersecurity solutions are enterprise-grade. They helped us achieve SOC 2 compliance in record time and their threat detection systems have prevented multiple potential breaches.",
      rating: 5,
      avatar: "/images/testimonials/david-kim.jpg",
      industry: "Financial Services"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-zion-slate to-zion-slate-dark" role="region" aria-labelledby="testimonials-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center mb-4 px-4 py-2 bg-zion-cyan/10 border border-zion-cyan/20 rounded-full">
            <Quote className="w-4 h-4 text-zion-cyan mr-2" />
            <span className="text-zion-cyan text-sm font-medium">Client Success Stories</span>
          </div>
          
          <h2 id="testimonials-heading" className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Clients Say</span>
          </h2>
          
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Real results from real businesses. See how Zion Tech Group is transforming industries worldwide.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden"
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-zion-cyan/10 to-zion-blue/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-zion-purple/10 to-zion-cyan/10 rounded-full blur-3xl" />
              
              {/* Rating */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              
              {/* Quote */}
              <blockquote className="text-xl md:text-2xl text-white mb-8 leading-relaxed italic">
                "{testimonials[currentIndex].content}"
              </blockquote>
              
              {/* Author */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-full flex items-center justify-center mb-4 text-white font-bold text-xl">
                  {testimonials[currentIndex].name.charAt(0)}
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">
                  {testimonials[currentIndex].name}
                </h3>
                <p className="text-zion-cyan font-medium mb-1">
                  {testimonials[currentIndex].role}
                </p>
                <p className="text-zion-slate-light text-sm mb-2">
                  {testimonials[currentIndex].company}
                </p>
                <span className="inline-block px-3 py-1 bg-zion-cyan/10 border border-zion-cyan/20 rounded-full text-zion-cyan text-xs font-medium">
                  {testimonials[currentIndex].industry}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-zion-slate-dark/80 backdrop-blur-xl border border-zion-cyan/20 rounded-full flex items-center justify-center text-zion-cyan hover:bg-zion-cyan hover:text-white transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-zion-cyan/50"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-zion-slate-dark/80 backdrop-blur-xl border border-zion-cyan/20 rounded-full flex items-center justify-center text-zion-cyan hover:bg-zion-cyan hover:text-white transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-zion-cyan/50"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-zion-cyan scale-125'
                  : 'bg-zion-slate-light hover:bg-zion-cyan/50'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-zion-slate-light text-sm mb-6">Join our growing list of satisfied clients</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-zion-cyan mb-2">98%</div>
              <div className="text-zion-slate-light text-sm">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-zion-blue mb-2">500+</div>
              <div className="text-zion-slate-light text-sm">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-zion-purple mb-2">24/7</div>
              <div className="text-zion-slate-light text-sm">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-zion-cyan mb-2">50+</div>
              <div className="text-zion-slate-light text-sm">Expert Engineers</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;