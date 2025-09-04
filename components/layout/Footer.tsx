import React from 'react';
import Link from 'next/link';
import {
  Brain,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Github,
  Youtube,
  Instagram,
  ArrowRight,
  Heart,
  Cloud,
  Database,
  Network,
  Target,
  CheckCircle,
  ExternalLink
} from 'lucide-react';
import { Button } from '../ui/Button';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'AI Development', href: '/services/ai-development' },
    { name: 'Cloud Solutions', href: '/services/cloud-solutions' },
    { name: 'Web Development', href: '/services/web-development' },
    { name: 'Mobile Apps', href: '/services/mobile-development' },
    { name: 'Blockchain Solutions', href: '/services/blockchain' },
    { name: 'IoT Platforms', href: '/services/iot-platforms' },
    { name: 'Data Analytics', href: '/services/data-analytics' },
    { name: 'Cybersecurity', href: '/services/cybersecurity' }
  ];

  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/about#team' },
    { name: 'Careers', href: '/careers' },
    { name: 'News & Updates', href: '/blog' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' }
  ];

  const resources = [
    { name: 'Blog', href: '/blog' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Documentation', href: '/docs' },
    { name: 'Support', href: '/support' },
    { name: 'FAQ', href: '/faq' }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/zion-tech-group', icon: Linkedin },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'GitHub', href: 'https://github.com/zion-tech-group', icon: Github },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook }
  ];

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="text-white font-bold text-xl mb-2">Zion Tech Group</div>
          <p className="text-gray-400 text-sm">AI, cloud, and modern software solutions.</p>
        </div>
        <div>
          <div className="text-white font-semibold mb-3">Company</div>
          <nav className="flex flex-col gap-2 text-gray-300 text-sm">
            <Link href="/about" className="hover:text-white">About</Link>
            <Link href="/careers" className="hover:text-white">Careers</Link>
            <Link href="/pricing" className="hover:text-white">Pricing</Link>
            <Link href="/contact" className="hover:text-white">Contact</Link>
          </nav>
        </div>
        <div>
          <div className="text-white font-semibold mb-3">Resources</div>
          <nav className="flex flex-col gap-2 text-gray-300 text-sm">
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <Link href="/docs" className="hover:text-white">Docs</Link>
            <Link href="/privacy" className="hover:text-white">Privacy</Link>
            <Link href="/terms" className="hover:text-white">Terms</Link>
            <Link href="/sitemap" className="hover:text-white">Sitemap</Link>
          </nav>
        </div>
      </div>
      <div className="border-t border-slate-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-gray-400 text-sm">
          <div>© {year} Zion Tech Group. All rights reserved.</div>
          <div className="flex gap-4">
            <a href="mailto:kleber@ziontechgroup.com" className="hover:text-white">kleber@ziontechgroup.com</a>
            <a href="tel:+13024640950" className="hover:text-white">+1 302 464 0950</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
