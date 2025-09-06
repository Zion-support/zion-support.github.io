import React from 'react';
import Link from 'next/link';
import './globals.css';

export const metadata = {
  title: 'Zion Tech Group — AI, Micro SaaS, and IT Services',
  description: 'Enterprise-grade AI, micro SaaS, and IT solutions. Build faster with Zion Tech Group.',
  keywords: 'AI services, micro SaaS, IT services, cloud migration, DevOps, SRE, enterprise software',
  authors: [{ name: 'Zion Tech Group' }],
  openGraph: {
    title: 'Zion Tech Group — AI, Micro SaaS, and IT Services',
    description: 'Enterprise-grade AI, micro SaaS, and IT solutions. Build faster with Zion Tech Group.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zion Tech Group — AI, Micro SaaS, and IT Services',
    description: 'Enterprise-grade AI, micro SaaS, and IT solutions. Build faster with Zion Tech Group.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <header className="bg-black/20 backdrop-blur-sm border-b border-white/10">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <Link href="/" className="text-2xl font-bold text-white">
                Zion Tech Group
              </Link>
              <div className="hidden md:flex space-x-8">
                <Link href="/about" className="text-white hover:text-blue-300 transition-colors">
                  About
                </Link>
                <Link href="/services" className="text-white hover:text-blue-300 transition-colors">
                  Services
                </Link>
                <Link href="/contact" className="text-white hover:text-blue-300 transition-colors">
                  Contact
                </Link>
              </div>
            </div>
          </nav>
        </header>
        <main className="flex-1">
          {children}
        </main>
        <footer className="bg-black/20 backdrop-blur-sm border-t border-white/10 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <p>&copy; 2024 Zion Tech Group. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
<<<<<<< HEAD
=======
}
>>>>>>> cursor/automate-test-improve-and-merge-code-ac88
}