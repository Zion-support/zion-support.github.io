import React from 'react';
import { Link } from 'react-router-dom';
    ],
  },
  company: {
    title: 'Company',
    description: 'About Zion Tech Group',
    items: [
    ],
  },
  support: {
    title: 'Support & Resources',
    description: 'Help and Documentation',
    items: [
    ],
  },
  legal: {
    title: 'Legal & Privacy',
    items: [
      { name: 'Terms of Service', href: '/terms', icon: FileText, color: 'from-zion-orange to-zion-purple' },
      { name: 'Privacy Policy', href: '/privacy', icon: Shield, color: 'from-zion-purple to-zion-red' },
      { name: 'Cookie Policy', href: '/cookies', icon: FileText, color: 'from-zion-green to-zion-cyan' },
      { name: 'GDPR Compliance', href: '/gdpr', icon: Award, color: 'from-zion-green to-zion-blue' },
      { name: 'Data Processing', href: '/data-processing', icon: Database, color: 'from-zion-blue to-zion-green' },
      { name: 'Security Policy', href: '/security-policy', icon: Shield, color: 'from-zion-purple to-zion-red' }
    ],
  }
};

const socialLinks = [
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter, color: 'from-blue-400 to-blue-600' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/zion-marketplace', icon: Linkedin, color: 'from-blue-600 to-blue-800' },
  { name: 'Facebook', href: 'https://www.facebook.com/zionmarketplace', icon: Facebook, color: 'from-blue-600 to-blue-800' },
  { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram, color: 'from-pink-400 to-pink-600' },
  { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github, color: 'from-gray-600 to-gray-800' },
];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-zion-slate-light/20">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-zion-slate-light">
              <span>&copy; 2025 Zion Tech Group. All rights reserved.</span>
              <Link to="/privacy" className="hover:text-zion-cyan transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-zion-cyan transition-colors duration-200">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="hover:text-zion-cyan transition-colors duration-200">
                Sitemap
              </Link>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-sm text-zion-slate-light">Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span className="text-sm text-zion-slate-light">in Delaware, USA</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-full shadow-2xl shadow-zion-cyan/20 hover:shadow-zion-cyan/40 transition-all duration-300 z-40"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>
    </footer>
  );
