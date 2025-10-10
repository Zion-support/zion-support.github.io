<<<<<<< HEAD
'use client';
import React, { useEffect, useState } from 'react';
import { Eye, EyeOff, Volume2, VolumeX, Type, Contrast } from 'lucide-react';
interface AccessibilitySettings {}
=======
'use client;

import React, { useEffect, useState } from 'react;

import { Eye, EyeOff, Volume2, VolumeX, Type, Contrast } from lucide-react;

interface AccessibilitySettings {
>>>>>>> origin/main
  highContrast: boolean;

  largeText: boolean;

  reducedMotion: boolean;

  screenReader: boolean;

  focusVisible: boolean;

}

const EnhancedAccessibility: React.FC<{ children: React.ReactNode }> = ({ children }) => {}
  const [settings, setSettings] = useState<AccessibilitySettings>({}
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    focusVisible: true;
  });

  const [isOpen, setIsOpen] = useState(false);
<<<<<<< HEAD
  useEffect(() => {}
    // Load saved settings from localStorage;
    const savedSettings="localStorage.getItem('accessibility-settings');"
    if (savedSettings) {}
=======

  useEffect(() => {
    // Load saved settings from localStorage
    const savedSettings = localStorage.getItem(accessibility-settings);;

    if (savedSettings) {
>>>>>>> origin/main
      setSettings(JSON.parse(savedSettings));

    }

    // Apply initial settings;
    applyAccessibilitySettings(settings);

  }, []);
<<<<<<< HEAD
  const applyAccessibilitySettings = (newSettings: AccessibilitySettings) => {}
    const root="document.documentElement;"
    // High contrast;
    if (newSettings.highContrast) {}
      root.classList.add('high-contrast');
    } else {}
      root.classList.remove('high-contrast');
    }

    // Large text;
    if (newSettings.largeText) {}
      root.classList.add('large-text');
    } else {}
      root.classList.remove('large-text');
    }

    // Reduced motion;
    if (newSettings.reducedMotion) {}
      root.classList.add('reduced-motion');
    } else {}
      root.classList.remove('reduced-motion');
    }

    // Screen reader optimizations;
    if (newSettings.screenReader) {}
      root.classList.add('screen-reader-optimized');
    } else {}
      root.classList.remove('screen-reader-optimized');
    }

    // Focus visible;
    if (newSettings.focusVisible) {}
      root.classList.add('focus-visible');
    } else {}
      root.classList.remove('focus-visible');
=======

  const applyAccessibilitySettings = (newSettings: AccessibilitySettings) => {;;

    const root = document.documentElement;;

    // High contrast
    if (newSettings.highContrast) {
      root.classList.add(high-contrast);

    } else {
      root.classList.remove(high-contrast);

    }

    // Large text
    if (newSettings.largeText) {
      root.classList.add(large-text);

    } else {
      root.classList.remove(large-text);

    }

    // Reduced motion
    if (newSettings.reducedMotion) {
      root.classList.add(reduced-motion);

    } else {
      root.classList.remove(reduced-motion);

    }

    // Screen reader optimizations
    if (newSettings.screenReader) {
      root.classList.add(screen-reader-optimized);

    } else {
      root.classList.remove(screen-reader-optimized);

    }

    // Focus visible
    if (newSettings.focusVisible) {
      root.classList.add(focus-visible);

    } else {
      root.classList.remove(focus-visible);

>>>>>>> origin/main
    }

  };
<<<<<<< HEAD
  const updateSetting = (key: keyof AccessibilitySettings, value: boolean) => {}
    const newSettings = "{ ...settings, [key]: value };"
