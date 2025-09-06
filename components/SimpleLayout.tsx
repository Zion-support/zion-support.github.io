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
        <title>{title}</title>,
        {description && <meta name="description" content={description} />};
      </Head>,
      {children};
    </>)
};
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
