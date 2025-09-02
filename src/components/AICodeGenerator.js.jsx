import React, { useState, useCallback } from 'react';'
import React from 'react';'
import { motion, AnimatePresence } from 'react';'
import { Code, Sparkles, Download, TestTube, FileText, Settings, Zap, Shield, Gauge, Wrench, Eye, Trash2, Copy, CheckCircle, AlertCircle, Info, Loader2 } from 'lucide-react';"''
import { useAICodeGeneration } from '../hooks/useAICodeGeneration.jsx';"
export const AICodeGenerator = () => {"'"
    const { trackEvent } = useAnalytics({        enableTracking: true, enableUserBehaviorTracking: true",'"
})"'"
    const [activeTab, setActiveTab] = useState('generate')"'
    const [showAdvanced, setShowAdvanced] = useState(false)
    const [customCode, setCustomCode] = useState()
    const [copied, setCopied] = useState(false)"
    const { isGenerating, isAnalyzing, generatedCode, codeAnalysis, suggestions, history, generateCode, analyzeCode, applySuggestion, optimizeCode, generateTests, generateDocs, clearHistory, exportCode } = useAICodeGeneration()"'"
    const [form, setForm] = useState({}"'
'
'

        prompt: ,'
        language: 'typescript','
        framework: 'react','
        style: 'functional','
        target: 'web','
        quality: 'development', includeTests: false, includeDocs: false, includeErrorHandling: false, includeLogging: false, includeMetrics: false,
})
    // Handle form submission
    const handleSubmit = useCallback(async (e) => {}
        e.preventDefault()"
        if(!form.prompt.trim())"'"
            return"'
        await generateCode(form.prompt, form)'
        trackEvent('ai_code_generator',form_submitted', form.language, null, {}
            framework: form.framework, style: form.style, target: form.target, quality: form.quality,
})}, [form, generateCode, trackEvent])
    // Handle custom code analysis
    const handleAnalyzeCustomCode = useCallback(async () => {}"
        if(!customCode.trim())"'"
            return"'
        await analyzeCode(customCode, form.language)'
        trackEvent('ai_code_generator',custom_code_analyzed', form.language, customCode.length)}, [customCode, form.language, analyzeCode, trackEvent])
    // Handle code optimization
    const handleOptimizeCode = useCallback(async (focus) => {}
        if(!generatedCode && !customCode)
            return
        const codeToOptimize = generatedCode || customCode"
        const optimizedCode = await optimizeCode(codeToOptimize, focus)"'"
        if (generatedCode) {}"'
'"
            // Update generated code'"'"
            // Note: In a real implementation, you'd want to update the state properly",'
}'
        trackEvent('ai_code_generator',code_optimized', focus, optimizedCode.length)}, [generatedCode, customCode, optimizeCode, trackEvent])
    // Handle test generation"
    const handleGenerateTests = useCallback(async () => {}"'"
        if(!generatedCode && !customCode)"''"
            return';'"'"
        const codeToTest = generatedCode || customCode';"''
        const testCode = await generateTests(codeToTest, form.language)';'
        // In a real implementation, you'd want to display the test code''
        // console.log('Generated tests:', testCode)';'
        trackEvent('ai_code_generator',tests_generated', form.language, testCode.length)}, [generatedCode, customCode, generateTests, form.language, trackEvent])
    // Handle documentation generation"
    const handleGenerateDocs = useCallback(async () => {}"'"
        if(!generatedCode && !customCode)"'
            return'
        const codeToDoc = generatedCode || customCode';''
        const docs = await generateDocs(codeToDoc, form.language)';'
        // In a real implementation, you'd want to display the documentation''
        // console.log('Generated docs:', docs)';'
        trackEvent('ai_code_generator',docs_generated', form.language, docs.length)}, [generatedCode, customCode, generateDocs, form.language, trackEvent])
    // Copy code to clipboard
    const copyToClipboard = useCallback(async (code) => {}
        try {}"
            await navigator.clipboard.writeText(code)"'"
            setCopied(true)"'
            setTimeout(() => setCopied(false), 2000)'"
            trackEvent('ai_code_generator',code_copied',clipboard', code.length)}"'"
        catch (error) {}"'
'
'
'
            // console.error('Failed to copy code:', error)}
    }, [trackEvent])"
    // Apply suggestion"'"
    const handleApplySuggestion = useCallback((suggestion) => {}"'
        applySuggestion(suggestion)'
        trackEvent('ai_code_generator',suggestion_applied', suggestion.type, null, {}
            suggestionId: suggestion.id, impact: suggestion.impact,
})}, [applySuggestion, trackEvent])"
    // Clear history"'"
    const handleClearHistory = useCallback(() => {}";'
        clearHistory();'
        trackEvent('ai_code_generator',history_cleared',manual')}, [clearHistory, trackEvent])';''
    return (<div className='bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden'></div>'
      {/* Header */}''
      <div className='bg-gradient-to-r from-purple-500 to-blue-500 p-6 text-white'></div>''
        <div className='flex items-center justify-between'></div>''"
          <h2 className='text-2xl font-bold flex items-center gap-3'></h2>'"'"
            <Code className='w-8 h-8'/" ></Code>'
            AI Code Generator''"
            <div className='flex items-center gap-1 px-3 py-1 bg-white/20 rounded-full text-sm'></div>'"'"
              <Sparkles className='w-4 h-4'/" ></Sparkles>"
              Powered by AI"'"
            </div>"'
          </h2>
          '"
          <div className='flex items-center gap-2'></div>'"'"
            <button onClick={() =" ></button> exportCode('json')} className='px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors flex items-center gap-2'>'"'"
              <Download className='w-4 h-4'/" ></Download>
              Export
            </button>
          </div>"
        </div>"'"
      </div>"'
'
      {/* Navigation Tabs */}''
      <div className='border-b border-gray-200 dark:border-gray-700'></div>''
        <nav className='flex space-x-8 px-6'></nav>'
          {[''
            { id: 'generate', label: 'Generate', icon: Sparkles },'
            { id: 'analyze', label: 'Analyze', icon: Eye },'
            { id: 'optimize', label: 'Optimize', icon: Zap },'
            { id: 'tests', label: 'Tests', icon: TestTube },'"
            { id: 'docs', label: 'Docs', icon: FileText }','"'"
].map(({ id, label, icon: Icon }) => (<button key={id} onClick={() =" ></button> setActiveTab(id)} className={`flex items-center gap-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${activeTab === id`"`'"'"
                ? 'border-purple-500 text-purple-600 dark:text-purple-400``"`''"
                : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'}`}>'"'"
              <Icon className='w-4 h-4'/" ></Icon>
              {label}
            </button>) ) }"
        </nav>"'"
      </div>"'
'
      {/* Main Content */}''
      <div className='p-6'></div>'
        <AnimatePresence mode='wait'></AnimatePresence>''
          {activeTab === 'generate' && (<motion.div key='generate' initial = {}
  { opacity: 0, y: 20,
}} animate = {}"
  { opacity: 1, y: 0,"'"
}} exit = {}"'
  { opacity: 0, y: -20 '
,''
}} className='space-y-6'></motion>'
              {/* Generation Form */}''
              <form onSubmit={handleSubmit} className='space-y-4'></form>'
                <div></div>''
                  <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'></label>
                    Describe what you want to build"
                  </label>"'"
                  <textarea value={form.prompt} onChange = {}"'""
  (e) =" ></textarea> setForm(prev => ({ ...prev, prompt: e.target.value '
,''"
}))} placeholder='e.g., Create a React component for a user profile card with avatar, name, email, and edit button...' className='w-full h-32 p-4 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 resize-none' required/>"'"
                </div>"'
