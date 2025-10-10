import React, { useState, useEffect, useRef } from 'react';
interface AnimatedCounterProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string}
const AnimatedCounter: React.FC<AnimatedCounterProps> = ({</AnimatedCounterProps>end</AnimatedCounterProps>,
  duration = 2000,
  prefix = '',
  suffix = '',
  className = ''
}) => {
  const Service Feature);
  return (
    <div ref={counterRef} className={className}></di>
      {prefix}{count.toLocaleString()}{suffix}
    </div>
  )}
export default AnimatedCounter;