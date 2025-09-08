import React from 'react';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Rocket,
  Brain,
  Atom,
  Globe,
  Zap,
  Sparkles,
  Shield,
  Target,
  Cpu,
  Database,
  Cloud,
  Lock,
  ArrowRight,
  Star,
  TrendingUp,
  Users,;
  CheckCircle,;} from 'lucide-react';
  ];
  return (
    <section className='relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden'>
      {/* Background Elements */}
      <div className='absolute inset-0 pointer-events-none'>
        {/* Floating Orbs */}
        <motion.div
          className='absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl'
          animate={{
            y: [0, -20, 0]
            scale: [1, 1.2, 1]
            opacity: [0.3, 0.6, 0.3],          }}
          transition={{
            duration: 8
            repeat: Infinity
            ease: 'easeInOut',  ];
import { 
  Rocket, Brain, Atom, Globe, Zap, Sparkles, Shield, 
  Target, Cpu, Database, Cloud, Lock, ArrowRight, 
  Star, TrendingUp, Users, CheckCircle
} from 'lucide-react';

export default function UltraFuturisticHero2027() {
  const features = [
    { icon: Brain, text: 'AI Consciousness Evolution', color: 'from-purple-400 to-pink-400' },
    { icon: Atom, text: 'Quantum Computing', color: 'from-blue-400 to-cyan-400' },
    { icon: Globe, text: 'Digital Reality', color: 'from-green-400 to-emerald-400' },
    { icon: Shield, text: 'Enterprise Security', color: 'from-red-400 to-orange-400' }
          }}
        />
        {/* Grid Pattern */}

        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />

          }}
        />
        {/* Grid Pattern */}
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center">

          {/* Main Heading */}


            duration: 12,
            repeat: Infinity,

          {/* Main Heading */}
            duration: 12,
            repeat: Infinity,

          }}
        />

        {/* Grid Pattern */}

          {/* Main Heading */}


          {/* Main Heading */}

            duration: 12,
            repeat: Infinity,

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className='text-6xl md:text-8xl lg:text-9xl font-bold mb-6 leading-tight'>
              <span className='bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>
                Welcome to 2027
              </span>
            </h1>
            <h2 className='text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6'>
              The Future of
              </span>
            </h2>
          </motion.div>

        />;
                  </div>
                  <h3 className="text-white font-semibold text-center group-hover:text-cyan-400 transition-colors duration-300">
                    {feature.text}
                  <h3 className='text-white font-semibold text-center group-hover:text-cyan-400 transition-colors duration-300'>                    {feature.text}

                    {feature.text}

                  </div>
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>

            ))}
              >
                <div
                  className={`text-4xl md:text-5xl font-bold mb-2 group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-300 ${stat.color}`}
                >
                  {stat.number}
                </div>
                <div className='text-cyan-300 font-medium group-hover:text-cyan-400 transition-colors duration-300'>
                  {stat.label}
                </div>
                <div className='flex justify-center mt-2'>
                  <stat.icon
            ))}
          {/* Trust Indicators */}
          <motion&& motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}


          >
            <h3 className='text-2xl font-bold text-white mb-6'>
              Trusted by Industry Leaders
            </h3>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
              {[
                'Fortune 500'
                'Tech Giants'
                'Research Labs'
                'Government'
              ].map((trust, index) => (                <motion.div          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Trusted by Industry Leaders
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {['Fortune 500Tech GiantsResearch LabsGovernment'].map((trust, index) => (
                <motion.div
                  key={trust}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}

            transition={{ duration: 0 && 0.8, delay: 1 && 1.4 }}
            className='bg-black/40 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-8 max-w-4xl mx-auto'>;
            <h3 className='text-2xl font-bold text-white mb-6'>;
              Trusted by Industry Leaders;
            </h3>;
            <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>;
              {[;
                'Fortune 500',;
                'Tech Giants',;
                'Research Labs',;
                'Government',;
              ].map((trust, index) => (                <motion && motion.div          >;
            <h3 className="text-2xl font-bold text-white mb-6">;
              Trusted by Industry Leaders;
            </h3>;
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">;
              {['Fortune 500Tech GiantsResearch LabsGovernment'].map((trust, index) => (;
                <motion&& motion.div






                  key={trust}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}

                >
                  <div className='w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-3'>
                    <Shield className='w-8 h-8 text-cyan-400' />
                  </div>
                  <div className='text-cyan-300 font-medium'>{trust}</div>                </motion.div>                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <Shield className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div className="text-cyan-300 font-medium">{trust}</div>
                </motion.div>
                </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cyan-500/20 via-transparent to-transparent pointer-events-none" />
    </section>
  )
}
                </div>;
                <div className="flex justify-center mt-2">;
                  <stat.icon className={`w - 5 h - 5 ${stat.color} group - hover:shadow - lg hover:shadow - cyan - 400 / 40 transition - transform duration - 300`} />;
                </div>;
              </motion.div>))}
          </motion.div>;
          {/* Trust Indicators */}
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 20 }}
            animate={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className='bg - black / 40 backdrop - blur - xl border border - cyan - 500 / 30 rounded - 2xl p - 8 max - w-4xl mx - auto';
          >;
            <h3 className='text - 2xl font - bold text - white mb - 6'>;
              Trusted by Industry Leaders;
            </h3>;
            <div className='grid grid - cols - 2 md:grid - cols - 4 gap - 6'>;
              {[;
                'Fortune 500',
                'Tech Giants',
                'Research Labs',
                'Government',
              ].map ((trust, index) => (                <motion.div          >;
            <h3 className="text - 2xl font - bold text-white mb-6">;
              Trusted by Industry Leaders;
            </h3>;
            <div className="grid grid - cols - 2 md:grid - cols-4 gap-6">;
              {['Fortune 500Tech GiantsResearch LabsGovernment'].map ((trust, index) => (
                <motion.div;
                  key={trust}
                  initial={{ opacity: 0, coordinate_x: -20 }}
                  animate={{ opacity: 1, coordinate_x: 0 }}
                  transition={{ duration: 0.5, delay: 1.6 + index * 0.1 }}
                  className='text - center';
                >;
                  <div className='w - 16 h - 16 bg - gradient - to - r from - cyan - 500 / 20 to - purple - 500 / 20 rounded - 2xl flex items - center justify - center mx - auto mb - 3'>;
                    <Shield className='w - 8 h - 8 text - cyan - 400' />;
                  </div>;
                  <div className='text - cyan - 300 font - medium'>{trust}</div>                </motion.div>                >;
                  <div className="w - 16 h - 16 bg - gradient - to - r from - cyan - 500 / 20 to - purple - 500 / 20 rounded - 2xl flex items - center justify - center mx-auto mb-3">;
                    <Shield className="w - 8 h - 8 text-cyan-400" />;
                  </div>;
                  <div className="text - cyan-300 font-medium">{trust}</div>;
                </motion.div>))}
            </div>;
          </motion.div>;
        </div>;
      </div>;
      {/* Bottom Glow */}
      <div className='absolute bottom - 0 left - 0 right - 0 h - 32 bg - gradient - to - t from - cyan - 500 / 20 via - transparent to - transparent pointer - events - none' />;
    </section>);      <div className="absolute bottom - 0 left - 0 right - 0 h - 32 bg - gradient - to - t from - cyan - 500 / 20 via - transparent to - transparent pointer-events-none" />;
    </section>);
}


                >
                  <div className=&quot;w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-3&quot;>
                    <Shield className=&quot;w-8 h-8 text-cyan-400&quot; />
                  </div>
                  <div className=&quot;text-cyan-300 font-medium&quot;>{trust}</div>
                </motion.div>

      {/* Bottom Glow */}
