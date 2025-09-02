<<<<<<< HEAD
import React from 'react';
import Link from 'next/link';

export const EnhancedFooter: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Zion Tech Group</h3>
            <p className="text-gray-400">
              Leading technology solutions provider specializing in AI, cybersecurity, 
              cloud infrastructure, and digital transformation services.
            </p>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/services/ai-services" className="hover:text-white">AI Services</Link></li>
              <li><Link href="/services#cybersecurity" className="hover:text-white">Cybersecurity</Link></li>
              <li><Link href="/services#cloud" className="hover:text-white">Cloud Services</Link></li>
              <li><Link href="/solutions/digital-transformation" className="hover:text-white">Digital Transformation</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/about" className="hover:text-white">About</Link></li>
              <li><Link href="/careers" className="hover:text-white">Careers</Link></li>
              <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
              <li><Link href="/case-studies" className="hover:text-white">Case Studies</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white">Terms of Service</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Zion Tech Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
=======
import React from 'react'; import { Link    } from 'react-router-dom'; import { motion    } from 'framer-motion'; import { Globe, Phone, Mail, MapPin, Linkedin, Twitter, Facebook, Instagram, Github, ArrowRight, Heart, Shield, Zap, Users    } from 'lucide-react'; const EnhancedFooter: React.FC = () => { const currentYear = new Date().getFullYear(); const footerSections = [{ title: 'Services', links: [ { name: 'AI Solutions', href: '/services/ai-services' }, { name: 'IT & Security', href: '/services/it-services' }, { name: 'Blockchain & Web3', href: '/services/blockchain-services' }, { name: 'Sustainability', href: '/services/sustainability' }, { name: 'Healthcare Tech', href: '/services/healthcare-tech' }, { name: 'Edge Computing', href: '/services/edge-computing' } ] }, { title: 'Solutions', links: [{ name: 'Enterprise', href: '/solutions/enterprise' }, { name: 'Startups', href: '/solutions/startups' }, { name: 'Healthcare', href: '/solutions/healthcare' }, { name: 'Financial Services', href: '/solutions/financial' }, { name: 'Manufacturing', href: '/solutions/manufacturing' }, { name: 'Education', href: '/solutions/education' } ] }, { title: 'Company', links: [{ name: 'About Us', href: '/about' }, { name: 'Our Team', href: '/about/team' }, { name: 'Careers', href: '/careers' }, { name: 'Partners', href: '/partners' }, { name: 'Press', href: '/press' }, { name: 'Case Studies', href: '/case-studies' } ] }, { title: 'Resources', links: [{ name: 'Blog', href: '/blog' }, { name: 'Documentation', href: '/docs' }, { name: 'API Reference', href: '/api' }, { name: 'Developer Tools', href: '/developer' }, { name: 'Training', href: '/training' }, { name: 'Support', href: '/support' } ] } ]; const socialLinks = [ { name: 'LinkedIn', href: 'https:
>>>>>>> origin/main
