'use client'
import React from 'react'
      <Navigation />
      {/* Spacer to prevent content from going under fixed header */}
      <div className="h-16 lg:h-20" />
    </>
import Navigation from './Navigation'
constHeader: React.FC= () =>{return (
  <><Navigation />{/* Spacer to prevent content from going under fixedheader */}
    <divclassName="h-16lg:h-20" /></di></>
  )
}
export default Header
