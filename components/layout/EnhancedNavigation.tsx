

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

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {

<<<<<<< HEAD
<<<<<<< HEAD

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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
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

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
} from "lucide-react";
import Link from "next/link";
interface EnhancedNavigationProps {;
  className?: string;
}

<<<<<<< HEAD




=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const EnhancedNavigation: React.FC<EnhancedNavigationProps> = ({
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
<<<<<<< HEAD

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        { name: "AI & Machine Learning", href: "/services?category=ai-ml" }
        { name: "Quantum Computing", href: "/services?category=quantum" }
        { name: "Space Technology", href: "/services?category=space" }
        { name: "Biotech & Healthcare", href: "/services?category=biotech" }
        { name: "Financial Services", href: "/services?category=finance" }
        { name: "Cybersecurity", href: "/services?category=security" }
        { name: "Edge Computing", href: "/services?category=edge" }
        { name: "Blockchain", href: "/services?category=blockchain" }
        { name: "View All Services", href: "/services" }
      ]
    }
        { name: "AI & Machine Learning", href: "/services?category=ai-ml" },
        { name: "Quantum Computing", href: "/services?category=quantum" },
        { name: "Space Technology", href: "/services?category=space" },
        { name: "Biotech & Healthcare", href: "/services?category=biotech" },
        { name: "Financial Services", href: "/services?category=finance" },
        { name: "Cybersecurity", href: "/services?category=security" },
        { name: "Edge Computing", href: "/services?category=edge" },
        { name: "Blockchain", href: "/services?category=blockchain" },
        { name: "View All Services", href: "/services" },
      ],
    },
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

<<<<<<< HEAD




=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const contactInfo = {
    mobile: "+1 302 464 0950"
    email: "kleber@ziontechgroup.com"
    address: "364 E Main St STE 1008 Middletown DE 19709"
    website: "https://ziontechgroup.com"
  }
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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

<<<<<<< HEAD
<<<<<<< HEAD
    window.addEventListener('scroll', handleScroll),
    return () => window.removeEventListener('scroll', handleScroll)
  }, []),

  const navigationItems = [
    {
name: 'Services',
      href: '/services',
icon: <Brain className="w-4 h-4" />,
      dropdown: [
        { name: 'AI & Machine Learning', href: '/services?category=ai-ml', icon: <Brain className="w-4 h-4" /> },
        { name: 'Quantum Computing', href: '/services?category=quantum', icon: <Rocket className="w-4 h-4" /> },
        { name: 'Space Technology', href: '/services?category=space', icon: <Globe className="w-4 h-4" /> },
        { name: 'Biotech & Healthcare', href: '/services?category=biotech', icon: <Dna className="w-4 h-4" /> },
        { name: 'Financial Services', href: '/services?category=finance', icon: <DollarSign className="w-4 h-4" /> },
        { name: 'Cybersecurity', href: '/services?category=security', icon: <Lock className="w-4 h-4" /> },
        { name: 'IoT & Smart Devices', href: '/services?category=iot', icon: <Wifi className="w-4 h-4" /> },
        { name: 'Logistics & Supply Chain', href: '/services?category=logistics', icon: <Truck className="w-4 h-4" /> },
        { name: 'Metaverse & Gaming', href: '/services?category=metaverse', icon: <Gamepad2 className="w-4 h-4" /> },
        { name: 'Robotics & Automation', href: '/services?category=robotics', icon: <Bot className="w-4 h-4" /> },
        { name: 'Manufacturing', href: '/services?category=manufacturing', icon: <Factory className="w-4 h-4" /> },
        { name: 'Autonomous Vehicles', href: '/services?category=vehicles', icon: <Car className="w-4 h-4" /> }
      ],
      hasDropdown: true,
      dropdownItems: [
        { name: 'AI & Machine Learning', href: '/services?category=ai-ml' },
        { name: 'Quantum Computing', href: '/services?category=quantum' },
        { name: 'Space Technology', href: '/services?category=space' },
        { name: 'Biotech & Healthcare', href: '/services?category=biotech' },
        { name: 'Financial Services', href: '/services?category=finance' },
        { name: 'Cybersecurity', href: '/services?category=security' },
        { name: 'Edge Computing', href: '/services?category=edge' },
        { name: 'Blockchain', href: '/services?category=blockchain' },
        { name: 'View All Services', href: '/services' }
      ]
    },
    {
      name: 'Solutions',
      href: '/solutions',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Enterprise Solutions', href: '/solutions?type=enterprise' },
        { name: 'Startup Solutions', href: '/solutions?type=startup' },
        { name: 'Government Solutions', href: '/solutions?type=government' },
        { name: 'Healthcare Solutions', href: '/solutions?type=healthcare' },
        { name: 'Financial Solutions', href: '/solutions?type=financial' }
      ]
import React, { useState, useEffect } from './react';
import { motion, AnimatePresence  } from './framer-motion';
import {
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
  Car,
} from './lucide-react';
import Link from './next / link';
interface EnhancedNavigationProps {
  class_name?: string;
}
const EnhancedNavigation: React.FC < EnhancedNavigationProps> = ({
  class_name = "",
}) => {
  const [is_open, setIsOpen] = useState (false);
  const [is_scrolled, setIsScrolled] = useState (false);
  const [active_dropdown, setActiveDropdown] = useState < string | null>(null);
;
  useEffect (() => {
    const handle_scroll = () =>: any {
      setIsScrolled (window.scroll_y > 20);
    }
;
    window.addEventListener ("scroll", handle_scroll);
    return () => window.removeEventListener ("scroll", handle_scroll);
  }, []);
;
  const navigation_items = [;
    {
      name: "Services",
      href: "/services",
      icon: <Brain className="w - 4 h - 4" />,
      dropdown: [;
        {
          name: "AI & Machine Learning",
          href: "/services?category = ai - ml",
          icon: <Brain className="w - 4 h - 4" />,
        },
        {
          name: "Quantum Computing",
          href: "/services?category = quantum",
          icon: <Rocket className="w - 4 h - 4" />,
        },
        {
          name: "Space Technology",
          href: "/services?category = space",
          icon: <Globe className="w - 4 h - 4" />,
        },
        {
          name: "Biotech & Healthcare",
          href: "/services?category = biotech",
          icon: <Dna className="w - 4 h - 4" />,
        },
        {
          name: "Financial Services",
          href: "/services?category = finance",
          icon: <DollarSign className="w - 4 h - 4" />,
        },
        {
          name: "Cybersecurity",
          href: "/services?category = security",
          icon: <Lock className="w - 4 h - 4" />,
        },
        {
          name: "IoT & Smart Devices",
          href: "/services?category = iot",
          icon: <Wifi className="w - 4 h - 4" />,
        },
        {
          name: "Logistics & Supply Chain",
          href: "/services?category = logistics",
          icon: <Truck className="w - 4 h - 4" />,
        },
        {
          name: "Metaverse & Gaming",
          href: "/services?category = metaverse",
          icon: <Gamepad2 className="w - 4 h - 4" />,
        },
        {
          name: "Robotics & Automation",
          href: "/services?category = robotics",
          icon: <Bot className="w - 4 h - 4" />,
        },
        {
          name: "Manufacturing",
          href: "/services?category = manufacturing",
          icon: <Factory className="w - 4 h - 4" />,
        },
        {
          name: "Autonomous Vehicles",
          href: "/services?category = vehicles",
          icon: <Car className="w - 4 h - 4" />,
        },
      ],
      has_dropdown: true,
      dropdown_items: [;
        { name: "AI & Machine Learning", href: "/services?category = ai - ml" },
        { name: "Quantum Computing", href: "/services?category = quantum" },
        { name: "Space Technology", href: "/services?category = space" },
        { name: "Biotech & Healthcare", href: "/services?category = biotech" },
        { name: "Financial Services", href: "/services?category = finance" },
        { name: "Cybersecurity", href: "/services?category = security" },
        { name: "Edge Computing", href: "/services?category = edge" },
        { name: "Blockchain", href: "/services?category = blockchain" },
        { name: "View All Services", href: "/services" },
      ],
    },
    {
      name: "Solutions",
      href: "/solutions",
      has_dropdown: true,
      dropdown_items: [;
        { name: "Enterprise Solutions", href: "/solutions?type = enterprise" },
        { name: "Startup Solutions", href: "/solutions?type = startup" },
        { name: "Government Solutions", href: "/solutions?type = government" },
        { name: "Healthcare Solutions", href: "/solutions?type = healthcare" },
        { name: "Financial Solutions", href: "/solutions?type = financial" },
      ],
    },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Resources', href: '/resources' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
];
=======


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  ];

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


  ];

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
className="flex items - center space - x-3";
=======
            className="flex items - center space - x-3";
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
            className="flex items - center space - x-3";
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          >;
            <Link href="/" className="flex items - center space - x-3 group">;
              <div className="relative">;
                <div className="w - 10 h - 10 bg - gradient - to - r from - cyan - 400 to - blue - 500 rounded - lg flex items - center justify - center group - hover:scale - 110 transition - transform duration - 300">;
                  <Zap className="w - 6 h - 6 text - white" />;
                </div>;
                <div className="absolute inset - 0 bg - gradient - to - r from - cyan - 400 to - blue - 500 rounded - lg blur - lg opacity - 50 group - hover:opacity - 75 transition - opacity duration - 300" />;
              </div>;
              <div className="hidden sm:block">;
                <div className="text - xl font - bold text - white group - hover:text - cyan - 400 transition - colors duration - 300">;
                  Zion Tech Group;
                </div>;
                <div className="text - xs text - cyan - 400">;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  Revolutionary Technology;
                </div>;
              </div>;
            </Link>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      />;
                    </button>;
                    <AnimatePresence>;
                      {activeDropdown === item && item.name && (;
                        <motion&& motion.div
                          initial={{ opacity: 0, y: 10, scale: 0 && 0.95 }}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
href={item && item.href}
=======
                    href={item && item.href}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                    href={item && item.href}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2">;
                    {item && item.name}
                  </Link>;
                )}
              </motion && motion.div>;
            ))}
