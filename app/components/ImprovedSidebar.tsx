            Improved Sidebar;
          </h1>"
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">"
            Professional improved sidebar services;
            designed to help your business grow and succeed.;
          </p>
        </div>
      </section>
      { /* Content Section */ }
            Improved Sidebar</h1>"
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">"
            Professional improved sidebar services;
            <div></div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Services</h2>"
              <p className="text-lg text-gray-600 mb-6">"
                We provide comprehensive improved sidebar;
                solutions tailored to your specific needs and requirements.;
              </p>"
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>"
                  Custom solutions;
                </li>"
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>"
                  Expert consultation;
                </li>"
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>"
                  Ongoing support;
                </li>
              </ul>
            </div>"
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-8 text-white"></div>
              <h3 className="text-2xl font-bold mb-4">Get Started</h3>
              <p className="mb-6">"
                Ready to transform your business with our improved sidebar services?;
              </p>
              <a;
                href="$1"
                className="$1></a>
                Contact Us;
              </a>
            </div>
          </div>
        </div>
      </section>
            Ready to Get Started?;
          </h2>"
          <p className="text-xl text-blue-100 mb-8">"
          </h2>"
          <p className="text-xl text-blue-100 mb-8">"
            Let"s discuss how our improved sidebar"
            services can help you achieve your goals.;
          </p>
          <a;
            href="$1"
            className="$1></a>
            Get Started Today;
          </a>
        </div>
      </section>
    </div>)
  );
export default ImprovedSidebar;
                We provide comprehensive improved sidebar;
                solutions tailored to your specific needs and requirements.</p>"
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>"
                  Custom solutions</li>"
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>"
                  Expert consultation</li>"
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>"
                  Ongoing support</div>"
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-8 text-white"></div>
              <h3 className="text-2xl font-bold mb-4">Get Started</h3>
              <p className="mb-6">"
                Ready to transform your business with our improved sidebar services?</p>
              <a;
            Ready to Get Started?</a>
          <p className="text-xl text-blue-100 mb-8">"
            Let's discuss how our improved sidebar''''
            services can help you achieve your goals.</p>
          <a"
            href="/contact"
            className="inline-block bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors">"
            Get Started Today</div>
  )
export default ImprovedSidebar;
const ImprovedSidebar = () => {
  return (
<>    <div className="p-4"></div>
      <h2 className="text-xl font-semibold mb-2">ImprovedSidebar</h2>
      <p>This component is under construction.</p>
    </>
import { Shield, ArrowRight, Globe, Database, Phone, Cpu } from 'lucide-react';
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  XMarkIcon, 
  HomeIcon, 
  UserGroupIcon, 
  BriefcaseIcon, 
  CurrencyDollarIcon, 
  DocumentTextIcon,
  ChatBubbleLeftRightIcon,
  CogIcon,
  QuestionMarkCircleIcon,
  ShieldCheckIcon,
  MapIcon,
  CloudIcon,
  CpuChipIcon,
  GlobeAltIcon,
  DevicePhoneMobileIcon,
  ServerIcon,
  CodeBracketIcon,
  WrenchScrewdriverIcon,
  ChartBarIcon,
  LockClosedIcon,
  Cog6ToothIcon,
  SparklesIcon,
  RocketLaunchIcon,
  BeakerIcon,
  HeartIcon,
  ShieldExclamationIcon,
  DocumentDuplicateIcon,
  AcademicCapIcon,
  PresentationChartLineIcon,
  CommandLineIcon,
  PuzzlePieceIcon,
  ArrowRightIcon,
  ChevronDownIcon
} from '@heroicons/react/24/outline';

interface ImprovedSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const ImprovedSidebar: React.FC<ImprovedSidebarProps> = ({ isOpen, onClose }) => {
  const location = useLocation();
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const mainLinks = [
    { name: 'Home', href: '/', icon: HomeIcon },
    { name: 'About', href: '/about', icon: UserGroupIcon },
    { name: 'Services', href: '/services', icon: BriefcaseIcon },
    { name: 'Pricing', href: '/pricing', icon: CurrencyDollarIcon },
    { name: 'Blog', href: '/blog', icon: DocumentTextIcon },
    { name: 'Contact', href: '/contact', icon: ChatBubbleLeftRightIcon },
    { name: 'Demo', href: '/demo', icon: PresentationChartLineIcon },
    { name: 'Support', href: '/support', icon: QuestionMarkCircleIcon }
  ];

  const aiServices = [
    { name: 'AI Analytics', href: '/ai-analytics', icon: ChartBarIcon },
    { name: 'AI Services', href: '/ai-services', icon: CpuChipIcon },
    { name: 'AI Healthcare', href: '/ai-healthcare-diagnostics', icon: HeartIcon },
    { name: 'AI Automation', href: '/ai-automation-platform', icon: CogIcon },
    { name: 'AI Content Generation', href: '/ai-content-generation', icon: DocumentTextIcon },
    { name: 'AI Customer Support', href: '/ai-customer-support', icon: ChatBubbleLeftRightIcon },
    { name: 'AI Cybersecurity', href: '/ai-cybersecurity', icon: ShieldExclamationIcon },
    { name: 'AI Data Analytics', href: '/ai-data-analytics', icon: ChartBarIcon }
  ];

  const itServices = [
    { name: 'Cloud Infrastructure', href: '/cloud-infrastructure', icon: CloudIcon },
    { name: 'IT Services', href: '/it-services', icon: CpuChipIcon },
    { name: 'Web Development', href: '/web-development', icon: GlobeAltIcon },
    { name: 'Mobile Development', href: '/mobile-development', icon: DevicePhoneMobileIcon },
    { name: 'Database Management', href: '/database-management', icon: ServerIcon },
    { name: 'Custom Software', href: '/custom-software', icon: CodeBracketIcon },
    { name: 'Cybersecurity Solutions', href: '/cybersecurity-solutions', icon: LockClosedIcon },
    { name: 'System Integration', href: '/system-integration', icon: WrenchScrewdriverIcon }
  ];

  const businessSolutions = [
    { name: 'Micro SaaS', href: '/micro-saas', icon: RocketLaunchIcon },
    { name: 'Cloud Services', href: '/cloud-services', icon: ServerIcon },
    { name: 'Digital Transformation', href: '/digital-transformation', icon: SparklesIcon },
    { name: 'Process Automation', href: '/process-automation', icon: Cog6ToothIcon },
    { name: 'Data Migration', href: '/data-migration', icon: ArrowRightIcon },
    { name: 'Performance Optimization', href: '/performance-optimization', icon: ChartBarIcon },
    { name: 'API Development', href: '/api-development', icon: CommandLineIcon },
    { name: 'Legacy Modernization', href: '/legacy-modernization', icon: BeakerIcon }
  ];

  const additionalLinks = [
    { name: 'Privacy Policy', href: '/privacy', icon: ShieldCheckIcon },
    { name: 'Terms of Service', href: '/terms', icon: DocumentTextIcon },
    { name: 'Cookie Policy', href: '/cookies', icon: DocumentTextIcon },
    { name: 'Sitemap', href: '/sitemap', icon: MapIcon },
    { name: 'Our Team', href: '/team', icon: UserGroupIcon },
    { name: 'Documentation', href: '/docs', icon: DocumentDuplicateIcon },
    { name: 'Careers', href: '/careers', icon: BriefcaseIcon },
    { name: 'Tutorials', href: '/tutorials', icon: AcademicCapIcon }
  ];

  const serviceSections = [
    { title: 'AI Services', links: aiServices, icon: CpuChipIcon, key: 'ai' },
    { title: 'IT Services', links: itServices, icon: CpuChipIcon, key: 'it' },
    { title: 'Business Solutions', links: businessSolutions, icon: PuzzlePieceIcon, key: 'business' }
  ];

  const isActive = (href: string) => location.pathname === href;

const ImprovedSidebar: React.FC = () => {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed top-0 left-0 h-full w-80 bg-gradient-to-b from-slate-900 to-slate-800 transform transition-transform duration-300 ease-in-out z-50 lg:translate-x-0
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        shadow-2 xl border-r border-slate-700
      `}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-slate-700 bg-gradient-to-r from-slate-800 to-slate-700">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                <CpuChipIcon className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech</span>
            </div>
            <button
              onClick={onClose}
              className="lg:hidden p-2 rounded-lg hover:bg-slate-600 transition-colors"
            >
              <XMarkIcon className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-6 space-y-6">
            {/* Main Links */}
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                Main Navigation
              </h3>
              <ul className="space-y-2">
                {mainLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      onClick={onClose}
                      className={`
                        flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-200
                        ${isActive(link.href) 
                          ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg' 
                          : 'text-gray-300 hover:bg-slate-700 hover:text-white hover:shadow-md'
                        }
                      `}
                    >
                      <link.icon className="w-5 h-5" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service Sections */}
            {serviceSections.map((section) => (
              <div key={section.key}>
                <button
                  onClick={() => toggleSection(section.key)}
                  className="flex items-center justify-between w-full px-3 py-2 text-left text-sm font-semibold text-gray-400 uppercase tracking-wider hover:text-white transition-colors rounded-lg hover:bg-slate-700"
                >
                  <div className="flex items-center space-x-3">
                    <section.icon className="w-5 h-5" />
                    <span>{section.title}</span>
                  </div>
                  <ChevronDownIcon 
                    className={`w-4 h-4 transition-transform ${
                      expandedSections.includes(section.key) ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                {expandedSections.includes(section.key) && (
                  <ul className="mt-2 space-y-1 ml-8">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <Link
                          to={link.href}
                          onClick={onClose}
                          className={`
                            flex items-center space-x-3 px-3 py-2 rounded-lg text-sm transition-all duration-200
                            ${isActive(link.href) 
                              ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg' 
                              : 'text-gray-400 hover:bg-slate-700 hover:text-white hover:shadow-md'
                            }
                          `}
                        >
                          <link.icon className="w-4 h-4" />
                          <span>{link.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            {/* Additional Links */}
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                Additional
              </h3>
              <ul className="space-y-2">
                {additionalLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      onClick={onClose}
                      className={`
                        flex items-center space-x-3 px-3 py-2 rounded-lg text-sm transition-all duration-200
                        ${isActive(link.href) 
                          ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg' 
                          : 'text-gray-400 hover:bg-slate-700 hover:text-white hover:shadow-md'
                        }
                      `}
                    >
                      <link.icon className="w-4 h-4" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          {/* Footer */}
          <div className="p-6 border-t border-slate-700 bg-gradient-to-r from-slate-800 to-slate-700">
            <div className="text-center">
              <p className="text-sm text-gray-400">
                © 2024 Zion Tech Group
              </p>
              <p className="text-xs text-gray-500 mt-1">
                All rights reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImprovedSidebar;
