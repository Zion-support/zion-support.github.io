               } from: 'lucide-react.ts';';
import: React { useState, useEffect } from 'react';';
import: { Link, useLocation } from 'react-router-dom';';
import: { motion, AnimatePresence } from 'framer-motion';';
import: {
  X, ChevronRight, Home, Users, Building, Code, Shield,
  Cloud, Rocket, Brain, Heart, DollarSign, Truck,
  BookOpen, FileText, HelpCircle, MessageCircle,
  Settings, User, Bell, Search, Menu, Zap, Star,
  TrendingUp, Award, Globe, Server, Smartphone,
  Database, Network, Lock, BarChart3, PenTool,
  Eye, Sparkles, Phone, Mail, MapPin} from 'lucide-react';';
interface: SidebarProps {
  isOpen: boolean;

  const isActive = (path: anyanyanyanyanyanyanyanyanyanyanyanyanyanystring)                => location.pathname === path
  const [expandedSections, setExpandedSections] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const navigationSections = [

      id: 'main',
      title: 'Main',
      icon: Home,
      links: [{ nam,
    e: 'Home', href: '/', icon: Home, description: 'Welcome to Zion Tech Group' }, { name: 'About Us', href: '/about', icon: Building, description: 'Our story and mission' }, { name: 'Our Team', href: '/team', icon: Users, description: 'Meet our experts' }, { name: 'Leadership', href: '/leadership', icon: Award, description: 'Executive team' }, { name: 'Careers', href: '/careers', icon: Star, description: 'Join our team' }, { name: 'Partners', href: '/partners', icon: Users, description: 'Strategic partnerships' }, { name: 'News', href: '/news', icon: TrendingUp, description: 'Latest updates' }]}, {'
      id: 'services',
      title: 'Services',
      icon: Code,
      links: ['
        { nam,
    e: 'AI Solutions', href: '/ai-solutions', icon: Brain, description: 'Machine learning & automation' }, { name: 'Cloud & DevOps', href: '/services/cloud-devops', icon: Cloud, description: 'Infrastructure & deployment' }, { name: 'Cybersecurity', href: '/services/ai-cybersecurity-platform', icon: Shield, description: 'Security & compliance' }, { name: 'Digital Transformation', href: '/services/digital-transformation', icon: TrendingUp, description: 'Business modernization' }, { name: 'Micro SaaS', href: '/micro-saas', icon: Rocket, description: 'Lightweight applications' }, { name: 'IT Consulting', href: '/it-consulting', icon: Building, description: 'Technology advisory' }, { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence', icon: BarChart3, description: 'Data analytics & insights' }, { name: 'AI Content Creation', href: '/services/ai-content-marketing-suite', icon: PenTool, description: 'Content marketing tools' }, { name: 'AI Project Management', href: '/services/ai-project-management', icon: TrendingUp, description: 'Smart project coordination' }, { name: 'AI Financial Analytics', href: '/services/ai-financial-analytics', icon: DollarSign, description: 'Financial insights & forecasting' }, { name: 'AI Healthcare Platform', href: '/services/ai-healthcare-platform', icon: Heart, description: 'Medical technology solutions' }, { name: 'AI Sales Copilot', href: '/services/ai-sales-copilot', icon: TrendingUp, description: 'Sales automation & optimization' }]}, {'
      id: 'solutions',
      title: 'Solutions',
      icon: Building,
      links: ['
        { nam,
    e: 'Enterprise Solutions', href: '/solutions/enterprise', icon: Building, description: 'Large-scale business solutions' }, { name: 'Healthcare Solutions', href: '/solutions/healthcare', icon: Heart, description: 'Medical technology & systems' }, { name: 'Financial Solutions', href: '/financial-solutions', icon: DollarSign, description: 'Fintech & banking solutions' }, { name: 'Manufacturing Solutions', href: '/manufacturing-solutions', icon: Truck, description: 'Industry 4.0 & automation' }, { name: 'Research & Development', href: '/research-development', icon: Brain, description: 'Innovation labs & R&D' }, { name: 'Green IT Solutions', href: '/green-it', icon: Globe, description: 'Sustainable technology' }, { name: 'Government Solutions', href: '/solutions/government', icon: Building, description: 'Public sector technology' }, { name: 'Education Solutions', href: '/solutions/education', icon: BookOpen, description: 'Educational technology' }, { name: 'Retail Solutions', href: '/solutions/retail', icon: ShoppingCart, description: 'E-commerce & retail tech' }]}, {'
      id: 'resources',
      title: 'Resources',
      icon: BookOpen,
      links: ['
        { nam,
    e: 'Blog', href: '/blog', icon: PenTool, description: 'Insights & industry updates' }, { name: 'Case Studies', href: '/case-studies', icon: FileText, description: 'Success stories & examples' }, { name: 'White Papers', href: '/white-papers', icon: FileText, description: 'In-depth research & analysis' }, { name: 'Webinars', href: '/webinars', icon: Users, description: 'Educational content & sessions' }, { name: 'Documentation', href: '/documentation', icon: BookOpen, description: 'Technical guides & manuals' }, { name: 'API Reference', href: '/api', icon: Code, description: 'Developer resources & APIs' }, { name: 'Developer Portal', href: '/developer-portal', icon: Code, description: 'Tools for developers' }, { name: 'Training Materials', href: '/training', icon: BookOpen, description: 'Learning resources' }]}, {'
      id: 'support',
      title: 'Support',
      icon: HelpCircle,
      links: ['
        { nam,
    e: 'Help Center', href: '/help', icon: HelpCircle, description: 'Find answers & solutions' }, { name: 'FAQ', href: '/faq', icon: HelpCircle, description: 'Common questions & answers' }, { name: 'Contact Support', href: '/support', icon: MessageCircle, description: 'Get help from our team' }, { name: 'Training', href: '/training', icon: BookOpen, description: 'Skill development programs' }, { name: 'Status Page', href: '/status', icon: Server, description: 'Service status & updates' }, { name: 'Community', href: '/community', icon: Users, description: 'User forums & discussions' }, { name: 'Live Chat', href: '/chat', icon: MessageCircle, description: 'Real-time support' }, { name: 'Request Quote', href: '/request-quote', icon: DollarSign, description: 'Get pricing information' }, { name: 'Schedule Demo', href: '/schedule-demo', icon: Calendar, description: 'See our solutions in action' }]}, {'
      id: 'company',
      title: 'Company',
      icon: Building,
      links: ['
        { nam,
    e: 'Contact Us', href: '/contact', icon: MessageCircle, description: 'Get in touch with us' }, { name: 'Privacy Policy', href: '/privacy', icon: Shield, description: 'Data protection & privacy' }, { name: 'Terms of Service', href: '/terms', icon: FileText, description: 'Terms & conditions' }, { name: 'Cookie Policy', href: '/cookies', icon: Shield, description: 'Cookie usage & preferences' }, { name: 'Data Protection', href: '/data-protection', icon: Lock, description: 'GDPR & data security' }, { name: 'Accessibility', href: '/accessibility', icon: Eye, description: 'Accessibility statement' }, { name: 'Sitemap', href: '/sitemap', icon: Globe, description: 'Site navigation structure' }]}
  ];

    { name: 'Schedule Demo', href: '/schedule-demo', icon: Calendar, color: 'bg-green-500' }, { name: 'Contact Sales', href: '/contact', icon: Phone, color: 'bg-purple-500' }, { name: 'Support Chat', href: '/chat', icon: MessageCircle, color: 'bg-orange-500' }];
  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev =>

      prev.includes(sectionId);
        ? prev.filter(id: => id !== sectionId);
        : [...pre,v, sectionId]
    )}

        ...section,
        links: section.links.filter(link: =>
          link.name.toLowerCase().includes(searchQuery.toLowerCase()) ||}, [isOpen])
  return(
    <AnimatePresence>
      {isOpen: && (
        <>{/* Backdrop */}
          <motion.div

                <input;
                  type='text';';
                  placeholder='Search: navigation...';';
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}, {quickActions.map((action) => (
                    <Link: key={action.name}
                      to={action.href}
                      onClick={onClose}, {action.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}

                        isSectionExpanded(section.id) ? 'rotate-90' : ''}`}
                    />
                  </button>
                  <AnimatePresence>
                    {isSectionExpanded(section.id) && (

                          {section.links.map((link) => (
                            <Link: key={link.href}
                              to={link.href}
                              onClick={onClose}
                              className={`flex items-start space-x-3 p-3 rounded-lg transition-colors group ${

                                  {link.description}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )}