import React from 'react';

interface FounderCoursePageProps {
  className?: string;
}

const FounderCoursePage: React.FC<FounderCoursePageProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>FounderCoursePage</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default FounderCoursePage;