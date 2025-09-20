import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Package, Eye, EyeOff, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';

interface BundleInfo {
  name: string;
  size: number;
  gzippedSize: number;
  type: 'module' | 'chunk' | 'asset';
  dependencies: string[];
}

interface BundleAnalysis {
  totalSize: number;
  totalGzippedSize: number;
  moduleCount: number;
  chunkCount: number;
  assetCount: number;
  largestModules: BundleInfo[];
  duplicateModules: string[];
  unusedModules: string[];
}

export default function BundleAnalyzer() {
  const [bundleInfo, setBundleInfo] = useState<BundleInfo[]>([]);
  const [analysis, setAnalysis] = useState<BundleAnalysis | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const analyzeBundle = async () => {
    setIsAnalyzing(true);
    
    try {
      // Simulate bundle analysis - in a real app, this would use webpack-bundle-analyzer or similar
      const mockBundleInfo: BundleInfo[] = [
        {
          name: 'react',
          size: 1024 * 1024 * 2.5, // 2.5MB
          gzippedSize: 1024 * 1024 * 0.8, // 0.8MB
          type: 'module',
          dependencies: []
        },
        {
          name: 'react-dom',
          size: 1024 * 1024 * 1.2, // 1.2MB
          gzippedSize: 1024 * 1024 * 0.4, // 0.4MB
          type: 'module',
          dependencies: ['react']
        },
        {
          name: 'framer-motion',
          size: 1024 * 1024 * 1.8, // 1.8MB
          gzippedSize: 1024 * 1024 * 0.6, // 0.6MB
          type: 'module',
          dependencies: []
        },
        {
          name: 'lucide-react',
          size: 1024 * 1024 * 0.5, // 0.5MB
          gzippedSize: 1024 * 1024 * 0.2, // 0.2MB
          type: 'module',
          dependencies: []
        },
        {
          name: 'main.chunk.js',
          size: 1024 * 1024 * 0.8, // 0.8MB
          gzippedSize: 1024 * 1024 * 0.3, // 0.3MB
          type: 'chunk',
          dependencies: ['react', 'react-dom', 'framer-motion']
        },
        {
          name: 'vendor.chunk.js',
          size: 1024 * 1024 * 1.5, // 1.5MB
          gzippedSize: 1024 * 1024 * 0.5, // 0.5MB
          type: 'chunk',
          dependencies: ['react', 'react-dom']
        },
        {
          name: 'styles.css',
          size: 1024 * 0.2, // 200KB
          gzippedSize: 1024 * 0.05, // 50KB
          type: 'asset',
          dependencies: []
        },
        {
          name: 'images/logo.png',
          size: 1024 * 0.1, // 100KB
          gzippedSize: 1024 * 0.1, // 100KB
          type: 'asset',
          dependencies: []
        }
      ];

      setBundleInfo(mockBundleInfo);

      // Analyze the bundle
      const totalSize = mockBundleInfo.reduce((sum, item) => sum + item.size, 0);
      const totalGzippedSize = mockBundleInfo.reduce((sum, item) => sum + item.gzippedSize, 0);
      const moduleCount = mockBundleInfo.filter(item => item.type === 'module').length;
      const chunkCount = mockBundleInfo.filter(item => item.type === 'chunk').length;
      const assetCount = mockBundleInfo.filter(item => item.type === 'asset').length;
      
      const largestModules = [...mockBundleInfo]
        .sort((a, b) => b.size - a.size)
        .slice(0, 5);
      
      const duplicateModules = ['react', 'react-dom']; // Simulated duplicates
      const unusedModules = ['lodash', 'moment']; // Simulated unused modules

      setAnalysis({
        totalSize,
        totalGzippedSize,
        moduleCount,
        chunkCount,
        assetCount,
        largestModules,
        duplicateModules,
        unusedModules
      });
    } catch (error) {
      console.error('Bundle analysis failed:', error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  useEffect(() => {
    if (isVisible) {
      analyzeBundle();
    }
  }, [isVisible]);

  const formatBytes = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const getSizeColor = (size: number, threshold: number) => {
    if (size <= threshold) return 'text-green-500';
    if (size <= threshold * 2) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getSizeIcon = (size: number, threshold: number) => {
    if (size <= threshold) return <CheckCircle className="w-4 h-4 text-green-500" />;
    if (size <= threshold * 2) return <AlertTriangle className="w-4 h-4 text-yellow-500" />;
    return <XCircle className="w-4 h-4 text-red-500" />;
  };

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-20 right-4 bg-purple-600 text-white p-3 rounded-full shadow-lg hover:bg-purple-700 transition-colors z-50"
        title="Show Bundle Analyzer"
      >
        <Package className="w-5 h-5" />
      </button>
    );
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="fixed bottom-20 right-4 bg-gray-900 text-white p-4 rounded-lg shadow-lg max-w-sm z-50"
      >
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold">Bundle Analyzer</h3>
          <button
            onClick={() => setIsVisible(false)}
            className="text-gray-400 hover:text-white"
          >
            <EyeOff className="w-4 h-4" />
          </button>
        </div>
        
        {isAnalyzing ? (
          <div className="flex items-center justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500"></div>
          </div>
        ) : analysis ? (
          <div className="space-y-3 text-sm">
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center justify-between">
                <span>Total Size:</span>
                <div className="flex items-center gap-1">
                  {getSizeIcon(analysis.totalSize, 1024 * 1024 * 5)}
                  <span className={getSizeColor(analysis.totalSize, 1024 * 1024 * 5)}>
                    {formatBytes(analysis.totalSize)}
                  </span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span>Gzipped Size:</span>
                <div className="flex items-center gap-1">
                  {getSizeIcon(analysis.totalGzippedSize, 1024 * 1024 * 2)}
                  <span className={getSizeColor(analysis.totalGzippedSize, 1024 * 1024 * 2)}>
                    {formatBytes(analysis.totalGzippedSize)}
                  </span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span>Modules:</span>
                <span>{analysis.moduleCount}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span>Chunks:</span>
                <span>{analysis.chunkCount}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span>Assets:</span>
                <span>{analysis.assetCount}</span>
              </div>
            </div>
            
            <div className="border-t border-gray-700 pt-3">
              <h4 className="font-semibold mb-2">Largest Modules</h4>
              <div className="space-y-1 text-xs">
                {analysis.largestModules.map((module, index) => (
                  <div key={index} className="flex justify-between">
                    <span className="truncate">{module.name}</span>
                    <span>{formatBytes(module.size)}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {analysis.duplicateModules.length > 0 && (
              <div className="border-t border-gray-700 pt-3">
                <h4 className="font-semibold mb-2 text-yellow-500">Duplicate Modules</h4>
                <div className="space-y-1 text-xs">
                  {analysis.duplicateModules.map((module, index) => (
                    <div key={index} className="text-yellow-500">
                      {module}
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {analysis.unusedModules.length > 0 && (
              <div className="border-t border-gray-700 pt-3">
                <h4 className="font-semibold mb-2 text-red-500">Unused Modules</h4>
                <div className="space-y-1 text-xs">
                  {analysis.unusedModules.map((module, index) => (
                    <div key={index} className="text-red-500">
                      {module}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-8 text-gray-400">
            No bundle analysis available
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}