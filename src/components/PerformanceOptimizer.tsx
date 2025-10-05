import React, { useEffect, useState, useCallback } from 'react';

interface PerformanceOptimizerProps {
  isVisible: boolean;
  onClose: () => void;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  isVisible,
  onClose,
}) => {
  const [optimizations, setOptimizations] = useState({
    imageOptimization: true,
    codeSplitting: true,
    lazyLoading: true,
    caching: true,
    compression: true,
    cdn: false,
  });

  const [currentOptimizations, setCurrentOptimizations] = useState<string[]>(
    [],
  );

  const runOptimizations = useCallback(async () => {
    const optimizationsList: string[] = [];

    if (optimizations.imageOptimization) {
      optimizationsList.push('Optimizing images...');
      await new Promise(resolve => setTimeout(resolve, 1000));
      optimizationsList.push('✓ Images optimized');
    }

    if (optimizations.codeSplitting) {
      optimizationsList.push('Enabling code splitting...');
      await new Promise(resolve => setTimeout(resolve, 800));
      optimizationsList.push('✓ Code splitting enabled');
    }

    if (optimizations.lazyLoading) {
      optimizationsList.push('Implementing lazy loading...');
      await new Promise(resolve => setTimeout(resolve, 600));
      optimizationsList.push('✓ Lazy loading implemented');
    }

    if (optimizations.caching) {
      optimizationsList.push('Configuring caching...');
      await new Promise(resolve => setTimeout(resolve, 700));
      optimizationsList.push('✓ Caching configured');
    }

    if (optimizations.compression) {
      optimizationsList.push('Enabling compression...');
      await new Promise(resolve => setTimeout(resolve, 500));
      optimizationsList.push('✓ Compression enabled');
    }

    setCurrentOptimizations(optimizationsList);
  }, [optimizations]);

  useEffect(() => {
    if (isVisible) {
      runOptimizations();
    }
  }, [isVisible, runOptimizations]);

  const handleOptimizationToggle = (key: keyof typeof optimizations) => {
    setOptimizations(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const optimizationOptions = [
    {
      key: 'imageOptimization' as const,
      label: 'Image Optimization',
      description: 'Compress and optimize images for faster loading',
      icon: Image,
      enabled: optimizations.imageOptimization,
    },
    {
      key: 'codeSplitting' as const,
      label: 'Code Splitting',
      description: 'Split code into smaller chunks for better performance',
      icon: Code,
      enabled: optimizations.codeSplitting,
    },
    {
      key: 'lazyLoading' as const,
      label: 'Lazy Loading',
      description: 'Load content only when needed',
      icon: Database,
      enabled: optimizations.lazyLoading,
    },
    {
      key: 'caching' as const,
      label: 'Browser Caching',
      description: 'Enable aggressive caching strategies',
      icon: Settings,
      enabled: optimizations.caching,
    },
    {
      key: 'compression' as const,
      label: 'Gzip Compression',
      description: 'Compress assets for faster transfer',
      icon: Zap,
      enabled: optimizations.compression,
    },
    {
      key: 'cdn' as const,
      label: 'CDN Integration',
      description: 'Use Content Delivery Network for global performance',
      icon: Wifi,
      enabled: optimizations.cdn,
    },
  ];

  return (
    <div className='space-y-6'>
      <div className='flex justify-between items-center'>
        <h2 className='text-2xl font-bold text-gray-900'>
          Performance Optimizer
        </h2>
        <button onClick={onClose} className='text-gray-400 hover:text-gray-600'>
          <X className='h-6 w-6'</button>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {optimizationOptions.map(option => (
          <div
key={option.key}
            className={`p-4 border rounded-lg transition-colors ${
              option.enabled
                ? 'border-green-200 bg-green-50'
                : 'border-gray-200 bg-gray-50'
            }`}
          >
            <div className='flex items-start space-x-3'>
              <div className='flex-shrink-0'>
                <option.icon
                  className={`h-5 w-5 ${
                    option.enabled ? 'text-green-600' : 'text-gray-400'
                  }`}

              </div>
              <div className='flex-1 min-w-0'>
                <div className='flex items-center justify-between'>
                  <h3 className='text-sm font-medium text-gray-900'>
                    {option.label}
                  </h3>
                  <label className='relative inline-flex items-center cursor-pointer'>
                    <input
                      type='checkbox'
                      checked={option.enabled}
                      onChange={() => handleOptimizationToggle(option.key)}
                      className='sr-only peer'

                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
                <p className='text-xs text-gray-500 mt-1'>
                  {option.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {currentOptimizations.length > 0 && (
        <div className='bg-gray-50 rounded-lg p-4'>
          <h3 className='text-sm font-medium text-gray-900 mb-2'>
            Optimization Progress
          </h3>
          <div className='space-y-1'>
            {currentOptimizations.map((optimization, index) => (
              <div
key={index}
                className={`text-sm ${
                  optimization.startsWith('✓')
                    ? 'text-green-600'
                    : 'text-gray-600'
                }`}
              >
                {optimization}
              </div>
            ))}
          </div>
        </div>
      )}

      <div className='flex justify-end space-x-3'>
        <button
onClick={onClose}
          className='px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
        >
          Close
        </button>
        <button
onClick={() => {
            setCurrentOptimizations([]);
            // Trigger re-optimization
          }}
          className='px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
        >
          Apply Optimizations
        </button>
      </div>
    </div>
  );
};

export default PerformanceOptimizer;
