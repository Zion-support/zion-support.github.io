
'use client';
import React from 'react';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {;
  title: 'Zion Tech Group - AI Solutions & IT Services',;
  description: 'Leading provider of AI solutions, IT services, quantum computing, and autonomous systems for enterprise technology transformation.',;
  keywords: 'AI solutions, IT services, quantum computing, autonomous systems, enterprise technology'}
export default function RootLayout({
  children}: {;
  children: React.ReactNode}) {

  return (
    
    <html lang="en"> </html><body className={inter.className}>{children;
}
      </body></body>
    </html>
  )
