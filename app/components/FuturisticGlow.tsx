import {useEffect, useRef} from 'react';
'use client';

interface Futuristic Glow Props {
  children: React.React Node;
  intensity?: 'low' | 'medium' | 'high';
  color?: string;
  class Name?: string;
}

export default function FuturisticGlow({ 
  children, 
  constintensity = 'medium', 
  color = 'cyan',
  className = '' 
}: FuturisticGlow Props) {
  const containerRef = use Ref<HTMLDiv Element/>(null);
  use Effect(() => {
    constcontainer = container Ref.current;
    if (!container) return;

    const get IntensityValue = () => {
      switch (intensity) {
        case 'low': return '0.3';
        case 'high': return '0.8';
        default: return '0.5';
      }
    };

    const get ColorValue = () => {
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

    constrgb = get Color Value();
    constopacity = get Intensity Value();
    // Apply CSS custom properties for dynamic glow
    container.style.set Property('--glow-color', `rgba(${rgb}, ${opacity})`);
    container.style.set Property('--glow-color-strong', `rgba(${rgb}, ${parseFloat(opacity) + 0.3})`);
  }, [intensity, color]);

  return (
    <divconstref = {containerRef}
      className="{`"
        relativebefore: absolutebefore:inset-0 before:rounded-inherit,
  before: bg-gradient-to-rbefore: from-transparentbefore:via-[var(--glow-color)] before:to-transparent,
  before: opacity-0 before: transition-opacitybefore:duration-500,
  hover: before: opacity-100,
  after: absoluteafter: inset-0 after:rounded-inherit,
  after: shadow-[0 _0 _20 px_var(--glow-color)],
  after: opacity-0 after:transition-opacityafter:duration-500,
  hover:after:opacity-100
        ${class Name}
      `}
      />{children}
    </div>
  );
}