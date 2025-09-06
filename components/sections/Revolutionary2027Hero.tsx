import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Brain,
  Rocket,
  TestTube,
  Globe,
  Microscope,
  Lock,
  Star,
  TrendingUp,
  Zap,
  Sparkles,
  Atom,;
} from 'lucide-react';
import Link from 'next/link';

const Revolutionary2027Hero = () => {
  const floatingIcons = [
    { icon: Brain, delay: 0, position: 'top-20 left-20' },
    { icon: Rocket, delay: 0.5, position: 'top-40 right-32' },
    { icon: TestTube, delay: 1, position: 'bottom-40 left-32' },
    { icon: Globe, delay: 1.5, position: 'bottom-20 right-20' },
    { icon: Microscope, delay: 2, position: 'top-1/2 left-10' },
    { icon: Lock, delay: 2.5, position: 'top-1/2 right-10' },
    { icon: Atom, delay: 3, position: 'bottom-1/3 left-1/2' },
    { icon: Sparkles, delay: 3.5, position: 'top-1/3 right-1/2' },  ];

  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },  };

  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut' as const,
      },
    },

  };

  return (
    <section className='relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900'>
      {/* Enhanced Background Effects */}
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.15),transparent_50%)]'></div>
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,255,255,0.1),transparent_50%)]'></div>
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(236,72,153,0.08),transparent_50%)]'></div>

      {/* Animated Grid Pattern */}
      <div className='absolute inset-0 opacity-20'>
        <div className='absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px]'></div>      </div>

      </div>

      {/* Floating Icons */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className={`absolute ${item.position} text-purple-400/30`}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0],
          }}          transition={{
            duration: 4,
            delay: item.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <item.icon className='w-8 h-8' />        </motion.div>
      ))}

      {/* Main Content */}
      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>

          transition={{
            duration: 4,
            delay: item.delay,
            repeat: Infinity,

        </motion.div>
      ))}

      {/* Main Content */}

              <span>Technology</span>

            </div>
          </motion.div>

          {/* Subtitle */}
          <motion.div variants={itemVariants} className='max-w-4xl mx-auto'>
            <p className='text-xl md:text-2xl lg:text-3xl text-gray-300 leading-relaxed'>
              Experience the next generation of AI, quantum computing, and
              emerging technologies. Transform your business with solutions that
              were once science fiction.            </p>
          </motion.div>

          {/* Key Features */}
          <motion.div variants={itemVariants} className="max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 leading-relaxed">
              Experience the next generation of AI, quantum computing, and emerging technologies. 
              Transform your business with solutions that were once science fiction.

            </p>
          </motion.div>

          {/* Key Features */}

            </div>
          </motion.div>

          {/* CTA Buttons */}

            </a>
          </motion.div>

          {/* Stats */}

            </div>

          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className='absolute bottom-8 left-1/2 transform -translate-x-1/2'

        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <div className='w-6 h-10 border-2 border-purple-400/50 rounded-full flex justify-center'>
          <motion.div
            className='w-1 h-3 bg-gradient-to-b from-cyan-400 to-purple-400 rounded-full mt-2'
            animate={{
              y: [0, 12, 0],

            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',            }}
          />
        </div>
      </motion.div>

      {/* Particle Effects */}
      <div className='absolute inset-0 pointer-events-none'>

        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className='absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full'
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}          />
        ))}
      </div>
    </section>
  );
};

export default Revolutionary2027Hero;

          />
        ))}
      </div>
    </section>