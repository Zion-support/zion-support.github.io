import React from "react";
import Link from "next/link";
import "./globals.css";

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
<<<<<<< HEAD
          <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">About</Link>
          <Link href="/services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</Link>
        </div>
=======
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
>>>>>>> afa49d7080af1fc4e06af0651d4252587e5bd5d3
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Zion Tech Group</h3>
            <p className="text-gray-400">
<<<<<<< HEAD
              Enterprise-grade AI, micro SaaS, and IT solutions that drive real business results.
=======
              Leading technology solutions provider specializing in AI,
              cybersecurity, cloud infrastructure, and digital transformation
              services.
>>>>>>> afa49d7080af1fc4e06af0651d4252587e5bd5d3
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
<<<<<<< HEAD
              <li><Link href="/services/ai" className="hover:text-white">AI Services</Link></li>
              <li><Link href="/services/micro-saas" className="hover:text-white">Micro SaaS</Link></li>
              <li><Link href="/services/it" className="hover:text-white">IT Services</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-400">hello@ziontechgroup.com</p>
            <p className="text-gray-400">+1 (555) 123-4567</p>
=======
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
>>>>>>> afa49d7080af1fc4e06af0651d4252587e5bd5d3
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
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
