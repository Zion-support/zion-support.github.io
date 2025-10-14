
import { 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight,
  Linkedin, 
  Twitter, 
  Github,
  Clock,
  Brain,
  Shield,
  Zap,
  Globe
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'AI Solutions', href: '/ai-solutions' },
    { name: 'Cybersecurity', href: '/cybersecurity' },
    { name: 'Cloud Services', href: '/cloud-services' },
    { name: 'Digital Transformation', href: '/services' }
  ];

  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' }
  ];

  const resources = [
    { name: 'Blog', href: '/blog' },
    { name: 'Documentation', href: '/docs' },
    { name: 'Support', href: '/support' },
    { name: 'Privacy Policy', href: '/privacy' }
  ];
