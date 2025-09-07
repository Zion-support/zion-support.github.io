<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import Head from 'next/head';

=======
{description && <meta name="description" content={description} />}
      </Head>
      {children}
    </>)
}
=======
<<<<<<< HEAD
import React from 'react';
import Head from 'next/head';

<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
=======
>>>>>>> origin/chore/fix-lint-and-merge
interface SimpleLayoutProps {
  children: ReactNode;
  title?: string;
<<<<<<< HEAD
=======
=======



import React from 'react;';
import * as React from 'react';

<<<<<<< HEAD
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
import React from 'react;';
import * as React from 'react';
import Head from next/head';
interface SimpleLayoutProps {,;
  title: string,;
  description?: string,;
  children: React && React.ReactNode;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


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
import React from 'react;';
import * as React from 'react';
import Head from next/head';
interface SimpleLayoutProps {
  title: string
  description?: string
  children: React.ReactNode
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}
<<<<<<< HEAD
export default /**
 * SimpleLayout - Function description
 */
<<<<<<< HEAD
function SimpleLayout() {
}
=======
<<<<<<< HEAD
function SimpleLayout() {
}
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

{description && <meta name="description" content={description} />}
      </Head>
      {children}
    </>)
}
=======

const SimpleLayout: React.FC<SimpleLayoutProps> = ({ children, title }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {title && (
          <h1 className="text-3xl font-bold text-gray-900 mb-8">{title}</h1>
        )}
        {children}
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default SimpleLayout;
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
export default SimpleLayout;
>>>>>>> origin/chore/fix-lint-and-merge
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
