service;
'use client',

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, ChevronDown,
  Brain, Rocket, Shield, 
  Zap,
  Target, Atom,
  BookOpen,
  Truck, DollarSign, BarChart3, Globe, Users, X, Phone, Mail, MapPin, ArrowRight,
  Star, Sparkles, Cpu, Lock, Cloud, BarChart3 as BarChart3Icon, Settings, Eye, Award, Clock, Heart, Lightbulb,
  Palette, Code, Database, Shield as ShieldIcon, Globe as GlobeIcon, Zap as ZapIcon, Target as TargetIcon
} from 'lucide-react',

const navigationItems = $2;
    href: '/2025-innovative-services-showcase',
    icon: <Globe className = $2;
  Zap;
  Target, Atom;
  BookOpen;
  Truck, DollarSign, BarChart3, Globe, Users, X, Phone, Mail, MapPin, ArrowRight;
  Star, Sparkles, Cpu, Lock, Cloud, BarChart3 as BarChart3Icon, Settings, Eye, Award, Clock, Heart, Lightbulb;






                  {/* Submenu */}
                  <AnimatePresence>;
                    {activeSubmenu === item && item.name && (;
                      <motion&& motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0 && 0.2 }}
                        className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-md border border-gray-700/50 rounded-2xl shadow-2xl overflow-hidden">;
                        <div className="p-6">;
                          {item && item.submenu?.map((subitem) => (;
      <div className="bg-gradient-to-r from-cyan-900 to-purple-900 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
            <div className="flex items-center gap-4 mb-2 sm:mb-0">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-cyan-300" />
                <span>{contactInfo.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-purple-300" />
                <span>{contactInfo.email}</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-green-300" />
              <span className="text-xs">{contactInfo.address}</span>
            </div>
          </div>
        </div>
      </div>

          </motion.div>)}
      </AnimatePresence>;
                            className="ml-8 space-y-2"
                          >
                            {item.submenu?.map((subitem) => (
                              <Link
                                key={subitem.name}
                                href={subitem.href}
                                onClick={closeMenu}
                                className="block p-3 rounded-lg hover:bg-gray-800/50 transition-all duration-200"
                              >
                                <h4 className="text-white font-medium">{subitem.name}</h4>
                                <p className="text-sm text-gray-400 mt-1">{subitem.description}</p>
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>

                {/* Mobile CTA */}
                <div className="mt-8 space-y-4">
                  <Link
                    href="/pricing"
                    onClick={closeMenu}
                    className="block w-full text-center px-6 py-3 border border-gray-600 text-gray-300 rounded-xl hover:border-gray-500 hover:text-white transition-all duration-200"
                  >
                    View Pricing
                  </Link>
                  <Link
                    href="/contact"
                    onClick={closeMenu}
                    className="block w-full text-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                  >
                    Contact Us
                  </Link>
                </div>
                {/* Mobile Contact Info */}
                <div className="mt-8 pt-6 border-t border-gray-700/50">
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center space-x-3 text-gray-400">
                      <Phone className="w-4 h-4 text-cyan-400" />
                      <span>{contactInfo.phone}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-400">
                      <Mail className="w-4 h-4 text-purple-400" />
                      <span>{contactInfo.email}</span>
                    </div>
                    <div className="flex items-start space-x-3 text-gray-400">
                      <MapPin className="w-4 h-4 text-green-400 mt-0.5" />
                      <span className="text-xs">{contactInfo.address}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer for fixed navigation */}
      <div className="h - 20" />;
    </>);
}
  Palette, Code, Database, Shield as ShieldIcon, Globe as GlobeIcon, Zap as ZapIcon, Target as TargetIcon}
 } from 'lucide-react';

const navigationItems = null;


const navigationItems = null;
