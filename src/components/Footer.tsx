import { Link } from 'react - router - dom';
import React from 'react';
export /**
import {

 * Footer function
 * @param {*} params - Function parameters
 * @returns {*} Function return value
 */
function Footer () {

  Twitter,
  Linkedin,
  Facebook,
  Instagram,
  Github,
  Mail,
  Phone,
  MapPin,
  Globe,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
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
  Cpu,
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
  Activity,
  MessageCircle,
  Search,
  BarChart,
  Users2,
  Settings,
  Palette
} from 'lucide - react';

  const currentYear = new Date () .getFullYear () ;

<<<<<<< HEAD
  // Handle scroll to show / hide scroll to top button
  React.useEffect ( () => {
    const handleScroll = useCallback ( () => {
      setShowScrollTop (window.scrollY > 400) ;
    };

  const footerSections = [
    {
      title: 'Company',
      icon: Building,
      links: [
        { name: 'About Us', path: '/about', icon: Users },
        { name: 'Our Story', path: '/about / story', icon: FileText },
        { name: 'Team', path: '/about / team', icon: Users },
        { name: 'Careers', path: '/careers', icon: Briefcase },
        { name: 'Partners', path: '/partners', icon: Network },
        { name: 'Press', path: '/press', icon: Newspaper },
        { name: 'Contact', path: '/contact', icon: Phone }
      ]
    },
    {
      title: 'AI & Quantum Solutions',
      icon: Brain,
      links: [
        { name: 'AI Solutions Overview', path: '/services / ai - solutions', icon: Brain },
        { name: 'Quantum Computing', path: '/services / quantum - computing', icon: Atom },
        { name: 'AI Business Intelligence', path: '/services / ai - business - intelligence', icon: TrendingUp },
        { name: 'AI Sales Copilot', path: '/services / ai - sales - copilot', icon: Users },
        { name: 'AI Marketing Automation', path: '/services / ai - marketing - automation', icon: TrendingUp },
        { name: 'AI Healthcare Platform', path: '/services / ai - healthcare - platform', icon: Heart },
        { name: 'AI Project Management', path: '/services / ai - project - management', icon: Target },
        { name: 'Quantum AI Hybrid Platform', path: '/services / ai - quantum - hybrid - platform', icon: Atom },
        { name: 'New Services 2025', path: '/new - services - 2025', icon: Star },
        { name: 'Enhanced Services 2025', path: '/enhanced - new - services - 2025', icon: Star }
      ]
    },
    {
      title: 'Advanced Technology',
      icon: Cpu,
      links: [
        { name: 'Cybersecurity Platform', path: '/services / ai - cybersecurity - platform', icon: Shield },
        { name: 'Quantum AI Trading', path: '/services / quantum - ai - trading - platform', icon: Atom },
        { name: 'Space Technology', path: '/services / space - tech', icon: Rocket },
        { name: 'Digital Twin', path: '/services / digital - twin', icon: Eye },
        { name: 'IoT Edge Computing', path: '/services / iot - edge - computing', icon: Activity },
        { name: 'Green IT Solutions', path: '/services / green - it', icon: Heart },
        { name: 'Zero Trust Network', path: '/services / zero - trust - network - access', icon: Lock },
        { name: 'Cloud & DevOps', path: '/services / cloud - devops', icon: Cloud }
      ]
    },
    {
      title: 'Core Services',
      icon: Zap,
      links: [
        { name: 'Digital Transformation', path: '/services / digital - transformation', icon: Rocket },
        { name: 'Data Analytics', path: '/services / data - analytics', icon: TrendingUp },
        { name: 'API Development', path: '/services / api - development', icon: Code },
        { name: 'Database Solutions', path: '/services / database - solutions', icon: Database },
        { name: 'Network Infrastructure', path: '/services / network - infrastructure', icon: Network },
        { name: 'Server Management', path: '/services / server - management', icon: Server },
        { name: 'Training & Education', path: '/training', icon: GraduationCap },
        { name: 'Support & Helpdesk', path: '/support', icon: HelpCircle }
      ]
    },
    {
      title: 'Resources',
      icon: FileText,
      links: [
        { name: 'Blog', path: '/blog', icon: FileText },
        { name: 'Case Studies', path: '/case - studies', icon: FileText },
        { name: 'Research & Development', path: '/research - development', icon: Activity },
        { name: 'Documentation', path: '/docs', icon: FileText },
        { name: 'API Reference', path: '/api', icon: Code },
        { name: 'Developer Portal', path: '/developer', icon: Code },
        { name: 'Sitemap', path: '/sitemap', icon: Map },
        { name: 'Comprehensive Sitemap', path: '/comprehensive - sitemap', icon: Map }
      ]
    }
  ];

    window.addEventListener ('scroll', handleScroll) ;
    return () => window.removeEventListener ('scroll', handleScroll) ;
  }, []) ;

  // Toggle section expansion (for mobile) const toggleSection = (title: string) => {
    setExpandedSections (prev => {
      const newSet = new Set (prev) ;
      if (newSet.has (title) ) {
        newSet.delete (title) ;
      } else {
        newSet.add (title) ;
      }
      return newSet;
    }) ;
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo ({
      top: 0,
      behavior: 'smooth'
    }) ;
  };

  return (<footer className="bg - zion - blue - dark border - t border - zion - purple / 30">
      {/* Main Footer Content */}
      <div role="button" className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 py - 12">
        <div role="button" className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 4 gap - 8">

          {/* Company Info */}
          <div role="button" className="space - y-4">
            <div role="button" className="flex items - center space - x-2">
              <div role="button" className="w - 10 h - 10 bg - gradient - to - r from - zion - cyan to - zion - purple rounded - lg flex items - center justify - center">
                <Zap className="w - 6 h - 6 text - white" />
              </div>
              <span className="text - xl font - bold text - white">Zion Tech Group</span>
            </div>
            <p className="text - zion - slate - light text - sm leading - relaxed">
              Leading provider of innovative AI, IT, and Micro SAAS solutions.
              Transforming businesses through cutting - edge technology and expert consulting.
            </p>
            <div role="button" className="flex space - x-4">
              <a href="https://linkedin.com / company / ziontechgroup" className="text - zion - slate - light hover:text - zion - cyan transition - colors">
                <Linkedin className="w - 5 h - 5" />
              </a>
              <a href="https://twitter.com / ziontechgroup" className="text - zion - slate - light hover:text - zion - cyan transition - colors">
                <Twitter className="w - 5 h - 5" />
              </a>
              <a href="https://facebook.com / ziontechgroup" className="text - zion - slate - light hover:text - zion - cyan transition - colors">
                <Facebook className="w - 5 h - 5" />
              </a>
              <a href="https://instagram.com / ziontechgroup" className="text - zion - slate - light hover:text - zion - cyan transition - colors">
                <Instagram className="w - 5 h - 5" />
              </a>
              <a href="https://youtube.com / ziontechgroup" className="text - zion - slate - light hover:text - zion - cyan transition - colors">
                <Youtube className="w - 5 h - 5" />
              </a>
              <a href="https://github.com / ziontechgroup" className="text - zion - slate - light hover:text - zion - cyan transition - colors">
                <Github className="w - 5 h - 5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div role="button" className="space - y-4">
            <h3 className="text - zion - cyan font - semibold text - lg flex items - center">
              <Zap className="w - 5 h - 5 mr - 2" />
              Services
            </h3>
            <ul className="space - y-2 text - sm">
              <li><Link to="/ai - services" className="text - zion - slate - light hover:text - zion - cyan transition - colors">AI Services</Link></li>
              <li><Link to="/it - services" className="text - zion - slate - light hover:text - zion - cyan transition - colors">IT Services</Link></li>
              <li><Link to="/micro - saas" className="text - zion - slate - light hover:text - zion - cyan transition - colors">Micro SAAS</Link></li>
              <li><Link to="/cloud - devops" className="text - zion - slate - light hover:text - zion - cyan transition - colors">Cloud & DevOps</Link></li>
              <li><Link to="/cybersecurity" className="text - zion - slate - light hover:text - zion - cyan transition - colors">Cybersecurity</Link></li>
              <li><Link to="/quantum - computing" className="text - zion - slate - light hover:text - zion - cyan transition - colors">Quantum Computing</Link></li>
              <li><Link to="/blockchain" className="text - zion - slate - light hover:text - zion - cyan transition - colors">Blockchain Solutions</Link></li>
              <li><Link to="/digital - transformation" className="text - zion - slate - light hover:text - zion - cyan transition - colors">Digital Transformation</Link></li>
            </ul>
          </div>

          {/* Solutions */}
          <div role="button" className="space - y-4">
            <h3 className="text - zion - cyan font - semibold text - lg flex items - center">
              <Brain className="w - 5 h - 5 mr - 2" />
              Solutions
            </h3>
            <ul className="space - y-2 text - sm">
              <li><Link to="/enterprise" className="text - zion - slate - light hover:text - zion - cyan transition - colors">Enterprise Solutions</Link></li>
              <li><Link to="/healthcare" className="text - zion - slate - light hover:text - zion - cyan transition - colors">Healthcare Tech</Link></li>
              <li><Link to="/financial" className="text - zion - slate - light hover:text - zion - cyan transition - colors">Financial Solutions</Link></li>
              <li><Link to="/manufacturing" className="text - zion - slate - light hover:text - zion - cyan transition - colors">Manufacturing</Link></li>
              <li><Link to="/retail" className="text - zion - slate - light hover:text - zion - cyan transition - colors">Retail Solutions</Link></li>
              <li><Link to="/government" className="text - zion - slate - light hover:text - zion - cyan transition - colors">Government</Link></li>
              <li><Link to="/education" className="text - zion - slate - light hover:text - zion - cyan transition - colors">Education</Link></li>
              <li><Link to="/startup" className="text - zion - slate - light hover:text - zion - cyan transition - colors">Startup Solutions</Link></li>
            </ul>
          </div>

          {/* Company & Resources */}
          <div role="button" className="space - y-4">
            <h3 className="text - zion - cyan font - semibold text - lg flex items - center">
              <Building2 className="w - 5 h - 5 mr - 2" />
              Company
            </h3>
            <ul className="space - y-2 text - sm">
              <li><Link to="/about" className="text - zion - slate - light hover:text - zion - cyan transition - colors">About Us</Link></li>
              <li><Link to="/team" className="text - zion - slate - light hover:text - zion - cyan transition - colors">Our Team</Link></li>
              <li><Link to="/careers" className="text - zion - slate - light hover:text - zion - cyan transition - colors">Careers</Link></li>
              <li><Link to="/partners" className="text - zion - slate - light hover:text - zion - cyan transition - colors">Partners</Link></li>
              <li><Link to="/news" className="text - zion - slate - light hover:text - zion - cyan transition - colors">News</Link></li>
              <li><Link to="/events" className="text - zion - slate - light hover:text - zion - cyan transition - colors">Events</Link></li>
              <li><Link to="/contact" className="text - zion - slate - light hover:text - zion - cyan transition - colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div role="button" className="mt - 12 pt - 8 border - t border - zion - purple / 20">
          <div role="button" className="grid grid - cols - 1 md:grid - cols - 3 gap - 6">
            <div role="button" className="flex items - center space - x-3">
              <div role="button" className="w - 10 h - 10 bg - zion - purple / 20 rounded - lg flex items - center justify - center">
                <Phone className="w - 5 h - 5 text - zion - cyan" />
              </div>
              <div>
                <p className="text - zion - slate - light text - sm">Phone</p>
                <p className="text - white font - medium">+1 302 464 0950</p>
              </div>
            </div>

            <div role="button" className="flex items - center space - x-3">
              <div role="button" className="w - 10 h - 10 bg - zion - purple / 20 rounded - lg flex items - center justify - center">
                <Mail className="w - 5 h - 5 text - zion - cyan" />
              </div>
              <div>
                <p className="text - zion - slate - light text - sm">Email</p>
                <p className="text - white font - medium">kleber@ziontechgroup.com</p>
              </div>
            </div>

            <div role="button" className="flex items - center space - x-3">
              <div role="button" className="w - 10 h - 10 bg - zion - purple / 20 rounded - lg flex items - center justify - center">
                <MapPin className="w - 5 h - 5 text - zion - cyan" />
              </div>
              <div>
                <p className="text - zion - slate - light text - sm">Address</p>
                <p className="text - white font - medium">364 E Main St STE 1008 < br />Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Links */}
        <div role="button" className="mt - 8 pt - 6 border - t border - zion - purple / 20">
          <div role="button" className="grid grid - cols - 1 md:grid - cols - 4 gap - 6 text - sm">
            <div>
              <h4 className="text - zion - cyan font - medium mb - 3">Resources</h4>
              <ul className="space - y-2 text - zion - slate - light">
                <li><Link to="/blog" className="hover:text - zion - cyan transition - colors">Blog</Link></li>
                <li><Link to="/docs" className="hover:text - zion - cyan transition - colors">Documentation</Link></li>
                <li><Link to="/white - papers" className="hover:text - zion - cyan transition - colors">White Papers</Link></li>
                <li><Link to="/webinars" className="hover:text - zion - cyan transition - colors">Webinars</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text - zion - cyan font - medium mb - 3">Support</h4>
              <ul className="space - y-2 text - zion - slate - light">
                <li><Link to="/help" className="hover:text - zion - cyan transition - colors">Help Center</Link></li>
                <li><Link to="/contact" className="hover:text - zion - cyan transition - colors">Contact Support</Link></li>
                <li><Link to="/training" className="hover:text - zion - cyan transition - colors">Training</Link></li>
                <li><Link to="/faq" className="hover:text - zion - cyan transition - colors">FAQ</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text - zion - cyan font - medium mb - 3">Legal</h4>
              <ul className="space - y-2 text - zion - slate - light">
                <li><Link to="/privacy" className="hover:text - zion - cyan transition - colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text - zion - cyan transition - colors">Terms of Service</Link></li>
                <li><Link to="/security" className="hover:text - zion - cyan transition - colors">Security</Link></li>
                <li><Link to="/compliance" className="hover:text - zion - cyan transition - colors">Compliance</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text - zion - cyan font - medium mb - 3">Connect</h4>
              <ul className="space - y-2 text - zion - slate - light">
                <li><Link to="/marketplace" className="hover:text - zion - cyan transition - colors">Marketplace</Link></li>
                <li><Link to="/talent" className="hover:text - zion - cyan transition - colors">Talent Network</Link></li>
                <li><Link to="/community" className="hover:text - zion - cyan transition - colors">Community</Link></li>
                <li><Link to="/research - development" className="hover:text - zion - cyan transition - colors">R & D</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div role="button" className="bg - zion - blue - darker border - t border - zion - purple / 20">
        <div role="button" className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 py - 6">
          <div role="button" className="flex flex - col md:flex - row justify - between items - center space - y-4 md:space - y-0">
            <div role="button" className="flex items - center space - x-4 text - sm text - zion - slate - light">
              <span>&copy; {currentYear} Zion Tech Group. All rights reserved.</span>
              <span className="hidden md:inline">•</span>
              <span className="hidden md:inline">Empowering Innovation</span>
            </div>

            <div role="button" className="flex items - center space - x-6 text - sm">
              <Link to="/sitemap" className="text - zion - slate - light hover:text - zion - cyan transition - colors">Sitemap</Link>
              <Link to="/accessibility" className="text - zion - slate - light hover:text - zion - cyan transition - colors">Accessibility</Link>
              <Link to="/status" className="text - zion - slate - light hover:text - zion - cyan transition - colors">System Status</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button aria-label="Button" aria - label="Button" aria - label="Button" aria - label="Button" onClick={scrollToTop}
        className="fixed bottom - 6 right - 6 w - 12 h - 12 bg - gradient - to - r from - zion - cyan to - zion - purple rounded - full shadow - lg shadow - zion - purple / 25 hover:shadow - xl hover:shadow - zion - purple / 40 transition - all duration - 300 hover:-translate - y-1 flex items - center justify - center text - white"
        aria - label="Back to top"
      >
        <ArrowUp className="w - 5 h - 5" />
      </button>
    </footer>) ;
}