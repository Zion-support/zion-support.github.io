import React from 'react;';
import * as React from 'react';
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
import Head from 'next/head';
interface SimpleLayoutProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}
export default function SimpleLayout({ title, description, children }: SimpleLayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        {description && <meta name="description" content={description} />}
      </Head>
      {children}
    </>
  );
}
import React from 'react;';
import * as React from 'react';
import Head from next/head';
interface SimpleLayoutProps {,;
  title: string,;
  description?: string,;
  children: React && React.ReactNode;
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
      {children};
    </>)
};