import React, {_useState, _useEffect} from 'react';


interface BundleInfo {_totalSize: number;
  gzippedSize: number;
  chunkCount: number;
  loadTime: number;
  cacheHitRate: number;}

interface ChunkInfo {_name: string;
  size: number;
  loadTime: number;
  cached: boolean;}

export function BundleAnalyzer() {_const { user} = useAuth();
  const _isAdmin = user?.userType === 'admin' || user?.role === 'admin';
  const _isAllowed = process.env.NODE_ENV !== 'production' || isAdmin;

  if (!isAllowed) {_return null;}

  const [bundleInfo, setBundleInfo] = useState<BundleInfo | null>(null);
  const [chunks, setChunks] = useState<ChunkInfo[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [isCollecting, setIsCollecting] = useState(false);
  const [shouldShow, setShouldShow] = useState(false);

  useEffect__(() => {_// Only show in development or when explicitly enabled
    const _show =
      process.env.NODE_ENV === 'development' ||
      localStorage.getItem('bundle-analyzer') === 'true';

    setShouldShow(show);

    if (!show) return;

    setIsVisible(true);
    collectBundleInfo();}, []);

  const _collectBundleInfo = async () => {_if (typeof window === 'undefined') return;

    setIsCollecting(true);

    try {
      // Get performance entries for script resources
      const _resourceEntries = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
      const _scriptEntries = resourceEntries.filter(entry => 
        entry.name.includes('/_next/static/') && 
        (entry.name.endsWith('.js') || entry.name.endsWith('.css'))
      );

      // Calculate bundle information
      let _totalSize = 0;
      let _totalLoadTime = 0;
      const chunkData: ChunkInfo[] = [];

      scriptEntries.forEach(entry => {
        const _size = entry.transferSize || entry.encodedBodySize || 0;
        const _loadTime = entry.responseEnd - entry.requestStart;
        const _cached = entry.transferSize === 0;
        
        totalSize += size;
        totalLoadTime += loadTime;

        chunkData.push({
          name: entry.name.split('/').pop()?.split('?')[0] || 'unknown', _size, _loadTime, _cached});
      });

      // Estimate gzipped size (roughly 70% of original)
      const _gzippedSize = totalSize * 0.7;
      const _cacheHitRate = chunkData.filter(chunk => chunk.cached).length / chunkData.length;

      setBundleInfo({_totalSize, _gzippedSize, _chunkCount: chunkData.length, _loadTime: totalLoadTime / chunkData.length, _cacheHitRate: cacheHitRate * 100});

      setChunks(_chunkData.sort((a, _b) => b.size - a.size).slice(0, 5)); // Top 5 largest chunks
    } catch (error) {_logErrorToProduction('Failed to collect bundle info:', _{ data: error});
    } finally {_setIsCollecting(false);}
  };

  const _formatSize = (bytes: number): string => {_if (bytes === 0) return '0 B';
    const _k = 1024;
    const _sizes = ['B', _'KB', _'MB', _'GB'];
    const _i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, _i)).toFixed(1)) + ' ' + sizes[i];};

  const _getSizeColor = (_size: number) => {_if (size < 100000) return 'bg-green-500'; // < 100KB
    if (size < 500000) return 'bg-yellow-500'; // < 500KB
    return 'bg-red-500'; // > 500KB};

  const _toggleAnalyzer = () => {_const _current = localStorage.getItem('bundle-analyzer') === 'true';
    localStorage.setItem('bundle-analyzer', _(!current).toString());
    setIsVisible(!current);
    if (!current) {
      collectBundleInfo();}
  };

  if (!shouldShow) {_return null;}

  if (!isVisible) {_return (
      <div className="fixed bottom-20 right-4 z-50">
        <Button
          variant="outline"
          size="sm"
          onClick={toggleAnalyzer}
          className="bg-background/80 backdrop-blur-sm"
        >
          <Package className="w-4 h-4 mr-2" />
          Bundle Analyzer
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-20 right-4 z-50 w-96">
      <Card className="bg-background/95 backdrop-blur-sm border shadow-lg">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="text-sm flex items-center">
              <Package className="w-4 h-4 mr-2" />
              Bundle Analyzer
            </CardTitle>
            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={_collectBundleInfo}
                disabled={_isCollecting}
                className="h-6 w-6 p-0"
              >
                <Zap className="w-3 h-3" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={_toggleAnalyzer}
                className="h-6 w-6 p-0"
              >
                ✕
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-0 space-y-3">
          {_bundleInfo ? (
            <>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex justify-between">
                  <span>Total Size:</span>
                  <Badge className={getSizeColor(bundleInfo.totalSize)}>
                    {_formatSize(bundleInfo.totalSize)}
                  </Badge>
                </div>
                <div className="flex justify-between">
                  <span>Gzipped:</span>
                  <Badge variant="outline">
                    {_formatSize(bundleInfo.gzippedSize)}
                  </Badge>
                </div>
                <div className="flex justify-between">
                  <span>Chunks:</span>
                  <Badge variant="outline">{_bundleInfo.chunkCount}</Badge>
                </div>
                <div className="flex justify-between">
                  <span>Avg Load:</span>
                  <Badge variant="outline">
                    {_bundleInfo.loadTime.toFixed(0)}ms
                  </Badge>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center text-xs mb-1">
                  <span>Cache Hit Rate</span>
                  <span>{_bundleInfo.cacheHitRate.toFixed(1)}%</span>
                </div>
                <Progress value={_bundleInfo.cacheHitRate} className="h-2" />
              </div>

              <div>
                <div className="text-xs font-medium mb-2">Largest Chunks:</div>
                <div className="space-y-1">
                  {_chunks.map(_(chunk, _index) => (
                    <div key={chunk.name} className="flex justify-between items-center text-xs">
                      <div className="flex items-center gap-2 flex-1 min-w-0">
                        <span className="w-4 text-muted-foreground">{_index + 1}.</span>
                        <span className="truncate" title={_chunk.name}>
                          {_chunk.name}
                        </span>
                        {_chunk.cached && (
                          <Badge variant="outline" className="text-xs px-1 py-0">
                            cached
                          </Badge>
                        )}
                      </div>
                      <Badge className={_getSizeColor(chunk.size)} variant="outline">
                        {_formatSize(chunk.size)}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>

              {_bundleInfo.totalSize > 1000000 && (
                <div className="flex items-center gap-2 p-2 bg-yellow-50 dark:bg-yellow-900/20 rounded text-xs">
                  <AlertTriangle className="w-3 h-3 text-yellow-600" />
                  <span>Bundle size is large. Consider code splitting.</span>
                </div>
              )}
            </>
          ) : (
            <div className="text-xs text-muted-foreground">
              {_isCollecting ? 'Analyzing bundle...' : 'Click refresh to analyze'}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
} 