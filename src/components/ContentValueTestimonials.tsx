import React from 'react';
import { Star } from 'lucide-react';

const ContentValueTestimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechCorp",
      content: "The multimodal AI content has been invaluable. We've implemented their strategies and seen 300% improvement.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "VP Engineering, DataFlow",
      content: "Green AI practices from Zion helped us reduce carbon footprint by 85% while improving performance.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Head of AI, FinanceFirst",
      content: "Blockchain-AI integration guide was exactly what we needed. Clear, actionable, and transformative.",
      rating: 5
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What Leaders Say About Our Content
          </h2>
          <p className="text-xl text-gray-600">
            Industry leaders trust our insights to drive their AI strategy
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
              <div>
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-sm text-gray-600">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentValueTestimonials;