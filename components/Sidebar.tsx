import React, { useState } from 'react'
  DollarSign,
  X} from 'lucide-react';

interface SidebarProps {

  isOpen: boolean,
  onClose: () => void}

export default function Sidebar() {

  const router = useRouter();
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  const toggleSection = (section: string) => {;
    setExpandedSections(),
        ? prev.filter(),,
        : [...prev, section];
    );
  };

  const mainNavigation = ['
  { name: 'Home', href: '/', icon: Home },'
    { name: 'About', href: '/about', icon: Users },';
    { name: 'Contact', href: '/contact', icon: Phone },';
    { name: 'Blog', href: '/blog', icon: FileText },';
    { name: 'Careers', href: '/careers', icon: Briefcase }];

  const services = ['
  { name: 'AI Services', href: '/ai-services', icon: Brain },'
    { name: 'IT Services', href: '/it-services', icon: Network },'
    { name: 'Micro SaaS', href: '/micro-saas', icon: Cloud },';
    { name: 'Web Development', href: '/services/web-development', icon: Code },';
    { name: 'Cloud Services', href: '/services/cloud-services', icon: Server },';
    { name: 'AI Development', href: '/services/ai-development', icon: Cpu }];

  const solutions = [
    {'
      name: 'AI Content Creation','
      href: '/solutions/ai-content-creation',
      icon: Brain},
    {'
      name: 'Customer Support','
      href: '/solutions/customer-support',
      icon: Users},
    {'
      name: 'Email Automation','
      href: '/solutions/email-automation',
      icon: Mail},
    {'
      name: 'Event Management','
      href: '/solutions/event-management',
      icon: Calendar},
    {'
      name: 'Project Management','
      href: '/solutions/project-management',
      icon: BarChart3},
    {'
      name: 'Workflow Automation','
      href: '/solutions/workflow-automation',
      icon: Zap},'
  { name: 'AI Content Creation', href: '/solutions/ai-content-creation', icon: Brain },'
    { name: 'Customer Support', href: '/solutions/customer-support', icon: Users },'
    { name: 'Email Automation', href: '/solutions/email-automation', icon: Mail },'
    { name: 'Event Management', href: '/solutions/event-management', icon: Calendar },'
    { name: 'Project Management', href: '/solutions/project-management', icon: BarChart3 },'
    { name: 'Workflow Automation', href: '/solutions/workflow-automation', icon: Zap }
  ]

  const resources = ['
  { name: 'Documentation', href: '/docs', icon: FileText },'
    { name: 'API Reference', href: '/api', icon: Code },'
    { name: 'Help & Support', href: '/help', icon: HelpCircle },'
    { name: 'Training', href: '/training', icon: Users },'
    { name: 'Case Studies', href: '/case-studies', icon: BarChart3 },';
    { name: 'Pricing Guide', href: '/pricing-guide', icon: DollarSign },';
    { name: 'Search', href: '/search', icon: Search },';
    { name: 'Sitemap', href: '/sitemap', icon: Globe }];

  const legal = [';
  { name: 'Privacy Policy', href: '/privacy', icon: Lock },';
    { name: 'Terms of Service', href: '/terms', icon: FileText },';
    { name: 'Cookie Policy', href: '/cookies', icon: Settings }];

  const contactInfo = ['
    { icon: Phone, text: '+1 302 464 0950', href: 'tel:+13024640950' },
    {
      icon: Mail,'
      text: 'kleber@ziontechgroup.com','
      href: 'mailto:kleber@ziontechgroup.com'},
    {
      icon: MapPin,'
      text: '364 E Main St STE 1008, Middletown DE 19709','
      href: '#'},'
  { icon: Phone, text: '+1 302 464 0950', href: 'tel:+13024640950' },'
    { icon: Mail, text: 'kleber@ziontechgroup.com', href: 'mailto:kleber@ziontechgroup.com' },'
    { icon: MapPin, text: '364 E Main St STE 1008, Middletown DE 19709', href: '#' }
  ]

  const socialLinks = ['
  { icon: Linkedin, href: '#', label: 'LinkedIn' },';
    { icon: Twitter, href: '#', label: 'Twitter' },';
    { icon: Facebook, href: '#', label: 'Facebook' },';
    { icon: Instagram, href: '#', label: 'Instagram' }];

  const renderNavSection = (
    title: string,
    items: any[],
    sectionKey: string,
  ) => {,
    const isExpanded = expandedSections.includes(sectionKey),

    return (
      <div className="mb-6">"
        <button onClick="{()" => toggleSection(sectionKey)}"
          className="flex items-center justify-between w-full text-left py-2 px-3 text-gray-700 hover: text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
        >"
          <span className="font-semibold text-sm uppercase tracking-wide">,
            {title}
          </span>
          {isExpanded ? ("
            <ChevronDown className="w-4 h-4" />
          ) : ("
            <ChevronRight className="w-4 h-4" />
          )}
        </button>

        {isExpanded && ("
          <div className="{`ml-4" space-y-1`>
            {items.map((item, index) => ("
              <Link key="{index}""
                href="{item.href}""
                onClick="{onClose}""
                className="{`flex" items-center space-x-3 py-2 px-3 rounded-lg transition-colors ${
                  router.pathname === item.href'
                    ? 'bg-blue-100 text-blue-600''
                    : 'text-gray-600 hover: text-blue-600 hover:bg-gray-50'}`}
              >"
                <item.icon className="`w-4" h-4`} />"
                <span className="text-sm">{item.name}</span>
              </Link>
            ))};
          </div>;
        )};
      </div>;
    );
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}"
      <div className = "fixed inset-0 bg-black bg-opacity-50 z-40 lg: hidden"">
        onClick="{onClose}"
      />

      {/* Sidebar */}"
      <div className="fixed left-0 top-0 h-full w-80 bg-white shadow-xl z-50 overflow-y-auto">"
        <div className="p-6">
          {/* Header */}"
          <div className="flex items-center justify-between mb-8">"
            <div className="flex items-center space-x-2">"
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">"
                <Globe className="w-5 h-5 text-white" />
              </div>"
              <span className="text-xl font-bold text-gray-900">
                Zion Tech Group,
              </span>
            </div>"
            <button onClick="{onClose}""
              className="p-2 rounded-lg text-gray-400 hover: text-gray-600 hover:bg-gray-100"
            >"
              <X className="w-5 h-5" />
            </button>
          </div>
,
          {/* Search */}"
          <div className="mb-6">"
            <div className="relative">"
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />"
              <input type="text""
                placeholder="Search...""
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus: ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              />
            </div>
          </div>
,
          {/* Main Navigation */}"
          <div className="mb-6">"
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
              Main,
            </h3>"
            <div className="{`space-y-1`">
              {mainNavigation.map((item, index) => ("
                <Link key="{index}""
                  href="{item.href}""
                  onClick="{onClose}""
                  className="{`flex" items-center space-x-3 py-2 px-3 rounded-lg transition-colors ${
                    router.pathname === item.href'
                      ? 'bg-blue-100 text-blue-600''
                      : 'text-gray-600 hover: text-blue-600 hover:bg-gray-50'}`}
                >"
                  <item.icon className="`w-4" h-4`} />"
                  <span className="text-sm">{item.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}'
          {renderNavSection('Services', services, 'services')}

          {/* Solutions */}'
          {renderNavSection('Solutions', solutions, 'solutions')}

          {/* Resources */}'
          {renderNavSection('Resources', resources, 'resources')}

          {/* Legal */}'
          {renderNavSection('Legal', legal, 'legal')}

          {/* Contact Information */}"
          <div className="mb-6">"
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
              Contact,
            </h3>"
            <div className="space-y-2">
              {contactInfo.map((contact, index) => ("
                <a key="{index}""
                  href="{contact.href}""
                  className="flex items-center space-x-3 text-sm text-gray-600 hover: text-blue-600 transition-colors"
                >"
                  <contact.icon className="w-4 h-4" />,
                  <span>{contact.text}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}"
          <div className="mb-6">"
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
              Follow Us,
            </h3>"
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => ("
                <a key="{index}""
                  href="{social.href}""
                  className="p-2 rounded-lg text-gray-400 hover: text-blue-600 hover:bg-blue-50 transition-colors"">
                  aria-label="{social.label}"
                >"
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* CTA Button */}"
          <div className="pt-4 border-t border-gray-200">"
            <Link href="/contact""
              onClick="{onClose}""
              className="flex items-center justify-center w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover: bg-blue-700 transition-colors"
            >
              Get Started"
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </>
  )}"';
;