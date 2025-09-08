import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Sparkles, Download, TestTube, FileText, Settings, Zap, Shield, Gauge, Wrench, Eye, Trash2, Copy, CheckCircle, AlertCircle, Info, Loader2 } from 'lucide-react';
import { useAICodeGeneration } from '../hooks/useAICodeGeneration';
import { useAnalytics } from '../hooks/useAnalytics';
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
        trackEvent('ai_code_generator', 'form_submitted', form.language, undefined, {
            framework: form.framework,
            style: form.style,
            target: form.target,
            quality: form.quality
        });
    }, [form, generateCode, trackEvent]);
    // Handle custom code analysis
    const handleAnalyzeCustomCode = useCallback(async () => {
        if (!customCode.trim())
            return;
        await analyzeCode(customCode, form.language);
        trackEvent('ai_code_generator', 'custom_code_analyzed', form.language, customCode.length);
    }, [customCode, form.language, analyzeCode, trackEvent]);
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
        trackEvent('ai_code_generator', 'code_optimized', focus, optimizedCode.length);
    }, [generatedCode, customCode, optimizeCode, trackEvent]);
    // Handle test generation
    const handleGenerateTests = useCallback(async () => {
        if (!generatedCode && !customCode)
            return;
        const codeToTest = generatedCode || customCode;
        const testCode = await generateTests(codeToTest, form.language);
        // In a real implementation, you'd want to display the test code
        // // // console.log('Generated tests:', testCode);
        trackEvent('ai_code_generator', 'tests_generated', form.language, testCode.length);
    }, [generatedCode, customCode, generateTests, form.language, trackEvent]);
    // Handle documentation generation
    const handleGenerateDocs = useCallback(async () => {
        if (!generatedCode && !customCode)
            return;
        const codeToDoc = generatedCode || customCode;
        const docs = await generateDocs(codeToDoc, form.language);
        // In a real implementation, you'd want to display the documentation
        // // // console.log('Generated docs:', docs);
        trackEvent('ai_code_generator', 'docs_generated', form.language, docs.length);
    }, [generatedCode, customCode, generateDocs, form.language, trackEvent]);
    // Copy code to clipboard
    const copyToClipboard = useCallback(async (code) => {
        try {
            await navigator.clipboard.writeText(code);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
            trackEvent('ai_code_generator', 'code_copied', 'clipboard', code.length);
        }
        catch (error) {
            // // // console.error('Failed to copy code:', error);
        }
    }, [trackEvent]);
    // Apply suggestion
    const handleApplySuggestion = useCallback((suggestion) => {
        applySuggestion(suggestion);
        trackEvent('ai_code_generator', 'suggestion_applied', suggestion.type, undefined, {
            suggestionId: suggestion.id,
            impact: suggestion.impact
        });
    }, [applySuggestion, trackEvent]);
    // Clear history
    const handleClearHistory = useCallback(() => {
        clearHistory();
        trackEvent('ai_code_generator', 'history_cleared', 'manual');
    }, [clearHistory, trackEvent]);
    return (<div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient - to - r from - purple - 500 to - blue - 500 p - 6 text-white">
        <div className="flex items - center justify -between">
          <h2 className="text-2xl font - bold flex items - center gap-3">
            <Code className="w-8 h-8"/>
            AI Code Generator < div className="flex items - center gap-1 px-3 py-1 bg-white / 20 rounded-full text-sm">
              <Sparkles className="w-4 h-4"/>
              Powered by AI
            </div>
          </h2>

          <div className="flex items-center gap-2">
            <button 
              onClick={() => exportCode('json')} 
              className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors flex items-center gap-2"
            >
              <Download className="w-4 h-4"/>
              Export
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="border-b border-gray - 200 dark:border-gray -700">
        <nav className="flex space - x-8 px-6">
          {[{ id: 'generate', label: 'Generate', icon: Sparkles },
            { id: 'analyze', label: 'Analyze', icon: Eye },
            { id: 'optimize', label: 'Optimize', icon: Zap },
            { id: 'tests', label: 'Tests', icon: TestTube },
            { id: 'docs', label: 'Docs', icon: FileText }
          ].map(({ id, label, icon: Icon }) => (
            <button 
              key={id} 
              onClick={() => setActiveTab(id)} 
              className={`flex items-center gap-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === id
                  ? 'border-purple-500 text-purple-600 dark:text-purple-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              <Icon className="w-4 h-4"/>
              {label}
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="p -6">
        <AnimatePresence mode="wait">
          {activeTab === 'generate' && (
            <motion.div 
              key="generate" 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              {/* Input Form */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Programming Language
                  </label>
                  <select
                    value={form.language}
                    onChange={(e) => setForm(prev => ({ ...prev, language: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="javascript">JavaScript</option>
                    <option value="typescript">TypeScript</option>
                    <option value="python">Python</option>
                    <option value="java">Java</option>
                    <option value="cpp">C++</option>
                    <option value="csharp">C#</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Code Description
                  </label>
                  <textarea
                    value={form.description}
                    onChange={(e) => setForm(prev => ({ ...prev, description: e.target.value }))}
                    placeholder="Describe what you want the code to do..."
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Additional Requirements
                  </label>
                  <textarea
                    value={form.requirements}
                    onChange={(e) => setForm(prev => ({ ...prev, requirements: e.target.value }))}
                    placeholder="Any specific requirements, patterns, or constraints..."
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                  />
                </div>

                {/* Advanced Options */}
                {showAdvanced && (<motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="grid grid-cols-2 md:grid-cols-5 gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    {[
                    { key: 'includeTests', label: 'Tests', icon: TestTube },
                    { key: 'includeDocs', label: 'Docs', icon: FileText },
                    { key: 'includeErrorHandling', label: 'Error Handling', icon: AlertCircle },
                    { key: 'includeLogging', label: 'Logging', icon: Info },
                    { key: 'includeMetrics', label: 'Metrics', icon: Gauge }
                ].map(({ key, label, icon: Icon }) => (<label key={key} className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" checked={form[key]} onChange={(e) => setForm(prev => ({ ...prev, [key]: e.target.checked }))} className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <Icon className="w-4 h-4 text-gray-600 dark:text-gray-400"/>
                        <span className="text-sm text-gray-700 dark:text-gray-300">{label}</span>
                      </label>))}
                  </motion.div>)}

                <button type="submit" disabled={isGenerating || !form.prompt.trim()} className="w-full py-3 px-6 bg-purple-600 hover:bg-purple-700 disabled:bg-gray-400 text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2 disabled:cursor-not-allowed">
                  {isGenerating ? (<React.Fragment>
                      <Loader2 className="w-5 h-5 animate-spin"/>
                      Generating Code...
                    </React.Fragment>) : (<React.Fragment>
                      <Sparkles className="w-5 h-5"/>
                      Generate Code
                    </React.Fragment>)}
                </button>
              </div>

              {/* Generated Code */}
              {generatedCode && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Generated Code
                    </h3>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => copyToClipboard(generatedCode)}
                        className="flex items-center gap-2 px-3 py-2 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                      >
                        {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                        {copied ? 'Copied!' : 'Copy'}
                      </button>
                      <button
                        onClick={() => exportCode('code')}
                        className="flex items-center gap-2 px-3 py-2 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                      >
                        <Download className="w-4 h-4" />
                        Export
                      </button>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                    <pre className="text-sm text-gray-800 dark:text-gray-200 overflow-x-auto">
                      <code>{generatedCode}</code>
                    </pre>
                  </div>
                </div>
              )}

          {activeTab === 'analyze' && (<motion.div key="analyze" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Paste code to analyze
                </label>
                <textarea value={customCode} onChange={(e) => setCustomCode(e.target.value)} placeholder="Paste your code here for AI-powered analysis..." className="w-full h-48 p-4 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 resize-none font-mono text-sm"/>
              </div>

              <button onClick={handleAnalyzeCustomCode} disabled={isAnalyzing || !customCode.trim()} className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2 disabled:cursor-not-allowed">
                {isAnalyzing ? (<React.Fragment>
                    <Loader2 className="w-5 h-5 animate-spin"/>
                    Analyzing Code...
                  </React.Fragment>) : (<React.Fragment>
                    <Eye className="w-5 h-5"/>
                    Analyze Code
                  </React.Fragment>)}
              </button>

              {/* Analysis Results */}
              {codeAnalysis && (<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                  {/* Metrics Overview */}
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {[
                    { key: 'complexity', label: 'Complexity', icon: Code, color: 'red' },
                    { key: 'maintainability', label: 'Maintainability', icon: Wrench, color: 'blue' },
                    { key: 'security', label: 'Security', icon: Shield, color: 'green' },
                    { key: 'performance', label: 'Performance', icon: Gauge, color: 'yellow' },
                    { key: 'accessibility', label: 'Accessibility', icon: Eye, color: 'purple' }
                ].map(({ key, label, icon: Icon, color }) => {
                    const value = codeAnalysis[key];
                    if (typeof value === 'number') {
                        return (<div key={key} className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                            <Icon className={`w-8 h-8 mx-auto mb-2 text-${color}-500`}/>
                            <div className="text-2xl font-bold text-gray-900 dark:text-white">
                              {value}/10
                            </div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">{label}</div>
                          </div>)}
                    return null})}
                  </div>

                  {/* Code Metrics */}
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 dark:text-white mb-3">Code Metrics</h4>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
                      {Object.entries(codeAnalysis.metrics).map(([key, value]) => (<div key={key} className="text-center">
                          <div className="text-lg font-semibold text-gray-900 dark:text-white">{value}</div>
                          <div className="text-gray-600 dark:text-gray-400 capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </div>
                        </div>))}
                    </div>
                  </div>

                  {/* Issues */}
                  {codeAnalysis.issues.length > 0 && (<div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                      <h4 className="font-medium text-gray-900 dark:text-white mb-3">Issues Found</h4>
                      <div className="space-y-2">
                        {codeAnalysis.issues.map((issue, index) => (<div key={index} className={`flex items-start gap-3 p-3 rounded-lg ${issue.severity === 'error' ? 'bg-red-50 dark:bg-red-900/30' :
                            issue.severity === 'warning' ? 'bg-yellow-50 dark:bg-yellow-900/30' :
                                'bg-blue-50 dark:bg-blue-900/30'}`}>
                            {issue.severity === 'error' ? (<AlertCircle className="w-5 h-5 text-red-500 mt-0.5"/>) : issue.severity === 'warning' ? (<AlertCircle className="w-5 h-5 text-yellow-500 mt-0.5"/>) : (<Info className="w-5 h-5 text-blue-500 mt-0.5"/>)}
                            <div className="flex-1">
                              <div className="text-sm font-medium text-gray-900 dark:text-white">
                                {issue.message}
                              </div>
                              {issue.line && (<div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                                  Line {issue.line}
                                </div>)}
                            </div>
                          </div>))}
                      </div>
                    </div>)}
                </motion.div>)}
            </motion.div>)}

          {activeTab === 'optimize' && (<motion.div key="optimize" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="space-y-6">
              <div className="text-center py-8">
                <Zap className="w-16 h-16 text-yellow-500 mx-auto mb-4"/>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Code Optimization
                </h3>
                <textarea
                  value={customCode}
                  onChange={(e) => setCustomCode(e.target.value)}
                  placeholder="Paste your code here for analysis, optimization, or documentation..."
                  rows={8}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none font-mono text-sm"
                />
              </div>
            </motion.div>
          )}

          {activeTab === 'analyze' && (
            <motion.div 
              key="analyze" 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              exit={{ opacity: 0, y: -20 }}
              className="text-center py-12"
            >
              <Eye className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Code Analysis
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Analyze your code for performance, security, and best practices.
              </p>
            </motion.div>
          )}

          {activeTab === 'optimize' && (
            <motion.div 
              key="optimize" 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              exit={{ opacity: 0, y: -20 }}
              className="text-center py-12"
            >
              <Zap className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Code Optimization
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Get suggestions to improve performance and efficiency.
              </p>
            </motion.div>
          )}

          {activeTab === 'tests' && (
            <motion.div 
              key="tests" 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              exit={{ opacity: 0, y: -20 }}
              className="text-center py-12"
            >
              <TestTube className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Test Generation
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Generate unit tests and integration tests for your code.
              </p>
            </motion.div>
          )}

          {activeTab === 'docs' && (
            <motion.div 
              key="docs" 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              exit={{ opacity: 0, y: -20 }}
              className="text-center py-12"
            >
              <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Documentation
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Generate comprehensive documentation for your code.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AICodeGenerator;
