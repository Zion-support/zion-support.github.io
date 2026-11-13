'use client';

import { useEffect, useRef, useState } from 'react';

/** Animated number counter — counts up from 0 to target on mount */
export default function AnimatedServiceCount({ initialCount }: { initialCount: number }) {
  const [displayed, setDisplayed] = useState(0);
  const target = initialCount;
  const raf = useRef<number>(0);

  useEffect(() => {
    const duration  = 1200;        // ms
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed  = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased    = 1 - Math.pow(1 - progress, 3);
      setDisplayed(Math.floor(eased * target));

      if (progress < 1) {
        raf.current = requestAnimationFrame(tick);
      } else {
        setDisplayed(target);        // snap to exact
      }
    };

    raf.current = requestAnimationFrame(tick);
    return () => { if (raf.current) cancelAnimationFrame(raf.current); };
  }, [target]);

  return (
    <span className="font-bold gradient-text tabular-nums">
      {displayed.toLocaleString('en-US')}
    </span>
  );
}
