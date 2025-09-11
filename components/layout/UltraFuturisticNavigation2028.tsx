
import React, { useState, useEffect } from 'react',
import React, { useState, useEffect } from 'react';
=======

import React, { useState, useEffect } from 'react';

=======
import React, { useState, useEffect } from 'react',
import React, { useState, useEffect } from 'react';
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

import {
=======
=======

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
import React, { useState, useEffect } from 'react';
import Link from 'next / link';
import { motion, AnimatePresence } from 'framer-motion';

=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662  Menu,
  X,
  ChevronDown,
  Search,
  Phone,
  Mail,
  MapPin,
  Rocket,
  Brain,
  Atom,
  Globe,
  Zap,
  Sparkles,
  Shield,
  Microscope,
  DollarSign,
  Home,
  Users,
  Briefcase,
  BookOpen,
  MessageCircle,
  Star,
  TrendingUp,
  Target,
  Layers,
  Cpu,
  Database,
  Cloud,
  Lock,
  ShieldCheck,
  Earth,
  Factory,
  Car,
  Building,
  GraduationCap,
  Scale,
  Palette,
  Camera,
  Video,
  Music,
  Gamepad2,
  Heart,
  Leaf,
  Sun,
  Moon,
  Wind,
  Droplets,
  Mountain,
  Code,
  Wrench,
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  Smartphone,;
  BarChart3,;} from 'lucide-react';import {
  Menu, X, ChevronDown, Search, Phone, Mail, MapPin, 
  Rocket, Brain, Atom, Globe, Zap, Sparkles, Shield, 
  Microscope, DollarSign, Home, Users, Briefcase, ;
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  BookOpen, MessageCircle, Star, TrendingUp, Target;
  Layers, Cpu, Database, Cloud, Lock, ShieldCheck;
  Earth, Factory, Car, Building, GraduationCap, Scale;
  Palette, Camera, Video, Music, Gamepad2, Heart;
  Leaf, Sun, Moon, Wind, Droplets, Mountain;
const contactInfo = {
  mobile: '+1 302 464 0950'
  email: 'kleber@ziontechgroup.com'
  address: '364 E Main St STE 1008 Middletown DE 19709'
  website: 'https://ziontechgroup.com',};  website: 'https://ziontechgroup.com'
}
const serviceCategories = [
  {
    title: '🚀 2028 Futuristic Innovations'
    icon: Rocket
    color: 'from-violet-600 to-purple-600'
    description: 'Beyond the future of technology'
    services: [
      {
        name: 'AI Climate Prediction Platform'
        href: '/ai-climate-prediction-platform'
        description: 'Predict climate changes with 99.9% accuracy'
        price: '$2,999/month'
      }
      {
        name: 'Quantum Cybersecurity Firewall'
        href: '/quantum-cybersecurity-firewall'
        description: 'Unbreakable quantum encryption'
        price: '$4,999/month'
      }
      {
        name: 'Autonomous Drone Delivery Network'
        href: '/autonomous-drone-delivery-network'
        description: 'AI-powered drone delivery'
        price: '$1,999/month'
      }
      {
        name: 'AI Healthcare Diagnosis Platform'
        href: '/ai-healthcare-diagnosis-platform'
        description: 'Revolutionary medical diagnosis'
        price: '$3,999/month'
      }
    ]
  },  {      { name: 'AI Climate Prediction Platform', href: '/ai-climate-prediction-platform', description: 'Predict climate changes with 99.9% accuracy', price: '$2,999/month' }
      { name: 'Quantum Cybersecurity Firewall', href: '/quantum-cybersecurity-firewall', description: 'Unbreakable quantum encryption', price: '$4,999/month' }
      { name: 'Autonomous Drone Delivery Network', href: '/autonomous-drone-delivery-network', description: 'AI-powered drone delivery', price: '$1,999/month' }
=======
=======

      { name: 'Quantum Cybersecurity Firewall', href: '/quantum-cybersecurity-firewall', description: 'Unbreakable quantum encryption', price: '$4,999/month' };
      { name: 'Autonomous Drone Delivery Network', href: '/autonomous-drone-delivery-network', description: 'AI-powered drone delivery', price: '$1,999/month' };

    title: '🏙️ Smart City & Infrastructure',
    icon: Building,
    color: 'from - blue - 600 to - cyan - 600',
    description: 'Intelligent urban solutions',


      { name: 'AI Education Platform', href: '/ai-education-platform', description: 'Personalized learning with AI', price: '$1,499/month' };
      { name: 'AI Content Creation Suite', href: '/ai-content-creation-suite', description: 'Unlimited AI content creation', price: '$1,299/month' };
      { name: 'AI Legal Research Platform', href: '/ai-legal-research-platform', description: 'Intelligent legal research', price: '$2,999/month' }
    ];
  };


      { name: 'Smart Traffic Management System', href: '/smart-traffic-management', description: 'AI traffic optimization', price: '$4,999/month' };
      { name: 'Electric Vehicle Charging Network', href: '/ev-charging-network', description: 'Smart EV infrastructure', price: '$2,999/month' };
      { name: 'Mobility as a Service Platform', href: '/mobility-as-a-service', description: 'Integrated mobility solutions', price: '$1,999/month' }
    ];
  };


      { name: 'Corporate Training AI', href: '/corporate-training-ai', description: 'Intelligent employee training', price: '$2,499/month' };
      { name: 'Language Learning AI', href: '/language-learning-ai', description: 'AI-powered language acquisition', price: '$1,299/month' }

const companyLinks = [
  { name: '🏠 Home', href: '/', icon: Home }
  { name: '🚀 2028 Services', href: '/2028-services-showcase', icon: Rocket }
  {
    name: '⭐ Ultimate 2028'
    href: '/ultimate-2028-services-showcase'
    icon: Star
  }
  {
    name: '💰 2028 Pricing'
    href: '/revolutionary-2028-pricing'
    icon: DollarSign
  },  { name: '📊 Case Studies', href: '/case-studies', icon: Briefcase }
  { name: '📚 Blog & Resources', href: '/blog', icon: BookOpen }
  { name: '🎯 About Us', href: '/about', icon: Users }
  { name: '📞 Contact', href: '/contact', icon: MessageCircle }
  { name: '🔒 Support', href: '/support', icon: ShieldCheck },];  { name: '⭐ Ultimate 2028', href: '/ultimate-2028-services-showcase', icon: Star }
  { name: '💰 2028 Pricing', href: '/revolutionary-2028-pricing', icon: DollarSign }
  { name: '📊 Case Studies', href: '/case-studies', icon: Briefcase }
  { name: '📚 Blog & Resources', href: '/blog', icon: BookOpen }
  { name: '🎯 About Us', href: '/about', icon: Users }
  { name: '📞 Contact', href: '/contact', icon: MessageCircle }
  { name: '🔒 Support', href: '/support', icon: ShieldCheck },  { name: '🔒 Support', href: '/support', icon: ShieldCheck }
];
const companyLinks = [
  { name: '🏠 Home', href: '/', icon: Home },
  { name: '🚀 2028 Services', href: '/2028-services-showcase', icon: Rocket },
  { name: '⭐ Ultimate 2028', href: '/ultimate-2028-services-showcase', icon: Star },
  { name: '💰 2028 Pricing', href: '/revolutionary-2028-pricing', icon: DollarSign },
  { name: '📊 Case Studies', href: '/case-studies', icon: Briefcase },
=======

const companyLinks = [;
  { name: '🏠 Home', href: '/', icon: Home },;
  { name: '🚀 2028 Services', href: '/2028-services-showcase', icon: Rocket },;
  {;
    name: '⭐ Ultimate 2028',;
    href: '/ultimate-2028-services-showcase',;
    icon: Star,;
  },;
  {;
    name: '💰 2028 Pricing',;
    href: '/revolutionary-2028-pricing',;
    icon: DollarSign,;
  },  { name: '📊 Case Studies', href: '/case-studies', icon: Briefcase },;
  { name: '📚 Blog & Resources', href: '/blog', icon: BookOpen },;
  { name: '🎯 About Us', href: '/about', icon: Users },;
  { name: '📞 Contact', href: '/contact', icon: MessageCircle },;
  { name: '🔒 Support', href: '/support', icon: ShieldCheck },];  { name: '⭐ Ultimate 2028', href: '/ultimate-2028-services-showcase', icon: Star },;
  { name: '💰 2028 Pricing', href: '/revolutionary-2028-pricing', icon: DollarSign },;
  { name: '📊 Case Studies', href: '/case-studies', icon: Briefcase },;
  { name: '📚 Blog & Resources', href: '/blog', icon: BookOpen },;
  { name: '🎯 About Us', href: '/about', icon: Users },;
  { name: '📞 Contact', href: '/contact', icon: MessageCircle },;
  { name: '🔒 Support', href: '/support', icon: ShieldCheck },  { name: '🔒 Support', href: '/support', icon: ShieldCheck }
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const handleCategoryHover = (categoryTitle: string) => {;
    setActiveCategory(categoryTitle);
=======
  const handleCategoryHover = (categoryTitle: string) => {
    setActiveCategory(categoryTitle)

  };

  const handleCategoryLeave = () => {;

    <nav className='relative z-50 bg-black/90 backdrop-blur-xl border-b border-purple-500/30'>  };
    <nav className='relative z-50 bg-black/90 backdrop-blur-xl border-b border-purple-500/30'>



=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
                            </Link>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                          ))}
                        </div>
                      </div>
                    ))}

                        View All Services

