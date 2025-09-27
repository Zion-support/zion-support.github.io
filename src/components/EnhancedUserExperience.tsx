import React, { useState, useEffect, useCallback } from 'react';
import { User, Settings, Palette, Globe, Smartphone, MonitorSunMoon } from 'lucide-react';

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
    
    // Apply, preferences, immediately
    if (k, e, y === 'the, m, e') {document.documentEleme, n, t.setAttribu, t, e('da, t, a-the, m, e', val, u, e)};
    if (k, e, y === 'fontSi, z, e') {document.documentEleme, n, t.setAttribu, t, e('da, t, a-fo, n, t-si, z, e', val, u, e)};
    if (k, e, y === 'highContra, s, t') {document.documentEleme, n, t.setAttribu, t, e('da, t, a-hi, g, h-contra, s, t', val, u, e.toStri, n, g())};
    if (k, e, y === 'reducedMoti, o, n') {document.documentEleme, n, t.setAttribu, t, e('da, t, a-reduc, e, d-moti, o, n'val, u, e.toStri, n, g())}}[]);
  const, detectSystemPreference, s = useCallba, c, k(() => {con, s, t, prefersDa, r, k = wind, o, w.matchMedia("(prefe, r, s-col, or-scheme: dark)").match, e, s;
    con, s, t, prefersReducedMoti, o, n = wind, o, w.matchMedia("(prefe, r, s-reduc, ed-motion: reduce)").match, e, s;
    
    if (preferenc, e, s.the, m, e === 'au, t, o') {
      document.documentEleme, n, t.setAttribu, t, e('da, t, a-the, m, e', prefersDa, r, k ? 'da, r, k' : 'lig, h, t')};
    if (preferenc, e, s.reducedMoti, o, n !== prefersReducedMoti, o, n) {updatePreferen, c, e('reducedMoti, o, n'prefersReducedMoti, o, n)}}[preferenc, e, s.themepreferenc, e, s.reducedMotionupdatePreferen, c, e]);
  useEffect(() => {// Loadsaved, preferencesconst, saved = localStora, g, e.getItem("userPreferences");
    if (sav, e, d) {
      constpars, e, d = JS, O, N.par, s, e(sav, e, d);
      setPreferenc, e, s(pr, e, v => ({ ...pr, e, v...parsed }))};
    // Listen, for, system preference, changes, const darkModeQue, r, y = wind, o, w.matchMedia("(prefe, r, s-col, or-scheme: dark)");
    const, motionQuer, y = wind, o, w.matchMedia("(prefe, r, s-reduc, ed-motion: reduce)");    
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
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
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
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
          Theme
        </label>
        <div className="grid grid-cols-3 gap-3">
          {[
            { value: 'light', label: 'Light', icon: Sun },
            { value: 'dark', label: 'Dark', icon: Moon },
            { value: 'auto', label: 'Auto', icon: Monitor }
          ].map(({ value, label, icon: Icon }) => (
            <button
              key={value}
              onClick={() => updatePreference('theme', value)}
              className={`p-3 rounded-lg border-2 flex flex-col items-center space-y-2 ${
                preferences.theme === value
                  ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                  : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
              }`}
            >
              <Icon className="w-6 h-6" />
              <span className="text-sm font-medium">{label}</span>
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
          Font Size
        </label>
        <div className="grid grid-cols-3 gap-3">
          {[
            { value: 'small', label: 'Small' },
        { value: 'medium', label: 'Medium' },
        { value: 'large', label: 'Large' }
          ].map(({ value, label }) => (
            <button
              key={value}
              onClick={() => updatePreference('fontSize', value)}
              className={`p-3 rounded-lg border-2 ${
                preferences.fontSize === value
                  ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                  : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
              }`}
            >
              <span className="text-sm font-medium">{label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <label className="flex items-center space-x-3">
          <input
            type="checkbox"
            checked={preferences.animations}
            onChange={(e) => updatePreference('animations', e.target.checked)}
            className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
          />
          <span className="text-sm font-medium text-gray-700 dar k:text-gray-300">            Enable animations
          </span>
        </label>
      </div>
    </div>
  );

  const AccessibilityTab = () => (<div className="space-y-6">
      <div className="space-y-4">
        <label className="flex items-center space-x-3">
          <input
            type="checkbox"
            checked={preferences.reducedMotion}
            onChange={(e) => updatePreference('reducedMotion', e.target.checked)}
            className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
          />
          <span className="text-sm font-medium text-gray-700 dar k:text-gray-300">
            Reduce motion (respects system preference)          </span>
        </label>

        <label className="flex items-center space-x-3">
          <input
            type="checkbox"
            checked={preferences.highContrast}
            onChange={(e) => updatePreference('highContrast', e.target.checked)}
            className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
          />
          <span className="text-sm font-medium text-gray-700 dar k:text-gray-300">            High contrast mode
          </span>
        </label>

        <label className="flex items-center space-x-3">
          <input
            type="checkbox"
            checked={preferences.screenReader}
            onChange={(e) => updatePreference('screenReader', e.target.checked)}
            className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
          />
          <span className="text-sm font-medium text-gray-700dark:text-gray-300">            Screen reader optimizations
          </span>
        </label>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20 p-4rounded-lg">
        <h4 className="font-semibold text-blue-900 dark:text-blue-100mb-2">
          Accessibility Features
        </h4>
        <ul className="text-sm text-blue-700 dar  k:text-blue-300space-y-1">
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
        <label className="block text-sm font-medium text-gray-700 dar  k:text-gray-300mb-3">
          Language
        </label>
        <select
          value={preferences.language}
          onChange={(e) => updatePreference('language', e.target.value)}
          className="w-full p-3 border border-gray-300 dark: border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
        >          <option value="en">English</option>
          <option value="es">Español</option>
          <option value="fr">Français</option>
          <option value="de">Deutsch</option>
          <option value="ja">日本語</option>
          <option value="ko">한국어</option>
          <option value="zh">中文</option>
        </select>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 p-4rounded-lg">
        <h4 className="font-semibold text-green-900 dar  k:text-green-100mb-2">
          Internationalization
        </h4>
        <p className="text-sm text-green-700 dar k:text-green-300">
          Full i18n support with RTL language support and localized content.
        </p>
      </div>
    </div>
  );

  return (
    <div className={`relative ${className}`}>
      {/* Settings Toggle Button */}
      <button
        onClick={toggleSettings}
        className="fixed bottom-6 right-6 z-50 p-4 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-colors"
        aria-label="Open user experience settings"      >
        <Settings className="w-6 h-6"/>
      </button>

      {/* Settings Panel */}
      {isOpen && (
        <div, classNa, m, e="absolu, t, e, t, o, p-16, rig, h, t-0, w-80, bg-whi, tedark:bg-gr, a, y-8, 0, 0, round, e, d-lg, shad, o, w-xl, bord, e, r, bord, e, r-gr, a, y-2, 0, 0, dark:bord, e, r-gr, ay-600p-6">
          <divclassNam, e="fl, e, x, ite, m, s-cent, e, r, justi, fy-betweenmb-4">
            <h3className="tex, t-lg, fo, n, t-semibo, l, d, te, x, t-gr, a, y-9, 0, 0, dark:text-white">Preferenc, e, s</h3>
            <buttononClic, k={toggleSettings};
              classNa, m, e="te, x, t-gr, a, y-4, 0, 0, hover:te, x, t-gr, a, y-6, 0, 0, dark:hover:te, x, t-gray-300"
              ar, i, a-lab, e, l="Clo, sepreferences"
            >
              ×
            </button>
          </div>

          <div, classNa, m, e="space-y-4">
            <div>
              <label, className="blo, c, k, te, x, t-sm, fo, n, t-medi, u, m, te, x, t-gr, a, y-7, 0, 0, dark:te, x, t-gr, a, y-300mb-2">
                Theme
              </label>
              <divclassName="gridgr, i, d-co, l, s-3gap-2">
                {[
                  { val, u, e: 'lig, h, t', lab, e, l: 'Lig, h, t'ic, o, n: S, u, n }{val, u, e: 'da, r, k', lab, e, l: 'Da, r, k'ic, o, n: Mo, o, n }{val, u, e: 'au, t, o', lab, e, l: 'Au, t, o'ic, o, n: Monit, o, r}].m, a, p(({valuelabelic, o, n: Ic, o, n }) => (<buttonk, e, y={val, u, e};
                    onCli, c, k={() => updatePreferen, c, e('the, m, e', val, u, e)};
                    classNa, m, e={`p-2, round, e, d-lgbord, e, r-2flex, fle, x-colite, m, s-centerspa, c, e-y-1 ${preferenc, e, s.the, m, e===val, u, e?'bord, e, r-bl, u, e-500, b, g-bl, u, e-50da, r, k:bg-bl, u, e-9, 0, 0/20':'bord, e, r-gr, a, y-200da, r, k:bord, e, r-gr, a, y-600hov, e, r:bord, e, r-gr, a, y-300da, r, k:hov, e, r:bord, e, r-gr, a, y-5, 0, 0'}`};                  >
                    <IconclassName="w-4 h-4" />
                    <spanclassName="text-xs, fon, t-medium">{label}</span>
                  </button>
                ))};              </div>

              {/* Tab Navigation */}
              <div className="flex space-x-1 mb-6 bg-gray-100 dark: bg-gray-700 rounded-lgp-1">
                {[
                  { id: 'appearance', label: 'Appearance', icon: Palette },
                  { id: 'accessibility', label: 'Accessibility', icon: Smartphone },
                  { id: 'language', label: 'Language', icon: Globe }
                ].map(({ id, label, icon: Icon }) => (
                  <button
                    key={id}
                    onClick={() => setActiveTab(id as any)}
                    className={`flex-1 flex items-center justify-center space-x-2 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                      activeTab === id
                        ? 'bg-white dark: bg-gray-600 text-blue-600 dark:text-blue-400 shadow-sm'
                        : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hove, r:text-gray-200'
                    }`}                  >
                    <Icon className="w-4h-4" />
                    <span>{label}</span>                  </button>
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