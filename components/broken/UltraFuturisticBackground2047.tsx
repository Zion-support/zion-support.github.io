<<<<<<< HEAD
import React, { useEffect, useRef, useState } from 'react',;
import { motion } from 'framer-motion',;
;
const UltraFuturisticBackground2047:React.FC = () => {;
  const [isClient, setIsClient] = useState(false),;
;
  useEffect(() => {;
    setIsClient(true),;
  }, []),;
;
  if (!isClient) {;
    return (;
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0 bg-gradient-to-br from-black via-gray-900 to-black" />;
    ),;
  }
;
  return (;
    <>;
      {/* Background Gradient */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0 bg-gradient-to-br from-black via-gray-900 to-black" />;
;
      {/* Floating Geometric Shapes */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">;
        {/* Animated Hexagons */}
        <motion.div;
          className="absolute top-20 left-20 w-32 h-32 opacity-20";
          animate={{;
            rotate:[0, 360],;
            scale:[1, 1.2, 1]}}
          transition={{;
            duration:20,;
            repeat:Infinity as any,;
            ease:"linear";
          }}
        >;
          <div className="w-full h-full bg-gradient-to-r from-cyan-500 to-blue-500 clip-hexagon" />;
        </motion.div>;
;
        <motion.div;
          className="absolute top-40 right-32 w-24 h-24 opacity-15";
          animate={{;
            rotate:[360, 0],;
            scale:[1, 0.8, 1]}}
          transition={{;
            duration:15,;
            repeat:Infinity as any,;
            ease:"linear";
          }}
        >;
          <div className="w-full h-full bg-gradient-to-r from-purple-500 to-pink-500 clip-hexagon" />;
        </motion.div>;
;
        {/* Floating Circles */}
        <motion.div;
          className="absolute bottom-32 left-1/4 w-16 h-16 opacity-10";
          animate={{;
            y:[0, -30, 0],;
            x:[0, 20, 0]}}
          transition={{;
            duration:8,;
            repeat:Infinity as any,;
            ease:"easeInOut";
          }}
        >;
          <div className="w-full h-full bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full" />;
        </motion.div>;
;
        <motion.div;
          className="absolute top-1/3 right-1/4 w-20 h-20 opacity-15";
          animate={{;
            y:[0, 40, 0],;
            x:[0, -30, 0]}}
          transition={{;
            duration:12,;
            repeat:Infinity as any,;
            ease:"easeInOut";
          }}
        >;
          <div className="w-full h-full bg-gradient-to-r from-purple-400 to-pink-400 rounded-full" />;
        </motion.div>;
;
        {/* Animated Grid Lines */}
        <div className="absolute inset-0 opacity-5">;
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">;
            <defs>;
              <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">;
                <path d="M 100 0 L 0 0 0 100" fill="none" stroke="cyan" strokeWidth="0.5" opacity="0.3"/>;
              </pattern>;
            </defs>;
            <rect width="100%" height="100%" fill="url(#grid)" />;
          </svg>;
        </div>;
;
        {/* Floating Data Streams */}
        <motion.div;
          className="absolute top-0 left-0 w-full h-full opacity-20";
          animate={{;
            y:[0, -100]}}
          transition={{;
            duration:30,;
            repeat:Infinity as any,;
            ease:"linear";
          }}
        >;
          <div className="flex space-x-8 justify-center">;
            {[...Array(20)].map((_, i) => (;
              <motion.div;
                key={i}
                className="w-1 h-32 bg-gradient-to-b from-cyan-500 to-transparent";
                animate={{;
                  height:[32, 64, 32],;
                  opacity:[0.3, 1, 0.3]}}
                transition={{;
                  duration:3,;
                  repeat:Infinity as any,;
                  delay:i * 0.1,;
                  ease:"easeInOut";
                }}
              />;
=======
import React, { useEffect, useRef, useState } from 'react',
import { motion } from 'framer-motion',
const UltraFuturisticBackground2047: React.FC = () => {
  const [isClient, setIsClient] = useState(false),

  useEffect(() => {
    setIsClient(true)
  }, []),

  if (!isClient) {
    return (
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0 bg-gradient-to-br from-black via-gray-900 to-black" />
    )  }

  return (
    <>
      {/* Background Gradient */}
      <div className=&quot;fixed inset-0 w-full h-full pointer-events-none z-0 bg-gradient-to-br from-black via-gray-900 to-black&quot; />

      {/* Floating Geometric Shapes */}
      <div className=&quot;fixed inset-0 pointer-events-none z-0 overflow-hidden&quot;>
        {/* Animated Hexagons */}
        <motion.div,
className=&quot;absolute top-20 left-20 w-32 h-32 opacity-20&quot;
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1]}}
          transition={{
            duration: 20,
            repeat: Infinity as any,
            ease: &quot;linear&quot
          }}
import React, {useEffect, useRef, useState} from 'react';

const UltraFuturisticBackground2047: React.FC = () => {const [isClient, setIsClient] = useState(false);

  useEffect_(() => {
    setIsClient(true)}, []);

  if (!isClient) {return (
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0 bg-gradient-to-br from-black via-gray-900 to-black" />
    )}

  return (
    <>
      {_/* Background Gradient */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0 bg-gradient-to-br from-black via-gray-900 to-black" />

      {_/* Floating Geometric Shapes */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {_/* Animated Hexagons */}
        <motion.div,
className="absolute top-20 left-20 w-32 h-32 opacity-20"
          animate={_{
            rotate: [0, 360], scale: [1, 1.2, 1]}}
          transition={_{
            duration: 20, repeat: Infinity as any, ease: "linear"}}
        >
          <div className=&quot;w-full h-full bg-gradient-to-r from-cyan-500 to-blue-500 clip-hexagon&quot; />
        </motion.div>

        <motion.div,
className=&quot;absolute top-40 right-32 w-24 h-24 opacity-15&quot;
          animate={{
            rotate: [360, 0],
            scale: [1, 0.8, 1]}}
          transition={{
            duration: 15,
            repeat: Infinity as any,
            ease: &quot;linear&quot
          }}        >
          <div className=&quot;w-full h-full bg-gradient-to-r from-purple-500 to-pink-500 clip-hexagon&quot; />
        </motion.div>

        {_/* Floating Circles */}
        <motion.div,
className=&quot;absolute bottom-32 left-1/4 w-16 h-16 opacity-10&quot;
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0]}}
          transition={{
            duration: 8,
            repeat: Infinity as any,
            ease: &quot;easeInOut&quot
          }}        >
          <div className=&quot;w-full h-full bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full&quot; />
        </motion.div>

        <motion.div,
className=&quot;absolute top-1/3 right-1/4 w-20 h-20 opacity-15&quot;
          animate={{
            y: [0, 40, 0],
            x: [0, -30, 0]}}
          transition={{
            duration: 12,
            repeat: Infinity as any,
            ease: &quot;easeInOut&quot
          }}        >
          <div className=&quot;w-full h-full bg-gradient-to-r from-purple-400 to-pink-400 rounded-full&quot; />
        </motion.div>

        {/* Animated Grid Lines */}
        <div className=&quot;absolute inset-0 opacity-5&quot;>
          <svg className=&quot;w-full h-full&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;>            <defs>
              <pattern id=&quot;grid&quot; width=&quot;100&quot; height=&quot;100&quot; patternUnits=&quot;userSpaceOnUse&quot;>
                <path d=&quot;M 100 0 L 0 0 0 100&quot; fill=&quot;none&quot; stroke=&quot;cyan&quot; strokeWidth=&quot;0.5&quot; opacity=&quot;0.3&quot;/>
              </pattern>
            </defs>
            <rect width=&quot;100%&quot; height=&quot;100%&quot; fill=&quot;url(#grid)&quot; />
          </svg>
        </div>

        {_/* Floating Data Streams */}
        <motion.div,
className=&quot;absolute top-0 left-0 w-full h-full opacity-20&quot;
          animate={{
            y: [0, -100]}}
          transition={{
            duration: 30,
            repeat: Infinity as any,
            ease: &quot;linear&quot
          }}
        >
          <div className=&quot;flex space-x-8 justify-center&quot;>
            {[...Array(20)].map((_, i) => (
              <motion.div,
key={i}
                className=&quot;w-1 h-32 bg-gradient-to-b from-cyan-500 to-transparent&quot;
                animate={{
                  height: [32, 64, 32],
                  opacity: [0.3, 1, 0.3]}}
                transition={{
                  duration: 3,
                  repeat: Infinity as any,
                  delay: i * 0.1,
                  ease: &quot;easeInOut&quot
                }}              />
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
            ))}
          </div>;
        </motion.div>;
;
        {/* Neon Glow Effects */}
<<<<<<< HEAD
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-5">;
          <div className="w-full h-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl" />;
        </div>;
;
        <div className="absolute top-1/4 right-1/4 w-64 h-64 opacity-5">;
          <div className="w-full h-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl" />;
        </div>;
;
        {/* Scanning Lines */}
        <motion.div;
          className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-30";
          animate={{;
            y:[0, 1000]}}
          transition={{;
            duration:8,;
            repeat:Infinity as any,;
            ease:"linear";
          }}
        />;
;
        {/* Pulse Rings */}
        <motion.div;
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4";
          animate={{;
            scale:[1, 20],;
            opacity:[1, 0]}}
          transition={{;
            duration:4,;
            repeat:Infinity as any,;
            ease:"easeOut";
          }}
        >;
          <div className="w-full h-full border-2 border-cyan-400 rounded-full" />;
        </motion.div>;
;
        <motion.div;
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4";
          animate={{;
            scale:[1, 15],;
            opacity:[1, 0]}}
          transition={{;
            duration:4,;
            repeat:Infinity as any,;
            ease:"easeOut",;
            delay:1;
          }}
        >;
          <div className="w-full h-full border-2 border-blue-400 rounded-full" />;
        </motion.div>;
;
        <motion.div;
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4";
          animate={{;
            scale:[1, 10],;
            opacity:[1, 0]}}
          transition={{;
            duration:4,;
            repeat:Infinity as any,;
            ease:"easeOut",;
            delay:2;
          }}
        >;
          <div className="w-full h-full border-2 border-purple-400 rounded-full" />;
        </motion.div>;
      </div>;
;
      {/* CSS for hexagon clip */}
      <style jsx>{`;
        .clip-hexagon {;
          clip-path:polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%),;
        }
      `}</style>;
    </>;
  ),;
},;
;
=======
        <div className=&quot;absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-5&quot;>
          <div className=&quot;w-full h-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl&quot; />        </div>

        <div className=&quot;absolute top-1/4 right-1/4 w-64 h-64 opacity-5&quot;>
          <div className=&quot;w-full h-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl&quot; />
        </div>

        {_/* Scanning Lines */}
        <motion.div,
className=&quot;absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-30&quot;
          animate={{
            y: [0, 1000]}}
          transition={{
            duration: 8,
            repeat: Infinity as any,
            ease: &quot;linear&quot
          }}        />

        {_/* Pulse Rings */}
        <motion.div,
className=&quot;absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4&quot;
          animate={{
            scale: [1, 20],
            opacity: [1, 0]}}
          transition={{
            duration: 4,
            repeat: Infinity as any,
            ease: &quot;easeOut&quot
          }}        >
          <div className=&quot;w-full h-full border-2 border-cyan-400 rounded-full&quot; />
        </motion.div>

        <motion.div,
className=&quot;absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4&quot;
          animate={{
            scale: [1, 15],
            opacity: [1, 0]}}
          transition={{
            duration: 4,
            repeat: Infinity as any,
            ease: &quot;easeOut&quot;,
            delay: 1
          }}        >
          <div className=&quot;w-full h-full border-2 border-blue-400 rounded-full&quot; />
        </motion.div>

        <motion.div,
className=&quot;absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4&quot;
          animate={{
            scale: [1, 10],
            opacity: [1, 0]}}
          transition={{
            duration: 4,
            repeat: Infinity as any,
            ease: &quot;easeOut&quot;,
            delay: 2
          }}        >
          <div className=&quot;w-full h-full border-2 border-purple-400 rounded-full&quot; />
        </motion.div>
      </div>

      {_/* CSS for hexagon clip */}
      <style jsx>{_`
        .clip-hexagon {
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)
        }      `}</style>
    </>
  )
},

>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
export default UltraFuturisticBackground2047,