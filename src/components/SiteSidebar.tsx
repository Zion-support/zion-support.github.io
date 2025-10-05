import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const linkClass = ({ isActive }: { isActive: boolean }) =>
  `block px-3 py-2 rounded-md text-sm ${
    isActive
      ? 'bg-blue-100 text-blue-700 font-medium'
      : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
  }`;

const SiteSidebar: React.FC = () => {
  const location = useLocation();
  void location; // suppress unused for build

  return (
    <aside className='hidden xl:block w-64 shrink-0 border-r border-gray-200 bg-gray-50'>
      <div className='p-6'>
        <h2 className='text-sm font-semibold text-gray-700 uppercase tracking-wider mb-4'>
          Navigation
        </h2>

        <div className='space-y-6'>
          <div>
            <h3 className='text-xs font-medium text-gray-600 uppercase mb-2'>
              Explore
            </h3>
            <nav className='space-y-1'>
              <NavLink to='/' className={linkClass}>
                Home
              </NavLink>
              <NavLink to='/solutions' className={linkClass}>
                Solutions
              </NavLink>
              <NavLink to='/services' className={linkClass}>
                Services
              </NavLink>
              <NavLink to='/marketplace' className={linkClass}>
                Marketplace
              </NavLink>
              <NavLink to='/resources' className={linkClass}>
                Resources
              </NavLink>
              <NavLink to='/case-studies' className={linkClass}>
                Case Studies
              </NavLink>
              <NavLink to='/blog' className={linkClass}>
                Blog
              </NavLink>
              <NavLink to='/about' className={linkClass}>
                About
              </NavLink>
            </nav>
          </div>

          <div>
            <h3 className='text-xs font-medium text-gray-600 uppercase mb-2'>
              Solutions
            </h3>
            <nav className='space-y-1'>
              <NavLink to='/solutions/enterprise' className={linkClass}>
                Enterprise
              </NavLink>
              <NavLink to='/solutions/smb' className={linkClass}>
                SMB
              </NavLink>
              <NavLink to='/solutions/startup' className={linkClass}>
                Startup
              </NavLink>
              <NavLink to='/solutions/healthcare' className={linkClass}>
                Healthcare
              </NavLink>
              <NavLink to='/solutions/financial' className={linkClass}>
                Financial
              </NavLink>
              <NavLink to='/solutions/retail' className={linkClass}>
                Retail
              </NavLink>
              <NavLink to='/solutions/manufacturing' className={linkClass}>
                Manufacturing
              </NavLink>
            </nav>
          </div>

          <div>
            <h3 className='text-xs font-medium text-gray-600 uppercase mb-2'>
              Services
            </h3>
            <nav className='space-y-1'>
              <NavLink to='/services/ai-services' className={linkClass}>
                AI Services
              </NavLink>
              <NavLink to='/services/it-services' className={linkClass}>
                IT Services
              </NavLink>
              <NavLink to='/services/micro-saas' className={linkClass}>
                Micro SaaS
              </NavLink>
              <NavLink to='/services/cloud' className={linkClass}>
                Cloud
              </NavLink>
              <NavLink to='/services/analytics' className={linkClass}>
                Analytics
              </NavLink>
              <NavLink to='/services/security' className={linkClass}>
                Security
              </NavLink>
              <NavLink to='/services/automation' className={linkClass}>
                Automation
              </NavLink>
            </nav>
          </div>

          <div>
            <h3 className='text-xs font-medium text-gray-600 uppercase mb-2'>
              Company
            </h3>
            <nav className='space-y-1'>
              <NavLink to='/contact' className={linkClass}>
                Contact
              </NavLink>
              <NavLink to='/partners' className={linkClass}>
                Partners
              </NavLink>
              <NavLink to='/pricing' className={linkClass}>
                Pricing
              </NavLink>
              <NavLink to='/careers' className={linkClass}>
                Careers
              </NavLink>
              <NavLink to='/faq' className={linkClass}>
                FAQ
              </NavLink>
              <NavLink to='/privacy' className={linkClass}>
                Privacy
              </NavLink>
              <NavLink to='/terms' className={linkClass}>
                Terms
              </NavLink>
            </nav>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SiteSidebar;
