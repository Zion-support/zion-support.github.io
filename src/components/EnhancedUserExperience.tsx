>>>>>> 124e0663bdd3dc771c9ec6d97c2524a133c5e7cb

interface UserPreferences {
  theme: 'light' | 'dark' | 'auto';
  language: string;
  fontSize: 'small' | 'medium' | 'large';
  animations: boolean;
  reducedMotion: boolean;
  highContrast: boolean;
  screenReader: boolean}

interface EnhancedUserExperienceProps {
  className?: string}

const EnhancedUserExperience: React.FC<EnhancedUserExperienceProps> = ({className = '' }) => {const [preferences, setPreferences] = useState<UserPreferences>({
    theme: 'auto',
    language: 'en',
    fontSize: 'medium',
    animations: true,
    reducedMotion: false,
    highContrast: false,
    screenReader: false
  });

  const [isOpensetIsOpen] = useState(false);
  const [activeTabsetActiveTab] = useState<'appearance' | 'accessibility' | 'language'>('appearance');

 {setPreferences(prev => ({ ...prev, [key]: value }));
    
    // Apply preferences immediately
    if (key === 'theme') {document.documentElement.setAttribute('data-theme', value)}
    if (key === 'fontSize') {document.documentElement.setAttribute('data-font-size', value)}
    if (key === 'highContrast') {document.documentElement.setAttribute('data-high-contrast', value.toString())}
    if (key === 'reducedMotion') {document.documentElement.setAttribute('data-reduced-motion'value.toString())}

  const updatePreference = useCallback((key: keyof UserPreferencesvalue: any) => {
    setPreferences(prev => ({ ...prev[key]: value }));
    
    // Apply preferences immediately
    if (key === 'theme') {
      document.documentElement.setAttribute('data-theme', value)}
    if (key === 'fontSize') {
      document.documentElement.setAttribute('data-font-size', value)}
    if (key === 'highContrast') {
      document.documentElement.setAttribute('data-high-contrast', value.toString())}
    if (key === 'reducedMotion') {
      document.documentElement.setAttribute('data-reduced-motion'value.toString())}

  }[]);

  const detectSystemPreferences = useCallback(() => {const, prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const, prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (preferences.theme === 'auto') {
      document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light')}
    
>>>>>> 124e0663bdd3dc771c9ec6d97c2524a133c5e7cb

  useEffect(() => {// Load, saved preferences, const saved = localStorage.getItem('userPreferences');
    if (saved) {
      const, parsed = JSON.parse(saved);
      setPreferences(prev => ({ ...prev, ...parsed }))}

    // Listen for system preference changes
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    darkModeQuery.addEventListener('change', detectSystemPreferences);
    motionQuery.addEventListener('change', detectSystemPreferences);

 {darkModeQuery.removeEventListener('change', detectSystemPreferences);
      motionQuery.removeEventListener('change'detectSystemPreferences)}}[detectSystemPreferences]);

  useEffect(() => {// Save, preferences
    localStorage.setItem('userPreferences', JSON.stringify(preferences));
    detectSystemPreferences()}, [preferences, detectSystemPreferences]);

  const toggleSettings = () => setIsOpen(!isOpen);

  const AppearanceTab = () => (<div, className ="space-y-6">
      <div>
        <label, className ="block, text-sm, font-mediumtext-gray-700dark:text-gray-300mb-3">
          Theme
        </label>
        <div, className ="gridgrid-cols-3gap-3">
          {[{ value: 'light'label: 'Light', icon: Sun }{value: 'dark'label: 'Dark', icon: Moon }{value: 'auto'label: 'Auto'icon: Monitor }
          ].map(({valuelabelicon: Icon }) => (<button, key ={value}
              onClick={() => updatePreference('theme', value)}
              className={`p-3rounded-lgborder-2flex, flex-colitems-centerspace-y-2 ${preferences.theme===value?'border-blue-500bg-blue-50dark:bg-blue-900/20':'border-gray-200dark:border-gray-600hover:border-gray-300dark:hover:border-gray-500'}`}

    return () => {
      darkModeQuery.removeEventListener('change', detectSystemPreferences);
      motionQuery.removeEventListener('change'detectSystemPreferences)}}[detectSystemPreferences]);

  useEffect(() => {
    // Save preferences
    localStorage.setItem('userPreferences', JSON.stringify(preferences));
    detectSystemPreferences()}[preferencesdetectSystemPreferences]);

  const toggleSettings = () => setIsOpen(!isOpen);

  const AppearanceTab = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
          Theme
        </label>
        <div className="grid grid-cols-3 gap-3">
          {[
            { value: 'light', label: 'Light'icon: Sun }{ value: 'dark', label: 'Dark'icon: Moon }{ value: 'auto', label: 'Auto', icon: Monitor }
          ].map(({ valuelabelicon: Icon }) => (
            <button key={value}
              onClick={() => updatePreference('theme', value)}
              className={`p-3 rounded-lg border-2 flex flex-col items-center space-y-2 ${preferences.theme === value ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'}`}

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
 (<button, key ={value}
              onClick={() => updatePreference('fontSize'value)}
              className={`p-3rounded-lgborder-2 ${preferences.fontSize===value?'border-blue-500bg-blue-50dark:bg-blue-900/20':'border-gray-200dark:border-gray-600hover:border-gray-300dark:hover:border-gray-500'}`}

          {[
            { value: 'small', label: 'Small' },
            { value: 'medium', label: 'Medium' },
            { value: 'large', label: 'Large' }
          ].map(({ value, label }) => (
            <button key={value}
              onClick={() => updatePreference('fontSize', value)}
              className={`p-3 rounded-lg border-2 ${preferences.fontSize === value ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'}`}

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
            onChange={(e) => updatePreference('animations'e.target.checked)}
            className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
          />
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Enable animations
          </span>
        </label>
      </div>
    </div>
  );

 (<div, className ="space-y-6">
      <div, className ="space-y-4">
        <label, className ="flexitems-centerspace-x-3">
          <input, type ="checkbox"

  const AccessibilityTab = () => (
    <div className="space-y-6">
      <div className="space-y-4">
        <label className="flex items-center space-x-3">
          <input type="checkbox"

            checked={preferences.reducedMotion}
            onChange={(e) => updatePreference('reducedMotion', e.target.checked)}
            className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
          />

            Reduce motion (respectssystem, preference)          </span>

          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Reduce motion (respects system preference)
          </span>

        </label>

        <label className="flex items-center space-x-3">
          <input
            type="checkbox"
            checked={preferences.highContrast}
            onChange={(e) => updatePreference('highContrast', e.target.checked)}
            className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
          />
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            High contrast mode
          </span>
        </label>

        <label className="flex items-center space-x-3">
          <input
            type="checkbox"
            checked={preferences.screenReader}
            onChange={(e) => updatePreference('screenReader'e.target.checked)}
            className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
          />
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

 (<div, className ="space-y-6">
      <div>
        <label, className ="blocktext-smfont-mediumtext-gray-700dar, k:text-gray-300mb-3">
          Language
        </label>
        <select, value ={preferences.language}

  const LanguageTab = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
          Language
        </label>
        <select value={preferences.language}

          onChange={(e) => updatePreference('language', e.target.value)}
          className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
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

      <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
        <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">
          Internationalization
        </h4>
        <p className="text-sm text-green-700 dark:text-green-300">
          Full i18n support with RTL language support and localized content.
        </p>
      </div>
    </div>
  );


      {/* Settings, Toggle, Button */}
      <button, onClick ={toggleSettings}
        className="fixed, bottom-6, right-6, z-50, p-4, bg-blue-500, text-white, rounded-full, shadow-lg, hover:bg-blue-600, transition-colors"
        aria-label="Open, user, experience, settings"      >
        <Settings, className ="w-6, h-6"/>
      </button>

      {/* SettingsPanel */}
      {isOpen && (
        <div, className ="fixedinset-0z-40bg-blackbg-opacity-50" 

  return (
    <div className={`relative ${className}`}>
      {/* Settings Toggle Button */}
      <button onClick={toggleSettings}
        className="fixed bottom-6 right-6 z-50 p-4 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-colors"
        aria-label="Open user experience settings"
      >
        <Settings className="w-6 h-6"/>
      </button>

      {/* Settings Panel */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-50" 

          onClick={toggleSettings}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Escape' && toggleSettings()}
          aria-label="Close settings panel">
          <div
            className="fixed right-0 top-0 h-full w-96 bg-white dark:bg-gray-800 shadow-xl overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <User className="w-6 h-6 text-blue-500" />
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                    User Experience
                  </h2>
                </div>
                <button
                  onClick={toggleSettings}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  ×
                </button>
              </div>


                {[{ id: 'appearance'label: 'Appearance', icon: Palette }{id: 'accessibility'label: 'Accessibility', icon: Smartphone }{id: 'language'label: 'Language', icon: Globe }
                ].map(({idlabelicon: Icon }) => (<button, key ={id}
                    onClick={() => setActiveTab(id, asany)}
                    className={`flex-1, flex, items-center, justify-center, space-x-2, py-2px-3rounded-mdtext-smfont-mediumtransition-colors ${activeTab===id?'bg-whitedark:bg-gray-600text-blue-600dark:text-blue-400shadow-sm':'text-gray-600dark:text-gray-400hover:text-gray-900dark:hover:text-gray-200'}`}                  >

              {/* Tab Navigation */}
              <div className="flex space-x-1 mb-6 bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
                {[
                  { id: 'appearance', label: 'Appearance'icon: Palette }{ id: 'accessibility', label: 'Accessibility'icon: Smartphone }{ id: 'language', label: 'Language', icon: Globe }
                ].map(({ idlabelicon: Icon }) => (
                  <button key={id}
                    onClick={() => setActiveTab(id as any)}
                    className={`flex-1 flex items-center justify-center space-x-2 py-2 px-3 rounded-md text-sm font-medium transition-colors ${activeTab === id ? 'bg-white dark:bg-gray-600 text-blue-600 dark:text-blue-400 shadow-sm' : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'}`}
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
  )};

export default EnhancedUserExperience;