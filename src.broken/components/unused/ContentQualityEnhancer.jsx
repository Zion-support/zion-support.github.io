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
}} className="fixed bottom-20 right-4 z-40 w-96 bg-white dark:bg-gray-900 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700">
            {/* Header */}"
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">"
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                Content Quality
              </h2>"
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">"
                <XMarkIcon className="w-5 h-5"/>
              </button>
            </div>

            {/* Tabs */}"
            <div className="flex border-b border-gray-200 dark:border-gray-700">'`
              {['overview',issues',suggestions',actions'].map((tab) => (<button key={tab} onClick={() => setActiveTab(tab)} className={`flex-1 px-4 py-2 text-sm font-medium transition-colors ${activeTab === tab'
                    ? 'text-purple-600 border-b-2 border-purple-600''`
                    : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'}`}>
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>))}
            </div>

            {/* Content */}"
            <div className="p-4 max-h-96 overflow-y-auto">
              {/* Overview Tab */}'"
              {activeTab === 'overview' && (<div className="space-y-4">"
                  {!analysis ? (<div className="text-center text-gray-500 dark:text-gray-400">"
                      <DocumentTextIcon className="w-12 h-12 mx-auto mb-3 text-purple-500"/>"
                      <p>Click "Analyze Content" to get started</p>
                    </div>) : (<>
                      {/* Overall Score */}`
                      <div className={`p-4 rounded-lg ${getScoreBgColor(analysis.overallScore)}`}>"
                        <div className="text-center">`
                          <div className={`text-3xl font-bold ${getScoreColor(analysis.overallScore)}`}>
                            {analysis.overallScore}/100
                          </div>"
                          <div className="text-sm text-gray-600 dark:text-gray-400">
                            Overall Content Quality Score
                          </div>
                        </div>
                      </div>

                      {/* Word Count */}"
                      <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">"
                        <div className="text-center">"
                          <div className="text-2xl font-bold text-gray-900 dark:text-white">
                            {analysis.wordCount.toLocaleString()}
                          </div>"
                          <div className="text-sm text-gray-600 dark:text-gray-400">
                            Total Words
                          </div>
                        </div>
                      </div>

                      {/* Individual Scores */}"
                      <div className="grid grid-cols-3 gap-3">`
                        <div className={`p-3 rounded-lg ${getScoreBgColor(analysis.readabilityScore)}`}>"
                          <div className="text-center">`
                            <div className={`text-lg font-bold ${getScoreColor(analysis.readabilityScore)}`}>
                              {analysis.readabilityScore}
                            </div>"
                            <div className="text-xs text-gray-600 dark:text-gray-400">
                              Readability
                            </div>
                          </div>
                        </div>
`
                        <div className={`p-3 rounded-lg ${getScoreBgColor(analysis.seoScore)}`}>"
                          <div className="text-center">`
                            <div className={`text-lg font-bold ${getScoreColor(analysis.seoScore)}`}>
                              {analysis.seoScore}
                            </div>"
                            <div className="text-xs text-gray-600 dark:text-gray-400">
                              SEO
                            </div>
                          </div>
                        </div>
`
                        <div className={`p-3 rounded-lg ${getScoreBgColor(analysis.engagementScore)}`}>"
                          <div className="text-center">`
                            <div className={`text-lg font-bold ${getScoreColor(analysis.engagementScore)}`}>
                              {analysis.engagementScore}
                            </div>"
                            <div className="text-xs text-gray-600 dark:text-gray-400">
                              Engagement
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Summary */}"
                      <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">"
                        <div className="text-sm text-blue-800 dark:text-blue-200">"
                          <div className="font-medium mb-1">Summary:</div>
                          <div>{analysis.issues.length} issues found</div>
                          <div>{analysis.suggestions.length} suggestions available</div>
                        </div>
                      </div>
                    </>)}

                  {/* Analyze Button */}"
                  <button onClick={analyzeContent} disabled={isAnalyzing} className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-gray-400 text-white px-4 py-2 rounded-lg transition-colors">
                    {isAnalyzing ? 'Analyzing...' : 'Analyze Content'}
                  </button>
                </div>)}

              {/* Issues Tab */}'"
              {activeTab === 'issues' && (<div className="space-y-4">"
                  {!analysis ? (<div className="text-center text-gray-500 dark:text-gray-400">"
                      <ExclamationTriangleIcon className="w-12 h-12 mx-auto mb-3 text-yellow-500"/>
                      <p>No analysis available</p>"
                    </div>) : analysis.issues.length === 0 ? (<div className="text-center text-gray-500 dark:text-gray-400">"
                      <CheckCircleIcon className="w-12 h-12 mx-auto mb-3 text-green-500"/>
                      <p>No issues found! Great job!</p>"
                    </div>) : (<div className="space-y-3">"
                      {analysis.issues.map((issue) => (<div key={issue.id} className="p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600 transition-colors cursor-pointer" onClick={() => issue.element && highlightElement(issue.element)}>"
                          <div className="flex items-start gap-2">'"
                            {issue.type === 'error' && (<ExclamationTriangleIcon className="w-4 h-4 text-red-600 mt-0.5"/>)}'"
                            {issue.type === 'warning' && (<ExclamationTriangleIcon className="w-4 h-4 text-yellow-600 mt-0.5"/>)}'"
                            {issue.type === 'info' && (<InformationCircleIcon className="w-4 h-4 text-blue-600 mt-0.5"/>)}
"
                            <div className="flex-1">"
                              <h4 className="font-medium text-gray-900 dark:text-white text-sm">
                                {issue.title}
                              </h4>"
                              <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                                {issue.description}
                              </p>"
                              <div className="flex items-center gap-2 mt-2">`
                                <span className={`text-xs px-2 py-1 rounded ${getSeverityColor(issue.severity)}`}>
                                  {issue.severity.charAt(0).toUpperCase() + issue.severity.slice(1)}
                                </span>"
                                <span className="text-xs px-2 py-1 rounded bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">
                                  {issue.impact.charAt(0).toUpperCase() + issue.impact.slice(1)}
                                </span>"
                                {issue.fixable && (<span className="text-xs bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300 px-2 py-1 rounded">
                                    Auto-fixable
                                  </span>)}
                              </div>"
                              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                                <strong>Suggestion:</strong> {issue.suggestion}
                              </p>
                            </div>
                          </div>
                        </div>))}
                    </div>)}
                </div>)}

              {/* Suggestions Tab */}'"
              {activeTab === 'suggestions' && (<div className="space-y-4">"
                  {!analysis ? (<div className="text-center text-gray-500 dark:text-gray-400">"
                      <InformationCircleIcon className="w-12 h-12 mx-auto mb-3 text-blue-500"/>
                      <p>No analysis available</p>"
                    </div>) : analysis.suggestions.length === 0 ? (<div className="text-center text-gray-500 dark:text-gray-400">"
                      <CheckCircleIcon className="w-12 h-12 mx-auto mb-3 text-green-500"/>
                      <p>No suggestions available</p>"
                    </div>) : (<div className="space-y-3">"
                      {analysis.suggestions.map((suggestion) => (<div key={suggestion.id} className="p-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-blue-50 dark:bg-blue-900/20">"
                          <div className="flex items-start gap-2">"
                            <InformationCircleIcon className="w-4 h-4 text-blue-600 mt-0.5"/>
"
                            <div className="flex-1">"
                              <h4 className="font-medium text-gray-900 dark:text-white text-sm">
                                {suggestion.title}
                              </h4>"
                              <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                                {suggestion.description}
                              </p>"
                              <div className="flex items-center gap-2 mt-2">`
                                <span className={`text-xs px-2 py-1 rounded ${getPriorityColor(suggestion.priority)}`}>
                                  {suggestion.priority.charAt(0).toUpperCase() + suggestion.priority.slice(1)} Priority
                                </span>"
                                <span className="text-xs px-2 py-1 rounded bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
                                  +{suggestion.expectedImpact} Impact
                                </span>
                              </div>"
                              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                                <strong>Implementation:</strong> {suggestion.implementation}
                              </p>
                            </div>
                          </div>
                        </div>))}
                    </div>)}
                </div>)}

              {/* Actions Tab */}'"
              {activeTab === 'actions' && (<div className="space-y-4">"
                  <div className="text-center text-gray-500 dark:text-gray-400">"
                    <WrenchScrewdriverIcon className="w-12 h-12 mx-auto mb-3 text-purple-500"/>
                    <p>Take action to improve content quality</p>
                  </div>

                  {/* Auto-fix Button */}"
                  {analysis && analysis.issues.filter(i => i.fixable).length > 0 && (<button onClick={autoFixIssues} className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors">
                      Auto-fix Issues
                    </button>)}

                  {/* Re-analyze Button */}"
                  <button onClick={analyzeContent} disabled={isAnalyzing} className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-4 py-2 rounded-lg transition-colors">"
                    <ArrowPathIcon className="w-4 h-4 inline mr-2"/>
                    {isAnalyzing ? 'Analyzing...' : 'Re-analyze Content'}
                  </button>

                  {/* Export Report */}
                  {analysis && (<button onClick = {

  () => {
                        const report = JSON.stringify(analysis, null, 2);
                        const blob = new Blob([report],
  { type: 'application/json'

});
                        const url = URL.createObjectURL(blob);
                        const a = document.createElement('a');
                        a.href = url;
                        a.download = 'content-quality-report.json';
                        a.click();"
                        URL.revokeObjectURL(url)}} className="w-full bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors">
                      Export Report
                    </button>)}
                </div>)}
            </div>
          </motion.div>)}
      </AnimatePresence>

      {/* CSS for highlighting */}`
      <style>{`
        .content-highlight {

          outline: 3px solid #8b5cf6 !important;
          outline-offset: 2px !important;
          background-color: rgba(139, 92, 246, 0.1) !important;
          transition: all 0.3s ease !important}`
      `}</style>
    </>)};
export { ContentQualityEnhancer };
export default ContentQualityEnhancer;
}}}}}}}}}'"`
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-0cd1
