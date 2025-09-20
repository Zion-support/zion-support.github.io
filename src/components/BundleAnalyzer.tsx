
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface BundleModule {
  name: string;
  size: number;
  gzipSize: number;
  percentage: number;
  children?: BundleModule[];
}

export const BundleAnalyzer: React.FC = () => {
  const [modules, setModules] = useState<BundleModule[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [totalSize, setTotalSize] = useState(0);

  const analyzeBundle = async () => {
    setIsAnalyzing(true);
    
    try {
      // Simulate bundle analysis
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const mockModules: BundleModule[] = [
        {
          name: 'react-vendor',
          size: 179090,
          gzipSize: 57640,
          percentage: 45.2,
          children: [
            { name: 'react', size: 45000, gzipSize: 12000, percentage: 11.3 },
            { name: 'react-dom', size: 52000, gzipSize: 15000, percentage: 13.1 }
          ]
        },
        {
          name: 'vendor',
          size: 120540,
          gzipSize: 41640,
          percentage: 30.4,
          children: [
            { name: 'lodash', size: 35000, gzipSize: 12000, percentage: 8.8 },
            { name: 'moment', size: 28000, gzipSize: 8000, percentage: 7.1 }
          ]
        },
        {
          name: 'app',
          size: 50150,
          gzipSize: 13750,
          percentage: 12.6,
          children: [
            { name: 'components', size: 25000, gzipSize: 7000, percentage: 6.3 },
            { name: 'pages', size: 15000, gzipSize: 4000, percentage: 3.8 }
          ]
        },
        {
          name: 'styles',
          size: 339140,
          gzipSize: 43120,
          percentage: 85.5,
          children: [
            { name: 'tailwind', size: 200000, gzipSize: 25000, percentage: 50.4 },
            { name: 'custom', size: 139140, gzipSize: 18120, percentage: 35.1 }
          ]
        }
      ];
      
      const total = mockModules.reduce((sum, module) => sum + module.size, 0);
      setModules(mockModules);
      setTotalSize(total);
    } catch (error) {
      console.error('Error analyzing bundle:', error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  useEffect(() => {
    analyzeBundle();
  }, []);

  const formatBytes = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const getSizeColor = (percentage: number) => {
    if (percentage > 50) return 'text-red-400';
    if (percentage > 25) return 'text-yellow-400';
    return 'text-green-400';
  };

  const getSizeBg = (percentage: number) => {
    if (percentage > 50) return 'bg-red-500/20 border-red-500/30';
    if (percentage > 25) return 'bg-yellow-500/20 border-yellow-500/30';
    return 'bg-green-500/20 border-green-500/30';
  };

  return (
    <div className="p-6 bg-gray-900 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto"
      >
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-white">Bundle Analyzer</h1>
          <button
            onClick={analyzeBundle}
            disabled={isAnalyzing}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
          >
            {isAnalyzing ? 'Analyzing...' : 'Re-analyze'}
          </button>
        </div>

        {/* Total Size */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-blue-500/20 border border-blue-500/30 p-6 rounded-lg mb-8"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">{formatBytes(totalSize)}</div>
            <div className="text-gray-300">Total Bundle Size</div>
          </div>
        </motion.div>

        {/* Modules */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {modules.map((module, index) => (
            <motion.div
              key={module.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`p-6 rounded-lg border ${getSizeBg(module.percentage)}`}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-white capitalize">{module.name}</h3>
                <span className={`text-lg font-bold ${getSizeColor(module.percentage)}`}>
                  {module.percentage.toFixed(1)}%
                </span>
              </div>
              
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Raw Size:</span>
                  <span className="text-white">{formatBytes(module.size)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Gzipped:</span>
                  <span className="text-white">{formatBytes(module.gzipSize)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Compression Ratio:</span>
                  <span className="text-white">
                    {((1 - module.gzipSize / module.size) * 100).toFixed(1)}%
                  </span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${module.percentage}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  className={`h-2 rounded-full ${
                    module.percentage > 50 ? 'bg-red-500' :
                    module.percentage > 25 ? 'bg-yellow-500' : 'bg-green-500'
                  }`}
                />
              </div>

              {/* Children */}
              {module.children && (
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-gray-300">Sub-modules:</h4>
                  {module.children.map((child, childIndex) => (
                    <div key={child.name} className="flex justify-between text-xs">
                      <span className="text-gray-400">{child.name}:</span>
                      <span className="text-white">{formatBytes(child.size)} ({child.percentage.toFixed(1)}%)</span>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Optimization Tips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 bg-yellow-500/20 border border-yellow-500/30 p-6 rounded-lg"
        >
          <h3 className="text-xl font-semibold text-white mb-4">Optimization Recommendations</h3>
          <ul className="space-y-2 text-gray-300">
            <li>• Consider code splitting for large vendor bundles</li>
            <li>• Implement tree shaking to remove unused code</li>
            <li>• Use dynamic imports for route-based code splitting</li>
            <li>• Optimize images and use modern formats (WebP, AVIF)</li>
            <li>• Enable compression (gzip/brotli) on your server</li>
          </ul>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default BundleAnalyzer;