=======
                                  </h4>;
                                  <p className="text - xs text - purple - 300">{service.description}</p>;
                                </div>;
                                <span className="text - xs text - purple - 400 font - medium">{service.price}</span>;
                              </div>;
                            </Link>))}
                        </div>;
                      </div>))}
                  </div>;
                  <div className='mt - 6 pt - 6 border - t border - purple - 500 / 20'>;
                    <div className='flex items - center justify - between'>;
                      <p className='text - purple - 300'>;
                        Explore all our cutting - edge services;
                      </p>;
                      <Link;
                        href='/services';
                        className='px - 4 py - 2 bg - gradient - to - r from - purple - 600 to - blue - 600 text - white rounded - lg hover:from - purple - 700 hover:to - blue - 700 transition - all duration - 300 transform hover:shadow - xl hover:shadow - cyan - 500 / 30'                      >                  <div className="mt - 6 pt - 6 border - t border - purple - 500 / 20">;
                    <div className="flex items - center justify - between">;
                      <p className="text - purple - 300">Explore all our cutting - edge services</p>;
                      <Link;
                        href="/services";
                        className="px - 4 py - 2 bg - gradient - to - r from - purple - 600 to - blue - 600 text - white rounded - lg hover:from - purple - 700 hover:to - blue - 700 transition - all duration - 300 transform hover:shadow - xl hover:shadow - cyan - 500 / 30";
                        View All Services;



            {/* Company Links */}
            {companyLinks && companyLinks.slice(1, 5).map(link => (;
              <Link
                key={link && link.name}
                href={link && link.href}
                className='text-purple-200 hover:text-white transition-colors py-2 flex items-center space-x-2'>;
                <link && link.icon className='w-4 h-4' />;
                <span>;
                  {link && link.name.replace(/^[🏠🚀⭐💰📊📚🎯📞🔒]/g, '').trim()}
                </span>              </Link>              <Link
                key={link && link.name}
                href={link && link.href}
                className="text-purple-200 hover:text-white transition-colors py-2 flex items-center space-x-2">;
                <link && link.icon className="w-4 h-4" />;
                <span>{link && link.name.replace(/^[🏠🚀⭐💰📊📚🎯📞🔒]/g, '').trim()}</span>;
              </Link>;
            ))}

          </div>;


            >;
              Get Started;
            </Link>;
          </div>;

          {/* Mobile Menu Button */}
          <div className="lg:hidden">

            </button>;
          </div>;
        </div>;
      </div>;


