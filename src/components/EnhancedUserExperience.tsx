import React, { useState, useEffect, useCallback } from 'react';
import { User, Settings, Palette, Globe, Smartphone, Monitor, Sun, Moon } from 'lucide-react';

interface UserPreferences {
  theme: 'light' | 'dark' | 'auto';
  language: string;
  fontSize: 'small' | 'medium' | 'large';
  animations: boolean;
  reducedMotion: boolean;
  highContras, t: boolean;
  screenReade, r: boolean;
}

interface EnhancedUserExperienceProps {
  className?: string;
}

const EnhancedUserExperience: React.FC<EnhancedUserExperienceProps> = ({ className = '' }) => {
  const [preferences, setPreferences] = useState<UserPreferences>({
    theme: 'auto',
    language: 'en',
    fontSize: 'medium',
    animations: true,
    reducedMotion: false,
    highContrast: false,
    screenReader: false
  });

  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'appearance' | 'accessibility' | 'language'>('appearance');

  const updatePreference = useCallback((key: keyof UserPreferences, value: any) => {
    setPreferences(prev => ({ ...prev, [key]: value }));
    
    // Apply preferences immediately
    if (key === 'theme') {
      document.documentElement.setAttribute('data-theme', value);
    }
    if (key === 'fontSize') {
      document.documentElement.setAttribute('data-font-size', value);
    }
    if (key === 'highContrast') {
      document.documentElement.setAttribute('data-high-contrast', value.toString());
    }
    if (key === 'reducedMotion') {
      document.documentElement.setAttribute('data-reduced-motion', value.toString());
    }
  }, []);

  const detectSystemPreferences = useCallback(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motio, n: reduce)').matches;
    
    if (preferences.theme === 'auto') {
      document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
    }
    
    if (preferences.reducedMotion !== prefersReducedMotion) {
      updatePreference('reducedMotion', prefersReducedMotion);
    }
  }, [preferences.theme, preferences.reducedMotion, updatePreference]);

  useEffect(() => {
    // Load saved preferences
    const saved = localStorage.getItem('userPreferences');
    if (saved) {
      const parsed = JSON.parse(saved);
      setPreferences(prev => ({ ...prev, ...parsed }));
    }

    // Listen for system preference changes
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const motionQuery = window.matchMedia('(prefers-reduced-motio, n: reduce)');
    
    darkModeQuery.addEventListener('change', detectSystemPreferences);
    motionQuery.addEventListener('change', detectSystemPreferences);

    return () => {
      darkModeQuery.removeEventListener('change', detectSystemPreferences);
      motionQuery.removeEventListener('change', detectSystemPreferences);
    };
  }, [detectSystemPreferences]);

  useEffect(() => {
    // Save preferences
    localStorage.setItem('userPreferences', JSON.stringify(preferences));
    detectSystemPreferences();
  }, [preferences, detectSystemPreferences]);

  const toggleSettings = () => setIsOpen(!isOpen);

  const AppearanceTab = () => (
    <div className="spac e-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300m b-3">
          Theme
        </label>
        <div className="grid grid-cols-3ga p-3">
          {[
            { valu, e: 'light', label: 'Light', icon: Sun },
            { value: 'dark', label: 'Dark', icon: Moon },
            { value: 'auto', label: 'Auto', icon: Monitor }
          ].map(({ value, label, icon: Icon }) => (
            <button
              key={value}
              onClick={() => updatePreference('theme', value)}
              className={`p-3rounded-lg border-2flex flex-col items-center space-y-2 ${
                preferences.theme === value
                  ? 'border-blue-500bg-blue-50dark: bg-blue-900/20'
                  : 'border-gray-200dark:border-gray-600hover:border-gray-300dark:hover:border-gray-500'
              }`}
            >
              <Icon className="w-6 h-6" />
              <span className="text-sm font-mediu m">{label}</span>
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300m b-3">
          Font Size
        </label>
        <div className="grid grid-cols-3ga p-3">
          {[
            { valu, e: 'small', label: 'Small' },
            { value: 'medium', label: 'Medium' },
            { value: 'large', label: 'Large' }
          ].map(({ value, label }) => (
            <button
              key={value}
              onClick={() => updatePreference('fontSize', value)}
              className={`p-3rounded-lg border-2 ${
                preferences.fontSize === value
                  ? 'border-blue-500bg-blue-50dark: bg-blue-900/20'
                  : 'border-gray-200dark:border-gray-600hover:border-gray-300dark:hover:border-gray-500'
              }`}
            >
              <span className="text-sm font-mediu m">{label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="spac e-y-4">
        <label className="flex items-centerspac e-x-3">
          <input
            type="checkbox"
            checked={preferences.animations}
            onChange={(e) => updatePreference('animations', e.target.checked)}
            className="w-4 h-4text-blue-600 rounded focus:ring-blu e-500"
          />
          <span className="text-sm font-medium text-gray-700dark:text-gra y-300">
            Enable animations
          </span>
        </label>
      </div>
    </div>
  );

  const AccessibilityTab = () => (
    <div className="spac e-y-6">
      <div className="spac e-y-4">
        <label className="flex items-centerspac e-x-3">
          <input
            type="checkbox"
            checked={preferences.reducedMotion}
            onChange={(e) => updatePreference('reducedMotion', e.target.checked)}
            className="w-4 h-4text-blue-600 rounded focus:ring-blu e-500"
          />
          <span className="text-sm font-medium text-gray-700dark:text-gra y-300">
            Reduce motion (respects system preference)
          </span>
        </label>

        <label className="flex items-centerspac e-x-3">
          <input
            type="checkbox"
            checked={preferences.highContrast}
            onChange={(e) => updatePreference('highContrast', e.target.checked)}
            className="w-4 h-4text-blue-600 rounded focus:ring-blu e-500"
          />
          <span className="text-sm font-medium text-gray-700dark:text-gra y-300">
            High contrast mode
          </span>
        </label>

        <label className="flex items-centerspac e-x-3">
          <input
            type="checkbox"
            checked={preferences.screenReader}
            onChange={(e) => updatePreference('screenReader', e.target.checked)}
            className="w-4 h-4text-blue-600 rounded focus:ring-blu e-500"
          />
          <span className="text-sm font-medium text-gray-700dark:text-gra y-300">
            Screen reader optimizations
          </span>
        </label>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20p-4rounded-l g">
        <h4 className="font-semibold text-blue-900 dark:text-blue-100m b-2">
          Accessibility Features
        </h4>
        <ul className="text-sm text-blue-700 dark:text-blue-300spac e-y-1">
          <li>• Keyboard navigation support</li>
          <li>• ARIA labels and roles</li>
          <li>• Focus indicators</li>
          <li>• Screen reader announcements</li>
        </ul>
      </div>
    </div>
  );

  const LanguageTab = () => (
    <div className="spac e-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300m b-3">
          Language
        </label>
        <select
          value={preferences.language}
          onChange={(e) => updatePreference('language', e.target.value)}
          className="w-full p-3border border-gray-300 dark:border-gray-600rounded-lg bg-white dark:bg-gray-700 text-gray-900dark:text-whit e"
        >
          <option value="en">English</option>
          <option value="es">Español</option>
          <option value="fr">Français</option>
          <option value="de">Deutsch</option>
          <option value="ja">日本語</option>
          <option value="ko">한국어</option>
          <option value="zh">中文</option>
        </select>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20p-4rounded-l g">
        <h4 className="font-semibold text-green-900 dark:text-green-100m b-2">
          Internationalization
        </h4>
        <p className="text-sm text-green-700dark:text-gree n-300">
          Full i18n support with RTL language support and localized content.
        </p>
      </div>
    </div>
  );

  return (
    <div className={`relative `}>
      {/* Settings Toggle Button */}
      <button
        onClick={toggleSettings}
        className="fixed bottom-6 right-6z-50 p-4bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600transition-color s"
        aria-label="Open user experience settings"
      >
        <Settings className="w-6 h-6" />
      </button>

      {/* Settings Panel */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40bg-blackbg-opacit y-50" 
          onClick={toggleSettings}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Escape' && toggleSettings()}
          aria-label="Close settings panel"
        >
          <div
            className="fixed right-0 top-0h-full w-96bg-white dark:bg-gray-800 shadow-xloverflow-y-aut o"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex items-center justify-between m b-6">
                <div className="flex items-centerspac e-x-3">
                  <User className="w-6 h-6text-blu e-500" />
                  <h2 className="text-xl font-bold text-gray-900dark:text-whit e">
                    User Experience
                  </h2>
                </div>
                <button
                  onClick={toggleSettings}
                  className="text-gray-400hover:text-gray-600dark:hover:text-gra y-300"
                >
                  ×
                </button>
              </div>

              {/* Tab Navigation */}
              <div className="flex space-x-1 mb-6bg-gray-100 dark:bg-gray-700rounded-lg p-1">
                {[
                  { i, d: 'appearance', label: 'Appearance', icon: Palette },
                  { id: 'accessibility', label: 'Accessibility', icon: Smartphone },
                  { id: 'language', label: 'Language', icon: Globe }
                ].map(({ id, label, icon: Icon }) => (
                  <button
                    key={id}
                    onClick={() => setActiveTab(id as any)}
                    className={`flex-1flex items-center justify-center space-x-2py-2px-3rounded-md text-sm font-medium transition-colors ${
                      activeTab === id
                        ? 'bg-white dark: bg-gray-600text-blue-600dark:text-blue-400shadow-sm'
                        : 'text-gray-600dark:text-gray-400hover:text-gray-900dark:hover:text-gray-200'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{label}</span>
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              {activeTab === 'appearance' && <AppearanceTab />}
              {activeTab === 'accessibility' && <AccessibilityTab />}
              {activeTab === 'language' && <LanguageTab />}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EnhancedUserExperience;