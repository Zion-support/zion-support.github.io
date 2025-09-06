import React from 'react';

interface AdminNotesPanelProps {
  className?: string;
}

const AdminNotesPanel: React.FC<AdminNotesPanelProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>AdminNotesPanel</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default AdminNotesPanel;