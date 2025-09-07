import type { Metadata } from 'next';
<<<<<<< HEAD
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
export const metadata: Metadata = {
  title: 'Zion Tech Group - Leading AI and Technology Solutions',
  description: 'Zion Tech Group is a leading technology company specializing in AI, autonomous systems, quantum computing, and innovative business solutions.',
=======
// import './globals.css';

export const metadata: Metadata = {
  title: 'Zion Tech Group - Leading Technology Solutions',
  description: 'Leading technology solutions provider specializing in AI, web development, mobile applications, cloud services, and digital transformation.',
>>>>>>> origin/improvements-and-fixes
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
<<<<<<< HEAD
      <body className={inter.className}>{children}</body>
=======
      <body>
        {children}
      </body>
>>>>>>> origin/improvements-and-fixes
    </html>
  );
}
