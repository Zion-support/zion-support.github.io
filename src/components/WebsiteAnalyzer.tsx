import React, { useState, useEffect } from "react"
import { LinkChecker, LinkInfo, PageInfo } from "../utils/linkChecker"
import { ;
  CheckCircle,;
  XCircle, ;
  AlertTriangle, ;
  ExternalLink, ;
  Search, ;
  FileText, ;
  Link as LinkIcon,;
  Download,;
  RefreshCw;
} from "lucide-react"
interface AnalysisResult {;
  summary: {;
    totalLinks: number,brokenLinks: number,missingPages: number,externalLinks: number;
  };
  pages: PageInfo[],brokenLinks: LinkInfo[],missingPages: string[]
};

export const WebsiteAnalyzer: React.FC = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false),;
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null),;
  const [currentPage, setCurrentPage] = useState(''),;
  const [progress, setProgress] = useState(0),;

  const pagesToAnalyze = [;
    '//[^;]*
    '/contact/services',;
    '/services2026/services2027',;
    '/ai-services/ai-solutions',;
    '/it-services/micro-saas',;
    '/comprehensive-services/careers',;
    '/blog/partners',;
    '/pricing/solutions',;
    '/research-development/case-studies',;
    '/news/events',;
    '/team/help-center',;
    '/support/privacy',;
    '/terms/cookies',;
    '/sitemap/marketplace',;
    '/talent/equipment',;
    '/green-it/security',;
    '/training/webinars',;
    '/white-papers/documentation',;
    '/developers/api',;
    '/status/system-status',;
    '/request-quote/dashboard',;
    '/login/faq',;
    '/search/match',;
    '/analytics/mobile-launch'
  ];
  const analyzeWebsite = async () => {;
    setIsAnalyzing(true)
    setProgress(0)
    const linkChecker = new LinkChecker('https: //ziontechgroup.com')
    const results: PageInfo[] = []
    const allBrokenLinks: LinkInfo[] = []
    const allMissingPages: string[] = []
    try {;
      for (let i = 0, i < pagesToAnalyze.length, i++) {;
        const page = pagesToAnalyze[i]
        setCurrentPage(page),;
        setProgress((i / pagesToAnalyze.length) * 100),;

        try {;
          //[^;]*
          const mockContent = `<html><head><title>${page}</title></head><body><a href="/services">Services</a><a href="/about">About</a></body></html>`
          const pageResult = await linkChecker.checkPageLinks(page, mockContent)
          results.push(pageResult),;
        } catch (error) {;
          console.error(`Error analyzing ${page}:`, error),;
        };

        //[^;]*
        await new Promise(resolve => setTimeout(resolve, 100)),;
      };

      const summary = linkChecker.getSummary()
      const brokenLinks = linkChecker.getBrokenLinks()
      const missingPages = linkChecker.getMissingPages()

      setAnalysisResult({;
        summary,;
        pages: results;
        brokenLinks,;
        missingPages;
      }),;
    } catch (error) {;
      console.error('Analysis failed:', error),;
    } finally {;
      setIsAnalyzing(false),;
      setProgress(100),;
      setCurrentPage(''),;
    };
  },;

  const exportReport = () => {;
    if (!analysisResult) return,;

    const report = {;
      timestamp: new Date().toISOString(),summary: analysisResult.summary,brokenLinks: analysisResult.brokenLinks,missingPages: analysisResult.missingPages,pages: analysisResult.pages
    };
    const blob = new Blob([JSON.stringify(report, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url,;
    a.download = 'zion-website-analysis.json',;
    document.body.appendChild(a),;
    a.click(),;
    document.body.removeChild(a),;
    URL.revokeObjectURL(url),;
  },;

  const getStatusIcon = (status: string) => {;
    switch (status) {;
      case 'working':;
        return <[^>]*/>
      case 'broken':;
        return <XCircle className="w-4 h-4 text-red-500" />,;
      case 'missing':;
        return <AlertTriangle className="w-4 h-4 text-yellow-500" />,;
      case 'external':;
        return <ExternalLink className="w-4 h-4 text-blue-500" />,;
      default: return <[^>]*/>
    };
  };
  const getStatusColor = (status: string) => {;
    switch (status) {;
      case 'working':;
        return 'text-green-600 bg-green-100'
      case 'broken':;
        return 'text-red-600 bg-red-100',;
      case 'missing':;
        return 'text-yellow-600 bg-yellow-100',;
      case 'external':;
        return 'text-blue-600 bg-blue-100',;
      default: return 'text-gray-600 bg-gray-100'
    };
  };
  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">;
      <div className="bg-white rounded-lg shadow-lg p-6">;
        <div className="flex items-center justify-between mb-6">;
          <div>;
            <h1 className="text-3xl font-bold text-gray-900">Website Analysis Tool</[^>]*>
            <p className="text-gray-600 mt-2">;
              Comprehensive analysis of Zion Tech Group website links and content;
            </[^>]*>
          </[^>]*>
          <div className="flex space-x-3">;
            <button;
              onClick={analyzeWebsite};
              disabled={isAnalyzing};
              className="[^"]*"
            >;
              {isAnalyzing ? (;
                <[^>]*/>
              ) : (;
                <[^>]*/>
              )};
              {isAnalyzing ? 'Analyzing...' : 'Start Analysis'}
            </[^>]*>
            {analysisResult && (;&& (; (
              <button;
                onClick={exportReport};
                className="[^"]*"
              >;
                <[^>]*/>
                Export Report;
              </[^>]*>
            )};
          </[^>]*>
        </[^>]*>

        {isAnalyzing && (;&& (; (
          <div className="mb-6">;
            <div className="flex items-center justify-between mb-2">;
              <span className="text-sm font-medium text-gray-700">Progress</[^>]*>
              <span className="text-sm text-gray-500">{Math.round(progress)}%</[^>]*>
            </[^>]*>
            <div className="w-full bg-gray-200 rounded-full h-2">;
              <div ;
                className="[^"]*"
                style={{ width: `${progress}%` }};
              />;
            </[^>]*>
            {currentPage && (;&& (; (
              <p className="text-sm text-gray-600 mt-2">;
                Analyzing: <span className="font-mono">{currentPage}</[^>]*>
              </[^>]*>
            )};
          </[^>]*>
        )};

        {analysisResult && (;&& (; (
          <div className="space-y-6">;
            {/* Summary Cards */};
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">;
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">;
                <div className="flex items-center">;
                  <[^>]*/>
                  <div>;
                    <p className="text-2xl font-bold text-blue-900">{analysisResult.summary.totalLinks}</[^>]*>
                    <p className="text-sm text-blue-700">Total Links</[^>]*>
                  </[^>]*>
                </[^>]*>
              </[^>]*>
              ;
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">;
                <div className="flex items-center">;
                  <[^>]*/>
                  <div>;
                    <p className="text-2xl font-bold text-green-900">;
                      {analysisResult.summary.totalLinks - analysisResult.summary.brokenLinks - analysisResult.summary.missingPages};
                    </[^>]*>
                    <p className="text-sm text-green-700">Working Links</[^>]*>
                  </[^>]*>
                </[^>]*>
              </[^>]*>
              ;
              <div className="bg-red-50 p-4 rounded-lg border border-red-200">;
                <div className="flex items-center">;
                  <[^>]*/>
                  <div>;
                    <p className="text-2xl font-bold text-red-900">{analysisResult.summary.brokenLinks}</[^>]*>
                    <p className="text-sm text-red-700">Broken Links</[^>]*>
                  </[^>]*>
                </[^>]*>
              </[^>]*>
              ;
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">;
                <div className="flex items-center">;
                  <[^>]*/>
                  <div>;
                    <p className="text-2xl font-bold text-yellow-900">{analysisResult.summary.missingPages}</[^>]*>
                    <p className="text-sm text-yellow-700">Missing Pages</[^>]*>
                  </[^>]*>
                </[^>]*>
              </[^>]*>
            </[^>]*>

            {/* Broken Links */};
            {analysisResult.brokenLinks.length > 0 && (;&& (; (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">;
                <h3 className="text-lg font-semibold text-red-900 mb-3 flex items-center">;
                  <[^>]*/>
                  Broken Links Found;
                </[^>]*>
                <div className="space-y-2">;
                  {analysisResult.brokenLinks.map((link, index) => (;
                    <div key={index} className="flex items-center justify-between p-3 bg-white rounded border border-red-200">;
                      <div className="flex-1">;
                        <p className="font-mono text-sm text-red-800">{link.url}</[^>]*>
                        <p className="text-xs text-red-600">From: {link.page}</[^>]*>
                      </[^>]*>
                      <span className="px-2 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800">;
                        Broken;
                      </[^>]*>
                    </[^>]*>
                  ))};
                </[^>]*>
              </[^>]*>
            )};

            {/* Missing Pages */};
            {analysisResult.missingPages.length > 0 && (;&& (; (
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">;
                <h3 className="text-lg font-semibold text-yellow-900 mb-3 flex items-center">;
                  <[^>]*/>
                  Missing Pages;
                </[^>]*>
                <div className="space-y-2">;
                  {analysisResult.missingPages.map((page, index) => (;
                    <div key={index} className="flex items-center justify-between p-3 bg-white rounded border border-yellow-200">;
                      <div className="flex-1">;
                        <p className="font-mono text-sm text-yellow-800">{page}</[^>]*>
                      </[^>]*>
                      <span className="px-2 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800">;
                        Missing;
                      </[^>]*>
                    </[^>]*>
                  ))};
                </[^>]*>
              </[^>]*>
            )};

            {/* Page Analysis */};
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">;
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">;
                <[^>]*/>
                Page Analysis;
              </[^>]*>
              <div className="space-y-3">;
                {analysisResult.pages.map((page, index) => (;
                  <div key={index} className="bg-white p-4 rounded border border-gray-200">;
                    <div className="flex items-center justify-between mb-2">;
                      <h4 className="font-medium text-gray-900">{page.title || page.path}</[^>]*>
                      <span className="text-sm text-gray-500">{page.links.length} links</[^>]*>
                    </[^>]*>
                    <p className="text-sm text-gray-600 mb-3 font-mono">{page.path}</[^>]*>
                    {page.links.length > 0 && (;&& (; (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">;
                        {page.links.slice(0, 6).map((link, linkIndex) => (;
                          <div key={linkIndex} className="flex items-center space-x-2 text-sm">;
                            {getStatusIcon(link.status)};
                            <span className="font-mono text-xs truncate">{link.url}</[^>]*>
                          </[^>]*>
                        ))};
                        {page.links.length > 6 && (;&& (; (
                          <p className="text-xs text-gray-500">... and {page.links.length - 6} more</[^>]*>
                        )};
                      </[^>]*>
                    )};
                  </[^>]*>
                ))};
              </[^>]*>
            </[^>]*>
          </[^>]*>
        )};
      </[^>]*>
    </[^>]*>
  ),;
},;

export default WebsiteAnalyzer;