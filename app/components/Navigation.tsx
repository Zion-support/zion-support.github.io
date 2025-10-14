import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  HomeIcon,
  InformationCircleIcon,
  BriefcaseIcon,
  PhoneIcon,
  DocumentTextIcon,
  AcademicCapIcon,
  PlayIcon,
  QuestionMarkCircleIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  CogIcon,
  ChevronDownIcon,
  GlobeAltIcon,
  CloudIcon,
  CpuChipIcon,
  SignalIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';

const Navigation = () => {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const location = useLocation();

  const isActive = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  const toggleExpanded = (item: string) => {
    setExpandedItems(prev => 
      prev.includes(item) 
        ? prev.filter(i => i !== item)
        : [...prev, item]
    );
  };

  return (
    <nav className="bg-slate-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-white text-xl font-bold">
                Zion Tech Group
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
      submenu: [{ name: 'AI Solutions', href: '/ai-solutions', icon: CpuChipIcon }, ''
        {name: '5G Solutions', href: '/5g-solutions', icon: SignalIcon, }'']
    },
    {name: "Blog", href: "/blog", icon: DocumentTextIcon,},""
    {name: "Tutorials", href: "/tutorials", icon: AcademicCapIcon,},""
    {name: "Demo", href: "/demo", icon: PlayIcon,},""
    {name: "Support", href: "/support", icon: QuestionMarkCircleIcon,},""
    {name: "Pricing", href: "/pricing", icon: CurrencyDollarIcon,},""
    {name: "Contact", href: "/contact", icon: PhoneIcon,}""
  ];


const Navigation: React.FC = () => {
  return (
<>    <nav className="bg-gray-800 text-white p-4"></nav>""
      <div className="container mx-auto flex justify-between items-center"></div>""
        <h1 className="text-xl font-bold">Zion Tech Group</h1>""
        <div className="space-x-4"></div>""
    </>
<a href="/" className="hover:text-gray-300">Home</a>"",
<a href="/about" className="hover:text-gray-300">About</a>"",
<a href="/services" className="hover:text-gray-300">Services</a>"",
<a href="/contact" className="hover:text-gray-300">Contact</a>"",
        </div>
      </div>
    </nav>
  )};
};

