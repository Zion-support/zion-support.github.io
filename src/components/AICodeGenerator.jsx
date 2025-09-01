import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code, 
  Sparkles, 
  Eye, 
  Zap, 
  TestTube, 
  FileText, 
  Download, 
  Copy, 
  Check,
  AlertCircle,
  Lightbulb,
  Settings
} from 'lucide-react';

const AICodeGenerator = () => {
  const [activeTab, setActiveTab] = useState('generate');
  const [generatedCode, setGeneratedCode] = useState('');
  const [customCode, setCustomCode] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({
    language: 'javascript',
    description: '',
    requirements: ''
  });

  // Simulate code generation
  const generateCode = useCallback(async (description, language) => {
    setIsGenerating(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const sampleCode = `// Generated ${language} code for: ${description}
function processData(data) {
  return data.map(item => ({
    ...item,
    processed: true,
    timestamp: new Date().toISOString()
  }));
}

// Example usage
const result = processData([{ id: 1, name: 'Test' }]);
console.log(result);`;
    
    setGeneratedCode(sampleCode);
    setIsGenerating(false);
  }, []);

  // Handle code generation
  const handleGenerateCode = useCallback(async () => {
    if (!form.description.trim()) return;
    await generateCode(form.description, form.language);
  }, [form.description, form.language, generateCode]);

  // Copy code to clipboard
  const copyToClipboard = useCallback(async (code) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy code:', error);
    }
  }, []);

  // Export code
  const exportCode = useCallback((format) => {
    const codeToExport = generatedCode || customCode;
    if (!codeToExport) return;

    const blob = new Blob([codeToExport], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `generated-code.${format === 'json' ? 'json' : form.language}`;
    a.click();
    URL.revokeObjectURL(url);
  }, [generatedCode, customCode, form.language]);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-6 text-white">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold flex items-center gap-3">
            <Code className="w-8 h-8"/>
            AI Code Generator
            <div className="flex items-center gap-1 px-3 py-1 bg-white/20 rounded-full text-sm">
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
      <div className="border-b border-gray-200 dark:border-gray-700">
        <nav className="flex space-x-8 px-6">
          {[
            { id: 'generate', label: 'Generate', icon: Sparkles },
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
      <div className="p-6">
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

                <button
                  onClick={handleGenerateCode}
                  disabled={isGenerating || !form.description.trim()}
                  className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 px-4 rounded-lg font-medium hover:from-purple-600 hover:to-blue-600 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isGenerating ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Generating...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-5 h-5" />
                      Generate Code
                    </>
                  )}
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

              {/* Custom Code Input */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Or Paste Your Own Code
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
