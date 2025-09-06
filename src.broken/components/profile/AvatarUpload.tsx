import React from 'react';

interface AvatarUploadProps {
  className?: string;
}

const AvatarUpload: React.FC<AvatarUploadProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>AvatarUpload</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default AvatarUpload;