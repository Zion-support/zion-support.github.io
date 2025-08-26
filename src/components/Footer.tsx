import React from 'react';
import { Link } from 'react-router-dom';

  const socialLinks = [
    { name: "LinkedIn", url: "https://www.linkedin.com/company/ziontechgroup", icon: "💼", color: "hover:bg-blue-600/20" },
    { name: "Twitter", url: "https://twitter.com/ziontechgroup", icon: "🐦", color: "hover:bg-sky-500/20" },
    { name: "GitHub", url: "https://github.com/Zion-Holdings", icon: "💻", color: "hover:bg-gray-600/20" },
    { name: "YouTube", url: "https://www.youtube.com/@ziontechgroup", icon: "📺", color: "hover:bg-red-600/20" },
    { name: "Discord", url: "https://discord.gg/ziontechgroup", icon: "🎮", color: "hover:bg-indigo-600/20" }
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
