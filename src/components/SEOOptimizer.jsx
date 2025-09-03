;,"});,"});"
}) }"});,"})"
        catch (error) {}"});,"})"
";,"});,"})"
"";,"});,"})"
""";,"});,"})"
            // comment
        finally {}"});,"})"
            setIsAnalyzing(false)}"});,"});"
}, []);,"});,"})"
    useEffect(() => {}"});,"})"
        // comment
        analyzeSEO()}, [analyzeSEO]);,"});,"})"
    const calculateSEOScore = (page) => {}"});,"})"
        let score = 0,"});,"})"
        const maxScore = 0,"});,"})"
        // comment
        if(page.title.length >= 30 && page.title.length <= 60) {}"});,"})"
            score += 20}"});,"})"
        else if(page.title.length > 0) {}"});,"})"
            score += 10}"});,"})"
        // comment
        if(page.metaDescription.length >= 120 && page.metaDescription.length <= 160) {}"});,"})"
            score += 15}"});,"})"
        else if(page.metaDescription.length > 0) {}"});,"})"
            score += 8}"});,"})"
        // comment
        if(page.headings.length >= 3) {}"});,"})"
        else if(page.headings.length >= 1) {}"});,"})"
        // comment
        if(page.images.length >= 2) {}"});,"})"
        else if(page.images.length >= 1) {}"});,"})"
            score += 5}"});,"})"
        // comment
        if(page.links.length >= 3) {}"});,"})"
        else if(page.links.length >= 1) {}"});,"})"
        // comment
        if(page.keywords.length >= 3) {}"});,"})"
        else if(page.keywords.length >= 1) {}"});,"})"
        // comment
        maxScore += 15,"});,"})"
        if (page.url === "/" || page.url.includes("-")) {}"});,"})"
        else if(page.url.length > 0) {}"});,"})"
            score += 8,"});,"})"
        return Math.round((score / maxScore) * 100) ;,"});,"});"
};,"});,"})"
    const issues = [];,"});,"})"
        if (!page.title || page.title.length < 30) {}"});,"})"
            issues.push("Title is too short (should be 30-60 characters))}"});,"})"
        else if (page.title.length > 60) {}"});,"})"
            issues.push("Title is too long (should be 30-60 characters))}"});,"})"
        if (!page.metaDescription || page.metaDescription.length < 120) {}"});,"})"
            issues.push("Meta description is too short (should be 120-160 characters))}"});,"})"
        else if (page.metaDescription.length > 160) {}"});,"})"
            issues.push("Meta description is too long (should be 120-160 characters))}"});,"})"
        if (page.headings.length < 2) {}"});,"})"
            issues.push("Insufficient heading structure (should have at least 2 headings))}"});,"})"
        if (page.images.length === 0) {}"});,"})"
            issues.push("No images found (consider adding relevant images with alt text))}"});,"})"
        if (page.links.length < 2) {}"});,"})"
            issues.push("Insufficient internal linking (should have at least 2 internal links))}"});,"})"
        if (page.keywords.length < 2) {}"});,"})"
            issues.push("Insufficient keyword targeting (should have at least 2 relevant keywords))}";,"});,"})"
        if (page.url !== "/" && !page.url.includes("-")) {}"});,"})"
            issues.push("URL could be more SEO-friendly (consider using hyphens))}"});,"})"
        return issues};,"});,"})"
    const generateSEORecommendations = (issues) => {}"});,"})"
        const recommendations = [];,"});,"})"
        if (issues.some(issue => issue.includes("Title"))) {}"});,"})"
            recommendations.push("Optimize page titles with relevant keywords and compelling copy")}";,"});,"})"
        if (issues.some(issue => issue.includes("Meta description"))) {}"});,"})"
            recommendations.push("Write compelling meta descriptions that accurately describe the page content")}";,"});,"})"
        if (issues.some(issue => issue.includes("heading structure"))) {}"});,"})"
            recommendations.push("Add H1, H2, and H3 headings to improve content structure and SEO")}";,"});,"})"
        if (issues.some(issue => issue.includes("No images"))) {}"});,"})"
            recommendations.push("Add relevant images with descriptive alt text for better accessibility and SEO")}";,"});,"})"
        if (issues.some(issue => issue.includes("internal linking"))) {}"});,"})"
            recommendations.push("Add internal links to related pages to improve navigation and SEO")}";,"});,"})"
        if (issues.some(issue => issue.includes("keyword targeting"))) {}"});,"})"
            recommendations.push("Research and include relevant keywords naturally throughout the content")}";,"});,"})"
        if (issues.some(issue => issue.includes("URL"))) {}"});,"})"
            recommendations.push("Use SEO-friendly URLs with hyphens and descriptive terms")}""";,"});,"})"
        recommendations.push();"";,"});,"})"
        recommendations.push("Optimize page loading speed for better user experience and SEO");,"});,"})"
        return recommendations};,"});,"})"
    const generateSummary = (pageAnalyses, topIssues) => {}"});,"})"
        const totalPages = pageAnalyses.length,"});,"})"
        const excellentPages = pageAnalyses.filter(page => page.score >= 80) .length,"});,"})"
        const goodPages = pageAnalyses.filter(page => page.score >= 60) .length,"});,"})"
        const poorPages = pageAnalyses.filter(page => page.score < 40) .length,"});,"})"
        let summary = "Analyzed ${totalPages} pages for SEO.";,"});,"})"
        if(excellentPages > 0) {}"});,"})"
";,"});,"})"
"";,"});,"})"
""";,"});,"})"
"""";,"});,"})"
            summary += "${excellentPages} pages have excellent SEO. "}"});,"})"
        if (goodPages > 0) {}"});,"})"
            summary += "${goodPages} pages have good SEO. "}"});,"})"
        if (poorPages > 0) {}"});,"})"
            summary += "${poorPages} pages need significant SEO improvement. "}"});,"})"
        if (topIssues.length > 0) {}"});,"})"
"";,"});,"})"
"""";,"});,"})"
"""""";,"});,"})"
"""""""";,"});,"})"
            summary += "Top SEO issues to address: ${topIssues.slice(0, 3).join(")}."}"});,"})"
        return summary};,"});,"})"
    const exportSEOReport = () => {}"});,"})"
        if (!report);,"});,"})"
            return,"});,"})"
        const csvContent = [],,"});,"})"
            ...report.pageAnalyses.map(page => [page.pageUrl,";,"});,"})"
                page.title,"";,"});,"})"
                page.score.toString(),"""";,"});,"})"
                page.issues.join("; "),""""";,"});,"})"
                page.recommendations.join("; ")"""""";,"});,"})"
            ])"""""""";,"});,"})"
        ].map(row = > row.map(cell => ""${cell}"").join(")).join(),";,"});,"})"
        const blob = new Blob();;,"});,"})"
        const url = window.URL.createObjectURL();;,"});,"})"
        const a = document.createElement();;,"});,"})"
        a.href = url,"";,"});,"})"
        a.download = "seo-optimization-report.csv";,"});,"})"
        a.click();,"});,"})"
        window.URL.revokeObjectURL(url)};,"});,"})"
    const getScoreColor = (score) => {}"});,"})"
        if (score >= 80)";,"});,"})"
            return "text-green-600 bg-green-50 border-green-200";,"});,"})"
        if (score >= 60)";,"});,"})"
            return "text-yellow-600 bg-yellow-50 border-yellow-200";,"});,"})"
        if (score >= 40)";,"});,"})"
            return "text-orange-600 bg-orange-50 border-orange-200";,"});,"})"
        return "text-red-600 bg-red-50 border-red-200"};,"});,"})"
    const getScoreText = (score) => {}"});,"})"
            return "Excellent";,"});,"})"
            return "Good";,"});,"})"
            return "Fair";""";,"});,"})"
        return "Poor"};"""";,"});,"})
}
    return ("
    <div className="fixed bottom-6 right-24 z-50">""";,"});,"})"
      {/* comment */}"""";,"});,"})"
      <button onClick="{()" => setIsOpen(!isOpen)} className="bg-gradient-to-r from-purple-600 to-pink-600 hover: from-purple-700 hover:to-pink-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105" aria-label="Toggle SEO Optimizer">"""","});,"})"
        <Search className="w-6 h-6"  />;,"});,"})"
      </button>;,"});,"})"
