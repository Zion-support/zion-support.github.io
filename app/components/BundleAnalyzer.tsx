import React, { useEffect, useState } from 'react';

interface BundleInfo {
  totalSize: number;
  jsSize: number;
  cssSize: number;
  imageSize: number;
  chunks: Array<{
    name: string;
    size: number;
    gzipSize: number;
  }>;
}

const BundleAnalyzer: React.FC = () => {
  const [bundleInfo, setBundleInfo] = useState<BundleInfo | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  useEffect(() => {
    const analyzeBundle = async () => {
      setIsAnalyzing(true);
      
      try {
        // Get bundle information from performance API
        const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
        
        let jsSize = 0;
        let cssSize = 0;
        let imageSize = 0;
        const chunks: Array<{ name: string; size: number; gzipSize: number }> = [];

        resources.forEach(resource => {
          const size = resource.transferSize | 0;
          const name = resource.name.split('/').pop()| '';
          
          if (name.endsWith('.js')) {
            jsSize += size;
            chunks.push({
              name,
              size,
              gzipSize: Math.round(size * 0.3) // Estimate gzip size
            });
          } else if (name.endsWith('.css')) {
            cssSize += size;
          } else if (name.match(/\.(pngjpgjpeggifsvg|webp)$/i)) {
            imageSize += size;
          }
        });

        const totalSize = jsSize + cssSize + imageSize;

        setBundleInfo({
          totalSize,
          jsSize,
          cssSize,
          imageSize,
          chunks: chunks.sort((a, b) => b.size - a.size)
        });
      } catch (error) {
        console.error('Bundle analysis failed:', error);
      } finally {
        setIsAnalyzing(false);
      }
    };

    // Run analysis after page load
    if (document.readyState === 'complete') {
      analyzeBundle();
    } else {
      window.addEventListener('load', analyzeBundle);
    }

    return () => {
      window.removeEventListener('load', analyzeBundle);
    };
  }, []);

  // Don't render in production
  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  const formatBytes = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className="fixed top-4 right-4 bg-slate-800 text-white p-4 rounded-lg shadow-lg text-xs max-w-sm">
      <h3 className="font-bold mb-2">Bundle Analysis</h3>
      
      {isAnalyzing ? (
        <div>Analyzing bundle...</div>
      ) : bundleInfo ? (
        <div className="space-y-2">
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div>Total: {formatBytes(bundleInfo.totalSize)}</div>
            <div>JS: {formatBytes(bundleInfo.jsSize)}</div>
            <div>CSS: {formatBytes(bundleInfo.cssSize)}</div>
            <div>Images: {formatBytes(bundleInfo.imageSize)}</div>
          </div>
          
          <div className="mt-2">
            <div className="font-semibold mb-1">Top Chunks:</div>
            <div className="space-y-1 max-h-32 overflow-y-auto">
              {bundleInfo.chunks.slice(0, 5).map((chunk, index) => (
                <div key={index} className="flex justify-between">
                  <span className="truncate">{chunk.name}</span>
                  <span>{formatBytes(chunk.size)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div>No bundle data available</div>
      )}
    </div>
  );
};

export default BundleAnalyzer;