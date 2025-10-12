'use client'
import React from 'react'
import Navigation from './Navigation'
import Sidebar from './Sidebar'

const Header: React.FC = () => {
  return (
    <>
      <Navigation />
      <Sidebar />
      {/* Spacer to prevent content from going under fixed header */}
      <div className="h-16 lg:h-20" />
    </>
  )
}

export default Header