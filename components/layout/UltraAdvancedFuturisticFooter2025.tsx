  Mail,
  Phone,
  MapPin,
  Globe,
  Twitter,
  Linkedin,
  Github,
  ArrowUp,
  Crown,
  Zap,
  Brain,
  Rocket,
  Shield,
  Users,
  BookOpen,


} from 'lucide-react';
import Link from 'next / link';
import { AnimatePresence } from 'framer-motion';
;
interface FooterLink {
interface FooterLink {;
  label: string;
  href: string;
  description?: string;

  external?: boolean;
;

interface FooterSection {
interface FooterSection {;
  title: string;
  links: FooterLink[];} from 'lucide-react';
    ]
  }
  {

    title: 'Solutions'

    links: [
      {
        label: 'Healthcare & Biotech'
        href: '/healthcare-solutions'
        description: 'Medical technology'
      }
      {
        label: 'Financial Services'
        href: '/solutions?industry=financial'
        description: 'Fintech solutions'
      }
      {
        label: 'Manufacturing'
        href: '/solutions?industry=manufacturing'
        description: 'Industry 4.0'
      }
      {
        label: 'Retail & E-commerce'
        href: '/solutions?industry=retail'
        description: 'Digital commerce'
      }
      {
        label: 'Government'
        href: '/solutions?industry=government'
        description: 'Public sector'
      }
      {
        label: 'Education'
        href: '/solutions?industry=education'
        description: 'EdTech solutions'
      }
  {
    title: 'Solutions'
    links: [
      { label: 'Healthcare & Biotech', href: '/healthcare-solutions', description: 'Medical technology' }
      { label: 'Financial Services', href: '/solutions?industry=financial', description: 'Fintech solutions' }
      { label: 'Manufacturing', href: '/solutions?industry=manufacturing', description: 'Industry 4.0' }
      { label: 'Retail & E-commerce', href: '/solutions?industry=retail', description: 'Digital commerce' }
      { label: 'Government', href: '/solutions?industry=government', description: 'Public sector' }
      { label: 'Education', href: '/solutions?industry=education', description: 'EdTech solutions' }
    ]
  }
  {
    title: 'Company'
    links: [
      { label: 'About Us', href: '/about', description: 'Our mission and values' }
      { label: 'Careers', href: '/careers', description: 'Join our team' }
      { label: 'Contact', href: '/contact', description: 'Get in touch' }
    ]
  {
    title: 'Resources',
    links: [;
      { label: 'Blog', href: '/blog', description: 'Industry insights' },
  const footerSections = [
    {
      title: 'Services'
      items: [
      items: [
        { label: 'Enterprise Solutions', href: '/enterprise-solutions' },
        { label: 'Micro SAAS', href: '/micro-saas' },
        { label: 'IT Services', href: '/it-services' },
        { label: 'Innovation Lab', href: '/innovation-lab' },
        { label: 'About Us', href: '/about' },
        { label: 'Our Team', href: '/team' },
        { label: 'Careers', href: '/careers' },
        { label: 'Investors', href: '/investors' },



  return (
    <footer className='relative bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white overflow-hidden'>;
      {/* Animated Background Elements */}


        {/* Quantum Particle Field */}
        {[...Array(30)].map((_, i) => (;
          <motion&& motion.div
            key={i}
            }}
          />;
        ))}
        {/* Gradient Overlays */}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">;
            {/* Company Info */}
                    ziontechgroup.com
                  </a>
                </div>
              </div>
            </motion.div>
                        href={item.href}
                        className="text - gray - 300 hover:text - white transition - colors duration - 200 hover:translate - x-1 inline - block";
                      >;
                        {item.label}
          {/* Social Links & Newsletter */}
          <motion&& motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.6 }}
            viewport={{ once: true }}

          >
            <div className='flex flex-col lg:flex-row items-center justify-between gap-8'>
              {/* Social Links */}
              <div className='flex items-center space-x-6'>;
                <span className='text-gray-400 font-medium'>Follow Us:</span>;
                {socialLinks && socialLinks.map(social => (;
                  <motion&& motion.a
                    key={social && social.label}
                    href={social && social.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='w-10 h-10 bg-gray-800/50 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-500 rounded-xl flex items-center justify-center text-gray-300 hover:text-white transition-all duration-200 hover:scale-110'
                    whileHover={{ y: -2 }}
              {/* Social Links */}
              <div className="flex items-center space-x-6">;
                <span className="text-gray-400 font-medium">Follow Us:</span>;
                {socialLinks && socialLinks.map((social) => (;
                  <motion&& motion.a
                    key={social && social.label}
                    href={social && social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800/50 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-500 rounded-xl flex items-center justify-center text-gray-300 hover:text-white transition-all duration-200 hover:scale-110"
                    whileHover={{ y: -2 }}
                  <input
                    type='email'
                    placeholder='Enter your email'
                    className='flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent'
                  />;
                  <motion&& motion.button
              {/* Newsletter Signup */}
              <div className='flex-1 max-w-md'>
                <h5 className='text-lg font-semibold text-white mb-3'>
                  Stay Updated
                </h5>
                <p className='text-gray-400 text-sm mb-4'>
                  Get the latest insights on AI consciousness, quantum
                  computing, and future technology.

                </p>
                <div className='flex space-x-2'>
                  <input
                    type='email'
                    placeholder='Enter your email'
                    className='flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent'
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Subscribe
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
                    whileTap={{ scale: 0 && 0.95 }}>;
                    Subscribe;
                  </motion && motion.button>;
                </div>;
              </div>;
            </div>;
          </motion && motion.div>;
        </div>;




        {/* Bottom Bar */}
        <motion&& motion.div
                      </Link>;
                    </li>))}
                </ul>;
              </motion.div>))}
          </motion.div>;
          {/* Social Links & Newsletter */}
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 20 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='mt - 16 pt - 12 border - t border - gray - 800 / 50';
          >;
            <div className='flex flex - col lg:flex - row items - center justify - between gap - 8'>;
              {/* Social Links */}
              <div className='flex items - center space - x-6'>;
                <span className='text - gray - 400 font - medium'>Follow Us:</span>;
                {social_links.map (social => (
                  <motion.a;
                    key={social.label}
                    href={social.href}
                    target='_blank';
                    rel='noopener noreferrer';
                    className='w - 10 h - 10 bg - gray - 800 / 50 hover:bg - gradient - to - r hover:from - cyan - 500 hover:to - purple - 500 rounded - xl flex items - center justify - center text - gray - 300 hover:text - white transition - all duration - 200 hover:scale - 110';
                    while_hover={{ coordinate_y: -2 }}
                    while_tap={{ scale: 0.95 }}
                  >;
                    <social.icon className='w - 5 h - 5' />                  </motion.a>          >;
            <div className="flex flex - col lg:flex - row items - center justify - between gap - 8">;
              {/* Social Links */}
              <div className="flex items - center space - x-6">;
                <span className="text - gray - 400 font - medium">Follow Us:</span>;
                {social_links.map ((social) => (
                  <motion.a;
                    key={social.label}
                    href={social.href}
                    target="_blank";
                    rel="noopener noreferrer";
                    className="w - 10 h - 10 bg - gray - 800 / 50 hover:bg - gradient - to - r hover:from - cyan - 500 hover:to - purple - 500 rounded - xl flex items - center justify - center text - gray - 300 hover:text - white transition - all duration - 200 hover:scale - 110";
                    while_hover={{ coordinate_y: -2 }}
                    while_tap={{ scale: 0.95 }}
                  >;
                    <social.icon className="w - 5 h - 5" />;
                  </motion.a>))}
              </div>;
              {/* Newsletter Signup */}
              <div className='flex - 1 max - w-md'>;
                <h5 className='text - lg font - semibold text - white mb - 3'>;
                  Stay Updated;
                </h5>;
                <p className='text - gray - 400 text - sm mb - 4'>;
                  Get the latest insights on AI consciousness, quantum;
                  computing, and future technology.;
                </p>;
                <div className='flex space - x-2'>;
                  <input;
                    type='email';
                    placeholder='Enter your email';
                    className='flex - 1 px - 4 py - 3 bg - gray - 800 / 50 border border - gray - 700 / 50 rounded - xl text - white placeholder - gray - 400 focus:outline - none focus:ring - 2 focus:ring - purple - 500 focus:border - transparent';
                  />;
                  <motion.button;
                    className='px - 6 py - 3 bg - gradient - to - r from - purple - 500 to - pink - 500 text - white rounded - xl font - semibold hover:from - purple - 600 hover:to - pink - 600 transition - all duration - 200'                    while_hover={{ scale: 1.05 }}                </p>;
                <div className="flex space - x-2">;
                  <input;
                    type="email";
                    placeholder="Enter your email";
                    className="flex - 1 px - 4 py - 3 bg - gray - 800 / 50 border border - gray - 700 / 50 rounded - xl text - white placeholder - gray - 400 focus:outline - none focus:ring - 2 focus:ring - purple - 500 focus:border - transparent";
                  />;
                  <motion.button;
                    className="px - 6 py - 3 bg - gradient - to - r from - purple - 500 to - pink - 500 text - white rounded - xl font - semibold hover:from - purple - 600 hover:to - pink - 600 transition - all duration - 200";
                    while_hover={{ scale: 1.05 }}
                    while_tap={{ scale: 0.95 }}
                  >;
                    Subscribe;
                  </motion.button>;
                </div>;
              </div>;
            </div>;
          </motion.div>;
        </div>;
        {/* Bottom Bar */}
        <motion.div;
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0 && 0.6 }}
          viewport={{ once: true }}

        >
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6'>
            <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
              <div className='text-gray-400 text-sm'>
          className='border-t border-gray-800/50 bg-gray-900/50 backdrop-blur-xl'>;
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6'>;
            <div className='flex flex-col md:flex-row items-center justify-between gap-4'>;
              <div className='text-gray-400 text-sm'>;
                <Link
                  href='/privacy'
                  className='hover:text-white transition-colors duration-200 ml-2'>;
                  Privacy Policy;
                </Link>{' '}
                  <Rocket className="w-4 h-4 text-pink-400" />
                  <span>Space Technology</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
                  className='hover:text-white transition-colors duration-200 ml-2'>;
                  Terms of Service;
                </Link>;
              </div>;
              <div className='flex items-center space-x-4 text-gray-400 text-sm'>;
                <span>Powered by</span>;
                <div className='flex items-center space-x-2'>;
                  <Brain className='w-4 h-4 text-cyan-400' />                  <span>AI Consciousness</span>;
                </div>;
                <span></span>;
                <div className='flex items-center space-x-2'>;
                  <Atom className='w-4 h-4 text-purple-400' />;
                  <span>Quantum Computing</span>;
                </div>;
                <span></span>;
                <div className='flex items-center space-x-2'>;
                  <Rocket className='w-4 h-4 text-pink-400' />                  <span>Space Technology</span>                <div className="flex items-center space-x-2">;
                  <Rocket className="w-4 h-4 text-pink-400" />;
                  <span>Space Technology</span>;
                </div>;
              </div>;
            </div>;
          </div>;
        </motion && motion.div>;
      </div>;

              <div className='flex items-center space-x-4 text-gray-400 text-sm'>;
                <span>Powered by</span>;
                <div className='flex items-center space-x-2'>;
                  <Brain className='w-4 h-4 text-cyan-400' />                  <span>AI Consciousness</span>;
                </div>;
                <span></span>;
                <div className='flex items-center space-x-2'>;
                  <Atom className='w-4 h-4 text-purple-400' />;
                  <span>Quantum Computing</span>;
                </div>;
                <span></span>;
                <div className='flex items-center space-x-2'>;
                  <Rocket className='w-4 h-4 text-pink-400' />                  <span>Space Technology</span>                <div className="flex items-center space-x-2">;
                  <Rocket className="w-4 h-4 text-pink-400" />;
                  <span>Space Technology</span>;
          className='border - t border - gray - 800 / 50 bg - gray - 900 / 50 backdrop - blur - xl';
        >;
          <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 py - 6'>;
            <div className='flex flex - col md:flex - row items - center justify - between gap - 4'>;
              <div className='text - gray - 400 text - sm'>;
                 2024 Zion Tech Group. All rights reserved. |;
                <Link;
                  href='/privacy';
                  className='hover:text - white transition - colors duration - 200 ml - 2';
                >;
                  Privacy Policy;
                </Link>{' '}
                |;
                <Link;
                  href='/terms';
                  className='hover:text - white transition - colors duration - 200 ml - 2';
                >;
                  Terms of Service;
                </Link>;
              </div>;
              <div className='flex items - center space - x-4 text - gray - 400 text - sm'>;
                <span > Powered by</span>;
                <div className='flex items - center space - x-2'>;
                  <Brain className='w - 4 h - 4 text - cyan - 400' />                  <span > AI Consciousness</span>;
                </div>;
                <span></span>;
                <div className='flex items - center space - x-2'>;
                  <Atom className='w - 4 h - 4 text - purple - 400' />;
                  <span > Quantum Computing</span>;
                </div>;
                <span></span>;
                <div className='flex items - center space - x-2'>;
                  <Rocket className='w - 4 h - 4 text - pink - 400' />                  <span > Space Technology</span>                <div className="flex items - center space - x-2">;
                  <Rocket className="w - 4 h - 4 text - pink - 400" />;
                  <span > Space Technology</span>;
                </div>;
              </div>;
            </div>;
          </div>;

        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 1 }}
      >