=======
      {/* Mobile Menu */}
      <AnimatePresence>;
        {isOpen && (;
          <motion&& motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className='px-4 py-6 space-y-6'>
=======
            className='lg:hidden bg-black/95 backdrop-blur-xl border-t border-purple-500/30'
=======

          >
            <div className='px-4 py-6 space-y-6'>
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              {/* Mobile Search */}
              <div className='relative'>;
                <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-purple-400' />;
                <input
                  type='text'
                  placeholder='Search services...'
                  value={searchQuery}

                  onChange={e => setSearchQuery(e && e.target.value)}
                  className='w-full pl-10 pr-4 py-3 bg-purple-900/30 border border-purple-500/30 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent'                />;
              </div>;


              {/* Mobile Service Categories */}
              <div className='space-y-4'>;
                <h3 className='text-lg font-semibold text-white border-b border-purple-500/30 pb-2'>          >;
            <div className="px-4 py-6 space-y-6">;

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className='lg:hidden bg-black/95 backdrop-blur-xl border-t border-purple-500/30'

          >
            <div className="px-4 py-6 space-y-6">
=======
=======>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          >
            <div className="px-4 py-6 space-y-6">

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
          >
            <div className="px-4 py-6 space-y-6">

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              {/* Mobile Search */}
              <div className="relative">;
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-purple-400" />;
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}

              {/* Mobile Service Categories */}

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        <Link
                          key={service && service.name}
                          href={service && service.href}
                          onClick={closeMenu}
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      ))}
                    </div>;
                  </div>;
                ))}
=======
              </div>

              </div>;


