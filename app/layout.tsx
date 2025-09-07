import type { Metadata } from 'next';
<<<<<<< HEAD
import { Inter } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Zion Tech Group - Leading AI and Technology Solutions',
  description: 'Zion Tech Group is a leading technology company specializing in AI, autonomous systems, quantum computing, and innovative business solutions. Transform your business with cutting-edge technology.',
  keywords: ['AI', 'artificial intelligence', 'technology', 'innovation', 'quantum computing', 'autonomous systems', 'business solutions', 'zion tech'],
  authors: [{ name: 'Zion Tech Group' }],
  creator: 'Zion Tech Group',
  publisher: 'Zion Tech Group',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://zion.app',
    title: 'Zion Tech Group - Leading AI and Technology Solutions',
    description: 'Transform your business with cutting-edge AI, cloud, and technology solutions.',
    siteName: 'Zion Tech Group',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zion Tech Group - Leading AI and Technology Solutions',
    description: 'Transform your business with cutting-edge AI, cloud, and technology solutions.',
  },
=======

export const metadata: Metadata = {
  title: 'Zion Tech Group - Leading Technology Solutions',
  description: 'Leading technology solutions provider specializing in AI, web development, mobile applications, cloud services, and digital transformation.',
>>>>>>> origin/resolved-merge-conflicts
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
<<<<<<< HEAD
      <body className={inter.className}>
        <div className="min-h-screen bg-white">
          {children}
        </div>
      </body>
    </html>
  );
}
=======
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
>>>>>>> origin/resolved-merge-conflicts
