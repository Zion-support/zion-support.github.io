import React from 'react';

interface AllCategoriesPageProps {
  className?: string;
}

const AllCategoriesPage: React.FC<AllCategoriesPageProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>AllCategoriesPage</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default AllCategoriesPage;