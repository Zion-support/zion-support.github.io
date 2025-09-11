

    { name: 'Contact', href: '/contact', icon: Phone }
  ];

  const service_categories = [;
    {
      name: 'Micro SaaS',
      href: '/services / micro - saas',
      description: 'Innovative focused software solutions',
      popular: ['AI Content Generator', 'Social Media Scheduler', 'Invoice Management', 'Time Tracking'];
},
    {
      name: 'IT Services',
      href: '/services / it - services',
      description: 'Enterprise infrastructure & security',
      popular: ['Cloud Migration', 'Edge Computing', 'Zero Trust Security', '5G Networks'];
},
    {
      name: 'AI Services',
      href: '/services / ai - services',
      description: 'Cutting - edge AI & machine learning',

      popular: ['Quantum ML', 'Autonomous Systems', 'AI Cybersecurity', 'Drug Discovery'];
}
  ];

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

=======
  const service_categories = [;
    { name: 'AI Solutions', href: '/services / ai - solutions' },
    { name: 'Cloud & DevOps', href: '/services / cloud' },
    { name: 'Cybersecurity', href: '/services / cybersecurity' },
    { name: 'Data & Analytics', href: '/services / data' },
    { name: 'Micro SaaS', href: '/services / micro - saas' },
    { name: 'Digital Transformation', href: '/services / transformation' },
  ];
  const solution_categories = [;
    { name: 'Enterprise', href: '/solutions / enterprise' },
    { name: 'SMB', href: '/solutions / smb' },
    { name: 'Startup', href: '/solutions / startup' },
  ];
  const resource_categories = [;
    { name: 'Documentation', href: '/docs' },
    { name: 'Blog', href: '/blog' },
    { name: 'Partners', href: '/partners' },
    { name: 'Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
  ];
  const is_active = (path: string) =>: any location.pathname === path;
  const resource_categories = [;
    { name: 'Blog', href: '/blog' },
    { name: 'Case Studies', href: '/case - studies' },
    { name: 'Webinars', href: '/webinars' },
    { name: 'Documentation', href: '/documentation' },
    { name: 'API Reference', href: '/api' },
    { name: 'Help Center', href: '/help' },
    { name: 'FAQ', href: '/faq' },
  ];
  return (
    <header className={`fixed top - 0 left - 0 right - 0 z - 50 transition - all duration - 300 ${
      is_scrolled ;
        ? 'bg - slate - 900 / 95 backdrop - blur - md border - b border - slate - 700 / 50' ;
        : 'bg - transparent';
}`}>;
      <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8">;
        <div className="flex items - center justify - between h - 16">;
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
            </div>
          </div>

            </div>;
          </div>;


=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
}
export default Header;
import React,{ useState,useEffect } from 'react'; import Link from 'next/link'; import { useRouter } from 'next/router'; import { motion,AnimatePresence } from 'framer-motion'; import { Menu,X,Home,Users,Briefcase,Phone,Mail,ChevronDown,Brain,Shield,Cloud,Database,Network,Zap,Target,DollarSign,BookOpen,Calendar,FileText,Award,Globe,Search,ArrowRight } from 'lucide-react'; import { Button } from '../ui/Button'; import { Badge } from '../ui/Badge'; const Header: React.FC = () => { const [isScrolled,setIsScrolled] = useState(false); useEffect(() => { const handleScroll = () => { setIsScrolled(window && window.scrollY > 0)}; window && window.addEventListener('scroll',handleScroll); return () => window && window.removeEventListener('scroll',handleScroll)},[]); const navigationItems = [ { name: 'Home',href: '/' },{ name: 'Services',href: '/services' },{ name: 'Solutions',href: '/solutions' },{ name: 'About',href: '/about' },{ name: 'Careers',href: '/careers' },{ name: 'Contact',href: '/contact' },]; return ( <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur border-b border-slate-800"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between"> <Link href="/" className="text-white font-bold">Zion Tech Group</Link> <nav className="hidden md:flex items-center gap-6 text-sm"> {navigationItems && navigationItems.map((item) => ( <Link key={item && item.name} href={item && item.href} className="text-gray-300 hover:text-white"> {item && item.name} </Link> ))} </nav> </div> </header> )} export default Header;
export default Header;


=======

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
          <div className="flex - shrink - 0">;
            <Link href="/" className="text - 2xl font - bold text - blue - 600">;
              Zion Tech Group;
            </Link>;
          </div>;
          {/* Desktop Navigation */}
          <div className="hidden md:block">;
            <div className="ml - 10 flex items - baseline space - x-4">;
              {navigation.map ((item) => (
                <Link;
                  key={item.name}
                  href={item.href}
                  className="text - gray - 700 hover:text - blue - 600 px - 3 py - 2 rounded - md text - sm font - medium transition - colors";
                >;
                  {item.name}
                </Link>))}
            </div>;
          </div>;
          {/* Mobile menu button */}
          <div className="md:hidden">;
            <button              on_click={() => setIsMenuOpen (!isMenuOpen)}
              className="text - gray - 700 hover:text - blue - 600 p - 2";
            >;
              {isMenuOpen ? <X className="h - 6 w - 6" /> : <Menu className="h - 6 w - 6" />}
            </button>;
          </div>;
        </div>;
        {/* Mobile Navigation */}
        <AnimatePresence>;
          {isMenuOpen && (
            <motion.div;
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden";
            >;
              <div className="px - 2 pt - 2 pb - 3 space - y-1 sm:px - 3 bg - white border - t">;
                {navigation.map ((item) => (
                  <Link;
                    key={item.name}
                    href={item.href}
                    className="text - gray - 700 hover:text - blue - 600 block px - 3 py - 2 rounded - md text - base font - medium";
                    on_click={() => setIsMenuOpen (false)}
                  >;
                    {item.name}
                  </Link>))}
              </div>;
            </motion.div>)}
        </AnimatePresence>;
      </nav>;
    </header>);
}
;
export default Header;
import React, { useState, useEffect } from 'react'; import Link from 'next / link'; import { use_router } from 'next / router'; import { motion, AnimatePresence } from 'framer-motion'; import { Menu, X, Home, Users, Briefcase, Phone, Mail, ChevronDown, Brain, Shield, Cloud, Database, Network, Zap, Target, DollarSign, BookOpen, Calendar, FileText, Award, Globe, Search, ArrowRight } from 'lucide-react'; import { Button } from '../ui / Button'; import { Badge } from '../ui / Badge'; const Header: React.FC = () => { const [is_scrolled, setIsScrolled] = useState (false); useEffect (() => { const handle_scroll = () =>: any { setIsScrolled (window.scroll_y > 0)} window.addEventListener ('scroll', handle_scroll); return () => window.removeEventListener ('scroll', handle_scroll)}, []); const navigation_items = [ { name: 'Home', href: '/' }, { name: 'Services', href: '/services' }, { name: 'Solutions', href: '/solutions' }, { name: 'About', href: '/about' }, { name: 'Careers', href: '/careers' }, { name: 'Contact', href: '/contact' }, ]; return ( <header className="sticky top - 0 z - 50 bg - slate - 900 / 95 backdrop - blur border - b border - slate - 800"> <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 h - 14 flex items - center justify - between"> <Link href="/" className="text - white font - bold">Zion Tech Group</Link> <nav className="hidden md:flex items - center gap - 6 text - sm"> {navigation_items.map ((item) => ( <Link key={item.name} href={item.href} className="text - gray - 300 hover:text - white"> {item.name} </Link> ))} </nav> </div> </header> )} export default Header;
export default Header;
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
