ursor/automate-test-fix-improve-and-merge-code-48f3
;    return context;
};// Accessibility Provider Component;
export const AccessibilityProvider = ({ children }) => {;
    const [highContrast, setHighContrast] = useState(false);
ursor/automate-test-fix-improve-and-merge-code-48f3
;}, []);    // Save settings to localStorage;
    useEffect(() => {;
        const settings = {;
  highContrast,;
            reducedMotion,;
            fontSize,;
  ;
            colorBlindMode;
ursor/automate-test-fix-improve-and-merge-code-48f3
    useEffect(() => {;
        const root = document.documentElement;
        // High contrast mode;
        if (highContrast) {;
ursor/automate-test-fix-improve-and-merge-code-48f3
    const toggleHighContrast = () => setHighContrast(!highContrast);const toggleReducedMotion = () => setReducedMotion(!reducedMotion);    const value = {;
  highContrast,;
        reducedMotion,;
        fontSize,;
        colorBlindMode,;
        toggleHighContrast,;
        toggleReducedMotion,;
        setFontSize,;
  setColorBlindMode;
};
    return (<AccessibilityContext.Provider value={value}>;
      {children};
    </AccessibilityContext.Provider>)};
// Accessibility Panel Component;
export const AccessibilityPanel = () => {;
    const [isOpen, setIsOpen] = useState(false);
    const { highContrast, reducedMotion, fontSize, colorBlindMode, toggleHighContrast, toggleReducedMotion, setFontSize, setColorBlindMode } = useAccessibility();
    // Keyboard shortcuts;
    useEffect(() => {;
        const handleKeyDown = (event) => {;
ursor/automate-test-fix-improve-and-merge-code-48f3
                event.preventDefault();
;
                setIsOpen(!isOpen);
;
ursor/automate-test-fix-improve-and-merge-code-48f3
      {/* Floating Accessibility Button */}";"";"      <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => setIsOpen(true)} className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-br from-zion-cyan to-zion-purple text-white rounded-full shadow-2xl shadow-zion-cyan/25 z-50 flex items-center justify-center hover: shadow-2xl hover:shadow-zion-cyan/40 transition-all duration-300" aria-label="Open Accessibility Settings">";"";"
        <Accessibility className="w-6 h-6"/>;";"
      </motion.button>;";"
      {/* Accessibility Panel */};"";""
      <AnimatePresence>";"";"
        {isOpen && (<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setIsOpen(false)}>;
            <motion.div initial = {;
  { scale: 0.9,;
  opacity: 0;
}} animate = {;
  { scale: 1,;
  opacity: 1;""
}} exit = {;";"
  { scale: 0.9,;";"
  opacity: 0;";"";"
}} className="bg-zion-blue-dark border border-zion-cyan/20 rounded-2xl p-6 max-w-md w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>;"";""
              {/* Header */}";"";"
              <div className="flex items-center justify-between mb-6">";"";"
                <h2 className="text-xl font-bold text-white flex items-center gap-2">";"";"
                  <Accessibility className="w-5 h-5 text-zion-cyan"/>;";"
                  Accessibility Settings;"";""
                </h2>";"";"
                <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)} className="text-zion-slate-light hover: text-white">";"";"
                  <X className="w-4 h-4"/>;";"
                </Button>;";"
              </div>;"";""
              {/* Settings */}";"";"
              <div className="space-y-6">;"";""
                {/* High Contrast */}";"";"
                <div className="flex items-center justify-between">;"";""
                  <div>";"";"
                    <h3 className="text-white font-medium mb-1">High Contrast</h3>";"";"
                    <p className="text-sm text-zion-slate-light">Increase contrast for better visibility</p>;"";""
                  </div>";"";"
                  <Button variant={highContrast ? "default" : "outline"} size="sm" onClick={toggleHighContrast} className={highContrast ? "bg-zion-cyan text-white" : "border-zion-cyan/30 text-zion-cyan"}>";"";"
                    {highContrast ? <Eye className="w-4 h-4"/> : <EyeOff className="w-4 h-4"/>};";"
                  </Button>;";"
                </div>;"";""
                {/* Reduced Motion */}";"";"
                <div className="flex items-center justify-between">;"";""
                  <div>";"";"
                    <h3 className="text-white font-medium mb-1">Reduced Motion</h3>";"";"
                    <p className="text-sm text-zion-slate-light">Minimize animations and transitions</p>;"";""
                  </div>";"";"
                  <Button variant={reducedMotion ? "default" : "outline"} size="sm" onClick={toggleReducedMotion} className={reducedMotion ? "bg-zion-cyan text-white" : "border-zion-cyan/30 text-zion-cyan"}>";"";"
                    {reducedMotion ? <VolumeX className="w-4 h-4"/> : <Volume2 className="w-4 h-4"/>};""
                  </Button>;";"
                </div>;";"
                {/* Font Size */};"";""
                <div>";"";"
                  <h3 className="text-white font-medium mb-3">Font Size</h3>";"";"
ursor/automate-test-fix-improve-and-merge-code-48f3
                        {size.charAt(0).toUpperCase() + size.slice(1)};                      </Button>))};""
                  </div>;";"
                </div>;";"
                {/* Color Blind Mode */};"";""
                <div>";"";"
                  <h3 className="text-white font-medium mb-3">Color Blind Support</h3>";"";"
ursor/automate-test-fix-improve-and-merge-code-48f3
                      </Button>))};";"                  </div>;";"
                </div>;"";""
                {/* Keyboard Shortcuts */}";"";"
                <div className="bg-zion-blue-dark/50 rounded-lg p-4">";"";"
                  <h3 className="text-white font-medium mb-3 flex items-center gap-2">";"";"
                    <Keyboard className="w-4 h-4 text-zion-cyan"/>;";"
                    Keyboard Shortcuts;"";""
                  </h3>";"";"
                  <div className="space-y-2 text-sm text-zion-slate-light">";"";"
                    <div className="flex justify-between">;"";""
                      <span>Open Panel: </span>";"";"
                      <kbd className="px-2 py-1 bg-zion-blue-light/20 rounded text-xs">Ctrl/Cmd + Shift + A</kbd>;"";""
                    </div>";"";"
                    <div className="flex justify-between">;"";""
                      <span>High Contrast: </span>";"";"
                      <kbd className="px-2 py-1 bg-zion-blue-light/20 rounded text-xs">Ctrl/Cmd + Shift + H</kbd>;"";""
                    </div>";"";"
                    <div className="flex justify-between">;"";""
                      <span>Reduced Motion: </span>";"";"
                      <kbd className="px-2 py-1 bg-zion-blue-light/20 rounded text-xs">Ctrl/Cmd + Shift + M</kbd>;
                    </div>;""
                  </div>;";"
                </div>;";"
              </div>;"";""
              {/* Footer */}";"";"
              <div className="mt-6 pt-4 border-t border-zion-cyan/20">";"";"
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
  </a>);
// Focus Trap Hook;""
export const useFocusTrap = (isActive) => {;";"
    useEffect(() => {;";"
ursor/automate-test-fix-improve-and-merge-code-48f3
        if (!container);
            return;
        const firstFocusableElement = focusableContent[0];
        const lastFocusableElement = focusableContent[focusableContent.length - 1];
ursor/automate-test-fix-improve-and-merge-code-48f3
                if (e.shiftKey) {;                    if (document.activeElement === firstFocusableElement) {;
                        e.preventDefault();
;
                        lastFocusableElement.focus();
;
                else {;
                    if (document.activeElement === lastFocusableElement) {;
                        e.preventDefault();
                        firstFocusableElement.focus();
ursor/automate-test-fix-improve-and-merge-code-48f3
// Screen Reader Only Text";"";"export const SrOnly = ({ children }) => (<span className="sr-only">{children}</span>);";"
export default AccessibilityPanel;"";""
}}}}}}}}}}}}}}}";"";"