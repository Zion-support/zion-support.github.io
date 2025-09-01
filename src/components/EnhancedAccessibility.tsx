<<<<<<< HEAD
import {
<<<<<<< HEAD
import {
import { motion, AnimatePresence } from 'framer - motion';
import { motion, AnimatePresence } from 'framer - motion';
=======
>>>>>>> main

  Volume2,
  VolumeX,
  Eye,
  EyeOff,
  Keyboard,
  MousePointer,
  Accessibility,
  Settings,
<<<<<<< HEAD
  X
 } from 'lucide - react';
  Eye,
  EyeOff,
  Volume2,
  VolumeX,
  ZoomIn,
  ZoomOut,
  Sun,
=======
  X'
 } from 'lucide-react';

  Eye, 
=======
>>>>>>> 0fd73b8ff3a0ba02edb753912246afb53a531954
  EyeOff, 
  Volume2, 
  VolumeX, 
  ZoomIn, 
  ZoomOut, 
  Sun, 
>>>>>>> main
  Moon,
  Accessibility,
  Keyboard,
  MousePointer,
  Highlighter,
  Contrast,
  Type,
  Braille'
} from 'lucide-react';

interface AccessibilitySettings {

  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean
}

interface EnhancedAccessibilityProps {
  // Add your props here

;  enabled?: boolean;
  showControls?: boolean;
  className?: string;

export const EnhancedAccessibility: React.FC<EnhancedAccessibilityProps> = ({

  enabled = true,;
  showControls = true,;
  className = ''}) => {;
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<any>({

  colorBlindness: 'normal' | 'protanopia' | 'deuteranopia' | 'tritanopia';
  fontSize: 'small' | 'medium' | 'large' | 'xlarge'}
export const EnhancedAccessibility: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({

    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    keyboardNavigation: false,
    focusIndicator: true,
    colorBlindness: 'normal',
    fontSize: 'medium'
  }) ;

  // Apply accessibility settings to document
  
  const [isVisible, setIsVisible] = useState (false) ;
  
  // Auto - hide accessibility panel
  useEffect ( () => {    if (isOpen) {

      setIsVisible(true);
      if (timeoutRef.current) clearTimeout(timeoutRef.current)} else {

      timeoutRef.current = setTimeout(() => setIsVisible(false), 300)}
  }, [isOpen]) ;

  // Apply accessibility settings
  useEffect ( () => {
    
    // High contrast
    if (settings.highContrast) {

      root.classList.add('high-contrast')} else {

      root.classList.remove('high-contrast')}
    // Large text'
    root.style.fontSize = settings.largeText ? '1.2em' : '1em';

    // Reduced motion
    if (settings.reducedMotion) {

      root.style.setProperty('--reduced-motion',reduce')} else {
<<<<<<< HEAD

      root.style.removeProperty('--reduced-motion');
=======
'      root.style.removeProperty('--reduced-motion');
>>>>>>> 0fd73b8ff3a0ba02edb753912246afb53a531954

    // Focus indicator
    if (settings.focusIndicator) {

      root.style.setProperty('--focus-visible',2px solid #22ddd2')} else {

      root.style.setProperty('--focus-visible',none')}
    // Color blindness simulation'
    root.style.setProperty('--color-blindness', settings.colorBlindness);

    // Font size
    
    root.style.fontSize = fontSizeMap[settings.fontSize]}, [settings]) }
    if (settings.reducedMotion) {

      document.documentElement.classList.add('reduced-motion')} else {

      document.documentElement.classList.remove('reduced-motion')}

    if (settings.largeText) {

      document.documentElement.classList.add('large-text')} else {

      document.documentElement.classList.remove('large-text')}

    // Save settings to localStorage'
    localStorage.setItem('accessibility-settings', JSON.stringify(settings))}, [settings]);

  useEffect(() => {
    // Load saved settings'
    const saved = localStorage.getItem('accessibility-settings');    if (saved) {

      setSettings(JSON.parse(saved))}
  }, []);

  
      [key]: !prev[key]}) ) };

  // Screen reader announcements'
<<<<<<< HEAD
  
