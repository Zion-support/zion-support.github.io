
;,"});,"})
            }) }"});,"})
        catch (error) {}"});,"})
';,"});,"})
'';,"});,"})
''';,"});,"})
            // console.error('Error analyzing SEO:', error)}"});,"})
        finally {}"});,"})
            setIsAnalyzing(false)}"});,"})
    }, []);,"});,"})
    useEffect(() => {}"});,"})
        // Auto-analyze SEO when component mounts;,"});,"})
        analyzeSEO()}, [analyzeSEO]);,"});,"})
    const calculateSEOScore = (page) => {}"});,"})
        let score = 0;,"});,"})
        const maxScore = 0;,"});,"})
        // Title optimization(0 - 20 points) maxScore += 20;,"});,"})
        if(page.title.length >= 30 && page.title.length <= 60) {}"});,"})
            score += 20}"});,"})
        else if(page.title.length > 0) {}"});,"})
            score += 10}"});,"})
        // Meta description(0 - 15 points) maxScore += 15;,"});,"})
        if(page.metaDescription.length >= 120 && page.metaDescription.length <= 160) {}"});,"})
            score += 15}"});,"})
        else if(page.metaDescription.length > 0) {}"});,"})
            score += 8}"});,"})
        // Headings(0 - 15 points) maxScore += 15;,"});,"})
        if(page.headings.length >= 3) {}"});,"})
            score += 15}"});,"})
        else if(page.headings.length >= 1) {}"});,"})
            score += 10}"});,"})
        // Images(0 - 10 points) maxScore += 10;,"});,"})
        if(page.images.length >= 2) {}"});,"})
            score += 10}"});,"})
        else if(page.images.length >= 1) {}"});,"})
            score += 5}"});,"})
        // Internal links(0 - 15 points) maxScore += 15;,"});,"})
        if(page.links.length >= 3) {}"});,"})
            score += 15}"});,"})
        else if(page.links.length >= 1) {}"});,"})
            score += 10}"});,"})
        // Keywords(0 - 10 points) maxScore += 10;,"});,"})
        if(page.keywords.length >= 3) {}"});,"})
            score += 10}"});,"})
        else if(page.keywords.length >= 1) {}"});,"})
            score += 5}"});,"})
        // URL structure (0-15 points);,"});,"})
        maxScore += 15';;,"});,"})
        if (page.url === '/' || page.url.includes('-')) {}"});,"})
            score += 15}"});,"})
        else if(page.url.length > 0) {}"});,"})
            score += 8;,"});,"})
;,"});,"})
        return Math.round((score / maxScore) * 100) ;,"});,"})
    };,"});,"})
    const issues = [];,"});,"})
        if (!page.title || page.title.length < 30) {}"});,"})
';,"});,"})
'';,"});,"})
''';,"});,"})
            issues.push('Title is too short (should be 30-60 characters))}"});,"})
        else if (page.title.length > 60) {}"});,"})
';,"});,"})
'';,"});,"})
''';,"});,"})
            issues.push('Title is too long (should be 30-60 characters))}"});,"})
        if (!page.metaDescription || page.metaDescription.length < 120) {}"});,"})
';,"});,"})
'';,"});,"})
''';,"});,"})
            issues.push('Meta description is too short (should be 120-160 characters))}"});,"})
        else if (page.metaDescription.length > 160) {}"});,"})
';,"});,"})
'';,"});,"})
''';,"});,"})
            issues.push('Meta description is too long (should be 120-160 characters))}"});,"})
        if (page.headings.length < 2) {}"});,"})
';,"});,"})
'';,"});,"})
''';,"});,"})
            issues.push('Insufficient heading structure (should have at least 2 headings))}"});,"})
        if (page.images.length === 0) {}"});,"})
';,"});,"})
'';,"});,"})
''';,"});,"})
            issues.push('No images found (consider adding relevant images with alt text))}"});,"})
        if (page.links.length < 2) {}"});,"})
';,"});,"})
'';,"});,"})
''';,"});,"})
            issues.push('Insufficient internal linking (should have at least 2 internal links))}"});,"})
        if (page.keywords.length < 2) {}"});,"})
';,"});,"})
            issues.push('Insufficient keyword targeting (should have at least 2 relevant keywords))}';,"});,"})
        if (page.url !== '/' && !page.url.includes('-')) {}"});,"})
