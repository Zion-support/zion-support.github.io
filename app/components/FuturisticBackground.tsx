
<<<<<<< HEAD
<<<<<<< HEAD
interface FuturisticBackgroundProps {
=======
import React from 'react';

interface FuturisticbackgroundProps {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
  className?: string;
  children?: React.ReactNode;
}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export default function FuturisticBackground({ className = '', children }: FuturisticBackgroundProps) {
=======
export default function Futuristicbackground({ className = '', children, ...props }: FuturisticbackgroundProps) {
<<<<<<< HEAD

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
  return (
    <div className={`${className}`}>
=======
export default function FuturisticBackground({ className = '', children, ...props }: FuturisticBackgroundProps) {
  return (
    <div className={`futuristic-background-component ${className}`} {...props}>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8b27
      {children}
    </div>
  );
<<<<<<< HEAD
}
=======
export default function FuturisticBackground({ className = '', children, ...props }: FuturisticBackgroundProps) {
    return (
        <div className="component" {...props}>
          {children}
        </div>
      );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
=======
const FuturisticBackground = ({ children }: { children: React.ReactNode }) => {
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

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div className="relative">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 1 }}
      />
      <div className="relative" style={{ zIndex: 2 }}>
        {children}
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default FuturisticBackground;
  );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
=======

}

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
=======
export default FuturisticBackground;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-d081
=======
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-34b5
