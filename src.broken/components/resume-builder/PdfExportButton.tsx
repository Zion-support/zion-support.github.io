import React from 'react';

interface PdfExportButtonProps {
  className?: string;
}

const PdfExportButton: React.FC<PdfExportButtonProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>PdfExportButton</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default PdfExportButton;