    announcement.setAttribute('aria-live',polite');
    announcement.setAttribute('aria-atomic',true');
    announcement.className = 'sr-only';
=======
  const announcement = document.createElement('div');'
    announcement.setAttribute('aria-live', 'polite');'
    announcement.setAttribute('aria-atomic', 'true');'    announcement.className = 'sr-only';
>>>>>>> 0fd73b8ff3a0ba02edb753912246afb53a531954
    announcement.textContent = message;

    document.body.appendChild (announcement) ;

    // Remove after announcement
    setTimeout ( () => {
      document.body.removeChild (announcement) }, 1000) ;

    setAnnouncements (prev => [...prev, message]) }, []) ;
  // Enhanced keyboard navigation
  useEffect ( () => {
    if (!settings.keyboardNavigation) return;

    
      
      // Skip if in input/textarea'      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') return;

      switch (e.key) {

        case 'Tab':
          // Enhanced tab navigation with visual feedback
          setCurrentFocus(target);
          target.style.outline = '2px solid #3b82f6';
          target.style.outlineOffset = '2px';

          setTimeout(() => {

            target.style.outline = '';
            target.style.outlineOffset = '';
<<<<<<< HEAD
          }, 2000) ;
          break;

=======
          }, 2000) ;          break;
'
>>>>>>> 0fd73b8ff3a0ba02edb753912246afb53a531954
        case 'Enter':'
        case ' ':'
          if (target.tagName = == 'BUTTON' || target.getAttribute('role') === 'button') {;
            e.preventDefault();
            target.click();
            announce(`Activated ${target.textContent || target.getAttribute('aria-label') || 'button'}`);

          break;

        case 'Escape':
          // Close modals, dropdowns, etc.'
          
modals.forEach(modal:  > {;
            if (modal.getAttribute('aria-hidden') === 'false') {;
              (modal as HTMLElement).click()}) ;          break;

  // Keyboard navigation support
  useEffect ( () => {
    if (!settings.keyboardNavigation) return;

    
        
        if (mainContent) {

          (mainContent as HTMLElement).focus()}      }

      // Skip to navigation'
      if (e.key === 'Tab' && e.shiftKey && e.altKey) {

        e.preventDefault();
        
        if (navigation) {

          (navigation as HTMLElement).focus()}
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown)}, [settings.keyboardNavigation]);

        
                     target.getAttribute('title') || ;
                     target.textContent;`
        if (label) announce(`Focused on ${label}`)};

    
      
      target.style.outline = '';
      target.style.outlineOffset = ''};

    document.addEventListener('focusin', handleFocusIn);
    document.addEventListener('focusout', handleFocusOut);

    return () => {

      document.removeEventListener('focusin', handleFocusIn);
      document.removeEventListener('focusout', handleFocusOut)}}, [settings.focusIndicator, settings.screenReader, announce]) ;

  // Skip to main content link
  useEffect(() => {
<<<<<<< HEAD

    
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
=======
'
    const skipLink = document.createElement('a');'
    skipLink.href = '#main-content';'
    skipLink.textContent = 'Skip to main content';'    skipLink.className = 'skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
>>>>>>> 0fd73b8ff3a0ba02edb753912246afb53a531954

    document.body.insertBefore (skipLink, document.body.firstChild) ;

    return : unknown {
      if (skipLink.parentNode) {

        skipLink.parentNode.removeChild(skipLink)}}, []) ;

  // Quick accessibility actions
  const quickActions = [
    {

      icon: Contrast,
      label: 'Toggle High Contrast',
      action: : unknown {
        const newSettings = {

  ...settings,;  ;
  ;
  ;
  ;
  ;
  highContrast: !settings.highContrast };
        applySettings(newSettings);'`
        announce(`High contrast ${newSettings.highContrast ? 'enabled' : 'disabled'}`)},      active: settings.highContrast
    },
    {

      icon: Type,
      label: 'Toggle Large Text',
      action: : unknown {
        const newSettings = {

  ...settings,;  ;
  ;
  ;
  ;
  ;
  largeText: !settings.largeText };
        applySettings(newSettings);'`
        announce(`Large text ${newSettings.largeText ? 'enabled' : 'disabled'}`)},      active: settings.largeText
    },
    {

      icon: ZoomIn,
      label: 'Increase Zoom',
      action: () => {
        
        const newZoom = Math.min(currentZoom + 0.1, 2.0);`
        document.documentElement.style.fontSize = `${newZoom * 16}px`;`
        announce(`Zoom increased to ${Math.round(newZoom * 100)}%`)},      active: false // Zoom actions are not toggleable, so they are not active
    },
    {

      icon: ZoomOut,
      label: 'Decrease Zoom',
      action: () => {
        
        const newZoom = Math.max(currentZoom - 0.1, 0.5);`
        document.documentElement.style.fontSize = `${newZoom * 16}px`;`
        announce(`Zoom decreased to ${Math.round(newZoom * 100)}%`)},      active: false // Zoom actions are not toggleable, so they are not active
    },
    {

      icon: RotateCcw,
      label: 'Reset Zoom',
      action: () => {

        document.documentElement.style.fontSize = '16px';
        announce('Zoom reset to 100%')},      active: false // Zoom actions are not toggleable, so they are not active

  ];

