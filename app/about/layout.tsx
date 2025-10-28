import React from 'react';
import { Metadata } from 'next';

export const aboutMetadata: Metadata = {
      title: 'About Us - Zion Tech Group',
  description: 'Learn about Zion Tech Group a leading provider of AI and IT solutions.' };

export default function AboutLayout({ children }: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}