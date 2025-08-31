<<<<<<< HEAD
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'product';
  twitterCard?: 'summary' | 'summary_large_image';
  structuredData?: object;
}
=======
import React, { useState, useEffect, useCallback, useMemo } from 'react.ts';
import { motion, AnimatePresence               } from 'framer-motion.ts';
import { Search,
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
  RefreshCw
<<<<<<< HEAD
=======
               } from 'lucide-react.ts';

>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
interface SEOAnalysis {















  score: number;
  issues: SEOIssue[];
  suggestions: SEOSuggestion[];
  metrics: SEOMetrics;
<<<<<<< HEAD
  lastUpdated: Date;
=======
lastUpdated: Date;













}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

interface SEOIssue {















  id: string;
  type: 'error' | 'warning' | 'info';
  title: string;
  description: string;
  impact: 'high' | 'medium' | 'low';
  fixable: boolean;
<<<<<<< HEAD
  category: 'content' | 'technical' | 'performance' | 'accessibility';
=======
category: 'content' | 'technical' | 'performance' | 'accessibility';













}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

interface SEOSuggestion {















  id: string;
  title: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
  effort: 'low' | 'medium' | 'high';
<<<<<<< HEAD
  estimatedImpact: number;
=======
estimatedImpact: number;













}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

interface SEOMetrics {















  pageSpeed: number;
  mobileFriendliness: number;
  accessibility: number;
  bestPractices: number;
  seoScore: number;
coreWebVitals: {;
    lcp: number;
    fid: number;
<<<<<<< HEAD
    cls: number;
  













};
=======
    cls: anyanyanyanyanyanyanyanyanyanyanyanyanyanynumber}}

interface SEOOptimizerProps extends React.PropsWithChildren<{}> {
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

  url?: string;
  autoAnalyze?: boolean;
  showDetails?: boolean;
<<<<<<< HEAD
  onAnalysisComplete?: (analysis: SEOAnalysis)               => void;
=======
  onAnalysisComplete?: (analysis: anyanyanyanyanyanyanyanyanyanyanyanyanyanySEOAnalysis)                => void}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

