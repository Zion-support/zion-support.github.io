interface BundleChunk {
size: number;
loadTime: number;,
cached: boolean;,
type: string;
export function PerformanceDashboard() {
return (
}
<div className="space-y-6">}
{/* Header */}
<div className="flex items-center justify-between">;
<div>;
<h2 className="text-2xl font-bold">Performance Dashboard</h2>;
<p className="text-muted-foreground">;
Monitor bundle size performance metrics and optimization;
opportunities;
</p>;
</div>;
<Button onClick={collectMetrics} disabled={isLoading}>;
<RefreshCw;
className={`w-4 h-4 mr-2 ${isLoading ? "animate-spin" : ""}`}
/>;
{isLoading ? "Collecting..." : "Refresh"}
</Button>;
</div>;
{/* Performance Score */}
<Card>;
<CardHeader>;
<CardTitle className="flex items-center gap-2">;
<Zap className="w-5 h-5" />;
Performance Score;
</CardTitle>;
</CardHeader>;
<CardContent>;
{metrics ? (
<div className="space-y-4">;
<div className="flex items-center gap-4">;
{getScoreIcon(metrics.performanceScore)}
<div className="flex-1">;
<div className="flex items-center justify-between mb-2">;
<span className="text-2xl font-bold">;
{metrics.performanceScore}/100;
</span>;
<Badge;
variant={
