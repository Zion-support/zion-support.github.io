<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

const UltraFuturisticBackground2047: React.FC = () => {


<<<<<<< HEAD
const UltraFuturisticBackground2047: React.FC = () => {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======


const UltraFuturisticBackground2047: React.FC = () => {


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const UltraFuturisticBackground2047: React.FC = () => {;
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {;
    setIsClient(true);    setIsClient(true);
<<<<<<< HEAD
<<<<<<< HEAD
    setIsClient(true)

    setIsClient(true)
  }, []);
  if (!isClient) {;
    return (
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

=======
    setIsClient(true)

<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }, []);
  if (!isClient) {;
    return (


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }





  return (
    <>;
      {/* Background Gradient */}
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      <div className='fixed inset-0 w-full h-full pointer-events-none z-0 bg-gradient-to-br from-black via-gray-900 to-black' />



=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


  return (
    <>
      {/* Background Gradient */}
<<<<<<< HEAD
      <div className='fixed inset-0 w-full h-full pointer-events-none z-0 bg-gradient-to-br from-black via-gray-900 to-black' />
<<<<<<< HEAD
      <div className='fixed inset-0 w-full h-full pointer-events-none z-0 bg-gradient-to-br from-black via-gray-900 to-black' />;

=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      <div className='fixed inset-0 w-full h-full pointer-events-none z-0 bg-gradient-to-br from-black via-gray-900 to-black' />;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      <div className='fixed inset-0 w-full h-full pointer-events-none z-0 bg-gradient-to-br from-black via-gray-900 to-black' />
      <div className='fixed inset-0 w-full h-full pointer-events-none z-0 bg-gradient-to-br from-black via-gray-900 to-black' />;
=======
=======
      <div className='fixed inset-0 w-full h-full pointer-events-none z-0 bg-gradient-to-br from-black via-gray-900 to-black' />;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {/* Floating Geometric Shapes */}
      <div className='fixed inset-0 pointer-events-none z-0 overflow-hidden'>;
        {/* Animated Hexagons */}
        <motion&& motion.div
          className='absolute top-20 left-20 w-32 h-32 opacity-20'
      <div className='fixed inset - 0 w - full h - full pointer - events - none z - 0 bg - gradient - to - br from - black via - gray - 900 to - black' />;
      {/* Floating Geometric Shapes */}
      <div className='fixed inset - 0 pointer - events - none z - 0 overflow - hidden'>;
        {/* Animated Hexagons */}
        <motion.div;
          className='absolute top - 20 left - 20 w - 32 h - 32 opacity - 20';
          animate={{
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        >;
          <div className='w - full h - full bg - gradient - to - r from - cyan - 500 to - blue - 500 clip - hexagon' />;
        </motion.div>;
        <motion.div;
          className='absolute top - 40 right - 32 w - 24 h - 24 opacity - 15';
<<<<<<< HEAD
<<<<<<< HEAD
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
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          }}
        >;
          <div className='w - full h - full bg - gradient - to - r from - purple - 500 to - pink - 500 clip - hexagon' />        </motion.div>;
        {/* Floating Circles */}
        <motion.div;
          className='absolute bottom - 32 left - 1/4 w - 16 h - 16 opacity - 10'          className="absolute top - 20 left - 20 w - 32 h - 32 opacity - 20";
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          animate={{
            rotate: [0, 360]
            scale: [1, 1 && 1.2, 1]}}
          transition={{
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          }}>;
          <div className="w-full h-full bg-gradient-to-r from-cyan-500 to-blue-500 clip-hexagon" />;
        </motion && motion.div>;
        <motion&& motion.div
<<<<<<< HEAD
<<<<<<< HEAD
          className="absolute top-40 right-32 w-24 h-24 opacity-15"
=======

          className="absolute top-40 right-32 w-24 h-24 opacity-15"
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

          className="absolute top-40 right-32 w-24 h-24 opacity-15"
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            duration: 20,
            repeat: Infinity as any,
            ease: "linear";
          }}
        >;
          <div className="w - full h - full bg - gradient - to - r from - cyan - 500 to - blue - 500 clip - hexagon" />;
        </motion.div>;
        <motion.div;
          className="absolute top - 40 right - 32 w - 24 h - 24 opacity - 15";
          animate={{
            rotate: [360, 0]
            scale: [1, 0 && 0.8, 1]}}
          transition={{
<<<<<<< HEAD
<<<<<<< HEAD
          }}>;
          <div className="w-full h-full bg-gradient-to-r from-purple-500 to-pink-500 clip-hexagon" />;
        </motion && motion.div>;
        {/* Floating Circles */}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


        {/* Floating Circles */}

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
          }}
          transition={{
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

          }}
          transition={{

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            duration: 8,
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            repeat: Infinity as any,
            ease: 'easeInOut',
          }}>;
          <div className='w-full h-full bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full' />;
        </motion && motion.div>;
        <motion&& motion.div
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
          className='absolute top-1/3 right-1/4 w-20 h-20 opacity-15'
          animate={{
            y: [0, 40, 0]
            x: [0, -30, 0]
          }}
          transition={{
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

            duration: 12,
            repeat: Infinity as any,
            ease: 'easeInOut',
          }}>;
          <div className='w-full h-full bg-gradient-to-r from-purple-400 to-pink-400 rounded-full' />;
        </motion && motion.div>;


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {/* Animated Grid Lines */}
        <div className='absolute inset-0 opacity-5'>;
          <svg className='w-full h-full' xmlns='http://www && www.w3.org/2000/svg'>;
            <defs>;
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
              <pattern
                id='grid'
                width='100'
                height='100'
                patternUnits='userSpaceOnUse'
              >
                <path
                  d='M 100 0 L 0 0 0 100'
                  fill='none'
                  stroke='cyan'
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
                  strokeWidth='0 && 0.5'
                  opacity='0 && 0.3'
                />;
              </pattern>;
            </defs>;
            <rect width='100%' height='100%' fill='url(#grid)' />          </svg>          animate={{;

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <motion.div
          className="absolute bottom-32 left-1/4 w-16 h-16 opacity-10"
          animate={{

<<<<<<< HEAD
<<<<<<< HEAD
            y: [0, -30, 0];
            x: [0, 20, 0]}}

        <motion.div
          className="absolute bottom-32 left-1/4 w-16 h-16 opacity-10"
          animate={{
            y: [0, -30, 0];
            x: [0, 20, 0]}}
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
            y: [0, -30, 0];
            x: [0, 20, 0]}}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
            y: [0, -30, 0];
            x: [0, 20, 0]}}

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

          className="absolute top-1/3 right-1/4 w-20 h-20 opacity-15"
          animate={{
            y: [0, 40, 0]
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            x: [0, -30, 0]}}
          transition={{
            duration: 12
            repeat: Infinity as any
            ease: "easeInOut"
<<<<<<< HEAD
<<<<<<< HEAD
        {/* Floating Data Streams */}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
          }}
          transition={{
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

          }}
          transition={{

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <motion.div
          className="absolute top-0 left-0 w-full h-full opacity-20"
        >
          <div className=&quot;w-full h-full bg-gradient-to-r from-cyan-500 to-blue-500 clip-hexagon&quot; />
        </motion.div>

        <motion.div
          className=&quot;absolute top-40 right-32 w-24 h-24 opacity-15&quot;
          animate={{
            rotate: [360, 0],
            scale: [1, 0.8, 1]}}
          transition={{
            duration: 15,
            repeat: Infinity as any,
            ease: &quot;linear&quot;
          }}
        >
          <div className=&quot;w-full h-full bg-gradient-to-r from-purple-500 to-pink-500 clip-hexagon&quot; />
        </motion.div>

        {_/* Floating Circles */}
        <motion.div
          className=&quot;absolute bottom-32 left-1/4 w-16 h-16 opacity-10&quot;
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0]}}
          transition={{
            duration: 8,
            repeat: Infinity as any,
            ease: &quot;easeInOut&quot;
          }}
        >
          <div className=&quot;w-full h-full bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full&quot; />
        </motion.div>

        <motion.div
          className=&quot;absolute top-1/3 right-1/4 w-20 h-20 opacity-15&quot;
          animate={{
            y: [0, 40, 0],
            x: [0, -30, 0]}}
          transition={{
            duration: 12,
            repeat: Infinity as any,
            ease: &quot;easeInOut&quot;
          }}
        >
          <div className=&quot;w-full h-full bg-gradient-to-r from-purple-400 to-pink-400 rounded-full&quot; />
        </motion.div>

        {/* Animated Grid Lines */}
        <div className=&quot;absolute inset-0 opacity-5&quot;>
          <svg className=&quot;w-full h-full&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;>
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
          className=&quot;absolute top-0 left-0 w-full h-full opacity-20&quot;

          animate={{
            y: [0, -100]}}
          transition={{
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
                  ease: 'easeInOut',                }}          animate={{
<<<<<<< HEAD
<<<<<<< HEAD
            coordinate_y: [0, -100]}}
          transition={{
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

            coordinate_y: [0, -100]}}

          transition={{

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            duration: 30,
            repeat: Infinity as any,
            ease: "linear";
          }}
        >;
          <div className="flex space - x-8 justify - center">;
            {[...Array (20)].map ((_, i) => (
              <motion.div;
<<<<<<< HEAD
<<<<<<< HEAD
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

=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                key={i}
                className="w - 1 h - 32 bg - gradient - to - b from - cyan - 500 to - transparent";
                animate={{


<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                }}
              />;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                }}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
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
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            ))}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36





