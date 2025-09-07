import React from 'react';'

interface FeatureCardProps {
}
<<<<<<< HEAD
'icon': string | React.ReactNode;
=======
"icon": string | React.ReactNode;
>>>>>>> origin/resolved-merge-conflicts
  title: string;
  description: string;
  color?: 'blue' | 'purple' | 'green' | 'red' | 'yellow' | 'indigo';'
}

export default function FeatureCard() {

  }

  const colorClasses = {
    }
<<<<<<< HEAD
    'blue': 'bg-blue-50 text-blue-600 border-blue-200','
    'purple': 'bg-purple-50 text-purple-600 border-purple-200','
    'green': 'bg-green-50 text-green-600 border-green-200','
    'red': 'bg-red-50 text-red-600 border-red-200','
    'yellow': 'bg-yellow-50 text-yellow-600 border-yellow-200','
    'indigo': 'bg-indigo-50 text-indigo-600 border-indigo-200''
=======
    "blue": 'bg-blue-50 text-blue-600 border-blue-200','
    "purple": 'bg-purple-50 text-purple-600 border-purple-200','
    "green": 'bg-green-50 text-green-600 border-green-200','
    "red": 'bg-red-50 text-red-600 border-red-200','
    "yellow": 'bg-yellow-50 text-yellow-600 border-yellow-200','
    "indigo": 'bg-indigo-50 text-indigo-600 border-indigo-200''
>>>>>>> origin/resolved-merge-conflicts
  
};

return (
<<<<<<< HEAD
    <div className='bg-white p-6 rounded-lg shadow-lg border border-gray-200 'hover':shadow-xl transition-shadow'>'
      <div className={`w-12 h-12 rounded-lg ${colorClasses[color]} flex items-center justify-center mb-4`}>`
        {typeof icon === 'string' ? ('
          <span className='text-2xl'>{icon}</span>'
=======
    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 "hover":shadow-xl transition-shadow">"
      <div className={`w-12 h-12 rounded-lg ${colorClasses[color]} flex items-center justify-center mb-4`}>`
        {typeof icon === 'string' ? ('
          <span className="text-2xl">{icon}</span>"
>>>>>>> origin/resolved-merge-conflicts
        ) : (
          icon
        )}
      </div>
<<<<<<< HEAD
      <h3 className='text-xl font-semibold text-gray-900 mb-3'>{title}</h3>'
      <p className='text-gray-600 leading-relaxed'>{description}</p>'
=======
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>"
      <p className="text-gray-600 leading-relaxed">{description}</p>"
>>>>>>> origin/resolved-merge-conflicts
    </div>
  );
}
