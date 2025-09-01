import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, Play } from 'lucide-react';

interface Testimonial {

  id: number;
  name: string;
  position: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
  videoUrl?: string;
  category: string;
  results: string[];
}

const testimonials: Testimonial[] = [
  {

    id: 1,
    name: "Sarah Chen",
    position: "CTO",
    company: "TechFlow Solutions",
    content: "Zion Tech Group's AI platform transformed our business operations. We've seen a 450% increase in efficiency and our ROI exceeded all expectations. The team's expertise in emerging technologies is unmatched.",
    rating: 5,
    avatar: "/images/avatars/sarah-chen.jpg",
    category: "AI Solutions",
    results: ["450% Efficiency Increase", "800% ROI", "24/7 AI Support"]
  },
  {

    id: 2,
    name: "Marcus Rodriguez",
    position: "VP of Engineering",
    company: "InnovateCorp",
    content: "The quantum computing integration they implemented for us was revolutionary. We're solving problems in minutes that used to take weeks. This is the future of computing, and Zion Tech Group is leading the way.",
    rating: 5,
    avatar: "/images/avatars/marcus-rodriguez.jpg",
    category: "Quantum Computing",
    results: ["90% Faster Processing", "Revolutionary Technology", "Future-Proof Solution"]
  },
  {

    id: 3,
    name: "Dr. Emily Watson",
    position: "Chief Innovation Officer",
    company: "HealthTech Innovations",
    content: "Their AI healthcare analytics platform has revolutionized our diagnostic capabilities. We're detecting conditions earlier and more accurately than ever before. The impact on patient outcomes is profound.",
    rating: 5,
    avatar: "/images/avatars/emily-watson.jpg",
    category: "Healthcare AI",
    results: ["95% Accuracy Rate", "Early Detection", "Better Patient Outcomes"]
  },
  {

    id: 4,
    name: "David Kim",
    position: "CEO",
    company: "GreenTech Industries",
    content: "Zion Tech Group's sustainability platform helped us reduce our carbon footprint by 75% while increasing operational efficiency. They truly understand how to balance environmental responsibility with business growth.",
    rating: 5,
    avatar: "/images/avatars/david-kim.jpg",
    category: "Sustainability Tech",
    results: ["75% Carbon Reduction", "40% Cost Savings", "ESG Compliance"]
  },
  {

    id: 5,
    name: "Lisa Thompson",
    position: "Head of Digital Transformation",
    company: "Global Manufacturing Co.",
    content: "The digital twin platform they built for us has transformed how we monitor and maintain our equipment. We've reduced downtime by 60% and increased productivity by 35%. The ROI was immediate and substantial.",
    rating: 5,
    avatar: "/images/avatars/lisa-thompson.jpg",
    category: "Digital Twin",
    results: ["60% Downtime Reduction", "35% Productivity Increase", "Predictive Maintenance"]
  },
  {

    id: 6,
    name: "James Wilson",
    position: "Chief Security Officer",
    company: "FinTech Secure",
    content: "Their AI cybersecurity platform is a game-changer. We've detected and prevented threats that traditional systems would have missed. The automated response capabilities have made our security team 10x more effective.",
    rating: 5,
    avatar: "/images/avatars/james-wilson.jpg",
    category: "Cybersecurity",
    results: ["99.9% Threat Detection", "10x Security Efficiency", "Zero Breaches"]
  }
];

export const EnhancedTestimonials: React.FC = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'AI Solutions', 'Quantum Computing', 'Healthcare AI', 'Sustainability Tech', 'Digital Twin', 'Cybersecurity'];

  const filteredTestimonials = selectedCategory === 'All' 
    ? testimonials 
    : testimonials.filter(testimonial => testimonial.category === selectedCategory);

  useEffect(() => {

    if (!isAutoPlaying) return;

    const interval = setInterval(() => {

      setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, filteredTestimonials.length]);

  const nextTestimonial = () => {

    setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {

    setCurrentIndex((prev) => (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length);
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index: number) => {

    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const currentTestimonial = filteredTestimonials[currentIndex];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900/10 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Discover how our revolutionary technology solutions are transforming businesses 
            across industries and driving unprecedented growth.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${

                  selectedCategory === category
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
                    : 'bg-slate-800/60 text-slate-300 hover:bg-slate-700/60 border border-slate-700/50'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-5xl mx-auto">
          {/* Navigation Arrows */}
          <motion.button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-slate-800/80 backdrop-blur border border-slate-700/50 rounded-full flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-700/80 transition-all duration-300 hover:scale-110"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>

          <motion.button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-slate-800/80 backdrop-blur border border-slate-700/50 rounded-full flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-700/80 transition-all duration-300 hover:scale-110"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>

          {/* Testimonial Content */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial.id}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
                className="bg-slate-800/60 backdrop-blur border border-slate-700/50 rounded-3xl p-8 md:p-12"
              >
                {/* Quote Icon */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="absolute top-6 right-8 w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 rounded-2xl flex items-center justify-center"
                >
                  <Quote className="w-8 h-8 text-cyan-400" />
                </motion.div>

                {/* Rating */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center mb-6"
                >
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                  <span className="ml-3 text-slate-400 text-sm">
                    {currentTestimonial.rating}.0 out of 5.0
                  </span>
                </motion.div>

                {/* Testimonial Text */}
                <motion.blockquote
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-xl md:text-2xl text-slate-200 leading-relaxed mb-8 italic"
                >
                  "{currentTestimonial.content}"
                </motion.blockquote>

                {/* Results */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
                >
                  {currentTestimonial.results.map((result, index) => (
                    <div
                      key={result}
                      className="bg-slate-700/40 border border-slate-600/50 rounded-xl p-4 text-center"
                    >
                      <div className="text-sm text-cyan-400 font-medium">{result}</div>
                    </div>
                  ))}
                </motion.div>

                {/* Author Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {currentTestimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-white">
                        {currentTestimonial.name}
                      </div>
                      <div className="text-slate-400">
                        {currentTestimonial.position} at {currentTestimonial.company}
                      </div>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium">
                    {currentTestimonial.category}
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex justify-center space-x-3 mt-8"
          >
            {filteredTestimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${

                  index === currentIndex 
                    ? 'bg-cyan-400 w-8' 
                    : 'bg-slate-600 hover:bg-slate-500'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-slate-800/40 backdrop-blur border border-slate-700/50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Transform your business with our cutting-edge technology solutions and become the next success story.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">
                <Play className="w-5 h-5 mr-2" />
                Watch Client Stories
              </button>
              <button className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500 hover:text-white transition-all duration-300">
                Get Started Today
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};