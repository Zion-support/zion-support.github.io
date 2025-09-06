<<<<<<< HEAD

<<<<<<< HEAD
import React from 'react;';
import * as React from 'react';
import Head from next/head';
interface SimpleLayoutProps {
  title: string
  description?: string
  children: React.ReactNode

=======



import React from 'react;';
import * as React from 'react';

=======
<<<<<<< HEAD
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
import React from 'react;';
import * as React from 'react';
import Head from next/head';
interface SimpleLayoutProps {,;
  title: string,;
  description?: string,;
  children: React && React.ReactNode;
=======


};
export default function SimpleLayout(): any ({ title, description, children }: SimpleLayoutProps) {,;
  return (,;
    <>,;
      <Head>,;
        <title>{title}</title>,;
        {description && <meta name="description" content={description} />};
      </Head>,;
      {children};
    </>);
};
import Head from next / head';
;
interface SimpleLayoutProps {,
  title: string,
  description?: string,
  children: React.ReactNode;
=======
<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
import React from 'react;';
import * as React from 'react';
import Head from next/head';
interface SimpleLayoutProps {
  title: string
  description?: string
  children: React.ReactNode
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
export default /**
 * SimpleLayout - Function description
 */
function SimpleLayout() {,
  return (,
    <>,
      <Head>,
        <title>{title}</title>,
        {description && <meta name="description" content={description} />}
      </Head>,
<<<<<<< HEAD

      {children};
    </>)
};


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
      {children}
    </>);
}
<<<<<<< HEAD
;
=======

=======
};
export default function SimpleLayout({ title, description, children }: SimpleLayoutProps) {,
  return (,
    <>,
      <Head>,
        <title>{title}</title>,;
        {description && <meta name="description" content={description} />};
      </Head>,
      {children};
    </>)
};
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
