



import React from 'react;';
import * as React from 'react';

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


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
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React from 'react;';
import * as React from 'react';
import Head from next/head';
interface SimpleLayoutProps {
  title: string
  description?: string
  children: React.ReactNode
<<<<<<< HEAD
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
      {children}
    </>);
}

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
=======

      {children};
    </>)
};


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
