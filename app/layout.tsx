<<<<<<< HEAD
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] });

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
<<<<<<< HEAD
=======
import React from "react";
import Link from "next/link";
import "./globals.css";
>>>>>>> 50a1590683ade09c2b82559a54c039a45bcbfcee

export const metadata = {
  title: "Zion Tech Group — AI, Micro SaaS, and IT Services",
  description:
    "Enterprise-grade AI, micro SaaS, and IT solutions. Build faster with Zion Tech Group.",
  keywords:
    "AI services, micro SaaS, IT services, cloud migration, DevOps, SRE, enterprise software",
  authors: [{ name: "Zion Tech Group" }],
  openGraph: {
title: "Zion Tech Group — AI, Micro SaaS, and IT Services",
    description:
      "Enterprise-grade AI, micro SaaS, and IT solutions. Build faster with Zion Tech Group.",
    url: "https://ziontechgroup.com",
    siteName: "Zion Tech Group",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zion Tech Group — AI, Micro SaaS, and IT Services",
    description:
      "Enterprise-grade AI, micro SaaS, and IT solutions. Build faster with Zion Tech Group.",
  },
  robots: {
    index: true,
    follow: true,
googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

<<<<<<< HEAD
=======
=======
function Header() {
  return (
    <header className="border-b border-gray-200 sticky top-0 z-50 bg-white shadow-sm">
      <nav className="flex items-center justify-between px-4 py-3 max-w-6xl mx-auto">
        <Link
          href="/"
          className="font-bold text-lg text-gray-900 hover:text-blue-600 transition-colors"
        >
          Zion Tech Group
        </Link>
        <div className="hidden md:flex gap-6">
          <Link
            href="/about"
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            About
          </Link>
          <Link
            href="/services"
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Contact
          </Link>
        </div>
        <button className="md:hidden p-2" aria-label="Toggle menu">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Zion Tech Group</h3>
            <p className="text-gray-400">
              Leading technology solutions provider specializing in AI,
              cybersecurity, cloud infrastructure, and digital transformation
              services.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link
                  href="/services/ai-services"
                  className="hover:text-white transition-colors"
                >
                  AI Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/services/cybersecurity"
                  className="hover:text-white transition-colors"
                >
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link
                  href="/services/cloud-infrastructure"
                  className="hover:text-white transition-colors"
                >
                  Cloud Infrastructure
                </Link>
              </li>
              <li>
                <Link
                  href="/services/blockchain"
                  className="hover:text-white transition-colors"
                >
                  Blockchain
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="hover:text-white transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/news"
                  className="hover:text-white transition-colors"
                >
                  News
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="text-gray-400">
              <p>+1-302-464-0950</p>
              <p>kleber@ziontechgroup.com</p>
              <p>364 E Main St STE 1008</p>
              <p>Middletown, DE 19709</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Zion Tech Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
>>>>>>> 50a1590683ade09c2b82559a54c039a45bcbfcee
  title: 'Zion Tech Group - Leading AI and Technology Solutions',
  description: 'Zion Tech Group is a leading technology company specializing in AI, autonomous systems, quantum computing, and innovative business solutions.',
  keywords: 'AI, artificial intelligence, technology solutions, cloud computing, cybersecurity, data analytics, digital transformation',
  authors: [{ name: 'Zion Tech Group' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Zion Tech Group - Leading AI and Technology Solutions',
    description: 'Leading technology company specializing in AI, autonomous systems, quantum computing, and innovative business solutions.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zion Tech Group - Leading AI and Technology Solutions',
    description: 'Leading technology company specializing in AI, autonomous systems, quantum computing, and innovative business solutions.',
  },
<<<<<<< HEAD
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#000000'
>>>>>>> cursor/automate-test-improve-and-merge-code-0ffd
=======
>>>>>>> 50a1590683ade09c2b82559a54c039a45bcbfcee
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-white flex flex-col">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
=======
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-black text-white antialiased`}>
        <main className="min-h-screen">
          {children}
        </main>
>>>>>>> cursor/automate-test-improve-and-merge-code-0ffd
=======
    <html lang="en">
<<<<<<< HEAD
}
}

      <body className="min-h-screen bg-gray-50">
        <Header />
        <main>{children}</main>
        <Footer />
>>>>>>> 50a1590683ade09c2b82559a54c039a45bcbfcee
      </body>
    </html>
  );
}


}
=======
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-c074
