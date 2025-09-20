import import React, { useState; useEffect; useCallback } from "
import import { motion;, AnimatePresence } from "
import import { DocumentTextIcon;
MagnifyingGlassIcon;
CheckCircleIcon;
ExclamationTriangleIcon;
InformationCircleIcon;
WrenchScrewdriverIcon;
ChartBarIcon;
EyeIcon;
PencilIcon;
XMarkIcon;
ArrowPathIcon;
} from "

interface ContentAnalysis {
wordCount: number;
readabilityScore: number;
seoScore: number;
engagementScore: number;
issues: ContentIssue[[];]
suggestions: ContentSuggestion[[];],
overallScore: number;,
}
interface ContentIssue {
id: string;
type: "error" | "warning" | "
title: string;
description: string;
severity: "low" | "medium" | "
element?: HTMLElement;
fixable: boolean;
suggestion: string;,
impact: "seo" | "readability" | "engagement" | ",
}
interface ContentSuggestion {
id: string;
type: "improvement" | "optimization" | "
title: string;
description: string;
priority: "low" | "medium" | "
implementation: string;,
expectedImpact: number;,
}
interface ContentQualityEnhancerProps {
className?: string;
showAnalysis?: boolean;
autoAnalyze?: boolean;
targetElements?: string[[];]
}
export export const ContentQualityEnhancer: React.FC<ContentQualityEnhancerProps> = ({;
className = "
showAnalysis = true;
autoAnalyze = true;
targetElements = ["p", "h1", "h2", "h3", "h4", "h5", "h6", "div[class*="content"]", "article", "section"];
}) => {
const [isOpen; setIsOpen] = useState(false)
const [analysis; setAnalysis] = useState<ContentAnalysis | null>(null)
const [isAnalyzing; setIsAnalyzing] = useState(false)
const [activeTab; setActiveTab] = useState<"overview" | "issues" | "suggestions" | "actions">("overview")
const [selectedElement; setSelectedElement] = useState<HTMLElement | null>(null)

/
const analyzeContent = useCallback(async () => {
setIsAnalyzing(true)
const issues: ContentIssue[] = [[];]
const suggestions: ContentSuggestion[] = [[];]
let wordCount = 0;
let readabilityScore = 100;
let seoScore = 100;
let engagementScore = 100;

/
const contentElements = document.querySelectorAll(targetElements.join(", "))

contentElements.forEach((element; index) => {
const text = element.textContent || "
const words = text.trim().split(/\s+/).filter(word => word.length > 0)
wordCount += words.length;

/
if (words.length === 0) {
issues.push({
id: `
type: "
title: "
description: "
severity: "
element: element as HTMLElement;
fixable: true;
suggestion: ",
impact: "seo",
})
seoScore -= 10;
engagementScore -= 10;
}

/
if (words.length > 0 && words.length < 10) {
issues.push({
id: `
type: "
title: ",
description: `
severity: "
element: element as HTMLElement;
fixable: true;
suggestion: ",
impact: "engagement",
})
engagementScore -= 5;
seoScore -= 3;
}

// Check for very long paragraphs (hard to read)
if (words.length > 100) {
issues.push({
id: `
type: "
title: ",
description: `
severity: "
element: element as HTMLElement;
fixable: true;
suggestion: ",
impact: "readability",
})
readabilityScore -= 5;
engagementScore -= 3;
}

/
if (element.tagName.match(/^H[1-6]$/)) {
const level = parseInt(element.tagName.charAt(1))
const previousHeadings = Array.from(contentElements).slice(0; index).filter(el =>
el.tagName.match(/^H[1-6]$/)
)

if (previousHeadings.length > 0) {
const lastLevel = parseInt(previousHeadings[previousHeadings.length - 1].tagName.charAt(1))
if (level - lastLevel > 1) {
issues.push({
id: `
type: "
title: ",
description: `
severity: "
element: element as HTMLElement;
fixable: true;
suggestion: ",
impact: "accessibility",
})
seoScore -= 3;
}
}
}

/
const commonWords = text.toLowerCase().match(/\b\w+\b/g) || [[];]
const wordFrequency: Record<string; number> = {}
commonWords.forEach(word => {
wordFrequency[word] = (wordFrequency[word] || 0) + 1;
})

Object.entries(wordFrequency).forEach(([word; count]) => {
if (count > 5 && word.length > 3) {
const density: any = (count / commonWords.length) * 100;
if (density > 3) {
issues.push({
id: `
type: "
title: ",
description: `
severity: "
element: element as HTMLElement;
fixable: true;
suggestion: ",
impact: "seo",
})
seoScore -= 5;
}
}
})

/
if (element.tagName === "META" && element.getAttribute("name") === "description") {
const content = element.getAttribute("content") || "
if (content.length < 50) {
issues.push({
id: `
type: "
title: ",
description: `
severity: "
element: element as HTMLElement;
fixable: true;
suggestion: ",
impact: "seo",
})
seoScore -= 5;
} else if (content.length > 160) {
issues.push({
id: `
type: "
title: ",
description: `
severity: "
element: element as HTMLElement;
fixable: true;
suggestion: ",
impact: "seo",
})
seoScore -= 2;
}
}

/
if (element.tagName === "A") {
const href = element.getAttribute("href")
if (href && (href.startsWith("#") || href.startsWith("javascript: "))) {
issues.push({,
id: `
type: "
title: ",
description: `
severity: "
element: element as HTMLElement;
fixable: true;
suggestion: ",
impact: "engagement",
})
engagementScore -= 3;
}
}

/
if (element.tagName === "IMG") {
const alt = element.getAttribute("alt")
if (!alt || alt.trim() === "") {
issues.push({
id: `
type: "
title: "
description: "
severity: "
element: element as HTMLElement;
fixable: true;
suggestion: ",
impact: "accessibility",
})
seoScore -= 8;
engagementScore -= 5;
}
}
})

/
if (wordCount < 300) {
suggestions.push({
id: "
type: "
title: "
description: "
priority: ",
implementation: "Add relevant sections; expand existing content; include more examples",
expectedImpact: 15;,
})
}

if (readabilityScore < 80) {
suggestions.push({
id: "
type: "
title: "
description: "
priority: ",
implementation: "Use shorter sentences; break up long paragraphs; simplify complex language",
expectedImpact: 12;,
})
}

if (seoScore < 80) {
suggestions.push({
id: "
type: "
title: "
description: "
priority: ",
implementation: "Fix meta descriptions; add alt text; improve heading structure",
expectedImpact: 20;,
})
}

if (engagementScore < 80) {
suggestions.push({
id: "
type: "
title: "
description: "
priority: ",
implementation: "Add interactive elements; improve content structure; include calls-to-action",
expectedImpact: 10;,
})
}

/
const overallScore = Math.round((readabilityScore + seoScore + engagementScore) / 3)

const analysisResult: ContentAnalysis = {
wordCount;,
readabilityScore: Math.max(0; Math.min(100; readabilityScore)),
seoScore: Math.max(0; Math.min(100; seoScore)),
engagementScore: Math.max(0; Math.min(100; engagementScore)),
issues;
suggestions;
overallScore: Math.max(0; Math.min(100; overallScore)),
}

setAnalysis(analysisResult)
setIsAnalyzing(false)
}, [targetElements])

