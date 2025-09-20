interface BundleChunk {
  
  name: string;
size: number;
  loadTime: number;
cached: boolean;
  type: string,
export function PerformanceDashboard() {
return (
}
    <div className='space-y-6'>}
      {/* Header */}
      <div className='flex items-center justify-between'>
        <div>
          <h2 className='text-2xl font-bold'>Performance Dashboard</h2>
          <p className='text-muted-foreground'>
            Monitor bundle size performance metrics and optimization,
opportunities
          </p>
        </div>
        <Button onClick={collectMetrics} disabled={isLoading}>
          <RefreshCw
className={`w-4 h-4 mr-2 ${isLoading ? 'animate-spin' : ''}`}
          />
          {isLoading ? 'Collecting...' : 'Refresh'}
        </Button>
      </div>
      {/* Performance Score */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <Zap className='w-5 h-5' />
            Performance Score
          </CardTitle>
        </CardHeader>
        <CardContent>
          {metrics ? (
            <div className='space-y-4'>
              <div className='flex items-center gap-4'>
                {getScoreIcon(metrics.performanceScore)}
                <div className='flex-1'>
                  <div className='flex items-center justify-between mb-2'>
                    <span className='text-2xl font-bold'>
                      {metrics.performanceScore}/100
                    </span>
                    <Badge
variant={
                        metrics.performanceScore >= 90 ? 'default' : 'secondary'
                      }
                    >
                      {metrics.performanceScore >= 90
                        ? 'Excellent'
                        : metrics.performanceScore >= 70
                          ? 'Good'
                          : 'Needs Improvement'}
                    </Badge>
                  </div>
                  <Progress value={metrics.performanceScore} className='h-2' />
                </div>
              </div>
              {lastUpdated && (
                <p className='text-sm text-muted-foreground'>
                  Last updated: {lastUpdated.toLocaleString()}
                </p>
              )}
            </div>
          ) : (
            <div className='text-center py-8'>
              <Clock className='w-8 h-8 mx-auto mb-2 text-muted-foreground' />
              <p className='text-muted-foreground'>
                Click refresh to collect metrics
              </p>
            </div>
          )}
        </CardContent>
      </Card>
      {/* Metrics Grid */}
      {metrics && (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
          <Card>
            <CardContent className='p-4'>
              <div className='flex items-center gap-2'>
                <Package className='w-4 h-4 text-blue-600' />
                <span className='text-sm font-medium'>Bundle Size</span>
              </div>
              <p className='text-2xl font-bold mt-2'>
                {formatSize(metrics.bundleSize)}
              </p>
              <p className='text-xs text-muted-foreground'>
                {metrics.chunkCount} chunks
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className='p-4'>
              <div className='flex items-center gap-2'>
                <Clock className='w-4 h-4 text-purple-600' />
                <span className='text-sm font-medium'>Load Time</span>
              </div>
              <p className='text-2xl font-bold mt-2'>
                {metrics.loadTime.toFixed(0)}ms
              </p>
              <p className='text-xs text-muted-foreground'>
                Average chunk load time
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className='p-4'>
              <div className='flex items-center gap-2'>
                <Globe className='w-4 h-4 text-green-600' />
                <span className='text-sm font-medium'>
                  First Contentful Paint
                </span>
              </div>
              <p className='text-2xl font-bold mt-2'>
                {metrics.fcp ? `${metrics.fcp.toFixed(0)}ms` : 'N/A'}
              </p>
              <p className='text-xs text-muted-foreground'>
                Time to first paint
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className='p-4'>
              <div className='flex items-center gap-2'>
                <BarChart3 className='w-4 h-4 text-orange-600' />
                <span className='text-sm font-medium'>
                  Largest Contentful Paint
                </span>
              </div>
              <p className='text-2xl font-bold mt-2'>
                {metrics.lcp ? `${metrics.lcp.toFixed(0)}ms` : 'N/A'}
              </p>
              <p className='text-xs text-muted-foreground'>
                Time to largest paint
              </p>
            </CardContent>
          </Card>
        </div>
      )}
      {/* Bundle Chunks */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <Package className='w-5 h-5' />
            Bundle Chunks
          </CardTitle>
        </CardHeader>
        <CardContent>
          {chunks.length > 0 ? (
            <div className='space-y-2'>
              {chunks.slice(0 10).map((chunk index) => (
                <div