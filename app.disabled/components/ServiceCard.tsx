'use client';
import React from 'react';
import Link from 'next/link';
interface ServiceCardProps {
title: string;
  href: string;
  description: string;
  bullets?: string[];
  icon?: string;}
  className?: string;}
}
export default function ServiceCard({
  title,
  href,
  description,
  bullets = [],
  icon}
  className = ''}
}: ServiceCardProps) {

  return (
    <Link;}
href={href}
}
      className={`group block p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-300 hover:-translate-y-1 ${className}`}
        />
      <div className=\"flex items-center mb-4\"    />"
        {icon && (}
          <div className=\"text-3xl mr-4 group-hover:scale-110 transition-transform duration-300\"    />}
            {icon}
          </div>
        <h3 className=\"text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300\"    />
          {title}
        </h3>
      </div>

      <p className="text-gray-600 mb-4 group-hover:text-gray-700 transition-colors duration-300">
        {description}
      </p>
      {bullets.length > 0 && (
        <ul className="space-y-2">
          {bullets.map((bullet, index) => (
            <li key={index} className="flex items-start group-hover:translate-x-1 transition-transform duration-300" style={{ transitionDelay: `${index * 50}ms` }}>
              <span className="text-green-500 mr-3 mt-0.5 group-hover:text-green-600 transition-colors duration-300">✓</span>
              <span className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{bullet}</span>

            </li>
          ))}
        </ul>
      )}
      {/* Hover indicator */}
      <div className=\"mt-4 flex items-center text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300\"    />"
        <span className=\"text-sm font-medium mr-2\"    />Learn More</span>
        <svg className=\"w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\"    />"
          <path strokeLinecap=\"round\" strokeLinejoin=\"round\" strokeWidth={2} d=\"M9 5l7 7-7 7\"    />
        </svg>
      </div>
    </Link>
  );
};