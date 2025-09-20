  y: 20

<<<<<<< HEAD
=======
}} animate = {

  { opacity: 1, scale: 1,
  y: 0

}} exit = {

  { opacity: 0, scale: 0.8,
  y: 20 

"
}} className="fixed bottom-32 right-4 z-40 w-96 bg-white dark:bg-gray-900 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700">
            {/* Header */}"
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">"
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                Link Health Checker
              </h2>"
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">"
                <XMarkIcon className="w-5 h-5"/>
              </button>
            </div>

            {/* Tabs */}"
            <div className="flex border-b border-gray-200 dark:border-gray-700">'`
              {['overview',broken',healthy',actions'].map((tab) => (<button key={tab} onClick={() => setActiveTab(tab)} className={`flex-1 px-4 py-2 text-sm font-medium transition-colors ${activeTab === tab'
                    ? 'text-orange-600 border-b-2 border-orange-600''`
                    : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'}`}>
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>))}
            </div>

            {/* Content */}"
            <div className="p-4 max-h-96 overflow-y-auto">
              {/* Overview Tab */}'"
              {activeTab === 'overview' && (<div className="space-y-4">
                  {/* Stats */}"
                  <div className="grid grid-cols-2 gap-3">"
                    <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg text-center">"
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">
                        {stats.total}
                      </div>"
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Total Links
                      </div>
                    </div>
"
                    <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg text-center">"
                      <div className="text-2xl font-bold text-green-600">
                        {stats.healthy}
                      </div>"
                      <div className="text-sm text-green-600 dark:text-green-400">
                        Healthy
                      </div>
                    </div>
"
                    <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-lg text-center">"
                      <div className="text-2xl font-bold text-red-600">
                        {stats.broken}
                      </div>"
                      <div className="text-sm text-red-600 dark:text-red-400">
                        Broken
                      </div>
                    </div>
"
                    <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg text-center">"
                      <div className="text-2xl font-bold text-yellow-600">
                        {stats.checking + stats.unknown}
                      </div>"
                      <div className="text-sm text-yellow-600 dark:text-yellow-400">
                        Pending
                      </div>
                    </div>
                  </div>

                  {/* Health Score */}"
                  {stats.total > 0 && (<div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">"
                      <div className="text-center">"
                        <div className="text-3xl font-bold text-blue-600">
                          {Math.round((stats.healthy / stats.total) * 100)}%
                        </div>"
                        <div className="text-sm text-blue-600 dark:text-blue-400">
                          Link Health Score
                        </div>
                      </div>
                    </div>)}

                  {/* Check Button */}"
                  <button onClick={checkAllLinks} disabled={isChecking} className="w-full bg-orange-600 hover:bg-orange-700 disabled:bg-gray-400 text-white px-4 py-2 rounded-lg transition-colors">
                    {isChecking ? 'Checking...' : 'Check All Links'}
                  </button>
                </div>)}

              {/* Broken Links Tab */}'"
              {activeTab === 'broken' && (<div className="space-y-4">'"
                  {links.filter(link => link.status === 'broken').length === 0 ? (<div className="text-center text-gray-500 dark:text-gray-400">"
                      <CheckCircleIcon className="w-12 h-12 mx-auto mb-3 text-green-500"/>
                      <p>No broken links found!</p>"
                    </div>) : (<div className="space-y-3">
                      {links'
                        .filter(link => link.status === 'broken')"`
                        .map((link, index) => (<div key={`${link.url}-${index}`} className="p-3 rounded-lg border border-red-200 dark:border-red-700 bg-red-50 dark:bg-red-900/20 hover:border-red-300 dark:hover:border-red-600 transition-colors cursor-pointer" onClick={() => highlightBrokenLink(link)}>"
                            <div className="flex items-start gap-2">"
                              <ExclamationTriangleIcon className="w-4 h-4 text-red-600 mt-0.5"/>
"
                              <div className="flex-1">"
                                <h4 className="font-medium text-gray-900 dark:text-white text-sm break-all">
                                  {link.url}
                                </h4>"
                                {link.error && (<p className="text-xs text-red-600 dark:text-red-400 mt-1">
                                    Error: {link.error}
                                  </p>)}"
                                {link.suggestedFix && (<p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                                    <strong>Fix:</strong> {link.suggestedFix}
                                  </p>)}"
                                <div className="flex items-center gap-2 mt-2">"
                                  <span className="text-xs px-2 py-1 rounded bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300">
                                    Broken
                                  </span>"
                                  {link.fixable && (<span className="text-xs bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300 px-2 py-1 rounded">
                                      Auto-fixable
                                    </span>)}
                                </div>
                              </div>
                            </div>
                          </div>))}
                    </div>)}
                </div>)}

              {/* Healthy Links Tab */}'"
              {activeTab === 'healthy' && (<div className="space-y-4">'"
                  {links.filter(link => link.status === 'healthy').length === 0 ? (<div className="text-center text-gray-500 dark:text-gray-400">"
                      <InformationCircleIcon className="w-12 h-12 mx-auto mb-3 text-blue-500"/>
                      <p>No healthy links found</p>"
                    </div>) : (<div className="space-y-3">
                      {links'
                        .filter(link => link.status === 'healthy')"`
                        .map((link, index) => (<div key={`${link.url}-${index}`} className="p-3 rounded-lg border border-green-200 dark:border-green-700 bg-green-50 dark:bg-green-900/20">"
                            <div className="flex items-start gap-2">"
                              <CheckCircleIcon className="w-4 h-4 text-green-600 mt-0.5"/>
"
                              <div className="flex-1">"
                                <h4 className="font-medium text-gray-900 dark:text-white text-sm break-all">
                                  {link.url}
                                </h4>"
                                <div className="flex items-center gap-2 mt-2">"
                                  <span className="text-xs px-2 py-1 rounded bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
                                    Healthy
                                  </span>"
                                  <span className="text-xs text-gray-500 dark:text-gray-400">
                                    Last checked: {link.lastChecked.toLocaleTimeString()}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>))}
                    </div>)}
                </div>)}

              {/* Actions Tab */}'"
              {activeTab === 'actions' && (<div className="space-y-4">"
                  <div className="text-center text-gray-500 dark:text-gray-400">"
                    <WrenchScrewdriverIcon className="w-12 h-12 mx-auto mb-3 text-orange-500"/>
                    <p>Take action to fix broken links</p>
                  </div>

                  {/* Auto-fix Button */}'"
                  {links.filter(link => link.status === 'broken' && link.fixable).length > 0 && (<button onClick={autoFixBrokenLinks} className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors">
                      Auto-fix Broken Links
                    </button>)}

                  {/* Re-check Button */}"
                  <button onClick={checkAllLinks} disabled={isChecking} className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-4 py-2 rounded-lg transition-colors">"
                    <ArrowPathIcon className="w-4 h-4 inline mr-2"/>
                    {isChecking ? 'Checking...' : 'Re-check Links'}
                  </button>

                  {/* Export Report */}
                  {links.length > 0 && (<button onClick = {

  () => {
                        const report = {

                            timestamp: new Date().toISOString(),
                            stats,
                            links: links.map(link => ({

                                url: link.url,
                                status: link.status,
                                error: link.error,
                                lastChecked: link.lastChecked.toISOString(),
  fixable: link.fixable

}))
                        };
                        const blob = new Blob([JSON.stringify(report, null, 2)], { type: 'application/json' });
                        const url = URL.createObjectURL(blob);
                        const a = document.createElement('a');
                        a.href = url;
                        a.download = 'link-health-report.json';
                        a.click();"
                        URL.revokeObjectURL(url)}} className="w-full bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg transition-colors">
                      Export Report
                    </button>)}
                </div>)}
            </div>
          </motion.div>)}
      </AnimatePresence>

      {/* CSS for highlighting */}`
      <style>{`
        .broken-link-highlight {

          outline: 3px solid #f97316 !important;
          outline-offset: 2px !important;
          background-color: rgba(249, 115, 22, 0.1) !important;
          transition: all 0.3s ease !important}

        .link-target-placeholder {

          animation: pulse 2s infinite}

        @keyframes pulse {

          0%, 100% { opacity: 1}
          50% { opacity: 0.7}
        }`
      `}</style>
    </>)};
export { BrokenLinkFixer };
export default BrokenLinkFixer;
}}}}}}}}}}}}'"`
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-0cd1
