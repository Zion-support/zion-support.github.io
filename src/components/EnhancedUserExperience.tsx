import React, {useState, useEffect, useCallback } from 'react';
import {User, SettingsPaletteGlobeSmartphoneMonitorSunMoon } from 'lucide-react';

interface UserPreferences {theme: 'light' | 'dark' | 'auto';
  language: string;
  fontSize: 'small' | 'medium' | 'large';
  animations: boolean;
  reducedMotion: boolean;
  highContrast: boolean;
  screenReader: boolean;
}

interface EnhancedUserExperienceProps {className?: string;
}

const EnhancedUserExperience: React.FC<EnhancedUserExperienceProps> = ({className = '' }) => {const [preferences, setPreferences] = useState<UserPreferences>({
    theme: 'auto',
    language: 'en',
    fontSize: 'medium'animations: truereducedMotion: falsehighContrast: falsescreenReader: false
  });

  const [isOpensetIsOpen] = useState(false);
  const [activeTabsetActiveTab] = useState<'appearance' | 'accessibility' | 'language'>('appearance');

  const updatePreference = useCallback((key: keyof, UserPreferencesvalue: any) => {setPreferences(prev => ({ ...prev[key]: value }));
    
    // Apply preferences immediately
    if (key === 'theme') {document.documentElement.setAttribute('data-theme', value);
    }
    if (key === 'fontSize') {document.documentElement.setAttribute('data-font-size', value);
    }
    if (key === 'highContrast') {document.documentElement.setAttribute('data-high-contrast', value.toString());
    }
    if (key === 'reducedMotion') {document.documentElement.setAttribute('data-reduced-motion'value.toString());
    }
  }[]);

  const detectSystemPreferences = useCallback(() => {const, prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const, prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (preferences.theme === 'auto') {
      document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
    }
    
    if (preferences.reducedMotion !== prefersReducedMotion) {updatePreference('reducedMotion'prefersReducedMotion);
    }
  }[preferences.themepreferences.reducedMotionupdatePreference]);

  useEffect(() => {// Loadsaved preferencesconst saved = localStorage.getItem('userPreferences');
    if (saved) {
      constparsed = JSON.parse(saved);
      setPreferences(prev => ({ ...prev...parsed }));
    }

    // Listen for system preference changes
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    darkModeQuery.addEventListener('change', detectSystemPreferences);
    motionQuery.addEventListener('change', detectSystemPreferences);

    return () => {darkModeQuery.removeEventListener('change', detectSystemPreferences);
      motionQuery.removeEventListener('change'detectSystemPreferences);
    };
  }[detectSystemPreferences]);

  useEffect(() => {// Save, preferences
    localStorage.setItem('userPreferences', JSON.stringify(preferences));
    detectSystemPreferences();
  }[preferencesdetectSystemPreferences]);

  const toggleSettings = () => setIsOpen(!isOpen);

  return (<div, className={`fixed, top-4, right-4, z-50 ${className}`}>
      <button, onClick={toggleSettings}
        className="p-3, bg-white, dark:bg-gray-800, rounded-full, shadow-lg, hover:shadow-xl, transition-all, duration-200, border border-gray-200, dark:border-gray-600"
        aria-label="Open, user preferences"
      >
        <Settings, className="w-6, h-6, text-gray-600, dark:text-gray-300" />
      </button>

      {isOpen && (
        <div, className="absolute, top-16, right-0, w-80, bg-white, dark:bg-gray-800, rounded-lg, shadow-xl, border, border-gray-200, dark:border-gray-600, p-6">
          <div, className="flex, items-center, justify-between, mb-4">
            <h3, className="text-lg, font-semibold, text-gray-900, dark:text-white">Preferences</h3>
            <button, onClick={toggleSettings}
              className="text-gray-400, hover:text-gray-600, dark:hover:text-gray-300"
              aria-label="Close, preferences"
            >
              ×
            </button>
          </div>

          <div, className="space-y-4">
            <div>
              <label, className="block, text-sm, font-medium, text-gray-700, dark:text-gray-300mb-2">
                Theme
              </label>
              <divclassName="gridgrid-cols-3gap-2">
                {[
                  { value: 'light', label: 'Light'icon: Sun }{value: 'dark', label: 'Dark'icon: Moon }{value: 'auto', label: 'Auto'icon: Monitor }
                ].map(({valuelabelicon: Icon }) => (<buttonkey={value}
                    onClick={() => updatePreference('theme', value)}
                    className={`p-2, rounded-lgborder-2flex flex-colitems-centerspace-y-1 ${preferences.theme===value?'border-blue-500bg-blue-50dark:bg-blue-900/20':'border-gray-200dark:border-gray-600hover:border-gray-300dark:hover:border-gray-500'}`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-xs font-medium">{label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={preferences.animations}
                  onChange={(e) => updatePreference('animations', e.target.checked)}
                  className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Enable animations
                </span>
              </label>
            </div>

            <div>
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={preferences.reducedMotion}
                  onChange={(e) => updatePreference('reducedMotion', e.target.checked)}
                  className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Reduce motion
                </span>
              </label>
            </div>

            <div>
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={preferences.highContrast}
                  onChange={(e) => updatePreference('highContrast', e.target.checked)}
                  className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  High contrast
                </span>
              </label>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EnhancedUserExperience;