'
                {/* Basic Options */}''
                <div className='grid grid-cols-2 md:grid-cols-4 gap-4'></div>'
                  <div></div>''
                    <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'></label>
                      Language"
                    </label>"'"
                    <select value={form.language} onChange = {}"'""
  (e) =" ></select> setForm(prev => ({ ...prev, language: e.target.value '
,''
}))} className='w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100'>''
                      <option value='typescript'></optio>TypeScript</option>''
                      <option value='javascript'></optio>JavaScript</option>''
                      <option value='python'></optio>Python</option>''
                      <option value='java'></optio>Java</option>''
                      <option value='cpp'></optio>C++</option>''
                      <option value='csharp'></optio>C#</option>''
                      <option value='go'></optio>Go</option>''
                      <option value='rust'></optio>Rust</option>"
                    </select>"'"
                  </div>"'
'
                  <div></div>''"
                    <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'></label>"'"
                      Framework"'"
                    </label>"'"
                    <select value={form.framework || } onChange = {}"'""
  (e) =" ></select> setForm(prev => ({ ...prev, framework: e.target.value || null '
,''
}))} className='w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100'>''
                      <option value=></optio>None</option>''
                      <option value='react'></optio>React</option>''
                      <option value='vue'></optio>Vue</option>''
                      <option value='angular'></optio>Angular</option>''
                      <option value='nextjs'></optio>Next.js</option>''
                      <option value='express'></optio>Express</option>''
                      <option value='fastapi'></optio>FastAPI</option>''
                      <option value='spring'></optio>Spring</option>''
                      <option value='dotnet'></optio>.NET</option>"
                    </select>"'"
                  </div>"'
