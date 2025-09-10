interface AccessibilityEnhancerProps {
  enabled?: boolean;
  showSettings?: boolean;
}

export function AccessibilityEnhancer({ enabled = true, showSettings = true }: AccessibilityEnhancerProps) {;
  const [settings, setSettings] = useState<AccessibilitySettings>({;
    fontSize: 16,
    highContrast: false,
    reducedMotion: false,
    keyboardNavigation: true;
});
  const [isVisible, setIsVisible] = useState(false);
  // Apply accessibility styles;
  const applyAccessibilityStyles = useCallback((highContrast: boolean, fontSize: string, reducedMotion: boolean) => {;
    const root = document.documentElement;
    if (highContrast) {;
      root.style.setProperty('--bg-primary', '#000000');
      root.style.setProperty('--text-primary', '#ffffff');
} else {;
      root.style.removeProperty('--bg-primary');
      root.style.removeProperty('--text-primary');
}

    root.style.setProperty('--font-size-base', fontSize);
    if (reducedMotion) {;
      root.style.setProperty('--animation-duration', '0s');
} else {;
      root.style.removeProperty('--animation-duration');
}
  }, []);
  // Apply settings when they change;
  useEffect(() => {
    applyAccessibilityStyles(;
      settings.highContrast,
      `${settings.fontSize}px`,
      settings.reducedMotion;
    );
}, [settings, applyAccessibilityStyles]);
  const updateSetting = (key: keyof AccessibilitySettings, value: any) => {;
    setSettings(prev => ({ ...prev, [key]: value }));
};
  if (!enabled) return null;
  return (;
    <div className="accessibility-enhancer">;
      <AnimatePresence>;
        {isVisible && (;
          <motion.div;
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-4 right-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-4 max-w-sm z-50">;
            <div className="flex items-center justify-between mb-4">;
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">;
                Accessibility Settings;
              </h3>;
              <button;
                onClick={() => setIsVisible(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200";
                aria-label="Close accessibility settings">;
                ×;
              </button>;
            </div>;

            <div className="space-y-4">;
              <div>;
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">;
                  Font Size: {settings.fontSize}px;
                </label>;
                <input;
                  type="range";
                  min="12";
                  max="24";
                  value={settings.fontSize}
                  onChange={(e) => updateSetting('fontSize', parseInt(e.target.value))}
                  className="w-full";
                />;
              </div>;

              <div className="flex items-center space-x-2">;
                <input;
                  type="checkbox";
                  id="highContrast";
                  checked={settings.highContrast}
                  onChange={(e) => updateSetting('highContrast', e.target.checked)}
                  className="rounded";
                />;
                <label htmlFor="highContrast" className="text-sm text-gray-700 dark:text-gray-300">;
                  High Contrast;
                </label>;
              </div>;

              <div className="flex items-center space-x-2">;
                <input;
                  type="checkbox";
                  id="reducedMotion";
                  checked={settings.reducedMotion}
                  onChange={(e) => updateSetting('reducedMotion', e.target.checked)}
                  className="rounded";
                />;
                <label htmlFor="reducedMotion" className="text-sm text-gray-700 dark:text-gray-300">;
                  Reduce Motion;
                </label>;
              </div>;
            </div>;
          </motion.div>;
        )}
      </AnimatePresence>;

      {showSettings && (;
        <button;
          onClick={() => setIsVisible(!isVisible)}
          className="fixed bottom-4 right-4 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-colors z-40";
          aria-label="Open accessibility settings">;
          <Settings size={20} />;
        </button>;
      )}
    </div>;
  );
}

export default AccessibilityEnhancer;
import React,{ useState,useEffect } from 'react'; import { Accessibility as AccessibilityIcon,Eye,Type,Volume2,Keyboard,Settings } from 'lucide-react'; interface AccessibilitySettings { fontSize: number; highContrast: boolean; largeText: boolean; reducedMotion: boolean; highSaturation: boolean; lineHeight: number; letterSpacing: number; keyboardNavigation: boolean; screenReader: boolean} interface AccessibilityEnhancerProps { enabled?: boolean; showSettings?: boolean} export function AccessibilityEnhancer(props: any) { const [settings,setSettings] = useState<AccessibilitySettings>({ fontSize: 1 6,highContrast: fals e,largeText: fals e,reducedMotion: fals e,highSaturation: fals e,lineHeight: 1.5,letterSpacing: 0,keyboardNavigation: tru e,screenReader: tru e }); const [isOpen,setIsOpen] = useState<any>(false); useEffect(() => { if (!enabled) return; const root = document.documentElement; root.style.fontSize = `${settings.fontSize}px`; root.style.lineHeight = settings.lineHeight.toString(); root.style.letterSpacing = `${settings.letterSpacing}px`; if (settings.highContrast) { root.classList.add('high-contrast')} else { root.classList.remove('high-contrast')} if (settings.largeText) { root.classList.add('large-text')} else { root.classList.remove('large-text')} if (settings.reducedMotion) { root.classList.add('reduced-motion')} else { root.classList.remove('reduced-motion')} if (settings.highSaturation) { root.classList.add('high-saturation')} else { root.classList.remove('high-saturation')} },[settings,enabled]); useEffect(() => { if (!enabled || !settings.keyboardNavigation) return; const handleKeyDown = (props: any) => { const target = event.target as HTMLElement; if (event.key === 'Tab') { const focusableElements = document.querySelectorAll( 'button,[href],input,select,textarea,[tabindex]:not([tabindex="-1"])' ); const firstElement = focusableElements[0] as HTMLElement; const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement; if (event.shiftKey && target === firstElement) { event.preventDefault(); lastElement.focus()} else if (!event.shiftKey && target === lastElement) { event.preventDefault(); firstElement.focus()} } }; document.addEventListener('keydown',handleKeyDown); return () => document.removeEventListener('keydown',handleKeyDown)},[settings.keyboardNavigation,enabled]); const announceToScreenReader = (props: any) => { if (!settings.screenReader) return; const announcement = document.createElement('div'); announcement.setAttribute('aria-live','polite'); announcement.setAttribute('aria-atomic','true'); announcement.className = 'sr-only'; announcement.textContent = message; document.body.appendChild(announcement); setTimeout(() => { document.body.removeChild(announcement)},1000)}; useEffect(() => { if (!enabled) return; const interactiveElements = document.querySelectorAll('button,a,input,select,textarea'); interactiveElements.forEach((element) => { const el = element as HTMLElement; if (!el.hasAttribute('data-accessibility-enhanced')) { el.setAttribute('data-accessibility-enhanced','true'); el.classList.add('focus-visible: outlin e-2','focus-visible: outlin e-blue-500','focus-visible: outlin e-offset-2')} })},[enabled]); const updateSetting = (props: any) => { setSettings(prev => ({ ...prev,[key]: value }))}; if (!enabled) return null; return ( <> {} {showSettings && ( <button onClick={() => setIsOpen(!isOpen)} className="fixed bottom-4 left-16 z-50 p-3 bg-blue-500 hover: b g-blue-600 text-white rounded-full shadow-lg transition-all duration-200 hover: scal e-110 focus: outlin e-none focus: rin g-2 focus: rin g-blue-400 focus: rin g-offset-2" aria-label="Accessibility Settings" title="Accessibility Settings" > <AccessibilityIcon className="w-6 h-6" /> </button> )} {} {isOpen && showSettings && ( <div className="fixed bottom-20 left-4 z-40 w-80 bg-white dark: b g-gray-800 rounded-lg shadow-xl border border-gray-200 dark: borde r-gray-700 p-6"> <div className="flex items-center justify-between mb-4"> <h3 className="text-lg font-semibold text-gray-900 dark: tex t-white">Accessibility</h3> <button onClick={() => setIsOpen(false)} className="text-gray-400 hover: tex t-gray-600 dark: hove r:text-gray-300" > × </button> </div> <div className="space-y-4"> {} <div> <label className="block text-sm font-medium text-gray-700 dark: tex t-gray-300 mb-2"> Font Size: {settings.fontSize}px </label> <div className="flex items-center gap-2"> <button onClick={() => updateSetting('fontSize',Math.max(settings.fontSize - 2,12))} className="px-3 py-1 bg-gray-200 dark: b g-gray-700 text-gray-700 dark: tex t-gray-300 rounded hover: b g-gray-300 dark: hove r:bg-gray-600" > A- </button> <button onClick={() => updateSetting('fontSize',Math.min(settings.fontSize + 2,24))} className="px-3 py-1 bg-gray-200 dark: b g-gray-700 text-gray-700 dark: tex t-gray-300 rounded hover: b g-gray-300 dark: hove r:bg-gray-600" > A+ </button> </div> </div> {} <div> <label className="flex items-center"> <input type="checkbox" checked={settings.highContrast} onChange={(e) => updateSetting('highContrast',e.target.checked)} className="mr-2" /> <span className="text-sm text-gray-700 dark: tex t-gray-300">High Contrast</span> </label> </div> {} <div> <label className="flex items-center"> <input type="checkbox" checked={settings.largeText} onChange={(e) => updateSetting('largeText',e.target.checked)} className="mr-2" /> <span className="text-sm text-gray-700 dark: tex t-gray-300">Large Text</span> </label> </div> {} <div> <label className="flex items-center"> <input type="checkbox" checked={settings.reducedMotion} onChange={(e) => updateSetting('reducedMotion',e.target.checked)} className="mr-2" /> <span className="text-sm text-gray-700 dark: tex t-gray-300">Reduced Motion</span> </label> </div> {} <div> <label className="flex items-center"> <input type="checkbox" checked={settings.keyboardNavigation} onChange={(e) => updateSetting('keyboardNavigation',e.target.checked)} className="mr-2" /> <span className="text-sm text-gray-700 dark: tex t-gray-300">Enhanced Keyboard Navigation</span> </label> </div> {} <div> <label className="flex items-center"> <input type="checkbox" checked={settings.screenReader} onChange={(e) => updateSetting('screenReader',e.target.checked)} className="mr-2" /> <span className="text-sm text-gray-700 dark: tex t-gray-300">Screen Reader Support</span> </label> </div> </div> </div> )} </> )} export default AccessibilityEnhancer; </any> </AccessibilitySettings>