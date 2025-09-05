<<<<<<< HEAD
import React, { useEffect, useRef, useState } from 'react',
import { motion } from 'framer-motion',
const UltraFuturisticBackground2047: React.FC = () => {
  const [isClient, setIsClient] = useState(false),

  useEffect(() => {
    setIsClient(true)
  }, []),

  if (!isClient) {
    return (
<<<<<<< HEAD
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0 bg-gradient-to-br from-black via-gray-900 to-black" />
    )
=======
      <div className=&quot;fixed inset-0 w-full h-full pointer-events-none z-0 bg-gradient-to-br from-black via-gray-900 to-black&quot; />
    );
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  }

  return (
    <>
      {/* Background Gradient */}
      <div className=&quot;fixed inset-0 w-full h-full pointer-events-none z-0 bg-gradient-to-br from-black via-gray-900 to-black&quot; />

      {/* Floating Geometric Shapes */}
      <div className=&quot;fixed inset-0 pointer-events-none z-0 overflow-hidden&quot;>
        {/* Animated Hexagons */}
        <motion.div
          className=&quot;absolute top-20 left-20 w-32 h-32 opacity-20&quot;
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1]}}
          transition={{
            duration: 20,
            repeat: Infinity as any,
            ease: &quot;linear&quot;
          }}
=======
import React, {_useEffect, _useRef, _useState} from 'react';

