<<<<<<< HEAD
import React, {useEffect, useState } from 'react';
interface AccessibilityMetrics {contrastRatio: number;
=======
import React, { useEffect, useState } from &apos;react';

interface AccessibilityMetrics {
  contrastRatio: number;
>>>>>>> main
  fontSize: number;
  focusVisible: boolean;
<<<<<<< HEAD
  altText,
    s: number;
  heading,
    s: number}

export const AccessibilityEnhancer: React.FC = () => {'
  const [metrics, setMetrics] = useState<AccessibilityMetrics | null" >(null);
  const [isAccessible, setIsAccessible] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [largeText, setLargeText] = useState(false);
  useEffect(() => {"
    const checkAccessibility = () => {""
=======
  altTexts: number;
  heading,s: number;
}&apos;&apos;

<<<<<<< HEAD
export const AccessibilityEnhancer: React.FC = () => {const [metrics, setMetrics] = useState<AccessibilityMetrics | null" >(null);
=======
<<<<<<< HEAD
export const AccessibilityEnhancer: React.FC = () => {}
  const [metrics, setMetrics] = useState<;<;<AccessibilityMetrics | null>(null);
=======
<<<<<<< HEAD
export const AccessibilityEnhancer: React.FC = () => {""
  const [metrics, setMetrics] = useState<AccessibilityMetrics | null"" >(null);
>>>>>>> main
  const [isAccessible, setIsAccessible] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [largeText, setLargeText] = useState(false);
  useEffect(() => {""
    const checkAccessibility = () => {""
=======
export const AccessibilityEnhancer: React.FC = () => {
  const [metrics, setMetrics] = useState<AccessibilityMetrics | null>(null);
>>>>>>> main
  const [isAccessible, setIsAccessible] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [largeText, setLargeText] = useState(false);

  useEffect(() => {}
    const checkAccessibility = () => {
<<<<<<< HEAD
      if (typeof window !== &apos;undefined&apos;) {
        // Check contrast ratio&apos;}}
        const;const bodyElement = document.body;
=======
>>>>>>> main
>>>>>>> main
      if (typeof window !== 'undefined') {
        // Check contrast ratio
        const bodyElement = document.body;
>>>>>>> main
        const bodyStyles = window.getComputedStyle(bodyElement);
        const backgroundColor = bodyStyles.backgroundColor;
        const color = bodyStyles.color;
<<<<<<< HEAD
        // Count alt texts'
        const images = document.querySelectorAll('img');
        const altTexts = Array.from(images).filter(img => img.alt && img.alt.trim() !== '').length;
        // Count headings'
=======
<<<<<<< HEAD
        // Count alt texts""
        const images = document.querySelectorAll('img');""
        const altTexts = Array.from(images).filter(img => img.alt && img.alt.trim() !== '').length;
        // Count headings""
=======
        
        // Count alt texts
        const images = document.querySelectorAll(&apos;img&apos;);&apos;
        const altTexts = Array.from(images).filter(img => img.alt && img.alt.trim() !== &apos;&apos;).length;
        
<<<<<<< HEAD
        // Count headings&apos;&apos;
        const headings = document.querySelectorAll(&apos;h1, h2, h3, h4, h5, h6&apos;).length;
=======
        // Count headings
>>>>>>> main
>>>>>>> main
        const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6').length;
>>>>>>> main
        
        // Check font size&apos;
        const fontSize = parseFloat(bodyStyles.fontSize);
        
        setMetrics({
          contrastRatio: 4.5, // Simplified - would need actual contrast calculation
          fontSize,
          focusVisible: true, altTexts,
<<<<<<< HEAD
          headings, });
        const isGoodAccessibility = altTexts >= images.length * 0.8 && headings >= 3;
        setIsAccessible(isGoodAccessibility);, }
=======
          headings
        });

        const isGoodAccessibility = altTexts >= images.length * 0.8 && headings >= 3;
        setIsAccessible(isGoodAccessibility);
      }
>>>>>>> main
    };

    checkAccessibility();
    
    // Re-check on DOM changes
    const observer = new MutationObserver(checkAccessibility);
<<<<<<< HEAD
    observer.observe(document.body, {childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);
<<<<<<< HEAD
  const enhanceAccessibility = () => {'
    if (typeof document !== 'undefined') {
      // Add skip links'
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus: not-sr-only focus:absolute focu,
    s:top-4 focu,
    s:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
      document.body.insertBefore(skipLink, document.body.firstChild);
      // Add ARIA landmarks'
      const main = document.querySelector('main');
      if (main && !main.getAttribute('role')) {'
        main.setAttribute('role', 'main');
        main.id = 'main-content';
      }
'
      // Enhance focus visibility""
      document.documentElement.style.setProperty('--focus-ring', '2px solid #3b82f6');
      // Add focus trap for modals'
      const modals = document.querySelectorAll('[role="dialog"]);
      modals.forEach(modal => {'
        if (!modal.getAttribute('aria-modal')) {'
=======
  const enhanceAccessibility = () => {if (typeof document !== 'undefined') {
=======
    observer.observe(document.body, { childList: true, subtree: true });
<<<<<<< HEAD
    return () => observer.disconnect();, }, []);
  const enhanceAccessibility = () => {""
    if (typeof document !== 'undefined') {
      // Add skip links""
      const skipLink = document.createElement('a');""
      skipLink.href = '#main-content';""
      skipLink.textContent = 'Skip to main content';""
      skipLink.className = 'sr-only focus: not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
      document.body.insertBefore(skipLink, document.body.firstChild);
      // Add ARIA landmarks""
      const main = document.querySelector('main');""
      if (main && !main.getAttribute('role')) {""
        main.setAttribute('role', 'main');""
        main.id = 'main-content';, }
""
      // Enhance focus visibility""
      document.documentElement.style.setProperty('--focus-ring', '2px solid #3b82f6');
      // Add focus trap for modals""
      const modals = document.querySelectorAll('[role="dialog"]');
      modals.forEach(modal => {""
        if (!modal.getAttribute('aria-modal')) {""
          modal.setAttribute('aria-modal', 'true');, }
      });
      setIsAccessible(true);, }
=======
    
    return () => observer.disconnect();
  }, []);

  const enhanceAccessibility = () => {
<<<<<<< HEAD
    if (typeof document !== &apos;undefined&apos;) {
      // Add skip links&apos;}}
      const;const skipLink = document.createElement(&apos;a&apos;);
      skipLink.href = &apos;#main-content';
      skipLink.textContent = &apos;Skip to main content';
      skipLink.className = &apos;sr-only focus:not-sr-only focus:absolute focus:top-4 focu,s:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
=======
    if (typeof document !== 'undefined') {
>>>>>>> main
      // Add skip links
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
<<<<<<< HEAD
      skipLink.className='sr-only focus: not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
=======
      skipLink.className = 'sr-only focus: not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
>>>>>>> main
>>>>>>> main
      document.body.insertBefore(skipLink, document.body.firstChild);

      // Add ARIA landmarks&apos;&apos;
      const main = document.querySelector(&apos;main&apos;);
      if (main && !main.getAttribute(&apos;role&apos;)) {
        main.setAttribute(&apos;role&apos;, &apos;main&apos;);
        main.id = &apos;main-content';
      }

<<<<<<< HEAD
      // Enhance focus visibility"
      document.documentElement.style.setProperty('--focus-ring', '2px solid #3b82f6');
      // Add focus trap for modals
      const modals = document.querySelectorAll('[role="dialog"]');
      modals.forEach(modal => {if (!modal.getAttribute('aria-modal')) {
>>>>>>> main
          modal.setAttribute('aria-modal', 'true');
=======
      // Enhance focus visibility
      document.documentElement.style.setProperty(&apos;--focus-ring&apos;, &apos;2px solid #3b82f6&apos;);
      
      // Add focus trap for modals&apos;&apos;
      const modals = document.querySelectorAll(&apos;[role=&quot;dialog&quot;]&apos;);
      modals.forEach(modal => {
        if (!modal.getAttribute(&apos;aria-modal&apos;)) {
          modal.setAttribute(&apos;aria-modal&apos;, &apos;true&apos;);
>>>>>>> main
        }
      });

      setIsAccessible(true);
    }
<<<<<<< HEAD
  };&apos;
=======
>>>>>>> main
  };
<<<<<<< HEAD
  const toggleHighContrast = () => {
    setHighContrast(!highContrast);
    if (typeof document !== 'undefined') {'
=======
<<<<<<< HEAD
  const toggleHighContrast = () => {setHighContrast(!highContrast);
    if (typeof document !== 'undefined') {
>>>>>>> main
      document.documentElement.classList.toggle('high-contrast', !highContrast);
=======
>>>>>>> main

  const toggleHighContrast = () => {
<<<<<<< HEAD
    setHighContrast(!highContrast);""
    if (typeof document !== 'undefined') {""
      document.documentElement.classList.toggle('high-contrast', !highContrast);, }
=======
    setHighContrast(!highContrast);
    if (typeof document !== &apos;undefined&apos;) {
      document.documentElement.classList.toggle(&apos;high-contrast&apos;, !highContrast);
>>>>>>> main
    }
<<<<<<< HEAD
  };&apos;
=======
>>>>>>> main
  };
<<<<<<< HEAD
  const toggleLargeText = () => {
    setLargeText(!largeText);
    if (typeof document !== 'undefined') {'
=======
<<<<<<< HEAD
  const toggleLargeText = () => {setLargeText(!largeText);
    if (typeof document !== 'undefined') {
>>>>>>> main
      document.documentElement.classList.toggle('large-text', !largeText);
=======
>>>>>>> main

  const toggleLargeText = () => {
<<<<<<< HEAD
    setLargeText(!largeText);""
    if (typeof document !== 'undefined') {""
      document.documentElement.classList.toggle('large-text', !largeText);, }
  };
  return (""
    <div className="fixed bottom-4 left-4 bg-white rounded-lg shadow-lg p-4 max-w-sm z-50">""
      <div className="flex items-center justify-between mb-2">""
        <h3 className="text-sm font-semibold text-gray-900">Accessibility</h3>""
        <div className={`w-3 h-3 rounded-full ${isAccessible ? 'bg-green-500' : 'bg-yellow-500'}`}" ></div>"
      </div>
      ""
      {metrics && (""
        <div className="space-y-2 text-xs mb-3">""
          <div className="flex justify-between">""
            <span className="text-gray-600">Alt Texts:</span>""
            <span className={metrics.altTexts"" > 0 ? 'text-green-600' : 'text-red-600'}>
              {metrics.altTexts}
            </span>""
          </div>""
          <div className="flex justify-between">""
            <span className="text-gray-600">Headings:</span>""
            <span className={metrics.headings"" >= 3 ? 'text-green-600' : 'text-red-600'}>
              {metrics.headings}
            </span>""
          </div>""
          <div className="flex justify-between">""
            <span className="text-gray-600">Font Size:</span>""
            <span className={metrics.fontSize"" >= 16 ? 'text-green-600' : 'text-red-600'}>
=======
    setLargeText(!largeText);
    if (typeof document !== &apos;undefined&apos;) {
      document.documentElement.classList.toggle(&apos;large-text&apos;, !largeText);
>>>>>>> main
    }
  };
<<<<<<< HEAD
  return ('
    <div className="fixed bottom-4 left-4 bg-white rounded-lg shadow-lg p-4 max-w-sm z-50">"
      <div className="flex items-center justify-between mb-2">"
        <h3 className="text-sm font-semibold text-gray-900">Accessibility</h3>"
        <div className={`w-3 h-3 rounded-full ${isAccessible ? 'bg-green-500' : 'bg-yellow-500'}`}></div>
      </div>
      `
      {metrics && (""
        <div className="space-y-2 text-xs mb-3">""
          <div className="flex justify-between">""
            <span className="text-gray-600">Alt Texts:</span>""
            <span className={metrics.altTexts" > 0 ? 'text-green-600' : 'text-red-600'}>
              {metrics.altTexts}
            </span>'
          </div>""
          <div className="flex justify-between">""
            <span className="text-gray-600">Headings:</span>""
            <span className={metrics.headings" >= 3 ? 'text-green-600' : 'text-red-600'}>
              {metrics.headings}
            </span>'
          </div>""
          <div className="flex justify-between">""
            <span className="text-gray-600">Font Size:</span>""
=======

  return (&apos;
    <div className=&quot;fixed bottom-4 left-4 bg-white rounded-lg shadow-lg p-4 max-w-sm z-50&quot;>&quot;"
      <div className=&quot;flex items-center justify-between mb-2&quot;>&quot;"
        <h3 className=&quot;text-sm font-semibold text-gray-900&quot;>Accessibility&quot;</h3>
        <div className={`w-3 h-3 rounded-full ${isAccessible ? &apos;bg-green-500&apos; : &apos;bg-yellow-500&apos;}`}>&apos;</div>
      </div>
      
<<<<<<< HEAD
      {metrics && ("
        <div className="space-y-2 text-xs mb-3">"
          <div className="flex justify-between">"
            <span className="text-gray-600">Alt Texts: </span>"
            <span className={metrics.altTexts" > 0 ? 'text-green-600' : 'text-red-600'}>
              {metrics.altTexts}
            </span>
          </div>"
          <div className="flex justify-between">"
            <span className="text-gray-600">Headings: </span>"
            <span className={metrics.headings" >= 3 ? 'text-green-600' : 'text-red-600'}>
              {metrics.headings}
            </span>
          </div>"
          <div className="flex justify-between">"
            <span className="text-gray-600">Font Size: </span>"
>>>>>>> main
            <span className={metrics.fontSize" >= 16 ? 'text-green-600' : 'text-red-600'}>
=======
      {metrics && (}
        <div className=&quot;space-y-2 text-xs mb-3&quot;>&quot;"
          <div className=&quot;flex justify-between&quot;>&quot;"
            <span className=&quot;text-gray-600&quot;>Alt Texts:&quot;</span>
            <span className={metrics.altTexts > 0 ? &apos;text-green-600&apos; : &apos;text-red-600&apos;}>
              {metrics.altTexts}&apos;
            </span>
          </div>
          <div className=&quot;flex justify-between&quot;>&quot;"
            <span className=&quot;text-gray-600&quot;>Headings:&quot;</span>
            <span className={metrics.headings >= 3 ? &apos;text-green-600&apos; : &apos;text-red-600&apos;}>
              {metrics.headings}&apos;
            </span>
          </div>
<<<<<<< HEAD
          <div className=&quot;flex justify-between&quot;>&quot;"
            <span className=&quot;text-gray-600&quot;>Font Size:&quot;</span>
            <span className={metrics.fontSize >= 16 ? &apos;text-green-600&apos; : &apos;text-red-600&apos;}>
              {metrics.fontSize.toFixed(0)}px&apos;
=======
          <div className="flex justify-between">
            <span className="text-gray-600">Font Size:</span>
            <span className={metrics.fontSize >= 16 ? 'text-green-600' : 'text-red-600'}>
>>>>>>> main
>>>>>>> main
              {metrics.fontSize.toFixed(0)}px
>>>>>>> main
            </span>
          </div>
        </div>
<<<<<<< HEAD
      )}
<<<<<<< HEAD
""
      <div className="space-y-2">"
        <button onClick={toggleHighContrast}``
          className={`w-full text-xs py-1 px-2 rounded transition-colors ${""
            highContrast ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300',``
}`}" >""
          {highContrast ? 'Disable' : 'Enable'} High Contrast
        </button>
        '
        <button onClick={toggleLargeText}``
          className={`w-full text-xs py-1 px-2 rounded transition-colors ${""
            largeText ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300',``
}`}" >""
          {largeText ? 'Disable' : 'Enable'} Large Text
        </button>

        {!isAccessible && ('
          <button onClick={enhanceAccessibility}""
            className="w-full bg-green-600 text-white text-xs py-1 px-2 rounded hover:bg-green-700 transition-colors"" >
=======
"
      <div className="space-y-2">
        <button onClick={toggleHighContrast}` className={`w-full text-xs py-1 px-2 rounded transition-colors ${" highContrast ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover: bg-gray-300',` }`}" >"
          {highContrast ? 'Disable' : 'Enable'} High Contrast
        </button>
        
        <button onClick={toggleLargeText}` className={`w-full text-xs py-1 px-2 rounded transition-colors ${" largeText ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover: bg-gray-300',` }`}" >"
          {largeText ? 'Disable' : 'Enable'} Large Text
        </button>

        {!isAccessible && (
          <button onClick={enhanceAccessibility}" className="w-full bg-green-600 text-white text-xs py-1 px-2 rounded hover: bg-green-700 transition-colors"" >
=======
<<<<<<< HEAD
      )}""
""
      <div className="space-y-2">`
        <button onClick={toggleHighContrast}`"`"
          className={`w-full text-xs py-1 px-2 rounded transition-colors ${"`"
            highContrast ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300', `",`"
}`}"" >""
          {highContrast ? 'Disable' : 'Enable'} High Contrast
        </button>
        `
        <button onClick={toggleLargeText}`"`"
          className={`w-full text-xs py-1 px-2 rounded transition-colors ${"`"
            largeText ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300', `",`"
}`}"" >""
          {largeText ? 'Disable' : 'Enable'} Large Text
        </button>

        {!isAccessible && (""
          <button onClick={enhanceAccessibility}""
            className="w-full bg-green-600 text-white text-xs py-1 px-2 rounded hover:bg-green-700 transition-colors""" >
=======
      )}

      <div className=&quot;space-y-2&quot;>&quot;"
        <button
          onClick={toggleHighContrast}
          className={`w-full text-xs py-1 px-2 rounded transition-colors ${
            highContrast ? &apos;bg-blue-600 text-white&apos; : &apos;bg-gray-200 text-gray-700 hover:bg-gray-300&apos;
          }`}
        >
          {highContrast ? &apos;Disable&apos; : &apos;Enable&apos;} High Contrast&apos;
        </button>
        
        <button
          onClick={toggleLargeText}
          className={`w-full text-xs py-1 px-2 rounded transition-colors ${
            largeText ? &apos;bg-blue-600 text-white&apos; : &apos;bg-gray-200 text-gray-700 hover:bg-gray-300&apos;
          }`}
        >
          {largeText ? &apos;Disable&apos; : &apos;Enable&apos;} Large Text&apos;
        </button>

        {!isAccessible && (}
          <button
            onClick={enhanceAccessibility}
            className=&quot;w-full bg-green-600 text-white text-xs py-1 px-2 rounded hover:bg-green-700 transition-colors&quot;
          >
<<<<<<< HEAD
            Enhance Accessibility&quot;
=======
>>>>>>> main
>>>>>>> main
>>>>>>> main
            Enhance Accessibility
>>>>>>> main
          </button>
        )}
      </div>
    </div>
<<<<<<< HEAD
  );, };
export default AccessibilityEnhancer;"`"
=======
  );
};
<<<<<<< HEAD
export default AccessibilityEnhancer;"
=======

export default AccessibilityEnhancer;
>>>>>>> main
>>>>>>> main
