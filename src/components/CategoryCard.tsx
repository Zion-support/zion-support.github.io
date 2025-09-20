import React from 'react';

export function CategoryCard({ category }) {
  return (
    <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
      <h3 className="font-semibold">{category.name}</h3>
      <p className="text-gray-600">{category.description}</p>
    </div>
  );
}

export default CategoryCard;