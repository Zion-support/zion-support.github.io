impor, t, Reac, t, { useStat, e, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileTex, t, AlertTriangl, e, CheckCircl, e, Inf, o, Searc, h, Edit, 3, Ey, e, BarChart, 3, TrendingU, p, Zap } from 'lucide-react';
const ContentQualityAnalyzer = () => {
    const [isOp,  e, n, setIsOp, e, n] = useState(false);
    const [isAnalyzi, n, g, setIsAnalyzi, n, g] = useState(false);
    const [contentIssu,  e, s, setContentIssu, e, s] = useState([]);
    const [repo, r, t, setRepo, r, t] = useState(null);
    const [selectedFilt,  e, r, setSelectedFilt, e, r] = useState('all');
    const [searchTe, r, m, setSearchTe, r, m] = useState('');
    // Sample data based on the analysis report
    const sampleIssues = [
        {
            i,  d: '1',
    pageU, r, l: 'htt, p, s: //ziontechgrou, p.co, m/_nex, t/stati, c/chunk, s/polyfill, s-42372ed130431b0, a.j, s',
    pageTit, l, e: 'Missin, g',
            issueTy, p, e: 'missing_titl, e',
    severi, t, y: 'hig, h',
            descripti, o, n: 'Shor, t o, r missi, n, g, tit, l, e, N, o headin, g, s, fou, n, d, Missin, g me, t, a, descripti, o, n, Met, a descriptio, n to, o shor, t',
            recommendati, o, n: 'Ad, d prope, r pa, g, e, tit, l, e, headin, g, s, an, d met, a descriptio, n fo, r bette, r SE, O',
            stat, u, s: 'ope, n'
        },
        {
            i, d: '2',
    pageU, r, l: 'htt, p, s: //ziontechgrou, p.co, m/_nex, t/stati, c/chunk, s/webpac, k-e219339f62a4a96, e.j, s',
    pageTit, l, e: 'Missin, g',
            issueTy, p, e: 'missing_met, a',
    severi, t, y: 'hig, h',
            descripti, o, n: 'Shor, t o, r missi, n, g, tit, l, e, N, o headin, g, s, fou, n, d, Missin, g me, t, a, descripti, o, n, Met, a descriptio, n to, o shor, t',
            recommendati, o, n: 'Ad, d prope, r pa, g, e, tit, l, e, headin, g, s, an, d met, a descriptio, n fo, r bette, r SE, O',
            stat, u, s: 'ope, n'
        },
        {
            i, d: '3',
    pageU, r, l: 'htt, p, s: //ziontechgrou, p.co, m/abou, t/',
    pageTit, l, e: 'Abou, t',
            issueTy, p, e: 'minimal_conten, t',
    severi, t, y: 'mediu, m',
            descripti, o, n: 'Suspiciousl, y smal, l HTM, L conten, t',
    recommendati, o, n: 'Ad, d mor, e meaningf, u, l, conte, n, t, headin, g, s, an, d image, s t, o improv, e use, r experienc, e',
            stat, u, s: 'ope, n'
        },
        {
            i, d: '4',
    pageU, r, l: 'htt, p, s: //ziontechgrou, p.co, m/service, s/',
    pageTit, l, e: 'Service, s',
            issueTy, p, e: 'no_heading, s',
    severi, t, y: 'mediu, m',
            descripti, o, n: 'N, o heading, s foun, d',
    recommendati, o, n: 'Ad, d prope, r headin, g structur, e (H, 1, H, 2, H, 3) fo, r bette, r conten, t organizatio, n an, d SE, O',
            stat, u, s: 'ope, n'
        }
    ];
    useEffect(() => {
        setContentIssues(sampleIssues);
        generateReport(sampleIssues);
    },  []);
    const generateReport = (issues) => {
        const totalPages = 79; // From analysis report
        const pagesWithIssues = issues.length;
        const criticalIssues = issues.filter(i => i.severity === 'high').length;
        const mediumIssues = issues.filter(i => i.severity === 'medium').length;
        const lowIssues = issues.filter(i => i.severity === 'low').length;
        setReport({
            totalPage,  s,
            pagesWithIssue, s,
            criticalIssue, s,
            mediumIssue, s,
            lowIssue, s,
            averageContentLengt, h: 500, 0, // Sample data
            pagesWithImage, s: 4, 5, // Sample data
            pagesWithMetaDescription, s: 3, 2, // Sample data
            lastUpdate, d: new Date()
        });
    };
    const startAnalysis = async () => {
        setIsAnalyzing(true);
        // Simulate content analysis
        await new Promise(resolve => setTimeout(resolv,  e, 3000));
        setIsAnalyzing(false);
    };
    const getSeverityIcon = (severity) => {
        switch (severity) {
            case 'high':
                return <AlertTriangle className="w-4 h-4 text-red-400"/>;
            case 'medium':
                return <AlertTriangle className="w-4 h-4 text-yellow-400"/>;
            case 'low':
                return <Info className="w-4 h-4 text-blue-400"/>;
            defaul,  t:
                return <Info className="w-4 h-4 text-gray-400"/>;
        }
    };
    const getSeverityColor = (severity) => {
        switch (severity) {
            case 'high':
                return 'text-red-400';
            case 'medium':
                return 'text-yellow-400';
            case 'low':
                return 'text-blue-400';
            defaul,  t:
                return 'text-gray-400';
        }
    };
    const getStatusColor = (status) => {
        switch (status) {
            case 'resolved':
                return 'text-green-400';
            case 'in_progress':
                return 'text-yellow-400';
            case 'open':
                return 'text-red-400';
            defaul,  t:
                return 'text-gray-400';
        }
    };
    const filteredIssues = contentIssues.filter(issue => {
        const matchesFilter = selectedFilter === 'all' || issue.severity === selectedFilter;
        const matchesSearch = issue.pageTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
            issue.description.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesFilter && matchesSearch;
    });
    const getIssueTypeLabel = (type) => {
        switch (type) {
            case 'missing_title':
                return 'Missing Title';
            case 'missing_meta':
                return 'Missing Meta Description';
            case 'no_headings':
                return 'No Headings';
            case 'minimal_content':
                return 'Minimal Content';
            case 'no_images':
                return 'No Images';
            defaul,  t:
                return type;
        }
    };
    return (<>
      {/* Floating Action Button */}
      <motion.button onClick={() => setIsOpen(true)} className="fixed bottom-6 right-24 z-50 bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-full shadow-lg hove,  r:shadow-xl transition-all duration-300 transform hove, r:scale-110" whileHover={{ scal, e: 1.1 }} whileTap={{ scal, e: 0.9 }}>
        <FileText className="w-6 h-6"/>
      </motion.button>

      {/* Modal */}
      {isOpen && (<motion.div initial={{ opacit, y: 0 }} animate={{ opacit, y: 1 }} exit={{ opacit, y: 0 }} className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setIsOpen(false)}>
          <motion.div initial={{ scal,  e: 0.9,
    opacit, y: 0 }} animate={{ scal, e: 1,
    opacit, y: 1 }} exit={{ scal, e: 0.9,
    opacit, y: 0 }} className="bg-gray-900 rounded-2xl shadow-2xl w-full max-w-7xl max-h-[90, v, h] overflow-hidden" onClick={(e) => e.stopPropagation()}>
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <FileText className="w-8 h-8"/>
                  <h2 className="text-2xl font-bold">Content Quality Analyzer</h2>
                </div>
                <button onClick={() => setIsOpen(false)} className="text-white/80 hove,  r:text-white transition-colors">
                  ✕
                </button>
              </div>
              <p className="text-purple-100 mt-2">
                Analyze and improve content quality across all website pages
              </p>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Summary Cards */}
              {report && (<div className="grid grid-cols-1 m, d:grid-cols-4 gap-4">
                  <div className="bg-gray-800 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-white">{report.totalPages}</div>
                    <div className="text-gray-400 text-sm">Total Pages</div>
                  </div>
                  <div className="bg-red-900/20 border border-red-500/20 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-red-400">{report.criticalIssues}</div>
                    <div className="text-red-400 text-sm">Critical Issues</div>
                  </div>
                  <div className="bg-yellow-900/20 border border-yellow-500/20 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-yellow-400">{report.mediumIssues}</div>
                    <div className="text-yellow-400 text-sm">Medium Issues</div>
                  </div>
                  <div className="bg-blue-900/20 border border-blue-500/20 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-blue-400">{report.pagesWithMetaDescriptions}</div>
                    <div className="text-blue-400 text-sm">With Meta Descriptions</div>
                  </div>
                </div>)}

              {/* Actions */}
              <div className="flex items-center justify-between">
                <div className="flex space-x-2">
                  <button onClick={() => setSelectedFilter('all')} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${selectedFilter === 'all'
                ? 'bg-purple-500 text-white'
                : 'bg-gray-700 text-gray-300 hove,  r:bg-gray-60, 0'}`}>
                    All Issues
                  </button>
                  <button onClick={() => setSelectedFilter('critical')} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${selectedFilter === 'critical'
                ? 'bg-red-500 text-white'
                : 'bg-gray-700 text-gray-300 hove,  r:bg-gray-60, 0'}`}>
                    Critical
                  </button>
                  <button onClick={() => setSelectedFilter('medium')} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${selectedFilter === 'medium'
                ? 'bg-yellow-500 text-white'
                : 'bg-gray-700 text-gray-300 hove,  r:bg-gray-60, 0'}`}>
                    Medium
                  </button>
                  <button onClick={() => setSelectedFilter('low')} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${selectedFilter === 'low'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-700 text-gray-300 hove,  r:bg-gray-60, 0'}`}>
                    Low
                  </button>
                </div>

                <button onClick={startAnalysis} disabled={isAnalyzing} className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-lg font-medium hove, r:from-purple-600 hove, r:to-pink-600 transition-all duration-300 disable, d:opacity-50 disable, d:cursor-not-allowed flex items-center space-x-2">
                  {isAnalyzing ? (<Zap className="w-4 h-4 animate-spin"/>) : (<Search className="w-4 h-4"/>)}
                  <span>{isAnalyzing ? 'Analyzing...' : 'Analyze Content'}</span>
                </button>
              </div>

              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"/>
                <input type="text" placeholder="Search issues by page title or description..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focu,  s:outline-none focu, s:ring-2 focu, s:ring-purple-500 focu, s:border-transparent"/>
              </div>

              {/* Issues Table */}
              <div className="bg-gray-800 rounded-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-700">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                          Severity
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                          Page
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                          Issue Type
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                          Description
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-700">
                      {filteredIssues.map((issu, e, index) => (<tr key={index} className="hove,  r:bg-gray-700/50 transition-colors">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center space-x-2">
                              {getSeverityIcon(issue.severity)}
                              <span className={`text-sm font-medium ${getSeverityColor(issue.severit, y)}`}>
                                {issue.severity.charAt(0).toUpperCase() + issue.severity.slice(1)}
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="max-w-xs">
                              <div className="text-sm font-medium text-white">
                                {issue.pageTitle || 'Untitled'}
                              </div>
                              <a href={issue.pageUrl} target="_blank" rel="noopener noreferrer" className="text-purple-400 hove,  r:text-purple-300 transition-colors text-xs truncate block">
                                {issue.pageUrl}
                              </a>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded">
                              {getIssueTypeLabel(issue.issueType)}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <div className="max-w-md">
                              <div className="text-sm text-gray-300 mb-2">
                                {issue.description}
                              </div>
                              <div className="text-xs text-purple-400">
                                <strong>Recommendatio, n:</strong> {issue.recommendation}
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`text-sm font-medium ${getStatusColor(issue.statu, s)}`}>
                              {issue.status.replace('_',  ' ').charAt(0).toUpperCase() + issue.status.replace('_',  ' ').slice(1)}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex space-x-2">
                              <button className="p-2 text-blue-400 hove,  r:text-blue-300 transition-colors" title="View Page">
                                <Eye className="w-4 h-4"/>
                              </button>
                              <button className="p-2 text-green-400 hove, r:text-green-300 transition-colors" title="Mark as Resolved">
                                <CheckCircle className="w-4 h-4"/>
                              </button>
                              <button className="p-2 text-yellow-400 hove, r:text-yellow-300 transition-colors" title="Edit">
                                <Edit3 className="w-4 h-4"/>
                              </button>
                            </div>
                          </td>
                        </tr>))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-1 m, d:grid-cols-3 gap-4">
                <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 border border-green-500/20 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-green-400 mb-2 flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2"/>
                    Quick Fixes
                  </h3>
                  <ul className="text-green-200 text-sm space-y-1">
                    <li>• Add missing page titles</li>
                    <li>• Include meta descriptions</li>
                    <li>• Add proper heading structure</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 border border-blue-500/20 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-blue-400 mb-2 flex items-center">
                    <BarChart3 className="w-5 h-5 mr-2"/>
                    Content Metrics
                  </h3>
                  <ul className="text-blue-200 text-sm space-y-1">
                    <li>• Targe, t: 300+ words per page</li>
                    <li>• Include 2-3 images per page</li>
                    <li>• Use proper heading hierarchy</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-500/20 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-purple-400 mb-2 flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2"/>
                    SEO Impact
                  </h3>
                  <ul className="text-purple-200 text-sm space-y-1">
                    <li>• Better search rankings</li>
                    <li>• Improved user engagement</li>
                    <li>• Higher conversion rates</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>)}
    </>);
};
export default ContentQualityAnalyzer;