<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            ))}
          </div>
        </motion.div>





>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {/* Neon Glow Effects */}

          </div>;
        </motion && motion.div>;

        {/* Neon Glow Effects */}
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-5'>;
          <div className='w-full h-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl' />;
        </div>;
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-5">
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-5">
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <div className="w-full h-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl" />
        </div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 opacity-5">
          <div className="w-full h-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl" />
        </div>
<<<<<<< HEAD
<<<<<<< HEAD
        <div className='absolute top-1/4 right-1/4 w-64 h-64 opacity-5'>;
          <div className='w-full h-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl' />        </div>;
        {/* Scanning Lines */}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


        <div className='absolute top-1/4 right-1/4 w-64 h-64 opacity-5'>;
          <div className='w-full h-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl' />        </div>;
        {/* Scanning Lines */}

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            y: [0, 1000],        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-5">;
          <div className="w-full h-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl" />;
        </div>;
        <div className="absolute top-1/4 right-1/4 w-64 h-64 opacity-5">;
          <div className="w-full h-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl" />;
        </div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        {/* Scanning Lines */}
        <motion&& motion.div
          className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-30'

        <motion.div
          className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-30"

<<<<<<< HEAD
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


        {/* Scanning Lines */}
        <motion&& motion.div
          className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-30'
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
            duration: 8
            repeat: Infinity as any
            ease: "linear"
          }}
        />
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
          transition={{
            duration: 8
            repeat: Infinity as any
            ease: 'linear',          }}
          transition={{
            duration: 8
            repeat: Infinity as any
            ease: 'linear',          }}
          animate={{
<<<<<<< HEAD
            coordinate_y: [0, 1000]}}
          transition={{

        />;
<<<<<<< HEAD
        {/* Pulse Rings */}
        <motion&& motion.div
          className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4'
=======
=======
            y: [0, 1000]}}
          transition={{

        />;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


        {/* Pulse Rings */}
        <motion&& motion.div
          className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4'
=======
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            duration: 8,
            repeat: Infinity as any,
            ease: "linear";
          }}

        />


