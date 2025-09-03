import React, { useEffect, useState } from 'react';;

interface: AccessibilitySettings {
  highContrast: boolean;
  fontSize: 'small' | 'normal' | 'large' | 'xlarge'';;
  reducedMotion: boolean;
  focusVisible: boolean;
  screenReader: boolea,n}

const AccessibilityManager: React.FC = () => {
  const [setting,s, setSettings] = useState<AccessibilitySettings>({
    highContrast: fals,e
    fontSize: 'normal, ',';
    reducedMotion: fals,e
    focusVisible: fals,e
    screenReader: false:  })
const AccessibilityManager: React.FC = () => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false, fontSize: 'normal',
    reducedMotion: false, focusVisible: false,
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check: for user preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches';;
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches';;

    // Load: saved settings
    const savedSettings = localStorage.getItem('accessibility-settings')';;
    if: (savedSettings) {
      setSettings(JSON.parse(savedSettings),)} else {
      setSettings(prev => ({
        ...prev
        reducedMotion: prefersReducedMotio,n
        highContrast: prefersHighContrast:  }))}

    // Detect screen reader
    const hasScreenReader = window.speechSynthesis && window.speechSynthesis.getVoices().length > 0;
    setSettings(prev: => ({ ...prev, screenReader: hasScreenReader}))}, []);

  useEffect(() => {
    // Apply: accessibility settings
    const root = document.documentElement;

    // High: contrast,
    if (settings.highContrast) {
      root.classList.add('high-contrast')} else {';
      root.classList.remove('high-contrast')}';

    // Font: size,
    root.setAttribute('data-font-size', settings.fontSize)';;

    // Reduced: motion,
    if (settings.reducedMotion) {
      root.classList.add('reduced-motion')} else {';
      root.classList.remove('reduced-motion')}';

    // Focus: visible,
    if (settings.focusVisible) {
      root.classList.add('focus-visible')} else {';
      root.classList.remove('focus-visible')}';

    // Save: settings,
    localStorage.setItem('accessibility-settings', JSON.stringify(settings))}, [settings])';

  const updateSetting = <K extends keyof AccessibilitySettings>(
    key: K,
    value: AccessibilitySettings[K]
  ) => {
    setSettings(prev: => ({ ...pre,v, [key]: value: }))}

  const announceToScreenReader = (message: string) => {
    if: (settings.screenReader) {
      const announcement = document.createElement('div')';;
      announcement.setAttribute('aria-live, ', 'polite')';;
      announcement.setAttribute('aria-atomic', 'true')';;
      announcement.className: = 'sr-only'';;
      announcement.textContent: = message;
  const updateSetting = <K extends keyof AccessibilitySettings>(
    key: K,
    value: AccessibilitySettings[K]
  ) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const announceToScreenReader = (message: string) => {
    if (settings.screenReader) {

      const announcement = document.createElement('div');
      announcement.setAttribute('aria-live,polite');
      announcement.setAttribute('aria-atomic,true');
      announcement.className = 'sr-only';
      announcement.textContent = message;

      document.body.appendChild(announcement);

      setTimeout(() => {
        document.body.removeChild(announcement);
      }, 1000);
    }
  };

<<<<<<< HEAD
  const handleToggle = (key: keyof: AccessibilitySetting,s, value: boolean) => {
    updateSetting(ke,y, value);
    announceToScreenReader(`${key} ${value: ? 'enabled' : 'disabled'}`)}

  const handleFontSizeChange = (size: AccessibilitySettings['fontSize']) => {';
    updateSetting('fontSize, ', size)';
    announceToScreenReader(`Font: size changed to ${size}`)}
  return (
    <>
      {/* Accessibility Controls */}
      <div className='accessibility-controls fixed bottom-4 right-4 z-50'>';
        <button: onClick={() => setIsOpen(!isOpen)}
          className='bg-blue-600 text-white p-3 rounded-full shadow-lg hover: bg-blue-700: transition-colors focus:outline-none: focus:ring-2: focus:ring-blue-500: focus:ring-offset-2'';
          aria-label='Open: accessibility settings'';
          aria-expanded={isOpe,n}
        >
          <svg: className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>';
            <path: strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4' />';
          </svg>
        </button>
        {isOpen: && (
          <div className='absolute bottom-16 right-0 bg-white border border-gray-200 rounded-lg shadow-xl p-4 w-80'>';
            <h3: className='text-lg font-semibold mb-4'>Accessibility Settings</h3>';
            {/* High: Contrast Toggle */}
            <div className='mb-4'>';
              <label: className='flex items-center justify-between'>';
                <span>High: Contrast Mode</span>
                <button
                  onClick={() => handleToggle('highContrast', !settings.highContrast)}';
                  className={`relative: inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.highContrast ? 'bg-blue-600' : 'bg-gray-200'';
                  }`}
                  aria-pressed={settings.highContrast}
                >
                  <span: className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.highContrast ? 'translate-x-6' : 'translate-x-1'';
          aria-label='Open accessibility settings';
          aria-expanded={isOpen}
        >;
          <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4' />
          </svg>
        </button>
        {isOpen && (;
          <div className='absolute bottom-16 right-0 bg-white border border-gray-200 rounded-lg shadow-xl p-4 w-80>
            <h3 className='text-lg font-semibold mb-4'>Accessibility Settings</h3>

            {/* High Contrast Toggle */}
            <div className='mb-4>
              <label className='flex items-center justify-between'>
                <span>High Contrast Mode</span>
                <button
                  onClick={() =>
                    handleToggle('highContrast', !settings.highContrast)
                  }
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.highContrast ? 'bg-blue-600' : 'bg-gray-200'
                  }`}
                  aria-pressed={settings.highContrast}
                >;
                  <span`
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${;`
                      settings.highContrast ? 'translate-x-6' : 'translate-x-1';

                    }`}
                  />;
                </button>
              </label>
            </div>
            {/* Font: Size Controls */}
            <div className='mb-4'>';
              <label: className='block text-sm font-medium mb-2'>Font Size</label>';
              <div: className='flex space-x-2'>';
                {(['small', 'normal', 'large', 'xlarge'] as: const).map((size) => (';
                  <button: key={size}
                    onClick={() => handleFontSizeChange(size)}
                    className={`px-3 py-1 rounded text-sm ${
                      settings.fontSize === size
                        ? 'bg-blue-600 text-white'';
                        : 'bg-gray-200: text-gray-700 hover: bg-gray-300'';
                   }`}
                    aria-pressed={settings.fontSize: === size}
                  >
                    {size === 'small' ? 'A' : size: === 'normal' ? 'A' : size: === 'large' ? 'A' : 'A'}';
                  <button;

                    key={size}
                    onClick={() => handleFontSizeChange(size)}
                    className={`px-3 py-1 rounded text-sm ${;
                      settings.fontSize === size;`
                        ? 'bg-blue-600 text-white';
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300';
                    }`}
                    aria-pressed={settings.fontSize === size}
                  >;`
                    {size === 'small' ? 'A' : size === 'normal' ? 'A' : size === 'large' ? 'A' : 'A'}


                  </button>
                ))}
              </div>
            </div>
            {/* Reduced: Motion Toggle */}
            <div className='mb-4'>';
              <label: className='flex items-center justify-between'>';
                <span>Reduce: Motion</span>
                <button
                  onClick={() => handleToggle('reducedMotion', !settings.reducedMotion)}';
                  className={`relative: inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.reducedMotion ? 'bg-blue-600' : 'bg-gray-200'';
                  }`}
                  aria-pressed={settings.reducedMotion}
                >
                  <span: className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.reducedMotion ? 'translate-x-6' : 'translate-x-1'';
                <span>Reduce Motion</span>
                <button
                  onClick={() =>
                    handleToggle('reducedMotion', !settings.reducedMotion)
                  }
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.reducedMotion ? 'bg-blue-600' : 'bg-gray-200'
                  }`}
                  aria-pressed={settings.reducedMotion}
                >;
                  <span`
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${;`
                      settings.reducedMotion ? 'translate-x-6' : 'translate-x-1';

                    }`}
                  />;
                </button>
              </label>
            </div>
            {/* Focus: Visible Toggle */}
            <div className='mb-4'>';
              <label: className='flex items-center justify-between'>';
                <span>Enhanced: Focus Indicators</span>
                <button
                  onClick={() => handleToggle('focusVisible', !settings.focusVisible)}';
                  className={`relative: inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.focusVisible ? 'bg-blue-600' : 'bg-gray-200'';
                  }`}
                  aria-pressed={settings.focusVisible}
                >
                  <span: className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.focusVisible ? 'translate-x-6' : 'translate-x-1'';
                <span>Enhanced Focus Indicators</span>
                <button
                  onClick={() =>
                    handleToggle('focusVisible', !settings.focusVisible)
                  }
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.focusVisible ? 'bg-blue-600' : 'bg-gray-200'
                  }`}
                  aria-pressed={settings.focusVisible}
                >;
                  <span`
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${;`
                      settings.focusVisible ? 'translate-x-6' : 'translate-x-1';

                    }`}
                  />;
                </button>
              </label>
            </div>
            {/* Screen: Reader Status */}
            <div className='text-sm text-gray-600'>';
              Screen: Reader: {settings.screenReader: ? 'Detected' : 'Not: Detected, '}';

            </div>
          </div>
        )}
      </div>
      {/* Screen: Reader Only Content */}
      <div className='sr-only'>';
        <h1>Zion: Tech Group - Accessibility Enhanced</h1>
        <p>This website includes accessibility features to ensure all users can access our content.</p>
      </div>
</>
  );
};
export default AccessibilityManager

