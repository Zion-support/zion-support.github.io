import React from 'react'

interface AIToolCardProps {
  title: string
  description: string
  link: string
  icon?: React.ReactNode
  category?: string
}

const AIToolCard: React.FC<AIToolCardProps> = ({
  title,
  description,
  link,
  icon,
  category
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center mb-4">
        {icon && <div className="mr-3">{icon}</div>}
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      </div>
      
      {category && (
        <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded mb-3">
          {category}
        </span>
      )}
      
      <p className="text-gray-600 mb-4">{description}</p>
      
      <a
        href={link}
        className="text-blue-600 hover:text-blue-800 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md px-1 py-1 inline-block transition-colors"
        aria-label={`Try ${title} tool`}
      >
        Try Now →
      </a>
    </div>
  )
}

export default AIToolCard