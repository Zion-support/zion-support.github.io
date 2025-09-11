import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronUp } from 'lucide-react';

const footerSections = [
  {
    title: 'Company',
    icon: Globe,
    links: [
      { name: 'About Us', path: '/about', icon: Users },
      { name: 'Partners', path: '/partners', icon: Users },
      { name: 'Careers', path: '/careers', icon: Briefcase },
      { name: 'AI Solutions', path: '/ai-solutions', icon: Brain },
      { name: 'Blog', path: '/blog', icon: Newspaper },
      { name: 'Contact', path: '/contact', icon: Phone },
      { name: 'News', path: '/news', icon: Newspaper },
      { name: 'Case Studies', path: '/case-studies', icon: FileText },
      { name: 'FAQ', path: '/faq', icon: HelpCircle },
      { name: 'Help Center', path: '/help', icon: HelpCircle },
    ],
  },
  {
    title: 'AI & Research Services',
    icon: Brain,
    links: [
      {
        name: 'AI Autonomous Research Assistant',
        path: '/services/ai-autonomous-research-assistant',
        icon: Brain,
      },
      {
        name: 'AI Content Marketing Suite',
        path: '/services/ai-content-marketing-suite',
        icon: FileText,
      },
      {
        name: 'AI Supply Chain Optimization',
        path: '/services/ai-supply-chain-optimization',
        icon: TrendingUp,
      },
      {
        name: 'AI Healthcare Platform',
        path: '/services/ai-healthcare-platform',
        icon: Heart,
      },
      {
        name: 'AI Business Intelligence',
        path: '/services/ai-business-intelligence',
        icon: BarChart3,
      },
      {
        name: 'AI Project Management',
        path: '/services/ai-project-management',
        icon: Target,
      },
      {
        name: 'AI Sales Copilot',
        path: '/services/ai-sales-copilot',
        icon: Users,
      },
      {
        name: 'AI Marketing Automation',
        path: '/services/ai-marketing-automation',
        icon: TrendingUp,
      },
      {
        name: 'AI Financial Analytics',
        path: '/services/ai-financial-analytics',
        icon: DollarSign,
      },
      {
        name: 'AI Customer Support Automation',
        path: '/services/ai-customer-support-automation',
        icon: MessageCircle,
      },
    ],
  },
  {
    title: 'Advanced Technology',
    icon: Cpu,
    links: [
      {
        name: 'AI Quantum Hybrid Platform',
        path: '/services/ai-quantum-hybrid-platform',
        icon: Cpu,
      },
      {
        name: 'AI Cybersecurity Platform',
        path: '/services/ai-cybersecurity-platform',
        icon: Shield,
      },
      {
        name: 'Quantum Computing',
        path: '/services/quantum-computing',
        icon: Atom,
      },
      { name: 'Space Technology', path: '/space-tech', icon: Satellite },
      { name: 'Digital Twin', path: '/services/digital-twin', icon: Eye },
      {
        name: 'IoT Edge Computing',
        path: '/services/iot-edge-computing',
        icon: Network,
      },
      {
        name: 'Zero Trust Network',
        path: '/services/zero-trust-network-access',
        icon: Lock,
      },
      {
        name: 'Sustainable Technology',
        path: '/services/sustainable-technology',
        icon: Leaf,
      },
      {
        name: 'AI Predictive Maintenance',
        path: '/services/ai-predictive-maintenance',
        icon: TrendingUp,
      },
    ],
  },
  {
    title: 'Cloud & Infrastructure',
    icon: Cloud,
    links: [
      { name: 'Cloud DevOps', path: '/services/cloud-devops', icon: Cloud },
      {
        name: 'IT Infrastructure',
        path: '/services/it-infrastructure',
        icon: Server,
      },
      {
        name: 'FinOps Advisor',
        path: '/services/finops-advisor',
        icon: DollarSign,
      },
      {
        name: 'Cloud FinOps Optimizer',
        path: '/services/cloud-finops-optimizer',
        icon: BarChart3,
      },
      { name: 'IT Consulting', path: '/it-consulting', icon: Cpu },
      {
        name: 'Enterprise Solutions',
        path: '/solutions/enterprise',
        icon: Building,
      },
      {
        name: 'Healthcare Solutions',
        path: '/solutions/healthcare',
        icon: Heart,
      },
    ],
  },
  {
    title: 'Micro SaaS Solutions',
    icon: ShoppingCart,
    links: [
      { name: 'Micro SaaS Platform', path: '/micro-saas', icon: ShoppingCart },
      { name: 'Micro CRM', path: '/services/micro-crm', icon: Users },
      {
        name: 'Helpdesk Platform',
        path: '/services/helpdesk',
        icon: MessageCircle,
      },
      {
        name: 'Website Analytics',
        path: '/services/website-analytics',
        icon: BarChart3,
      },
      { name: 'IT Helpdesk', path: '/services/it-helpdesk', icon: HelpCircle },
      {
        name: 'Affiliate Tracking',
        path: '/services/affiliate-tracking',
        icon: TrendingUp,
      },
      {
        name: 'Mobile Survey',
        path: '/services/mobile-survey',
        icon: Smartphone,
      },
      {
        name: 'Email Sequencer',
        path: '/services/email-sequencer',
        icon: Mail,
      },
      {
        name: 'Podcast Transcription',
        path: '/services/podcast-transcription',
        icon: Video,
      },
      {
        name: 'Returns Management',
        path: '/services/returns-management',
        icon: Truck,
      },
    ],
  },
  {
    title: 'Solutions',
    icon: Target,
    links: [
      {
        name: 'Enterprise Solutions',
        path: '/solutions/enterprise',
        icon: Building,
      },
      {
        name: 'Healthcare Solutions',
        path: '/solutions/healthcare',
        icon: Heart,
      },
      {
        name: 'Financial Solutions',
        path: '/solutions/financial',
        icon: DollarSign,
      },
      {
        name: 'Government Solutions',
        path: '/solutions/government',
        icon: Building,
      },
      {
        name: 'Manufacturing Solutions',
        path: '/solutions/manufacturing',
        icon: Cpu,
      },
      {
        name: 'Retail Solutions',
        path: '/solutions/retail',
        icon: ShoppingCart,
      },
    ],
  },
  {
    title: 'Support & Resources',
    icon: HelpCircle,
    links: [
      { name: 'Help Center', path: '/help', icon: HelpCircle },
      { name: 'FAQ', path: '/faq', icon: HelpCircle },
      { name: 'Documentation', path: '/documentation', icon: BookOpen },
      { name: 'API Documentation', path: '/api-docs', icon: Code },
      { name: 'Developer Portal', path: '/developer', icon: Cpu },
      { name: 'Training', path: '/training', icon: GraduationCap },
      { name: 'Blog', path: '/blog', icon: BookOpen },
      { name: 'News', path: '/news', icon: Newspaper },
      { name: 'Case Studies', path: '/case-studies', icon: FileText },
      { name: 'Pricing', path: '/pricing', icon: DollarSign },
      { name: 'Contact Support', path: '/contact', icon: MessageCircle },
      { name: 'Marketplace', path: '/marketplace', icon: ShoppingCart },
      { name: 'Sitemap', path: '/sitemap', icon: FileText },
    ],
  },
];

