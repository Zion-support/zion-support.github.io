import React from 'react';

interface EducationProps {
  className?: string;

const Education: React.FC<EducationProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Education</h1>
      <p>This component is under development.</p>
    </div>
  );

export default Education;