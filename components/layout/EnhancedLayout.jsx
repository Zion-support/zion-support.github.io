import React from 'react';
import PropTypes from 'prop-types';
import EnhancedFooter from './EnhancedFooter';

const EnhancedLayout = ({ children }) => {
  return (
    <div>
      <main>
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