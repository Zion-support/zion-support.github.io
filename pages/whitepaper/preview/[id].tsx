import React from 'react';
import { useRouter } from 'next/router';

interface WhitepaperPreviewProps {
  className?: string;
}

const WhitepaperPreview: React.FC<WhitepaperPreviewProps> = ({ className }) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className={className || ''}>
      <h1>Whitepaper Preview: {id}</h1>
      <p>This is a whitepaper preview page with ID: {id}</p>
    </div>
  );
};

export default WhitepaperPreview;