';,"});,"})
'';,"});,"})
''';,"});,"})
            issues.push('URL could be more SEO-friendly (consider using hyphens))}"});,"})
        return issues};,"});,"})
    const generateSEORecommendations = (issues) => {}"});,"})
        const recommendations = []';;,"});,"})
        if (issues.some(issue => issue.includes('Title'))) {}"});,"})
';,"});,"})
            recommendations.push('Optimize page titles with relevant keywords and compelling copy')}';,"});,"})
        if (issues.some(issue => issue.includes('Meta description'))) {}"});,"})
';,"});,"})
            recommendations.push('Write compelling meta descriptions that accurately describe the page content')}';,"});,"})
        if (issues.some(issue => issue.includes('heading structure'))) {}"});,"})
';,"});,"})
            recommendations.push('Add H1, H2, and H3 headings to improve content structure and SEO')}';,"});,"})
        if (issues.some(issue => issue.includes('No images'))) {}"});,"})
';,"});,"})
            recommendations.push('Add relevant images with descriptive alt text for better accessibility and SEO')}';,"});,"})
        if (issues.some(issue => issue.includes('internal linking'))) {}"});,"})
';,"});,"})
            recommendations.push('Add internal links to related pages to improve navigation and SEO')}';,"});,"})
        if (issues.some(issue => issue.includes('keyword targeting'))) {}"});,"})
';,"});,"})
            recommendations.push('Research and include relevant keywords naturally throughout the content')}';,"});,"})
        if (issues.some(issue => issue.includes('URL'))) {}"});,"})
';,"});,"})
'';,"});,"})
''';,"});,"})
            recommendations.push('Use SEO-friendly URLs with hyphens and descriptive terms')}''';,"});,"})
        recommendations.push('Ensure content is unique, valuable, and addresses user intent')';'';,"});,"})
        recommendations.push('Implement structured data markup for better search engine understanding')';'';,"});,"})
        recommendations.push('Optimize page loading speed for better user experience and SEO');,"});,"})
        return recommendations};,"});,"})
    const generateSummary = (pageAnalyses, topIssues) => {}"});,"})
        const totalPages = pageAnalyses.length;,"});,"})
        const excellentPages = pageAnalyses.filter(page => page.score >= 80) .length;,"});,"})
        const goodPages = pageAnalyses.filter(page => page.score >= 60) .length;,"});,"})
        const poorPages = pageAnalyses.filter(page => page.score < 40) .length;,"});,"})
        let summary = `Analyzed ${totalPages} pages for SEO.`;,"});,"})
        if(excellentPages > 0) {}"});,"})
`;,"});,"})
``;,"});,"})
```;,"});,"})
````;,"});,"})
            summary += `${excellentPages} pages have excellent SEO. `}"});,"})
        if (goodPages > 0) {}"});,"})
`;,"});,"})
``;,"});,"})
```;,"});,"})
````;,"});,"})
            summary += `${goodPages} pages have good SEO. `}"});,"})
        if (poorPages > 0) {}"});,"})
`;,"});,"})
``;,"});,"})
```;,"});,"})
````;,"});,"})
            summary += `${poorPages} pages need significant SEO improvement. `}"});,"})
        if (topIssues.length > 0) {}"});,"})
'`;,"});,"})
'`'`;,"});,"})
'`'`'`;,"});,"})
'`'`'`'`;,"});,"})
            summary += `Top SEO issues to address: ${topIssues.slice(0, 3).join(',)}.`}"});,"})
        return summary};,"});,"})
    const exportSEOReport = () => {}"});,"})
        if (!report);,"});,"})
            return';;,"});,"})
        const csvContent = ['';,"});,"})
            ['Page URL',Title',SEO Score',Issues',Recommendations'],;,"});,"})
            ...report.pageAnalyses.map(page => [page.pageUrl, ';,"});,"})
                page.title,'';,"});,"})
                page.score.toString(), '''`;,"});,"})
                page.issues.join('';), ''`'`;,"});,"})
                page.recommendations.join('';)'`'`'`;,"});,"})
            ])'`'`'`'`;,"});,"})
        ].map(row => row.map(cell => `"${cell}"`).join(',)).join('\n')';'';,"});,"})
        const blob = new Blob([csvContent], { type: 'text/csv' })';';,"});,"})
        const url = window.URL.createObjectURL(blob)';'';,"});,"})
        const a = document.createElement('a')';';,"});,"})
        a.href = url';'';,"});,"})
        a.download = 'seo-optimization-report.csv';,"});,"})
        a.click();,"});,"})
        window.URL.revokeObjectURL(url)};,"});,"})
    const getScoreColor = (score) => {}"});,"})
        if (score >= 80)';,"});,"})
            return 'text-green-600 bg-green-50 border-green-200';,"});,"})
        if (score >= 60)';,"});,"})
            return 'text-yellow-600 bg-yellow-50 border-yellow-200';,"});,"})
        if (score >= 40)';,"});,"})
            return 'text-orange-600 bg-orange-50 border-orange-200'';;,"});,"})
        return 'text-red-600 bg-red-50 border-red-200'};,"});,"})
    const getScoreText = (score) => {}"});,"})
        if (score >= 80)';,"});,"})
            return 'Excellent';,"});,"})
        if (score >= 60)';,"});,"})
            return 'Good';,"});,"})
        if (score >= 40)';,"});,"})
            return 'Fair'';""";,"});,"})
        return 'Poor'};"""";,"});,"})
    return (<div className="fixed bottom-6 right-24 z-50">""";,"});,"})
      {/* Floating Action Button */}"""";,"});,"})
      <button onClick={() => setIsOpen(!isOpen)} className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105" aria-label="Toggle SEO Optimizer">"""";,"});,"})
        <Search className="w-6 h-6"/>;,"});,"})
      </button>;,"});,"})
""";,"});,"})
      {/* SEO Optimizer Panel */}"""";,"});,"})
      {isOpen && (<div className="absolute bottom-16 right-0 w-[700px] bg-white dark:bg-gray-900 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">""";,"});,"})
          {/* Header */}"""";,"});,"})
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4">"""";,"});,"})
            <div className="flex items-center justify-between">"""";,"});,"})
              <h3 className="text-lg font-semibold flex items-center gap-2">"""";,"});,"})
                <TrendingUp className="w-5 h-5"/>;,"});,"})
                SEO Optimizer""";,"});,"})
              </h3>"""";,"});,"})
              <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white transition-colors">;,"});,"})
                ×;,"});,"})
              </button>;,"});,"})
            </div>;,"});,"})
""";,"});,"})
            {/* Summary Stats */}"""";,"});,"})
            {report && (<div className="grid grid-cols-3 gap-4 mt-3">"""";,"});,"})
                <div className="text-center">"""";,"});,"})
                  <div className="text-2xl font-bold">{report.totalPages}</div>"""";,"});,"})
                  <div className="text-sm text-purple-100">Pages Analyzed</div>""";,"});,"})
                </div>"""";,"});,"})
                <div className="text-center">"""";,"});,"})
                  <div className="text-2xl font-bold">{report.averageScore}%</div>"""";,"});,"})
                  <div className="text-sm text-purple-100">Avg SEO Score</div>""";,"});,"})
                </div>"""";,"});,"})
                <div className="text-center">"""";,"});,"})
                  <div className="text-2xl font-bold">{report.pagesWithIssues}</div>"""";,"});,"})
                  <div className="text-sm text-pink-100">Need Optimization</div>;,"});,"})
                </div>;,"});,"})
              </div>) }"});,"})
          </div>;,"});,"})
