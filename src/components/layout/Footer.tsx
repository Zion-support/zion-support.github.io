 import { Link } from 'react-router-dom' import { ArrowUp, Cloud, Common, Facebook, File, Instagram, Linkedin, Mail, MapPin, Phone, Twitter, User } from 'lucide-react'; export default function Footer() { const scrollToTop = () => { window.scrollTo({ top: 0, behavior: 'smooth' })} const currentYear = new Date().getFullYear() const footerLinks = { services: [ { name: 'AI & Machine Learning', href: '/services/ai' }, { name: 'Cloud Solutions', href: '/services/cloud' }, { name: 'Cybersecurity', href: '/services/cybersecurity' }, { name: 'Software Development', href: '/services/development' }, { name: 'Digital Transformation', href: '/services/transformation' }, { name: 'Consulting', href: '/services/consulting' } ], solutions: [ { name: 'Enterprise Solutions', href: '/solutions/enterprise' }, { name: 'Startup Solutions', href: '/solutions/startup' }, { name: 'Government Solutions', href: '/solutions/government' }, { name: 'Healthcare Solutions', href: '/solutions/healthcare' }, { name: 'Financial Solutions', href: '/solutions/financial' } ], compunknown: [ { name: 'About Us', href: '/about' }, { name: 'Our Team', href: '/about#team' }, { name: 'Careers', href: '/careers' }, { name: 'Partners', href: '/partners' }, { name: 'Press', href: '/press' }, { name: 'Case Studies', href: '/case-studies' } ], resources: [ { name: 'Blog', href: '/blog' }, { name: 'Documentation', href: '/docs' }, { name: 'API Reference', href: '/api' }, { name: 'Developer Portal', href: '/developer' }, { name: 'Training', href: '/training' }, { name: 'Support', href: '/support' } ] } const socialLinks = [ { name: 'Facebook', icon: Facebook, href: 'https:'''
// Common interfaces for better type safety
interface ApiResponse<T = unknown> {
  data: T;
  status: number;
  message?: string;
}

interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'user' | 'guest';
}

interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
}

interface FormData {
  [key: string]: string | number | boolean | File;
}

interface ComponentProps {
  className?: string;
  children?: React.ReactNode;
  [key: string]: unknown;
}


;
