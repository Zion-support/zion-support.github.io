class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}


import {
  Mail
  Phone
  MapPin
  Globe
  Twitter
  Linkedin
  Github
  ArrowUp
  Crown
  Zap
  Brain
  Rocket
  Shield
  Users
  BookOpen
  Briefcase
  Atom;

import Link from 'next/link';
import { AnimatePresence } from 'framer-motion';



  Briefcase,;
  Atom,;


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

  {
    title: 'Resources',
    links: [;
      { label: 'Blog', href: '/blog', description: 'Industry insights' },
  };
  {
    title: 'Resources',
    links: [;
      { label: 'Blog', href: '/blog', description: 'Industry insights' },

  { name: 'About Us', href: '/about', icon: <Users className="w-4 h-4" /> },
  { name: 'Contact', href: '/contact', icon: <Phone className="w-4 h-4" /> },
  { name: 'Support', href: '/support', icon: <HelpCircle className="w-4 h-4" /> },
  { name: 'Documentation', href: '/docs', icon: <FileText className="w-4 h-4" /> },
  { name: 'API Reference', href: '/api', icon: <Code className="w-4 h-4" /> },
  { name: 'Status', href: '/status', icon: <TrendingUp className="w-4 h-4" /> }
];=======

      { label: 'Blog', href: '/blog', description: 'Industry insights' },


  };




        { label: 'AI & Machine Learning', href: '/ai-services' },
        { label: 'Quantum Computing', href: '/quantum-computing' },
        { label: 'Space Technology', href: '/space-tech' },
        { label: 'Cybersecurity', href: '/cybersecurity' },
        { label: '2040 Services', href: '/innovative-2040-services-showcase' }
      ]
    };

    {
      title: 'Solutions'
      items: [

        { label: 'Enterprise Solutions', href: '/enterprise-solutions' },
        { label: 'Micro SAAS', href: '/micro-saas' },
        { label: 'IT Services', href: '/it-services' },
        { label: 'Innovation Lab', href: '/innovation-lab' },
        { label: 'Research & Development', href: '/research-development' }
      ]
    };

    {
      title: 'Company'
      items: [

          />;
        ))}


        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">;
          <motion&& motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">;
            {/* Company Info */}


            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.6 }}
            viewport={{ once: true }}
          >
            <div className='flex flex-col lg:flex-row items-center justify-between gap-8'>
            className='mt-16 pt-12 border-t border-gray-800/50'

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
          >
            <div className='flex flex-col lg:flex-row items-center justify-between gap-8'>
              {/* Social Links */}
              <div className='flex items-center space-x-6'>
                <span className='text-gray-400 font-medium'>Follow Us:</span>
                {socialLinks.map(social => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='w-10 h-10 bg-gray-800/50 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-500 rounded-xl flex items-center justify-center text-gray-300 hover:text-white transition-all duration-200 hover:scale-110'
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className='w-5 h-5' />                  </motion.a>          >
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              {/* Social Links */}
              <div className="flex items-center space-x-6">
                <span className="text-gray-400 font-medium">Follow Us:</span>
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800/50 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-500 rounded-xl flex items-center justify-center text-gray-300 hover:text-white transition-all duration-200 hover:scale-110"
                    whileHover={{ y: -2 }}
                ))}
              </div>


                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />;
                  <motion&& motion.button
                    className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200"

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
                    className='px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200'                    whileHover={{ scale: 1.05 }}                </p>
                <div className="flex space-x-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"

                </p>
                <div className='flex space-x-2'>
                  <input
                    type='email'
                    placeholder='Enter your email'
                    className='flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent'
                  />
                  <motion.button

                    className='px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200'                    whileHover={{ scale: 1.05 }}


                    className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200"
                    className='px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200'                    whileHover={{ scale: 1.05 }}

                  />
                  <motion.button
                    className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200"
                    className='px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200'                    whileHover={{ scale: 1.05 }}


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


                    whileHover={{ scale: 1 && 1.05 }}





        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0 && 0.6 }}
          viewport={{ once: true }}
        >
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6'>
            <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
              <div className='text-gray-400 text-sm'>
                © 2024 Zion Tech Group. All rights reserved.
        >
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6'>
            <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
              <div className='text-gray-400 text-sm'>
                © 2024 Zion Tech Group. All rights reserved.
                <Link
                  href='/privacy'
                  className='hover:text-white transition-colors duration-200 ml-2'>;
                  Privacy Policy;
                </Link>{' '}
                |;
                  className='hover:text-white transition-colors duration-200 ml-2'>;
                  Terms of Service;
                </Link>;
              </div>;
};
export default UltraAdvancedFuturisticFooter2025;      </motion && motion.button>;
    </footer>;
  );

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className='fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-200 z-50'        whileHover={{ scale: 1.1, y: -2 }}



export default UltraAdvancedFuturisticFooter2025;      </motion.button>
    </footer>
  )
}
export default UltraAdvancedFuturisticFooter2025;

        <ArrowUp className="w-6 h-6 mx-auto" />
      </motion.button>
    </footer>

        </motion.div>;
      </div>;
      {/* Scroll to Top Button */}
      <motion.button;
        on_click={scrollToTop}
        className='fixed bottom - 8 right - 8 w - 12 h - 12 bg - gradient - to - r from - purple - 500 to - pink - 500 text - white rounded - full shadow - 2xl hover:shadow - purple - 500 / 25 transition - all duration - 200 z - 50'        while_hover={{ scale: 1.1, coordinate_y: -2 }}        className="fixed bottom - 8 right - 8 w - 12 h - 12 bg - gradient - to - r from - purple - 500 to - pink - 500 text - white rounded - full shadow - 2xl hover:shadow - purple - 500 / 25 transition - all duration - 200 z - 50";
        while_hover={{ scale: 1.1, coordinate_y: -2 }}
        while_tap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 1 }}
      >;
        <ArrowUp className='w - 6 h - 6 mx - auto' />;
      </motion.button>;
    </footer>);
}
;
export default UltraAdvancedFuturisticFooter2025;      </motion.button>;
    </footer>);
}
;
export default UltraAdvancedFuturisticFooter2025;
;

  );=======
        <ArrowUp className="w-6 h-6 mx-auto" />
      </motion.button>
    </footer>
  );

};


export default UltraAdvancedFuturisticFooter2025;
export default UltraAdvancedFuturisticFooter2025;