const socialLinks = [
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://linkedin.com/company/ziontechgroup',
    color: 'hover:text-blue-500',
  },
  {
    name: 'GitHub',
    icon: Github,
    href: 'https://github.com/ziontechgroup',
    color: 'hover:text-gray-400',
  },
  {
    name: 'Twitter',
    icon: Twitter,
    href: 'https://twitter.com/ziontechgroup',
    color: 'hover:text-blue-400',
  },
  {
    name: 'Facebook',
    icon: Facebook,
    href: 'https://facebook.com/ziontechgroup',
    color: 'hover:text-blue-600',
  },
  {
    name: 'Instagram',
    icon: Instagram,
    href: 'https://instagram.com/ziontechgroup',
    color: 'hover:text-pink-500',
  },
  {
    name: 'YouTube',
    icon: TestTube,
    href: 'https://youtube.com/ziontechgroup',
    color: 'hover:text-red-600',
  },
];

export function Footer() {
  const [expandedSections, setExpandedSections] = React.useState<Set<string>>(
    new Set()
  );
  const [showScrollTop, setShowScrollTop] = React.useState(false);

  // Handle scroll to show/hide scroll to top button
  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
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

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className='bg-gray-900 text-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          <div>
            <h3 className='text-lg font-semibold mb-4'>Zion Tech Group</h3>
            <p className='text-gray-400'>
              Leading technology solutions for modern businesses.
            </p>
          </div>

          <div>
            <h4 className='text-md font-semibold mb-4'>Services</h4>
            <ul className='space-y-2'>
              <li>
                <Link to='/services' className='text-gray-400 hover:text-white'>
                  Our Services
                </Link>
              </li>
              <li>
                <Link to='/pricing' className='text-gray-400 hover:text-white'>
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className='text-md font-semibold mb-4'>Company</h4>
            <ul className='space-y-2'>
              <li>
                <Link to='/about' className='text-gray-400 hover:text-white'>
                  About Us
                </Link>
              </li>
              <li>
                <Link to='/contact' className='text-gray-400 hover:text-white'>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className='text-md font-semibold mb-4'>Contact</h4>
            <p className='text-gray-400'>Email: kleber@ziontechgroup.com</p>
            <p className='text-gray-400'>Phone: +1 302 464 0950</p>
          </div>
        </div>

        <div className='border-t border-gray-800 mt-8 pt-8 text-center'>
          <p className='text-gray-400'>
            © 2024 Zion Tech Group. All rights reserved.
          </p>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className='fixed bottom-8 right-8 bg-cyan-600 hover:bg-cyan-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50'
      >
        <ChevronUp className='w-5 h-5' />
      </button>
    </footer>
  );
}

export default Footer;