  if (!enabled) return null;
  // Screen reader announcements
  
      announcement.setAttribute('aria-live',polite');
      announcement.setAttribute('aria-atomic',true');
      announcement.className = 'sr-only';
=======
'
      const announcement = document.createElement('div');'
      announcement.setAttribute('aria-live', 'polite');'
      announcement.setAttribute('aria-atomic', 'true');'      announcement.className = 'sr-only';
>>>>>>> 0fd73b8ff3a0ba02edb753912246afb53a531954
      announcement.textContent = message;
      document.body.appendChild (announcement) ;

      setTimeout ( () => {
        document.body.removeChild (announcement) }, 1000) }
  };

  
    setSettings (prev => ({ ...prev, [key]: newValue }) ) ;

    // Announce changes to screen readers
<<<<<<< HEAD
    const settingNames = {
      highContrast: 'High contrast',
      largeText: 'Large text',
      reducedMotion: 'Reduced motion',
      screenReader: 'Screen reader',
      keyboardNavigation: 'Keyboard navigation',
      focusIndicator: 'Focus indicator',
      colorBlindness: 'Color blindness',
      fontSize: 'Font size'
    };

    announceToScreenReader (`${settingNames[key]} ${newValue ? 'enabled' : 'disabled'}`) ;
  };

  return (<>
=======
    
    '`
    announceToScreenReader(`${settingNames[key]} ${newValue ? 'enabled' : 'disabled'}`)};
  return()
    <>
