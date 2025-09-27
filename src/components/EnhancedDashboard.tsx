import React, { useState, useEffect } from 'react';

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

const sampleData = {
  revenue: [
    { month: 'Jan', revenue: 4000, profit: 2400 },
    { month: 'Feb', revenue: 3000, profit: 1398 },
    { month: 'Mar', revenue: 2000, profit: 9800 },
    { month: 'Apr', revenue: 2780, profit: 3908 },
    { month: 'May', revenue: 1890, profit: 4800 },
    { month: 'Jun', revenue: 2390, profit: 3800 },
  ],
  users: [
    { name: 'Active Users', value: 400, color: '#0088FE' },
    { name: 'New Users', value: 300, color: '#00C49F' },
    { name: 'Returning Users', value: 300, color: '#FFBB28' },
    { name: 'Inactive Users', value: 200, color: '#FF8042' },
  ],
  performance: [
    { time: '00:00', cpu: 20, memory: 40, disk: 10 },
    { time: '04:00', cpu: 25, memory: 45, disk: 12 },
    { time: '08:00', cpu: 60, memory: 70, disk: 15 },
    { time: '12:00', cpu: 80, memory: 85, disk: 20 },
    { time: '16:00', cpu: 70, memory: 75, disk: 18 },
    { time: '20:00', cpu: 50, memory: 60, disk: 14 },
  ]
};

const defaultWidgets: DashboardWidget[] = [
  {
    id: 'revenue-chart',
    title: 'Revenue Overview',
    type: 'chart',
    data: sampleData.revenue,
    size: 'large',
    position: { x: 0, y: 0 }
  },
  {
    id: 'user-metrics',
    title: 'User Metrics',
    type: 'metric',
    data: sampleData.users,
    size: 'medium',
    position: { x: 1, y: 0 }
  },
  {
    id: 'performance-chart',
    title: 'System Performance',
    type: 'chart',
    data: sampleData.performance,
    size: 'large',
    position: { x: 0, y: 1 }
  }
];

export const EnhancedDashboard: React.FC<DashboardProps> = ({
  widgets = defaultWidgets,
  onWidgetUpdate,
  onWidgetAdd,
  onWidgetRemove,
  className = ''
}) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [selectedWidget, setSelectedWidget] = useState<string | null>(null);

  const handleWidgetClick = (widgetId: string) => {
    setSelectedWidget(selectedWidget === widgetId ? null : widgetId);
  };

  const renderWidget = (widget: DashboardWidget) => {
    const isSelected = selectedWidget === widget.id;
    
    return (
      <div
        key={widget.id}
        className={`bg-white rounded-lg shadow-md p-4 cursor-pointer transition-all duration-200 hover:shadow-lg ${
          isSelected ? 'ring-2 ring-blue-500' : ''
        }`}
        onClick={() => handleWidgetClick(widget.id)}
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">{widget.title}</h3>
          <div className="flex space-x-2">
            <div className="w-5 h-5 bg-blue-500 rounded" />
            {widget.size === 'large' && <div className="w-5 h-5 bg-green-500 rounded" />}
          </div>
        </div>

        {widget.type === 'metric' && (
          <div className="grid grid-cols-2 gap-4">
            {widget.data.map((item: any, index: number) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-gray-900">{item.value}</div>
                <div className="text-sm text-gray-600">{item.name}</div>
              </div>
            ))}
          </div>
        )}

        {widget.type === 'chart' && (
          <div className="h-48 bg-gray-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                <div className="w-6 h-6 bg-blue-500 rounded" />
              </div>
              <p className="text-sm text-gray-600">Chart Visualization</p>
              <p className="text-xs text-gray-500">{widget.data.length} data points</p>
            </div>
          </div>
        )}

        {widget.type === 'table' && (
          <div className="space-y-2">
            {widget.data.slice(0, 3).map((item: any, index: number) => (
              <div key={index} className="flex justify-between text-sm">
                <span>{item.name || item.month || item.time}</span>
                <span className="font-medium">{item.value || item.revenue}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className={`min-h-screen bg-gray-50 ${isFullscreen ? 'fixed inset-0 z-50' : ''} ${className}`}>
      <div className="p-6">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Enhanced Dashboard</h1>
            <p className="text-gray-600 mt-2">Comprehensive analytics and monitoring</p>
          </div>
          <div className="flex space-x-4">
            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              {isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
            </button>
            {onWidgetAdd && (
              <button
                onClick={() => onWidgetAdd({
                  title: 'New Widget',
                  type: 'metric',
                  data: [],
                  size: 'medium',
                  position: { x: 0, y: 0 }
                })}
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                Add Widget
              </button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {widgets.map(renderWidget)}
        </div>

        {selectedWidget && (
          <div className="mt-8 bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-4">Widget Details</h3>
            <p className="text-gray-600">
              Selected widget: <strong>{selectedWidget}</strong>
            </p>
            {onWidgetRemove && (
              <button
                onClick={() => {
                  onWidgetRemove(selectedWidget);
                  setSelectedWidget(null);
                }}
                className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Remove Widget
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default EnhancedDashboard;