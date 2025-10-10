'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRight, Star, Users, TrendingUp, Shield, Zap, CheckCircle } from 'lucide-react';

const DynamicContentShowcase: React.FC = () => {
  const [currentFeature, setCurrentFeature] = useState(0);

  const features = [
    {
      icon: <Zap className="w-12 h-12" />,
      title: 'Lightning Fast Performance',
      description: 'Optimized for speed with cutting-edge technology and best practices.',
      stats: { value: '99.9%', label: 'Uptime' }
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: 'Enterprise Security',
      description: 'Bank-level security with advanced encryption and compliance standards.',
      stats: { value: '256-bit', label: 'Encryption' }
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: 'Expert Team',
      description: 'Experienced professionals dedicated to delivering exceptional results.',
      stats: { value: '50+', label: 'Experts' }
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: 'Proven Results',
      description: 'Track record of delivering measurable business value and ROI.',
      stats: { value: '98%', label: 'Satisfaction' }
    }
  ];

  const testimonials = [
    {
      id: '1',
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      role: 'CTO',
      content: 'Zion Tech Group transformed our entire infrastructure. The results exceeded our expectations.',
      rating: 5,
      image: '/images/testimonials/sarah.jpg'
    },
    {
      id: '2',
      name: 'Michael Chen',
      company: 'DataFlow Solutions',
      role: 'CEO',
      content: 'Their AI solutions helped us automate 80% of our processes. Incredible work!',
      rating: 5,
      image: '/images/testimonials/michael.jpg'
    },
    {
      id: '3',
      name: 'Emily Rodriguez',
      company: 'SecureNet Ltd.',
      role: 'Security Director',
      content: 'The security implementation was flawless. We feel completely protected.',
      rating: 5,
      image: '/images/testimonials/emily.jpg'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [features.length]);

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver cutting-edge solutions that drive real business results and measurable ROI
            </p>
          </div>

          {/* Dynamic Features Section */}
          <div className="mb-16">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Feature Content */}
                <div className="p-8 lg:p-12">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                      <div className="text-white">
                        {features[currentFeature].icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {features[currentFeature].title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {features[currentFeature].description}
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="text-3xl font-bold text-blue-600">
                        {features[currentFeature].stats.value}
                      </div>
                      <div className="text-gray-600">
                        {features[currentFeature].stats.label}
                      </div>
                    </div>
                  </div>
                  
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center gap-2">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Feature Indicators */}
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-8 lg:p-12 flex flex-col justify-center">
                  <div className="space-y-4">
                    {features.map((feature, index) => (
                      <div
                        key={index}
                        className={`flex items-center gap-4 p-4 rounded-lg transition-all duration-300 ${
                          index === currentFeature
                            ? 'bg-white/20 backdrop-blur-lg'
                            : 'bg-white/10 hover:bg-white/15'
                        }`}
                      >
                        <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                          <div className="text-white">
                            {feature.icon}
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-white mb-1">
                            {feature.title}
                          </h4>
                          <p className="text-sm text-blue-100">
                            {feature.description}
                          </p>
                        </div>
                        {index === currentFeature && (
                          <CheckCircle className="w-5 h-5 text-white" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                What Our Clients Say
              </h3>
              <p className="text-gray-600">
                Don't just take our word for it - hear from our satisfied clients
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-600 mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-600">
                        {testimonial.role}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-2xl p-8 md:p-12 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
                Join hundreds of satisfied clients who have already transformed their operations with our solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                  Get Started Today
                </button>
                <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors duration-200">
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicContentShowcase;
