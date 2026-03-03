
import React, { memo } from 'react';
import Link from 'next/link';
import { ArrowRight, Phone, MapPin, Sparkles, Mail } from 'lucide-react';

interface FooterProps {
  className?: string;
  children?: React.ReactNode;
}

const Footer: React.FC<FooterProps> = memo(({ className = '', children }) => {
  const currentYear = new Date().getFullYear();
  const aiServices = [
    { name: 'AI-Powered DevOps', href: '/ai-powered-devops' },
    { name: 'AI Email Analyzer', href: '/ai-powered-email-analyzer' },
    { name: 'E-commerce Analytics Pro', href: '/ecommerce-analytics-pro' },
    { name: 'Legal Document Manager', href: '/legal-document-manager' },
    { name: 'Medical Records Manager', href: '/medical-records-manager' },
    { name: 'Online Learning Platform', href: '/online-learning-platform' },
    { name: 'Property Management AI', href: '/property-management-ai' },
    { name: 'Supply Chain Optimizer', href: '/supply-chain-optimizer' }
  ];

  const itServices = [
    { name: 'Cybersecurity Audit', href: '/it-services/cybersecurity-audit' }
  ];

  const resourceLinks = [
    { name: 'Solutions', href: '/solutions' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'About', href: '/about' },
  ];

  return (
    <footer className={`relative bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border-t border-purple-500/20 ${className}`}>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-purple-900/5 to-transparent" />
      
      {children || (
        <>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="mb-12 rounded-2xl border border-purple-500/30 bg-gradient-to-r from-purple-900/35 via-fuchsia-900/25 to-pink-900/35 p-6 sm:p-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-purple-200">
                    Plan your next release
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold text-white">
                    Need a practical AI roadmap for your team?
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm text-slate-200">
                    Work with Zion specialists to scope priorities, align architecture, and launch
                    measurable outcomes faster.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
                >
                  Book Discovery Call
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
              <div className="space-y-5">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 blur-sm opacity-75" />
                    <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 shadow-lg">
                      <Sparkles className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <span className="text-xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                    Zion Tech Group
                  </span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Leading provider of AI-powered solutions and IT services for modern businesses.
                  Transform your operations with cutting-edge technology.
                </p>
                <div className="flex flex-wrap gap-2">
                  {resourceLinks.slice(0, 3).map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="rounded-lg border border-slate-700 bg-slate-900/70 px-3 py-1.5 text-xs font-medium text-gray-300 transition hover:border-purple-400 hover:text-white"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">Popular AI Services</h3>
                <ul className="space-y-2.5">
                  {aiServices.map((service) => (
                    <li key={service.href}>
                      <Link 
                        href={service.href} 
                        className="text-gray-400 hover:text-purple-400 transition-colors text-sm inline-block hover:translate-x-1 duration-200"
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">Company & Resources</h3>
                <ul className="space-y-2.5">
                  {resourceLinks.map((link) => (
                    <li key={link.href}>
                      <Link 
                        href={link.href}
                        className="text-gray-400 hover:text-purple-400 transition-colors text-sm inline-block hover:translate-x-1 duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                  {itServices.map((service) => (
                    <li key={service.href}>
                      <Link
                        href={service.href}
                        className="text-gray-400 hover:text-purple-400 transition-colors text-sm inline-block hover:translate-x-1 duration-200"
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">Contact</h3>
                <div className="space-y-3">
                  <a
                    href="tel:+15551234567"
                    className="flex items-start space-x-3 text-gray-400 text-sm group"
                  >
                    <Phone className="h-4 w-4 mt-0.5 text-purple-400 group-hover:text-purple-300 transition-colors flex-shrink-0" />
                    <span className="group-hover:text-gray-300 transition-colors">+1 (555) 123-4567</span>
                  </a>
                  <a
                    href="mailto:info@ziontechgroup.com"
                    className="flex items-start space-x-3 text-gray-400 text-sm group"
                  >
                    <Mail className="h-4 w-4 mt-0.5 text-purple-400 group-hover:text-purple-300 transition-colors flex-shrink-0" />
                    <span className="group-hover:text-gray-300 transition-colors break-all">info@ziontechgroup.com</span>
                  </a>
                  <Link href="/contact" className="flex items-start space-x-3 text-gray-400 text-sm group">
                    <MapPin className="h-4 w-4 mt-0.5 text-purple-400 group-hover:text-purple-300 transition-colors flex-shrink-0" />
                    <span className="group-hover:text-gray-300 transition-colors">123 Tech Street, Silicon Valley, CA</span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-12 border-t border-purple-500/20 pt-8">
              <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
                <p className="text-gray-400 text-sm">
                  © {currentYear} Zion Tech Group. All rights reserved.
                </p>
                <div className="flex space-x-6 text-sm">
                  <Link href="/terms" className="text-gray-400 hover:text-purple-400 transition-colors">
                    Terms of Service
                  </Link>
                  <Link href="/privacy" className="text-gray-400 hover:text-purple-400 transition-colors">
                    Privacy Policy
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;