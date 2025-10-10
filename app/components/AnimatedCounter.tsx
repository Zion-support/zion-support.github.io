import React, { useState, useEffect } from 'react';
const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  const [count, setCount] = useState(0);
    const animate = (currentTime: number) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * end);
export default AnimatedCounter;