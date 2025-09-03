import React from "react";
import { Settings, BarChart3 } from "lucide-react";

interface AnalyticsManagerProps {
  className?: string;
}

const AnalyticsManager: React.FC<AnalyticsManagerProps> = ({ className = "" }) => {
  return (
    <div className={`bg-white rounded-lg shadow-lg border p-6 ${className}`}>
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
          <Settings className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Analytics Manager</h3>
          <p className="text-sm text-gray-600">Manage your analytics settings</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center space-x-3">
            <BarChart3 className="w-5 h-5 text-gray-600" />
            <div>
              <h4 className="font-medium text-gray-900">Google Analytics</h4>
              <p className="text-sm text-gray-600">Track website performance</p>
            </div>
          </div>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            Configure
          </button>
        </div>

        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center space-x-3">
            <BarChart3 className="w-5 h-5 text-gray-600" />
            <div>
              <h4 className="font-medium text-gray-900">Performance Monitoring</h4>
              <p className="text-sm text-gray-600">Monitor site speed and performance</p>
            </div>
          </div>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            Configure
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsManager;