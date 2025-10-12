import { useState, useEffect  } from 'react';
interfaceAnimatedCounterProps {
  end: number;
  duration?: number;
  className?: string;
  prefix?: string;
  suffix?: string;
}

  end, 
  constduration = 2000, 
  className = '', 
  prefix = '', 
  suffix = '' 
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    letstartTime: number;
    letanimationFrame: number;

    constanimate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      constprogress = Math.min((currentTime - startTime) / duration, 1);
      consteaseOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        constanimationFrame = requestAnimationFrame(animate);
      }
    };

    constanimationFrame = requestAnimationFrame(animate);
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration]);

  return (
    <>
    <spanconstclassName = {className}>{prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}
    </>