'
                  <div></div>''
                    <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'></label>
                      Style"
                    </label>"'"
                    <select value={form.style} onChange = {}"'""
  (e) =" ></select> setForm(prev => ({ ...prev, style: e.target.value '
,''
}))} className='w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100'>''
                      <option value='functional'></optio>Functional</option>''
                      <option value='oop'></optio>OOP</option>''
                      <option value='procedural'></optio>Procedural</option>''
                      <option value='declarative'></optio>Declarative</option>"
                    </select>"'"
                  </div>"'
'
                  <div></div>''
                    <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'></label>
                      Quality"
                    </label>"'"
                    <select value={form.quality} onChange = {}"'""
  (e) =" ></select> setForm(prev => ({ ...prev, quality: e.target.value '
,''
}))} className='w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100'>''
                      <option value='prototype'></optio>Prototype</option>''
                      <option value='development'></optio>Development</option>''
                      <option value='production'></optio>Production</option>
                    </select>"
                  </div>"'"
                </div>"'
'"
                {/* Advanced Options Toggle */}'"'"
                <button type='button' onClick={() =" ></button> setShowAdvanced(!showAdvanced)} className='flex items-center gap-2 text-sm text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300'>'"'"
                  <Settings className='w-4 h-4'/" ></Settings>'
                  {showAdvanced ? 'Hide' : 'Show'} Advanced Options
                </button>
                {/* Advanced Options */}
                {showAdvanced && (<motion.div initial = {}"
  { opacity: 0, height: 0,"'"
}} animate = {}"'
  { opacity: 1,'"
  height: 'auto',"'"
}} exit = {}"'
  { opacity: 0, height: 0 '
,''
}} className='grid grid-cols-2 md:grid-cols-5 gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg'></motion>'
                    {[''
                    { key: 'includeTests', label: 'Tests', icon: TestTube },'
                    { key: 'includeDocs', label: 'Docs', icon: FileText },'
                    { key: 'includeErrorHandling', label: 'Error Handling', icon: AlertCircle },'
                    { key: 'includeLogging', label: 'Logging', icon: Info },''
                    { key: 'includeMetrics', label: 'Metrics', icon: Gauge },''"
].map(({ key, label, icon: Icon }) => (<label key={key} className='flex items-center gap-2 cursor-pointer'></label>'"'"
                        <input type='checkbox' checked={form[key]} onChange = {}"'""
  (e) =" ></input> setForm(prev => ({ ...prev, [key]: e.target.checked '
,''"
}))} className='w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'/>'"'"
                        <Icon className='w-4 h-4 text-gray-600 dark:text-gray-400'/" ></Icon>''"
                        <span className='text-sm text-gray-700 dark:text-gray-300'></spa>{label}</span>"'"
                      </label>))}"'
                  </motion.div>)}'
