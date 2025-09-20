import React from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { FooterNewsletter } from "@/components/FooterNewsletter"
import { ;
  Twitter,;
  Linkedin, ;
  Facebook, ;
  Instagram, ;
  Github, ;
  Mail, ;
  Phone, ;
  MapPin, ;
  ArrowUp,;
  Globe,;
  Shield,;
  Zap,;
  Brain,;
  Cloud,;
  Building,;
  Users,;
  FileText,;
  Video,;
  TestTube,;
  TrendingUp,;
  CheckCircle,;
  Briefcase,;
  Newspaper,;
  Target,;
  Rocket,;
  Heart,;
  DollarSign,;
  HelpCircle,;
  Activity,;
  Cpu,;
  GraduationCap;
} from "lucide-react"
export function Footer() {;
  const scrollToTop = () => {;
    window.scrollTo({ top: 0, behavior: 'smooth' })
  },;

  const currentYear = new Date().getFullYear()

  const footerSections = [;
    {;
      title: 'Company',icon: Globe,links: [;
        { name: 'About Us', path: '/about', icon: Users };
        { name: 'Careers', path: '/careers', icon: Briefcase };
        { name: 'Blog', path: '/blog', icon: Newspaper };
        { name: 'Contact', path: '/contact', icon: Phone };
      ];
    };
    {;
      title: 'Services',icon: Zap,links: [;
        { name: 'Cloud & DevOps', path: '/services/cloud-devops', icon: Cloud };
        { name: 'Digital Twin', path: '/services/digital-twin', icon: Cpu };
        { name: 'Data Analytics', path: '/services/data-analytics', icon: TrendingUp };
        { name: 'IT Infrastructure', path: '/services/it-infrastructure', icon: Building };
        { name: 'AI Business Intelligence', path: '/services/ai-business-intelligence', icon: Brain };
        { name: 'All Services', path: '/services', icon: Zap };
      ];
    };
    {;
      title: 'Resources',icon: FileText,links: [;
        { name: 'Blog', path: '/blog', icon: FileText };
        { name: 'FAQ', path: '/faq', icon: HelpCircle };
        { name: 'Request a Quote', path: '/request-quote', icon: FileText };
      ];
    };
    {;
      title: 'Support',icon: Shield,links: [;
        { name: 'Contact Us', path: '/contact', icon: Phone };
        { name: 'Dashboard', path: '/dashboard', icon: Activity };
        { name: 'Login', path: '/login', icon: HelpCircle };
      ];
    };
  ];
  const legal = [;
    { name: "Privacy Policy", path: "/privacy" };
    { name: "Terms of Service", path: "/terms" };
    { name: "Cookie Policy", path: "/cookies" };
  ];
  const socialLinks = [;
    {;
      name: "LinkedIn",url: "https://linkedin.com/company/ziontechgroup",icon: Linkedin,color: "hover:text-blue-600"
    };
    {;
      name: "Twitter",url: "https://twitter.com/ziontechgroup",icon: Twitter,color: "hover:text-blue-400"
    };
    {;
      name: "Facebook",url: "https://facebook.com/ziontechgroup",icon: Facebook,color: "hover:text-blue-600"
    };
    {;
      name: "Instagram",url: "https://instagram.com/ziontechgroup",icon: Instagram,color: "hover:text-pink-500"
    };
    {;
      name: "GitHub",url: "https://github.com/ziontechgroup",icon: Github,color: "hover:text-gray-400"
    };
  ];
  const contactInfo = [;
    {;
      name: "Email",value: "kleber@ziontechgroup.com",url: "mailto:kleber@ziontechgroup.com",icon: Mail;
    };
    {;
      name: "Phone",value: "+1 302 464 0950",url: "tel:+13024640950",icon: Phone;
    };
    {;
      name: "Address",value: "364 E Main St STE 1008 Middletown DE 19709",url: "https://[^;]*
    };
  ];
  return (
    <footer className="bg-zion-slate-dark text-white relative overflow-hidden">;
      {/* Background Pattern */};
      <[^>]*/>
      ;
      <div className="container mx-auto px-4 py-16 relative z-10">;
        {/* Main Footer Content */};
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">;
          {/* Company Info */};
          <div className="lg:col-span-2">;
            <div className="flex items-center space-x-3 mb-6">;
              <div className="w-10 h-10 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center">;
                <[^>]*/>
              </[^>]*>
              <div>;
                <h3 className="text-lg font-bold text-white">;
                  Zion Tech Group;
                </[^>]*>
                <p className="text-sm text-zion-slate-light">Innovating the future</[^>]*>
              </[^>]*>
            </[^>]*>
            <p className="text-zion-slate-light mb-6 max-w-md">;
              Leading the way in AI, quantum computing, and space technology solutions. ;
              Empowering businesses with cutting-edge innovations for tomorrow's challenges.;
            </[^>]*>
            {/* Contact Info */};
            <div className="space-y-3">;
              {contactInfo.map((contact) => (;
                <a;
                  key={contact.name};
                  href={contact.url};
                  className="[^"]*"
                >;
                  <[^>]*/>
                  <span className="text-sm">{contact.value}</[^>]*>
                </[^>]*>
              ))};
            </[^>]*>
          </[^>]*>

          {/* Navigation Sections */};
          {footerSections.map((section) => (;
            <div key={section.title}>;
              <div className="flex items-center space-x-2 mb-4">;
                <[^>]*/>
                <h4 className="font-semibold text-white">{section.title}</[^>]*>
              </[^>]*>
              <ul className="space-y-2">;
                {section.links.map((link) => (;
                  <li key={link.name}>;
                    <Link;
                      to={link.path};
                      className="[^"]*"
                    >;
                      <[^>]*/>
                      <span>{link.name}</[^>]*>
                    </[^>]*>
                  </[^>]*>
                ))};
              </[^>]*>
            </[^>]*>
          ))};
        </[^>]*>

        {/* Newsletter Section */};
        <div className="border-t border-zion-slate-light/20 pt-8 mb-8">;
          <[^>]*/>
        </[^>]*>

        {/* Bottom Footer */};
        <div className="border-t border-zion-slate-light/20 pt-8">;
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">;
            {/* Copyright and Legal */};
            <div className="flex flex-col sm: flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-zion-slate-light">;
              <span>&copy, {currentYear} Zion Tech Group. All rights reserved.</[^>]*>
              <div className="flex space-x-4">;
                {legal.map((item) => (;
                  <Link;
                    key={item.name};
                    to={item.path};
                    className="[^"]*"
                  >;
                    {item.name};
                  </[^>]*>
                ))};
              </[^>]*>
            </[^>]*>

            {/* Social Links */};
            <div className="flex space-x-4">;
              {socialLinks.map((social) => (;
                <a;
                  key={social.name};
                  href={social.url};
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-zion-slate-light ${social.color} transition-colors duration-200 p-2 rounded-lg hover:bg-zion-slate-light/10`};
                  aria-label={social.name};
                >;
                  <[^>]*/>
                </[^>]*>
              ))};
            </[^>]*>
          </[^>]*>
        </[^>]*>

        {/* Scroll to Top Button */};
        <motion.button
          onClick={scrollToTop};
          className="[^"]*"
          whileHover={{ scale: 1.1 }};
          whileTap={{ scale: 0.9 }};
          aria-label="Scroll to top"
        >;
          <[^>]*/>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};
