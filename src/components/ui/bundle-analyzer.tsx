
import { AlertTriangle, Package, Zap } from 'lucide-react'
import {logErrorToProduction} from '@/utils/productionLogger';
interface BundleInfo {
  totalSize: number;
  gzippedSize: number;
  chunkCount: number;
  loadTime: number;

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
    // Only show in development or when explicitly enabled

      localStorage.getItem('bundle-analyzer') === 'true'
    setShouldShow(show)
    if (!show) return;
    setIsVisible(true)
    collectBundleInfo()
  }, [])
      <div className="fixed bottom-20 right-4 z-50">
        <Button

=======

          variant="outline"
          size="sm"
          onClick={toggleAnalyzer}
          className="bg-background/80 backdrop-blur-sm"
        >
          <Package className="w-4 h-4 mr-2" />


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
                ✕
              </Button>
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
<<<<<<< HEAD

                        </span>
                        {chunk.cached && (
                          <Badge variant="outline" className="text-xs px-1 py-0">
                            cached
                          </Badge>
                        )}
                      </div>

<<<<<<< HEAD
                        {formatSize(chunk.size)}
                      </Badge>
                    </div>
                  ))}

                </div>;
              </div>;

              {bundleInfo && bundleInfo.totalSize > 1000000 && (;
                <div className='flex items-center gap-2 p-2 bg-yellow-50 dark:bg-yellow-900/20 rounded text-xs'>;
                  <AlertTriangle className='w-3 h-3 text-yellow-600' />;
                  <span>Bundle size is large. Consider code splitting.</span>;
                </div>;

              )}

            </>
          ) : (

}
=======
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
