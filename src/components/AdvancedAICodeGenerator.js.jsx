import React, { useState, useEffect } from 'react';
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
  Settings,
  Search,
  Filter,
  Star,
  Clock,
  Users
} from 'lucide-react';

const mockCodeSnippets = [
  {
    id: '1',
    title: 'Custom React Hook for API Calls',
    description: 'A reusable hook for making API calls with loading states and error handling',
    language: 'typescript',
    code: `import { useState, useEffect } from 'react';

interface UseApiOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  body?: any;
  headers?: Record<string, string>;
}

interface UseApiResult<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
  execute: () => Promise<void>;
}

export function useApi<T>(url: string, options: UseApiOptions = {}): UseApiResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const execute = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(url, {
        method: options.method || 'GET',
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
        body: options.body ? JSON.stringify(options.body) : undefined,
      });

      if (!response.ok) {
        throw new Error(\`HTTP error! status: \${response.status}\`);
      }

      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (options.method === 'GET') {
      execute();
    }
  }, [url]);

  return { data, loading, error, execute };
}`,
    tags: ['react', 'hooks', 'api', 'typescript'],
    complexity: 'medium',
    rating: 4.8,
    usageCount: 1250,
    createdAt: '2024-01-15'
  },
  {
    id: '2',
    title: 'Tailwind CSS Animation Utilities',
    description: 'Custom Tailwind utilities for advanced animations and transitions',
    language: 'css',
    code: `@layer utilities {
  .animate-float {
    animation: float 3s ease-in-out infinite;
  }
  
  .animate-glow {
    animation: glow 2s ease-in-out infinite alternate;
  }
  
  .animate-shimmer {

    background: linear-gradient()
      90deg,
      transparent,
      rgba(255, 255, 255, 0.4),
      transparent
    );
    background-size: 200% 100%;
    animation: shimmer 1.5s infinite;
  }
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

@keyframes glow {
  from { box-shadow: 0 0 20px rgba(59, 130, 246, 0.5); }
  to { box-shadow: 0 0 30px rgba(59, 130, 246, 0.8); }
}

@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}`,
    tags: ['css', 'tailwind', 'animations', 'utilities'],
    complexity: 'low',
    rating: 4.6,
    usageCount: 890,
    createdAt: '2024-01-10'
  },
  {
    id: '3',
    title: 'Advanced Form Validation',
    description: 'Comprehensive form validation with custom rules and error handling',
    language: 'javascript',
    code: `class FormValidator {
  constructor(form, options = {}) {

    this.form = form;
    this.options = {
      validateOnBlur: true,
      validateOnSubmit: true,
      showErrors: true,
      ...options
    };
    
    this.rules = new Map();
    this.errors = new Map();
    this.init();
  }

  addRule(field, rule) {
    if (!this.rules.has(field)) {
      this.rules.set(field, []);
    }
    this.rules.get(field).push(rule);
  }

  validateField(field) {

    const value = this.form[field]?.value;
    const fieldErrors = [];

    for (const rule of this.rules.get(field) || []) {
      const result = rule(value, this.form);
      if (result !== true) {
        fieldErrors.push(result);
      }
    }

    this.errors.set(field, fieldErrors);
    this.updateFieldUI(field);
    return fieldErrors.length === 0;
  }

  validateForm () {
    let isValid = true;
    for (const field of this.rules.keys()) {
      if (!this.validateField(field)) {
        isValid = false;
      }
    }
    return isValid;
  }

  updateFieldUI(field) {
    const fieldElement = this.form[field];
    const errors = this.errors.get(field) || [];
    
    if(errors.length > 0) {

      fieldElement.classList.add('error');
      if (this.options.showErrors) {
        this.showFieldErrors(field, errors);
      }
    } else {
      fieldElement.classList.remove('error');
      this.hideFieldErrors(field);
    }
  }

  showFieldErrors(field, errors) {
    let errorContainer = this.form.querySelector(\`[data-error-for="\${field}"]\`);
    if (!errorContainer) {
      errorContainer = document.createElement('div');
      errorContainer.setAttribute('data-error-for', field);
      errorContainer.className = 'field-errors';
      this.form[field].parentNode.appendChild(errorContainer);
    }
    
    errorContainer.innerHTML = errors.map(error => 
      \`<div class="error-message">\${error}</div>\`
    ).join('');
  }

  hideFieldErrors(field) {
    const errorContainer = this.form.querySelector(\`[data-error-for="\${field}"]\`);
    if (errorContainer) {
      errorContainer.remove();
    }
  }

  init () {
    if(this.options.validateOnBlur) {

      this.form.addEventListener('blur', (e) => {
        if (this.rules.has(e.target.name)) {
          this.validateField(e.target.name);
        }
      }, true);
    }

    if(this.options.validateOnSubmit) {

      this.form.addEventListener('submit', (e) => {
        if (!this.validateForm()) {
          e.preventDefault();
        }
      });
    }
  }
}`,
    tags: ['javascript', 'validation', 'forms', 'class'],
    complexity: 'high',
    rating: 4.9,
    usageCount: 2100,
    createdAt: '2024-01-12'
  }
];

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue} catch (error) {
      // // // // // console.error(\`Error reading localStorage key "\${key}":\`, error);
      return initialValue}
  });

  const sortedSnippets = [...filteredSnippets].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.rating - a.rating;
      case 'usageCount':
        return b.usageCount - a.usageCount;
      case 'createdAt':
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      case 'title':
        return a.title.localeCompare(b.title);
      default:
        return 0;
    }
  });

  const languages = ['all', 'typescript', 'javascript', 'css', 'html', 'python', 'java'];
  const sortOptions = [
    { value: 'rating', label: 'Rating' },
    { value: 'usageCount', label: 'Usage Count' },
    { value: 'createdAt', label: 'Date Created' },
    { value: 'title', label: 'Title' }
  ];

  const copyToClipboard = async (code) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore))} catch (error) {
      // // // // // console.error(\`Error setting localStorage key "\${key}":\`, error)}
  };

  return [storedValue, setValue] as const}`,
        language: 'typescript',
        confidence: 0.94,
        alternatives[
            'Alternative 1: With error boundaries',
            'Alternative 2: With event listeners',
            'Alternative 3: With custom serializer'
        ],
        timestamp: '2024-01-15T11:45:00Z'
    }
];
export function AdvancedAICodeGenerator() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [activeTab, setActiveTab] = useState('generator');
    const [selectedLanguage, setSelectedLanguage] = useState('all');
    const [selectedComplexity, setSelectedComplexity] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [aiPrompt, setAiPrompt] = useState('');
    const [generatedCode, setGeneratedCode] = useState('');
    const [isGenerating, setIsGenerating] = useState(false);
    const [codeSnippets, setCodeSnippets] = useState(mockCodeSnippets);
    const [codeAnalysis, setCodeAnalysis] = useState(mockCodeAnalysis);
    const [aiGenerations, setAiGenerations] = useState(mockAIGenerations);
    const [showSuggestions, setShowSuggestions] = useState(true);
    const containerRef = useRef(null);
    const getComplexityColor = (complexity) => {
        switch (complexity) {
            case 'low': return 'text-green-500';
            case 'medium': return 'text-yellow-500';
            case 'high': return 'text-red-500';
            default: return 'text-gray-500'}
    };
    const getQualityColor = (score) => {
        if (score >= 90)
            return 'text-green-500';
        if (score >= 80)
            return 'text-yellow-500';
        return 'text-red-500'};
    const generateCode = async () => {
        if (!aiPrompt.trim())
            return;
        setIsGenerating(true);
        // Simulate AI code generation
        setTimeout(() => {
            const newGeneration = {
                id: Date.now().toString(),
                prompt: aiPrompt,
                generatedCode: `// Generated code for: ${aiPrompt}\n\nfunction example() {\n  // // // // // console.log("Hello from AI!");\n  return "Generated code";\n}`,
                language: 'javascript',
                confidence: 0.87,
                alternatives[
                    'Alternative 1: Functional approach',
                    'Alternative 2: Class-based approach',
                    'Alternative 3: Async/await pattern'
                ],
                timestamp: new Date().toISOString()
            };
            setAiGenerations(prev => [newGeneration, ...prev]);
            setGeneratedCode(newGeneration.generatedCode);
            setIsGenerating(false)}, 2000)};
    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text)};
    if (!isOpen) {
        return (<button onClick={() => setIsOpen(true)} className="fixed bottom-4 right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-110 z-50">
        <Code className="w-6 h-6"/>
      </button>)}
    if (isMinimized) {
        return (<div className="fixed bottom-4 right-4 bg-white dark:bg-zion-slate border border-zion-slate-light rounded-lg shadow-2xl z-50">
        <div className="flex items-center justify-between p-3 border-b border-zion-slate-light">
          <div className="flex items-center space-x-2">
            <Code className="w-5 h-5 text-blue-600"/>
            <span className="text-sm font-medium">AI Code Generator</span>
          </div>
          <div className="flex items-center space-x-1">
            <button onClick={() => setIsMinimized(false)} className="p-1 hover:bg-zion-slate-light rounded">
              <Maximize2 className="w-4 h-4"/>
            </button>
            <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-zion-slate-light rounded">
              <X className="w-4 h-4"/>
            </button>
          </div>
        </div>
      </div>)}
    return (<div className={`fixed bg-white dark:bg-zion-slate border border-zion-slate-light rounded-lg shadow-2xl z-50 overflow-hidden transition-all duration-300 ${isFullscreen ? 'inset-4' : 'bottom-4 right-4 w-[1400px] h-[900px]'}`} ref={containerRef}>
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-6 text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Code className="w-8 h-8" />
            <div>
              <h2 className="text-2xl font-bold">Advanced AI Code Generator</h2>
              <p className="text-purple-100">Intelligent code generation and snippets</p>
            </div>
          </div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
          >
            {isExpanded ? <Settings className="w-5 h-5" /> : <Sparkles className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Controls */}
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Search */}
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search code snippets..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Language Filter */}
          <div className="sm:w-48">
            <select
              value={filterLanguage}
              onChange={(e) => setFilterLanguage(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              {languages.map(language => (
                <option key={language} value={language}>
                  {language === 'all' ? 'All Languages' : language.charAt(0).toUpperCase() + language.slice(1)}
                </option>
              ))}
            </select>
          </div>

          {/* Sort */}
          <div className="sm:w-48">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              {sortOptions.map(option => (
                <option key={option.value} value={option.value}>
                  Sort by {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Code Snippets List */}
      <div className="p-6">
        <div className="grid gap-6">
          {sortedSnippets.map((snippet) => (
            <div
              key={snippet.id}
              className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 border border-gray-200 dark:border-gray-600 hover:border-purple-300 dark:hover:border-purple-500 transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {snippet.title}
                    </h3>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      snippet.complexity === 'high' ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300' :
                      snippet.complexity === 'medium' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300' :
                      'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                    }`}>
                      {snippet.complexity}
                    </span>
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                      {snippet.language}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {snippet.description}
                  </p>
                </div>
                <button className="p-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors">
                  <Lightbulb className="w-4 h-4 text-gray-500" />
                </button>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                <div className="text-center p-3 bg-white dark:bg-gray-800 rounded-lg">
                  <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400 flex items-center justify-center gap-1">
                    <Star className="w-4 h-4" />
                    {snippet.rating}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Rating</div>
                </div>
                <div className="text-center p-3 bg-white dark:bg-gray-800 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 flex items-center justify-center gap-1">
                    <Users className="w-4 h-4" />
                    {snippet.usageCount}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Usage</div>
                </div>
                <div className="text-center p-3 bg-white dark:bg-gray-800 rounded-lg">
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                    {snippet.language.toUpperCase()}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Language</div>
                </div>
                <div className="text-center p-3 bg-white dark:bg-gray-800 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 flex items-center justify-center gap-1">
                    <Clock className="w-4 h-4" />
                    {new Date(snippet.createdAt).toLocaleDateString()}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Created</div>
                </div>
              </div>

              {/* Tags */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {snippet.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Code Preview */}
              <div className="mb-4">
                <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                  <pre className="text-sm">
                    <code>{snippet.code.substring(0, 200)}...</code>
                  </pre>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => copyToClipboard(snippet.code)}
                  className="flex items-center gap-2 px-3 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors text-sm"
                >
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  {copied ? 'Copied!' : 'Copy Code'}
                </button>
                <button
                  onClick={() => downloadCode(snippet)}
                  className="flex items-center gap-2 px-3 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors text-sm"
                >
                  <Download className="w-4 h-4" />
                  Download
                </button>
                <button
                  onClick={() => setSelectedSnippet(snippet)}
                  className="flex items-center gap-2 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm"
                >
                  <Eye className="w-4 h-4" />
                  View Full
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-zion-slate-light">
        <button onClick={() => setActiveTab('generator')} className={`px-6 py-3 text-sm font-medium transition-colors ${activeTab === 'generator'
            ? 'border-b-2 border-blue-600 text-blue-600'
            : 'text-gray-600 hover:text-gray-800'}`}>
          <Code className="w-4 h-4 inline mr-2"/>
          AI Generator
        </button>
        <button onClick={() => setActiveTab('snippets')} className={`px-6 py-3 text-sm font-medium transition-colors ${activeTab === 'snippets'
            ? 'border-b-2 border-blue-600 text-blue-600'
            : 'text-gray-600 hover:text-gray-800'}`}>
          <FileText className="w-4 h-4 inline mr-2"/>
          Code Snippets
        </button>
        <button onClick={() => setActiveTab('analysis')} className={`px-6 py-3 text-sm font-medium transition-colors ${activeTab === 'analysis'
            ? 'border-b-2 border-blue-600 text-blue-600'
            : 'text-gray-600 hover:text-gray-800'}`}>
          <BarChart3 className="w-4 h-4 inline mr-2"/>
          Code Analysis
        </button>
        <button onClick={() => setActiveTab('ai')} className={`px-6 py-3 text-sm font-medium transition-colors ${activeTab === 'ai'
            ? 'border-b-2 border-blue-600 text-blue-600'
            : 'text-gray-600 hover:text-gray-800'}`}>
          <Brain className="w-4 h-4 inline mr-2"/>
          AI Generations
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto p-6">
        {activeTab === 'generator' && (<div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
              <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-4">
                <Brain className="w-5 h-5 inline mr-2"/>
                AI-Powered Code Generation
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Describe what you want to build:
                  </label>
                  <textarea value={aiPrompt} onChange={(e) => setAiPrompt(e.target.value)} placeholder="e.g., Create a React hook for managing form state with validation..." className="w-full h-24 px-3 py-2 border border-zion-slate-light rounded-lg bg-white dark:bg-zion-slate text-sm resize-none"/>
                </div>
                <div className="flex items-center space-x-4">
                  <select className="px-3 py-2 border border-zion-slate-light rounded-lg bg-white dark:bg-zion-slate text-sm">
                    <option value="typescript">TypeScript</option>
                    <option value="javascript">JavaScript</option>
                    <option value="python">Python</option>
                    <option value="java">Java</option>
                  </select>
                  <button onClick={generateCode} disabled={isGenerating || !aiPrompt.trim()} className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center space-x-2">
                    {isGenerating ? (<React.Fragment>
                        <RefreshCw className="w-4 h-4 animate-spin"/>
                        <span>Generating...</span>
                      </React.Fragment>) : (<React.Fragment>
                        <Zap className="w-4 h-4"/>
                        <span>Generate Code</span>
                      </React.Fragment>)}
                  </button>
                </div>
              </div>
            </div>

            {generatedCode && (<div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    Generated Code
                  </h4>
                  <div className="flex items-center space-x-2">
                    <button onClick={() => copyToClipboard(generatedCode)} className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-200 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:bg-gray-800 rounded-lg transition-colors">
                      <Copy className="w-4 h-4"/>
                    </button>
                    <button className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-200 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:bg-gray-800 rounded-lg transition-colors">
                      <Download className="w-4 h-4"/>
                    </button>
                  </div>
                </div>
                <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
                  <code>{generatedCode}</code>
                </pre>
              </div>)}
          </div>)}

        {activeTab === 'snippets' && (<div className="space-y-4">
            {codeSnippets.map((snippet) => (<div key={snippet.id} className="bg-white dark:bg-zion-slate border border-zion-slate-light rounded-lg p-4 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1">
                      {snippet.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                      {snippet.description}
                    </p>
                    <div className="flex items-center space-x-4 text-sm">
                      <span className="text-blue-600 dark:text-blue-400 font-medium">
                        {snippet.language.toUpperCase()}
                      </span>
                      <span className={`font-medium ${getComplexityColor(snippet.complexity)}`}>
                        {snippet.complexity.charAt(0).toUpperCase() + snippet.complexity.slice(1)} Complexity
                      </span>
                      <span className="text-gray-500 dark:text-gray-400">
                        ⭐ {snippet.rating} ({snippet.usageCount} uses)
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:bg-gray-800 rounded-lg transition-colors">
                      <Copy className="w-4 h-4"/>
                    </button>
                    <button className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:bg-gray-800 rounded-lg transition-colors">
                      <Download className="w-4 h-4"/>
                    </button>
                  </div>
                </div>
                <div className="bg-gray-900 text-green-400 p-3 rounded-lg overflow-x-auto text-sm max-h-32 overflow-y-auto">
                  <code>{snippet.code}</code>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center space-x-2">
                    {snippet.tags.map((tag) => (<span key={tag} className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full">
                        {tag}
                      </span>))}
                  </div>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    Created: {snippet.createdAt}
                  </span>
                </div>
              </div>))}
          </div>)}

        {activeTab === 'analysis' && (<div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white dark:bg-zion-slate border border-zion-slate-light rounded-lg p-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
                    <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400"/>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Average Quality</p>
                    <p className="text-2xl font-bold text-green-600 dark:text-green-400">89%</p>
                  </div>
                </div>
              </div>
              <div className="bg-white dark:bg-zion-slate border border-zion-slate-light rounded-lg p-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                    <Activity className="w-6 h-6 text-blue-600 dark:text-blue-400"/>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Performance</p>
                    <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">92%</p>
                  </div>
                </div>
              </div>
              <div className="bg-white dark:bg-zion-slate border border-zion-slate-light rounded-lg p-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
                    <Shield className="w-6 h-6 text-purple-600 dark:text-purple-400"/>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Security</p>
                    <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">97%</p>
                  </div>
                </div>
              </div>
              <div className="bg-white dark:bg-zion-slate border border-zion-slate-light rounded-lg p-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-yellow-100 dark:bg-yellow-900 rounded-lg">
                    <Gauge className="w-6 h-6 text-yellow-600 dark:text-yellow-400"/>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Maintainability</p>
                    <p className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">89%</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {codeAnalysis.map((analysis) => {
                const snippet = codeSnippets.find(s => s.id === analysis.snippetId);
                return (<div key={analysis.id} className="bg-white dark:bg-zion-slate border border-zion-slate-light rounded-lg p-4">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                          Analysis for: {snippet?.title}
                        </h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          <div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Quality</p>
                            <p className={`text-lg font-semibold ${getQualityColor(analysis.quality)}`}>
                              {analysis.quality}%
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Performance</p>
                            <p className={`text-lg font-semibold ${getQualityColor(analysis.performance)}`}>
                              {analysis.performance}%
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Security</p>
                            <p className={`text-lg font-semibold ${getQualityColor(analysis.security)}`}>
                              {analysis.security}%
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Maintainability</p>
                            <p className={`text-lg font-semibold ${getQualityColor(analysis.maintainability)}`}>
                              {analysis.maintainability}%
                            </p>
                          </div>
                        </div>
                      </div>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {new Date(analysis.timestamp).toLocaleDateString()}
                      </span>
                    </div>
                    
                    {showSuggestions && analysis.suggestions.length > 0 && (<div className="mb-4">
                        <h5 className="text-sm font-medium text-green-700 dark:text-green-400 mb-2">
                          <CheckCircle className="w-4 h-4 inline mr-1"/>
                          Suggestions
                        </h5>
                        <ul className="space-y-1">
                          {analysis.suggestions.map((suggestion, index) => (<li key={index} className="text-sm text-green-600 dark:text-green-300">
                              • {suggestion}
                            </li>))}
                        </ul>
                      </div>)}
                    
                    {analysis.warnings.length > 0 && (<div>
                        <h5 className="text-sm font-medium text-yellow-700 dark:text-yellow-400 mb-2">
                          <AlertCircle className="w-4 h-4 inline mr-1"/>
                          Warnings
                        </h5>
                        <ul className="space-y-1">
                          {analysis.warnings.map((warning, index) => (<li key={index} className="text-sm text-yellow-600 dark:text-yellow-300">
                              • {warning}
                            </li>))}
                        </ul>
                      </div>)}
                  </div>)})}
            </div>
          </div>)}

        {activeTab === 'ai' && (<div className="space-y-4">
            {aiGenerations.map((generation) => (<div key={generation.id} className="bg-white dark:bg-zion-slate border border-zion-slate-light rounded-lg p-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                      <Brain className="w-5 h-5 inline mr-2 text-purple-600"/>
                      AI Generation
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                      <strong>Prompt:</strong> {generation.prompt}
                    </p>
                    <div className="flex items-center space-x-4 text-sm mb-3">
                      <span className="text-blue-600 dark:text-blue-400 font-medium">
                        {generation.language.toUpperCase()}
                      </span>
                      <span className="text-purple-600 dark:text-purple-400 font-medium">
                        Confidence: {(generation.confidence * 100).toFixed(1)}%
                      </span>
                      <span className="text-gray-500 dark:text-gray-400">
                        {new Date(generation.timestamp).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button onClick={() => copyToClipboard(generation.generatedCode)} className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:bg-gray-800 rounded-lg transition-colors">
                      <Copy className="w-4 h-4"/>
                    </button>
                    <button className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:bg-gray-800 rounded-lg transition-colors">
                      <Download className="w-4 h-4"/>
                    </button>
                  </div>
                </div>
                
                <div className="bg-gray-900 text-green-400 p-3 rounded-lg overflow-x-auto text-sm max-h-48 overflow-y-auto mb-3">
                  <code>{generation.generatedCode}</code>
                </div>
                
                {generation.alternatives.length > 0 && (<div>
                    <h5 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Alternative Approaches:
                    </h5>
                    <ul className="space-y-1">
                      {generation.alternatives.map((alternative, index) => (<li key={index} className="text-sm text-gray-600 dark:text-gray-400">
                          • {alternative}
                        </li>))}
                    </ul>
                  </div>)}
              </div>))}
          </div>)}
      </div>
    </div>)}
