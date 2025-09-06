import React from 'react';
import { useRouter } from 'next/router';

interface DisputeDetailProps {
  className?: string;
}

const DisputeDetail: React.FC<DisputeDetailProps> = ({ className }) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className={className || ''}>
      <h1>Dispute: {id}</h1>
      <p>This is a dispute detail page with ID: {id}</p>
    </div>
  );
};

export default DisputeDetail;