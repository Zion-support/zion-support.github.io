<<<<<<< HEAD
=======
<<<<<<< HEAD
import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
=======
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
import React from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
<<<<<<< HEAD
  keywords?: string;
<<<<<<< HEAD
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
  noindex?: boolean;
  nofollow?: boolean;
  canonical?: string;
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
}

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { 
    name: 'Services', 
    href: '/services',
    submenu: [
      { name: 'AI Services', href: '/ai-services' },
      { name: 'IT Services', href: '/it-services' },
      { name: 'Micro SaaS', href: '/micro-saas' }
    ]
  },
  { name: 'Solutions', href: '/solutions' },
  { name: 'Partners', href: '/partners' },
  { name: 'Contact', href: '/contact' }
];

export default function Layout({ 
  children, 
  title = "Zion Tech Group - Leading AI & Technology Solutions",
  description = "Transform your business with cutting-edge AI solutions, cloud services, and technology consulting.",
  keywords = "AI solutions, cloud services, technology consulting, digital transformation"
}: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

=======
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
>>>>>>> 781a25673e534b82e65bf7d34ef223e1e93789fb
  ogImage?: string;
<<<<<<< HEAD
  canonical?: string;
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
=======
  noIndex?: boolean;
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
}

const Layout: React.FC<LayoutProps> = ({
  children,
<<<<<<< HEAD
<<<<<<< HEAD
  title = "Zion Tech Group - Leading Technology Solutions Provider",
  description = "Transform your business with cutting-edge AI, IT services, and micro SaaS solutions. Expert technology consulting and implementation services.",
  keywords = "technology solutions, AI services, IT consulting, micro SaaS, cloud computing, digital transformation, cybersecurity, software development",
  image,
  url,
  type = 'website',
  noindex = false,
  nofollow = false,
  canonical
}) => {
  return (
    <>
      <Head>
        <title>{title || 'Zion Tech Group'}</title>
        <meta name="description" content={description || 'Leading technology solutions provider'} />
        {keywords && <meta name="keywords" content={keywords} />}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* SEO Meta Tags */}
        <meta name="robots" content={noindex ? "noindex" : nofollow ? "nofollow" : "index, follow"} />
        <meta name="author" content="Zion Tech Group" />
        
        {/* Canonical URL */}
        {canonical && <link rel="canonical" href={canonical} />}
        
        {/* Open Graph */}
        <meta property="og:type" content={type} />
        <meta property="og:title" content={title || 'Zion Tech Group'} />
        <meta property="og:description" content={description || 'Leading technology solutions provider'} />
        <meta property="og:site_name" content="Zion Tech Group" />
        {image && <meta property="og:image" content={image} />}
        {url && <meta property="og:url" content={url} />}
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title || 'Zion Tech Group'} />
        <meta name="twitter:description" content={description || 'Leading technology solutions provider'} />
        {image && <meta name="twitter:image" content={image} />}
      </Head>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <main className="flex-grow">
