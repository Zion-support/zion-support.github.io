import React from 'react';
import { Link } from 'react-router-dom';
import {
  Twitter,
  Linkedin,
  Facebook,
  Instagram,
  Github,
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
  ExternalLink,
  Clock,
  Award,
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
  ChevronDown
} from 'lucide-react';

export function Footer() {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['company']));

  // Handle scroll to show/hide scroll to top button
  React.useEffect(() => {
  // TODO: Add dependencies if needed
}, []);
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
export default function Footer() {
  const footerSections = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Mission', href: '/about#mission' },
        { name: 'Leadership Team', href: '/about#team' },
        { name: 'Careers', href: '/careers' },
        { name: 'Press & News', href: '/press' },
        { name: 'Partners', href: '/partners' }
      ]
    },
    {
      title: 'Services',
      links: [
        { name: 'AI Solutions', href: '/services/ai' },
        { name: 'Cybersecurity', href: '/services/cybersecurity' },
        { name: 'Cloud Services', href: '/services/cloud' },
        { name: 'Digital Transformation', href: '/services/digital' },
        { name: 'IT Consulting', href: '/services/consulting' },
        { name: 'Micro SAAS', href: '/services/micro-saas' }
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
import { Heart, Mail, Phone, MapPin, Globe, ArrowUp, ArrowRight } from 'lucide-react';
ursor/automate-test-fix-improve-and-merge-code-99d1,"});,"})"
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
  Server
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
  Palette} from "lucide-react
