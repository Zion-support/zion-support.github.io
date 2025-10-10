'use client';

import React, { useState, useEffect } from 'react';
import { Star, Quote, ArrowRight, CheckCircle, Users, TrendingUp, Award } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

interface Statistic {
  id: string;
  value: string;
  label: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const DynamicContentShowcase: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      role: 'CTO',
      content: 'Zion Tech Group transformed our entire infrastructure. Their AI solutions increased our efficiency by 300% and reduced costs significantly.',
      rating: 5,
      image: '/images/testimonials/sarah-johnson.jpg'
    },
    {
      id: '2',
      name: 'Michael Chen',
      company: 'DataFlow Systems',
      role: 'CEO',
      content: 'The cloud migration service was flawless. We had zero downtime and our team was up and running in record time.',
      rating: 5,
      image: '/images/testimonials/michael-chen.jpg'
    },
    {
      id: '3',
      name: 'Emily Rodriguez',
      company: 'SecureTech Ltd.',
      role: 'Security Director',
      content: 'Their cybersecurity solutions are top-notch. We feel completely protected and our compliance scores have never been better.',
      rating: 5,
      image: '/images/testimonials/emily-rodriguez.jpg'
    }
  ];

  const statistics: Statistic[] = [
    {
      id: '1',
      value: '10,000+',
      label: 'Happy Clients',
      description: 'Businesses trust our solutions',
      icon: Users
    },
    {
      id: '2',
      value: '99.9%',
      label: 'Uptime',
      description: 'Reliable service guarantee',
      icon: TrendingUp
    },
    {
      id: '3',
      value: '50+',
      label: 'Awards',
      description: 'Industry recognition',
      icon: Award
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentTestimonial((prev) => 
          prev === testimonials.length - 1 ? 0 : prev + 1
        );
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Statistics Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Trusted by Industry Leaders</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our solutions have helped thousands of businesses achieve their goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {statistics.map((stat) => (
              <div key={stat.id} className="text-center">
                <div className="flex justify-center mb-4">
                  <stat.icon className="w-12 h-12 text-cyan-400" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-cyan-400 mb-1">{stat.label}</div>
                <div className="text-gray-400">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say.
            </p>
          </div>

          <div className="relative">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 md:p-12">
              <div className="text-center">
                <Quote className="w-12 h-12 text-cyan-400 mx-auto mb-6" />
                
                <div className="mb-6">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <blockquote className="text-xl text-gray-300 mb-6 max-w-4xl mx-auto">
                    "{testimonials[currentTestimonial].content}"
                  </blockquote>
                </div>

                <div className="flex items-center justify-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {testimonials[currentTestimonial].name.charAt(0)}
                    </span>
                  </div>
                  <div className="text-left">
                    <div className="text-white font-semibold text-lg">
                      {testimonials[currentTestimonial].name}
                    </div>
                    <div className="text-cyan-400">
                      {testimonials[currentTestimonial].role}, {testimonials[currentTestimonial].company}
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex justify-center gap-4 mt-8">
                <button
                  onClick={prevTestimonial}
                  className="p-2 bg-slate-700 hover:bg-slate-600 text-white rounded-full transition-all duration-300"
                >
                  <ArrowRight className="w-5 h-5 rotate-180" />
                </button>
                
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentTestimonial 
                          ? 'bg-cyan-400' 
                          : 'bg-slate-600 hover:bg-slate-500'
                      }`}
                    />
                  ))}
                </div>
                
                <button
                  onClick={nextTestimonial}
                  className="p-2 bg-slate-700 hover:bg-slate-600 text-white rounded-full transition-all duration-300"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let us help you achieve the same results as our satisfied clients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              Get Started Today
            </button>
            <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 font-semibold py-3 px-8 rounded-lg transition-all duration-300">
              View Case Studies
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DynamicContentShowcase;