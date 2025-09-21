import React from 'react';

export function CategoryCard({ 
  title, 
  description, 
  image, 
  icon, 
  href = "#",
  className = "" 
}) {
  return (
    <a 
      href={href}
      className={`block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden ${className}`}
    >
      <div className="p-6">
        {image && (
          <div className="mb-4">
            <img 
              src={image} 
              alt={title}
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>
        )}
        
        {icon && (
          <div className="mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              {icon}
            </div>
          </div>
        )}
        
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {title}
        </h3>
        
        <p className="text-gray-600 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </a>
  );
}