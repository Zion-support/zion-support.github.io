import React, { useEffect, useState } from 'react';

interface AccessibilitySettings {
  highContrast: boolean;
  reducedMotion: boolean;
  fontSize: 'small' | 'medium' | 'large';
  focusVisible: boolean;
}

const AccessibilityEnhancer: React.FC = () => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    reducedMotion: false,
    fontSize: 'medium',
    focusVisible: false});

  useEffect(() => {
    // Check for user preferences,
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
    
    setSettings(prev => ({
      ...prev,
      reducedMotion: prefersReducedMotion,
      highContrast: prefersHighContrast}));

    // Apply accessibility settings,
const root = document.documentElement;
    
    if (settings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    if (settings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    // Font size,
root.classList.remove('font-small', 'font-medium', 'font-large');
    root.classList.add(`font-${settings.fontSize}`);

    // Focus visible,
if (settings.focusVisible) {
      root.classList.add('focus-visible');
    } else {
      root.classList.remove('focus-visible');
    }

    // Add keyboard navigation support,
const handleKeyDown = (e: KeyboardEvent) => {
      // Skip to main content,
if (e.key === 'Tab' && e.shiftKey && e.target === document.body) {
        const mainContent = document.querySelector('main, [role="main"]');"
        if (mainContent) {
          (mainContent as HTMLElement).focus();
          e.preventDefault();
        }
      }

      // Escape key to close modals/dropdowns,
if (e.key === 'Escape') {
        const activeElement = document.activeElement as HTMLElement;
        if (activeElement && activeElement.blur) {
          activeElement.blur();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [settings]);

  // Add ARIA live region for announcements,
useEffect(() => {
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    liveRegion.id = 'live-region';
    document.body.appendChild(liveRegion);

    return () => {
      const existingLiveRegion = document.getElementById('live-region');
      if (existingLiveRegion) {
        existingLiveRegion.remove();
      }
    };
  }, []);

  // Announce page changes,
useEffect(() => {
    const announcePageChange = () => {
      const liveRegion = document.getElementById('live-region');
      if (liveRegion) {
        const pageTitle = document.title;
        liveRegion.textContent = `Page loaded: ${pageTitle}`;
      }
    };

    // Announce after a short delay to ensure content is loaded,
const timeoutId = setTimeout(announcePageChange, 1000);

    return () => clearTimeout(timeoutId);
  }, []);

  // Don't render anything in production,
if (process.env.NODE_ENV === 'production') {
    return null;
  }

  return (
    <div className="fixed top-4 right-4 bg-black/80 text-white p-4 rounded-lg text-xs z-50"></div>"
      <div className="mb-2 font-bold">Accessibility Settings</div>"
      <div className="space-y-2"></div>"
        <label className="flex items-center space-x-2"></label>"
          <input,
type="checkbox""
            checked={settings.highContrast}
            onChange={(e) => setSettings(prev => ({ ...prev, highContrast: e.target.checked }))}
            className="rounded""
          />
          <span>High Contrast</span>
        </label>
        <label className="flex items-center space-x-2"></label>"
          <input,
type="checkbox""
            checked={settings.reducedMotion}
            onChange={(e) => setSettings(prev => ({ ...prev, reducedMotion: e.target.checked }))}
            className="rounded""
          />
          <span>Reduced Motion</span>
        </label>
        <div></div>
          <label className="block mb-1">Font Size:</label>"
          <select,
value={settings.fontSize}
            onChange={(e) => setSettings(prev => ({ ...prev, fontSize: e.target.value as any }))}
            className="bg-gray-700 text-white rounded px-2 py-1""
          >
            <option value="small">Small</option>"
            <option value="medium">Medium</option>"
            <option value="large">Large</option>"
          </select>
        </div>
        <label className="flex items-center space-x-2"></label>"
          <input,
type="checkbox""
            checked={settings.focusVisible}
            onChange={(e) => setSettings(prev => ({ ...prev, focusVisible: e.target.checked }))}
            className="rounded""
          />
          <span>Focus Visible</span>
        </label>
      </div>
    </div>
  );
};

export default AccessibilityEnhancer;
