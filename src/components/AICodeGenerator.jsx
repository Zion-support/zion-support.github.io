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
  CheckCircle
} from 'lucide-react';

/**
 * @typedef {Object} CodeForm
 * @property {string} language
 * @property {string} description
 * @property {string} requirements
 */

export const AICodeGenerator = () => {
  const [activeTab, setActiveTab] = useState('generate');
  const [form, setForm] = useState({
    language: 'javascript',
    description: '',
    requirements: ''
  });
  const [generatedCode, setGeneratedCode] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);

  // Generate code
  const handleGenerateCode = useCallback(async () => {
    if (!form.description.trim()) return;
    
    setIsGenerating(true);
    
    // Simulate AI code generation
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const sampleCode = `// Generated ${form.language} code
// Description: ${form.description}
// Requirements: ${form.requirements}

function ${form.description.toLowerCase().replace(/\s+/g, '_')}() {
  // Implementation here
  console.log('Hello from generated code!');
}

export default ${form.description.toLowerCase().replace(/\s+/g, '_')};`;
    
    setGeneratedCode(sampleCode);
    setIsGenerating(false);
  }, [form]);

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
    const dataStr = JSON.stringify({ code: generatedCode, metadata: form }, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `generated-code.${format}`;
    link.click();
    URL.revokeObjectURL(url);
  }, [generatedCode, form]);

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
              {/* Code Generation Form */}
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
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                    rows={2}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>

                <button
                  onClick={handleGenerateCode}
                  disabled={!form.description.trim() || isGenerating}
                  className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isGenerating ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Generating Code...
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
                    <button
                      onClick={() => copyToClipboard(generatedCode)}
                      className="flex items-center gap-2 px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    >
                      {copied ? (
                        <>
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          Copy
                        </>
                      )}
                    </button>
                  </div>
                  
                  <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                    <pre className="text-sm">
                      <code>{generatedCode}</code>
                    </pre>
                  </div>
                </div>
              )}
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
                Optimize your code for better performance and efficiency.
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
                Generate comprehensive tests for your code.
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
                Generate documentation for your code.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
