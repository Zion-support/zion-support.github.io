  x: -20

}} transition={{ duration: 0.3 }} id="accessibility-panel" className="fixed bottom-24 left-6 z-50 w-80 bg-white dark:bg-slate-800 rounded-lg shadow-2xl border border-gray-200 dark:border-slate-700 max-h-96 overflow-y-auto" role="dialog" aria-labelledby="accessibility-title">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
} className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 ${settings.reducedMotion ? 'bg-purple-600' : 'bg-gray-200'}`} role="switch" aria-checked={settings.reducedMotion}>
} className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 ${settings.focusIndicator ? 'bg-purple-600' : 'bg-gray-200'}`} role="switch" aria-checked={settings.focusIndicator}>
} className="w-full p-2 border border-gray-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-700 text-gray-900 dark:text-white text-sm">
                  <option value="none">None</option>
                  <option value="protanopia">Protanopia(Red-Blind)</option>
                  <option value="deuteranopia">Deuteranopia(Green-Blind)</option>
} className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 ${settings.screenReader ? 'bg-purple-600' : 'bg-gray-200'}`} role="switch" aria-checked={settings.screenReader}>
} className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 ${settings.keyboardNavigation ? 'bg-purple-600' : 'bg-gray-200'}`} role="switch" aria-checked={settings.keyboardNavigation}>
