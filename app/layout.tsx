import type { ReactNode } from 'react';

export const metadata = { title: 'Zion App', description: 'Zion App' };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}