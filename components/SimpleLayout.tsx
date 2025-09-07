import React from 'react';
import Head from 'next/head';

interface SimpleLayoutProps {
  title: string,
  description?: string;
  children: React.ReactNode,
}
export default /**
 * SimpleLayout - Function description
 */
function SimpleLayout() {
}

{description && <meta name="description" content={description} />}
      </Head>
      {children}
    </>)
}
