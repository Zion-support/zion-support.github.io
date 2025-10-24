'use client'

import React from 'react'
import Link from 'next/link'

interface ContentPromotionBannerProps {
  title: string
  description: string
  ctaText: string
  ctaHref: string
  variant?: 'primary' | 'secondary'
}

const ContentPromotionBanner: React.FC<ContentPromotionBannerProps> = ({
  title,
  description,
  ctaText,
  ctaHref,
  variant = 'primary'
}) => {
  const baseClasses = "rounded-lg p-6 text-center"
  const variantClasses = variant === 'primary' 
    ? "bg-blue-600 text-white" 
    : "bg-gray-100 text-gray-900"

  return (
    <div className={`${baseClasses} ${variantClasses}`}>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="mb-4 opacity-90">{description}</p>
      <Link
        href={ctaHref}
        className={`inline-block px-6 py-2 rounded-md font-medium transition-colors ${
          variant === 'primary'
            ? 'bg-white text-blue-600 hover:bg-gray-100'
            : 'bg-blue-600 text-white hover:bg-blue-700'
        }`}
      >
        {ctaText}
      </Link>
    </div>
  )
}

export default ContentPromotionBanner