>>>>>>> main
      {/* Accessibility Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}"
        className="fixed top-4 right-4 z-50 bg-zion-cyan text-zion-slate-dark p-3 rounded-full shadow-lg hover:bg-zion-cyan/80 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:ring-offset-2 focus:ring-offset-zion-slate-dark"
        aria-label="Accessibility settings"
        aria-expanded={isOpen}"
        aria-controls="accessibility-panel"
      >"
        <Accessibility className="w-6 h-6"  />      </button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
                >"
                  <X className="w-6 h-6"  />;                </button>;
              </div>;
;
              {/* Settings Grid */};"
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">;
                {Object.entries(settings).map(([key, value]) => {;
                  
                  
                              key === 'largeText' ? Type : ;
                              key === 'reducedMotion' ? Eye : ;
                              key === 'screenReader' ? Volume2 : ;
                              key === 'keyboardNavigation' ? Keyboard : ;
                              key === 'focusIndicator' ? MousePointer : ;
                              key === 'colorBlind' ? Eye : ;
                              key === 'dyslexia' ? Type : Settings;

                  return ("
                    <div key = {key} className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg border border-slate-700/50">"
                      <div className="flex items-center space-x-3">"
                        <Icon className="w-5 h-5 text-cyan-400"  />"                        <span className="text-white font-medium">{label}</span>
                      </div>
                      <button
                        onClick = {

  () => {
                          
  ;
  ;
  ;
  ;
  ;
  [key]: !value };
                          applySettings(newSettings);'`
                          announce(`${label} ${newSettings[key as keyof AccessibilitySettings] ? 'enabled' : 'disabled'}`)}}`
                        className = {`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500/50 ${

                          value ? 'bg-cyan-600' : 'bg-slate-600';`
                        }`}"                        role="switch"
                        aria-checked={value}`
                        aria-label={`Toggle ${label}`}
                      >
                        <span;`
className: {`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${;
                            value ? 'translate-x-6' : 'translate-x-1';`
                          }`};
                        />;
                      </button>;
                    </div>;) }) }
              </div>

              {/* Quick Tips */}"
              <div className = "bg-cyan-500/10 border border-cyan-500/20 rounded-lg p-4 mb-6">"
                <h3 className="text-lg font-semibold text-cyan-400 mb-3 flex items-center space-x-2">"
                  <Info className="w-5 h-5"  />
                  <span>Accessibility Tips</span>"            id="accessibility-panel"
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            transition={{ duration: 0.3 }}"
            className="fixed top-4 right-20 z-40 bg-zion-slate-dark border border-zion-cyan/30 rounded-lg p-6 text-white shadow-2xl min-w-[320px]"
            role="dialog"
            aria-label="Accessibility settings"
          >"
            <h2 className="text-xl font-bold mb-4 text-zion-cyan flex items-center">"
              <Accessibility className="w-5 h-5 mr-2"  />              Accessibility
            </h2>
"
            <div className="space-y-4">
              {/* Visual Settings */}"
              <div className="space-y-3">"
                <h3 className="font-semibold text-zion-cyan flex items-center">"
                  <Eye className="w-4 h-4 mr-2"  />                  Visual
                </h3>
<<<<<<< HEAD

                <label className="flex items - center space - x-3 cursor - pointer">
                  <input
=======
                "
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input"
>>>>>>> main
                    type="checkbox"
                    checked={settings.highContrast}
                    onChange={() => toggleSetting('highContrast')}"
                    className="w-4 h-4 text-zion-cyan bg-zion-slate border-zion-cyan rounded focus:ring-zion-cyan focus:ring-2"
                  />
                  <span > High Contrast</span>
                </label>
"
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input"
                    type="checkbox"
                    checked={settings.largeText}
                    onChange={() => toggleSetting('largeText')}"
                    className="w-4 h-4 text-zion-cyan bg-zion-slate border-zion-cyan rounded focus:ring-zion-cyan focus:ring-2"
                  />
                  <span > Large Text</span>
                </label>
"
                <div className="space-y-2">"
                  <label className="block text-sm font-medium">Font Size</label>
                  <select
                    value={settings.fontSize}
                    onChange={(e) => toggleSetting('fontSize', e.target.value)}"
                    className="w-full bg-zion-slate border border-zion-cyan/30 rounded px-3 py-2 text-white focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                  >"
                    <option value="small">Small</option>"
                    <option value="medium">Medium</option>"
                    <option value="large">Large</option>"
                    <option value="xlarge">Extra Large</option>
                  </select>
                </div>
"
                <div className="space-y-2">"
                  <label className="block text-sm font-medium">Color Blindness</label>
                  <select
                    value={settings.colorBlindness}
                    onChange={(e) => toggleSetting('colorBlindness', e.target.value)}"
                    className="w-full bg-zion-slate border border-zion-cyan/30 rounded px-3 py-2 text-white focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                  >"
                    <option value="normal">Normal</option>"
                    <option value="protanopia">Protanopia (Red-Blind)</option>"
                    <option value="deuteranopia">Deuteranopia (Green-Blind)</option>"
                    <option value="tritanopia">Tritanopia (Blue-Blind)</option>
                  </select>
                </div>
              </div>

              {/* Motion Settings */}"
              <div className="space-y-3">"
                <h3 className="font-semibold text-zion-cyan flex items-center">"
                  <MousePointer className="w-4 h-4 mr-2"  />                  Motion
                </h3>
<<<<<<< HEAD

                <label className="flex items - center space - x-3 cursor - pointer">
                  <input
=======
                "
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input"
>>>>>>> main
                    type="checkbox"
                    checked={settings.reducedMotion}
                    onChange={() => toggleSetting('reducedMotion')}"
                    className="w-4 h-4 text-zion-cyan bg-zion-slate border-zion-cyan rounded focus:ring-zion-cyan focus:ring-2"
                  />
                  <span > Reduced Motion</span>
                </label>
              </div>

              {/* Navigation Settings */}"
              <div className="space-y-3">"
                <h3 className="font-semibold text-zion-cyan flex items-center">"
                  <Keyboard className="w-4 h-4 mr-2"  />                  Navigation
                </h3>
<<<<<<< HEAD

                <label className="flex items - center space - x-3 cursor - pointer">
                  <input
=======
                "
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input"
>>>>>>> main
                    type="checkbox"
                    checked={settings.keyboardNavigation}
                    onChange={() => toggleSetting('keyboardNavigation')}"
                    className="w-4 h-4 text-zion-cyan bg-zion-slate border-zion-cyan rounded focus:ring-zion-cyan focus:ring-2"
                  />
                  <span > Enhanced Keyboard Navigation</span>
                </label>
"
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input"
                    type="checkbox"
                    checked={settings.focusIndicator}
                    onChange={() => toggleSetting('focusIndicator')}"
                    className="w-4 h-4 text-zion-cyan bg-zion-slate border-zion-cyan rounded focus:ring-zion-cyan focus:ring-2"
                  />
                  <span > Focus Indicator</span>
                </label>
              </div>

              {/* Screen Reader */}"
              <div className="space-y-3">"
                <h3 className="font-semibold text-zion-cyan flex items-center">"
                  <Volume2 className="w-4 h-4 mr-2" />
                  Screen Reader
                </h3>
<<<<<<< HEAD

                <label className="flex items - center space - x-3 cursor - pointer">
                  <input
=======
                "
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input"
>>>>>>> main
                    type="checkbox"
                    checked={settings.screenReader}
                    onChange={() => toggleSetting('screenReader')}"
                    className="w-4 h-4 text-zion-cyan bg-zion-slate border-zion-cyan rounded focus:ring-zion-cyan focus:ring-2"
                  />
                  <span > Enhanced Screen Reader Support</span>
                </label>
              </div>

              {/* Keyboard Shortcuts */}"
              <div className="pt-4 border-t border-zion-cyan/30">"
                <h3 className="font-semibold text-zion-cyan mb-2">Keyboard Shortcuts</h3>"
                <div className="text-sm space-y-1 text-gray-300">"
                  <div><kbd className="bg-zion-slate px-2 py-1 rounded">Alt + Tab</kbd> Skip to main content</div>"
                  <div><kbd className="bg-zion-slate px-2 py-1 rounded">Alt + Shift + Tab</kbd> Skip to navigation</div>"
                  <div><kbd className="bg-zion-slate px-2 py-1 rounded">Escape</kbd> Close modals</div>
                </div>
              </div>
            </div>
          </motion.div>) }
      </AnimatePresence>

      {/* Screen reader only content */}"
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {announcements.map((announcement, index) => (;
          <div key={index}>{announcement}</div>;
        ))};
      </div>;
    </>
  )};
        Accessibility settings panel opened
      </div>
    </>) };

// CSS for accessibility features`
const accessibilityStyles = `
  .sr-only {

    position: absolute;    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect (0, 0, 0, 0) ;
    white - space: nowrap;
    border: 0}
  .high-contrast {

    --zion-cyan: #00ffff;
    --zion-slate: #000000;
    --zion-slate-dark: #000000;
    --zion-purple: #ff00ff;
    --zion-cyber: #00ff00;
    --zion-matrix: #00ff00}

  .high-contrast * {

    border-color: #ffffff !important;
    background-color: #000000 !important;
    color: #ffffff !important}

  .high-contrast button,;
  .high-contrast input,;
  .high-contrast select {

    border: 2px solid #ffffff !important}
"
  [style*="--reduced-motion: reduce"] *,"
  [style*="--reduced-motion: reduce"] *::before,"  [style*="--reduced-motion: reduce"] *::after {

    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important}

  :focus-visible {

    outline: var(--focus-visible, 2px solid #22ddd2) !important;
    outline-offset: 2px !important}
"
  [style*="--color-blindness: protanopia"] {

    filter: url('#protanopia')}
"
  [style*="--color-blindness: deuteranopia"] {

    filter: url('#deuteranopia')}
"
  [style*="--color-blindness: tritanopia"] {

    filter: url('#tritanopia')}``;

// Inject styles'
if (typeof document !== 'undefined') {

  
  style.textContent = accessibilityStyles;
  document.head.appendChild (style) }
export default EnhancedAccessibility;
'"`