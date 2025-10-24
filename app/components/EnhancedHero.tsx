'use client'

import React from 'react'

interface EnhancedHeroProps {
  title: string
  subtitle?: string
  children?: React.ReactNode
}

const EnhancedHero: React.FC<EnhancedHeroProps> = ({ title, subtitle, children }) => {
  return (
    <section className="hero-section">
      <h1>{title}</h1>
      {subtitle && <p>{subtitle}</p>}
      {children}
    </section>
  )
}

export default EnhancedHero