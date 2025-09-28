import React, { useState, useEffect } from "react";

interface UXMetric {
  id: string;
  name: string;
  value: number;
  target: number;
  unit: string;
  trend: "up" | "down" | "stable";
  description: string;
}

interface UserSession {
  id: string;
  startTime: Date;
  duration: number;
  pageViews: number;
  interactions: number;
  satisfaction: number;
  device: string;
  location: string;
}

interface UserExperienceMonitorProps {
  isVisible: boolean;
  onClose: () => void;
}

export default function UserExperienceMonitor({
  isVisible,
  onClose,
}: UserExperienceMonitorProps) {
  const [uxMetrics, setUxMetrics] = useState<UXMetric[]>([]);
  const [userSessions, setUserSessions] = useState<UserSession[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedTimeRange, setSelectedTimeRange] = useState("24h");

  useEffect(() => {
    if (isVisible) {
      loadUXData();
    }
  }, [isVisible, selectedTimeRange]);

  const loadUXData = async () => {
    setLoading(true);
    try {
      // Simulate API call - replace with actual UX data
      const mockMetrics: UXMetric[] = [
        {
          id: "1",
          name: "Page Load Time",
          value: 1.2,
          target: 2.0,
          unit: "s",
          trend: "down",
          description: "Average time for pages to load completely",
        },
        {
          id: "2",
          name: "First Contentful Paint",
          value: 0.8,
          target: 1.5,
          unit: "s",
          trend: "down",
          description: "Time until first content is rendered",
        },
        {
          id: "3",
          name: "Largest Contentful Paint",
          value: 1.5,
          target: 2.5,
          unit: "s",
          trend: "stable",
          description: "Time until largest content element is rendered",
        },
        {
          id: "4",
          name: "Cumulative Layout Shift",
          value: 0.05,
          target: 0.1,
          unit: "",
          trend: "down",
          description: "Visual stability measure",
        },
        {
          id: "5",
          name: "First Input Delay",
          value: 45,
          target: 100,
          unit: "ms",
          trend: "down",
          description: "Time until page becomes interactive",
        },
        {
          id: "6",
          name: "User Satisfaction Score",
          value: 4.2,
          target: 4.0,
          unit: "/5",
          trend: "up",
          description: "Average user satisfaction rating",
        },
      ];

      const mockSessions: UserSession[] = [
        {
          id: "1",
          startTime: new Date(Date.now() - 300000),
          duration: 180,
          pageViews: 5,
          interactions: 12,
          satisfaction: 4.5,
          device: "Desktop",
          location: "New York, US",
        },
        {
          id: "2",
          startTime: new Date(Date.now() - 600000),
          duration: 240,
          pageViews: 8,
          interactions: 18,
          satisfaction: 4.0,
          device: "Mobile",
          location: "London, UK",
        },
        {
          id: "3",
          startTime: new Date(Date.now() - 900000),
          duration: 120,
          pageViews: 3,
          interactions: 6,
          satisfaction: 3.5,
          device: "Tablet",
          location: "Tokyo, JP",
        },
        {
          id: "4",
          startTime: new Date(Date.now() - 1200000),
          duration: 360,
          pageViews: 12,
          interactions: 25,
          satisfaction: 4.8,
          device: "Desktop",
          location: "San Francisco, US",
        },
        {
          id: "5",
          startTime: new Date(Date.now() - 1500000),
          duration: 90,
          pageViews: 2,
          interactions: 4,
          satisfaction: 3.0,
          device: "Mobile",
          location: "Berlin, DE",
        },
      ];

      setUxMetrics(mockMetrics);
      setUserSessions(mockSessions);
    } catch (error) {
      console.error("Failed to load UX data:", error);
    } finally {
      setLoading(false);
    }
  };

  const getTrendIcon = (trend: "up" | "down" | "stable") => {
    switch (trend) {
      case "up":
        return "📈";
      case "down":
        return "📉";
      case "stable":
        return "➡️";
      default:
        return "➡️";
    }
  };

  const getTrendColor = (trend: "up" | "down" | "stable") => {
    switch (trend) {
      case "up":
        return "text-green-600";
      case "down":
        return "text-red-600";
      case "stable":
        return "text-gray-600";
      default:
        return "text-gray-600";
    }
  };

  const getPerformanceColor = (value: number, target: number) => {
    const ratio = value / target;
    if (ratio <= 0.8) return "text-green-600";
    if (ratio <= 1.0) return "text-yellow-600";
    return "text-red-600";
  };

  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}m ${remainingSeconds}s`;
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-7xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-3xl font-bold text-gray-900">
            User Experience Monitor
          </h2>
          <div className="flex items-center space-x-4">
            <select
              value={selectedTimeRange}
              onChange={(e) => setSelectedTimeRange(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="1h">Last Hour</option>
              <option value="24h">Last 24 Hours</option>
              <option value="7d">Last 7 Days</option>
              <option value="30d">Last 30 Days</option>
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
            <div className="space-y-8">
              {/* UX Metrics Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {uxMetrics.map((metric) => (
                  <div key={metric.id} className="bg-gray-50 p-6 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {metric.name}
                      </h3>
                      <span
                        className={`text-lg ${getTrendColor(metric.trend)}`}
                      >
                        {getTrendIcon(metric.trend)}
                      </span>
                    </div>
                    <div className="mb-2">
                      <span
                        className={`text-3xl font-bold ${getPerformanceColor(metric.value, metric.target)}`}
                      >
                        {metric.value}
                        {metric.unit}
                      </span>
                      <span className="text-gray-500 ml-2">
                        / {metric.target}
                        {metric.unit}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">
                      {metric.description}
                    </p>
                    <div className="mt-4 bg-white p-3 rounded">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>
                          {Math.round((metric.value / metric.target) * 100)}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                        <div
                          className={`h-2 rounded-full ${
                            metric.value <= metric.target
                              ? "bg-green-500"
                              : "bg-red-500"
                          }`}
                          style={{
                            width: `${Math.min((metric.value / metric.target) * 100, 100)}%`,
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* User Sessions Table */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">
                  Recent User Sessions
                </h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white rounded-lg overflow-hidden">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Start Time
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Duration
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Page Views
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Interactions
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Satisfaction
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Device
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Location
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {userSessions.map((session) => (
                        <tr key={session.id} className="hover:bg-gray-50">
                          <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                            {formatTime(session.startTime)}
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                            {formatDuration(session.duration)}
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                            {session.pageViews}
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                            {session.interactions}
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap text-sm">
                            <div className="flex items-center">
                              <span className="text-yellow-400 mr-1">★</span>
                              <span
                                className={getPerformanceColor(
                                  session.satisfaction,
                                  4.0,
                                )}
                              >
                                {session.satisfaction}/5
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                            {session.device}
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                            {session.location}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Summary Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-600">
                    {userSessions.length}
                  </div>
                  <div className="text-sm text-gray-600">Active Sessions</div>
                </div>
                <div className="bg-green-50 p-6 rounded-lg text-center">
                  <div className="text-2xl font-bold text-green-600">
                    {Math.round(
                      (userSessions.reduce(
                        (acc, s) => acc + s.satisfaction,
                        0,
                      ) /
                        userSessions.length) *
                        10,
                    ) / 10}
                  </div>
                  <div className="text-sm text-gray-600">Avg Satisfaction</div>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg text-center">
                  <div className="text-2xl font-bold text-purple-600">
                    {Math.round(
                      userSessions.reduce((acc, s) => acc + s.duration, 0) /
                        userSessions.length /
                        60,
                    )}
                    m
                  </div>
                  <div className="text-sm text-gray-600">
                    Avg Session Duration
                  </div>
                </div>
                <div className="bg-yellow-50 p-6 rounded-lg text-center">
                  <div className="text-2xl font-bold text-yellow-600">
                    {Math.round(
                      userSessions.reduce((acc, s) => acc + s.pageViews, 0) /
                        userSessions.length,
                    )}
                  </div>
                  <div className="text-sm text-gray-600">Avg Page Views</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
