<<<<<<< HEAD

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
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

const UltraFuturisticBackground2047: React.FC = () => {


<<<<<<< HEAD
=======
const UltraFuturisticBackground2047: React.FC = () => {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
const UltraFuturisticBackground2047: React.FC = () => {;
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {;
    setIsClient(true);    setIsClient(true);
<<<<<<< HEAD

=======
    setIsClient(true)

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
    setIsClient(true)

    setIsClient(true)
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  }, []);

  if (!isClient) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    return (
<<<<<<< HEAD


=======
  const [is_client, setIsClient] = useState (false);
;
  useEffect (() => {
    setIsClient (true);    setIsClient (true);
  }, []);
;
  // Check condition
if ( {) {
  $2
}
    return (
      <div className='fixed inset - 0 w - full h - full pointer - events - none z - 0 bg - gradient - to - br from - black via - gray - 900 to - black' />);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  }





  return (
    <>;
      {/* Background Gradient */}
<<<<<<< HEAD

      <div className='fixed inset-0 w-full h-full pointer-events-none z-0 bg-gradient-to-br from-black via-gray-900 to-black' />



=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


  return (
    <>
      {/* Background Gradient */}
      <div className='fixed inset-0 w-full h-full pointer-events-none z-0 bg-gradient-to-br from-black via-gray-900 to-black' />
<<<<<<< HEAD
=======
=======
      <div className='fixed inset-0 w-full h-full pointer-events-none z-0 bg-gradient-to-br from-black via-gray-900 to-black' />;

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      <div className='fixed inset-0 w-full h-full pointer-events-none z-0 bg-gradient-to-br from-black via-gray-900 to-black' />;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      {/* Floating Geometric Shapes */}
      <div className='fixed inset-0 pointer-events-none z-0 overflow-hidden'>;
        {/* Animated Hexagons */}
        <motion&& motion.div
          className='absolute top-20 left-20 w-32 h-32 opacity-20'
=======
      <div className='fixed inset - 0 w - full h - full pointer - events - none z - 0 bg - gradient - to - br from - black via - gray - 900 to - black' />;
      {/* Floating Geometric Shapes */}
      <div className='fixed inset - 0 pointer - events - none z - 0 overflow - hidden'>;
        {/* Animated Hexagons */}
        <motion.div;
          className='absolute top - 20 left - 20 w - 32 h - 32 opacity - 20';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
          animate={{
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        >;
          <div className='w - full h - full bg - gradient - to - r from - cyan - 500 to - blue - 500 clip - hexagon' />;
        </motion.div>;
        <motion.div;
          className='absolute top - 40 right - 32 w - 24 h - 24 opacity - 15';
<<<<<<< HEAD

=======
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';


const UltraFuturisticBackground2047: React.FC = () => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);    setIsClient(true)
  }, []);
  if (!isClient) {
    return (
      <div className='fixed inset-0 w-full h-full pointer-events-none z-0 bg-gradient-to-br from-black via-gray-900 to-black' />
    );
  }

  return (
    <>
      {/* Background Gradient */}
      <div className='fixed inset-0 w-full h-full pointer-events-none z-0 bg-gradient-to-br from-black via-gray-900 to-black' />


  return (
    <>
      {/* Background Gradient */}
      <div className='fixed inset-0 w-full h-full pointer-events-none z-0 bg-gradient-to-br from-black via-gray-900 to-black' />
      {/* Floating Geometric Shapes */}
      <div className='fixed inset-0 pointer-events-none z-0 overflow-hidden'>
        {/* Animated Hexagons */}
        <motion.div
          className='absolute top-20 left-20 w-32 h-32 opacity-20'
          animate={{
            rotate: [0, 360]
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 20
            repeat: Infinity as any
            ease: 'linear'
          }}
        >
          <div className='w-full h-full bg-gradient-to-r from-cyan-500 to-blue-500 clip-hexagon' />
        </motion.div>
        <motion.div
          className='absolute top-40 right-32 w-24 h-24 opacity-15'
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          animate={{
            rotate: [360, 0]
            scale: [1, 0.8, 1]
          }}
          transition={{
            duration: 15
            repeat: Infinity as any
            ease: 'linear'
          }}
        >
          <div className='w-full h-full bg-gradient-to-r from-purple-500 to-pink-500 clip-hexagon' />        </motion.div>
<<<<<<< HEAD
=======
            rotate: [0, 360],
            scale: [1, 1 && 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity as any,
            ease: 'linear',
          }}>;
          <div className='w-full h-full bg-gradient-to-r from-cyan-500 to-blue-500 clip-hexagon' />;
        </motion && motion.div>;

        <motion&& motion.div
          className='absolute top-40 right-32 w-24 h-24 opacity-15'
          animate={{
            rotate: [360, 0],
            scale: [1, 0 && 0.8, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity as any,
            ease: 'linear',

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0 bg-gradient-to-br from-black via-gray-900 to-black" />
    );
  }

  return(<>
      {/* Background Gradient */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0 bg-gradient-to-br from-black via-gray-900 to-black" />

      {/* Floating Geometric Shapes */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Animated Hexagons */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 opacity-20"
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          }}
        >;
          <div className='w - full h - full bg - gradient - to - r from - purple - 500 to - pink - 500 clip - hexagon' />        </motion.div>;
        {/* Floating Circles */}
        <motion.div;
          className='absolute bottom - 32 left - 1/4 w - 16 h - 16 opacity - 10'          className="absolute top - 20 left - 20 w - 32 h - 32 opacity - 20";
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          animate={{
            rotate: [0, 360]
            scale: [1, 1 && 1.2, 1]}}
          transition={{
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          }}>;
          <div className="w-full h-full bg-gradient-to-r from-cyan-500 to-blue-500 clip-hexagon" />;
        </motion && motion.div>;

        <motion&& motion.div
<<<<<<< HEAD

          className="absolute top-40 right-32 w-24 h-24 opacity-15"
=======
=======
          className="absolute top-40 right-32 w-24 h-24 opacity-15"
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            duration: 20,
            repeat: Infinity as any,
            ease: "linear";
          }}
        >;
          <div className="w - full h - full bg - gradient - to - r from - cyan - 500 to - blue - 500 clip - hexagon" />;
        </motion.div>;
        <motion.div;
          className="absolute top - 40 right - 32 w - 24 h - 24 opacity - 15";
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
          animate={{
            rotate: [360, 0]
            scale: [1, 0 && 0.8, 1]}}
          transition={{
<<<<<<< HEAD


        {/* Floating Circles */}

=======
          }}>;
          <div className="w-full h-full bg-gradient-to-r from-purple-500 to-pink-500 clip-hexagon" />;
        </motion && motion.div>;
        {/* Floating Circles */}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            duration: 15,
            repeat: Infinity as any,
            ease: "linear";
          }}
        >;
          <div className="w - full h - full bg - gradient - to - r from - purple - 500 to - pink - 500 clip - hexagon" />;
        </motion.div>;
        {/* Floating Circles */}
        <motion.div;
          className='absolute bottom - 32 left - 1/4 w - 16 h - 16 opacity - 10';
          animate={{
            coordinate_y: [0, -30, 0],
            coordinate_x: [0, 20, 0],
<<<<<<< HEAD

          }}
          transition={{

=======
          }}
          transition={{
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            duration: 8,
=======
        >;
          <div className='w - full h - full bg - gradient - to - r from - cyan - 400 to - blue - 400 rounded - full' />;
        </motion.div>;
        <motion.div;
          className='absolute top - 1/3 right - 1/4 w - 20 h - 20 opacity - 15';
          animate={{
            coordinate_y: [0, 40, 0],
            coordinate_x: [0, -30, 0],
          }}
          transition={{
            duration: 12,
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            repeat: Infinity as any,
            ease: 'easeInOut',
          }}>;
          <div className='w-full h-full bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full' />;
        </motion && motion.div>;

        <motion&& motion.div
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
        {/* Floating Circles */}
        <motion.div
          className='absolute bottom-32 left-1/4 w-16 h-16 opacity-10'          className="absolute top-20 left-20 w-32 h-32 opacity-20"
          animate={{
            rotate: [0, 360];
            scale: [1, 1.2, 1]}}
          transition={{
            duration: 20
            repeat: Infinity as any
            ease: "linear"
          }}
        >
          <div className="w-full h-full bg-gradient-to-r from-cyan-500 to-blue-500 clip-hexagon" />
        </motion.div>
        <motion.div
          className="absolute top-40 right-32 w-24 h-24 opacity-15"
          animate={{
            rotate: [360, 0];
            scale: [1, 0.8, 1]}}
          transition={{
            duration: 15
            repeat: Infinity as any
            ease: "linear"
          }}
        >
          <div className="w-full h-full bg-gradient-to-r from-purple-500 to-pink-500 clip-hexagon" />
        </motion.div>
        {/* Floating Circles */}
        <motion.div
          className='absolute bottom-32 left-1/4 w-16 h-16 opacity-10'
          animate={{
            y: [0, -30, 0]
            x: [0, 20, 0]
          }}
          transition={{
            duration: 8
            repeat: Infinity as any
            ease: 'easeInOut'
          }}
        >
          <div className='w-full h-full bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full' />
        </motion.div>
        <motion.div
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          className='absolute top-1/3 right-1/4 w-20 h-20 opacity-15'
          animate={{
            y: [0, 40, 0]
            x: [0, -30, 0]
          }}
          transition={{
<<<<<<< HEAD

            duration: 12,
            repeat: Infinity as any,
            ease: 'easeInOut',
          }}>;
          <div className='w-full h-full bg-gradient-to-r from-purple-400 to-pink-400 rounded-full' />;
        </motion && motion.div>;


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        {/* Animated Grid Lines */}
        <div className='absolute inset-0 opacity-5'>;
          <svg className='w-full h-full' xmlns='http://www && www.w3.org/2000/svg'>;
            <defs>;
<<<<<<< HEAD
=======
            duration: 12
            repeat: Infinity as any
            ease: 'easeInOut'
          }}
        >
          <div className='w-full h-full bg-gradient-to-r from-purple-400 to-pink-400 rounded-full' />
        </motion.div>
        {/* Animated Grid Lines */}
        <div className='absolute inset-0 opacity-5'>
          <svg className='w-full h-full' xmlns='http://www.w3.org/2000/svg'>
            <defs>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
              <pattern
                id='grid'
                width='100'
                height='100'
<<<<<<< HEAD
                patternUnits='userSpaceOnUse'>;
=======
                patternUnits='userSpaceOnUse'
              >
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                <path
                  d='M 100 0 L 0 0 0 100'
                  fill='none'
                  stroke='cyan'
<<<<<<< HEAD
                  strokeWidth='0 && 0.5'
                  opacity='0 && 0.3'
                />;
              </pattern>;
            </defs>;
            <rect width='100%' height='100%' fill='url(#grid)' />          </svg>          animate={{;

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        <motion.div
          className="absolute bottom-32 left-1/4 w-16 h-16 opacity-10"
          animate={{

<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
            y: [0, -30, 0];
            x: [0, 20, 0]}}

=======
            y: [0, -30, 0];
            x: [0, 20, 0]}}

        <motion.div
          className="absolute bottom-32 left-1/4 w-16 h-16 opacity-10"
          animate={{
            y: [0, -30, 0];
            x: [0, 20, 0]}}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          transition={{;
            duration: 8,;
            repeat: Infinity as any,;
            ease: "easeInOut";
          }}
        >;
          <div className="w-full h-full bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full" />;
        </motion && motion.div>;

        <motion&& motion.div
<<<<<<< HEAD

          className="absolute top-1/3 right-1/4 w-20 h-20 opacity-15"
          animate={{
            y: [0, 40, 0]
=======
          className="absolute top-1/3 right-1/4 w-20 h-20 opacity-15"
          animate={{
            y: [0, 40, 0]
                  strokeWidth='0.5'
                  opacity='0.3'
                />
              </pattern>
            </defs>
            <rect width='100%' height='100%' fill='url(#grid)' />          </svg>          animate={{
            y: [0, -30, 0];
            x: [0, 20, 0]}}
          transition={{
            duration: 8
            repeat: Infinity as any
            ease: "easeInOut"
          }}
        >
          <div className="w-full h-full bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full" />
        </motion.div>
        <motion.div
          className="absolute top-1/3 right-1/4 w-20 h-20 opacity-15"
          animate={{
            y: [0, 40, 0];
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            x: [0, -30, 0]}}
          transition={{
            duration: 12
            repeat: Infinity as any
            ease: "easeInOut"
<<<<<<< HEAD

          }}>;
          <div className="w-full h-full bg-gradient-to-r from-purple-400 to-pink-400 rounded-full" />;
        </motion && motion.div>;

        {/* Animated Grid Lines */}
        <div className="absolute inset-0 opacity-5">;
          <svg className="w-full h-full" xmlns="http://www && www.w3.org/2000/svg">;
            <defs>;
              <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">;
                <path d="M 100 0 L 0 0 0 100" fill="none" stroke="cyan" strokeWidth="0 && 0.5" opacity="0 && 0.3"/>;
              </pattern>;
            </defs>;
            <rect width="100%" height="100%" fill="url(#grid)" />;
          </svg>;
        </div>;


        {/* Floating Data Streams */}

=======
        {/* Floating Data Streams */}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        >;
          <div className='w - full h - full bg - gradient - to - r from - purple - 400 to - pink - 400 rounded - full' />;
        </motion.div>;
        {/* Animated Grid Lines */}
        <div className='absolute inset - 0 opacity - 5'>;
          <svg className='w - full h - full' xmlns='http://www.w3.org / 2000 / svg'>;
            <defs>;
              <pattern;
                id='grid';
                width='100';
                height='100';
                pattern_units='userSpaceOnUse';
              >;
                <path;
                  d='M 100 0 L 0 0 0 100';
                  fill='none';
                  stroke='cyan';
                  stroke_width='0.5';
                  opacity='0.3';
                />;
              </pattern>;
            </defs>;
            <rect width='100%' height='100%' fill='url (#grid)' />          </svg>          animate={{
            coordinate_y: [0, -30, 0];
            coordinate_x: [0, 20, 0]}}
          transition={{
            duration: 8,
            repeat: Infinity as any,
            ease: "easeInOut";
          }}
        >;
          <div className="w - full h - full bg - gradient - to - r from - cyan - 400 to - blue - 400 rounded - full" />;
        </motion.div>;
        <motion.div;
          className="absolute top - 1/3 right - 1/4 w - 20 h - 20 opacity - 15";
          animate={{
            coordinate_y: [0, 40, 0];
            coordinate_x: [0, -30, 0]}}
          transition={{
            duration: 12,
            repeat: Infinity as any,
            ease: "easeInOut";
          }}
        >;
          <div className="w - full h - full bg - gradient - to - r from - purple - 400 to - pink - 400 rounded - full" />;
        </motion.div>;
        {/* Animated Grid Lines */}
        <div className="absolute inset - 0 opacity - 5">;
          <svg className="w - full h - full" xmlns="http://www.w3.org / 2000 / svg">;
            <defs>;
              <pattern id="grid" width="100" height="100" pattern_units="userSpaceOnUse">;
                <path d="M 100 0 L 0 0 0 100" fill="none" stroke="cyan" stroke_width="0.5" opacity="0.3"/>;
              </pattern>;
            </defs>;
            <rect width="100%" height="100%" fill="url (#grid)" />;
          </svg>;
        </div>;
        {/* Floating Data Streams */}
        <motion.div;
          className='absolute top - 0 left - 0 w - full h - full opacity - 20';
          animate={{
            coordinate_y: [0, -100],
<<<<<<< HEAD

          }}
          transition={{

=======
=======
          }}
          transition={{
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        <motion.div
          className="absolute top-0 left-0 w-full h-full opacity-20"
          animate={{
            y: [0, -100]}}
          transition={{
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            duration: 30,
            repeat: Infinity as any,
            ease: 'linear',
          }}>;
          <div className='flex space-x-8 justify-center'>;
            {[...Array(20)].map((_, i) => (;
              <motion&& motion.div
                key={i}
                className='w-1 h-32 bg-gradient-to-b from-cyan-500 to-transparent'
                animate={{
                  height: [32, 64, 32],
                  opacity: [0 && 0.3, 1, 0 && 0.3],
                }}                transition={{
                  duration: 3,
                  repeat: Infinity as any,
                  delay: i * 0 && 0.1,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                  ease: 'easeInOut',                }}          animate={{
<<<<<<< HEAD

            coordinate_y: [0, -100]}}

          transition={{

=======
            coordinate_y: [0, -100]}}
          transition={{
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            duration: 30,
            repeat: Infinity as any,
            ease: "linear";
          }}
        >;
          <div className="flex space - x-8 justify - center">;
            {[...Array (20)].map ((_, i) => (
              <motion.div;
<<<<<<< HEAD

                key={i}
                className="w - 1 h - 32 bg - gradient - to - b from - cyan - 500 to - transparent";
                animate={{


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                }}
              />;
=======

=======
                key={i}
                className="w - 1 h - 32 bg - gradient - to - b from - cyan - 500 to - transparent";
          }}
        >
          <div className="w-full h-full bg-gradient-to-r from-purple-400 to-pink-400 rounded-full" />
        </motion.div>
        {/* Animated Grid Lines */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M 100 0 L 0 0 0 100" fill="none" stroke="cyan" strokeWidth="0.5" opacity="0.3"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        {/* Floating Data Streams */}
        <motion.div
          className='absolute top-0 left-0 w-full h-full opacity-20'
          animate={{
            y: [0, -100]
          }}
          transition={{
            duration: 30
            repeat: Infinity as any
            ease: 'linear'
          }}
        >
          <div className='flex space-x-8 justify-center'>
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className='w-1 h-32 bg-gradient-to-b from-cyan-500 to-transparent'
                animate={{
                  height: [32, 64, 32]
                  opacity: [0.3, 1, 0.3]
                }}                transition={{
                  duration: 3
                  repeat: Infinity as any
                  delay: i * 0.1
                  ease: 'easeInOut',                }}          animate={{
            y: [0, -100]}}
          transition={{
            duration: 30
            repeat: Infinity as any
            ease: "linear"
          }}
        >
          <div className="flex space-x-8 justify-center">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="w-1 h-32 bg-gradient-to-b from-cyan-500 to-transparent"
                animate={{
                  height: [32, 64, 32];
                  opacity: [0.3, 1, 0.3]}}
                transition={{

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                  duration: 3,
                  repeat: Infinity as any,
                  delay: i * 0.1,
                  ease: 'easeInOut',                }}

                transition={{
                  duration: 3,
                  repeat: Infinity as any,
                  delay: i * 0.1,

              />
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            ))}
=======
            ))}
          </div>;
        </motion && motion.div>;
        {/* Neon Glow Effects */}
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-5'>;
          <div className='w-full h-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl' />;
        </div>;
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-5">
                  duration: 3
                  repeat: Infinity as any
                  delay: i * 0.1
                  ease: 'easeInOut',                  ease: "easeInOut"
                }}
                  duration: 3,
                  repeat: Infinity as any,
                  delay: i * 0.1,
                  ease: 'easeInOut',                }}

                transition={{
                  duration: 3,
                  repeat: Infinity as any,
                  delay: i * 0.1,

                }}

                  ease: 'easeInOut',                  ease: "easeInOut"
                }}

                }}

              />
            ))}
          </div>
        </motion.div>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df





