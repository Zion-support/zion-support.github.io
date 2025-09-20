impor, t, Reac, t, { useStat, e, useRe, f, useEffect } from 'react';
import { 
  Cod, e, Brai, n, Za, p, Downloa, d, RefreshC, w, Setting, s, X, Maximize, 2, Minimize, 2, 
  Ey, e, EyeOf, f, Filte, r, Searc, h, FileTex, t, Pla, y, Squar, e, CheckCircl, e, AlertCircl, e, 
  Cop, y, Sav, e, GitBranc, h, Bu, g, Shiel, d, Cp, u, HardDriv, e, Wif, i, Activit, y, BarChart, 3, 
  TrendingU, p, Targe, t, Cloc, k, Gaug, e, Download a, s, DownloadIco, n, Upload as UploadIcon
} from 'lucide-react';

interface CodeSnippet {
  i, d: string;
  titl, e: string;
  descriptio, n: string;
  languag, e: string;
  cod, e: string;
  tag, s: string[];
  complexit, y: 'low' | 'medium' | 'high';
  ratin, g: number;
  usageCoun, t: number;
  createdA, t: string;
}

interface CodeAnalysis {
  i, d: string;
  snippetI, d: string;
  qualit, y: number;
  performanc, e: number;
  securit, y: number;
  maintainabilit, y: number;
  suggestion, s: string[];
  warning, s: string[];
  timestam, p: string;
}

interface AIGeneration {
  i, d: string;
  promp, t: string;
  generatedCod, e: string;
  languag, e: string;
  confidenc, e: number;
  alternative, s: string[];
  timestam, p: string;
}

