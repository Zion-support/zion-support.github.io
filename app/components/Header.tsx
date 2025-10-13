<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
const Header: React.FC = () => {,
=======
'use client';
import React from 'react';
import Navigation from './Navigation'
const Header: React.FC = () => {
<<<<<<< HEAD
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
  return(<React.Fragment>)</React.Fragment>
      <Navigation />
      {/* Spacer to prevent content from going under fixed header */} <div className="h-16 lg: h-20" />,
    </React.Fragment>
=======
import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
export default function Header() {
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
  return (
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ff3
    <>
      <Navigation />
=======
}
return (
    <React .Fragment>
      <Navigation />
);
};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
      {/* Spacer to prevent content from going under fixed header */}
      <div className="h-16 lg:h-20" />
<<<<<<< HEAD
    </>
  );
};

export default Header;
    <>
  </>
      <Navigation />
      {/* Spacer to prevent content from going under fixed header */}
      <div className="h-16 lg:h-20" />

    </>
  );
};

export default Header;
=======
import React from 'react'
import Navigation from './Navigation'

  return (
    <header>
      <Navigation />
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0e37
=======
export default function Header() {
    </header>
  );
}
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f1c
=======
    </React.Fragment>
  )
}

export default Header
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
