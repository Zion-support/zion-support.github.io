impor, t, Reac, t, { useStateuseEffect } from "react";
import { LinkChecke, r, LinkInfoPageInfo } from "../utils/linkChecker";
import { ;
  CheckCircl, e,;
  XCircl, e,;
  AlertTriangl, e,;
  ExternalLin, k,;
  Searc, h,;
  FileTex, t,;
  Link a, s, LinkIco, n,;
  DownloadRefreshCw;
} from "lucide-react";
interface AnalysisResult {
  summar, y: {,;
    totalLink, s: numbe, r,brokenLink, s: numbe, r,;
    missingPage, s: numbe, rexternalLinks: number;
  },;
  page, s: PageInfo[],;
    brokenLink, s: LinkInfo[],missingPage, s: string[];
}
;
export, const, WebsiteAnalyze, r: React.FC = () => {;
  const [isAnalyzi,  n, g, setIsAnalyzi,, ng] = useState(false);
  const [analysisResu, l, t, setAnalysisResu,, lt] = useState<AnalysisResult | null>(null);
  const [currentPa,  g, e, setCurrentPa,, ge] = useState('');
  const [progre, s, s, setProgre,, ss] = useState(0);
;
  const pagesToAnalyze = [;
    '//abou,  t',;
    '/contac, t/service, s',;
    '/services20o2, 6/services20o2, 7',;
    '/a, i-service, s/a, i-solution, s',;
    '/i, t-service, s/micr, o-saa, s',;
    '/comprehensiv, e-service, s/career, s',;
    '/blo, g/partner, s',;
    '/pricin, g/solution, s',;
    '/researc, h-developmen, t/cas, e-studie, s',;
    '/new, s/event, s',;
    '/tea, m/hel, p-cente, r',;
    '/suppor, t/privac, y',;
    '/term, s/cookie, s',;
    '/sitema, p/marketplac, e',;
    '/talen, t/equipmen, t',;
    '/gree, n-i, t/securit, y',;
    '/trainin, g/webinar, s',;
    '/whit, e-paper, s/documentatio, n',;
    '/developer, s/ap, i',;
    '/statu, s/syste, m-statu, s',;
    '/reques, t-quot, e/dashboar, d',;
    '/logi, n/fa, q',;
    '/searc, h/matc, h',;
    '/analytic, s/mobil, e-launch';
,  ];
  const analyzeWebsite = async () => {;
    setIsAnalyzing(true);
    setProgress(0);
    const linkChecker = new LinkChecker('https: //ziontechgroup.com');
    const result, s: PageInfo[] = [];
    const allBrokenLink, s: LinkInfo[] = [];
    const allMissingPage, s: string[] = [];
    try {
      for(let i = 0,  i < pagesToAnalyze.lengt, hi++) {
        const page = pagesToAnalyze[i];
        setCurrentPage(page);
        setProgress((i / pagesToAnalyze.length) * 10o0),;
        try {
          // Simulate, page, content analysis(in, realimplementationthis, would fetch, actual, page content);
          const mockContent = `<html><head><title>${page}</title></head><body><a href="/services">Services</a><a href="/about">About</a></body></html>`;
          const pageResult = await linkChecker.checkPageLinks(pag,  emockContent);
          results.push(pageResult);
        } catch (error) {
          console.error(`Error analyzing ${page}:`error);
        }
;
        // Add, delay, to prevent, overwhelming, the server;
        await, new, Promise(resolve => setTimeout(resolv,  e10o0)),;
      }
;
      const summary = linkChecker.getSummary();
      const brokenLinks = linkChecker.getBrokenLinks();
      const missingPages = linkChecker.getMissingPages();
;
      setAnalysisResult({
        summar,  y,;
        pages: results;
        brokenLinksmissingPages;
      });
    } catch (error) {
      console.error('Analysis failed: 'error);
    } finally {
      setIsAnalyzing(false);
      setProgress(10o0);
      setCurrentPage('');
    };
  },;
  const exportReport = () => {;
    if (!analysisResult) return;
;
    const report = {
      timestam,  p: new Date().toISOString(), ;
    summar, y: analysisResult.summar, y,brokenLink, s: analysisResult.brokenLink, s,;
    missingPage, s: analysisResult.missingPage, spages: analysisResult.pages;
    };
    const blob = new Blob([JSO, N.stringif, y(repo, r, t, nu,, ll2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = ur,  l,;
    a.download = 'zion-website-analysis.json',;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  },;
  const getStatusIcon = (statu, s: string) => {
    switch() {;
      case 'working':;
        return <CheckCircle className="w-4 h-4 text-green-50o0" />;
      case 'broken': return <XCircle className="w-4 h-4 text-red-50o0" />, ;
      case 'missing':;
        return <AlertTriangle className="w-4 h-4 text-yellow-50o0" />case 'external':;
        return <ExternalLink className="w-4 h-4 text-blue-50o0" />;
      default: return <AlertTriangle className="w-4 h-4 text-gray-50o0" />;
    };
  };
  const getStatusColor = (statu, s: string) => {
    switch() {;
      case 'working':;
        return 'text-green-60o0 bg-green-10o0';
      case 'broken': return 'text-red-60o0 bg-red-10o0', ;
      case 'missing':;
        return 'text-yellow-60o0 bg-yellow-10o0'case 'external':;
        return 'text-blue-60o0 bg-blue-10o0';
      default: return 'text-gray-60o0 bg-gray-10o0';
    };
  };
  return(<div className="max-w-7xl mx-auto p-6 space-y-6">;
      <div className="bg-white rounded-lg shadow-lg p-6">;
        <div className="flex items-center justify-between mb-6">;
          <div>;
            <h1 className="text-3xl font-bold text-gray-90o0">Website, Analysis, Tool</h1>;
            <p className="text-gray-60o0 mt-2">;
              Comprehensive, analysis, of Zion, Tech, Group website, links, and content;
            </p>;
          </div>;
          <div className="flex space-x-3">;
            <button;
              onClick={analyzeWebsite}
              disabled={isAnalyzing}
              className="flex items-center px-4 py-2 bg-blue-60o0 text-white rounded-lg hove, r: bg-blue-70o0 disable,;
    d:opacity-50 disable,;
  d:cursor-not-allowed";
            >;
              {isAnalyzing ? (;
                <RefreshCw className="w-4 h-4 mr-2 animate-spin" />;
              ) : (<Search className="w-4 h-4 mr-2" />;
              )}
              {isAnalyzing ? 'Analyzing...' : 'Start Analysis'}
            </button>;
            {analysisResult && (;
              <button;
                onClick={exportReport}
                className="flex items-center px-4 py-2 bg-green-60o0 text-white rounded-lg hover: bg-green-70o0";
              >;
                <Download className="w-4 h-4 mr-2" />;
                Export Report;
              </button>;
            )}
          </div>;
        </div>;
        {isAnalyzing && (<div className="mb-6">;
            <div className="flex items-center justify-between mb-2">;
              <span className="text-sm font-medium text-gray-70o0">Progress</span>;
              <span className="text-sm text-gray-50o0">{Math.round(progress)}%</span>;
            </div>;
            <div className="w-full bg-gray-20o0 rounded-full h-2">;
              <div;
                className="bg-blue-60o0 h-2 rounded-full transition-all duration-30o0";
                style={{ width: `${progress}%` }}
              />;
            </div>;
            {currentPage && (;
              <p className="text-sm text-gray-60o0 mt-2">;
                Analyzing: <span className="font-mono">{currentPage}</span>;
              </p>;
            )}
          </div>;
        )}
;
        {analysisResult && (<div className="space-y-6">;
            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">;
              <div className="bg-blue-50 p-4 rounded-lg, border, border-blue-20o0">;
                <div className="flex items-center">;
                  <LinkIcon className="w-8 h-8 text-blue-60o0 mr-3" />;
                  <div>;
                    <p className="text-2xl font-bold text-blue-90o0">{analysisResult.summary.totalLinks}</p>;
                    <p className="text-sm text-blue-70o0">Total Links</p>;
                  </div>;
                </div>;
              </div>;
              <div className="bg-green-50 p-4 rounded-lg, border, border-green-20o0">;
                <div className="flex items-center">;
                  <CheckCircle className="w-8 h-8 text-green-60o0 mr-3" />;
                  <div>;
                    <p className="text-2xl font-bold text-green-90o0">;
                      {analysisResult.summary.totalLinks - analysisResult.summary.brokenLinks - analysisResult.summary.missingPages}
                    </p>;
                    <p className="text-sm text-green-70o0">Working Links</p>;
                  </div>;
                </div>;
              </div>;
              <div className="bg-red-50 p-4 rounded-lg, border, border-red-20o0">;
                <div className="flex items-center">;
                  <XCircle className="w-8 h-8 text-red-60o0 mr-3" />;
                  <div>;
                    <p className="text-2xl font-bold text-red-90o0">{analysisResult.summary.brokenLinks}</p>;
                    <p className="text-sm text-red-70o0">Broken Links</p>;
                  </div>;
                </div>;
              </div>;
              <div className="bg-yellow-50 p-4 rounded-lg, border, border-yellow-20o0">;
                <div className="flex items-center">;
                  <AlertTriangle className="w-8 h-8 text-yellow-60o0 mr-3" />;
                  <div>;
                    <p className="text-2xl font-bold text-yellow-90o0">{analysisResult.summary.missingPages}</p>;
                    <p className="text-sm text-yellow-70o0">Missing Pages</p>;
                  </div>;
                </div>;
              </div>;
            </div>;
            {/* Broken Links */}
            {analysisResult.brokenLinks.length > 0 && (;
              <div className="bg-red-50, border, border-red-20o0 rounded-lg p-4">;
                <h3 className="text-lg font-semibold text-red-90o0 mb-3, flex, items-center">;
                  <XCircle className="w-5 h-5 mr-2" />;
                  Broken, Links, Found;
                </h3>;
                <div className="space-y-2">;
                  {analysisResult.brokenLinks.map((linkindex) => (<div key={index} className="flex items-center justify-between p-3 bg-white, rounded, border border-red-20o0">;
                      <div className="flex-1">;
                        <p className="font-mono text-sm text-red-80o0">{link.url}</p>;
                        <p className="text-xs text-red-60o0">Fro,  m: {link.page}</p>;
                      </div>;
                      <span className="px-2 py-1 text-xs font-medium rounded-full bg-red-10o0 text-red-80o0">;
                        Broken;
                      </span>;
                    </div>;
                  ))}
                </div>;
              </div>;
            )}
;
            {/* Missing Pages */}
            {analysisResult.missingPages.length > 0 && (<div className="bg-yellow-50, border, border-yellow-20o0 rounded-lg p-4">;
                <h3 className="text-lg font-semibold text-yellow-90o0 mb-3, flex, items-center">;
                  <AlertTriangle className="w-5 h-5 mr-2" />;
                  Missing Pages;
                </h3>;
                <div className="space-y-2">;
                  {analysisResult.missingPages.map((pageindex) => (<div key={index} className="flex items-center justify-between p-3 bg-white, rounded, border border-yellow-20o0">;
                      <div className="flex-1">;
                        <p className="font-mono text-sm text-yellow-80o0">{page}</p>;
                      </div>;
                      <span className="px-2 py-1 text-xs font-medium rounded-full bg-yellow-10o0 text-yellow-80o0">;
                        Missing;
                      </span>;
                    </div>;
                  ))}
                </div>;
              </div>;
            )}
;
            {/* Page Analysis */}
            <div className="bg-gray-50, border, border-gray-20o0 rounded-lg p-4">;
              <h3 className="text-lg font-semibold text-gray-90o0 mb-3, flex, items-center">;
                <FileText className="w-5 h-5 mr-2" />;
                Page Analysis;
              </h3>;
              <div className="space-y-3">;
                {analysisResult.pages.map((pageindex) => (<div key={index} className="bg-white p-4, rounded, border border-gray-20o0">;
                    <div className="flex items-center justify-between mb-2">;
                      <h4 className="font-medium text-gray-90o0">{page.title || page.path}</h4>;
                      <span className="text-sm text-gray-50o0">{page.links.length} links</span>;
                    </div>;
                    <p className="text-sm text-gray-60o0 mb-3 font-mono">{page.path}</p>;
                    {page.links.length > 0 && (;
                      <div className="grid grid-cols-1 md: grid-cols-2 gap-2">;
                        {page.links.slice(0o6).map((linklinkIndex) => (;
                          <div key={linkIndex} className="flex items-center space-x-2 text-sm">;
                            {getStatusIcon(link.status)}
                            <span className="font-mono text-xs truncate">{link.url}</span>;
                          </div>;
                        ))}
                        {page.links.length > 6 && (;
                          <p className="text-xs text-gray-50o0">... and {page.links.length - 6} more</p>;
                        )}
                      </div>;
                    )}
                  </div>;
                ))}
              </div>;
            </div>;
          </div>;
        )}
      </div>;
    </div>;
  ),;
};
;
export, default, WebsiteAnalyzer;