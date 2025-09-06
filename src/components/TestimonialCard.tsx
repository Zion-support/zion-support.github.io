
import React from 'react';

interface TestimonialCardProps {
  name?: string;
  role?: string;
  company?: string;
  content?: string;
  rating?: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name = 'John Doe',
  role = 'CEO',
  company = 'Company Inc.',
  content = 'Great service!',
  rating = 5
}) => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-content">
        <p>"{content}"</p>
      </div>
      <div className="testimonial-author">
        <h4>{name}</h4>
        <p>{role} at {company}</p>
        <div className="rating">
          {'★'.repeat(rating)}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