""";,"});,"})
          {/* Content */}"""";,"});,"})
          <div className="p-4 max-h-[500px] overflow-y-auto">"""";,"});,"})
            {isAnalyzing ? (<div className="flex items-center justify-center py-8">"""";,"});,"})
                <RefreshCw className="w-6 h-6 animate-spin text-purple-600"/>"""";,"});,"})
                <span className="ml-2 text-gray-600">Analyzing SEO...</span>"""";,"});,"})
              </div>) : report ? (<div className="space-y-4">""";,"});,"})
                {/* Top Issues */}"""";,"});,"})
                {report.topIssues.length > 0 && (<div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">"""";,"});,"})
                    <h4 className="font-medium text-yellow-800 dark:text-yellow-200 mb-2 flex items-center gap-2">"""";,"});,"})
                      <AlertTriangle className="w-4 h-4"/>;,"});,"})
                      Top SEO Issues to Address""";,"});,"})
                    </h4>"""";,"});,"})
                    <div className="space-y-1">"""";,"});,"})
                      {report.topIssues.slice(0, 3).map((issue, index) => (<div key={index} className="text-sm text-yellow-700 dark:text-yellow-300">;,"});,"})
                          • {issue}"});,"})
                        </div>) ) }"});,"})
                    </div>;,"});,"})
                  </div>) }"});,"})
""";,"});,"})
                {/* Pages Analysis */}"""";,"});,"})
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden">"""";,"});,"})
                  <div className="overflow-x-auto">"""";,"});,"})
                    <table className="w-full">"""";,"});,"})
                      <thead className="bg-gray-100 dark:bg-gray-700">""";,"});,"})
                        <tr>"""";,"});,"})
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">;,"});,"})
                            Page""";,"});,"})
                          </th>"""";,"});,"})
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">;,"});,"})
                            SEO Score""";,"});,"})
                          </th>"""";,"});,"})
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">;,"});,"})
                            Status""";,"});,"})
                          </th>"""";,"});,"})
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">;,"});,"})
                            Issues;,"});,"})
                          </th>;,"});,"})
                        </tr>""";,"});,"})
                      </thead>"""";,"});,"})
                      <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">"""";,"});,"})
                        {report.pageAnalyses.map((page, index) => (<tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer" onClick={() => setSelectedPage(page)}>"""";,"});,"})
                            <td className="px-4 py-3">"""";,"});,"})
                              <div className="text-sm font-medium text-gray-900 dark:text-white">;,"});,"})
                                {page.title}""";,"});,"})
                              </div>"""";,"});,"})
                              <div className="text-xs text-gray-500 dark:text-gray-400">;,"});,"})
                                {page.pageUrl}"});,"})
                              </div>""";,"});,"})
                            </td>"""";,"});,"})
                            <td className="px-4 py-3 text-sm text-gray-900 dark:text-white">;,"});,"})
                              {page.score}%""";,"});,"})
                            </td>""`;,"});,"})
                            <td className="px-4 py-3">``;,"});,"})
                              <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full border ${getScoreColor(page.score)}`}>;,"});,"})
                                {getScoreText(page.score)}"});,"})
                              </span>""";,"});,"})
                            </td>"""";,"});,"})
                            <td className="px-4 py-3 text-sm text-gray-900 dark:text-white">;,"});,"})
                              {page.issues.length} issues;,"});,"})
                            </td>;,"});,"})
                          </tr>) ) }"});,"})
                      </tbody>;,"});,"})
                    </table>;,"});,"})
                  </div>;,"});,"})
                </div>;,"});,"})
""";,"});,"})
                {/* Page Details Modal */}"""";,"});,"})
                {selectedPage && (<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">"""";,"});,"})
                    <div className="bg-white dark:bg-gray-900 rounded-lg p-6 max-w-2xl w-full mx-4 max-h-[80vh] overflow-y-auto">"""";,"});,"})
                      <div className="flex items-center justify-between mb-4">"""";,"});,"})
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">;,"});,"})
                          SEO Analysis: {selectedPage.title}""";,"});,"})
                        </h3>"""";,"});,"})
                        <button onClick={() => setSelectedPage(null)} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">;,"});,"})
                          ×;,"});,"})
                        </button>;,"});,"})
                      </div>""";,"});,"})
"""";,"});,"})
                      <div className="space-y-4">"""";,"});,"})
                        <div className="grid grid-cols-2 gap-4">"""";,"});,"})
                          <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">"""";,"});,"})
                            <div className="text-sm text-gray-500 dark:text-gray-400">SEO Score</div>"""";,"});,"})
                            <div className="text-lg font-semibold text-gray-900 dark:text-white">{selectedPage.score}%</div>""";,"});,"})
                          </div>"""";,"});,"})
                          <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">"""";,"});,"})
                            <div className="text-sm text-gray-500 dark:text-gray-400">Headings</div>"""";,"});,"})
                            <div className="text-lg font-semibold text-gray-900 dark:text-white">{selectedPage.headings.length}</div>""";,"});,"})
                          </div>"""";,"});,"})
                          <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">"""";,"});,"})
                            <div className="text-sm text-gray-500 dark:text-gray-400">Images</div>"""";,"});,"})
                            <div className="text-lg font-semibold text-gray-900 dark:text-white">{selectedPage.images.length}</div>""";,"});,"})
                          </div>"""";,"});,"})
                          <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">"""";,"});,"})
                            <div className="text-sm text-gray-500 dark:text-gray-400">Links</div>"""";,"});,"})
                            <div className="text-lg font-semibold text-gray-900 dark:text-white">{selectedPage.links.length}</div>;,"});,"})
                          </div>;,"});,"})
                        </div>;,"});,"})
""";,"});,"})
                        {selectedPage.issues.length > 0 && (<div>"""";,"});,"})
                            <h4 className="font-medium text-red-600 dark:text-red-400 mb-2">SEO Issues Found</h4>"""";,"});,"})
                            <div className="space-y-2">"""";,"});,"})
                              {selectedPage.issues.map((issue, index) => (<div key={index} className="flex items-start gap-2 text-sm text-red-600 dark:text-red-400">"""";,"});,"})
                                  <AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0"/>;,"});,"})
                                  <span>{issue}</span>;,"});,"})
                                </div>) ) }"});,"})
                            </div>;,"});,"})
                          </div>) }"});,"})
