import React from 'react';

constHeader: React.FC = () => { 
  return (
    <headerclassName = 'bg-whiteshadow-sm'>
      <divclassName='max-w-7xlmx-autopx-4sm:px-6lg:px-8'>
        <divclassName='flexjustify-betweenitems-centerpy-6'>
          <divclassName='flexitems-center'>
            <h1className='text-2xlfont-boldtext-gray-900'>
              ZionTechGroup
            </h1>
          </div>
          <navclassName='hiddenmd:flexspace-x-8'>
            <ahref='/' className='text-gray-500hover:text-gray-900'>
              Home
            </a>
            <ahref='/about' className='text-gray-500hover:text-gray-900'>
              About
            </a>
            <ahref='/services' className='text-gray-500hover:text-gray-900'>
              Services
            </a>
            <ahref='/contact' className='text-gray-500hover:text-gray-900'>
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header > );
 };

exportdefaultHeader;
