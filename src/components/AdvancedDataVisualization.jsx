import React, { useState, useRef, useEffect } from 'react';
import { BarChart3, RefreshCw, X, Maximize2, Minimize2 } from 'lucide-react';

const mockChartData = [
  { id: '1', name: 'Q1 Revenue', value: 1250000, category: 'Revenue', timestamp: new Date('2024-01-01') },
  { id: '2', name: 'Q2 Revenue', value: 1580000, category: 'Revenue', timestamp: new Date('2024-04-01') },
  { id: '3', name: 'Q3 Revenue', value: 1420000, category: 'Revenue', timestamp: new Date('2024-07-01') },
  { id: '4', name: 'Q4 Revenue', value: 1890000, category: 'Revenue', timestamp: new Date('2024-10-01') },
  { id: '5', name: 'Q1 Users', value: 45000, category: 'Users', timestamp: new Date('2024-01-01') },
  { id: '6', name: 'Q2 Users', value: 62000, category: 'Users', timestamp: new Date('2024-04-01') },
  { id: '7', name: 'Q3 Users', value: 58000, category: 'Users', timestamp: new Date('2024-07-01') },
  { id: '8', name: 'Q4 Users', value: 75000, category: 'Users', timestamp: new Date('2024-10-01') },
  { id: '9', name: 'Q1 Conversion', value: 3.2, category: 'Conversion', timestamp: new Date('2024-01-01') },
  { id: '10', name: 'Q2 Conversion', value: 3.8, category: 'Conversion', timestamp: new Date('2024-04-01') },
  { id: '11', name: 'Q3 Conversion', value: 3.5, category: 'Conversion', timestamp: new Date('2024-07-01') },
  { id: '12', name: 'Q4 Conversion', value: 4.1, category: 'Conversion', timestamp: new Date('2024-10-01') }
];

const colorPalettes = [
  ['#06b6d4', '#7c3aed', '#10b981', '#f59e0b', '#ef4444'],
  ['#3b82f6', '#8b5cf6', '#06b6d4', '#10b981', '#f59e0b'],
  ['#ef4444', '#f97316', '#eab308', '#84cc16', '#22c55e'],
  ['#8b5cf6', '#ec4899', '#f97316', '#eab308', '#84cc16']
];

