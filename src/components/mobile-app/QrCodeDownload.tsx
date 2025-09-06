import React from 'react';

interface QrCodeDownloadProps {
  className?: string;
}

const QrCodeDownload: React.FC<QrCodeDownloadProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>QrCodeDownload</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default QrCodeDownload;