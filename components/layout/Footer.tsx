
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary: any
    { name: 'Web Development', href: any
 name: 'Mobile Apps', href: any
    { name: 'AI Solutions', href: any
    { name: 'Cloud Services', href: any
    { name: 'E-commerce', href: any
    { name: 'CRM Systems', href: any
    { name: 'Data Analytics', href: any
    { name: 'Automation', href: any
    { name: 'About Us', href: any
 name: 'Our Team', href: any
    { name: 'Careers', href: any
    { name: 'Contact', href: any
    { name: 'Privacy Policy', href: any
    { name: 'Terms of Service', href: any
export default Footer;import React from 'react'; import Link from 'next/link'; import { Mail,Phone,MapPin,Linkedin,Twitter,Github,Facebook } from 'lucide-react'; const Footer: React.FC = () => { const currentYear = new Date().getFullYear(); const services = [ { name: 'AI Development',href: '/services/ai-development' },{ name: 'Cloud Solutions',href: '/services/cloud-solutions' },{ name: 'Web Development',href: '/services/web-development' },{ name: 'Mobile Apps',href: '/services/mobile-development' },{ name: 'Blockchain Solutions',href: '/services/blockchain' },{ name: 'IoT Platforms',href: '/services/iot-platforms' },{ name: 'Data Analytics',href: '/services/data-analytics' },{ name: 'Cybersecurity',href: '/services/cybersecurity' } ]; const company = [ { name: 'About Us',href: '/about' },{ name: 'Our Team',href: '/about#team' },{ name: 'Careers',href: '/careers' },{ name: 'News & Updates',href: '/blog' },{ name: 'Privacy Policy',href: '/privacy' },{ name: 'Terms of Service',href: '/terms' } ]; const resources = [ { name: 'Blog',href: '/blog' },{ name: 'Case Studies',href: '/case-studies' },{ name: 'Documentation',href: '/docs' },{ name: 'Support',href: '/support' },{ name: 'FAQ',href: any
export default Footer;import React from 'react'; import Link from 'next/link'; import { Mail,Phone,MapPin,Linkedin,Twitter,Github,Facebook } from 'lucide-react'; const Footer: React.FC = () => { const currentYear = new Date().getFullYear(); const services = [ { name: 'AI Development',href: '/services/ai-development' },{ name: 'Cloud Solutions',href: '/services/cloud-solutions' },{ name: 'Web Development',href: '/services/web-development' },{ name: 'Mobile Apps',href: '/services/mobile-development' },{ name: 'Blockchain Solutions',href: '/services/blockchain' },{ name: 'IoT Platforms',href: '/services/iot-platforms' },{ name: 'Data Analytics',href: '/services/data-analytics' },{ name: 'Cybersecurity',href: '/services/cybersecurity' } ]; const company = [ { name: 'About Us',href: '/about' },{ name: 'Our Team',href: '/about#team' },{ name: 'Careers',href: '/careers' },{ name: 'News & Updates',href: '/blog' },{ name: 'Privacy Policy',href: '/privacy' },{ name: 'Terms of Service',href: '/terms' } ]; const resources = [ { name: 'Blog',href: '/blog' },{ name: 'Case Studies',href: '/case-studies' },{ name: 'Documentation',href: '/docs' },{ name: 'Support',href: '/support' },{ name: 'FAQ',href: any
export default Footer;import React from 'react'; import Link from 'next / link'; import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Facebook } from 'lucide-react'; const Footer: React.FC = () => { const current_year = new Date ().getFullYear (); const services = [ { name: 'AI Development', href: '/services / ai - development' }, { name: 'Cloud Solutions', href: '/services / cloud - solutions' }, { name: 'Web Development', href: '/services / web - development' }, { name: 'Mobile Apps', href: '/services / mobile - development' }, { name: 'Blockchain Solutions', href: '/services / blockchain' }, { name: 'IoT Platforms', href: '/services / iot - platforms' }, { name: 'Data Analytics', href: '/services / data - analytics' }, { name: 'Cybersecurity', href: '/services / cybersecurity' } ]; const company = [ { name: 'About Us', href: '/about' }, { name: 'Our Team', href: '/about#team' }, { name: 'Careers', href: '/careers' }, { name: 'News & Updates', href: '/blog' }, { name: 'Privacy Policy', href: '/privacy' }, { name: 'Terms of Service', href: '/terms' } ]; const resources = [ { name: 'Blog', href: '/blog' }, { name: 'Case Studies', href: '/case - studies' }, { name: 'Documentation', href: '/docs' }, { name: 'Support', href: '/support' }, { name: 'FAQ', href: any