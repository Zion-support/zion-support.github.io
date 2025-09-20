        {showSkipLinks && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-0 left-0 right-0 z-50 bg-blue-600 text-white p-2 text-center"
          >
            <div className="flex justify-center space-x-4">
              <a href="#main-content" className="hover:underline focus:outline-none focus:ring-2 focus:ring-white rounded px-2 py-1">
                Skip to main content
              </a>
              <a href="#navigation" className="hover:underline focus:outline-none focus:ring-2 focus:ring-white rounded px-2 py-1">
                Skip to navigation
              </a>
              <a href="#footer" className="hover:underline focus:outline-none focus:ring-2 focus:ring-white rounded px-2 py-1">
                Skip to footer
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Accessibility Controls */}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col space-y-2">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleHighContrast}
          className={`p-3 rounded-full shadow-lg transition-colors ${highContrast ? 'bg-yellow-500 text-black' : 'bg-gray-700 text-white'
          }`}
          title="Toggle high contrast"
        >
          <Sun className="w-5 h-5"  />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleReducedMotion}
          className={`p-3 rounded-full shadow-lg transition-colors ${reducedMotion ? 'bg-green-500 text-white' : 'bg-gray-700 text-white'
          }`}
          title="Toggle reduced motion"
        >
          <Braille className="w-5 h-5"  />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleVoiceNavigation}
          className={`p-3 rounded-full shadow-lg transition-colors ${voiceNavigation ? 'bg-blue-500 text-white' : 'bg-gray-700 text-white'
          }`}
          title="Toggle voice navigation"
        >
          {voiceNavigation ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5"  />}
        </motion.button>

        <div className="bg-white rounded-lg shadow-lg p-2">
          <div className="flex items-center space-x-2">
            <button
              onClick={decreaseFontSize}
              className="p-1 rounded hover:bg-gray-100"
              title="Decrease font size"
            >
              <span className="text-sm font-bold">A-</span>
            </button>
            <span className="text-xs text-gray-600 min-w-[2rem] text-center">{fontSize}px</span>
            <button
              onClick={increaseFontSize}
              className="p-1 rounded hover:bg-gray-100"
              title="Increase font size"
            >
              <span className="text-sm font-bold">A+</span>
            </button>
          </div>
          <button
            onClick={resetFontSize}
            className="w-full mt-1 text-xs text-gray-500 hover:text-gray-700"
            title="Reset font size"
          >
            Reset
          </button>
        </div>
      </div>
    </AccessibilityContext.Provider>
  )};