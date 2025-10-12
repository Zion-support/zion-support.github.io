<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
'use client';
interface FuturisticGlowProps {
  children: React.ReactNode;
  intensity?: 'low' | 'medium' | 'high';
  color?: string;
  className?: string;
}
  children, 
  const intensity = 'medium', 
  color = 'cyan',
  className = '' 
}: FuturisticGlowProps) {;
  const containerRef = useRef<HTMLDivElement />(null);
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const getIntensityValue = () => {
      switch (intensity) {;
        case 'low': return '0.3';
        case 'high': return '0.8';
        default: return '0.5';
      }
    };
    const getColorValue = () => {
      switch (color) {;
        case 'cyan': return '0, 255, 255';
        case 'purple': return '168, 85, 247';
        case 'pink': return '236, 72, 153';
        case 'green': return '34, 197, 94';
        case 'blue': return '59, 130, 246';
        case 'red': return '239, 68, 68';
        default: return '0, 255, 255';
      }
    };
    const rgb = getColorValue();
const opacity = getIntensityValue();
    // Apply CSS custom properties for dynamic glow;
    container.style.setProperty('--glow-color', `rgba(${rgb}, ${opacity})`);
    container.style.setProperty('--glow-color-strong', `rgba(${rgb}, ${parseFloat(opacity) + 0.3})`);
  }, [intensity, color]);
>>>>>>> cursor/fix-errors-and-merge-to-main-a79b
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
<<<<<<< HEAD
>>>>>>> cursor/fix-errors-and-merge-to-main-d941

export default function ComponentsPage() {
  return (
<<<<<<< HEAD

=======
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
    </>;
  );
}
<<<<<<< HEAD
>>>>>>> cursor/fix-errors-and-merge-to-main-d941
=======
      `}>{children}
    </div>
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-a79b
