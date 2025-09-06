<<<<<<< HEAD
<<<<<<< HEAD
import { FooterNewsletter } from '@/components/FooterNewsletter';
import {
=======
import React from 'react';
import { Link } from 'react-router-dom';
import {;
>>>>>>> origin/automation-fixes
  Twitter,
  Linkedin,
  Facebook,
  Instagram,
  Github,
<<<<<<< HEAD
  ChevronUp,;
} from 'lucide-react';
import Link from 'next/link'; // Changed from react-router-dom
import { FeedbackWidget } from '@/components/feedback/FeedbackWidget';

>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
=======
import { FooterNewsletter } from "@/components/FooterNewsletter";
import { Twitter, Linkedin, Facebook, Instagram, Github, ChevronUp } from 'lucide-react';
import Link from "next/link", // Changed from react-router-dom
import { FeedbackWidget } from "@/components/feedback/FeedbackWidget";
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
function resolveUrl(envVar: string | undefined, fallback: string) {
  if (!envVar || envVar.trim() === '' || envVar === '#' || envVar === '/') {
    return fallback;
  }
  return envVar;

const TWITTER_URL = resolveUrl(
  process.env.NEXT_PUBLIC_SOCIAL_TWITTER_URL,
  'https://twitter.com/ZionTechGroup'
);
const LINKEDIN_URL = resolveUrl(
  process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN_URL,
  'https://linkedin.com/company/ziontechgroup'
);
const FACEBOOK_URL = resolveUrl(
  process.env.NEXT_PUBLIC_SOCIAL_FACEBOOK_URL,
  'https://facebook.com/ZionTechGroup'
);
const INSTAGRAM_URL = resolveUrl(
  process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM_URL,
  'https://instagram.com/ZionTechGroup'
);
const GITHUB_URL = resolveUrl(
  process.env.NEXT_PUBLIC_SOCIAL_GITHUB_URL,
  'https://github.com/ZionTechGroup'
);

export function Footer() {
  return (
    <footer className='bg-card border-t border-primary/20 pt-12 pb-8'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8'>
          <div className='space-y-4'>
            <div className='mb-4'>
              <span className='text-2xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent'>
                ZION
              </span>
            </div>
            <p
              className='text-foreground/80 mb-4'
              style={{ maxWidth: 'clamp(16rem, 90%, 20rem)' }}
            >
              The world&apos;s first free marketplace dedicated to high-tech and
              artificial intelligence.
            </p>
            <div className='flex flex-wrap gap-3'>
              <a
<<<<<<< HEAD
                href={TWITTER_URL}
                target='_blank'
                rel='noopener noreferrer'
                className='text-foreground/80 hover:text-primary transition-colors'
                aria-label='Twitter'
                title='Twitter'
=======
                href = {TWITTER_URL,}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-primary transition-colors"
                aria-label="Twitter"
                title="Twitter"
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
              >
                <Twitter className='h-5 w-5' aria-hidden='true' />
                <span className='sr-only'>Twitter</span>
              </a>
              <a
<<<<<<< HEAD
                href={LINKEDIN_URL}
                target='_blank'
                rel='noopener noreferrer'
                className='text-foreground/80 hover:text-primary transition-colors'
                aria-label='LinkedIn'
                title='LinkedIn'
=======
                href = {LINKEDIN_URL,}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-primary transition-colors"
                aria-label="LinkedIn"
                title="LinkedIn"
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
              >
                <Linkedin className='h-5 w-5' aria-hidden='true' />
                <span className='sr-only'>LinkedIn</span>
              </a>
              <a
<<<<<<< HEAD
                href={FACEBOOK_URL}
                target='_blank'
                rel='noopener noreferrer'
                className='text-foreground/80 hover:text-primary transition-colors'
                aria-label='Facebook'
                title='Facebook'
=======
                href = {FACEBOOK_URL,}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-primary transition-colors"
                aria-label="Facebook"
                title="Facebook"
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
              >
                <Facebook className='h-5 w-5' aria-hidden='true' />
                <span className='sr-only'>Facebook</span>
              </a>
              <a
<<<<<<< HEAD
                href={INSTAGRAM_URL}
                target='_blank'
                rel='noopener noreferrer'
                className='text-foreground/80 hover:text-primary transition-colors'
                aria-label='Instagram'
                title='Instagram'
=======
                href = {INSTAGRAM_URL,}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-primary transition-colors"
                aria-label="Instagram"
                title="Instagram"
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
              >
                <Instagram className='h-5 w-5' aria-hidden='true' />
                <span className='sr-only'>Instagram</span>
              </a>
              <a
<<<<<<< HEAD
                href={GITHUB_URL}
                target='_blank'
                rel='noopener noreferrer'
                className='text-foreground/80 hover:text-primary transition-colors'
                aria-label='GitHub'
                title='GitHub'
=======
                href = {GITHUB_URL,}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-primary transition-colors"
                aria-label="GitHub"
                title="GitHub"
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
              >
                <Github className='h-5 w-5' aria-hidden='true' />
                <span className='sr-only'>GitHub</span>
              </a>
            </div>
          </div>

          <div className='space-y-4'>
            <h3 className='text-foreground font-semibold mb-4 text-lg'>
              Marketplace
            </h3>
            <ul className='space-y-2'>
              <li>
                <Link
                  href='/marketplace'
                  className='text-foreground/80 hover:text-primary transition-colors text-sm'
                >
                  Products
                </Link>
              </li>
              {/* Ensure the services link routes to the main services page */}
              <li>
                <Link
                  href='/services'
                  className='text-foreground/80 hover:text-primary transition-colors text-sm'
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href='/talent'
                  className='text-foreground/80 hover:text-primary transition-colors text-sm'
                >
                  Talent
                </Link>
              </li>
              <li>
                <Link
                  href='/equipment'
                  className='text-foreground/80 hover:text-primary transition-colors text-sm'
                  target='_self'
                >
                  Equipment
                </Link>
              </li>
              <li>
                <Link
                  href='/categories'
                  className='text-foreground/80 hover:text-primary transition-colors text-sm'
                >
                  Categories
                </Link>
              </li>
              <li>
                <Link
                  href='/green-it'
                  className='text-foreground/80 hover:text-primary transition-colors text-sm'
                >
                  Green IT
                </Link>
              </li>
            </ul>
          </div>

          <div className='space-y-4'>
            <h3 className='text-foreground font-semibold mb-4 text-lg'>
              Company
            </h3>
            <ul className='space-y-2'>
              <li>
                <Link
                  href='/about'
                  className='text-foreground/80 hover:text-primary transition-colors text-sm'
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href='/blog'
                  className='text-foreground/80 hover:text-primary transition-colors text-sm'
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href='/innovation'
                  className='text-foreground/80 hover:text-primary transition-colors text-sm'
                >
                  Innovation
                </Link>
              </li>
              <li>
                <Link
                  href='/partners'
                  className='text-foreground/80 hover:text-primary transition-colors text-sm'
                >
                  Partners
                </Link>
              </li>
              <li>
                <Link
                  href='/careers'
                  className='text-foreground/80 hover:text-primary transition-colors text-sm'
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href='/contact'
                  className='text-foreground/80 hover:text-primary transition-colors text-sm'
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href='/sitemap'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-foreground/80 hover:text-primary transition-colors text-sm'
                >
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>

          <div className='space-y-4 sm:col-span-2 lg:col-span-1'>
            <h3 className='text-foreground font-semibold mb-4 text-lg'>
              Newsletter
            </h3>
            <p className='text-foreground/80 mb-4 text-sm'>
              Stay updated with the latest news on tech, AI, and marketplace
              opportunities.
            </p>
            <div className='max-w-sm'>
              <FooterNewsletter />
            </div>
          </div>
        </div>

        <div className='mt-8 flex justify-end'>
          <button
            type='button'
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: 'smooth',
              });
            }}
            className='flex items-center space-x-1 text-foreground/80 hover:text-primary text-sm transition-colors cursor-pointer'
            aria-label='Back to top'
          >
            <ChevronUp className='h-4 w-4' aria-hidden='true' />
            <span>Back to Top</span>
          </button>
        </div>

        <div className='mt-12 pt-8 border-t border-primary/20'>
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <p className='text-foreground/80 text-sm'>
              &copy; {new Date().getFullYear()} Zion Tech Group. All rights
              reserved.
            </p>
            <div className='flex space-x-6 mt-4 md:mt-0'>
              <Link
                href='/privacy'
                className='text-foreground/80 hover:text-primary text-sm transition-colors'
              >
                Privacy Policy
              </Link>
              <Link
                href='/terms'
                className='text-foreground/80 hover:text-primary text-sm transition-colors'
              >
                Terms of Service
              </Link>
              <Link
                href='/status'
                className='text-foreground/80 hover:text-primary text-sm transition-colors'
              >
                API Status
              </Link>
            </div>
          </div>
        </div>
        <FeedbackWidget />
      </div>
    </footer>
  );
