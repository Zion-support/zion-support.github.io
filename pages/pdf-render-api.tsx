import React from 'react';

interface PdfRenderApiProps {
  className?: string;
}

const PdfRenderApi: React.FC<PdfRenderApiProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>PdfRenderApi</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default PdfRenderApi;