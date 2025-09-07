import React from 'react';
import PropTypes from 'prop-types';
import EnhancedNavigation from './EnhancedNavigation';
import EnhancedFooter from './EnhancedFooter';

const EnhancedLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <EnhancedNavigation />
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
      <EnhancedFooter />
    </div>
  );
};

EnhancedLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default EnhancedLayout;
