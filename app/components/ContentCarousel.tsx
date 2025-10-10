'use client';
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, CheckCircle, ArrowRight } from 'lucide-react';

const ContentCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      company: 'TechStart Inc',
      role: 'CEO',
      content: 'Zion Tech Group transformed our business with their AI solutions. We saw a 300% increase in efficiency within just 3 months.',
      rating: 5,
      image: '👩‍💼'
    },
    {
      id: 2,
      name: 'Michael Chen',
      company: 'Global Manufacturing Corp',
      role: 'CTO',
      content: 'Their predictive maintenance system saved us over $2M in the first year. The ROI was incredible.',
      rating: 5,
      image: '👨‍💻'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      company: 'Healthcare Systems Ltd',
      role: 'IT Director',
      content: 'The AI-powered customer support system reduced our response time by 80% and improved customer satisfaction significantly.',
      rating: 5,
      image: '👩‍⚕️'
    },
    {
      id: 4,
      name: 'David Thompson',
      company: 'Financial Services Group',
      role: 'VP of Technology',
      content: 'Their cloud migration services were flawless. Zero downtime and 60% cost reduction. Highly recommended!',
      rating: 5,
      image: '👨‍💼'
    }
  ];

  const achievements = [
    {
      icon: '🏆',
      title: '500+ Projects Completed',
      description: 'Successfully delivered AI and IT solutions across various industries'
    },
    {
      icon: '⭐',
      title: '99% Client Satisfaction',
      description: 'Consistently high ratings and positive feedback from our clients'
    },
    {
      icon: '🚀',
      title: '300% Average ROI',
      description: 'Our clients see significant returns on their investment within 6 months'
    },
    {
      icon: '🔒',
      title: '100% Security Record',
      description: 'Zero security breaches across all our implementations'
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

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Testimonials Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
            What Our Clients Say
          </h2>
          
          <div className="relative">
            <div className="overflow-hidden rounded-lg">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0">
                    <div className="cyber-card hologram-card p-8 text-center">
                      <div className="text-6xl mb-6">{testimonial.image}</div>
                      
                      <div className="flex justify-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      
                      <blockquote className="text-xl text-gray-300 mb-6 italic">
                        "{testimonial.content}"
                      </blockquote>
                      
                      <div className="text-white">
                        <div className="font-bold text-lg">{testimonial.name}</div>
                        <div className="text-cyan-400">{testimonial.role}, {testimonial.company}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-full transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-full transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-cyan-400' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
            Our Achievements
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="text-5xl mb-4">{achievement.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{achievement.title}</h3>
                <p className="text-gray-300">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="cyber-card hologram-card p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6 neon-text">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let us help you achieve similar results with our proven AI and IT solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+13024640950" className="cyber-button">
              📞 Call: (302) 464-0950
            </a>
            <a href="mailto:kleber@ziontechgroup.com" className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
              📧 Get Free Consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentCarousel;