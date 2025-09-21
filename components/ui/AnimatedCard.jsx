import React from 'react';

export const AnimatedCard = ({ 
  children, 
  className = '', 
  delay = 0 
}) => {
  return (
    <div 
      className={`bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-cyan-500/50 transition-all duration-500 hover:transform hover:scale-105 ${className}`}
      style={{
        animationDelay: `${delay}ms`,
        animation: 'fadeInUp 0.6s ease-out forwards',
        opacity: 0,
        transform: 'translateY(30px)'
      }}
    >
      {children}
    </div>
  );
};

// Add CSS animations
const styles = `
@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
`;

if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}