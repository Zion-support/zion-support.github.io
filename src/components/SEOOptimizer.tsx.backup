<<<<<<< HEAD
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '@/components/SEO';
import { Settings } from 'lucide-react';


"autoAnalyze": "tru e",;export default function Page(props: any) {
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
  onAnalysisComplete?: (analysis: SEOAnalysi s) => void}
export const SEOOptimizer: React.FC<SEOOptimizerProps> = ({
  url,
autoAnalyze: tru e,;
  showDetails = false,;
  onAnalysisComplete}) => {;
  const [analysis, setAnalysis] = useState<SEOAnalysis | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState<any>(false);
  const [currentUrl, setCurrentUrl] = useState<any>(url || window.location.href);
  const [showAdvanced, setShowAdvanced] = useState<any>(false);
  const [selectedCategory, setSelectedCategory] = useState<any>('all');
  // Mock SEO analysis data(in real app, this would come from actual analysis)
  const mockAnalysis: SEOAnalysi s = useMemo(() => ({
    score: 8 7,
    issues[ {';
';';
        id: '1',';';
        type: 'warning',';';
        title: 'Missing Meta Description',';';
        description: 'The page is missing a meta description tag, which is important for search engine snippets.',';';
        impact: 'medium',';
        fixable: tru e,';';
        category: 'content'
      },
      {';
';';
        id: '2',';';
        type: 'error',';';
        title: 'Slow Page Load Time',';';
        description: 'Page load time is above the recommended 3-second threshold.',';';
        impact: 'high',';
        fixable: tru e,';';
        category: 'performance'
      },
      {';
';';
        id: '3',';';
        type: 'info',';';
        title: 'Missing Alt Text',';';
        description: 'Some images are missing alt text, which affects accessibility.',';';
        impact: 'low',';
        fixable: tru e,';';
        category: 'accessibility'
    ],;
    suggestions[ {';
';';
        id: '1',';';
        title: 'Optimize Images',';';
        description: 'Compress and optimize images to improve page load speed.',';';
        priority: 'high',';';
        effort: 'medium',
        estimatedImpact: 1 5
      },
      {';
';';
        id: '2',';';
        title: 'Add Schema Markup',';';
        description: 'Implement structured data to improve search engine understanding.',';';
        priority: 'medium',';';
        effort: 'low',
        estimatedImpact: 8
      },
      {';
';';
        id: '3',';';
        title: 'Improve Internal Linking',';';
        description: 'Add more internal links to improve page authority distribution.',';';
        priority: 'low',';';
        effort: 'low',
        estimatedImpact: 5;
  // Mock SEO analysis data(in real app, this would come from actual analysis);
  const "mockAnalysis": "SEOAnalysi s = useMemo(() => ({;
    "score": 8 7",;
    issues[ {;
        "id": '1',;
        "type": 'warning',;
        "title": 'Missing Meta Description',;
        "description": 'The page is missing a meta description tag, which is important for search engine snippets.',;
        "impact": 'medium',;
        "fixable": "tru e",;
        "category": 'content';
      },;
      {;
        "id": '2',;
        "type": 'error',;
        "title": 'Slow Page Load Time',;
        "description": 'Page load time is above the recommended 3-second threshold.',;
        "impact": 'high',;
        "fixable": "tru e",;
        "category": 'performance';
      },;
      {;
        "id": '3',;
        "type": 'info',;
        "title": 'Missing Alt Text',;
        "description": 'Some images are missing alt text, which affects accessibility.',;
        "impact": 'low',;
        "fixable": "tru e",;
        "category": 'accessibility';
    ],;
    suggestions[ {;
        "id": '1',;
        "title": 'Optimize Images',;
        "description": 'Compress and optimize images to improve page load speed.',;
        "priority": 'high',;
        "effort": 'medium',;
        "estimatedImpact": "1 5;
      "},;
      {;
        "id": '2',;
        "title": 'Add Schema Markup',;
        "description": 'Implement structured data to improve search engine understanding.',;
        "priority": 'medium',;
        "effort": 'low',;
        "estimatedImpact": "8;
      "},;
      {;
        id: '3',;
        title: 'Improve Internal Linking',;
        description: 'Add more internal links to improve page authority distribution.',;
        priority: 'low',;
        effort: 'low',;
        estimatedImpact: 5;
    ],;
    metrics: {;
      pageSpeed: 7 8,;
      mobileFriendliness: 9 2,;
      accessibility: 8 5,;
      bestPractices: 8 8,;
      seoScore: 8 7,;
      coreWebVitals: {;
        lcp: 2.8,;
        fid: 4 5,;
        cls: 0.08}},;
    lastUpdated: new Date () }) , []) ;  if(!analysis && !isAnalyzing) {
    return ()
      <div className="text-center py-8">"
        <Search className="w-12 h-12 text-zion-slate/40 mx-auto mb-4"   />"        <p className="text-zion-slate/60">No SEO analysis available</p>
        <button
          onClick={analyzeSEO}"
          className="mt-4 px-6 py-2 bg-zion-cyan hover: b g-zion-cyan/80 text-white rounded-lg transition-colors";
        >;
          Analyze SEO;
        </button>;
      </div>;) }
  return ("
    <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-zion-cyan/20 p-6">
      {/* Header */}"
      <div className="flex items-center justify-between mb-6">"
        <div className="flex items-center space-x-3">"
          <div className="w-10 h-10 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center">"
            <Search className="w-6 h-6 text-white"   />          </div>
          <div>"
            <h3 className="text-xl font-semibold text-zion-slate-dark">SEO Optimizer"
            <p className="text-sm text-zion-slate/60">Performance & optimization insights</p>
          </div>
        </div>
"
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setShowAdvanced(!showAdvanced)}"
            className="p-2 hover: b g-zion-slate/10 rounded-lg transition-colors"
            title="Advanced settings"
"
            <Settings className="w-5 h-5 text-zion-slate"   />          </button>
          <button
            onClick={analyzeSEO}
            disabled={isAnalyzing}"
            className="px-4 py-2 bg-zion-cyan hover: b g-zion-cyan/80 disabled: b g-zion-slate/30 text-white rounded-lg transition-colors flex items-center space-x-2"
            {isAnalyzing ? (;
              <>"
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"  />
                <span>Analyzing...</span>
              </>
            ) : (
              <>"
                <RefreshCw className="w-4 h-4"   />                <span>Refresh</span>
              </>
            )}
          </button>
        </div>
      </div> {isAnalyzing ? ("
        <div className="text-center py-12">;"
          <div className="w-16 h-16 border-4 border-zion-cyan/20 border-t-zion-cyan rounded-full animate-spin mx-auto mb-4"  />"
          <p className="text-zion-slate/60">Analyzing your page...</p>
        </div>;
      ) : analysis ? (
        <>
          {/* Overall Score */}"
          <div className="mb-8">"
            <div className="flex items-center justify-between mb-4">"
              <h4 className="text-lg font-semibold text-zion-slate-dark">Overall Score</h4>"
              <span className="text-sm text-zion-slate/60">
                Last updated: {analysis.lastUpdated.toLocaleTimeString()}
              </span>
            </div>
"
            <div className="flex items-center space-x-6">
              <div className={`w-24 h-24 rounded-full ${getScoreBackground(analysis.score)} flex items-center justify-center`}>`
                <span className={`text-3xl font-bold ${getScoreColor(analysis.score)}`}>
                  {analysis.score}
                </span>
              </div>
"
              <div className="flex-1">"
                <div className="grid grid-cols-2 gap-4">"
                  <div className="text-center p-3 bg-zion-slate/5 rounded-lg">"
                    <div className="text-2xl font-bold text-zion-cyan">{analysis.metrics.pageSpeed}</div>"
                    <div className="text-xs text-zion-slate/60">Page Speed</div>
                  </div>
"
                  <div className="text-center p-3 bg-zion-slate/5 rounded-lg">"
                    <div className="text-2xl font-bold text-zion-cyan">{analysis.metrics.mobileFriendliness}</div>"
                    <div className="text-xs text-zion-slate/60">Mobile</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Core Web Vitals */}"
          <div className="mb-8">"
            <h4 className="text-lg font-semibold text-zion-slate-dark mb-4">Core Web Vitals</h4>"
            <div className="grid grid-cols-3 gap-4">`
              <div className={`p-4 rounded-lg border ${analysis.metrics.coreWebVitals.lcp <= 2.5 ? 'border-green-200 bg-green-50' : 'border-yellow-200 bg-yellow-50'`
              }`}>"
                <div className="text-center">"
                  <div className="text-2xl font-bold text-zion-slate-dark">
                    {analysis.metrics.coreWebVitals.lcp}s
                  </div>"
                  <div className="text-sm text-zion-slate/60">LCP</div>"
                  <div className="text-xs text-zion-slate/40">
                    {analysis.metrics.coreWebVitals.lcp <= 2.5 ? 'Good' : 'Needs improvement'}
                  </div>
                </div>
              </div>
`
              <div className={`p-4 rounded-lg border ${analysis.metrics.coreWebVitals.fid <= 100 ? 'border-green-200 bg-green-50' : 'border-yellow-200 bg-yellow-50'`
              }`}>"
                <div className="text-center">"
                  <div className="text-2xl font-bold text-zion-slate-dark">
                    {analysis.metrics.coreWebVitals.fid}ms
                  </div>"
                  <div className="text-sm text-zion-slate/60">FID</div>"
                  <div className="text-xs text-zion-slate/40">
                    {analysis.metrics.coreWebVitals.fid <= 100 ? 'Good' : 'Needs improvement'}
                  </div>
                </div>
              </div>
`
              <div className={`p-4 rounded-lg border ${analysis.metrics.coreWebVitals.cls <= 0.1 ? 'border-green-200 bg-green-50' : 'border-yellow-200 bg-yellow-50'`
              }`}>"
                <div className="text-center">"
                  <div className="text-2xl font-bold text-zion-slate-dark">
                    {analysis.metrics.coreWebVitals.cls}
                  </div>"
                  <div className="text-sm text-zion-slate/60">CLS</div>"
                  <div className="text-xs text-zion-slate/40">
                    {analysis.metrics.coreWebVitals.cls <= 0.1 ? 'Good' : 'Needs improvement'}
                  </div>
=======
import React, { useState, useEffect, useCallback } from 'react';
import { Search, TrendingUp, Zap, AlertTriangle, RefreshCw, Download } from 'lucide-react';
const SEOOptimizer = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [report, setReport] = useState(null);
    const [selectedPage, setSelectedPage] = useState(null);
    const analyzeSEO = useCallback(async () => {
        setIsAnalyzing(true);
        try {
            // Simulate analyzing all pages for SEO
            const samplePages = [
                {
                    url: '/',
                    title: 'Zion Tech Group - AI-Powered Technology Solutions & Enterprise Services',
                    metaDescription: 'Leading provider of AI-powered technology solutions, quantum computing, cybersecurity, and enterprise digital transformation services.',
                    headings['AI-Powered Business Solutions', 'Comprehensive IT Services', 'Micro-SaaS Solutions'],
                    images['/images/hero-ai-solutions.jpg', '/images/hero-it-services.jpg'],
                    links['/services', '/ai-solutions', '/about', '/contact'],
                    keywords['AI solutions', 'quantum computing', 'cybersecurity', 'digital transformation']
                },
                {
                    url: '/services',
                    title: 'Our Services - Comprehensive Technology Solutions',
                    metaDescription: 'Comprehensive technology services including AI solutions, cloud infrastructure, cybersecurity, and digital transformation.',
                    headings['AI Solutions', 'Cloud & DevOps', 'Cybersecurity', 'Digital Transformation'],
                    images['/images/services-overview.jpg'],
                    links['/ai-solutions', '/cloud-devops', '/cybersecurity', '/about'],
                    keywords['technology services', 'AI solutions', 'cloud infrastructure', 'cybersecurity']
                },
                {
                    url: '/ai-solutions',
                    title: 'AI Solutions - Artificial Intelligence Services',
                    metaDescription: 'Cutting-edge artificial intelligence solutions including machine learning, predictive analytics, and AI automation.',
                    headings['Machine Learning', 'Predictive Analytics', 'AI Automation', 'Business Intelligence'],
                    images['/images/ai-solutions.jpg'],
                    links['/services', '/about', '/contact'],
                    keywords['artificial intelligence', 'machine learning', 'predictive analytics', 'AI automation']
                }
            ];
            const pageAnalyses = samplePages.map(page => {
                const score = calculateSEOScore(page);
                const issues = identifySEOIssues(page);
                const recommendations = generateSEORecommendations(issues);
                return {
                    pageUrl: page.url,
                    title: page.title,
                    metaDescription: page.metaDescription,
                    headings: page.headings,
                    images: page.images,
                    links: page.links,
                    keywords: page.keywords,
                    score,
                    issues,
                    recommendations
                }});
            const totalPages = pageAnalyses.length;
            const averageScore = Math.round(pageAnalyses.reduce((sum, page) => sum + page.score, 0) / totalPages);
            const pagesWithIssues = pageAnalyses.filter(page => page.issues.length > 0).length;
            // Collect all issues and count frequency
            const issueCounts = {};
            pageAnalyses.forEach(page => {
                page.issues.forEach(issue => {
                    issueCounts[issue] = (issueCounts[issue] || 0) + 1})});
            const topIssues = Object.entries(issueCounts)
                .sort(([, a], [, b]) => b - a)
                .slice(0, 5)
                .map(([issue]) => issue);
            const summary = generateSummary(pageAnalyses, topIssues);
            setReport({
                totalPages,
                averageScore,
                pagesWithIssues,
                topIssues,
                pageAnalyses,
                summary
            })}
        catch (error) {
            console.error('Error analyzing SEO:', error)}
        finally {
            setIsAnalyzing(false)}
    }, []);
    useEffect(() => {
        // Auto-analyze SEO when component mounts
        analyzeSEO()}, [analyzeSEO]);
    const calculateSEOScore = (page) => {
        let score = 0;
        let maxScore = 0;
        // Title optimization (0-20 points)
        maxScore += 20;
        if (page.title.length >= 30 && page.title.length <= 60) {
            score += 20}
        else if (page.title.length > 0) {
            score += 10}
        // Meta description (0-15 points)
        maxScore += 15;
        if (page.metaDescription.length >= 120 && page.metaDescription.length <= 160) {
            score += 15}
        else if (page.metaDescription.length > 0) {
            score += 8}
        // Headings (0-15 points)
        maxScore += 15;
        if (page.headings.length >= 3) {
            score += 15}
        else if (page.headings.length >= 1) {
            score += 10}
        // Images (0-10 points)
        maxScore += 10;
        if (page.images.length >= 2) {
            score += 10}
        else if (page.images.length >= 1) {
            score += 5}
        // Internal links (0-15 points)
        maxScore += 15;
        if (page.links.length >= 3) {
            score += 15}
        else if (page.links.length >= 1) {
            score += 10}
        // Keywords (0-10 points)
        maxScore += 10;
        if (page.keywords.length >= 3) {
            score += 10}
        else if (page.keywords.length >= 1) {
            score += 5}
        // URL structure (0-15 points)
        maxScore += 15;
        if (page.url === '/' || page.url.includes('-')) {
            score += 15}
        else if (page.url.length > 0) {
            score += 8}
        return Math.round((score / maxScore) * 100)};
    const issues = [];
        if (!page.title || page.title.length < 30) {
            issues.push('Title is too short (should be 30-60 characters)')}
        else if (page.title.length > 60) {
            issues.push('Title is too long (should be 30-60 characters)')}
        if (!page.metaDescription || page.metaDescription.length < 120) {
            issues.push('Meta description is too short (should be 120-160 characters)')}
        else if (page.metaDescription.length > 160) {
            issues.push('Meta description is too long (should be 120-160 characters)')}
        if (page.headings.length < 2) {
            issues.push('Insufficient heading structure (should have at least 2 headings)')}
        if (page.images.length === 0) {
            issues.push('No images found (consider adding relevant images with alt text)')}
        if (page.links.length < 2) {
            issues.push('Insufficient internal linking (should have at least 2 internal links)')}
        if (page.keywords.length < 2) {
            issues.push('Insufficient keyword targeting (should have at least 2 relevant keywords)')}
        if (page.url !== '/' && !page.url.includes('-')) {
            issues.push('URL could be more SEO-friendly (consider using hyphens)')}
        return issues};
    const generateSEORecommendations = (issues) => {
        const recommendations = [];
        if (issues.some(issue => issue.includes('Title'))) {
            recommendations.push('Optimize page titles with relevant keywords and compelling copy')}
        if (issues.some(issue => issue.includes('Meta description'))) {
            recommendations.push('Write compelling meta descriptions that accurately describe the page content')}
        if (issues.some(issue => issue.includes('heading structure'))) {
            recommendations.push('Add H1, H2, and H3 headings to improve content structure and SEO')}
        if (issues.some(issue => issue.includes('No images'))) {
            recommendations.push('Add relevant images with descriptive alt text for better accessibility and SEO')}
        if (issues.some(issue => issue.includes('internal linking'))) {
            recommendations.push('Add internal links to related pages to improve navigation and SEO')}
        if (issues.some(issue => issue.includes('keyword targeting'))) {
            recommendations.push('Research and include relevant keywords naturally throughout the content')}
        if (issues.some(issue => issue.includes('URL'))) {
            recommendations.push('Use SEO-friendly URLs with hyphens and descriptive terms')}
        recommendations.push('Ensure content is unique, valuable, and addresses user intent');
        recommendations.push('Implement structured data markup for better search engine understanding');
        recommendations.push('Optimize page loading speed for better user experience and SEO');
        return recommendations};
    const generateSummary = (pageAnalyses, topIssues) => {
        const totalPages = pageAnalyses.length;
        const excellentPages = pageAnalyses.filter(page => page.score >= 80).length;
        const goodPages = pageAnalyses.filter(page => page.score >= 60).length;
        const poorPages = pageAnalyses.filter(page => page.score < 40).length;
        let summary = `Analyzed ${totalPages} pages for SEO. `;
        if (excellentPages > 0) {
            summary += `${excellentPages} pages have excellent SEO. `}
        if (goodPages > 0) {
            summary += `${goodPages} pages have good SEO. `}
        if (poorPages > 0) {
            summary += `${poorPages} pages need significant SEO improvement. `}
        if (topIssues.length > 0) {
            summary += `Top SEO issues to address: ${topIssues.slice(0, 3).join(', ')}.`}
        return summary};
    const exportSEOReport = () => {
        if (!report)
            return;
        const csvContent = [
            ['Page URL', 'Title', 'SEO Score', 'Issues', 'Recommendations'],
            ...report.pageAnalyses.map(page => [
                page.pageUrl,
                page.title,
                page.score.toString(),
                page.issues.join('; '),
                page.recommendations.join('; ')
            ])
        ].map(row => row.map(cell => `"${cell}"`).join(',')).join('\n');
        const blob = new Blob([csvContent], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'seo-optimization-report.csv';
        a.click();
        window.URL.revokeObjectURL(url)};
    const getScoreColor = (score) => {
        if (score >= 80)
            return 'text-green-600 bg-green-50 border-green-200';
        if (score >= 60)
            return 'text-yellow-600 bg-yellow-50 border-yellow-200';
        if (score >= 40)
            return 'text-orange-600 bg-orange-50 border-orange-200';
        return 'text-red-600 bg-red-50 border-red-200'};
    const getScoreText = (score) => {
        if (score >= 80)
            return 'Excellent';
        if (score >= 60)
            return 'Good';
        if (score >= 40)
            return 'Fair';
        return 'Poor'};
    return (<div className="fixed bottom-6 right-24 z-50">
      {/* Floating Action Button */}
      <button onClick={() => setIsOpen(!isOpen)} className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105" aria-label="Toggle SEO Optimizer">
        <Search className="w-6 h-6"/>
      </button>

      {/* SEO Optimizer Panel */}
      {isOpen && (<div className="absolute bottom-16 right-0 w-[700px] bg-white dark:bg-gray-900 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <TrendingUp className="w-5 h-5"/>
                SEO Optimizer
              </h3>
              <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white transition-colors">
                ×
              </button>
            </div>
            
            {/* Summary Stats */}
            {report && (<div className="grid grid-cols-3 gap-4 mt-3">
                <div className="text-center">
                  <div className="text-2xl font-bold">{report.totalPages}</div>
                  <div className="text-sm text-purple-100">Pages Analyzed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">{report.averageScore}%</div>
                  <div className="text-sm text-purple-100">Avg SEO Score</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">{report.pagesWithIssues}</div>
                  <div className="text-sm text-pink-100">Need Optimization</div>
>>>>>>> origin/clean-error-fixing-automation
                </div>
              </div>)}
          </div>
<<<<<<< HEAD
          {/* Issues */}"
          <div className="mb-8">"
            <div className="flex items-center justify-between mb-4">"
              <h4 className="text-lg font-semibold text-zion-slate-dark">Issues Found</h4>
"
              <div className="flex space-x-1">
                {['all',content',technical',performance',accessibility'].map((category) => (
                  <button
                    key={category}';
                    onClick={() => setSelectedCategory(category)}`';';
                    className={`px-3 py-1 text-xs rounded-lg transition-colors ${selectedCategory === category'';';
                        ? 'bg-zion-cyan text-white''';';
                        : 'bg-zion-slate/10 text-zion-slate hover: b g-zion-slate/20'`                        : 'bg-zion-slate/10 text-zion-slate "hover": "b g-zion-slate/20'`;
                    "}`}
;
                    onClick={() => setSelectedCategory(category)}`
                    className={`px-3 py-1 text-xs rounded-lg transition-colors ${selectedCategory === category'
                        ? 'bg-zion-cyan text-white''
                        : 'bg-zion-slate/10 text-zion-slate hover: b g-zion-slate/20'`
                    }`}

                    {category.charAt(0) .toUpperCase () + category.slice(1) }
                  </button>) ) }
              </div>
            </div>
"
            <div className="space-y-3">
              <AnimatePresence>
                {filteredIssues.map((issue) => (<motion.div
                    key={issue.id}
                    initial = {;
  { "opacity": "0",;
  "y": "2 0;
"}}
                    animate = {;
  { opacity: 1,;
  y: 0;
}}
                    exit = {
  { opacity: 0,
  y: -20
';
}}`';';
                    className={`p-4 rounded-lg border-l-4 ${issue.type === 'error' ? 'border-red-500 bg-red-50' :'';';
                      issue.type === 'warning' ? 'border-yellow-500 bg-yellow-50' :'';';
                      'border-blue-500 bg-blue-50'`
                    }`}
"';
                    <div className="flex items-start space-x-3">';';
                      {issue.type === 'error' ? ("';
                        <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5"   />';';
                      ) : issue.type === 'warning' ? ("
                        <AlertTriangle className="w-5 h-5 text-yellow-500 mt-0.5"   />
                      ) : ("  { "opacity": "1",;
  "y": "0;
"}}
                    exit = {;
  { "opacity": "0",;
  "y": "-20;
"}}`;
                    className={`p-4 rounded-lg border-l-4 ${issue.type === 'error' ? 'border-red-500 bg-red-50' :';
                      issue.type === 'warning' ? 'border-yellow-500 bg-yellow-50' :';
                      'border-blue-500 bg-blue-50'`;
                    }`}
";
                    <div className="flex items-start space-x-3">;
                      {issue.type === 'error' ? (";
                        <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5"   />;
                      ) : "issue.type === 'warning' ? (";
                        <AlertTriangle className="w-5 h-5 text-yellow-500 mt-0.5"   />;
                      ) : (";
                        <Info className="w-5 h-5 text-blue-500 mt-0.5"   />                      )}  { "opacity": "0",;
  "height": "0;
"}}
                animate = {;
  { "opacity": "1",;
  "height": 'auto';
}}
                exit = {;
  { "opacity": "0",;
  "height": "0;
"}}";
                className="border-t border-zion-slate/20 pt-6";
";
                <h4 className="text-lg font-semibold text-zion-slate-dark mb-4">Advanced Settings</h4>";
                <div className="grid grid-cols-2 gap-4">";
                  <div className="p-4 bg-zion-slate/5 rounded-lg">";
                    <h5 className="font-medium text-zion-slate-dark mb-2">Analysis Frequency</h5>";
                    <select className="w-full p-2 border border-zion-slate/20 rounded-lg text-sm">;
                      <option>Daily</option>;
                      <option>Weekly</option>;
                      <option>Monthly</option>;
                    </select>;
                  </div>;
";
                  <div className="p-4 bg-zion-slate/5 rounded-lg">";
                    <h5 className="font-medium text-zion-slate-dark mb-2">Notification Level</h5>";
                    <select className="w-full p-2 border border-zion-slate/20 rounded-lg text-sm">;
                      <option>All issues</option>;
                      <option>High impact only</option>;
                      <option>Errors only</option>;
                    </select>;
                  </div>;
                </div>;
              </motion.div>;) };
          </AnimatePresence>;
        </>;
      ) : "null"};
                  initial = {
  { opacity: 0,
  x: 2 0
}}
                  animate = {
  { opacity: 1,
  x: 0
}}"
                  className="p-4 bg-gradient-to-r from-zion-cyan/5 to-zion-blue/5 border border-zion-cyan/20 rounded-lg"
"
                  <div className="flex items-start justify-between">"
                    <div className="flex-1">"
                      <h5 className="font-medium text-zion-slate-dark mb-1">{suggestion.title}</h5>"
                      <p className="text-sm text-zion-slate/70 mb-2">{suggestion.description}</p>"
                      <div className="flex items-center space-x-4 text-xs text-zion-slate/60">
                        <span>Priority: {suggestion.priority}</span>
                        <span>Effort: {suggestion.effort}</span>
                        <span>Impact: +{suggestion.estimatedImpact} points</span>
                      </div>
                    </div>
"
                    <button className="p-2 hover: b g-zion-cyan/10 rounded-lg transition-colors">"
                      <ArrowUpRight className="w-4 h-4 text-zion-cyan"   />                    </button>
                  </div>
                </motion.div>;) ) }
            </div>
          </div>
          {/* Advanced Settings */}
          <AnimatePresence>
            {showAdvanced && (<motion.div
                initial = {
  { opacity: 0,
  height: 0
}}
                animate = {
  { opacity: 1,
  height: 'auto'
}}
                exit = {
  { opacity: 0,
  height: 0
}}"
                className="border-t border-zion-slate/20 pt-6"
"
                <h4 className="text-lg font-semibold text-zion-slate-dark mb-4">Advanced Settings</h4>"
                <div className="grid grid-cols-2 gap-4">"
                  <div className="p-4 bg-zion-slate/5 rounded-lg">"
                    <h5 className="font-medium text-zion-slate-dark mb-2">Analysis Frequency</h5>"
                    <select className="w-full p-2 border border-zion-slate/20 rounded-lg text-sm">
                      <option>Daily</option>
                      <option>Weekly</option>
                      <option>Monthly</option>
                    </select>
                  </div>
"
                  <div className="p-4 bg-zion-slate/5 rounded-lg">"
                    <h5 className="font-medium text-zion-slate-dark mb-2">Notification Level</h5>"
                    <select className="w-full p-2 border border-zion-slate/20 rounded-lg text-sm">
                      <option>All issues</option>
                      <option>High impact only</option>
                      <option>Errors only</option>
                    </select>
                  </div>
                </div>
              </motion.div>;) };
          </AnimatePresence>;
        </>
      ) : null};
    </div>;
  )};
// Hook for using SEO optimization
  const [analysis, setAnalysis] = useState < SEOAnalysis | null> (null) ;
  const [isOptimizing, setIsOptimizing] = useState<any>(false);
    setIsOptimizing(true) ;    // Implement actual optimization logic here
    await new Promise(resolve => setTimeout (resolve, 3000) ) ;
    setIsOptimizing(false) }, []) ;

  return {
    analysis,
    isOptimizing,
    optimizePage';
  }};';';
'"`
;,"});,})";
</any>
</motion>
</any>
</SEOAnalysis>';
</SEOOptimizerProps>;';;';'"`
;,"}
    );,})";
</any>
</motion>
</motion>
</motion>
</any>
</any>
</any>
</any>
</SEOAnalysis>
</SEOOptimizerProps>

=======

          {/* Content */}
          <div className="p-4 max-h-[500px] overflow-y-auto">
            {isAnalyzing ? (<div className="flex items-center justify-center py-8">
                <RefreshCw className="w-6 h-6 animate-spin text-purple-600"/>
                <span className="ml-2 text-gray-600">Analyzing SEO...</span>
              </div>) : report ? (<div className="space-y-4">
                {/* Top Issues */}
                {report.topIssues.length > 0 && (<div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                    <h4 className="font-medium text-yellow-800 dark:text-yellow-200 mb-2 flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4"/>
                      Top SEO Issues to Address
                    </h4>
                    <div className="space-y-1">
                      {report.topIssues.slice(0, 3).map((issue, index) => (<div key={index} className="text-sm text-yellow-700 dark:text-yellow-300">
                          • {issue}
                        </div>))}
                    </div>
                  </div>)}

                {/* Pages Analysis */}
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-100 dark:bg-gray-700">
                        <tr>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Page
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            SEO Score
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Status
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Issues
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                        {report.pageAnalyses.map((page, index) => (<tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer" onClick={() => setSelectedPage(page)}>
                            <td className="px-4 py-3">
                              <div className="text-sm font-medium text-gray-900 dark:text-white">
                                {page.title}
                              </div>
                              <div className="text-xs text-gray-500 dark:text-gray-400">
                                {page.pageUrl}
                              </div>
                            </td>
                            <td className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                              {page.score}%
                            </td>
                            <td className="px-4 py-3">
                              <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full border ${getScoreColor(page.score)}`}>
                                {getScoreText(page.score)}
                              </span>
                            </td>
                            <td className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                              {page.issues.length} issues
                            </td>
                          </tr>))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Page Details Modal */}
                {selectedPage && (<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white dark:bg-gray-900 rounded-lg p-6 max-w-2xl w-full mx-4 max-h-[80vh] overflow-y-auto">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          SEO Analysis: {selectedPage.title}
                        </h3>
                        <button onClick={() => setSelectedPage(null)} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                          ×
                        </button>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                            <div className="text-sm text-gray-500 dark:text-gray-400">SEO Score</div>
                            <div className="text-lg font-semibold text-gray-900 dark:text-white">{selectedPage.score}%</div>
                          </div>
                          <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                            <div className="text-sm text-gray-500 dark:text-gray-400">Headings</div>
                            <div className="text-lg font-semibold text-gray-900 dark:text-white">{selectedPage.headings.length}</div>
                          </div>
                          <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                            <div className="text-sm text-gray-500 dark:text-gray-400">Images</div>
                            <div className="text-lg font-semibold text-gray-900 dark:text-white">{selectedPage.images.length}</div>
                          </div>
                          <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                            <div className="text-sm text-gray-500 dark:text-gray-400">Links</div>
                            <div className="text-lg font-semibold text-gray-900 dark:text-white">{selectedPage.links.length}</div>
                          </div>
                        </div>

                        {selectedPage.issues.length > 0 && (<div>
                            <h4 className="font-medium text-red-600 dark:text-red-400 mb-2">SEO Issues Found</h4>
                            <div className="space-y-2">
                              {selectedPage.issues.map((issue, index) => (<div key={index} className="flex items-start gap-2 text-sm text-red-600 dark:text-red-400">
                                  <AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0"/>
                                  <span>{issue}</span>
                                </div>))}
                            </div>
                          </div>)}

                        {selectedPage.recommendations.length > 0 && (<div>
                            <h4 className="font-medium text-green-600 dark:text-green-400 mb-2">SEO Recommendations</h4>
                            <div className="space-y-2">
                              {selectedPage.recommendations.map((rec, index) => (<div key={index} className="flex items-start gap-2 text-sm text-green-600 dark:text-green-400">
                                  <Zap className="w-4 h-4 mt-0.5 flex-shrink-0"/>
                                  <span>{rec}</span>
                                </div>))}
                            </div>
                          </div>)}
                      </div>
                    </div>
                  </div>)}
              </div>) : (<div className="text-center py-8 text-gray-500">
                No SEO analysis data available
              </div>)}
          </div>

          {/* Footer Actions */}
          <div className="bg-gray-50 dark:bg-gray-800 p-3 flex gap-2">
            <button onClick={analyzeSEO} disabled={isAnalyzing} className="flex-1 bg-purple-600 hover:bg-purple-700 disabled:bg-purple-400 text-white px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center justify-center gap-2">
              <RefreshCw className={`w-4 h-4 ${isAnalyzing ? 'animate-spin' : ''}`}/>
              {isAnalyzing ? 'Analyzing...' : 'Analyze SEO'}
            </button>
            <button onClick={exportSEOReport} className="px-3 py-2 bg-pink-600 hover:bg-pink-700 text-white rounded-md transition-colors flex items-center gap-2">
              <Download className="w-4 h-4"/>
              Export
            </button>
          </div>
        </div>)}
    </div>)};
export default SEOOptimizer;
>>>>>>> origin/clean-error-fixing-automation