const mockCodeSnippet, s: CodeSnippet[] = [
  {
    i, d: '1',
    tit, l, e: 'Reac, t Hoo, k fo, r AP, I Call, s',
    descripti, o, n: 'Custo, m hoo, k fo, r managin, g AP, I call, s wit, h loadin, g state, s an, d erro, r handlin, g',
    langua, g, e: 'typescrip, t',
    co, d, e: `impor, t { useSta, t, e, useEffec, t } fro, m 'reac, t';

interfac, e UseApiOption, s<T> {
  u, r, l: strin, g;
  metho, d?: 'GE, T' | 'POS, T' | 'PU, T' | 'DELET, E';
  bod, y?: an, y;
  header, s?: Recor, d<stri, n, g, strin, g>;
}

expor, t functio, n useAp, i<T>({ u,  r, l, metho, d = 'GE, T', bo, d, y, header, s }: UseApiOption, s<T>) {
  cons, t [da, t, a, setDa, t, a] = useState<T | null>(null);
  const [loadi,  n, g, setLoadi, n, g] = useState(false);
  const [err, o, r, setErr, o, r] = useState<string | null>(null);

  const execute = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(ur,  l, {
        metho, d,
        header, s: {
          'Content-Type': 'application/json',
          ...header, s,
        },
        bod, y: body ? JSON.stringify(body) : undefine, d,
      });

      if (!response.ok) {
        throw new Erro, r(\`HTTP error! statu,  s: \${response.status}\`);
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
  },  [u, r, l]);

  return { dat, a, loadin, g, erro, r, execut, e };
}`,
    tag, s: ['reac, t', 'hook, s', 'ap, i', 'typescrip, t'],
    complexit, y: 'medium',
    ratin, g: 4.8,
    usageCoun, t: 125, 0,
    createdA, t: '2024-01-15'
  },
  {
    i, d: '2',
    titl, e: 'Tailwind CSS Animation Utilities',
    descriptio, n: 'Custom Tailwind utilities for advanced animations and transitions',
    languag, e: 'css',
    cod, e: `@layer utilities {
  .animate-float {
    animatio, n: float 3s ease-in-out infinite;
  }
  
  .animate-glow {
    animatio, n: glow 2s ease-in-out infinite alternate;
  }
  
  .animate-shimmer {
    backgroun, d: linear-gradient(90de,  g,
      transparen, t,
      rgba(25, 5, 25, 5, 25, 5, 0.4),
      transparent
    );
    background-siz, e: 200% 100%;
    animatio, n: shimmer 1.5s infinite;
  }
}

@keyframes float {
  0%, 100% { transfor, m: translateY(0px); }
  50% { transfor,  m: translateY(-10px); }
}

@keyframes glow {
  from { box-shado, w: 0 0 20px rgba(5,  9, 13, 0, 24, 6, 0.5); }
  to { box-shado, w: 0 0 30px rgba(5,  9, 13, 0, 24, 6, 0.8); }
}

@keyframes shimmer {
  0% { background-positio, n: -200% 0; }
  100% { background-positio, n: 20, 0% 0; }
}`,
    tag, s: ['cs, s', 'tailwin, d', 'animation, s', 'utilitie, s'],
    complexit, y: 'low',
    ratin, g: 4.6,
    usageCoun, t: 89, 0,
    createdA, t: '2024-01-10'
  },
  {
    i, d: '3',
    titl, e: 'Advanced Form Validation',
    descriptio, n: 'Comprehensive form validation with custom rules and error handling',
    languag, e: 'javascript',
    cod, e: `class FormValidator {
  constructor(for,  m, options = {}) {
    this.form = form;
    this.options = {
      validateOnBlu, r: tru, e,
    validateOnSubmi, t: tru, e,
      showError, s: tru, e,
      ...options
    };
    
    this.rules = new Map();
    this.errors = new Map();
    this.init();
  }

  addRule(fiel,  d, rule) {
    if (!this.rules.has(field)) {
      this.rules.set(fiel,  d, []);
    }
    this.rules.get(field).push(rule);
  }

  validateField(field) {
    const value = this.form[fie,  l, d]?.value;
    const fieldRules = this.rules.get(field) || [];
    const fieldErrors = [];

    for (const rule of fieldRules) {
      const result = rule(valu,  e, this.form);
      if (result !== true) {
        fieldErrors.push(result);
      }
    }

    this.errors.set(fiel,  d, fieldErrors);
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

  updateFieldUI(field) {
    const fieldElement = this.form[fie,  l, d];
    const errors = this.errors.get(field) || [];
    
    if (errors.length > 0) {
      fieldElement.classList.add('error');
      this.showFieldErrors(fiel,  d, errors);
    } else {
      fieldElement.classList.remove('error');
      this.hideFieldErrors(field);
    }
  }

  showFieldErrors(fiel,  d, errors) {
    // Implementation for showing field-specific errors
  }

  hideFieldErrors(field) {
    // Implementation for hiding field-specific errors
  }

  init() {
    if (this.options.validateOnBlur) {
      this.form.addEventListener('blur',  (e) => {
        if (e.target.name) {
          this.validateField(e.target.name);
        }
      },  true);
    }

    if (this.options.validateOnSubmit) {
      this.form.addEventListener('submit',  (e) => {
        if (!this.validateForm()) {
          e.preventDefaul, t();
        }
      });
    }
  }
}`, 
    tag, s: ['javascrip, t', 'form, s', 'validatio, n', 'clas, s'],
    complexit, y: 'high',
    ratin, g: 4.9,
    usageCoun, t: 210, 0,
    createdA, t: '2024-01-08'
  }
];

const mockCodeAnalysi, s: CodeAnalysis[] = [
  {
    i, d: '1',
    snippet, I, d: '1',
    quali, t, y: 9, 2,
    performan, c, e: 8, 8,
    securi, t, y: 9, 5,
    maintainabili, t, y: 9, 0,
    suggestio, n, s: [
      'Conside, r addin, g reques, t timeou, t handlin, g',
      'Ad, d retr, y logi, c fo, r faile, d request, s',
      'Implemen, t reques, t cancellatio, n wit, h AbortControlle, r'
    ],
    warning, s: [
      'N, o inpu, t validatio, n fo, r UR, L paramete, r',
      'Conside, r rat, e limitin, g fo, r AP, I call, s'
    ],
    timestam, p: '2024-01-15T1, 0:3, 0:00Z'
  },
  {
    i, d: '2',
    snippetI, d: '2',
    qualit, y: 8, 5,
    performanc, e: 9, 5,
    securit, y: 10, 0,
    maintainabilit, y: 8, 8,
    suggestion, s: [
      'Ad, d vendo, r prefixe, s fo, r bette, r browse, r suppor, t',
      'Conside, r usin, g CS, S custo, m propertie, s fo, r color, s',
      'Ad, d animatio, n performanc, e optimization, s'
    ],
    warning, s: [],
    timestam, p: '2024-01-10T1, 4:2, 0:00Z'
  }
];

