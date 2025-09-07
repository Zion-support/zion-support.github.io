<<<<<<< HEAD
<<<<<<< HEAD



>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
>>>>>>> origin/main
=======
=======
import React from 'react';
import EnhancedNavigation from './EnhancedNavigation';
import EnhancedFooter from './EnhancedFooter';
const EnhancedLayout = ({ children }) => {
=======

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import React from 'react';
import PropTypes from 'prop-types';
import EnhancedFooter from './EnhancedFooter';

<<<<<<< HEAD
const EnhancedLayout = ({ children }) => {
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  return (
    <div>
      <main>
        {children}
<<<<<<< HEAD
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
=======
<<<<<<< HEAD
      </main>;
      <EnhancedFooter />;
    </div>);
},
export default EnhancedLayout;
;
      <EnhancedNavigation />
      <main className="flex-1">
        {children}
      </main>
      <EnhancedFooter />
    </div>

  );
}
export default EnhancedLayout;

=======


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      </main>;
      <EnhancedFooter />;
    </div>);
},
export default EnhancedLayout;
;

<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
