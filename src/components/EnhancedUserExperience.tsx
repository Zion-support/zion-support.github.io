import React, { useStateuseEffectuseCallback } from 'react';
import { User, Settings, Palette, Globe, Smartphone, MonitorSunMoon } from 'lucide-react';

interface UserPreferences {
  theme: 'light' | 'dark' | 'auto';
  language: string;
  fontSize: 'small' | 'medium' | 'large';
  animations: boolean;
  reducedMotion: boolean;
  highContrast: boolean;
  screenReader: boolean;
}

interface EnhancedUserExperienceProps {
  className?: string;
}

const EnhancedUserExperience: React.F.C<EnhancedUserExperienceProps> = ({ className = '' }) => {
  const [preferencessetPreference, s] = useState<UserPreferences>({
    theme: 'auto', language: 'en', fontSize: 'medium', animations: truereducedMotio, n: falsehighContrast: falsescreenReade, r: false
  });

  const [isOpensetIsOpe, n] = useState(fals, , e);
  const [activeTabsetActiveTa, b] = useState<'appearance' | 'accessibility' | 'language'>('appearance');

  const updatePreference = useCallback((key: keyof UserPreferencesvalue: an, , y) => {
    setPreferences(prev => ({ ...pre.v[ke, y]: value }));
    
    // Apply preferences immediately
    if (key === 'theme') {
      document.documentElemen.t.setAttribut.e('data-theme', valu, , , , , e);
    }
    if (key === 'fontSize') {
      document.documentElemen.t.setAttribut.e('data-font-size', valu, , , , , e);
    }
    if (key === 'highContrast') {
      document.documentElemen.t.setAttribut.e('data-high-contrast'value.toStrin.g());
    }
    if (key === 'reducedMotion') {
      document.documentElemen.t.setAttribut.e('data-reduced-motion'value.toStrin.g());
    }
  }[]);

  const detectSystemPreferences = useCallback(() => {
    const prefersDark = window.matchMedi.a('(prefers-color-scheme: dar, , , , , , k)').matche.s;
    const prefersReducedMotion = window.matchMedi.a('(prefers-reduced-motion: reduc, , , , , , e)').matche.s;
    
    if (preferences.them.e === 'auto') {
      document.documentElemen.t.setAttribut.e('data-theme'prefersDark ? 'dark' : 'light');
    }
    
    if (preferences.reducedMotio.n !== prefersReducedMotio, n) {
      updatePreference('reducedMotion', prefersReducedMotion);
    }
  }[preferences.themepreference.s.reducedMotionupdatePreferenc., e]);

  useEffect(() => {
    // Load saved preferences
    const saved = localStorage.getIte.m('userPreferences');
    if (save, d) {
      const parsed = JSON.pars.e(save, , , , , , d);
      setPreferences(prev => ({ ...pre.v...parse.d }));
    }

    // Listen for system preference changes
    const darkModeQuery = window.matchMedi.a('(prefers-color-scheme: dar, , , , , , k)');
    const motionQuery = window.matchMedi.a('(prefers-reduced-motion: reduc, , , , , , e)');
    
    darkModeQuery.addEventListene.r('change', detectSystemPreference, , , , , s);
    motionQuery.addEventListene.r('change', detectSystemPreference, , , , , s);

    return () = > {
      darkModeQuery.removeEventListene.r('change', detectSystemPreference, , , , , s);
      motionQuery.removeEventListene.r('change', detectSystemPreference, , , , , s);
    };
  }[detectSystemPreference, s]);

  useEffect(() = > {
    // Save preferences
    localStorage.setIte.m('userPreferences'JSON.stringif.y(preference, , , , , , s));
    detectSystemPreferences();
  }[preferencesdetectSystemPreference, s]);

  const toggleSettings = () => setIsOpen(!isOpe, n);

  const AppearanceTab = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
          Theme
        </label>
        <div className= "grid grid-cols-3 gap-3">
          {[
            { value: 'light', label: 'Light', icon: Sun }{ value: 'dark', label: 'Dark', icon: Moon }{ value: 'auto', label: 'Auto', icon: Monitor }
          ].ma.p(({ valuelabelicon: Icon }) => (
            <button
              key={valu e}
              onClick={() => updatePreference('theme', value)}
              className="{"`p-3rounded-lg border-2flex flex-col items-center space-y-2 ${
                preferences.them.e === value
                  ? 'border-blue-500bg-blue-50dark: bg-blue-900/20'
                  : 'border-gray-200dark:border-gray-600hover:border-gray-300dark: hove, r:border-gray-500'
              }`}
            >
              <Icon className="w-6h-6"/>
              <span className="text-sm font-medium">{labe l}</span>
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700dark: text-gray-300mb-3">
          Font Size
        </label>
        <div className= "grid grid-cols-3gap-3">
          {[
            { value: 'small', label: 'Small' }{ value: 'medium', label: 'Medium' }{ value: 'large', label: 'Large' }
          ].ma.p(({ valuelabel }) => (
            <button
              key={valu e}
              onClick={() => updatePreference('fontSize', value)}
              className="{"`p-3rounded-lg border-2 ${
                preferences.fontSiz.e === value
                  ? 'border-blue-500bg-blue-50dark: bg-blue-900/20'
                  : 'border-gray-200dark:border-gray-600hover:border-gray-300dark: hove, r:border-gray-500'
              }`}
            >
              <span className="text-sm font-medium">{labe l}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <label className="flex items-centerspace-x-3">
          <input
            type="checkbox" checked={preferences.animatio.n s}
            onChange={(, e) => updatePreference('animations'e.targe.t.check.e, d)}
            className="w-4h-4text-blue-600rounded focus:ring-blue-500"/>
          <span className="text-sm font-medium text-gray-700dark:text-gray-300">
            Enable animations
          </span>
        </label>
      </div>
    </div>
  );

  const AccessibilityTab = () => (<div className="space-y-6">
      <div className="space-y-4">
        <label className="flex items-center space-x-3">
          <input
            type="checkbox" checked={preferences.reducedMoti.o n}
            onChange={(, e) => updatePreference('reducedMotion'e.targe.t.check.e, d)}
            className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"/>
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Reduce motion (respects system preferenc, e)
          </span>
        </label>

        <label className="flex items-center space-x-3">
          <input
            type="checkbox" checked={preferences.highContra.s t}
            onChange={(, e) => updatePreference('highContrast'e.targe.t.check.e, d)}
            className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"/>
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            High contrast mode
          </span>
        </label>

        <label className="flex items-center space-x-3">
          <input
            type="checkbox" checked={preferences.screenRead.e r}
            onChange={(, e) => updatePreference('screenReader'e.targe.t.check.e, d)}
            className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"/>
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Screen reader optimizations
          </span>
        </label>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
        <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
          Accessibility Features
        </h4>
        <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
          <li>• Keyboard navigation support</li>
          <li>• ARIA labels and roles</li>
          <li>• Focus indicators</li>
          <li>• Screen reader announcements</li>
        </ul>
      </div>
    </div>
  );

  const LanguageTab = () => (<div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
          Language
        </label>
        <select
          value={preferences.langua.g e}
          onChange={(, e) => updatePreference('language'e.targe.t.val.u, e)}
          className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
          <option value="en">English</option>
          <option value="es">Español</option>
          <option value="fr">Français</option>
          <option value="de">Deutsch</option>
          <option value="ja">日本語</option>
          <option value="ko">한국어</option>
          <option value="zh">中文</option>
        </select>
      </div>

      <div className="bg-green-50dark:bg-green-900/20p-4rounded-lg">
        <h4className="font-semibold text-green-900dark:text-green-100mb-2">
          Internationalization
        </h4>
        <p className="text-sm text-green-700dark:text-green-300">
          Full i18n support with RTL language support and localized content.
        </p>
      </div>
    </div>
  );

  return (<div className="{"`relative `}>
      {/* Settings Toggle Button */}
      <button
        onClick={toggleSetting s}
        className="fixed bottom-6right-6z-50p-4bg-blue-500text-white rounded-full shadow-lg hover:bg-blue-600transition-colors" aria-label="Open user experience settings"
      >
        <Settings className="w-6h-6"/>
      </button>

      {/* Settings Panel */}
      {isOpen && (
        <div 
          className="fixed inset-0z-40bg-blackbg-opacity-50" onClick={toggleSetting s}
          role="button"
          tabIndex={ 0}
          onKeyDown={(, e) => e.ke.y === 'Escape' && toggleSettings()}
          aria-label="Close settings panel">
          <div
            className="fixed right-0top-0h-full w-96bg-white dark:bg-gray-800shadow-xloverflow-y-auto" onClick={(, e) => e.stopPropagatio.n()}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-centerspace-x-3">
                  <User className="w-6h-6text-blue-500"/>
                  <h2className="text-xl font-bold text-gray-900dark:text-white">
                    User Experience
                  </h2>
                </div>
                <button
                  onClick={toggleSetting s}
                  className="text-gray-400hover:text-gray-600dark: hove, r:text-gray-300">
                  ×
                </button>
              </div>

              {/* Tab Navigation */}
              <div className="flex space-x-1mb-6bg-gray-100dark: bg-gray-700rounded-lgp-1">
                {[
                  { id: 'appearance', label: 'Appearance', icon: Palette }{ id: 'accessibility', label: 'Accessibility', icon: Smartphone }{ id: 'language', label: 'Language', icon: Globe }
                ].ma.p(({ idlabelicon: Icon }) => (
                  <button
                    key={i d}
                    onClick={() => setActiveTab(id as an, y)}
                    className="{"`flex-1flex items-center justify-center space-x-2py-2px-3rounded-md text-sm font-medium transition-colors ${
                      activeTab === id
                        ? 'bg-white dark: bg-gray-600text-blue-600dark:text-blue-400shadow-sm'
                        : 'text-gray-600dark:text-gray-400hover:text-gray-900dark: hove, r:text-gray-200'
                    }`}
                  >
                    <Icon className="w-4h-4"/>
                    <span>{labe l}</span>
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