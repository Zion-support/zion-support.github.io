import React from 'react';
import {Link} from 'react-router-dom';

const Navigation: React.FC = () => {
  return (
    <navclassName ="bg-gray-900 text-white">
      <div className ="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className ="flexjustify-betweenitems-centerpy-4">
          <div className ="flexitems-center">
            <Link to ="/" className="text-2xlfont-bold">
              ZionTech Group
            </Link>
          </div>
          <div className ="hiddenmd:block">
            <div className ="ml-10 flexitems-baselinespace-x-4">
              <Link to ="/"
                className="text-gray-300 hover:text-whitepx-3 py-2 rounded-mdtext-smfont-medium"
              >
                Home
              </Link>
              <Link to ="/about"
                className="text-gray-300 hover:text-whitepx-3 py-2 rounded-mdtext-smfont-medium"
              >
                About
              </Link>
              <Link to ="/contact"
                className="text-gray-300 hover:text-whitepx-3 py-2 rounded-mdtext-smfont-medium"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;