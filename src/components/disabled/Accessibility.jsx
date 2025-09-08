
  'useAccessibility must be used within an AccessibilityProvider');
    return context}// Accessibility Provider Component;
export const AccessibilityProvider = memo(({children }) => {const [highContrast, setHighContrast] = useState(false);
ursor/automate-test-fix-improve-and-merge-code-48f3}, [])    // Save settings to localStorage;
    useEffect(() => {const settings = {

import React { useState, useEffect, createContext, useContext } from;
  &apos;react';
import { motion, AnimatePresence } from;
  &apos;framer-motion';
import { Eye, EyeOff, Volume2, VolumeX, Keyboard, Accessibility, X import { Button } from;


  '../ui/button';
const AccessibilityContext = createContext(undefined);
export const useAccessibility = () => {;
    const context = useContext(AccessibilityContext);

    const [highContrast, setHighContrast] = useState(false);

ursor/automate-test-fix-improve-and-merge-code-48f3}, [])    // Save settings to localStorage;

  highContrast, reducedMotion,
            fontSize, colorBlindMode;
ursor/automate-test-fix-improve-and-merge-code-48f3;
    useEffect(() => {}}
        const root = document.documentElement;
        // High contrast mode;

        root.style.fontSize = fontSize ===;
  &apos;small&apos; ?;
  &apos;14px&apos;: fontSize ===;
  &apos;large&apos; ?;
  &apos;18px&apos; :;
  &apos;16px';
        // Color blind mode;
        root.style.filter = colorBlindMode ===;
  &apos;none&apos; ?;
  &apos;none&apos; :;
            colorBlindMode ===;
  &apos;protanopia&apos; ?;
  &apos;url(#protanopia)&apos; :;
                colorBlindMode ===;
  &apos;deuteranopia&apos; ?;
  &apos;url(#deuteranopia)&apos; :;
';url(#tritanopia)}, [highContrast, reducedMotion, fontSize, colorBlindMode]);&apos;&apos;

';url(#tritanopia)}, [highContrast, reducedMotion, fontSize, colorBlindMode]);'

    const toggleHighContrast = () => setHighContrast(!highContrast);const toggleReducedMotion = () => setReducedMotion(!reducedMotion)
    const value = {highContrast, reducedMotion,


        fontSize, colorBlindMode,
        toggleHighContrast, toggleReducedMotion,
        setFontSize, setColorBlindMode}



      {children}
    <;<;</AccessibilityContext.Provider>)}
// Accessibility Panel Component;


ursor/automate-test-fix-improve-and-merge-code-48f3;
                event.preventDefault();
                setIsOpen(!isOpen);

                event.preventDefault();

            <motion.div initial = {;
  { scale: 0.9,;

                <p className="text-xs text-zion-slate-light text-center">;
                  These settings are saved locally and will persist across sessions.;
                </p>;
              </div>;
            </motion.div>;""
          </motion.div>)};";"
      </AnimatePresence>;";"
</>)};"";""
// Skip to Content Link";"";"
export const SkipToContent = () => (<a href="#main-content" className="sr-only focus: not-sr-only focus:absolute focus:top-4 focus:left-4 bg-zion-cyan text-zion-blue-dark px-4 py-2 rounded-lg font-medium z-50 hover:bg-zion-cyan-light transition-colors duration-300">;
    Skip to main content;

        const focusableElements = 'button, [href], input, select, textarea, [tabindex]: not([tabindex="-1"])';
        const container = document.activeElement?.closest('[data-focus-trap]');
        if (!container);

            if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key ===;""
  'M') {

      <AnimatePresence>'''        {isOpen && (<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className='fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4' onClick={() => setIsOpen(false)}>'

                  Accessibility Settings';'
                </h2>'';''
                <Button variant='ghost' size='sm' onClick={() => setIsOpen(false)} className='text-zion-slate-light hover: text-white>';''

                  <X className='w-4 h-4'/>''

                </Button>''

                  <div>'';''
                    <h3 className='text-white font-medium mb-1'>High Contrast</h3>'';''
                    <p className='text-sm text-zion-slate-light'>Increase contrast for better visibility</p>';'
                  </div>'';''

                  <Button variant={highContrast ? 'default' : 'outline'} size='sm' onClick={toggleHighContrast} className={highContrast ? 'bg-zion-cyan text-white' : 'border-zion-cyan/30 text-zion-cyan'}>'''{highContrast ? <Eye className='w-4 h-4'/> : <EyeOff className='w-4 h-4'/>}'

                  </Button>''

                  <div>'';''
                    <h3 className='text-white font-medium mb-1'>Reduced Motion</h3>'';''
                    <p className='text-sm text-zion-slate-light'>Minimize animations and transitions</p>';'
                  </div>'';''

                  <Button variant={reducedMotion ? 'default' : 'outline'} size='sm' onClick={toggleReducedMotion} className={reducedMotion ? 'bg-zion-cyan text-white' : 'border-zion-cyan/30 text-zion-cyan'}>'''{reducedMotion ? <VolumeX className='w-4 h-4'/> : <Volume2 className='w-4 h-4'/>}'

                  </Button>''

  'small', 'medium',
  'large'].map((size) => (<Button key={size} variant={fontSize === size ? 'default' : 'outline'} size='sm' onClick={() => setFontSize(size)} className={fontSize === size ? 'bg-zion-cyan text-white' : 'border-zion-cyan/30 text-zion-cyan'}>{size.charAt(0).toUpperCase() + size.slice(1)}

                      </Button>))}''
                  </div>''

  'none', 'protanopia',
  'deuteranopia', 'tritanopia'].map((mode) => (<Button key={mode} variant={colorBlindMode === mode ? 'default' : 'outline'} size='sm' onClick={() => setColorBlindMode(mode)} className={colorBlindMode === mode ? 'bg-zion-cyan text-white' : 'border-zion-cyan/30 text-zion-cyan'}>{mode.charAt(0).toUpperCase() + mode.slice(1)}''

                      </Button>))}''
                  </div>''


                    Keyboard Shortcuts';'
                  </h3>'';''
                  <div className='space-y-2 text-sm text-zion-slate-light>';''
                    <div className='flex justify-between>;'
                      <span>Open Panel: </span>'';''
                      <kbd className='px-2 py-1 bg-zion-blue-light/20 rounded text-xs'>Ctrl/Cmd + Shift + A</kbd>';'
                    </div>'';''
                    <div className='flex justify-between>;'
                      <span>High Contras,
    t: </span>'';''
                      <kbd className='px-2 py-1 bg-zion-blue-light/20 rounded text-xs'>Ctrl/Cmd + Shift + H</kbd>';'
                    </div>'';''

                      <kbd className='px-2 py-1 bg-zion-blue-light/20 rounded text-xs'>Ctrl/Cmd + Shift + M</kbd>

                    </div>''
                  </div>''
                </div>''
              </div>';'{/* Footer */}''''
              <div className='mt-6 pt-4 border-t border-zion-cyan/20'>'''                <p className='text-xs text-zion-slate-light text-center'>'
                  These settings are saved locally and will persist across sessions.

              </div>''

            </motion.div>';

          </motion.div>)};
      </AnimatePresence>';

</>)};;;
// Skip to Content Link'';''
export const SkipToContent = () => (<a href='#main-content' className='sr-only focus: not-sr-only focus:absolute focus:top-4 focu,
    s:left-4 bg-zion-cyan text-zion-blue-dark px-4 py-2 rounded-lg font-medium z-50 hove,
    r:bg-zion-cyan-light transition-colors duration-300'>

    Skip to main content



  '[data-focus-trap]')        if (!container);


            return;

        const firstFocusableElement = focusableContent[0];
        const lastFocusableElement = focusableContent[focusableContent.length - 1];
const handleTabKey = (e) => {;
            if (e.key ===
  'Tab) {;'if (e.shiftKey) {;
                    if (document.activeElement === firstFocusableElement) {;
                        e.preventDefault();
;
                        lastFocusableElement.focus();

export const SrOnly = ({ children }) => (<span className='sr-only'>{children}</span>)';'
export default AccessibilityPanel';'}}}}}}}}}}}}}}}''"import React { useState, useEffect, createContext, useContext } from 'react' import { motion, AnimatePresence    } from 'framer-motion'  import { Eye, EyeOff, Volume2, VolumeX, Keyboard, Accessibility, X import { Button } from '../ui/button' const AccessibilityContext = createContext(undefined) export const useAccessibility = () => { const context = useContext(AccessibilityContext) if(!context) { throw new Error('useAccessibility must be used within an AccessibilityProvider')  return context }"

import { Eye, EyeOff, Volume2, VolumeX, Keyboard, Accessibility, X    } from 'lucide-react' import { Button } from '../ui/button' const AccessibilityContext = createContext(null) export const useAccessibility = () => { const context = useContext(AccessibilityContext) if(!context) { throw new Error('useAccessibility must be used within an AccessibilityProvider')} return context}










