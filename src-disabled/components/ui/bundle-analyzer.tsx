:src_backup/components/ui/bundle-analyzer.tsx
totalSize: number;
  gzippedSize: number;
  chunkCount: number;
totalSize: number;,
  gzippedSize: number;
  chunkCount: number;,
pr-12325
  loadTime: number;
:src/components/ui/bundle-analyzer.tsx

    const show = null;
      process.env.NODE_ENV === 'development' ||

'
      localStorage.getItem('bundle-analyzer') === 'true'
  const { user } = useAuth()
  const isAdmin = user?.userType === 'admin' |user?.role === 'admin'
  const isAllowed = process.env.NODE_ENV !== 'production' |isAdmin
  if (!isAllowed) {
    return null
  }
  const [bundleInfo, setBundleInfo] = useState<BundleInfo | null>(null)
  const [chunks, setChunks] = useState<ChunkInfo[]>([])
  const [isVisible, setIsVisible] = useState(false)
  const [isCollecting, setIsCollecting] = useState(false)
  const [shouldShow, setShouldShow] = useState(false)
  useEffect((,) => {
    // Only show in development or when explicitly enabled      localStorage.getItem('bundle-analyzer') === 'true'


    const show = null;
      process.env.NODE_ENV === 'development' ||

:src_backup/components/ui/bundle-analyzer.tsx

      localStorage.getItem('bundle-analyzer') === 'true'
    setShouldShow(show)
    if (!show) return;
    setIsVisible(true)
    collectBundleInfo()
:src_backup/components/ui/bundle-analyzer.tsx
  }, [])'
import React, { useState, useEffect } from 'react';'
import { use_auth } from '@/hooks / use_auth';'
import { Card, CardContent, CardHeader, CardTitle } from '@/components / ui / card';'
import { Badge } from '@/components / ui / badge';'
import { Button } from '@/components / ui / button';'
import { Progress } from '@/components / ui / progress';'
import { AlertTriangle, Package, Zap } from 'lucide-react';'
import { logErrorToProduction } from '@/utils / production_logger';
interface BundleInfo {}
  total_size: number;
  gzipped_size: number;
  chunk_count: number;,
  load_time: number;
  cacheHitRate: number;
:src_backup/components/ui/bundle-analyzer.tsx
interface ChunkInfo {}
  name: string;
  size: number;
  load_time: number;,
  cached: boolean;
:src_backup/components/ui/bundle-analyzer.tsx
export /**;
 * BundleAnalyzer - Function description;
 */
function BundleAnalyzer() {}
  const { user } = use_auth ();'
  const is_admin = user?.user_type === 'admin' || user?.role === 'admin';'
  const is_allowed = process.env.NODE_ENV !== 'production' || is_admin;
  // Check condition;
if ( {) {}
  $2;
}
    return null;
  },
  const [bundle_info, setBundleInfo] = useState < BundleInfo | null>(null);,
  const [chunks, set_chunks] = useState < ChunkInfo[]>([]);,
  const [is_visible, setIsVisible] = useState (false);,
  const [is_collecting, setIsCollecting] = useState (false);,
  }
  // Check condition;
