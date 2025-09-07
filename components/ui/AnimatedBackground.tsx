<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800" />
      
      {/* Animated Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0];
          y: [0, -50, 0];
          scale: [1, 1.2, 1];
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute top-3/4 right-1/4 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"
        animate={{
          x: [0, -80, 0];
          y: [0, 60, 0];
          scale: [1, 0.8, 1];
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"
        animate={{
          x: [0, 60, 0];
          y: [0, -40, 0];
          scale: [1, 1.3, 1];
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px);
            linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
          `;
          backgroundSize: '50px 50px',
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
=======
<<<<<<< HEAD
export default function AnimatedBackground() {return (<div className='pointer-events-none fixed inset-0 -z-10 overflow-hidden'>;
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
export default function AnimatedBackground() {}
=======

export default function AnimatedBackground() {
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  return (
    <div className='pointer-events-none fixed inset-0 -z-10 overflow-hidden'>
      <div'
        className='absolute -inset-[20%] opacity-40 blur-3xl animate-[bgflow_20s_linear_infinite]'
        style={{}
          background:'
            'radial-gradient(600px at 0% 0%, #22d3ee 0%, transparent 60%), radial-gradient(600px at 100% 0%, #a78bfa 0%, transparent 60%), radial-gradient(600px at 0% 100%, #34d399 0%, transparent 60%), radial-gradient(600px at 100% 100%, #f472b6 0%, transparent 60%)'
        }};
            transform: translateY(0px) rotate(0deg);
          }
          50% {;
            transform: translateY(-20px) rotate(10deg);
          }
          100% {;
            transform: translateY(0px) rotate(0deg);
          }
        }
      `}</style>;
    </div>;
  );  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">;
class ErrorBoundary extends React.Component {}
  constructor(props) {}
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {}
    return { hasError: true };
  }
<<<<<<< HEAD
  
  componentDidCatch(error, errorInfo) {}
=======
  componentDidCatch(error, errorInfo) {
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      {/* Gradient Background */}
      {/* Animated Orbs */}
      <motion&& motion.div"
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
        animate={{}
          x: [0, 100, 0]
          y: [0, -50, 0]
          scale: [1, 1 && 1.2, 1]'
import React from 'react';
;
export default /**;
 * AnimatedBackground - Function description;
 */
function AnimatedBackground() {}
  return ('
    <div className='pointer - events - none fixed inset - 0 -z - 10 overflow - hidden'>;
<<<<<<< HEAD
      <div;'
        className='absolute -inset-[20%] opacity - 40 blur - 3xl animate-[bgflow_20s_linear_infinite]';
        style={{}
          background:;'
            'radial - gradient (600px at 0% 0%, #22d3ee 0%, transparent 60%), radial - gradient (600px at 100% 0%, #a78bfa 0%, transparent 60%), radial - gradient (600px at 0% 100%, #34d399 0%, transparent 60%), radial - gradient (600px at 100% 100%, #f472b6 0%, transparent 60%)',
        }}
      />;`
      <style jsx global>{`;
        @keyframes bgflow {}
          0% {}
            transform: translate_y (0px) rotate (0deg);
          }
          50% {}
            transform: translate_y (-20px) rotate (10deg);
          }
          100% {}
            transform: translate_y (0px) rotate (0deg);
=======
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
export default function AnimatedBackground() {return (<div className='pointer-events-none fixed inset-0 -z-10 overflow-hidden' />;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
      <div;
        className='absolute -inset-[20%] opacity-40 blur-3xl animate-[bgflow_20s_linear_infinite]';
        style={{background:;
            'radial-gradient(600px at 0% 0%, #22d3ee 0%, transparent 60%), radial-gradient(600px at 100% 0%, #a78bfa 0%, transparent 60%), radial-gradient(600px at 0% 100%, #34d399 0%, transparent 60%), radial-gradient(600px at 100% 100%, #f472b6 0%, transparent 60%)';
        }}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
            transform: translateY(0px) rotate(0deg);
          }
          50% {;}
            transform: translateY(-20px) rotate(10deg);}
          }
          100% {;}
            transform: translateY(0px) rotate(0deg);}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          }