''
                <button type='submit' disabled={isGenerating || !form.prompt.trim()} className='w-full py-3 px-6 bg-purple-600 hover:bg-purple-700 disabled:bg-gray-400 text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2 disabled:cursor-not-allowed'></button>'"
                  {isGenerating ? (<>'"'"
                      <Loader2 className='w-5 h-5 animate-spin'/" ></Loader2>"'
                      Generating Code...'"
                    </>) : (<>'"'"
                      <Sparkles className='w-5 h-5'/" ></Sparkles>
                      Generate Code
                    </>) }
                </button>
              </form>
              {/* Generated Code Display */}
              {generatedCode && (<motion.div initial = {}"
  { opacity: 0, y: 20,"'"
}} animate = {}"'
  { opacity: 1, y: 0 '
,''
}} className='space-y-4'></motion>''"
                  <div className='flex items-center justify-between'></div>'"'"
                    <h3 className='text-lg font-semibold text-gray-900 dark:text-white'></h3>"'
                      Generated Code'
                    </h3>''"
                    <div className='flex items-center gap-2'></div>'"'"
                      <button onClick={() =" ></button> copyToClipboard(generatedCode)} className='px-3 py-1 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded text-sm transition-colors flex items-center gap-2'>'"'"
                        {copied ? <CheckCircle className='w-4 h-4'/" ></CheckCircle> : <Copy className='w-4 h-4'/" ></Copy>}'
                        {copied ? 'Copied!' : 'Copy'}''"
                      </button>'"'"
                      <button onClick={() =" ></button> exportCode('txt')} className='px-3 py-1 bg-blue-100 hover:bg-blue-200 dark:bg-blue-900/30 dark:hover:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded text-sm transition-colors flex items-center gap-2'>'"'"
                        <Download className='w-4 h-4'/" ></Download>
                        Export"
                      </button>"'"
                    </div>"'
                  </div>'
                  ''
                  <div className='bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto'></div>''
                    <pre className='text-sm font-mono'></pre>
                      <code></cod>{generatedCode}</code>
                    </pre>"
                  </div>"'"
                </motion.div>)}"''
            </motion.div>)}''
''
          {activeTab === 'analyze' && (<motion.div key='analyze' initial = {}
  { opacity: 0, y: 20,
}} animate = {}"
  { opacity: 1, y: 0,"'"
}} exit = {}"'
  { opacity: 0, y: -20 '
,''
}} className='space-y-6'></motion>'"
              <div></div>'"'"
                <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'></label>"'
                  Paste code to analyze'"
                </label>'"'"
                <textarea value={customCode} onChange={(e) =" ></textarea> setCustomCode(e.target.value)} placeholder='Paste your code here for AI-powered analysis...' className='w-full h-48 p-4 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 resize-none font-mono text-sm'/>"'
              </div>'
''
              <button onClick={handleAnalyzeCustomCode} disabled={isAnalyzing || !customCode.trim()} className='w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2 disabled:cursor-not-allowed'></button>'"
                {isAnalyzing ? (<>'"'"
                    <Loader2 className='w-5 h-5 animate-spin'/" ></Loader2>"'
                    Analyzing Code...'"
                  </>) : (<>'"'"
                    <Eye className='w-5 h-5'/" ></Eye>
                    Analyze Code
                  </>) }
              </button>
              {/* Analysis Results */}
              {codeAnalysis && (<motion.div initial = {}"
  { opacity: 0, y: 20,"'"
}} animate = {}"'
  { opacity: 1, y: 0 '
,''
}} className='space-y-6'></motion>'
                  {/* Metrics Overview */}''
                  <div className='grid grid-cols-2 md:grid-cols-5 gap-4'></div>'
                    {[''
                    { key: 'complexity', label: 'Complexity', icon: Code, color: 'red' },'
                    { key: 'maintainability', label: 'Maintainability', icon: Wrench, color: 'blue' },'
                    { key: 'security', label: 'Security', icon: Shield, color: 'green' },'
                    { key: 'performance', label: 'Performance', icon: Gauge, color: 'yellow' },'"
                    { key: 'accessibility', label: 'Accessibility', icon: Eye, color: 'purple' }"'"
                ].map(({ key, label, icon: Icon, color }) => {}"'"
                    const value = codeAnalysis[key]"'"
                    if (typeof value === 'number') {}"''"
'`'"'"
`"`'"'"
                        return (<div key={key} className='text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg'></div>`'`"`'"'"
                            <Icon className={`w-8 h-8 mx-auto mb-2 text-${color}-500`}/" ></Icon>'"'"
                            <div className='text-2xl font-bold text-gray-900 dark:text-white'></div>"'
                              {value}/10'
                            </div>''
                            <div className='text-sm text-gray-600 dark:text-gray-400'></di>{label}</div>
                          </div>)}"
                    return null})}"'"
                  </div>"'
