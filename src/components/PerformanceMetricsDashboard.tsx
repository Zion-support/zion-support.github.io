import React, { useState, useEffect, useCallback } from "react";
import {
  performanceMetrics,
  PerformanceReport,
} from "../utils/performanceMetrics";
import { seoOptimizer, SEOMetrics } from "../utils/seoOptimizer";
import {
  accessibilityEnhancer,
  AccessibilityMetrics,
} from "../utils/accessibilityEnhancer";

interface PerformanceMetricsDashboardProps {
  isVisible: boolean;
  onClose: () => void;
}

const PerformanceMetricsDashboard: React.FC<
  PerformanceMetricsDashboardProps
> = ({ isVisible, onClose }) => {
  const [performanceReport, setPerformanceReport] =
    useState<PerformanceReport | null>(null);
  const [seoAnalysis, setSeoAnalysis] = useState<SEOMetrics | null>(null);
  const [accessibilityReport, setAccessibilityReport] =
    useState<AccessibilityMetrics | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<
    "performance" | "seo" | "accessibility"
  >("performance");

  const refreshData = useCallback(async () => {
    setIsLoading(true);
    try {
      const perfReport = performanceMetrics.generateReport();
      const seoData = seoOptimizer.getMetrics();
      const a11yData = accessibilityEnhancer.getMetrics();

      setPerformanceReport(perfReport);
      setSeoAnalysis(seoData);
      setAccessibilityReport(a11yData);
    } catch (error) {
      console.error("Error refreshing metrics:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (isVisible) {
      refreshData();
    }
  }, [isVisible, refreshData]);

  const getScoreColor = (score: number): string => {
    if (score >= 90) return "text-green-600";
    if (score >= 70) return "text-yellow-600";
    return "text-red-600";
  };

  const getScoreBgColor = (score: number): string => {
    if (score >= 90) return "bg-green-100";
    if (score >= 70) return "bg-yellow-100";
    return "bg-red-100";
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-6xl w-full mx-4 max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Performance Metrics Dashboard
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200 dark:border-gray-700">
          {[
            { id: "performance", label: "Performance", icon: "⚡" },
            { id: "seo", label: "SEO", icon: "🔍" },
            { id: "accessibility", label: "Accessibility", icon: "♿" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() =>
                setActiveTab(tab.id as "performance" | "accessibility" | "seo")
              }
              className={`flex items-center px-6 py-3 text-sm font-medium ${
                activeTab === tab.id
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
          {isLoading ? (
            <div className="flex items-center justify-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            </div>
          ) : (
            <>
              {/* Performance Tab */}
              {activeTab === "performance" && performanceReport && (
                <div className="space-y-6">
                  {/* Overall Score */}
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Overall Performance Score
                      </h3>
                      <div
                        className={`px-3 py-1 rounded-full text-sm font-medium ${getScoreBgColor(performanceReport.overallScore)} ${getScoreColor(performanceReport.overallScore)}`}
                      >
                        {performanceReport.overallScore}/100
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${
                          performanceReport.overallScore >= 90
                            ? "bg-green-500"
                            : performanceReport.overallScore >= 70
                              ? "bg-yellow-500"
                              : "bg-red-500"
                        }`}
                        style={{ width: `${performanceReport.overallScore}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Metrics by Category */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                      "core",
                      "rendering",
                      "network",
                      "memory",
                      "user-interaction",
                    ].map((category) => {
                      const categoryMetrics = performanceReport.metrics.filter(
                        (m) => m.category === category,
                      );
                      const avgValue =
                        categoryMetrics.length > 0
                          ? categoryMetrics.reduce(
                              (sum, m) => sum + m.value,
                              0,
                            ) / categoryMetrics.length
                          : 0;

                      return (
                        <div
                          key={category}
                          className="bg-white dark:bg-gray-700 rounded-lg p-4 border border-gray-200 dark:border-gray-600"
                        >
                          <h4 className="font-semibold text-gray-900 dark:text-white capitalize mb-2">
                            {category.replace("-", " ")}
                          </h4>
                          <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                            {avgValue.toFixed(1)}ms
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {categoryMetrics.length} metrics
                          </p>
                        </div>
                      );
                    })}
                  </div>

                  {/* Recommendations */}
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Recommendations
                    </h3>
                    <ul className="space-y-2">
                      {performanceReport.recommendations.map((rec, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-yellow-500 mr-2">•</span>
                          <span className="text-gray-700 dark:text-gray-300">
                            {rec as string}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* SEO Tab */}
              {activeTab === "seo" && seoAnalysis && (
                <div className="space-y-6">
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        SEO Score
                      </h3>
                      <div
                        className={`px-3 py-1 rounded-full text-sm font-medium ${getScoreBgColor(seoAnalysis.score)} ${getScoreColor(seoAnalysis.score)}`}
                      >
                        {seoAnalysis.score}/100
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${
                          seoAnalysis.score >= 90
                            ? "bg-green-500"
                            : seoAnalysis.score >= 70
                              ? "bg-yellow-500"
                              : "bg-red-500"
                        }`}
                        style={{ width: `${seoAnalysis.score}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white dark:bg-gray-700 rounded-lg p-4 border border-gray-200 dark:border-gray-600">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Issues Found
                      </h4>
                      <p className="text-2xl font-bold text-red-600 dark:text-red-400">
                        {seoAnalysis.issues.length}
                      </p>
                    </div>
                    <div className="bg-white dark:bg-gray-700 rounded-lg p-4 border border-gray-200 dark:border-gray-600">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Recommendations
                      </h4>
                      <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                        {seoAnalysis.recommendations.length}
                      </p>
                    </div>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      SEO Recommendations
                    </h3>
                    <ul className="space-y-2">
                      {seoAnalysis.recommendations.map((rec, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          <div>
                            <span className="font-medium text-gray-900 dark:text-white">
                              {rec.title}
                            </span>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              {rec.description}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Accessibility Tab */}
              {activeTab === "accessibility" && accessibilityReport && (
                <div className="space-y-6">
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Accessibility Score
                      </h3>
                      <div
                        className={`px-3 py-1 rounded-full text-sm font-medium ${getScoreBgColor(accessibilityReport.score)} ${getScoreColor(accessibilityReport.score)}`}
                      >
                        {accessibilityReport.score}/100
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${
                          accessibilityReport.score >= 90
                            ? "bg-green-500"
                            : accessibilityReport.score >= 70
                              ? "bg-yellow-500"
                              : "bg-red-500"
                        }`}
                        style={{ width: `${accessibilityReport.score}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white dark:bg-gray-700 rounded-lg p-4 border border-gray-200 dark:border-gray-600">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Issues Found
                      </h4>
                      <p className="text-2xl font-bold text-red-600 dark:text-red-400">
                        {accessibilityReport.issues.length}
                      </p>
                    </div>
                    <div className="bg-white dark:bg-gray-700 rounded-lg p-4 border border-gray-200 dark:border-gray-600">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Recommendations
                      </h4>
                      <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                        {accessibilityReport.recommendations.length}
                      </p>
                    </div>
                  </div>

                  <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Accessibility Recommendations
                    </h3>
                    <ul className="space-y-2">
                      {accessibilityReport.recommendations.map((rec, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          <span className="text-gray-700 dark:text-gray-300">
                            {typeof rec === "string"
                              ? rec
                              : rec.description || rec.type || "Recommendation"}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-6 border-t border-gray-200 dark:border-gray-700">
          <button
            onClick={refreshData}
            disabled={isLoading}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
          >
            {isLoading ? "Refreshing..." : "Refresh Data"}
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-400 dark:hover:bg-gray-500"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default PerformanceMetricsDashboard;
