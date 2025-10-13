<<<<<<< HEAD
'use client;

import React from 'react;
=======
import React from 'react';
>>>>>>> cursor/fix-errors-and-merge-to-main-92c8

const SkipLink: React.FC = () => {}
  return (

    <a
<<<<<<< HEAD
<<<<<<< HEAD
      href="#main-content
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-600 text-white px-4 py-2 rounded-md z-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
      onClick={(e) => {
        e.preventDefault();

        const mainContent = document.getElementById(main-content);;

        if (mainContent) {
=======
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-600 text-white px-4 py-2 rounded-md z-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      onClick={(e) => {}
        e.preventDefault();
        const mainContent = document.getElementById('main-content');
        if (mainContent) {}
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
          mainContent.focus();

          mainContent.scrollIntoView({ behavior: smooth });

        }

      }}

=======
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-600 text-white p-2 z-50"
>>>>>>> cursor/fix-errors-and-merge-to-main-92c8
    >
      Skip to main content
    </a>
  );

};

export default SkipLink;
