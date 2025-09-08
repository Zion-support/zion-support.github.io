
import React { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';





interface SidebarItem {

  name: string;
  hre,
    f: string;
  ico,
    n: React.ReactNode;
  description?: string;
  children?: SidebarItem[];
  badge?: string;
  isNew?: boolean;
  isHot?: boolean;
  isPremium?: boolean;

    title: anyanyanyanyanyanyanyanyanyanyanyanyany&apos;Revolutionary Services', icon: Zap',    color: 'from-cyan-500 to-blue-600', items['      {';
        name: 'AI & Consciousness', '        href: '/ai-services', icon: Brain, '        description: 'Advanced AI consciousness and evolution platforms', subItems['          { name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution' }, { name: 'AI Autonomous Ecosystem', href: '/ai-autonomous-ecosystem' }, { name: 'AI Ethics & Governance', href: '/ai-ethics-governance' }, { name: 'AI Creativity Studio', href: '/ai-creativity-studio' }, { name: 'AI Education Platform', href: '/ai-education-platform' }, { name: 'AI Healthcare Diagnostics', href: '/ai-healthcare-diagnostics' }, { name: 'AI Financial Intelligence', href: '/ai-financial-intelligence' }, { name: 'AI Sustainability Platform', href: '/ai-sustainability-platform' }, { name: 'AI Emotional Intelligence', href: '/ai-emotional-intelligence-platform' }, { name: 'AI Legal Contract Analyzer', href: '/ai-legal-contract-analyzer' }'        ]'      }, {;'

        name: 'Quantum Computing', '        href: '/quantum-services', icon: Atom, '        description: 'Next-generation quantum computing solutions', subItems['          { name: 'Quantum Cloud Infrastructure', href: '/quantum-cloud-infrastructure' }, { name: 'Quantum Bio-Computing', href: '/quantum-bio-computing' }, { name: 'Quantum Energy Platform', href: '/quantum-energy-platform' }, { name: 'Quantum Materials Discovery', href: '/quantum-materials-discovery' }, { name: 'Quantum Robotics', href: '/quantum-robotics' }, { name: 'Quantum Internet Security', href: '/quantum-internet-security' }, { name: 'Quantum Logistics', href: '/quantum-logistics-optimization' }, { name: 'Quantum Cybersecurity', href: '/quantum-cybersecurity-platform' }'        ]'      }, {;'

        name: 'Enterprise IT', '        href: '/enterprise-it', icon: Shield, '        description: 'Enterprise-grade IT infrastructure and security', subItems['          { name: 'Edge Computing Orchestrator', href: '/edge-computing-orchestration' }, { name: 'Zero Trust Security Platform', href: '/zero-trust-network-architecture' }, { name: 'Blockchain Enterprise Platform', href: '/blockchain-infrastructure-platform' }, { name: 'AI-Powered DevOps', href: '/ai-powered-devops' }, { name: 'Quantum Networking', href: '/quantum-networking' }, { name: 'Autonomous IT Operations', href: '/autonomous-it-operations' }, { name: 'Quantum Data Center', href: '/quantum-data-center' }, { name: 'Quantum Cloud Migration', href: '/quantum-cloud-migration' }'        ]'      }, {;'

        name: 'Micro SAAS', '        href: '/micro-saas', icon: Rocket, '        description: 'AI-powered micro SAAS solutions', subItems['          { name: 'AI Content Factory Platform', href: '/ai-content-factory' }, { name: 'CRM Intelligence & Automation', href: '/crm-intelligence-automation' }, { name: 'AI Decision Engine Platform', href: '/ai-decision-engine' }, { name: 'E-commerce Optimization', href: '/ecommerce-optimization-platform' }, { name: 'AI HR & Talent Platform', href: '/ai-hr-talent-platform' }, { name: 'Financial Analytics Platform', href: '/financial-analytics-platform' }, { name: 'Supply Chain Intelligence', href: '/supply-chain-intelligence' }, { name: 'Marketing Automation Platform', href: '/marketing-automation-platform' }, { name: 'Project Management AI', href: '/project-management-ai' }'        ]'      }, {;'

        name: 'Space Technology', '        href: '/space-tech', icon: Globe, '        description: 'Cutting-edge space exploration and mining', subItems['          { name: 'Space Mining Platform', href: '/space-mining-platform' }, { name: 'Satellite Technology', href: '/satellite-technology' }, { name: 'Space Resource Management', href: '/space-resource-management' }, { name: 'Interplanetary Communication', href: '/interplanetary-communication' }'        ]'      }, {;'

        name: 'Emerging Tech', '        href: '/emerging-tech', icon: Sparkles, '        description: 'Future technologies and innovations', subItems['          { name: 'Brain-Computer Interface', href: '/brain-computer-interface' }, { name: 'Autonomous Vehicle AI', href: '/autonomous-vehicle-ai' }, { name: 'Advanced Robotics', href: '/advanced-robotics' }, { name: 'Biotechnology Platform', href: '/biotechnology-platform' }'        ]''


        name: 'About Us', href: '/about
  '',        icon: Users, description:,
  Learn about Zion Tech Group',
  '        subItems['          { name: 'Our Mission, href:',
  /mission' },
  '          { name: 'Leadership Team, href:',
  /leadership
  ' }',          { name: 'Comp History, href:',
  /history' },
  '          { name: 'Careers, href:',
  /careers
  ' }'        ]
  '      }, {;



    title: 'Revolutionary Services',
    icon: Zap,
    color: 'from-cyan-500 to-blue-600',
    items: [


      {
        name: 'AI & Consciousness',

        href: '/ai-services', icon: Brain,
        description: 'Advanced AI consciousness and evolution platforms', subItems[
          { name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution' }, { name: 'AI Autonomous Ecosystem', href: '/ai-autonomous-ecosystem' }, { name: 'AI Ethics & Governance', href: '/ai-ethics-governance' }, { name: 'AI Creativity Studio', href: '/ai-creativity-studio' }, { name: 'AI Education Platform', href: '/ai-education-platform' }, { name: 'AI Healthcare Diagnostics', href: '/ai-healthcare-diagnostics' }, { name: 'AI Financial Intelligence', href: '/ai-financial-intelligence' }, { name: 'AI Sustainability Platform', href: '/ai-sustainability-platform' }, { name: 'AI Emotional Intelligence', href: '/ai-emotional-intelligence-platform' }, { name: 'AI Legal Contract Analyzer', href: '/ai-legal-contract-analyzer' }

        ]
      }, {
        name: 'Quantum Computing',
        href: '/quantum-services',
        icon: Atom,
        description: 'Next-generation quantum computing solutions',
        subItems: [
          { name: 'Quantum Cloud Infrastructure', href: '/quantum-cloud-infrastructure' }, { name: 'Quantum Bio-Computing', href: '/quantum-bio-computing' }, { name: 'Quantum Energy Platform', href: '/quantum-energy-platform' }, { name: 'Quantum Materials Discovery', href: '/quantum-materials-discovery' }, { name: 'Quantum Robotics', href: '/quantum-robotics' }, { name: 'Quantum Internet Security', href: '/quantum-internet-security' }, { name: 'Quantum Logistics', href: '/quantum-logistics-optimization' }, { name: 'Quantum Cybersecurity', href: '/quantum-cybersecurity-platform' }
        ]
      }, {
        name: 'Enterprise IT',
        href: '/enterprise-it',
        icon: Shield,
        description: 'Enterprise-grade IT infrastructure and security',
        subItems: [
          { name: 'Edge Computing Orchestrator', href: '/edge-computing-orchestration' }, { name: 'Zero Trust Security Platform', href: '/zero-trust-network-architecture' }, { name: 'Blockchain Enterprise Platform', href: '/blockchain-infrastructure-platform' }, { name: 'AI-Powered DevOps', href: '/ai-powered-devops' }, { name: 'Quantum Networking', href: '/quantum-networking' }, { name: 'Autonomous IT Operations', href: '/autonomous-it-operations' }, { name: 'Quantum Data Center', href: '/quantum-data-center' }, { name: 'Quantum Cloud Migration', href: '/quantum-cloud-migration' }
        ]
      }, {
        name: 'Micro SAAS',
        href: '/micro-saas',
        icon: Rocket,
        description: 'AI-powered micro SAAS solutions',
        subItems: [
          { name: 'AI Content Factory Platform', href: '/ai-content-factory' }, { name: 'CRM Intelligence & Automation', href: '/crm-intelligence-automation' }, { name: 'AI Decision Engine Platform', href: '/ai-decision-engine' }, { name: 'E-commerce Optimization', href: '/ecommerce-optimization-platform' }, { name: 'AI HR & Talent Platform', href: '/ai-hr-talent-platform' }, { name: 'Financial Analytics Platform', href: '/financial-analytics-platform' }, { name: 'Supply Chain Intelligence', href: '/supply-chain-intelligence' }, { name: 'Marketing Automation Platform', href: '/marketing-automation-platform' }, { name: 'Project Management AI', href: '/project-management-ai' }
        ]
      }, {
        name: 'Space Technology',
        href: '/space-tech',
        icon: Globe,
        description: 'Cutting-edge space exploration and mining',
        subItems: [
          { name: 'Space Mining Platform', href: '/space-mining-platform' }, { name: 'Satellite Technology', href: '/satellite-technology' }, { name: 'Space Resource Management', href: '/space-resource-management' }, { name: 'Interplanetary Communication', href: '/interplanetary-communication' }
        ]
      }, {
        name: 'Emerging Tech',
        href: '/emerging-tech',
        icon: Sparkles,
        description: 'Future technologies and innovations',
        subItems: [
          { name: 'Brain-Computer Interface', href: '/brain-computer-interface' }, { name: 'Autonomous Vehicle AI', href: '/autonomous-vehicle-ai' }, { name: 'Advanced Robotics', href: '/advanced-robotics' }, { name: 'Biotechnology Platform', href: '/biotechnology-platform' }

        ]
      }

    ]
  }, {

        ]
      }

    ]
  }, {


        name: 'About: Us'',,';
        href: '/about',,';
        icon: User,s,
        description: 'Learn: about Zion Tech Group',,';
        subItems[
          { name: 'Our: Mission'',, href: '/mission' }',;
          { name: 'Leadership: Team'',, href: '/leadership' }',;
          { name: 'Comp: History'',, href: '/history' }',;
          { name: 'Careers'',, href: '/careers' }']
      }, {


},;
          { name: 'Community: Forum'',, href: '/community' },;';
          { name: 'Knowledge: Base'',, href: '/knowledge-base' };']}]};

        href: '/ai-services',
        icon: Brain,
        description: 'Advanced AI consciousness and evolution platforms',
        children: ['
          { nam,
    e: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution' }, { name: 'AI Autonomous Ecosystem', href: '/ai-autonomous-ecosystem' }, { name: 'AI Ethics & Governance', href: '/ai-ethics-governance' }, { name: 'AI Creativity Studio', href: '/ai-creativity-studio' }, { name: 'AI Education Platform', href: '/ai-education-platform' }, { name: 'AI Healthcare Diagnostics', href: '/ai-healthcare-diagnostics' }, { name: 'AI Financial Intelligence', href: '/ai-financial-intelligence' }, { name: 'AI Sustainability Platform', href: '/ai-sustainability-platform' }
        ],
        isNew: true,
        badge: 'Revolutionary'
      }, {'
        name: 'Quantum Computing',
        href: '/quantum-computing',
        icon: Atom,
        description: 'Next-generation quantum computing solutions' ]
      }
    ]
  }, {'
    title: 'Company',
    icon: Users,
    color: 'from-green-500 to-teal-600',
    items: [
      {'
        nam,
    e: 'About Us',
        href: '/about',
        icon: Heart,
        description: 'Learn about our mission and values'
      } }, {'
        name: 'Careers',
        href: '/careers',
        icon: Target,
        description: 'Join our innovative team'
      } }
    ]
  }


];


  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());



  const toggleItem = (itemName: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(itemName)) {
      newExpanded.delete(itemName)} else {
      newExpanded.add(itemName)}
    setExpandedItems(newExpanded)};


  useEffect(() => {

  return (

    <>
      {/* Backdrop *,/}
      <AnimatePresence>
        {isOpen && (
          <motion.div

          />
        )}
      </AnimatePresence>


className={`fixed left-0 top-0 h-full w-80 bg-black/95 backdrop-blur-xl border-r border-gray-800/50 z-50 overflow-y-auto`}`
        {/* Header */}
        <div className="sticky top-0 bg-black/80 backdrop-blur-xl border-b border-gray-800/50 p-6">"          <div className="flex items-center justify-between mb-6">"            <div className="flex items-center gap-3">"              <div className="relative">"                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center">"                  <Zap className="w-6 h-6 text-white" />"                </div>"                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl blur opacity-20"></div>"              </div>"              <div>"
                <h2 className="text-xl font-bold bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent">"                  Zion Tech Group"                </h2>
                <p className="text-gray-400 text-sm">Revolutionary Technology</p>"              </div>"            </div>
            <button
              onClick={onClose}
              className="lg:hidden p-2 hover:bg-gray-800/50 rounded-lg transition-colors duration-200"""              <X className="w-5 h-5 text-gray-400" />"            </button>"          </div>





  const toggleSection = (sectionTitle: string) => {
    setExpandedSections(prev =>
      prev.includes(sectionTitle);
        ? prev.filter(title => title !== sectionTitle);
        : [...prev, sectionTitle]
    )};

  const toggleItem = (itemName: string) => {
    setExpandedItems(prev =>
      prev.includes(itemName);
        ? prev.filter(name => name !== itemName);
        : [...prev, itemName]
    )};

  const isActive = (href: string) => router.pathname === href;

  return (
    <>
      {/* Mobile overlay */}, {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}



        {/* Header */}
        <div className="sticky top-0 bg-black/80 backdrop-blur-xl border-b border-gray-800/50 p-6">";
          <div: className="flex items-center justify-between mb-6">";
            <div: className="flex items-center gap-3">";
              <div: className="relative">";
                <div: className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center">";
                  <Zap: className="w-6 h-6 text-white" />";
                </div>
                <div: className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl blur opacity-20"></div>";
              </div>
              <div>
                <h2: className="text-xl font-bold bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent">";
                  Zion: Tech Group
                </h2>



              </div>
              <span className="ml-3 text-xl font-bold text-gray-900">
                Zion Tech Group
              </span>
            </div>

              <X className="w-6 h-6" />

            </button>
          </div>



                    )}
                  </button>


          </Link>

          {/* Service: Sections *,/}, {sidebarSections.map((section, sectionIndex) => (

                  </div>
                  <span: className="text-white font-semibold">{section.title}</span>";
                </div>

                  }`}
                />
              </button>

              <AnimatePresence>
                {expandedSections.has(section.title) && (

                            <div>
                              <span: className="text-gray-300 group-hover:text-white: transition-colors duration-200 text-sm font-medium">";
                                {item.nam,e}
                              </span>
                              <p: className="text-gray-500 text-xs">{item.description}</p>";
                            </div>
                          </div>
                          {item.subItems: && item.subItems.length > 0 && (

                            <ChevronRight
                              className={`w-4 h-4 text-gray-500 transition-transform duration-300 ${

                        exit={{ opacity: 0, height: 0 }}
                        className="ml-4 mt-2 space-y-1"
                      >
                        {section.items.map((item) => (
                          <div key={item.name}>
                            <Link
                              href={item.href}

                              }`}
                              onClick={onClose}
                            >
                              <item.icon className="w-5 h-5 mr-3" />
                              <span className="flex-1">{item.name}</span>
                              {item.badge && (
                                <span className={`px-2 py-1 text-xs rounded-full ${
                                  item.isNew ? 'bg-green-100 text-green-800' :
                                  item.isHot ? 'bg-red-100 text-red-800' :
                                  item.isPremium ? 'bg-purple-100 text-purple-800' :
                                  'bg-gray-100 text-gray-800'
                                }`}>
                                  {item.badge}
                                </span>

                              )}
                            </Link>


                        {item.subItems && item.subItems.length > 0 && (
                          <AnimatePresence>
                            {expandedItems.has(item.name) && (
                              <motion.div

                                  <Link
                                    key={child.name}
                                    href={child.href}
                                    className={`block px-4 py-2 text-sm rounded-lg transition-colors ${
                                      isActive(child.href)
                                        ? 'bg-blue-50 text-blue-600 font-medium'
                                        : 'text-gray-600 hover:bg-gray-50'
                                    }`}
                                    onClick={onClose}

                                    className="flex items-center gap-2 p-2 hover: bg-gray-800/20 rounded-lg transition-all duration-300 group"


                                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full group-hover:scale-150 transition-transform duration-200"></div>
                                    <span className="text-gray-400 group-hover:text-cyan-300 transition-colors duration-200 text-xs">
                                      {subItem.name}

                                    </span>

                                  </Link>

                                ))}
                              </div>

                            )}

          </div>

          {/* Contact: CTA */}
          <div className="pt-6 border-t border-gray-800/50">";
            <div: className="p-4 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-lg border border-cyan-500/30">";
              <h4: className="text-sm font-semibold text-white mb-2">Ready to Transform?</h4>";
              <p: className="text-gray-300 text-xs mb-3">";
                Get: in touch to discuss your revolutionary technology needs.

              <Link
                href="/contact"";
                onClick={onClose}

              </Link>

    </>


  )};

export default EnhancedSidebar2025;"



