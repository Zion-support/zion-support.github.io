import React from 'react';
import { Link } from 'react-router-dom';
import { X, Home, Shield, Zap, Brain, Globe } from 'lucide-react';

  MapPin,
  Clock
} from 'lucide-react';'
;
const Sidebar: React.FC = () => {;
const [isOpen, setIsOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['ai-services', 'micro-saas', 'it-services']));';
const location = useLocation();
useEffect(() => {;
const handleResize = (;
      if (window.innerWidth >= 1024) {) => {
  // TODO: Add properties
}
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      title: 'Micro SaaS','
      key: 'micro-saas','
      items: [
  // TODO: Add items
]
  // TODO: Add items
]
        { name: 'Micro SaaS Overview', path: '/micro-saas', icon: Settings },'
        { name: 'Analytics Dashboard', path: '/micro-saas/analytics-dashboard', icon: BarChart },'
        { name: 'Support Bot', path: '/micro-saas/support-bot', icon: Users },'
        { name: 'Social Manager', path: '/micro-saas/social-manager', icon: Settings },'
        { name: 'Email Marketing', path: '/micro-saas/email-marketing', icon: Mail },'
        { name: 'Inventory Management', path: '/micro-saas/inventory-management', icon: Settings },'
        { name: 'Lead Scoring', path: '/micro-saas/lead-scoring', icon: BarChart },'
        { name: 'Document Processor', path: '/micro-saas/document-processor', icon: Settings },'
        { name: 'SEO Optimizer', path: '/micro-saas/seo-optimizer', icon: Settings },'
        { name: 'Appointment Scheduler', path: '/micro-saas/appointment-scheduler', icon: Clock },'
        { name: 'Chat Analytics', path: '/micro-saas/chat-analytics', icon: BarChart },'
        { name: 'Expense Tracker', path: '/micro-saas/expense-tracker', icon: BarChart },'
        { name: 'Content Generator', path: '/micro-saas/content-generator', icon: Settings },'
      ]
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      title: 'IT Services','
      key: 'it-services','
      items: [
  // TODO: Add items
]
  // TODO: Add items
]
        { name: 'IT Services Overview', path: '/it-services', icon: Code },'
        { name: 'IT Consulting', path: '/it-consulting', icon: Users },'
        { name: 'IT Infrastructure', path: '/it-infrastructure', icon: Settings },'
        { name: 'IT Support', path: '/it-support', icon: Users },'
        { name: 'Cloud Infrastructure', path: '/cloud-infrastructure', icon: Cloud },'
        { name: 'Cloud Migration', path: '/cloud-migration', icon: Cloud },'
        { name: 'Cybersecurity', path: '/cybersecurity', icon: Shield },'
        { name: 'Database Management', path: '/database-management', icon: Settings },'
        { name: 'Managed IT', path: '/managed-it', icon: Settings },'
      ]
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      title: 'Company','
      items: [
  // TODO: Add items
]
  // TODO: Add items
]
        { name: 'Team', path: '/team', icon: Users },'
        { name: 'Careers', path: '/careers', icon: Users },'
        { name: 'Consultation', path: '/consultation', icon: Phone },'
        { name: 'Pricing', path: '/pricing', icon: BarChart },'
      ]
    },
    {
    }
  ];
;
const contactInfo = {
  // TODO: Add properties
}
  // TODO: Add properties
}
    phone: '(302) 464-0950','
    email: 'kleber@ziontechgroup.com','
    address: '364 E Main St STE 1008 Middletown, DE 19709','
    hours: 'Mon-Fri 9AM-6PM EST''
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-slate-900 transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <h2 className="text-xl font-bold text-white">Menu</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="mt-4">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
              onClick={onClose}
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;

export default function Sidebar({ className = '', children }: SidebarProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}
