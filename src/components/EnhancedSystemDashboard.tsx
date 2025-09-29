import React, { useState, useEffect, useCallback } from "react";
import {
  enhancedPerformanceMonitor,
  PerformanceMetric,
} from "../utils/enhancedPerformanceMonitor";
import {
  enhancedAnalytics,
  AnalyticsReport,
  ConversionFunnel,
} from "../utils/enhancedAnalytics";
import {
  enhancedSEO,
  SEOReport,
  SEORecommendation,
} from "../utils/enhancedSEO";

interface DashboardMetrics {
  performance: {
    score: number;
    metrics: PerformanceMetric[];
    recommendations: string[];
  };
  analytics: {
    report: AnalyticsReport | null;
    funnels: ConversionFunnel[];
  };
  seo: {
    report: SEOReport | null;
    recommendations: SEORecommendation[];
  };
}

interface EnhancedSystemDashboardProps {
  isVisible?: boolean;
  onClose?: () => void;
}

export const EnhancedSystemDashboard: React.FC<
  EnhancedSystemDashboardProps
> = ({ onClose }) => {
  const [metrics, setMetrics] = useState<DashboardMetrics>({
    performance: { score: 0, metrics: [], recommendations: [] },
    analytics: { report: null, funnels: [] },
    seo: { report: null, recommendations: [] },
  });
  const [isMonitoring, setIsMonitoring] = useState(false);
  const [activeTab, setActiveTab] = useState<
    "performance" | "analytics" | "seo"
  >("performance");

  const initializeSystems = () => {
    // Initialize all enhanced systems
    // enhancedPerformanceMonitor.startMonitoring(); // Method doesn't exist
    enhancedAnalytics.initialize();
    enhancedSEO.initialize();

    setIsMonitoring(true);
    console.log("All enhanced systems initialized");
  };

  const updateMetrics = useCallback(() => {
    // Get performance metrics
    // const performanceMetrics = enhancedPerformanceMonitor.getMetrics(); // Method doesn't exist
    const performanceMetrics = new Map(); // Placeholder
    const performanceRecommendations: string[] = []; // Placeholder - method doesn't exist
    const performanceScore = calculatePerformanceScore(performanceMetrics);

    // Get analytics data
    let analyticsReport: AnalyticsReport | null = null;
    try {
      analyticsReport = enhancedAnalytics.generateReport();
    } catch (error) {
      console.warn("Failed to generate analytics report:", error);
    }
    const analyticsFunnels = Array.from(
      enhancedAnalytics.getFunnels().values(),
    );

    // Get SEO data
    let seoReport: SEOReport | null = null;
    let seoRecommendations: SEORecommendation[] = [];
    try {
      seoReport = enhancedSEO.generateSEOReport();
      seoRecommendations = enhancedSEO.generateRecommendations([]);
    } catch (error) {
      console.warn("Failed to generate SEO report:", error);
    }

    setMetrics({
      performance: {
        score: performanceScore,
        metrics: [], // Placeholder - no metrics available
        recommendations: performanceRecommendations,
      },
      analytics: {
        report: analyticsReport,
        funnels: analyticsFunnels,
      },
      seo: {
        report: seoReport,
        recommendations: seoRecommendations,
      },
    });
  }, []);

  const startMonitoring = useCallback(() => {
    const interval = setInterval(() => {
      updateMetrics();
    }, 5000); // Update every 5 seconds

    return () => clearInterval(interval);
  }, [updateMetrics]);

  const stopMonitoring = useCallback(() => {
    // enhancedPerformanceMonitor.stopMonitoring(); // Method doesn't exist
    enhancedAnalytics.endSession();
    setIsMonitoring(false);
  }, []);

  useEffect(() => {
    initializeSystems();

    return () => {
      stopMonitoring();
    };
  }, [startMonitoring, stopMonitoring]);

  const calculatePerformanceScore = (
    performanceMetrics: Map<string, PerformanceMetric[]>,
  ): number => {
    const allMetrics = Array.from(performanceMetrics.values()).flat();
    if (allMetrics.length === 0) return 100;

    const scores = allMetrics.map((metric) => {
      switch (metric.severity) {
        case "good":
          return 100;
        case "needs-improvement":
          return 70;
        case "poor":
          return 30;
        default:
          return 50;
      }
    });

    return Math.round(
      scores.reduce((sum, score) => sum + score, 0) / scores.length,
    );
  };

  const getScoreColor = (score: number): string => {
    if (score >= 90) return "text-green-600";
    if (score >= 70) return "text-yellow-600";
    return "text-red-600";
  };

  const getSeverityColor = (severity: string): string => {
    switch (severity) {
      case "good":
        return "text-green-600";
      case "needs-improvement":
        return "text-yellow-600";
      case "poor":
        return "text-red-600";
      default:
        return "text-gray-600";
    }
  };

  const getImpactColor = (impact: string): string => {
    switch (impact) {
      case "high":
        return "text-red-600";
      case "medium":
        return "text-yellow-600";
      case "low":
        return "text-green-600";
      default:
        return "text-gray-600";
    }
  };

  const renderPerformanceTab = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Performance Score</h3>
          <div
            className={`text-4xl font-bold ${getScoreColor(metrics.performance.score)}`}
          >
            {metrics.performance.score}
          </div>
          <p className="text-gray-600 mt-2">Overall Performance</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Metrics Tracked</h3>
          <div className="text-4xl font-bold text-blue-600">
            {metrics.performance.metrics.length}
          </div>
          <p className="text-gray-600 mt-2">Performance Metrics</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Recommendations</h3>
          <div className="text-4xl font-bold text-purple-600">
            {metrics.performance.recommendations.length}
          </div>
          <p className="text-gray-600 mt-2">Optimization Tips</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Recent Metrics</h3>
          <div className="space-y-3 max-h-64 overflow-y-auto">
            {metrics.performance.metrics.slice(-10).map((metric, index) => (
              <div
                key={index}
                className="flex justify-between items-center p-3 bg-gray-50 rounded"
              >
                <div>
                  <span className="font-medium">{metric.name}</span>
                  <span className="ml-2 text-sm text-gray-600">
                    {metric.category}
                  </span>
                </div>
                <div className="text-right">
                  <div className="font-medium">{metric.value.toFixed(2)}</div>
                  <div
                    className={`text-sm ${getSeverityColor(metric.severity)}`}
                  >
                    {metric.severity}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">
            Optimization Recommendations
          </h3>
          <div className="space-y-3 max-h-64 overflow-y-auto">
            {metrics.performance.recommendations.map((rec, index) => (
              <div key={index} className="p-3 bg-gray-50 rounded">
                <div className="flex justify-between items-start mb-2">
                  <span className="font-medium">Recommendation {index + 1}</span>
                  <span className="text-xs px-2 py-1 rounded text-blue-600 bg-blue-100">
                    Medium impact
                  </span>
                </div>
                <p className="text-sm text-gray-600">{rec}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderAnalyticsTab = () => (
    <div className="space-y-6">
      {metrics.analytics.report ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-4">Page Views</h3>
              <div className="text-4xl font-bold text-blue-600">
                {metrics.analytics.report.pageViews}
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-4">Unique Visitors</h3>
              <div className="text-4xl font-bold text-green-600">
                {metrics.analytics.report.uniqueVisitors}
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-4">Bounce Rate</h3>
              <div className="text-4xl font-bold text-yellow-600">
                {metrics.analytics.report.bounceRate.toFixed(1)}%
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-4">Avg. Duration</h3>
              <div className="text-4xl font-bold text-purple-600">
                {Math.round(
                  metrics.analytics.report.averageSessionDuration / 60,
                )}
                m
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-4">Top Pages</h3>
              <div className="space-y-3 max-h-64 overflow-y-auto">
                {metrics.analytics.report.topPages
                  .slice(0, 10)
                  .map((page, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center p-3 bg-gray-50 rounded"
                    >
                      <span className="font-medium truncate">{page.page}</span>
                      <div className="text-right">
                        <div className="font-medium">{page.views}</div>
                        <div className="text-sm text-gray-600">
                          {page.uniqueViews} unique
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-4">Top Events</h3>
              <div className="space-y-3 max-h-64 overflow-y-auto">
                {metrics.analytics.report.topEvents
                  .slice(0, 10)
                  .map((event, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center p-3 bg-gray-50 rounded"
                    >
                      <span className="font-medium">{event.event}</span>
                      <span className="text-blue-600 font-bold">
                        {event.count}
                      </span>
                    </div>
                  ))}
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-4">Conversion Funnels</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {metrics.analytics.funnels.map((funnel, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded">
                  <h4 className="font-semibold mb-3">{funnel.name}</h4>
                  <div className="space-y-2">
                    {funnel.steps.map((step, stepIndex) => {
                      const conversions = funnel.conversions.get(step) || 0;
                      const dropOffRate = funnel.dropOffRates.get(step) || 0;

                      return (
                        <div key={stepIndex} className="text-sm">
                          <div className="flex justify-between">
                            <span>{step}</span>
                            <span className="font-medium">{conversions}</span>
                          </div>
                          {dropOffRate > 0 && (
                            <div className="text-red-600 text-xs">
                              {dropOffRate.toFixed(1)}% drop-off
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <p className="text-gray-600">Analytics data is being collected...</p>
        </div>
      )}
    </div>
  );

  const renderSEOTab = () => (
    <div className="space-y-6">
      {metrics.seo.report ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-4">SEO Score</h3>
              <div
                className={`text-4xl font-bold ${getScoreColor(metrics.seo.report.score)}`}
              >
                {metrics.seo.report.score}
              </div>
              <p className="text-gray-600 mt-2">Overall SEO Health</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-4">Issues Found</h3>
              <div className="text-4xl font-bold text-red-600">
                {metrics.seo.report.issues.length}
              </div>
              <p className="text-gray-600 mt-2">Need Attention</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-4">Recommendations</h3>
              <div className="text-4xl font-bold text-blue-600">
                {metrics.seo.report.recommendations.length}
              </div>
              <p className="text-gray-600 mt-2">Optimization Tips</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-4">SEO Issues</h3>
              <div className="space-y-3 max-h-64 overflow-y-auto">
                {metrics.seo.report.issues.map((issue, index) => (
                  <div key={index} className="p-3 bg-gray-50 rounded">
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-medium">{issue.message}</span>
                      <span
                        className={`text-xs px-2 py-1 rounded ${getImpactColor(issue.impact)} bg-gray-100`}
                      >
                        {issue.impact} {issue.type}
                      </span>
                    </div>
                    {issue.suggestion && (
                      <p className="text-sm text-gray-600">
                        {issue.suggestion}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-4">
                SEO Recommendations
              </h3>
              <div className="space-y-3 max-h-64 overflow-y-auto">
                {metrics.seo.recommendations.map((rec, index) => (
                  <div key={index} className="p-3 bg-gray-50 rounded">
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-medium">{rec.title}</span>
                      <span
                        className={`text-xs px-2 py-1 rounded ${getImpactColor(rec.impact)} bg-gray-100`}
                      >
                        {rec.impact} impact
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">
                      {rec.description}
                    </p>
                    <p className="text-xs text-blue-600">
                      {rec.implementation}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-4">SEO Metrics</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">
                  {metrics.seo.report.metrics.titleLength}
                </div>
                <div className="text-sm text-gray-600">Title Length</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">
                  {metrics.seo.report.metrics.descriptionLength}
                </div>
                <div className="text-sm text-gray-600">Description Length</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">
                  {metrics.seo.report.metrics.wordCount}
                </div>
                <div className="text-sm text-gray-600">Word Count</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-600">
                  {metrics.seo.report.metrics.readabilityScore.toFixed(0)}
                </div>
                <div className="text-sm text-gray-600">Readability Score</div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <p className="text-gray-600">SEO analysis is being performed...</p>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Enhanced System Dashboard
              </h1>
              <p className="text-gray-600">
                Real-time monitoring of performance, analytics, and SEO metrics
              </p>
              <div className="mt-4 flex items-center">
                <div
                  className={`w-3 h-3 rounded-full mr-2 ${isMonitoring ? "bg-green-500" : "bg-red-500"}`}
                ></div>
                <span className="text-sm text-gray-600">
                  {isMonitoring ? "Monitoring Active" : "Monitoring Inactive"}
                </span>
              </div>
            </div>
            {onClose && (
              <button
                onClick={onClose}
                className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-lg transition-colors duration-200"
              >
                Close
              </button>
            )}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md mb-6">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {(["performance", "analytics", "seo"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm capitalize ${
                    activeTab === tab
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          {activeTab === "performance" && renderPerformanceTab()}
          {activeTab === "analytics" && renderAnalyticsTab()}
          {activeTab === "seo" && renderSEOTab()}
        </div>
      </div>
    </div>
  );
};

export default EnhancedSystemDashboard;
