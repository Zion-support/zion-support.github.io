import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  Github
} from 'lucide-react';
import Navigation from './Navigation';

interface LayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
  keywords?: string;
}

export default function Layout({ title, description, children, keywords }: LayoutProps) {
  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords || "AI services, IT solutions, micro SaaS, technology consulting, digital transformation"} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <Navigation />

        {/* Main Content */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white">
          <div className="container mx-auto px-4 py-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Company Info */}
              <div className="lg:col-span-1">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xl">Z</span>
                  </div>
                  <div>
                    <div className="text-xl font-bold">Zion Tech Group</div>
                    <div className="text-sm text-gray-400">Technology Solutions</div>
                  </div>
                </div>
                <p className="text-gray-400 mb-6">
                  Leading provider of AI services, IT solutions, and innovative micro SAAS platforms. 
                  We help businesses scale, automate, and innovate with cutting-edge technology.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Services */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Services</h3>
                <ul className="space-y-2">
                  <li><Link href="/ai-services" className="text-gray-400 hover:text-white transition-colors">AI Services</Link></li>
                  <li><Link href="/it-services" className="text-gray-400 hover:text-white transition-colors">IT Services</Link></li>
                  <li><Link href="/micro-saas" className="text-gray-400 hover:text-white transition-colors">Micro SaaS</Link></li>
                  <li><Link href="/blockchain" className="text-gray-400 hover:text-white transition-colors">Blockchain</Link></li>
                  <li><Link href="/iot" className="text-gray-400 hover:text-white transition-colors">IoT Solutions</Link></li>
                  <li><Link href="/cybersecurity" className="text-gray-400 hover:text-white transition-colors">Cybersecurity</Link></li>
                </ul>
              </div>

              {/* Solutions */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Solutions</h3>
                <ul className="space-y-2">
                  <li><Link href="/enterprise" className="text-gray-400 hover:text-white transition-colors">Enterprise</Link></li>
                  <li><Link href="/startup" className="text-gray-400 hover:text-white transition-colors">Startup</Link></li>
                  <li><Link href="/ecommerce" className="text-gray-400 hover:text-white transition-colors">E-commerce</Link></li>
                  <li><Link href="/industries/healthcare" className="text-gray-400 hover:text-white transition-colors">Healthcare</Link></li>
                  <li><Link href="/industries/finance" className="text-gray-400 hover:text-white transition-colors">Finance</Link></li>
                  <li><Link href="/industries/education" className="text-gray-400 hover:text-white transition-colors">Education</Link></li>
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <Phone className="w-5 h-5 mr-3 mt-1 text-blue-400" />
                    <div>
                      <div className="text-gray-400">Phone</div>
                      <a href="tel:+13024640950" className="text-white hover:text-blue-400">
                        +1 302 464 0950
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="w-5 h-5 mr-3 mt-1 text-blue-400" />
                    <div>
                      <div className="text-gray-400">Email</div>
                      <a href="mailto:kleber@ziontechgroup.com" className="text-white hover:text-blue-400">
                        kleber@ziontechgroup.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 mr-3 mt-1 text-blue-400" />
                    <div>
                      <div className="text-gray-400">Address</div>
                      <div className="text-white">
                        364 E Main St STE 1008<br />
                        Middletown DE 19709
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800 mt-12 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="text-gray-400 text-sm mb-4 md:mb-0">
                  © 2025 Zion Tech Group. All rights reserved.
                </div>
                <div className="flex space-x-6 text-sm">
                  <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                  <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                  <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors">
                    Cookie Policy
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}