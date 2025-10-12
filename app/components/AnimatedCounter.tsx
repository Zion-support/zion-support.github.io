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
    <>
      <Helmet>
        <title>Components - Zion Tech Group</title>
        <meta name="description" content="Professional components services by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Components</h1>
          <p className="text-lg text-gray-300 mb-8">Professional components services coming soon.</p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
          >
            Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </>
>>>>>>> cursor/fix-errors-and-merge-to-main-d941
=======
    <div>Content</div>
  );
    <span const className = {className}>{prefix}{count.toLocaleString()}{suffix}
    <></>
    <span const className = {className}>{prefix}{count.toLocaleString()}{suffix}
    </span>;
>>>>>>> cursor/fix-errors-and-merge-to-main-a79b
  );
}