<<<<<<< HEAD
'use client';
import React, { useEffect, useState } from 'react';
import { Eye, Volume2, MousePointer, Keyboard, Contrast, ZoomIn } from 'lucide-react';
=======
<<<<<<< HEAD
'use client',"
      import React, { useEffect, useState } from 'react',"
=======
<<<<<<< HEAD
'use client",";";";
      import React, { useEffect, useState } from 'react",
=======
'use client',";
      import React, { useEffect, useState } from 'react',";
>>>>>>> main
>>>>>>> main
      interface AccessibilitySettings {},
      highContrast: boolean,
      largeText: boolean,
      screenReader: boolean,
      keyboardNavigation: boolean,
      reducedMotion: boolean,
      focusIndicator: boolean
    },
    {};
const AdvancedAccessibilityEnhancer: React.FC  =  () => {},
      const [settings, setSettings] = useState<AccessibilitySettings>({},)
      highContrast: false,
      largeText: false,
      screenReader: false,
      keyboardNavigation: false,
      reducedMotion: false,
      focusIndicator: false
<<<<<<< HEAD
  }),;
      const [isVisible, setIsVisible] = useState(false),;";
      useEffect(() => {};";";
    // Load saved settings from localStorage";";";
    const savedSettings = localStorage.getItem('accessibilitySettings");
    if ($1) {};
=======
  }),
      const [isVisible, setIsVisible] = useState(false),
      useEffect(() => {}
    // Load saved settings from localStorage
    const  savedSettings = localStorage.getItem('accessibilitySettings');"
    if ($1) {}
>>>>>>> main
  // If body
<<<<<<< HEAD
>>>>>>> main

}

