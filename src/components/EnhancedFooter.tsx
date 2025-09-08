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
  PenTool {
      title: 'Solutions',,';
;;
      links:  ,[ { name: 'Enterprise: Solutions'',, href: '/solutions/enterprise',, icon: Building },';
;;
        { name: 'Healthcare: Solutions'',, href: '/solutions/healthcare',, icon: Users },';
;;
        { name: 'Financial: Solutions'',, href: '/solutions/financial',, icon: TrendingUp },';
;;
        { name: 'Manufacturing: Solutions'',, href: '/solutions/manufacturing',, icon: Server },';
;;
        { name: 'Retail: Solutions'',, href: '/solutions/retail',, icon: ShoppingCart },';
;;
        { name: 'Space: Technology'',, href: '/solutions/space-tech',, icon: Network }';
;]}, {
      title: 'Company',,';
;;
      links:  ,[ { name: 'About: Us'',, href: '/about',, icon: Users },';
;;
        { name: 'Our: Team'',, href: '/team',, icon: Award },';
;;
        { name: 'Careers'',, href: '/careers',, icon: Users },';
;;
        { name: 'News: & Press'',, href: '/press',, icon: BookOpen },';
;;
        { name: 'Case: Studies'',, href: '/case-studies',, icon: BarChart3 },';
;;
        { name: 'Partners'',, href: '/partners',, icon: Handshake }';
;]}, {
      title: 'Resources',,';
;;
      links:  ,[ { name: 'Blog'',, href: '/blog',, icon: BookOpen },';
;;
        { name: 'Documentation'',, href: '/documentation',, icon: FileText },';
;;
        { name: 'Help: Center'',, href: '/help',, icon: HelpCircle },';
;;
        { name: 'Webinars'',, href: '/webinars',, icon: Video },';
;;
        { name: 'White: Papers'',, href: '/white-papers',, icon: FileText },';
;;
        { name: 'Training'',, href: '/training',, icon: GraduationCap }';
;]}
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