""";,"});,"})"
      {/* comment */}"""";,"});,"})"
      {isOpen && (<div className="absolute bottom-16 right-0 w-[700px] bg-white dark: bg-gray-900 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">""","});,"})"
          {/* comment */}"""";,"});,"})"
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4">"""";,"});,"})"
            <div className="flex items-center justify-between">"""";,"});,"})"
              <h3 className="text-lg font-semibold flex items-center gap-2">"""";,"});,"})"
                <TrendingUp className="w-5 h-5"  />;,"});,"})"
                SEO Optimizer""";,"});,"})"
              </h3>"""";,"});,"})"
              <button onClick="{()" => setIsOpen(false)} className="text-white/80 hover: text-white transition-colors">,"});,"})"
                ×;,"});,"})"
            </div>;,"});,"})"
            {/* comment */}"""";,"});,"})"
            {report && (<div className="grid grid-cols-3 gap-4 mt-3">"""";,"});,"})"
                <div className="text-center">"""";,"});,"})"
                  <div className="text-2xl font-bold">{report.totalPages}</div>"""";,"});,"})"
                  <div className="text-sm text-purple-100">Pages Analyzed</div>""";,"});,"})"
                </div>"""";,"});,"})"
                  <div className="text-2xl font-bold">{report.averageScore}%</div>"""";,"});,"})"
                  <div className="text-sm text-purple-100">Avg SEO Score</div>""";,"});,"})"
                  <div className="text-2xl font-bold">{report.pagesWithIssues}</div>"""";,"});,"})"
                  <div className="text-sm text-pink-100">Need Optimization</div>;,"});,"})"
              </div>) }"});,"})"
          {/* comment */}"""";,"});,"})"
          <div className="p-4 max-h-[500px] overflow-y-auto">"""";,"});,"})"
            {isAnalyzing ? (<div className="flex items-center justify-center py-8">"""";,"});,"})"
                <RefreshCw className="w-6 h-6 animate-spin text-purple-600"  />"""";,"});,"})"
                <span className="ml-2 text-gray-600">Analyzing SEO...</span>"""";,"});,"})"
              </div>) : report ? (<div className="space-y-4">""";,"});,"})"
                {/* comment */}"""";,"});,"})"
                {report.topIssues.length > 0 && (<div className="bg-yellow-50 dark: bg-yellow-900/20 p-4 rounded-lg">"""","});,"})"
                    <h4 className="font-medium text-yellow-800 dark: text-yellow-200 mb-2 flex items-center gap-2">"""","});,"})"
                      <AlertTriangle className="w-4 h-4"  />;,"});,"})"
                      Top SEO Issues to Address""";,"});,"})"
                    </h4>"""";,"});,"})"
                    <div className="space-y-1">"""";,"});,"})"
                      {report.topIssues.slice(0, 3).map((issue, index) => (<div key="{index}" className="text-sm text-yellow-700 dark: text-yellow-300">,"});,"})"
                          • {issue}"});,"})"
                        </div>) ) }"});,"})"
                {/* comment */}"""";,"});,"})"
                <div className="bg-gray-50 dark: bg-gray-800 rounded-lg overflow-hidden">"""","});,"})"
                  <div className="overflow-x-auto">"""";,"});,"})"
                    <table className="w-full">"""";,"});,"})"
                      <thead className="bg-gray-100 dark: bg-gray-700">""","});,"})"
                        <tr>"""";,"});,"})"
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">;,"});,"})"
                            Page""";,"});,"})"
                          </th>"""";,"});,"})"
                            SEO Score""";,"});,"})"
                            Status""";,"});,"})"
                            Issues,"});,"})"
                          </th>;,"});,"})"
                        </tr>""";,"});,"})"
                      </thead>"""";,"});,"})"
                      <tbody className="bg-white dark: bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">"""","});,"})"
                        {report.pageAnalyses.map((page, index) => (<tr key="{index}" className="hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer" onClick="{()" => setSelectedPage(page)}>"""";,"});,"})"
                            <td className="px-4 py-3">"""";,"});,"})"
                              <div className="text-sm font-medium text-gray-900 dark: text-white">,"});,"})"
                                {page.title}""";,"});,"})"
                              <div className="text-xs text-gray-500 dark: text-gray-400">,"});,"})"
                                {page.pageUrl}"});,"})"
                              </div>""";,"});,"})"
                            </td>"""";,"});,"})"
                            <td className="px-4 py-3 text-sm text-gray-900 dark: text-white">,"});,"})"
                              {page.score}%""";,"});,"})"
                            </td>""";,"});,"})"
                            <td className="px-4 py-3">"";,"});,"})"
                              <span className="{"inline-flex" px-2 py-1 text-xs font-semibold rounded-full border ${getScoreColor(page.score)}"}>;,"});,"})"
                                {getScoreText(page.score)}"});,"})"
                              </span>""";,"});,"})"
                              {page.issues.length} issues,"});,"})"
                            </td>;,"});,"})"
                          </tr>) ) }"});,"})"
                      </tbody>;,"});,"})"
                    </table>;,"});,"})"
                {/* comment */}"""";,"});,"})"
                {selectedPage && (<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">"""";,"});,"})"
                    <div className="bg-white dark: bg-gray-900 rounded-lg p-6 max-w-2xl w-full mx-4 max-h-[80vh] overflow-y-auto">"""","});,"})"
                      <div className="flex items-center justify-between mb-4">"""";,"});,"})"
                        <h3 className="text-lg font-semibold text-gray-900 dark: text-white">,"});,"})"
                          SEO Analysis: {selectedPage.title}""";,"});,"})"
                        <button onClick="{()" => setSelectedPage(null)} className="text-gray-400 hover: text-gray-600 dark:hover:text-gray-300">,"});,"})"
"""";,"});,"})"
                      <div className="space-y-4">"""";,"});,"})"
                        <div className="grid grid-cols-2 gap-4">"""";,"});,"})"
                          <div className="bg-gray-50 dark: bg-gray-800 p-3 rounded-lg">"""","});,"})"
                            <div className="text-sm text-gray-500 dark: text-gray-400">SEO Score</div>"""","});,"})"
                            <div className="text-lg font-semibold text-gray-900 dark:text-white">{selectedPage.score}%</div>""";,"});,"})"
                            <div className="text-sm text-gray-500 dark: text-gray-400">Headings</div>"""","});,"})"
                            <div className="text-lg font-semibold text-gray-900 dark:text-white">{selectedPage.headings.length}</div>""";,"});,"})"
                            <div className="text-sm text-gray-500 dark: text-gray-400">Images</div>"""","});,"})"
                            <div className="text-lg font-semibold text-gray-900 dark:text-white">{selectedPage.images.length}</div>""";,"});,"})"
                            <div className="text-sm text-gray-500 dark: text-gray-400">Links</div>"""","});,"})"
                            <div className="text-lg font-semibold text-gray-900 dark:text-white">{selectedPage.links.length}</div>;,"});,"})"
                        {selectedPage.issues.length > 0 && (<div>"""";,"});,"})"
                            <h4 className="font-medium text-red-600 dark: text-red-400 mb-2">SEO Issues Found</h4>"""","});,"})"
                            <div className="space-y-2">"""";,"});,"})"
                              {selectedPage.issues.map((issue, index) => (<div key="{index}" className="flex items-start gap-2 text-sm text-red-600 dark: text-red-400">"""","});,"})"
                                  <AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0"  />;,"});,"})"
                                  <span>{issue}</span>;,"});,"})"
                        {selectedPage.recommendations.length > 0 && (<div>"""";,"});,"})"
                            <h4 className="font-medium text-green-600 dark: text-green-400 mb-2">SEO Recommendations</h4>"""","});,"})"
                              {selectedPage.recommendations.map((rec, index) => (<div key="{index}" className="flex items-start gap-2 text-sm text-green-600 dark: text-green-400">"""","});,"})"
                                  <Zap className="w-4 h-4 mt-0.5 flex-shrink-0"  />;,"});,"})"
                                  <span>{rec}</span>;,"});,"})"
                  </div>)}"""";,"});,"})"
              </div>) : (<div className="text-center py-8 text-gray-500">;,"});,"})"
                No SEO analysis data available,"});,"})"
          {/* comment */}"""";,"});,"})"
          <div className="bg-gray-50 dark: bg-gray-800 p-3 flex gap-2">""","});,"})"
            <button onClick="{analyzeSEO}" disabled="{isAnalyzing}" className="flex-1 bg-purple-600 hover: bg-purple-700 disabled:bg-purple-400 text-white px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center justify-center gap-2">"""","});,"})"
              <RefreshCw className="{"w-4" h-4 ${isAnalyzing ? "animate-spin" : ""}"}       />";,"});,"})"
              {isAnalyzing ? "Analyzing..." : "Analyze SEO"}""";,"});,"})"
            </button>"""";,"});,"})"
            <button onClick="{exportSEOReport}" className="px-3 py-2 bg-pink-600 hover: bg-pink-700 text-white rounded-md transition-colors flex items-center gap-2">"""","});,"})"
              <Download className="w-4 h-4"  />;,"});,"})"
              Export,"});,"})"
        </div>)}"});,"})"
    </div>)};,"});,"})"
  } catch (error) {
    console.error(error);
  }
export default SEOOptimizer,"});,"});"
}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}"});,"})"
export { SEOOptimizer };,"});,"})"
 const SEOOptimizer = () => { const [isOpen, setIsOpen] = useState (false)  const [isAnalyzing, setIsAnalyzing] = useState (false)  const [report, setReport] = useState (null)  const [selectedPage, setSelectedPage] = useState (null)  const analyzeSEO = useCallback (async () => { setIsAnalyzing (true)  try {";import React { useState, useEffect, useCallback } from "react"
 const SEOOptimizer = () => {const [isOpen, setIsOpen] = useState (false)  const [isAnalyzing, setIsAnalyzing] = useState (false)  const [report, setReport] = useState (null)  const [selectedPage, setSelectedPage] = useState (null)  const analyzeSEO = useCallback (async () => { setIsAnalyzing (true)  try {"";import React { useState, useEffect, useCallback } from "react"";""const;const analyzeSEO = useCallback (async () => { setIsAnalyzing (true)  try {&apos;import React { useState, useEffect, useCallback } from &apos;react&apos,lucide-react";&apos;&apos,
 const SEOOptimizer = () => { const [isOpen, setIsOpen] = useState (false)  const [isAnalyzing, setIsAnalyzing] = useState (false)  const [report, setReport] = useState (null)  const [selectedPage, setSelectedPage] = useState (null)  const analyzeSEO = useCallback (async () => { setIsAnalyzing (true)  try {"";import React { useState, useEffect, useCallback } from "react"";"""
