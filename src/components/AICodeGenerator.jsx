import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Sparkles, Download, Eye, Zap, TestTube, FileText, Copy, Check } from 'lucide-react';

const AICodeGenerator = () => {
  const [activeTab, setActiveTab] = useState('generate');
  const [generatedCode, setGeneratedCode] = useState('');
  const [customCode, setCustomCode] = useState('');
  const [copied, setCopied] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  // Simulate code generation
  const generateCode = useCallback(async (prompt, language) => {
    setIsGenerating(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const sampleCode = `// Generated ${language} code for: ${prompt}
function processData(data) {
  return data.map(item => ({
    id: item.id,
    name: item.name.toUpperCase(),
    processed: true
  }));
}

export default processData;`;
    
    setGeneratedCode(sampleCode);
    setIsGenerating(false);
  }, []);

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

  // Handle form submission
  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const prompt = formData.get('prompt');
    const language = formData.get('language');
    
    if (prompt) {
      await generateCode(prompt, language);
    }
  }, [generateCode]);

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
              onClick={() => copyToClipboard(generatedCode || customCode)} 
              className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors flex items-center gap-2"
            >
              {copied ? <Check className="w-4 h-4"/> : <Copy className="w-4 h-4"/>}
              {copied ? 'Copied!' : 'Copy'}
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
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Describe what you want to build
                  </label>
                  <textarea
                    name="prompt"
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white"
                    placeholder="e.g., Create a function that processes user data and returns formatted results..."
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Programming Language
                  </label>
                  <select
                    name="language"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white"
                    defaultValue="javascript"
                  >
                    <option value="javascript">JavaScript</option>
                    <option value="typescript">TypeScript</option>
                    <option value="python">Python</option>
                    <option value="java">Java</option>
                    <option value="cpp">C++</option>
                    <option value="csharp">C#</option>
                    <option value="php">PHP</option>
                    <option value="ruby">Ruby</option>
                    <option value="go">Go</option>
                    <option value="rust">Rust</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={isGenerating}
                  className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isGenerating ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      Generating...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4"/>
                      Generate Code
                    </>
                  )}
                </button>
              </form>

              {/* Generated Code Display */}
              {generatedCode && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Generated Code
                    </h3>
                    <button
                      onClick={() => copyToClipboard(generatedCode)}
                      className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded hover:bg-gray-200 dark:hover:bg-gray-600 flex items-center gap-1"
                    >
                      {copied ? <Check className="w-3 h-3"/> : <Copy className="w-3 h-3"/>}
                      {copied ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                  <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
                    <code>{generatedCode}</code>
                  </pre>
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
              <Eye className="w-16 h-16 text-gray-400 mx-auto mb-4"/>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
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
              <Zap className="w-16 h-16 text-gray-400 mx-auto mb-4"/>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
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
              <TestTube className="w-16 h-16 text-gray-400 mx-auto mb-4"/>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
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
              <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4"/>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
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

export default AICodeGenerator;
