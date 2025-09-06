import React from 'react';

interface DropzoneBulkUploadProps {
  className?: string;
}

const DropzoneBulkUpload: React.FC<DropzoneBulkUploadProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>DropzoneBulkUpload</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default DropzoneBulkUpload;