""}}}

const SEOOptimizer = () => {}

    const;const;const [isOpen, setIsOpen] = useState (false)
}
    const [isAnalyzing, setIsAnalyzing] = useState (false)
}
    const [report, setReport] = useState (null)
}
    const [selectedPage, setSelectedPage] = useState (null)
}
    const analyzeSEO = useCallback (async () => {}

        setIsAnalyzing (true)
}
        try {}

            // comment
            const samplePages = []{}

"
""
                    url: "/",""
                    title: "Zion Tech Group - AI-Powered Technology Solutions & Enterprise Services","",
                    metaDescription: "Leading provider of AI - powered technology solutions, quantum computing, cybersecurity, and enterprise digital transformation services.","",
                    headings["AI - Powered Business Solutions",Comprehensive IT Services",Micro-SaaS Solutions"],",
                    images["/images / hero - ai-solutions.jpg",/images/hero-it-services.jpg"],",
                    links["/services",/ai - solutions",/about",/contact"],",
                    keywords["AI solutions",quantum computing",cybersecurity",digital transformation"]}, {}"
                    url: "/services","",
                    title: "Our Services - Comprehensive Technology Solutions","",
                    metaDescription: "Comprehensive technology services including AI solutions, cloud infrastructure, cybersecurity, and digital transformation.",""
                    headings["AI Solutions",Cloud & DevOps",Cybersecurity",Digital Transformation"],"
                    images["/images / services - overview.jpg"],",
                    links["/ai - solutions",/cloud-devops",/cybersecurity",/about"],",
                    keywords["technology services",AI solutions",cloud infrastructure",cybersecurity"]}, {}"
                    url: "/ai - solutions","",
                    title: "AI Solutions - Artificial Intelligence Services","",
                    metaDescription: "Cutting - edge artificial intelligence solutions including machine learning, predictive analytics, and AI automation.","",
                    headings["Machine Learning",Predictive Analytics",AI Automation",Business Intelligence"],",
                    images["/images / ai - solutions.jpg"],",
                    links["/services",/about",/contact"],",
                    keywords["artificial intelligence",machine learning",predictive analytics",AI automation"]
&apos
&apos;&apos
                    url: &apos,/&apos,&apos;&apos,
                    title: &apos,Zion Tech Group - AI-Powered Technology Solutions & Enterprise Services&apos,"&apos,
                    metaDescription: &apos,Leading provider of AI-powered technology solutions, quantum computing, cybersecurity, and enterprise digital transformation services.&apos,"&apos,
                    headings[&apos;AI - Powered Business Solutions&apos,Comprehensive IT Services&apos,Micro-SaaS Solutions&apos],",
                    images[&apos;/images/hero - ai-solutions.jpg&apos,/images/hero-it-services.jpg&apos],",
                    links[&apos;/services&apos,/ai-solutions&apos,/about&apos,/contact&apos],
                    keywords[&apos;AI solutions&apos,quantum computing&apos,cybersecurity&apos,digital transformation&apos]
} {}"
                    url: &apos,/services&apos,"&apos,
                    title: &apos,Our Services - Comprehensive Technology Solutions&apos,"&apos,
                    metaDescription: &apos,Comprehensive technology services including AI solutions, cloud infrastructure, cybersecurity, and digital transformation.&apos,"&apos,
                    headings[&apos;AI Solutions&apos,Cloud & DevOps&apos,Cybersecurity&apos,Digital Transformation&apos],"
                    images[&apos;/images/services - overview.jpg&apos],",
                    links[&apos;/ai-solutions&apos,/cloud-devops&apos,/cybersecurity&apos,/about&apos],
                    keywords[&apos;technology services&apos,AI solutions&apos,cloud infrastructure&apos,cybersecurity&apos]"
                    url: &apos,/ai-solutions&apos,"&apos,
                    title: &apos,AI Solutions - Artificial Intelligence Services&apos,"&apos,
                    metaDescription: &apos,Cutting-edge artificial intelligence solutions including machine learning, predictive analytics, and AI automation.&apos,"&apos,
                    headings[&apos;Machine Learning&apos,Predictive Analytics&apos,AI Automation&apos,Business Intelligence&apos],"
                    images[&apos;/images/ai - solutions.jpg&apos],",
                    links[&apos;/services&apos,/about&apos,/contact&apos],
                    keywords[&apos;artificial intelligence&apos,machine learning&apos,predictive analytics&apos,AI automation&apos]"
";""
""";""
                    url: "/", """;""
                    title: "Zion Tech Group - AI-Powered Technology Solutions & Enterprise Services", ""","
                    metaDescription: "Leading provider of AI - powered technology solutions, quantum computing, cybersecurity, and enterprise digital transformation services.",""","
                    headings["AI - Powered Business Solutions", Comprehensive IT Services",Micro-SaaS Solutions"], ",
                    images["/images / hero - ai-solutions.jpg", /images/hero-it-services.jpg"], ","
                    links["/services", /ai - solutions",/about", /contact"], ","
                    keywords["AI solutions", quantum computing",cybersecurity", digital transformation"]""
                    url: "/services", ""","
                    title: "Our Services - Comprehensive Technology Solutions", ""","
                    metaDescription: "Comprehensive technology services including AI solutions, cloud infrastructure, cybersecurity, and digital transformation.",""";""
                    headings["AI Solutions", Cloud & DevOps",Cybersecurity", Digital Transformation"], ";""
                    images["/images / services - overview.jpg"], ",
                    links["/ai - solutions", /cloud-devops",/cybersecurity", /about"], ","
                    keywords["technology services", AI solutions",cloud infrastructure", cybersecurity"]""
                    url: "/ai - solutions", ""","
                    title: "AI Solutions - Artificial Intelligence Services", ""","
                    metaDescription: "Cutting - edge artificial intelligence solutions including machine learning, predictive analytics, and AI automation.", ""","
                    headings["Machine Learning", Predictive Analytics",AI Automation", Business Intelligence"], ","
                    images["/images / ai - solutions.jpg"], ",
                    links["/services", /about",/contact"], ",
                    keywords["artificial intelligence", machine learning",predictive analytics", AI automation"]


            ]&apos;&apos
            const pageAnalyses = samplePages.map(page => {}

                const;const;const score = calculateSEOScore(page)
}
                const issues = identifySEOIssues(page)
}
                const recommendations = generateSEORecommendations(issues)
}
                return {}

                    pageUrl: page.url,
title: page.title,
metaDescription: page.metaDescription,
headings: page.headings,
images: page.images,
links: page.links,
keywords: page.keywords,
score,
issues,
                    recommendations}})
}
                    pageUrl: page.url, title: page.title,
                    metaDescription: page.metaDescription, headings: page.headings,
                    images: page.images, links: page.links,
                    keywords: page.keywords, score,
                    issues, recommendations}})
}
            const totalPages = pageAnalyses.length
            const averageScore = Math.round(pageAnalyses.reduce ( (sum, page) => sum + page.score, 0) / totalPages)
}
            const pagesWithIssues = pageAnalyses.filter(page => page.issues.length > 0) .length
            // comment            const issueCounts = {}

            pageAnalyses.forEach(page => {}

                page.issues.forEach(issue => {}

                    issueCounts[issue] = (issueCounts[issue] || 0) + 1})})
}
            const topIssues = Object.entries(issueCounts)
}
                    issueCounts[issue] = (issueCounts[issue] || 0) + 1})})
}
            const;const;const topIssues = Object.entries(issueCounts)
}
                .sort(([, a], [, b]) => b - a)
}
                .slice(0, 5)
}
                .map(([issue]) => issue)
}
            const summary = generateSummary(pageAnalyses, topIssues)
}
            setReport({}

                totalPages,
                averageScore,
                pagesWithIssues,
                topIssues,
                pageAnalyses,
                summary})}

                totalPages, averageScore,
                pagesWithIssues, topIssues,
                pageAnalyses, summary})}

        catch (error) {}"
            // comment

            // comment
        finally {}

            setIsAnalyzing(false)}
