'use client'

import React from 'react'

interface ServiceCardProps {
  title: string
  description: string
  icon?: string
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
  return (
    <div className="service-card">
      {icon && <div className="service-icon">{icon}</div>}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

export default ServiceCard
