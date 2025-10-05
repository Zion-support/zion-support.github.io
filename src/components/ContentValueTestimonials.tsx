import React from 'react';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

interface ContentValueTestimonialsProps {
  testimonials?: Testimonial[];
  className?: string;
}

const ContentValueTestimonials: React.FC<ContentValueTestimonialsProps> = ({
  testimonials = [],
  className = ''
}) => {
  const defaultTestimonials: Testimonial[] = [
    {
      id: '1',
      name: 'John Doe',
      role: 'CEO',
      company: 'Tech Corp',
      content: 'Excellent service and great value for money.',
      rating: 5
    },
    {
      id: '2',
      name: 'Jane Smith',
      role: 'CTO',
      company: 'Innovation Inc',
      content: 'Outstanding results and professional team.',
      rating: 5
    }
  ];

  const displayTestimonials = testimonials.length > 0 ? testimonials : defaultTestimonials;

  return (
    <div className={`content-value-testimonials ${className}`}>
      <h2 className="text-2xl font-bold mb-6">What Our Clients Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {displayTestimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}>
                    ★
                  </span>
                ))}
              </div>
            </div>
            <p className="text-gray-700 mb-4">"{testimonial.content}"</p>
            <div className="border-t pt-4">
              <p className="font-semibold text-gray-900">{testimonial.name}</p>
              <p className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentValueTestimonials;