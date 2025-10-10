'use client';

import React from 'react';

const ContentCarousel: React.FC = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      content: 'Zion Tech Group transformed our business with their AI solutions. We saw a 300% increase in efficiency.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'InnovateLabs',
      content: 'The micro SAAS tools are game-changers. Easy to use and incredibly powerful.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'DataFlow Systems',
      content: 'Outstanding support and cutting-edge technology. Highly recommended!',
      rating: 5
    }
  ];

  return (
    <div className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-12">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="cyber-card hologram-card p-6">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400">⭐</span>
                ))}
              </div>
              <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
              <div className="text-white font-semibold">{testimonial.name}</div>
              <div className="text-cyan-400 text-sm">{testimonial.company}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentCarousel;