""";,"});,"})
                        {selectedPage.recommendations.length > 0 && (<div>"""";,"});,"})
                            <h4 className="font-medium text-green-600 dark:text-green-400 mb-2">SEO Recommendations</h4>"""";,"});,"})
                            <div className="space-y-2">"""";,"});,"})
                              {selectedPage.recommendations.map((rec, index) => (<div key={index} className="flex items-start gap-2 text-sm text-green-600 dark:text-green-400">"""";,"});,"})
                                  <Zap className="w-4 h-4 mt-0.5 flex-shrink-0"/>;,"});,"})
                                  <span>{rec}</span>;,"});,"})
                                </div>) ) }"});,"})
                            </div>;,"});,"})
                          </div>) }"});,"})
                      </div>;,"});,"})
                    </div>""";,"});,"})
                  </div>)}"""";,"});,"})
              </div>) : (<div className="text-center py-8 text-gray-500">;,"});,"})
                No SEO analysis data available;,"});,"})
              </div>) }"});,"})
          </div>;,"});,"})
""";,"});,"})
          {/* Footer Actions */}"""";,"});,"})
          <div className="bg-gray-50 dark:bg-gray-800 p-3 flex gap-2">"'"`;,"});,"})
            <button onClick={analyzeSEO} disabled={isAnalyzing} className="flex-1 bg-purple-600 hover:bg-purple-700 disabled:bg-purple-400 text-white px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center justify-center gap-2">'`'`;,"});,"})
              <RefreshCw className={`w-4 h-4 ${isAnalyzing ? 'animate-spin' : ''}`}/>';,"});,"})
              {isAnalyzing ? 'Analyzing...' : 'Analyze SEO'}""";,"});,"})
            </button>"""";,"});,"})
            <button onClick={exportSEOReport} className="px-3 py-2 bg-pink-600 hover:bg-pink-700 text-white rounded-md transition-colors flex items-center gap-2">"""";,"});,"})
              <Download className="w-4 h-4"/>;,"});,"})
              Export;,"});,"})
            </button>;,"});,"})
          </div>;,"});,"})
        </div>)}"});,"})
    </div>)};,"});,"})
export default SEOOptimizer;,"});,"})
}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}"});,"})
;,"});,"})
export { SEOOptimizer };,"});,"})
;,"});,"})
export { SEOOptimizer };,"});,"})
;,"});,"})
export { SEOOptimizer };,"});,"})
;,"});,"})
export { SEOOptimizer };,"});,"})
;,"});,"})
export { SEOOptimizer };,"});,"})

import { Search, TrendingUp, Zap, AlertTriangle, RefreshCw, Download } from 'lucide-react';
""
}}}

                }
            ];&apos;&apos;
            const pageAnalyses = samplePages.map(page => {}
                const;const;const score = calculateSEOScore(page);
                const issues = identifySEOIssues(page);
                const recommendations = generateSEORecommendations(issues);
                return {}
                    pageUrl: page.url,;
                    title: page.title,;
                    metaDescription: page.metaDescription,;
                    headings: page.headings,;
                    images: page.images,;
                    links: page.links,;
                    keywords: page.keywords,;
                    score,;
                    issues,;
                    recommendations}});
            const totalPages = pageAnalyses.length;
            const averageScore = Math.round(pageAnalyses.reduce ( (sum, page) => sum + page.score, 0) / totalPages) ;
            const pagesWithIssues = pageAnalyses.filter(page => page.issues.length > 0) .length;
            // Collect all issues and count frequency;
            const issueCounts = {}
            pageAnalyses.forEach(page => {}
                page.issues.forEach(issue => {}
                    issueCounts[issue] = (issueCounts[issue] || 0) + 1})});
            const topIssues = Object.entries(issueCounts);
                .sort(([a], [b]) => b - a);
                .slice(0, 5);
                .map(([issue]) => issue);
            const summary = generateSummary(pageAnalyses, topIssues);
            setReport({}
                totalPages,;
                averageScore,;
                pagesWithIssues,;
                topIssues,;
                pageAnalyses,;
                summary})}
        catch (error) {}
'';';';
            // console.error('Error analyzing SEO:', error)}

        finally {}
            setIsAnalyzing(false)}
    }, []);
    useEffect(() => {}
        // Auto-analyze SEO when component mounts;
        analyzeSEO()}, [analyzeSEO]);&apos;&apos;
    const calculateSEOScore = (page) => {}
        let score = 0;
        let maxScore = 0
        // Title optimization(0 - 20 points) maxScore += 20
        if(page.title.length >= 30 && page.title.length <= 60) {}
            score += 20}
        else if(page.title.length > 0) {}
            score += 10}
        // Meta description(0 - 15 points) maxScore += 15;
        if(page.metaDescription.length >= 120 && page.metaDescription.length <= 160) {}
            score += 15}
        else if(page.metaDescription.length > 0) {}
            score += 8}
        // Headings(0 - 15 points) maxScore += 15;
        if(page.headings.length >= 3) {}
            score += 15}
        else if(page.headings.length >= 1) {}
            score += 10}
        // Images(0 - 10 points) maxScore += 10;
        if(page.images.length >= 2) {}
            score += 10}
        else if(page.images.length >= 1) {}
            score += 5}
        // Internal links(0 - 15 points) maxScore += 15;
        if(page.links.length >= 3) {}
            score += 15}
        else if(page.links.length >= 1) {}
            score += 10}
        // Keywords(0 - 10 points) maxScore += 10;
        if(page.keywords.length >= 3) {}
            score += 10}
        else if(page.keywords.length >= 1) {}
            score += 5}
        // URL structure (0-15 points);
        maxScore += 15''
        if (page.url === '/' || page.url.includes('-')) {}

            score += 15}
        else if(page.url.length > 0) {}
            score += 8}
        return Math.round((score / maxScore) * 100) }
    const issues = [];
        if (!page.title || page.title.length < 30) {}
