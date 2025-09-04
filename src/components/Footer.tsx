import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Heart, 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  ArrowUp, 
  ArrowRight,
  Brain,
  Shield,
  Users,
  TrendingUp,
  Building2,
  FileText,
  HelpCircle,
  BarChart3,
  Star,
  CheckCircle,
  Award,
  Lock,
  Eye,
  Code,
  Database,
  Network,
  Server,
  Rocket,
  Target,
  Handshake,
  Lightbulb,
  Cpu,
  Smartphone,
  Chip,
  Wifi,
  ShieldCheck,
  Bot,
  Workflow,
  Sparkles,
  Atom,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  MessageCircle,
  Search,
  BarChart,
  Users2,
  Settings,
  Palette,
  ChevronDown
} from 'lucide-react';

export default function Footer() {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['company']));

  // Handle scroll to show/hide scroll to top button
  React.useEffect(() => {
    const handleScroll = () => {
      const scrollToTopButton = document.getElementById('scroll-to-top');
      if (scrollToTopButton) {
        if (window.pageYOffset > 300) {
          scrollToTopButton.classList.remove('hidden');
        } else {
          scrollToTopButton.classList.add('hidden');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle section expansion (for mobile)
  const toggleSection = (title: string) => {
    setExpandedSections(prev => {
      const newSet = new Set(prev);
      if (newSet.has(title)) {
        newSet.delete(title);
      } else {
        newSet.add(title);
      }
      return newSet;
    });
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const footerSections = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Mission', href: '/about#mission' },
        { name: 'Leadership Team', href: '/about#team' },
        { name: 'Careers', href: '/careers' },
        { name: 'Press & News', href: '/newsroom' },
        { name: 'Partners', href: '/partners' }
      ]
    },
    {
      title: 'Services',
      links: [
        { name: 'AI Services', href: '/ai-services' },
        { name: 'IT Services', href: '/it-services' },
        { name: 'Micro SaaS', href: '/micro-saas' },
        { name: 'All Services', href: '/services' },
        { name: 'Cybersecurity', href: '/security' },
        { name: 'Cloud Solutions', href: '/services#cloud' }
      ]
    },
    {
      title: 'Solutions',
      links: [
        { name: 'Enterprise', href: '/solutions/enterprise' },
        { name: 'Healthcare', href: '/solutions/healthcare' },
        { name: 'Financial Services', href: '/solutions/financial' },
        { name: 'Government', href: '/solutions/government' },
        { name: 'Manufacturing', href: '/solutions/manufacturing' },
        { name: 'Retail', href: '/solutions/retail' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', href: '/blog' },
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'White Papers', href: '/white-papers' },
        { name: 'Webinars', href: '/webinars' },
        { name: 'Documentation', href: '/docs' },
        { name: 'API Reference', href: '/api' }
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Help Center', href: '/help' },
        { name: 'Contact Support', href: '/contact' },
        { name: 'Training', href: '/training' },
        { name: 'Community', href: '/community' },
        { name: 'System Status', href: '/status' },
        { name: 'Request Quote', href: '/request-quote' }
      ]
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}"      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">"        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}"          <div className="lg:col-span-2">"            <div className="flex items-center gap-2 mb-4">"              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg grid place-items-center">"                <Brain className="w-5 h-5 text-white" />
              </div>"              <span className="font-bold text-xl">Zion Tech Group</span>
            </div>"            <p className="text-gray-300 mb-6 max-w-md">
              Leading technology solutions provider helping businesses transform their digital presence 
              with cutting-edge AI, cloud architecture, and innovative development services.
            </p>
            
            {/* Contact Information */}"            <div className="space-y-3">"              <div className="flex items-center gap-3">"                <Phone className="w-5 h-5 text-blue-400" />"                <a href="tel:+13024640950" className="text-gray-300 hover:text-white transition-colors">
                  +1: 302 464: 0950
                </a>
              </div>"              <div className="flex items-center gap-3">"                <Mail className="w-5 h-5 text-blue-400" />"                <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-white transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>"              <div className="flex items-center gap-3">"                <MapPin className="w-5 h-5 text-blue-400" />"                <span className="text-gray-300">
                  364 E Main St STE: 1008<br />
                  Middletown DE: 19709
                </span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => ("            <div key={section.title} className="lg:col-span-1">
              <button"                className="flex items-center justify-between w-full lg:justify-start lg:mb-4 text-left"
                onClick={() => toggleSection(section.title)}
              >"                <h3 className="font-semibold text-lg mb-4">{section.title}</h3>"                <ChevronDown className="w-4 h-4 lg:hidden" />
              </button>
              
              <div className={`space-y-2 ${expandedSections.has(section.title) ? 'block' : 'hidden lg:block'}`}>
                {section.links.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}"                    className="block text-gray-300 hover:text-white transition-colors py-1"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}"      <div className="border-t border-gray-800">"        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">"          <div className="flex flex-col md:flex-row justify-between items-center gap-4">"            <div className="text-gray-400 text-sm">
              © 2024 Zion Tech Group. All rights reserved.
            </div>
            "            <div className="flex items-center gap-6">"              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>"              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>"              <Link href="/cookies" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button"        id="scroll-to-top"
        onClick={scrollToTop}"        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50 hidden""        aria-label="Scroll to top"
      >"        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );"}