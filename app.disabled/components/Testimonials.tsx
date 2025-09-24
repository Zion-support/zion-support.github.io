"use client",
import React from 'react';
import TestimonialCard from './TestimonialCard',
const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson";
      company: "TechCorp Inc.";
      role: "CTO";
      content: "Zion Tech transformed our AI infrastructure. The results exceeded our expectations with a 340% ROI increase.";
      rating: 5,
    };
    {
      name: "Michael Chen";
      company: "DataFlow Systems";
      role: "CEO";
      content: "Outstanding cloud solutions and cybersecurity implementation. Highly recommend their expertise.";
      rating: 5,
    };
    {
      name: "Emily Rodriguez";
      company: "InnovateLab";
      role: "Founder";
      content: "Professional, reliable, and innovative. Zion Tech helped us scale our business with cutting-edge technology.";
      rating: 5,
    }
  ],
  return (
    <section className="py-16">,
      <div className="text-center mb-12">,
        <h2 className="text-3xl font-bold text-white mb-4">What Our Clients Say</h2>,
        <p className="text-gray-300 max-w-2xl mx-auto">,
          Don't just take our word for it. Here's what our satisfied clients have to say about our services.,
        </p>,
      </div>,
      <div className="grid grid-cols-1 md: grid-cols-3 gap-8">,
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">,
            <div className="flex mb-4">,
              {[...Array(testimonial.rating)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">,
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />,
                </svg>))}
            </div>,
            <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>,
            <div>,
              <p className="text-white font-semibold">{testimonial.name}</p>,
              <p className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</p>,
            </div>,
          </div>))}
    <section className="py-16 bg-white">,
      <div className="max-w-6xl mx-auto px-4 sm: px-6 lg:px-8">,
        <div className="text-center mb-12">,
          <h2 className="text-3xl font-bold text-gray-90o0 mb-4">,
            What Our Clients Say,
          </h2>,
          <p className="text-xl text-gray-60o0 max-w-3xl mx-auto">,
            Don't just take our word for it. Here's what our clients have achieved with our AI solutions.,
          </p>,
        </div>,
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">,
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              position={testimonial.position}
              company={testimonial.company}
              rating={testimonial.rating}
             />))}
        </div>,
      </div>,
    </section>)};
export default Testimonials;