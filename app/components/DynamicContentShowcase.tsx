'use client';

import React, { useState, useEffect } from 'react';
import { Star, Quote, ArrowRight, CheckCircle, Users, TrendingUp, Zap } from 'lucide-react';

const DynamicContentShowcase: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Solutions',
      role: 'CTO',
      content: 'The AI solutions from Zion Tech Group have transformed our operations. We\'ve seen a 40% increase in efficiency and 60% reduction in costs.',
      rating: 5,
      avatar: '👩‍💼'
    },
    {
      name: 'Michael Chen',
      company: 'DataFlow Systems',
      role: 'CEO',
      content: 'The performance improvements we\'ve seen are remarkable. Highly recommended!',
      rating: 5,
      avatar: '👨‍💼'
    },
    {
      name: 'Emily Rodriguez',
      company: 'InnovateLab',
      role: 'Operations Director',
      content: 'Their cloud migration service was flawless. Zero downtime and seamless transition.',
      rating: 5,
      avatar: '👩‍🔬'
    }
  ];

  const stats = [
    {
      number: '500+',
      label: 'Happy Clients',
      icon: <Users className="w-8 h-8 text-blue-400" />
    },
    {
      number: '95%',
      label: 'Success Rate',
      icon: <TrendingUp className="w-8 h-8 text-green-400" />
    },
    {
      number: '24/7',
      label: 'Support',
      icon: <Zap className="w-8 h-8 text-purple-400" />
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Testimonials Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about our services.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Testimonial Card */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="flex items-center mb-6">
              <div className="text-4xl mr-4">{testimonials[currentTestimonial].avatar}</div>
              <div>
                <h3 className="text-xl font-bold text-white">{testimonials[currentTestimonial].name}</h3>
                <p className="text-gray-300">{testimonials[currentTestimonial].role}, {testimonials[currentTestimonial].company}</p>
                <div className="flex items-center mt-2">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            </div>
            
            <div className="relative">
              <Quote className="w-8 h-8 text-cyan-400 mb-4" />
              <p className="text-gray-300 text-lg leading-relaxed">
                "{testimonials[currentTestimonial].content}"
              </p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white mb-6">Our Track Record</h3>
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  {stat.icon}
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Showcase */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Proven Results</h3>
            <p className="text-gray-300">
              Our solutions have helped clients achieve measurable improvements in efficiency, cost savings, and performance.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Fast Implementation</h3>
            <p className="text-gray-300">
              Get up and running quickly with our streamlined implementation process and expert support.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Expert Support</h3>
            <p className="text-gray-300">
              Our team of experts is here to help you every step of the way with dedicated support and guidance.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-8 border border-cyan-500/20">
            <h2 className="text-2xl font-bold text-white mb-4">
              Ready to Experience the Difference?
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who have transformed their businesses with our AI and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Call: (302) 464-0950
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Get Free Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicContentShowcase;