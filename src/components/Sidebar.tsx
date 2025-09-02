import { Link } from 'react-router-dom';
import {
  Brain,
  Cloud,
  Shield,
  Code,
  Database,
  Network,
  Users,
  Award,
  ShoppingCart,
  HelpCircle,;"
  ChevronRight} from 'lucide-react';
export const Sidebar: React.FC = () => {
  const serviceCategories = [
    {"
      title: 'AI & Machine Learning',
      icon: Brain,"
      links: [{ name: 'AI Services Overview', href: '/ai-services' },"
        { name: 'AI Content Generator', href: '/services/ai-content-generator' },"
        { name: 'AI Project Management', href: '/services/ai-project-management' },"
        { name: 'AI Customer Support', href: '/services/ai-customer-support-automation' },"
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence' }
      ]},
    {"
      title: 'Cloud & Infrastructure',
      icon: Cloud,
      links: ["
        { name: 'Cloud DevOps', href: '/services/cloud-devops' },"
        { name: 'IT Infrastructure', href: '/it-services' },"
        { name: 'Cloud Migration', href: '/services/cloud-migration-services' },"
        { name: 'FinOps Advisor', href: '/services/finops-advisor' }
      ]},
    {"
      title: 'Cybersecurity',
      icon: Shield,
      links: ["
        { name: 'AI Cybersecurity Platform', href: '/services/ai-cybersecurity-platform' },"
        { name: 'Security Headers & CSP', href: '/services/security-headers-csp' },"
        { name: 'Zero Trust Network', href: '/services/zero-trust-network-access' },"
        { name: 'DSR Privacy Portal', href: '/services/dsr-portal' }
      ]},
    {"
      title: 'Development',
      icon: Code,
      links: ["
        { name: 'Micro SaaS Solutions', href: '/micro-saas' },"
        { name: 'Custom Development', href: '/services/custom-development' },"
        { name: 'API Development', href: '/services/api-development' },"
        { name: 'Mobile Apps', href: '/services/mobile-development' }
      ]},
    {"
      title: 'Data & Analytics',
      icon: Database,
      links: ["
        { name: 'Data Analytics', href: '/services/data-analytics' },"
        { name: 'Business Intelligence', href: '/services/business-intelligence' },"
        { name: 'Data Governance', href: '/services/ai-data-governance-platform' },"
        { name: 'Predictive Analytics', href: '/services/ai-predictive-maintenance' }
      ]},
    {"
      title: 'Infrastructure',
      icon: Network,
      links: ["
        { name: 'Network Solutions', href: '/services/network-solutions' },"
        { name: 'IoT Edge Computing', href: '/services/iot-edge-computing' },"
        { name: 'Digital Twin Platform', href: '/services/digital-twin' },"
        { name: 'Smart City Infrastructure', href: '/services/ai-smart-city-infrastructure-management' }
      ]}
  ];
  const compLinks = ["
    { name: 'About Us', href: '/about', icon: Users },"
    { name: 'Our Team', href: '/team', icon: Award },"
    { name: 'Careers', href: '/careers', icon: Users },"
    { name: 'Partners', href: '/partners', icon: Award },"
    { name: 'Contact', href: '/contact', icon: HelpCircle }
  ];
  const marketplaceLinks = ["
    { name: 'Marketplace', href: '/marketplace', icon: ShoppingCart },"
    { name: 'Products', href: '/marketplace/products', icon: ShoppingCart },"
    { name: 'Talent', href: '/marketplace/talent', icon: Users },"
    { name: 'Equipment', href: '/marketplace/equipment', icon: Network }
  ]
  return("
    <aside className='hidden lg:block w-80 bg-white border-r border-gray-200 h-full overflow-y-auto'>"
      <div className='p-6 space-y-8'>
        {/* Services Section */}
        <div>"
          <h3 className='text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4'>Services</h3>"
          <div className='space-y-4'>
            {serviceCategories.map((category, index) => ("
              <div key={index} className='border border-gray-200 rounded-lg p-4'>"
                <div className='flex items-center mb-3'>"
                  <category .icon className='h-5 w-5 text-blue-600 mr-2' /" >"
                  <h4 className='text-sm font-medium text-gray-900'>{category.title}</h4>
                </div>"
                <ul className='space-y-2'>
                  {category.links.map((link, linkIndex) => (
                    <li key={linkIndex}" >
                      <Link
                        to={link.href}"
                        className='flex items-center text-sm text-gray-600 hover:text-blue-600 transition-colors group'>"
                        <ChevronRight className='h-3 w-3 mr-1 opacity-0 group-hover:opacity-100 transition-opacity' /" >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        {/* Comp Section */}
        <div>"
          <h3 className='text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4'>Comp</h3>"
          <ul className='space-y-2'>
            {compLinks.map((link, index) => (
              <li key={index}" >
                <Link
                  to={link.href}"
                  className='flex items-center text-gray-700 hover:text-blue-600 transition-colors group'>"
                  <link .icon className='h-4 w-4 mr-3 text-gray-400 group-hover:text-blue-600' /" >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Marketplace Section */}
        <div>"
          <h3 className='text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4'>Marketplace</h3>"
          <ul className='space-y-2'>
            {marketplaceLinks.map((link, index) => (
              <li key={index}" >
                <Link
                  to={link.href}"
                  className='flex items-center text-gray-700 hover:text-blue-600 transition-colors group'>"
                  <link .icon className='h-4 w-4 mr-3 text-gray-400 group-hover:text-blue-600' /" >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Quick Actions */}"
        <div className='bg-blue-50 rounded-lg p-4'>"
          <h3 className='text-sm font-semibold text-blue-900 mb-3'>Quick Actions</h3>"
          <div className='space-y-2'>
            <Link"
              to='/contact';"
              className='block w-full text-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors'>
              Get Quote
            </Link>
            <Link"
              to='/help';"
              className='block w-full text-center px-4 py-2 border border-blue-600 text-blue-600 text-sm font-medium rounded-lg hover:bg-blue-50 transition-colors'>
              Support
            </Link>
          </div>
        </div>
        {/* Contact Info */}"
        <div className='bg-gray-50 rounded-lg p-4'>"
          <h3 className='text-sm font-semibold text-gray-900 mb-3'>Contact Info</h3>"
          <div className='space-y-2 text-sm text-gray-600'>
            <p>📞 +1 302 464 0950</p>
            <p>✉️ kleber@ziontechgroup.com</p>
            <p>📍 Middletown, DE</p>
          </div>
        </div>
      </div>
    </aside>
  )}"