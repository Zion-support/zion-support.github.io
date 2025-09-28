import React, { useState, useEffect } from 'react';
import { 
  Star, 
  Quote, 
  ChevronLeft, 
  ChevronRight, 
  Play,
  Pause,
  Users,
  Award,
  TrendingUp
} from 'lucide-react';

const EnhancedTestimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  useEffect(() => {
    // Component mounted
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CTO",
      company: "TechCorp Solutions",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Zion Tech Group transformed our entire infrastructure. Their AI solutions increased our efficiency by 300% and reduced costs by 50%. Absolutely game-changing!",
      results: "300% efficiency increase"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CEO",
      company: "InnovateLabs",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "The quantum computing implementation was flawless. We&apos;re now processing data 10x faster than before. Zion&apos;s expertise is unmatched in the industry.",
      results: "10x faster processing"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "VP of Engineering",
      company: "DataFlow Inc",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Outstanding security implementation and cloud migration. Zero downtime, perfect execution. Our team productivity has skyrocketed since working with Zion.",
      results: "Zero downtime migration"
    },
    {
      id: 4,
      name: "David Park",
      role: "Founder",
      company: "StartupX",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "From concept to deployment in record time. Zion&apos;s agile approach and cutting-edge solutions helped us scale from 0 to 1M users in just 6 months.",
      results: "0 to 1M users in 6 months"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isPlaying, testimonials.length]);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-cyan-500/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium mb-6">
            <Award className="w-4 h-4 mr-2" />
            Trusted by Industry Leaders
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what industry leaders say about 
            working with Zion Tech Group.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Testimonial Content */}
              <div className="space-y-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <Quote className="w-12 h-12 text-blue-400 mb-4" />
                
                <blockquote className="text-xl md:text-2xl text-white font-medium leading-relaxed mb-6">
                  &ldquo;{testimonials[currentTestimonial].text}&rdquo;
                </blockquote>
                
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-white/20"
                  />
                  <div>
                    <div className="text-white font-semibold text-lg">
                      {testimonials[currentTestimonial].name}
                    </div>
                    <div className="text-gray-300">
                      {testimonials[currentTestimonial].role}, {testimonials[currentTestimonial].company}
                    </div>
                  </div>
                </div>
              </div>

              {/* Results Card */}
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                <div className="text-center">
                  <TrendingUp className="w-16 h-16 mx-auto mb-4 text-white/80" />
                  <h3 className="text-2xl font-bold mb-2">Proven Results</h3>
                  <p className="text-3xl font-bold mb-4 text-yellow-300">
                    {testimonials[currentTestimonial].results}
                  </p>
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="flex items-center justify-center space-x-2 text-sm">
                      <Users className="w-4 h-4" />
                      <span>500+ successful projects</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={togglePlayPause}
              className="p-4 rounded-full bg-white/20 hover:bg-white/30 text-white transition-all duration-300"
            >
              {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
            </button>
            
            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Testimonial Indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? 'bg-white scale-125'
                    : 'bg-white/40 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">500+</div>
            <div className="text-gray-300">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">99.9%</div>
            <div className="text-gray-300">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">24/7</div>
            <div className="text-gray-300">Support</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">5★</div>
            <div className="text-gray-300">Average Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedTestimonials;