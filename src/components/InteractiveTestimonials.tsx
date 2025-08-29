import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
  category: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "CTO",
    company: "TechFlow Solutions",
    content: "Zion Tech Group transformed our business operations with their AI-powered solutions. The autonomous business platform has increased our efficiency by 300% and reduced operational costs significantly.",
    rating: 5,
    avatar: "/images/avatars/sarah-chen.jpg",
    category: "AI Solutions"
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    role: "VP of Engineering",
    company: "Quantum Dynamics",
    content: "The quantum neural network platform from Zion is revolutionary. We're solving computational problems that were previously impossible. Their expertise in cutting-edge technology is unmatched.",
    rating: 5,
    avatar: "/images/avatars/marcus-rodriguez.jpg",
    category: "Quantum Computing"
  },
  {
    id: 3,
    name: "Dr. Emily Watson",
    role: "Research Director",
    company: "BioTech Innovations",
    content: "Zion's AI healthcare platform has accelerated our drug discovery process by 5x. The machine learning algorithms are incredibly accurate and have helped us identify promising compounds faster than ever.",
    rating: 5,
    avatar: "/images/avatars/emily-watson.jpg",
    category: "Healthcare AI"
  },
  {
    id: 4,
    name: "James Thompson",
    role: "CEO",
    company: "SecureNet Systems",
    content: "Their AI cybersecurity suite has protected our infrastructure from sophisticated threats. The real-time threat detection and automated response capabilities give us peace of mind.",
    rating: 5,
    avatar: "/images/avatars/james-thompson.jpg",
    category: "Cybersecurity"
  },
  {
    id: 5,
    name: "Lisa Park",
    role: "Operations Manager",
    company: "Global Logistics Co",
    content: "The AI supply chain optimization platform has revolutionized our operations. We've reduced delivery times by 40% and improved customer satisfaction dramatically.",
    rating: 5,
    avatar: "/images/avatars/lisa-park.jpg",
    category: "Supply Chain"
  }
];

export const InteractiveTestimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = Array.from(new Set(testimonials.map(t => t.category)));

  const filteredTestimonials = selectedCategory 
    ? testimonials.filter(t => t.category === selectedCategory)
    : testimonials;

  const currentTestimonial = filteredTestimonials[currentIndex % filteredTestimonials.length];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % filteredTestimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, filteredTestimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex(prev => (prev + 1) % filteredTestimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(prev => (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-400'
        }`}
      />
    ));
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-slate-800/50 to-slate-900/50" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how Zion Tech Group is transforming businesses across industries with cutting-edge AI solutions
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              selectedCategory === null
                ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25'
                : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
            }`}
          >
            All Categories
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial.id}
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <div className="glass rounded-3xl p-8 md:p-12 border border-white/20 backdrop-blur-sm">
                {/* Quote Icon */}
                <div className="flex justify-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                    <Quote className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Testimonial Content */}
                <blockquote className="text-center mb-8">
                  <p className="text-xl md:text-2xl text-white leading-relaxed italic">
                    "{currentTestimonial.content}"
                  </p>
                </blockquote>

                {/* Rating */}
                <div className="flex justify-center mb-8">
                  <div className="flex gap-1">
                    {renderStars(currentTestimonial.rating)}
                  </div>
                </div>

                {/* Author Info */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 p-0.5">
                    <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">
                        {currentTestimonial.name.charAt(0)}
                      </span>
                    </div>
                  </div>
                  <div className="text-center md:text-left">
                    <h4 className="text-lg font-semibold text-white">
                      {currentTestimonial.name}
                    </h4>
                    <p className="text-cyan-400 font-medium">
                      {currentTestimonial.role}
                    </p>
                    <p className="text-gray-400">
                      {currentTestimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all duration-300 flex items-center justify-center group"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
            </button>

            <button
              onClick={toggleAutoPlay}
              className="w-12 h-12 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all duration-300 flex items-center justify-center group"
              aria-label={isAutoPlaying ? "Pause auto-play" : "Start auto-play"}
            >
              {isAutoPlaying ? (
                <Pause className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
              ) : (
                <Play className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
              )}
            </button>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all duration-300 flex items-center justify-center group"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-8">
            {filteredTestimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex % filteredTestimonials.length
                    ? 'bg-cyan-400 scale-125'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">98%</div>
            <div className="text-gray-300">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">500+</div>
            <div className="text-gray-300">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
            <div className="text-gray-300">Support Available</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">10+</div>
            <div className="text-gray-300">Years Experience</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InteractiveTestimonials;
