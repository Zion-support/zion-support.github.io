import React from 'react';
import { Star, Quote } from 'lucide-react';

const EnhancedTestimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO",
      company: "TechCorp",
      content: "Zion Tech Group transformed our entire infrastructure. Their AI solutions increased our efficiency by 300%.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      role: "CEO",
      company: "InnovateLabs",
      content: "Outstanding cybersecurity implementation. We feel completely secure with their solutions protecting our data.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      role: "VP of Operations",
      company: "GlobalTech",
      content: "The cloud migration was seamless. Their team made what seemed impossible, possible. Highly recommended!",
      rating: 5,
      avatar: "ER"
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about working with us.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <Quote className="w-8 h-8 text-blue-500 mb-4" />
              
              <p className="text-gray-700 dark:text-gray-300 mb-6 italic">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {testimonial.role}, {testimonial.company}
                  </p>
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