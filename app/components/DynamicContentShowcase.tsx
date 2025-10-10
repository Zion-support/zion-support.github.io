'use client';
import React from 'react';
import React, { useState, useEffect } from 'react';
import { CheckCircle, ArrowRight, Zap, Shield, Brain, Globe, Star, Users, Clock, Award } from 'lucide-react';
const DynamicContentShowcase: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that learn and adapt to your business needs in real-time'
    },
    {
      icon: Zap,
      title: 'Lightning Fast Performance',
      description: 'Optimized for speed with sub-second response times and seamless user experience'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption and compliance standards'
    },
    {
      icon: Globe,
      title: 'Global Scalability',
      description: 'Scale effortlessly across multiple regions with automatic load balancing'
    }
  ];
  const benefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ];
  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      role: 'CTO',
      content: 'This solution transformed our operations completely. The AI insights are incredible.',
      rating: 5;
    },
    {
      name: 'Michael Chen',
      company: 'DataFlow Systems',
      role: 'CEO',
      content: 'Outstanding performance and reliability. Our team productivity increased by 300%.',
      rating: 5;
    },
    {
      name: 'Emily Rodriguez',
      company: 'InnovateLab',
      role: 'Product Manager',
      content: 'The best investment we made this year. ROI was evident within the first month.',
      rating: 5;
    }
  ];
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900"></div>
      {/* Hero Section */}
      <section className="py-20 px-4"></section>
        <div className="max-w-7xl mx-auto text-center"></div>
          <h1 className="text-5xl font-bold text-white mb-6"></h1>
            Dynamic <span className="text-cyan-400">Content Showcase</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"></p>
            Experience the power of our cutting-edge solutions with real-time demonstrations ;
            and interactive showcases that bring your business to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"></button>
              <span>Start Demo</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"></button>
              Learn More;
            </button>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-20 px-4"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl font-bold text-white mb-4"></h2>
              Why Choose Our Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              Our solutions deliver unmatched performance, security, and scalability for modern businesses.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"></div>
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg mb-4"></div>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="py-20 px-4"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl font-bold text-white mb-4"></h2>
              What Our Clients Say;
            </h2>
            <p className="text-xl text-gray-300"></p>
              Real feedback from real customers who have transformed their businesses.
            </p>
          </div>
          <div className="relative"></div>
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10"></div>
              <div className="text-center"></div>
                <div className="flex justify-center mb-4"></div>
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-xl text-gray-300 mb-6 italic"></blockquote>
                  "{testimonials[currentIndex].content}"
                </blockquote>
                <div className="text-white"></div>
                  <div className="font-semibold text-lg">{testimonials[currentIndex].name}</div>
                  <div className="text-cyan-400">{testimonials[currentIndex].role}</div>
                  <div className="text-gray-400">{testimonials[currentIndex].company}</div>
                </div>
              </div>
            </div>
            {/* Testimonial Dots */}
            <div className="flex justify-center mt-6 space-x-2"></div>
              {testimonials.map((_, index) => (
                <button;
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentIndex ? 'bg-cyan-400' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Benefits Section */}
      <section className="py-20 px-4"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10"></div>
            <div className="text-center mb-12"></div>
              <h2 className="text-4xl font-bold text-white mb-4">Key Benefits</h2>
              <p className="text-xl text-gray-300"></p>
                Discover why thousands of businesses trust our solutions.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"></div>
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center"></div>
                  <CheckCircle className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                  <p className="text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-12"></div>
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 mx-auto"></button>
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default DynamicContentShowcase;