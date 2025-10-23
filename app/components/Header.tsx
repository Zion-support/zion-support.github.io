'use client'
import React from 'react'
import Navigation from './Navigation'
import ErrorBoundary from './ErrorBoundary'

export default function Header() {
  return (
    <ErrorBoundary>
      <>
        <Navigation />
        {/* Spacer to prevent content from going under fixed header */}
        <div className="h-16 lg:h-20" />
      </>
    </ErrorBoundary>
  )
}

