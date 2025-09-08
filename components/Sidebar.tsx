import React { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  Home,
  Briefcase,
  Users,
  Phone,
  Mail,
  MapPin,
  Globe,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  ChevronDown,
  ChevronRight,
  Brain,
  Cpu,
  Database,
  Network,
  Code,
  Cloud,
  Search,
  Building,
  Zap,
  BarChart3,
  Lock,
  Server,
  CheckCircle,
  FileText,
  HelpCircle,
  Settings,
  ArrowRight,
  Calendar,
  DollarSign,
  X } from 'lucide-react';

interface SidebarProps {;
  isOpen: boolean, onClose: () => void,;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {;
  const [openDropdowns, setOpenDropdowns] = useState<string[]>([]);

  const handleDropdownToggle = (title: string) => {;
    setOpenDropdowns(prev =>;
      prev && prev.includes(title);
        ? prev && prev.filter(item => item !== title);
        : [...prev, title];
    );


  const navigation = {;
    'Services': [;
      { name: 'Web Development', href: '/services/web-development', icon: Code },;
      { name: 'Mobile Development', href: '/services/mobile-development', icon: Smartphone },;
      { name: 'Cloud Solutions', href: '/services/cloud-solutions', icon: Cloud },;
      { name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield },;
      { name: 'Performance Optimization', href: '/services/performance', icon: Zap },;
    ],;
    'Solutions': [;
      { name: 'Enterprise Solutions', href: '/solutions/enterprise', icon: Building2 },;
      { name: 'E-commerce Platforms', href: '/solutions/ecommerce', icon: ShoppingCart },;
      { name: 'Healthcare Technology', href: '/solutions/healthcare', icon: Heart },;
      { name: 'Educational Platforms', href: '/solutions/education', icon: GraduationCap },;
    ],;
    'Industries': [;
      { name: 'Manufacturing', href: '/industries/manufacturing', icon: Factory },;
      { name: 'Logistics', href: '/industries/logistics', icon: Truck },;
      { name: 'Finance', href: '/industries/finance', icon: CreditCard },;
      { name: 'Healthcare', href: '/industries/healthcare', icon: Heart },;
      { name: 'Education', href: '/industries/education', icon: GraduationCap },;
    ],;
  };

  const quickLinks = [;
    { name: 'About Us', href: '/about' },;
    { name: 'Our Team', href: '/team' },;
    { name: 'Case Studies', href: '/case-studies' },;
    { name: 'Blog', href: '/blog' },;
    { name: 'Careers', href: '/careers' },;
    { name: 'Contact', href: '/contact' },;
  ];


        : [...prev, title];
    );


  ];
  return (
    <AnimatePresence>;
      {isOpen && (;
        <>;
          {/* Backdrop */}
          <motion&& motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={onClose}

          />;
          <motion&& motion.div

            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed left-0 top-0 h-full w-80 bg-white shadow-xl z-50"


            <div className="p-6">;

              {/* Header */}
              <div className="flex items-center justify-between mb-8">;
                <div className="flex items-center space-x-2">;
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">;
                    <Building2 className="w-8 h-8 text-white" />;
                  </div>;
                  <span className="text-xl font-bold text-gray-900">Zion Tech Group</span>;
                </div>;
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"

                  <X className="w-6 h-6" />;
                </button>;
              </div>;


              {/* Navigation */}
              <nav className="space-y-4">;
                {Object && Object.entries(navigation).map(([title, links]) => (;
                  <div key={title}>;
                    <button
                      onClick={() => handleDropdownToggle(title)}

                      className="flex items-center justify-between w-full text-left text-lg font-semibold text-gray-900 py-2 hover: text-blue-600 transition-colors";

              <div className="mt-8 pt-8 border-t border-gray-200">;
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>;
                <div className="space-y-2">;
                  {quickLinks && quickLinks.map((link) => (;

                    <Link
                      key={link && link.name}
                      href={link && link.href}
                      className="block text-gray-600 hover:text-blue-600 transition-colors py-1"
                      onClick={onClose}>;
                      {link && link.name}
                    </Link>;
                  ))}

                </div>;
              </div>;


              {/* Contact Info */}
              <div className="mt-8 pt-8 border-t border-gray-200">;
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Us</h3>;
                <div className="space-y-3">;
                  <div className="flex items-center space-x-3 text-gray-600">;
                    <Phone className="w-4 h-4" />;
                    <span>+1 302 464 0950</span>;
                  </div>;
                  <div className="flex items-center space-x-3 text-gray-600">;
                    <Mail className="w-4 h-4" />;
                    <span>kleber@ziontechgroup && ziontechgroup.com</span>;
                  </div>;
                </div>;
                <div className="mt-4">;
                  <Link
                    href="/contact"
                    className="inline-flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    onClick={onClose}>;
                    <span>Get Started</span>;
                    <ExternalLink className="w-4 h-4" />;
                  </Link>;
              </div>;
            </div>;
          </motion && motion.div>;
        </>;
      )}
    </AnimatePresence>;
  );

import {
  X,
  Building2,
  Code,
  Smartphone,
  Cloud,
  Shield,
  Zap,
  ShoppingCart,
  Heart,
  GraduationCap,
  Factory,
  Truck,
  CreditCard,
  Phone,
  Mail,
  ExternalLink;
} from 'lucide-react';
;
interface SidebarProps {
  isOpen: boolean;
  onClose: () => void}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const router = useRouter();
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  const toggleSection = (section: string) => {
    setExpandedSections(prev =>
      prev.includes(section)
        ? prev.filter(s => s !== section)
        : [...prev, section]
    )};

  const mainNavigation = [
  { name: 'Home', href: '/', icon: Home }, { name: 'About', href: '/about', icon: Users }, { name: 'Contact', href: '/contact', icon: Phone }, { name: 'Blog', href: '/blog', icon: FileText }, { name: 'Careers', href: '/careers', icon: Briefcase } ];

  const services = [
  { name: 'AI Services', href: '/ai-services', icon: Brain }, { name: 'IT Services', href: '/it-services', icon: Network }, { name: 'Micro SaaS', href: '/micro-saas', icon: Cloud }, { name: 'Web Development', href: '/services/web-development', icon: Code }, { name: 'Cloud Services', href: '/services/cloud-services', icon: Server }, { name: 'AI Development', href: '/services/ai-development', icon: Cpu } ];

  const solutions = [

  ];

  const resources = [
  { name: 'Documentation', href: '/docs', icon: FileText }, { name: 'API Reference', href: '/api', icon: Code }, { name: 'Help & Support', href: '/help', icon: HelpCircle }, { name: 'Training', href: '/training', icon: Users }, { name: 'Case Studies', href: '/case-studies', icon: BarChart3 }, { name: 'Pricing Guide', href: '/pricing-guide', icon: DollarSign }, { name: 'Search', href: '/search', icon: Search }, { name: 'Sitemap', href: '/sitemap', icon: Globe } ];

  const legal = [
  { name: 'Privacy Policy', href: '/privacy', icon: Lock }, { name: 'Terms of Service', href: '/terms', icon: FileText }, { name: 'Cookie Policy', href: '/cookies', icon: Settings } ];

  const contactInfo = [

  ];

  const socialLinks = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' }, { icon: Twitter, href: '#', label: 'Twitter' }, { icon: Facebook, href: '#', label: 'Facebook' }, { icon: Instagram, href: '#', label: 'Instagram' } ];

  const renderNavSection = (
    title: string,
    items: any[],
    sectionKey: string
  ) => {
    const isExpanded = expandedSections.includes(sectionKey);

    return (
      <div className="mb-6">
        <button
          onClick={() => toggleSection(sectionKey)}
          className="flex items-center justify-between w-full text-left py-2 px-3 text-gray-700 hover: text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
        >
          <span className="font-semibold text-sm uppercase tracking-wide">
            {title}
          </span>
          {isExpanded ? (
            <ChevronDown className="w-4 h-4" />
          ) : (
            <ChevronRight className="w-4 h-4" />
          )}
        </button>

        {isExpanded && (
          <div className="ml-4 space-y-1">
            {items.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                onClick={onClose}
                className={`flex items-center space-x-3 py-2 px-3 rounded-lg transition-colors ${
                  router.pathname === item.href
                    ? 'bg-blue-100 text-blue-600'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                <item.icon className="w-4 h-4" />
                <span className="text-sm">{item.name}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    )};

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40 lg: hidden"
        onClick={onClose}
      />

      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-80 bg-white shadow-xl z-50 overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">
                Zion Tech Group
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Search */}
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              />
            </div>
          </div>

          {/* Main Navigation */}
          <div className="mb-6">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
              Main
            </h3>
            <div className="space-y-1">
              {mainNavigation.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  onClick={onClose}
                  className={`flex items-center space-x-3 py-2 px-3 rounded-lg transition-colors ${
                    router.pathname === item.href
                      ? 'bg-blue-100 text-blue-600'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span className="text-sm">{item.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}, {renderNavSection('Services', services, 'services')}, {/* Solutions */}, {renderNavSection('Solutions', solutions, 'solutions')}, {/* Resources */}, {renderNavSection('Resources', resources, 'resources')}, {/* Legal */}, {renderNavSection('Legal', legal, 'legal')}, {/* Contact Information */}
          <div className="mb-6">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
              Contact
            </h3>
            <div className="space-y-2">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className="flex items-center space-x-3 text-sm text-gray-600 hover: text-blue-600 transition-colors"
                >
                  <contact.icon className="w-4 h-4" />
                  <span>{contact.text}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="mb-6">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
              Follow Us
            </h3>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="p-2 rounded-lg text-gray-400 hover: text-blue-600 hover:bg-blue-50 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-4 border-t border-gray-200">
            <Link
              href="/contact"
              onClick={onClose}
              className="flex items-center justify-center w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover: bg-blue-700 transition-colors"
            >
              Get Started
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </>
  )}
