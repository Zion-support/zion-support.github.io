import React from 'react';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  benefits?: string[];
  className?: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
  benefits = [],
  className = ''
}: FeatureCardProps) {
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 ${className}`}>
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        {description}
      </p>
      {benefits.length > 0 && (
        <ul className="space-y-2">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start">
              <svg
                className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {benefit}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}