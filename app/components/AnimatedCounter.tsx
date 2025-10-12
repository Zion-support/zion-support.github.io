
'use client';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  className?: string;
  prefix?: string;
  suffix?: string;

  end, 
  
  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

      if (!startTime) startTime = currentTime;

      setCount(Math.floor(easeOutQuart * end));

      if (progress 
        
      }
    };
    
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration]);
  return (
    <div>