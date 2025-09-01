import React, { useState, useEffect } from 'react';
import { 
  Code, 
  Search, 
  Filter, 
  Copy, 
  Download, 
  Star, 
  Eye, 
  Zap,
  FileText,
  Settings,
  Play,
  Save,
  Share2,
  Heart,
  MessageSquare,
  GitBranch,
  Clock,
  Users,
  TrendingUp,
  CheckCircle,
  AlertCircle,
  Loader,
  X
} from 'lucide-react';

const mockCodeSnippets = [
  {
    id: '1',
    title: 'React Custom Hook for API Calls',
    description: 'A reusable hook for making API calls with loading and error states',
    language: 'typescript',
    code: `import { useState, useEffect } from 'react';

interface UseApiOptions {
  url: string;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  body?: any;
  headers?: Record<string, string>;
}

export const useApi = ({ url, method = 'GET', body, headers }: UseApiOptions) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const execute = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          ...headers,
        },
        body: body ? JSON.stringify(body) : undefined,
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
    if (method === 'GET') {
      execute();
    }
  }, [url]);

  return { data, loading, error, execute };
};`,
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
    background: linear-gradient(
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

  validateForm() {
    let isValid = true;
    for (const field of this.rules.keys()) {
      if (!this.validateField(field)) {
        isValid = false;
      }
    }
    return isValid;
  }
}`,
    tags: ['javascript', 'forms', 'validation', 'class'],
    complexity: 'high',
    rating: 4.9,
    usageCount: 2100,
    createdAt: '2024-01-12'
  }
];

export const AdvancedAICodeGenerator = () => {
  const [snippets, setSnippets] = useState(mockCodeSnippets);
  const [selectedSnippet, setSelectedSnippet] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterLanguage, setFilterLanguage] = useState('all');
  const [filterComplexity, setFilterComplexity] = useState('all');
  const [isGenerating, setIsGenerating] = useState(false);

  const languages = ['all', 'javascript', 'typescript', 'css', 'html', 'python', 'java'];
  const complexities = ['all', 'low', 'medium', 'high'];

  const filteredSnippets = snippets.filter(snippet => {
    const matchesSearch = snippet.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         snippet.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         snippet.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesLanguage = filterLanguage === 'all' || snippet.language === filterLanguage;
    const matchesComplexity = filterComplexity === 'all' || snippet.complexity === filterComplexity;
    return matchesSearch && matchesLanguage && matchesComplexity;
  });

  const copyToClipboard = async (code) => {
    try {
      await navigator.clipboard.writeText(code);
      // You could add a toast notification here
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  const generateCode = async () => {
    setIsGenerating(true);
    // Simulate AI code generation
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsGenerating(false);
    // You could add the generated code to the snippets here
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Code className="w-8 h-8 text-blue-600" />
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              AI Code Generator
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Intelligent code snippets and generation
            </p>
          </div>
        </div>
        <button
          onClick={generateCode}
          disabled={isGenerating}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 flex items-center gap-2"
        >
          {isGenerating ? <Loader className="w-4 h-4 animate-spin" /> : <Zap className="w-4 h-4" />}
          {isGenerating ? 'Generating...' : 'Generate Code'}
        </button>
      </div>

      {/* Search and Filters */}
      <div className="flex gap-4 mb-6">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search code snippets..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            />
          </div>
        </div>
        <select
          value={filterLanguage}
          onChange={(e) => setFilterLanguage(e.target.value)}
          className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
        >
          {languages.map(lang => (
            <option key={lang} value={lang}>
              {lang.charAt(0).toUpperCase() + lang.slice(1)}
            </option>
          ))}
        </select>
        <select
          value={filterComplexity}
          onChange={(e) => setFilterComplexity(e.target.value)}
          className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
        >
          {complexities.map(comp => (
            <option key={comp} value={comp}>
              {comp.charAt(0).toUpperCase() + comp.slice(1)}
            </option>
          ))}
        </select>
      </div>

      {/* Code Snippets Grid */}
      <div className="grid gap-4">
        {filteredSnippets.map(snippet => (
          <div
            key={snippet.id}
            className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => setSelectedSnippet(snippet)}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <FileText className="w-4 h-4 text-blue-600" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {snippet.title}
                  </h3>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    snippet.complexity === 'high' 
                      ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                      : snippet.complexity === 'medium'
                      ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                      : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                  }`}>
                    {snippet.complexity}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-3">
                  {snippet.description}
                </p>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span>{snippet.rating}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="w-4 h-4 text-blue-600" />
                    <span>{snippet.usageCount}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-gray-500" />
                    <span>{snippet.createdAt}</span>
                  </div>
                </div>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  copyToClipboard(snippet.code);
                }}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
              >
                <Copy className="w-4 h-4" />
              </button>
            </div>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {snippet.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Selected Snippet Details */}
      {selectedSnippet && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {selectedSnippet.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {selectedSnippet.description}
                </p>
              </div>
              <button
                onClick={() => setSelectedSnippet(null)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6 overflow-auto max-h-[60vh]">
              <div className="bg-gray-900 text-gray-100 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                <pre>{selectedSnippet.code}</pre>
              </div>
              
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => copyToClipboard(selectedSnippet.code)}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    <Copy className="w-4 h-4" />
                    Copy Code
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600">
                    <Download className="w-4 h-4" />
                    Download
                  </button>
                </div>
                
                <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                  <span>Language: {selectedSnippet.language}</span>
                  <span>Complexity: {selectedSnippet.complexity}</span>
                  <span>Rating: {selectedSnippet.rating}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
