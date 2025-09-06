import React from 'react';

interface White-papersProps {
  className?: string;

const White-papers: React.FC<White-papersProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>White-papers</h1>
      <p>This component is under development.</p>
    </div>
  );

export default White-papers;