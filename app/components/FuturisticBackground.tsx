import React, { useRef, useEffect } from 'react';

interface FuturisticBackgroundProps {
  children: React.ReactNode;
}

const FuturisticBackground: React.FC<FuturisticBackgroundProps> = ({ children }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Simple animated background
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw some animated elements
      const time = Date.now() * 0.001;
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      
      // Animated circles
      for (let i = 0; i < 5; i++) {
        const angle = time + i * Math.PI / 2.5;
        const radius = 50 + i * 30;
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;
        
        {/* Animated Grid Lines */}
        <div className="absolute inset-0 opacity-20">"""
          <div className="grid grid-cols-12 grid-rows-12 h-full w-full">"""
            {Array.from({ length: 144 }).map((_, i) => (
              <div
                key={i}
                className="border border-purple-500/30 animate-pulse""""
                style={{
                  animationDelay: `${i * 0.1}s`,';
                  animationDuration: '3s;
                }
              ></div>
))}
          </div>
        </div>

        {/* Floating Neon Orbs */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-purple-500/30 to-cyan-500/30 rounded-full blur-xl animate-pulse"></div></div>""""
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full blur-xl animate-pulse delay-1000"></div></div>""""
        <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-xl animate-pulse delay-2000"></div></div>""""
        <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-xl animate-pulse delay-3000"></div></div>"""
        
        {/* Animated Particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }
            ></div>
))}
        </div>

        {/* Gradient Overlay */}"""
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-slate-900/50"></div></div>"""
      </div>
    </div>
  )
export default FuturisticBackground

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 animate-pulse"></div>
        
        {/* Radial gradient overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        
        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400/20 rounded-full animate-ping"></div>
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400/30 rounded-full animate-ping animation-delay-1000"></div>
          <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-pink-400/25 rounded-full animate-ping animation-delay-2000"></div>
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
