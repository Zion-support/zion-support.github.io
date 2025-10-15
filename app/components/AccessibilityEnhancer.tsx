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
    focusVisible: false,
  });

  useEffect(() => {
    // Load saved accessibility settings
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      try {
        setSettings(JSON.parse(savedSettings));
      } catch (error) {
        console.warn('Failed to parse accessibility settings:', error);
      }
    }

    // Apply accessibility settings
    applyAccessibilitySettings(settings);

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
      if (event.altKey) {
        switch (event.key) {
          case '1':
            event.preventDefault();
            const main = document.querySelector('main');
            if (main) main.focus();
            break;
          case '2':
            event.preventDefault();
            const nav = document.querySelector('nav');
            if (nav) nav.focus();
            break;
          case '3':
            event.preventDefault();
            const footer = document.querySelector('footer');
            if (footer) footer.focus();
            break;
        }
      }
    };

    const handleMouseDown = () => {
      document.body.classList.remove('keyboard-navigation');
      setSettings(prev => ({ ...prev, focusVisible: false }));
    };

    // Apply accessibility settings to the document
    const applyAccessibilitySettings = (newSettings: AccessibilitySettings) => {
      const body = document.body;
      
      // High contrast mode
      if (newSettings.highContrast) {
        body.classList.add('high-contrast');
      } else {
        body.classList.remove('high-contrast');
      }
      
      // Reduced motion
      if (newSettings.reducedMotion) {
        body.classList.add('reduced-motion');
      } else {
        body.classList.remove('reduced-motion');
      }
      
      // Font size
      body.classList.remove('font-small', 'font-medium', 'font-large');
      body.classList.add(`font-${newSettings.fontSize}`);
      
      // Focus visible
      if (newSettings.focusVisible) {
        body.classList.add('focus-visible');
      } else {
        body.classList.remove('focus-visible');
      }
    };

    // Add skip to main content link
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
    skipLink.setAttribute('data-skip-to-main', 'true');
    skipLink.setAttribute('aria-label', 'Skip to main content');
    document.body.insertBefore(skipLink, document.body.firstChild);

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
          <label for="font-size" class="block text-sm font-medium">Font Size</label>
          <select id="font-size" class="mt-1 block w-full rounded-md border-gray-300">
            <option value="small">Small</option>
            <option value="medium" selected>Medium</option>
            <option value="large">Large</option>
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

    // Add event listeners for accessibility controls
    const setupAccessibilityControls = () => {
      const highContrastCheckbox = document.getElementById('high-contrast') as HTMLInputElement;
      const reducedMotionCheckbox = document.getElementById('reduced-motion') as HTMLInputElement;
      const fontSizeSelect = document.getElementById('font-size') as HTMLSelectElement;

      if (highContrastCheckbox) {
        highContrastCheckbox.checked = settings.highContrast;
        highContrastCheckbox.onchange = (e) => {
          const newSettings = { ...settings, highContrast: (e.target as HTMLInputElement).checked };
          setSettings(newSettings);
          applyAccessibilitySettings(newSettings);
          localStorage.setItem('accessibility-settings', JSON.stringify(newSettings));
        };
      }

      if (reducedMotionCheckbox) {
        reducedMotionCheckbox.checked = settings.reducedMotion;
        reducedMotionCheckbox.onchange = (e) => {
          const newSettings = { ...settings, reducedMotion: (e.target as HTMLInputElement).checked };
          setSettings(newSettings);
          applyAccessibilitySettings(newSettings);
          localStorage.setItem('accessibility-settings', JSON.stringify(newSettings));
        };
      }

      if (fontSizeSelect) {
        fontSizeSelect.value = settings.fontSize;
        fontSizeSelect.onchange = (e) => {
          const newSettings = { ...settings, fontSize: (e.target as HTMLSelectElement).value as 'small' | 'medium' | 'large' };
          setSettings(newSettings);
          applyAccessibilitySettings(newSettings);
          localStorage.setItem('accessibility-settings', JSON.stringify(newSettings));
        };
      }
    };

    // Setup controls after a short delay to ensure DOM is ready
    setTimeout(setupAccessibilityControls, 100);

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
      
      // Clean up elements
      const existingSkipLink = document.querySelector('[data-skip-to-main]');
      if (existingSkipLink) {
        existingSkipLink.remove();
      }
      
      const accessibilityControls = document.querySelector('.accessibility-controls');
      if (accessibilityControls) {
        accessibilityControls.remove();
      }
      
      const toggleButton = document.querySelector('.accessibility-toggle');
      if (toggleButton) {
        toggleButton.remove();
      }
    };
  }, [settings]);

  return null;
};

export default AccessibilityEnhancer;