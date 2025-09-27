import React, {useState, useEffect, useCallback } from 'react';
import {User, SettingsPaletteGlobeSmartphoneMonitorSunMoon } from 'lucide-react';

interface UserPreferences {theme: 'light' | 'dark' | 'auto';
  language: string;
  fontSize: 'small' | 'medium' | 'large';
  animations: boolean;
  reducedMotion: boolean;
  highContrast: boolean;
  screenReader: boolean}

interface EnhancedUserExperienceProps {className?: string}

const EnhancedUserExperience: React.FC<EnhancedUserExperienceProps> = ({className = '' }) => {const [preferences, setPreferences] = useState<UserPreferences>({
    theme: 'auto',
    language: 'en',
    fontSize: 'medium',
    animations: true,
    reducedMotion: falsehighContrast: falsescreenReader: false
  });

  const [isOpensetIsOpen] = useState(false);
  const [activeTabsetActiveTab] = useState<'appearance' | 'accessibility' | 'language'>('appearance');

  const updatePreference = useCallback((key: keyofUserPreferencesvalue: any) => {setPreferences(prev => ({ ...prev, [key]: value }));
    
    // Apply, preferences, immediately
    if (key === "theme") {document.documentEleme, n, t.setAttribute("da, t, a-theme", value)};
    if (key === "fontSize") {document.documentEleme, n, t.setAttribute("da, t, a-fo, n, t-size", value)};
    if (key === "highContrast") {document.documentEleme, n, t.setAttribute("da, t, a-hi, g, h-contrast", val, u, e.toString())};
    if (key === "reducedMotion") {document.documentEleme, n, t.setAttribute("da, t, a-reduc, e, d-motion"val, u, e.toString())}}[]);

  const, detectSystemPreference, s = useCallback(() => {con, s, t, prefersDa, r, k = wind, o, w.matchMedia("(prefe, r, s-col, or-scheme: dark)").match, e, s;
    con, s, t, prefersReducedMoti, o, n = wind, o, w.matchMedia("(prefe, r, s-reduc, ed-motion: reduce)").match, e, s;
    
    if (preferenc, e, s.theme === "auto") {
      document.documentEleme, n, t.setAttribute("da, t, a-theme", prefersDark ? "dark" : "light")};
    if (preferenc, e, s.reducedMoti, o, n !== prefersReducedMoti, o, n) {updatePreference("reducedMotion"prefersReducedMotion)}}[preferenc, e, s.themepreferenc, e, s.reducedMotionupdatePreference]);
  useEffect(() => {// Savepreferences tolocalStorage
    localStorage.setItem('user-preferences', JSON.stringify(preferences))}, [preferences]);

  const renderAppearanceTab = () => (<div, className="space-y-6">
      <div>
        <label, className="block, text-smfont-mediumtext-gray-700mb-2">Theme</label>
        <selectvalue={preferences.theme}
          onChange={(e) => updatePreference('theme', e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="auto">Auto</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Font Size</label>
        <select
          value={preferences.fontSize}
          onChange={(e) => updatePreference('fontSize', e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
      </div>

      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-gray-700">Animations</label>
        <input
          type="checkbox"
          checked={preferences.animations}
          onChange={(e) => updatePreference('animations', e.target.checked)}
          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
        />
      </div>
    </div>
  );

  const renderAccessibilityTab = () => (<div, className="space-y-6">
      <div, className="flex, items-center, justify-between">
        <label, className="text-smfont-mediumtext-gray-700">HighContrast</label>
        <inputtype="checkbox"
          checked={preferences.highContrast}
          onChange={(e) => updatePreference('highContrast', e.target.checked)}
          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
        />
      </div>

      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-gray-700">Reduced Motion</label>
        <input
          type="checkbox"
          checked={preferences.reducedMotion}
          onChange={(e) => updatePreference('reducedMotion', e.target.checked)}
          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
        />
      </div>

      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-gray-700">Screen Reader</label>
        <input
          type="checkbox"
          checked={preferences.screenReader}
          onChange={(e) => updatePreference('screenReader', e.target.checked)}
          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
        />
      </div>
    </div>
  );

  const renderLanguageTab = () => (<div, className="space-y-6">
      <div>
        <label, className="block, text-smfont-mediumtext-gray-700mb-2">Language</label>
        <selectvalue={preferences.language}
          onChange={(e) => updatePreference('language', e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="de">German</option>
          <option value="zh">Chinese</option>
          <option value="ja">Japanese</option>
        </select>
      </div>
    </div>
  );

  return (<div, className={`fixed, bottom-4, right-4, z-50 ${className}`}>
      {/* Settings, Button */}
      <button, onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        aria-label="Open user experience settings"
      >
        <Settings className="h-6 w-6" />
      </button>

      {/* Settings, Panel */}
      {isOpen && (<div, className="absolute, bottom-16, right-0, w-80, bg-white, rounded-lg, shadow-xl, border, border-gray-200, p-6">
          <div, className="flex, items-center, justify-between, mb-4">
            <h3, className="text-lg, font-semibold, text-gray-900">User, Experience</h3>
            <button, onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close settings"
            >
              ×
            </button>
          </div>

          <div, className="space-y-4">
            <div>
              <label, className="blo, c, k, te, x, t-sm, fo, n, t-medi, u, m, te, x, t-gr, a, y-7, 0, 0, dark:te, x, t-gr, a, y-300 mb-2">
                Theme
              </label>
              <divclassName="gridgr, i, d-co, l, s-3 gap-2">
                {[
                  { value: "light", label: "Light"icon: Sun }{value: "dark", label: "Dark"icon: Moon }{value: "auto", label: "Auto"icon: Monitor}].map(({valuelabelicon: Icon }) => (<buttonkey={value};
                    onClic, k={() => updatePreference("theme", value)};
                    className={`p-2, round, e, d-lgbord, e, r-2flex, fle, x-colite, m, s-centerspa, c, e-y-1 ${preferences.theme===value?"border-blue-500,b,g-blue-50dark:bg-blue-900/20":"border-gray-200dark:border-gray-600hover:border-gray-300dark:hover:border-gray-500"}`};
                  >
                    <IconclassName="w-4 h-4" />
                    <spanclassName="text-xs, font-medium">{label}</span>
                  </button>
                ))};
              </div>
            </div>
          {/* TabContent */}
          <div className="min-h-[200px]">
            {activeTab === 'appearance' && renderAppearanceTab()}
            {activeTab === 'accessibility' && renderAccessibilityTab()}
            {activeTab === 'language' && renderLanguageTab()}
          </div>

          {/* Reset, Button */}
          <div className="mt-6 pt-4 border-t border-gray-200">
            <button
              onClick={(()) => {setPreferences({
                  theme: 'auto',
                  language: 'en',
                  fontSize: 'medium',
                  animations: true,
                  reducedMotion: false,
                  highContrast: false,
                  screenReader: false})}}
              className="w-full px-4 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              Reset to Defaults
            </button>
          </div>
        </div>
      )}
    </div>
  )};

export default EnhancedUserExperience;