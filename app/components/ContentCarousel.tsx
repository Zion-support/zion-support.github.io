"use client"

import React from 'react'

interface ContentCarouselProps {
  children?: React.ReactNode
}

export default function ContentCarousel({ children }: ContentCarouselProps) {
  return (
    <div className="content-carousel">
      {children}
    </div>
  )
}