const UltraFuturisticBackground2047: React.FC = () => {_const [isClient, _setIsClient] = useState(false);

  useEffect__(() => {
    setIsClient(true);}, []);

  if (!isClient) {_return (
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0 bg-gradient-to-br from-black via-gray-900 to-black" />
    );}

  return (
    <>
      {_/* Background Gradient */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0 bg-gradient-to-br from-black via-gray-900 to-black" />

      {_/* Floating Geometric Shapes */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {_/* Animated Hexagons */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 opacity-20"
          animate={_{
            rotate: [0, _360], _scale: [1, _1.2, _1]}}
          transition={_{
            duration: 20, _repeat: Infinity as any, _ease: "linear"}}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        >
          <div className=&quot;w-full h-full bg-gradient-to-r from-cyan-500 to-blue-500 clip-hexagon&quot; />
        </motion.div>

        <motion.div
<<<<<<< HEAD
          className=&quot;absolute top-40 right-32 w-24 h-24 opacity-15&quot;
          animate={{
            rotate: [360, 0],
            scale: [1, 0.8, 1]}}
          transition={{
            duration: 15,
            repeat: Infinity as any,
            ease: &quot;linear&quot;
          }}
=======
          className="absolute top-40 right-32 w-24 h-24 opacity-15"
          animate={_{
            rotate: [360, _0], _scale: [1, _0.8, _1]}}
          transition={_{
            duration: 15, _repeat: Infinity as any, _ease: "linear"}}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        >
          <div className=&quot;w-full h-full bg-gradient-to-r from-purple-500 to-pink-500 clip-hexagon&quot; />
        </motion.div>

        {_/* Floating Circles */}
        <motion.div
<<<<<<< HEAD
          className=&quot;absolute bottom-32 left-1/4 w-16 h-16 opacity-10&quot;
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0]}}
          transition={{
            duration: 8,
            repeat: Infinity as any,
            ease: &quot;easeInOut&quot;
          }}
=======
          className="absolute bottom-32 left-1/4 w-16 h-16 opacity-10"
          animate={_{
            y: [0, _-30, _0], _x: [0, _20, _0]}}
          transition={_{
            duration: 8, _repeat: Infinity as any, _ease: "easeInOut"}}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        >
          <div className=&quot;w-full h-full bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full&quot; />
        </motion.div>

        <motion.div
<<<<<<< HEAD
          className=&quot;absolute top-1/3 right-1/4 w-20 h-20 opacity-15&quot;
          animate={{
            y: [0, 40, 0],
            x: [0, -30, 0]}}
          transition={{
            duration: 12,
            repeat: Infinity as any,
            ease: &quot;easeInOut&quot;
          }}
=======
          className="absolute top-1/3 right-1/4 w-20 h-20 opacity-15"
          animate={_{
            y: [0, _40, _0], _x: [0, _-30, _0]}}
          transition={_{
            duration: 12, _repeat: Infinity as any, _ease: "easeInOut"}}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        >
          <div className=&quot;w-full h-full bg-gradient-to-r from-purple-400 to-pink-400 rounded-full&quot; />
        </motion.div>

<<<<<<< HEAD
        {/* Animated Grid Lines */}
        <div className=&quot;absolute inset-0 opacity-5&quot;>
          <svg className=&quot;w-full h-full&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;>
=======
        {_/* Animated Grid Lines */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            <defs>
              <pattern id=&quot;grid&quot; width=&quot;100&quot; height=&quot;100&quot; patternUnits=&quot;userSpaceOnUse&quot;>
                <path d=&quot;M 100 0 L 0 0 0 100&quot; fill=&quot;none&quot; stroke=&quot;cyan&quot; strokeWidth=&quot;0.5&quot; opacity=&quot;0.3&quot;/>
              </pattern>
            </defs>
            <rect width=&quot;100%&quot; height=&quot;100%&quot; fill=&quot;url(#grid)&quot; />
          </svg>
        </div>

        {_/* Floating Data Streams */}
        <motion.div
<<<<<<< HEAD
          className=&quot;absolute top-0 left-0 w-full h-full opacity-20&quot;
          animate={{
            y: [0, -100]}}
          transition={{
            duration: 30,
            repeat: Infinity as any,
            ease: &quot;linear&quot;
          }}
        >
          <div className=&quot;flex space-x-8 justify-center&quot;>
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className=&quot;w-1 h-32 bg-gradient-to-b from-cyan-500 to-transparent&quot;
                animate={{
                  height: [32, 64, 32],
                  opacity: [0.3, 1, 0.3]}}
                transition={{
                  duration: 3,
                  repeat: Infinity as any,
                  delay: i * 0.1,
                  ease: &quot;easeInOut&quot;
                }}
=======
          className="absolute top-0 left-0 w-full h-full opacity-20"
          animate={_{
            y: [0, _-100]}}
          transition={_{
            duration: 30, _repeat: Infinity as any, _ease: "linear"}}
        >
          <div className="flex space-x-8 justify-center">
            {_[...Array(20)].map(_(_, _i) => (
              <motion.div
                key={i}
                className="w-1 h-32 bg-gradient-to-b from-cyan-500 to-transparent"
                animate={_{
                  height: [32, _64, _32], _opacity: [0.3, _1, _0.3]}}
                transition={_{
                  duration: 3, _repeat: Infinity as any, _delay: i * 0.1, _ease: "easeInOut"}}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              />
            ))}
          </div>
        </motion.div>

<<<<<<< HEAD
        {/* Neon Glow Effects */}
        <div className=&quot;absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-5&quot;>
          <div className=&quot;w-full h-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl&quot; />
=======
        {_/* Neon Glow Effects */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-5">
          <div className="w-full h-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        </div>

        <div className=&quot;absolute top-1/4 right-1/4 w-64 h-64 opacity-5&quot;>
          <div className=&quot;w-full h-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl&quot; />
        </div>

        {_/* Scanning Lines */}
        <motion.div
<<<<<<< HEAD
          className=&quot;absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-30&quot;
          animate={{
            y: [0, 1000]}}
          transition={{
            duration: 8,
            repeat: Infinity as any,
            ease: &quot;linear&quot;
          }}
=======
          className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-30"
          animate={_{
            y: [0, _1000]}}
          transition={_{
            duration: 8, _repeat: Infinity as any, _ease: "linear"}}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        />

        {_/* Pulse Rings */}
        <motion.div
<<<<<<< HEAD
          className=&quot;absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4&quot;
          animate={{
            scale: [1, 20],
            opacity: [1, 0]}}
          transition={{
            duration: 4,
            repeat: Infinity as any,
            ease: &quot;easeOut&quot;
          }}
=======
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4"
          animate={_{
            scale: [1, _20], _opacity: [1, _0]}}
          transition={_{
            duration: 4, _repeat: Infinity as any, _ease: "easeOut"}}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        >
          <div className=&quot;w-full h-full border-2 border-cyan-400 rounded-full&quot; />
        </motion.div>

        <motion.div
<<<<<<< HEAD
          className=&quot;absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4&quot;
          animate={{
            scale: [1, 15],
            opacity: [1, 0]}}
          transition={{
            duration: 4,
            repeat: Infinity as any,
            ease: &quot;easeOut&quot;,
            delay: 1
          }}
=======
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4"
          animate={_{
            scale: [1, _15], _opacity: [1, _0]}}
          transition={_{
            duration: 4, _repeat: Infinity as any, _ease: "easeOut", _delay: 1}}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        >
          <div className=&quot;w-full h-full border-2 border-blue-400 rounded-full&quot; />
        </motion.div>

        <motion.div
<<<<<<< HEAD
          className=&quot;absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4&quot;
          animate={{
            scale: [1, 10],
            opacity: [1, 0]}}
          transition={{
            duration: 4,
            repeat: Infinity as any,
            ease: &quot;easeOut&quot;,
            delay: 2
          }}
=======
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4"
          animate={_{
            scale: [1, _10], _opacity: [1, _0]}}
          transition={_{
            duration: 4, _repeat: Infinity as any, _ease: "easeOut", _delay: 2}}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        >
          <div className=&quot;w-full h-full border-2 border-purple-400 rounded-full&quot; />
        </motion.div>
      </div>

      {_/* CSS for hexagon clip */}
      <style jsx>{_`
        .clip-hexagon {
<<<<<<< HEAD
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)
        }
=======
          clip-path: polygon(50% 0%, _100% 25%, _100% 75%, _50% 100%, _0% 75%, _0% 25%);}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      `}</style>
    </>
  )
},

export default UltraFuturisticBackground2047,