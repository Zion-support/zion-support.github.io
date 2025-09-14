import React from 'react';
import TestimonialCard from './TestimonialCard';

const testimonials = [
  {
    quote: "Zion Tech Group transformed our operations with AI automation. We achieved 340% ROI within 18 months and reduced costs by 67%. Their expertise and support were exceptional.",
    author: "Sarah Johnson",
    position: "CTO",
    company: "Global Manufacturing Corp"
  },
  {
    quote: "The AI implementation roadmap they provided was comprehensive and easy to follow. We successfully deployed AI across all our business functions with minimal disruption.",
    author: "Michael Chen",
    position: "VP of Technology",
    company: "Fortune 500 Retail"
  },
  {
    quote: "Their cybersecurity solutions protected us from advanced threats while improving our operational efficiency. The ROI exceeded our expectations by 200%.",
    author: "Dr. Emily Rodriguez",
    position: "Chief Information Officer",
    company: "Healthcare Systems Inc"
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
            Don't just take our word for it. Here's what industry leaders say about our AI transformation services.
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
            />
          ))}
        </div>
      </div>
    </section>
  );
}