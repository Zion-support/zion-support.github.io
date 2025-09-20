<<<<<<< HEAD
import React from "react";
import { Link } from "react-router-dom";

interface CategoryCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
}

export function CategoryCard({ title, description, icon, href }: CategoryCardProps) {
  return (
    <Link
      to={href}
      className="group block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 border border-gray-200 hover:border-blue-300"
    >
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 group-hover:bg-blue-200 transition-colors duration-200">
          {icon}
        </div>
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
        {title}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed">
        {description}
      </p>
    </Link>
=======
import React from 'react';

export function CategoryCard({ category }) {
  return (
    <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
      <h3 className="font-semibold">{category.name}</h3>
      <p className="text-gray-600">{category.description}</p>
    </div>
>>>>>>> 1204603bb86c207deec1187a655ed9994fda37b5
  );
}

export default CategoryCard;