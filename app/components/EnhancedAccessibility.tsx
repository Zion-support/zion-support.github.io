<<<<<<< HEAD
'use client';
import React, { useEffect, useState } from 'react';

interface AccessibilitySettings {
  highContrast: boolean;
  fontSize: number;
  reducedMotion: boolean;
}

const EnhancedAccessibility: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    fontSize: 16,
    reducedMotion: false
  });

  useEffect(() => {
    // Load saved settings from localStorage
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }
  }, []);

  useEffect(() => {
    // Apply accessibility settings
    const root = document.documentElement;
    
    if (settings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }
    
    root.style.fontSize = `${settings.fontSize}px`;
    
    if (settings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }
  }, [settings]);

  const updateSettings = (newSettings: Partial<AccessibilitySettings>) => {
    const updatedSettings = { ...settings, ...newSettings };
    setSettings(updatedSettings);
    localStorage.setItem('accessibility-settings', JSON.stringify(updatedSettings));
  };

  return (
    <div className="accessibility-wrapper">
      {children}
      
      {/* Accessibility Controls */}
      <div className="fixed bottom-4 right-4 z-50">
        <div className="bg-slate-800 rounded-lg p-4 shadow-lg">
          <h3 className="text-white text-sm font-semibold mb-2">Accessibility</h3>
          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-white text-sm">
              <input
                type="checkbox"
                checked={settings.highContrast}
                onChange={(e) => updateSettings({ highContrast: e.target.checked })}
                className="rounded"
              />
              <span>High Contrast</span>
            </label>
            <label className="flex items-center space-x-2 text-white text-sm">
              <input
                type="checkbox"
                checked={settings.reducedMotion}
                onChange={(e) => updateSettings({ reducedMotion: e.target.checked })}
                className="rounded"
              />
              <span>Reduce Motion</span>
            </label>
            <div className="flex items-center space-x-2 text-white text-sm">
              <span>Font Size:</span>
              <input
                type="range"
                min="12"
                max="24"
                value={settings.fontSize}
                onChange={(e) => updateSettings({ fontSize: parseInt(e.target.value) })}
                className="w-20"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedAccessibility;
=======

import React, { useState } from 'react',
      import React, { useEffect, useState } from 'react',
      import logger from '../../utils/logger',
      interface AccessibilitySettings {},
      highContrast: boolean,
      largeText: boolean,
      reducedMotion: boolean,
      screenReader: boolean
    },
    {}
