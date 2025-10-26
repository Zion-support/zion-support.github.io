'use client';'
import React from 'react;'

const FuturisticBackground: React.FC = () => {
  return ()
    <div className="fixed inset-0 -z-10 overflow-hidden"></div>""
      {/* Animated gradient backgrounds */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" /></div>""
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} /></div>"'"'
      
      {/* Floating particles */}
      <div className="absolute inset-0"></div>""
        {[...Array(20)].map((_, i) => ()
          <div,
key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse""
            style={{
              left: `${Math.random() * 100}%`,``
              top: `${Math.random() * 100}%`,``
              animationDelay: `${Math.random() * 3}s`,``
              animationDuration: `${2 + Math.random() * 3}s`,``
            }}
          /></div>
        ))}
      </div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:50px_50px]" /></div>""
    </div>
  );
};

export default FuturisticBackground;