import React, { useState, useRef, useEffect } from 'react';
import { BarChart3, RefreshCw, X, Maximize2, Minimize2, Download, Settings } from 'lucide-react';

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
    const containerRef = useRef(null);
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
        // // // console.log(`Downloading chart as ${format}`);
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
        return (<div className="h-80 flex items-end justify-center gap-4 p-6">
        {filteredData.map((item, index) => (<div key={item.id} className="flex flex-col items-center">
            <div className="w-16 bg-gradient-to-t from-zion-cyan to-zion-purple rounded-t-lg transition-all duration-500 hover:scale-110 cursor-pointer" style={{
                    height: `${(item.value / maxValue) * 280}px`,
                    backgroundColor: colors[index % colors.length]
                }} title={`${item.name}: ${item.value.toLocaleString()}`}/>
            <div className="mt-2 text-center">
              <div className="text-xs font-medium text-gray-900">{item.name}</div>
              <div className="text-xs text-gray-600">{item.value.toLocaleString()}</div>
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
              `${(index / (filteredData.length - 1)) * 800},${300 - (item.value / maxValue) * 250}`
            ).join(' ')}
          />
          {filteredData.map((item, index) => (
            <circle
              key={item.id}
              cx={(index / (filteredData.length - 1)) * 800}
              cy={300 - (item.value / maxValue) * 250}
              r="4"
              fill={colors[0]}
            />
          ))}
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
          <svg className="w-full h-full" viewBox="0 0 100 100">
            {filteredData.map((item, index) => {
              const percentage = (item.value / total) * 100;
              const startAngle = filteredData.slice(0, index).reduce((sum, d) => sum + (d.value / total) * 360, 0);
              const endAngle = startAngle + (item.value / total) * 360;
              
              const x1 = 50 + 40 * Math.cos(startAngle * Math.PI / 180);
              const y1 = 50 + 40 * Math.sin(startAngle * Math.PI / 180);
              const x2 = 50 + 40 * Math.cos(endAngle * Math.PI / 180);
              const y2 = 50 + 40 * Math.sin(endAngle * Math.PI / 180);
              
              const largeArcFlag = endAngle - startAngle > 180 ? 1 : 0;
              
              return (
                <path
                  key={item.id}
                  d={`M 50 50 L ${x1} ${y1} A 40 40 0 ${largeArcFlag} 1 ${x2} ${y2} Z`}
                  fill={colors[index % colors.length]}
                />
              );
            })}
          </svg>
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
          <defs>
            <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={colors[0]} stopOpacity="0.8" />
              <stop offset="100%" stopColor={colors[0]} stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <polygon
            fill="url(#areaGradient)"
            points={`0,300 ${filteredData.map((item, index) => 
              `${(index / (filteredData.length - 1)) * 800},${300 - (item.value / maxValue) * 250}`
            ).join(' ')} 800,300`}
          />
          <polyline
            fill="none"
            stroke={colors[0]}
            strokeWidth="3"
            points={filteredData.map((item, index) => 
              `${(index / (filteredData.length - 1)) * 800},${300 - (item.value / maxValue) * 250}`
            ).join(' ')}
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
              cy={300 - (item.value / maxValue) * 250}
              r="8"
              fill={colors[index % colors.length]}
              opacity="0.7"
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
        className="fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50"
        title="Open Data Visualization"
      >
        <BarChart3 className="w-6 h-6" />
      </button>
    );
  }

  if (isMinimized) {
    return (
      <div className="fixed bottom-4 right-4 bg-white border border-gray-200 rounded-lg shadow-xl z-50">
        <div className="flex items-center gap-2 p-3">
          <BarChart3 className="w-5 h-5 text-blue-600" />
          <span className="text-sm font-medium text-gray-900">Data Visualization</span>
          <button
            onClick={() => setIsMinimized(false)}
            className="ml-auto p-1 hover:bg-gray-200 rounded"
          >
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`fixed bottom-4 right-4 bg-white border border-gray-200 rounded-lg shadow-xl z-50 transition-all duration-300 ${
      isMinimized ? 'w-64 h-12' : isFullscreen ? 'w-screen h-screen bottom-0 right-0' : 'w-[1200px] h-[800px]'
    }`}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg">
        <div className="flex items-center gap-3">
          <BarChart3 className="w-6 h-6" />
          <div>
            <h2 className="text-lg font-bold">Advanced Data Visualization</h2>
            <p className="text-sm opacity-90">Interactive Charts & Analytics</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsMinimized(true)}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <Minimize2 className="w-4 h-4" />
          </button>
          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Controls */}
      <div className="p-4 border-b border-gray-200 bg-gray-50">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <select
              value={selectedChartType}
              onChange={(e) => setSelectedChartType(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
            
            <select
              value={selectedColorPalette}
              onChange={(e) => setSelectedColorPalette(Number(e.target.value))}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {colorPalettes.map((palette, index) => (
                <option key={index} value={index}>
                  Palette {index + 1}
                </option>
              ))}
            </select>
          </div>
          
          <div className="flex items-center gap-2">
            <button
              onClick={refreshData}
              disabled={isRefreshing}
              className="px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 flex items-center gap-2"
            >
              <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
              Refresh
            </button>
            
            <button
              onClick={() => downloadChart('png')}
              className="px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Export
            </button>
          </div>
        </div>
      </div>

      <div className="flex h-full">
        {/* Sidebar Controls */}
        <div className="w-80 border-r border-zion-slate-light p-4 overflow-y-auto">
          <div className="space-y-6">
            {/* Chart Type Selection */}
            <div>
              <h3 className="text-sm font-medium text-zion-slate mb-3">Chart Type</h3>
              <div className="space-y-2">
                {chartTypes.map((type) => (<button key={type.id} onClick={() => setSelectedChartType(type.id)} className={`w-full p-3 text-left rounded-lg border transition-all duration-200 ${selectedChartType === type.id
                ? 'border-zion-cyan bg-zion-cyan/10 text-zion-cyan'
                : 'border-zion-slate-light hover:border-zion-cyan hover:text-zion-cyan'}`}>
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{type.icon}</span>
                      <div>
                        <div className="font-medium">{type.name}</div>
                        <div className="text-xs text-zion-slate-light">{type.description}</div>
                      </div>
                    </div>
                  </button>))}
              </div>
            </div>

            {/* Data Filtering */}
            <div>
              <h3 className="text-sm font-medium text-zion-slate mb-3">Data Filter</h3>
              <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="w-full px-3 py-2 border border-zion-slate-light rounded-lg bg-white dark:bg-zion-slate text-zion-slate focus:ring-2 focus:ring-zion-cyan focus:border-transparent">
                {categories.map(category => (<option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </option>))}
              </select>
            </div>

            {/* Color Palette */}
            <div>
              <h3 className="text-sm font-medium text-zion-slate mb-3">Color Palette</h3>
              <div className="grid grid-cols-2 gap-2">
                {colorPalettes.map((palette, index) => (<button key={index} onClick={() => setSelectedColorPalette(index)} className={`p-2 rounded-lg border transition-all duration-200 ${selectedColorPalette === index
                ? 'border-zion-cyan bg-zion-cyan/10'
                : 'border-zion-slate-light hover:border-zion-cyan'}`}>
                    <div className="flex gap-1">
                      {palette.map((color, colorIndex) => (<div key={colorIndex} className="w-4 h-4 rounded" style={{ backgroundColor: color }}/>))}
                    </div>
                  </button>))}
              </div>
            </div>

            {/* Chart Configuration */}
            <div>
              <h3 className="text-sm font-medium text-zion-slate mb-3">Chart Settings</h3>
              <div className="space-y-3">
                <label className="flex items-center gap-2">
                  <input type="checkbox" checked={chartConfig.showLegend} onChange={(e) => setChartConfig(prev => ({ ...prev, showLegend: e.target.checked }))} className="rounded border-zion-slate-light text-zion-cyan focus:ring-zion-cyan"/>
                  <span className="text-sm text-zion-slate">Show Legend</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" checked={chartConfig.showGrid} onChange={(e) => setChartConfig(prev => ({ ...prev, showGrid: e.target.checked }))} className="rounded border-zion-slate-light text-zion-cyan focus:ring-zion-cyan"/>
                  <span className="text-sm text-zion-slate">Show Grid</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" checked={chartConfig.animate} onChange={(e) => setChartConfig(prev => ({ ...prev, animate: e.target.checked }))} className="rounded border-zion-slate-light text-zion-cyan focus:ring-zion-cyan"/>
                  <span className="text-sm text-zion-slate">Animations</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" checked={autoRefresh} onChange={(e) => setAutoRefresh(e.target.checked)} className="rounded border-zion-slate-light text-zion-cyan focus:ring-zion-cyan"/>
                  <span className="text-sm text-zion-slate">Auto Refresh</span>
                </label>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3">
              <button onClick={refreshData} disabled={isRefreshing} className="w-full px-4 py-2 bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                {isRefreshing ? (<React.Fragment>
                    <RefreshCw className="w-4 h-4 animate-spin"/>
                    Refreshing...
                  </React.Fragment>) : (<React.Fragment>
                    <RefreshCw className="w-4 h-4"/>
                    Refresh Data
                  </React.Fragment>)}
              </button>
              
              <div className="grid grid-cols-3 gap-2">
                <button onClick={() => downloadChart('png')} className="px-3 py-2 bg-zion-emerald text-white rounded-lg hover:bg-zion-emerald-light transition-colors text-xs">
                  PNG
                </button>
                <button onClick={() => downloadChart('svg')} className="px-3 py-2 bg-zion-purple text-white rounded-lg hover:bg-zion-purple-light transition-colors text-xs">
                  SVG
                </button>
                <button onClick={() => downloadChart('csv')} className="px-3 py-2 bg-zion-gold text-white rounded-lg hover:bg-zion-gold-light transition-colors text-xs">
                  CSV
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Chart Display */}
        <div className="flex-1 p-6">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-zion-slate mb-2">
              {chartTypes.find(t => t.id === selectedChartType)?.name}
            </h2>
            <p className="text-zion-slate-light">
              {chartTypes.find(t => t.id === selectedChartType)?.description}
            </p>
          </div>
          
          <div className="bg-white dark:bg-zion-slate border border-zion-slate-light rounded-lg">
            {renderChart()}
          </div>
          
          {/* Data Summary */}
          <div className="mt-6 grid grid-cols-3 gap-4">
            <div className="bg-zion-cyan/10 p-4 rounded-lg border border-zion-cyan/20">
              <div className="text-2xl font-bold text-zion-cyan">
                {filteredData.length}
              </div>
              <div className="text-sm text-zion-slate-light">Data Points</div>
            </div>
            <div className="bg-zion-emerald/10 p-4 rounded-lg border border-zion-emerald/20">
              <div className="text-2xl font-bold text-zion-emerald">
                {Math.max(...filteredData.map(item => item.value)).toLocaleString()}
              </div>
              <div className="text-sm text-zion-slate-light">Max Value</div>
            </div>
            <div className="bg-zion-purple/10 p-4 rounded-lg border border-zion-purple/20">
              <div className="text-2xl font-bold text-zion-purple">
                {(filteredData.reduce((sum, item) => sum + item.value, 0) / filteredData.length).toLocaleString()}
              </div>
              <div className="text-sm text-zion-slate-light">Average</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