export function Footer(...args: an y[]): any {,
  const currentYear = new Date().getFullYear(),
  const [activeSection, setActiveSection] = useState<any>(null)"
  const footerSections = []}, {"
      title: "AI & Quantum Solutions",
icon: Brai n,"
category: "Core Services","
services: [ { name: "AI Customer Success Automation", href: "/services/ai-customer-success-automation", badge: "Popular" }, { name: "AI Healthcare Analytics Platform", href: "/services/ai-healthcare-analytics-platform", badge: "New" }, { name: "AI Financial Risk Management", href: "/services/ai-financial-risk-management-enhanced", badge: "Featured" }, { name: "AI Supply Chain Optimization", href: "/services/ai-supply-chain-optimization-enhanced", badge: "Trending" }, { name: "AI Legal Document Automation", href: "/services/ai-legal-document-automation-platform", badge: "Innovative" }, { name: "AI Mental Health Support", href: "/services/ai-mental-health-support-platform", badge: "Healthcare" }, { name: "AI Smart Home Energy Management", href: "/services/ai-smart-home-energy-management-platform", badge: "IoT" }, { name: "AI Autonomous Logistics", href: "/services/ai-autonomous-logistics-platform", badge: "Logistics" }, { name: "AI-Powered SEO", href: "/services/ai-powered-seo", badge: "Marketing" }, { name: "Quantum Edge Computing", href: "/services/quantum-edge-computing-solutions", badge: "Quantum" }, { name: "AI Space Technology", href: "/services/ai-space-technology-platform", badge: "Space Tech" }, { name: "AI Carbon Footprint Management", href: "/services/ai-carbon-footprint-management-platform", badge: "Green Tech" }, { name: "AI Autonomous Manufacturing", href: "/services/ai-autonomous-manufacturing-platform", badge: "Manufacturing" }, { name: "AI Enterprise Resource Planning", href: "/services/ai-enterprise-resource-planning", badge: "ERP" }, { name: "AI Autonomous Business Operations", href: "/services/ai-autonomous-business-operations-platform", badge: "Automation" }, { name: "AI Customer Experience Analytics", href: "/services/ai-customer-experience-analytics-platform", badge: "Analytics" }"
      title: "AI Cybersecurity & Infrastructure",
icon: Shiel d,"
category: "Security & Infrastructure","
services: [ { name: "AI-Powered DevOps Automation", href: "/services/ai-powered-devops-automation", badge: "New" }, { name: "AI-Powered Cybersecurity Suite", href: "/services/ai-powered-cybersecurity-suite", badge: "Security" }, { name: "Enterprise IT Infrastructure Management", href: "/services/enterprise-it-infrastructure-management", badge: "Infrastructure" }, { name: "Cloud Migration & Optimization", href: "/services/cloud-migration-and-optimization", badge: "Cloud" }, { name: "AI Data Analytics Platform", href: "/services/ai-data-analytics-platform", badge: "Analytics" }, { name: "AI DevOps Automation", href: "/services/ai-devops-automation", badge: "DevOps" }, { name: "Edge Computing Platform", href: "/services/edge-computing-platform", badge: "Edge" }"
      title: "Micro SaaS Solutions",
icon: Cod e,"
category: "Micro SaaS","
services: [ { name: "AI Email Automation Suite", href: "/services/ai-email-automation-suite", badge: "New" }, { name: "AI Social Media Scheduler", href: "/services/ai-social-media-scheduler", badge: "New" }, { name: "AI Customer Insights Platform", href: "/services/ai-customer-insights-platform", badge: "New" }, { name: "Micro CRM", href: "/services/micro-crm", badge: "Popular" }, { name: "Helpdesk Platform", href: "/services/helpdesk-platform", badge: "Support" }, { name: "Website Analytics", href: "/services/website-analytics", badge: "Analytics" }"
      title: "Solutions","
links: [ { name: "Enterprise Solutions", href: "/enterprise" }, { name: "Healthcare Tech", href: "/solutions/healthcare" }, { name: "Financial Solutions", href: "/financial-solutions" }, { name: "Manufacturing", href: "/manufacturing-solutions" }, { name: "Industry Solutions", href: "/industry-solutions" }, { name: "Emerging Tech", href: "/emerging-tech" }"
      title: "Company","
links: [ { name: "About Us", href: "/about" }, { name: "Our Team", href: "/about/team" }, { name: "Careers", href: "/careers" }, { name: "Partners", href: "/partners" }, { name: "News & Updates", href: "/news" }, { name: "Case Studies", href: "/case-studies" }"
      title: "Quantum Computing & Emerging Tech",
icon: Ato m,"
services: [ { name: "AI-Quantum Hybrid Computing Platform", href: "/services/ai-quantum-hybrid-platform" }, { name: "Quantum Computing as a Service", href: "/services/quantum-computing-as-a-service" }, { name: "AI Space Technology Platform", href: "/services/ai-space-technology-platform" }, { name: "AI IoT Edge Computing Platform", href: "/services/ai-iot-edge-computing-platform" }"
      title: "Resources","
links: [ { name: "Documentation", href: "/docs" }, { name: "White Papers", href: "/white-papers" }, { name: "Support Center", href: "/help" }, { name: "Training", href: "/training" }, { name: "Blog", href: "/blog" }, { name: "Research", href: "/research-development" }

      ]}

  ]"
  const solutions = []

  const contactInfo = [
    { icon: Mai l, label: "Email", value: "kleber@ziontechgroup.com", href: "mailto: klebe r@ziontechgroup.com" },
    { icon: Phon e, label: "Phone", value: "+1 302 464 0950", href: "tel:+13024640950" },
    { icon: MapPi n, label: "Address", value: "364 E Main St STE 1008, Middletown DE 19709", href: "#" },
    { icon: Glob e, label: "Website", value: "ziontechgroup.com", href: "https://ziontechgroup.com" }
];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm: p x-6 lg: p x-8 py-12">
        <div className="grid grid-cols-1 md: gri d-cols-2 lg: gri d-cols-5 gap-8">
          {/* Company Info */}
<div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white"  />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Leading provider of innovative AI, IT, and Micro SAAS solutions. 
              Transforming businesses through cutting-edge technology and expert consulting.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/company/ziontechgroup" className="text-gray-400 hover: tex t-blue-400 transition-colors">
                <Linkedin className="w-5 h-5"  />
              </a>
              <a href="https://twitter.com/ziontechgroup" className="text-gray-400 hover: tex t-blue-400 transition-colors">
                <Twitter className="w-5 h-5"  />
              </a>
              <a href="https://facebook.com/ziontechgroup" className="text-gray-400 hover: tex t-blue-400 transition-colors">
                <Facebook className="w-5 h-5"  />
              </a>
              <a href="https://instagram.com/ziontechgroup" className="text-gray-400 hover: tex t-blue-400 transition-colors">
                <Instagram className="w-5 h-5"  />
              </a>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-400 hover: tex t-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
</ul>
            </div>
          ))}
        </div>

{/* Contact Information */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md: gri d-cols-3 gap-8">
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-blue-400"  />
              <div>
                <p className="text-white font-medium">Phone</p>
                <p className="text-gray-400 text-sm">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-blue-400"  />
              <div>
                <p className="text-white font-medium">Email</p>
                <p className="text-gray-400 text-sm">contact@ziontechgroup.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-blue-400"  />
              <div>
                <p className="text-white font-medium">Location</p>
                <p className="text-gray-400 text-sm">San Francisco, CA</p>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="max-w-md">
            <h3 className="text-white font-semibold mb-3">Stay Updated</h3>
            <p className="text-gray-400 text-sm mb-4">
              Get the latest insights on AI, technology trends, and business innovation.
            </p>
            <div className="flex space-x-2">
              <input type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus: outlin e-none focus: rin g-2 focus: rin g-blue-500 focus: borde r-transparent"
               />
              <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover: fro m-blue-700 hover: t o-purple-700 transition-all duration-300">
Subscribe
              </button>
            </div>
          </div>
        </div>

{/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md: fle x-row justify-between items-center space-y-4 md: spac e-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Zion Tech Group. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover: tex t-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover: tex t-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-400 hover: tex t-white transition-colors">
Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
</footer>
  );
}
