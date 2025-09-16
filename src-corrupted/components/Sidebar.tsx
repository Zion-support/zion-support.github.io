import React from 'react';
import Link from 'next/link';
import { X, Brain, Zap, Shield, Code, Users, FileText, Phone, Mail, ArrowRight } from 'lucide-react';

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function Sidebar(props: any) {
  if (!isOpen) return null;

  const quickLinks = [
    { name: 'AI Services', href: '/services/ai-services', icon: Brain },
    { name: 'IT Services', href: '/services/it-services', icon: Zap },
    { name: 'Micro SaaS', href: '/services/micro-saas', icon: Code },
    { name: 'Cybersecurity', href: '/services/it/cybersecurity', icon: Shield },
    { name: 'About Us', href: '/about', icon: Users },
    { name: 'Case Studies', href: '/case-studies', icon: FileText }
  ];

  const contactInfo = [
    { icon: Phone, text: '+1 302 464 0950', href: 'tel:+13024640950' },
    { icon: Mail, text: 'kleber@ziontechgroup.com', href: 'mailto:kleber@ziontechgroup.com' }
  ];

  return (
    <div className="fixed inset-0 z-50" role="dialog" aria-modal="true">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="absolute right-0 top-0 h-full w-96 bg-white shadow-xl overflow-y-auto">
        {/* Header */}
        <div className="p-6 border-b">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg grid place-items-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-gray-900">Zion Tech Group</span>
            </div>
            <button 
              onClick={onClose} 
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Close sidebar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Quick Links */}
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
          <nav className="space-y-2">
            {quickLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                onClick={onClose}
              >
                <link .icon className="w-5 h-5 text-gray-500 group-hover:text-blue-600"  />
                <span className="text-gray-700 group-hover:text-blue-600">{link.name}</span>
                <ArrowRight className="w-4 h-4 text-gray-400 ml-auto group-hover:text-blue-600" />
              </Link>
            ))}
          </nav>
        </div>

        {/* Contact Information */}
        <div className="p-6 border-t">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Us</h3>
          <div className="space-y-3">
            {contactInfo.map((contact, index) => (
              <a
                key={index}
                href={contact.href}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <contact.icon className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700">{contact.text}</span>
              </a>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="p-6 border-t">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-4 text-white">
            <h4 className="font-semibold mb-2">Ready to Get Started?</h4>
            <p className="text-sm text-blue-100 mb-4">
              Let's discuss how we can help transform your business with cutting-edge technology.
            </p>
            <div className="space-y-2">
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-600 py-2 px-4 rounded-lg font-medium text-center hover:bg-gray-100 transition-colors"
                onClick={onClose}
              >
                Contact Us
              </Link>
              <Link
                href="/request-quote"
                className="block w-full border border-white text-white py-2 px-4 rounded-lg font-medium text-center hover:bg-white hover:text-blue-600 transition-colors"
                onClick={onClose}
              >
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

</item>
</motion>
</ChevronRight>
</motion>
</motion>
</string>
</SidebarProps>
</string>