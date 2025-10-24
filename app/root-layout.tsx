<<<<<<< HEAD
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ZionTechGroup - AI Solutions & Technology Services',
  description: 'Leading provider of AI solutions, IT services, quantum computing, autonomous systems, and enterprise technology.',
  keywords: 'AI solutions, IT services, quantum computing, autonomous systems, enterprise technology'
}
=======
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Zion Tech Group - AI Solutions & Enterprise Technology',
  description: 'Leading provider of AI solutions, IT services, quantum computing, and autonomous systems for modern enterprises.',
  keywords: 'AI solutions, IT services, quantum computing, autonomous systems, enterprise technology'
};
>>>>>>> origin/main

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
<<<<<<< HEAD
  )
=======
  );
>>>>>>> origin/main
}
