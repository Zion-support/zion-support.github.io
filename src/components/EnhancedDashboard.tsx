import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, TrendingUp, Users, Zap, Shield, BarChart3 } from 'lucide-react';

interface DashboardWidget {
  id: string;
  title: string;
  type: 'chart' | 'metric' | 'table' | 'list';
  data: any;
  size: 'small' | 'medium' | 'large';
  position: { x: number; y: number };
}

interface DashboardProps {
  widgets: DashboardWidget[];
  onWidgetUpdate?: (widget: DashboardWidget) => void;
  onWidgetAdd?: (widget: Omit<DashboardWidget, 'id'>) => void;
  onWidgetRemove?: (widgetId: string) => void;
  className?: string;
}

export const EnhancedDashboard: React.FC<DashboardProps> = ({
  widgets,
  onWidgetUpdate,
  onWidgetAdd,
  onWidgetRemove,
  className = ''
}) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className={`min-h-screen bg-gray-50 py-8 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Enhanced Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Customizable dashboard with real-time metrics and analytics
          </p>
        </div>

        {/* Widgets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {widgets.map(widget => (
            <motion.div
              key={widget.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {widget.title}
                </h3>
                <div className="flex items-center space-x-2">
                  <Activity className="w-4 h-4 text-blue-500" />
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {widget.data?.value || '0'}
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  {widget.data?.label || 'No data'}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EnhancedDashboard;