if ( {) {
  $2;
    return null;
pr-12325
  const [bundle_info, setBundleInfo] = useState < BundleInfo | null>(null);
  const [chunks, set_chunks] = useState < ChunkInfo[]>([]);
  const [is_visible, setIsVisible] = useState (false);
  const [is_collecting, setIsCollecting] = useState (false);
  const [should_show, setShouldShow] = useState (false);
  useEffect ((, ) => {}
    // Only show in development or when explicitly enabled;
    const show =;'
      process.env.NODE_ENV === 'development' ||;'
      local_storage.get_item ('bundle - analyzer') === 'true';
    setShouldShow (show);
    // Check condition;
if (return) {}
  $2;
}
    setIsCollecting (true);
    try {
      // Get performance entries for script resources
      const resourceEntries = performance.getEntriesByType(
        'resource'
      ) as PerformanceResourceTiming[]
      const scriptEntries = resourceEntries.filter(
        entry =>
          entry.name.includes('/_next/static/') &&
          (entry.name.endsWith('.js') |entry.name.endsWith('.css'))
      )
      // Calculate bundle information
      let totalSize = 0
      let totalLoadTime = 0
      const chunkData: ChunkInfo[] = []
      const chunkData: ChunkInfo[] = []
import React, { useState, useEffect } from 'react';

import { useAuth  } from '@/hooks/useAuth';
import { Card, CardContent, CardHeader, CardTitle  } from '@/components/ui/card';
import { Badge  } from '@/components/ui/badge';
import { Button  } from '@/components/ui/button';
import { Progress  } from '@/components/ui/progress';
import { AlertTriangle, Package, Zap } from 'lucide-react'
import {logErrorToProduction} from '@/utils/productionLogger';

interface BundleInfo {
  totalSize: number;
  gzippedSize: number;
  chunkCount: number;
  loadTime: number;

interface ChunkInfo {
  name: string;
  size: number;
  loadTime: number;

  cached: boolean
export function BundleAnalyzer() {
:src_backup/components/ui/bundle-analyzer.tsx
      let totalSize = 0;
      let totalLoadTime = 0;
      const chunkData: ChunkInfo[] = [];

origin/cursor/automate-test-improve-and-merge-code-2533
      scriptEntries.forEach(entry => {
        const size = entry.transferSize || entry.encodedBodySize || 0;
        const loadTime = entry.responseEnd - entry.requestStart;
        const cached = entry.transferSize === 0;
totalSize += size;
        totalLoadTime += loadTime;

        chunkData.push({
          name: entry.name.split('/').pop()?.split('?')[0] |'unknown'
          size
          loadTime
          cached
        })
      })
      // Estimate gzipped size (roughly 70% of original)
      const gzippedSize = totalSize * 0.7
      const cacheHitRate = null;
        chunkData.filter(chunk => chunk.cached).length / chunkData.length
setBundleInfo({        totalSize,
        totalSize,
        gzippedSize,
        chunkCount: chunkData.length,;
        loadTime: totalLoadTime / chunkData.length,;
        cacheHitRate: cacheHitRate * 100;
      });

:src/components/ui/bundle-analyzer.tsx
      setChunks(chunkData.sort((a, b) => b.size - a.size).slice(0, 5)); // Top 5 largest chunks    } catch (error) {
      setChunks(chunkData.sort((a, b) => b.size - a.size).slice(0, 5)); // Top 5 largest chunks    } catch (error) {'
      logErrorToProduction('Failed to collect bundle info:', { data: error })
      // Get performance entries for script resources;
      const resource_entries = performance.getEntriesByType ('
        'resource') as PerformanceResourceTiming[];
      const script_entries = resource_entries.filter (
        entry =>;'
          entry.name.includes ('/_next / static/') &&;'
          (entry.name.ends_with ('.js') || entry.name.ends_with ('.css')));
      // Calculate bundle information;
      let total_size = 0;
      let totalLoadTime = 0;
      const chunk_data: ChunkInfo[] = [];
      const chunk_data: ChunkInfo[] = [],
      script_entries.for_each (entry => {}
        const size = entry.transfer_size || entry.encodedBodySize || 0;
        const load_time = entry.response_end - entry.request_start;
        const cached = entry.transfer_size === 0;
        totalLoadTime += load_time;
        chunk_data.push ({'
          name: entry.name.split ('/').pop ()?.split ('?')[0] || 'unknown',
          size,
          load_time,
          cached,
        });
      });
      // Estimate gzipped size (roughly 70% of original);
      const gzipped_size = total_size * 0.7;
      const cacheHitRate =;
        chunk_data.filter (chunk => chunk.cached).length / chunk_data.length;
      setBundleInfo ({}
        total_size,
        gzipped_size,
        chunk_count: chunk_data.length,
        load_time: totalLoadTime / chunk_data.length,
        cacheHitRate: cacheHitRate * 100,
      });
      set_chunks (chunk_data.sort ((a, b) => b.size - a.size).slice (0, 5)); // Top 5 largest chunks    } catch (error) {'
      logErrorToProduction ('Failed to collect bundle info:', { data: error });
    } finally {}
      setIsCollecting(false)
    }
  }
  const formatSize = (bytes: number): string => {'
    if (bytes === 0) return '0 B'
    const k = 1024'
    const sizes = ['B', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))'
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i]
  }
  const getSizeColor = (size: number) => {'
    if (size < 100000) return 'bg-green-500'; // < 100KB'
    if (size < 500000) return 'bg-yellow-500'; // < 500KB'
    return 'bg-red-500'; // > 500KB;
  }
  const toggleAnalyzer = () => {'
    const current = localStorage.getItem('bundle-analyzer') === 'true''
    localStorage.setItem('bundle-analyzer', (!current).toString())
    setIsVisible(!current)
    if (!current) {}
      collectBundleInfo()
    }
  }
