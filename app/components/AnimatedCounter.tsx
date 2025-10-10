'use client';
import React, { useState, useEffect } from 'react';
interface AnimatedCounterProps {

  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;}
}
const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  end,
  duration = 2000,
  prefix = '',
  suffix = '',
  className = ''
}) => {
  const [count, setCount] = useState(0);
  useEffect(() => {

      {prefix}{count.toLocaleString()}{suffix}
    </span>;
  );
};
export default AnimatedCounter;
  </AnimatedCounterProps>
