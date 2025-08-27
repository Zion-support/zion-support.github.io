import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

export function InteractiveTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CTO",
      company: "TechFlow Solutions",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      content: "Zion Tech Group transformed our entire IT infrastructure. Their AI-powered solutions reduced our operational costs by 40% while improving system reliability. The team's expertise in cloud migration and security implementation exceeded our expectations.",
      industry: "Technology",
      project: "Digital Transformation",
      results: ["40% cost reduction", "99.9% uptime", "Enhanced security"]
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "VP of Operations",
      company: "GreenEnergy Corp",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      content: "Working with Zion Tech Group was a game-changer for our sustainability initiatives. They implemented cutting-edge green IT solutions that aligned perfectly with our environmental goals while maintaining top-tier performance.",
      industry: "Energy",
      project: "Green IT Implementation",
      results: ["30% energy savings", "Carbon footprint reduction", "LEED certification"]
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Head of Digital",
      company: "FinTech Innovations",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      content: "Zion Tech Group's cybersecurity expertise gave us the confidence to expand our digital services. Their zero-trust architecture and compliance framework implementation were flawless. We've had zero security incidents since deployment.",
      industry: "Financial Services",
      project: "Cybersecurity Overhaul",
      results: ["Zero security incidents", "SOC 2 compliance", "Enhanced customer trust"]
    },
    {
      id: 4,
      name: "David Thompson",
      position: "CEO",
      company: "Healthcare Plus",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      content: "The AI-powered patient management system Zion Tech Group developed for us has revolutionized our operations. Patient satisfaction scores increased by 35%, and our administrative efficiency improved dramatically.",
      industry: "Healthcare",
      project: "AI Patient Management",
      results: ["35% satisfaction increase", "50% efficiency gain", "HIPAA compliance"]
    },
    {
      id: 5,
      name: "Lisa Wang",
      position: "Director of Innovation",
      company: "Retail Dynamics",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      content: "Zion Tech Group's retail analytics platform provided insights we never had before. Their machine learning algorithms helped us increase sales by 25% and improve customer retention significantly.",
      industry: "Retail",
      project: "AI Analytics Platform",
      results: ["25% sales increase", "Improved retention", "Real-time insights"]
    }
  ];

  useEffect(() => {
    if (!isPlaying || isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying, isHovered, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real results from real clients across diverse industries. 
            Discover how Zion Tech Group is transforming businesses through innovative technology solutions.
          </p>
        </motion.div>

        {/* Main Testimonial Display */}
        <div 
          className="relative max-w-5xl mx-auto mb-12"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 md:p-12"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 left-8 text-cyan-400 opacity-20">
                <Quote className="w-16 h-16" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <img
                    src={currentTestimonial.avatar}
                    alt={currentTestimonial.name}
                    className="w-16 h-16 rounded-full border-2 border-cyan-500/30"
                  />
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-white">{currentTestimonial.name}</h3>
                    <p className="text-cyan-400 font-medium">{currentTestimonial.position}</p>
                    <p className="text-gray-400 text-sm">{currentTestimonial.company}</p>
                  </div>
                  <div className="ml-auto flex items-center space-x-1">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                <blockquote className="text-lg text-gray-300 leading-relaxed mb-6 italic">
                  "{currentTestimonial.content}"
                </blockquote>

                {/* Project Details */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-slate-700/50 rounded-lg p-4">
                    <div className="text-cyan-400 text-sm font-medium mb-1">Industry</div>
                    <div className="text-white">{currentTestimonial.industry}</div>
                  </div>
                  <div className="bg-slate-700/50 rounded-lg p-4">
                    <div className="text-cyan-400 text-sm font-medium mb-1">Project</div>
                    <div className="text-white">{currentTestimonial.project}</div>
                  </div>
                  <div className="bg-slate-700/50 rounded-lg p-4">
                    <div className="text-cyan-400 text-sm font-medium mb-1">Results</div>
                    <div className="text-white text-sm">
                      {currentTestimonial.results.slice(0, 2).join(", ")}
                      {currentTestimonial.results.length > 2 && "..."}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-3 bg-slate-800 border border-slate-600 rounded-full text-gray-400 hover:text-white hover:border-slate-500 transition-colors duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <button
              onClick={togglePlayPause}
              className="p-3 bg-cyan-600 border border-cyan-500 rounded-full text-white hover:bg-cyan-700 transition-colors duration-300"
            >
              {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
            </button>
            
            <button
              onClick={nextTestimonial}
              className="p-3 bg-slate-800 border border-slate-600 rounded-full text-gray-400 hover:text-white hover:border-slate-500 transition-colors duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center space-x-2 mb-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-cyan-500 scale-125'
                  : 'bg-slate-600 hover:bg-slate-500'
              }`}
            />
          ))}
        </div>

        {/* Industry Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-slate-800/30 border border-slate-700 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6">
              Trusted Across Industries
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">500+</div>
                <div className="text-gray-300 text-sm">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
                <div className="text-gray-300 text-sm">Industries Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">98%</div>
                <div className="text-gray-300 text-sm">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
                <div className="text-gray-300 text-sm">Support Available</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}