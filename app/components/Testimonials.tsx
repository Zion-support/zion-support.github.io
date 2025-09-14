import React from 'react';
import TestimonialCard from './TestimonialCard';

const testimonials = [
  {
    quote: "Zion Tech Group transformed our entire operation with AI. We achieved a 340% ROI increase and reduced costs by 60%. Their expertise and execution were exceptional.",
    author: "Sarah Johnson",
    position: "CTO",
    company: "Global Manufacturing Corp",
    rating: 5
  },
  {
    quote: "The AI implementation was seamless and the results exceeded our expectations. Our customer satisfaction increased by 50% and operational efficiency improved dramatically.",
    author: "Michael Chen",
    position: "VP of Operations",
    company: "Tech Solutions Inc",
    rating: 5
  },
  {
    quote: "Working with Zion Tech Group was a game-changer. Their AI solutions helped us automate 80% of our processes and achieve unprecedented growth.",
    author: "Emily Rodriguez",
    position: "CEO",
    company: "Innovation Labs",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have achieved with our AI solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              position={testimonial.position}
              company={testimonial.company}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
}