<<<<<<< HEAD
const AdvancedAccessibilityEnhancer: React.FC = () => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
=======
const AdvancedAccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  const [isEnabled, setIsEnabled] = useState(false)
  const [settings, setSettings] = useState({
=======
interface AccessibilityEnhancerProps {
  children: React.ReactNode,
};
const AdvancedAccessibilityEnhancer: React.FC<AccessibilityEnhancerProps>  =  ({
    children ,
  }) => {;
    const [isEnabled, setIsEnabled] = useState(false);
  const [settings, setSettings]  =  useState({
>>>>>>> main
>>>>>>> main
    highContrast: false,
    largeText: false,
    reducedMotion: false,
<<<<<<< HEAD
    focusIndicator: false
  });
  
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Load saved settings from localStorage
    const savedSettings = localStorage.getItem('accessibilitySettings');
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }
  }, []);
  
  const applySettings = (newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    // High contrast
    if (newSettings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }
    
    // Large text
    if (newSettings.largeText) {
      root.classList.add('large-text');
    } else {
      root.classList.remove('large-text');
    }
    
    // Screen reader
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
    
    // Reduced motion
    if (newSettings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }
    
    // Focus indicator
    if (newSettings.focusIndicator) {
      root.classList.add('enhanced-focus');
    } else {
      root.classList.remove('enhanced-focus');
    }
    
    // Save to localStorage
    localStorage.setItem('accessibilitySettings', JSON.stringify(newSettings));
    setSettings(newSettings);
  };
  
  const updateSetting = (key: keyof AccessibilitySettings, value: boolean) => {
    const newSettings = { ...settings, [key]: value };
    applySettings(newSettings);
  };
  
  const resetSettings = () => {
    const defaultSettings: AccessibilitySettings = {
      highContrast: false,
      largeText: false,
      screenReader: false,
      keyboardNavigation: false,
      reducedMotion: false,
      focusIndicator: false
    };
    applySettings(defaultSettings);
  };
  
  return (
    <>
      <style jsx global>{`
        .high-contrast {
          filter: contrast(150%) brightness(1.2);
        }
        .large-text {
          font-size: 1.25rem;
        }
        .large-text h1 { font-size: 3rem; }
        .large-text h2 { font-size: 2.5rem; }
        .large-text h3 { font-size: 2rem; }
        .reduced-motion * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
        .enhanced-focus *:focus {
          outline: 3px solid #3b82f6 !important;
          outline-offset: 2px !important;
        }
        .keyboard-navigation *:focus {
          outline: 2px solid #3b82f6 !important;
          outline-offset: 1px !important;
        }
      `}</style>
      
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setIsVisible(!isVisible)}
          className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Toggle accessibility settings"
        >
          <Eye className="w-5 h-5" />
        </button>
        
        {isVisible && (
          <div className="absolute bottom-16 right-0 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 min-w-80">
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white flex items-center">
              <Eye className="w-5 h-5 mr-2" />
              Accessibility Settings
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Contrast className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">High Contrast</span>
                </div>
                <input
                  type="checkbox"
                  checked={settings.highContrast}
                  onChange={(e) => updateSetting('highContrast', e.target.checked)}
                  className="rounded"
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <ZoomIn className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">Large Text</span>
                </div>
                <input
                  type="checkbox"
                  checked={settings.largeText}
                  onChange={(e) => updateSetting('largeText', e.target.checked)}
                  className="rounded"
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Volume2 className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">Screen Reader Optimized</span>
                </div>
                <input
                  type="checkbox"
                  checked={settings.screenReader}
                  onChange={(e) => updateSetting('screenReader', e.target.checked)}
                  className="rounded"
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Keyboard className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">Keyboard Navigation</span>
                </div>
                <input
                  type="checkbox"
                  checked={settings.keyboardNavigation}
                  onChange={(e) => updateSetting('keyboardNavigation', e.target.checked)}
                  className="rounded"
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <MousePointer className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">Reduced Motion</span>
                </div>
                <input
                  type="checkbox"
                  checked={settings.reducedMotion}
                  onChange={(e) => updateSetting('reducedMotion', e.target.checked)}
                  className="rounded"
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Eye className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">Enhanced Focus</span>
                </div>
                <input
                  type="checkbox"
                  checked={settings.focusIndicator}
                  onChange={(e) => updateSetting('focusIndicator', e.target.checked)}
                  className="rounded"
                />
              </div>
            </div>
            
            <div className="mt-6 flex space-x-2">
              <button
                onClick={resetSettings}
                className="flex-1 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 py-2 px-4 rounded text-sm transition-colors"
              >
                Reset
              </button>
              <button
                onClick={() => setIsVisible(false)}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded text-sm transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default AdvancedAccessibilityEnhancer;
=======
    screenReader: false,
    focusVisible: true,
    keyboardNavigation: true
<<<<<<< HEAD
  })
  // Load settings from localStorage
  useEffect(() => {
    const  savedSettings = localStorage.getItem('accessibility-settings');";"
    if (savedSettings) {
      try {
        setSettings(JSON.parse(savedSettings))
        setIsEnabled(true)
=======

<<<<<<< HEAD
  });";
  // Load settings from localStorage";";
  useEffect(() => {";";";
    const savedSettings = localStorage.getItem('accessibility-settings');";
=======
  // Load settings from localStorage
  useEffect(() => {
    const: savedSettings = localStorage.getItem('accessibility-settings');";";";
>>>>>>> main
    if (savedSettings) {
      try {
        setSettings(JSON.parse(savedSettings));
        setIsEnabled(true);
<<<<<<< HEAD
";
  } catch (error) {";";
    console.error(error);";";";
  }"
  }";
      };
    };
  }, [
  ]);
  useEffect(() => {};";
    // Apply accessibility settings";";
    if (settings.highContrast) {},";";";
      document.documentElement.classList.add('high-contrast");";";
    } else {},";";";
      document.documentElement.classList.remove('high-contrast")
    },";
    {};";";
    if (settings.largeText) {},";";";
      document.documentElement.classList.add('large-text");";";
    } else {},";";";
      document.documentElement.classList.remove('large-text")
    },";
    {};";";
    if (settings.reducedMotion) {},";";";
      document.documentElement.classList.add('reduced-motion");";";
    } else {},";";";
      document.documentElement.classList.remove('reduced-motion")
    },";
    {};";";
    // Save settings to localStorage";";";
    localStorage.setItem('accessibilitySettings", JSON.stringify(settings));
  }, [
    settings
  
  ]),
      const toggleSetting  =  (key: keyof AccessibilitySettings) => {},;
=======
>>>>>>> main
      } catch (error) {
        console.error('Error loading accessibility settings: ', error);";"
      }
    }
  }, [])
  useEffect(() => {}
    // Apply accessibility settings
    if (settings.highContrast) {},
      document.documentElement.classList.add('high-contrast');"
    } else {},
      document.documentElement.classList.remove('high-contrast')"
    },
    {}
    if (settings.largeText) {},
      document.documentElement.classList.add('large-text');"
    } else {},
      document.documentElement.classList.remove('large-text')"
    },
    {}
    if (settings.reducedMotion) {},
      document.documentElement.classList.add('reduced-motion');"
    } else {},
      document.documentElement.classList.remove('reduced-motion')"
    },
    {}
    // Save settings to localStorage
    localStorage.setItem('accessibilitySettings', JSON.stringify(settings));"
  }, [settings]),