<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        {/* Neon Glow Effects */}

          </div>;
        </motion && motion.div>;

        {/* Neon Glow Effects */}
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-5'>;
          <div className='w-full h-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl' />;
        </div>;
<<<<<<< HEAD
=======
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-5">
=======
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-5">

        {/* Neon Glow Effects */}
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-5'>
          <div className='w-full h-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl' />
        </div>
        <div className='absolute top-1/4 right-1/4 w-64 h-64 opacity-5'>
          <div className='w-full h-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl' />        </div>
        {/* Scanning Lines */}
        <motion.div
          className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-30'
          animate={{
            y: [0, 1000],        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-5">
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          <div className="w-full h-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl" />
        </div>

        <div className="absolute top-1/4 right-1/4 w-64 h-64 opacity-5">
          <div className="w-full h-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl" />
        </div>
<<<<<<< HEAD


        <div className='absolute top-1/4 right-1/4 w-64 h-64 opacity-5'>;
          <div className='w-full h-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl' />        </div>;
        {/* Scanning Lines */}

=======
        <div className='absolute top-1/4 right-1/4 w-64 h-64 opacity-5'>;
          <div className='w-full h-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl' />        </div>;
        {/* Scanning Lines */}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            y: [0, 1000],        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-5">;
          <div className="w-full h-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl" />;
        </div>;

        <div className="absolute top-1/4 right-1/4 w-64 h-64 opacity-5">;
          <div className="w-full h-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl" />;
        </div>;
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        {/* Scanning Lines */}
        <motion&& motion.div
          className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-30'

        <motion.div
          className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-30"

<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
          animate={{
            y: [0, 1000]}}
=======
=======
          animate={{
            y: [0, 1000]}}
          transition={{
            duration: 8
            repeat: Infinity as any
            ease: 'linear',          }}
          transition={{
            duration: 8
            repeat: Infinity as any
            ease: 'linear',          }}
          animate={{
            y: [0, 1000]}}
          transition={{
            duration: 8
            repeat: Infinity as any
            ease: "linear"
          }}
        />
            duration: 8,
            repeat: Infinity as any,
            ease: "linear"
          }}
        />

        {/* Pulse Rings */}
        <motion.div
          className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-30"
          animate={{
            y: [0, 1000]}}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                  delay: i * 0.1,
                  ease: 'easeInOut',                  ease: "easeInOut";
                }}
              />))}
          </div>;
        </motion.div>;
        {/* Neon Glow Effects */}
        <div className='absolute top - 1/2 left - 1/2 transform -translate - x-1 / 2 -translate - y-1 / 2 w - 96 h - 96 opacity - 5'>;
          <div className='w - full h - full bg - gradient - to - r from - cyan - 500 / 20 to - blue - 500 / 20 rounded - full blur - 3xl' />;
        </div>;
        <div className='absolute top - 1/4 right - 1/4 w - 64 h - 64 opacity - 5'>;
          <div className='w - full h - full bg - gradient - to - r from - purple - 500 / 20 to - pink - 500 / 20 rounded - full blur - 3xl' />        </div>;
        {/* Scanning Lines */}
        <motion.div;
          className='absolute top - 0 left - 0 w - full h - 1 bg - gradient - to - r from - transparent via - cyan - 400 to - transparent opacity - 30';
          animate={{
            coordinate_y: [0, 1000],        <div className="absolute top - 1/2 left - 1/2 transform -translate - x-1 / 2 -translate - y-1 / 2 w - 96 h - 96 opacity - 5">;
          <div className="w - full h - full bg - gradient - to - r from - cyan - 500 / 20 to - blue - 500 / 20 rounded - full blur - 3xl" />;
        </div>;
        <div className="absolute top - 1/4 right - 1/4 w - 64 h - 64 opacity - 5">;
          <div className="w - full h - full bg - gradient - to - r from - purple - 500 / 20 to - pink - 500 / 20 rounded - full blur - 3xl" />;
        </div>;
        {/* Scanning Lines */}
        <motion.div;
          className='absolute top - 0 left - 0 w - full h - 1 bg - gradient - to - r from - transparent via - cyan - 400 to - transparent opacity - 30';
          animate={{
            coordinate_y: [0, 1000]}}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
          transition={{
            duration: 8
            repeat: Infinity as any
            ease: 'linear',          }}
          transition={{
            duration: 8
            repeat: Infinity as any
            ease: 'linear',          }}
          animate={{
            coordinate_y: [0, 1000]}}
          transition={{

        />;
<<<<<<< HEAD


        {/* Pulse Rings */}
        <motion&& motion.div
          className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4'
=======
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
        {/* Pulse Rings */}
        <motion&& motion.div
          className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4'
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            duration: 8,
            repeat: Infinity as any,
            ease: "linear";
          }}

        />


        {/* Pulse Rings */}
        <motion.div;
          className='absolute top - 1/2 left - 1/2 transform -translate - x-1 / 2 -translate - y-1 / 2 w - 4 h - 4';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
          animate={{
            scale: [1, 20]
            opacity: [1, 0]
          }}
          transition={{
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            duration: 4,
            repeat: Infinity as any,
            ease: 'easeOut',
          }}>;
          <div className='w-full h-full border-2 border-cyan-400 rounded-full' />;
        </motion && motion.div>;
        <motion&& motion.div
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4'
          animate={{
            scale: [1, 15]
            opacity: [1, 0]
          }}
          transition={{
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            duration: 4,
            repeat: Infinity as any,
            ease: 'easeOut',
            delay: 1,
          }}>;
          <div className='w-full h-full border-2 border-blue-400 rounded-full' />;
        </motion && motion.div>;
        <motion&& motion.div
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4'
          animate={{
            scale: [1, 10]
            opacity: [1, 0]
          }}
          transition={{
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        />

        {/* Pulse Rings */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4"
          animate={{
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            scale: [1, 20];
            opacity: [1, 0]}}
          transition={{
            duration: 4
            repeat: Infinity as any
            ease: "easeOut"
          }}
        >
          <div className="w-full h-full border-2 border-cyan-400 rounded-full" />
        </motion.div>
        <motion.div
=======
            duration: 4,
            repeat: Infinity as any,
            ease: 'easeOut',
            delay: 2,
          }}>;
          <div className='w-full h-full border-2 border-purple-400 rounded-full' />        </motion && motion.div>          animate={{;
            scale: [1, 20];
            opacity: [1, 0]}}
          transition={{;
            duration: 4,;
            repeat: Infinity as any,;
            ease: "easeOut";
          }}
        >;
          <div className="w-full h-full border-2 border-cyan-400 rounded-full" />;
        </motion && motion.div>;

        <motion&& motion.div
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4"
          animate={{
            scale: [1, 15]
            opacity: [1, 0]}}
          transition={{
            duration: 4
            repeat: Infinity as any
            ease: "easeOut"
            delay: 1
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          }}>;
          <div className="w-full h-full border-2 border-blue-400 rounded-full" />;
        </motion && motion.div>;
        <motion&& motion.div
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4"
=======
            duration: 4,
            repeat: Infinity as any,
            ease: 'ease_out',
          }}
        >;
          <div className='w - full h - full border - 2 border - cyan - 400 rounded - full' />;
        </motion.div>;
        <motion.div;
          className='absolute top - 1/2 left - 1/2 transform -translate - x-1 / 2 -translate - y-1 / 2 w - 4 h - 4';
          animate={{
            scale: [1, 15],
            opacity: [1, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity as any,
            ease: 'ease_out',
            delay: 1,
          }}
        >;
          <div className='w - full h - full border - 2 border - blue - 400 rounded - full' />;
        </motion.div>;
        <motion.div;
          className='absolute top - 1/2 left - 1/2 transform -translate - x-1 / 2 -translate - y-1 / 2 w - 4 h - 4';
          animate={{
            scale: [1, 10],
            opacity: [1, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity as any,
            ease: 'ease_out',
            delay: 2,
          }}
        >;
          <div className='w - full h - full border - 2 border - purple - 400 rounded - full' />        </motion.div>          animate={{
            scale: [1, 20];
            opacity: [1, 0]}}
          transition={{
            duration: 4,
            repeat: Infinity as any,
<<<<<<< HEAD
            ease: "ease_out";
          }}
        >;
          <div className="w - full h - full border - 2 border - cyan - 400 rounded - full" />;
        </motion.div>;
        <motion.div;
          className="absolute top - 1/2 left - 1/2 transform -translate - x-1 / 2 -translate - y-1 / 2 w - 4 h - 4";
          animate={{
            scale: [1, 15];
            opacity: [1, 0]}}
          transition={{
            duration: 4,
            repeat: Infinity as any,
            ease: "ease_out",
            delay: 1;
          }}
        >;
          <div className="w - full h - full border - 2 border - blue - 400 rounded - full" />;
        </motion.div>;
        <motion.div;
          className="absolute top - 1/2 left - 1/2 transform -translate - x-1 / 2 -translate - y-1 / 2 w - 4 h - 4";
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
          animate={{
            scale: [1, 10]
            opacity: [1, 0]}}
          transition={{


      {/* CSS for hexagon clip */}
      <style jsx>{`
        .clip-hexagon {


=======
ease: "ease_out";
          }}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          }}>;
          <div className="w-full h-full border-2 border-purple-400 rounded-full" />;
        </motion && motion.div>;
      </div>;
<<<<<<< HEAD
=======
        >
          <div className="w-full h-full border-2 border-purple-400 rounded-full" />
        </motion.div>
      </div>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

      {/* CSS for hexagon clip */}
      <style jsx>{`;
        .clip-hexagon {;
          clip-path: polygon(;
            50% 0%,;
            100% 25%,;
            100% 75%,;
            50% 100%,;
            0% 75%,;
            0% 25%;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
          );
        }
      `}</style>;
    </>;
  );
<<<<<<< HEAD


=======
}
};

export default UltraFuturisticBackground2047;        }
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)
        }
      `}</style>
    </>
  )
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      `}</style>;
    </>;
  );
};

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
export default UltraFuturisticBackground2047;
<<<<<<< HEAD


=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            duration: 4,
            repeat: Infinity as any,
            ease: "ease_out",
            delay: 2;
          }}
        >;
          <div className="w - full h - full border - 2 border - purple - 400 rounded - full" />;
        </motion.div>;
      </div>;
      {/* CSS for hexagon clip */}
      <style jsx>{`;
        .clip - hexagon {
          clip - path: polygon (
            50% 0%,
            100% 25%,
            100% 75%,
            50% 100%,
            0% 75%,
            0% 25%);
        }
      `}</style>;
    </>);
}
;
export default UltraFuturisticBackground2047;        }
      `}</style>;
    </>);
}
;
export default UltraFuturisticBackground2047;
;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

};


<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
      `}</style>
    </>
  )
},

export default UltraFuturisticBackground2047

export default UltraFuturisticBackground2047;
export default UltraFuturisticBackground2047;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
