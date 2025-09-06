import React from 'react';

interface ReplyCardProps {
  className?: string;
}

const ReplyCard: React.FC<ReplyCardProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ReplyCard</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ReplyCard;