=======
            duration: 8,
            repeat: Infinity as any,
            ease: "linear"
          }}
        />


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {/* Pulse Rings */}
        <motion.div;
          className='absolute top - 1/2 left - 1/2 transform -translate - x-1 / 2 -translate - y-1 / 2 w - 4 h - 4';
          animate={{
            scale: [1, 20]
            opacity: [1, 0]
          }}
          transition={{
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            duration: 4,
            repeat: Infinity as any,
            ease: 'easeOut',
          }}>;
          <div className='w-full h-full border-2 border-cyan-400 rounded-full' />;
        </motion && motion.div>;
        <motion&& motion.div
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4'
          animate={{
            scale: [1, 15]
            opacity: [1, 0]
          }}
          transition={{
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            duration: 4,
            repeat: Infinity as any,
            ease: 'easeOut',
            delay: 1,
          }}>;
          <div className='w-full h-full border-2 border-blue-400 rounded-full' />;
        </motion && motion.div>;
        <motion&& motion.div
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4'
          animate={{
            scale: [1, 10]
            opacity: [1, 0]
          }}
          transition={{
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        />
        {/* Pulse Rings */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4"
          animate={{
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          }}>;
          <div className="w-full h-full border-2 border-blue-400 rounded-full" />;
        </motion && motion.div>;
        <motion&& motion.div
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4"
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
<<<<<<< HEAD
ease: "ease_out";
          }}
=======
            ease: "ease_out";
          }}
<<<<<<< HEAD
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
          animate={{
            scale: [1, 10]
            opacity: [1, 0]}}
          transition={{


=======
            ease: "ease_out";
          }}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {/* CSS for hexagon clip */}
      <style jsx>{`
        .clip-hexagon {


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          }}>;
          <div className="w-full h-full border-2 border-purple-400 rounded-full" />;
        </motion && motion.div>;
      </div>;
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        >
          <div className="w-full h-full border-2 border-purple-400 rounded-full" />
        </motion.div>
      </div>

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
          );
        }
      `}</style>;
    </>;
  );
<<<<<<< HEAD
<<<<<<< HEAD
}
};

export default UltraFuturisticBackground2047;        }
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)
        }
      `}</style>
    </>
  )
}
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      `}</style>;
    </>;
  );
};
<<<<<<< HEAD
export default UltraFuturisticBackground2047;
<<<<<<< HEAD
=======


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
export default UltraFuturisticBackground2047;


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
export default UltraFuturisticBackground2047;        }
      `}</style>;
    </>);
}
;
export default UltraFuturisticBackground2047;
;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

};


<<<<<<< HEAD
      `}</style>
    </>
  )
},

export default UltraFuturisticBackground2047

export default UltraFuturisticBackground2047;
export default UltraFuturisticBackground2047;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
=======
;
export default UltraFuturisticBackground2047;
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

};

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