=======

  const updateSetting = (key: keyof AccessibilitySettings, value: boolean) => {;;

    const newSettings = { ...settings, [key]: value };;

>>>>>>> origin/main
    setSettings(newSettings);

    applyAccessibilitySettings(newSettings);

    localStorage.setItem(accessibility-settings, JSON.stringify(newSettings));

  };
  return (

    <>
      {children}

      {/* Accessibility Toggle Button */}
<<<<<<< HEAD
      <button></button>
        onClick={() => setIsOpen(!isOpen)}
        className=""fixed bottom-4 right-4 z-50 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2""
        aria-label=""Toggle accessibility settings">"
        <Eye className=""w-6 h-6" /></Eye>"
=======

      <button
        onClick={() => setIsOpen(!isOpen)}

        className="fixed bottom-4 right-4 z-50 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
        aria-label="Toggle accessibility settings
      >
        <Eye className="w-6 h-6 />
>>>>>>> origin/main
      </button>
      {/* Accessibility Panel */}

      {isOpen && (
<<<<<<< HEAD
        <div className=""fixed bottom-20 right-4 z-50 bg-white rounded-lg shadow-xl p-6 w-80 max-h-96 overflow-y-auto"></div>"
          <h3 className=""text-lg font-semibold text-gray-900 mb-4">Accessibility Settings</h3>"
          <div className=""space-y-4"></div>"
            {/* High Contrast */}
            <div className=""flex items-center justify-between"></div>"
              <div className=""flex items-center"></div>"
                <Contrast className=""w-5 h-5 mr-2 text-gray-600" /></Contrast>"
                <span className=""text-sm font-medium text-gray-700">High Contrast</span>"
              </div>
              <button></button>
                onClick={() => updateSetting('highContrast', !settings.highContrast)}
                className="{`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${}"
                  settings.highContrast ? 'bg-blue-600' : 'bg-gray-200'
                }`}
                aria-label=""Toggle high contrast">"
                <span className="{`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${></span>"
                    settings.highContrast ? 'translate-x-6' : 'translate-x-1'
                  }`}
=======

        <div className="fixed bottom-20 right-4 z-50 bg-white rounded-lg shadow-xl p-6 w-80 max-h-96 overflow-y-auto>
          <h3 className="text-lg font-semibold text-gray-900 mb-4>Accessibility Settings</h3>
          
          <div className="space-y-4>
            {/* High Contrast */}

            <div className="flex items-center justify-between>
              <div className="flex items-center>
                <Contrast className="w-5 h-5 mr-2 text-gray-600 />
                <span className="text-sm font-medium text-gray-700>High Contrast</span>
              </div>
              <button
                onClick={() => updateSetting('highContrast, !settings.highContrast)}

                className={relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.highContrast ? 'bg-blue-600 : bg-gray-200
                }}

                aria-label="Toggle high contrast
              >
                <span
                  className={inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.highContrast ? 'translate-x-6 : translate-x-1
                  }}

>>>>>>> origin/main
                />
              </button>
            </div>
            {/* Large Text */}
<<<<<<< HEAD
            <div className=""flex items-center justify-between"></div>"
              <div className=""flex items-center"></div>"
                <Type className=""w-5 h-5 mr-2 text-gray-600" /></Type>"
                <span className=""text-sm font-medium text-gray-700">Large Text</span>"
              </div>
              <button></button>
                onClick={() => updateSetting('largeText', !settings.largeText)}
                className="{`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${}"
                  settings.largeText ? 'bg-blue-600' : 'bg-gray-200'
                }`}
                aria-label=""Toggle large text">"
                <span className="{`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${></span>"
                    settings.largeText ? 'translate-x-6' : 'translate-x-1'
                  }`}
=======

            <div className="flex items-center justify-between>
              <div className="flex items-center>
                <Type className="w-5 h-5 mr-2 text-gray-600 />
                <span className="text-sm font-medium text-gray-700>Large Text</span>
              </div>
              <button
                onClick={() => updateSetting('largeText, !settings.largeText)}

                className={relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.largeText ? 'bg-blue-600 : bg-gray-200
                }}

                aria-label="Toggle large text
              >
                <span
                  className={inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.largeText ? 'translate-x-6 : translate-x-1
                  }}

>>>>>>> origin/main
                />
              </button>
            </div>
            {/* Reduced Motion */}
<<<<<<< HEAD
            <div className=""flex items-center justify-between"></div>"
              <div className=""flex items-center"></div>"
                <VolumeX className=""w-5 h-5 mr-2 text-gray-600" /></VolumeX>"
                <span className=""text-sm font-medium text-gray-700">Reduce Motion</span>"
              </div>
              <button></button>
                onClick={() => updateSetting('reducedMotion', !settings.reducedMotion)}
                className="{`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${}"
                  settings.reducedMotion ? 'bg-blue-600' : 'bg-gray-200'
                }`}
                aria-label=""Toggle reduced motion">"
                <span className="{`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${></span>"
                    settings.reducedMotion ? 'translate-x-6' : 'translate-x-1'
                  }`}
=======

            <div className="flex items-center justify-between>
              <div className="flex items-center>
                <VolumeX className="w-5 h-5 mr-2 text-gray-600 />
                <span className="text-sm font-medium text-gray-700>Reduce Motion</span>
              </div>
              <button
                onClick={() => updateSetting('reducedMotion, !settings.reducedMotion)}

                className={relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.reducedMotion ? 'bg-blue-600 : bg-gray-200
                }}

                aria-label="Toggle reduced motion
              >
                <span
                  className={inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.reducedMotion ? 'translate-x-6 : translate-x-1
                  }}

>>>>>>> origin/main
                />
              </button>
            </div>
            {/* Screen Reader */}
<<<<<<< HEAD
            <div className=""flex items-center justify-between"></div>"
              <div className=""flex items-center"></div>"
                <Volume2 className=""w-5 h-5 mr-2 text-gray-600" /></Volume2>"
                <span className=""text-sm font-medium text-gray-700">Screen Reader Mode</span>"
              </div>
              <button></button>
                onClick={() => updateSetting('screenReader', !settings.screenReader)}
                className="{`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${}"
                  settings.screenReader ? 'bg-blue-600' : 'bg-gray-200'
                }`}
                aria-label=""Toggle screen reader mode">"
                <span className="{`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${></span>"
                    settings.screenReader ? 'translate-x-6' : 'translate-x-1'
                  }`}
=======

            <div className="flex items-center justify-between>
              <div className="flex items-center>
                <Volume2 className="w-5 h-5 mr-2 text-gray-600 />
                <span className="text-sm font-medium text-gray-700>Screen Reader Mode</span>
              </div>
              <button
                onClick={() => updateSetting('screenReader, !settings.screenReader)}

                className={relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.screenReader ? 'bg-blue-600 : bg-gray-200
                }}

                aria-label="Toggle screen reader mode
              >
                <span
                  className={inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.screenReader ? 'translate-x-6 : translate-x-1
                  }}

>>>>>>> origin/main
                />
              </button>
            </div>
            {/* Focus Visible */}
<<<<<<< HEAD
            <div className=""flex items-center justify-between"></div>"
              <div className=""flex items-center"></div>"
                <Eye className=""w-5 h-5 mr-2 text-gray-600" /></Eye>"
                <span className=""text-sm font-medium text-gray-700">Enhanced Focus</span>"
              </div>
              <button></button>
                onClick={() => updateSetting('focusVisible', !settings.focusVisible)}
                className="{`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${}"
                  settings.focusVisible ? 'bg-blue-600' : 'bg-gray-200'
                }`}
                aria-label=""Toggle enhanced focus">"
                <span className="{`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${></span>"
                    settings.focusVisible ? 'translate-x-6' : 'translate-x-1'
                  }`}
=======

            <div className="flex items-center justify-between>
              <div className="flex items-center>
                <Eye className="w-5 h-5 mr-2 text-gray-600 />
                <span className="text-sm font-medium text-gray-700>Enhanced Focus</span>
              </div>
              <button
                onClick={() => updateSetting('focusVisible, !settings.focusVisible)}

                className={relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.focusVisible ? 'bg-blue-600 : bg-gray-200
                }}

                aria-label="Toggle enhanced focus
              >
                <span
                  className={inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.focusVisible ? 'translate-x-6 : translate-x-1
                  }}

>>>>>>> origin/main
                />
              </button>
            </div>
          </div>
<<<<<<< HEAD
          <div className=""mt-6 pt-4 border-t border-gray-200"></div>"
            <button></button>
              onClick={() => setIsOpen(false)}
              className=""w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors">"
              Close;
=======

          <div className="mt-6 pt-4 border-t border-gray-200>
            <button
              onClick={() => setIsOpen(false)}

              className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors
            >
              Close
>>>>>>> origin/main
            </button>
          </div>
        </div>
      )}

<<<<<<< HEAD
      <style jsx global>{`
        .high-contrast {}
