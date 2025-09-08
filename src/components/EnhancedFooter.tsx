<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
=======
>>>>>>> origin/cursor/build-project-and-deploy-with-netlify-1c1d
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
import { motion } from 'framer-motion';
=======

  Phone,
  Mail,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Github,
  Youtube,
  ArrowRight,
  Star,
  Shield,
  Zap,
  Brain,
  Cloud,
  Users,
  Award,
  TrendingUp,
  MessageCircle,
  HelpCircle,
  BookOpen,
  ShoppingCart,
  Database,
  Network,
  BarChart3,
  Code,
  Server,
  Building,
  Handshake,
  FileText,
  Video,
  GraduationCap,
  Atom,
  PenTool,
  Leaf,
  ChevronRight,
  ChevronDown,
  DollarSign,
  Newspaper
} from 'lucide-react';

export function EnhancedFooter() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Featured Services',
      links: [
        { name: 'AI Content Creation Studio Pro', href: '/services/AI-Content-Creation-Studio-Pro', icon: PenTool, featured: true },
        { name: 'Quantum AI Trading Platform', href: '/services/Quantum-AI-Trading-Platform', icon: Atom, featured: true },
        { name: '2025 Services Showcase', href: '/innovative-services-showcase-2025', icon: Sparkles, featured: true },
        { name: '2029 Cutting-Edge Services', href: '/zion-cutting-edge-services-2029', icon: Sparkles, featured: true },
        { name: 'AI-Powered Micro SAAS', href: '/zion-cutting-edge-services-2029', icon: Brain, featured: true }
      ]
    },
    {
      title: 'Core Services',
      links: [
        { name: 'AI Services', href: '/ai-services', icon: Brain },
        { name: 'IT Infrastructure', href: '/it-services', icon: Server },
        { name: 'Micro SAAS Solutions', href: '/services/micro-saas-solutions', icon: Rocket },
        { name: 'Quantum Computing', href: '/services/quantum-computing', icon: Atom },
        { name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield },
        { name: 'Cloud & DevOps', href: '/services/cloud-devops', icon: Cloud },
        { name: 'Digital Transformation', href: '/services/digital-transformation', icon: Rocket }
      ]
    },
    {
      title: 'Solutions',
      links: [
        { name: 'Enterprise Solutions', href: '/solutions/enterprise', icon: Building },
        { name: 'Healthcare Solutions', href: '/solutions/healthcare', icon: Heart },
        { name: 'Financial Solutions', href: '/solutions/financial', icon: TrendingUp },
        { name: 'Manufacturing Solutions', href: '/solutions/manufacturing', icon: Cpu },
        { name: 'Retail Solutions', href: '/solutions/retail', icon: ShoppingCart },
        { name: 'Government Solutions', href: '/solutions/government', icon: Globe2 }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about', icon: Users },
        { name: 'Leadership', href: '/leadership', icon: Award },
        { name: 'Careers', href: '/careers', icon: GraduationCap },
        { name: 'Partners', href: '/partners', icon: Handshake },
        { name: 'News', href: '/news', icon: Newspaper },
        { name: 'Blog', href: '/blog', icon: BookOpen }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Case Studies', href: '/case-studies', icon: FileText },
        { name: 'White Papers', href: '/white-papers', icon: FileText },
        { name: 'Webinars', href: '/webinars', icon: Video },
        { name: 'Training', href: '/training', icon: GraduationCap },
        { name: 'Documentation', href: '/documentation', icon: BookOpen },
        { name: 'Support', href: '/support', icon: HelpCircle }
      ]
    },
    {
      title: 'Contact',
      links: [
        { name: 'Contact Us', href: '/contact', icon: MessageCircle },
        { name: 'Request Quote', href: '/request-quote', icon: DollarSign },
        { name: 'Phone: +1 (302) 464-0950', href: 'tel:+13024640950', icon: Phone },
        { name: 'Email: kleber@ziontechgroup.com', href: 'mailto:kleber@ziontechgroup.com', icon: Mail },
        { name: 'Location: Delaware, USA', href: '#', icon: MapPin }
      ]
    }
  ];
  const: socialLinks = [
    { name: 'LinkedIn'',, href: 'https://linkedin.com/company/ziontechgroup',, icon: Linkedi,n, color: 'hover:text-blue-400' }',;
;;
    { name: 'Twitter'',, href: 'https://twitter.com/ziontechgroup',, icon: Twitte,r, color: 'hover:text-blue-400' }',;
;;
    { name: 'Facebook'',, href: 'https://facebook.com/ziontechgroup',, icon: Faceboo,k, color: 'hover:text-blue-600' }',;
;;
    { name: 'Instagram'',, href: 'https://instagram.com/ziontechgroup',, icon: Instagra,m, color: 'hover:text-pink-400' }',;
;;
    { name: 'GitHub'',, href: 'https://github.com/ziontechgroup',, icon: Githu,b, color: 'hover:text-gray-400' }',;
;;
    { name: 'YouTube'',, href: 'https://youtube.com/@ziontechgroup',, icon: Youtub,e, color: 'hover:text-red-400' }';
;];
  const: quickLinks = [
    { name: 'Contact: Us'',, href: '/contact',, icon: MessageCircle },';
;;
    { name: 'Request: Quote'',, href: '/request-quote',, icon: DollarSign },';
;;
    { name: 'Support'',, href: '/help',, icon: HelpCircle },';
;;
    { name: 'Privacy: Policy'',, href: '/privacy',, icon: Shield },';
;;
    { name: 'Terms: of Service'',, href: '/terms',, icon: FileText },';
;;
    { name: 'Cookie: Policy'',, href: '/cookies',, icon: Shield }';
;];
  return(
    <footer: className='bg-zinc-900 border-t border-white/20'>';
;;
      {/* Main: Footer Content */}
      <div className='max-w-7xl mx-auto px-4 sm: px-6: lg:px-8: py-16'>',;
,;;
        <div: className='grid grid-cols-1 md: grid-cols-2: lg:grid-cols-6: gap-8'>',;
,;;
          {/* Company: Info */}
          <div className='lg: col-span-2'>',;
,;;
            <div: className='flex items-center space-x-3 mb-6'>';
;;
              <div: className='w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center'>';
;;
                <Zap: className='w-7 h-7 text-white' />';
;;
              </div>
              <div>
                <h3: className='text-2xl font-bold text-white'>Zion Tech Group</h3>';
;;
                <p: className='text-blue-400 text-sm font-medium'>Innovation Group</p>';
;;
              </div>
            </div>
            <p: className='text-gray-300 mb-6 max-w-md'>';
;;
              Leading: the future of technology with cutting-edge AI solutions, quantum computing, and innovative micro SAAS services that transform businesses and drive exponential growth.
            </p>
            <div className='space-y-3'>';
;;
              <div: className='flex items-center space-x-3 text-gray-300'>';
;;
                <Phone: className='w-4 h-4 text-blue-400' />';
;;
                <span>+1: 302 464 0950</span>
              </div>
              <div className='flex items-center space-x-3 text-gray-300'>';
;;
                <Mail: className='w-4 h-4 text-green-400' />';
;;
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div: className='flex items-start space-x-3 text-gray-300'>';
;;
                <MapPin: className='w-4 h-4 text-purple-400 mt-0.5' />';
;;
                <span: className='max-w-xs'>364 E Main St STE 1008<br />Middletown DE 19709</span>';
;;
              </div>
            </div>
            {/* Social: Links */}
            <div className='mt-6'>';
;;
              <h4: className='text-white font-semibold mb-3'>Follow Us</h4>';
;;
              <div: className='flex space-x-4'>';
;;
                {socialLinks.map((social) => (
                  <a: key={social.name}
                    href={social.href}
                    target='_blank';
;;';
                    rel='noopener: noreferrer';
;;';
                    className={`text-gray-400: ${social.color} transition-colors hover: scale-110: transform,`}`;
                    aria-label={social.name}
                  >
                    <social.icon: className='w-5 h-5' />';
;;

                    key={social.name}
                    href={social.href}

                    className={`text-gray-400 ${social.color} transition-colors hover: scale-110 transform`}

                    aria-label={social.name}

                  </a>

                ))}

                      <link.icon className={`w-4 h-4 transition-transform group-hover:scale-110 ${
                        link.featured ? &apos;text-blue-400&apos; : &apos;text-blue-400&apos}`} />&apos;
                      <span className=&apos;text-sm&apos;>{link.name}&apos;</span>
                      {link.featured && (}
                        <Star className=&apos;w-3 h-3 text-yellow-400 ml-1&apos; />
                      )}&apos;

                    </Link>
                  </li>

                ))}
              </ul>;
            </div>;
          ))}, {quickLinks.map((link) => (
              <Link: key={link.name}
                to={link.href}


              </Link>

            ))}

              </button>

            </div>
          </div>
        </div>

        {/* Floating Action Button */}
        <motion.div
          className="fixed bottom-8 right-8 z-50"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <Link
            to="/contact"
            className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center shadow-2xl shadow-cyan-500/50 hover:shadow-cyan-500/70 transition-all duration-300 hover:scale-110 group"
          >
            <MessageCircle className="w-8 h-8 text-white group-hover:rotate-12 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
      {/* Bottom Footer */}

              </Link>
            </div>

            {/* Back to Top */}
            <button;


            </button>

          </div>
        </div>
      </div>

      {/* Floating Contact Button */}
      <motion.div;
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}

        <Link


        </Link>
      </motion.div>
    </footer>







