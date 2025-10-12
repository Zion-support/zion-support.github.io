import React from 'react'
import Navigation from './Navigation'

export default function Header() {
const Header: React.FC = () => {
  return (
    <header>
      <Navigation />
    </header>
  );
}
      {/* Spacer to prevent content from going under fixed header */}
      <div className="h-16 lg:h-20" />
    </React.Fragment>
  )
}

export default Header
