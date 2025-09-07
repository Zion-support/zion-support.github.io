<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91
import React from 'react';
import Head from 'next/head';
interface SimpleLayoutProps {
  title: string,
  description?: string;
  children: React.ReactNode,
}
<<<<<<< HEAD
export default /**
 * SimpleLayout - Function description
 */
function SimpleLayout() {
}
return (,;
    <>,
      <Head>,
        <title>{title}</title>,
        {description && <meta name="description" content={description} />}"
      </Head>,
=======
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
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91