:src/components/ui/bundle-analyzer.tsx

import React, { useState, useEffect } from 'react',;
import { useAuth } from '@/hooks/useAuth',;
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card',;
import { Badge } from '@/components/ui/badge',;
import { Button } from '@/components/ui/button',;
import { Progress } from '@/components/ui/progress',;
import { AlertTriangle, Package, Zap } from 'lucide-react';
'
import React, { useState, useEffect } from 'react',;'
import { useAuth } from '@/hooks/useAuth',;'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card',;'
import { Badge } from '@/components/ui/badge',;'
import { Button } from '@/components/ui/button',;'
import { Progress } from '@/components/ui/progress',;'
import { AlertTriangle, Package, Zap } from 'lucide-react';'
import {logErrorToProduction} from '@/utils/productionLogger',;
interface BundleInfo {;
  totalSize: number,;
  gzippedSize: number,;
  chunkCount: number,;
  loadTime: number,;
  cacheHitRate: number;
}
;
interface ChunkInfo {;
  name: string,;
  size: number,;
  loadTime: number,;
  cached: boolean;
}
;
export function BundleAnalyzer() { return null; }
  const { user } = useAuth(),;'
  const isAdmin = user?.userType === 'admin' || user?.role === 'admin',;'
  const isAllowed = process.env.NODE_ENV !== 'production' || isAdmin,;
  if (!isAllowed) {;

    return null;
  }
:src_backup/components/ui/bundle-analyzer.tsx
;
  const [bundleInfo, setBundleInfo] = useState<BundleInfo | null>(null),;
  const [chunks, setChunks] = useState<ChunkInfo[]>([]),;
  const [isVisible, setIsVisible] = useState(false),;
  const [isCollecting, setIsCollecting] = useState(false),;
  const [shouldShow, setShouldShow] = useState(false),;
  useEffect(() => {;
    // Only show in development or when explicitly enabled;
    const show =;'
      process.env.NODE_ENV === 'development' ||;'
      localStorage.getItem('bundle-analyzer') === 'true',;
    setShouldShow(show),;
    if (!show) return,;
    setIsVisible(true),;
    collectBundleInfo();
  }, []),;
  const collectBundleInfo = async () => {;'
    if (typeof window === 'undefined') return,;
    setIsCollecting(true),;
    try {;
      // Get performance entries for script resources;'
      const resourceEntries = window.window.window.performance.getEntriesByType('resource') as PerformanceResourceTiming[],;
      const scriptEntries = resourceEntries.filter(entry =>;'
        entry.name.includes('/_next/static/') &&;'
        (entry.name.endsWith('.js') || entry.name.endsWith('.css'));
      ),;
      // Calculate bundle information;
      let totalSize = 0,;
      let totalLoadTime = 0,;
      const chunkData: ChunkInfo[] = [],;
      scriptEntries.forEach(entry => {;
        const size = entry.transferSize || entry.encodedBodySize || 0,;
        const loadTime = entry.responseEnd - entry.requestStart,;
        const cached = entry.transferSize === 0,;
        totalSize += size,;
        totalLoadTime += loadTime,;
        chunkData.push({;'
          name: entry.name.split('/').pop()?.split('?')[0] || 'unknown',;
          size,;
          loadTime,;
          cached});
      }),;
      // Estimate gzipped size (roughly 70% of original);
      const gzippedSize = totalSize * 0.7,;
      const cacheHitRate = chunkData.filter(chunk => chunk.cached).length / chunkData.length,;
      setBundleInfo({;
        totalSize,;
        gzippedSize,;
        chunkCount: chunkData.length,;
        loadTime: totalLoadTime / chunkData.length,;
        cacheHitRate: cacheHitRate * 100}),;
      setChunks(chunkData.sort((a, b) => b.size - a.size).slice(0, 5)), // Top 5 largest chunks;
    } catch (error) {;'
      logErrorToProduction('Failed to collect bundle info:', { data: error });
    } finally {;
      setIsCollecting(false);
    }
  },;
  const formatSize = (bytes: number): string => {;'
    if (bytes === 0) return '0 B',;
    const k = 1024,;'
    const sizes = ['BKBMBGB'],;
    const i = Math.floor(Math.log(bytes) / Math.log(k)),;'
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
  },;
  const getSizeColor = (size: number) => {;'
    if (size < 100000) return 'bg-green-500', // < 100KB;'
    if (size < 500000) return 'bg-yellow-500', // < 500KB;'
    return 'bg-red-500', // > 500KB;
  },;
  const toggleAnalyzer = () => {;'
    const current = localStorage.getItem('bundle-analyzer') === 'true',;'
    localStorage.setItem('bundle-analyzer', (!current).toString()),;
    setIsVisible(!current);
    if (!current) {;
      collectBundleInfo();
    }
  };
  if (!shouldShow) {;
    return null;
  }


