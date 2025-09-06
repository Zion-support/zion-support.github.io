import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Brain,
  Settings,
  Building2,
  Phone,
  Clock,
  Award,
  ArrowRight,
  ChevronDown,
  ChevronRight,
  Mail,
  MapPin,
  Code,
  Cloud,
  Shield,
  Database,
  Rocket,
  Factory,
  Network,
  Users,
  CheckCircle,
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose?: () => void;
  className?: string;
}

const navigationSections = [
  {
    id: 'services',
    title: 'Our Services',
    icon: Settings,
    items: [
      { name: 'AI Services', href: '/ai-services', icon: Brain, description: 'Cutting-edge AI solutions' },
      { name: 'IT Services', href: '/it-services', icon: Code, description: 'Comprehensive IT solutions' },
      { name: 'Micro SaaS', href: '/micro-saas', icon: Cloud, description: 'Scalable SaaS applications' },
      { name: 'Cybersecurity', href: '/cybersecurity', icon: Shield, description: 'Advanced security solutions' },
      { name: 'Cloud Solutions', href: '/cloud-solutions', icon: Cloud, description: 'Cloud infrastructure & services' },
      { name: 'Database Solutions', href: '/database-solutions', icon: Database, description: 'Database management & optimization' }
    ]
  },
  {
    id: 'solutions',
    title: 'Solutions',
    icon: Building2,
    items: [
      { name: 'Enterprise Solutions', href: '/enterprise-solutions', icon: Building2, description: 'Large-scale business solutions' },
      { name: 'Startup Solutions', href: '/startup-solutions', icon: Rocket, description: 'Scalable startup solutions' },
      { name: 'Industry Solutions', href: '/industries', icon: Factory, description: 'Industry-specific solutions' },
      { name: 'Custom Development', href: '/custom-development', icon: Code, description: 'Tailored software development' },
      { name: 'Digital Transformation', href: '/digital-transformation', icon: Network, description: 'Complete digital transformation' },
      { name: 'Technology Consulting', href: '/consulting', icon: Users, description: 'Strategic technology consulting' }
    ]
  },
  {
    id: 'company',
    title: 'Company',
    icon: Building2,
    items: [
      { name: 'About Us', href: '/about', icon: Building2, description: 'Learn about our company' },
      { name: 'Our Team', href: '/team', icon: Users, description: 'Meet our expert team' },
      { name: 'Careers', href: '/careers', icon: Award, description: 'Join our team' },
      { name: 'Case Studies', href: '/case-studies', icon: CheckCircle, description: 'Success stories' },
      { name: 'News & Updates', href: '/news', icon: ArrowRight, description: 'Latest news' },
      { name: 'Partners', href: '/partners', icon: Users, description: 'Our partners' }
    ]
  }
];

const quickLinks = [
  { name: 'Get Quote', href: '/contact', icon: Phone, highlight: true },
  { name: 'Schedule Call', href: '/contact', icon: Clock },
  { name: 'View Portfolio', href: '/case-studies', icon: Award },
  { name: 'Download Brochure', href: '/resources', icon: ArrowRight }
];

const contactInfo = {
  phone: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008, Middletown DE 19709'
};

export default function Sidebar({ isOpen, onClose, className = '' }: SidebarProps) {
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev =>
      prev.includes(sectionId)
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const handleLinkClick = (href: string) => {
    if (onClose) onClose();
    // In a real app, you would use React Router's navigate here
    window.location.href = href;
  };

  return (
    <div className="fixed left-0 top-0 h-full w-80 bg-white shadow-lg z-40 lg:block hidden">
      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Navigation</h2>
        <nav className="space-y-2">
          <Link
            to="/"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
          >
            About
          </Link>
          <Link
            to="/services"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
          >
            Contact
          </Link>
          <Link
            to="/pricing"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
          >
            Pricing
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;