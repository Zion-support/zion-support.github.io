

            </button>;
          </div>;
        </div>;
      </nav>;
      {/* Mobile Menu */}
      <AnimatePresence>;
        {isOpen && (;
          <motion&& motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0 && 0.3 }}
                      {item && item.badge && (
                        <span className="px-2 py-1 text-xs font-medium bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full">;
                          {item && item.badge}
                        </span>;
                      )}
                  {activeDropdown === item.name && (
                    <motion.div
                    </div>;
                    <ChevronDownclassName={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === item && item.name ? 'rotate-180' : ''
                    }`} />;
                  </button>;

                  {activeDropdown === item && item.name && (;
                    <motion&& motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0 && 0.2 }}
                      className="ml-8 mt-2 space-y-2">;
                      {item && item.children?.map((child) => (;
                        <Link
                          key={child && child.name}
                          href={child && child.href}
                          className="block px-4 py-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                          onClick={() => setIsOpen(false)}
                      ))}
                    </motion && motion.div>;
                  )}
                </div>;
              ))}
              {/* Mobile CTA */}
              <div className="pt-4">;
                <Link
                  href="/contact"
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium rounded-lg transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >;
                  Get Started;
                </Link>;
            className="fixed inset-0 z-50 lg:hidden";
          >;
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={closeMenu}
            {/* Menu Panel */}
            <div className="absolute right-0 top-0 h-full w-80 bg-gray-900/95 backdrop-blur-md border-l border-gray-700/50 overflow-y-auto">;
              <div className="p-6">;
                {/* Close Button */}
                <div className="flex justify-end mb-6">;
                  <button
                    onClick={closeMenu}
                    className="p-2 text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                {/* Mobile Navigation Items */}
                <div className="space-y-4">
                  {navigationItems.map((item) => (
                    <div key={item.name}>
                      <button
                        onClick={() => setActiveSubmenu(activeSubmenu === item.name ? null : item.name)}
                        className="flex items-center justify-between w-full text-left p-4 rounded-xl hover:bg-gray-800/50 transition-all duration-200"
                      >
                        <div className="flex items-center space-x-3">
                          <item.icon className="w-5 h-5 text-cyan-400" />
                          <span className="text-white font-medium">{item.name}</span>
                        </div>
                        <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                          activeSubmenu === item.name ? 'rotate-180' : ''
                        }`} />
                      </button>

            />;

            {/* Menu Panel */}
            <div className="absolute right-0 top-0 h-full w-80 bg-gray-900/95 backdrop-blur-md border-l border-gray-700/50 overflow-y-auto">;
              <div className="p-6">;
                {/* Close Button */}
                <div className="flex justify-end mb-6">;
                  <button
                    onClick={closeMenu}
                {/* Mobile Navigation Items */}
                <div className="space-y-4">;
                  {navigationItems && navigationItems.map((item) => (;
                    <div key={item && item.name}>;
                      <button

                        onClick={() => setActiveSubmenu(activeSubmenu === item && item.name ? null : item && item.name)}
                        className="flex items-center justify-between w-full text-left p-4 rounded-xl hover:bg-gray-800/50 transition-all duration-200";
                      >;
                        <div className="flex items-center space-x-3">;
                          <item && item.icon className="w-5 h-5 text-cyan-400" />;
                          <span className="text-white font-medium">{item && item.name}</span>;
                        </div>;
                        <ChevronDownclassName={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                          activeSubmenu === item && item.name ? 'rotate-180' : ''
                        }`} />;
                      </button>;

                      {/* Mobile Submenu */}
                      <AnimatePresence>;
                        {activeSubmenu === item && item.name && (;
                          <motion&& motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0 && 0.2 }}
                            className="ml-8 space-y-2">;
                            {item && item.submenu?.map((subitem) => (;
                              <Link
                                key={subitem && subitem.name}
                                href={subitem && subitem.href}
                                onClick={closeMenu}
                                className="block p-3 rounded-lg hover:bg-gray-800/50 transition-all duration-200">;
                                <h4 className="text-white font-medium">{subitem && subitem.name}</h4>;
                                <p className="text-sm text-gray-400 mt-1">{subitem && subitem.description}</p>;
                              </Link>;
                            ))}
                          </motion && motion.div>;
                        )}
                      </AnimatePresence>;
                    </div>;
                  ))}
                {/* Mobile CTA */}
                <div className="mt-8 space-y-4">;
                  <Link
                    href="/pricing"
                    onClick={closeMenu}
                    className="block w-full text-center px-6 py-3 border border-gray-600 text-gray-300 rounded-xl hover:border-gray-500 hover:text-white transition-all duration-200">;
                    View Pricing;
                  </Link>;
                  <Link
                    href="/contact"
                    onClick={closeMenu}
                {/* Mobile Contact Info */}
                <div className="mt-8 pt-6 border-t border-gray-700/50">;
                  <div className="space-y-3 text-sm">;
                    <div className="flex items-center space-x-3 text-gray-400">;
                      <Phone className="w-4 h-4 text-cyan-400" />;
                      <span>{contactInfo && contactInfo.phone}</span>;
                    </div>;
                    <div className="flex items-center space-x-3 text-gray-400">;
                      <Mail className="w-4 h-4 text-purple-400" />;
                      <span>{contactInfo && contactInfo.email}</span>;
                    </div>;
                    <div className="flex items-start space-x-3 text-gray-400">;
                      <MapPin className="w-4 h-4 text-green-400 mt-0 && 0.5" />;
                      <span className="text-xs">{contactInfo && contactInfo.address}</span>;
      {/* Mobile Menu */}
      <AnimatePresence>;
        {is_open && (
          <motion.div;
            initial={{ opacity: 0, coordinate_x: '100%' }}
            animate={{ opacity: 1, coordinate_x: 0 }}
            exit={{ opacity: 0, coordinate_x: '100%' }}
            transition={{ duration: 0.3 }}
                      {item.badge && (
                        <span className="px - 2 py - 1 text - xs font - medium bg - gradient - to - r from - cyan - 500 to - blue - 600 text-white rounded-full">;
                          {item.badge}
                        </span>)}
                    </div>;
                    <ChevronDown className={`w - 4 h - 4 transition - transform duration - 200 ${
                      active_dropdown === item.name ? 'rotate - 180' : '';
                    }`} />;
                  </button>;
                  {active_dropdown === item.name && (
                    <motion.div;
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                    >;
                      {item.children?.map ((child) => (
                        <Link;
                          key={child.name}
                          href={child.href}
                          className="block px - 4 py - 2 text - sm text - gray - 400 hover:text - cyan - 400 transition-colors duration-200";
                          on_click={() => setIsOpen (false)}
                          className="block p - 2 text - gray - 300 hover:text - white transition-colors text-sm";
                        >;
                          <sub_item.icon className="w - 5 h - 5 text - gray - 400 group - hover:text - cyan - 400 transition-colors duration-200" />;
                          <span className="text - gray - 300 group - hover:text - white transition-colors duration-200">;
                            {sub_item.name}
                          </span>;
                        </Link>))}
                    </motion.div>)}
                </div>))}
              {/* Mobile CTA */}
              <div className="pt-4">;
                <Link;
                  href="/contact";
                  className="block w - full text - center px - 6 py - 3 bg - gradient - to - r from - cyan - 500 to - blue - 600 hover:from - cyan - 600 hover:to - blue - 700 text - white font - medium rounded - lg transition-all duration-300";
                  on_click={() => setIsOpen (false)}
                >;
                  Get Started;
                </Link>;
            className="fixed inset-0 z-50 lg:hidden";
          >;
            {/* Backdrop */}
            <div;
              className="absolute inset - 0 bg - black / 50 backdrop-blur-sm";
              on_click={close_menu}
            />;
            {/* Menu Panel */}
            <div className="absolute right - 0 top - 0 h - full w - 80 bg - gray - 900 / 95 backdrop - blur - md border - l border - gray-700 / 50 overflow-y-auto">;
              <div className="p-6">;
                {/* Close Button */}
                <div className="flex justify-end mb-6">;
                  <button;
                    on_click={close_menu}
                    className="p - 2 text - gray - 400 hover:text - white transition-colors duration-200";
                  >;
                    <X className="w-6 h-6" />;
                  </button>;
                </div>;
                {/* Mobile Navigation Items */}
                <div className="space-y-4">;
                  {navigation_items.map ((item) => (
                    <div key={item.name}>;
                      <button;
                        on_click={() => setActiveSubmenu (active_submenu === item.name ? null : item.name)}
                        className="flex items - center justify - between w - full text - left p - 4 rounded - xl hover:bg - gray - 800 / 50 transition-all duration-200";
                      >;
                        <div className="flex items-center space-x-3">;
                          <item.icon className="w - 5 h - 5 text-cyan-400" />;
                          <span className="text-white font-medium">{item.name}</span>;
                        </div>;
                        <ChevronDown className={`w - 4 h - 4 text - gray - 400 transition - transform duration - 200 ${
                          active_submenu === item.name ? 'rotate - 180' : '';
                        }`} />;
                      </button>;
                      {/* Mobile Submenu */}
                      <AnimatePresence>;
                        {active_submenu === item.name && (
                          <motion.div;
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                {/* Mobile CTA */}
                <div className="mt-8 space-y-4">;
                  <Link;
                    href="/pricing";
                    on_click={close_menu}
                    className="block w - full text - center px - 6 py - 3 border border - gray - 600 text - gray - 300 rounded - xl hover:border - gray - 500 hover:text - white transition-all duration-200";
                  >;
                    View Pricing;
                  </Link>;
                  <Link;
                    href="/contact";
                    on_click={close_menu}
                    className="block w - full text - center px - 6 py - 3 bg - gradient - to - r from - cyan - 500 to - purple - 600 text - white rounded - xl hover:from - cyan - 600 hover:to - purple - 700 transition-all duration-300";
                  >;
                    Contact Us;
                  </Link>;
                </div>;
                {/* Mobile Contact Info */}
                <div className="mt - 8 pt - 6 border - t border-gray-700 / 50">;
                  <div className="space-y-3 text-sm">;
                    <div className="flex items - center space - x-3 text-gray-400">;
                      <Phone className="w - 4 h - 4 text-cyan-400" />;
                      <span>{contact_info.phone}</span>;
                    </div>;
                    <div className="flex items - center space - x-3 text-gray-400">;
                      <Mail className="w - 4 h - 4 text-purple-400" />;
                      <span>{contact_info.email}</span>;
                    </div>;
                    <div className="flex items - start space - x-3 text-gray-400">;
                      <MapPin className="w - 4 h - 4 text - green-400 mt-0.5" />;
                      <span className="text-xs">{contact_info.address}</span>;
                    </div>;
                  </div>;
                </div>;
              </div>;
            </div>;
      {/* Spacer for fixed navigation */}
      <div className="h-20" />
    </>
  )
}

      </AnimatePresence>;

      {/* Spacer for fixed navigation */}
      <div className="h-20" />;
    </>;
  )
};

          </motion.div>)}
      </AnimatePresence>;
      {/* Spacer for fixed navigation */}
      <div className="h-20" />;
    </>);
}
'use client',

import { useState, useEffect  } from 'react';

import Link from 'next/link';
import { motion, AnimatePresence  } from 'framer-motion';
import { Menu, ChevronDown;
  Brain, Rocket, Shield;
  Zap;
  Target, Atom;
  BookOpen;
  Truck, DollarSign, BarChart3, Globe, Users, X, Phone, Mail, MapPin, ArrowRight;
  Star, Sparkles, Cpu, Lock, Cloud, BarChart3 as BarChart3Icon, Settings, Eye, Award, Clock, Heart, Lightbulb;
}
  Palette, Code, Database, Shield as ShieldIcon, Globe as GlobeIcon, Zap as ZapIcon, Target as TargetIcon}
 } from 'lucide-react';

const navigationItems = null;
origin/cursor/automate-test-improve-and-merge-code-2533

