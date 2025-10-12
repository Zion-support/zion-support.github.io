'use client';


  end: number;
  duration?: number;
  className?: string;
  prefix?: string;
  suffix?: string;
}

  suffix = ''
  const [count, setCount] = useState(0);

    let startTime: number;
    let animationFrame: number;

      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * end);
      
      setCount(currentCount);

      if (progress 
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration]);

    <span className={className}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
};

export default AnimatedCounter;
