import type { AppProps } from 'next/app';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const services = [
    { name: 'AI Services', href: '/ai-services' },
    { name: 'IT Services', href: '/it-services' },
    { name: 'Micro SaaS', href: '/micro-saas' },
    { name: 'All Services', href: '/services' },
  ];

  const products = [
    { name: 'All Products', href: '/products' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Guides', href: '/guides' },
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <div className="text-xl font-bold text-gray-800">Zion Tech Group</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/">
              <span className="text-gray-600 hover:text-blue-600 transition-colors">Home</span>
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                Services
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              <div 
                className={`absolute top-full left-0 mt-2 w-64 bg-white shadow-xl rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ${servicesOpen ? 'opacity-100 visible' : ''}`}
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                {services.map((service) => (
                  <Link
                    key={service.name}
                    href={service.href}
                  >
                    <span className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                      {service.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Products Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                Products
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-xl rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {products.map((product) => (
                  <Link
                    key={product.name}
                    href={product.href}
                  >
                    <span className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                      {product.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/about"><span className="text-gray-600 hover:text-blue-600 transition-colors">
              About
            </span></Link>
            
            <Link href="/blog"><span className="text-gray-600 hover:text-blue-600 transition-colors">
              Blog
            </span></Link>
            
            <Link href="/talent"><span className="text-gray-600 hover:text-blue-600 transition-colors">
              Careers
            </span></Link>
            
            <Link href="/contact"><span className="text-gray-600 hover:text-blue-600 transition-colors">
              Contact
            </span></Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link href="/contact"><span className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
              Get Started
            </span></Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <div className="space-y-2">
              <Link href="/"><span className="block py-2 text-gray-600 hover:text-blue-600">
                Home
              </span></Link>
              
              <div className="space-y-2">
                <div className="font-semibold text-gray-800 py-2">Services</div>
                {services.map((service) => (
                  <Link
                    key={service.name}
                    href={service.href}
                  >
                    <span className="block py-2 pl-4 text-gray-600 hover:text-blue-600">
                      {service.name}
                    </span>
                  </Link>
                ))}
              </div>
              
              <div className="space-y-2">
                <div className="font-semibold text-gray-800 py-2">Products</div>
                {products.map((product) => (
                  <Link
                    key={product.name}
                    href={product.href}
                  >
                    <span className="block py-2 pl-4 text-gray-600 hover:text-blue-600">
                      {product.name}
                    </span>
                  </Link>
                ))}
              </div>
              
              <Link href="/about"><span className="block py-2 text-gray-600 hover:text-blue-600">
                About
              </span></Link>
              
              <Link href="/blog"><span className="block py-2 text-gray-600 hover:text-blue-600">
                Blog
              </span></Link>
              
              <Link href="/talent"><span className="block py-2 text-gray-600 hover:text-blue-600">
                Careers
              </span></Link>
              
              <Link href="/contact"><span className="block py-2 text-gray-600 hover:text-blue-600">
                Contact
              </span></Link>
              
              <Link href="/contact"><span className="block py-2 bg-blue-600 text-white text-center rounded-lg font-semibold">
                Get Started
              </span></Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'AI Services', href: '/ai-services' },
    { name: 'IT Services', href: '/it-services' },
    { name: 'Micro SaaS', href: '/micro-saas' },
    { name: 'All Services', href: '/services' },
  ];

  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Careers', href: '/talent' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <div className="text-xl font-bold">Zion Tech Group</div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">Leading technology solutions provider helping businesses transform their digital presence with cutting-edge AI, cloud architecture, and innovative development services.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}><Link href={service.href}><span className="text-gray-300 hover:text-white transition-colors">{service.name}</span></Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li><Link href="/products"><span className="text-gray-300 hover:text-white transition-colors">All Products</span></Link></li>
              <li><Link href="/pricing"><span className="text-gray-300 hover:text-white transition-colors">Pricing</span></Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.name}><Link href={item.href}><span className="text-gray-300 hover:text-white transition-colors">{item.name}</span></Link></li>
              ))}
              <li><Link href="/privacy"><span className="text-gray-300 hover:text-white transition-colors">Privacy Policy</span></Link></li>
              <li><Link href="/terms"><span className="text-gray-300 hover:text-white transition-colors">Terms of Service</span></Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="text-white">kleber@ziontechgroup.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <p className="text-white">+1 302 464 0950</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div>
                <p className="text-sm text-gray-400">Address</p>
                <p className="text-white">364 E Main St STE 1008, Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">&copy; {currentYear} Zion Tech Group. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy"><span className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</span></Link>
              <Link href="/terms"><span className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</span></Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Zion Tech Group - Leading Technology Solutions Provider</title>
        <meta name="description" content="Zion Tech Group provides cutting-edge technology solutions for modern businesses. From AI development to cloud architecture, we help companies transform their digital presence." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{Component && <Component {...pageProps} />}</main>
        <Footer />
      </div>
    </>
  );
}
