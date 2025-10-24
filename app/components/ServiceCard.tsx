'use client'
import React from 'react'

interface ServiceCardProps {
  title?: string
  description?: string
  className?: string
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title = "Service", 
  description = "Professional service solution for modern businesses.",
  className = ""
}) => {
  return (
    <div className={`bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 ${className}`}>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors duration-300">
        Learn More
      </button>
    </div>
  )
}

export default ServiceCard