import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  isActive
    ? 'text-blue-600 font-medium'
    : 'text-gray-700 hover:text-blue-600 transition-colors';

const SiteHeader: React.FC = () => {
  return (
    <header className='bg-white border-b border-gray-200 sticky top-0 z-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='h-16 flex items-center justify-between'>
          <Link to='/' className='flex items-center gap-2'>
            <span className='text-2xl'>🚀</span>
            <span className='text-xl font-bold text-gray-900'>
              Zion Tech Group
            </span>
          </Link>

          <nav
            className='hidden md:flex items-center gap-6'
            aria-label='Main navigation'
          >
            <NavLink to='/services' className={navLinkClass}>
              Services
            </NavLink>
            <NavLink to='/solutions' className={navLinkClass}>
              Solutions
            </NavLink>
            <NavLink to='/marketplace' className={navLinkClass}>
              Marketplace
            </NavLink>
            <NavLink to='/case-studies' className={navLinkClass}>
              Case Studies
            </NavLink>
            <NavLink to='/blog' className={navLinkClass}>
              Blog
            </NavLink>
            <NavLink to='/resources' className={navLinkClass}>
              Resources
            </NavLink>
            <NavLink to='/about' className={navLinkClass}>
              About
            </NavLink>
            <NavLink to='/careers' className={navLinkClass}>
              Careers
            </NavLink>
            <Link
              to='/contact'
              className='bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors'
            >
              Get Started
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
