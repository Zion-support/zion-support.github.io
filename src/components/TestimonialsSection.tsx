import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Star, 
  Quote, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle,
  Award,
  TrendingUp,
  Users
} from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  avatar: string;
  rating: number;
  content: string;
  industry: string;
  results: string[];
  verified: boolean;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Dr. Sarah Chen",
    position: "CTO",
    company: "TechFlow Solutions",
    avatar: "/images/testimonials/sarah-chen.jpg",
    rating: 5,
    content: "Zion Tech Group's AI autonomous operations platform transformed our business. We've seen a 300% increase in efficiency and 40% reduction in operational costs. Their quantum computing solutions are truly revolutionary.",
    industry: "Technology",
    results: ["300% efficiency increase", "40% cost reduction", "24/7 autonomous operations"],
    verified: true
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    position: "VP of Operations",
    company: "Global Manufacturing Corp",
    avatar: "/images/testimonials/marcus-rodriguez.jpg",
    rating: 5,
    content: "The AI-powered cybersecurity suite has been a game-changer for our manufacturing operations. We've prevented 99.9% of cyber threats and achieved full compliance with industry standards.",
    industry: "Manufacturing",
    results: ["99.9% threat prevention", "Full compliance achieved", "Zero downtime incidents"],
    verified: true
  },
  {
    id: 3,
    name: "Dr. Emily Watson",
    position: "Research Director",
    company: "Quantum Research Institute",
    avatar: "/images/testimonials/emily-watson.jpg",
    rating: 5,
    content: "Working with Zion's quantum neural network platform has accelerated our research by orders of magnitude. We're solving problems that were previously impossible with classical computing.",
    industry: "Research",
    results: ["1000x speed improvement", "Breakthrough discoveries", "Patent applications filed"],
    verified: true
  },
  {
    id: 4,
    name: "James Thompson",
    position: "CEO",
    company: "FinTech Innovations",
    avatar: "/images/testimonials/james-thompson.jpg",
    rating: 5,
    content: "The AI financial analytics platform has given us unprecedented insights into market trends. Our investment decisions are now data-driven and we've outperformed the market by 25%.",
    industry: "Finance",
    results: ["25% market outperformance", "Real-time analytics", "Risk reduction"],
    verified: true
  },
  {
    id: 5,
    name: "Lisa Park",
    position: "Head of Marketing",
    company: "E-commerce Dynamics",
    avatar: "/images/testimonials/lisa-park.jpg",
    rating: 5,
    content: "Zion's AI marketing automation tools have revolutionized our customer acquisition. We've seen a 150% increase in conversion rates and 80% reduction in marketing costs.",
    industry: "E-commerce",
    results: ["150% conversion increase", "80% cost reduction", "Personalized campaigns"],
    verified: true
  }
];

const stats = [
  { icon: Users, value: "500+", label: "Happy Clients", description: "Trusted by businesses worldwide" },
  { icon: TrendingUp, value: "95%", label: "Success Rate", description: "Proven track record of delivery" },
  { icon: Award, value: "25+", label: "Industry Awards", description: "Recognition for excellence" },
  { icon: CheckCircle, value: "99.9%", label: "Uptime", description: "Reliable service delivery" }
];

export const TestimonialsSection: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
  };

  // Auto-play functionality
  React.useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, currentTestimonial]);

  const current = testimonials[currentTestimonial];

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
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how Zion Tech Group is transforming businesses across industries with our cutting-edge AI solutions
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-lg font-semibold text-cyan-400 mb-1">{stat.label}</div>
              <div className="text-sm text-gray-400">{stat.description}</div>
            </div>
          ))}
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12"
            >
              <div className="flex flex-col lg:flex-row items-start gap-8">
                {/* Testimonial Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    {[...Array(current.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <Quote className="w-8 h-8 text-cyan-400 mb-4" />
                  
                  <blockquote className="text-lg md:text-xl text-white mb-6 leading-relaxed">
                    "{current.content}"
                  </blockquote>
                  
                  <div className="space-y-3">
                    <h4 className="text-xl font-semibold text-white">{current.name}</h4>
                    <p className="text-cyan-400">{current.position}</p>
                    <p className="text-gray-300">{current.company}</p>
                    <p className="text-sm text-gray-400">{current.industry} Industry</p>
                  </div>
                </div>

                {/* Results and Verification */}
                <div className="lg:w-80 space-y-6">
                  {/* Verification Badge */}
                  {current.verified && (
                    <div className="flex items-center gap-2 bg-green-500/20 border border-green-500/30 rounded-lg p-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-green-400 text-sm font-medium">Verified Customer</span>
                    </div>
                  )}

                  {/* Results */}
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                    <h5 className="text-white font-semibold mb-3">Key Results</h5>
                    <ul className="space-y-2">
                      {current.results.map((result, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Industry Badge */}
                  <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-lg p-3 text-center">
                    <span className="text-cyan-400 text-sm font-medium">{current.industry}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center mt-8 gap-4">
            <button
              onClick={prevTestimonial}
              className="p-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-white transition-all duration-300 hover:scale-110"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? 'bg-cyan-400 scale-125'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-white transition-all duration-300 hover:scale-110"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Auto-play Toggle */}
          <div className="flex justify-center mt-4">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                isAutoPlaying
                  ? 'bg-cyan-500 text-white'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              {isAutoPlaying ? 'Pause' : 'Play'} Auto-rotation
            </button>
          </div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-2xl font-semibold text-white mb-8">Trusted by Leading Organizations</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
            {/* Add company logos here */}
            <div className="text-gray-400 text-sm">Fortune 500 Companies</div>
            <div className="text-gray-400 text-sm">Government Agencies</div>
            <div className="text-gray-400 text-sm">Research Institutions</div>
            <div className="text-gray-400 text-sm">Startups & Scale-ups</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
