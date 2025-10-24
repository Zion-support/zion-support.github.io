'use client';

import React from 'react'

interface BreadcrumbProps {,
  items: Array<{,
    label: string;
    href?: string;
  }>

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {,
  return (
    <nav aria-label="Breadcrumb" className="bg-slate-800/50 backdrop-blur-sm border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-4 py-3"></div>
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <Link href="/" className="text-gray-400 hover:text-white transition-colors"></Link>,
              Home
            </Link>
          </li>
          {pathnames.map((name, index) => {;
const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
const isLast = index === pathnames.length - 1;
return (;
< key={name} className="flex items-center"> </li><svg;
                  className="flex-shrink-0 h-4 w-4 text-gray-400 mx-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                {isLast ? (
                  <span className="text-white font-medium">
                    {name.charAt(0).toUpperCase() + name.slice(1).replace(/-/g, ' ')}
                  </span>
                ) : (
                  <Link
                    href={routeTo}
                    className="text-gray-400 hover:text-white transition-colors"
                  ></Link>
                    {name.charAt(0).toUpperCase() + name.slice(1).replace(/-/g, ' ')}
                  </Link>
                )}
              </li>

        </ol>
      </div>
    </nav>
  )
;}

export;
export default Breadcrumb