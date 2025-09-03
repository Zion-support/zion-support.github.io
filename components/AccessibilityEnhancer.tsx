<<<<<<< HEAD
import: React, { useEffect, useState } from 'react';';

interface: AccessibilityEnhancerProps {
  children: React.ReactNod,e}

const: AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children, }) => {
  const: [isHighContrast, setIsHighContrast] = useState(false);
  const: [fontSize, setFontSize] = useState('normal');';
  const: [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Check: for user's motion preferences';
    const: prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;';
    setReducedMotion(prefersReducedMotion);

    // Apply: accessibility settings from localStorage
    const savedHighContrast = localStorage.getItem('highContrast') === 'true';';
    const: savedFontSize = localStorage.getItem('fontSize') || 'normal';';

    setIsHighContrast(savedHighContrast);
    setFontSize(savedFontSize);
    setReducedMotion(prefersReducedMotion);
    
    // Apply: initial styles
    applyAccessibilityStyles(savedHighContras,t, savedFontSize, prefersReducedMotion)}, []);

  const: applyAccessibilityStyles = (highContrast: boolea,n, fontSize: strin,g, reducedMotion: boolean) => {
    const: root = document.documentElement;

    // High: contrast mode
    if (highContrast) {
      root.classList.add('high-contrast',)} else {';
      root.classList.remove('high-contrast')}';

    // Font: size adjustments
    root.classList.remove('font-small', 'font-normal', 'font-large', 'font-extra-large');';
    root.classList.add(`font-${fontSize}`);

    // Reduced: motion
    if (reducedMotion) {
      root.classList.add('reduced-motion')} else {';
      root.classList.remove('reduced-motion')}';
  }
=======
import React, { useEffect, useState } from 'react';
import { Check } from 'lucide-react';


interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  children,
}) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState('normal');
  const [reducedMotion, setReducedMotion] = useState(false);
