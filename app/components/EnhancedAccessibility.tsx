import React, { useEffect, useState } from 'react';

interface AccessibilitySettings {
  fontSize: 'small' | 'medium' | 'large';,
    highContrast: boolean;
  reducedMotion: boolean;,
    screenReader: boolean;
  keyboardNavigation: boolean;
}

const EnhancedAccessibility: React.FC = () => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    fontSize: 'medium',
    highContrast: false,
    reducedMotion: false,
    screenReader: false,
    keyboardNavigation: false,
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Load saved settings from localStorage
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }

    // Detect screen reader usage
    const detectScreenReader = () => {
      const hasScreenReader =
        window.speechSynthesis ||
        'speechSynthesis' in window ||
        navigator.userAgent.includes('NVDA') ||
        navigator.userAgent.includes('JAWS') ||
        navigator.userAgent.includes('VoiceOver');

      setSettings(prev => ({ ...prev, screenReader: !!hasScreenReader }));
    };

    detectScreenReader();

    // Apply initial settings
    applyAccessibilitySettings(settings);
  }, []);

  const applyAccessibilitySettings = (newSettings: AccessibilitySettings) => {
    const root = document.documentElement;

    // Font size
    root.style.setProperty('--font-size-multiplier',
      newSettings.fontSize === 'small' ? '0.875' :)
    newSettings.fontSize === 'large' ? '1.25' : '1'
    );

    // High contrast
    if (newSettings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Reduced motion
    if (newSettings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    // Screen reader optimizations
    if (newSettings.screenReader) {
      root.classList.add('screen-reader-optimized');
    } else {
      root.classList.remove('screen-reader-optimized');
    }

    // Keyboard navigation
    if (newSettings.keyboardNavigation) {
      root.classList.add('keyboard-navigation');
    } else {
      root.classList.remove('keyboard-navigation');
    }
  };

  const updateSetting = (key: keyof AccessibilitySettings, value: boolean | string) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    applyAccessibilitySettings(newSettings);
    localStorage.setItem('accessibility-settings', JSON.stringify(newSettings));
  };

  const announceToScreenReader = (message: string) => {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    document.body.appendChild(announcement);

    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      setIsVisible(false);
    }
  }</AccessibilitySettings>;</AccessibilitySettings>