'';';';
            issues.push('Title is too short (should be 30-60 characters))}
        else if (page.title.length > 60) {}
'';';';
            issues.push('Title is too long (should be 30-60 characters))}
        if (!page.metaDescription || page.metaDescription.length < 120) {}
'';';';
            issues.push('Meta description is too short (should be 120-160 characters))}
        else if (page.metaDescription.length > 160) {}
'';';';
            issues.push('Meta description is too long (should be 120-160 characters))}
        if (page.headings.length < 2) {}
'';';';
            issues.push('Insufficient heading structure (should have at least 2 headings))}
        if (page.images.length === 0) {}
'';';';
            issues.push('No images found (consider adding relevant images with alt text))}
        if (page.links.length < 2) {}
'';';';
            issues.push('Insufficient internal linking (should have at least 2 internal links))}
        if (page.keywords.length < 2) {}
'';
            issues.push('Insufficient keyword targeting (should have at least 2 relevant keywords))}';
        if (page.url !== '/' && !page.url.includes('-')) {}
'';';';
            issues.push('URL could be more SEO-friendly (consider using hyphens))}
        return issues}
    const generateSEORecommendations = (issues) => {}
        const recommendations = []'';
        if (issues.some(issue => issue.includes('Title'))) {}
'';
            recommendations.push('Optimize page titles with relevant keywords and compelling copy')}'';
        if (issues.some(issue => issue.includes('Meta description'))) {}
'';
            recommendations.push('Write compelling meta descriptions that accurately describe the page content')}'';
        if (issues.some(issue => issue.includes('heading structure'))) {}
'';
            recommendations.push('Add H1, H2, and H3 headings to improve content structure and SEO')}'';
        if (issues.some(issue => issue.includes('No images'))) {}
'';
            recommendations.push('Add relevant images with descriptive alt text for better accessibility and SEO')}'';
        if (issues.some(issue => issue.includes('internal linking'))) {}
'';
            recommendations.push('Add internal links to related pages to improve navigation and SEO')}'';
        if (issues.some(issue => issue.includes('keyword targeting'))) {}
'';
            recommendations.push('Research and include relevant keywords naturally throughout the content')}'';
        if (issues.some(issue => issue.includes('URL'))) {}
'';';';
            recommendations.push('Use SEO-friendly URLs with hyphens and descriptive terms')}'';
        recommendations.push('Ensure content is unique, valuable, and addresses user intent')'';;
        recommendations.push('Implement structured data markup for better search engine understanding')'';;
        recommendations.push('Optimize page loading speed for better user experience and SEO');
        return recommendations}

    const generateSummary = (pageAnalyses, topIssues) => {}
        const totalPages = pageAnalyses.length;
        const excellentPages = pageAnalyses.filter(page => page.score >= 80) .length
        const goodPages = pageAnalyses.filter(page => page.score >= 60) .length
        const poorPages = pageAnalyses.filter(page => page.score < 40) .length;
        let summary = `Analyzed ${totalPages} pages for SEO.`;
        if(excellentPages > 0) {}
`;
``;
```;
````;
            summary += `${excellentPages} pages have excellent SEO. `}
        if (goodPages > 0) {}
`;
``;
```;
````;
            summary += `${goodPages} pages have good SEO. `}
        if (poorPages > 0) {}
`;
``;
```;
````;
            summary += `${poorPages} pages need significant SEO improvement. `}
        if (topIssues.length > 0) {}
