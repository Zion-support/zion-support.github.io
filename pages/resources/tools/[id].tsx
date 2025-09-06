import React from 'react';
import { useRouter } from 'next/router';

interface ToolDetailProps {
  className?: string;
}

const ToolDetail: React.FC<ToolDetailProps> = ({ className }) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className={className || ''}>
      <h1>Tool: {id}</h1>
      <p>This is a tool detail page with ID: {id}</p>
    </div>
  );
};

export default ToolDetail;