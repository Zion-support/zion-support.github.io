import React from 'react';

export default function AnimatedBackground() {_return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -inset-[20%] opacity-40 blur-3xl animate-[bgflow_20s_linear_infinite]" style={{
        background: 'radial-gradient(600px at 0% 0%, _#22d3ee 0%, _transparent 60%), _radial-gradient(600px at 100% 0%, _#a78bfa 0%, _transparent 60%), _radial-gradient(600px at 0% 100%, _#34d399 0%, _transparent 60%), _radial-gradient(600px at 100% 100%, _#f472b6 0%, _transparent 60%)'}} />
      <style jsx global>{_`
        @keyframes bgflow {
          0% { transform: translateY(0px) rotate(0deg);}
          50% {_transform: translateY(-20px) rotate(10deg);}
          100% {_transform: translateY(0px) rotate(0deg);}
        }
      `}</style>
    </div>
  );
}