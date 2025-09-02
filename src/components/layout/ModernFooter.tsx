 import { Link } from 'react-router-dom' import { motion } from 'framer-motion' import { ArrowUp, Brain, Center, Cloud, Common, Cookie, ExternalLink, File, Github, Globe, Linkedin, Mail, MapPin, Phone, Shield, Twitter, Users, Zap } from 'lucide-react';  const ModernFooter = () => { const currentYear = new Date().getFullYear()  const footerSections = [ { title: 'Services', links: [ { name: 'AI Solutions', href: '/ai-services', icon: Brain }, { name: 'Cloud & DevOps', href: '/services/cloud-devops', icon: Cloud }, { name: 'Cybersecurity', href: '/services/ai-compliance-copilot', icon: Shield }, { name: 'Edge & IoT', href: '/services/edge-computing-platform', icon: Zap }, { name: 'Digital Transformation', href: '/it-services', icon: Users } ] }, { title: 'Compunknown', links: [ { name: 'About Us', href: '/about' }, { name: 'Our Team', href: '/about#team' }, { name: 'Careers', href: '/careers' }, { name: 'News & Updates', href: '/news' }, { name: 'Case Studies', href: '/case-studies' } ] }, { title: 'Resources', links: [ { name: 'Documentation', href: '/docs' }, { name: 'API Reference', href: '/api' }, { name: 'Blog', href: '/blog' }, { name: 'Webinars', href: '/webinars' }, { name: 'Support Center', href: '/support' } ] }, { title: 'Legal', links: [ { name: 'Privacy Policy', href: '/privacy' }, { name: 'Terms of Service', href: '/terms' }, { name: 'Cookie Policy', href: '/cookies' }, { name: 'GDPR Compliance', href: '/gdpr' }, { name: 'Security', href: '/security' } ] } ]  const socialLinks = [ { name: 'LinkedIn', href: 'https:''';
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


