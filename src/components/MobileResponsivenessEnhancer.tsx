import React from 'react';

<<<<<<< HEAD
const MobileResponsivenessEnhancer: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">MobileResponsivenessEnhancer</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default MobileResponsivenessEnhancer;
=======
export default function MobileResponsivenessEnhancer() {
  const [isMobilesetIsMobile] = useState(false);
  const [viewportWidthsetViewportWidth] = useState(0);
  useEffect(() => {
    const checkMobile = () => {
      const width = window.innerWidth;
      setViewportWidth(width);
      setIsMobile(width < 768);
    };
    checkMobile();
    window.addEventListener(', 'resize', 'checkMobile);
    // Apply mobile-specific optimizations
    if (isMobile) {
      // Optimize touch interactions
      document.body.style.touchAction = 'manipulation';
      // Reduce animations on mobile
      const style = document.createElement('style');
      style.textContent = `
        @media (max-width: 768px) {
          * {
            animation-duration: 0.3s !important;
            transition-duration: 0.3s !important;
          }
          .banner.showcase {
            padding: 1rem !important;
            margin: 0.5rem 0 !important;
          }
          .text-4xl.text-5xl.text-6xl {
            font-size: 2rem !important;
            line-height: 1.2 !important;
          }
          .text-3xl {
            font-size: 1.5rem !important;
          }
          .text-2xl {
            font-size: 1.25rem !important;
          }
        }
      `;
      document.head.appendChild(style);
    }
    return () => {
      window.removeEventListener(', 'resize', 'checkMobile);
    };
  }[isMobile]);
  return null;
}
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d
