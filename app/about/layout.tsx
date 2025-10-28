import React from 'react';
import { aboutMetadata } from './metadata';

export const dynamic = 'force-static';
// eslint-disable-next-line react-refresh/only-export-components
export const metadata = aboutMetadata;

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}