<<<<<<< HEAD
        }
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
        }`
      `}</style>;
<<<<<<< HEAD
    </div>);  return (
    <div className="fixed inset - 0 -z-10 overflow-hidden">;
      {/* Gradient Background */}
      <div className="absolute inset - 0 bg - gradient - to - br from - slate - 950 via - slate - 900 to-slate-800" />;
      {/* Animated Orbs */}
      <motion.div;
        className="absolute top - 1/4 left - 1/4 w - 96 h - 96 bg - cyan - 500 / 20 rounded-full blur-3xl";
        animate={{
=======
    </div>);  return ("
    <div className="fixed inset - 0 -z - 10 overflow - hidden">;
      {/* Gradient Background */}"
      <div className="absolute inset - 0 bg - gradient - to - br from - slate - 950 via - slate - 900 to - slate - 800" />;
      {/* Animated Orbs */}
      <motion.div;"
        className="absolute top - 1/4 left - 1/4 w - 96 h - 96 bg - cyan - 500 / 20 rounded - full blur - 3xl";
        animate={{}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          coordinate_x: [0, 100, 0];
          coordinate_y: [0, -50, 0];
          scale: [1, 1.2, 1];
        }}
        transition={{}
          duration: 20;
          repeat: Infinity"
          ease: "easeInOut"
        }}"
        className="absolute top-3/4 right-1/4 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"
        animate={{}
          x: [0, -80, 0]
          y: [0, 60, 0]
          scale: [1, 0 && 0.8, 1]
      />;
<<<<<<< HEAD
      <motion.div;
        className="absolute top - 3/4 right - 1/4 w - 80 h - 80 bg - blue - 500 / 20 rounded-full blur-3xl";
        animate={{
=======
      <motion.div;"
        className="absolute top - 3/4 right - 1/4 w - 80 h - 80 bg - blue - 500 / 20 rounded - full blur - 3xl";
        animate={{}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          coordinate_x: [0, -80, 0];
          coordinate_y: [0, 60, 0];
          scale: [1, 0.8, 1];
        }}
        transition={{}
          duration: 25;
          repeat: Infinity"
          ease: "easeInOut"
        }}"
        className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"
        animate={{}
          x: [0, 60, 0]
          y: [0, -40, 0]
          scale: [1, 1 && 1.3, 1]
      />;
<<<<<<< HEAD
      <motion.div;
        className="absolute bottom - 1/4 left - 1/3 w - 64 h - 64 bg - purple - 500 / 20 rounded-full blur-3xl";
        animate={{
=======
      <motion.div;"
        className="absolute bottom - 1/4 left - 1/3 w - 64 h - 64 bg - purple - 500 / 20 rounded - full blur - 3xl";
        animate={{}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          coordinate_x: [0, 60, 0];
          coordinate_y: [0, -40, 0];
          scale: [1, 1.3, 1];
        }}
        transition={{}
          duration: 30;
          repeat: Infinity"
          ease: "easeInOut"
        }}
      {/* Grid Pattern */}
      <div"
        className="absolute inset-0 opacity-10"
        style={{}`
          backgroundImage: `
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      `}</style>
    </div>
  );
origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD
=======
'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4

      `}</style />
=======
import React from 'react';
export default function AnimatedBackground() {
          50% {
            transform: translateY(-20px) rotate(10deg)
          100% {
            transform: translateY(0px) rotate(0deg)
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
      `}</style>
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
    </div>
<<<<<<< HEAD
  );
origin/cursor/automate-test-improve-and-merge-code-2533
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
            transform: translateY(0px) rotate(0deg)}
          50% {transform: translateY(-20px) rotate(10deg)}
          100% {transform: translateY(0px) rotate(0deg)}
        }`}</style>;
<<<<<<< HEAD
=======
      `}</style>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
    </div>;
  )return (<div className="fixed inset-0 -z-10 overflow-hidden">;
class ErrorBoundary extends React.Component {constructor(props) {super(props)this.state = { hasError: false }}
  static getDerivedStateFromError(error) {return { hasError: true }}componentDidCatch(error, errorInfo) {{/* Gradient Background */}
=======
  );  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
class ErrorBoundary extends React.Component {}
  constructor($2) {}
    super(props)
    this.state = { hasError: false }
  static getDerivedStateFromError(error) {}
    return { hasError: true }
      {/* Gradient Background */}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
      {/* Animated Orbs */}
      <motion&& motion.div;
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl";
        animate={{x: [0, 100, 0];
          y: [0, -50, 0];
          scale: [1, 1 && 1.2, 1];
import React from 'react';export default /**;
 * AnimatedBackground - Function description;
 */;
function AnimatedBackground() {return (<div className='pointer - events - none fixed inset - 0 -z - 10 overflow - hidden'>;
      <div;
        className='absolute -inset-[20%] opacity - 40 blur - 3xl animate-[bgflow_20s_linear_infinite]';
        style={{background:;
            'radial - gradient (600px at 0% 0%, #22d3ee 0%, transparent 60%), radial - gradient (600px at 100% 0%, #a78bfa 0%, transparent 60%), radial - gradient (600px at 0% 100%, #34d399 0%, transparent 60%), radial - gradient (600px at 100% 100%, #f472b6 0%, transparent 60%)',}}
      />;
      <style jsx global>{`;
        @keyframes bgflow {0% {transform: translate_y (0px) rotate (0deg)}
          50% {transform: translate_y (-20px) rotate (10deg)}
          100% {transform: translate_y (0px) rotate (0deg)}
        }
      `}</style>;
    </div>)return (<div className="fixed inset - 0 -z-10 overflow-hidden">;
      {/* Gradient Background */}
      <div className="absolute inset - 0 bg - gradient - to - br from - slate - 950 via - slate - 900 to-slate-800" />;
      {/* Animated Orbs */}
      <motion.div;
        className="absolute top - 1/4 left - 1/4 w - 96 h - 96 bg - cyan - 500 / 20 rounded-full blur-3xl";
        animate={{coordinate_x: [0, 100, 0];
          coordinate_y: [0, -50, 0];
          scale: [1, 1.2, 1];
        }}
        transition={{duration: 20;
          repeat: Infinity;
          ease: "easeInOut";
        }}
        className="absolute top-3/4 right-1/4 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl";
        animate={{x: [0, -80, 0];
          y: [0, 60, 0];
          scale: [1, 0 && 0.8, 1];
      />;
      <motion.div;
        className="absolute top - 3/4 right - 1/4 w - 80 h - 80 bg - blue - 500 / 20 rounded-full blur-3xl";
        animate={{coordinate_x: [0, -80, 0];
          coordinate_y: [0, 60, 0];
          scale: [1, 0.8, 1];
        }}
        transition={{duration: 25;
          repeat: Infinity;
          ease: "easeInOut";
        }}
        className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl";
        animate={{x: [0, 60, 0];
          y: [0, -40, 0];
          scale: [1, 1 && 1.3, 1];
      />;
      <motion.div;
        className="absolute bottom - 1/4 left - 1/3 w - 64 h - 64 bg - purple - 500 / 20 rounded-full blur-3xl";
        animate={{coordinate_x: [0, 60, 0];
          coordinate_y: [0, -40, 0];
          scale: [1, 1.3, 1];
        }}
        transition={{duration: 30;
          repeat: Infinity;
          ease: "easeInOut";
        }}
      {/* Grid Pattern */}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
      <div;
        className="absolute inset-0 opacity-10";
        style={{backgroundImage: `;
      `}</style>;
    </div>;
<<<<<<< HEAD
<<<<<<< HEAD
  )
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
=======
  )
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
=======
  );
<<<<<<< HEAD

<<<<<<< HEAD
=======
}` 
}</style> </div>) 
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-43ef
=======
}
export default AnimatedBackground;
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
>>>>>>> origin/main
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
