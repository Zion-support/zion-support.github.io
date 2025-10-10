'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRight, Star, Users, TrendingUp, Shield, Zap, CheckCircle } from 'lucide-react';

interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  category: string;
  benefits: string[];
}

interface Testimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}

const DynamicContentShowcase: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const features: Feature[] = [
    {
      id: '1',
      title: 'AI-Powered Automation',
      description: 'Streamline your business processes with intelligent automation that learns and adapts to your needs.',
      icon: Zap,
      category: 'AI Solutions',
      benefits: ['90% time savings', 'Reduced errors', '24/7 operation', 'Scalable growth']
    },
    {
      id: '2',
      title: 'Cloud Infrastructure',
      description: 'Robust, scalable cloud solutions that grow with your business and ensure maximum uptime.',
      icon: Shield,
      category: 'Cloud Computing',
      benefits: ['99.9% uptime', 'Auto-scaling', 'Global reach', 'Cost optimization']
    },
    {
      id: '3',
      title: 'Data Analytics',
      description: 'Transform raw data into actionable insights with our advanced analytics and visualization tools.',
      icon: TrendingUp,
      category: 'Data & Analytics',
      benefits: ['Real-time insights', 'Predictive analytics', 'Custom dashboards', 'ROI tracking']
    },
    {
      id: '4',
      title: 'Team Collaboration',
      description: 'Enhance productivity with tools designed to improve communication and collaboration across teams.',
      icon: Users,
      category: 'Productivity',
      benefits: ['Seamless communication', 'Project tracking', 'File sharing', 'Remote work support']
    }
  ];

  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Sarah Johnson',
      company: 'TechCorp Inc',
      role: 'CTO',
      content: 'Zion Tech Group transformed our entire IT infrastructure. The AI solutions they implemented have increased our efficiency by 300%.',
      rating: 5,
      avatar: '/images/testimonials/sarah-johnson.jpg'
    },
    {
      id: '2',
      name: 'Michael Chen',
      company: 'DataFlow Systems',
      role: 'CEO',
      content: 'Their cloud migration service was flawless. We saved 50% on infrastructure costs while improving performance significantly.',
      rating: 5,
      avatar: '/images/testimonials/michael-chen.jpg'
    },
    {
      id: '3',
      name: 'Emily Rodriguez',
      company: 'InnovateLab',
      role: 'Head of Operations',
      content: 'The analytics dashboard they built gives us insights we never had before. It\'s been a game-changer for our decision-making.',
      rating: 5,
      avatar: '/images/testimonials/emily-rodriguez.jpg'
    }
  ];

  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [isPlaying, features.length]);

  const currentFeature = features[activeFeature];

  return (
    <div className="py-16 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the key features that make our technology solutions stand out from the competition
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Feature Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center">
                    <currentFeature.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="bg-cyan-100 text-cyan-800 text-sm font-semibold px-3 py-1 rounded-full">
                    {currentFeature.category}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  {currentFeature.title}
                </h3>
                <p className="text-lg text-gray-300">
                  {currentFeature.description}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {currentFeature.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>

              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center gap-2">
                Learn More
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Feature Navigation */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <button
                  key={feature.id}
                  onClick={() => setActiveFeature(index)}
                  className={`w-full p-4 rounded-lg text-left transition-all duration-300 ${
                    index === activeFeature
                      ? 'bg-cyan-500/20 border border-cyan-400/50'
                      : 'bg-white/10 border border-white/20 hover:bg-white/15'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      index === activeFeature
                        ? 'bg-cyan-500'
                        : 'bg-white/20'
                    }`}>
                      <feature.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{feature.title}</h4>
                      <p className="text-sm text-gray-300">{feature.category}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it - hear from the businesses we've helped transform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                    <p className="text-sm text-cyan-400">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
                Join hundreds of businesses that have already transformed their operations with our solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2">
                  Start Your Project
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DynamicContentShowcase;