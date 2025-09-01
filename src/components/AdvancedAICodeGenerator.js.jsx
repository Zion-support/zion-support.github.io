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

export const AdvancedAICodeGenerator = () => {
  const [selectedSnippet, setSelectedSnippet] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterLanguage, setFilterLanguage] = useState('all');
  const [sortBy, setSortBy] = useState('rating');
  const [copied, setCopied] = useState(false);

  const filteredSnippets = mockCodeSnippets.filter(snippet => {
    const matchesSearch = snippet.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         snippet.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         snippet.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesLanguage = filterLanguage === 'all' || snippet.language === filterLanguage;
    return matchesSearch && matchesLanguage;
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
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy code:', error);
    }
  };

  const downloadCode = (snippet) => {
    const blob = new Blob([snippet.code], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${snippet.title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.${snippet.language}`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
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
    </div>
  );
};
