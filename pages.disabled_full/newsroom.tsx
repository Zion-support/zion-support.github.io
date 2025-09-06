import React from 'react';

interface NewsroomProps {
  className?: string;
}

const Newsroom: React.FC<NewsroomProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Newsroom</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Newsroom;