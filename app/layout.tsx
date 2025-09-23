import React from 'react';

export const metadata = {
  title: 'Zion App',
  description: 'Production build layout for Zion App',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

