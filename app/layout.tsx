import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from "next/link";
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Zion Tech Group - AI, Micro SaaS & Enterprise IT Solutions',
    template: '%s | Zion Tech Group'
  },
  description: 'Leading provider of AI solutions, micro SaaS development, and enterprise IT services. Transform your business with cutting-edge technology and expert consulting.',
  keywords: 'AI solutions, micro SaaS, enterprise IT, cloud migration, DevOps, cybersecurity, business automation, digital transformation',
  authors: [{ name: 'Zion Tech Group' }],
  creator: 'Zion Tech Group',
  publisher: 'Zion Tech Group',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://ziontechgroup.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ziontechgroup.com',
    title: 'Zion Tech Group - AI, Micro SaaS & Enterprise IT Solutions',
    description: 'Leading provider of AI solutions, micro SaaS development, and enterprise IT services. Transform your business with cutting-edge technology.',
    siteName: 'Zion Tech Group',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Zion Tech Group - AI, Micro SaaS & Enterprise IT Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zion Tech Group - AI, Micro SaaS & Enterprise IT Solutions',
    description: 'Leading provider of AI solutions, micro SaaS development, and enterprise IT services.',
    images: ['/og-image.jpg'],
    creator: '@ziontechgroup',
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
  verification: {
    google: 'your-google-verification-code',
  },
  category: 'technology',
  classification: 'Business Technology Services',
  referrer: 'origin-when-cross-origin',
  colorScheme: 'light',
  themeColor: '#000000',
};

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
              cybersecurity, cloud infrastructure, and digital transformation.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/services/ai" className="hover:text-white transition-colors">AI Services</Link></li>
              <li><Link href="/services/micro-saas" className="hover:text-white transition-colors">Micro SaaS</Link></li>
              <li><Link href="/services/it" className="hover:text-white transition-colors">IT Services</Link></li>
              <li><Link href="/services/consulting" className="hover:text-white transition-colors">Consulting</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-400">
              <p>+1 302 464 0950</p>
              <p>kleber@ziontechgroup.com</p>
              <p>Delaware, United States</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Zion Tech Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}