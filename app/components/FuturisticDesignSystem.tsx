import React from 'react';

// Futuristic Design System Component
export const FuturisticDesignSystem: React.FC = () => {
  return (
    <style jsx global>{`
      /* Futuristic Design System */
      
      /* Neon Glow Effects */
      .neon-glow {
        box-shadow: 
          0 0 5px currentColor,
          0 0 10px currentColor,
          0 0 15px currentColor,
          0 0 20px currentColor;
        animation: neon-flicker 2s infinite alternate;
      }
      
      .neon-glow-blue {
        color: #00f5ff;
        text-shadow: 
          0 0 5px #00f5ff,
          0 0 10px #00f5ff,
          0 0 15px #00f5ff,
          0 0 20px #00f5ff;
        animation: neon-flicker 2s infinite alternate;
      }
      
      .neon-glow-purple {
        color: #bf00ff;
        text-shadow: 
          0 0 5px #bf00ff,
          0 0 10px #bf00ff,
          0 0 15px #bf00ff,
          0 0 20px #bf00ff;
        animation: neon-flicker 2s infinite alternate;
      }
      
      .neon-glow-green {
        color: #00ff41;
        text-shadow: 
          0 0 5px #00ff41,
          0 0 10px #00ff41,
          0 0 15px #00ff41,
          0 0 20px #00ff41;
        animation: neon-flicker 2s infinite alternate;
      }
      
      @keyframes neon-flicker {
        0%, 18%, 22%, 25%, 53%, 57%, 100% {
          text-shadow: 
            0 0 5px currentColor,
            0 0 10px currentColor,
            0 0 15px currentColor,
            0 0 20px currentColor;
        }
        20%, 24%, 55% {
          text-shadow: none;
        }
      }
      
      /* Cyber Grid Background */
      .cyber-grid {
        background-image: 
          linear-gradient(rgba(0, 245, 255, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 245, 255, 0.1) 1px, transparent 1px);
        background-size: 50px 50px;
        animation: grid-move 20s linear infinite;
      }
      
      @keyframes grid-move {
        0% { background-position: 0 0; }
        100% { background-position: 50px 50px; }
      }
      
      /* Holographic Effects */
      .holographic {
        background: linear-gradient(
          45deg,
          #ff006e,
          #8338ec,
          #3a86ff,
          #06ffa5,
          #ffbe0b,
          #fb5607
        );
        background-size: 400% 400%;
        animation: holographic-shift 3s ease-in-out infinite;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
      
      @keyframes holographic-shift {
        0%, 100% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
      }
      
      /* Glitch Effects */
      .glitch {
        position: relative;
        animation: glitch-skew 1s infinite linear alternate-reverse;
      }
      
      .glitch::before,
      .glitch::after {
        content: attr(data-text);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
      
      .glitch::before {
        animation: glitch-anim 5s infinite linear alternate-reverse;
        color: #ff006e;
        z-index: -1;
      }
      
      .glitch::after {
        animation: glitch-anim2 1s infinite linear alternate-reverse;
        color: #00f5ff;
        z-index: -2;
      }
      
      @keyframes glitch-skew {
        0% { transform: skew(0deg); }
        10% { transform: skew(-2deg); }
        20% { transform: skew(2deg); }
        30% { transform: skew(0deg); }
        40% { transform: skew(1deg); }
        50% { transform: skew(-1deg); }
        60% { transform: skew(0deg); }
        70% { transform: skew(-1deg); }
        80% { transform: skew(1deg); }
        90% { transform: skew(0deg); }
        100% { transform: skew(0deg); }
      }
      
      @keyframes glitch-anim {
        0% { clip-path: inset(40% 0 61% 0); }
        5% { clip-path: inset(92% 0 1% 0); }
        10% { clip-path: inset(43% 0 1% 0); }
        15% { clip-path: inset(25% 0 58% 0); }
        20% { clip-path: inset(54% 0 7% 0); }
        25% { clip-path: inset(28% 0 32% 0); }
        30% { clip-path: inset(84% 0 2% 0); }
        35% { clip-path: inset(27% 0 60% 0); }
        40% { clip-path: inset(75% 0 7% 0); }
        45% { clip-path: inset(2% 0 60% 0); }
        50% { clip-path: inset(25% 0 30% 0); }
        55% { clip-path: inset(40% 0 2% 0); }
        60% { clip-path: inset(25% 0 30% 0); }
        65% { clip-path: inset(75% 0 7% 0); }
        70% { clip-path: inset(90% 0 2% 0); }
        75% { clip-path: inset(0% 0 60% 0); }
        80% { clip-path: inset(25% 0 30% 0); }
        85% { clip-path: inset(40% 0 2% 0); }
        90% { clip-path: inset(25% 0 30% 0); }
        95% { clip-path: inset(75% 0 7% 0); }
        100% { clip-path: inset(40% 0 61% 0); }
      }
      
      @keyframes glitch-anim2 {
        0% { clip-path: inset(25% 0 30% 0); }
        5% { clip-path: inset(40% 0 2% 0); }
        10% { clip-path: inset(25% 0 30% 0); }
        15% { clip-path: inset(75% 0 7% 0); }
        20% { clip-path: inset(90% 0 2% 0); }
        25% { clip-path: inset(0% 0 60% 0); }
        30% { clip-path: inset(25% 0 30% 0); }
        35% { clip-path: inset(40% 0 2% 0); }
        40% { clip-path: inset(25% 0 30% 0); }
        45% { clip-path: inset(75% 0 7% 0); }
        50% { clip-path: inset(90% 0 2% 0); }
        55% { clip-path: inset(0% 0 60% 0); }
        60% { clip-path: inset(25% 0 30% 0); }
        65% { clip-path: inset(40% 0 2% 0); }
        70% { clip-path: inset(25% 0 30% 0); }
        75% { clip-path: inset(75% 0 7% 0); }
        80% { clip-path: inset(90% 0 2% 0); }
        85% { clip-path: inset(0% 0 60% 0); }
        90% { clip-path: inset(25% 0 30% 0); }
        95% { clip-path: inset(40% 0 2% 0); }
        100% { clip-path: inset(25% 0 30% 0); }
      }
      
      /* Matrix Rain Effect */
      .matrix-rain {
        position: relative;
        overflow: hidden;
      }
      
      .matrix-rain::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(
          to bottom,
          transparent 0%,
          rgba(0, 255, 0, 0.1) 50%,
          transparent 100%
        );
        animation: matrix-fall 3s linear infinite;
        pointer-events: none;
      }
      
      @keyframes matrix-fall {
        0% { transform: translateY(-100%); }
        100% { transform: translateY(100vh); }
      }
      
      /* Cyber Button */
      .cyber-button {
        position: relative;
        background: linear-gradient(45deg, #1a1a2e, #16213e);
        border: 2px solid #00f5ff;
        color: #00f5ff;
        padding: 12px 24px;
        font-family: 'Courier New', monospace;
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: 2px;
        cursor: pointer;
        transition: all 0.3s ease;
        overflow: hidden;
      }
      
      .cyber-button::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(0, 245, 255, 0.4), transparent);
        transition: left 0.5s;
      }
      
      .cyber-button:hover::before {
        left: 100%;
      }
      
      .cyber-button:hover {
        box-shadow: 
          0 0 20px #00f5ff,
          inset 0 0 20px rgba(0, 245, 255, 0.1);
        transform: translateY(-2px);
      }
      
      /* Futuristic Card */
      .futuristic-card {
        background: linear-gradient(135deg, rgba(26, 26, 46, 0.9), rgba(22, 33, 62, 0.9));
        border: 1px solid rgba(0, 245, 255, 0.3);
        border-radius: 12px;
        padding: 24px;
        position: relative;
        overflow: hidden;
        backdrop-filter: blur(10px);
        transition: all 0.3s ease;
      }
      
      .futuristic-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 2px;
        background: linear-gradient(90deg, transparent, #00f5ff, transparent);
        animation: border-glow 2s ease-in-out infinite alternate;
      }
      
      .futuristic-card:hover {
        border-color: #00f5ff;
        box-shadow: 
          0 0 30px rgba(0, 245, 255, 0.3),
          0 0 60px rgba(0, 245, 255, 0.1);
        transform: translateY(-5px);
      }
      
      @keyframes border-glow {
        0% { opacity: 0.5; }
        100% { opacity: 1; }
      }
      
      /* Animated Background */
      .animated-bg {
        background: linear-gradient(-45deg, #1a1a2e, #16213e, #0f3460, #533483);
        background-size: 400% 400%;
        animation: gradient-shift 15s ease infinite;
      }
      
      @keyframes gradient-shift {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      
      /* Floating Elements */
      .float {
        animation: float 6s ease-in-out infinite;
      }
      
      .float-delayed {
        animation: float 6s ease-in-out infinite;
        animation-delay: -3s;
      }
      
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-20px); }
      }
      
      /* Pulse Animation */
      .pulse-glow {
        animation: pulse-glow 2s ease-in-out infinite alternate;
      }
      
      @keyframes pulse-glow {
        from {
          box-shadow: 0 0 20px rgba(0, 245, 255, 0.5);
        }
        to {
          box-shadow: 0 0 40px rgba(0, 245, 255, 0.8), 0 0 60px rgba(0, 245, 255, 0.3);
        }
      }
      
      /* Responsive Design */
      @media (max-width: 768px) {
        .neon-glow,
        .neon-glow-blue,
        .neon-glow-purple,
        .neon-glow-green {
          text-shadow: 
            0 0 3px currentColor,
            0 0 6px currentColor,
            0 0 9px currentColor;
        }
        
        .cyber-button {
          padding: 10px 20px;
          font-size: 14px;
        }
        
        .futuristic-card {
          padding: 16px;
        }
      }
      
      /* Reduced Motion Support */
      @media (prefers-reduced-motion: reduce) {
        .neon-glow,
        .neon-glow-blue,
        .neon-glow-purple,
        .neon-glow-green,
        .holographic,
        .glitch,
        .float,
        .float-delayed,
        .pulse-glow {
          animation: none;
        }
        
        .cyber-grid {
          animation: none;
        }
        
        .animated-bg {
          animation: none;
        }
      }
    `}</style>
  );
};

export default FuturisticDesignSystem;