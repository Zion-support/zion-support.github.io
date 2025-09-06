
=======

import React, { useState, useEffect } from 'react';


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

import {

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  Menu,
  X,
  ChevronDown,
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
  Smartphone,
  BarChart3,

  BookOpen, MessageCircle, Star, TrendingUp, Target;
  Layers, Cpu, Database, Cloud, Lock, ShieldCheck;
  Earth, Factory, Car, Building, GraduationCap, Scale;
  Palette, Camera, Video, Music, Gamepad2, Heart;
  Leaf, Sun, Moon, Wind, Droplets, Mountain;
  Code, Wrench, Smartphone, BarChart3, Eye, Timer

const serviceCategories = [
  {
    title: '🧠 2029 AI Consciousness & Innovation'
    icon: Brain
    color: 'from-purple-600 to-pink-600'
    description: 'Beyond human consciousness simulation'
    services: [

const mainNavItems = [
  { name: 'Home', href: '/', icon: Home }
  { name: 'Services', href: '/services', icon: Briefcase }
  { name: 'Solutions', href: '/solutions', icon: Target }
  { name: 'Pricing', href: '/pricing', icon: DollarSign }
  { name: 'Resources', href: '/resources', icon: BookOpen }
  { name: 'News', href: '/news', icon: TrendingUp }
  { name: 'Support', href: '/support', icon: MessageCircle }

const mainNavItems = [;
  { name: 'Home', href: '/', icon: Home },;
  { name: 'Services', href: '/services', icon: Briefcase },;
  { name: 'Solutions', href: '/solutions', icon: Target },;
  { name: 'Pricing', href: '/pricing', icon: DollarSign },;
  { name: 'Resources', href: '/resources', icon: BookOpen },;
  { name: 'News', href: '/news', icon: TrendingUp },;
  { name: 'Support', href: '/support', icon: MessageCircle },;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  { name: 'Contact', href: '/contact', icon: Phone },];  { name: 'Contact', href: '/contact', icon: Phone }
];

  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {;
    const handleScroll = () => {;
      setScrolled(window && window.scrollY > 50);
    };
    window && window.addEventListener('scroll', handleScroll);
    return () => window && window.removeEventListener('scroll', handleScroll);  }, []);      setScrolled(window && window.scrollY > 50);
    };
    window && window.addEventListener('scroll', handleScroll);
    return () => window && window.removeEventListener('scroll', handleScroll);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>;
      {/* Top Contact Bar */}
            </a>
          </div>
        </div>
      </div>

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
            >
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg blur opacity-75 animate-pulse"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
                <span className="text-xs text-gray-400">2029 Innovation Hub</span>
              </div>
            </motion.div>
              className='flex items-center space-x-3'>;
              <div className='relative'>;
                <div className='w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center'>;
                  <Rocket className='w-6 h-6 text-white' />;
                </div>;
                <div className='absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg blur opacity-75 animate-pulse'></div>;
              </div>;
              <div className='flex flex-col'>;
                <span className='text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent'>;
                  Zion Tech Group;
                </span>;
                <span className='text-xs text-gray-400'>;
                  2029 Innovation Hub;
                </span>              </div>;
            </motion && motion.div>;
            {/* Desktop Navigation */}

=======
            <div className="hidden lg:flex items-center space-x-8">
              {mainNavItems.map((item) => (
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
                <Link
                  key={item.name}
                  href={item.href}
className="group relative text-gray-300 hover:text-white transition-colors duration-200"
                >
                  <div className="flex items-center space-x-2">
                    <item.icon size={16} className="group-hover:text-cyan-400 transition-colors" />
                    <span>{item.name}</span>
                  </div>
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 group-hover:w-full"></div>
=======
                </Link>

              ))}
              {/* Services Dropdown */}

                  />;
                </button>;


                {/* Mega Menu */}
                <div className='absolute top-full left-0 w-screen max-w-6xl bg-black/95 backdrop-blur-xl border border-cyan-500/30 rounded-lg shadow-2xl shadow-cyan-500/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0'>;
                  <div className='p-6 grid grid-cols-2 lg:grid-cols-3 gap-6'>                    {serviceCategories && serviceCategories.map((category, index) => (                <div className="absolute top-full left-0 w-screen max-w-6xl bg-black/95 backdrop-blur-xl border border-cyan-500/30 rounded-lg shadow-2xl shadow-cyan-500/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">;
                  <div className="p-6 grid grid-cols-2 lg:grid-cols-3 gap-6">;
                    {serviceCategories && serviceCategories.map((category, index) => (;
                      <motion&& motion.div
                        key={category && category.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0 && 0.1 }}
                        className='group'>;
=======
            <div className='hidden lg:flex items-center space-x-8'>
              {mainNavItems.map(item => (


              </div>
            </motion.div>

            {/* Desktop Navigation */}
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159


                </Link>
              ))}
              {/* Services Dropdown */}

=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
                    {serviceCategories.map((category, index) => (
                      <motion.div
                        key={category.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className='group'

                      >

                      >
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
                        <div
                          className={`p-4 rounded-lg bg-gradient-to-br ${category && category.color} bg-opacity-10 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300`}>;
                          <div className='flex items-center space-x-3 mb-3'>;
                            <category&& category.icon
                              size={20}
                              className='text-cyan-400'
                            />;
                            <h3 className='font-semibold text-white group-hover:text-cyan-300 transition-colors'>;
                              {category && category.title}
                            </h3>;
                          </div>;
                          <p className='text-sm text-gray-400 mb-4'>;
                            {category && category.description}
                          </p>;
                          <div className='space-y-2'>;
                            {category && category.services.slice(0, 3).map(service => (;
                              <Link
                                key={service && service.name}
                                href={service && service.href}
                                className='block p-2 rounded bg-black/30 hover:bg-cyan-500/20 transition-all duration-200 group'>;
                                <div className='flex items-center justify-between'>;
                                  <span className='text-sm text-gray-300 group-hover:text-white transition-colors'>;
                                    {service && service.name}
                                  </span>;
                                  <span className='text-xs text-cyan-400 font-mono'>;
                                    {service && service.price}
                                  </span>;
                                </div>;
                                <p className='text-xs text-gray-500 mt-1'>;
                                  {service && service.description}
                                </p>                              </Link>                      >;
                        <div className={`p-4 rounded-lg bg-gradient-to-br ${category && category.color} bg-opacity-10 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300`}>;
                          <div className="flex items-center space-x-3 mb-3">;
                            <category && category.icon size={20} className="text-cyan-400" />;
                            <h3 className="font-semibold text-white group-hover:text-cyan-300 transition-colors">;
                              {category && category.title}
                            </h3>;
                          </div>;
                          <p className="text-sm text-gray-400 mb-4">{category && category.description}</p>;
                          <div className="space-y-2">;
                            {category && category.services.slice(0, 3).map((service) => (;
                              <Link
                                key={service && service.name}
                                href={service && service.href}
                                className="block p-2 rounded bg-black/30 hover:bg-cyan-500/20 transition-all duration-200 group">;
                                <div className="flex items-center justify-between">;
                                  <span className="text-sm text-gray-300 group-hover:text-white transition-colors">;
                                    {service && service.name}
                                  </span>;
                                  <span className="text-xs text-cyan-400 font-mono">;
                                    {service && service.price}
                                  </span>;
                                </div>;
                                <p className="text-xs text-gray-500 mt-1">{service && service.description}</p>;
                              </Link>;

                            ))}
                          </div>;
                        </div>;
                      </motion && motion.div>;
                    ))}
                  </div>
                </div>
              </div>

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
              >
                Get Started
              </motion.button>
            </div>

                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

=======

                className='text-gray-300 hover:text-white transition-colors'              >

              >


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                {isOpen ? <X size={24} /> : <Menu size={24} />}

=======
                                  </span>;
                                </div>;
                                <p className="text - xs text - gray - 500 mt - 1">{service.description}</p>;
                              </Link>))}
                          </div>;
                        </div>;
                      </motion.div>))}
                  </div>;
                </div>;
              </div>;
              {/* CTA Button */}
              <motion.button;
                while_hover={{ scale: 1.05 }}
                while_tap={{ scale: 0.95 }}
                className='px - 6 py - 2 bg - gradient - to - r from - cyan - 500 to - purple - 600 text - white rounded - lg font - semibold hover:from - cyan - 600 hover:to - purple - 700 transition - all duration - 300 shadow - lg shadow - cyan - 500 / 25 hover:shadow - xl hover:shadow - cyan - 500 / 40'              >                className="px - 6 py - 2 bg - gradient - to - r from - cyan - 500 to - purple - 600 text - white rounded - lg font - semibold hover:from - cyan - 600 hover:to - purple - 700 transition - all duration - 300 shadow - lg shadow - cyan - 500 / 25 hover:shadow - xl hover:shadow - cyan - 500 / 40";
              >;
                Get Started;
              </motion.button>;
            </div>;
            {/* Mobile Menu Button */}
            <div className='lg:hidden'>;
              <button;
                on_click={toggle_menu}
                className='text - gray - 300 hover:text - white transition - colors'              >            <div className="lg:hidden">;
              <button;
                on_click={toggle_menu}
                className="text - gray - 300 hover:text - white transition - colors";
                {is_open ? <X size={24} /> : <Menu size={24} />}

              </button>;
            </div>;
          </div>;
        </div>;
      </nav>;





>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      {/* Mobile Menu */}
      <AnimatePresence>;
        {isOpen && (;
          <motion&& motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className='fixed inset-0 z-50 lg:hidden'

          >
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            <div
              className='absolute inset-0 bg-black/80 backdrop-blur-sm'
              onClick={closeMenu}
            />
            <div className='absolute right-0 top-0 h-full w-80 bg-black/95 backdrop-blur-xl border-l border-cyan-500/30 overflow-y-auto'>
              <div className='p-6'>
                <div className='flex items-center justify-between mb-8'>
                  <div className='flex items-center space-x-3'>
                    <div className='w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center'>
                      <Rocket className='w-5 h-5 text-white' />
                    </div>
                    <span className='text-lg font-bold text-white'>
                      Zion Tech
                    </span>
                  </div>
                  <button
                    onClick={closeMenu}
                    className='text-gray-400 hover:text-white'
                  >                    <X size={24} />          >

            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={closeMenu} />
            <div className="absolute right-0 top-0 h-full w-80 bg-black/95 backdrop-blur-xl border-l border-cyan-500/30 overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                      <Rocket className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-lg font-bold text-white">Zion Tech</span>
                  </div>
                  <button onClick={closeMenu} className="text-gray-400 hover:text-white">
                    <X size={24} />
                  </button>
                </div>
                    className='text-gray-400 hover:text-white'>                    <X size={24} />          >;
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={closeMenu} />;
            <div className="absolute right-0 top-0 h-full w-80 bg-black/95 backdrop-blur-xl border-l border-cyan-500/30 overflow-y-auto">;
              <div className="p-6">;
                <div className="flex items-center justify-between mb-8">;
                  <div className="flex items-center space-x-3">;
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">;
                      <Rocket className="w-5 h-5 text-white" />;
                    </div>;
                    <span className="text-lg font-bold text-white">Zion Tech</span>;
                  </div>;
                  <button onClick={closeMenu} className="text-gray-400 hover:text-white">;
                    <X size={24} />;
                  </button>;
                </div>;
                {/* Mobile Navigation Items */}

=======
                  {mainNavItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={closeMenu}

                    >
                      <item.icon size={20} className="text-cyan-400" />
                      <span>{item.name}</span>

                {/* Mobile Services */}
                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-white mb-4">Our Services</h3>
                  <div className="space-y-3">
                    {serviceCategories.slice(0, 6).map((category) => (
                      <div key={category.title} className="p-3 rounded-lg bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20">
                        <h4 className="font-medium text-white mb-2">{category.title}</h4>
                        <p className="text-sm text-gray-400 mb-3">{category.description}</p>
                        <div className="space-y-2">
                          {category.services.slice(0, 2).map((service) => (
                            <Link
                              key={service.name}
                              href={service.href}
                              onClick={closeMenu}

                            >
                              <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-300">{service.name}</span>
                                <span className="text-xs text-cyan-400 font-mono">{service.price}</span>

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                {/* Mobile Services */}


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
                            </Link>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                          ))}
                        </div>;
                      </div>;
                    ))}
=======

                  </div>;
                </div>;


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                {/* Mobile CTA */}
                <div className='mt-8'>;
                  <motion&& motion.button
                    whileHover={{ scale: 1 && 1.02 }}
                    whileTap={{ scale: 0 && 0.98 }}
                    className='w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300'>                <div className="mt-8">;
                  <motion&& motion.button
                    whileHover={{ scale: 1 && 1.02 }}
                    whileTap={{ scale: 0 && 0.98 }}
                    className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                    Get Started
                  </motion && motion.button>;
                </div>;
              </div>;
            </div>;
          </motion && motion.div>;
        )}

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

                {/* Mobile CTA */}
                <div className="mt-8">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"

                    Get Started
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
=======

    </>
      </AnimatePresence>;
      {/* Spacer for fixed navigation */}
      <div className='h-20' />;
    </>;
  );      <div className="h-20" />;
    </>;


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  );

}

=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
