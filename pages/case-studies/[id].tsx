import React from 'react';
import { useRouter } from 'next/router';

interface CaseStudyDetailProps {
  className?: string;
}

const CaseStudyDetail: React.FC<CaseStudyDetailProps> = ({ className }) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className={className || ''}>
      <h1>Case Study: {id}</h1>
      <p>This is a case study detail page with ID: {id}</p>
    </div>
  );
};

export default CaseStudyDetail;