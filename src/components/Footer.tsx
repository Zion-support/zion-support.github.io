
  Linkedin,
  Instagram,
  Globe,
  Linkedin,
  Twitter,
  Linkedin,
  Facebook,
  Instagram,
  Github,
  Zap,
  Brain,
  Shield,
  Users,
  HardDrive,
  TrendingUp,
  Building2,
  FileText,
  HelpCircle,
  BarChart3,
  ArrowUp,
  Heart,
  Star,
  CheckCircle,
  Award,
  Lock,
  Eye,
  Atom,
  Code,
  Database,
  Network,
  Server;
  Rocket,
  Target,
  Handshake,
  Lightbulb,
  Cpu,
  Database,
  Network,
  Smartphone,
  Lock,
  Code,
  Server,
  Chip,
  Wifi,
  ShieldCheck,
  Bot,
  Workflow,
  Eye,
  Sparkles,
  Atom,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  Activity,
  MessageCircle,
  Search,
  BarChart,
  Users2,
  Settings,

                initial={false}
                animate={{ height: activeSection === section.title ? &apos;auto&apos; : 0, opacity: activeSection === section.title ? 1 : 0 }}
                transition={{ duration: 0.3 }}

                  ))}
                </div>;
              </motion.div>;
            </div>;
          ))}
        </div>;
        {/* Contact & Social Section */}

import Link from 'next/link';

  Instagram, Globe,
  Linkedin, Twitter,
  Facebook, Instagram,
  Youtube, Github,
  Zap, Brain,
  Shield, Users,
  HardDrive, TrendingUp,
  Building2, FileText,
  HelpCircle, BarChart3,
  ArrowUp, Heart,
  Star, CheckCircle,
  Award, Lock,;
  Eye, Atom,;
  Code, Database,;
  Network, Server;
  Rocket, Target,
  Handshake, Lightbulb,
  Cpu, Database,
  Network, Smartphone,
  Lock, Code,
  Server, Chip,
  Wifi, ShieldCheck,
  Bot, Workflow,
  Eye, Sparkles,
  Atom, Leaf,
  Gamepad2, Coins,
  Satellite, Activity,
  MessageCircle, Search,
  BarChart, Users2,
  Settings, Palette} from 'lucide-react';

  const currentYear = new Date().getFullYear();


      links: [
        { name: 'About Us', href: '/about' }, { name: 'Our Team', href: '/team' }, { name: 'Careers', href: '/careers' },

      links: [
        { name: 'Blog', href: '/blog' } ];

  return (
    <footer className="bg-gray-900 text-white">

            </p>
            
            {/* Contact Information */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Phone className="w-5 h-5 mr-3 text-blue-400" />
                <a href="tel:+13024640950" className="hover:text-blue-400 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="w-5 h-5 mr-3 text-blue-400" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-blue-400 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-start text-gray-300">
                <MapPin className="w-5 h-5 mr-3 mt-1 text-blue-400 flex-shrink-0" />
                <span>
                  364 E Main St STE 1008<br />
                  Middletown, DE 19709
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">


                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>


            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <div className="space-y-2">
              <Link href="/ai-services" className="block text-sm text-gray-300 hover:text-white transition-colors">
                AI Services
              </Link>
              <Link href="/it-services" className="block text-sm text-gray-300 hover:text-white transition-colors">
                IT Services
              </Link>
              <Link href="/micro-saas" className="block text-sm text-gray-300 hover:text-white transition-colors">
                Micro SaaS
              </Link>
              <Link href="/consulting" className="block text-sm text-gray-300 hover:text-white transition-colors">
                Consulting
              </Link>

                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center space-x-3">

                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-start space-x-3">

              </div>

            </div>
          </div>
        </div>

              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"

                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>


            <div className="text-sm text-gray-400">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>




            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button;
        onClick={scrollToTop}

      </button>
    </footer>
  )}







