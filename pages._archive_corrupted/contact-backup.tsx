import React from 'react';

interface Contact-backupProps {
  className?: string;
}

const Contact-backup: React.FC<Contact-backupProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Contact-backup</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Contact-backup;