export const SEOOptimizer: React.FC<SEOOptimizerProps> = ({
  url,
<<<<<<< HEAD
  autoAnalyze = true,
  showDetails = false,
  onAnalysisComplete;
}) => {;
  const [analysis, setAnalysis] = useState<any>(null);
=======
  autoAnalyze = true,;
  showDetails = false,;
  onAnalysisComplete;
}) => {;
  const [analysis, setAnalysis] = useState<any>(null);
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [currentUrl, setCurrentUrl] = useState(url || window.location.href);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<any>('all');

  // Mock SEO analysis data (in real app, this would come from actual analysis)
  const mockAnalysis: SEOAnalysis = useMemo(() => ({
    score: 87,
    issues[
      {
        id: '1',
        type: 'warning',
        title: 'Missing Meta Description',
        description: 'The page is missing a meta description tag, which is important for search engine snippets.',
        impact: 'medium',
        fixable: true,
        category: 'content'
      },
      {
        id: '2',
        type: 'error',
        title: 'Slow Page Load Time',
        description: 'Page load time is above the recommended 3-second threshold.',
        impact: 'high',
        fixable: true,
        category: 'performance'
      },
      {
        id: '3',
        type: 'info',
        title: 'Missing Alt Text',
        description: 'Some images are missing alt text, which affects accessibility.',
        impact: 'low',
        fixable: true,
        category: 'accessibility'

    ],
    suggestions[
      {
        id: '1',
        title: 'Optimize Images',
        description: 'Compress and optimize images to improve page load speed.',
        priority: 'high',
        effort: 'medium',
        estimatedImpact: 15
      },
      {
        id: '2',
        title: 'Add Schema Markup',
        description: 'Implement structured data to improve search engine understanding.',
        priority: 'medium',
        effort: 'low',
        estimatedImpact: 8
      },
      {
        id: '3',
        title: 'Improve Internal Linking',
        description: 'Add more internal links to improve page authority distribution.',
        priority: 'low',
        effort: 'low',
        estimatedImpact: 5

    ],
    metrics: {
      pageSpeed: 78,
      mobileFriendliness: 92,
      accessibility: 85,
      bestPractices: 88,
      seoScore: 87,
<<<<<<< HEAD
      coreWebVitals: {
        lcp: 2.8,
        fid: 45,
        cls: 0.08

    },
    lastUpdated: new Date()
=======
      coreWebVitals: {;
        lcp: 2.8,;
        fid: 45,;
        cls: 0.08;
      };
    },;
    lastUpdated: new Date();
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  }), []);

  // Analyze SEO
  const analyzeSEO = useCallback(async () => {;
    setIsAnalyzing(true);

    // Simulate analysis delay
    await new Promise(resolve => setTimeout(resolve, 2000));

    setAnalysis(mockAnalysis);
    setIsAnalyzing(false);
    onAnalysisComplete?.(mockAnalysis)}, [mockAnalysis, onAnalysisComplete]);

  // Auto-analyze on mount
  useEffect(() => {
    if (autoAnalyze) {
<<<<<<< HEAD
      analyzeSEO();

=======
      analyzeSEO()}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  }, [autoAnalyze, analyzeSEO]);

  // Get score color
<<<<<<< HEAD
  const getScoreColor = (score: anyanyanyanyanyanyanyanyanyanyanyanyanyanynumber)               => {;
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
    if (score >= 90) return 'text-green-500';
    if (score >= 70) return 'text-yellow-500';
    return 'text-red-500'};

  // Get score background
<<<<<<< HEAD
  const getScoreBackground = (score: anyanyanyanyanyanyanyanyanyanyanyanyanyanynumber)               => {;
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
    if (score >= 90) return 'bg-green-100';
    if (score >= 70) return 'bg-yellow-100';
    return 'bg-red-100'};

  // Get impact color
<<<<<<< HEAD
  const getImpactColor = (impact: anyanyanyanyanyanyanyanyanyanyanyanyanyanystring)               => {;
    switch (impact) {;
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
      case 'high': return 'text-red-500';
      case 'medium': return 'text-yellow-500';
      case 'low': return 'text-blue-500';
<<<<<<< HEAD
      default: return 'text-zion-slate';

=======
      default: return 'text-zion-slate'}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  };

  // Get priority color
<<<<<<< HEAD
  const getPriorityColor = (priority: anyanyanyanyanyanyanyanyanyanyanyanyanyanystring)               => {;
    switch (priority) {;
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
      case 'high': return 'text-red-500 bg-red-50 border-red-200';
      case 'medium': return 'text-yellow-500 bg-yellow-50 border-yellow-200';
      case 'low': return 'text-blue-500 bg-blue-50 border-blue-200';
<<<<<<< HEAD
      default: return 'text-zion-slate bg-zion-slate/10 border-zion-slate/200';

=======
      default: return 'text-zion-slate bg-zion-slate/10 border-zion-slate/200'}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  };

  // Filter issues by category
  const filteredIssues = useMemo(() => {;
    if (selectedCategory === 'all') return analysis?.issues || [];
    return analysis?.issues.filter(issue => issue.category === selectedCategory) || []}, [analysis, selectedCategory]);

  // Filter suggestions by priority
  const filteredSuggestions = useMemo(() => {
    return analysis?.suggestions.sort((a, b) => {
<<<<<<< HEAD
      const priorityOrder = {
  high: 3, medium: 2,;
  low: 1 ;

};
      return priorityOrder[b.priority] - priorityOrder[a.priority]}) || []}, [analysis]);
=======
      const priorityOrder = {
  high: 3, medium: 2,;
  ;
  ;
  ;
  ;
  ;
  low: 1 ;






};
      return priorityOrder[b.priority] - priorityOrder[a.priority];
    }) || [];
  }, [analysis]);
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd

  if (!analysis && !isAnalyzing) {
    return (
      <div className = "text-center py-8">
        <Search className="w-12 h-12 text-zion-slate/40 mx-auto mb-4" />
        <p className="text-zion-slate/60">No SEO analysis available</p>
        <button
          onClick={analyzeSEO}
<<<<<<< HEAD
          className="mt-4 px-6 py-2 bg-zion-cyan hover:bg-zion-cyan/80 text-white rounded-lg transition-colors"

          Analyze SEO
        </button>
      </div>
    )};
=======;
          className="mt-4 px-6 py-2 bg-zion-cyan hover:bg-zion-cyan/80 text-white rounded-lg transition-colors";
        >;
          Analyze SEO;
        </button>;
      </div>;
    );
<<<<<<< HEAD
=======
  }
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894

export const SEOOptimizer: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  canonical,
  ogImage = '/og-image.svg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  structuredData
}) => {
  const fullTitle = `${title} | Zion Tech Group`;
  const defaultKeywords = 'AI, Artificial Intelligence, Technology, Innovation, Digital Transformation, Zion Tech Group';
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Zion Tech Group" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@ziontechgroup" />
      
      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#06b6d4" />
      <meta name="msapplication-TileColor" content="#06b6d4" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />
    </Helmet>
  );
};

<<<<<<< HEAD
// Default SEO configuration for Zion Tech Group
export const defaultSEO = {
  title: 'Zion Tech Group - Innovation • Technology • Growth',
  description: 'Leading provider of AI-powered solutions, digital transformation services, and innovative technology solutions. Transform your business with cutting-edge AI, cybersecurity, and cloud solutions.',
  keywords: 'AI, Artificial Intelligence, Technology, Innovation, Digital Transformation, Zion Tech Group, Cybersecurity, Cloud Solutions, Quantum Computing',
  ogImage: '/og-image.svg'
};
=======
// Hook for using SEO optimization
export const useSEOOptimization = () => {;
  const [analysis, setAnalysis] = useState<any>(null);
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
  const [isOptimizing, setIsOptimizing] = useState(false);

  const optimizePage = useCallback(async () => {;
    setIsOptimizing(true);
    // Implement actual optimization logic here
    await new Promise(resolve => setTimeout(resolve, 3000));
    setIsOptimizing(false)}, []);

  return {
    analysis,
    isOptimizing,
    optimizePage
<<<<<<< HEAD
  };
</div></div>};
}}}}}}}}}}}}}
=======
  }};
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
