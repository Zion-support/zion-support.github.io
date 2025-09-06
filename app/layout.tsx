<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 2f757ef2558c16475e88c96592bc2d691c331671
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
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
    url: 'https://ziontechgroup.com',
    siteName: 'Zion Tech Group',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zion Tech Group — AI, Micro SaaS, and IT Services',
    description: 'Enterprise-grade AI, micro SaaS, and IT solutions. Build faster with Zion Tech Group.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

function Header() {
  return (
    <header className="border-b border-gray-200 sticky top-0 z-50 bg-white shadow-sm">
      <nav className="flex items-center justify-between px-4 py-3 max-w-6xl mx-auto">
        <Link href="/" className="font-bold text-lg text-gray-900 hover:text-blue-600 transition-colors">
          Zion Tech Group
        </Link>
        <div className="hidden md:flex gap-6">
          <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
            About
          </Link>
          <Link href="/services" className="text-gray-700 hover:text-blue-600 transition-colors">
            Services
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
            Contact
          </Link>
        </div>
        <button className="md:hidden p-2" aria-label="Toggle menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
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
              Leading technology solutions provider specializing in AI, cybersecurity, 
              cloud infrastructure, and digital transformation services.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/services/ai-services" className="hover:text-white transition-colors">AI Solutions</Link></li>
              <li><Link href="/services/cybersecurity" className="hover:text-white transition-colors">Cybersecurity</Link></li>
              <li><Link href="/services/cloud-infrastructure" className="hover:text-white transition-colors">Cloud Infrastructure</Link></li>
              <li><Link href="/services/blockchain" className="hover:text-white transition-colors">Blockchain</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/news" className="hover:text-white transition-colors">News</Link></li>
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50">
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
import React from 'react'; import Link from 'next / link'; import './globals.css'; export const metadata = { title: 'Zion Tech Group — AI, Micro SaaS, and IT Services', description: 'Enterprise - grade AI, micro SaaS, and IT solutions. Build faster with Zion Tech Group.', keywords: 'AI services, micro SaaS, IT services, cloud migration, DevOps, SRE, enterprise software', authors: [{ name: 'Zion Tech Group' }], open_graph: { title: 'Zion Tech Group — AI, Micro SaaS, and IT Services', description: 'Enterprise - grade AI, micro SaaS, and IT solutions. Build faster with Zion Tech Group.', url: 'https: site_name: 'Zion Tech Group', locale: 'en_US', type: 'website', }, twitter: { card: 'summary_large_image', title: 'Zion Tech Group — AI, Micro SaaS, and IT Services', description: 'Enterprise - grade AI, micro SaaS, and IT solutions. Build faster with Zion Tech Group.', }, robots: { index: true, follow: true, google_bot: { index: true, follow: true, 'max - video - preview': -1, 'max - image - preview': 'large', 'max - snippet': -1, }, }, } /**
 * Header - Function description
 */
function Header() { return ( <header className="border - b border - gray - 200 sticky top - 0 z - 50 bg - white shadow - sm"> <nav className="flex items - center justify - between px - 4 py - 3 max - w-6xl mx - auto"> <Link href="/" className="font - bold text - lg text - gray - 900 hover:text - blue - 600 transition - colors"> Zion Tech Group </Link> <div className="hidden md:flex gap - 6"> <Link href="/about" className="text - gray - 700 hover:text - blue - 600 transition - colors">About</Link> <Link href="/services" className="text - gray - 700 hover:text - blue - 600 transition - colors">Services</Link> <Link href="/contact" className="text - gray - 700 hover:text - blue - 600 transition - colors">Contact</Link> </div> {} <button className="md:hidden p - 2" aria - label="Toggle menu"> <svg className="w - 6 h - 6" fill="none" stroke="current_color" view_box="0 0 24 24"> <path stroke_linecap="round" stroke_linejoin="round" stroke_width={2} d="M4 6h16M4 12h16M4 18h16" /> </svg> </button> </nav> </header> )} /**
 * Footer - Function description
 */
function Footer() { return ( <footer className="border - t border - gray - 200 mt - 10 py - 6 bg - gray - 50"> <div className="max - w-6xl mx - auto px - 4"> <div className="grid grid - cols - 1 md:grid - cols - 3 gap - 6"> <div> <h3 className="font - semibold text - gray - 900 mb - 3">Services</h3> <div className="space - y-2"> <Link href="/services" className="block text - gray - 600 hover:text - blue - 600 transition - colors">All Services</Link> <Link href="/services / micro - saas" className="block text - gray - 600 hover:text - blue - 600 transition - colors">Micro SaaS</Link> <Link href="/services / ai - services" className="block text - gray - 600 hover:text - blue - 600 transition - colors">AI Services</Link> <Link href="/services / it - services" className="block text - gray - 600 hover:text - blue - 600 transition - colors">IT Services</Link> </div> </div> <div> <h3 className="font - semibold text - gray - 900 mb - 3">Company</h3> <div className="space - y-2"> <Link href="/" className="block text - gray - 600 hover:text - blue - 600 transition - colors">Home</Link> <Link href="/contact" className="block text - gray - 600 hover:text - blue - 600 transition - colors">Contact</Link> <a href="https: </div> </div> <div> <h3 className="font - semibold text - gray - 900 mb - 3">Contact Info</h3> <div className="text - sm text - gray - 600 space - y-1"> <div > Mobile: +1 302 464 0950</div> <div > Email: <a href="mailto:kleber@ziontechgroup.com" className="hover:text - blue - 600 transition - colors">kleber@ziontechgroup.com</a></div> <div > Address: 364 E Main St STE 1008 < br />Middletown DE 19709</div> </div> </div> </div> <div className="border - t border - gray - 200 mt - 6 pt - 4 text - xs text - gray - 500 text - center"> © {new Date ().getFullYear ()} Zion Tech Group. All rights reserved. </div> </div> </footer> )} export default /**
 * RootLayout - Function description
 */
function RootLayout() { return ( <html lang="en"> <body className="min - h-screen bg - white text - gray - 900"> <Header /> <main className="max - w-6xl mx - auto px - 4 py - 6 min - h-screen"> {children} </main> <Footer /> </body> </html> )}
>>>>>>> d9a4214406946307ebf253d8e717bd531b4be976
=======
}
>>>>>>> 2f757ef2558c16475e88c96592bc2d691c331671
=======
}
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
