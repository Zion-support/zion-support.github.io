import React, { useEffect, useState } from 'react';

interface AccessibilitySettings {
  highContrast: boolean;
  reducedMotion: boolean;
  fontSize: 'normal' | 'large' | 'extra-large';
  focusVisible: boolean;
}

const AccessibilityEnhancer: React.FC = () => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    reducedMotion: false,
    fontSize: 'normal',
    focusVisible: false,
  });

  useEffect(() => {
    // Load saved accessibility settings
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      try {
        setSettings(JSON.parse(savedSettings));
      } catch (error) {
        console.warn('Failed to load accessibility settings:', error);
      }
    }

    // Add keyboard navigation support
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
        setSettings(prev => ({ ...prev, focusVisible: true }));
      }
      
      // Skip to main content functionality
      if (event.key === 'Enter' && event.target instanceof HTMLElement) {
        if (event.target.getAttribute('data-skip-to-main') === 'true') {
          const main = document.querySelector('main');
          if (main) {
            main.focus();
            main.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }

      // Accessibility shortcuts
      if (event.ctrlKey && event.key === 'h') {
        event.preventDefault();
        setSettings(prev => ({ ...prev, highContrast: !prev.highContrast }));
      }
    };

    const handleMouseDown = () => {
      document.body.classList.remove('keyboard-navigation');
      setSettings(prev => ({ ...prev, focusVisible: false }));
    };

    // Add skip to main content link
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
    skipLink.setAttribute('data-skip-to-main', 'true');
    document.body.insertBefore(skipLink, document.body.firstChild);

    // Add main content ID
    const main = document.querySelector('main');
    if (main && !main.id) {
      main.id = 'main-content';
    }

    // Add ARIA landmarks
    const nav = document.querySelector('nav');
    if (nav && !nav.getAttribute('role')) {
      nav.setAttribute('role', 'navigation');
      nav.setAttribute('aria-label', 'Main navigation');
    }

    const footer = document.querySelector('footer');
    if (footer && !footer.getAttribute('role')) {
      footer.setAttribute('role', 'contentinfo');
    }

    // Add accessibility controls
    const accessibilityControls = document.createElement('div');
    accessibilityControls.className = 'accessibility-controls fixed top-4 right-4 z-50 bg-white shadow-lg rounded-lg p-4 hidden';
    accessibilityControls.innerHTML = `
      <h3 class="text-lg font-semibold mb-2">Accessibility Settings</h3>
      <div class="space-y-2">
        <label class="flex items-center">
          <input type="checkbox" id="high-contrast" class="mr-2">
          High Contrast
        </label>
        <label class="flex items-center">
          <input type="checkbox" id="reduced-motion" class="mr-2">
          Reduced Motion
        </label>
        <div>
          <label for="font-size" class="block text-sm font-medium">Font Size:</label>
          <select id="font-size" class="mt-1 block w-full text-sm">
            <option value="normal">Normal</option>
            <option value="large">Large</option>
            <option value="extra-large">Extra Large</option>
          </select>
        </div>
      </div>
    `;
    document.body.appendChild(accessibilityControls);

    // Add accessibility toggle button
    const toggleButton = document.createElement('button');
    toggleButton.innerHTML = '♿';
    toggleButton.className = 'accessibility-toggle fixed top-4 right-4 z-50 bg-blue-600 text-white p-2 rounded-full shadow-lg hover:bg-blue-700';
    toggleButton.setAttribute('aria-label', 'Toggle accessibility settings');
    toggleButton.onclick = () => {
      accessibilityControls.classList.toggle('hidden');
    };
    document.body.appendChild(toggleButton);

    // Set up event listeners
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);

    // Set up accessibility control listeners
    const highContrastCheckbox = document.getElementById('high-contrast') as HTMLInputElement;
    const reducedMotionCheckbox = document.getElementById('reduced-motion') as HTMLInputElement;
    const fontSizeSelect = document.getElementById('font-size') as HTMLSelectElement;

    if (highContrastCheckbox) {
      highContrastCheckbox.checked = settings.highContrast;
      highContrastCheckbox.onchange = (e) => {
        const checked = (e.target as HTMLInputElement).checked;
        setSettings(prev => ({ ...prev, highContrast: checked }));
      };
    }

    if (reducedMotionCheckbox) {
      reducedMotionCheckbox.checked = settings.reducedMotion;
      reducedMotionCheckbox.onchange = (e) => {
        const checked = (e.target as HTMLInputElement).checked;
        setSettings(prev => ({ ...prev, reducedMotion: checked }));
      };
    }

    if (fontSizeSelect) {
      fontSizeSelect.value = settings.fontSize;
      fontSizeSelect.onchange = (e) => {
        const value = (e.target as HTMLSelectElement).value as 'normal' | 'large' | 'extra-large';
        setSettings(prev => ({ ...prev, fontSize: value }));
      };
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
      
      // Clean up elements
      const existingSkipLink = document.querySelector('[data-skip-to-main]');
      if (existingSkipLink) {
        existingSkipLink.remove();
      }
      
      const existingControls = document.querySelector('.accessibility-controls');
      if (existingControls) {
        existingControls.remove();
      }
      
      const existingToggle = document.querySelector('.accessibility-toggle');
      if (existingToggle) {
        existingToggle.remove();
      }
    };
  }, []);

  // Apply accessibility settings
  useEffect(() => {
    // Save settings to localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(settings));

    // Apply high contrast
    if (settings.highContrast) {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }

    // Apply reduced motion
    if (settings.reducedMotion) {
      document.body.classList.add('reduced-motion');
    } else {
      document.body.classList.remove('reduced-motion');
    }

    // Apply font size
    document.body.classList.remove('font-normal', 'font-large', 'font-extra-large');
    document.body.classList.add(`font-${settings.fontSize}`);

    // Apply focus visible
    if (settings.focusVisible) {
      document.body.classList.add('keyboard-user');
    } else {
      document.body.classList.remove('keyboard-user');
    }
  }, [settings]);

  return null;
};

export default AccessibilityEnhancer;