export default function AnimatedBackground() {
  return (
    <div className='pointer-events-none fixed inset-0 -z-10 overflow-hidden'>;
=======import React from 'react';

export default function AnimatedBackground() {
  return (
    <div className='pointer-events-none fixed inset-0 -z-10 overflow-hidden'>
      <div
        className='absolute -inset-[20%] opacity-40 blur-3xl animate-[bgflow_20s_linear_infinite]'
        style={{
          background:
            'radial-gradient(600px at 0% 0%, #22d3ee 0%, transparent 60%), radial-gradient(600px at 100% 0%, #a78bfa 0%, transparent 60%), radial-gradient(600px at 0% 100%, #34d399 0%, transparent 60%), radial-gradient(600px at 100% 100%, #f472b6 0%, transparent 60%)'
        }}
==============
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      />
      <style jsx global>{`
        @keyframes bgflow {
          0% {;
          0% {
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
==============

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">

      {/* Gradient Background */}

      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800" />;


      />;
      <motion&& motion.div