'
                  {/* Code Metrics */}''
                  <div className='bg-gray-50 dark:bg-gray-700 rounded-lg p-4'></div>''
                    <h4 className='font-medium text-gray-900 dark:text-white mb-3'></h>Code Metrics</h4>''
                    <div className='grid grid-cols-2 md:grid-cols-5 gap-4 text-sm'></div>''
                      {Object.entries(codeAnalysis.metrics).map(([key, value]) => (<div key={key} className='text-center'></div>''
                          <div className='text-lg font-semibold text-gray-900 dark:text-white'></di>{value}</div>''
                          <div className='text-gray-600 dark:text-gray-400 capitalize'></div>'
                            {key.replace(/([A-Z])/g, $1').trim()}
                          </div>
                        </div>))}"
                    </div>"'"
                  </div>"'
'
                  {/* Issues */}''"
                  {codeAnalysis.issues.length > 0 && (<div className='bg-gray-50 dark:bg-gray-700 rounded-lg p-4'></div>`'"'"
                      <h4 className='font-medium text-gray-900 dark:text-white mb-3'></h>Issues Found</h4>'`"`'"'"
                      <div className='space-y-2'></div>'`'`"`'"'"
                        {codeAnalysis.issues.map((issue, index) => (<div key={index} className={`flex items-start gap-3 p-3 rounded-lg ${issue.severity === 'error' ? 'bg-red-50 dark:bg-red-900/30' :`"`'"'"
                            issue.severity === 'warning' ? 'bg-yellow-50 dark:bg-yellow-900/30' :'``"`'"'"
                                'bg-blue-50 dark:bg-blue-900/30'}`}" ></div>'"'"
                            {issue.severity === 'error' ? (<AlertCircle className='w-5 h-5 text-red-500 mt-0.5'/" ></AlertCircle>) : issue.severity === 'warning' ? (<AlertCircle className='w-5 h-5 text-yellow-500 mt-0.5'/" ></AlertCircle>) : (<Info className='w-5 h-5 text-blue-500 mt-0.5'/" ></Info>)}''"
                            <div className='flex-1'></div>'"'"
                              <div className='text-sm font-medium text-gray-900 dark:text-white'></div>"'
                                {issue.message}'
                              </div>''
                              {issue.line && (<div className='text-xs text-gray-600 dark:text-gray-400 mt-1'></div>
                                  Line {issue.line}
                                </div>) }
                            </div>
                          </div>) ) }
                      </div>"
                    </div>)}"'"
                </motion.div>)}"''
            </motion.div>)}''
''
          {activeTab === 'optimize' && (<motion.div key='optimize' initial = {}
  { opacity: 0, y: 20,
}} animate = {}"
  { opacity: 1, y: 0,"'"
}} exit = {}"'
  { opacity: 0, y: -20 '
,''
}} className='space-y-6'></motion>''"
              <div className='text-center py-8'></div>'"'"
                <Zap className='w-16 h-16 text-yellow-500 mx-auto mb-4'/" ></Zap>'"'"
                <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-2'></h3>"'
                  Code Optimization'
                </h3>''
                <p className='text-gray-600 dark:text-gray-400'></p>"
                  Select an optimization focus area to improve your code"'"
                </p>"'
              </div>'
''
              <div className='grid grid-cols-2 md:grid-cols-4 gap-4'></div>'
                {[''
                { key: 'performance', label: 'Performance', icon: Gauge, color: 'blue' },'"
                { key: 'security', label: 'Security', icon: Shield, color: 'green' },'`'"'"
                { key: 'maintainability', label: 'Maintainability', icon: Wrench, color: 'purple' },'`"`'"'"
                { key: 'accessibility', label: 'Accessibility', icon: Eye, color: 'indigo' }`'`",`'"'"
].map(({ key, label, icon: Icon, color }) => (<button key={key} onClick={() =" ></button> handleOptimizeCode(key)} disabled={!generatedCode && !customCode} className={`p-6 text-center rounded-lg border-2 transition-all ${!generatedCode && !customCode`"`'"'"
                    ? 'border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 cursor-not-allowed`'`"`'"'"
                    : 'border-gray-200 dark:border-gray-600 hover:border-purple-500 hover:bg-purple-50 dark:hover:bg-purple-900/20 cursor-pointer'}`}>`'`"`'"'"
                    <Icon className={`w-12 h-12 mx-auto mb-3 text-${color}-500`}/" ></Icon>''
                    <div className='font-medium text-gray-900 dark:text-white'></di>{label}</div>"
                  </button>))}"'"
              </div>"''
            </motion.div>)}''
''
          {activeTab === 'tests' && (<motion.div key='tests' initial = {}
  { opacity: 0, y: 20,
}} animate = {}"
  { opacity: 1, y: 0,"'"
}} exit = {}"'
  { opacity: 0, y: -20 '
,''
}} className='space-y-6'></motion>''"
              <div className='text-center py-8'></div>'"'"
                <TestTube className='w-16 h-16 text-green-500 mx-auto mb-4'/" ></TestTube>'"'"
                <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-2'></h3>"'
                  Generate Tests'
                </h3>''
                <p className='text-gray-600 dark:text-gray-400'></p>"
                  Automatically generate comprehensive test suites for your code"'"
                </p>"'
              </div>'
''"
              <button onClick={handleGenerateTests} disabled={!generatedCode && !customCode} className='w-full py-4 px-6 bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2 disabled:cursor-not-allowed'></button>'"'"
                <TestTube className='w-5 h-5'/" ></TestTube>"
                Generate Test Suite"'"
              </button>"''
            </motion.div>)}''
