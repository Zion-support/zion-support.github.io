import React, { useState, useEffect } from 'react';

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      quote: "Zion Tech Group transformed our operations with their AI solutions. The ROI was incredible - we saw a 1200% return on investment within the first year. Their team's expertise and 24/7 support made all the difference.",
      author: "Sarah Johnson",
      role: "CEO",
      company: "InnovateTech Solutions",
      rating: 5,
      industry: "Technology"
    },
    {
      quote: "The enterprise IT services provided by Zion Tech Group have been exceptional. We've experienced zero downtime since partnering with them, and their proactive monitoring has saved us countless hours and resources.",
      author: "Michael Chen",
      role: "CTO",
      company: "Global Enterprises Inc.",
      rating: 5,
      industry: "Manufacturing"
    },
    {
      quote: "The micro SaaS product they built for us exceeded all expectations. It's a game-changer for our industry. The development process was smooth, and the final product was delivered on time and within budget.",
      author: "Emily Rodriguez",
      role: "Founder",
      company: "Niche Solutions LLC",
      rating: 5,
      industry: "Healthcare"
    },
    {
      quote: "Zion Tech Group's cloud infrastructure solutions helped us scale from a startup to a multinational company. Their expertise in AWS and Azure is unmatched, and their support team is always available when we need them.",
      author: "David Thompson",
      role: "VP of Engineering",
      company: "ScaleUp Technologies",
      rating: 5,
      industry: "Fintech"
    },
    {
      quote: "Their cybersecurity implementation gave us peace of mind. We went from multiple security incidents per month to zero. Their comprehensive approach and ongoing monitoring have been invaluable.",
      author: "Lisa Wang",
      role: "CISO",
      company: "SecureCorp",
      rating: 5,
      industry: "Financial Services"
    },
    {
      quote: "The AI and machine learning solutions from Zion Tech Group revolutionized our customer service. Response times improved by 80%, and customer satisfaction scores are at an all-time high.",
      author: "Robert Martinez",
      role: "Operations Director",
      company: "CustomerFirst Corp",
      rating: 5,
      industry: "E-commerce"
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    setIsAutoPlaying(false);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-yellow-400' : 'text-gray-600'
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/20 to-purple-900/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real results from real clients - see the measurable impact we deliver across industries.
          </p>
        </div>

        <div className="relative">
          {/* Testimonial Card */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10 shadow-2xl">
            <div className="text-center">
              {/* Rating */}
              <div className="flex justify-center mb-6">
                {renderStars(testimonials[currentIndex].rating)}
              </div>

              {/* Quote */}
              <blockquote className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed italic">
                "{testimonials[currentIndex].quote}"
              </blockquote>

              {/* Author Info */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                  {testimonials[currentIndex].author.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="text-white font-semibold text-lg">
                  {testimonials[currentIndex].author}
                </div>
                <div className="text-cyan-400 text-sm mb-1">
                  {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                </div>
                <div className="text-gray-400 text-sm">
                  {testimonials[currentIndex].industry}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-cyan-400 scale-125'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Auto-play Toggle */}
          <div className="flex justify-center mt-4">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                isAutoPlaying
                  ? 'bg-cyan-500 text-white'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              {isAutoPlaying ? 'Pause' : 'Play'} Auto-rotation
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">98%</div>
            <div className="text-gray-300">Client Satisfaction</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">500+</div>
            <div className="text-gray-300">Projects Completed</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">24/7</div>
            <div className="text-gray-300">Support Available</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">1000%</div>
            <div className="text-gray-300">Average ROI</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;