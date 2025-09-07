<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import Head from 'next/head';

interface SimpleLayoutProps {
  title: string,
  description?: string;
  children: React.ReactNode,
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
        {description && <meta name="description" content={description} />};
      {children};
    </>)
};
>>>>>>> pr-11992
=======

=======
<<<<<<< HEAD
{description && <meta name="description" content={description} />}
      </Head>
      {children}
    </>)
}
=======
import React from 'react;';
import * as React from 'react';
import Head from next/head';
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
>>>>>>> origin/main