<<<<<<< HEAD
    }, []);
    useEffect(() => {
  // TODO: Add dependencies if needed

  return () => {
    // Cleanup function
  };
}, []);, []);
        // Auto-analyze SEO when component mounts
        analyzeSEO()}, [analyzeSEO]);
    const calculateSEOScore = (page) => {
=======
>>>>>>> main

    }, [])
}
    useEffect(() => {}

        // comment
        analyzeSEO()}, [analyzeSEO]);&apos;&apos
    const calculateSEOScore = (page) => {}

        let score = 0
        let maxScore = 0
        // comment
let maxScore = 0
        // comment        if(page.title.length >= 30 && page.title.length <= 60) {}

            score += 20}

        else if(page.title.length > 0) {}

            score += 10}

        // comment        if(page.metaDescription.length >= 120 && page.metaDescription.length <= 160) {}

            score += 15}

        else if(page.metaDescription.length > 0) {}

            score += 8}

        // comment        if(page.headings.length >= 3) {}

        else if(page.headings.length >= 1) {}

        // comment        if(page.images.length >= 2) {}

        else if(page.images.length >= 1) {}

            score += 5}

        // comment        if(page.links.length >= 3) {}

        else if(page.links.length >= 1) {}

        // comment        if(page.keywords.length >= 3) {}

        else if(page.keywords.length >= 1) {}

        // comment
        maxScore += 15"""
        maxScore += 15
        if (page.url === &apos;/&apos; || page.url.includes(&apos;-&apos)) {}"
        maxScore + = 15","
        if (page.url = == "/" || page.url.includes("-")) {}
        else if(page.url.length > 0) {}

        return Math.round((score / maxScore) * 100) }

    const issues = []
        if (!page.title || page.title.length < 30) {}"
            issues.push("Title is too short (should be 30-60 characters))}

        else if (page.title.length > 60) {}"
            issues.push("Title is too long (should be 30-60 characters))}

        if (!page.metaDescription || page.metaDescription.length < 120) {}"
            issues.push("Meta description is too short (should be 120-160 characters))}

        else if (page.metaDescription.length > 160) {}"
            issues.push("Meta description is too long (should be 120-160 characters))}

        if (page.headings.length < 2) {}"
            issues.push("Insufficient heading structure (should have at least 2 headings))}

        if (page.images.length = == 0) {}"
            issues.push("No images found (consider adding relevant images with alt text))}

        if (page.links.length < 2) {}"
            issues.push("Insufficient internal linking (should have at least 2 internal links))}

        return Math.round((score / maxScore) * 100) }&apos;&apos
    const issues = []
        if (!page.title || page.title.length <;<;< 30) {}

            issues.push(&apos;Title is too short (should be 30-60 characters))}"
&apos;&apos>            issues.push(&apos;Title is too long (should be 30-60 characters))}

        if (!page.metaDescription || page.metaDescription.length&apos;&apos; < 120) {}

            issues.push(&apos;Meta description is too short (should be 120-160 characters))}

            issues.push(&apos;Meta description is too long (should be 120-160 characters))}

        if (page.headings.length&apos;&apos; < 2) {}

            issues.push(&apos;Insufficient heading structure (should have at least 2 headings))}

            issues.push(&apos;No images found (consider adding relevant images with alt text))}

        if (page.links.length&apos;&apos; < 2) {}

            issues.push(&apos;Insufficient internal linking (should have at least 2 internal links))}

        if (page.keywords.length&apos;&apos; < 2) {}"            issues.push(&apos;Insufficient keyword targeting (should have at least 2 relevant keywords))}

        if (page.url !== &apos;/&apos; && !page.url.includes(&apos;-&apos)) {}

            issues.push(&apos;URL could be more SEO-friendly (consider using hyphens))}

        return issues}&apos;&apos>
    const generateSEORecommendations = (issues) => {}

        const;const;const recommendations = []
        if (issues.some(issue => issue.includes(&apos;Title&apos))) {}"
            recommendations.push(&apos;Optimize page titles with relevant keywords and compelling copy&apos)}

        if (issues.some(issue => issue.includes(&apos;Meta description&apos))) {}"
            recommendations.push(&apos;Write compelling meta descriptions that accurately describe the page content&apos)}

        if (issues.some(issue => issue.includes(&apos;heading structure&apos))) {}"
            recommendations.push(&apos;Add H1, H2, and H3 headings to improve content structure and SEO&apos)}

        if (issues.some(issue => issue.includes(&apos;No images&apos))) {}"
            recommendations.push(&apos;Add relevant images with descriptive alt text for better accessibility and SEO&apos)}

        if (issues.some(issue => issue.includes(&apos;internal linking&apos))) {}"
            recommendations.push(&apos;Add internal links to related pages to improve navigation and SEO&apos)}

        if (issues.some(issue => issue.includes(&apos;keyword targeting&apos))) {}"            recommendations.push(&apos;Research and include relevant keywords naturally throughout the content&apos)}

        if (issues.some(issue => issue.includes(&apos;URL&apos))) {}

            recommendations.push(&apos;Use SEO-friendly URLs with hyphens and descriptive terms&apos)}&apos;&apos,
        recommendations.push(&apos;Ensure content is unique, valuable, and addresses user intent&apos)"
        recommendations.push(&apos;Implement structured data markup for better search engine understanding&apos)
}
        recommendations.push(&apos;Optimize page loading speed for better user experience and SEO&apos)
}
        return recommendations}&apos;&apos,
            issues.push("Title is too short (should be 30 - 60 characters))}""
"""
"""""
            issues.push("Title is too long (should be 30-60 characters))}""
            issues.push("Meta description is too short (should be 120-160 characters))}""
            issues.push("Meta description is too long (should be 120-160 characters))}""
            issues.push("Insufficient heading structure (should have at least 2 headings))}""
            issues.push("No images found (consider adding relevant images with alt text))}""
            issues.push("Insufficient internal linking (should have at least 2 internal links))}"
        if (page.keywords.length < 2) {}"
            issues.push("Insufficient keyword targeting (should have at least 2 relevant keywords))}">
        if (page.url !== "/" && !page.url.includes("-")) {}"
            issues.push("URL could be more SEO-friendly (consider using hyphens))}"
        return issues}

        const recommendations = []">
        if (issues.some(issue = > issue.includes("Title"))) {}

            recommendations.push("Optimize page titles with relevant keywords and compelling copy")}";""
        if (issues.some(issue = > issue.includes("Meta description"))) {}

            recommendations.push("Write compelling meta descriptions that accurately describe the page content")}";""
        if (issues.some(issue = > issue.includes("heading structure"))) {}

            recommendations.push("Add H1, H2, and H3 headings to improve content structure and SEO")}";""
        if (issues.some(issue = > issue.includes("No images"))) {}

            recommendations.push("Add relevant images with descriptive alt text for better accessibility and SEO")}";""
        if (issues.some(issue = > issue.includes("internal linking"))) {}

            recommendations.push("Add internal links to related pages to improve navigation and SEO")}";""
        if (issues.some(issue = > issue.includes("keyword targeting"))) {}

            recommendations.push("Research and include relevant keywords naturally throughout the content")}";""
        if (issues.some(issue = > issue.includes("URL"))) {}

            recommendations.push("Use SEO - friendly URLs with hyphens and descriptive terms")}"",
            recommendations.push("Use SEO - friendly URLs with hyphens and descriptive terms")}""","
        recommendations.push("Ensure content is unique, valuable, and addresses user intent")"
        recommendations.push("Implement structured data markup for better search engine understanding")"
        recommendations.push("Optimize page loading speed for better user experience and SEO")
}        return recommendations}

    const generateSummary = (pageAnalyses, topIssues) => {}

        const excellentPages = pageAnalyses.filter(page => page.score >= 80) .length,
