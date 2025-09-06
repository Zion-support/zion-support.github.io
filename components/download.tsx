import React from 'react';

interface DownloadProps {
  className?: string;
}

const Download: React.FC<DownloadProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Download</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Download;