import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4sm:px-6lg:px-8py-12">
        <div className="text-center">
          <h3 className="text-2xlfont-bold mb-4">Zion Tech Group</h3>
          <p className="text-gray-400 mb-4">
            Advanced AI & IT Solutions
          </p>
          <p className="text-gray-500 text-sm">
            © {currentYear} Zion Tech Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;