&apos;`;
&apos;`&apos;`;
&apos;`&apos;`&apos;`;
&apos;`&apos;`&apos;`&apos;`;
            summary += `Top SEO issues to address: ${topIssues.slice(0, 3).join(&apos;,)}.`}
        return summary}&apos;&apos;
    const exportSEOReport = () => {}
        if (!report);
            return';&apos;&apos;
        const csvContent = [&apos';;
            [&apos;Page URL&apos;,Title&apos;,SEO Score&apos;,Issues&apos;,Recommendations&apos;]
            ...report.pageAnalyses.map(page => [page.pageUrl, ';
                page.title,&apos';;
                page.score.toString(),&apos;&apos';`;
                page.issues.join(&apos;),&apos;&apos;`&apos;`;
                page.recommendations.join(&apos;)&apos;`&apos;`&apos;`;
            ])&apos;`&apos;`&apos;`&apos;`;
        ].map(row => row.map(cell => `&apos;${cell}&apos;`).join(&apos;,)).join(&apos;\n&apos;)'';;&apos;&apos;
        const blob = new Blob([csvContent], { type: &apos;text/csv&apos; })';&apos;&apos;
        const url = window.URL.createObjectURL(blob)'';;&apos;&apos;
        const a = document.createElement(&apos;a&apos;)';
                page.recommendations.join(')'`'`'`;
            ])'`'`'`'`;
        ].map(row => row.map(cell => `'${cell}'`).join(',)).join('\n')'';';
        const blob = new Blob([csvContent], { type: 'text/csv' })'';
        const url = window.URL.createObjectURL(blob)'';;
        const a = document.createElement('a')'';

        a.href = url'';;
        a.download = &apos;seo-optimization-report.csv';
        a.click();
        window.URL.revokeObjectURL(url)}&apos;&apos;
    const getScoreColor = (score) => {}
        if (score >= 80)';
            return &apos;text-green-600 bg-green-50 border-green-200';
        if (score >= 60)';
            return &apos;text-yellow-600 bg-yellow-50 border-yellow-200';
        if (score >= 40)';
            return &apos;text-orange-600 bg-orange-50 border-orange-200';
        return &apos;text-red-600 bg-red-50 border-red-200&apos;}&apos';
    const getScoreText = (score) => {}
        if (score >= 80)';
            return &apos;Excellent';
        if (score >= 60)';
            return &apos;Good';
        if (score >= 40)';
            return &apos;Fair&apos';';;
        return &apos;Poor&apos;}';&apos;&apos;
    return (&apos;&apos;<div className=&apos;fixed bottom-6 right-24 z-50&apos;>'&apos;&apos;{/* Floating Action Button */}&apos;&apos';&apos;&apos';
      <button onClick={() => setIsOpen(!isOpen)} className=&apos;bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hove,r:scale-105&apos; aria-label=&apos;Toggle SEO Optimizer&apos;>'&apos;&apos';&apos;&apos;
        <Search className=&apos;w-6 h-6&apos;/>&apos;
      </button>
&apos;&apos';{/* SEO Optimizer Panel */}&apos;&apos';&apos;{isOpen && (&apos;}&apos;<div className=&apos;absolute bottom-16 right-0 w-[700px] bg-white dark:bg-gray-900 rounded-lg shadow-2xl border border-gray-200 dar,k:border-gray-700 overflow-hidden&apos;>'&apos;&apos;{/* Header */}&apos;&apos';&apos;&apos';
          <div className=&apos;bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4&apos;>'&apos;&apos';&apos;&apos;
            <div className=&apos;flex items-center justify-between&apos;>'&apos;&apos';&apos;&apos;
              <h3 className=&apos;text-lg font-semibold flex items-center gap-2&apos;>'&apos;&apos';&apos;&apos;
                <TrendingUp className=&apos;w-5 h-5&apos;/>
                SEO Optimizer&apos;&apos';&apos;&apos;
              </h3>&apos;&apos';&apos;&apos';
              <button onClick={() => setIsOpen(false)} className=&apos;text-white/80 hover:text-white transition-colors&apos;>
                ×&apos;
              </button>
            </div>
            &apos;&apos';{/* Summary Stats */}&apos;&apos';&apos;{report && (&apos;}&apos;<div className=&apos;grid grid-cols-3 gap-4 mt-3&apos;>'&apos;&apos';&apos;&apos;
                <div className=&apos;text-center&apos;>'&apos;&apos';&apos;&apos;
                  <div className=&apos;text-2xl font-bold&apos;>{report.totalPages}&apos;</div>&apos;&apos';&apos;&apos';
                  <div className=&apos;text-sm text-purple-100&apos;>Pages Analyzed&apos;</div>&apos;&apos';&apos;&apos;
                </div>&apos;&apos';&apos;&apos';
                <div className=&apos;text-center&apos;>'&apos;&apos';&apos;&apos;
                  <div className=&apos;text-2xl font-bold&apos;>{report.averageScore}%&apos;</div>&apos;&apos';&apos;&apos';
                  <div className=&apos;text-sm text-purple-100&apos;>Avg SEO Score&apos;</div>&apos;&apos';&apos;&apos;
                </div>&apos;&apos';&apos;&apos';
                <div className=&apos;text-center&apos;>'&apos;&apos';&apos;&apos;
                  <div className=&apos;text-2xl font-bold&apos;>{report.pagesWithIssues}&apos;</div>&apos;&apos';&apos;&apos';
                  <div className=&apos;text-sm text-pink-100&apos;>Need Optimization&apos;</div>
                </div>
              </div>) }
          </div>
&apos;&apos';{/* Content */}&apos;&apos';&apos;&apos';
          <div className=&apos;p-4 max-h-[500px] overflow-y-auto&apos;>'&apos;&apos';{isAnalyzing ? (&apos;}&apos;<div className=&apos;flex items-center justify-center py-8&apos;>'&apos;&apos';&apos;&apos;
                <RefreshCw className=&apos;w-6 h-6 animate-spin text-purple-600&apos;/>&apos;&apos';&apos;&apos';
                <span className=&apos;ml-2 text-gray-600&apos;>Analyzing SEO...&apos;</span>&apos;&apos';&apos;&apos';
              </div>) : report ? (<div className=&apos;space-y-4&apos;>'&apos;&apos;{/* Top Issues */}&apos;&apos';&apos;{report.topIssues.length > 0 && (&apos;}&apos;<div className=&apos;bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg&apos;>'&apos;&apos';&apos;&apos;
                    <h4 className=&apos;font-medium text-yellow-800 dar,k:text-yellow-200 mb-2 flex items-center gap-2&apos;>'&apos;&apos';&apos;&apos;
                      <AlertTriangle className=&apos;w-4 h-4&apos;/>
                      Top SEO Issues to Address&apos;&apos';&apos;&apos;
                    </h4>&apos;&apos';&apos;&apos';
                    <div className=&apos;space-y-1&apos;>'&apos;&apos';{report.topIssues.slice(0, 3).map((issue, index) => (&apos;}&apos;<div key={index} className=&apos;text-sm text-yellow-700 dark:text-yellow-300&apos;>
                          • {issue}&apos;
                        </div>) ) }
                    </div>
                  </div>) }
&apos;&apos';{/* Pages Analysis */}&apos;&apos';&apos;&apos';
                <div className=&apos;bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden&apos;>'&apos;&apos';&apos;&apos;
                  <div className=&apos;overflow-x-auto&apos;>'&apos;&apos';&apos;&apos;
                    <table className=&apos;w-full&apos;>'&apos;&apos';&apos;&apos;
                      <thead className=&apos;bg-gray-100 dark:bg-gray-700&apos;>'&apos;&apos';'
                        <tr>&apos;&apos';&apos;&apos';
                          <th className=&apos;px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider&apos;>
                            Page&apos;&apos';&apos;&apos;
                          </th>&apos;&apos';&apos;&apos';
                          <th className=&apos;px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider&apos;>
                            SEO Score&apos;&apos';&apos;&apos;
                          </th>&apos;&apos';&apos;&apos';
                          <th className=&apos;px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider&apos;>
                            Status&apos;&apos';&apos;&apos;
                          </th>&apos;&apos';&apos;&apos';
                          <th className=&apos;px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider&apos;>
                            Issues&apos;
                          </th>
                        </tr>&apos;&apos';&apos;&apos;
                      </thead>&apos;&apos';&apos;&apos';
                      <tbody className=&apos;bg-white dark:bg-gray-800 divide-y divide-gray-200 dar,k:divide-gray-700&apos;>'&apos;&apos';{report.pageAnalyses.map((page, index) => (&apos;}&apos;<tr key={index} className=&apos;hover:bg-gray-50 dark:hove,r:bg-gray-700 cursor-pointer&apos; onClick={() => setSelectedPage(page)}>&apos;&apos';&apos;&apos';
                            <td className=&apos;px-4 py-3&apos;>'&apos;&apos';&apos;&apos;
                              <div className=&apos;text-sm font-medium text-gray-900 dark:text-white&apos;>
                                {page.title}&apos;&apos';&apos;&apos;
                              </div>&apos;&apos';&apos;&apos';
                              <div className=&apos;text-xs text-gray-500 dark:text-gray-400&apos;>
                                {page.pageUrl}&apos;
                              </div>&apos;&apos';&apos;&apos;
                            </td>&apos;&apos';&apos;&apos';
                            <td className=&apos;px-4 py-3 text-sm text-gray-900 dark:text-white&apos;>
                              {page.score}%&apos;&apos';&apos;&apos;
                            </td>&apos;&apos;`&apos;&apos;
                            <td className=&apos;px-4 py-3&apos;>``&apos;
                              <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full border ${getScoreColor(page.score)}`}>
                                {getScoreText(page.score)}
                              </span>&apos;&apos';&apos;&apos;
                            </td>&apos;&apos';&apos;&apos';
                            <td className=&apos;px-4 py-3 text-sm text-gray-900 dark:text-white&apos;>
                              {page.issues.length} issues&apos;
                          • {issue}
                        </div>) ) }
                    </div>;
                  </div>) }
