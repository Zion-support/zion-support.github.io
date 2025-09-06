import React from 'react';

interface SpeakersSectionProps {
  className?: string;
}

const SpeakersSection: React.FC<SpeakersSectionProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>SpeakersSection</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default SpeakersSection;