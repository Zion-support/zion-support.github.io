<<<<<<< HEAD:app/about/layout.tsx
 
import React from 'react';
=======
>>>>>>> 180c76a08813769caa34f6922951c6a2af341d50:app/about/metadata.ts
import { Metadata } from 'next';

export const aboutMetadata: Metadata = {
  title: 'About Us - Zion Tech Group',
  description: 'Learn about Zion Tech Group, a leading provider of AI and IT solutions.',
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}