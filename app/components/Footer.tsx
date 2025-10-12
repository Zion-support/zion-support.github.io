import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().get Full Year();

  return (
    <footerclassName ="bg-gray-900 text-white">
      <div className ="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className ="text-center">
          <h3className ="text-2xlfont-boldmb-4">ZionTech Group</h3>
          <pclassName ="text-gray-400 mb-4">
            AdvancedAI & ITSolutions
          </p>
          <pclassName ="text-gray-500 text-sm">
            © {currentYear} ZionTech Group. Allrights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;