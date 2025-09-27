import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/Card';

interface PerformanceMetrics {
  loadTime: number;
  memoryUsage: number;
  cpuUsage: number;
  networkLatency: number;
  cacheHitRate: number;
  bundleSize: number;
  renderTime: number;
  errorRate: number;
}

interface OptimizationSuggestion {
  type: 'performance' | 'memory' | 'network' | 'rendering';
  priority: 'high' | 'medium' | 'low';
  title: string;
  description: string;
  impact: string;
  implementation: string;
}

interface PerformanceOptimizerProps {
  className?: string;
}

const AdvancedPerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ className = '' }) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    memoryUsage: 0,
    cpuUsage: 0,
    networkLatency: 0,
    cacheHitRate: 0,
    bundleSize: 0,
    renderTime: 0,
    errorRate: 0
  });

  const getPerformanceIcon = (value: number, thresholds: { good: number; warning: number }) => {
    if (value <= thresholds.good) return <CheckCircle className="w-5 h-5 text-green-500" />;
    if (value <= thresholds.warning) return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
    return <XCircle className="w-5 h-5 text-red-500" />;
  };

  const getPriorityColor = (priority: string): string => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className={`space-y-6 ${className}`}>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Zap className="w-8 h-8 text-yellow-500" />
              <span>Advanced Performance Optimizer</span>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={measurePerformance}
                disabled={isAnalyzing}
                className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 disabled:opacity-50 transition-colors"
                {isAnalyzing ? 'Analyzing...' : 'Measure'}
              </button>
              <button
                onClick={performOptimization}
                disabled={isOptimizing || optimizations.length === 0}
                className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 disabled:opacity-50 transition-colors"
                {isOptimizing ? 'Optimizing...' : 'Optimize'}
              </button>
            </div>
          </CardTitle>
          <CardDescription>
            Real-time performance metrics and optimization recommendations
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Load Time</p>
                  <p className={`text-2xl font-bold ${getPerformanceColor(metrics.loadTime, { good: 1000, warning: 2000 })}`}>
                    {metrics.loadTime.toFixed(0)}ms
                  </p>
                </div>
                <Clock className="w-5 h-5 text-blue-500" />
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Memory Usage</p>
                  <p className={`text-2xl font-bold ${getPerformanceColor(metrics.memoryUsage, { good: 50, warning: 80 })}`}>
                    {metrics.memoryUsage.toFixed(1)}%
                  </p>
                </div>
                <HardDrive className="w-5 h-5 text-green-500" />
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">CPU Usage</p>
                  <p className={`text-2xl font-bold ${getPerformanceColor(metrics.cpuUsage, { good: 30, warning: 70 })}`}>
                    {metrics.cpuUsage.toFixed(1)}%
                  </p>
                </div>
                <Cpu className="w-5 h-5 text-purple-500" />
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Network Latency</p>
                  <p className={`text-2xl font-bold ${getPerformanceColor(metrics.networkLatency, { good: 50, warning: 80 })}`}>
                    {metrics.networkLatency.toFixed(0)}ms
                  </p>
                </div>
                <Wifi className="w-5 h-5 text-indigo-500" />
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Cache Hit Rate</p>
                  <p className={`text-2xl font-bold ${getPerformanceColor(100 - metrics.cacheHitRate, { good: 20, warning: 40 })}`}>
                    {metrics.cacheHitRate.toFixed(1)}%
                  </p>
                </div>
                <Battery className="w-5 h-5 text-orange-500" />
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Bundle Size</p>
                  <p className={`text-2xl font-bold ${getPerformanceColor(metrics.bundleSize, { good: 300, warning: 500 })}`}>
                    {(metrics.bundleSize / 1024).toFixed(1)}KB
                  </p>
                </div>
                <Zap className="w-5 h-5 text-yellow-500" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Optimization Suggestions */}
      {optimizations.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Quick Optimization Suggestions</CardTitle>
            <CardDescription>
              Immediate actions to improve performance
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {optimizations.map((suggestion, index) => (
                <div
                  key={index}
                  className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-3 flex items-center space-x-3"
                >
                  <AlertTriangle className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                  <p className="text-yellow-700 dark:text-yellow-300">{suggestion}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Detailed Optimization Recommendations */}
      <Card>
        <CardHeader>
          <CardTitle>Detailed Optimization Recommendations</CardTitle>
          <CardDescription>
            AI-powered suggestions to improve your application performance
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {suggestions.map((suggestion, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getPriorityColor(suggestion.priority)}`}>
                    {suggestion.priority.toUpperCase()}
                  </span>
                </div>
    </div>
  );
};

export default AdvancedPerformanceOptimizer;