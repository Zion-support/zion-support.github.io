'use client'

import React from 'react'

interface GenericServicePageProps {
  title: string
  description: string
  children?: React.ReactNode
}

const GenericServicePage: React.FC<GenericServicePageProps> = ({ 
  title, 
  description, 
  children 
}) => {
  return (
    <div className="service-page">
      <h1>{title}</h1>
      <p>{description}</p>
      {children}
    </div>
  )
}

export default GenericServicePage
