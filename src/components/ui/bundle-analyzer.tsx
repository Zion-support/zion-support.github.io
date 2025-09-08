

  if (!isVisible) {
    return (
      <div className="fixed bottom-20 right-4 z-50">
        <Button


          variant="outline"
          size="sm"
          onClick={toggleAnalyzer}
          className="bg-background/80 backdrop-blur-sm"
        >
          <Package className="w-4 h-4 mr-2" />



          Bundle Analyzer
      </div>
    )
          className='bg-background/80 backdrop-blur-sm'>;
          <Package className='w-4 h-4 mr-2' />;
          Bundle Analyzer;
        </Button>;
      </div>;
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
                onClick={collectBundleInfo}
                disabled={isCollecting}
                className="h-6 w-6 p-0"
              >
                <Zap className="w-3 h-3" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleAnalyzer}
                className="h-6 w-6 p-0"
              >



                ✕

            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-0 space-y-3">
          {bundleInfo ? (
            <>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex justify-between">
                  <span>Total Size:</span>
                  <Badge className={getSizeColor(bundleInfo.totalSize)}>
                    {formatSize(bundleInfo.totalSize)}
                  </Badge>
                </div>
                <div className="flex justify-between">
                  <span>Gzipped:</span>
                  <Badge variant="outline">
                    {formatSize(bundleInfo.gzippedSize)}
                  </Badge>
                </div>
                <div className="flex justify-between">
                  <span>Chunks:</span>
                  <Badge variant="outline">{bundleInfo.chunkCount}</Badge>
                </div>
                <div className="flex justify-between">
                  <span>Avg Load:</span>
                  <Badge variant="outline">
                    {bundleInfo.loadTime.toFixed(0)}ms
                  </Badge>
                </div>
              </div>


              <div>
                <div className="flex justify-between items-center text-xs mb-1">
                  <span>Cache Hit Rate</span>
                  <span>{bundleInfo.cacheHitRate.toFixed(1)}%</span>
                </div>
                <Progress value={bundleInfo.cacheHitRate} className="h-2" />
              </div>

              <div>

                <div className="text-xs font-medium mb-2">Largest Chunks:</div>
                <div className="space-y-1">
                  {chunks.map((chunk, index) => (
                    <div key={chunk.name} className="flex justify-between items-center text-xs">
                      <div className="flex items-center gap-2 flex-1 min-w-0">
                        <span className="w-4 text-muted-foreground">{index + 1}.</span>
                        <span className="truncate" title={chunk.name}>
                          {chunk.name}


                        </span>
                        {chunk.cached && (
                          <Badge variant="outline" className="text-xs px-1 py-0">
                            cached
                          </Badge>
                        )}
                      </div>


                      <Badge className={getSizeColor(chunk.size)} variant="outline">
                        {formatSize(chunk.size)}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>


              {bundleInfo.totalSize > 1000000 && (
                <div className="flex items-center gap-2 p-2 bg-yellow-50 dark:bg-yellow-900/20 rounded text-xs">
                  <AlertTriangle className="w-3 h-3 text-yellow-600" />
                  <span>Bundle size is large. Consider code splitting.</span>
                </div>
              )}
            </>
          ) : (

            <div className='text-xs text-muted-foreground'>
              {isCollecting
                ? 'Analyzing bundle...'
                : 'Click refresh to analyze'}

            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )

} 

}
}

