import React from 'react';

constFooter: React.FC = () => { 
  return (
    <footerclassName = 'bg-gray-800text-white'>
      <divclassName='max-w-7xlmx-autopx-4sm:px-6lg:px-8py-12'>
        <divclassName='gridgrid-cols-1md:grid-cols-4gap-8'>
          <div>
            <h3className='text-lgfont-semiboldmb-4'>ZionTechGroup</h3>
            <pclassName='text-gray-300'>
              AdvancedAIand ITSolutionsfor modernbusinesses.
            </p>
          </div>
          <div>
            <ulclassName='space-y-2text-gray-300'>
              <li>AISolutions</li>
              <li>ITInfrastructure</li>
              <li>CloudServices</li>
            </ul>
          </div>
          <div>
            <ulclassName='space-y-2text-gray-300'>
              <li>AboutUs</li>
            </ul>
          </div>
          <div>
            <pclassName='text-gray-300'>
              Email: info@ziontechgroup.com
              <br />
              Phone: +1 (302) 464-0950
            </p>
          </div>
        </div>
        <divclassName = 'border-tborder-gray-700mt-8pt-8text-centertext-gray-300'>
          <p>&copy; 2025ZionTech Group. Allrightsreserved.</p>
        </div>
      </div>
    </footer > );
 };

exportdefaultFooter;
