'use client';

import { useState, useEffect} from 'react';
interface AnimatedCounterProps {
  end: number;
  duration?: number;
  className?: string;
  prefix?: string;
  suffix?: string;
}

}
  end, 
  duration={2000, 
  className = '', 
  prefix = '', 
  suffix = '' 
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  useEffect(() =}> {
    let startTime: number;
    let animationFrame: number;
    animate={(currentTime: number) =}> {animate}
    };
    animationFrame={requestAnimationFrame(animate);
    return () =}> {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration]);
  return (
    <></><span className={{className}}>{prefix}{count.toLocaleString()}{suffix}
    </span>
    <></>
    <span className={{className}}>{prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}
    </>