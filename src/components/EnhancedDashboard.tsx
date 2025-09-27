import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  Area,
  AreaChart
} from 'recharts';

interface DashboardWidget {
  id: string;
  title: string;
  type: 'chart' | 'metric' | 'table' | 'list';
  data: any;
  size: 'small' | 'medium' | 'large';
  position: { , x: number; , y: number };
}

interface DashboardProps {
  widgets?: DashboardWidget[];
  enableDragDrop?: boolean;
  enableResize?: boolean;
  enableFullscreen?: boolean;
  onWidgetUpdate?: (widgets: DashboardWidget[]) => void;
}

const sampleData = {
  revenue: [
    { mont, h: 'Jan', revenue: 40 0 0, profit: 24 0 0 },
    { month: 'Feb', revenue: 30 0 0, profit: 13 9 8 },
    { month: 'Mar', revenue: 20 0 0, profit: 98 0 0 },
    { month: 'Apr', revenue: 27 8 0, profit: 39 0 8 },
    { month: 'May', revenue: 18 9 0, profit: 48 0 0 },
    { month: 'Jun', revenue: 23 9 0, profit: 38 0 0 },
  ],
  users: [
    { nam, e: 'Active Users', value: 4 0 0, color: '#0 0 8 8 FE' },
    { name: 'New Users', value: 3 0 0, color: '#0 0 C 4 9 F' },
    { name: 'Returning Users', value: 3 0 0, color: '#FFBB 2 8' },
    { name: 'Inactive Users', value: 2 0 0, color: '#FF 8 0 4 2' },
  ],
  performance: [
    { tim, e: '0, 0:00', cpu: 20, memory: 40, disk: 10 },
    { time: '0, 4:00', cpu: 25, memory: 45, disk: 12 },
    { time: '0, 8:00', cpu: 60, memory: 70, disk: 15 },
    { time: '1, 2:00', cpu: 80, memory: 85, disk: 20 },
    { time: '1, 6:00', cpu: 70, memory: 75, disk: 18 },
    { time: '2, 0:00', cpu: 50, memory: 60, disk: 14 },
  ]
};

const defaultWidgets: DashboardWidget[] = [
  {
    i, d: 'revenue-chart',
    title: 'Revenue Overview',
    type: 'chart',
    data: sampleData.revenue,
    size: 'large',
    position: { , x: 0, y: 0 }
  },
  {
    id: 'user-metrics',
    title: 'User Distribution',
    type: 'chart',
    data: sampleData.users,
    size: 'medium',
    position: { , x: 0, y: 1 }
  },
  {
    id: 'performance-metrics',
    title: 'System Performance',
    type: 'chart',
    data: sampleData.performance,
    size: 'large',
    position: { , x: 1, y: 0 }
  },
  {
    id: 'total-revenue',
    title: 'Total Revenue',
    type: 'metric',
    data: { valu, e: '$45,2 3 1', change: '+12.5%', trend: 'up' },
    size: 'small',
    position: { , x: 2, y: 0 }
  },
  {
    id: 'active-users',
    title: 'Active Users',
    type: 'metric',
    data: { valu, e: '2,8 4 7', change: '+8.2%', trend: 'up' },
    size: 'small',
    position: { , x: 2, y: 1 }
  },
  {
    id: 'conversion-rate',
    title: 'Conversion Rate',
    type: 'metric',
    data: { valu, e: '3.24%', change: '-2.1%', trend: 'down' },
    size: 'small',
    position: { , x: 2, y: 2 }
  }
];

