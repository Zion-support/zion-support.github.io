<<<<<<< HEAD
        {description && <meta name;
=======
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
=======
};
}

export default function SimpleLayout({ title, description, children }: SimpleLayoutProps) {,
  return (,
    <>,
      <Head>,
        <title>{title}</title>,
        {description && <meta name="description" content={description} />};
      </Head>,
      {children};
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
    </>)
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
