'use client';

import React from 'react';
import { ArrowRight, CheckCircle, Star, Users, TrendingUp } from 'lucide-react';

const DynamicContentShowcase: React.FC = () => {
  const features = [
    {
      title: 'AI-Powered Analytics',
      description: 'Get real-time insights with our advanced AI analytics platform',
      icon: TrendingUp,
      color: 'from-purple-500 to-blue-500'
    },
    {
      title: 'Automated Workflows',
      description: 'Streamline your business processes with intelligent automation',
      icon: CheckCircle,
      color: 'from-green-500 to-blue-500'
    },
    {
      title: 'Customer Success',
      description: 'Deliver exceptional experiences with our customer success tools',
      icon: Users,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp',
      rating: 5,
      comment: 'Zion Tech Group transformed our business operations with their AI solutions.'
    },
    {
      name: 'Michael Chen',
      company: 'FinanceCorp',
      rating: 5,
      comment: 'Outstanding support and cutting-edge technology. Highly recommended!'
    },
    {
      name: 'Emily Rodriguez',
      company: 'HealthCorp',
      rating: 5,
      comment: 'The best technology partner we\'ve ever worked with.'
    }
  ];

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Features Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">Why Choose Zion Tech Group?</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We deliver cutting-edge solutions that drive real business results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Testimonials Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">What Our Clients Say</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-4">"{testimonial.comment}"</p>
              <div>
                <p className="text-white font-semibold">{testimonial.name}</p>
                <p className="text-gray-400 text-sm">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-purple-100 mb-6">
              Join thousands of businesses already using our solutions.
            </p>
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center mx-auto">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicContentShowcase;