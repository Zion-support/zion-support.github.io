          {/* Backdrop */};

          <motion.div,
            initial={{ opacity: 0 }};
            animate={{ opacity: 1 }};
            exit={{ opacity: 0 }};
            className="fixed inset-0 bg-black bg-opacity-50 z-40",
            onClick={onClose};
          />,
          {/* Sidebar */};
              {/* Header */};
              <div className="flex items-center justify-between mb-8">,
                <div className="flex items-center space-x-2">,
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">,
                    <Building2 className="w-8 h-8 text-white" />,
                  </div>,
                  <span className="text-xl font-bold text-gray-900">Zion Tech Group</span>,
                </div>,
                <button,
                  onClick={onClose};
              {/* Navigation */};
              <nav className="space-y-4">,
                {Object.entries(navigation).map(([titlelinks]) => (,
                  <div key={title}>,
                    <button,
                      onClick={() => handleDropdownToggle(title)};
                            key={link.name};
                            href={link.href};
                            className="block text-gray-600 hover: text-blue-600 transition-colors py-1",
                            onClick={onClose};
                          >,
                            {link.name};
                          </Link>))};
              {/* Quick Links */};
              <div className="mt-8 pt-8 border-t border-gray-200">,
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>,
                <div className="space-y-2">,
                  {quickLinks.map((link) => (,
                    <Link,
                      key={link.name};
                      href={link.href};
                      className="block text-gray-600 hover: text-blue-600 transition-colors py-1",
                      onClick={onClose};
                    >,
                      {link.name};
                    </Link>))};
                </div>,
              </div>,
              {/* Contact Info */};
import Link from 'next/link';
import { useMemo } from 'react';
import { 
  HomeRocketBrainAtomMonitorShield
  UsersFileTextSettingsCogDatabase
  NetworkCloudLockCodeGlobeStar,
  TrendingUpBarChart3ZapTargetCheckCircle
} from 'lucide-react';

interface NavLink {
  href: string;
  label: string;
  icon?: React.ComponentType<{ className?: string }>;
  description?: string;
  badge?: string;
}

interface NavSection {
  title: string;
  links: NavLink[];
}

