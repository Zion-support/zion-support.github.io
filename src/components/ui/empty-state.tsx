import React from 'react';

interface EmptyStateProps {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  action?: { text: string; href: string };
  className?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({ icon, title, description, action, className }) => {
  return (
    <div className={className || 'border border-gray-200 rounded-lg p-6 text-center bg-white'}>
      {icon && <div className="mx-auto mb-3">{icon}</div>}
      <h4 className="text-gray-900 font-semibold">{title}</h4>
      {description && <p className="text-gray-600 mt-1">{description}</p>}
      {action && (
        <a href={action.href} className="inline-block mt-3 text-purple-600 font-semibold hover:text-purple-800">
          {action.text}
        </a>
      )}
    </div>
  );
};

export default EmptyState;

