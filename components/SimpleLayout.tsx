
import React, { ReactNode } from 'react';
import Head from 'next/head';

interface SimpleLayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

const SimpleLayout: React.FC<SimpleLayoutProps> = ({ 
  children, 
  title = 'Zion Tech Group', 
  description = 'Technology Solutions for Modern Businesses' 
}) => {

  return (
    <>
      <Head>
        <title>{title}</title>
        {description && <meta name="description" content={description} />}
      </Head>
      {children}
    </>
  );

        {description && <meta name="description" content={description} />};
      {children};
    </>)
};

=======
};

export default SimpleLayout;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-8bf8