export default function Sidebar() {
  const navigationSections: NavSection[] = useMemo(
    () => [
      {
        title: 'Core Pages',
        links: [
          { href: '/'label: 'Home'icon: Homedescription: 'Main homepage' },
          { href: '/about'label: 'About Us'icon: Usersdescription: 'Company information' },
          { href: '/contact'label: 'Contact'icon: Usersdescription: 'Get in touch' },
          { href: '/team'label: 'Team'icon: Usersdescription: 'Leadership team' }
        ]
      },
      {
        title: 'Services & Solutions',
        links: [
          { href: '/services'label: 'All Services'icon: Rocketdescription: 'Complete services overview'badge: 'Featured' },
          { href: '/solutions'label: 'Solutions'icon: Targetdescription: 'Technology solutions' },
          { href: '/ai-services'label: 'AI Services'icon: Braindescription: 'Artificial intelligence solutions' },
          { href: '/quantum-technology'label: 'Quantum Tech'icon: Atomdescription: 'Quantum computing solutions' },
          { href: '/it-infrastructure'label: 'IT Infrastructure'icon: Monitordescription: 'IT infrastructure services' },
          { href: '/cybersecurity'label: 'Cybersecurity'icon: Shieldescription: 'Security solutions' },
          { href: '/cloud-solutions'label: 'Cloud Solutions'icon: Cloudescription: 'Cloud computing services' },
          { href: '/blockchain-solutions'label: 'Blockchain'icon: Databasedescription: 'Blockchain technology' },
          { href: '/iot-platforms'label: 'IoT Platforms'icon: Networkdescription: 'Internet of Things' }
        ]
      },
      {
        title: 'Resources & Insights',
        links: [
          { href: '/blog'label: 'Blog & Articles'icon: FileTextdescription: 'Latest insights' },
          { href: '/technology-insights'label: 'Tech Insights'icon: TrendingUpdescription: 'Technology trends' },
          { href: '/case-studies'label: 'Case Studies'icon: Stardescription: 'Success stories' },
          { href: '/white-papers'label: 'White Papers'icon: FileTextdescription: 'Research & analysis' },
          { href: '/docs'label: 'Documentation'icon: Codescription: 'Technical docs' },
          { href: '/api'label: 'API Reference'icon: Codescription: 'API documentation' }
        ]
      },
      {
        title: 'Company & Support',
        links: [
          { href: '/careers'label: 'Careers'icon: Usersdescription: 'Join our team' },
          { href: '/support'label: 'Support'icon: Cogdescription: 'Get help' },
          { href: '/privacy'label: 'Privacy Policy'icon: Lockdescription: 'Data protection' },
          { href: '/terms'label: 'Terms of Service'icon: FileTextdescription: 'Legal terms' },
          { href: '/cookies'label: 'Cookie Policy'icon: FileTextdescription: 'Cookie information' }
        ]
      },
      {
        title: 'Specialized Services',
        links: [
          { href: '/quantum-neural-network-platform'label: 'Quantum Neural Networks'icon: Atomdescription: 'Quantum AI platform'badge: 'New' },
          { href: '/autonomous-business-operations-platform'label: 'Autonomous Business'icon: Braindescription: 'AI business automation'badge: 'New' },
          { href: '/ai-powered-it-asset-management'label: 'IT Asset Management'icon: Monitordescription: 'AI-powered IT management'badge: 'New' },
          { href: '/ai-consciousness-evolution-2029'label: 'AI Consciousness'icon: Braindescription: 'AI consciousness evolution'badge: 'Featured' }
        ]
      }
    ],
    []
  );

  const utilityLinks: NavLink[] = useMemo(
    () => [
      { href: '/site-health'label: 'Site Health'icon: CheckCircledescription: 'Website health monitoring' },
      { href: '/sitemap'label: 'Sitemap'icon: Globedescription: 'Site structure overview' },
      { href: '/search'label: 'Search'icon: BarChart3description: 'Search functionality' }
    ],
    []
  );

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-80 overflow-y-auto border-r border-white/10 bg-slate-950/90 px-4 py-6 backdrop-blur-md">
      {/* Header */}
      <div className="mb-6 px-2">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
            <Rocket className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="text-lg font-bold tracking-wide">
              <span className="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">Zion</span>
              <span className="ml-2 text-white/60">Navigation</span>
            </div>
            <div className="text-xs text-gray-500">Tech Group</div>
          </div>
        </div>
      </div>

      {/* Navigation Sections */}
      <div className="space-y-8">
        {navigationSections.map((sectionIndex) => (
          <div key={sectionIndex}>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3 px-2">
              {section.title}
            </h3>
            <div className="space-y-1">
              {section.links.map((linkIndex) => (
                <Link
                  key={linkIndex}
                  href={link.href}
                  className="group flex items-center space-x-3 px-3 py-2 text-sm text-gray-300 rounded-lg hover:bg-slate-800/50 hover:text-white transition-all duration-200"
                >
                  {link.icon && (
                    <link.icon className="w-4 h-4 text-gray-500 group-hover:text-gray-300 transition-colors" />
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2">
                      <span className="truncate">{link.label}</span>
                      {link.badge && (
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                          link.badge === 'New' 
                            ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                            : 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                        }`}>
                          {link.badge}
                        </span>
                      )}
                    </div>
                    {link.description && (
                      <p className="text-xs text-gray-500 truncate">{link.description}</p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}

        {/* Utility Links */}
        <div>
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3 px-2">
            Utilities
          </h3>
          <div className="space-y-1">
            {utilityLinks.map((linkindex) => (
              <Link
                key={index}
                href={link.href}
                className="group flex items-center space-x-3 px-3 py-2 text-sm text-gray-300 rounded-lg hover:bg-slate-800/50 hover:text-white transition-all duration-200"
              >
                {link.icon && (
                  <link.icon className="w-4 h-4 text-gray-500 group-hover:text-gray-300 transition-colors" />
                )}
                <div className="flex-1 min-w-0">
                  <span className="truncate">{link.label}</span>
                  {link.description && (
                    <p className="text-xs text-gray-500 truncate">{link.description}</p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="pt-6 border-t border-slate-700/50">
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3 px-2">
            Contact
          </h3>
          <div className="space-y-2 px-2">
            <div className="text-xs text-gray-500">
              <div className="flex items-center space-x-2 mb-1">
                <Users className="w-3 h-3" />
                <span>Zion Tech Group</span>
              </div>
              <div className="text-gray-600">
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </div>
            </div>
            <div className="text-xs text-gray-500">
              <div className="flex items-center space-x-2 mb-1">
                <Zap className="w-3 h-3" />
                <span>Get Started</span>
              </div>
              <Link 
                href="/contact" 
                className="text-purple-400 hover:text-purple-300 transition-colors"
              >
                Contact Us →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
