<<<<<<< HEAD
'use client';
import React from 'react';
const SkipLink: React.FC = () => {}
  return (
    <a href=""#main-content"></a>"
      className=""sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-600 text-white px-4 py-2 rounded-md z-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2""
      onClick={(e) => {}
        e.preventDefault();
        const mainContent="document.getElementById('main-content');"
        if (mainContent) {}
=======
'use client;

import React from 'react;

const SkipLink: React.FC = () => {
  return (

    <a
      href="#main-content
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-600 text-white px-4 py-2 rounded-md z-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
      onClick={(e) => {
        e.preventDefault();

        const mainContent = document.getElementById(main-content);;

        if (mainContent) {
>>>>>>> origin/main
          mainContent.focus();

          mainContent.scrollIntoView({ behavior: smooth });

        }
<<<<<<< HEAD
      }}>
      Skip to main content;
=======

      }}

    >
      Skip to main content
>>>>>>> origin/main
    </a>
  );

};
<<<<<<< HEAD
export default SkipLink;
=======

export default SkipLink;
>>>>>>> origin/main
