import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight, User, Building, Globe } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  companyLogo?: string;
  content: string;
  rating: number;
  industry: string;
  project: string;
  avatar?: string;
}

const testimonials: Testimonial[] = [
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

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-play functionality
  React.useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, currentIndex]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            What Our <span className="text-zion-cyan">Clients Say</span>
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Don't just take our word for it. Here's what industry leaders say about working with Zion Tech Group.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="bg-zion-slate-dark/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-zion-slate/20 relative overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/5 to-zion-purple/5"></div>
            
            {/* Quote Icon */}
            <div className="absolute top-6 right-6 text-zion-cyan/20">
              <Quote size={48} />
            </div>

            {/* Content */}
            <div className="relative z-10">
              {/* Rating */}
              <div className="flex items-center mb-6">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-lg md:text-xl text-white mb-8 leading-relaxed">
                "{currentTestimonial.content}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center">
                    <User className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">{currentTestimonial.name}</div>
                    <div className="text-zion-slate-light text-sm">{currentTestimonial.position}</div>
                    <div className="flex items-center text-zion-cyan text-sm">
                      <Building className="h-3 w-3 mr-1" />
                      {currentTestimonial.company}
                    </div>
                  </div>
                </div>
                
                {/* Project Info */}
                <div className="text-right text-sm text-zion-slate-light">
                  <div className="flex items-center justify-end mb-1">
                    <Globe className="h-3 w-3 mr-1" />
                    {currentTestimonial.industry}
                  </div>
                  <div className="text-zion-cyan font-medium">{currentTestimonial.project}</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-2 bg-zion-slate-dark/50 hover:bg-zion-cyan/20 text-zion-cyan rounded-full transition-colors border border-zion-slate/20"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            
            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-zion-cyan scale-125'
                      : 'bg-zion-slate/40 hover:bg-zion-slate/60'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextTestimonial}
              className="p-2 bg-zion-slate-dark/50 hover:bg-zion-cyan/20 text-zion-cyan rounded-full transition-colors border border-zion-slate/20"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Auto-play Toggle */}
          <div className="flex justify-center mt-4">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`text-sm px-3 py-1 rounded-full transition-colors ${
                isAutoPlaying
                  ? 'bg-zion-cyan/20 text-zion-cyan border border-zion-cyan/30'
                  : 'bg-zion-slate/20 text-zion-slate-light border border-zion-slate/30'
              }`}
            >
              {isAutoPlaying ? 'Pause' : 'Play'} Auto-play
            </button>
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
};
