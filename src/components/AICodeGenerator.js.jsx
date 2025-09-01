import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Sparkles, Download, TestTube, FileText, Settings, Zap, Shield, Gauge, Wrench, Eye, Trash2, Copy, CheckCircle, AlertCircle, Info, Loader2 } from 'lucide-react';
import { useAICodeGeneration } from "../hooks/useAICodeGeneration";
import { useAnalytics } from "../hooks/useAnalytics";
export const AICodeGenerator = () => {
    const { trackEvent } = useAnalytics({
        enableTracking: true,
        enableUserBehaviorTracking: true
    });
    const [activeTab, setActiveTab] = useState('generate');
    const [showAdvanced, setShowAdvanced] = useState(false);
    const [customCode, setCustomCode] = useState('');
    const [copied, setCopied] = useState(false);
    const { isGenerating, isAnalyzing, generatedCode, codeAnalysis, suggestions, history, generateCode, analyzeCode, applySuggestion, optimizeCode, generateTests, generateDocs, clearHistory, exportCode } = useAICodeGeneration();
    const [form, setForm] = useState({
        prompt: '',
        language: 'typescript',
        framework: 'react',
        style: 'functional',
        target: 'web',
        quality: 'development',
        includeTests: false,
        includeDocs: false,
        includeErrorHandling: false,
        includeLogging: false,
        includeMetrics: false
    });
    // Handle form submission
    const handleSubmit = useCallback(async (e) => {
        e.preventDefault();
        if (!form.prompt.trim())
            return;
        await generateCode(form.prompt, form);
        trackEvent('ai_code_generator', 'form_submitted', form.language, null, {
            framework: form.framework,
            style: form.style,
            target: form.target,
            quality: form.quality
        })}, [form, generateCode, trackEvent]);
    // Handle custom code analysis
    const handleAnalyzeCustomCode = useCallback(async () => {
        if (!customCode.trim())
            return;
        await analyzeCode(customCode, form.language);
        trackEvent('ai_code_generator', 'custom_code_analyzed', form.language, customCode.length)}, [customCode, form.language, analyzeCode, trackEvent]);
    // Handle code optimization
    const handleOptimizeCode = useCallback(async (focus) => {
        if (!generatedCode && !customCode)
            return;
        const codeToOptimize = generatedCode || customCode;
        const optimizedCode = await optimizeCode(codeToOptimize, focus);
        if (generatedCode) {
            // Update generated code
            // Note: In a real implementation, you'd want to update the state properly
        }
        trackEvent('ai_code_generator', 'code_optimized', focus, optimizedCode.length)}, [generatedCode, customCode, optimizeCode, trackEvent]);
    // Handle test generation
    const handleGenerateTests = useCallback(async () => {
        if (!generatedCode && !customCode)
            return;
        const codeToTest = generatedCode || customCode;
        const testCode = await generateTests(codeToTest, form.language);
        // In a real implementation, you'd want to display the test code
        console.log('Generated tests:', testCode);
        trackEvent('ai_code_generator', 'tests_generated', form.language, testCode.length)}, [generatedCode, customCode, generateTests, form.language, trackEvent]);
    // Handle documentation generation
    const handleGenerateDocs = useCallback(async () => {
        if (!generatedCode && !customCode)
            return;
        const codeToDoc = generatedCode || customCode;
        const docs = await generateDocs(codeToDoc, form.language);
        // In a real implementation, you'd want to display the documentation
        console.log('Generated docs:', docs);
        trackEvent('ai_code_generator', 'docs_generated', form.language, docs.length)}, [generatedCode, customCode, generateDocs, form.language, trackEvent]);
    // Copy code to clipboard
    const copyToClipboard = useCallback(async (code) => {
        try {
            await navigator.clipboard.writeText(code);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
            trackEvent('ai_code_generator', 'code_copied', 'clipboard', code.length)}
        catch (error) {
            console.error('Failed to copy code:', error)}
    }, [trackEvent]);
    // Apply suggestion
    const handleApplySuggestion = useCallback((suggestion) => {
        applySuggestion(suggestion);
        trackEvent('ai_code_generator', 'suggestion_applied', suggestion.type, null, {
            suggestionId: suggestion.id,
            impact: suggestion.impact
        })}, [applySuggestion, trackEvent]);
    // Clear history
    const handleClearHistory = useCallback(() => {
        clearHistory();
        trackEvent('ai_code_generator', 'history_cleared', 'manual')}, [clearHistory, trackEvent]);
    return (<div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden"></di></div>
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-6 text-white"></di></div>
        <div className="flex items-center justify-between"></di></div>
          <h2 className="text-2xl font-bold flex items-center gap-3"></h></h2>
            <Code className="w-8 h-8"/></Cod></Code>
            AI Code Generator
            <div className="flex items-center gap-1 px-3 py-1 bg-white/20 rounded-full text-sm"></di></div>
              <Sparkles className="w-4 h-4"/></Sparkle></Sparkles>
              Powered by AI
            </div>
          </h2>
          
          <div className="flex items-center gap-2"></di></div>
            <button onClick={() =></butto></button> exportCode('json')} className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors flex items-center gap-2">
              <Download className="w-4 h-4"/></Downloa></Download>
              Export
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="border-b border-gray-200 dark:border-gray-700"></di></div>
        <nav className="flex space-x-8 px-6"></na></nav>
          {[
            { id: 'generate', label: 'Generate', icon: Sparkles },
            { id: 'analyze', label: 'Analyze', icon: Eye },
            { id: 'optimize', label: 'Optimize', icon: Zap },
            { id: 'tests', label: 'Tests', icon: TestTube },
            { id: 'docs', label: 'Docs', icon: FileText }
        ].map(({ id, label, icon: Icon }) => (<button key={id} onClick={() =></butto></button> setActiveTab(id)} className={`flex items-center gap-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${activeTab === id
                ? 'border-purple-500 text-purple-600 dark:text-purple-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'}`}>
              <Icon className="w-4 h-4"/></Ico></Icon>
              {label}
            </button>))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="p-6"></di></div>
        <AnimatePresence mode="wait"></AnimatePresenc></AnimatePresence>
          {activeTab === 'generate' && (<motion.div key="generate" initial = {
  { opacity: 0,
  y: 20 

}} animate = {
  { opacity: 1,
  y: 0 

}} exit = {
  { opacity: 0,
  y: -20 ></motion>
></motion>
}} className="space-y-6">
              {/* Generation Form */}
              <form onSubmit={handleSubmit} className="space-y-4"></for></form>
                <div></di></div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"></labe></label>
                    Describe what you want to build
                  </label>
                  <textarea value={form.prompt} onChange = {></textare></textarea>
  (e) => setForm(prev => ({ ...prev,
  prompt: e.target.value 

}))} placeholder="e.g., Create a React component for a user profile card with avatar, name, email, and edit button..." className="w-full h-32 p-4 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 resize-none" required/>
                </div>

                {/* Basic Options */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4"></di></div>
                  <div></di></div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"></labe></label>
                      Language
                    </label>
                    <select value={form.language} onChange = {></selec></select>
  (e) => setForm(prev => ({ ...prev,
  language: e.target.value 

}))} className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100">
                      <option value="typescript"></opti></optio>TypeScript</option>
                      <option value="javascript"></opti></optio>JavaScript</option>
                      <option value="python"></opti></optio>Python</option>
                      <option value="java"></opti></optio>Java</option>
                      <option value="cpp"></opti></optio>C++</option>
                      <option value="csharp"></opti></optio>C#</option>
                      <option value="go"></opti></optio>Go</option>
                      <option value="rust"></opti></optio>Rust</option>
                    </select>
                  </div>

                  <div></di></div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"></labe></label>
                      Framework
                    </label>
                    <select value={form.framework || ''} onChange = {></selec></select>
  (e) => setForm(prev => ({ ...prev,
  framework: e.target.value || null 

}))} className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100">
                      <option value=""></opti></optio>None</option>
                      <option value="react"></opti></optio>React</option>
                      <option value="vue"></opti></optio>Vue</option>
                      <option value="angular"></opti></optio>Angular</option>
                      <option value="nextjs"></opti></optio>Next.js</option>
                      <option value="express"></opti></optio>Express</option>
                      <option value="fastapi"></opti></optio>FastAPI</option>
                      <option value="spring"></opti></optio>Spring</option>
                      <option value="dotnet"></opti></optio>.NET</option>
                    </select>
                  </div>

                  <div></di></div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"></labe></label>
                      Style
                    </label>
                    <select value={form.style} onChange = {></selec></select>
  (e) => setForm(prev => ({ ...prev,
  style: e.target.value 

}))} className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100">
                      <option value="functional"></opti></optio>Functional</option>
                      <option value="oop"></opti></optio>OOP</option>
                      <option value="procedural"></opti></optio>Procedural</option>
                      <option value="declarative"></opti></optio>Declarative</option>
                    </select>
                  </div>

                  <div></di></div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"></labe></label>
                      Quality
                    </label>
                    <select value={form.quality} onChange = {></selec></select>
  (e) => setForm(prev => ({ ...prev,
  quality: e.target.value 

}))} className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100">
                      <option value="prototype"></opti></optio>Prototype</option>
                      <option value="development"></opti></optio>Development</option>
                      <option value="production"></opti></optio>Production</option>
                    </select>
                  </div>
                </div>

                {/* Advanced Options Toggle */}
                <button type="button" onClick={() =></butto></button> setShowAdvanced(!showAdvanced)} className="flex items-center gap-2 text-sm text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300">
                  <Settings className="w-4 h-4"/></Setting></Settings>
                  {showAdvanced ? 'Hide' : 'Show'} Advanced Options
                </button>

                {/* Advanced Options */}
                {showAdvanced && (<motion.div initial = {
  { opacity: 0,
  height: 0 

}} animate = {
  { opacity: 1,
  height: 'auto' 

}} exit = {
  { opacity: 0,
  height: 0 ></motion>
></motion>
}} className="grid grid-cols-2 md:grid-cols-5 gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    {[
                    { key: 'includeTests', label: 'Tests', icon: TestTube },
                    { key: 'includeDocs', label: 'Docs', icon: FileText },
                    { key: 'includeErrorHandling', label: 'Error Handling', icon: AlertCircle },
                    { key: 'includeLogging', label: 'Logging', icon: Info },
                    { key: 'includeMetrics', label: 'Metrics', icon: Gauge }
                ].map(({ key, label, icon: Icon }) => (<label key={key} className="flex items-center gap-2 cursor-pointer"></labe></label>
                        <input type="checkbox" checked={form[key]} onChange = {></inpu></input>
  (e) => setForm(prev => ({ ...prev,
  [key]: e.target.checked 

}))} className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <Icon className="w-4 h-4 text-gray-600 dark:text-gray-400"/></Ico></Icon>
                        <span className="text-sm text-gray-700 dark:text-gray-300"></sp></spa>{label}</span>
                      </label>))}
                  </motion.div>)}

                <button type="submit" disabled={isGenerating || !form.prompt.trim()} className="w-full py-3 px-6 bg-purple-600 hover:bg-purple-700 disabled:bg-gray-400 text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2 disabled:cursor-not-allowed"></butto></button>
                  {isGenerating ? (<>
                      <Loader2 className="w-5 h-5 animate-spin"/></Loader></Loader2>
                      Generating Code...
                    </>) : (<>
                      <Sparkles className="w-5 h-5"/></Sparkle></Sparkles>
                      Generate Code
                    </>)}
                </button>
              </form>

              {/* Generated Code Display */}
              {generatedCode && (<motion.div initial = {
  { opacity: 0,
  y: 20 

}} animate = {
  { opacity: 1,
  y: 0 ></motion>
></motion>
}} className="space-y-4">
                  <div className="flex items-center justify-between"></di></div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white"></h></h3>
                      Generated Code
                    </h3>
                    <div className="flex items-center gap-2"></di></div>
                      <button onClick={() =></butto></button> copyToClipboard(generatedCode)} className="px-3 py-1 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded text-sm transition-colors flex items-center gap-2">
                        {copied ? <CheckCircle className="w-4 h-4"/></CheckCircl></CheckCircle> : <Copy className="w-4 h-4"/></Cop></Copy>}
                        {copied ? 'Copied!' : 'Copy'}
                      </button>
                      <button onClick={() =></butto></button> exportCode('txt')} className="px-3 py-1 bg-blue-100 hover:bg-blue-200 dark:bg-blue-900/30 dark:hover:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded text-sm transition-colors flex items-center gap-2">
                        <Download className="w-4 h-4"/></Downloa></Download>
                        Export
                      </button>
                    </div>
                  </div>
                  
                  <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto"></di></div>
                    <pre className="text-sm font-mono"></pr></pre>
                      <code></co></cod>{generatedCode}</code>
                    </pre>
                  </div>
                </motion.div>)}
            </motion.div>)}

          {activeTab === 'analyze' && (<motion.div key="analyze" initial = {
  { opacity: 0,
  y: 20 

}} animate = {
  { opacity: 1,
  y: 0 

}} exit = {
  { opacity: 0,
  y: -20 ></motion>
></motion>
}} className="space-y-6">
              <div></di></div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"></labe></label>
                  Paste code to analyze
                </label>
                <textarea value={customCode} onChange={(e) =></textare></textarea> setCustomCode(e.target.value)} placeholder="Paste your code here for AI-powered analysis..." className="w-full h-48 p-4 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 resize-none font-mono text-sm"/>
              </div>

              <button onClick={handleAnalyzeCustomCode} disabled={isAnalyzing || !customCode.trim()} className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2 disabled:cursor-not-allowed"></butto></button>
                {isAnalyzing ? (<>
                    <Loader2 className="w-5 h-5 animate-spin"/></Loader></Loader2>
                    Analyzing Code...
                  </>) : (<>
                    <Eye className="w-5 h-5"/></Ey></Eye>
                    Analyze Code
                  </>)}
              </button>

              {/* Analysis Results */}
              {codeAnalysis && (<motion.div initial = {
  { opacity: 0,
  y: 20 

}} animate = {
  { opacity: 1,
  y: 0 ></motion>
></motion>
}} className="space-y-6">
                  {/* Metrics Overview */}
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4"></di></div>
                    {[
                    { key: 'complexity', label: 'Complexity', icon: Code, color: 'red' },
                    { key: 'maintainability', label: 'Maintainability', icon: Wrench, color: 'blue' },
                    { key: 'security', label: 'Security', icon: Shield, color: 'green' },
                    { key: 'performance', label: 'Performance', icon: Gauge, color: 'yellow' },
                    { key: 'accessibility', label: 'Accessibility', icon: Eye, color: 'purple' }
                ].map(({ key, label, icon: Icon, color }) => {
                    const value = codeAnalysis[key];
                    if (typeof value === 'number') {
                        return (<div key={key} className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"></di></div>
                            <Icon className={`w-8 h-8 mx-auto mb-2 text-${color}-500`}/></Ico></Icon>
                            <div className="text-2xl font-bold text-gray-900 dark:text-white"></di></div>
                              {value}/10
                            </div>
                            <div className="text-sm text-gray-600 dark:text-gray-400"></d></di>{label}</div>
                          </div>)}
                    return null})}
                  </div>

                  {/* Code Metrics */}
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4"></di></div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-3"></h>Code Metrics</h4>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm"></di></div>
                      {Object.entries(codeAnalysis.metrics).map(([key, value]) => (<div key={key} className="text-center"></di></div>
                          <div className="text-lg font-semibold text-gray-900 dark:text-white"></d></di>{value}</div>
                          <div className="text-gray-600 dark:text-gray-400 capitalize"></di></div>
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </div>
                        </div>))}
                    </div>
                  </div>

                  {/* Issues */}
                  {codeAnalysis.issues.length > 0 && (<div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4"></di></div>
                      <h4 className="font-medium text-gray-900 dark:text-white mb-3"></h>Issues Found</h4>
                      <div className="space-y-2"></di></div>
                        {codeAnalysis.issues.map((issue, index) => (<div key={index} className={`flex items-start gap-3 p-3 rounded-lg ${issue.severity === 'error' ? 'bg-red-50 dark:bg-red-900/30' :></div>
                            issue.severity === 'warning' ? 'bg-yellow-50 dark:bg-yellow-900/30' :></div>
                                'bg-blue-50 dark:bg-blue-900/30'}`}>
                            {issue.severity === 'error' ? (<AlertCircle className="w-5 h-5 text-red-500 mt-0.5"/></AlertCircl></AlertCircle>) : issue.severity === 'warning' ? (<AlertCircle className="w-5 h-5 text-yellow-500 mt-0.5"/></AlertCircl></AlertCircle>) : (<Info className="w-5 h-5 text-blue-500 mt-0.5"/></Inf></Info>)}
                            <div className="flex-1"></di></div>
                              <div className="text-sm font-medium text-gray-900 dark:text-white"></di></div>
                                {issue.message}
                              </div>
                              {issue.line && (<div className="text-xs text-gray-600 dark:text-gray-400 mt-1"></di></div>
                                  Line {issue.line}
                                </div>)}
                            </div>
                          </div>))}
                      </div>
                    </div>)}
                </motion.div>)}
            </motion.div>)}

          {activeTab === 'optimize' && (<motion.div key="optimize" initial = {
  { opacity: 0,
  y: 20 

}} animate = {
  { opacity: 1,
  y: 0 

}} exit = {
  { opacity: 0,
  y: -20 ></motion>
></motion>
}} className="space-y-6">
              <div className="text-center py-8"></di></div>
                <Zap className="w-16 h-16 text-yellow-500 mx-auto mb-4"/></Za></Zap>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2"></h></h3>
                  Code Optimization
                </h3>
                <p className="text-gray-600 dark:text-gray-400"></p>
                  Select an optimization focus area to improve your code
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4"></di></div>
                {[
                { key: 'performance', label: 'Performance', icon: Gauge, color: 'blue' },
                { key: 'security', label: 'Security', icon: Shield, color: 'green' },
                { key: 'maintainability', label: 'Maintainability', icon: Wrench, color: 'purple' },
                { key: 'accessibility', label: 'Accessibility', icon: Eye, color: 'indigo' }
            ].map(({ key, label, icon: Icon, color }) => (<button key={key} onClick={() =></butto></button> handleOptimizeCode(key)} disabled={!generatedCode && !customCode} className={`p-6 text-center rounded-lg border-2 transition-all ${!generatedCode && !customCode
                    ? 'border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 cursor-not-allowed'
                    : 'border-gray-200 dark:border-gray-600 hover:border-purple-500 hover:bg-purple-50 dark:hover:bg-purple-900/20 cursor-pointer'}`}>
                    <Icon className={`w-12 h-12 mx-auto mb-3 text-${color}-500`}/></Ico></Icon>
                    <div className="font-medium text-gray-900 dark:text-white"></d></di>{label}</div>
                  </button>))}
              </div>
            </motion.div>)}

          {activeTab === 'tests' && (<motion.div key="tests" initial = {
  { opacity: 0,
  y: 20 

}} animate = {
  { opacity: 1,
  y: 0 

}} exit = {
  { opacity: 0,
  y: -20 ></motion>
></motion>
}} className="space-y-6">
              <div className="text-center py-8"></di></div>
                <TestTube className="w-16 h-16 text-green-500 mx-auto mb-4"/></TestTub></TestTube>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2"></h></h3>
                  Generate Tests
                </h3>
                <p className="text-gray-600 dark:text-gray-400"></p>
                  Automatically generate comprehensive test suites for your code
                </p>
              </div>

              <button onClick={handleGenerateTests} disabled={!generatedCode && !customCode} className="w-full py-4 px-6 bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2 disabled:cursor-not-allowed"></butto></button>
                <TestTube className="w-5 h-5"/></TestTub></TestTube>
                Generate Test Suite
              </button>
            </motion.div>)}

          {activeTab === 'docs' && (<motion.div key="docs" initial = {
  { opacity: 0,
  y: 20 

}} animate = {
  { opacity: 1,
  y: 0 

}} exit = {
  { opacity: 0,
  y: -20 ></motion>
></motion>
}} className="space-y-6">
              <div className="text-center py-8"></di></div>
                <FileText className="w-16 h-16 text-indigo-500 mx-auto mb-4"/></FileTex></FileText>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2"></h></h3>
                  Generate Documentation
                </h3>
                <p className="text-gray-600 dark:text-gray-400"></p>
                  Create comprehensive documentation for your code
                </p>
              </div>

              <button onClick={handleGenerateDocs} disabled={!generatedCode && !customCode} className="w-full py-4 px-6 bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-400 text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2 disabled:cursor-not-allowed"></butto></button>
                <FileText className="w-5 h-5"/></FileTex></FileText>
                Generate Documentation
              </button>
            </motion.div>)}
        </AnimatePresence>

        {/* Suggestions Panel */}
        {suggestions.length > 0 && (<motion.div initial = {
  { opacity: 0,
  y: 20 

}} animate = {
  { opacity: 1,
  y: 0 ></motion>
></motion>
}} className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4"></h></h3>
              AI Suggestions ({suggestions.length})
            </h3>
            <div className="grid gap-4"></di></div>
              {suggestions.map((suggestion) => (<motion.div key={suggestion.id} initial = {
  { opacity: 0,
  x: 20 

}} animate = {
  { opacity: 1,
  x: 0 ></motion>
></motion>
}} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
                  <div className="flex items-start justify-between mb-3"></di></div>
                    <div className="flex items-center gap-2"></di></div>
                      <span className={`px-2 py-1 text-xs rounded-full ${suggestion.type === 'security' ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300' :
                    suggestion.type === 'performance' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300' :></span>
                        suggestion.type === 'optimization' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300' :></span>
                            'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'}`}>
                        {suggestion.type}
                      </span>
                      <span className={`px-2 py-1 text-xs rounded-full ${suggestion.impact === 'high' ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300' :></span>
                    suggestion.impact === 'medium' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300' :></span>
                        'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'}`}>
                        {suggestion.impact} impact
                      </span>
                    </div>
                    <span className="text-sm text-gray-500"></spa></span>
                      {Math.round(suggestion.confidence * 100)}% confidence
                    </span>
                  </div>
                  
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2"></h></h4>
                    {suggestion.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3"></p>
                    {suggestion.explanation}
                  </p>
                  
                  <div className="bg-gray-900 text-gray-100 p-3 rounded text-sm font-mono mb-3"></di></div>
                    <code></co></cod>{suggestion.code}</code>
                  </div>
                  
                  <div className="flex items-center gap-2"></di></div>
                    <button onClick={() =></butto></button> handleApplySuggestion(suggestion)} className="px-3 py-1 bg-purple-600 hover:bg-purple-700 text-white text-sm rounded transition-colors">
                      Apply Suggestion
                    </button>
                    <button onClick={() =></butto></button> copyToClipboard(suggestion.code)} className="px-3 py-1 bg-gray-100 hover:bg-gray-200 dark:bg-gray-600 dark:hover:bg-gray-500 text-gray-700 dark:text-gray-300 text-sm rounded transition-colors">
                      Copy Code
                    </button>
                  </div>
                </motion.div>))}
            </div>
          </motion.div>)}

        {/* History Panel */}
        {history.length > 0 && (<motion.div initial = {
  { opacity: 0,
  y: 20 

}} animate = {
  { opacity: 1,
  y: 0 ></motion>
></motion>
}} className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-6">
            <div className="flex items-center justify-between mb-4"></di></div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white"></h></h3>
                Generation History ({history.length})
              </h3>
              <button onClick={handleClearHistory} className="px-3 py-1 bg-red-100 hover:bg-red-200 dark:bg-red-900/30 dark:hover:bg-red-900/50 text-red-700 dark:text-red-300 rounded text-sm transition-colors flex items-center gap-2"></butto></button>
                <Trash2 className="w-4 h-4"/></Trash></Trash2>
                Clear History
              </button>
            </div>
            
            <div className="space-y-3 max-h-64 overflow-y-auto"></di></div>
              {history.slice(0, 10).map((item) => (<div key={item.id} className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600"></di></div>
                  <div className="flex items-center justify-between mb-2"></di></div>
                    <div className="flex items-center gap-2"></di></div>
                      <span className="text-sm font-medium text-gray-900 dark:text-white"></spa></span>
                        {item.prompt.slice(0, 50)}...
                      </span>
                      <span className={`px-2 py-1 text-xs rounded-full ${item.language === 'typescript' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300' :></span>
                    item.language === 'javascript' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300' :></span>
                        'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'}`}>
                        {item.language}
                      </span>
                    </div>
                    <span className="text-xs text-gray-500"></spa></span>
                      {item.timestamp.toLocaleTimeString()}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2"></di></div>
                    <button onClick={() =></butto></button> copyToClipboard(item.code)} className="px-2 py-1 bg-gray-100 hover:bg-gray-200 dark:bg-gray-600 dark:hover:bg-gray-500 text-gray-700 dark:text-gray-300 text-xs rounded transition-colors">
                      Copy Code
                    </button>
                    <button onClick={() =></butto></button> exportCode('txt')} className="px-2 py-1 bg-blue-100 hover:bg-blue-200 dark:bg-blue-900/30 dark:hover:bg-blue-900/50 text-blue-700 dark:text-blue-300 text-xs rounded transition-colors">
                      Export
                    </button>
                  </div>
                </div>))}
            </div>
          </motion.div>)}
      </div>
    </div>)};
