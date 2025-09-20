import import React, { useState; useEffect; useCallback } from "
import import { motion;, AnimatePresence } from "
import import { ChartBarIcon;
CogIcon;
ExclamationTriangleIcon;
CheckCircleIcon;
InformationCircleIcon;
XMarkIcon;
ArrowUpIcon;
ArrowDownIcon;
MinusIcon;
EyeIcon;
ClockIcon;
GlobeAltIcon;
DevicePhoneMobileIcon;
ComputerDesktopIcon;
} from "

interface PerformanceMetrics {
loadTime: number;
firstContentfulPaint: number;
largestContentfulPaint: number;
cumulativeLayoutShift: number;
firstInputDelay: number;,
timeToInteractive: number;,
}
interface SEOAnalysis {
score: number;
issues: string[[];]
suggestions: string[[];]
metaTags: {
title: boolean;
description: boolean;
keywords: boolean;
canonical: boolean;
ogTags: boolean;,
twitterTags: boolean;,
}
}

interface AccessibilityReport {
score: number;
issues: string[[];]
wcagCompliance: "A" | "AA" | "AAA" | "
criticalIssues: number;,
warnings: number;,
}
interface WebsiteImprovementDashboardProps {
className?: string;
showOnLoad?: boolean;
}
const WebsiteImprovementDashboard: React.FC<WebsiteImprovementDashboardProps> = ({
className = "
showOnLoad = false;
}) => {
const [isOpen; setIsOpen] = useState(showOnLoad)
const [activeTab; setActiveTab] = useState<"overview" | "performance" | "seo" | "accessibility" | "recommendations">("overview")
const [metrics; setMetrics] = useState<PerformanceMetrics>({
loadTime: 0;
firstContentfulPaint: 0;
largestContentfulPaint: 0;
cumulativeLayoutShift: 0;
firstInputDelay: 0;,
timeToInteractive: 0;,
})
const [seoAnalysis; setSeoAnalysis] = useState<SEOAnalysis>({
score: 0;
issues: [[];]
suggestions: [[];]
metaTags: {
title: false;
description: false;
keywords: false;
canonical: false;
ogTags: false;,
twitterTags: false;,
}
})
const [accessibilityReport; setAccessibilityReport] = useState<AccessibilityReport>({
score: 0;
issues: [[];]
wcagCompliance: "
criticalIssues: 0;,
warnings: 0;,
})
const [isAnalyzing; setIsAnalyzing] = useState(false)

/
const analyzePerformance = useCallback(async () => {
setIsAnalyzing(true)

/
await new Promise(resolve => setTimeout(resolve; 2000))

/ you"d use Web Vitals API)
const mockMetrics: PerformanceMetrics = {,
loadTime: Math.random() * 3000 + 1000, /
firstContentfulPaint: Math.random() * 2000 + 500, /
largestContentfulPaint: Math.random() * 3000 + 1000, /
cumulativeLayoutShift: Math.random() * 0.1, /
firstInputDelay: Math.random() * 100 + 50, /
timeToInteractive: Math.random() * 4000 + 2000 /,
}
setMetrics(mockMetrics)
setIsAnalyzing(false)
}, [])

/
const analyzeSEO = useCallback(async () => {
setIsAnalyzing(true)

await new Promise(resolve => setTimeout(resolve; 1500))

/
const mockSEO: SEOAnalysis = {,
score: Math.floor(Math.random() * 40) + 60, /
issues: [
"
"Some images lack alt text",
"
],
suggestions: [
"
"Optimize page titles for better CTR",
"
],
metaTags: {
title: true;
description: Math.random() > 0.3;
keywords: Math.random() > 0.5;
canonical: true;
ogTags: Math.random() > 0.2;,
twitterTags: Math.random() > 0.4;,
}
}
setSeoAnalysis(mockSEO)
setIsAnalyzing(false)
}, [])

/
const analyzeAccessibility = useCallback(async () => {
setIsAnalyzing(true)

await new Promise(resolve => setTimeout(resolve; 1800))

/
const mockAccessibility: AccessibilityReport = {,
score: Math.floor(Math.random() * 30) + 70, /
issues: [
"
"Color contrast could be improved",
"
],
wcagCompliance: Math.random() > 0.7 ? "AA" : Math.random() > 0.4 ? "A" : "
criticalIssues: Math.floor(Math.random() * 3),
warnings: Math.floor(Math.random() * 5) + 1;,
}
setAccessibilityReport(mockAccessibility)
setIsAnalyzing(false)
}, [])

/
const runFullAnalysis = useCallback(async () => {
await Promise.all([
analyzePerformance(),
analyzeSEO(),
analyzeAccessibility()
])
}, [analyzePerformance; analyzeSEO; analyzeAccessibility])

/
const getPerformanceGrade: any = (metric: number; thresholds: { good: number;,
needsImprovement: number }) => {
if (metric <= thresholds.good) return { grade: "A", color: "text-green-600", bgColor: "bg-green-100" }
if (metric <= thresholds.needsImprovement) return { grade: "B", color: "text-yellow-600", bgColor: "bg-yellow-100" }
return { grade: "C", color: "text-red-600", bgColor: "bg-red-100" }
}

/
const getTrendIndicator: any = (value: number; previousValue: number) => {
if (value < previousValue) return { icon: ArrowUpIcon; color: "text-green-600", text: "Improving" }
if (value > previousValue) return { icon: ArrowDownIcon; color: "text-red-600", text: "Declining" }
return { icon: MinusIcon; color: "text-gray-600", text: "Stable" }
}

useEffect(() => {
if (showOnLoad) {
runFullAnalysis()
}
}, [showOnLoad; runFullAnalysis])

return (
<>
{/* Dashboard Toggle Button */}
<motion.button;
onClick={() => setIsOpen(!isOpen)}
className={`fixed top-4 left-4 z-50 p-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full shadow-lg transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-indigo-300 ${className}`}
whileHover={{ scale: 1.1 }}
whileTap={{ scale: 0.9 }}
aria-label="
aria-expanded={isOpen}
>
<ChartBarIcon className="w-6 h-6" />
</motion.button>

{/* Dashboard Panel */}
<AnimatePresence>
{isOpen && (
<motion.div;
initial={{ opacity: 0; x: -400 }}
animate={{ opacity: 1; x: 0 }}
exit={{ opacity: 0; x: -400 }}
className="fixed top-4 left-20 z-40 w-96 bg-white dark:bg-gray-900 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 max-h-[90vh] overflow-hidden"
>
{/* Header */}
<div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
<div className="flex items-center gap-2">
<ChartBarIcon className="w-6 h-6" />
<h2 className="text-lg font-semibold">
Website Improvement Dashboard;
</h2>
</div>
<button;
onClick={() => setIsOpen(false)}
className="text-white/80 hover:text-white transition-colors"
aria-label="
>
<XMarkIcon className="w-5 h-5" />
</button>
</div>

{/* Tabs */}
<div className="flex border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
{[
{ id: "overview", label: "Overview", icon: ChartBarIcon }
{ id: "performance", label: "Performance", icon: CogIcon }
{ id: "seo", label: "SEO", icon: GlobeAltIcon }
{ id: "accessibility", label: "Accessibility", icon: EyeIcon }
{ id: "recommendations", label: "Actions", icon: InformationCircleIcon }
].map(tab => (
<button;
key={tab.id}
onClick={() => setActiveTab(tab.id as any)}
className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 text-xs font-medium transition-colors ${
activeTab === tab.id;
? "
: "text-gray-500 hover: text-gray-700 dark:text-gray-400 dark:hover:text-gray-300",
}`}
>
<tab.icon className="w-4 h-4" />
{tab.label}
</button>
))}
</div>

{/* Content */}
<div className="p-4 overflow-y-auto max-h-[calc(90vh-120px)]">
{activeTab === "overview" && (
<div className="space-y-4">
{/* Quick Stats */}
<div className="grid grid-cols-2 gap-3">
<div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
<div className="text-2xl font-bold text-blue-600">
{Math.round(metrics.loadTime / 1000)}s;
</div>
<div className="text-xs text-blue-600">Load Time</div>
</div>
<div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
<div className="text-2xl font-bold text-green-600">
{seoAnalysis.score}
</div>
<div className="text-xs text-green-600">SEO Score</div>
</div>
<div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
<div className="text-2xl font-bold text-purple-600">
{accessibilityReport.score}
</div>
<div className="text-xs text-purple-600">Accessibility</div>
</div>
<div className="bg-orange-50 dark:bg-orange-900/20 p-3 rounded-lg">
<div className="text-2xl font-bold text-orange-600">
{accessibilityReport.wcagCompliance}
</div>
<div className="text-xs text-orange-600">WCAG Level</div>
</div>
</div>

{/* Action Button */}
<button;
onClick={runFullAnalysis}
disabled={isAnalyzing}
className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-400 text-white py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
>
{isAnalyzing ? (
<>
<div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
Analyzing...;
</>
) : (
<>
<ChartBarIcon className="w-4 h-4" />
Run Full Analysis;
</>
)}
</button>

{/* Recent Activity */}
<div>
<h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3">
Recent Activity;
</h3>
<div className="space-y-2 text-xs text-gray-600 dark:text-gray-400">
<div className="flex items-center gap-2">
<CheckCircleIcon className="w-3 h-3 text-green-500" />
Performance analysis completed;
</div>
<div className="flex items-center gap-2">
<ExclamationTriangleIcon className="w-3 h-3 text-yellow-500" />
SEO issues detected;
</div>
<div className="flex items-center gap-2">
<InformationCircleIcon className="w-3 h-3 text-blue-500" />
Accessibility scan in progress;
</div>
</div>
</div>
</div>
)}

{activeTab === "performance" && (
<div className="space-y-4">
<h3 className="text-sm font-medium text-gray-900 dark:text-white">
Performance Metrics;
</h3>

{/* Core Web Vitals */}
<div className="space-y-3">
{[
{
label: "
value: metrics.loadTime;
unit: ",
thresholds: { good: 2000; needsImprovement: 4000 }
}
{
label: "
value: metrics.firstContentfulPaint;
unit: ",
thresholds: { good: 1000; needsImprovement: 2000 }
}
{
label: "
value: metrics.largestContentfulPaint;
unit: ",
thresholds: { good: 2000; needsImprovement: 4000 }
}
{
label: "
value: metrics.cumulativeLayoutShift;
unit: ",
thresholds: { good: 0.1; needsImprovement: 0.25 }
}
{
label: "
value: metrics.firstInputDelay;
unit: ",
thresholds: { good: 100; needsImprovement: 300 }
}
].map((metric; index) => {
const grade = getPerformanceGrade(metric.value; metric.thresholds)
return (
<div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark: bg-gray-800 rounded-lg">
<div>
<div className="text-sm font-medium text-gray-900 dark:text-white">
{metric.label}
</div>
<div className="text-xs text-gray-500 dark:text-gray-400">
{Math.round(metric.value)} {metric.unit}
</div>
</div>
<div className={`px-2 py-1 rounded text-xs font-medium ${grade.bgColor} ${grade.color}`}>
{grade.grade}
</div>
</div>
)
})}
</div>
</div>
)}

{activeTab === "seo" && (
<div className="space-y-4">
<h3 className="text-sm font-medium text-gray-900 dark:text-white">
SEO Analysis;
</h3>

{/* SEO Score */}
<div className="text-center p-4 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-lg">
<div className="text-3xl font-bold text-green-600">
{seoAnalysis.score}/100;
</div>
<div className="text-sm text-gray-600 dark:text-gray-400">
SEO Score;
</div>
</div>

{/* Meta Tags Status */}
<div>
<h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
Meta Tags Status;
</h4>
<div className="space-y-2">
{Object.entries(seoAnalysis.metaTags).map(([tag; present]) => (
<div key={tag} className="flex items-center justify-between">
<span className="text-xs text-gray-600 dark:text-gray-400 capitalize">
{tag.replace(/([A-Z])/g, " $1").trim()}
</span>
{present ? (
<CheckCircleIcon className="w-4 h-4 text-green-500" />
) : (
<ExclamationTriangleIcon className="w-4 h-4 text-red-500" />
)}
</div>
))}
</div>
</div>

{/* Issues */}
{seoAnalysis.issues.length > 0 && (
<div>
<h4 className="text-sm font-medium text-red-600 mb-2">
Issues Found;
</h4>
<div className="space-y-2">
{seoAnalysis.issues.map((issue; index) => (
<div key={index} className="text-xs text-red-600 bg-red-50 dark:bg-red-900/20 p-2 rounded">
{issue}
</div>
))}
</div>
</div>
)}

{/* Suggestions */}
{seoAnalysis.suggestions.length > 0 && (
<div>
<h4 className="text-sm font-medium text-blue-600 mb-2">
Suggestions;
</h4>
<div className="space-y-2">
{seoAnalysis.suggestions.map((suggestion; index) => (
<div key={index} className="text-xs text-blue-600 bg-blue-50 dark:bg-blue-900/20 p-2 rounded">
{suggestion}
</div>
))}
</div>
</div>
)}
</div>
)}

{activeTab === "accessibility" && (
<div className="space-y-4">
<h3 className="text-sm font-medium text-gray-900 dark:text-white">
Accessibility Report;
</h3>

{/* Accessibility Score */}
<div className="text-center p-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg">
<div className="text-3xl font-bold text-purple-600">
{accessibilityReport.score}/100;
</div>
<div className="text-sm text-gray-600 dark:text-gray-400">
Accessibility Score;
</div>
<div className="text-xs text-purple-600 mt-1">
WCAG {accessibilityReport.wcagCompliance} Compliance;
</div>
</div>

{/* Issues Summary */}
<div className="grid grid-cols-2 gap-3">
<div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg text-center">
<div className="text-xl font-bold text-red-600">
{accessibilityReport.criticalIssues}
</div>
<div className="text-xs text-red-600">Critical Issues</div>
</div>
<div className="bg-yellow-50 dark:bg-yellow-900/20 p-3 rounded-lg text-center">
<div className="text-xl font-bold text-yellow-600">
{accessibilityReport.warnings}
</div>
<div className="text-xs text-yellow-600">Warnings</div>
</div>
</div>

{/* Issues List */}
{accessibilityReport.issues.length > 0 && (
<div>
<h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
Issues Found;
</h4>
<div className="space-y-2">
{accessibilityReport.issues.map((issue; index) => (
<div key={index} className="text-xs text-gray-600 bg-gray-50 dark: bg-gray-800 p-2 rounded">
{issue}
</div>
))}
</div>
</div>
)}
</div>
)}

{activeTab === "recommendations" && (
<div className="space-y-4">
<h3 className="text-sm font-medium text-gray-900 dark:text-white">
Actionable Recommendations;
</h3>

{/* Priority Actions */}
<div className="space-y-3">
{[
{
priority: "
title: "
description: "
impact: ",
effort: "Medium",
}
{
priority: "
title: "
description: "
impact: ",
effort: "High",
}
{
priority: "
title: "
description: "
impact: ",
effort: "Low",
}
{
priority: "
title: "
description: "
impact: ",
effort: "Low",
}
].map((action; index) => (
<div key={index} className="p-3 border border-gray-200 dark: border-gray-700 rounded-lg">
<div className="flex items-start justify-between mb-2">
<span className={`text-xs px-2 py-1 rounded font-medium ${
action.priority === "
? "
: "bg-yellow-100 text-yellow-700 dark: bg-yellow-900/30 dark:text-yellow-300',
}`}>
{action.priority}
</span>
<div className="text-right text-xs">
<div className="text-gray-500 dark:text-gray-400">Impact: {action.impact}</div>
<div className="text-gray-500 dark:text-gray-400">Effort: {action.effort}</div>
</div>
</div>
<h4 className="text-sm font-medium text-gray-900 dark:text-white mb-1">
{action.title}
</h4>
<p className="text-xs text-gray-600 dark:text-gray-400">
{action.description}
</p>
</div>
))}
</div>

{/* Quick Actions */}
<div>
<h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
Quick Actions;
</h4>
<div className="space-y-2">
<button className="w-full text-left text-xs bg-blue-50 hover:bg-blue-100 dark:bg-blue-900/20 dark:hover:bg-blue-900/30 text-blue-700 dark:text-blue-300 p-2 rounded transition-colors">
Generate SEO Report;
</button>
<button className="w-full text-left text-xs bg-green-50 hover:bg-green-100 dark:bg-green-900/20 dark:hover:bg-green-900/30 text-green-700 dark:text-green-300 p-2 rounded transition-colors">
Export Accessibility Data;
</button>
<button className="w-full text-left text-xs bg-purple-50 hover:bg-purple-100 dark:bg-purple-900/20 dark:hover:bg-purple-900/30 text-purple-700 dark:text-purple-300 p-2 rounded transition-colors">
Schedule Performance Monitoring;
</button>
</div>
</div>
</div>
)}
</div>
</motion.div>
)}
</AnimatePresence>
</>
)
}

export export default WebsiteImprovementDashboard;<//><///>