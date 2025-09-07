import React from 'react';
interface FeatureCardProps {
icon: string | React.ReactNode;
  title: string;
  description: string;}
  color?: 'blue' | 'purple' | 'green' | 'red' | 'yellow' | 'indigo';}
}
export default function FeatureCard({
  icon,
  title,
  description}
  color = 'blue'}
}: FeatureCardProps) {

  const colorClasses = {
    blue: 'bg-blue-50 text-blue-600 border-blue-200',
  purple: 'bg-purple-50 text-purple-600 border-purple-200',
    green: 'bg-green-50 text-green-600 border-green-200',
  red: 'bg-red-50 text-red-600 border-red-200',
    yellow: 'bg-yellow-50 text-yellow-600 border-yellow-200',

    indigo: 'bg-indigo-50 text-indigo-600 border-indigo-200'
  };

  return (
    <div className=\"bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow\"    />
      <div className={`w-12 h-12 rounded-lg ${colorClasses[color]} flex items-center justify-center mb-4`}    />"
        {typeof icon === 'string' ? (}
          <span className=\"text-2xl\"    />{icon}</span>
        ) : (
          icon;
        )}
      </div>
      <h3 className=\"text-xl font-semibold text-gray-900 mb-3\"    />{title}</h3>
      <p className=\"text-gray-600 leading-relaxed\"    />{description}</p>
    </div>

  );
}