=======
  title = 'Zion Tech Group - AI, IT & Micro SaaS Solutions',
  description = 'Leading provider of AI solutions, IT services, and Micro SaaS products. Transform your business with our innovative technology and intelligent automation.',
  keywords = 'AI solutions, IT services, Micro SaaS, artificial intelligence, cloud computing, cybersecurity, digital transformation, business automation',
  ogImage = '/og-image.jpg',
  canonical
}) => {
<<<<<<< HEAD
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`;

=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> 781a25673e534b82e65bf7d34ef223e1e93789fb
=======
  title = "Zion Tech Group",
  description = "Leading technology solutions provider",
  keywords = "technology, AI, IT, micro SaaS, solutions",
  canonical = "https://ziontechgroup.com",
  ogTitle,
  ogDescription,
  ogImage,
  noIndex = false,
}) => {
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
<<<<<<< HEAD
<<<<<<< HEAD
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="theme-color" content="#2563eb" />
        
        {/* Open Graph */}
=======
<<<<<<< HEAD
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <div className="flex-shrink-0">
                <Link href="/" className="text-2xl font-bold text-blue-600">
                  Zion Tech Group
                </Link>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex space-x-8">
                {navigation.map((item) => (
                  <div key={item.name} className="relative group">
                    {item.submenu ? (
                      <div className="relative">
                        <button
                          className="flex items-center text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                          onMouseEnter={() => setOpenSubmenu(item.name)}
                          onMouseLeave={() => setOpenSubmenu(null)}
                        >
                          {item.name}
                          <ChevronDown className="ml-1 h-4 w-4" />
                        </button>
                        
                        <AnimatePresence>
                          {openSubmenu === item.name && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 10 }}
                              className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50"
                              onMouseEnter={() => setOpenSubmenu(item.name)}
                              onMouseLeave={() => setOpenSubmenu(null)}
                            >
                              {item.submenu.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  href={subItem.href}
                                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>

              {/* Mobile menu button */}
              <div className="lg:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-gray-700 hover:text-blue-600 p-2"
                >
                  {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="lg:hidden border-t border-gray-200 py-4"
                >
                  {navigation.map((item) => (
                    <div key={item.name}>
                      {item.submenu ? (
                        <div className="py-2">
                          <div className="font-medium text-gray-700 mb-2">{item.name}</div>
                          <div className="pl-4 space-y-2">
                            {item.submenu.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className="block py-1 text-gray-600 hover:text-blue-600 transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          className="block py-2 font-medium text-gray-700 hover:text-blue-600 transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                  <div className="pt-4 border-t border-gray-200">
                    <Link
                      href="/contact"
                      className="block w-full text-center px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Get Started
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </header>

        {/* Main Content */}
        <main>
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Zion Tech Group</h3>
                <p className="text-gray-300">
                  Leading technology solutions provider specializing in AI, cloud infrastructure, and digital transformation.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Services</h3>
                <ul className="space-y-2">
                  <li><Link href="/ai-services" className="text-gray-300 hover:text-white">AI Services</Link></li>
                  <li><Link href="/it-services" className="text-gray-300 hover:text-white">IT Services</Link></li>
                  <li><Link href="/micro-saas" className="text-gray-300 hover:text-white">Micro SaaS</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Company</h3>
                <ul className="space-y-2">
                  <li><Link href="/about" className="text-gray-300 hover:text-white">About</Link></li>
                  <li><Link href="/solutions" className="text-gray-300 hover:text-white">Solutions</Link></li>
                  <li><Link href="/partners" className="text-gray-300 hover:text-white">Partners</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact</h3>
                <ul className="space-y-2">
                  <li><Link href="/contact" className="text-gray-300 hover:text-white">Contact Us</Link></li>
                  <li className="text-gray-300">info@ziontechgroup.com</li>
                  <li className="text-gray-300">+1 (555) 123-4567</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-300">
              <p>&copy; 2025 Zion Tech Group. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
=======
=======
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
        {canonical && <link rel="canonical" href={canonical} />}
        {ogTitle && <meta property="og:title" content={ogTitle} />}
        {ogDescription && <meta property="og:description" content={ogDescription} />}
        {ogImage && <meta property="og:image" content={ogImage} />}
        <meta property="og:url" content={canonical} />
<<<<<<< HEAD
>>>>>>> 781a25673e534b82e65bf7d34ef223e1e93789fb
        <meta property="og:type" content="website" />
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:url" content={canonical || 'https://ziontechgroup.com'} />
        <meta property="og:site_name" content="Zion Tech Group" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={fullTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
        
        {/* Canonical URL */}
        {canonical && <link rel="canonical" href={canonical} />}
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Zion Tech Group",
              "url": "https://ziontechgroup.com",
              "logo": "https://ziontechgroup.com/logo.png",
              "description": description,
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "364 E Main St STE 1008",
                "addressLocality": "Middletown",
                "addressRegion": "DE",
                "postalCode": "19709",
                "addressCountry": "US"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-302-464-0950",
                "contactType": "customer service",
                "email": "kleber@ziontechgroup.com"
              },
              "sameAs": [
                "https://twitter.com/ziontechgroup",
                "https://linkedin.com/company/ziontechgroup",
                "https://github.com/ziontechgroup"
              ]
            })
          }}
        />
      </Head>
      
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
=======
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children, title, description }) => {
  return (
    <>
      <Head>
        <title>{title || 'Zion Tech Group'}</title>
        <meta name="description" content={description || 'Leading technology solutions provider'} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="flex-1">
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
          {children}
        </main>
        <Footer />
      </div>
    </>
<<<<<<< HEAD
=======
        <meta property="og:type" content="website" />
        {noIndex && <meta name="robots" content="noindex, nofollow" />}
      </Head>
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
  );
};

<<<<<<< HEAD
export default Layout;
=======
export default Layout;
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
