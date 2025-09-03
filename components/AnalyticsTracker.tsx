import React from "react";
import { Activity, TrendingUp } from "lucide-react";

interface AnalyticsTrackerProps {
  className?: string;
}

const AnalyticsTracker: React.FC<AnalyticsTrackerProps> = ({ className = "" }) => {
  return (
    <div className={`bg-white rounded-lg shadow-lg border p-6 ${className}`}>
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center">
          <Activity className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Analytics Tracker</h3>
          <p className="text-sm text-gray-600">Real-time tracking and insights</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-gray-900">Active Users</h4>
              <p className="text-2xl font-bold text-blue-600">1,234</p>
            </div>
            <TrendingUp className="w-8 h-8 text-blue-500" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-medium text-gray-900">Page Views</h4>
            <p className="text-xl font-bold text-gray-900">12,345</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-medium text-gray-900">Sessions</h4>
            <p className="text-xl font-bold text-gray-900">8,901</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsTracker;