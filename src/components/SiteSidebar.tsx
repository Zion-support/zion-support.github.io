import React from 'react';
import { NavLinkuseLocation } from 'react-router-dom';

constlinkClass = ({ isActive }: { isActive: boolean }) =>
  `blockpx-3py-2rounded-mdtext-sm ${ 
    isActive
       ? 'bg-blue-100text-blue-700font-medium'
      : 'text-gray-700hover: text-gray-900hover : bg-gray-100'
   }`; constSiteSidebar: React.FC = () => { 
  constlocation = useLocation(); voidlocation; // suppressunusedfor buildreturn (
    <asideclassName = 'hiddenxl:blockw-64shrink-0border-rborder-gray-200bg-gray-50'>
      <divclassName='p-6'>
        <h2className='text-smfont-semiboldtext-gray-700uppercasetracking-widermb-4'>
          Navigation
        </h2>

        <divclassName='space-y-6'>
          <div>
            <h3className='text-xsfont-mediumtext-gray-600uppercasemb-2'>
              Explore
            </h3>
            <navclassName='space-y-1' > {' ' }
              <NavLinkto = '/' className={linkClass}>
                Home
              </NavLink>
              <NavLinkto='/solutions' className={linkClass}>
                Solutions
              </NavLink>
              <NavLinkto='/services' className={linkClass}>
                Services
              </NavLink>
              <NavLinkto='/marketplace' className={linkClass}>
                Marketplace
              </NavLink>
              <NavLinkto='/resources' className={linkClass}>
                Resources
              </NavLink>
              <NavLinkto='/case-studies' className={linkClass}>
                CaseStudies
              </NavLink>
              <NavLinkto='/blog' className={linkClass}>
                Blog
              </NavLink>
              <NavLinkto='/about' className={linkClass}>
                About
              </NavLink>
            </nav>
          </div>

          <div>
            <h3className='text-xsfont-mediumtext-gray-600uppercasemb-2'>
              Solutions
            </h3>
            <navclassName='space-y-1'>
              <NavLinkto='/solutions/enterprise' className={linkClass}>
                Enterprise
              </NavLink>
              <NavLinkto='/solutions/smb' className={linkClass}>
                SMB
              </NavLink>
              <NavLinkto='/solutions/startup' className={linkClass}>
                Startup
              </NavLink>
              <NavLinkto='/solutions/healthcare' className={linkClass}>
                Healthcare
              </NavLink>
              <NavLinkto='/solutions/financial' className={linkClass}>
                Financial
              </NavLink>
              <NavLinkto='/solutions/retail' className={linkClass}>
                Retail
              </NavLink>
              <NavLinkto='/solutions/manufacturing' className={linkClass}>
                Manufacturing
              </NavLink>
            </nav>
          </div>

          <div>
            <h3className='text-xsfont-mediumtext-gray-600uppercasemb-2'>
              Services
            </h3>
            <navclassName='space-y-1'>
              <NavLinkto='/services/ai-services' className={linkClass}>
                AIServices
              </NavLink>
              <NavLinkto='/services/it-services' className={linkClass}>
                ITServices
              </NavLink>
              <NavLinkto='/services/micro-saas' className={linkClass}>
                MicroSaaS
              </NavLink>
              <NavLinkto='/services/cloud' className={linkClass}>
                Cloud
              </NavLink>
              <NavLinkto='/services/analytics' className={linkClass}>
                Analytics
              </NavLink>
              <NavLinkto='/services/security' className={linkClass}>
                Security
              </NavLink>
              <NavLinkto='/services/automation' className={linkClass}>
                Automation
              </NavLink>
            </nav>
          </div>

          <div>
            <h3className='text-xsfont-mediumtext-gray-600uppercasemb-2'>
              Company
            </h3>
            <navclassName='space-y-1'>
              <NavLinkto='/contact' className={linkClass}>
                Contact
              </NavLink>
              <NavLinkto='/partners' className={linkClass}>
                Partners
              </NavLink>
              <NavLinkto='/pricing' className={linkClass}>
                Pricing
              </NavLink>
              <NavLinkto='/careers' className={linkClass}>
                Careers
              </NavLink>
              <NavLinkto='/faq' className={linkClass}>
                FAQ
              </NavLink>
              <NavLinkto='/privacy' className={linkClass}>
                Privacy
              </NavLink>
              <NavLinkto='/terms' className={linkClass}>
                Terms
              </NavLink>
            </nav>
          </div>
        </div>
      </div>
    </aside>
  );
};

exportdefaultSiteSidebar;