''{/* Pages Analysis */}'';
                <div className='bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden'>'';
                  <div className='overflow-x-auto'>'';
                    <table className='w-full'>'';
                      <thead className='bg-gray-100 dark:bg-gray-700'>'';
                        <tr>'';
                          <th className='px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>;
                            Page'';
                          </th>'';
                          <th className='px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>;
                            SEO Score'';
                          </th>'';
                          <th className='px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>;
                            Status'';
                          </th>'';
                          <th className='px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>;
                            Issues;
                          </th>;
                        </tr>'';
                      </thead>'';
                      <tbody className='bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700'>''{report.pageAnalyses.map((page, index) => (<tr key={index} className='hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer' onClick={() => setSelectedPage(page)}>'';
                            <td className='px-4 py-3'>'';
                              <div className='text-sm font-medium text-gray-900 dark:text-white'>;
                                {page.title}'';
                              </div>'';
                              <div className='text-xs text-gray-500 dark:text-gray-400'>;
                                {page.pageUrl}
                              </div>'';
                            </td>'';
                            <td className='px-4 py-3 text-sm text-gray-900 dark:text-white'>;
                              {page.score}%'';
                            </td>'`;
                            <td className='px-4 py-3'>``;
                              <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full border ${getScoreColor(page.score)}`}>;
                                {getScoreText(page.score)}
                              </span>'';
                            </td>'';
                            <td className='px-4 py-3 text-sm text-gray-900 dark:text-white'>;
                              {page.issues.length} issues;
                            </td>;
                          </tr>) ) }
                      </tbody>;
                    </table>;
                  </div>;
                </div>';'{/* Page Details Modal */}''{selectedPage && (<div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>'';
                    <div className='bg-white dark:bg-gray-900 rounded-lg p-6 max-w-2xl w-full mx-4 max-h-[80vh] overflow-y-auto'>'';
                      <div className='flex items-center justify-between mb-4'>'';
                        <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>;
                          SEO Analysis: {selectedPage.title}'';
                        </h3>'';
                        <button onClick={() => setSelectedPage(null)} className='text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'>;
                          ×;
                        </button>;
                      </div>''';';
                      <div className='space-y-4'>'';
                        <div className='grid grid-cols-2 gap-4'>'';
                          <div className='bg-gray-50 dark:bg-gray-800 p-3 rounded-lg'>'';
                            <div className='text-sm text-gray-500 dark:text-gray-400'>SEO Score</div>'';
                            <div className='text-lg font-semibold text-gray-900 dark:text-white'>{selectedPage.score}%</div>'';
                          </div>'';
                          <div className='bg-gray-50 dark:bg-gray-800 p-3 rounded-lg'>'';
                            <div className='text-sm text-gray-500 dark:text-gray-400'>Headings</div>'';
                            <div className='text-lg font-semibold text-gray-900 dark:text-white'>{selectedPage.headings.length}</div>'';
                          </div>'';
                          <div className='bg-gray-50 dark:bg-gray-800 p-3 rounded-lg'>'';
                            <div className='text-sm text-gray-500 dark:text-gray-400'>Images</div>'';
                            <div className='text-lg font-semibold text-gray-900 dark:text-white'>{selectedPage.images.length}</div>'';
                          </div>'';
                          <div className='bg-gray-50 dark:bg-gray-800 p-3 rounded-lg'>'';
                            <div className='text-sm text-gray-500 dark:text-gray-400'>Links</div>'';
                            <div className='text-lg font-semibold text-gray-900 dark:text-white'>{selectedPage.links.length}</div>;
                          </div>;
                        </div>';'{selectedPage.issues.length > 0 && (<div>'';
                            <h4 className='font-medium text-red-600 dark:text-red-400 mb-2'>SEO Issues Found</h4>'';
                            <div className='space-y-2'>''{selectedPage.issues.map((issue, index) => (<div key={index} className='flex items-start gap-2 text-sm text-red-600 dark:text-red-400'>'';
                                  <AlertTriangle className='w-4 h-4 mt-0.5 flex-shrink-0'/>;
                                  <span>{issue}</span>;
                            </td>
                          </tr>) ) }
                      </tbody>
                    </table>
                  </div>
                </div>
&apos;&apos';{/* Page Details Modal */}&apos;&apos';&apos;{selectedPage && (&apos;}&apos;<div className=&apos;fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50&apos;>'&apos;&apos';&apos;&apos;
                    <div className=&apos;bg-white dark:bg-gray-900 rounded-lg p-6 max-w-2xl w-full mx-4 max-h-[80vh] overflow-y-auto&apos;>'&apos;&apos';&apos;&apos;
                      <div className=&apos;flex items-center justify-between mb-4&apos;>'&apos;&apos';&apos;&apos;
                        <h3 className=&apos;text-lg font-semibold text-gray-900 dark:text-white&apos;>
                          SEO Analysi,s: {selectedPage.title}&apos;&apos';&apos;&apos;
                        </h3>&apos;&apos';&apos;&apos';
                        <button onClick={() => setSelectedPage(null)} className=&apos;text-gray-400 hover:text-gray-600 dark:hover:text-gray-300&apos;>
                          ×&apos;
                        </button>
                      </div>&apos;&apos';;
                      &apos;&apos';&apos;&apos';
                      <div className=&apos;space-y-4&apos;>'&apos;&apos';&apos;&apos;
                        <div className=&apos;grid grid-cols-2 gap-4&apos;>'&apos;&apos';&apos;&apos;
                          <div className=&apos;bg-gray-50 dark:bg-gray-800 p-3 rounded-lg&apos;>'&apos;&apos';&apos;&apos;
                            <div className=&apos;text-sm text-gray-500 dark:text-gray-400&apos;>SEO Score&apos;</div>&apos;&apos';&apos;&apos';
                            <div className=&apos;text-lg font-semibold text-gray-900 dar,k:text-white&apos;>{selectedPage.score}%&apos;</div>&apos;&apos';&apos;&apos;
                          </div>&apos;&apos';&apos;&apos';
                          <div className=&apos;bg-gray-50 dark:bg-gray-800 p-3 rounded-lg&apos;>'&apos;&apos';&apos;&apos;
                            <div className=&apos;text-sm text-gray-500 dark:text-gray-400&apos;>Headings&apos;</div>&apos;&apos';&apos;&apos';
                            <div className=&apos;text-lg font-semibold text-gray-900 dar,k:text-white&apos;>{selectedPage.headings.length}&apos;</div>&apos;&apos';&apos;&apos;
                          </div>&apos;&apos';&apos;&apos';
                          <div className=&apos;bg-gray-50 dark:bg-gray-800 p-3 rounded-lg&apos;>'&apos;&apos';&apos;&apos;
                            <div className=&apos;text-sm text-gray-500 dark:text-gray-400&apos;>Images&apos;</div>&apos;&apos';&apos;&apos';
                            <div className=&apos;text-lg font-semibold text-gray-900 dar,k:text-white&apos;>{selectedPage.images.length}&apos;</div>&apos;&apos';&apos;&apos;
                          </div>&apos;&apos';&apos;&apos';
                          <div className=&apos;bg-gray-50 dark:bg-gray-800 p-3 rounded-lg&apos;>'&apos;&apos';&apos;&apos;
                            <div className=&apos;text-sm text-gray-500 dark:text-gray-400&apos;>Links&apos;</div>&apos;&apos';&apos;&apos';
                            <div className=&apos;text-lg font-semibold text-gray-900 dar,k:text-white&apos;>{selectedPage.links.length}&apos;</div>
                          </div>
                        </div>
&apos;&apos';{selectedPage.issues.length > 0 && (&apos;}&apos;<div>&apos;&apos';&apos;&apos';
                            <h4 className=&apos;font-medium text-red-600 dark:text-red-400 mb-2&apos;>SEO Issues Found&apos;</h4>&apos;&apos';&apos;&apos';
                            <div className=&apos;space-y-2&apos;>'&apos;&apos';{selectedPage.issues.map((issue, index) => (&apos;}&apos;<div key={index} className=&apos;flex items-start gap-2 text-sm text-red-600 dark:text-red-400&apos;>'&apos;&apos';&apos;&apos;
                                  <AlertTriangle className=&apos;w-4 h-4 mt-0.5 flex-shrink-0&apos;/>&apos;
                                  <span>{issue}</span>

                                </div>) ) }
                            </div>;
                          </div>) }
''{selectedPage.recommendations.length > 0 && (<div>'';
                            <h4 className='font-medium text-green-600 dark:text-green-400 mb-2'>SEO Recommendations</h4>'';
                            <div className='space-y-2'>''{selectedPage.recommendations.map((rec, index) => (<div key={index} className='flex items-start gap-2 text-sm text-green-600 dark:text-green-400'>'';
                                  <Zap className='w-4 h-4 mt-0.5 flex-shrink-0'/>;
                                  <span>{rec}</span>;
                                  <span>{rec}</span>

                                </div>) ) }
                            </div>;
                          </div>) }
                      </div>;
                    </div>'';
                  </div>)}'';
              </div>) : (<div className='text-center py-8 text-gray-500'>;
                No SEO analysis data available;
              </div>) }
          </div>';'{/* Footer Actions */}'';
          <div className='bg-gray-50 dark:bg-gray-800 p-3 flex gap-2'>''`;
            <button onClick={analyzeSEO} disabled={isAnalyzing} className='flex-1 bg-purple-600 hover:bg-purple-700 disabled:bg-purple-400 text-white px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center justify-center gap-2'>'`'`;
              <RefreshCw className={`w-4 h-4 ${isAnalyzing ? 'animate-spin' : '}`}/>'{isAnalyzing ? 'Analyzing...' : 'Analyze SEO'}'';
            </button>'';
            <button onClick={exportSEOReport} className='px-3 py-2 bg-pink-600 hover:bg-pink-700 text-white rounded-md transition-colors flex items-center gap-2'>'';
              <Download className='w-4 h-4'/>;
              Export;
            </button>;
          </div>;
            </button>
          </div>

        </div>)}
    </div>)}
export default SEOOptimizer;
export { SEOOptimizer }
;
export { SEOOptimizer }
;
export { SEOOptimizer }
;
export { SEOOptimizer };
;
export { SEOOptimizer };
;
export { SEOOptimizer };




