'use client';
import React from 'react';

interface SkipLinkProps {
  to: string;
  children: React.ReactNode;
}

import React from 'react;
import React from 'react';

const SkipLink: React.FC = () => {}
  return (
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-600 text-white px-4 py-2 rounded-md z-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      onClick={(e) => {}
        e.preventDefault();
        const mainContent = document.getElementById('main-content');
        if (mainContent) {}
          mainContent.focus();

          mainContent.scrollIntoView({ behavior: smooth });

        }

      }}

      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-600 text-white p-2 z-50"
    >
      Skip to main content
    </a>
  );

};

    <a
      href={to}
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-cyan-600 text-white px-4 py-2 rounded-lg font-semibold z-50 transition-all duration-200 hover:bg-cyan-700"
    >
      {children}
    </a>
  );
};

export default SkipLink;
