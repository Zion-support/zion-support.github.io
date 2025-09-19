import React from 'react';

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  company,
  content,
  rating,
  avatar
}) => {
  const renderStars = () => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`star ${index < rating ? 'filled' : 'empty'}`}
        aria-label={`${index < rating ? 'Filled' : 'Empty'} star`}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="testimonial-card">
      <div className="testimonial-content">
        <div className="testimonial-text">
          <blockquote>
            &ldquo;{content}&rdquo;
          </blockquote>
        <div className="testimonial-rating">
          {renderStars()}
      <div className="testimonial-author">
        <div className="author-avatar">
          {avatar ? (
            <img src={avatar} alt={`${name} avatar`} />
          ) : (
            <div className="avatar-placeholder">
              {name.charAt(0).toUpperCase()}
          )}
        <div className="author-info">
          <div className="author-name">{name}
          <div className="author-role">{role}
          <div className="author-company">{company}
  );
};

export default TestimonialCard;
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>