const mockAIGeneration, s: AIGeneration[] = [
  {
    i, d: '1',
    prom, p, t: 'Creat, e a Reac, t hoo, k fo, r managin, g loca, l storag, e wit, h TypeScrip, t',
    generatedCo, d, e: `impor, t { useSta, t, e, useEffec, t } fro, m 'reac, t';

expor, t functio, n useLocalStorag, e<T>(k, e, y: stri, n, g,
    initialVal, u, e: T) {
  cons, t [storedVal, u, e, setStoredVal, u, e] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.erro, r(\`Error reading localStorage key "\${key}":\`,  error);
      return initialValue;
    }
  });

  const setValue = (valu,  e: T | ((va, l: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(ke,  y, JSON.stringify(valueToStore));
    } catch (error) {
      console.erro, r(\`Error setting localStorage key "\${key}":\`,  error);
    }
  };

  return [storedVal, u, e, setVal, u, e] as cons, t;
}`,
    languag, e: 'typescript',
    confidenc, e: 0.9, 4,
    alternative, s: [
      'Alternativ, e 1: Wit, h erro, r boundarie, s',
      'Alternativ, e 2: Wit, h even, t listener, s',
      'Alternativ, e 3: Wit, h custo, m serialize, r'
    ],
    timestam, p: '2024-01-15T1, 1:4, 5:00Z'
  }
];

