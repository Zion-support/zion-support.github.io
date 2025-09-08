import React from 'react';
import EnhancedNavigation2025 from "./layout/EnhancedNavigation2025";
import EnhancedFooter from "./layout/EnhancedFooter";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <EnhancedNavigation2025 />
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-800 border-t border-slate-700">
        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-5 gap-8 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">Z</span>
                </div>
                <span className="text-white font-bold text-xl">Zion Tech Group</span>
              </div>
              
              <p className="text-slate-300 mb-6 max-w-md">
                Leading technology solutions provider specializing in digital transformation, 
                AI, cloud architecture, and cybersecurity. We help businesses innovate and thrive.
              </p>
              
              <div className="flex space-x-4">
                {[
                  { icon: Facebook, href: '#', label: 'Facebook' },
                  { icon: Twitter, href: '#', label: 'Twitter' },
                  { icon: Linkedin, href: '#', label: 'LinkedIn' },
                  { icon: Instagram, href: '#', label: 'Instagram' }
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-slate-700 hover:bg-cyan-500 rounded-lg flex items-center justify-center text-slate-300 hover:text-white transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-slate-300 hover:text-cyan-400 transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white font-semibold mb-6">Services</h3>
              <ul className="space-y-3">
                {serviceCategories.slice(0, 6).map((service) => (
                  <li key={service.name}>
                    <Link
                      href={service.href}
                      className="text-slate-300 hover:text-cyan-400 transition-colors duration-200"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div>
              <h3 className="text-white font-semibold mb-6">Products</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/products#micro-saas"
                    className="text-slate-300 hover:text-cyan-400 transition-colors duration-200"
                  >
                    Micro SAAS Solutions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products#ai-services"
                    className="text-slate-300 hover:text-cyan-400 transition-colors duration-200"
                  >
                    AI-Powered Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products#cloud-solutions"
                    className="text-slate-300 hover:text-cyan-400 transition-colors duration-200"
                  >
                    Cloud Infrastructure
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products#security-solutions"
                    className="text-slate-300 hover:text-cyan-400 transition-colors duration-200"
                  >
                    Cybersecurity
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-8 mb-12 p-8 bg-slate-700/50 rounded-2xl">
            {[
              {
                icon: Phone,
                title: 'Phone',
                details: ['+1 302 464 0950'],
                color: 'from-blue-500 to-cyan-600'
              },
              {
                icon: Mail,
                title: 'Email',
                details: ['kleber@ziontechgroup.com'],
                color: 'from-purple-500 to-pink-600'
              },
              {
                icon: MapPin,
                title: 'Office',
                details: ['364 E Main St STE 1008', 'Middletown DE 19709'],
                color: 'from-green-500 to-emerald-600'
              }
            ].map((contact, index) => (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 bg-gradient-to-r ${contact.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <contact.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-white font-semibold mb-3">{contact.title}</h4>
                {contact.details.map((detail, detailIndex) => (
                  <p key={detailIndex} className="text-slate-300 text-sm">
                    {detail}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-slate-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-slate-400 text-sm mb-4 md:mb-0">
                © 2024 Zion Tech Group. All rights reserved.
              </div>
              
              <div className="flex items-center space-x-6 text-sm text-slate-400">
                <Link href="/privacy" className="hover:text-cyan-400 transition-colors duration-200">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="hover:text-cyan-400 transition-colors duration-200">
                  Terms of Service
                </Link>
                <Link href="/cookies" className="hover:text-cyan-400 transition-colors duration-200">
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-40"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6 mx-auto" />
      </button>
    </div>
  );
}