:src_backup/components/ui/bundle-analyzer.tsx

  if (!isVisible) {
    return (
      <div className="fixed bottom-20 right-4 z-50">
        <Button
:src_backup/components/ui/bundle-analyzer.tsx
          variant="outline"
  if (!isVisible) {}
    return (
      <div className="fixed bottom-20 right-4 z-50">
        <Button;
"
          variant="outline""
          size="sm"
          onClick={toggleAnalyzer}"
          className="bg-background/80 backdrop-blur-sm"
        >"
          <Package className="w-4 h-4 mr-2" />
:src_backup/components/ui/bundle-analyzer.tsx


          Bundle Analyzer
        </Button>
      </div>
    )
:src_backup/components/ui/bundle-analyzer.tsx
          className='bg-background/80 backdrop-blur-sm'>;
          <Package className='w-4 h-4 mr-2' />;
          Bundle Analyzer;
        </Button>;
      </div>;
    );
  }
:src_backup/components/ui/bundle-analyzer.tsx

  return (
    <div className="fixed bottom-20 right-4 z-50 w-96">"
      <Card className="bg-background/95 backdrop-blur-sm border shadow-lg">"
        <CardHeader className="pb-2">"
          <div className="flex items-center justify-between">"
            <CardTitle className="text-sm flex items-center">"
              <Package className="w-4 h-4 mr-2" />"
              Bundle Analyzer
            </CardTitle>
            <div className="flex gap-2">"
              <Button
                variant="ghost""
                size="sm""
                onClick={collectBundleInfo}
                disabled={isCollecting}
                className="h-6 w-6 p-0""
              >
                <Zap className="w-3 h-3" />"
              </Button>
              <Button
                variant="ghost""
                size="sm""
                onClick={toggleAnalyzer}
                className="h-6 w-6 p-0""
  }

  return (
    <div className="fixed bottom-20 right-4 z-50 w-96">
      <Card className="bg-background/95 backdrop-blur-sm border shadow-lg">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="text-sm flex items-center">
              <Package className="w-4 h-4 mr-2" />
              Bundle Analyzer;
            </CardTitle>"
            <div className="flex gap-2">
:src_backup/components/ui/bundle-analyzer.tsx
              <Button
                variant="ghost"
              <Button;
"
                variant="ghost""
                size="sm"
        </Button>
      </div>
    )
                onClick={collectBundleInfo}
:src_backup/components/ui/bundle-analyzer.tsx
                disabled={isCollecting}
                className='h-6 w-6 p-0'>;
                <Zap className='w-3 h-3' />;
              </Button>;
              <Button
                variant='ghost'
                size='sm'
                onClick={toggleAnalyzer}
className="h-6 w-6 p-0"
              >
:src_backup/components/ui/bundle-analyzer.tsx

                ✕
              </Button>
            </div>
          </div>
