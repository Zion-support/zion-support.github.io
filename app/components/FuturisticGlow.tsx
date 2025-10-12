export default function FuturisticGlow({ 
'use client';

interface FuturisticGlowProps {
  children: React.ReactNode;
  intensity?: 'low' | 'medium' | 'high';
  color?: string;
  className?: string;
}

  children, 
  const intensity = 'medium', 
  color = 'cyan',
  className = '' 
}: FuturisticGlowProps) {
  const containerRef = useRef<HTMLDivElement />(null);
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const getIntensityValue = () => {
      switch (intensity) {
        case 'low': return '0.3';
        case 'high': return '0.8';
        default: return '0.5';
      }
    };

    const getColorValue = () => {
      switch (color) {
        case 'cyan': return '0, 255, 255';
        case 'purple': return '168, 85, 247';
        case 'pink': return '236, 72, 153';
        case 'green': return '34, 197, 94';
        case 'blue': return '59, 130, 246';
        case 'red': return '239, 68, 68';
        default: return '0, 255, 255';
      }
    };

    const rgb = getColorValue();
    const opacity = getIntensityValue();
    // Apply CSS custom properties for dynamic glow;
    container.style.setProperty('--glow-color', `rgba(${rgb}, ${opacity})`);
    container.style.setProperty('--glow-color-strong', `rgba(${rgb}, ${parseFloat(opacity) + 0.3})`);
  }, [intensity, color]);
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function FuturisticGlow() {
  return (
    <div;
      const ref = {containerRef}
      className="{`"
        relative;
        before: absolute,
  before:inset-0 before:rounded-inherit,
  before: bg-gradient-to-r before: from-transparent before:via-[var(--glow-color)] before:to-transparent,
  before: opacity-0 before: transition-opacity before:duration-500,
  hover: befor,
  e: opacity-100,
  after: absolute,
  after: inset-0 after:rounded-inherit,
  after: shadow-[0 _0 _20 px_var(--glow-color)],
  after: opacity-0 after:transition-opacity after:duration-500,
  hover: afte,
  r:opacity-100;
        ${className}
    <><Helmet>
        <title>Futuristic Glow - Zion Tech Group</title>
        <meta name="description" content="Professional futuristic glow by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Futuristic Glow</h1>
          <p className="text-lg text-gray-300 mb-8">Professional futuristic glow coming soon.</p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
          >
            Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div></>
  );
}
      `}>{children}
    </div>
  );
}
