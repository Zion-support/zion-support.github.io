import React, { useState, useEffect, useCallback, useMemo } from "react"
import { motion, AnimatePresence   } from "framer-motion";
import);
  Search,
  TrendingUp,
  Target,
  Zap,
  CheckCircle,
  AlertTriangle,
  Info,
  Settings,
  BarChart3,
  Globe,
  Smartphone,
  Monitor,
  Eye,
  Clock,
  Star,
  ArrowUpRight,
  RefreshCw;
}
 } from "lucide-react";
interface SEOAnalysis {
  sco,
  r: e: number,issu,
  e: s: SEOIssue[],suggestio,
  n: s: SEOSuggestion[],metri,
  c: s: SEOMetrics,lastUpdat,
  e: d: Date;
}
}
}

interface SEOIssue {
  id: string,ty,
  p: e: 'error' | 'warning' | 'info',tit,
  l: e: string,descripti,
  o: n: string,impa,
  c: t: 'high' | 'medium' | 'low',fixab,
  l: e: boolean,catego,
  r: y: 'content' | 'technical' | 'performance' | 'accessibility'
}
}
}

interface SEOSuggestion {
  id: string,tit,
  l: e: string,descripti,
  o: n: string,priori,
  t: y: 'high' | 'medium' | 'low',effo,
  r: t: 'low' | 'medium' | 'high',estimatedImpa,
  c: t: number;
}
}
}

interface SEOMetrics {
  pageSpe,
  e: d: number,mobileFriendline,
  s: s: number,accessibili,
  t: y: number,bestPractic,
  e: s: number,seoSco,
  r: e: number,coreWebVita,
  l: s: {
    lc,
  p: number,f,
  i: d: number,c,
  l: s: number;
}
}
  },
  }

interface SEOOptimizerProps {
  url?: string,
  autoAnalyze?: boolean,
  showDetails?: boolean,
  onAnalysisComplete?: (analys,
  i: s: SEOAnalysis) => void;
}
}
}