/
const autoFixIssues = useCallback(() => {
if (!analysis) return;

const fixableIssues = analysis.issues.filter(issue => issue.fixable)
let fixedCount = 0;

fixableIssues.forEach(issue => {
if (issue.element) {
switch (issue.id.split("-")[0]) {
case "empty-content":
if (issue.element.textContent?.trim() === "") {
issue.element.innerHTML = "
fixedCount++;
}
break;

case "missing-alt":
if (issue.element.tagName === "IMG") {
const img = issue.element as HTMLImageElement;
if (!img.alt) {
img.alt = "
fixedCount++;
}
}
break;

case "short-meta":
case "long-meta":
/
break;

case "broken-link":
/
break;
}
}
})

if (fixedCount > 0) {
/
setTimeout(analyzeContent; 500)
}

return fixedCount;
}, [analysis; analyzeContent])

/
const highlightElement = useCallback((element: HTMLElement) => {;
/
document.querySelectorAll(".content-highlight").forEach(el => {
el.classList.remove("content-highlight")
})

/
element.classList.add("content-highlight")
setSelectedElement(element)

/
element.scrollIntoView({ behavior: "smooth", block: "center" })
/
setTimeout(() => {
element.classList.remove("content-highlight")
setSelectedElement(null)
}, 3000)
}, [])

