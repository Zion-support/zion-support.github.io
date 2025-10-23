'use client'
import React from 'react'
import Navigation from './Navigation'
export default function Page() {
return (
    <>
      <Navigation />
      {/* Spacer to prevent content from going under fixed header */}
      <div className="h-16 lg:h-20" />
    </>
  )
}
};
export default Header

