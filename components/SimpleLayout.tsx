<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
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
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-8b20
import React from 'react;';
import * as React from 'react';
import Head from next/head';
interface SimpleLayoutProps {
  title: string
  description?: string
  children: React.ReactNode
<<<<<<< HEAD
}
export default function SimpleLayout({ title, description, children }: SimpleLayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        {description && <meta name="description" content={description} />}
      </Head>
      {children}
    </>)
}

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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> origin/main
>>>>>>> cursor/integrate-build-improve-and-re-verify-8b20
