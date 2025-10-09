import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ContentCarousel: React.FC = () => {
  const testimonials = [
    {
      quote: "Zion Tech Group transformed our business with their AI solutions. We've seen a 300% increase in efficiency.",
      author: "Sarah Johnson",
      company: "TechCorp Inc.",
      role: "CEO"
    },
    {
      quote: "The AI automation they implemented saved us $2M annually. Incredible results!",
      author: "Michael Chen",
      company: "Global Manufacturing",
      role: "CTO"
    },
    {
      quote: "Outstanding support and cutting-edge technology. Highly recommended!",
      author: "Emily Rodriguez",
      company: "Finance Solutions",
      role: "VP Technology"
    }
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-slate-800 rounded-lg p-6">
              <div className="text-cyan-400 text-4xl mb-4">"</div>
              <p className="text-gray-300 mb-6 leading-relaxed">{testimonial.quote}</p>
              <div className="border-t border-slate-700 pt-4">
                <div className="font-semibold text-white">{testimonial.author}</div>
                <div className="text-cyan-400 text-sm">{testimonial.role}</div>
                <div className="text-gray-400 text-sm">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentCarousel;