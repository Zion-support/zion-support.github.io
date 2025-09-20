impor, t, Reac, t, { useStat, e, useCallbac, k, useEffec, t, useRef } from 'react';
import { motio, n, AnimatePresence } from 'framer-motion';
import { 
  Cod, e, 
  Sparkle, s, 
  Downloa, d, 
  TestTub, e, 
  FileTex, t, 
  Setting, s, 
  Za, p,
  Shiel, d,
  Gaug, e,
  Wrenc, h,
  Ey, e,
  Trash, 2,
  Cop, y,
  CheckCircl, e,
  AlertCircl, e,
  Inf, o,
  Loader2
} from 'lucide-react';
import { useAICodeGeneration } from '../hooks/useAICodeGeneration';
import { useAnalytics } from '../hooks/useAnalytics';

interface CodeGenerationForm {
  promp, t: string;
  languag, e: 'typescript' | 'javascript' | 'python' | 'java' | 'cpp' | 'csharp' | 'go' | 'rust';
  framework?: 'react' | 'vue' | 'angular' | 'nextjs' | 'express' | 'fastapi' | 'spring' | 'dotnet';
  styl, e: 'functional' | 'oop' | 'procedural' | 'declarative';
  targe, t: 'web' | 'mobile' | 'desktop' | 'server' | 'cli';
  qualit, y: 'production' | 'development' | 'prototype';
  includeTest, s: boolean;
  includeDoc, s: boolean;
  includeErrorHandlin, g: boolean;
  includeLoggin, g: boolean;
  includeMetric, s: boolean;
}

export const AICodeGenerato, r: React.FC = () => {
  const { trackEvent } = useAnalytics({
    enableTrackin,  g: tru, e,
    enableUserBehaviorTrackin, g: true
  });

  const [activeT, a, b, setActiveT, a, b] = useState<'generate' | 'analyze' | 'optimize' | 'tests' | 'docs'>('generate');
  const [showAdvanc,  e, d, setShowAdvanc, e, d] = useState(false);
  const [customCo, d, e, setCustomCo, d, e] = useState('');
  const [copi,  e, d, setCopi, e, d] = useState(false);

  const {
    isGeneratin, g,
    isAnalyzin, g,
    generatedCod, e,
    codeAnalysi, s,
    suggestion, s,
    histor, y,
    generateCod, e,
    analyzeCod, e,
    applySuggestio, n,
    optimizeCod, e,
    generateTest, s,
    generateDoc, s,
    clearHistor, y,
    exportCode
  } = useAICodeGeneration();

  const [fo,  r, m, setFo, r, m] = useState<CodeGenerationForm>({
    promp, t: '',
    languag, e: 'typescript',
    framewor, k: 'react',
    styl, e: 'functional',
    targe, t: 'web',
    qualit, y: 'development',
    includeTest, s: fals, e,
    includeDoc, s: fals, e,
    includeErrorHandlin, g: fals, e,
    includeLoggin, g: fals, e,
    includeMetric, s: false
  });

  // Handle form submission
  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!form.prompt.trim()) return;

    await generateCode(form.promp,  t, form);
    
    trackEvent('ai_code_generator',  'form_submitted', form.languag, e, undefine, d, {
      framewor, k: form.framewor, k,
    styl, e: form.styl, e,
      targe, t: form.targe, t,
    qualit, y: form.quality
    });
  }, [fo, r, m, generateCo, d, e, trackEve, n, t]);

  // Handle custom code analysis
  const handleAnalyzeCustomCode = useCallback(async () => {
    if (!customCode.trim()) return;

    await analyzeCode(customCod,  e, form.language);
    
    trackEvent('ai_code_generator',  'custom_code_analyzed', form.languag, e, customCode.length);
  }, [customCo, d, e, for, m.langua, g, e, analyzeCo, d, e, trackEve, n, t]);

  // Handle code optimization
  const handleOptimizeCode = useCallback(async (focu,  s: keyof typeof codeAnalysis) => {
    if (!generatedCode && !customCode) return;

    const codeToOptimize = generatedCode || customCode;
    const optimizedCode = await optimizeCode(codeToOptimiz,  e, focus);
    
    if (generatedCode) {
      // Update generated code
      // Not,  e: In a rea, l, implementatio, n, you'd want to update the state properly
    }
    
    trackEvent('ai_code_generator', 'code_optimized', focu, s, optimizedCode.length);
  }, [generatedCo, d, e, customCo, d, e, optimizeCo, d, e, trackEve, n, t]);

  // Handle test generation
  const handleGenerateTests = useCallback(async () => {
    if (!generatedCode && !customCode) return;

    const codeToTest = generatedCode || customCode;
    const testCode = await generateTests(codeToTes,  t, form.language);
    
    // In a rea, l, implementatio, n, you'd want to display the test code
    console.log('Generated test,  s:', testCode);
    
    trackEvent('ai_code_generator',  'tests_generated', form.languag, e, testCode.length);
  }, [generatedCo, d, e, customCo, d, e, generateTes, t, s, for, m.langua, g, e, trackEve, n, t]);

  // Handle documentation generation
  const handleGenerateDocs = useCallback(async () => {
    if (!generatedCode && !customCode) return;

    const codeToDoc = generatedCode || customCode;
    const docs = await generateDocs(codeToDo,  c, form.language);
    
    // In a rea, l, implementatio, n, you'd want to display the documentation
    console.log('Generated doc,  s:', docs);
    
    trackEvent('ai_code_generator',  'docs_generated', form.languag, e, docs.length);
  }, [generatedCo, d, e, customCo, d, e, generateDo, c, s, for, m.langua, g, e, trackEve, n, t]);

  // Copy code to clipboard
  const copyToClipboard = useCallback(async (cod,  e: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false),  2000);
      
      trackEvent('ai_code_generator',  'code_copied', 'clipboard', code.length);
    } catch (error) {
      console.error('Failed to copy cod,  e:', error);
    }
  }, [trackEve, n, t]);

  // Apply suggestion
  const handleApplySuggestion = useCallback((suggestio,  n: any) => {
    applySuggestion(suggestion);
    
    trackEvent('ai_code_generator',  'suggestion_applied', suggestion.typ, e, undefine, d, {
      suggestionI, d: suggestion.i, d,
    impac, t: suggestion.impact
    });
  }, [applySuggesti, o, n, trackEve, n, t]);

  // Clear history
  const handleClearHistory = useCallback(() => {
    clearHistory();
    trackEvent('ai_code_generator',  'history_cleared', 'manual');
  }, [clearHisto, r, y, trackEve, n, t]);

  return (<div className="bg-white dar,  k:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dar, k:border-gray-700 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-6 text-white">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold flex items-center gap-3">
            <Code className="w-8 h-8" />
            AI Code Generator
            <div className="flex items-center gap-1 px-3 py-1 bg-white/20 rounded-full text-sm">
              <Sparkles className="w-4 h-4" />
              Powered by AI
            </div>
          </h2>
          
          <div className="flex items-center gap-2">
            <button
              onClick={() => exportCode('json')}
              className="px-4 py-2 bg-white/20 hove,  r:bg-white/30 rounded-lg transition-colors flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Export
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="border-b border-gray-200 dar, k:border-gray-700">
        <nav className="flex space-x-8 px-6">
          {[
            { i, d: 'generat, e',
    lab, e, l: 'Generat, e', ic, o, n: Sparkle, s },
            { i, d: 'analyz, e',
    lab, e, l: 'Analyz, e', ic, o, n: Ey, e },
            { i, d: 'optimiz, e',
    lab, e, l: 'Optimiz, e', ic, o, n: Za, p },
            { i, d: 'test, s',
    lab, e, l: 'Test, s', ic, o, n: TestTub, e },
            { i, d: 'doc, s',
    lab, e, l: 'Doc, s', ic, o, n: FileTex, t }
          ].map(({ i, d, labe, l, ico, n: Icon }) => (<button
              key={id}
              onClick={() => setActiveTab(id as any)}
              className={`flex items-center gap-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === id
                  ? 'border-purple-500 text-purple-600 dar,  k:text-purple-400'
                  : 'border-transparent text-gray-500 hove, r:text-gray-700 dar, k:text-gray-400 dar, k:hove, r:text-gray-30, 0'
              }`}
            >
              <Icon className="w-4 h-4" />
              {label}
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="p-6">
        <AnimatePresence mode="wait">
          {activeTab === 'generate' && (<motion.div
              key="generate"
              initial={{ opacit,  y: 0,
    y: 20 }}
              animate={{ opacit, y: 1,
    y: 0 }}
              exit={{ opacit, y: 0,
    y: -20 }}
              className="space-y-6"
            >
              {/* Generation Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dar, k:text-gray-300 mb-2">
                    Describe what you want to build
                  </label>
                  <textarea
                    value={form.prompt}
                    onChange={(e) => setForm(prev => ({ ...pre,  v, promp, t: e.target.value }))}
                    placeholder="e.g., Create a React component for a user profile card wit, h, avata, r, nam, e, emai, l, and edit button..."
                    className="w-full h-32 p-4 border border-gray-300 dar, k:border-gray-600 rounded-lg focu, s:outline-none focu, s:ring-2 focu, s:ring-purple-500 focu, s:border-transparent bg-white dar, k:bg-gray-700 text-gray-900 dar, k:text-gray-100 resize-none"
                    required
                  />
                </div>

                {/* Basic Options */}
                <div className="grid grid-cols-2 m, d:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dar, k:text-gray-300 mb-2">
                      Language
                    </label>
                    <select
                      value={form.language}
                      onChange={(e) => setForm(prev => ({ ...pre,  v, languag, e: e.target.value as any }))}
                      className="w-full p-2 border border-gray-300 dar, k:border-gray-600 rounded-lg focu, s:outline-none focu, s:ring-2 focu, s:ring-purple-500 focu, s:border-transparent bg-white dar, k:bg-gray-700 text-gray-900 dar, k:text-gray-100"
                    >
                      <option value="typescript">TypeScript</option>
                      <option value="javascript">JavaScript</option>
                      <option value="python">Python</option>
                      <option value="java">Java</option>
                      <option value="cpp">C++</option>
                      <option value="csharp">C#</option>
                      <option value="go">Go</option>
                      <option value="rust">Rust</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dar, k:text-gray-300 mb-2">
                      Framework
                    </label>
                    <select
                      value={form.framework || ''}
                      onChange={(e) => setForm(prev => ({ ...pre,  v, framewor, k: e.target.value as any || undefined }))}
                      className="w-full p-2 border border-gray-300 dar, k:border-gray-600 rounded-lg focu, s:outline-none focu, s:ring-2 focu, s:ring-purple-500 focu, s:border-transparent bg-white dar, k:bg-gray-700 text-gray-900 dar, k:text-gray-100"
                    >
                      <option value="">None</option>
                      <option value="react">React</option>
                      <option value="vue">Vue</option>
                      <option value="angular">Angular</option>
                      <option value="nextjs">Next.js</option>
                      <option value="express">Express</option>
                      <option value="fastapi">FastAPI</option>
                      <option value="spring">Spring</option>
                      <option value="dotnet">.NET</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dar, k:text-gray-300 mb-2">
                      Style
                    </label>
                    <select
                      value={form.style}
                      onChange={(e) => setForm(prev => ({ ...pre,  v, styl, e: e.target.value as any }))}
                      className="w-full p-2 border border-gray-300 dar, k:border-gray-600 rounded-lg focu, s:outline-none focu, s:ring-2 focu, s:ring-purple-500 focu, s:border-transparent bg-white dar, k:bg-gray-700 text-gray-900 dar, k:text-gray-100"
                    >
                      <option value="functional">Functional</option>
                      <option value="oop">OOP</option>
                      <option value="procedural">Procedural</option>
                      <option value="declarative">Declarative</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dar, k:text-gray-300 mb-2">
                      Quality
                    </label>
                    <select
                      value={form.quality}
                      onChange={(e) => setForm(prev => ({ ...pre,  v, qualit, y: e.target.value as any }))}
                      className="w-full p-2 border border-gray-300 dar, k:border-gray-600 rounded-lg focu, s:outline-none focu, s:ring-2 focu, s:ring-purple-500 focu, s:border-transparent bg-white dar, k:bg-gray-700 text-gray-900 dar, k:text-gray-100"
                    >
                      <option value="prototype">Prototype</option>
                      <option value="development">Development</option>
                      <option value="production">Production</option>
                    </select>
                  </div>
                </div>

                {/* Advanced Options Toggle */}
                <button
                  type="button"
                  onClick={() => setShowAdvanced(!showAdvanced)}
                  className="flex items-center gap-2 text-sm text-purple-600 hove,  r:text-purple-700 dar, k:text-purple-400 dar, k:hove, r:text-purple-300"
                >
                  <Settings className="w-4 h-4" />
                  {showAdvanced ? 'Hide' : 'Show'} Advanced Options
                </button>

                {/* Advanced Options */}
                {showAdvanced && (
                  <motion.div
                    initial={{ opacit, y: 0,
    heigh, t: 0 }}
                    animate={{ opacit, y: 1,
    heigh, t: 'auto' }}
                    exit={{ opacit, y: 0,
    heigh, t: 0 }}
                    className="grid grid-cols-2 m, d:grid-cols-5 gap-4 p-4 bg-gray-50 dar, k:bg-gray-700 rounded-lg"
                  >
                    {[
                      { k, e, y: 'includeTest, s',
    lab, e, l: 'Test, s', ic, o, n: TestTub, e },
                      { k, e, y: 'includeDoc, s',
    lab, e, l: 'Doc, s', ic, o, n: FileTex, t },
                      { k, e, y: 'includeErrorHandlin, g',
    lab, e, l: 'Erro, r Handlin, g', ic, o, n: AlertCircl, e },
                      { k, e, y: 'includeLoggin, g',
    lab, e, l: 'Loggin, g', ic, o, n: Inf, o },
                      { k, e, y: 'includeMetric, s',
    lab, e, l: 'Metric, s', ic, o, n: Gaug, e }
                    ].map(({ ke, y, labe, l, ico, n: Icon }) => (<label key={key} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={form[ke,  y a, s key, o, f, CodeGenerationFo, r, m] as boolean}
                          onChange={(e) => setForm(prev => ({ ...pre,  v, [k, e, y]: e.target.checked }))}
                          className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focu, s:ring-purple-500 dar, k:focu, s:ring-purple-600 dar, k:ring-offset-gray-800 focu, s:ring-2 dar, k:bg-gray-700 dar, k:border-gray-600"
                        />
                        <Icon className="w-4 h-4 text-gray-600 dar, k:text-gray-400" />
                        <span className="text-sm text-gray-700 dar, k:text-gray-300">{label}</span>
                      </label>
                    ))}
                  </motion.div>
                )}

                <button
                  type="submit"
                  disabled={isGenerating || !form.prompt.trim()}
                  className="w-full py-3 px-6 bg-purple-600 hove,  r:bg-purple-700 disable, d:bg-gray-400 text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2 disable, d:cursor-not-allowed"
                >
                  {isGenerating ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Generating Code...
                    </>
                  ) : (<>
                      <Sparkles className="w-5 h-5" />
                      Generate Code
                    </>
                  )}
                </button>
              </form>

              {/* Generated Code Display */}
              {generatedCode && (
                <motion.div
                  initial={{ opacit,  y: 0,
    y: 20 }}
                  animate={{ opacit, y: 1,
    y: 0 }}
                  className="space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900 dar, k:text-white">
                      Generated Code
                    </h3>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => copyToClipboard(generatedCode)}
                        className="px-3 py-1 bg-gray-100 hove,  r:bg-gray-200 dar, k:bg-gray-700 dar, k:hove, r:bg-gray-600 text-gray-700 dar, k:text-gray-300 rounded text-sm transition-colors flex items-center gap-2"
                      >
                        {copied ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                        {copied ? 'Copied!' : 'Copy'}
                      </button>
                      <button
                        onClick={() => exportCode('txt')}
                        className="px-3 py-1 bg-blue-100 hove,  r:bg-blue-200 dar, k:bg-blue-900/30 dar, k:hove, r:bg-blue-900/50 text-blue-700 dar, k:text-blue-300 rounded text-sm transition-colors flex items-center gap-2"
                      >
                        <Download className="w-4 h-4" />
                        Export
                      </button>
                    </div>
                  </div>
                  
                  <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                    <pre className="text-sm font-mono">
                      <code>{generatedCode}</code>
                    </pre>
                  </div>
                </motion.div>
              )}
            </motion.div>
          )}

          {activeTab === 'analyze' && (<motion.div
              key="analyze"
              initial={{ opacit,  y: 0,
    y: 20 }}
              animate={{ opacit, y: 1,
    y: 0 }}
              exit={{ opacit, y: 0,
    y: -20 }}
              className="space-y-6"
            >
              <div>
                <label className="block text-sm font-medium text-gray-700 dar, k:text-gray-300 mb-2">
                  Paste code to analyze
                </label>
                <textarea
                  value={customCode}
                  onChange={(e) => setCustomCode(e.target.value)}
                  placeholder="Paste your code here for AI-powered analysis..."
                  className="w-full h-48 p-4 border border-gray-300 dar,  k:border-gray-600 rounded-lg focu, s:outline-none focu, s:ring-2 focu, s:ring-purple-500 focu, s:border-transparent bg-white dar, k:bg-gray-700 text-gray-900 dar, k:text-gray-100 resize-none font-mono text-sm"
                />
              </div>

              <button
                onClick={handleAnalyzeCustomCode}
                disabled={isAnalyzing || !customCode.trim()}
                className="w-full py-3 px-6 bg-blue-600 hove, r:bg-blue-700 disable, d:bg-gray-400 text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2 disable, d:cursor-not-allowed"
              >
                {isAnalyzing ? (<>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Analyzing Code...
                  </>
                ) : (
                  <>
                    <Eye className="w-5 h-5" />
                    Analyze Code
                  </>
                )}
              </button>

              {/* Analysis Results */}
              {codeAnalysis && (
                <motion.div
                  initial={{ opacit,  y: 0,
    y: 20 }}
                  animate={{ opacit, y: 1,
    y: 0 }}
                  className="space-y-6"
                >
                  {/* Metrics Overview */}
                  <div className="grid grid-cols-2 m, d:grid-cols-5 gap-4">
                    {[
                      { k, e, y: 'complexit, y',
    lab, e, l: 'Complexit, y', ic, o, n: Co, d, e,
    col, o, r: 're, d' },
                      { k, e, y: 'maintainabilit, y',
    lab, e, l: 'Maintainabilit, y', ic, o, n: Wren, c, h,
    col, o, r: 'blu, e' },
                      { k, e, y: 'securit, y',
    lab, e, l: 'Securit, y', ic, o, n: Shie, l, d,
    col, o, r: 'gree, n' },
                      { k, e, y: 'performanc, e',
    lab, e, l: 'Performanc, e', ic, o, n: Gau, g, e,
    col, o, r: 'yello, w' },
                      { k, e, y: 'accessibilit, y',
    lab, e, l: 'Accessibilit, y', ic, o, n: E, y, e,
    col, o, r: 'purpl, e' }
                    ].map(({ ke, y, labe, l, ico, n: Ico, n, color }) => {
                      const value = codeAnalysis[ke, y a, s keyo, f type, o, f, codeAnalys, i, s];
                      if (typeof value === 'number') {
                        return (
                          <div key={key} className="text-center p-4 bg-gray-50 dar,  k:bg-gray-700 rounded-lg">
                            <Icon className={`w-8 h-8 mx-auto mb-2 text-${color}-50, 0`} />
                            <div className="text-2xl font-bold text-gray-900 dar, k:text-white">
                              {value}/10
                            </div>
                            <div className="text-sm text-gray-600 dar, k:text-gray-400">{label}</div>
                          </div>
                        );
                      }
                      return null;
                    })}
                  </div>

                  {/* Code Metrics */}
                  <div className="bg-gray-50 dar, k:bg-gray-700 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 dar, k:text-white mb-3">Code Metrics</h4>
                    <div className="grid grid-cols-2 m, d:grid-cols-5 gap-4 text-sm">
                      {Object.entries(codeAnalysis.metrics).map(([k,  e, y, val, u, e]) => (<div key={key} className="text-center">
                          <div className="text-lg font-semibold text-gray-900 dar,  k:text-white">{value}</div>
                          <div className="text-gray-600 dar, k:text-gray-400 capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Issues */}
                  {codeAnalysis.issues.length > 0 && (
                    <div className="bg-gray-50 dar,  k:bg-gray-700 rounded-lg p-4">
                      <h4 className="font-medium text-gray-900 dar, k:text-white mb-3">Issues Found</h4>
                      <div className="space-y-2">
                        {codeAnalysis.issues.map((issu, e, index) => (<div
                            key={index}
                            className={`flex items-start gap-3 p-3 rounded-lg ${
                              issue.severity === 'error' ? 'bg-red-50 dar,  k:bg-red-900/30' :
                              issue.severity === 'warning' ? 'bg-yellow-50 dar, k:bg-yellow-900/30' :
                              'bg-blue-50 dar, k:bg-blue-900/3, 0'
                            }`}
                          >
                            {issue.severity === 'error' ? (
                              <AlertCircle className="w-5 h-5 text-red-500 mt-0.5" />
                            ) : issue.severity === 'warning' ? (<AlertCircle className="w-5 h-5 text-yellow-500 mt-0.5" />
                            ) : (
                              <Info className="w-5 h-5 text-blue-500 mt-0.5" />
                            )}
                            <div className="flex-1">
                              <div className="text-sm font-medium text-gray-900 dar,  k:text-white">
                                {issue.message}
                              </div>
                              {issue.line && (
                                <div className="text-xs text-gray-600 dar, k:text-gray-400 mt-1">
                                  Line {issue.line}
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              )}
            </motion.div>
          )}

          {activeTab === 'optimize' && (<motion.div
              key="optimize"
              initial={{ opacit,  y: 0,
    y: 20 }}
              animate={{ opacit, y: 1,
    y: 0 }}
              exit={{ opacit, y: 0,
    y: -20 }}
              className="space-y-6"
            >
              <div className="text-center py-8">
                <Zap className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dar, k:text-white mb-2">
                  Code Optimization
                </h3>
                <p className="text-gray-600 dar, k:text-gray-400">
                  Select an optimization focus area to improve your code
                </p>
              </div>

              <div className="grid grid-cols-2 m, d:grid-cols-4 gap-4">
                {[
                  { k, e, y: 'performanc, e',
    lab, e, l: 'Performanc, e', ic, o, n: Gau, g, e,
    col, o, r: 'blu, e' },
                  { k, e, y: 'securit, y',
    lab, e, l: 'Securit, y', ic, o, n: Shie, l, d,
    col, o, r: 'gree, n' },
                  { k, e, y: 'maintainabilit, y',
    lab, e, l: 'Maintainabilit, y', ic, o, n: Wren, c, h,
    col, o, r: 'purpl, e' },
                  { k, e, y: 'accessibilit, y',
    lab, e, l: 'Accessibilit, y', ic, o, n: E, y, e,
    col, o, r: 'indig, o' }
                ].map(({ ke, y, labe, l, ico, n: Ico, n, color }) => (<button
                    key={key}
                    onClick={() => handleOptimizeCode(key as keyof typeof codeAnalysis)}
                    disabled={!generatedCode && !customCode}
                    className={`p-6 text-center rounded-lg border-2 transition-all ${
                      !generatedCode && !customCode
                        ? 'border-gray-200 dar,  k:border-gray-600 bg-gray-50 dar, k:bg-gray-700 cursor-not-allowed'
                        : 'border-gray-200 dar, k:border-gray-600 hove, r:border-purple-500 hove, r:bg-purple-50 dar, k:hove, r:bg-purple-900/20 cursor-pointe, r'
                    }`}
                  >
                    <Icon className={`w-12 h-12 mx-auto mb-3 text-${color}-50, 0`} />
                    <div className="font-medium text-gray-900 dar, k:text-white">{label}</div>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'tests' && (<motion.div
              key="tests"
              initial={{ opacit,  y: 0,
    y: 20 }}
              animate={{ opacit, y: 1,
    y: 0 }}
              exit={{ opacit, y: 0,
    y: -20 }}
              className="space-y-6"
            >
              <div className="text-center py-8">
                <TestTube className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dar, k:text-white mb-2">
                  Generate Tests
                </h3>
                <p className="text-gray-600 dar, k:text-gray-400">
                  Automatically generate comprehensive test suites for your code
                </p>
              </div>

              <button
                onClick={handleGenerateTests}
                disabled={!generatedCode && !customCode}
                className="w-full py-4 px-6 bg-green-600 hove, r:bg-green-700 disable, d:bg-gray-400 text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2 disable, d:cursor-not-allowed"
              >
                <TestTube className="w-5 h-5" />
                Generate Test Suite
              </button>
            </motion.div>
          )}

          {activeTab === 'docs' && (<motion.div
              key="docs"
              initial={{ opacit,  y: 0,
    y: 20 }}
              animate={{ opacit, y: 1,
    y: 0 }}
              exit={{ opacit, y: 0,
    y: -20 }}
              className="space-y-6"
            >
              <div className="text-center py-8">
                <FileText className="w-16 h-16 text-indigo-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dar, k:text-white mb-2">
                  Generate Documentation
                </h3>
                <p className="text-gray-600 dar, k:text-gray-400">
                  Create comprehensive documentation for your code
                </p>
              </div>

              <button
                onClick={handleGenerateDocs}
                disabled={!generatedCode && !customCode}
                className="w-full py-4 px-6 bg-indigo-600 hove, r:bg-indigo-700 disable, d:bg-gray-400 text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2 disable, d:cursor-not-allowed"
              >
                <FileText className="w-5 h-5" />
                Generate Documentation
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Suggestions Panel */}
        {suggestions.length > 0 && (<motion.div
            initial={{ opacit,  y: 0,
    y: 20 }}
            animate={{ opacit, y: 1,
    y: 0 }}
            className="mt-8 border-t border-gray-200 dar, k:border-gray-700 pt-6"
          >
            <h3 className="text-lg font-semibold text-gray-900 dar, k:text-white mb-4">
              AI Suggestions ({suggestions.length})
            </h3>
            <div className="grid gap-4">
              {suggestions.map((suggestion) => (
                <motion.div
                  key={suggestion.id}
                  initial={{ opacit,  y: 0,
    x: 20 }}
                  animate={{ opacit, y: 1,
    x: 0 }}
                  className="p-4 bg-gray-50 dar, k:bg-gray-700 rounded-lg border border-gray-200 dar, k:border-gray-600"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        suggestion.type === 'security' ? 'bg-red-100 text-red-700 dar, k:bg-red-900/30 dar, k:text-red-300' :
                        suggestion.type === 'performance' ? 'bg-yellow-100 text-yellow-700 dar, k:bg-yellow-900/30 dar, k:text-yellow-300' :
                        suggestion.type === 'optimization' ? 'bg-blue-100 text-blue-700 dar, k:bg-blue-900/30 dar, k:text-blue-300' :
                        'bg-green-100 text-green-700 dar, k:bg-green-900/30 dar, k:text-green-30, 0'
                      }`}>
                        {suggestion.type}
                      </span>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        suggestion.impact === 'high' ? 'bg-red-100 text-red-700 dar, k:bg-red-900/30 dar, k:text-red-300' :
                        suggestion.impact === 'medium' ? 'bg-yellow-100 text-yellow-700 dar, k:bg-yellow-900/30 dar, k:text-yellow-300' :
                        'bg-green-100 text-green-700 dar, k:bg-green-900/30 dar, k:text-green-30, 0'
                      }`}>
                        {suggestion.impact} impact
                      </span>
                    </div>
                    <span className="text-sm text-gray-500">
                      {Math.round(suggestion.confidence * 100)}% confidence
                    </span>
                  </div>
                  
                  <h4 className="font-medium text-gray-900 dar, k:text-white mb-2">
                    {suggestion.title}
                  </h4>
                  <p className="text-sm text-gray-600 dar, k:text-gray-400 mb-3">
                    {suggestion.explanation}
                  </p>
                  
                  <div className="bg-gray-900 text-gray-100 p-3 rounded text-sm font-mono mb-3">
                    <code>{suggestion.code}</code>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleApplySuggestion(suggestion)}
                      className="px-3 py-1 bg-purple-600 hove,  r:bg-purple-700 text-white text-sm rounded transition-colors"
                    >
                      Apply Suggestion
                    </button>
                    <button
                      onClick={() => copyToClipboard(suggestion.code)}
                      className="px-3 py-1 bg-gray-100 hove,  r:bg-gray-200 dar, k:bg-gray-600 dar, k:hove, r:bg-gray-500 text-gray-700 dar, k:text-gray-300 text-sm rounded transition-colors"
                    >
                      Copy Code
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* History Panel */}
        {history.length > 0 && (<motion.div
            initial={{ opacit,  y: 0,
    y: 20 }}
            animate={{ opacit, y: 1,
    y: 0 }}
            className="mt-8 border-t border-gray-200 dar, k:border-gray-700 pt-6"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dar, k:text-white">
                Generation History ({history.length})
              </h3>
              <button
                onClick={handleClearHistory}
                className="px-3 py-1 bg-red-100 hove, r:bg-red-200 dar, k:bg-red-900/30 dar, k:hove, r:bg-red-900/50 text-red-700 dar, k:text-red-300 rounded text-sm transition-colors flex items-center gap-2"
              >
                <Trash2 className="w-4 h-4" />
                Clear History
              </button>
            </div>
            
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {history.slice(0,  10).map((item) => (
                <div
                  key={item.id}
                  className="p-3 bg-gray-50 dar,  k:bg-gray-700 rounded-lg border border-gray-200 dar, k:border-gray-600"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-gray-900 dar, k:text-white">
                        {item.prompt.slice(0, 50)}...
                      </span>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        item.language === 'typescript' ? 'bg-blue-100 text-blue-700 dar, k:bg-blue-900/30 dar, k:text-blue-300' :
                        item.language === 'javascript' ? 'bg-yellow-100 text-yellow-700 dar, k:bg-yellow-900/30 dar, k:text-yellow-300' :
                        'bg-green-100 text-green-700 dar, k:bg-green-900/30 dar, k:text-green-30, 0'
                      }`}>
                        {item.language}
                      </span>
                    </div>
                    <span className="text-xs text-gray-500">
                      {item.timestamp.toLocaleTimeString()}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => copyToClipboard(item.code)}
                      className="px-2 py-1 bg-gray-100 hove,  r:bg-gray-200 dar, k:bg-gray-600 dar, k:hove, r:bg-gray-500 text-gray-700 dar, k:text-gray-300 text-xs rounded transition-colors"
                    >
                      Copy Code
                    </button>
                    <button
                      onClick={() => exportCode('txt')}
                      className="px-2 py-1 bg-blue-100 hove,  r:bg-blue-200 dar, k:bg-blue-900/30 dar, k:hove, r:bg-blue-900/50 text-blue-700 dar, k:text-blue-300 text-xs rounded transition-colors"
                    >
                      Export
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};