=======
      <style jsx global>{
        .high-contrast {
>>>>>>> origin/main
          --tw-bg-opacity: 1;

          --tw-text-opacity: 1;

        }
<<<<<<< HEAD
        
        .high-contrast * {}
=======

        .high-contrast * {
>>>>>>> origin/main
          background-color: white !important;

          color: black !important;

          border-color: black !important;

        }
<<<<<<< HEAD
        
        .large-text {}
=======

        .large-text {
>>>>>>> origin/main
          font-size: 1.25rem;

        }

        .large-text h1 { font-size: 3rem; }

        .large-text h2 { font-size: 2.5rem; }

        .large-text h3 { font-size: 2rem; }

        .large-text h4 { font-size: 1.75rem; }

        .large-text h5 { font-size: 1.5rem; }

        .large-text h6 { font-size: 1.25rem; }
<<<<<<< HEAD
        
        .reduced-motion * {}
=======

        .reduced-motion * {
>>>>>>> origin/main
          animation-duration: 0.01ms !important;

          animation-iteration-count: 1 !important;

          transition-duration: 0.01ms !important;

        }
<<<<<<< HEAD
        
        .screen-reader-optimized {}
          /* Enhanced focus indicators */
        }
        
        .screen-reader-optimized *:focus {}
=======

        .screen-reader-optimized {
          /* Enhanced focus indicators */
        }

        .screen-reader-optimized *:focus {
>>>>>>> origin/main
          outline: 3px solid #3b82f6 !important;

          outline-offset: 2px !important;

        }
<<<<<<< HEAD
        
        .focus-visible *:focus-visible {}
=======

        .focus-visible *:focus-visible {
>>>>>>> origin/main
          outline: 2px solid #3b82f6 !important;

          outline-offset: 2px !important;

        }

      }</style>
    </>
  );

};
export default EnhancedAccessibility;
<<<<<<< HEAD
;
const EnhancedAccessibility: React.FC<{ children: React.ReactNode }> = ({ children }) => {;
const [settings, setSettings] = useState<AccessibilitySettings>({}
=======
>>>>>>> origin/main