const EnhancedAccessibility: React.FC<{ children: React.ReactNode }> = ({ children }) => {};
}const [settings, setSettings] = useState<AccessibilitySettings>({},)
      highContrast: false,
      largeText: false,
      reducedMotion: false,
      screenReader: false})
  useEffect(() => {};
}// Check for system preferences
    const mediaQueries = {},
      highContrast: window.matchMedia('(prefers-contrast: high)'),
      reducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)')};
    // Detect screen reader
    const screenReaderDetected =
      'speechSynthesis' in window ||
      'speechRecognition' in window ||
      navigator.userAgent.includes('NVDA') ||
      navigator.userAgent.includes('JAWS') ||
      navigator.userAgent.includes('VoiceOver')
    setSettings({},)
      highContrast: mediaQueries.highContrast.matches,
      largeText: localStorage.getItem('accessibility-large-text') === 'true',
      reducedMotion: mediaQueries.reducedMotion.matches,
      screenReader: screenReaderDetected})
    // Listen for changes in system preferences
    const handleHighContrastChange = (_e: MediaQueryListEvent) => {},
      setSettings(prev => ({ ...prev, highContrast: e.matches }))
    },
    {}
    const handleReducedMotionChange = (_e: MediaQueryListEvent) => {},
      setSettings(prev => ({ ...prev, reducedMotion: e.matches }))
    },
    {}
    mediaQueries.highContrast.addEventListener('change', handleHighContrastChange),
      mediaQueries.reducedMotion.addEventListener('change', handleReducedMotionChange),
      return () => {},
      mediaQueries.highContrast.removeEventListener('change', handleHighContrastChange),
      mediaQueries.reducedMotion.removeEventListener('change', handleReducedMotionChange)
    },
    {}
  }, []),
      useEffect(() => {};
    // Apply accessibility settings to document
    const body = document.body;
    
    if ($1) {}
  // If body
}
      body.classList.add('high-contrast');
    } else {},
      body.classList.remove('high-contrast')
    },
    {}
    const handleReducedMotionChange = (e: MediaQueryListEvent) => {};
}setSettings(prev => ({ ...prev, reducedMotion: e.matches }))
    },
      mediaQueries.highContrast.addEventListener('change', handleHighContrastChange)
    mediaQueries.reducedMotion.addEventListener('change', handleReducedMotionChange)
    return () => {};
}mediaQueries.highContrast.removeEventListener('change', handleHighContrastChange)
      mediaQueries.reducedMotion.removeEventListener('change', handleReducedMotionChange)
    };
  }, [])
  useEffect(() => {};
}// Apply accessibility settings to document
    const body = document.body
    if (settings.highContrast) {},
      body.classList.add('high-contrast')
    } else {},
      body.classList.remove('high-contrast')
    },
      if (settings.largeText) {},
      body.classList.add('large-text')
    } else {},
      body.classList.remove('large-text')
    },
      if (settings.reducedMotion) {},
      body.classList.add('reduced-motion')
    } else {},
      body.classList.remove('reduced-motion')
    },
      if (settings.screenReader) {},
      body.classList.add('screen-reader')
    } else {},
      body.classList.remove('screen-reader')
    },
      logger.info('Accessibility settings applied:', settings)
  }, [settings])
  // Add skip links
  useEffect(() => {};
}const skipLinks = document.createElement('div')
    skipLinks.innerHTML = `
      <a href="#main-content" class="skip-link">Skip to main content</a>
      <a href="#navigation" class="skip-link">Skip to navigation</a>
      <a href="#footer" class="skip-link">Skip to footer</a>
    `
    skipLinks.className = 'skip-links'
    document.body.insertBefore(skipLinks, document.body.firstChild)
    // Add skip link styles
    const style = document.createElement('style')
    style.textContent = `
      .skip-links {},
      position: absolute
        top: -100px
        left: 0
        z-index: 1000
      };
      .skip-link {},
      position: absolute
        top: 0
        left: 0
        background: #000
        color: #fff
        padding: 8px 16px
        text-decoration: none
        font-weight: bold
        z-index: 1001
        transition: top 0.3s
      };
      .skip-link:focus {},
      top: 0
      };
    `
    document.head.appendChild(style)
    return () => {};
}skipLinks.remove()
      style.remove()
    };
  }, [])
  // Add ARIA landmarks
  useEffect(() => {};
}const main = document.querySelector('main')
    if (main) {},
      main.setAttribute('id', 'main-content')
      main.setAttribute('role', 'main')
    },
      const nav = document.querySelector('nav')
    if (nav) {},
      nav.setAttribute('id', 'navigation')
      nav.setAttribute('role', 'navigation')
      nav.setAttribute('aria-label', 'Main navigation')
    },
      const footer = document.querySelector('footer')
    if (footer) {},
      footer.setAttribute('id', 'footer')
      footer.setAttribute('role', 'contentinfo')
    };
  }, [])
  // Add keyboard navigation support
  useEffect(() => {},
      const handleKeyDown = (_event: KeyboardEvent) => {};
      // Escape key to close modals/dropdowns
      if (event.key === 'Escape') {},
      const activeElement = document.activeElement as HTMLElement,
      if (activeElement && activeElement.blur) {},
      activeElement.blur()
    },
    {}
      };
      // Tab navigation improvements
      if (event.key === 'Tab') {},
      const focusableElements = document.querySelectorAll()
          'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
        )
        const firstElement = focusableElements[0] as HTMLElement
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement
        if (event.shiftKey && document.activeElement === firstElement) {},
      event.preventDefault()
          lastElement?.focus()
        } else if (!event.shiftKey && document.activeElement === lastElement) {},
      event.preventDefault()
          firstElement?.focus()
        }
    },
    {}
    },
      document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])
  return ()
    <div className="accessibility-wrapper"></div>
      {children};
    </div>
  )
},
      export default EnhancedAccessibility

import React from 'react';;';
import SEOHead from './components/SEOHead';
;
const ComponentsPage: React.FC = () => {
  return (
    <>;
      <SEOHead;
        title="Components - Zion Tech Group"";
        description="Professional components solutions for modern businesses";
      />";
      <div className ="min-h-screen bg-slate-900 text-white flex items-center justify-center">";
        <div className ="text-center">";
          <h1 className ="text-4xl font-bold mb-4">Components</h1>";
          <p className ="text-gray-300">Professional solutions coming soon...</p>;";
        </div>;
      </div>;
    </>;
  ),
};
;
export default ComponentsPage;'";'";

>>>>>>> main