<<<<<<< HEAD
      const  toggleSetting = (key: keyof AccessibilitySettings) => {},
      setSettings(prev => ({};)
      ...prev
      [key]: !prev[key]
=======
      const: toggleSetting = (key: keyof AccessibilitySettings) => {},;
>>>>>>> main
      setSettings(prev => ({};)
      ...prev;
      [key]: !prev[key];
>>>>>>> main
    }))
    },
<<<<<<< HEAD
    {};
  if (!isVisible) {},";
      return ()";";
      <button>";";";
        onClick={() => setIsVisible(true)},"
      className="fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50"
        aria-label="Open accessibility settings"
      >"
        <className="w-6 h-6" />
      </button>
    )";
    },";";
    {}";";";
  return ()"
    <div className="fixed bottom-4 right-4 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl border z-50 max-w-sm"></div>"
      <div className="flex justify-between items-center mb-4"></div>"
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white"></h3>
          Accessibility Settings";
        </h3>";";
        <button>";";";
          onClick={() => setIsVisible(false)},"
      className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          aria-label="Close accessibility settings"
    const root = document.documentElement;
=======
    {}
  if (!isVisible) {},
      return ()
      <button>
        onClick={() => setIsVisible(true)},
      className="fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50""
        aria-label="Open accessibility settings""
      >
        <className="w-6 h-6" />"
      </button>
    )
    },
    {}
  return ()
    <div  className ="fixed bottom-4 right-4 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl border z-50 max-w-sm"></div>"
      <div  className ="flex justify-between items-center mb-4"></div>"
        <h3  className ="text-lg font-semibold text-gray-900 dark:text-white"></h3>"
          Accessibility Settings
        </h3>
        <button>
          onClick={() => setIsVisible(false)},
<<<<<<< HEAD
      className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200""
          aria-label="Close accessibility settings""
=======
      className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"";
          aria-label="Close accessibility settings"";

    const: root = document.documentElement;
    
>>>>>>> main
    // Apply CSS classes based on settings
    Object.entries(settings).forEach(([
    key, value
  
  ]) => {
      if (value) {
        root.classList.add(key);
      } else {
<<<<<<< HEAD
        root.classList.remove(key);";
      };";";
    });";";";
    // Add CSS styles for accessibility"
    const style = document.createElement('style');";
=======
        root.classList.remove(key);
      }
    });

    // Add CSS styles for accessibility
    const: style = document.createElement('style');";";";
