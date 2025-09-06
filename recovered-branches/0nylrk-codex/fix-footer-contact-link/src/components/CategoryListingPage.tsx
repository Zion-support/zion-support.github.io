import React from 'react';

interface CategoryListingPageProps {
  className?: string;
}

const CategoryListingPage: React.FC<CategoryListingPageProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>CategoryListingPage</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default CategoryListingPage;