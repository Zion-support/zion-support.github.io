interface AccessibilityContextType {}
  highContrast: boolean;
  toggleHighContrast: () => void;
  reducedMotion: boolean;
  toggleReducedMotion: () => void;
  fontSize: number;
  increaseFontSize: () => void;
  decreaseFontSize: () => void;
  resetFontSize: () => void;
  showSkipLinks: boolean;
  setShowSkipLinks: (show: boolean) => void;
  voiceNavigation: boolean;
  toggleVoiceNavigation: () => void}

export;
  if (!context) {}
    throw new Error('useAccessibility must be used within an AccessibilityProvider')}
  return context};

interface AccessibilityProviderProps extends React.PropsWithChildren<{}> {}
  children: ReactNode}

export const AccessibilityProvider: React.FC<AccessibilityProviderProps> = ({ children }) => {}
  const [highContrast, setHighContrast] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [showSkipLinks, setShowSkipLinks] = useState(false);
  const [voiceNavigation, setVoiceNavigation] = useState(false);

  // Load accessibility preferences from localStorage;
  useEffect(() => {}
    setHighContrast(savedHighContrast);
    setReducedMotion(savedReducedMotion);
    setFontSize(savedFontSize ? parseInt(savedFontSize) : 16);
    setVoiceNavigation(savedVoiceNavigation)}, []);

  // Apply accessibility settings to document;
  useEffect(() => {}
    // Apply high contrast;
    if (highContrast) {}
'
      root.classList.add('high-contrast')} else {}
'
      root.classList.remove('high-contrast')}

    // Apply reduced motion;
    if (reducedMotion) {}
'
      root.classList.add('reduce-motion')} else {}
'
      root.classList.remove('reduce-motion')}

    // Apply font size;
    root.style.fontSize = `${fontSize}px`}, [highContrast, reducedMotion, fontSize]);

  // Keyboard navigation support;
  useEffect(() => {}
        setTimeout(() => setShowSkipLinks(false), 5000)}

      // High contrast toggle (Alt + H)'
      if (event.altKey && event.key === 'h') {}
        event.preventDefault();
        toggleHighContrast()}

      // Font size controls (Alt + Plus/Minus)'
      if (event.altKey && event.key === '+') {}
        event.preventDefault();
        increaseFontSize()}'
      if (event.altKey && event.key === '-') {}
        event.preventDefault();
        decreaseFontSize()}
    };
'
    document.addEventListener('keydown', handleKeyDown);'
    return () => document.removeEventListener('keydown', handleKeyDown)}, []);

    setHighContrast(newValue);'
    localStorage.setItem('zion-high-contrast', newValue.toString())};

    setReducedMotion(newValue);'
    localStorage.setItem('zion-reduced-motion', newValue.toString())};

    setFontSize(newSize);'
    localStorage.setItem('zion-font-size', newSize.toString())};

    setFontSize(newSize);'
    localStorage.setItem('zion-font-size', newSize.toString())};

  '
    localStorage.setItem('zion-font-size', '16')};

    setVoiceNavigation(newValue);'
    localStorage.setItem('zion-voice-navigation', newValue.toString())};

  const contextValue: AccessibilityContextType = {}
    highContrast,
    toggleHighContrast,
    reducedMotion,
    toggleReducedMotion,
    fontSize,
    increaseFontSize,
    decreaseFontSize,
    resetFontSize,
    showSkipLinks,
    setShowSkipLinks,
    voiceNavigation,
    toggleVoiceNavigation};

  return()
    <AccessibilityContext.Provider value={contextValue}>
      {children}

      {/* Skip Links */}
      <AnimatePresence>
        {showSkipLinks && (
          <motion.div;
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-0 left-0 right-0 z-50 bg-blue-600 text-white p-2 text-center""
          >""
            <div className="flex justify-center space-x-4">""
              <a href="#main-content" className="hover:underline focus:outline-none focus:ring-2 focus:ring-white rounded px-2 py-1">
                Skip to main content;
              </a>""
              <a href="#navigation" className="hover:underline focus:outline-none focus:ring-2 focus:ring-white rounded px-2 py-1">
                Skip to navigation;
              </a>""
              <a href="#footer" className="hover:underline focus:outline-none focus:ring-2 focus:ring-white rounded px-2 py-1">
                Skip to footer;
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Accessibility Controls */}""
      <div className="fixed bottom-4 right-4 z-50 flex flex-col space-y-2">
        <motion.button;
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleHighContrast}`
          className={`p-3 rounded-full shadow-lg transition-colors ${}
'
            highContrast ? 'bg-yellow-500 text-black' : 'bg-gray-700 text-white'`
          }`}""
          title="Toggle high contrast""
        >""
          <Sun className="w-5 h-5"  />
        </motion.button>

        <motion.button;
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleReducedMotion}`
          className={`p-3 rounded-full shadow-lg transition-colors ${}
'
            reducedMotion ? 'bg-green-500 text-white' : 'bg-gray-700 text-white'`
          }`}""
          title="Toggle reduced motion""
        >""
          <Braille className="w-5 h-5"  />
        </motion.button>

        <motion.button;
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleVoiceNavigation}`
          className={`p-3 rounded-full shadow-lg transition-colors ${}
'
            voiceNavigation ? 'bg-blue-500 text-white' : 'bg-gray-700 text-white'`
          }`}""
          title="Toggle voice navigation""
        >""
          {voiceNavigation ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5"  />}
        </motion.button>
""
        <div className="bg-white rounded-lg shadow-lg p-2">""
          <div className="flex items-center space-x-2">
            <button;
              onClick={decreaseFontSize}""
              className="p-1 rounded hover:bg-gray-100"""
              title="Decrease font size""
            >""
              <span className="text-sm font-bold">A-</span>
            </button>""
            <span className="text-xs text-gray-600 min-w-[2rem] text-center">{fontSize}px</span>
            <button;
              onClick={increaseFontSize}""
              className="p-1 rounded hover:bg-gray-100"""
              title="Increase font size""
            >""
              <span className="text-sm font-bold">A+</span>
            </button>
          </div>
          <button;
            onClick={resetFontSize}""
            className="w-full mt-1 text-xs text-gray-500 hover:text-gray-700"""
            title="Reset font size""
          >
            Reset;
          </button>
        </div>
      </div>
    </AccessibilityContext.Provider>
  )};'"`
