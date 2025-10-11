'use client'
import React from 'react'

interface ServiceCardProps {
  title: string
  description: string
  icon?: React.ReactNode
  price?: string
  features?: string[]
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  price,
  features = []
}) => {
  return (
    <div className="service-card">
      {icon && <div className="service-icon">{icon}</div>}
      <h3 className="service-title">{title}</h3>
      <p className="service-description">{description}</p>
      {price && <div className="service-price">{price}</div>}
      {features.length > 0 && (
        <ul className="service-features">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default ServiceCard