const goodPages = pageAnalyses.filter(page => page.score >= 60) .length,
const;const;const totalPages = pageAnalyses.length
        const excellentPages = pageAnalyses.filter(page => page.score >= 80) .length
        const goodPages = pageAnalyses.filter(page => page.score >= 60) .length
        const poorPages = pageAnalyses.filter(page => page.score < 40) .length>
        const poorPages = pageAnalyses.filter(page => page.score <;<;< 40) .length
        let summary = "Analyzed ${totalPages} pages for SEO.">
        if(excellentPages > 0) {}

"
""
"""
""""
            summary += "${excellentPages} pages have excellent SEO. "}
        if (goodPages > 0) {}

            summary += "${goodPages} pages have good SEO. "}

        if (poorPages > 0) {}

            summary += "${poorPages} pages need significant SEO improvement. "}

        if (topIssues.length > 0) {}

&apos;"
&apos;"&apos;"
&apos;"&apos;"&apos;"
&apos;"&apos;"&apos;"&apos;"
            summary += "Top SEO issues to address: ${topIssues.slice(0, 3).join(&apos)}."}

        return summary}&apos;&apos
    const exportSEOReport = () => {}

        if()
}
            return";&apos;&apos
        const csvContent = [],"
            ...report.pageAnalyses.map(page => [page.pageUrl,
                page.title,&apos,
                page.score.toString(),&apos;&apos,"
                page.issues.join(&apos),&apos;&apos;"&apos;"
                page.recommendations.join(&apos)&apos;"&apos;"&apos;"
            ])&apos;"&apos;"&apos;"&apos;";"
        ].map(row => row.map(cell => "&apos;${cell}&apos;").join(&apos)).join(&apos;"
&apos)";&apos;&apos,
        const blob = new Blob([csvContent] { type &apos;text/csv&apos})";&apos;&apos,
        const url = window.URL.createObjectURL(blob)";&apos;&apos,
        const a = document.createElement(&apos;a&apos)"
