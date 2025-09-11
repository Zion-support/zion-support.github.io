

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
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {;
  Menu,;
  X,;
  ChevronDown,;
  Search,;
  User,;
  Settings,;
  LogOut,;
  Bell,;
  Globe,;
  Zap,;
  Brain,;
  Rocket,;
  Dna,;
  DollarSign,;
  Lock,;
  Wifi,;
  Truck,;
  Gamepad2,;
  Bot,;
  Factory,;
  Car,;

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu
  X
  ChevronDown
  Search
  User
  Settings
  LogOut
  Bell
  Globe
  Zap
  Brain
  Rocket
  Dna
  DollarSign
  Lock
  Wifi
  Truck
  Gamepad2
  Bot
  Factory
  Car
  Menu,
  X,
  ChevronDown,
  Search,
  User,
  Settings,
  LogOut,
  Bell,
  Globe,
  Zap,
  Brain,
  Rocket,
  Dna,
  DollarSign,
  Lock,
  Wifi,
  Truck,
  Gamepad2,
  Bot,
  Factory,
  Car,;

} from "lucide-react";
import Link from "next/link";
interface EnhancedNavigationProps {;
  className?: string;
}



  className = ""
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navigationItems = [
    {
      name: "Services"
      href: "/services"
      icon: <Brain className="w-4 h-4" />
      dropdown: [
        {
          name: "AI & Machine Learning"
          href: "/services?category=ai-ml"
          icon: <Brain className="w-4 h-4" />
        }
        {
          name: "Quantum Computing"
          href: "/services?category=quantum"
          icon: <Rocket className="w-4 h-4" />
        }
        {
          name: "Space Technology"
          href: "/services?category=space"
          icon: <Globe className="w-4 h-4" />
        }
        {
          name: "Biotech & Healthcare"
          href: "/services?category=biotech"
          icon: <Dna className="w-4 h-4" />
        }
        {
          name: "Financial Services"
          href: "/services?category=finance"
          icon: <DollarSign className="w-4 h-4" />
        }
        {
          name: "Cybersecurity"
          href: "/services?category=security"
          icon: <Lock className="w-4 h-4" />
        }
        {
          name: "IoT & Smart Devices"
          href: "/services?category=iot"
          icon: <Wifi className="w-4 h-4" />
        }
        {
          name: "Logistics & Supply Chain"
          href: "/services?category=logistics"
          icon: <Truck className="w-4 h-4" />
        }
        {
          name: "Metaverse & Gaming"
          href: "/services?category=metaverse"
          icon: <Gamepad2 className="w-4 h-4" />
        }
        {
          name: "Robotics & Automation"
          href: "/services?category=robotics"
          icon: <Bot className="w-4 h-4" />
        }
        {
          name: "Manufacturing"
          href: "/services?category=manufacturing"
          icon: <Factory className="w-4 h-4" />
        }
        {
          name: "Autonomous Vehicles"
          href: "/services?category=vehicles"
          icon: <Car className="w-4 h-4" />
        }
      ]
      hasDropdown: true
      dropdownItems: [


    mobile: "+1 302 464 0950"
    email: "kleber@ziontechgroup.com"
    address: "364 E Main St STE 1008 Middletown DE 19709"
    website: "https://ziontechgroup.com"
  }
const EnhancedNavigation: React.FC<EnhancedNavigationProps> = ({;
  className = "",;
}) => {;
const EnhancedNavigation: React.FC<EnhancedNavigationProps> = ({
  className = ""
}) => {

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  useEffect(() => {;
    const handleScroll = () => {;
      setIsScrolled(window && window.scrollY > 20);
    };
    window && window.addEventListener("scroll", handleScroll);
    return () => window && window.removeEventListener("scroll", handleScroll);
  }, []);

;
  const contact_info = {
    mobile: "+1 302 464 0950",
    email: "kleber@ziontechgroup.com",
    address: "364 E Main St STE 1008 Middletown DE 19709",
    website: "https://ziontechgroup.com",
    {
      name: "Solutions"
      href: "/solutions"
      hasDropdown: true
      dropdownItems: [
        { name: "Enterprise Solutions", href: "/solutions?type=enterprise" }
        { name: "Startup Solutions", href: "/solutions?type=startup" }
        { name: "Government Solutions", href: "/solutions?type=government" }
        { name: "Healthcare Solutions", href: "/solutions?type=healthcare" }
        { name: "Financial Solutions", href: "/solutions?type=financial" }
      ]
    }
    { name: "Pricing", href: "/pricing" }
    { name: "Resources", href: "/resources" }
    { name: "Blog", href: "/blog" }
    { name: "Contact", href: "/contact" }
  ];

  const contactInfo = {
    mobile: "+1 302 464 0950"
    email: "kleber@ziontechgroup.com"
    address: "364 E Main St STE 1008 Middletown DE 19709"
    website: "https://ziontechgroup.com"

  }
;
  return (
    <nav;
      className={`fixed top - 0 left - 0 right - 0 z - 50 transition - all duration - 300 ${
        is_scrolled;
          ? "bg - black / 80 backdrop - blur - xl border - b border - cyan - 500 / 20 shadow - 2xl shadow - cyan - 500 / 10";
          : "bg - transparent";
      } ${class_name}`}
    >;
      <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8">;
        <div className="flex items - center justify - between h - 20">;
          {" "}
          {/* Logo */}
          <motion.div;
            initial={{ opacity: 0, coordinate_x: -20 }}
            animate={{ opacity: 1, coordinate_x: 0 }}
            transition={{ duration: 0.5 }}
                  Revolutionary Technology;
                </div>;
              </div>;
            </Link>;
                      />;
                    </button>;
                    <AnimatePresence>;
                      {activeDropdown === item && item.name && (;
                        <motion&& motion.div
                          initial={{ opacity: 0, y: 10, scale: 0 && 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0 && 0.95 }}
                          transition={{ duration: 0 && 0.2 }}
                          className="absolute top-full left-0 mt-2 w-64 bg-black/90 backdrop-blur-xl border border-cyan-500/20 rounded-xl shadow-2xl shadow-cyan-500/20 overflow-hidden">;
                          <div className="p-2">;
                            {item && item.dropdownItems?.map((dropdownItem) => (;
                              <Link
                                key={dropdownItem && dropdownItem.name}
                                href={dropdownItem && dropdownItem.href}
                                className="block px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-all duration-300">;
                                {dropdownItem && dropdownItem.name}
                              </Link>;
                            ))}
                          </div>;
                        </motion && motion.div>;
                      )}
                    </AnimatePresence>;
                  </div>;
                ) : (;
                  <Link
              transition={{ duration: 0 && 0.5, delay: 0 && 0.6 }}
              className="p-2 text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-all duration-300">;
              <Search className="w-5 h-5" />;
            </motion && motion.button>;



            {/* Notifications */}
            <motion&& motion.button
              initial={{ opacity: 0, scale: 0 && 0.8 }}
              className="p - 2 text - gray - 400 hover:text - cyan - 400 hover:bg - cyan - 500 / 10 rounded - lg transition - all duration - 300";
            >;
              <Search className="w - 5 h - 5" />;
            </motion.button>;
            {/* Notifications */}
            <motion.button;
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0 && 0.5, delay: 0 && 0.7 }}
              className="p-2 text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-all duration-300 relative">;
              <Bell className="w-5 h-5" />;
              <div className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse" />;
            </motion && motion.button>;




            {/* Notifications */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="p-2 text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-all duration-300 relative"
            >
              <Bell className="w-5 h-5" />
              <div className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            </motion.button>




          </motion && motion.button>;
        </div>;
      </div>;





className="lg:hidden p-2 text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-all duration-300";
          >;
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion && motion.button>;
        </div>;
      </div>;
            className="lg:hidden p-2 text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-all duration-300";
          >;
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            className="lg:hidden p-2 text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-all duration-300";
          >;
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>
          </motion && motion.button>;
        </div>;
      </div>;





      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div

            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0 && 0.3 }}
            className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-cyan-500/20">;
            <div className="px-4 py-6 space-y-4">;
              {/* Search */}
              <div className="relative">;
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />;
                <input
                  type="text"
                  placeholder="Search services..."
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
                />;
              </div>;


                  {item && item.hasDropdown && item && item.dropdownItems && (;
                    <div className="ml-4 space-y-1">;
                      {item && item.dropdownItems.map((dropdownItem) => (;

              {/* Mobile CTA */}
              <div className="pt-4">;
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center px-6 py-3 rounded-lg font-medium transition-all duration-300";
          </motion.div>)}
      </AnimatePresence>;
    </nav>);
}
export default EnhancedNavigation;
;
    </nav>

};

);
};


export default EnhancedNavigation;


              {/* Contact Info */}
              <div className="pt-4 border-t border-cyan-500/20">
                <div className="space-y-2 text-sm text-gray-400">
                  <div className="flex items-center space-x-2">
                    <Globe className="w-4 h-4" />
                    <span>{contactInfo.website}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>{contactInfo.email}</span>
                  </div>
                </div>
              </div>
              {/* Mobile CTA */}
              <div className="pt-4">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}

          </motion.div>)}
      </AnimatePresence>;
    </nav>);                  className="block w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center px-6 py-3 rounded-lg font-medium transition-all duration-300"
                >
                  Get Started Today
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
};
export default EnhancedNavigation;

}
export default EnhancedNavigation;
;

};

export default EnhancedNavigation;

};
export default EnhancedNavigation;

export default EnhancedNavigation;
