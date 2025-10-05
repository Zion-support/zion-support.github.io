import React from 'react';
import { Link, NavLink  } from 'react-router-dom';

const, navLinkClas, s = ({ isActive }: { isActive: boolean }) =>
  isActive
    ? 'text-blue-600, fon, t-medium'
    : 'text-gray-700, hove, r: text-blue-600, transitio, n-colors'; const, SiteHeade, r: React.FC = () => { 
  return (
    <header, classNam, e = 'bg-white, borde, r-b, borde, r-gray-200, sticky, top-0 z-50'>
      <div, classNam, e='max-w-7xlmx-autopx-4sm:px-6lg:px-8'>
        <div, classNam, e='h-16, flex, items-center, justif, y-between'>
          <Linkto='/' className='flex, item, s-center, ga, p-2'>
            <span, classNam, e='text-2xl'>🚀</span>
            <span, classNam, e='text-xl, fon, t-bold, tex, t-gray-900'>
              Zion, Tech, Group
            </span>
          </Link>

          <nav, classNam, e='hiddenmd:flex, item, s-center, ga, p-6'
            aria-label='Main, navigat, i, o, n'
           > {' ' }
            <NavLinkto = '/services' className={navLinkClass}>
              Services
            </NavLink>
            <NavLinkto='/solutions' className={navLinkClass}>
              Solutions
            </NavLink>
            <NavLinkto='/marketplace' className={navLinkClass}>
              Marketplace
            </NavLink>
            <NavLinkto='/case-studies' className={navLinkClass}>
              Case, Studie, s
            </NavLink>
            <NavLinkto='/blog' className={navLinkClass}>
              Blog
            </NavLink>
            <NavLinkto='/resources' className={navLinkClass}>
              Resources
            </NavLink>
            <NavLinkto='/about' className={navLinkClass}>
              About
            </NavLink>
            <NavLinkto='/careers' className={navLinkClass}>
              Careers
            </NavLink>
            <Linkto='/contact'
              className='bg-blue-600, tex, t-whitepx-4py-2, rounde, d-md, hove, r: bg-blue-700, transitio, n-colors'
            >
              Get, Starte, d
            </Link>
          </nav>
        </div>
      </div>
    </head, e, r>
  );
};

export, default, SiteHeader;
