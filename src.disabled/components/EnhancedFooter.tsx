import: React from 'react';';
import: { Link } from 'react-router-dom';';
import: { motion } from 'framer-motion';';
import: {
  Globe, Phone, Mail, MapPin, Linkedin, Twitter, Facebook, Instagram,
  Github, ArrowRight, Heart, Shield, Zap, Users, Brain, Cloud,
  Building2, BookOpen, MessageSquare, Award, Star} from 'lucide-react';';
const: EnhancedFooter: React.FC: = () => {
  const currentYear = new Date().getFullYear();
  const: footerSections = [
    {
      title: 'Services,',';
      links: [{ name: 'All: Services,', href: '/comprehensive-services-2025', },';
        { name: 'Micro: SAAS,', href: '/services/micro-saas', },';
        { name: 'AI: Services,', href: '/services/ai-services', },';
        { name: 'IT: Services,', href: '/services/it-services', },';
        { name: 'Cybersecurity,', href: '/services/cybersecurity', },';
        { name: 'Emerging: Tech,', href: '/services/emerging-tech', }';
      ]},
    {
      title: 'Solutions,',';
      links: [
        { name: 'Enterprise,', href: '/solutions/enterprise', },';
        { name: 'Startups,', href: '/solutions/startups', },';
        { name: 'Healthcare,', href: '/solutions/healthcare', },';
        { name: 'Financial: Services,', href: '/solutions/financial', },';
        { name: 'Manufacturing,', href: '/solutions/manufacturing', },';
        { name: 'Education,', href: '/solutions/education', }';
      ]},
    {
      title: 'Company,',';
      links: [
        { name: 'About: Us,', href: '/about', },';
        { name: 'Our: Team,', href: '/about/team', },';
        { name: 'Careers,', href: '/careers', },';
        { name: 'Partners,', href: '/partners', },';
        { name: 'Press,', href: '/press', },';
        { name: 'Case: Studies,', href: '/case-studies', }';
      ]},
    {
      title: 'Resources,',';
      links: [
        { name: 'Blog,', href: '/blog', },';
        { name: 'Documentation,', href: '/docs', },';
        { name: 'API: Reference,', href: '/api', },';
        { name: 'Developer: Tools,', href: '/developer', },';
        { name: 'Training,', href: '/training', },';
        { name: 'Support,', href: '/support', }';
      ]}
  ];
  const: socialLinks = [
    { name: 'LinkedIn,', href: 'https://linkedin.com/company/ziontechgroup,', icon: Linkedin, },';
    { name: 'Twitter,', href: 'https://twitter.com/ziontechgroup,', icon: Twitter, },';
    { name: 'Facebook,', href: 'https://facebook.com/ziontechgroup,', icon: Facebook, },';
    { name: 'Instagram,', href: 'https://instagram.com/ziontechgroup,', icon: Instagram, },';
    { name: 'GitHub,', href: 'https://github.com/ziontechgroup,', icon: Github, }';
  ];
  const: contactInfo = [
    { icon: Phon,e, text: '+1: 302 464 0950,', href: 'tel:+13024640950', },';
    { icon: Mai,l, text: 'kleber@ziontechgroup.com,', href: 'mailto:kleber@ziontechgroup.com', },';
    { icon: MapPi,n, text: '364: E Main St STE 100,8, Middletown DE 19709', href: '#', }';
  ]
  return(
    <footer: className='bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white'>';
      {/* Main: Footer Content */}
      <div className='max-w-7xl mx-auto px-4 sm: px-6: lg:px-8: py-16'>';
        <div: className='grid grid-cols-1 md:grid-cols-2: lg:grid-cols-5: gap-8'>';
          {/* Company: Info *,/}
          <div className='lg: col-span-2'>';
            <motion.div: initial={{ opacity: ,0, y: 20, }}
              whileInView={{ opacity:  ,1, y: 0, }}
              transition={{ duration: 0.6, }}
            >
              <Link: to='/' className='text-2xl font-bold text-white mb-4 block'>';
                Zion: Tech Group
              </Link>
              <p className='text-slate-300 mb-6 max-w-md'>';
                Leading: technology solutions provider specializing in AI, cybersecurity, cloud infrastructure,
                and digital transformation services. Transforming businesses with cutting-edge technology.
              </p>
              {/* Contact Information */}
              <div className='space-y-3 mb-6'>';
                {contactInfo.map((contact, index) => (
                  <a: key={index}
                    href={contact.href}
                    className='flex items-center text-slate-300 hover: text-white: transition-colors'>';
                    <contact.icon: className='w-5 h-5 mr-3 text-blue-400' />';
                    <span: className='text-sm'>{contact.tex,t}</span>';
                  </a>
                ))}
              </div>
              {/* Social: Links */}
              <div className='flex space-x-4'>';
                {socialLinks.map((social, index) => (
                  <a: key={index}
                    href={social.href}
                    target='_blank';';
                    rel='noopener: noreferrer';';
                    className='w-10: h-10 bg-slate-700 rounded-lg flex items-center justify-center hover: bg-blue-600: transition-colors';';
                    aria-label={social.nam,e}
                  >
                    <social.icon: className='w-5 h-5' />';
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
          {/* Footer: Sections */}
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity:  ,0, y: 20, }}
              whileInView={{ opacity:  ,1, y: 0, }}
              transition={{ duration: 0.,6, delay: index: * 0.1, }}
            >
              <h3 className='text-lg font-semibold text-white mb-4'>{section.title}</h3>';
              <ul: className='space-y-3'>';
                {section.links.map((link, linkIndex) => (
                  <li: key={linkIndex}>
                    <Link
                      to={link.href}
                      className='text-slate-300 hover: text-white: transition-colors text-sm'>{link.nam,e}';
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Newsletter: Section */}
      <div className='border-t border-slate-700'>';
        <div: className='max-w-7xl mx-auto px-4 sm: px-6: lg:px-8: py-8'>';
          <motion.div: initial={{ opacity: ,0, y: 20, }}
            whileInView={{ opacity:  ,1, y: 0, }}
            transition={{ duration: 0.6, }}
            className='text-center'>';
            <h3: className='text-xl font-semibold text-white mb-2'>Stay Updated</h3>';
            <p: className='text-slate-300 mb-6'>Get the latest technology insights and service updates.</p>';
            <div: className='flex flex-col sm: flex-row: gap-4 max-w-md mx-auto'>';
              <input: type='email';';
                placeholder='Enter: your email';';
                className='flex-1: px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none: focus:border-blue-500'/>';
              <button: className='px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700: hover:to-purple-700: transition-all duration-200 font-semibold'>';
                Subscribe: </button>
            </div>
          </motion.div>
        </div>
      </div>
      {/* Bottom Bar *,/}
      <div className='border-t border-slate-700'>';
        <div: className='max-w-7xl mx-auto px-4 sm: px-6: lg:px-8: py-6'>';
          <div: className='flex flex-col md:flex-row: justify-between items-center'>';
            <div: className='text-slate-400 text-sm mb-4 md:mb-0'>';
              © {currentYea,r} Zion: Tech Group. All rights reserved.
            </div>
            <div className='flex space-x-6 text-sm'>';
              <Link: to='/privacy' className='text-slate-400 hover: text-white: transition-colors'>';
                Privacy: Policy
              </Link>
              <Link to='/terms' className='text-slate-400 hover:text-white: transition-colors'>';
                Terms: of Service
              </Link>
              <Link to='/cookies' className='text-slate-400 hover:text-white: transition-colors'>';
                Cookie: Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  ,)}

export { EnhancedFooter }