import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
<<<<<<< HEAD
  title: 'Zion Tech Group - AI Solutions & IT Services',
  description: 'Leading provider of AI solutions, IT services, quantum computing, and autonomous systems for enterprise technology transformation.',
=======
  title: 'Zion Tech Group - AI Solutions & Enterprise Technology',
  description: 'Leading provider of AI solutions, IT services, quantum computing, and autonomous systems for modern enterprises.',
>>>>>>> origin/main
  keywords: 'AI solutions, IT services, quantum computing, autonomous systems, enterprise technology'
};

export default function RootLayout({
<<<<<<< HEAD
  children,
}: {
  children: React.ReactNode;
=======
  children
}: {
  children: React.ReactNode
>>>>>>> origin/main
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