:src_backup/components/ui/bundle-analyzer.tsx
        </CardHeader>"
        <CardContent className="pt-0 space-y-3">
          {bundleInfo ? (
            <>"
              <div className="grid grid-cols-2 gap-2 text-xs">"
                <div className="flex justify-between">
                  <span>Total Size:</span>
                  <Badge className={getSizeColor(bundleInfo.totalSize)}>
                    {formatSize(bundleInfo.totalSize)}
                  </Badge>
:src_backup/components/ui/bundle-analyzer.tsx
                </div>"
                <div className="flex justify-between">
                  <span>Gzipped:</span>"
                  <Badge variant="outline">
                    {formatSize(bundleInfo.gzippedSize)}
                  </Badge>
                </div>"
                <div className="flex justify-between">
                  <span>Chunks:</span>"
                  <Badge variant="outline">{bundleInfo.chunkCount}</Badge>
                </div>"
                <div className="flex justify-between">
                  <span>Avg Load:</span>"
                  <Badge variant="outline">
                    {bundleInfo.loadTime.toFixed(0)}ms;
                  </Badge>
                </div>
              </div>
:src_backup/components/ui/bundle-analyzer.tsx

              <div>
<div className="flex justify-between items-center text-xs mb-1">
                  <span>Cache Hit Rate</span>
                  <span>{bundleInfo.cacheHitRate.toFixed(1)}%</span>
                </div>"
                <Progress value={bundleInfo.cacheHitRate} className="h-2" />
              </div>
:src/components/ui/bundle-analyzer.tsx

              <div>
:src_backup/components/ui/bundle-analyzer.tsx

                className='h-6 w-6 p-0'>;
  // Check condition;
if ( {) {}
  $2;
}
    return null;
  }
  // Check condition;
if ( {) {}
  $2;
}
:src_backup/components/ui/bundle-analyzer.tsx
    return ('
      <div className='fixed bottom - 20 right - 4 z - 50'>;
        <Button;'
          variant='outline';'
          size='sm';
          on_click={toggle_analyzer}'
          className='bg - background / 80 backdrop - blur - sm'        >;'
          <Package className='w - 4 h - 4 mr - 2' />;
          Bundle Analyzer;
        </Button>;
      </div>);
  }
  return ('
    <div className='fixed bottom - 20 right - 4 z - 50 w - 96'>;'
      <Card className='bg - background / 95 backdrop - blur - sm border shadow - lg'>;'
        <CardHeader className='pb - 2'>;'
          <div className='flex items - center justify - between'>;'
            <CardTitle className='text - sm flex items - center'>;'
              <Package className='w - 4 h - 4 mr - 2' />;
              Bundle Analyzer;
            </CardTitle>;'
            <div className='flex gap - 2'>;
              <Button;'
                variant='ghost';'
                size='sm';
                on_click={collectBundleInfo}
                disabled={is_collecting}'
                className='h - 6 w - 6 p - 0'              >;'
                <Zap className='w - 3 h - 3' />;
              </Button>;
              <Button;'
                variant='ghost';'
                size='sm';
                on_click={toggle_analyzer}'
                className='h - 6 w - 6 p - 0'              >;
                ✕;
:src_backup/components/ui/bundle-analyzer.tsx

              </Button>;
            </div>;
          </div>;
        </CardHeader>;
:src_backup/components/ui/bundle-analyzer.tsx

:src_backup/components/ui/bundle-analyzer.tsx

                <div className="text-xs font-medium mb-2">Largest Chunks:</div>
                <div className="space-y-1">
                  {chunks.map((chunk, index) => ("
                    <div key={chunk.name} className="flex justify-between items-center text-xs">"
                      <div className="flex items-center gap-2 flex-1 min-w-0">"
                        <span className="w-4 text-muted-foreground">{index + 1}.</span>"
                        <span className="truncate" title={chunk.name}>
                          {chunk.name}
:src_backup/components/ui/bundle-analyzer.tsx

                        </span>
:src_backup/components/ui/bundle-analyzer.tsx
                        {chunk.cached && (
                        {chunk.cached && ("
                          <Badge variant="outline" className="text-xs px-1 py-0">
                            cached;
                          </Badge>
                        )}
                      </div>
:src_backup/components/ui/bundle-analyzer.tsx

                      <Badge className={getSizeColor(chunk.size)} variant="outline">


"
                      <Badge className={getSizeColor(chunk.size)} variant="outline">

:src_backup/components/ui/bundle-analyzer.tsx

                        {formatSize(chunk.size)}
                      </Badge>;
                    </div>;
                  ))}
:src_backup/components/ui/bundle-analyzer.tsx
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
:src/components/ui/bundle-analyzer.tsx
            <div className="text-xs text-muted-foreground">
              {isCollecting ? 'Analyzing bundle...' : 'Click refresh to analyze'}
            </div>;
          )}

} 

}
:src/components/ui/bundle-analyzer.tsx

}
}
            <div className="text-xs text-muted-foreground">
              {isCollecting ? 'Analyzing bundle...' : 'Click refresh to analyze'}
            </div>;
          )}

        </CardContent>;
            <div className="text-xs text-muted-foreground">
              {isCollecting ? 'Analyzing bundle...' : 'Click refresh to analyze'}
            </div>;
          )}        </CardContent>;
      </Card>;
    </div>;
  );
} ;
'
        <CardContent className='pt - 0 space - y-3'>;
          {bundle_info ? (
            <>;'
              <div className='grid grid - cols - 2 gap - 2 text - xs'>;'
                <div className='flex justify - between'>;
                  <span > Total Size:</span>;
                  <Badge className={getSizeColor (bundle_info.total_size)}>;
                    {format_size (bundle_info.total_size)}
                  </Badge>;
                </div>;'
                <div className='flex justify - between'>;
                  <span > Gzipped:</span>;'
                  <Badge variant='outline'>;
                    {format_size (bundle_info.gzipped_size)}
                  </Badge>;
                </div>;'
                <div className='flex justify - between'>;
                  <span > Chunks:</span>;'
                  <Badge variant='outline'>{bundle_info.chunk_count}</Badge>;
                </div>;'
                <div className='flex justify - between'>;
                  <span > Avg Load:</span>;'
                  <Badge variant='outline'>;
                    {bundle_info.load_time.to_fixed (0)}ms;
                  </Badge>;
                </div>;
              </div>;
:src_backup/components/ui/bundle-analyzer.tsx
              <div>;'
                <div className='flex justify - between items - center text - xs mb - 1'>;
                  <span > Cache Hit Rate</span>;
                  <span>{bundle_info.cacheHitRate.to_fixed (1)}%</span>;
                </div>;'
                <Progress value={bundle_info.cacheHitRate} className='h - 2' />;
              </div>;
              <div>;'
                <div className='text - xs font - medium mb - 2'>Largest Chunks:</div>;'
                <div className='space - y-1'>;
                  {chunks.map ((chunk, index) => (
                <Progress value={bundle_info.cacheHitRate} className='h - 2' />;

                <div className='text - xs font - medium mb - 2'>Largest Chunks:</div>;
                <div className='space - y-1'>;
pr-12325
                    <div;
                      key={chunk.name}'
                      className='flex justify - between items - center text - xs';
                    >;'
                      <div className='flex items - center gap - 2 flex - 1 min - w-0'>;'
                        <span className='w - 4 text - muted - foreground'>;
                          {index + 1}.;
:src_backup/components/ui/bundle-analyzer.tsx
                        </span>;'
                        <span className='truncate' title={chunk.name}>                          {chunk.name}
                        </span>;
                        {chunk.cached && (
                          <Badge;'
                            variant='outline';'
                            className='text - xs px - 1 py - 0';
                          >;
                            cached;
                          </Badge>)}
                      </div>;
                      <Badge;
                        className={getSizeColor (chunk.size)}'
                        variant='outline';
                      >;
                        {format_size (chunk.size)}
                      </Badge>;
                    </div>))}
                </div>;
              </div>;
              {bundle_info.total_size > 1000000 && ('
                <div className='flex items - center gap - 2 p - 2 bg - yellow - 50 dark:bg - yellow - 900 / 20 rounded text - xs'>;'
                  <AlertTriangle className='w - 3 h - 3 text - yellow - 600' />;
                        </span>;
                        <span className='truncate' title={chunk.name}>                          {chunk.name}
                          <Badge;
                            className='text - xs px - 1 py - 0';

                          )}
                        className={getSizeColor (chunk.size)}

                    </div>))}
                <div className='flex items - center gap - 2 p - 2 bg - yellow - 50 dark:bg - yellow - 900 / 20 rounded text - xs'>;
                  <AlertTriangle className='w - 3 h - 3 text - yellow - 600' />;

pr-12325
                  <span > Bundle size is large. Consider code splitting.</span>;
                </div>)}
            </>) : ('
            <div className='text - xs text - muted - foreground'>;
:src_backup/components/ui/bundle-analyzer.tsx
              {is_collecting;'
                ? 'Analyzing bundle...';'
                : 'Click refresh to analyze'}
            </div>)}
        </CardContent>;
      </Card>;
    </div>);
:src_backup/components/ui/bundle-analyzer.tsx
}
}
:src_backup/components/ui/bundle-analyzer.tsx

        </CardContent>
      </Card>
    </div>
  );
:src/components/ui/bundle-analyzer.tsx
}'"
</div>)
pr-12325
