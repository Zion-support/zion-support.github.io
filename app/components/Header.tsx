import React from 'react'
import Navigation from './Navigation'

<<<<<<< HEAD
export default function Header() {
=======
const Header: React.FC = () => {
>>>>>>> cursor/fix-errors-and-merge-to-main-33db
  return (
    <header>
      <Navigation />
<<<<<<< HEAD
    </header>
  );
}
=======
      {/* Spacer to prevent content from going under fixed header */}
      <div className="h-16 lg:h-20" />
    </React.Fragment>
  )
}

export default Header
>>>>>>> cursor/fix-errors-and-merge-to-main-33db
