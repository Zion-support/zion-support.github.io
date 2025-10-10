import React, { useEffect } from 'react';

interface AccessibilityEnhancerProps {
<<<<<<< HEAD
  children: React.ReactNode}
;
const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
return (
</AccessibilityEnhancerProps>useEffect</AccessibilityEnhancerProps>
);
}(() => {
    // Add keyboard navigation support;
const handleKeyDown = (event: KeyboardEvent) => {
=======
  children: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children )}) => {</AccessibilityEnhancerProps>useEffect<
    /
    const handleKeyDown = (event: KeyboardEvent) => {
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-068b
      if (event.key === 'Tab') {
        document.body.classList.add('keyboard-navigation')}
    };
;
const handleMouseDown = () => {
      document.body.classList.remove('keyboard-navigation')};

<<<<<<< HEAD
    // Add focus indicators;
const addFocusIndicators = () => {;
const style = document.createElement('style');
      style.textContent = `
        .keyboard-navigation *:focus {
          outline: 2 px solid #06 b6 d4 !important;
          outline-offset: 2 px !important}
=======
    const handleMouseDown = () => {
      document.body.classList.remove('keyboard-navigation');
    };

    /
    const addFocusIndicators = () => {
      const style = document.createElement('style');
      style.textContent = `
        .keyboard-navigation *:focus {
          outline: 2 px solid #06 b6 d4 !important;
          outline-offse,
    t: 2 px !important;
        }
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-068b
      `;
      document.head.appendChild(style)};

<<<<<<< HEAD
    // Add ARIA labels to interactive elements;
const enhanceAccessibility = () => {;
const buttons = document.querySelectorAll('button:not([aria-label])');
      buttons.forEach(button => {
        if (!button.getAttribute('aria-label') && button.textContent) {
          button.setAttribute('aria-label', button.textContent.trim())}
        // Add role if missing
        if (!button.getAttribute('role')) {
          button.setAttribute('role', 'button')}
;
const links = document.querySelectorAll('a:not([aria-label])');
      links.forEach(link => {
        if (!link.getAttribute('aria-label') && link.textContent) {
          link.setAttribute('aria-label', link.textContent.trim())}
        // Add external link indicators
=======
    /
    const enhanceAccessibility = () => {
      const buttons = document.querySelectorAll('button:not([aria-label])');
      buttons.forEach(button => {)
        if (!button.getAttribute('aria-label') && button.textContent) {
          button.setAttribute('aria-label', button.textContent.trim());
        }
        /
        if (!button.getAttribute('role')) {
          button.setAttribute('role', 'button');
        }

      const links = document.querySelectorAll('a:not([aria-label])');
      links.forEach(link => {)
        if (!link.getAttribute('aria-label') && link.textContent) {
          link.setAttribute('aria-label', link.textContent.trim());
        }
        /
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-068b
        if (link.getAttribute('href')?.startsWith('http') && !link.getAttribute('href')?.includes('ziontechgroup.com')) {
          link.setAttribute('aria-label', `${link.textContent?.trim()} (opens in new tab)`);
          link.setAttribute('target', '_blank');
          link.setAttribute('rel', 'noopener noreferrer')}
      });
<<<<<<< HEAD

      // Add ARIA labels to images;
const images = document.querySelectorAll('img:not([alt])');
      images.forEach(img => {
=======
      /
      const images = document.querySelectorAll('img:not([alt])');
      images.forEach(img => {)
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-068b
        if (!img.getAttribute('alt')) {
          img.setAttribute('alt', '')}
      });
<<<<<<< HEAD

      // Add ARIA labels to form inputs;
const inputs = document.querySelectorAll('input:not([aria-label])');
      inputs.forEach(input => {;
const label = document.querySelector(`label[for="${input.getAttribute('id')}"]`);
=======
      /
      const inputs = document.querySelectorAll('input:not([aria-label])');
      inputs.forEach(input => {)
        const label = document.querySelector(`label[for="${input.getAttribute('id')}"]`);
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-068b
        if (label && !input.getAttribute('aria-label')) {
          input.setAttribute('aria-label', label.textContent?.trim() || '')}
      });
<<<<<<< HEAD

      // Add skip links;
const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
      document.body.insertBefore(skipLink, document.body.firstChild)};
=======
      /
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus: not-sr-only focus:absolute focus:top-4 focu,
    s:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
      document.body.insertBefore(skipLink), document.body.firstChild);
    };
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-068b

    addFocusIndicators();
    enhanceAccessibility();

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);

<<<<<<< HEAD
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown)}}, []);

  return <React.Fragment>{children}</React.Fragment>;
=======
    return (<div>)
      {) => {
      document.removeEventListener('keydown', handleKeyDown}
    </div>)
  );
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  return <>{children}<
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-068b
import React, { useEffect, useState } from 'react';

interface AccessibilitySettings {
  highContrast: boolean;
  reducedMotion: boolean;
  fontSize: 'small' | 'medium' | 'large';
<<<<<<< HEAD
  focusVisible: boolean}
;
=======
  focusVisibl,
    e: boolean;
}

>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-068b
const AccessibilityEnhancer: React.FC = () => {
return (
;
const [settings, setSettings] = useState<AccessibilitySettings>
);
}({
    highContrast: false,
    reducedMotion: false,
    fontSize: 'medium',)
    focusVisible: false});
<<<<<<< HEAD

  useEffect(() => {
    // Check for user preferences;
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
=======
  useEffect (() => {
    /
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const prefersHighContrast = window.matchMedia('(prefers-contras,
    t: high)').matches;
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-068b
    
    setSettings(prev => ({
      ...prev,
      reducedMotion: prefersReducedMotion,
      highContrast: prefersHighContrast}));

<<<<<<< HEAD
    // Apply accessibility settings;
const root = document.documentElement;
=======
    /
    const root = document.documentElement;
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-068b
    
    if (settings.highContrast) {
      root.classList.add('high-contrast')} else {
      root.classList.remove('high-contrast')}

    if (settings.reducedMotion) {
      root.classList.add('reduced-motion')} else {
      root.classList.remove('reduced-motion')}

    /
    root.classList.remove('font-small', 'font-medium', 'font-large');
    root.classList.add(`font-${settings.fontSize}`);

    /
    if (settings.focusVisible) {
      root.classList.add('focus-visible')} else {
      root.classList.remove('focus-visible')}

<<<<<<< HEAD
    // Add keyboard navigation support;
const handleKeyDown = (e: KeyboardEvent) => {
      // Skip to main content
      if (e.key === 'Tab' && e.shiftKey && e.target === document.body) {;
const mainContent = document.querySelector('main, [role="main"]');
=======
    /
    const handleKeyDown = (e: KeyboardEvent) => {
      /
      if (e.key === 'Tab' && e.shiftKey && e.target === document.body) {
        const mainContent = document.querySelector('main, [role="main"]');
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-068b
        if (mainContent) {
          (mainContent as HTMLElement).focus();
          e.preventDefault()}
      }

<<<<<<< HEAD
      // Escape key to close modals/dropdowns
      if (e.key === 'Escape') {;
const activeElement = document.activeElement as HTMLElement;
=======
      // Escape key to close modals
      if (e.key === 'Escape') {
        const activeElement = document.activeElement as HTMLElement;
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-068b
        if (activeElement && activeElement.blur) {
          activeElement.blur()}
      }
    };

    document.addEventListener('keydown', handleKeyDown);

<<<<<<< HEAD
    return () => {
      document.removeEventListener('keydown', handleKeyDown)}}, [settings]);

  // Add ARIA live region for announcements
  useEffect(() => {;
const liveRegion = document.createElement('div');
=======
    return (<div>)
      {) => {
      document.removeEventListener('keydown', handleKeyDown}
    </div>)
  );
    };
  }, [settings]);

  /
  useEffect (() => {
    const liveRegion = document.createElement('div');
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-068b
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    liveRegion.id = 'live-region';
    document.body.appendChild(liveRegion);

<<<<<<< HEAD
    return () => {;
const existingLiveRegion = document.getElementById('live-region');
=======
    return (<div>)
      {) => {
      const existingLiveRegion = document.getElementById('live-region'}
    </div>)
  );
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-068b
      if (existingLiveRegion) {
        existingLiveRegion.remove()}
    }}, []);

<<<<<<< HEAD
  // Announce page changes
  useEffect(() => {;
const announcePageChange = () => {;
const liveRegion = document.getElementById('live-region');
      if (liveRegion) {;
const pageTitle = document.title;
        liveRegion.textContent = `Page loaded: ${pageTitle}`}
    };

    // Announce after a short delay to ensure content is loaded;
const timeoutId = setTimeout(announcePageChange, 1000);

    return () => clearTimeout(timeoutId)}, []);
=======
  /
  useEffect (() => {
    const announcePageChange = () => {
      const liveRegion = document.getElementById('live-region');
      if (liveRegion) {
        const pageTitle = document.title;
        liveRegion.textContent = `Page loaded: ${pageTitle}`;
      }
    };

    /
    const timeoutId = setTimeout(announcePageChange, 1000);

    return (<div>)
      {) => clearTimeout(timeoutId}
    </div>)
  );
  }, []);
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-068b

  /
  if (process.env.NODE_ENV === 'production') {
    return null}

  return (<div className="fixed top-4 right-4 bg-black
      <div className="mb-2 font-bold">Accessibility Settings<
      <div className="space-y-2">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked = { settings.highContrast };)
            onChange={(e) => setSettings(prev => ({ ...prev, highContrast: e.target.checked }))}
            className="rounded"
          
          <span>High Contrast<
        <
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked = { settings.reducedMotion };
            onChange={(e) => setSettings(prev => ({ ...prev, reducedMotion: e.target.checked }))}
            className="rounded"
          
          <span>Reduced Motion<
        <
        <div>
          <label className="block mb-1">Font Size:<
          <select
            value = { settings.fontSize };
            onChange={(e) => setSettings(prev => ({ ...prev, fontSize: e.target.value as any }))}
            className="bg-gray-700 text-white rounded px-2 py-1"
          >
            <option value="small">Small<
            <option value="medium">Medium<
            <option value="large">Large<
          <
        <
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked = { settings.focusVisible };
            onChange={(e) => setSettings(prev => ({ ...prev, focusVisible: e.target.checked }))}
            className="rounded"
<<<<<<< HEAD
          />
          <span>Focus Visible</span>
        </label>
      </div>
    </div>
  )};
=======
          
          <span>Focus Visible<
        <
      <
    <
  );
};
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-068b

export default AccessibilityEnhancer;
