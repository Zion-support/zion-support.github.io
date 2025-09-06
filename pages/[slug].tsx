import React from 'react';
import { useRouter } from 'next/router';

interface SlugPageProps {
  className?: string;
}

const SlugPage: React.FC<SlugPageProps> = ({ className }) => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div className={className || ''}>
      <h1>SlugPage</h1>
      <p>This is a dynamic page with slug: {slug}</p>
    </div>
  );
};

export default SlugPage;