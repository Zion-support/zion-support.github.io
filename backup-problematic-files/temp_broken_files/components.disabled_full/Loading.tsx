import React from 'react';

interface LoadingProps {
  className?: string;

const Loading: React.FC<LoadingProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Loading</h1>
      <p>This component is under development.</p>
    </div>
  );

export default Loading;