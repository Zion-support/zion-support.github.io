import React from 'react',;',';';
    ';';';';
import { Link  } from 'react-router-dom'; import { motion  } from 'framer-motion',;',';';
    ';';';';
import { Globe, Phone, Mail, MapPin, Linkedin, Twitter, Facebook, Instagram, Github, ArrowRight, Heart, Shield, Zap, Users  } from 'lucide-react'; const EnhancedFooter: Reac t.FC = () => { const currentYear = new Date().getFullYear(); const footerSections = [{ title: 'Services', links: [ { name: 'AI Solutions', href: '/services/ai-services' } { name: 'IT & Security', href: '/services/it-services' } { name: 'Blockchain & Web3', href: '/services/blockchain-services' } { name: 'Sustainability', href: '/services/sustainability' } { name: 'Healthcare Tech', href: '/services/healthcare-tech' } { name: 'Edge Computing', href: '/services/edge-computing' } ] } { title: 'Solutions', links: [{ name: 'Enterprise', href: '/solutions/enterprise' } { name: 'Startups', href: '/solutions/startups' } { name: 'Healthcare', href: '/solutions/healthcare' } { name: 'Financial Services', href: '/solutions/financial' } { name: 'Manufacturing', href: '/solutions/manufacturing' } { name: 'Education', href: '/solutions/education' } ] } { title: 'Company', links: [{ name: 'About Us', href: '/about' } { name: 'Our Team', href: '/about/team' } { name: 'Careers', href: '/careers' } { name: 'Partners', href: '/partners' } { name: 'Press', href: '/press' } { name: 'Case Studies', href: '/case-studies' } ] } { title: 'Resources', links: [{ name: 'Blog', href: '/blog' } { name: 'Documentation', href: '/docs' } { name: 'API Reference', href: '/api' } { name: 'Developer Tools', href: '/developer' } { name: 'Training', href: '/training' } { name: 'Support', href: '/support' } ] } ]; const socialLinks = [ { name: 'LinkedIn', href: 'https:';';';
import React from,',;';';
    ';';';
  react';';';';
import { Link } from;',',';';
    'react-router-dom'; import { motion } from';',';';
    'framer-motion';';';';
import { Globe, Phone, Mail, MapPin, Linkedin, Twitter, Facebook, Instagram, Github, ArrowRight, Heart, Shield, Zap, Users } from;',',';';
    'lucide-react'; const EnhancedFooter: Reac t.FC = () => { const currentYear = new Date().getFullYear(); const footerSections = [ { title:';',';';
    'Services, links: [ { name:,';';';';
  AI Solutions', href: '/services/ai-services } { name:,',';';
    ';';';
  IT & Security', href: '/services/it-services } { name:,',';';
    ';';';
  Blockchain & Web3', href: '/services/blockchain-services } { name:,',';';
    ';';';
  Sustainability', href: '/services/sustainability } { name:,',';';
    ';';';
  Healthcare Tech', href: '/services/healthcare-tech } { name:,',';';
    ';';';
  Edge Computing', href: '/services/edge-computing } ] } { title:,',';';
    ';';';
  Solutions', links: [ { name:',',';';
    'Enterprise, href:,';';';';
  /solutions/enterprise' } { name: 'Startups, href:,',';';
    ';';';
  /solutions/startups' } { name: 'Healthcare, href:,',';';
    ';';';
  /solutions/healthcare' } { name: 'Financial Services, href:,',';';
    ';';';
  /solutions/financial' } { name: 'Manufacturing, href:,',';';
    ';';';
  /solutions/manufacturing' } { name: 'Education, href:,',';';
    ';';';
  /solutions/education' } ] } { title: 'Company, links: [ { name:,',';';
    ';';';
  About Us', href: '/about } { name:,',';';
    ';';';
  Our Team', href: '/about/team } { name:,',';';
    ';';';
  Careers', href: '/careers } { name:,',';';
    ';';';
  Partners', href: '/partners } { name:,',';';
    ';';';
  Press', href: '/press } { name:,',';';
    ';';';
  Case Studies', href: '/case-studies } ] } { title:,',';';
    ';';';
  Resources', links: [ { name:',',';';
    'Blog, href:,';';';';
  /blog' } { name: 'Documentation, href:,',';';
    ';';';
  /docs' } { name: 'API Reference, href:,',';';
    ';';';
  /api' } { name: 'Developer Tools, href:,',';';
    ';';';
  /developer' } { name: 'Training, href:,',';';
    ';';';
  /training' } { name: 'Support, href:,',';';
    ';';';
  /support' } ] } ]; const socialLinks = [ { name: 'LinkedIn, href:,',';';
    ';';';
  https: ''',';';
    ';';';
import React from 'react';

export const EnhancedFooter: Reac t.FC = () => {
  return (<footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm: p x-6 lg: p x-8 py-12">
        <div className="grid md: gri d-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Zion Tech Group</h3>
            <p className="text-gray-400">
              Leading technology solutions provider specializing in AI, cybersecurity, 
              cloud infrastructure, and digital transformation services.</p>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/services/ai" className="hover: tex t-white">AI Solutions</a></li>
              <li><a href="/services/cybersecurity" className="hover: tex t-white">Cybersecurity</a></li>
              <li><a href="/services/cloud" className="hover: tex t-white">Cloud Services</a></li>
              <li><a href="/services/transformation" className="hover: tex t-white">Digital Transformation</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/about" className="hover: tex t-white">About</a></li>
              <li><a href="/careers" className="hover: tex t-white">Careers</a></li>
              <li><a href="/news" className="hover: tex t-white">News</a></li>
              <li><a href="/case-studies" className="hover: tex t-white">Case Studies</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/privacy" className="hover: tex t-white">Privacy Policy</a></li>
              <li><a href="/terms" className="hover: tex t-white">Terms of Service</a></li>
              <li><a href="/contact" className="hover: tex t-white">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Zion Tech Group.All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