<<<<<<< HEAD
<<<<<<< HEAD
</div>;
=======
          </div>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
          </div>;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          {/* Right side actions */}
          <div className="hidden lg:flex items-center space-x-4">;
            {/* Search */}
            <motion&& motion.button
              initial={{ opacity: 0, scale: 0 && 0.8 }}
          </motion.div>;
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items - center space - x-8">;
            {navigation_items.map ((item, index) => (
              <motion.div;
                key={item.name}
                initial={{ opacity: 0, coordinate_y: -20 }}
                animate={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative";
                onMouseEnter={() =>;
                  item.has_dropdown && setActiveDropdown (item.name);
                }
                onMouseLeave={() => setActiveDropdown (null)}
              >;
                {item.has_dropdown ? (
                  <div className="relative">;
                    <button className="flex items - center space - x-1 text - gray - 300 hover:text - cyan - 400 transition - colors duration - 300 py - 2">;
                      <span>{item.name}</span>;
                      <ChevronDown;
                        className={`w - 4 h - 4 transition - transform duration - 300 ${
                          active_dropdown === item.name ? "rotate - 180" : "";
                        }`}
                      />;
                    </button>;
                    <AnimatePresence>;
                      {active_dropdown === item.name && (
                        <motion.div;
                          initial={{ opacity: 0, coordinate_y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, coordinate_y: 0, scale: 1 }}
                          exit={{ opacity: 0, coordinate_y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top - full left - 0 mt - 2 w - 64 bg - black / 90 backdrop - blur - xl border border - cyan - 500 / 20 rounded - xl shadow - 2xl shadow - cyan - 500 / 20 overflow - hidden";
                        >;
                          <div className="p - 2">;
                            {item.dropdown_items?.map ((dropdown_item) => (
                              <Link;
                                key={dropdown_item.name}
                                href={dropdown_item.href}
                                className="block px - 4 py - 3 text - gray - 300 hover:text - cyan - 400 hover:bg - cyan - 500 / 10 rounded - lg transition - all duration - 300";
                              >;
                                {dropdown_item.name}
                              </Link>))}
                          </div>;
                        </motion.div>)}
                    </AnimatePresence>;
                  </div>) : (
                  <Link;
                    href={item.href}
                    className="text - gray - 300 hover:text - cyan - 400 transition - colors duration - 300 py - 2";
                  >;
                    {item.name}
                  </Link>)}
              </motion.div>))}
          </div>;
          {/* Right side actions */}
          <div className="hidden lg:flex items - center space - x-4">;
            {/* Search */}
            <motion.button;
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
<<<<<<< HEAD
=======
              transition={{ duration: 0.5, delay: 0.6 }}
              className="p-2 text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-all duration-300"
            >
              <Search className="w-5 h-5" />
            </motion.button>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

              transition={{ duration: 0 && 0.5, delay: 0 && 0.6 }}
              className="p-2 text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-all duration-300">;
              <Search className="w-5 h-5" />;
            </motion && motion.button>;


<<<<<<< HEAD



<<<<<<< HEAD
transition={{ duration: 0 && 0.5, delay: 0 && 0.6 }}
              className="p-2 text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-all duration-300">;
              <Search className="w-5 h-5" />;
            </motion && motion.button>;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======
              transition={{ duration: 0.5, delay: 0.7 }}
              className="p-2 text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-all duration-300 relative"
            >
              <Bell className="w-5 h-5" />
              <div className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            </motion.button>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

              transition={{ duration: 0 && 0.5, delay: 0 && 0.7 }}
              className="p-2 text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-all duration-300 relative">;
              <Bell className="w-5 h-5" />;
              <div className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse" />;
            </motion && motion.button>;


<<<<<<< HEAD
<<<<<<< HEAD



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

=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======



<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            {/* CTA Button */}
            <motion&& motion.div
              initial={{ opacity: 0, scale: 0 && 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0 && 0.5, delay: 0 && 0.8 }}>;
              <Link
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25">;
                Get Started;
              </Link>;
            </motion && motion.div>;
          </div>;
          {/* Mobile menu button */}
<<<<<<< HEAD
<<<<<<< HEAD
<motion&& motion.button
=======
          <motion&& motion.button
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
          <motion&& motion.button
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            initial={{ opacity: 0, scale: 0 && 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0 && 0.5, delay: 0 && 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
<<<<<<< HEAD
<<<<<<< HEAD

          </motion && motion.button>;
        </div>;
      </div>;





className="lg:hidden p-2 text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-all duration-300";
          >;
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion && motion.button>;
        </div>;
      </div>;
=======
            className="lg:hidden p-2 text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-all duration-300";
          >;
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
=======
            className="lg:hidden p-2 text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-all duration-300";
          >;
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

          </motion && motion.button>;
        </div>;
      </div>;


=======



<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {/* Mobile Navigation */}
      <AnimatePresence>;
        {isOpen && (;
          <motion&& motion.div
<<<<<<< HEAD
<<<<<<< HEAD

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            initial={{ opacity: 0, height: 0 }}
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
<<<<<<< HEAD
<<<<<<< HEAD
                />;
              </div>;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                />;
              </div>;


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              {/* Navigation Items */}
              {navigationItems && navigationItems.map((item) => (;
                <div key={item && item.name} className="space-y-2">;
                  <Link
                    href={item && item.href}
                    onClick={() => setIsOpen(false)}
<<<<<<< HEAD
<<<<<<< HEAD
className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2";
                  >;
                    {item && item.name}
                  </Link>;
                  {item && item.hasDropdown && item && item.dropdownItems && (;
                    <div className="ml-4 space-y-1">;
                      {item && item.dropdownItems.map((dropdownItem) => (;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                    className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2";
                  >;
                    {item && item.name}
                  </Link>;

                  {item && item.hasDropdown && item && item.dropdownItems && (;
                    <div className="ml-4 space-y-1">;
                      {item && item.dropdownItems.map((dropdownItem) => (;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        <Link
                          key={dropdownItem && dropdownItem.name}
                          href={dropdownItem && dropdownItem.href}
                          onClick={() => setIsOpen(false)}
className="block text-gray-400 hover:text-cyan-400 transition-colors duration-300 py-1 text-sm";
                        >;
                          {dropdownItem && dropdownItem.name}
                        </Link>;
                      ))}
                    </div>;
                  )}
                </div>;
              ))}
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          onClick={() => setIsOpen(false)}
                          className="block text-gray-400 hover:text-cyan-400 transition-colors duration-300 py-1 text-sm"
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

<<<<<<< HEAD

              {/* Contact Info */}

<<<<<<< HEAD
{/* Contact Info */}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
              {/* Contact Info */}

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <div className="pt-4 border-t border-cyan-500/20">;
                <div className="space-y-2 text-sm text-gray-400">;
                  <div className="flex items-center space-x-2">;
                    <Globe className="w-4 h-4" />;
                    <span>{contactInfo && contactInfo.website}</span>;
                  </div>;
                  <div className="flex items-center space-x-2">;
                    <User className="w-4 h-4" />;
                    <span>{contactInfo && contactInfo.email}</span>;
                  </div>;
                </div>;
              </div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              {/* Mobile CTA */}
              <div className="pt-4">;
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center px-6 py-3 rounded-lg font-medium transition-all duration-300";
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              className="p - 2 text - gray - 400 hover:text - cyan - 400 hover:bg - cyan - 500 / 10 rounded - lg transition - all duration - 300 relative";
            >;
              <Bell className="w - 5 h - 5" />;
              <div className="absolute top - 1 right - 1 w - 2 h - 2 bg - red - 500 rounded - full animate - pulse" />;
            </motion.button>;
            {/* CTA Button */}
            <motion.div;
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >;
              <Link;
                href="/contact";
                className="bg - gradient - to - r from - cyan - 500 to - blue - 600 hover:from - cyan - 400 hover:to - blue - 500 text - white px - 6 py - 2 rounded - full font - medium transition - all duration - 300 transform hover:scale - 105 hover:shadow - lg hover:shadow - cyan - 500 / 25";
              >;
                Get Started;
              </Link>;
            </motion.div>;
          </div>;
          {/* Mobile menu button */}
          <motion.button;
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            on_click={() => setIsOpen (!is_open)}
            className="lg:hidden p - 2 text - gray - 400 hover:text - cyan - 400 hover:bg - cyan - 500 / 10 rounded - lg transition - all duration - 300";
          >;
            {is_open ? <X className="w - 6 h - 6" /> : <Menu className="w - 6 h - 6" />}
          </motion.button>;
        </div>;
      </div>;
      {/* Mobile Navigation */}
      <AnimatePresence>;
        {is_open && (
          <motion.div;
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg - black / 95 backdrop - blur - xl border - t border - cyan - 500 / 20";
          >;
            <div className="px - 4 py - 6 space - y-4">;
              {/* Search */}
              <div className="relative">;
                <Search className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - gray - 400 w - 5 h - 5" />;
                <input;
                  type="text";
                  placeholder="Search services...";
                  className="w - full pl - 10 pr - 4 py - 3 bg - white / 10 border border - cyan - 500 / 30 rounded - lg text - white placeholder - gray - 400 focus:outline - none focus:border - cyan - 500";
                />;
              </div>;
              {/* Navigation Items */}
              {navigation_items.map ((item) => (
                <div key={item.name} className="space - y-2">;
                  <Link;
                    href={item.href}
                    on_click={() => setIsOpen (false)}
                    className="block text - gray - 300 hover:text - cyan - 400 transition - colors duration - 300 py - 2";
                  >;
                    {item.name}
                  </Link>;
                  {item.has_dropdown && item.dropdown_items && (
                    <div className="ml - 4 space - y-1">;
                      {item.dropdown_items.map ((dropdown_item) => (
                        <Link;
                          key={dropdown_item.name}
                          href={dropdown_item.href}
                          on_click={() => setIsOpen (false)}
                          className="block text - gray - 400 hover:text - cyan - 400 transition - colors duration - 300 py - 1 text - sm";
                        >;
                          {dropdown_item.name}
                        </Link>))}
                    </div>)}
                </div>))}
              {/* Contact Info */}
              <div className="pt - 4 border - t border - cyan - 500 / 20">;
                <div className="space - y-2 text - sm text - gray - 400">;
                  <div className="flex items - center space - x-2">;
                    <Globe className="w - 4 h - 4" />;
                    <span>{contact_info.website}</span>;
                  </div>;
                  <div className="flex items - center space - x-2">;
                    <User className="w - 4 h - 4" />;
                    <span>{contact_info.email}</span>;
                  </div>;
                </div>;
              </div>;
              {/* Mobile CTA */}
              <div className="pt - 4">;
                <Link;
                  href="/contact";
                  on_click={() => setIsOpen (false)}
                  className="block w - full bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white text - center px - 6 py - 3 rounded - lg font - medium transition - all duration - 300";
                >;
                  Get Started Today;
                </Link>;
              </div>;
            </div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          </motion.div>)}
      </AnimatePresence>;
    </nav>);
}
export default EnhancedNavigation;
;
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      </AnimatePresence>
    </nav>

};

<<<<<<< HEAD
export default EnhancedNavigation;

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
=======

          </motion.div>)}
      </AnimatePresence>;
    </nav>);
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  className="block w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center px-6 py-3 rounded-lg font-medium transition-all duration-300"
                >
                  Get Started Today
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
<<<<<<< HEAD
  );
}
export default EnhancedNavigation;

};
export default EnhancedNavigation;

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export default EnhancedNavigation;
=======
}
export default EnhancedNavigation;
;

};

export default EnhancedNavigation;

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
);
};
export default EnhancedNavigation;

<<<<<<< HEAD
<<<<<<< HEAD
export default EnhancedNavigation;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