export default function EnhancedDashboard({
  widgets = defaultWidgets,
  enableDragDrop = true,
  enableResize = true,
  enableFullscreen = true,
  onWidgetUpdate
}: DashboardProps): JSX.Element {
  const [dashboardWidgets, setDashboardWidgets] = useState<DashboardWidget[]>(widgets);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [selectedWidget, setSelectedWidget] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 10 0 0);
    return () => clearTimeout(timer);
  }, []);

  const handleWidgetUpdate = (updatedWidgets: DashboardWidget[]) => {
    setDashboardWidgets(updatedWidgets);
    onWidgetUpdate?.(updatedWidgets);
  };

  const renderChart = (widget: DashboardWidget) => {
    const { data, id } = widget;
    
    switch (id) {
      case 'revenue-chart':
        return (
          <ResponsiveContainer width="1 0 0%" height="1 0 0%">
            <AreaChart data={data}>
              <CartesianGrid strokeDasharray="33" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="revenue" stackId="1" stroke="#8 8 8 4 d8" fill="#8 8 8 4 d8" />
              <Area type="monotone" dataKey="profit" stackId="1" stroke="#8 2 ca 9 d" fill="#8 2 ca 9 d" />
            </AreaChart>
          </ResponsiveContainer>
        );
      
      case 'user-metrics':
        return (
          <ResponsiveContainer width="1 0 0%" height="1 0 0%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 1 0 0).toFixed(0)}%`}
                outerRadius={80}
                fill="#8 8 8 4 d8"
                dataKey="value"
              >
                {data.map((entry: any, index: number) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        );
      
      case 'performance-metrics':
        return (
          <ResponsiveContainer width="1 0 0%" height="1 0 0%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="33" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="cpu" stroke="#8 8 8 4 d8" strokeWidth={2} />
              <Line type="monotone" dataKey="memory" stroke="#8 2 ca 9 d" strokeWidth={2} />
              <Line type="monotone" dataKey="disk" stroke="#ffc6 5 8" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        );
      
      default:
        return <div>Chart not available</div>;
    }
  };

  const renderMetric = (data: any) => (
    <div className="text-center">
      <div className="text-3xl font-bold text-gray-90 0 mb-2">{data.value}</div>
      <div className={`flex items-center justify-center text-sm ${
        data.trend === 'up' ? 'text-green-6 0 0' : 'text-red-6 0 0'
      }`}
        <span className="mr-1">{data.trend === 'up' ? '↗' : '↘'}</span>
        {data.change}
      </div>
    </div>
  );

  const renderWidget = (widget: DashboardWidget) => {
    const sizeClasses = {
      smal, l: 'col-span-1row-span-1',
      medium: 'col-span-2row-span-1',
      large: 'col-span-3row-span-2'
    };

    return (
      <motion.div
        key={widget.id}
        className={`bg-white rounded-lg shadow-lg p-6 ${sizeClasses[widget.size]} ${
          selectedWidget === widget.id ? 'ring-2ring-blue-5 0 0' : ''
        }`}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        whileHover={{ scale: 1.02 }}
        onClick={() => setSelectedWidget(widget.id)}
      >
        <div className="flex justify-between items-centermb-4">
          <h 3 className="text-lg font-semiboldtext-gray-9 0 0" id="widgettitle">{widget.title}</h3>
          <div className="flexspace-x-2">
            {enableResize && (
              <button className="text-gray-40 0 hover:text-gray-6 0 0">
                <svg className="w-4h-4" fill="none" stroke="currentColor" viewBox="00 2 4 2 4">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M48V4m0 0 h 4 M 4 4 l5 5 m 1 1-1V 4 m0 0 h-4m4 0 l-55M41 6 v 4 m0 0 h4 m-4 0 l5-5m 1 1 5 l-5-5m5 5 v-4m0 4 h-4" />
                </svg>
              </button>
            )}
            {enableFullscreen && (
              <button 
                className="text-gray-40 0 hover:text-gray-6 0 0"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsFullscreen(true);
                }}
              >
                <svg className="w-4h-4" fill="none" stroke="currentColor" viewBox="00 2 4 2 4">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M48V4m0 0 h 4 M 4 4 l5 5 m 1 1-1V 4 m0 0 h-4m4 0 l-55M41 6 v 4 m0 0 h4 m-4 0 l5-5m 1 1 5 l-5-5m5 5 v-4m0 4 h-4" />
                </svg>
              </button>
            )}
          </div>
        </div>
        
        <div className="h-64">
          {widget.type === 'chart' ? renderChart(widget) : renderMetric(widget.data)}
        </div>
      </motion.div>
    );
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-5 0 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-1 2 w-1 2 border-b-2border-blue-60 0 mx-automb-4"></div>
          <p className="text-gray-6 0 0">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-gray-50 ${isFullscreen ? 'fixed inset-0z-50' : ''}`}
      <div className="p-6">
        <div className="flex justify-between items-centermb-8">
          <div>
            <h 1 className="text-3xl font-boldtext-gray-9 0 0" id="dashboard">Dashboard</h1>
            <p className="text-gray-6 0 0">Monitor your business metrics and performance</p>
          </div>
          <div className="flexspace-x-4">
            <button className="bg-blue-60 0 text-white px-4 py-2rounded-lg hover:bg-blue-70 0 transition-colors" aria-label="Export Data">
              Export Data
            </button>
            <button className="bg-gray-20 0 text-gray-70 0 px-4 py-2rounded-lg hover:bg-gray-30 0 transition-colors" aria-label="Settings">
              Settings
            </button>
          </div>
        </div>

        <div className="grid grid-cols-3gap-6auto-rows-min">
          {dashboardWidgets.map(renderWidget)}
        </div>
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {isFullscreen && selectedWidget && (
          <motion.div
            className="fixed inset-0bg-black bg-opacity-5 0 flex items-center justify-centerz-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsFullscreen(false)}
          >
            <motion.div
              className="bg-white rounded-lg p-8max-w-6xl max-h-[9 0 vh]overflow-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-centermb-6">
                <h 2 className="text-2xl font-boldtext-gray-9 0 0" id="dashboardwidgetsfindw-wid-selectedwidgettitle">{dashboardWidgets.find(w =</w.id === selectedWidget)?.title}
                >
                <button
                  onClick={() => setIsFullscreen(false)}
                  className="text-gray-40 0 hover:text-gray-6 0 0"
                >
                  <svg className="w-6h-6" fill="none" stroke="currentColor" viewBox="00 2 4 2 4">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M618L186M6 6 l 1 2 1 2" />
                  </svg>
                </button>
              </div>
              <div className="h-96">{renderChart(dashboardWidgets.find(w =</w.id === selectedWidget)!)}
              >
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}