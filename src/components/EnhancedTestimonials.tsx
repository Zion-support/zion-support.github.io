import React from 'react';
import { Star, Quote } from 'lucide-react';

const EnhancedTestimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief AI Officer, GlobalTech",
      company: "GlobalTech",
      content: "Zion Tech Group's multimodal AI implementation exceeded all expectations. We achieved 98% accuracy and transformed our entire product line.",
      rating: 5,
      impact: "300% ROI in 6 months"
    },
    {
      name: "Michael Rodriguez",
      role: "VP of Innovation, FinancePro",
      company: "FinancePro",
      content: "The blockchain-AI integration was seamless. Their team's expertise in both domains is unmatched. Game-changing results.",
      rating: 5,
      impact: "99.95% fraud detection"
    },
    {
      name: "Emily Thompson",
      role: "Director of Operations, ManufactureCo",
      company: "ManufactureCo",
      content: "Predictive maintenance solution reduced our downtime by 85%. The ROI was clear within 3 months. Exceptional service.",
      rating: 5,
      impact: "$2M annual savings"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See what executives say about partnering with Zion Tech Group
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:scale-105 relative"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-blue-200" />
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 text-lg mb-6 italic relative z-10">
                "{testimonial.content}"
              </p>
              <div className="border-t border-gray-200 pt-6">
                <div className="font-bold text-gray-900 text-lg">{testimonial.name}</div>
                <div className="text-sm text-gray-600 mb-3">{testimonial.role}</div>
                <div className="bg-green-100 text-green-800 px-3 py-2 rounded-full text-sm font-semibold inline-block">
                  {testimonial.impact}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnhancedTestimonials;