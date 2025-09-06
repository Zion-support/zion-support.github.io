
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
const Header: React.FC = () => {;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {;
    const handleScroll = () => {;
      setIsScrolled(window && window.scrollY > 0);
    };

    window && window.addEventListener('scroll', handleScroll);
    return () => window && window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [;
    { name: 'Home', href: '/' },;
    { name: 'Services', href: '/services' },;
    { name: 'About', href: '/about' },;
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <headerclassName={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>;
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
        <div className="flex justify-between items-center h-16">;
import { ;
  Menu,;
  X,;
  Home,;
  Users,;
  Briefcase,;
  Phone,;
  Mail,;
  ChevronDown,;
  Brain,;
  Shield,;
  Cloud,;
  Database,;
  Network,;
  Zap,;
  Target,;
  DollarSign,;
  BookOpen,;
  Calendar,;
  FileText,;
  Award,;
  Globe,;
  Search,;
  ArrowRight;
} from 'lucide-react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
const Header: React.FC = () => {;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  useEffect(() => {;
    const handleScroll = () => {;
      setIsScrolled(window && window.scrollY > 20);
};
    window && window.addEventListener('scroll', handleScroll);
    return () => window && window.removeEventListener('scroll', handleScroll);
}, []);
  const navigation = [;
    { name: 'Home', href: '/' },;
    { name: 'Services', href: '/services' },;
    { name: 'Solutions', href: '/solutions' },;
    { name: 'About', href: '/about' },;
    { name: 'Resources', href: '/blog' },;
    { name: 'Careers', href: '/careers' },;
    { name: 'Contact', href: '/contact' },;
    { name: 'Home', href: '/', icon: Home },;
    { ;
      name: 'Services',;
      href: '/services',;
      icon: Briefcase,;
      dropdown: [;
        { name: 'AI Services', href: '/ai-services', icon: Brain, description: 'Artificial Intelligence solutions' },;
        { name: 'IT Services', href: '/it-services', icon: Network, description: 'Information Technology services' },;
        { name: 'Micro SaaS', href: '/micro-saas', icon: Cloud, description: 'Micro Software as a Service' },;
        { name: 'Cybersecurity', href: '/services/ai-autonomous-cybersecurity-platform', icon: Shield, description: 'AI-powered security solutions' },;
        { name: 'Customer Experience', href: '/services/ai-customer-experience-platform', icon: Users, description: 'AI-driven customer experience' },;
        { name: 'Healthcare AI', href: '/services/ai-healthcare-diagnostics', icon: Brain, description: 'Medical AI diagnostics' }
      ];
},;
    { name: 'About', href: '/about', icon: Users },;
    { ;
      name: 'Resources',;
      href: '#',;
      icon: BookOpen,;
      dropdown: [;
        { name: 'Blog', href: '/blog', icon: BookOpen, description: 'Latest insights and trends' },;
        { name: 'Case Studies', href: '/case-studies', icon: Target, description: 'Success stories' },;
        { name: 'White Papers', href: '/white-papers', icon: FileText, description: 'Research and insights' },;
        { name: 'Webinars', href: '/webinars', icon: Calendar, description: 'Expert-led sessions' },;
        { name: 'Pricing Guide', href: '/pricing-guide', icon: DollarSign, description: 'Comprehensive pricing info' }
      ];
},;
    { name: 'Team', href: '/team', icon: Award },;
    { name: 'Contact', href: '/contact', icon: Phone }
  ];
  const serviceCategories = [;
    { ;
      name: 'Micro SaaS',;
      href: '/services/micro-saas',;
      description: 'Innovative focused software solutions',;
      popular: ['AI Content Generator', 'Social Media Scheduler', 'Invoice Management', 'Time Tracking'];
},;
    { ;
      name: 'IT Services',;
      href: '/services/it-services',;
      description: 'Enterprise infrastructure & security',;
      popular: ['Cloud Migration', 'Edge Computing', 'Zero Trust Security', '5G Networks'];
},;
    { ;
      name: 'AI Services',;
      href: '/services/ai-services',;
      description: 'Cutting-edge AI & machine learning',;
      popular: ['Quantum ML', 'Autonomous Systems', 'AI Cybersecurity', 'Drug Discovery'];
},;
  ];
  const serviceCategories = [;
    { name: 'AI Solutions', href: '/services/ai-solutions' },;
    { name: 'Cloud & DevOps', href: '/services/cloud' },;
    { name: 'Cybersecurity', href: '/services/cybersecurity' },;
    { name: 'Data & Analytics', href: '/services/data' },;
    { name: 'Micro SaaS', href: '/services/micro-saas' },;
    { name: 'Digital Transformation', href: '/services/transformation' },;
  ];
  const solutionCategories = [;
    { name: 'Enterprise', href: '/solutions/enterprise' },;
    { name: 'SMB', href: '/solutions/smb' },;
    { name: 'Startup', href: '/solutions/startup' },;
  ];
  const resourceCategories = [;
    { name: 'Documentation', href: '/docs' },;
    { name: 'Blog', href: '/blog' },;
    { name: 'Partners', href: '/partners' },;
    { name: 'Team', href: '/team' },;
    { name: 'Careers', href: '/careers' },;
  ];
  const isActive = (path: string) => location && location.pathname === path;
  const resourceCategories = [;
    { name: 'Blog', href: '/blog' },;
    { name: 'Case Studies', href: '/case-studies' },;
    { name: 'Webinars', href: '/webinars' },;
    { name: 'Documentation', href: '/documentation' },;
    { name: 'API Reference', href: '/api' },;
    { name: 'Help Center', href: '/help' },;
    { name: 'FAQ', href: '/faq' },;
  ];
  return (
    <headerclassName={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50' 
        : 'bg-transparent'
}`}>;
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
        <div className="flex items-center justify-between h-16">;
          {/* Logo */}
          <div className="flex-shrink-0">;
            <Link href="/" className="text-2xl font-bold text-blue-600">;
              Zion Tech Group;
            </Link>;
          </div>;

          {/* Desktop Navigation */}
          <div className="hidden md:block">;
            <div className="ml-10 flex items-baseline space-x-4">;
              {navigation && navigation.map((item) => (;
                <Link
                  key={item && item.name}
                  href={item && item.href}
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">;
                  {item && item.name}
                </Link>;
              ))}
            </div>;
          </div>;

          {/* Mobile menu button */}
          <div className="md:hidden">;
            <button              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 p-2";
            >;
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>;
          </div>;
        </div>;

        {/* Mobile Navigation */}
        <AnimatePresence>;
          {isMenuOpen && (;
            <motion&& motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden">;
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">;
                {navigation && navigation.map((item) => (;
                  <Link
                    key={item && item.name}
                    href={item && item.href}
                    className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >;
                    {item && item.name}
                  </Link>;
                ))}
              </div>;
            </motion && motion.div>;
          )}
        </AnimatePresence>;
      </nav>;
    </header>;
  );
};

export default Header;
import React,{ useState,useEffect } from 'react'; import Link from 'next/link'; import { useRouter } from 'next/router'; import { motion,AnimatePresence } from 'framer-motion'; import { Menu,X,Home,Users,Briefcase,Phone,Mail,ChevronDown,Brain,Shield,Cloud,Database,Network,Zap,Target,DollarSign,BookOpen,Calendar,FileText,Award,Globe,Search,ArrowRight } from 'lucide-react'; import { Button } from '../ui/Button'; import { Badge } from '../ui/Badge'; const Header: React.FC = () => { const [isScrolled,setIsScrolled] = useState(false); useEffect(() => { const handleScroll = () => { setIsScrolled(window && window.scrollY > 0)}; window && window.addEventListener('scroll',handleScroll); return () => window && window.removeEventListener('scroll',handleScroll)},[]); const navigationItems = [ { name: 'Home',href: '/' },{ name: 'Services',href: '/services' },{ name: 'Solutions',href: '/solutions' },{ name: 'About',href: '/about' },{ name: 'Careers',href: '/careers' },{ name: 'Contact',href: '/contact' },]; return ( <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur border-b border-slate-800"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between"> <Link href="/" className="text-white font-bold">Zion Tech Group</Link> <nav className="hidden md:flex items-center gap-6 text-sm"> {navigationItems && navigationItems.map((item) => ( <Link key={item && item.name} href={item && item.href} className="text-gray-300 hover:text-white"> {item && item.name} </Link> ))} </nav> </div> </header> )} export default Header;
export default Header;