=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              {/* Mobile Company Links */}
              <div className='space-y-4'>
                <h3 className='text-lg font-semibold text-white border-b border-purple-500/30 pb-2'>
                  Company
                </h3>
                <div className='grid grid-cols-2 gap-4'>
                  {companyLinks.map(link => (                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={closeMenu}              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white border-b border-purple-500/30 pb-2">
                  Company
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {companyLinks.map((link) => (
                      key={link.name}
                      href={link.href}
                      onClick={closeMenu}
              </div>;



              {/* Mobile Company Links */}


=======
=======

              {/* Mobile Company Links */}


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  ))}

                </div>;
              </div>;


              {/* Mobile CTA */}



                  ))}

                </div>;
              </div>;


              {/* Mobile CTA */}

                <Link
                  href='/contact'
                  onClick={closeMenu}
                  className='block w-full text-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300'>                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300">;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======
      {/* Mobile Menu */}
      <AnimatePresence>;
        {is_open && (
          <motion.div;
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className='lg:hidden bg - black / 95 backdrop - blur - xl border - t border - purple - 500 / 30';
          >;
            <div className='px - 4 py - 6 space - y-6'>;
              {/* Mobile Search */}
              <div className='relative'>;
                <Search className='absolute left - 3 top - 1/2 transform -translate - y-1 / 2 w - 4 h - 4 text - purple - 400' />;
                <input;
                  type='text';
                  placeholder='Search services...';
                  value={search_query}
                  on_change={e => setSearchQuery (e.target.value)}
                  className='w - full pl - 10 pr - 4 py - 3 bg - purple - 900 / 30 border border - purple - 500 / 30 rounded - lg text - white placeholder - purple - 300 focus:outline - none focus:ring - 2 focus:ring - purple - 500 focus:border - transparent'                />;
              </div>;
              {/* Mobile Service Categories */}
              <div className='space - y-4'>;
                <h3 className='text - lg font - semibold text - white border - b border - purple - 500 / 30 pb - 2'>          >;
            <div className="px - 4 py - 6 space - y-6">;
              {/* Mobile Search */}
              <div className="relative">;
                <Search className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 w - 4 h - 4 text - purple - 400" />;
                <input;
                  type="text";
                  placeholder="Search services...";
                  value={search_query}
                  on_change={(e) => setSearchQuery (e.target.value)}
                  className="w - full pl - 10 pr - 4 py - 3 bg - purple - 900 / 30 border border - purple - 500 / 30 rounded - lg text - white placeholder - purple - 300 focus:outline - none focus:ring - 2 focus:ring - purple - 500 focus:border - transparent";
                />;
              </div>;
              {/* Mobile Service Categories */}
              <div className='space - y-4'>;
                <h3 className='text - lg font - semibold text - white border - b border - purple - 500 / 30 pb - 2'>;
                  Services;
                </h3>;
                {service_categories.map (category => (
                  <div key={category.title} className='space - y-2'>;
                    <div className='flex items - center space - x-3 text - purple - 200'>;
                      <category.icon className='w - 5 h - 5' />;
                      <span className='font - medium'>{category.title}</span>;
                    </div>;
                    <div className='ml - 8 space - y-2'>;
                      {category.services.map (service => (                        <Link;
                          key={service.name}
                          href={service.href}
                          on_click={close_menu}                  Services;
                </h3>;
                {service_categories.map ((category) => (
                  <div key={category.title} className="space - y-2">;
                    <div className="flex items - center space - x-3 text - purple - 200">;
                      <category.icon className="w - 5 h - 5" />;
                      <span className="font - medium">{category.title}</span>;
                    </div>;
                    <div className="ml - 8 space - y-2">;
                      {category.services.map ((service) => (
                        <Link;
                          key={service.name}
                          href={service.href}
                          on_click={close_menu}
                          className='block p - 3 rounded - lg bg - purple - 900 / 20 hover:bg - purple - 900 / 40 transition - colors';
                        >;
                          <h4 className='text - sm font - medium text - white'>;
                            {service.name}
                          </h4>;
                          <p className='text - xs text - purple - 300'>;
                            {service.description}
                          </p>;
                          <span className='text - xs text - purple - 400 font - medium'>;
                            {service.price}
                          </span>                        </Link>                          className="block p - 3 rounded - lg bg - purple - 900 / 20 hover:bg - purple - 900 / 40 transition - colors";
                        >;
                          <h4 className="text - sm font - medium text - white">{service.name}</h4>;
                          <p className="text - xs text - purple - 300">{service.description}</p>;
                          <span className="text - xs text - purple - 400 font - medium">{service.price}</span>))}
                    </div>;
                  </div>))}
              </div>;
              {/* Mobile Company Links */}
              <div className='space - y-4'>;
                <h3 className='text - lg font - semibold text - white border - b border - purple - 500 / 30 pb - 2'>;
                  Company;
                </h3>;
                <div className='grid grid - cols - 2 gap - 4'>;
                  {company_links.map (link => (                    <Link;
                      key={link.name}
                      href={link.href}
                      on_click={close_menu}              <div className="space - y-4">;
                <h3 className="text - lg font - semibold text - white border - b border - purple - 500 / 30 pb - 2">;
                  Company;
                </h3>;
                <div className="grid grid - cols - 2 gap - 4">;
                  {company_links.map ((link) => (
                      key={link.name}
                      href={link.href}
                      on_click={close_menu}
                      className='flex items - center space - x-3 p - 3 rounded - lg bg - purple - 900 / 20 hover:bg - purple - 900 / 40 transition - colors';
                    >;
                      <link.icon className='w - 5 h - 5 text - purple - 400' />;
                      <span className='text - purple - 200'>;
                        {link.name.replace (/^[🏠🚀⭐💰📊📚🎯📞🔒]/g, '').trim ()}
                      </span>                    </Link>                      className="flex items - center space - x-3 p - 3 rounded - lg bg - purple - 900 / 20 hover:bg - purple - 900 / 40 transition - colors";
                    >;
                      <link.icon className="w - 5 h - 5 text - purple - 400" />;
                      <span className="text - purple - 200">{link.name.replace (/^[🏠🚀⭐💰📊📚🎯📞🔒]/g, '').trim ()}</span>))}
                </div>;
              </div>;
              {/* Mobile CTA */}
              <div className='pt - 4 border - t border - purple - 500 / 30'>;
                <Link;
                  href='/contact';
                  on_click={close_menu}
                  className='block w - full text - center px - 6 py - 3 bg - gradient - to - r from - purple - 600 to - blue - 600 text - white rounded - lg hover:from - purple - 700 hover:to - blue - 700 transition - all duration - 300'                >                <Link;
                  href="/contact";
                  on_click={close_menu}
                  className="block w - full text - center px - 6 py - 3 bg - gradient - to - r from - purple - 600 to - blue - 600 text - white rounded - lg hover:from - purple - 700 hover:to - blue - 700 transition - all duration - 300";
                >;
                  Get Started;
                </Link>;
              </div>;
            </div>;

=======
                    </Link>

                  ))}
                </div>
              </div>

              {/* Mobile CTA */}
              <div className='pt-4 border-t border-purple-500/30'>

                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
=======

        )}
      </AnimatePresence>
=======
      </AnimatePresence>;

      {/* Search Results Dropdown */}
      {searchQuery && filteredServices.length > 0 && (
        <div className='absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border border-purple-500/30 rounded-2xl shadow-2xl z-50'>
          <div className='p-4'>
            <div className='space-y-2'>
              {filteredServices.slice(0, 8).map(service => (
                <Link
                  key={service.name}
                  href={service.href}
                  className='block p-3 rounded-lg bg-purple-900/20 hover:bg-purple-900/40 transition-colors'
                >
                  <div className='flex items-center justify-between'>
                    <div>
                      <h4 className='text-sm font-medium text-white'>
                        {service.name}
                      </h4>
                      <p className='text-xs text-purple-300'>
                        {service.description}
                      </p>
                    </div>
                    <span className='text-xs text-purple-400 font-medium'>
                      {service.price}
                    </span>                  </div>                <Link
                  key={service.name}
                  href={service.href}
                  className="block p-3 rounded-lg bg-purple-900/20 hover:bg-purple-900/40 transition-colors"
                >
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
        )}
      </AnimatePresence>;


      {/* Search Results Dropdown */}


                </Link>
                </Link>
=======>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                </Link>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              ))}
            </div>;
          </div>;
        </div>;
      )}
}
=======
=======

  );

}
=======

}
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    </nav>;
  );
}
    </nav>
  );
}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          </motion.div>)}
      </AnimatePresence>;
      {/* Search Results Dropdown */}
      {search_query && filtered_services.length > 0 && (
        <div className='absolute top - full left - 0 right - 0 bg - black / 95 backdrop - blur - xl border border - purple - 500 / 30 rounded - 2xl shadow - 2xl z - 50'>;
          <div className='p - 4'>;
            <div className='space - y-2'>;
              {filtered_services.slice (0, 8).map (service => (
                <Link;
                  key={service.name}
                  href={service.href}
                  className='block p - 3 rounded - lg bg - purple - 900 / 20 hover:bg - purple - 900 / 40 transition - colors';
                >;
                  <div className='flex items - center justify - between'>;
                    <div>;
                      <h4 className='text - sm font - medium text - white'>;
                        {service.name}
                      </h4>;
                      <p className='text - xs text - purple - 300'>;
                        {service.description}
                      </p>;
                    </div>;
                    <span className='text - xs text - purple - 400 font - medium'>;
                      {service.price}
                    </span>                  </div>                <Link;
                  key={service.name}
                  href={service.href}
                  className="block p - 3 rounded - lg bg - purple - 900 / 20 hover:bg - purple - 900 / 40 transition - colors";
                >;
                  <div className="flex items - center justify - between">;
                    <div>;
                      <h4 className="text - sm font - medium text - white">{service.name}</h4>;
                      <p className="text - xs text - purple - 300">{service.description}</p>;
                    </div>;
                    <span className="text - xs text - purple - 400 font - medium">{service.price}</span>;
                  </div>;
                </Link>))}
            </div>;
          </div>;
        </div>)}
    </nav>);
}
<<<<<<< HEAD
<<<<<<< HEAD
);
  );
}
}
  );
}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
