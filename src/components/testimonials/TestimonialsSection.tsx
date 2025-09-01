import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  title: string;
  company: string;
  companyLogo?: string;
  content: string;
  rating: number;
  service: string;
  image?: string;
  videoUrl?: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    title: 'CTO',
    company: 'TechCorp Solutions',
    content: 'Zion Tech Group transformed our entire IT infrastructure. Their AI-powered automation platform increased our operational efficiency by 300% and reduced costs by 40%. The team is incredibly professional and the results exceeded our expectations.',
    rating: 5,
    service: 'AI Enterprise Automation Platform',
    image: '/images/testimonials/sarah-johnson.jpg'
  },
  {
    id: '2',
    name: 'Michael Chen',
    title: 'VP of Engineering',
    company: 'InnovateHealth',
    content: 'The AI Healthcare Platform from Zion Tech Group revolutionized our patient care delivery. We\'ve seen a 250% improvement in diagnostic accuracy and 60% reduction in administrative overhead. This is the future of healthcare technology.',
    rating: 5,
    service: 'AI Healthcare Platform',
    image: '/images/testimonials/michael-chen.jpg'
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    title: 'Head of Security',
    company: 'SecureBank International',
    content: 'Zion\'s AI Cybersecurity Platform has been a game-changer for our financial institution. We\'ve detected and prevented 99.9% of cyber threats, including sophisticated zero-day attacks. Their 24/7 monitoring gives us peace of mind.',
    rating: 5,
    service: 'AI Cybersecurity Platform',
    image: '/images/testimonials/emily-rodriguez.jpg'
  },
  {
    id: '4',
    name: 'David Kim',
    title: 'Operations Director',
    company: 'Global Manufacturing Co.',
    content: 'The AI Supply Chain Optimization platform helped us reduce inventory costs by 35% and improve delivery times by 50%. Zion Tech Group\'s expertise in AI and manufacturing made the implementation seamless.',
    rating: 5,
    service: 'AI Supply Chain Optimization',
    image: '/images/testimonials/david-kim.jpg'
  },
  {
    id: '5',
    name: 'Lisa Thompson',
    title: 'Chief Innovation Officer',
    company: 'Quantum Dynamics',
    content: 'Working with Zion Tech Group on our quantum computing integration was exceptional. Their AI-Quantum Hybrid Platform is cutting-edge technology that has positioned us as industry leaders. The results are phenomenal.',
    rating: 5,
    service: 'AI-Quantum Hybrid Platform',
    image: '/images/testimonials/lisa-thompson.jpg'
  }
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToPrevious = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-slate-900 to-zion-slate-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            What Our Clients Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-zion-slate-light max-w-3xl mx-auto"
          >
            Discover how Zion Tech Group is transforming businesses across industries with our cutting-edge AI solutions
          </motion.p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-6xl mx-auto">
          {/* Main Testimonial */}
          <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10">
            <AnimatePresence mode="wait" initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                initial={{ opacity: 0, x: direction * 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="text-center"
              >
                {/* Quote Icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-full flex items-center justify-center">
                    <Quote className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex justify-center mb-6">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-xl md:text-2xl text-white mb-8 leading-relaxed max-w-4xl mx-auto">
                  "{currentTestimonial.content}"
                </blockquote>

                {/* Author Info */}
                <div className="flex flex-col items-center space-y-4">
                  <div className="flex items-center space-x-4">
                    {currentTestimonial.image && (
                      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-zion-cyan">
                        <img
                          src={currentTestimonial.image}
                          alt={currentTestimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div className="text-left">
                      <h4 className="text-xl font-semibold text-white">
                        {currentTestimonial.name}
                      </h4>
                      <p className="text-zion-slate-light">
                        {currentTestimonial.title} at {currentTestimonial.company}
                      </p>
                    </div>
                  </div>
                  
                  {/* Service Used */}
                  <div className="inline-flex items-center px-4 py-2 bg-zion-cyan/20 text-zion-cyan rounded-full text-sm font-medium">
                    <span>Used: {currentTestimonial.service}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            <button
              onClick={goToPrevious}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-200"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Auto-play Toggle */}
            <button
              onClick={toggleAutoPlay}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-200"
              aria-label={isAutoPlaying ? 'Pause auto-play' : 'Start auto-play'}
            >
              {isAutoPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
            </button>

            <button
              onClick={goToNext}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-200"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? 'bg-zion-cyan w-8'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
        >
          {[
            { number: '500+', label: 'Happy Clients' },
            { number: '99.9%', label: 'Client Satisfaction' },
            { number: '50+', label: 'AI Services' },
            { number: '24/7', label: 'Support Available' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-zion-cyan mb-2">
                {stat.number}
              </div>
              <div className="text-zion-slate-light text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}