=======
=======
  Mail,
  Phone,
  MapPin,
  Globe,
  Zap,
  Brain,
  Shield,
  Users,
  HardDrive,
  TrendingUp,
  Building2,
  FileText,
  HelpCircle,
  Activity,
  Cpu,
  GraduationCap,
  BarChart3,
  ArrowUp,
  Heart,
  Star,
  CheckCircle,
  Award,
  Rocket,
  Target,
  Handshake,
  Lightbulb,
  Database,
  Network,
  Smartphone,
  Lock,
  Code,
  Server,
  Chip,
  Wifi,
  ShieldCheck,
  Bot,
  Workflow,
  Eye,
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
  ChevronDown;
} from 'lucide-react';
export function Footer() {;
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['company']));
  // Handle scroll to show/hide scroll to top button;
  React.useEffect(() => {
  // TODO: Add dependencies if needed;
}, []);
    const handleScroll = () => {;
      const scrollToTopButton = document.getElementById('scroll-to-top');
      if (scrollToTopButton) {;
        if (window.pageYOffset > 300) {;
          scrollToTopButton.classList.remove('hidden');
} else {;
          scrollToTopButton.classList.add('hidden');
}
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
}, []);
  // Toggle section expansion (for mobile);
  const toggleSection = (title: string) => {;
    setExpandedSections(prev => {;
      const newSet = new Set(prev);
      if (newSet.has(title)) {;
        newSet.delete(title);
} else {;
        newSet.add(title);
}
      return newSet;
});
};
  // Scroll to top function;
  const scrollToTop = () => {;
    window.scrollTo({;
      top: 0,
      behavior: 'smooth';
});
};
export default function Footer() {;
  const footerSections = [;
    {;
      title: 'Company',
      links: [;
        { name: 'About Us', href: '/about' },
        { name: 'Our Mission', href: '/about#mission' },
        { name: 'Leadership Team', href: '/about#team' },
        { name: 'Careers', href: '/careers' },
        { name: 'Press & News', href: '/press' },
        { name: 'Partners', href: '/partners' }
      ];
},
    {;
      title: 'Services',
      links: [;
        { name: 'AI Solutions', href: '/services/ai' },
        { name: 'Cybersecurity', href: '/services/cybersecurity' },
        { name: 'Cloud Services', href: '/services/cloud' },
        { name: 'Digital Transformation', href: '/services/digital' },
        { name: 'IT Consulting', href: '/services/consulting' },
        { name: 'Micro SAAS', href: '/services/micro-saas' }
      ];
},
    {;
      title: 'Solutions',
      links: [;
        { name: 'Enterprise', href: '/solutions/enterprise' },
        { name: 'Healthcare', href: '/solutions/healthcare' },
        { name: 'Financial Services', href: '/solutions/financial' },
        { name: 'Government', href: '/solutions/government' },
        { name: 'Manufacturing', href: '/solutions/manufacturing' },
        { name: 'Retail', href: '/solutions/retail' }
      ];
},
    {;
      title: 'Resources',
      links: [;
        { name: 'Blog', href: '/blog' },
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'White Papers', href: '/white-papers' },
        { name: 'Webinars', href: '/webinars' },
        { name: 'Documentation', href: '/docs' },
        { name: 'API Reference', href: '/api' }
      ];
},
    {;
      title: 'Support',
      links: [;
        { name: 'Help Center', href: '/help' },
        { name: 'Contact Support', href: '/contact' },
        { name: 'Training', href: '/training' },
        { name: 'Community', href: '/community' },
        { name: 'System Status', href: '/status' },
        { name: 'Request Quote', href: '/request-quote' }
      ];
}
import { Heart, Mail, Phone, MapPin, Globe, ArrowUp, ArrowRight } from 'lucide-react';
ursor/automate-test-fix-improve-and-merge-code-99d1,"});"})";
  Linkedin,
  Instagram,
  Globe,
  Twitter,
  Facebook,
  Youtube,
  Github,
  Zap,
  Brain,
  Shield,
  Users,
  HardDrive,
  TrendingUp,
  Building2,
  FileText,
  HelpCircle,
  BarChart3,
  ArrowUp,
  Heart,
  Star,
  CheckCircle,
  Award,
  Lock,
  Eye,
  Atom,
  Code,
  Database,
  Network,
  Server;
  Rocket,
  Target,
  Handshake,
  Lightbulb,
  Cpu,
  Smartphone,
  Server,
  Chip,
  Wifi,
  ShieldCheck,
  Bot,
  Workflow,
  Sparkles,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  Activity,
  MessageCircle,
  Search,
  BarChart,
  Users2,
  Settings,
  Palette} from "lucide-react;
