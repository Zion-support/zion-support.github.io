
export default function Page() {
interface SEOMetrics {
  pageSpeed: number;
  mobileFriendliness: number;
  accessibility: number;
  bestPractices: number;
  seoScore: number;
coreWebVitals: {

    lcp: number;
    fid: number;
    cls: number
}}

interface SEOOptimizerProps extends React.PropsWithChildren<{}> {

  url?: string;
  autoAnalyze?: boolean;
  showDetails?: boolean;
  onAnalysisComplete?: (analysis: SEOAnalysis) => void}

export const SEOOptimizer: React.FC<SEOOptimizerProps> = ({

  url,
autoAnalyze:  true,;
  showDetails = false,;
  onAnalysisComplete}) => {;
  const [analysis, setAnalysis] = useState<SEOAnalysis | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [currentUrl, setCurrentUrl] = useState(url || window.location.href);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<any>('all');

  // Mock SEO analysis data(in real app, this would come from actual analysis)
  const mockAnalysis: SEOAnalysis = useMemo(() => ({

    score: 87,
    issues[;
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

    ],;
    suggestions[;
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

    ],;
    metrics: {

      pageSpeed: 78,
      mobileFriendliness: 92,
      accessibility: 85,
      bestPractices: 88,
      seoScore: 87,
      coreWebVitals: {
        lcp: 2.8,;
        fid: 45,;
        cls: 0.08}},;
    lastUpdated: new Date () }) , []) ;

  // Analyze SEO
  
    setIsAnalyzing(true) ;

  
    if(selectedCategory === 'all') return analysis?.issues || [];
