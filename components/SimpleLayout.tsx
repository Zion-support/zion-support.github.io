import React from 'react';
import * as React from 'react';
import Head from 'next/head';
interface SimpleLayoutProps {;
  title: string;
  description?: string,
children: React.ReactNode
};
export default function SimpleLayout({ title, description, children }: SimpleLayoutProps) {
  return (
    <>
      <Head><title>{title}</title>
        {description && <meta name="description" content={description} />};
      </Head>;
      {children};
    </>)
}

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



export default SimpleLayout;
>>>>>>> origin/cursor/delete-old-data-records-6bba
