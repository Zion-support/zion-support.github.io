import React from 'react';
import './globals.css';
import EnhancedNavigation from '../components/EnhancedNavigation';

export const metadata = {
  title: 'Zion Tech Group - AI & Technology Solutions',
  description: 'Transform your business with cutting-edge AI, cloud infrastructure, and micro SaaS solutions.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <EnhancedNavigation />
        {children}
      </body>
    </html>
  );
}

