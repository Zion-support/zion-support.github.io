
import React from 'react';
import Analytics from './components/Analytics';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {return (
    <html lang="en">
      <head>
        <Analytics /}> </head>
      <body}>{children}
      
        </body>
    </html>
  );
}