"";""
""""
"""""";""
""""""""
            summary += "Top SEO issues to address: ${topIssues.slice(0, 3).join(")}."}"
        return summary}

            return"
        const csvContent = [],
                page.title,"
                page.score.toString(),"""
                page.issues.join("),""""
            return";""
        const csvContent = [], ...report.pageAnalyses.map(page => [page.pageUrl,"
                page.title, ""
                page.score.toString(), """";""
                page.issues.join("), """""
                page.recommendations.join(")""""""
            ])"""""""";"
        ].map(row = > row.map(cell => ""${cell}"").join(")).join("
")","
        const blob = new Blob([csvContent] { type "text/csv" })"
        const url = window.URL.createObjectURL(blob)"
        const a = document.createElement("a")"
        a.href = url",
        a.download = &apos;seo-optimization-report.csv
        a.click()
}
        window.URL.revokeObjectURL(url)}&apos;&apos
    const getScoreColor = (score) => {}

        if (score >= 80)"
            return &apos;text - green-600 bg-green-50 border-green-200",
        if (score >= 60)"
            return &apos;text - yellow-600 bg-yellow-50 border-yellow-200",
        if (score >= 40)"
            return &apos;text - orange-600 bg-orange-50 border-orange-200",
        return &apos;text-red-600 bg-red-50 border-red-200&apos}&apos,
    const getScoreText = (score) => {}

            return &apos;Excellent"
            return &apos;Good"
            return &apos;Fair&apos,
        return &apos;Poor&apos}";&apos;&apos;"
    return (&apos;&apos;<div className="&apos;fixed" bottom-6 right-24 z-50&apos;>"&apos;&apos {/* comment */}&apos;&apos,&apos;&apos,"
      <button onClick="{()" => setIsOpen(!isOpen)} className="&apos;bg-gradient-to-r" from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hove,r: scale-105&apos; aria-label="&apos;Toggle" SEO Optimizer&apos,>"&apos,&apos,&apos;&apos;"
        <Search className="&apos;w-6" h-6&apos;       />&apos,
      </button>",
&apos,&apos,"{/* comment */}&apos;&apos,&apos {isOpen && (&apos}&apos;<div className="&apos;absolute" bottom-16 right-0 w-[700px] bg-white dark:bg-gray-900 rounded-lg shadow-2xl border border-gray-200 dar,k: border-gray-700 overflow-hidden&apos,>"&apos,&apos {/* comment */}&apos;&apos,&apos;&apos,"
          <div className="&apos;bg-gradient-to-r" from-purple-600 to-pink-600 text-white p-4&apos;>"&apos;&apos,&apos;&apos;"
            <div className="&apos;flex" items-center justify-between&apos;>"&apos;&apos,&apos;&apos;"
              <h3 className="&apos;text-lg" font-semibold flex items-center gap-2&apos;>"&apos;&apos,&apos;&apos;"
                <TrendingUp className="&apos;w-5" h-5&apos;       />"
                SEO Optimizer&apos;&apos,&apos;&apos,
              </h3>&apos;&apos,&apos;&apos,"
              <button onClick="{()" => setIsOpen(false)} className="&apos;text-white/80" hover: text-white transition-colors&apos,>
                ×&apos,
            </div>",
            &apos,&apos,"{/* comment */}&apos;&apos,&apos {report && (&apos}&apos;<div className="&apos;grid" grid-cols-3 gap-4 mt-3&apos;>"&apos;&apos,&apos;&apos;"
                <div className="&apos;text-center&apos;">"&apos;&apos,&apos;&apos;"
                  <div className="&apos;text-2xl" font-bold&apos;>{report.totalPages}&apos;</div>&apos;&apos,&apos;&apos,"
                  <div className="&apos;text-sm" text-purple-100&apos;>Pages Analyzed&apos;</div>&apos;&apos,&apos;&apos,
                </div>&apos;&apos,&apos;&apos,"
                  <div className="&apos;text-2xl" font-bold&apos;>{report.averageScore}%&apos;</div>&apos;&apos,&apos;&apos,"
                  <div className="&apos;text-sm" text-purple-100&apos;>Avg SEO Score&apos;</div>&apos;&apos,&apos;&apos;"
                  <div className="&apos;text-2xl" font-bold&apos;>{report.pagesWithIssues}&apos;</div>&apos;&apos,&apos;&apos,"
                  <div className="&apos;text-sm" text-pink-100&apos;>Need Optimization&apos;</div>
              </div>) }"
&apos;&apos,{/* comment */}&apos;&apos,&apos;&apos,"
          <div className="&apos;p-4" max-h-[500px] overflow-y-auto&apos;>"&apos;&apos,{isAnalyzing ? (&apos}&apos;<div className="&apos;flex" items-center justify-center py-8&apos;>"&apos;&apos,&apos;&apos;"
                <RefreshCw className="&apos;w-6" h-6 animate-spin text-purple-600&apos;       />&apos;&apos,&apos;&apos,"
                <span className="&apos;ml-2" text-gray-600&apos;>Analyzing SEO...&apos;</span>&apos;&apos,&apos;&apos,"
              </div>) : report ? (<div className="&apos;space-y-4&apos;">"&apos;&apos {/* comment */}&apos;&apos,&apos {report.topIssues.length > 0 && (&apos}&apos;<div className="&apos;bg-yellow-50" dark: bg-yellow-900/20 p-4 rounded-lg&apos,>"&apos,&apos,&apos,&apos,"
                    <h4 className="&apos,font-medium" text-yellow-800 dar,k: text-yellow-200 mb-2 flex items-center gap-2&apos,>"&apos,&apos,&apos;&apos;"
                      <AlertTriangle className="&apos;w-4" h-4&apos;       />"
                      Top SEO Issues to Address&apos;&apos,&apos;&apos,
                    </h4>&apos;&apos,&apos;&apos,",
                    <div className="&apos;space-y-1&apos;">"&apos,&apos,"{report.topIssues.slice(0, 3).map((issue, index) => (&apos}&apos;<div key="{index}" className="&apos;text-sm" text-yellow-700 dark: text-yellow-300&apos,>
                          • {issue}&apos
                        </div>) ) }"
&apos;&apos,{/* comment */}&apos;&apos,&apos;&apos,"
                <div className="&apos;bg-gray-50" dark: bg-gray-800 rounded-lg overflow-hidden&apos,>"&apos,&apos,&apos;&apos;"
                  <div className="&apos;overflow-x-auto&apos;">"&apos;&apos,&apos;&apos;"
                    <table className="&apos;w-full&apos;">"&apos;&apos,&apos;&apos;"
                      <thead className="&apos;bg-gray-100" dark: bg-gray-700&apos,>"&apos,&apos,""
                        <tr>&apos;&apos,&apos;&apos,"
                          <th className="&apos;px-4" py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider&apos;>"
                            Page&apos;&apos,&apos;&apos,
                          </th>&apos;&apos,&apos;&apos,"
                            SEO Score&apos;&apos,&apos;&apos,
                            Status&apos;&apos,&apos;&apos
                            Issues&apos
                          </th>"
                        </tr>&apos;&apos,&apos;&apos,",
                      </thead>&apos;&apos,&apos;&apos,"
                      <tbody className="&apos,bg-white" dark:bg-gray-800 divide-y divide-gray-200 dar,k: divide-gray-700&apos,>"&apos,&apos,"{report.pageAnalyses.map((page, index) => (&apos}&apos;<tr key="{index}" className="&apos;hover:bg-gray-50" dark:hove,r: bg-gray-700 cursor-pointer&apos, onClick="{()" => setSelectedPage(page)}>&apos;&apos,&apos;&apos,"
                            <td className="&apos;px-4" py-3&apos;>"&apos;&apos,&apos;&apos;"
                              <div className="&apos;text-sm" font-medium text-gray-900 dark: text-white&apos,>"
                                {page.title}&apos;&apos,&apos;&apos;"
                              <div className="&apos;text-xs" text-gray-500 dark: text-gray-400&apos,>
                                {page.pageUrl}&apos,
                              </div>&apos;&apos,&apos;&apos,
                            </td>&apos;&apos,&apos;&apos,"
                            <td className="&apos;px-4" py-3 text-sm text-gray-900 dark: text-white&apos,>"
                              {page.score}%&apos;&apos,&apos;&apos
                            </td>&apos;&apos;"&apos;&apos;"
                            <td className="&apos;px-4" py-3&apos;>""&apos;"
                              <span className = "{"inline-flex" px-2 py-1 text-xs font-semibold rounded-full border ${getScoreColor(page.score)}"}>
                                {getScoreText(page.score)}

                              </span>&apos;&apos,&apos;&apos
                              {page.issues.length} issues&apos,
        if (score >= 80)";""
            return "text-green-600 bg-green-50 border-green-200"
        if (score >= 60)";""
            return "text-yellow-600 bg-yellow-50 border-yellow-200"
        if (score >= 40)";""
            return "text-orange-600 bg-orange-50 border-orange-200"
        return "text-red-600 bg-red-50 border-red-200"}

            return "Excellent"
            return "Good"
            return "Fair"
        return "Poor"}

    return ("
    <div className="fixed bottom-6 right-24 z-50">""{/* comment */}"";"
      <button onClick="{()" => setIsOpen(!isOpen)} className="bg-gradient-to-r from-purple-600 to-pink-600 hover: from-purple-700 hover:to-pink-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105" aria-label="Toggle SEO Optimizer">"",",
        <Search className = "w-6 h-6"  />,
      </button>,"
""{/* comment */}""{isOpen && (<div className="absolute bottom-16 right-0 w-[700px] bg-white dark:bg-gray-900 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">""{/* comment */}"";"
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4">"";"
            <div className="flex items-center justify-between">"";"
              <h3 className="text-lg font-semibold flex items-center gap-2">"";"
                <TrendingUp className = "w - 5 h-5"  />,
                SEO Optimizer"",
              </h3>"";"
              <button onClick="{()" => setIsOpen(false)} className="text-white/80 hover: text-white transition-colors">,,
                ×,
            </div>,"
            ""{/* comment */}""{report && (<div className="grid grid-cols-3 gap-4 mt-3">"";"
                <div className="text-center">"";"
                  <div className="text-2xl font-bold">{report.totalPages}</div>"";"
                  <div className="text - sm text-purple-100">Pages Analyzed</div>"",
                </div>"";"
                  <div className="text-2xl font-bold">{report.averageScore}%</div>"";"
                  <div className="text-sm text-purple-100">Avg SEO Score</div>"";"
                  <div className="text-2xl font-bold">{report.pagesWithIssues}</div>"";"
                  <div className="text - sm text-pink-100">Need Optimization</div>,
""{/* comment */}"";"
          <div className="p-4 max-h-[500px] overflow-y-auto">""{isAnalyzing ? (<div className="flex items-center justify-center py-8">"";"
                <RefreshCw className="w-6 h-6 animate-spin text-purple-600"  />"";"
                <span className="ml-2 text-gray-600">Analyzing SEO...</span>"";"
              </div>) : report ? (<div className="space-y-4">""{/* comment */}""{report.topIssues.length > 0 && (<div className="bg-yellow-50 dark: bg-yellow-900/20 p-4 rounded-lg">"","
                    <h4 className="font-medium text-yellow-800 dark:text-yellow-200 mb-2 flex items-center gap-2">"","
                      <AlertTriangle className="w-4 h-4"  />,",
                      Top SEO Issues to Address"","
                    </h4>"","
                    <div className = "space-y-1">""{report.topIssues.slice(0, 3).map((issue, index) => (<div key="{index}" className="text-sm text-yellow-700 dark: text-yellow-300">,"
            return "Fair"","
        return "Poor"}""""
    return ("
    <div className="fixed bottom-6 right-24 z-50">"""{/* comment */}"""""
      <button onClick="{()" => setIsOpen(!isOpen)} className="bg-gradient-to-r from-purple-600 to-pink-600 hover: from-purple-700 hover:to-pink-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105" aria-label="Toggle SEO Optimizer">""""
        <Search className="w-6 h-6"  />",
"""{/* comment */}""""{isOpen && (<div className="absolute bottom-16 right-0 w-[700px] bg-white dark: bg-gray-900 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">"""{/* comment */}""""
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4">""""
            <div className="flex items-center justify-between">""""
              <h3 className="text-lg font-semibold flex items-center gap-2">""""
                <TrendingUp className="w-5 h-5"  />"
                SEO Optimizer"""""
              </h3>""""
              <button onClick="{()" => setIsOpen(false)} className="text-white/80 hover: text-white transition-colors">
                ×",
            """{/* comment */}""""{report && (<div className="grid grid-cols-3 gap-4 mt-3">"""""
                <div className="text-center">""""
                  <div className="text-2xl font-bold">{report.totalPages}</div>""""
                  <div className="text-sm text-purple-100">Pages Analyzed</div>"""""
                </div>""""
                  <div className="text-2xl font-bold">{report.averageScore}%</div>""""
                  <div className="text-sm text-purple-100">Avg SEO Score</div>""""
                  <div className="text-2xl font-bold">{report.pagesWithIssues}</div>""""
                  <div className="text-sm text-pink-100">Need Optimization</div>"
"""{/* comment */}"""""
          <div className="p-4 max-h-[500px] overflow-y-auto">""""{isAnalyzing ? (<div className="flex items-center justify-center py-8">""""
                <RefreshCw className="w-6 h-6 animate-spin text-purple-600"  />""""
                <span className="ml-2 text-gray-600">Analyzing SEO...</span>""""
              </div>) : report ? (<div className="space-y-4">"""{/* comment */}""""{report.topIssues.length > 0 && (<div className="bg-yellow-50 dark: bg-yellow-900/20 p-4 rounded-lg">"""""
                    <h4 className="font-medium text-yellow-800 dark:text-yellow-200 mb-2 flex items-center gap-2">""""
                      <AlertTriangle className="w-4 h-4"  />"
                      Top SEO Issues to Address"""""
                    </h4>"""",
                    <div className="space-y-1">""""{report.topIssues.slice(0, 3).map((issue, index) => (<div key="{index}" className="text-sm text-yellow-700 dark: text-yellow-300">,,
                          • {issue}

""{/* comment */}"";"
                <div className="bg-gray-50 dark: bg-gray-800 rounded-lg overflow-hidden">"";"
                  <div className="overflow-x-auto">"","
                    <table className="w-full">"","
                      <thead className="bg - gray-100 dark:bg-gray-700">"",
                        <tr>"";"
                          <th className = "px - 4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">,
                            Page"",
                          </th>""
                            SEO Score"",
                            Status"
                            Issues
                          </th>,",
                        </tr>"","
                      </thead>"","
                      <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">""{report.pageAnalyses.map((page, index) => (<tr key="{index}" className="hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer" onClick="{()" => setSelectedPage(page)}>"";"
                            <td className="px-4 py-3">"";"
                              <div className="text-sm font-medium text-gray-900 dark:text-white"> {page.title}"";"
                              <div className = "text-xs text-gray-500 dark:text-gray-400"> {page.pageUrl}

                            </td>"";"
                            <td className="px - 4 py-3 text-sm text-gray-900 dark:text-white"> {page.score}%"",
                            </td>"";"
                            <td className="px-4 py-3">"";"
                              <span className = "{"inline-flex" px-2 py-1 text-xs font-semibold rounded-full border ${getScoreColor(page.score)}"}> {getScoreText(page.score)}

                              </span>"";"
                            <td className="px-4 py-3 text-sm text-gray-900 dark:text-white"> {page.issues.length} issues
                            </td>
                          </tr>) ) }

                      </tbody>
                    </table>;"
""{/* comment */}""{selectedPage && (<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">"";"
                    <div className="bg-white dark: bg-gray-900 rounded-lg p-6 max-w-2xl w-full mx-4 max-h-[80vh] overflow-y-auto">"",",
                      <div className = "flex items-center justify-between mb-4">"","
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">,
                          SEO Analysis: {selectedPage.title}"";"
                        <button onClick="{()" => setSelectedPage(null)} className="text-gray-400 hover: text-gray-600 dark:hover:text-gray-300">,"
                      <div className="space-y-4">"","
                        <div className="grid grid-cols-2 gap-4">"",",
                          <div className = "bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">"","
                            <div className="text-sm text-gray-500 dark:text-gray-400">SEO Score</div>"","
                            <div className="text-lg font-semibold text-gray-900 dark:text-white">{selectedPage.score}%</div>"";"
                            <div className = "text-sm text-gray-500 dark: text-gray-400">Headings</div>"","
                            <div className="text-lg font-semibold text-gray-900 dark:text-white">{selectedPage.headings.length}</div>"";"
                            <div className = "text-sm text-gray-500 dark: text-gray-400">Images</div>"","
                            <div className="text-lg font-semibold text-gray-900 dark:text-white">{selectedPage.images.length}</div>"";"
                            <div className = "text-sm text-gray-500 dark: text-gray-400">Links</div>"","
                            <div className="text - lg font-semibold text-gray-900 dark:text-white">{selectedPage.links.length}</div>,
""{selectedPage.issues.length > 0 && (<div>"";"
                            <h4 className = "font-medium text-red-600 dark: text-red-400 mb-2">SEO Issues Found</h4>"","
                            <div className="space-y-2">""{selectedPage.issues.map((issue, index) => (<div key="{index}" className="flex items-start gap-2 text-sm text-red-600 dark: text-red-400">"","
                                  <AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0"  />,
                                  <span>{issue}</span>
"""{/* comment */}"""""
                <div className = "bg-gray-50 dark: bg-gray-800 rounded-lg overflow-hidden">""""
                  <div className="overflow-x-auto">""""
                    <table className="w-full">""""
                      <thead className="bg-gray-100 dark:bg-gray-700">"""""
                        <tr>""""
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">"
                            Page"""""
                          </th>"""""
                            SEO Score"""""
                            Status""""
                            Issues"
                        </tr>"""""
                      </thead>"""",
                      <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">""""{report.pageAnalyses.map((page, index) => (<tr key="{index}" className="hover: bg-gray-50 dark:hover:bg-gray-700 cursor-pointer" onClick="{()" => setSelectedPage(page)}>""""
                            <td className="px-4 py-3">""""
                              <div className="text-sm font-medium text-gray-900 dark: text-white">",
                                {page.title}""""
                              <div className="text-xs text-gray-500 dark: text-gray-400">,
                                {page.pageUrl}"
                            </td>""""
                            <td className="px-4 py-3 text-sm text-gray-900 dark: text-white">",
                              {page.score}%"""""
                            </td>""""
                            <td className="px-4 py-3">"""
                              </span>""""
                            <td className="px-4 py-3 text-sm text-gray-900 dark: text-white">,
                              {page.issues.length} issues,
                            </td>
                      </tbody>
                    </table>"
&apos;&apos,{/* comment */}&apos;&apos,&apos {selectedPage && (&apos}&apos;<div className="&apos;fixed" inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50&apos;>"&apos;&apos,&apos;&apos;"
                    <div className="&apos;bg-white" dark: bg-gray-900 rounded-lg p-6 max-w-2xl w-full mx-4 max-h-[80vh] overflow-y-auto&apos,>"&apos,&apos,&apos;&apos;"
                      <div className="&apos;flex" items-center justify-between mb-4&apos;>"&apos;&apos,&apos;&apos,",
                        <h3 className = "&apos,text-lg" font-semibold text-gray-900 dark:text-white&apos,>
                          SEO Analysi,s: {selectedPage.title}&apos;&apos,&apos;&apos;"
                        <button onClick="{()" => setSelectedPage(null)} className="&apos;text-gray-400" hover: text-gray-600 dark:hover:text-gray-300&apos,>
                      </div>&apos,&apos,
                      &apos;&apos,&apos;&apos,"
                      <div className="&apos;space-y-4&apos;">"&apos;&apos,&apos;&apos;"
                        <div className="&apos;grid" grid-cols-2 gap-4&apos;>"&apos;&apos,&apos;&apos;"
                          <div className="&apos;bg-gray-50" dark: bg-gray-800 p-3 rounded-lg&apos,>"&apos,&apos,&apos;&apos,",
                            <div className="&apos;text-sm" text-gray-500 dark: text-gray-400&apos;>SEO Score&apos,</div>&apos,&apos,&apos,&apos,"
                            <div className="&apos,text-lg" font-semibold text-gray-900 dar,k: text-white&apos,>{selectedPage.score}%&apos;</div>&apos;&apos,&apos;&apos;"
                            <div className="&apos;text-sm" text-gray-500 dark: text-gray-400&apos;>Headings&apos,</div>&apos,&apos,&apos,&apos,""
                            <div className="&apos,text-lg" font-semibold text-gray-900 dar,k: text-white&apos,>{selectedPage.headings.length}&apos;</div>&apos;&apos,&apos;&apos;"
                            <div className="&apos;text-sm" text-gray-500 dark: text-gray-400&apos;>Images&apos,</div>&apos,&apos,&apos,&apos,"
                            <div className="&apos,text-lg" font-semibold text-gray-900 dar,k: text-white&apos,>{selectedPage.images.length}&apos;</div>&apos;&apos,&apos;&apos;"
                            <div className="&apos;text-sm" text-gray-500 dark: text-gray-400&apos;>Links&apos,</div>&apos,&apos,&apos,&apos,""
                            <div className="&apos,text-lg" font-semibold text-gray-900 dar,k: text-white&apos,>{selectedPage.links.length}&apos;</div>"
&apos;&apos,{selectedPage.issues.length > 0 && (&apos}&apos;<div>&apos;&apos,&apos;&apos,"
                            <h4 className="&apos;font-medium" text-red-600 dark: text-red-400 mb-2&apos;>SEO Issues Found&apos,</h4>&apos,&apos,&apos;&apos,",
                            <div className="&apos;space-y-2&apos;">"&apos,&apos,"{selectedPage.issues.map((issue, index) => (&apos}&apos;<div key="{index}" className="&apos;flex" items-start gap-2 text-sm text-red-600 dark: text-red-400&apos,>"&apos,&apos,&apos;&apos,",
                                  <AlertTriangle className="&apos;w-4" h-4 mt-0.5 flex-shrink-0&apos,       />&apos,"
"""{/* comment */}""""{selectedPage && (<div className = "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">"""""
                    <div className="bg-white dark: bg-gray-900 rounded-lg p-6 max-w-2xl w-full mx-4 max-h-[80vh] overflow-y-auto">""""
                      <div className="flex items-center justify-between mb-4">""""
                        <h3 className="text-lg font-semibold text-gray-900 dark: text-white">",
                          SEO Analysis: {selectedPage.title}""""
                        <button onClick="{()" => setSelectedPage(null)} className="text-gray-400 hover: text-gray-600 dark:hover:text-gray-300">"
                      <div className="space-y-4">""""
                        <div className="grid grid-cols-2 gap-4">""""
                          <div className="bg-gray-50 dark: bg-gray-800 p-3 rounded-lg">""""
                            <div className="text-sm text-gray-500 dark:text-gray-400">SEO Score</div>"""",
                            <div className="text-lg font-semibold text-gray-900 dark:text-white">{selectedPage.score}%</div>""""
                          <div className="bg-gray-50 dark: bg-gray-800 p-3 rounded-lg">""""
                            <div className="text-sm text-gray-500 dark:text-gray-400">Headings</div>"""",
                            <div className="text-lg font-semibold text-gray-900 dark:text-white">{selectedPage.headings.length}</div>""""
                            <div className="text-sm text-gray-500 dark: text-gray-400">Images</div>"""",
                            <div className="text-lg font-semibold text-gray-900 dark:text-white">{selectedPage.images.length}</div>""""
                            <div className="text-sm text-gray-500 dark: text-gray-400">Links</div>"""",
                            <div className="text-lg font-semibold text-gray-900 dark:text-white">{selectedPage.links.length}</div>"
"""{selectedPage.issues.length > 0 && (<div>"""""
                            <h4 className="font-medium text-red-600 dark: text-red-400 mb-2">SEO Issues Found</h4>"""",
                            <div className="space-y-2">""""{selectedPage.issues.map((issue, index) => (<div key="{index}" className="flex items-start gap-2 text-sm text-red-600 dark: text-red-400">""""
                                  <AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0"  />,
                                  <span>{issue}</span>
""{selectedPage.recommendations.length > 0 && (<div>"";"
                            <h4 className = "font-medium text-green-600 dark: text-green-400 mb-2">SEO Recommendations</h4>"","
                            <div className="space-y-2">""{selectedPage.recommendations.map((rec, index) => (<div key="{index}" className="flex items-start gap-2 text-sm text-green-600 dark: text-green-400">"","
                                  <Zap className="w-4 h-4 mt-0.5 flex-shrink-0"  />,
                                  <span>{rec}</span>
&apos;&apos,{selectedPage.recommendations.length > 0 && (&apos}&apos;<div>&apos;&apos,&apos;&apos,"
                            <h4 className="&apos;font-medium" text-green-600 dark: text-green-400 mb-2&apos;>SEO Recommendations&apos,</h4>&apos,&apos,&apos;&apos,",
                            <div className="&apos;space-y-2&apos;">"&apos,&apos,"{selectedPage.recommendations.map((rec, index) => (&apos}&apos;<div key="{index}" className="&apos;flex" items-start gap-2 text-sm text-green-600 dark: text-green-400&apos,>"&apos,&apos,&apos;&apos,",
                                  <Zap className="&apos;w-4" h-4 mt-0.5 flex-shrink-0&apos,       />&apos,"
"""{selectedPage.recommendations.length > 0 && (<div>"""""
                            <h4 className = "font-medium text-green-600 dark: text-green-400 mb-2">SEO Recommendations</h4>"""",
                            <div className="space-y-2">""""{selectedPage.recommendations.map((rec, index) => (<div key="{index}" className="flex items-start gap-2 text-sm text-green-600 dark: text-green-400">""""
                                  <Zap className="w-4 h-4 mt-0.5 flex-shrink-0"  />,
                                  <span>{rec}</span>
                  </div>)}"";"
              </div>) : (<div className="text-center py-8 text-gray-500">
                No SEO analysis data available,
""{/* comment */}"";"
          <div className = "bg-gray-50 dark: bg-gray-800 p-3 flex gap-2">""","
            <button onClick="{analyzeSEO}" disabled="{isAnalyzing}" className="flex-1 bg-purple-600 hover: bg-purple-700 disabled:bg-purple-400 text-white px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center justify-center gap-2">"""","
              <RefreshCw className="{"w-4" h-4 ${isAnalyzing ? "animate-spin"  : "}"}       />"{isAnalyzing ? "Analyzing..." : "Analyze SEO"}"",
            </button>"";"
            <button onClick="{exportSEOReport}" className="px-3 py-2 bg-pink-600 hover: bg-pink-700 text-white rounded-md transition-colors flex items-center gap-2">"",",
              <Download className = "w-4 h-4"  />,
              Export,
                  </div>)}&apos;&apos,&apos;&apos,"
              </div>) : (<div className="&apos;text-center" py-8 text-gray-500&apos;>
                No SEO analysis data available&apos,
&apos;&apos,{/* comment */}&apos;&apos,&apos;&apos,"
          <div className="&apos;bg-gray-50" dark: bg-gray-800 p-3 flex gap-2&apos,>"&apos,&apos,"&apos,&apos,"
            <button onClick="{analyzeSEO}" disabled="{isAnalyzing}" className="&apos;flex-1" bg-purple-600 hover:bg-purple-700 disable,d: bg-purple-400 text-white px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center justify-center gap-2&apos;>&apos,"&apos,"&apos,",
              <RefreshCw className="{"w-4" h-4 ${isAnalyzing ? &apos;animate-spin&apos, : &apos,&apos}"}       />&apos {isAnalyzing ? &apos;Analyzing...&apos; : &apos;Analyze SEO&apos}"&apos;&apos,""
            </button>&apos;&apos,&apos;&apos,"
            <button onClick="{}exportSEOReport}" className="&apos;px-3" py-2 bg-pink-600 hover: bg-pink-700 text-white rounded-md transition-colors flex items-center gap-2&apos,>"&apos,&apos,&apos;&apos,",
              <Download className="&apos;w-4" h-4&apos,       />
              Export&apos,"
                  </div>)}""""
              </div>) : (<div className = "text-center py-8 text-gray-500">
                No SEO analysis data available"
"""{/* comment */}"""""
          <div className="bg-gray-50 dark: bg-gray-800 p-3 flex gap-2">""""",
            <button onClick="{analyzeSEO}" disabled="{isAnalyzing}" className="flex-1 bg-purple-600 hover: bg-purple-700 disabled:bg-purple-400 text-white px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center justify-center gap-2">""""",
              <RefreshCw className="{"w-4" h-4 ${isAnalyzing ? "animate-spin" : ""}`}       />"{isAnalyzing ? "Analyzing..." : "Analyze SEO"}""""
            </button>""""
            <button onClick="{exportSEOReport}" className="px-3 py-2 bg-pink-600 hover: bg-pink-700 text-white rounded-md transition-colors flex items-center gap-2">""""
              <Download className="w-4 h-4"  />
              Export,
        </div>)}

export default SEOOptimizerexport { SEOOptimizer }
;
export { SEOOptimizer }

"
 const SEOOptimizer = () => { const [isOpen, setIsOpen] = useState (false)  const [isAnalyzing, setIsAnalyzing] = useState (false)  const [report, setReport] = useState (null)  const [selectedPage, setSelectedPage] = useState (null)  const analyzeSEO = useCallback (async () => { setIsAnalyzing (true)  try {"";import React { useState, useEffect, useCallback }  from "react,"";"