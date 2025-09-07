import React from 'react'
interface FeatureCardProps {
  icon: string | React.ReactNode
  title: string
  description: string
  color?: 'blue' | 'purple' | 'green' | 'red' | 'yellow' | 'indigo'
export default function FeatureCard({
  icon,
  title,
  description,
  color = 'blue'
}: FeatureCardProps) {
  const colorClasses = {
    blue: 'bg-blue-500',
    purple: 'bg-purple-500',
    green: 'bg-green-500',
    red: 'bg-red-500',
    yellow: 'bg-yellow-500',
    indigo: 'bg-indigo-500'
  }
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className={`w-12 h-12 ${colorClasses[color]} rounded-lg flex items-center justify-center mb-4`}>
        {typeof icon === 'string' ? (
          <span className="text-white text-xl">{icon}</span>
        ) : (
          icon
        )}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
