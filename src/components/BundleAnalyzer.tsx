import React, { useState, useEffect, useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

interface BundleChunk {
  name: string;
  size: number;
  gzipSize: number;
  modules: number;
  type: 'vendor' | 'app' | 'page' | 'component' | 'util';
}

interface BundleAnalysis {
  totalSize: number;
  totalGzipSize: number;
  chunks: BundleChunk[];
  recommendations: string[];
}

interface BundleAnalyzerProps {
  data?: BundleAnalysis;
  showRecommendations?: boolean;
  showCharts?: boolean;
}

export const BundleAnalyzer: React.FC<BundleAnalyzerProps> = ({
  data,
  showRecommendations = true,
  showCharts = true
}) => {
  const [analysis, setAnalysis] = useState<BundleAnalysis | null>(data || null);
  const [isLoading, setIsLoading] = useState(false);

  // Mock data for demonstration
  const mockData: BundleAnalysis = useMemo(() => ({
    totalSize: 645840, // bytes
    totalGzipSize: 230640, // bytes
    chunks: [
      { name: 'vendor-react', size: 120000, gzipSize: 35000, modules: 15, type: 'vendor' },
      { name: 'vendor-framer', size: 180000, gzipSize: 45000, modules: 8, type: 'vendor' },
      { name: 'vendor-icons', size: 45000, gzipSize: 12000, modules: 12, type: 'vendor' },
      { name: 'main', size: 14000, gzipSize: 4700, modules: 5, type: 'app' },
      { name: 'pages', size: 38000, gzipSize: 12000, modules: 8, type: 'page' },
      { name: 'components', size: 49000, gzipSize: 15000, modules: 12, type: 'component' },
      { name: 'utils', size: 25000, gzipSize: 8000, modules: 6, type: 'util' },
    ],
    recommendations: [
      'Consider code splitting for large vendor chunks',
      'Implement lazy loading for non-critical components',
      'Optimize icon imports to reduce bundle size',
      'Use dynamic imports for heavy libraries',
    ]
  }), []);

  useEffect(() => {
    if (!data) {
      setIsLoading(true);
      // Simulate loading analysis
      setTimeout(() => {
        setAnalysis(mockData);
        setIsLoading(false);
      }, 1000);
    }
  }, [data, mockData]);

  const formatBytes = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const getTypeColor = (type: string) => {
    const colors = {
      vendor: '#8884d8',
      app: '#82ca9d',
      page: '#ffc658',
      component: '#ff7300',
      util: '#00ff00'
    };
    return colors[type as keyof typeof colors] || '#8884d8';
  };

  const chartData = useMemo(() => {
    if (!analysis) return [];
    
    return analysis.chunks.map(chunk => ({
      name: chunk.name,
      size: chunk.size,
      gzipSize: chunk.gzipSize,
      modules: chunk.modules,
      type: chunk.type,
      fill: getTypeColor(chunk.type)
    }));
  }, [analysis]);

  const pieData = useMemo(() => {
    if (!analysis) return [];
    
    const typeGroups = analysis.chunks.reduce((acc, chunk) => {
      if (!acc[chunk.type]) {
        acc[chunk.type] = { name: chunk.type, value: 0, count: 0 };
      }
      acc[chunk.type].value += chunk.size;
      acc[chunk.type].count += 1;
      return acc;
    }, {} as Record<string, { name: string; value: number; count: number }>);

    return Object.values(typeGroups).map(group => ({
      ...group,
      fill: getTypeColor(group.name)
    }));
  }, [analysis]);

  if (isLoading) {
    return (
      <div className="p-6 bg-white rounded-lg shadow">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="space-y-3">
            <div className="h-3 bg-gray-200 rounded"></div>
            <div className="h-3 bg-gray-200 rounded w-5/6"></div>
            <div className="h-3 bg-gray-200 rounded w-4/6"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!analysis) {
    return (
      <div className="p-6 bg-white rounded-lg shadow">
        <p className="text-gray-500">No bundle analysis data available</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Summary */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4">Bundle Analysis</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">
              {formatBytes(analysis.totalSize)}
            </div>
            <div className="text-sm text-gray-500">Total Size</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600">
              {formatBytes(analysis.totalGzipSize)}
            </div>
            <div className="text-sm text-gray-500">Gzipped Size</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600">
              {analysis.chunks.length}
            </div>
            <div className="text-sm text-gray-500">Chunks</div>
          </div>
        </div>
      </div>

      {/* Charts */}
      {showCharts && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Size by Chunk */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4">Size by Chunk</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" angle={-45} textAnchor="end" height={100} />
                <YAxis />
                <Tooltip formatter={(value) => formatBytes(Number(value))} />
                <Bar dataKey="size" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Size by Type */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4">Size by Type</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => formatBytes(Number(value))} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {/* Chunk Details */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="px-6 py-4 border-b">
          <h3 className="text-lg font-semibold">Chunk Details</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Chunk
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Size
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Gzipped
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Modules
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {analysis.chunks.map((chunk, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {chunk.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span 
                      className="inline-flex px-2 py-1 text-xs font-semibold rounded-full"
                      style={{ 
                        backgroundColor: getTypeColor(chunk.type) + '20',
                        color: getTypeColor(chunk.type)
                      }}
                    >
                      {chunk.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {formatBytes(chunk.size)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {formatBytes(chunk.gzipSize)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {chunk.modules}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recommendations */}
      {showRecommendations && analysis.recommendations.length > 0 && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-yellow-800 mb-4">Optimization Recommendations</h3>
          <ul className="space-y-2">
            {analysis.recommendations.map((recommendation, index) => (
              <li key={index} className="flex items-start">
                <span className="text-yellow-600 mr-2">•</span>
                <span className="text-yellow-700">{recommendation}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

// Hook for bundle analysis
export const useBundleAnalysis = () => {
  const [analysis, setAnalysis] = useState<BundleAnalysis | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const analyzeBundle = async () => {
    setIsLoading(true);
    try {
      // In a real implementation, this would fetch actual bundle analysis data
      // For now, we'll use mock data
      await new Promise(resolve => setTimeout(resolve, 1000));
      setAnalysis({
        totalSize: 645840,
        totalGzipSize: 230640,
        chunks: [],
        recommendations: []
      });
    } catch (error) {
      console.error('Bundle analysis failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return { analysis, isLoading, analyzeBundle };
};