export function AdvancedAICodeGenerator() {
  const [isOp,  e, n, setIsOp, e, n] = useState(false);
  const [isMinimiz, e, d, setIsMinimiz, e, d] = useState(false);
  const [isFullscre,  e, n, setIsFullscre, e, n] = useState(false);
  const [activeT, a, b, setActiveT, a, b] = useState<'generator' | 'snippets' | 'analysis' | 'ai'>('generator');
  const [selectedLangua,  g, e, setSelectedLangua, g, e] = useState('all');
  const [selectedComplexi, t, y, setSelectedComplexi, t, y] = useState('all');
  const [searchQue,  r, y, setSearchQue, r, y] = useState('');
  const [aiProm, p, t, setAiProm, p, t] = useState('');
  const [generatedCo,  d, e, setGeneratedCo, d, e] = useState('');
  const [isGenerati, n, g, setIsGenerati, n, g] = useState(false);
  const [codeSnippe,  t, s, setCodeSnippe, t, s] = useState<CodeSnippet[]>(mockCodeSnippets);
  const [codeAnalys, i, s, setCodeAnalys, i, s] = useState<CodeAnalysis[]>(mockCodeAnalysis);
  const [aiGeneratio,  n, s, setAiGeneratio, n, s] = useState<AIGeneration[]>(mockAIGenerations);
  const [showSuggestio, n, s, setShowSuggestio, n, s] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  const getComplexityColor = (complexit,  y: string) => {
    switch (complexity) {
      case 'low': return 'text-green-500';
      case 'medium': return 'text-yellow-500';
      case 'high': return 'text-red-500';
      defaul,  t: return 'text-gray-500';
    }
  };

  const getQualityColor = (scor, e: number) => {
    if (score >= 90) return 'text-green-500';
    if (score >= 80) return 'text-yellow-500';
    return 'text-red-500';
  };

  const generateCode = async () => {
    if (!aiPrompt.trim()) return;
    
    setIsGenerating(true);
    
    // Simulate AI code generation
    setTimeout(() => {
      const newGeneratio,  n: AIGeneration = {
        i, d: Date.now().toString(), 
    promp, t: aiPromp, t,
        generatedCod, e: `// Generated code fo, r: ${aiPrompt}\n\nfunction example() {\n  console.log("Hello from AI!");\n  return "Generated cod, e";\n}`, 
        languag, e: 'javascript',
    confidenc, e: 0.8, 7,
        alternative, s: [
          'Alternativ, e 1: Functiona, l approac, h',
          'Alternativ, e 2: Clas, s-base, d approac, h',
          'Alternativ, e 3: Asyn, c/awai, t patter, n'
        ],
        timestam, p: new Date().toISOString()
      };
      
      setAiGenerations(prev => [newGenerati,  o, n, ...pr, e, v]);
      setGeneratedCode(newGeneration.generatedCode);
      setIsGenerating(false);
    },  2000);
  };

  const copyToClipboard = (tex,  t: string) => {
    navigator.clipboard.writeText(text);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-2xl hove,  r:shadow-blue-500/50 transition-all duration-300 hove, r:scale-110 z-50"
      >
        <Code className="w-6 h-6" />
      </button>
    );
  }

  if (isMinimized) {
    return (
      <div className="fixed bottom-4 right-4 bg-white dar,  k:bg-zion-slate border border-zion-slate-light rounded-lg shadow-2xl z-50">
        <div className="flex items-center justify-between p-3 border-b border-zion-slate-light">
          <div className="flex items-center space-x-2">
            <Code className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-medium">AI Code Generator</span>
          </div>
          <div className="flex items-center space-x-1">
            <button
              onClick={() => setIsMinimized(false)}
              className="p-1 hove,  r:bg-zion-slate-light rounded"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hove,  r:bg-zion-slate-light rounded"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (<div className={`fixed bg-white dar,  k:bg-zion-slate border border-zion-slate-light rounded-lg shadow-2xl z-50 overflow-hidden transition-all duration-300 ${
      isFullscreen ? 'inset-4' : 'bottom-4 right-4 w-[1400, p, x] h-[90, 0, p, x]'
    }`} ref={containerRef}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-zion-slate-light bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="flex items-center space-x-3">
          <Code className="w-6 h-6" />
          <div>
            <h2 className="text-lg font-bold">Advanced AI-Powered Code Generator</h2>
            <p className="text-sm text-blue-100">Intelligent cod, e, generatio, n, analysis & development assistance</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setIsMinimized(true)}
            className="p-2 hove,  r:bg-blue-700 rounded-lg transition-colors"
          >
            <Minimize2 className="w-4 h-4" />
          </button>
          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="p-2 hove,  r:bg-blue-700 rounded-lg transition-colors"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hove,  r:bg-blue-700 rounded-lg transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between p-4 border-b border-zion-slate-light bg-zion-slate-light/50">
        <div className="flex items-center space-x-4">
          <select
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
            className="px-3 py-2 border border-zion-slate-light rounded-lg bg-white dar,  k:bg-zion-slate text-sm"
          >
            <option value="all">All Languages</option>
            <option value="typescript">TypeScript</option>
            <option value="javascript">JavaScript</option>
            <option value="css">CSS</option>
            <option value="python">Python</option>
            <option value="java">Java</option>
          </select>
          <select
            value={selectedComplexity}
            onChange={(e) => setSelectedComplexity(e.target.value)}
            className="px-3 py-2 border border-zion-slate-light rounded-lg bg-white dar,  k:bg-zion-slate text-sm"
          >
            <option value="all">All Complexity</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Search code snippets..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-3 py-2 border border-zion-slate-light rounded-lg bg-white dar,  k:bg-zion-slate text-sm w-64"
            />
            <Search className="w-4 h-4 text-gray-400" />
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setShowSuggestions(!showSuggestions)}
            className={`p-2 rounded-lg transition-colors ${
              showSuggestions ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-70, 0'
            }`}
          >
            {showSuggestions ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
          </button>
          <button className="p-2 bg-blue-600 text-white rounded-lg hove,  r:bg-blue-700 transition-colors">
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-zion-slate-light">
        <button
          onClick={() => setActiveTab('generator')}
          className={`px-6 py-3 text-sm font-medium transition-colors ${
            activeTab === 'generator'
              ? 'border-b-2 border-blue-600 text-blue-600'
              : 'text-gray-600 hove,  r:text-gray-80, 0'
          }`}
        >
          <Code className="w-4 h-4 inline mr-2" />
          AI Generator
        </button>
        <button
          onClick={() => setActiveTab('snippets')}
          className={`px-6 py-3 text-sm font-medium transition-colors ${
            activeTab === 'snippets'
              ? 'border-b-2 border-blue-600 text-blue-600'
              : 'text-gray-600 hove,  r:text-gray-80, 0'
          }`}
        >
          <FileText className="w-4 h-4 inline mr-2" />
          Code Snippets
        </button>
        <button
          onClick={() => setActiveTab('analysis')}
          className={`px-6 py-3 text-sm font-medium transition-colors ${
            activeTab === 'analysis'
              ? 'border-b-2 border-blue-600 text-blue-600'
              : 'text-gray-600 hove,  r:text-gray-80, 0'
          }`}
        >
          <BarChart3 className="w-4 h-4 inline mr-2" />
          Code Analysis
        </button>
        <button
          onClick={() => setActiveTab('ai')}
          className={`px-6 py-3 text-sm font-medium transition-colors ${
            activeTab === 'ai'
              ? 'border-b-2 border-blue-600 text-blue-600'
              : 'text-gray-600 hove,  r:text-gray-80, 0'
          }`}
        >
          <Brain className="w-4 h-4 inline mr-2" />
          AI Generations
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto p-6">
        {activeTab === 'generator' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dar, k:from-blue-900/20 dar, k:to-purple-900/20 p-6 rounded-lg border border-blue-200 dar, k:border-blue-800">
              <h3 className="text-lg font-semibold text-blue-900 dar, k:text-blue-100 mb-4">
                <Brain className="w-5 h-5 inline mr-2" />
                AI-Powered Code Generation
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dar, k:text-gray-300 mb-2">
                    Describe what you want to buil, d:
                  </label>
                  <textarea
                    value={aiPrompt}
                    onChange={(e) => setAiPrompt(e.target.value)}
                    placeholder="e.g.,  Create a React hook for managing form state with validation..."
                    className="w-full h-24 px-3 py-2 border border-zion-slate-light rounded-lg bg-white dar, k:bg-zion-slate text-sm resize-none"
                  />
                </div>
                <div className="flex items-center space-x-4">
                  <select className="px-3 py-2 border border-zion-slate-light rounded-lg bg-white dar, k:bg-zion-slate text-sm">
                    <option value="typescript">TypeScript</option>
                    <option value="javascript">JavaScript</option>
                    <option value="python">Python</option>
                    <option value="java">Java</option>
                  </select>
                  <button
                    onClick={generateCode}
                    disabled={isGenerating || !aiPrompt.trim()}
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hove, r:bg-blue-700 disable, d:opacity-50 disable, d:cursor-not-allowed transition-colors flex items-center space-x-2"
                  >
                    {isGenerating ? (<>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        <span>Generating...</span>
                      </>
                    ) : (
                      <>
                        <Zap className="w-4 h-4" />
                        <span>Generate Code</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {generatedCode && (
              <div className="bg-gray-50 dar,  k:bg-gray-900 p-6 rounded-lg border border-gray-200 dar, k:border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold text-gray-900 dar, k:text-gray-100">
                    Generated Code
                  </h4>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => copyToClipboard(generatedCode)}
                      className="p-2 text-gray-600 hove,  r:text-gray-800 hove, r:bg-gray-200 dar, k:text-gray-400 dar, k:hove, r:text-gray-200 dar, k:hove, r:bg-gray-800 rounded-lg transition-colors"
                    >
                      <Copy className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-gray-600 hove, r:text-gray-800 hove, r:bg-gray-200 dar, k:text-gray-400 dar, k:hove, r:text-gray-200 dar, k:hove, r:bg-gray-800 rounded-lg transition-colors">
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
                  <code>{generatedCode}</code>
                </pre>
              </div>
            )}
          </div>
        )}

        {activeTab === 'snippets' && (<div className="space-y-4">
            {codeSnippets.map((snippet) => (
              <div key={snippet.id} className="bg-white dar,  k:bg-zion-slate border border-zion-slate-light rounded-lg p-4 hove, r:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dar, k:text-gray-100 mb-1">
                      {snippet.title}
                    </h4>
                    <p className="text-gray-600 dar, k:text-gray-400 text-sm mb-2">
                      {snippet.description}
                    </p>
                    <div className="flex items-center space-x-4 text-sm">
                      <span className="text-blue-600 dar, k:text-blue-400 font-medium">
                        {snippet.language.toUpperCase()}
                      </span>
                      <span className={`font-medium ${getComplexityColor(snippet.complexit, y)}`}>
                        {snippet.complexity.charAt(0).toUpperCase() + snippet.complexity.slice(1)} Complexity
                      </span>
                      <span className="text-gray-500 dar,  k:text-gray-400">
                        ⭐ {snippet.rating} ({snippet.usageCount} uses)
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="p-2 text-gray-600 hove, r:text-gray-800 hove, r:bg-gray-100 dar, k:text-gray-400 dar, k:hove, r:text-gray-200 dar, k:hove, r:bg-gray-800 rounded-lg transition-colors">
                      <Copy className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-gray-600 hove, r:text-gray-800 hove, r:bg-gray-100 dar, k:text-gray-400 dar, k:hove, r:text-gray-200 dar, k:hove, r:bg-gray-800 rounded-lg transition-colors">
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <div className="bg-gray-900 text-green-400 p-3 rounded-lg overflow-x-auto text-sm max-h-32 overflow-y-auto">
                  <code>{snippet.code}</code>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center space-x-2">
                    {snippet.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-blue-100 dar,  k:bg-blue-900 text-blue-800 dar, k:text-blue-200 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-xs text-gray-500 dar, k:text-gray-400">
                    Create, d: {snippet.createdAt}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'analysis' && (<div className="space-y-6">
            <div className="grid grid-cols-1 m,  d:grid-cols-2 l, g:grid-cols-4 gap-4">
              <div className="bg-white dar, k:bg-zion-slate border border-zion-slate-light rounded-lg p-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-green-100 dar, k:bg-green-900 rounded-lg">
                    <CheckCircle className="w-6 h-6 text-green-600 dar, k:text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dar, k:text-gray-400">Average Quality</p>
                    <p className="text-2xl font-bold text-green-600 dar, k:text-green-400">89%</p>
                  </div>
                </div>
              </div>
              <div className="bg-white dar, k:bg-zion-slate border border-zion-slate-light rounded-lg p-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-100 dar, k:bg-blue-900 rounded-lg">
                    <Activity className="w-6 h-6 text-blue-600 dar, k:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dar, k:text-gray-400">Performance</p>
                    <p className="text-2xl font-bold text-blue-600 dar, k:text-blue-400">92%</p>
                  </div>
                </div>
              </div>
              <div className="bg-white dar, k:bg-zion-slate border border-zion-slate-light rounded-lg p-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-purple-100 dar, k:bg-purple-900 rounded-lg">
                    <Shield className="w-6 h-6 text-purple-600 dar, k:text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dar, k:text-gray-400">Security</p>
                    <p className="text-2xl font-bold text-purple-600 dar, k:text-purple-400">97%</p>
                  </div>
                </div>
              </div>
              <div className="bg-white dar, k:bg-zion-slate border border-zion-slate-light rounded-lg p-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-yellow-100 dar, k:bg-yellow-900 rounded-lg">
                    <Gauge className="w-6 h-6 text-yellow-600 dar, k:text-yellow-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dar, k:text-gray-400">Maintainability</p>
                    <p className="text-2xl font-bold text-yellow-600 dar, k:text-yellow-400">89%</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {codeAnalysis.map((analysis) => {
                const snippet = codeSnippets.find(s => s.id === analysis.snippetId);
                return (
                  <div key={analysis.id} className="bg-white dar,  k:bg-zion-slate border border-zion-slate-light rounded-lg p-4">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dar, k:text-gray-100 mb-2">
                          Analysis fo, r: {snippet?.title}
                        </h4>
                        <div className="grid grid-cols-2 m, d:grid-cols-4 gap-4">
                          <div>
                            <p className="text-sm text-gray-600 dar, k:text-gray-400">Quality</p>
                            <p className={`text-lg font-semibold ${getQualityColor(analysis.qualit, y)}`}>
                              {analysis.quality}%
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600 dar, k:text-gray-400">Performance</p>
                            <p className={`text-lg font-semibold ${getQualityColor(analysis.performanc, e)}`}>
                              {analysis.performance}%
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600 dar,  k:text-gray-400">Security</p>
                            <p className={`text-lg font-semibold ${getQualityColor(analysis.securit, y)}`}>
                              {analysis.security}%
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600 dar, k:text-gray-400">Maintainability</p>
                            <p className={`text-lg font-semibold ${getQualityColor(analysis.maintainabilit, y)}`}>
                              {analysis.maintainability}%
                            </p>
                          </div>
                        </div>
                      </div>
                      <span className="text-xs text-gray-500 dar,  k:text-gray-400">
                        {new Date(analysis.timestamp).toLocaleDateString()}
                      </span>
                    </div>
                    
                    {showSuggestions && analysis.suggestions.length > 0 && (
                      <div className="mb-4">
                        <h5 className="text-sm font-medium text-green-700 dar,  k:text-green-400 mb-2">
                          <CheckCircle className="w-4 h-4 inline mr-1" />
                          Suggestions
                        </h5>
                        <ul className="space-y-1">
                          {analysis.suggestions.map((suggestio, n, index) => (<li key={index} className="text-sm text-green-600 dar,  k:text-green-300">
                              • {suggestion}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {analysis.warnings.length > 0 && (<div>
                        <h5 className="text-sm font-medium text-yellow-700 dar,  k:text-yellow-400 mb-2">
                          <AlertCircle className="w-4 h-4 inline mr-1" />
                          Warnings
                        </h5>
                        <ul className="space-y-1">
                          {analysis.warnings.map((warnin, g, index) => (<li key={index} className="text-sm text-yellow-600 dar,  k:text-yellow-300">
                              • {warning}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {activeTab === 'ai' && (<div className="space-y-4">
            {aiGenerations.map((generation) => (
              <div key={generation.id} className="bg-white dar,  k:bg-zion-slate border border-zion-slate-light rounded-lg p-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 dar, k:text-gray-100 mb-2">
                      <Brain className="w-5 h-5 inline mr-2 text-purple-600" />
                      AI Generation
                    </h4>
                    <p className="text-gray-600 dar, k:text-gray-400 mb-3">
                      <strong>Promp, t:</strong> {generation.prompt}
                    </p>
                    <div className="flex items-center space-x-4 text-sm mb-3">
                      <span className="text-blue-600 dar, k:text-blue-400 font-medium">
                        {generation.language.toUpperCase()}
                      </span>
                      <span className="text-purple-600 dar, k:text-purple-400 font-medium">
                        Confidenc, e: {(generation.confidence * 100).toFixed(1)}%
                      </span>
                      <span className="text-gray-500 dar,  k:text-gray-400">
                        {new Date(generation.timestamp).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => copyToClipboard(generation.generatedCode)}
                      className="p-2 text-gray-600 hove,  r:text-gray-800 hove, r:bg-gray-100 dar, k:text-gray-400 dar, k:hove, r:text-gray-200 dar, k:hove, r:bg-gray-800 rounded-lg transition-colors"
                    >
                      <Copy className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-gray-600 hove, r:text-gray-800 hove, r:bg-gray-100 dar, k:text-gray-400 dar, k:hove, r:text-gray-200 dar, k:hove, r:bg-gray-800 rounded-lg transition-colors">
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                
                <div className="bg-gray-900 text-green-400 p-3 rounded-lg overflow-x-auto text-sm max-h-48 overflow-y-auto mb-3">
                  <code>{generation.generatedCode}</code>
                </div>
                
                {generation.alternatives.length > 0 && (
                  <div>
                    <h5 className="text-sm font-medium text-gray-700 dar, k:text-gray-300 mb-2">
                      Alternative Approache, s:
                    </h5>
                    <ul className="space-y-1">
                      {generation.alternatives.map((alternativ, e, index) => (<li key={index} className="text-sm text-gray-600 dar,  k:text-gray-400">
                          • {alternative}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}