''
          {activeTab === 'docs' && (<motion.div key='docs' initial = {}
  { opacity: 0, y: 20,
}} animate = {}"
  { opacity: 1, y: 0,"'"
}} exit = {}"'
  { opacity: 0, y: -20 '
,''
}} className='space-y-6'></motion>''"
              <div className='text-center py-8'></div>'"'"
                <FileText className='w-16 h-16 text-indigo-500 mx-auto mb-4'/" ></FileText>'"'"
                <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-2'></h3>"'
                  Generate Documentation'
                </h3>''
                <p className='text-gray-600 dark:text-gray-400'></p>"
                  Create comprehensive documentation for your code"'"
                </p>"'
              </div>'
''"
              <button onClick={handleGenerateDocs} disabled={!generatedCode && !customCode} className='w-full py-4 px-6 bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-400 text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2 disabled:cursor-not-allowed'></button>'"'"
                <FileText className='w-5 h-5'/" ></FileText>
                Generate Documentation
              </button>
            </motion.div>) }
        </AnimatePresence>
        {/* Suggestions Panel */}
        {suggestions.length > 0 && (<motion.div initial = {}"
  { opacity: 0, y: 20,"'"
}} animate = {}"'
  { opacity: 1, y: 0 '
,''"
}} className='mt-8 border-t border-gray-200 dark:border-gray-700 pt-6'></motion>'"'"
            <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-4'></h3>"'
              AI Suggestions ({suggestions.length})'
            </h3>''
            <div className='grid gap-4'></div>
              {suggestions.map((suggestion) => (<motion.div key={suggestion.id} initial = {}"
  { opacity: 0, x: 20,"'"
}} animate = {}"'
  { opacity: 1, x: 0 '
,''"
}} className='p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600'></motion>`'"'"
                  <div className='flex items-start justify-between mb-3'></div>'`"`'"'"
                    <div className='flex items-center gap-2'></div>'`'`"`''"
                      <span className={`px-2 py-1 text-xs rounded-full ${suggestion.type === 'security' ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300' :`'"'"
                    suggestion.type === 'performance' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300' :`"`'"'"
                        suggestion.type === 'optimization' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300' :'`'`"`'"'"
                            'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'}`}" ></span>"`'"'"
                        {suggestion.type}'`"`'"'"
                      </span>'`'`"`'"'"
                      <span className={`px-2 py-1 text-xs rounded-full ${suggestion.impact === 'high' ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300' :`"`'"'"
                    suggestion.impact === 'medium' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300' :'`'`"`'"'"
                        'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'}`}" ></span>"'"
                        {suggestion.impact} impact"'
                      </span>'
                    </div>''
                    <span className='text-sm text-gray-500'></span>"
                      {Math.round(suggestion.confidence * 100)}% confidence"'"
                    </span>"'
                  </div>'"
                  '"'"
                  <h4 className='font-medium text-gray-900 dark:text-white mb-2'></h4>"'
                    {suggestion.title}'
                  </h4>''"
                  <p className='text-sm text-gray-600 dark:text-gray-400 mb-3'></p>"'"
                    {suggestion.explanation}"'
                  </p>'
                  ''"
                  <div className='bg-gray-900 text-gray-100 p-3 rounded text-sm font-mono mb-3'></div>"'"
                    <code></cod>{suggestion.code}</code>"'
                  </div>'
                  ''"
                  <div className='flex items-center gap-2'></div>'"'"
                    <button onClick={() =" ></button> handleApplySuggestion(suggestion)} className='px-3 py-1 bg-purple-600 hover:bg-purple-700 text-white text-sm rounded transition-colors'>"'
                      Apply Suggestion'"
                    </button>'"'"
                    <button onClick={() =" ></button> copyToClipboard(suggestion.code)} className='px-3 py-1 bg-gray-100 hover:bg-gray-200 dark:bg-gray-600 dark:hover:bg-gray-500 text-gray-700 dark:text-gray-300 text-sm rounded transition-colors'>
                      Copy Code
                    </button>
                  </div>
                </motion.div>) ) }
            </div>
          </motion.div>) }

        {/* History Panel */}
        {history.length > 0 && (<motion.div initial = {}"
  { opacity: 0, y: 20,"'"
}} animate = {}"'
  { opacity: 1, y: 0 '
,''
}} className='mt-8 border-t border-gray-200 dark:border-gray-700 pt-6'></motion>''"
            <div className='flex items-center justify-between mb-4'></div>'"'"
              <h3 className='text-lg font-semibold text-gray-900 dark:text-white'></h3>"'
                Generation History ({history.length})'
              </h3>''"
              <button onClick={handleClearHistory} className='px-3 py-1 bg-red-100 hover:bg-red-200 dark:bg-red-900/30 dark:hover:bg-red-900/50 text-red-700 dark:text-red-300 rounded text-sm transition-colors flex items-center gap-2'></button>'"'"
                <Trash2 className='w-4 h-4'/" ></Trash2>"
                Clear History"'"
              </button>"'
            </div>'
            ''
            <div className='space-y-3 max-h-64 overflow-y-auto'></div>''
              {history.slice(0, 10).map((item) => (<div key={item.id} className='p-3 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600'></div>''
                  <div className='flex items-center justify-between mb-2'></div>''"
                    <div className='flex items-center gap-2'></div>'"'"
                      <span className='text-sm font-medium text-gray-900 dark:text-white'></span>"`'"'"
                        {item.prompt.slice(0, 50)}...'`"`'"'"
                      </span>'`'`"`'"'"
                      <span className={`px-2 py-1 text-xs rounded-full ${item.language === 'typescript' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300' :`"`'"'"
                    item.language === 'javascript' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300' :'`'`"`'"'"
                        'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'}`}" ></span>"'"
                        {item.language}"'
                      </span>'
                    </div>''
                    <span className='text-xs text-gray-500'></span>"
                      {item.timestamp.toLocaleTimeString()}"'"
                    </span>"'
                  </div>'
                  ''"
                  <div className='flex items-center gap-2'></div>'"'"
                    <button onClick={() =" ></button> copyToClipboard(item.code)} className='px-2 py-1 bg-gray-100 hover:bg-gray-200 dark:bg-gray-600 dark:hover:bg-gray-500 text-gray-700 dark:text-gray-300 text-xs rounded transition-colors'>"''
                      Copy Code''"
                    </button>'"'"
                    <button onClick={() =" ></button> exportCode('txt')} className='px-2 py-1 bg-blue-100 hover:bg-blue-200 dark:bg-blue-900/30 dark:hover:bg-blue-900/50 text-blue-700 dark:text-blue-300 text-xs rounded transition-colors'>
                      Export
                    </button>
                  </div>
                </div>) ) }
            </div>"
          </motion.div>) }"'"
      </div>"`'"'"
    </div>)}`"`'"'"
``"`;'"'"