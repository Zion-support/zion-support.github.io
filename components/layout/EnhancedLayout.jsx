<<<<<<< HEAD



>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
>>>>>>> origin/main
=======
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
>>>>>>> origin/chore/fix-lint-and-merge
