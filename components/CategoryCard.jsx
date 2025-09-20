import React from 'react';

const CategoryCard = ({ title, description, icon, href, className = "" }) => {
  return (
    <div className={`bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 ${className}`}>
      <div className="flex items-center mb-4">
        {icon && <div className="mr-3">{icon}</div>}
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      {href && (
        <a 
          href={href}
          className="text-blue-600 hover:text-blue-800 font-medium"
        >
          Learn More →
        </a>
      )}
    </div>
  );
};

export default CategoryCard;
export { CategoryCard };