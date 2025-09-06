import React from 'react';

interface CommunityProps {
  className?: string;

const Community: React.FC<CommunityProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Community</h1>
      <p>This component is under development.</p>
    </div>
  );

export default Community;