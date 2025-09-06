import React from 'react';

interface Index.pProps {
  className?: string;

const Index.p: React.FC<Index.pProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Index.p</h1>
      <p>This component is under development.</p>
    </div>
  );

export default Index.p;