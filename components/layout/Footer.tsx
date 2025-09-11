import React from 'react';
import Link from 'next/link';
import { Mail, Smartphone, Building, Globe, Zap, Shield, Users } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const footerSections = [
    {
      title: 'Revolutionary Services',
      links: [
        { name: 'Quantum AI Platform', href: '/quantum-ai-cognitive' },
        { name: 'Autonomous Manufacturing', href: '/autonomous-manufacturing' },
        { name: 'Quantum Cybersecurity', href: '/quantum-cybersecurity' },
        { name: 'Space Technology', href: '/space-technology' },
        { name: 'Biotech AI', href: '/biotech-ai' },
        { name: 'Quantum Trading', href: '/quantum-financial-trading' }
      ]
    },
    {
      title: 'Technology Solutions',
      links: [
        { name: 'AI & Machine Learning', href: '/services?category=AI%20%26%20Machine%20Learning' },
        { name: 'Blockchain & DeFi', href: '/services?category=Blockchain%20%26%20DeFi' },
        { name: 'IoT & Smart Cities', href: '/services?category=IoT%20%26%20Smart%20Cities' },
        { name: 'Cybersecurity', href: '/services?category=Cybersecurity' },
        { name: 'Cloud Infrastructure', href: '/services?category=Cloud%20Infrastructure' },
        { name: 'Digital Transformation', href: '/solutions' }
      ]
    },
    {
      title: 'Industries',
      links: [
        { name: 'Financial Services', href: '/solutions#financial' },
        { name: 'Healthcare', href: '/solutions#healthcare' },
        { name: 'Manufacturing', href: '/solutions#manufacturing' },
        { name: 'Government', href: '/solutions#government' },
        { name: 'Education', href: '/solutions#education' },
        { name: 'Retail & E-commerce', href: '/solutions#retail' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Careers', href: '/careers' },
        { name: 'News & Updates', href: '/news' },
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'Research', href: '/research' },
        { name: 'Support', href: '/support' }
      ]
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black/95 backdrop-blur-2xl border-t border-white/20 relative overflow-hidden">
      {/* Futuristic Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(34,197,94,0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.05),transparent_50%)]" />
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 animate-grid-flow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-2xl">Z</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Zion Tech Group</h3>
                <p className="text-gray-400 text-sm">Revolutionary Technology Solutions</p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed max-w-md">
              Pioneering the future with cutting-edge AI, quantum computing, and revolutionary technology solutions that transform industries and empower businesses worldwide.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Smartphone className="w-5 h-5 text-blue-400" />
                <span className="text-sm">{contactInfo.mobile}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-sm">{contactInfo.email}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Building className="w-5 h-5 text-blue-400" />
                <span className="text-sm">{contactInfo.address}</span>
              </div>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-6">
              <h4 className="text-lg font-semibold text-white">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <button
                onClick={scrollToTop}
                className="text-gray-400 hover:text-white text-sm transition-colors flex items-center space-x-1"
              >
                <Zap className="w-4 h-4" />
                <span>Back to Top</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;