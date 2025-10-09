import React from 'react';
import { ArrowRight, Star, Users, TrendingUp } from 'lucide-react';

const ContentCarousel: React.FC = () => {
  const testimonials = [
    {
      quote: "Zion Tech Group transformed our business with AI automation. We've seen a 300% increase in efficiency.",
      author: "Sarah Johnson",
      company: "TechCorp Inc.",
      rating: 5
    },
    {
      quote: "Their cybersecurity solutions are top-notch. We feel completely secure with their protection.",
      author: "Mike Chen",
      company: "Finance Solutions",
      rating: 5
    },
    {
      quote: "The AI marketing tools they implemented increased our ROI by 250% in just 6 months.",
      author: "Emily Davis",
      company: "Marketing Pro",
      rating: 5
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-300">Real results from real businesses</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="cyber-card p-6">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-300 mb-4 italic">"{testimonial.quote}"</p>
              <div className="border-t border-gray-700 pt-4">
                <div className="font-semibold text-white">{testimonial.author}</div>
                <div className="text-sm text-cyan-400">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentCarousel;
