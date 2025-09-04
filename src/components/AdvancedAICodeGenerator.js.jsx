import React, { useState, useEffect } from 'react';
import { 
  Code, 
  Copy, 
  Download, 
  Search, 
  Filter, 
  Star, 
  Eye, 
  Heart,
  MessageSquare,
  Share2,
  Bookmark,
  Play,
  Settings,
  Zap,
  Brain,
  Sparkles
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
  headers?: Record<string, string>;
  body?: any;
}

export const useApi = (url: string, options: UseApiOptions = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const execute = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(url, {
        method: options.method || 'GET',
        headers: options.headers,
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
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('all');
  const [selectedComplexity, setSelectedComplexity] = useState('all');
  const [selectedSnippet, setSelectedSnippet] = useState(null);

  const languages = ['all', 'javascript', 'typescript', 'css', 'html', 'python', 'java'];
  const complexities = ['all', 'low', 'medium', 'high'];

  const filteredSnippets = mockCodeSnippets.filter(snippet => {
    const matchesSearch = snippet.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         snippet.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         snippet.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesLanguage = selectedLanguage === 'all' || snippet.language === selectedLanguage;
    const matchesComplexity = selectedComplexity === 'all' || snippet.complexity === selectedComplexity;
    return matchesSearch && matchesLanguage && matchesComplexity;
  });

  const copyToClipboard = (code) => {
    navigator.clipboard.writeText(code);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Advanced AI Code Generator
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Generate intelligent, production-ready code snippets powered by AI.
            From simple utilities to complex algorithms, get the code you need instantly.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search code snippets..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <select
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
            className="px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            {languages.map(lang => (
              <option key={lang} value={lang} className="bg-gray-800">
                {lang.charAt(0).toUpperCase() + lang.slice(1)}
              </option>
            ))}
          </select>
          <select
            value={selectedComplexity}
            onChange={(e) => setSelectedComplexity(e.target.value)}
            className="px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            {complexities.map(comp => (
              <option key={comp} value={comp} className="bg-gray-800">
                {comp.charAt(0).toUpperCase() + comp.slice(1)}
              </option>
            ))}
          </select>
        </div>

        {/* Code Snippets Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredSnippets.map((snippet) => (
            <div
              key={snippet.id}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-purple-400/30 transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedSnippet(snippet)}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-500/20 rounded-lg">
                    <Code className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{snippet.title}</h3>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      snippet.complexity === 'low' ? 'bg-green-500/20 text-green-400' :
                      snippet.complexity === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      {snippet.complexity}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm text-gray-300">{snippet.rating}</span>
                </div>
              </div>

              <p className="text-gray-300 mb-4">{snippet.description}</p>

              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-medium text-gray-400">Language:</span>
                  <span className="text-sm text-white">{snippet.language}</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-medium text-gray-400">Usage:</span>
                  <span className="text-sm text-white">{snippet.usageCount.toLocaleString()} times</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {snippet.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-300">View Code</span>
                </div>
                <div className="flex items-center gap-2">
                  <Copy className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-300">Copy</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* AI Features Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">
            AI-Powered Code Generation Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Brain className="w-6 h-6 text-purple-400" />
                <h3 className="text-xl font-semibold text-white">Smart Code Generation</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Generate context-aware code snippets based on your requirements and coding patterns.
              </p>
              <div className="space-y-2">
                <div className="text-sm text-gray-300">
                  • Context-aware suggestions
                </div>
                <div className="text-sm text-gray-300">
                  • Pattern recognition
                </div>
                <div className="text-sm text-gray-300">
                  • Best practices integration
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="w-6 h-6 text-yellow-400" />
                <h3 className="text-xl font-semibold text-white">Code Optimization</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Automatically optimize your code for performance, readability, and maintainability.
              </p>
              <div className="space-y-2">
                <div className="text-sm text-gray-300">
                  • Performance optimization
                </div>
                <div className="text-sm text-gray-300">
                  • Code refactoring
                </div>
                <div className="text-sm text-gray-300">
                  • Security improvements
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-6 h-6 text-blue-400" />
                <h3 className="text-xl font-semibold text-white">Instant Generation</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Get production-ready code snippets instantly with comprehensive documentation.
              </p>
              <div className="space-y-2">
                <div className="text-sm text-gray-300">
                  • Real-time generation
                </div>
                <div className="text-sm text-gray-300">
                  • Documentation included
                </div>
                <div className="text-sm text-gray-300">
                  • Multiple formats
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Generate Amazing Code?
            </h2>
            <p className="text-xl text-purple-100 mb-6">
              Start generating intelligent code snippets today and boost your development productivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Start Generating
              </button>
              <button className="px-8 py-3 border border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors">
                View Examples
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedAICodeGenerator;
