import React from 'react';
import { useRouter } from 'next/router';

interface ReviewDetailProps {
  className?: string;
}

const ReviewDetail: React.FC<ReviewDetailProps> = ({ className }) => {
  const router = useRouter();
  const { projectId } = router.query;

  return (
    <div className={className || ''}>
      <h1>Review: {projectId}</h1>
      <p>This is a review detail page with project ID: {projectId}</p>
    </div>
  );
};

export default ReviewDetail;