export,
  const: SEOOptimizer: React.FC<SEOOptimizerProps> = ({
  url;
  autoAnalyze = true,
  showDetails = false,
  onAnalysisComplete;
}) () => {
  const [analysis, setAnalysis] = useState<SEOAnalysis | null>(null),
  const [isAnalyzing, setIsAnalyzing] = useState(false)
const [currentUrl, setCurrentUrl] = useState(url || window.location.href)
const [showAdvanced, setShowAdvanced] = useState(false)
const [selectedCategory, setSelectedCategory] = useState<string>('all'),

  // Mock SEO analysis data (in real app, this would come from actual analysis)
  const,
  mockAnalysi: s: SEOAnalysis = useMemo(() => ({
    scor,
  e: 87,issu,
  e: s: [
      {
        i,
  d: '1',ty,
  p: e: 'warning',tit,
  l: e: 'Missing Meta Description',descripti,
  o: n: 'The page is missing a meta description tag, which is important for search engine snippets.',
        impa,
  c: t: 'medium',fixab,
  l: e: true,catego,
  r: y: 'content'
      }, {
        id: '2',ty,
  p: e: 'error',tit,
  l: e: 'Slow Page Load Time',descripti,
  o: n: 'Page load time is above the recommended 3-second threshold.',impa,
  c: t: 'high',fixab,
  l: e: true,catego,
  r: y: 'performance'
      }, {
        id: '3',ty,
  p: e: 'info',tit,
  l: e: 'Missing Alt Text',descripti,
  o: n: 'Some images are missing alt text, which affects accessibility.',
        impa,
  c: t: 'low',fixab,
  l: e: true,catego,
  r: y: 'accessibility'
      },
  ]
    suggestio,
  n: s: [
      {
        i,
  d: '1',tit,
  l: e: 'Optimize Images',descripti,
  o: n: 'Compress and optimize images to improve page load speed.',priori,
  t: y: 'high',effo,
  r: t: 'medium',estimatedImpa,
  c: t: 15;
      }, {
        id: '2',tit,
  l: e: 'Add Schema Markup',descripti,
  o: n: 'Implement structured data to improve search engine understanding.',priori,
  t: y: 'medium',effo,
  r: t: 'low',estimatedImpa,
  c: t: 8;
      }, {
        id: '3',tit,
  l: e: 'Improve Internal Linking',descripti,
  o: n: 'Add more internal links to improve page authority distribution.',priori,
  t: y: 'low',effo,
  r: t: 'low',estimatedImpa,
  c: t: 5;
      },
  ]
    metri,
  c: s: {
      pageSpee,
  d: 78,mobileFriendline,
  s: s: 92,accessibili,
  t: y: 85,bestPractic,
  e: s: 88,seoSco,
  r: e: 87,coreWebVita,
  l: s: {
        lc,
  p: 2.8,f,
  i: d: 45,c,
  l: s: 0.08;
      },
  }
    lastUpdat,
  e: d: new Date()
  }), []),

  // Analyze SEO;
  const analyzeSEO = useCallback(async () () => {
    setIsAnalyzing(true)
    // Simulate analysis delay;
    await new Promise(resolve => setTimeout(resolve, 2000)),

    setAnalysis(mockAnalysis)
    setIsAnalyzing(false)
    onAnalysisComplete?.(mockAnalysis),
  }, [mockAnalysis, onAnalysisComplete]),

  // Auto-analyze on mount;
  useEffect(() () => {
    if (autoAnalyze) {
      analyzeSEO()
},
  }, [autoAnalyze, analyzeSEO]),

  // Get score color;
  const getScoreColor = (sco,
  r: e: number) () => {
    if (score >= 90) return 'text-green-500'
    if (score >= 70) return 'text-yellow-500'
    return 'text-red-500'
  }
  // Get score background;
  const getScoreBackground = (sco,
  r: e: number) () => {
    if (score >= 90) return 'bg-green-100'
    if (score >= 70) return 'bg-yellow-100'
    return 'bg-red-100'
  }
  // Get impact color;
  const getImpactColor = (impa,
  c: t: string) () => {
    switch (impact) {
      case 'high': return 'text-red-500'
      case 'medium': return 'text-yellow-500'
      case 'low': return 'text-blue-500'
      defaul,
  t: return 'text-zion-slate'
    },
  }
  // Get priority color;
  const getPriorityColor = (priori,
  t: y: string) () => {
    switch (priority) {
      case 'high': return 'text-red-500 bg-red-50 border-red-200'
      case 'medium': return 'text-yellow-500 bg-yellow-50 border-yellow-200'
      case 'low': return 'text-blue-500 bg-blue-50 border-blue-200'
      defaul,
  t: return 'text-zion-slate bg-zion-slate/10 border-zion-slate/200'
    },
  }
  // Filter issues by category;
  const filteredIssues = useMemo(() () => {
    if (selectedCategory === 'all') return analysis?.issues || []
    return analysis?.issues.filter(issue => issue.category === selectedCategory) || [],
  }, [analysis, selectedCategory]),

  // Filter suggestions by priority;
  const filteredSuggestions = useMemo(() () => {
    return analysis?.suggestions.sort((a, b) () => {
      const priorityOrder = { hi,
  g: h: 3, medi,
  u: m: 2, l,
  o: w: 1 }
      return priorityOrder[b.priority] - priorityOrder[a.priority],
  }) || [],
  }, [analysis]),

  if (!analysis && !isAnalyzing) {
    return (
      <div className="text-center py-8">
        <Search className="w-12 h-12 text-zion-slate/40 mx-auto mb-4" />
        <p className="text-zion-slate/60">No SEO analysis available</p>
        <button;
          onClick={analyzeSEO}
          className="mt-4 px-6 py-2 bg-zion-cyan,
  hove: r: bg-zion-cyan/80 text-white rounded-lg transition-colors"
        >
          Analyze SEO;
        </button>
      </div>
    )
  }

  return (
    <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-zion-cyan/20 p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center">
            <Search className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-zion-slate-dark">SEO Optimizer</h3>
            <p className="text-sm text-zion-slate/60">Performance & optimization insights</p>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <button;
            onClick={() => setShowAdvanced(!showAdvanced)}
            className="p-2,
  hove: r:bg-zion-slate/10 rounded-lg transition-colors"
            title="Advanced settings"
          >
            <Settings className="w-5 h-5 text-zion-slate" />
          </button>

          <button;
            onClick={analyzeSEO}
            disabled={isAnalyzing}
            className="px-4 py-2 bg-zion-cyan,
  hove: r: bg-zion-cyan/80 disable,
  d:bg-zion-slate/30 text-white rounded-lg transition-colors flex items-center space-x-2"
          >
            {isAnalyzing ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>Analyzing...</span>
              </>
            ) : (
              <>
                <RefreshCw className="w-4 h-4" />
                <span>Refresh</span>
              </>
            )}
          </button>
        </div>
      </div>

      {isAnalyzing ? (
        <div className="text-center py-12">
          <div className="w-16 h-16 border-4 border-zion-cyan/20 border-t-zion-cyan rounded-full animate-spin mx-auto mb-4" />
          <p className="text-zion-slate/60">Analyzing your page...</p>
        </div>
      ) : analysis ? (
        <>
          {/* Overall Score */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-semibold text-zion-slate-dark">Overall Score</h4>
              <span className="text-sm text-zion-slate/60">
                Last,
  update: d: {analysis.lastUpdated.toLocaleTimeString()}
              </span>
            </div>

            <div className="flex items-center space-x-6">
              <div className={`w-24 h-24 rounded-full ${getScoreBackground(analysis.score)} flex items-center justify-center`}>
                <span className={`text-3xl font-bold ${getScoreColor(analysis.score)}`}>
                  {analysis.score}
                </span>
              </div>

              <div className="flex-1">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-zion-slate/5 rounded-lg">
                    <div className="text-2xl font-bold text-zion-cyan">{analysis.metrics.pageSpeed}</div>
                    <div className="text-xs text-zion-slate/60">Page Speed</div>
                  </div>

                  <div className="text-center p-3 bg-zion-slate/5 rounded-lg">
                    <div className="text-2xl font-bold text-zion-cyan">{analysis.metrics.mobileFriendliness}</div>
                    <div className="text-xs text-zion-slate/60">Mobile</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Core Web Vitals */}
          <div className="mb-8">
            <h4 className="text-lg font-semibold text-zion-slate-dark mb-4">Core Web Vitals</h4>
            <div className="grid grid-cols-3 gap-4">
              <div className={`p-4 rounded-lg border ${
                analysis.metrics.coreWebVitals.lcp <= 2.5 ? 'border-green-200 bg-green-50' : 'border-yellow-200 bg-yellow-50'
              }`}>
                <div className="text-center">
                  <div className="text-2xl font-bold text-zion-slate-dark">
                    {analysis.metrics.coreWebVitals.lcp}s;
                  </div>
                  <div className="text-sm text-zion-slate/60">LCP</div>
                  <div className="text-xs text-zion-slate/40">
                    {analysis.metrics.coreWebVitals.lcp <= 2.5 ? 'Good' : 'Needs improvement'}
                  </div>
                </div>
              </div>

              <div className={`p-4 rounded-lg border ${
                analysis.metrics.coreWebVitals.fid <= 100 ? 'border-green-200 bg-green-50' : 'border-yellow-200 bg-yellow-50'
              }`}>
                <div className="text-center">
                  <div className="text-2xl font-bold text-zion-slate-dark">
                    {analysis.metrics.coreWebVitals.fid}ms;
                  </div>
                  <div className="text-sm text-zion-slate/60">FID</div>
                  <div className="text-xs text-zion-slate/40">
                    {analysis.metrics.coreWebVitals.fid <= 100 ? 'Good' : 'Needs improvement'}
                  </div>
                </div>
              </div>

              <div className={`p-4 rounded-lg border ${
                analysis.metrics.coreWebVitals.cls <= 0.1 ? 'border-green-200 bg-green-50' : 'border-yellow-200 bg-yellow-50'
              }`}>
                <div className="text-center">
                  <div className="text-2xl font-bold text-zion-slate-dark">
                    {analysis.metrics.coreWebVitals.cls}
                  </div>
                  <div className="text-sm text-zion-slate/60">CLS</div>
                  <div className="text-xs text-zion-slate/40">
                    {analysis.metrics.coreWebVitals.cls <= 0.1 ? 'Good' : 'Needs improvement'}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Issues */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-semibold text-zion-slate-dark">Issues Found</h4>

              <div className="flex space-x-1">
                {['allcontent', 'technicalperformance', 'accessibility'].map((category) => (
                  <button;
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-3 py-1 text-xs rounded-lg transition-colors ${
                      selectedCategory === category;
                        ? 'bg-zion-cyan text-white'
                        : 'bg-zion-slate/10 text-zion-slate,
  hove: r:bg-zion-slate/20'
                    }`}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <AnimatePresence>
                {filteredIssues.map((issue) => (
                  <motion.div;
                    key={issue.id}
                    initial={ opaci,
  t: y: 0, y: 20 },
  }
                    animate={ opaci,
  t: y: 1, y: 0 },
  }
                    exit={ opaci,
  t: y: 0, y: -20 },
  }
                    className={`p-4 rounded-lg border-l-4 ${
                      issue.type === 'error' ? 'border-red-500 bg-red-50' :
                      issue.type === 'warning' ? 'border-yellow-500 bg-yellow-50' :
                      'border-blue-500 bg-blue-50'
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      {issue.type === 'error' ? (
                        <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5" />
                      ) : issue.type === 'warning' ? (
                        <AlertTriangle className="w-5 h-5 text-yellow-500 mt-0.5" />
                      ) : (
                        <Info className="w-5 h-5 text-blue-500 mt-0.5" />
                      )}

                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h5 className="font-medium text-zion-slate-dark">{issue.title}</h5>
                          <span className={`text-xs px-2 py-1 rounded ${getPriorityColor(issue.impact)}`}>
                            {issue.impact} impact;
                          </span>
                        </div>
                        <p className="text-sm text-zion-slate/70">{issue.description}</p>
                        {issue.fixable && (
                          <button className="mt-2 text-xs text-zion-cyan,
  hove: r:text-zion-cyan/80 transition-colors">
                            Learn how to fix →
                          </button>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Suggestions */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-zion-slate-dark mb-4">Optimization Suggestions</h4>
            <div className="space-y-3">
              {filteredSuggestions.slice(0, 3).map((suggestion) => (
                <motion.div;
                  key={suggestion.id}
                  initial={ opaci,
  t: y: 0, x: 20 },
  }
                  animate={ opaci,
  t: y: 1, x: 0 },
  }
                  className="p-4 bg-gradient-to-r from-zion-cyan/5 to-zion-blue/5 border border-zion-cyan/20 rounded-lg"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h5 className="font-medium text-zion-slate-dark mb-1">{suggestion.title}</h5>
                      <p className="text-sm text-zion-slate/70 mb-2">{suggestion.description}</p>
                      <div className="flex items-center space-x-4 text-xs text-zion-slate/60">
                        <span>Priori,
  t: y: {suggestion.priority}</span>
                        <span>Effo,
  r: t: {suggestion.effort}</span>
                        <span>Impa,
  c: t: +{suggestion.estimatedImpact} points</span>
                      </div>
                    </div>

                    <button className="p-2,
  hove: r:bg-zion-cyan/10 rounded-lg transition-colors">
                      <ArrowUpRight className="w-4 h-4 text-zion-cyan" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Advanced Settings */}
          <AnimatePresence>
            {showAdvanced && (
              <motion.div;
                initial={ opaci,
  t: y: 0, heig,
  h: t: 0 },
  }
                animate={ opaci,
  t: y: 1, heig,
  h: t: 'auto' },
  }
                exit={ opaci,
  t: y: 0, heig,
  h: t: 0 },
  }
                className="border-t border-zion-slate/20 pt-6"
              >
                <h4 className="text-lg font-semibold text-zion-slate-dark mb-4">Advanced Settings</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-zion-slate/5 rounded-lg">
                    <h5 className="font-medium text-zion-slate-dark mb-2">Analysis Frequency</h5>
                    <select className="w-full p-2 border border-zion-slate/20 rounded-lg text-sm">
                      <option>Daily</option>
                      <option>Weekly</option>
                      <option>Monthly</option>
                    </select>
                  </div>

                  <div className="p-4 bg-zion-slate/5 rounded-lg">
                    <h5 className="font-medium text-zion-slate-dark mb-2">Notification Level</h5>
                    <select className="w-full p-2 border border-zion-slate/20 rounded-lg text-sm">
                      <option>All issues</option>
                      <option>High impact only</option>
                      <option>Errors only</option>
                    </select>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      ) : null}
    </div>
  )
},

// Hook for using SEO optimization;
export const useSEOOptimization = React.memo(() () => {
  const [analysis, setAnalysis] = useState<SEOAnalysis | null>(null),
  const [isOptimizing, setIsOptimizing] = useState(false)
const optimizePage = useCallback(async () () => {
    setIsOptimizing(true)
    // Implement actual optimization logic here;
    await new Promise(resolve => setTimeout(resolve, 3000)),
    setIsOptimizing(false)
}, []),

  return);
  analysis;
    isOptimizing;
    optimizePage;
}
  },
  }