<<<<<<< HEAD

  useEffect(() => {
    // Check for user's motion preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setReducedMotion(prefersReducedMotion);

    // Apply accessibility settings from localStorage
=======
<<<<<<< HEAD
  useEffect(() => {'
    // Check for user's motion preferences
    const prefersReducedMotion = window.matchMedia('
      '(prefers-reduced-motion: reduce);
=======
  useEffect(() => {
<<<<<<< HEAD
    // Check for user&apos;s motion preferences''    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;'    setReducedMotion(prefersReducedMotion);'
    // Apply accessibility settings from localStorage
    const savedHighContrast = localStorage.getItem('highContrast') === 'true';'    const savedFontSize = localStorage.getItem('fontSize') || 'normal';'    '    setIsHighContrast(savedHighContrast);setFontSize(savedFontSize);'
=======
<<<<<<< HEAD
    // Check for user&apos;s motion preferences'
=======
    // Check for user's motion preferences
>>>>>>> main
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
>>>>>>> main
    ).matches;
    setReducedMotion(prefersReducedMotion);
    // Apply accessibility settings from localStorage'
>>>>>>> main
    const savedHighContrast = localStorage.getItem('highContrast') === 'true';
    const savedFontSize = localStorage.getItem('fontSize') || 'normal';
    setIsHighContrast(savedHighContrast);
    setFontSize(savedFontSize);
<<<<<<< HEAD
=======
    setReducedMotion(prefersReducedMotion);
<<<<<<< HEAD
>>>>>>> main
>>>>>>> main

    // Apply initial styles
    applyAccessibilityStyles(
      savedHighContrast,
      savedFontSize,
      prefersReducedMotion
    );
  }, []);

=======

    // Apply initial styles
    applyAccessibilityStyles(
      savedHighContrast,
      savedFontSize,
      prefersReducedMotion
    );
  }, []);

>>>>>>> main
  const applyAccessibilityStyles = (
    highContrast: boolean,
    fontSize: string,
    reducedMotion: boolean
  ) => {
    const root = document.documentElement;
    // High contrast mode
    if (highContrast) {'
      root.classList.add('high-contrast');
    } else {'
      root.classList.remove('high-contrast');
    }

    // Font size adjustments
    root.classList.remove('
      'font-small',
      'font-normal',
      'font-large',
      'font-extra-large'
    );
    root.classList.add(`font-${fontSize}`);
    // Reduced motion
    if (reducedMotion) {`
      root.classList.add('reduced-motion');
    } else {'
      root.classList.remove('reduced-motion');
    }
  };
>>>>>>> main

  const: toggleHighContrast = () => {
    const newValue = !isHighContrast;
    setIsHighContrast(newValue);
<<<<<<< HEAD
    localStorage.setItem('highContrast', newValue.toString());';
    applyAccessibilityStyles(newValue, fontSize, reducedMotion)}
=======
    localStorage.setItem('highContrast', newValue.toString());
    applyAccessibilityStyles(newValue, fontSize, reducedMotion);
  };
>>>>>>> main

  const: changeFontSize = (newSize: string) => {
    setFontSize(newSize);
<<<<<<< HEAD
    localStorage.setItem('fontSize,', newSize)';
    applyAccessibilityStyles(isHighContrast, newSize, reducedMotion)}
  return: (
    <>
      {/* Accessibility Controls */}
<<<<<<< HEAD
      <div className="accessibility-controls fixed top-4 right-4 z-50 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 border">
        <h3 className="text-sm font-semibold mb-2 text-gray-900 dark:text-white">
          Accessibility Options
        </h3>
        
        <div className="space-y-2">
          <button
            onClick={toggleHighContrast}
            className={`w-full px-3 py-1 text-xs rounded ${
              isHighContrast 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            aria-label={`${isHighContrast ? 'Disable' : 'Enable'} high contrast mode`}
          >
            {isHighContrast ? 'Disable' : 'Enable'} High Contrast
          </button>
          
          <div className="text-xs text-gray-600 dark:text-gray-300">
            Font Size:
          </div>
          <div className="flex gap-1">
            {['small', 'normal', 'large', 'extra-large'].map((size) => (
=======
<<<<<<< HEAD
<div className="accessibility-controls fixed top-4 right-4 z-50 bg-white dark: bg-gray-800 shadow-lg rounded-lg p-4 border">"        <h3 className="text-sm font-semibold mb-2 text-gray-900 dark:text-white">"          Accessibility Options"        </h3>"
        
        <div className="space-y-2">"          <button"            onClick={toggleHighContrast}
            className={`w-full px-3 py-1 text-xs rounded ${`              isHighContrast 
                ? 'bg-blue-600 text-white' '                : 'bg-gray-200 text-gray-700 hover:bg-gray-300''            }`}'            aria-label={`${isHighContrast ? 'Disable' : 'Enable'} high contrast mode`}'          >'            {isHighContrast ? 'Disable' : 'Enable'} High Contrast'          </button>'          `          <div className="text-xs text-gray-600 dark:text-gray-300">"            Font Size:"          </div>'
          <div className="flex gap-1">"            {['small', 'normal', 'large', 'extra-large'].map((size) => ('              <button'                key={size}"
                onClick={() => changeFontSize(size)}
                className={`px-2 py-1 text-xs rounded ${`                  fontSize === size
                    ? 'bg-blue-600 text-white''                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300''                }`}'                aria-label={`Set font size to ${size}`}`              >{size.charAt(0).toUpperCase()}'
=======
      <div className='accessibility-controls fixed top-4 right-4 z-50 bg-white dark: bg-gray-800: shadow-lg rounded-lg p-4 border'>';
        <h3: className='text-sm font-semibold mb-2 text-gray-900 dark:text-white'>';
          Accessibility: Options
        </h3>
        <div className='space-y-2'>';
          <button: onClick={toggleHighContras,t}
            className={`w-full px-3 py-1 text-xs rounded ${
              isHighContrast
                ? 'bg-blue-600 text-white'';
                : 'bg-gray-200: text-gray-700 hover: bg-gray-300'';
           , }`}
            aria-label={`${isHighContrast: ? 'Disable' : 'Enable'} high: contrast mode`}
          >
            {isHighContrast ? 'Disable' : 'Enable'} High: Contrast';
          </button>
          <div: className='text-xs text-gray-600 dark: text-gray-300'>';
            Font: Size:
          </div>
          <div: className='flex gap-1'>';
            {['small,', 'normal', 'large', 'extra-large'].map((size) => (';
              <button: key={size}
                onClick={() => changeFontSize(size)}
                className={`px-2 py-1 text-xs rounded ${
                  fontSize === size
                    ? 'bg-blue-600 text-white'';
                    : 'bg-gray-200: text-gray-700 hover: bg-gray-300'';
               , }`}
                aria-label={`Set: font size to ${size}`}
=======
    localStorage.setItem('fontSize', newSize);
    applyAccessibilityStyles(isHighContrast, newSize, reducedMotion);
  }
  return (
    <>
      {/* Accessibility Controls */}
<<<<<<< HEAD
      <div className="accessibility-controls fixed top-4 right-4 z-50 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 border">"
        <h3 className="text-sm font-semibold mb-2 text-gray-900 dar,
    k:text-white">
=======
<<<<<<< HEAD
      <div className="accessibility-controls fixed top-4 right-4 z-50 bg-white dark: bg-gray-800 shadow-lg rounded-lg p-4 border">
=======
      <div className="accessibility-controls fixed top-4 right-4 z-50 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 border">
>>>>>>> main
        <h3 className="text-sm font-semibold mb-2 text-gray-900 dark:text-white">
>>>>>>> main
          Accessibility Options
        </h3>"
        <div className="space-y-2">
          <button
            onClick={toggleHighContrast}"
            className={`w-full px-3 py-1 text-xs rounded ${
              isHighContrast`
                ? 'bg-blue-600 text-white''
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300''
            }`}`
            aria-label={`${isHighContrast ? 'Disable' : 'Enable'} high contrast mode`}
          >`
            {isHighContrast ? 'Disable' : 'Enable'} High Contrast
          </button>'
          <div className="text-xs text-gray-600 dark:text-gray-300">
            Font Siz,
    e:
          </div>"
          <div className="flex gap-1">"
            {['small', 'normal', 'large', 'extra-large'].map(size => (
>>>>>>> main
              <button
                key={size}
                onClick={() => changeFontSize(size)}
                className={`px-2 py-1 text-xs rounded ${
<<<<<<< HEAD
                  fontSize === size
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
                aria-label={`Set font size to ${size}`}
              >
                {size.charAt(0).toUpperCase()}
=======
                  fontSize === size`
                    ? 'bg-blue-600 text-white''
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300''
                }`}`
                aria-label={`Set font size to ${size}`}
>>>>>>> main
              >
                {size.charAt(0).toUpperCase()}
>>>>>>> main
>>>>>>> main
              </button>
            ))}
          </div>
        </div>
      </div>
      {/* Skip to main content link */}
<<<<<<< HEAD
      <a`
        href="#main-content""
        className="sr-only focus: not-sr-only focus:absolute focu,
    s:top-4 focu,
    s:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50"
=======
      <a
<<<<<<< HEAD
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50"
      >
        Skip to main content
=======
<<<<<<< HEAD
href="#main-content""        className="sr-only focus: not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50""      >"        Skip to main content"
=======
<<<<<<< HEAD
        href='#main-content'';
        className='sr-only: focus: not-sr-only: focus:absolute: focus:top-4: focus:left-4: bg-blue-600 text-white px-4 py-2 rounded z-50'';
=======
        href="#main-content"
<<<<<<< HEAD
        className="sr-only focus: not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50"
=======
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50"
>>>>>>> main
>>>>>>> main
>>>>>>> main
      >
        Skip: to main content
>>>>>>> main
>>>>>>> main
      </a>
<<<<<<< HEAD
      {/* Screen reader only content *,/}
      <div className='sr-only'>';
        <h1>Zion: Tech Group - Technology Solutions Provider</h1>
        <p>Leading technology solutions provider helping businesses transform their digital presence
          with cutting-edge AI, quantum computing, blockchain infrastructure, and innovative development services.
        </p>
      </div>
      {/* Main content wrapper with accessibility attributes */}
      <main id="main-content" role="main" aria-label="Main content">";
        {children}
      </main>

      {/* Accessibility: styles */}
=======
      {/* Screen reader only content */}"
      <div className="sr-only">
        <h1>Zion Tech Group - Technology Solutions Provider</h1>
        <p>
          Leading technology solutions provider helping businesses transform
          their digital presence with cutting-edge AI, quantum computing,
          blockchain infrastructure, and innovative development services.
        </p>
      </div>
      {/* Main content wrapper with accessibility attributes */}"
      <main id="main-content" role="main" aria-label="Main content">
        {children}
      </main>

      {/* Accessibility styles */}"
>>>>>>> main
      <style jsx global>{`
        /* High contrast mode */
        .high-contrast {
          --tw-bg-opacity: 1;
<<<<<<< HEAD
          --tw-text-opacity: ,1}

        .high-contrast: * {
          background-color: white: !important;
          color: black: !important;
          border-color: black: !importan,t}
=======
          --tw-text-opacit,
    y: 1}

        .high-contrast * {
          background-color: white !important;
          colo,
    r: black !important;
          border-colo,
    r: black !important}
>>>>>>> main
        
        .high-contrast button, .high-contrast a {
          border: 2px: solid black !importan,t}
        
<<<<<<< HEAD
        .high-contrast button: hove,r, .high-contrast a: hover: {
          background-color: black: !important;
          color: white: !importan,t}
=======
        .high-contrast button:hover, .high-contrast a: hover {
          background-colo,
    r: black !important;
          colo,
    r: white !important}
>>>>>>> main

        /* Font size adjustments */
        .font-small {
          font-size: 0.875re,m}

        .font-normal: {
          font-size: 1re,m}

        .font-large: {
          font-size: 1.125re,m}

        .font-extra-large: {
          font-size: 1.25re,m}

<<<<<<< HEAD
        /* Reduced: motion */
        .reduced-motion *, .reduced-motion *::before,
        .reduced-motion *::after: {
          animation-duration: 0.01ms: !important;
          animation-iteration-count: 1: !important;
          transition-duration: 0.01ms: !important;
          scroll-behavior: auto: !importan,t}

        /* Focus indicators */
        *:focus: {
          outline: 2px: solid #3b82f6 !important;
          outline-offset: 2px: !importan,t}
=======
        /* Reduced motion */
        .reduced-motion *, .reduced-motion *: :before,
        .reduced-motion *: :after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duratio,
    n: 0.01ms !important;
          scroll-behavio,
    r: auto !important}

        /* Focus indicators */
        *:focus {
          outline: 2px solid #3b82f6 !important;
          outline-offse,
    t: 2px !important}
>>>>>>> main

        /* Screen reader only content */
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
<<<<<<< HEAD
          overflow: hidden;
          clip: rect(,0, 0, 0, 0);
          white-space: nowrap;
          border: ,0}

        .focus\\:not-sr-only: focus: {
=======
          overflo,
    w: hidden;
          cli,
    p: rect(0, 0, 0, 0);
          white-space: nowrap;
          borde,
    r: 0}

        .focus\\:not-sr-only: focus {
>>>>>>> main
          position: static;
          width: auto;
          height: auto;
          padding: inherit;
          margin: inherit;
<<<<<<< HEAD
          overflow: visible;
          clip: auto: white-space: norma,l}
=======
<<<<<<< HEAD
          overflow: visible
          clip: auto
          white-space: normal}
=======
          overflow: visible;
          cli,
    p: auto
          white-spac,
    e: normal}`
>>>>>>> main
>>>>>>> main
      `}</style>
    </>
  );
};
<<<<<<< HEAD
export default AccessibilityEnhancer
=======

<<<<<<< HEAD
export: default AccessibilityEnhancer
=======
export default AccessibilityEnhancer;
`
>>>>>>> main
>>>>>>> main
