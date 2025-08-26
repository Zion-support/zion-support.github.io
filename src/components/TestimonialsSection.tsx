import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { StarIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CTO",
      company: "TechCorp Solutions",
      content: "Zion Tech Group transformed our legacy systems into a modern, scalable platform. Their AI solutions increased our operational efficiency by 40% within the first quarter.",
      rating: 5,
      avatar: "👩‍💼"
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "VP of Engineering",
      company: "InnovateFlow Inc",
      content: "The cybersecurity implementation by Zion Tech Group was exceptional. They not only secured our infrastructure but also provided comprehensive training for our team.",
      rating: 5,
      avatar: "👨‍💻"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Digital Transformation Lead",
      company: "Global Retail Solutions",
      content: "Working with Zion Tech Group was a game-changer. Their cloud migration strategy saved us 60% in infrastructure costs while improving performance.",
      rating: 5,
      avatar: "👩‍🎯"
    },
    {
      id: 4,
      name: "David Thompson",
      position: "CEO",
      company: "StartupXYZ",
      content: "Zion Tech Group helped us build our MVP in record time. Their expertise in modern web technologies and agile development was invaluable.",
      rating: 5,
      avatar: "👨‍💼"
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <StarIcon
        key={i}
        className={`w-5 h-5 ${
          i < rating ? 'text-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what industry leaders have to say about working with Zion Tech Group.
          </p>
        </motion.div>

        <div className="relative">
          <AnimatePresence>
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/20">
                <div className="text-center">
                  <div className="text-6xl mb-6">{testimonials[currentIndex].avatar}</div>
                  <div className="flex justify-center mb-4">
                    {renderStars(testimonials[currentIndex].rating)}
                  </div>
                  <blockquote className="text-lg md:text-xl text-gray-200 mb-6 italic leading-relaxed">
                    "{testimonials[currentIndex].content}"
                  </blockquote>
                  <div className="text-center">
                    <div className="font-semibold text-white text-lg">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-gray-400">
                      {testimonials[currentIndex].position} at {testimonials[currentIndex].company}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 p-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeftIcon className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 p-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRightIcon className="w-6 h-6 text-white" />
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
                  ? 'bg-blue-400 scale-125'
                  : 'bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;