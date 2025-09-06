<<<<<<< HEAD
<<<<<<< HEAD


=======

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import React from 'react';
}
import React, { Suspense, lazy } from 'react';
;
<<<<<<< HEAD

=======

import React from 'react'
}
import React, { Suspense, lazy } from 'react';

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
<<<<<<< HEAD
import React from 'react';
};
import React, { Suspense, lazy } from 'react';

=======
import React from 'react'
}
import React, { Suspense, lazy } from 'react';
<<<<<<< HEAD
=======


<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
interface LazyComponentProps {
  component: ComponentType < Record < string, unknown>>;
  fallback?: ReactNode;
  [key: string]: unknown
}
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
import React from 'react';
};
import React, { Suspense, lazy } from 'react';
interface LazyComponentProps {;
  component: ComponentType<Record<string, unknown>>;
  fallback?: ReactNode;
  [key: string]: unknown,;
}
const LazyComponent: React.FC<LazyComponentProps> = ({ ;
  component: Component, ;
  fallback = <div className="animate-pulse bg-gray-200 h-32 rounded" />,;
  ...props ;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  return (
    <Suspense fallback={fallback}>;
      <Component {...props} />;
    </Suspense>;
  );
}
export default LazyComponent;
<<<<<<< HEAD
<<<<<<< HEAD

import React from 'react',;
},

import React from 'react';
}

=======



=======
import React from 'react',;
},

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

import React from 'react';
}



=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
const LazyComponent: React.FC < LazyComponentProps> = ({
  component: Component,
  fallback = <div className="animate - pulse bg - gray - 200 h - 32 rounded" />,
  ...props;
  return (
    <Suspense fallback={fallback}>;
      <Component {...props} />;
    </Suspense>);
}
;
export default LazyComponent;
import React from 'react',
},
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
<<<<<<< HEAD
<<<<<<< HEAD

import React from 'react';
};
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
import React from 'react',;
},

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

import React from 'react';
}

<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
