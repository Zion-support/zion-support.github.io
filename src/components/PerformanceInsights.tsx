import React, { useState, useEffect, useMemo } from "react";

interface PerformanceInsight {
  id: string;
  type: "warning" | "error" | "info" | "success";
  title: string;
  description: string;
  impact: "high" | "medium" | "low";
  recommendation: string;
  metrics: {
    current: number;
    target: number;
    unit: string;
  };
  timestamp: Date;
}

interface PerformanceInsightsProps {
  isVisible: boolean;
  onClose: () => void;
}

export default function PerformanceInsights({
  isVisible,
  onClose,
}: PerformanceInsightsProps) {
  const [insights, setInsights] = useState<PerformanceInsight[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState<
    "all" | "high" | "medium" | "low"
  >("all");

  useEffect(() => {
    if (isVisible) {
      loadPerformanceInsights();
    }
  }, [isVisible]);

  const loadPerformanceInsights = async () => {
    setLoading(true);
    try {
      // Simulate API call - replace with actual performance analysis
      const mockInsights: PerformanceInsight[] = [
        {
          id: "1",
          type: "warning",
          title: "High Memory Usage Detected",
          description:
            "Memory usage has increased by 25% over the last hour, potentially affecting performance.",
          impact: "high",
          recommendation:
            "Consider implementing memory optimization techniques such as lazy loading and garbage collection optimization.",
          metrics: {
            current: 85,
            target: 70,
            unit: "%",
          },
          timestamp: new Date(),
        },
        {
          id: "2",
          type: "error",
          title: "Slow API Response Times",
          description:
            "API response times are averaging 2.5s, exceeding the 1s target threshold.",
          impact: "high",
          recommendation:
            "Implement API caching, database query optimization, or consider using a CDN.",
          metrics: {
            current: 2500,
            target: 1000,
            unit: "ms",
          },
          timestamp: new Date(Date.now() - 300000),
        },
        {
          id: "3",
          type: "info",
          title: "Bundle Size Optimization Opportunity",
          description:
            "The main JavaScript bundle could be reduced by 15% through code splitting.",
          impact: "medium",
          recommendation:
            "Implement dynamic imports and route-based code splitting to reduce initial bundle size.",
          metrics: {
            current: 850,
            target: 720,
            unit: "KB",
          },
          timestamp: new Date(Date.now() - 600000),
        },
        {
          id: "4",
          type: "success",
          title: "Image Optimization Successful",
          description:
            "Image optimization reduced load times by 40% for the homepage.",
          impact: "medium",
          recommendation:
            "Continue applying similar optimization techniques to other image-heavy pages.",
          metrics: {
            current: 1.2,
            target: 2.0,
            unit: "s",
          },
          timestamp: new Date(Date.now() - 900000),
        },
        {
          id: "5",
          type: "warning",
          title: "Cumulative Layout Shift Detected",
          description:
            "CLS score of 0.15 exceeds the recommended 0.1 threshold.",
          impact: "medium",
          recommendation:
            "Add explicit dimensions to images and avoid inserting content above existing content.",
          metrics: {
            current: 0.15,
            target: 0.1,
            unit: "",
          },
          timestamp: new Date(Date.now() - 1200000),
        },
      ];

      setInsights(mockInsights);
    } catch (error) {
      console.error("Failed to load performance insights:", error);
    } finally {
      setLoading(false);
    }
  };

  const filteredInsights = useMemo(() => {
    if (selectedFilter === "all") return insights;
    return insights.filter((insight) => insight.impact === selectedFilter);
  }, [insights, selectedFilter]);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "error":
        return "🚨";
      case "warning":
        return "⚠️";
      case "info":
        return "ℹ️";
      case "success":
        return "✅";
      default:
        return "ℹ️";
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "error":
        return "border-red-200 bg-red-50";
      case "warning":
        return "border-yellow-200 bg-yellow-50";
      case "info":
        return "border-blue-200 bg-blue-50";
      case "success":
        return "border-green-200 bg-green-50";
      default:
        return "border-gray-200 bg-gray-50";
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "high":
        return "text-red-600 bg-red-100";
      case "medium":
        return "text-yellow-600 bg-yellow-100";
      case "low":
        return "text-green-600 bg-green-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  const formatTimestamp = (timestamp: Date) => {
    const now = new Date();
    const diff = now.getTime() - timestamp.getTime();
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);

    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    return timestamp.toLocaleDateString();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-3xl font-bold text-gray-900">
            Performance Insights
          </h2>
          <div className="flex items-center space-x-4">
            <select
              value={selectedFilter}
              onChange={(e) =>
                setSelectedFilter(
                  e.target.value as "all" | "high" | "medium" | "low",
                )
              }
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Insights</option>
              <option value="high">High Impact</option>
              <option value="medium">Medium Impact</option>
              <option value="low">Low Impact</option>
            </select>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
            >
              ✕
            </button>
          </div>
        </div>

        <div className="p-6">
          {loading ? (
            <div className="flex items-center justify-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredInsights.length === 0 ? (
                <div className="text-center py-12">
                  <div className="text-gray-500">
                    No insights found for the selected filter
                  </div>
                </div>
              ) : (
                filteredInsights.map((insight) => (
                  <div
                    key={insight.id}
                    className={`border-l-4 p-6 rounded-lg ${getTypeColor(insight.type)}`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <span className="text-2xl">
                            {getTypeIcon(insight.type)}
                          </span>
                          <h3 className="text-lg font-semibold text-gray-900">
                            {insight.title}
                          </h3>
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${getImpactColor(insight.impact)}`}
                          >
                            {insight.impact.toUpperCase()}
                          </span>
                        </div>
                        <p className="text-gray-600 mb-4">
                          {insight.description}
                        </p>
                        <div className="bg-white p-4 rounded-lg mb-4">
                          <h4 className="font-medium text-gray-900 mb-2">
                            Recommendation
                          </h4>
                          <p className="text-gray-600">
                            {insight.recommendation}
                          </p>
                        </div>
                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <div className="flex items-center space-x-4">
                            <span>
                              Current:{" "}
                              <span className="font-medium">
                                {insight.metrics.current}
                                {insight.metrics.unit}
                              </span>
                            </span>
                            <span>
                              Target:{" "}
                              <span className="font-medium">
                                {insight.metrics.target}
                                {insight.metrics.unit}
                              </span>
                            </span>
                          </div>
                          <span>{formatTimestamp(insight.timestamp)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
