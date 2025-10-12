import React from 'react';

const Footer: React.FC = () => {
  const currentYear= new Date().getFullYe a r();

return (
    <footerclassName="bg-gray-900text-white">
      <div className="max-w-7xl mx-autop x-4sm:px-6lg:px-8py-12">
        <div className="text-center">
          <h3 className="text-2xlfont-boldmb-4">Zion Tech Group</h3>
          <p className="text-gray-400mb-4">
            Advanced AI & IT Solutions;
          </p>
          <p className="text-gray-500text-sm">
            © {currentYe a r} Zion Tech Group. All rights reserved.;
          </p>
        </div>
    </footer>
  );
};

export default Footer;