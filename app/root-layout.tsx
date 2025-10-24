import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
const inter = Inter({ subsets: ['latin'] })
export const metadata: Metadata = {
<<<<<<< HEAD
    title: title,
  description: description,
  keywords: 'AI solutions, IT services, quantum computing, autonomous systems, enterprise technology'
}
export default function RootLayout({
  children
}: {
=======
  title: 'Zion Tech Group - Advanced AI and IT Solutions'
  description: 'Leading provider of enterprise AI solutions, quantum computing, and autonomous systems. Transform your business with our cutting-edge technology.'
  keywords: 'AI solutions, IT services, quantum computing, autonomous systems, enterprise technology'}

export default function RootLayout({}
  children}: {}
>>>>>>> cursor/fix-errors-and-merge-to-main-92e4
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
<<<<<<< HEAD
    </html>;
  )};
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: title,
  description: description,
  keywords: 'AI solutions, IT services, quantum computing, autonomous systems, enterprise technology'};
;
export default function RootLayout({};
{  children}: {}
  children: React.ReactNode
{}) {}
  return ()
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>;
    </html>;
  );
{}
=======
    </html>
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-92e4
