import React, { useState, useEffect, useCallback } from "react";
import {
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from "recharts";
// import { advancedBuildOptimizer } from '../utils/advancedBuildOptimizer';
// import { accessibilityUtils } from '../utils/accessibilityUtils';

interface AdvancedPerformanceDashboardProps {
  isVisible: boolean;
  onClose: () => void;
}

interface OptimizationStrategy {
  name: string;
  description: string;
  impact: "high" | "medium" | "low";
  applied: boolean;
}

const AdvancedPerformanceDashboard: React.FC<
  AdvancedPerformanceDashboardProps
> = ({ isVisible, onClose }) => {
  const [metrics, setMetrics] = useState({
    buildScore: 0,
    accessibilityScore: 0,
    performanceScore: 0,
    seoScore: 0,
    securityScore: 0,
    overallScore: 0,
  });

  interface RealTimeDataPoint {
    timestamp: number;
    value: number;
    metric: string;
  }

  const [realTimeData, setRealTimeData] = useState<RealTimeDataPoint[]>([]);
  // const [optimizationData, setOptimizationData] = useState<any[]>([]); // Removed unused variables
  const [optimizationSuggestions, setOptimizationSuggestions] = useState<
    string[]
  >([]);
  const [strategies, setStrategies] = useState<OptimizationStrategy[]>([]);

  const updateMetrics = useCallback(async () => {
    try {
      // Simulate performance metrics
      const newMetrics = {
        buildScore: Math.floor(Math.random() * 20) + 80,
        accessibilityScore: Math.floor(Math.random() * 15) + 85,
        performanceScore: Math.floor(Math.random() * 25) + 75,
        seoScore: Math.floor(Math.random() * 20) + 80,
        securityScore: Math.floor(Math.random() * 10) + 90,
        overallScore: 0,
      };

      newMetrics.overallScore = Math.round(
        (newMetrics.buildScore +
          newMetrics.accessibilityScore +
          newMetrics.performanceScore +
          newMetrics.seoScore +
          newMetrics.securityScore) /
          5,
      );

      setMetrics(newMetrics);

      // Update real-time data
      const newDataPoint: RealTimeDataPoint = {
        timestamp: Date.now(),
        value: Math.floor(Math.random() * 2000) + 500,
        metric: "lcp",
      };
<<<<<<< HEAD

      setRealTimeData((prev) => [...prev.slice(-9), newDataPoint]);
=======
      
      setRealTimeData(prev => [...prev.slice(-9), newDataPoint as any]);
>>>>>>> 4ba245a45fc5 (Checkpoint before follow-up message)

      // Update optimization suggestions
      const suggestions = [
        "Enable code splitting for better initial load times",
        "Implement service worker for offline functionality",
        "Optimize images with WebP format",
        "Add critical CSS inlining",
        "Implement resource hints for faster loading",
      ];
      setOptimizationSuggestions(suggestions);

      // Update strategies
      const newStrategies: OptimizationStrategy[] = [
        {
          name: "Code Splitting",
          description: "Split code into smaller chunks for faster loading",
          impact: "high",
          applied: Math.random() > 0.5,
        },
        {
          name: "Image Optimization",
          description: "Optimize images for web performance",
          impact: "medium",
          applied: Math.random() > 0.3,
        },
        {
          name: "Caching Strategy",
          description: "Implement effective caching mechanisms",
          impact: "high",
          applied: Math.random() > 0.4,
        },
      ];
      setStrategies(newStrategies);
    } catch (error) {
      console.error("Failed to update metrics:", error);
    }
  }, []);

  const generateSuggestions = useCallback(() => {
    const suggestions: string[] = [];

    if (metrics.buildScore < 80) {
      suggestions.push("Enable code splitting and tree shaking");
      suggestions.push("Optimize bundle size and compression");
    }

    if (metrics.accessibilityScore < 85) {
      suggestions.push("Add missing ARIA labels and alt text");
      suggestions.push("Improve keyboard navigation");
    }

    if (metrics.performanceScore < 90) {
      suggestions.push("Implement lazy loading for images");
      suggestions.push("Optimize critical rendering path");
    }

    if (metrics.seoScore < 90) {
      suggestions.push("Add missing meta tags");
      suggestions.push("Optimize page structure");
    }

    if (metrics.securityScore < 95) {
      suggestions.push("Implement security headers");
      suggestions.push("Add content security policy");
    }

    setOptimizationSuggestions(suggestions);
  }, [metrics]);

  // Removed unused function to reduce warnings
  // const initializeDashboard = async () => {
  //   try {
  //     const score = advancedBuildOptimizer.getOptimizationScore();
  //     const report = advancedBuildOptimizer.generateOptimizationReport();
  //
  //     setMetrics({
  //       buildScore: score,
  //       accessibilityScore: accessibilityUtils.getAccessibilityScore(),
  //       performanceScore: Math.floor(Math.random() * 20) + 80,
  //       seoScore: Math.floor(Math.random() * 15) + 85,
  //       securityScore: Math.floor(Math.random() * 10) + 90,
  //       overallScore: score
  //     });
  //     setStrategies([]);
  //   } catch (error) {
  //     console.error('Failed to initialize dashboard:', error);
  //   }
  // };

  // Removed unused getScoreColor function

  const exportReport = useCallback(() => {
    const report = {
      timestamp: new Date().toISOString(),
      metrics,
      suggestions: optimizationSuggestions,
      strategies: strategies.filter((s) => s.applied),
    };

    const blob = new Blob([JSON.stringify(report, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `performance-report-${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }, [metrics, optimizationSuggestions, strategies]);

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "high":
        return "#ef4444";
      case "medium":
        return "#f59e0b";
      case "low":
        return "#10b981";
      default:
        return "#6b7280";
    }
  };

  useEffect(() => {
    if (isVisible) {
      updateMetrics();
      generateSuggestions();

      const interval = setInterval(updateMetrics, 2000);
      return () => clearInterval(interval);
    }
  }, [isVisible, updateMetrics, generateSuggestions]);

  if (!isVisible) return null;

  // Removed unused performanceData and optimizationDataMap variables
  const pieData = [
    { name: "Build", value: metrics.buildScore, color: "#3b82f6" },
    {
      name: "Accessibility",
      value: metrics.accessibilityScore,
      color: "#10b981",
    },
    { name: "Performance", value: metrics.performanceScore, color: "#f59e0b" },
    { name: "SEO", value: metrics.seoScore, color: "#8b5cf6" },
    { name: "Security", value: metrics.securityScore, color: "#ef4444" },
  ];
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Advanced Performance Dashboard
            </h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              ✕
            </button>
          </div>

          {/* Overall Score */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-lg mb-6">
            <h3 className="text-xl font-semibold mb-2">
              Overall Performance Score
            </h3>
            <div className="text-4xl font-bold">{metrics.overallScore}/100</div>
            <div className="mt-2 text-blue-100">
              {metrics.overallScore >= 90
                ? "Excellent"
                : metrics.overallScore >= 80
                  ? "Good"
                  : metrics.overallScore >= 70
                    ? "Fair"
                    : "Needs Improvement"}
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Build Score
              </h4>
              <div className="text-2xl font-bold text-blue-600">
                {metrics.buildScore}/100
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Accessibility Score
              </h4>
              <div className="text-2xl font-bold text-green-600">
                {metrics.accessibilityScore}/100
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Performance Score
              </h4>
              <div className="text-2xl font-bold text-yellow-600">
                {metrics.performanceScore}/100
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                SEO Score
              </h4>
              <div className="text-2xl font-bold text-purple-600">
                {metrics.seoScore}/100
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Security Score
              </h4>
              <div className="text-2xl font-bold text-red-600">
                {metrics.securityScore}/100
              </div>
            </div>
          </div>

          {/* Optimization Suggestions */}
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">
              💡 Optimization Suggestions
            </h3>
            <div className="space-y-2">
              {optimizationSuggestions.map((suggestion, index) => (
                <div
                  key={index}
                  className="bg-white p-3 rounded-lg border-l-4 border-blue-500"
                >
                  <p className="text-sm text-gray-700">{suggestion}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Optimization Status Chart */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Optimization Status
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  dataKey="value"
                  label={(props: any) => `${props.name}: ${props.value}`}
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Real-time Monitoring */}
          {realTimeData.length > 0 && (
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Real-time Performance Monitoring
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={realTimeData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="lcp"
                    stroke="#ef4444"
                    name="LCP (ms)"
                  />
                  <Line
                    type="monotone"
                    dataKey="fcp"
                    stroke="#f59e0b"
                    name="FCP (ms)"
                  />
                  <Line
                    type="monotone"
                    dataKey="ttfb"
                    stroke="#3b82f6"
                    name="TTFB (ms)"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          )}

          {/* Optimization Strategies */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Optimization Strategies
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {strategies.map(
                (strategy: OptimizationStrategy, index: number) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg border ${
                      strategy.applied
                        ? "bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800"
                        : "bg-gray-50 border-gray-200 dark:bg-gray-700 dark:border-gray-600"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-gray-900 dark:text-white">
                        {strategy.name}
                      </h4>
                      <span
                        className="px-2 py-1 rounded-full text-xs font-medium"
                        style={{
                          backgroundColor: getImpactColor(strategy.impact),
                          color: "white",
                        }}
                      >
                        {strategy.impact}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {strategy.description}
                    </p>
                    <div className="mt-2 flex items-center">
                      <div
                        className={`w-2 h-2 rounded-full mr-2 ${
                          strategy.applied ? "bg-green-500" : "bg-gray-400"
                        }`}
                      />
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {strategy.applied ? "Applied" : "Available"}
                      </span>
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={exportReport}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors"
            >
              Export Report
            </button>
            <button
              onClick={updateMetrics}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition-colors"
            >
              Refresh Metrics
            </button>
            <button
              onClick={() => window.location.reload()}
              className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-md transition-colors"
            >
              Reload App
            </button>
          </div>

          {/* Performance Insights */}
          <div className="mt-6 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">
              Performance Insights
            </h4>
            <div className="text-sm text-blue-800 dark:text-blue-200">
              {metrics.overallScore < 70 && (
                <p>
                  • Performance needs immediate attention. Focus on critical
                  metrics.
                </p>
              )}
              {metrics.overallScore >= 70 && metrics.overallScore < 90 && (
                <p>• Good performance with room for optimization.</p>
              )}
              {metrics && metrics.buildScore < 80 && (
                <p>
                  • Optimize build process - currently {metrics.buildScore}/100
                </p>
              )}
              {metrics.overallScore >= 90 && (
                <p>
                  • Excellent performance! Keep monitoring for any regressions.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedPerformanceDashboard;
