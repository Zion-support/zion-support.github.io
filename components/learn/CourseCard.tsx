import React from 'react';

interface CourseCardProps {
  className?: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>CourseCard</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default CourseCard;