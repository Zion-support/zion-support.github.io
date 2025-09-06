import React from 'react';

const TestimonialCarousel = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      content: 'Zion Tech transformed our business with their AI solutions. The results exceeded our expectations.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Michael Chen',
      company: 'DataFlow Systems',
      content: 'Outstanding IT services and support. They helped us migrate to the cloud seamlessly.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      company: 'SecureNet Ltd.',
      content: 'Their cybersecurity solutions are top-notch. We feel completely protected.',
      rating: 5,
    },
  ];

  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map(testimonial => (
          <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-600 mb-4">"{testimonial.content}"</p>
            <div>
              <p className="font-semibold text-gray-900">{testimonial.name}</p>
              <p className="text-sm text-gray-500">{testimonial.company}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
