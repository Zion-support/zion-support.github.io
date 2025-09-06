import React from 'react';
import { useRouter } from 'next/router';

interface WhitepaperDetailProps {
  className?: string;
}

const WhitepaperDetail: React.FC<WhitepaperDetailProps> = ({ className }) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className={className || ''}>
      <h1>Whitepaper: {id}</h1>
      <p>This is a whitepaper detail page with ID: {id}</p>
    </div>
  );
};

export default WhitepaperDetail;