import React from 'react';

interface AiMeetingNotesProps {
  className?: string;
}

const AiMeetingNotes: React.FC<AiMeetingNotesProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>AiMeetingNotes</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default AiMeetingNotes;