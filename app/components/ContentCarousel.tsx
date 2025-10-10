'use client';
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote, ArrowRight } from 'lucide-react';

const ContentCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO, TechCorp',
      company: 'Fortune 500 Technology Company',
      content: 'Zion Tech Group transformed our entire digital infrastructure. Their AI solutions increased our operational efficiency by 300% and reduced costs by 60%. The ROI has been outstanding.',
      rating: 5,
      image: 'SJ',
      color: 'from-cyan-500 to-blue-600'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'CTO, InnovateLabs',
      company: 'Leading AI Research Lab',
      content: 'The AI project management platform has revolutionized how we handle complex projects. The intelligent automation and predictive analytics are game-changers for our team.',
      rating: 5,
      image: 'MC',
      color: 'from-purple-500 to-pink-600'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Marketing Director, GrowthCo',
      company: 'Digital Marketing Agency',
      content: 'Their AI social media management tool has been incredible. We\'ve seen a 400% increase in engagement and 250% more leads. The automation saves us 20 hours per week.',
      rating: 5,
      image: 'ER',
      color: 'from-green-500 to-teal-600'
    },
    {
      id: 4,
      name: 'David Kim',
      role: 'IT Director, Enterprise Solutions',
      company: 'Global Enterprise',
      content: 'The AI cloud infrastructure management has been a game-changer. We\'ve reduced our cloud costs by 50% while improving performance by 200%. The security features are top-notch.',
      rating: 5,
      image: 'DK',
      color: 'from-orange-500 to-red-600'
    },
    {
      id: 5,
      name: 'Lisa Thompson',
      role: 'Operations Manager, RetailMax',
      company: 'E-commerce Platform',
      content: 'The AI email marketing automation has transformed our customer engagement. Open rates increased by 45% and click-through rates by 60%. The personalization is incredible.',
      rating: 5,
      image: 'LT',
      color: 'from-pink-500 to-purple-600'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6 neon-text">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what industry leaders say about our AI and IT solutions.
          </p>
        </div>

        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden rounded-3xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0">
                  <div className="holographic-stream p-12 mx-4">
                    <div className="text-center mb-8">
                      <div className="flex justify-center mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <Quote className="w-12 h-12 text-cyan-400 mx-auto mb-6" />
                      <blockquote className="text-2xl text-white font-medium leading-relaxed max-w-4xl mx-auto">
                        "{testimonial.content}"
                      </blockquote>
                    </div>

                    <div className="flex items-center justify-center space-x-6">
                      <div className={`w-16 h-16 bg-gradient-to-r ${testimonial.color} rounded-full flex items-center justify-center text-white font-bold text-xl`}>
                        {testimonial.image}
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-white">{testimonial.name}</div>
                        <div className="text-cyan-400 font-semibold">{testimonial.role}</div>
                        <div className="text-gray-300 text-sm">{testimonial.company}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-slate-800/80 hover:bg-slate-700/80 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-slate-800/80 hover:bg-slate-700/80 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-cyan-400 scale-125' 
                    : 'bg-gray-600 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="/case-studies"
            className="cyber-button inline-flex items-center space-x-2"
          >
            <span>Read More Success Stories</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContentCarousel;