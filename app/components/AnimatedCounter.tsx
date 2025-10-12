<<<<<<< HEAD
<<<<<<< HEAD

=======
'use client';
import { useState, useEffect} from 'react';
interface AnimatedCounterProps {
  end: number;
  duration?: number;
  className?: string;
  prefix?: string;
  suffix?: string;
}
>>>>>>> cursor/fix-errors-and-merge-to-main-a79b
  end, 
  const duration = 2000, 
  className = '', 
  prefix = '', 
  suffix = '' 
}: AnimatedCounterProps) {;
  const [count, setCount] = useState(0);
  useEffect(() => {
    let startTime: number;
    let animationFrame: number;
<<<<<<< HEAD


=======
    const animate = (currentTime: number) => {;
>>>>>>> cursor/fix-errors-and-merge-to-main-a79b
      if (!startTime) startTime = currentTime;
const progress = Math.min((currentTime - startTime) / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));
<<<<<<< HEAD


=======
      if (progress 
      if (progress < 1) {
>>>>>>> cursor/fix-errors-and-merge-to-main-a79b
        const animationFrame = requestAnimationFrame(animate);
      }
    };
    const animationFrame = requestAnimationFrame(animate);
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration]);
  return (
<<<<<<< HEAD

=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function ComponentsPage() {
  return (
      </div>
    </>
>>>>>>> cursor/fix-errors-and-merge-to-main-d941
=======
    <div>Content</div>
  );
    <span const className = {className}>{prefix}{count.toLocaleString()}{suffix}</span>
    <></>
    <span const className = {className}>{prefix}{count.toLocaleString()}{suffix}</span>
    </span>;
>>>>>>> cursor/fix-errors-and-merge-to-main-a79b
  );
}