export function AdvancedDataVisualization() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [selectedChartType, setSelectedChartType] = useState('bar');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedColorPalette, setSelectedColorPalette] = useState(0);
  const [chartConfig, setChartConfig] = useState({
    showLegend: true,
    showGrid: true,
    animate: true,
    responsive: true
  });
  const [data, setData] = useState(mockChartData);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [autoRefresh, setAutoRefresh] = useState(false);

  const categories = ['all', ...Array.from(new Set(data.map(item => item.category)))];
  const filteredData = data.filter(item => selectedCategory === 'all' || item.category === selectedCategory);

  const refreshData = async () => {
    setIsRefreshing(true);
    // Simulate data refresh
    setTimeout(() => {
      const newData = data.map(item => ({
        ...item,
        value: item.value + Math.floor(Math.random() * 100000 - 50000)
      }));
      setData(newData);
      setIsRefreshing(false);
    }, 1000);
  };

  useEffect(() => {
    if (autoRefresh) {
      const interval = setInterval(refreshData, 30000); // Refresh every 30 seconds
      return () => clearInterval(interval);
    }
  }, [autoRefresh]);

  const downloadChart = (format) => {
    // Simulate chart download
    console.log(`Downloading chart as ${format}`);
  };

  const renderChart = () => {
    switch (selectedChartType) {
      case 'bar':
        return renderBarChart();
      case 'line':
        return renderLineChart();
      case 'pie':
        return renderPieChart();
      case 'area':
        return renderAreaChart();
      case 'scatter':
        return renderScatterChart();
      default:
        return renderBarChart();
    }
  };

  const renderBarChart = () => {
    const maxValue = Math.max(...filteredData.map(item => item.value));
    const colors = colorPalettes[selectedColorPalette];
    
    return (
      <div className="h-80 flex items-end justify-center gap-4 p-6">
        {filteredData.map((item, index) => (
          <div key={item.id} className="flex flex-col items-center">
            <div 
              className="w-16 bg-gradient-to-t from-blue-500 to-purple-600 rounded-t-lg transition-all duration-500 hover:scale-110 cursor-pointer"
              style={{
                height: `${(item.value / maxValue) * 280}px`,
                backgroundColor: colors[index % colors.length]
              }}
              title={`${item.name}: ${item.value.toLocaleString()}`}
            />
            <div className="mt-2 text-center">
              <div className="text-xs font-medium text-gray-700 dark:text-gray-300">{item.name}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">{item.value.toLocaleString()}</div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderLineChart = () => {
    const maxValue = Math.max(...filteredData.map(item => item.value));
    const colors = colorPalettes[selectedColorPalette];
    
    return (
      <div className="h-80 p-6 relative">
        <svg className="w-full h-full">
          <polyline 
            fill="none" 
            stroke={colors[0]} 
            strokeWidth="3" 
            points={filteredData.map((item, index) => 
              `${(index / (filteredData.length - 1)) * 800},${280 - (item.value / maxValue) * 280}`
            ).join(' ')}
          />
        </svg>
      </div>
    );
  };

  const renderPieChart = () => {
    const total = filteredData.reduce((sum, item) => sum + item.value, 0);
    const colors = colorPalettes[selectedColorPalette];
    
    return (
      <div className="h-80 flex items-center justify-center">
        <div className="relative w-64 h-64">
          {filteredData.map((item, index) => {
            const percentage = (item.value / total) * 100;
            const angle = (index / filteredData.length) * 360;
            return (
              <div
                key={item.id}
                className="absolute inset-0 rounded-full"
                style={{
                  background: `conic-gradient(${colors[index % colors.length]} ${angle}deg, transparent ${angle}deg)`
                }}
              />
            );
          })}
        </div>
      </div>
    );
  };

  const renderAreaChart = () => {
    const maxValue = Math.max(...filteredData.map(item => item.value));
    const colors = colorPalettes[selectedColorPalette];
    
    return (
      <div className="h-80 p-6 relative">
        <svg className="w-full h-full">
          <path
            fill={colors[0]}
            fillOpacity="0.3"
            stroke={colors[0]}
            strokeWidth="2"
            d={`M 0,${280 - (filteredData[0].value / maxValue) * 280} ${filteredData.map((item, index) => 
              `L ${(index / (filteredData.length - 1)) * 800},${280 - (item.value / maxValue) * 280}`
            ).join(' ')} L 800,280 L 0,280 Z`}
          />
        </svg>
      </div>
    );
  };

  const renderScatterChart = () => {
    const maxValue = Math.max(...filteredData.map(item => item.value));
    const colors = colorPalettes[selectedColorPalette];
    
    return (
      <div className="h-80 p-6 relative">
        <svg className="w-full h-full">
          {filteredData.map((item, index) => (
            <circle
              key={item.id}
              cx={(index / (filteredData.length - 1)) * 800}
              cy={280 - (item.value / maxValue) * 280}
              r="8"
              fill={colors[index % colors.length]}
              className="hover:r-12 transition-all duration-200"
            />
          ))}
        </svg>
      </div>
    );
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
      >
        <BarChart3 className="w-6 h-6" />
      </button>
    );
  }

  return (
    <div className={`fixed bottom-4 right-4 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 transition-all duration-300 ${
      isMinimized ? 'w-80 h-16' : isFullscreen ? 'w-screen h-screen' : 'w-96 h-96'
    }`}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Data Visualization</h3>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="p-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
          >
            {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="p-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
          >
            <Maximize2 className="w-4 h-4" />
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 text-gray-500 hover:text-red-500 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {!isMinimized && (
        <div className="p-4">
          {/* Controls */}
          <div className="flex items-center gap-4 mb-4">
            <select
              value={selectedChartType}
              onChange={(e) => setSelectedChartType(e.target.value)}
              className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            >
              <option value="bar">Bar Chart</option>
              <option value="line">Line Chart</option>
              <option value="pie">Pie Chart</option>
              <option value="area">Area Chart</option>
              <option value="scatter">Scatter Plot</option>
            </select>

            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>

            <button
              onClick={refreshData}
              disabled={isRefreshing}
              className="p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors disabled:opacity-50"
            >
              <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
            </button>
          </div>

          {/* Chart */}
          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
            {renderChart()}
          </div>
        </div>
      )}
    </div>
  );
}
