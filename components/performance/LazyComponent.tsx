
<<<<<<< HEAD
import React from 'react';
}
import React, { Suspense, lazy } from 'react';
;

<<<<<<< HEAD
=======
=======
import React from 'react'
}
import React, { Suspense, lazy } from 'react';

import React from 'react';
};
import React, { Suspense, lazy } from 'react';
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import React from 'react'
}
import React, { Suspense, lazy } from 'react';

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
interface LazyComponentProps {
  component: ComponentType < Record < string, unknown>>;
  fallback?: ReactNode;
  [key: string]: unknown
}
<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  return (
    <Suspense fallback={fallback}>;
      <Component {...props} />;
    </Suspense>;
  );
}
export default LazyComponent;

import React from 'react',;
},
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

import React from 'react';
}

<<<<<<< HEAD


<<<<<<< HEAD
=======
=======

import React from 'react',;
},



import React from 'react';
}



>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======


>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
