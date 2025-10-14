import React from 'react';
import { Helmet } from 'react-helmet-async';

const EnhancedFooter: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Enhanced Footer - Zion Tech Group</title>
        <meta name="description" content="Professional enhanced footer services by Zion Tech Group." />
      </Helmet>
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">Zion Tech Group</h3>
            <p className="text-gray-400">Advanced AI & IT Solutions</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default EnhancedFooter;