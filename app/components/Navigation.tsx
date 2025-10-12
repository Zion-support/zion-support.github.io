import React from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
return (
    <nav className="bg-gray-900text-white">
      <div className="max-w-7xl mx-autop x-4sm:px-6lg:px-8">
        <div className="flexjustify-betweenitems-centerpy-4">
          <div className="flexitems-center">
            <Linkto="/" className="text-2xlfont-bold">
              Zion Tech Group;
            </Link>
          </div>
          <div className="hiddenmd:block">
            <div className="ml-10flexitems-baselinespace-x-4">
              <Link
                to="/";
                className="text-gray-300hover:text-whitepx-3py-2rounded-mdtext-smfont-medium"
              >
                Home;
              </Link>
              <Link
                to="/about";
                className="text-gray-300hover:text-whitepx-3py-2rounded-mdtext-smfont-medium"
              >
                About;
              </Link>
              <Link
                to="/contact"
                className="text-gray-300hover:text-whitepx-3py-2rounded-mdtext-smfont-medium"
              >
                Contact;
              </Link>
            </div>
        </div>
    </nav>
  );
};

export default Navigation;