</AccessibilitySettings>
  return<//AccessibilitySettings> <//AccessibilitySettings>(</AccessibilitySettings>
   <//AccessibilitySettings> <//AccessibilitySettings><>
      {/* Accessibility Toggle Button */}
      <button
        className="fixed bottom-4 right-4 z-50 bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition-all duration-200"
        onClick={() =>setIsVisible(!isVisible)}
        aria-label="Open accessibility settings"
        title="Accessibility Setting</button
        className="fixed bottom-4 right-4 z-50 bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition-all duration-200"
        onClick={() =>s</button
        className="fixed bottom-4 right-4 z-50 bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition-all duration-200"
        onClick={() =>"</button>
     <//button> <//button>></button>
       <//button> <//button><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
         </svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> </svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
      </path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" /> </path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" /> </svg>
    <//svg> <//svg> </button>

      {/* Accessibility Panel */}
      {isVisible && (
       <//button> <//button><div
          className="fixed bottom-20 right-4 z-50 bg-white rounded-lg shadow-xl p-6 w-80 max-h-96 overflow-y-auto"
          onKeyDown={handleKeyDown}
          role="dialog"
          aria-labelledby="accessibility-title"
          aria-modal="true"
        >
         </div
          className="fixed bottom-20 right-4 z-50 bg-white rounded-lg shadow-xl p-6 w-80 max-h-96 overflow-y-auto"
          onKeyDown={handleKeyDown}
          role="dialog"
          aria-labelledby="accessibility-title"
          aria-modal="true"
        > </div
          className="fixed bottom-20 right-4 z-50 bg-white rounded-lg shadow-xl p-6 w-80 max-h-96 overflow-y-auto"
          onKeyDown={handleKeyDown}
          role="dialog"
          aria-labelledby="accessibility-title"
          aria-modal="true"
        ><div className="flex justify-between items-center mb-4">
          </div className="flex justify-between items-center mb-4"> </div className="flex justify-between items-center mb-4"> </div><h2 id="accessibility-title" className="text-lg font-semibold text-gray-900">Accessibility Setting</h2 id="accessibility-title" className="text-lg font-semibold text-gray-900">s</h2 id="accessibility-title" className="text-lg font-semibold text-gray-900"><button
              onClick={() =>setIsVisible(false)}
              className="text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-300 rounded"
              aria-label="Close accessibility setting</button
              onClick={() =>s</button
              onClick={() =>"</button>
           <//button> <//button>></button>
             <//button> <//button><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               </svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> </svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
             </path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> </path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /><div className="space-y-4">{/* Font Size </div className="space-y-4">*</div className="space-y-4">/</div>}</div>
           <//div> <//div><div>
            </div> </div> </div><label className="block text-sm font-medium text-gray-700 mb-2">Font Siz</label className="block text-sm font-medium text-gray-700 mb-2">e</label className="block text-sm font-medium text-gray-700 mb-2"><div className="flex space-x-2">{(['small', 'medium', 'large'] as const).map((size) =></div className="flex space-x-2"> </div className="flex space-x-2">(</div><button
                    key={size}
                    onClick={() =>{
                      updateSetting('fontSize', size);
                      announceToScreenReader(`Font size changed to ${size}`);
                    }}
                    className={`px-3 py-1 rounded text-sm ${
                      settings.fontSize === size
                        ? 'bg-indigo-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                 </button
                    key={size}
                    onClick={() => </button
                    key={size}
                    onClick={() =>></button>
                    {size.charAt(0).toUpperCase() + size.slice(1<//button>)<//button>}</button>
                <//button> <//button> </button>
                ))}
            <//button> <//button> </div>
          <//div> <//div> </div>

            {/* High Contrast */}
           <//div> <//div><div className="flex items-center justify-between">
            </div className="flex items-center justify-between"> </div className="flex items-center justify-between"> </div><label className="text-sm font-medium text-gray-700">High Contras</label className="text-sm font-medium text-gray-700">t</label className="text-sm font-medium text-gray-700"><button
                onClick={() =>{
                  updateSetting('highContrast', !settings.highContrast);
                  announceToScreenReader(`High contrast ${!settings.highContrast ? 'enabled' : 'disabled'}`);
                }}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.highContrast ? 'bg-indigo-600' : 'bg-gray-200'
                }`}
                role="switch"
                aria-checked={settings.highContras</button
                onClick={() =>t</button
                onClick={() =>}</button>
             <//button> <//button>></button>
               <//button> <//button><span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.highContrast ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
            </span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.highContrast ? 'translate-x-6' : 'translate-x-1'
                  }`}
                /> </span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.highContrast ? 'translate-x-6' : 'translate-x-1'
                  }`}
                /> </span></button>
          <//button> <//button> </div>

            {/* Reduced Motion */}
           <//div> <//div><div className="flex items-center justify-between">
            </div className="flex items-center justify-between"> </div className="flex items-center justify-between"> </div><label className="text-sm font-medium text-gray-700">Reduced Motio</label className="text-sm font-medium text-gray-700">n</label className="text-sm font-medium text-gray-700"><button
                onClick={() =>{
                  updateSetting('reducedMotion', !settings.reducedMotion);
                  announceToScreenReader(`Reduced motion ${!settings.reducedMotion ? 'enabled' : 'disabled'}`);
                }}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.reducedMotion ? 'bg-indigo-600' : 'bg-gray-200'
                }`}
                role="switch"
                aria-checked={settings.reducedMotio</button
                onClick={() =>n</button
                onClick={() =>}</button>
             <//button> <//button>></button>
               <//button> <//button><span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.reducedMotion ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
            </span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.reducedMotion ? 'translate-x-6' : 'translate-x-1'
                  }`}
                /> </span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.reducedMotion ? 'translate-x-6' : 'translate-x-1'
                  }`}
                /> </span></button>
          <//button> <//button> </div>

            {/* Screen Reader Optimizations */}
           <//div> <//div><div className="flex items-center justify-between">
            </div className="flex items-center justify-between"> </div className="flex items-center justify-between"> </div><label className="text-sm font-medium text-gray-700">Screen Reader Optimize</label className="text-sm font-medium text-gray-700">d</label className="text-sm font-medium text-gray-700"><button
                onClick={() =>{
                  updateSetting('screenReader', !settings.screenReader);
                  announceToScreenReader(`Screen reader optimizations ${!settings.screenReader ? 'enabled' : 'disabled'}`);
                }}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.screenReader ? 'bg-indigo-600' : 'bg-gray-200'
                }`}
                role="switch"
                aria-checked={settings.screenReade</button
                onClick={() =>r</button
                onClick={() =>}</button>
             <//button> <//button>></button>
               <//button> <//button><span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.screenReader ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
            </span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.screenReader ? 'translate-x-6' : 'translate-x-1'
                  }`}
                /> </span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.screenReader ? 'translate-x-6' : 'translate-x-1'
                  }`}
                /> </span></button>
          <//button> <//button> </div>

            {/* Keyboard Navigation */}
           <//div> <//div><div className="flex items-center justify-between">
            </div className="flex items-center justify-between"> </div className="flex items-center justify-between"> </div><label className="text-sm font-medium text-gray-700">Enhanced Keyboard Navigatio</label className="text-sm font-medium text-gray-700">n</label className="text-sm font-medium text-gray-700"><button
                onClick={() =>{
                  updateSetting('keyboardNavigation', !settings.keyboardNavigation);
                  announceToScreenReader(`Enhanced keyboard navigation ${!settings.keyboardNavigation ? 'enabled' : 'disabled'}`);
                }}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.keyboardNavigation ? 'bg-indigo-600' : 'bg-gray-200'
                }`}
                role="switch"
                aria-checked={settings.keyboardNavigatio</button
                onClick={() =>n</button
                onClick={() =>}</button>
             <//button> <//button>></button>
               <//button> <//button><span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.keyboardNavigation ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
            </span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.keyboardNavigation ? 'translate-x-6' : 'translate-x-1'
                  }`}
                /> </span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.keyboardNavigation ? 'translate-x-6' : 'translate-x-1'
                  }`}
                /> </span></button>
          <//button> <//button> </div>

            {/* Reset Button */}
           <//div> <//div><button
              onClick={() =>{
                const defaultSettings: AccessibilitySettings = {,
    fontSize: 'medium',
                  highContrast: false,
                  reducedMotion: false,
                  screenReader: false,
                  keyboardNavigation: false,
                };
                setSettings(defaultSettings);
                applyAccessibilitySettings(defaultSettings);
                localStorage.removeItem('accessibility-settings');
                announceToScreenReader('Accessibility settings reset to default');
              }}
              className="w-full bg-gray-200 text-gray-700 py-2 px-4 rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition-colors"
           </button
              onClick={() => </button
              onClick={() =>></button>
              Reset to Defau<//button>l<//button>t</button>
          <//button> <//button> </button>
        <//button> <//button> </div>
      <//div> <//div> </div>
      )}

      {/* Skip Links */}
     <//div> <//div><a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-600 text-white px-4 py-2 rounded-md z-50"
      >Skip to main conte</a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-600 text-white px-4 py-2 rounded-md z-50"
      >n</a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-600 text-white px-4 py-2 rounded-md z-50"
      >t</a>
    <//a> <//a> </a>
   <//a> <//a></>
  );
};

export default EnhancedAccessibility;<//>
<//>