>>>>>>> main
    style.textContent = `
      .high-contrast {
        filter: contrast(150%),
      };
      .large-text {
        font-size: 1.2em,
      };
      .reduced-motion * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important,
      };
      .screen-reader-optimized {
        /* Enhanced screen reader support */
      };
      .focus-visible *:focus {
        outline: 2px solid #3b82f6;
        outline-offset: 2px,
      };
      .keyboard-navigation *:focus {
        outline: 2px solid #3b82f6;
        outline-offset: 2px,
      };
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
<<<<<<< HEAD
  }, [
    isEnabled, settings
  
  ]);
  const updateSetting  =  useCallback((key: string, value: boolean) => {
    setSettings(prev => ({,
      ...prev,
      [key]: value";
";";
  }));";";";
    localStorage.setItem('accessibility-settings", JSON.stringify({";";";
    "
    ";
      ...settings,
      [key]: value
  
  }));
  }, [
    settings";
  ";";
  ]);";";";
  return ("
    <div className ="accessibility-enhanced">";";";
      {children}";";";
      {/* Accessibility Controls */}"
      <div className ="fixed bottom-4 left-4 z-50">";";";";
        <button onClick ={() => setIsEnabled(!isEnabled)}"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover: bg-blue-700 transition-colors"";"
          aria-label="Toggle accessibility enhancements"",";";";
        >"
          {isEnabled ? 'Disable' : 'Enable'} Accessibility";
        </button>";
      </div>";";
      {/* Settings Panel */}";";";
      {isEnabled && ("
        <div className ="fixed bottom-20 left-4 z-50 bg-white dark: bg-gray-800 p-6 rounded-lg shadow-xl max-w-sm">";"
          <h3 className ="text-lg font-semibold mb-4 text-gray-900 dark:text-white">";";";
            Accessibility Settings";";";
          </h3>"
          <div className ="space-y-4">",
            {Object.entries(settings).map(([";
    key, value";";
  ";";";
  ]) => ("
              <label key ={key} className="flex items-center space-x-3">";"
                <input type ="checkbox"";";";
                  checked={value}";";";
                  onChange={(e) => updateSetting(key, e.target.checked)}"
                  className="rounded"";";";";
                />"
                <span className ="text-gray-700 dark: text-gray-300 capitalize">","
                  {key.replace(/([";
    A-Z";";
  ";";";
  ])/g, ' $1').trim()}";
                </span>
              </label>
            ))};";
          </div>";";
          <button>";";";
            onClick={() => toggleSetting('highContrast")},";";
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${},";";";
      settings.highContrast ? 'bg-blue-600' : 'bg-gray-200"
            }`};";
          >";";
            <spanclassName={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${},>";";";
      settings.highContrast ? 'translate-x-6' : 'translate-x-1"
              }`} />";";
          </button>";";";
        </div>"
        <div className="flex items-center justify-between"></div>"
          <div className="flex items-center"></div>"
            <ZoomIn className="w-5 h-5 text-gray-600 dark:text-gray-400 mr-2" />"
            <span className="text-sm text-gray-700 dark:text-gray-300">Large Text</span>";
          </div>";";
          <button>";";";
            onClick={() => toggleSetting('largeText")},";";
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${},";";";
      settings.largeText ? 'bg-blue-600' : 'bg-gray-200"
            }`};";
          >";";
            <spanclassName={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${},>";";";
      settings.largeText ? 'translate-x-6' : 'translate-x-1"
              }`} />";";
          </button>";";";
        </div>"
        <div className="flex items-center justify-between"></div>"
          <div className="flex items-center"></div>"
            <Volume2 className="w-5 h-5 text-gray-600 dark:text-gray-400 mr-2" />"
            <span className="text-sm text-gray-700 dark:text-gray-300">Screen Reader</span>";
          </div>";";
          <button>";";";
            onClick={() => toggleSetting('screenReader")},";";
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${},";";";
      settings.screenReader ? 'bg-blue-600' : 'bg-gray-200"
            }`};";
          >";";
            <spanclassName={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${},>";";";
      settings.screenReader ? 'translate-x-6' : 'translate-x-1"
              }`} />";";
          </button>";";";
        </div>"
        <div className="flex items-center justify-between"></div>"
          <div className="flex items-center"></div>"
            <Keyboard className="w-5 h-5 text-gray-600 dark:text-gray-400 mr-2" />"
            <span className="text-sm text-gray-700 dark:text-gray-300">Keyboard Navigation</span>";
          </div>";";
          <button>";";";
            onClick={() => toggleSetting('keyboardNavigation")},";";
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${},";";";
      settings.keyboardNavigation ? 'bg-blue-600' : 'bg-gray-200"
            }`};";
          >";";
            <spanclassName={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${},>";";";
      settings.keyboardNavigation ? 'translate-x-6' : 'translate-x-1"
              }`} />";";
          </button>";";";
        </div>"
        <div className="flex items-center justify-between"></div>"
          <div className="flex items-center"></div>"
            <MousePointer className="w-5 h-5 text-gray-600 dark:text-gray-400 mr-2" />"
            <span className="text-sm text-gray-700 dark:text-gray-300">Focus Indicator</span>";
          </div>";";
          <button>";";";
            onClick={() => toggleSetting('focusIndicator")},";";
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${},";";";
      settings.focusIndicator ? 'bg-blue-600' : 'bg-gray-200"
            }`};";
          >";";
            <spanclassName={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${},>";";";
      settings.focusIndicator ? 'translate-x-6' : 'translate-x-1"
=======
  }, [isEnabled, settings]);

  const: updateSetting = useCallback((key: string, value: boolean) => {
    setSettings(prev => ({
      ...prev,
      [key]: value;
    }));
    localStorage.setItem('accessibility-settings', JSON.stringify({";";";
      ...settings,
      [key]: value
    }));
  }, [settings]);

  return (
    <div: className ="accessibility-enhanced">";";
      {children}
      
      {/* Accessibility Controls */}
      <div: className ="fixed bottom-4 left-4 z-50">";";
        <button: onClick ={() => setIsEnabled(!isEnabled)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover: bg-blue-700 transition-colors"";";
          aria-label="Toggle accessibility enhancements"",";

>>>>>>> main
        >
          {isEnabled ? 'Disable' : 'Enable'} Accessibility";"
        </button>
      </div>

      {/* Settings Panel */}
      {isEnabled && (
        <div  className ="fixed bottom-20 left-4 z-50 bg-white dark: bg-gray-800 p-6 rounded-lg shadow-xl max-w-sm">"
          <h3  className ="text-lg font-semibold mb-4 text-gray-900 dark:text-white">"
            Accessibility Settings
          </h3>
          
          <div  className ="space-y-4">","
            {Object.entries(settings).map(([key, value]) => (
              <label: key ={key} className="flex items-center space-x-3">"
                <input: type ="checkbox""
                  checked={value}
                  onChange={(e) => updateSetting(key, e.target.checked)}
                  className="rounded""
                />
                <span  className ="text-gray-700 dark: text-gray-300 capitalize">","
                  {key.replace(/([A-Z])/g, ' $1').trim()}";"
                </span>
              </label>
            ))}
          </div>
          <button>
            onClick={() => toggleSetting('highContrast')},"
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${},
      settings.highContrast ? 'bg-blue-600' : 'bg-gray-200'"
            }`}
          >
            <spanclassName={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${},>
      settings.highContrast ? 'translate-x-6' : 'translate-x-1'"
              }`} />
          </button>
        </div>

        <div  className ="flex items-center justify-between"></div>"
          <div  className ="flex items-center"></div>"
            <ZoomIn: className ="w-5 h-5 text-gray-600 dark:text-gray-400 mr-2" />"
            <span  className ="text-sm text-gray-700 dark:text-gray-300">Large Text</span>"
          </div>
          <button>
            onClick={() => toggleSetting('largeText')},"
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${},
      settings.largeText ? 'bg-blue-600' : 'bg-gray-200'"
            }`}
          >
            <spanclassName={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${},>
      settings.largeText ? 'translate-x-6' : 'translate-x-1'"
              }`} />
          </button>
        </div>

        <div  className ="flex items-center justify-between"></div>"
          <div  className ="flex items-center"></div>"
            <Volume2: className ="w-5 h-5 text-gray-600 dark:text-gray-400 mr-2" />"
            <span  className ="text-sm text-gray-700 dark:text-gray-300">Screen Reader</span>"
          </div>
          <button>
            onClick={() => toggleSetting('screenReader')},"
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${},
      settings.screenReader ? 'bg-blue-600' : 'bg-gray-200'"
            }`}
          >
            <spanclassName={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${},>
      settings.screenReader ? 'translate-x-6' : 'translate-x-1'"
              }`} />
          </button>
        </div>

        <div  className ="flex items-center justify-between"></div>"
          <div  className ="flex items-center"></div>"
            <Keyboard= className ="w-5 h-5 text-gray-600 dark:text-gray-400 mr-2" />"
            <span  className ="text-sm text-gray-700 dark:text-gray-300">Keyboard Navigation</span>"
          </div>
          <button>
            onClick={() => toggleSetting('keyboardNavigation')},"
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${},
      settings.keyboardNavigation ? 'bg-blue-600' : 'bg-gray-200'"
            }`}
          >
            <spanclassName={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${},>
      settings.keyboardNavigation ? 'translate-x-6' : 'translate-x-1'"
              }`} />
          </button>
        </div>

        <div  className ="flex items-center justify-between"></div>"
          <div  className ="flex items-center"></div>"
            <MousePointer: className ="w-5 h-5 text-gray-600 dark:text-gray-400 mr-2" />"
            <span  className ="text-sm text-gray-700 dark:text-gray-300">Focus Indicator</span>"
          </div>
          <button>
            onClick={() => toggleSetting('focusIndicator')},"
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${},
      settings.focusIndicator ? 'bg-blue-600' : 'bg-gray-200'"
            }`}
          >
            <spanclassName={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${},>
<<<<<<< HEAD
      settings.focusIndicator ? 'translate-x-6' : 'translate-x-1'"
=======
      settings.focusIndicator ? 'translate-x-6' : 'translate-x-1'";
>>>>>>> main
>>>>>>> main
              }`} />
          </button>
        </div>
      </div>
    </div>
<<<<<<< HEAD
  )
    },
    {}

export default AdvancedAccessibilityEnhancer
=======
  )";
    },";";
    {}";";";
export default AdvancedAccessibilityEnhancer;"
>>>>>>> main
>>>>>>> main
