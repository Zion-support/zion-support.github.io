
'use client';
import React from 'react';

<<<<<<< HEAD
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {,
  title: 'Zion Tech Group - AI Solutions & IT Services',
  description: 'Leading provider of AI solutions, IT services, quantum computing, and autonomous systems for enterprise technology transformation.',
  keywords: 'AI solutions, IT services, quantum computing, autonomous systems, enterprise technology'}
=======

>>>>>>> cursor/fix-errors-and-merge-to-main-9f8a
export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
<<<<<<< HEAD
    <html lang="en"> </html><body className={inter.className}>{children}
      </body></body>
    </html>
  )


=======
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-9f8a
