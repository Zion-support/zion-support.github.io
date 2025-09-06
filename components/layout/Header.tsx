import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

import {
  Menu;
  X;
  Home;
  Users;
  Briefcase;
  Phone;
  Mail;
  ChevronDown;
  Brain;
  Shield;
  Cloud;
  Database;
  Network;
  Zap;
  Target;
  DollarSign;
  BookOpen;
  Calendar;
  FileText;
  Award;
  Globe;
  Search;
} from 'lucide-react';

=======
import React from 'react',
import Link from 'next/link';
import Button from '../ui/Button';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-e9d8
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {;
      setIsScrolled(window.scrollY > 20);
};
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);

  }, []);

  const navigationItems = null;

  ];
  const serviceCategories = [;
    { ;
      name: 'Micro SaaS',
      href: '/services/micro-saas',
      description: 'Innovative focused software solutions',
      popular: ['AI Content Generator', 'Social Media Scheduler', 'Invoice Management', 'Time Tracking'];
},
    { ;
      name: 'IT Services',
      href: '/services/it-services',
      description: 'Enterprise infrastructure & security',
      popular: ['Cloud Migration', 'Edge Computing', 'Zero Trust Security', '5G Networks'];
},
    { ;
      name: 'AI Services',
      href: '/services/ai-services',
      description: 'Cutting-edge AI & machine learning',
      popular: ['Quantum ML', 'Autonomous Systems', 'AI Cybersecurity', 'Drug Discovery'];
},
  ];
  const serviceCategories = [;
    { name: 'AI Solutions', href: '/services/ai-solutions' },
    { name: 'Cloud & DevOps', href: '/services/cloud' },
    { name: 'Cybersecurity', href: '/services/cybersecurity' },
    { name: 'Data & Analytics', href: '/services/data' },
    { name: 'Micro SaaS', href: '/services/micro-saas' },
    { name: 'Digital Transformation', href: '/services/transformation' },
  ];
  const solutionCategories = [;
    { name: 'Enterprise', href: '/solutions/enterprise' },
    { name: 'SMB', href: '/solutions/smb' },
    { name: 'Startup', href: '/solutions/startup' },
  ];
  const resourceCategories = [;
    { name: 'Documentation', href: '/docs' },
    { name: 'Blog', href: '/blog' },

    { name: 'Contact', href: '/contact' }],


  return (
    <header className;

export default Header;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-e9d8
