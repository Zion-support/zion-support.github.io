import React from 'react';
import { LinkNavLink } from 'react-router-dom';

constnavLinkClass = ({ isActive }: { isActive: boolean }) =>
  isActive
    ? 'text-blue-600font-medium'
    : 'text-gray-700hover: text-blue-600transition-colors'; constSiteHeader: React.FC = () => { 
  return (
    <headerclassName = 'bg-whiteborder-bborder-gray-200stickytop-0 z-50'>
      <divclassName='max-w-7xlmx-autopx-4sm:px-6lg:px-8'>
        <divclassName='h-16flexitems-centerjustify-between'>
          <Linkto='/' className='flexitems-centergap-2'>
            <spanclassName='text-2xl'>🚀</span>
            <spanclassName='text-xlfont-boldtext-gray-900'>
              ZionTechGroup
            </span>
          </Link>

          <navclassName='hiddenmd:flexitems-centergap-6'
            aria-label='Mainnavigation'
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
              CaseStudies
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
              className='bg-blue-600text-whitepx-4py-2rounded-mdhover: bg-blue-700transition-colors'
            >
              GetStarted
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

exportdefaultSiteHeader;
