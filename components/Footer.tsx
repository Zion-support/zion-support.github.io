import React from 'react';
import Link from 'next/link';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Github, 
  Facebook, 
  Instagram, 
  Zap, 
  Brain, 
  Server, 
  Shield, 
  Users, 
  Building2, 
  FileText, 
  Rocket, 
  Target, 
  Atom, 
  Network, 
  Cloud, 
  Lock, 
  TrendingUp, 
  Workflow, 
  MessageCircle, 
  DollarSign, 
  Briefcase, 
  ArrowUp, 
  Sparkles, 
  Home, 
  Truck, 
  Factory, 
  Heart, 
  BookOpen, 
  BarChart3, 
  Cpu, 
  Leaf, 
  Satellite, 
  HelpCircle 
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "AI & Automation Services",
      links: [
        { name: "Machine Learning", href: "/ai-services" },
        { name: "Computer Vision", href: "/ai-services" },
        { name: "Natural Language Processing", href: "/ai-services" },
        { name: "AI Strategy Consulting", href: "/ai-services" }
      ]
    },
    {
      title: "IT Services",
      links: [
        { name: "Cloud Computing", href: "/it-services" },
        { name: "Cybersecurity", href: "/it-services" },
        { name: "DevOps", href: "/it-services" },
        { name: "Data Analytics", href: "/it-services" }
      ]
    },
    {
      title: "Micro SaaS Solutions",
      links: [
        { name: "AI-Powered Tools", href: "/micro-saas" },
        { name: "Automation Platforms", href: "/micro-saas" },
        { name: "Custom Development", href: "/micro-saas" },
        { name: "API Integration", href: "/micro-saas" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Our Team", href: "/about" },
        { name: "Careers", href: "/careers" },
        { name: "Contact", href: "/contact" }
      ]
    }
  ];

  const socialLinks = [
    { name: 'Facebook', href: '#', icon: Facebook },
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'LinkedIn', href: '#', icon: Linkedin },
    { name: 'Instagram', href: '#', icon: Instagram },
    { name: 'GitHub', href: '#', icon: Github }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <Brain className="w-8 h-8 text-blue-400 mr-2" />
              <span className="text-xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 mb-4">
              Leading provider of AI, IT, and Micro SaaS solutions for modern businesses.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start">
              <Mail className="w-5 h-5 text-blue-400 mr-2" />
              <span className="text-gray-300">kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <Phone className="w-5 h-5 text-blue-400 mr-2" />
              <span className="text-gray-300">+1 302 464 0950</span>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <MapPin className="w-5 h-5 text-blue-400 mr-2" />
              <span className="text-gray-300">364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Zion Tech Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
<<<<<<< HEAD
};

export default Footer;
=======
}
>>>>>>> ede6a6c5e68aff29c3e98caf43b1ead111d5b92e
