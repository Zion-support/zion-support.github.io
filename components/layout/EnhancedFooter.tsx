import React from 'react';
import Link from 'next/link';
import { 
  Twitter, 
  Linkedin, 
  Facebook, 
  Instagram, 
  Github, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUp, 
  Globe, 
  Heart,
  Zap,
  Shield,
  Cloud,
  Brain,
  Users,
  Building,
  FileText,
  HelpCircle,
  Lock,
  Award
} from 'lucide-react';

const footerNavigation = {
  services: {
    title: 'Services',
    items: [
      { name: 'AI Solutions', href: '/services/ai-solutions' },
      { name: 'Cloud & DevOps', href: '/services/cloud' },
      { name: 'Cybersecurity', href: '/services/cybersecurity' },
      { name: 'Data & Analytics', href: '/services/data' },
      { name: 'Micro SaaS', href: '/services/micro-saas' },
      { name: 'Digital Transformation', href: '/services/transformation' },
    ],
  },
  solutions: {
    title: 'Solutions',
    items: [
      { name: 'Enterprise', href: '/solutions/enterprise' },
      { name: 'SMB', href: '/solutions/smb' },
      { name: 'Startup', href: '/solutions/startup' },
      { name: 'Government', href: '/solutions/government' },
      { name: 'Healthcare', href: '/solutions/healthcare' },
      { name: 'Financial Services', href: '/solutions/financial' },
    ],
  },
  company: {
    title: 'Company',
    items: [
      { name: 'About Us', href: '/about' },
      { name: 'Partners', href: '/partners' },
      { name: 'Careers', href: '/careers' },
      { name: 'Blog', href: '/blog' },
      { name: 'News', href: '/news' },
      { name: 'Case Studies', href: '/case-studies' },
    ],
  },
  support: {
    title: 'Support & Resources',
    items: [
      { name: 'Help Center', href: '/help' },
      { name: 'Contact Support', href: '/contact' },
      { name: 'Documentation', href: '/docs' },
      { name: 'API Reference', href: '/api' },
      { name: 'Community', href: '/community' },
      { name: 'Training', href: '/training' },
    ],
  },
};

export default function EnhancedFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-2xl">Z</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Zion Tech Group</h3>
                <p className="text-cyan-400 text-sm">Innovation • Technology • Growth</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Empowering businesses with cutting-edge AI, IT infrastructure, and micro SaaS solutions. 
              We transform ideas into scalable, innovative technology solutions.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a href="https://twitter.com/ziontechgroup" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/company/ziontechgroup" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com/ziontechgroup" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          {Object.entries(footerNavigation).map(([key, section]) => (
            <div key={key}>
              <h4 className="text-lg font-semibold mb-4 text-white">{section.title}</h4>
              <ul className="space-y-3">
                {section.items.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Service Highlights */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <h4 className="text-lg font-semibold mb-6 text-center">Our Core Capabilities</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Brain className="w-6 h-6 text-cyan-400" />
              </div>
              <h5 className="font-medium text-white mb-2">AI & Machine Learning</h5>
              <p className="text-sm text-gray-400">Advanced AI solutions and automation</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Cloud className="w-6 h-6 text-cyan-400" />
              </div>
              <h5 className="font-medium text-white mb-2">Cloud & DevOps</h5>
              <p className="text-sm text-gray-400">Scalable infrastructure solutions</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Shield className="w-6 h-6 text-cyan-400" />
              </div>
              <h5 className="font-medium text-white mb-2">Cybersecurity</h5>
              <p className="text-sm text-gray-400">Zero-trust security frameworks</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Zap className="w-6 h-6 text-cyan-400" />
              </div>
              <h5 className="font-medium text-white mb-2">Micro SaaS</h5>
              <p className="text-sm text-gray-400">Rapid product development</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-950 border-t border-gray-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>© 2024 Zion Tech Group. All rights reserved.</span>
              <Heart className="w-4 h-4 text-red-500" />
            </div>
            
            <div className="flex items-center gap-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>

            <button
              onClick={scrollToTop}
              className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}