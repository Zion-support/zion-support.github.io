<<<<<<< HEAD
import React from "react";

const Navigation = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-white mb-4">Navigation</h2>
      <p className="text-gray-300">
        This is a placeholder component for Navigation.
      </p>
    </div>
  );
};

export default Navigation;</NavigationProps></Cloud></Cloud></Cloud></Shield></Shield></Shield></Code></Code></Code></Code></Database></Database></BarChart3></BarChart3></Brain></Brain></Zap></Zap></Globe></Phone></Mail></MapPin></SidebarIcon></ChevronDown></ChevronDown></ChevronDown></ChevronDown></ChevronDown></ChevronDown></Star></Star></ArrowRight></ArrowRight></X></Menu>
=======
import { ;
HomeIcon,;
InformationCircleIcon,;
BriefcaseIcon,;
PhoneIcon,;
DocumentTextIcon,;
AcademicCapIcon,;
PlayIcon,;
QuestionMarkCircleIcon,;
ShieldCheckIcon,;
CurrencyDollarIcon,;
CogIcon,;
ChevronDownIcon,;
GlobeAltIcon,;
CloudIcon,;
CpuChipIcon,;
SignalIcon,;
UserGroupIcon
} from '@heroicons/react/24/outline':;
const isActive = (href: string) =>{;
if (href === '/') {':;
return location.pathname === '/'"}":;
return location.pathname.startsWith(href);
const toggleExpanded = (item: string) =>{;
setExpandedItems(prev =>prev.includes(item) 
        ? prev.filter(i =>i !== item)
        : [...prev, item]
    );
  };
interface NavigationProps {;
onSidebarToggle?: () =>void:
}
;
const Navigation: React.FC<NavigationProps>= ({ onSidebarToggle }) =>{;
const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();
;
const navigation = [
    { name: "Home", href: "/", icon: HomeIcon },
    { name: "About", href: "/about", icon: InformationCircleIcon },
    { ;
name: 'Services',;
href: '/services',;
icon: BriefcaseIcon,;
submenu: [
        { name: 'AI Services', href: '/ai-services', icon: CpuChipIcon },
        { name: 'IT Services', href: '/it-services', icon: CogIcon },
        { name: 'Cloud Infrastructure', href: '/cloud-infrastructure', icon: CloudIcon },
        { name: 'Cybersecurity', href: '/cybersecurity', icon: ShieldCheckIcon }
      ]
    },
    { ;
name: 'Solutions',;
href: '/solutions',;
icon: CogIcon,;
submenu: [
        { name: 'AI Solutions', href: '/ai-solutions', icon: CpuChipIcon },
        { name: 'Cybersecurity', href: '/cybersecurity', icon: ShieldCheckIcon },
        { name: 'Cloud Infrastructure', href: '/cloud-solutions', icon: CloudIcon },
        { name: 'Digital Transformation', href: '/digital-transformation', icon: CogIcon },
        { name: 'Micro SaaS', href: '/micro-saas', icon: GlobeAltIcon },
        { name: '5G Solutions', href: '/5g-solutions', icon: SignalIcon }
      ]
    },
    { name: "Blog", href: "/blog", icon: DocumentTextIcon },
    { name: "Tutorials", href: "/tutorials", icon: AcademicCapIcon },
    { name: "Demo", href: "/demo", icon: PlayIcon },
    { name: "Support", href: "/support", icon: QuestionMarkCircleIcon },
    { name: "Pricing", href: "/pricing", icon: CurrencyDollarIcon },
    { name: "Contact", href: "/contact", icon: PhoneIcon }
  ];

      ))}
  const isActive = (path: string) =>{;
return location.pathname === path:
  };
import React from 'react':
;
const Navigation: React.FC = () =>{;
return (
    <nav className="bg-gray-800 text-white p-4"><div className="container mx-auto flex justify-between items-center"><h1 className="text-xl font-bold">Zion Tech Group</h1><div className="space-x-4"><a href="/" className="hover:text-gray-300">Home</a><a href="/about" className="hover:text-gray-300">About</a><a href="/services" className="hover:text-gray-300">Services</a><a href="/contact" className="hover:text-gray-300">Contact</a></div></div></nav>);
};
;
export default Navigation:
}
  </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-bd64