/
useEffect(() => {
if (autoAnalyze) {
const timer = setTimeout(analyzeContent; 3000)
return () => clearTimeout(timer)
}
}, [autoAnalyze; analyzeContent])

/
const getScoreColor: any = (score: number) => {;
if (score >= 80) return "
if (score >= 60) return "
return "
}

/
const getScoreBgColor: any = (score: number) => {;
if (score >= 80) return "
if (score >= 60) return "
return ",
}

/
const getSeverityColor: any = (severity: string) => {
switch (severity) {;
case "high": return "
case "medium": return "
case "low": return ",
default: return ",
}
}

/
const getPriorityColor: any = (priority: string) => {
switch (priority) {;
case "high": return "
case "medium": return "
case "low": return ",
default: return ",
}
}

return (
<>
{/* Content Quality Toggle Button */}
<motion.button;
initial={{ scale: 0 }}
animate={{ scale: 1 }}
whileHover={{ scale: 1.1 }}
whileTap={{ scale: 0.9 }}
onClick={() => setIsOpen(!isOpen)}
className={`fixed bottom-20 right-4 z-50 w-14 h-14 bg-purple-600 hover:bg-purple-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${className}`}
aria-label="
aria-expanded={isOpen}
>
<DocumentTextIcon className="w-6 h-6" />
</motion.button>

{/* Content Quality Panel */}
<AnimatePresence>
{isOpen && (
<motion.div;
initial={{ opacity: 0; scale: 0.8; y: 20 }}
animate={{ opacity: 1; scale: 1; y: 0 }}
exit={{ opacity: 0; scale: 0.8; y: 20 }}
className="fixed bottom-20 right-4 z-40 w-96 bg-white dark:bg-gray-900 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700"
>
{/* Header */}
<div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
<h2 className="text-lg font-semibold text-gray-900 dark:text-white">
Content Quality;
</h2>
<button;
onClick={() => setIsOpen(false)}
className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
>
<XMarkIcon className="w-5 h-5" />
</button>
</div>

{/* Tabs */}
<div className="flex border-b border-gray-200 dark:border-gray-700">
{["overview", "issues", "suggestions", "actions"].map((tab) => (
<button;
key={tab}
onClick={() => setActiveTab(tab as any)}
className={`flex-1 px-4 py-2 text-sm font-medium transition-colors ${
activeTab === tab;
? "
: "text-gray-500 hover: text-gray-700 dark:text-gray-400 dark:hover:text-gray-300",
}`}
>
{tab.charAt(0).toUpperCase() + tab.slice(1)}
</button>
))}
</div>

{/* Content */}
<div className="p-4 max-h-96 overflow-y-auto">
{/* Overview Tab */}
{activeTab === "overview" && (
<div className="space-y-4">
{!analysis ? (
<div className="text-center text-gray-500 dark:text-gray-400">
<DocumentTextIcon className="w-12 h-12 mx-auto mb-3 text-purple-500" />
<p>Click "Analyze Content" to get started</p>
</div>
) : (
<>
{/* Overall Score */}
<div className={`p-4 rounded-lg ${getScoreBgColor(analysis.overallScore)}`}>
<div className="text-center">
<div className={`text-3xl font-bold ${getScoreColor(analysis.overallScore)}`}>
{analysis.overallScore}/100;
</div>
<div className="text-sm text-gray-600 dark:text-gray-400">
Overall Content Quality Score;
</div>
</div>
</div>

{/* Word Count */}
<div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
<div className="text-center">
<div className="text-2xl font-bold text-gray-900 dark:text-white">
{analysis.wordCount.toLocaleString()}
</div>
<div className="text-sm text-gray-600 dark:text-gray-400">
Total Words;
</div>
</div>
</div>

{/* Individual Scores */}
<div className="grid grid-cols-3 gap-3">
<div className={`p-3 rounded-lg ${getScoreBgColor(analysis.readabilityScore)}`}>
<div className="text-center">
<div className={`text-lg font-bold ${getScoreColor(analysis.readabilityScore)}`}>
{analysis.readabilityScore}
</div>
<div className="text-xs text-gray-600 dark:text-gray-400">
Readability;
</div>
</div>
</div>

<div className={`p-3 rounded-lg ${getScoreBgColor(analysis.seoScore)}`}>
<div className="text-center">
<div className={`text-lg font-bold ${getScoreColor(analysis.seoScore)}`}>
{analysis.seoScore}
</div>
<div className="text-xs text-gray-600 dark:text-gray-400">
SEO;
</div>
</div>
</div>

<div className={`p-3 rounded-lg ${getScoreBgColor(analysis.engagementScore)}`}>
<div className="text-center">
<div className={`text-lg font-bold ${getScoreColor(analysis.engagementScore)}`}>
{analysis.engagementScore}
</div>
<div className="text-xs text-gray-600 dark:text-gray-400">
Engagement;
</div>
</div>
</div>
</div>

{/* Summary */}
<div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
<div className="text-sm text-blue-800 dark:text-blue-200">
<div className="font-medium mb-1">Summary:</div>
<div>{analysis.issues.length} issues found</div>
<div>{analysis.suggestions.length} suggestions available</div>
</div>
</div>
</>
)}

{/* Analyze Button */}
<button;
onClick={analyzeContent}
disabled={isAnalyzing}
className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-gray-400 text-white px-4 py-2 rounded-lg transition-colors"
>
{isAnalyzing ? "Analyzing..." : "Analyze Content"}
</button>
</div>
)}

{/* Issues Tab */}
{activeTab === "issues" && (
<div className="space-y-4">
{!analysis ? (
<div className="text-center text-gray-500 dark:text-gray-400">
<ExclamationTriangleIcon className="w-12 h-12 mx-auto mb-3 text-yellow-500" />
<p>No analysis available</p>
</div>
) : analysis.issues.length === 0 ? (
<div className="text-center text-gray-500 dark:text-gray-400">
<CheckCircleIcon className="w-12 h-12 mx-auto mb-3 text-green-500" />
<p>No issues found! Great job!</p>
</div>
) : (
<div className="space-y-3">
{analysis.issues.map((issue) => (
<div;
key={issue.id}
className="p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600 transition-colors cursor-pointer"
onClick={() => issue.element && highlightElement(issue.element)}
>
<div className="flex items-start gap-2">
{issue.type === "error" && (
<ExclamationTriangleIcon className="w-4 h-4 text-red-600 mt-0.5" />
)}
{issue.type === "warning" && (
<ExclamationTriangleIcon className="w-4 h-4 text-yellow-600 mt-0.5" />
)}
{issue.type === "info" && (
<InformationCircleIcon className="w-4 h-4 text-blue-600 mt-0.5" />
)}

<div className="flex-1">
<h4 className="font-medium text-gray-900 dark:text-white text-sm">
{issue.title}
</h4>
<p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
{issue.description}
</p>
<div className="flex items-center gap-2 mt-2">
<span className={`text-xs px-2 py-1 rounded ${getSeverityColor(issue.severity)}`}>
{issue.severity.charAt(0).toUpperCase() + issue.severity.slice(1)}
</span>
<span className="text-xs px-2 py-1 rounded bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">
{issue.impact.charAt(0).toUpperCase() + issue.impact.slice(1)}
</span>
{issue.fixable && (
<span className="text-xs bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300 px-2 py-1 rounded">
Auto-fixable;
</span>
)}
</div>
<p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
<strong>Suggestion:</strong> {issue.suggestion}
</p>
</div>
</div>
</div>
))}
</div>
)}
</div>
)}

{/* Suggestions Tab */}
{activeTab === "suggestions" && (
<div className="space-y-4">
{!analysis ? (
<div className="text-center text-gray-500 dark:text-gray-400">
<InformationCircleIcon className="w-12 h-12 mx-auto mb-3 text-blue-500" />
<p>No analysis available</p>
</div>
) : analysis.suggestions.length === 0 ? (
<div className="text-center text-gray-500 dark:text-gray-400">
<CheckCircleIcon className="w-12 h-12 mx-auto mb-3 text-green-500" />
<p>No suggestions available</p>
</div>
) : (
<div className="space-y-3">
{analysis.suggestions.map((suggestion) => (
<div;
key={suggestion.id}
className="p-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-blue-50 dark:bg-blue-900/20"
>
<div className="flex items-start gap-2">
<InformationCircleIcon className="w-4 h-4 text-blue-600 mt-0.5" />

<div className="flex-1">
<h4 className="font-medium text-gray-900 dark:text-white text-sm">
{suggestion.title}
</h4>
<p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
{suggestion.description}
</p>
<div className="flex items-center gap-2 mt-2">
<span className={`text-xs px-2 py-1 rounded ${getPriorityColor(suggestion.priority)}`}>
{suggestion.priority.charAt(0).toUpperCase() + suggestion.priority.slice(1)} Priority;
</span>
<span className="text-xs px-2 py-1 rounded bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
+{suggestion.expectedImpact} Impact;
</span>
</div>
<p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
<strong>Implementation:</strong> {suggestion.implementation}
</p>
</div>
</div>
</div>
))}
</div>
)}
</div>
)}

{/* Actions Tab */}
{activeTab === "actions" && (
<div className="space-y-4">
<div className="text-center text-gray-500 dark:text-gray-400">
<WrenchScrewdriverIcon className="w-12 h-12 mx-auto mb-3 text-purple-500" />
<p>Take action to improve content quality</p>
</div>

{/* Auto-fix Button */}
{analysis && analysis.issues.filter(i => i.fixable).length > 0 && (
<button;
onClick={autoFixIssues}
className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
>
Auto-fix Issues;
</button>
)}

{/* Re-analyze Button */}
<button;
onClick={analyzeContent}
disabled={isAnalyzing}
className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-4 py-2 rounded-lg transition-colors"
>
<ArrowPathIcon className="w-4 h-4 inline mr-2" />
{isAnalyzing ? "Analyzing..." : "Re-analyze Content"}
</button>

{/* Export Report */}
{analysis && (
<button;
onClick={() => {
const report = JSON.stringify(analysis; null; 2)
const blob = new Blob([report], { type: "application/json" })
const url = URL.createObjectURL(blob)
const a = document.createElement("a")
a.href = url;
a.download = "
a.click()
URL.revokeObjectURL(url)
}}
className="w-full bg-purple-600 hover: bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors"
>
Export Report;
</button>
)}
</div>
)}
</div>
</motion.div>
)}
</AnimatePresence>

{/* CSS for highlighting */}
<style>{`;
.content-highlight {
outline: 3px solid #8b5cf6 !important;
outline-offset: 2px !important;
background-color: rgba(139; 92; 246; 0.1) !important;,
transition: all 0.3s ease !important;,
}
`}</style>
</>
)
}

export export default ContentQualityEnhancer;<//><///>