export function Footer(...args: any[]): any {,
  const currentYear = new Date().getFullYear(),
  const [activeSection, setActiveSection] = useState<any>(null)";
  const footerSections = []}, {";
      title: "AI & Quantum Solutions",
icon: Brain,";
category: "Core Services",";
services: [ { name: "AI Customer Success Automation", href: "/services/ai-customer-success-automation", badge: "Popular" }, { name: "AI Healthcare Analytics Platform", href: "/services/ai-healthcare-analytics-platform", badge: "New" }, { name: "AI Financial Risk Management", href: "/services/ai-financial-risk-management-enhanced", badge: "Featured" }, { name: "AI Supply Chain Optimization", href: "/services/ai-supply-chain-optimization-enhanced", badge: "Trending" }, { name: "AI Legal Document Automation", href: "/services/ai-legal-document-automation-platform", badge: "Innovative" }, { name: "AI Mental Health Support", href: "/services/ai-mental-health-support-platform", badge: "Healthcare" }, { name: "AI Smart Home Energy Management", href: "/services/ai-smart-home-energy-management-platform", badge: "IoT" }, { name: "AI Autonomous Logistics", href: "/services/ai-autonomous-logistics-platform", badge: "Logistics" }, { name: "AI-Powered SEO", href: "/services/ai-powered-seo", badge: "Marketing" }, { name: "Quantum Edge Computing", href: "/services/quantum-edge-computing-solutions", badge: "Quantum" }, { name: "AI Space Technology", href: "/services/ai-space-technology-platform", badge: "Space Tech" }, { name: "AI Carbon Footprint Management", href: "/services/ai-carbon-footprint-management-platform", badge: "Green Tech" }, { name: "AI Autonomous Manufacturing", href: "/services/ai-autonomous-manufacturing-platform", badge: "Manufacturing" }, { name: "AI Enterprise Resource Planning", href: "/services/ai-enterprise-resource-planning", badge: "ERP" }, { name: "AI Autonomous Business Operations", href: "/services/ai-autonomous-business-operations-platform", badge: "Automation" }, { name: "AI Customer Experience Analytics", href: "/services/ai-customer-experience-analytics-platform", badge: "Analytics" }";
      title: "AI Cybersecurity & Infrastructure",
icon: Shield,";
category: "Security & Infrastructure",";
services: [ { name: "AI-Powered DevOps Automation", href: "/services/ai-powered-devops-automation", badge: "New" }, { name: "AI-Powered Cybersecurity Suite", href: "/services/ai-powered-cybersecurity-suite", badge: "Security" }, { name: "Enterprise IT Infrastructure Management", href: "/services/enterprise-it-infrastructure-management", badge: "Infrastructure" }, { name: "Cloud Migration & Optimization", href: "/services/cloud-migration-and-optimization", badge: "Cloud" }, { name: "AI Data Analytics Platform", href: "/services/ai-data-analytics-platform", badge: "Analytics" }, { name: "AI DevOps Automation", href: "/services/ai-devops-automation", badge: "DevOps" }, { name: "Edge Computing Platform", href: "/services/edge-computing-platform", badge: "Edge" }";
      title: "Micro SaaS Solutions",
icon: Code,";
category: "Micro SaaS",";
services: [ { name: "AI Email Automation Suite", href: "/services/ai-email-automation-suite", badge: "New" }, { name: "AI Social Media Scheduler", href: "/services/ai-social-media-scheduler", badge: "New" }, { name: "AI Customer Insights Platform", href: "/services/ai-customer-insights-platform", badge: "New" }, { name: "Micro CRM", href: "/services/micro-crm", badge: "Popular" }, { name: "Helpdesk Platform", href: "/services/helpdesk-platform", badge: "Support" }, { name: "Website Analytics", href: "/services/website-analytics", badge: "Analytics" }";
      title: "Solutions",";
links: [ { name: "Enterprise Solutions", href: "/enterprise" }, { name: "Healthcare Tech", href: "/solutions/healthcare" }, { name: "Financial Solutions", href: "/financial-solutions" }, { name: "Manufacturing", href: "/manufacturing-solutions" }, { name: "Industry Solutions", href: "/industry-solutions" }, { name: "Emerging Tech", href: "/emerging-tech" }";
      title: "Company",";
links: [ { name: "About Us", href: "/about" }, { name: "Our Team", href: "/about/team" }, { name: "Careers", href: "/careers" }, { name: "Partners", href: "/partners" }, { name: "News & Updates", href: "/news" }, { name: "Case Studies", href: "/case-studies" }";
      title: "Quantum Computing & Emerging Tech",
icon: Atom,";
services: [ { name: "AI-Quantum Hybrid Computing Platform", href: "/services/ai-quantum-hybrid-platform" }, { name: "Quantum Computing as a Service", href: "/services/quantum-computing-as-a-service" }, { name: "AI Space Technology Platform", href: "/services/ai-space-technology-platform" }, { name: "AI IoT Edge Computing Platform", href: "/services/ai-iot-edge-computing-platform" }";
      title: "Resources",";
links: [ { name: "Documentation", href: "/docs" }, { name: "White Papers", href: "/white-papers" }, { name: "Support Center", href: "/help" }, { name: "Training", href: "/training" }, { name: "Blog", href: "/blog" }, { name: "Research", href: "/research-development" }

      ]}

  ]";
  const solutions = [];
  const contactInfo = [;
    { icon: Mail, label: "Email", value: "kleber@ziontechgroup.com", href: "mailto:kleber@ziontechgroup.com" },
    { icon: Phone, label: "Phone", value: "+1 302 464 0950", href: "tel:+13024640950" },
    { icon: MapPin, label: "Address", value: "364 E Main St STE 1008, Middletown DE 19709", href: "#" },
    { icon: Globe, label: "Website", value: "ziontechgroup.com", href: "https://ziontechgroup.com" }
  ];
  const scrollToTop = () => {;
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
  const scrollToTop = () => {;
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
  return (;
    <footer className="bg-slate-900 text-white">;
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">;
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">;
          {/* Company Info */}
          <div className="space-y-4">;
            <div className="flex items-center space-x-2">;
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">;
                <Zap className="w-6 h-6 text-white" />;
              </div>;
              <span className="text-xl font-bold text-white">Zion Tech Group</span>;
            </div>;
            <p className="text-gray-400 text-sm leading-relaxed">;
              Leading provider of innovative AI, IT, and Micro SAAS solutions. ;
              Transforming businesses through cutting-edge technology and expert consulting.;
            </p>;
            <div className="flex space-x-4">;
              <a href="https://linkedin.com/company/ziontechgroup" className="text-gray-400 hover:text-blue-400 transition-colors">;
                <Linkedin className="w-5 h-5" />;
              </a>;
              <a href="https://twitter.com/ziontechgroup" className="text-gray-400 hover:text-blue-400 transition-colors">;
                <Twitter className="w-5 h-5" />;
              </a>;
              <a href="https://facebook.com/ziontechgroup" className="text-gray-400 hover:text-blue-400 transition-colors">;
                <Facebook className="w-5 h-5" />;
              </a>;
              <a href="https://instagram.com/ziontechgroup" className="text-gray-400 hover:text-blue-400 transition-colors">;
                <Instagram className="w-5 h-5" />;
              </a>;
            </div>;
          </div>;

          {/* Footer Sections */}
          {footerSections.map((section) => (;
            <div key={section.title} className="space-y-4">;
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider">;
                {section.title}
              </h3>;
              <ul className="space-y-2">;
                {section.links.map((link) => (;
                  <li key={link.name}>;
                    <Link;
                      to={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm">;
                      {link.name}
                    </Link>;
                  </li>;
                ))}
            <div className="space-y-3">;
              {contactInfo.map((contact, index) => (;
                <div key={index} className="flex items-center space-x-3">;
                  <contact.icon className="h-5 w-5 text-cyan-400" />;
                  <div>;
                    <span className="text-slate-400 text-sm">{contact.label}: </span>;
                    <a ;
                      href={contact.href} ;
                      className="text-slate-300 hover:text-cyan-400 transition-colors duration-200">;
                      {contact.value}
                    </a>;
                  </div>;
                </div>;
              ))}
            </div>;

            {/* Social Links */}
            <div className="mt-6">;
              <h4 className="text-white font-semibold mb-3">Follow Us</h4>;
              <div className="flex space-x-3">;
                {socialLinks.map((social, index) => (;
                  <a;
                    key={index}
                    href={social.url}
                    target="_blank";
                    rel="noopener noreferrer";
                    className={`w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-lg transition-all duration-200 ${social.color} hover:scale-110`}
                  >;
                    {social.icon}
                  </a>;
                ))}
              </div>;
            </div>          </div>;

          {/* Footer Sections */}
          {footerSections.map((section, index) => (;
            <div key={index}>;
              <h4 className="text-white font-semibold mb-4">{section.title}</h4>;
              <ul className="space-y-2">;
                {section.links.map((link, linkIndex) => (;
                  <li key={linkIndex}>;
                    <Link;
                      to={link.path}
                      className="text-slate-400 hover:text-cyan-400 transition-colors duration-200 text-sm hover:translate-x-1 inline-block">;
                      {link.label}
                    </Link>;
                  </li>;
                ))}
              </ul>;
            </div>;
          ))}
        </div>;

        {/* Contact Information */}
        <div className="mt-12 pt-8 border-t border-gray-800">;
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">;
            <div className="flex items-center space-x-3">;
              <Phone className="w-5 h-5 text-blue-400" />;
              <div>;
                <p className="text-white font-medium">Phone</p>;
                <p className="text-gray-400 text-sm">+1 (555) 123-4567</p>;
              </div>;
            </div>;
            <div className="flex items-center space-x-3">;
              <Mail className="w-5 h-5 text-blue-400" />;
              <div>;
                <p className="text-white font-medium">Email</p>;
                <p className="text-gray-400 text-sm">contact@ziontechgroup.com</p>;
              </div>;
            </div>;
            <div className="flex items-center space-x-3">;
              <MapPin className="w-5 h-5 text-blue-400" />;
              <div>;
                <p className="text-white font-medium">Location</p>;
                <p className="text-gray-400 text-sm">San Francisco, CA</p>;
              </div>;
            </div>;
          </div>;
        </div>;

        {/* Newsletter Signup */}
        <div className="mt-8 pt-8 border-t border-gray-800">;
          <div className="max-w-md">;
            <h3 className="text-white font-semibold mb-3">Stay Updated</h3>;
            <p className="text-gray-400 text-sm mb-4">;
              Get the latest insights on AI, technology trends, and business innovation.;
            </p>;
            <div className="flex space-x-2">;
              <input;
                type="email";
                placeholder="Enter your email";
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent";
              />;
              <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300">;
                Subscribe;
              </button>;
            </div>;
          </div>;
        </div>;

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">;
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">;
            <div className="text-gray-400 text-sm">;
              © 2024 Zion Tech Group. All rights reserved.;
            </div>;
            <div className="flex space-x-6 text-sm">;
              <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">;
                Privacy Policy;
              </Link>;
              <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">;
                Terms of Service;
              </Link>;
              <Link to="/cookies" className="text-gray-400 hover:text-white transition-colors">;
                Cookie Policy;
              </Link>;
            </div>;
          </div>;
        </div>;
      </div>;
    </footer>;
  );
>>>>>>> origin/automation-fixes
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
