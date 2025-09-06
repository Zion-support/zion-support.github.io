import React from 'react',
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Globe, Zap, Brain, Atom;
  Rocket, Shield, Cpu, Target, Microscope, Users;
  Facebook, Twitter, Linkedin, Instagram, Youtube;
  Github, ArrowRight, Heart, Star, Award, CheckCircle;
  Home, Briefcase, BookOpen, MessageCircle, DollarSign;
  TrendingUp, Target as TargetIcon, Users as UsersIcon;
  Briefcase as BriefcaseIcon, BookOpen as BookOpenIcon;
  MessageCircle as MessageCircleIcon, Star as StarIcon
 } from 'lucide-react';
const contactInfo = null;
                and autonomous systems development. Join our community of future technology pioneers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transform hover:scale-105">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>

          {/* Bottom Bar */}
          <motion.div
            variants={itemVariants}
            className='border-t border-cyan-500/30 pt-8'
          >
            <div className='flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0'>
              <div className='flex items-center space-x-2 text-slate-400 text-sm'>
                <span>© 2024 Zion Tech Group. All rights reserved.</span>
                <span className='text-cyan-400'>|</span>
                <span>Leading the Future of Technology</span>
              </div>

              <div className='flex items-center space-x-6 text-sm'>
                <Link
                  href='/privacy'
                  className='text-slate-400 hover:text-cyan-300 transition-colors'
                >
                  Privacy Policy
                </Link>
                <Link
                  href='/terms'
                  className='text-slate-400 hover:text-cyan-300 transition-colors'
                >
                  Terms of Service
                </Link>
                <Link
                  href='/cookies'
                  className='text-slate-400 hover:text-cyan-300 transition-colors'
                >                  Cookie Policy                <span>© 2024 Zion Tech Group. All rights reserved.</span>
                <span className="text-cyan-400">|</span>
                <span>Leading the Future of Technology</span>
              </div>
              
              <div className="flex items-center space-x-6 text-sm">
                <Link href="/privacy" className="text-slate-400 hover:text-cyan-300 transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-slate-400 hover:text-cyan-300 transition-colors">
                  Terms of Service
                </Link>
                <Link href="/cookies" className="text-slate-400 hover:text-cyan-300 transition-colors">
                  Cookie Policy
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Action Button */}
      <div className='fixed bottom-8 right-8 z-50'>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className='w-14 h-14 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300 flex items-center justify-center text-white'
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <ArrowRight className='w-6 h-6 transform rotate-[-90deg]' />        </motion.button>
      </div>
    </footer>
  );
}        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300 flex items-center justify-center text-white"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <ArrowRight className="w-6 h-6 transform rotate-[-90deg]" />
        </motion.button>
      </div>
    </footer>
);
}
