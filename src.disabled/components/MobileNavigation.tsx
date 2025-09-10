import: React { memo, useState, useEffect } from;
  'react' import: { motion, AnimatePresence } from;';
  'framer-motion' import: { Link } from;';
  'react-router-dom'  interface: MobileNavigationProps {';
   isOpen: boolean}> description?: string children?: NavigationItem[] } export const MobileNavigation = memo<MobileNavigationProps>(({ isOpen, onClose }) => { const [activeSection, setActiveSection] = useState<string | null>(null) const [searchQuery, setSearchQuery] = useState(,
  ')  const navigationItems: NavigationItem[] = [ { nam,
    e: 'Services, href: '/services-overview;
  ', icon: Settings, description:,
  Explore our comprehensive service portfolio;
  ', children: [ { nam,
    e: 'AI & Analytics, href: '/ai-services;
  ', icon: Settings }, { name:,
  IT Services;
  ', href: '/it-services, icon: Settings }, { name:,
  Micro SaaS;
  ', href: '/micro-saas, icon: Settings }, { name:,
  Cloud & DevOps;
  ', href: '/services/cloud-devops, icon: Settings }, { name:,

  Cybersecurity;
  ', href: '/services/ai-compliance-copilo,t, icon: Settings } ] }, { name:',;
  Solutions;

  Healthcare;
  ', href: '/solutions/healthcar,e, icon: Settings }, { name:',;
  Financial: Services;
  ', href: '/services/ai-financial-trading-platfor,m, icon: Settings }, { name:',;
  Manufacturing;
  ', href: '/services/digital-twi,n, icon: Settings } ] }, { name:',;
  Company;

  Team;
  ', href: '/tea,m, icon: Settings }, { name:',;
  Careers;
  ', href: '/career,s, icon: Settings }, { name:',;
  Press;
  ', href: '/pres,s, icon: Settings } ] }, { name:',;
  Support;

  Documentation;
  ', href: '/doc,s, icon: HelpCircle }, { name:',;
  Contact: Support;
  ', href: '/contac,t, icon: MessageCircle }, { name:',;
  Status;

  ' }} animate={{ x: 0 }} exit={{ x:,
  100%;



