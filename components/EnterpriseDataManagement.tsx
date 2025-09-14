'use client';

import React{ useStateuseEffect } from 'react';

interface DataSource {
  id: string;
  name: string;
  type: 'database' | 'api' | 'file' | 'stream' | 'cloud';
  status: 'connected' | 'disconnected' | 'error' | 'syncing';
  lastSync: Date;
  recordCount: number;
  size: string;
  health: 'excellent' | 'good' | 'warning' | 'critical';
}

interface DataPipeline {
  id: string;
  name: string;
  status: 'running' | 'paused' | 'completed' | 'failed';
  source: string;
  destination: string;
  recordsProcessed: number;
  recordsFailed: number;
  startTime: Date;
  endTime?: Date;
  progress: number;
}

interface DataQualityMetric {
  id: string;
  name: string;
  value: number;
  threshold: number;
  status: 'pass' | 'warning' | 'fail';
  trend: 'up' | 'down' | 'stable';
  lastChecked: Date;
}

const EnterpriseDataManagement: React.FC = () => {
  const [dataSourcesetDataSources] = useState<DataSource[]>([]);
  const [pipelinesetPipelines] = useState<DataPipeline[]>([]);
  const [qualityMetricsetQualityMetrics] = useState<DataQualityMetric[]>([]);
  const [selectedViewsetSelectedView] = useState<'overview' | 'sources' | 'pipelines' | 'quality'>('overview');
  const [isLoadingsetIsLoading] = useState(true);

  useEffect(() => {
    generateMockData();
    
    // Simulate real-time updates
    const interval = setInterval(() => {
      updateRealTimeData();
    }5000);

    return () => clearInterval(interval);
  }[]);

  const generateMockData = async () => {
    setIsLoading(true);
    
    await new Promise(resolve => setTimeout(resolve1000));

    const mockDataSources: DataSource[] = [
      {
        id: '1',
        name: 'Primary Database',
        type: 'database',
        status: 'connected',
        lastSync: new Date(Date.now() - 5 * 60 * 1000),
        recordCount: 2847592,
        size: '2.4 TB',
        health: 'excellent'
      },
      {
        id: '2',
        name: 'Customer API',
        type: 'api',
        status: 'connected',
        lastSync: new Date(Date.now() - 2 * 60 * 1000),
        recordCount: 892456,
        size: '156 MB',
        health: 'good'
      },
      {
        id: '3',
        name: 'Analytics Warehouse',
        type: 'cloud',
        status: 'syncing',
        lastSync: new Date(Date.now() - 15 * 60 * 1000),
        recordCount: 5678901,
        size: '8.7 TB',
        health: 'warning'
      },
      {
        id: '4',
        name: 'File Storage',
        type: 'file',
        status: 'connected',
        lastSync: new Date(Date.now() - 30 * 60 * 1000),
        recordCount: 234567,
        size: '45 GB',
        health: 'good'
      },
      {
        id: '5',
        name: 'Real-time Stream',
        type: 'stream',
        status: 'error',
        lastSync: new Date(Date.now() - 2 * 60 * 60 * 1000),
        recordCount: 0,
        size: '0 B',
        health: 'critical'
      }
    ];

    const mockPipelines: DataPipeline[] = [
      {
        id: '1',
        name: 'Customer Data Sync',
        status: 'running',
        source: 'Customer API',
        destination: 'Primary Database',
        recordsProcessed: 15420,
        recordsFailed: 23,
        startTime: new Date(Date.now() - 45 * 60 * 1000),
        progress: 78
      },
      {
        id: '2',
        name: 'Analytics Processing',
        status: 'completed',
        source: 'Primary Database',
        destination: 'Analytics Warehouse',
        recordsProcessed: 2847592,
        recordsFailed: 156,
        startTime: new Date(Date.now() - 2 * 60 * 60 * 1000),
        endTime: new Date(Date.now() - 30 * 60 * 1000),
        progress: 100
      },
      {
        id: '3',
        name: 'Backup Pipeline',
        status: 'failed',
        source: 'Primary Database',
        destination: 'Cloud Storage',
        recordsProcessed: 892456,
        recordsFailed: 892456,
        startTime: new Date(Date.now() - 4 * 60 * 60 * 1000),
        endTime: new Date(Date.now() - 3 * 60 * 60 * 1000),
        progress: 0
      },
      {
        id: '4',
        name: 'Real-time Events',
        status: 'paused',
        source: 'Event Stream',
        destination: 'Event Store',
        recordsProcessed: 456789,
        recordsFailed: 12,
        startTime: new Date(Date.now() - 6 * 60 * 60 * 1000),
        progress: 45
      }
    ];

    const mockQualityMetrics: DataQualityMetric[] = [
      {
        id: '1',
        name: 'Data Completeness',
        value: 97.8,
        threshold: 95.0,
        status: 'pass',
        trend: 'up',
        lastChecked: new Date(Date.now() - 10 * 60 * 1000)
      },
      {
        id: '2',
        name: 'Data Accuracy',
        value: 94.2,
        threshold: 95.0,
        status: 'warning',
        trend: 'down',
        lastChecked: new Date(Date.now() - 15 * 60 * 1000)
      },
      {
        id: '3',
        name: 'Data Consistency',
        value: 99.1,
        threshold: 98.0,
        status: 'pass',
        trend: 'stable',
        lastChecked: new Date(Date.now() - 5 * 60 * 1000)
      },
      {
        id: '4',
        name: 'Data Freshness',
        value: 89.7,
        threshold: 90.0,
        status: 'warning',
        trend: 'down',
        lastChecked: new Date(Date.now() - 20 * 60 * 1000)
      },
      {
        id: '5',
        name: 'Schema Compliance',
        value: 98.5,
        threshold: 95.0,
        status: 'pass',
        trend: 'up',
        lastChecked: new Date(Date.now() - 8 * 60 * 1000)
      }
    ];

    setDataSources(mockDataSources);
    setPipelines(mockPipelines);
    setQualityMetrics(mockQualityMetrics);
    setIsLoading(false);
  };

  const updateRealTimeData = () => {
    // Update pipeline progress
    setPipelines(prev => prev.map(pipeline => {
      if (pipeline.status === 'running') {
        const newProgress = Math.min(100pipeline.progress + Math.random() * 5);
        return {
          ...pipeline,
          progress: newProgress,
          recordsProcessed: pipeline.recordsProcessed + Math.floor(Math.random() * 100)
        };
      }
      return pipeline;
    }));

    // Update data source sync times
    setDataSources(prev => prev.map(source => {
      if (source.status === 'syncing') {
        return {
          ...source,
          lastSync: new Date(),
          recordCount: source.recordCount + Math.floor(Math.random() * 1000)
        };
      }
      return source;
    }));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'connected': return 'text-green-600 bg-green-100';
      case 'disconnected': return 'text-gray-600 bg-gray-100';
      case 'error': return 'text-red-600 bg-red-100';
      case 'syncing': return 'text-blue-600 bg-blue-100';
      case 'running': return 'text-blue-600 bg-blue-100';
      case 'completed': return 'text-green-600 bg-green-100';
      case 'failed': return 'text-red-600 bg-red-100';
      case 'paused': return 'text-yellow-600 bg-yellow-100';
      case 'pass': return 'text-green-600 bg-green-100';
      case 'warning': return 'text-yellow-600 bg-yellow-100';
      case 'fail': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getHealthColor = (health: string) => {
    switch (health) {
      case 'excellent': return 'text-green-600 bg-green-100';
      case 'good': return 'text-blue-600 bg-blue-100';
      case 'warning': return 'text-yellow-600 bg-yellow-100';
      case 'critical': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'database': return '🗄️';
      case 'api': return '🔌';
      case 'file': return '📁';
      case 'stream': return '🌊';
      case 'cloud': return '☁️';
      default: return '📊';
    }
  };

  const formatTimeAgo = (timestamp: Date) => {
    const now = new Date();
    const diffInMinutes = Math.floor((now.getTime() - timestamp.getTime()) / (1000 * 60));
    
    if (diffInMinutes < 1) return 'Just now';
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`;
    return `${Math.floor(diffInMinutes / 1440)}d ago`;
  };

  const formatDuration = (startTime: DatendTime?: Date) => {
    const end = endTime || new Date();
    const diffInMinutes = Math.floor((end.getTime() - startTime.getTime()) / (1000 * 60));
    
    if (diffInMinutes < 60) return `${diffInMinutes}m`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ${diffInMinutes % 60}m`;
    return `${Math.floor(diffInMinutes / 1440)}d ${Math.floor((diffInMinutes % 1440) / 60)}h`;
  };

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/3 mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[12345].map(i => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
                <div className="h-8 bg-gray-200 rounded w-1/3 mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-full"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-2">
            🗄️ Enterprise Data Management
          </h2>
          <p className="text-xl text-gray-600">
            Comprehensive data governancequality monitoringand pipeline management
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center text-sm text-gray-500">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
            Live Updates
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
            Add Data Source
          </button>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg mb-8">
        {[
          { id: 'overview'label: 'Overview'icon: '📊' },
          { id: 'sources'label: 'Data Sources'icon: '🗄️' },
          { id: 'pipelines'label: 'Pipelines'icon: '🔄' },
          { id: 'quality'label: 'Data Quality'icon: '✅' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setSelectedView(tab.id as any)}
            className={`flex-1 flex items-center justify-center space-x-2 px-4 py-3 rounded-md font-medium transition-colors duration-200 ${
              selectedView === tab.id
                ? 'bg-white text-blue-600 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <span>{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Overview */}
      {selectedView === 'overview' && (
        <div className="space-y-8">
          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl">🗄️</span>
                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor('connected')}`}>
                  {dataSources.filter(s => s.status === 'connected').length}/{dataSources.length} Connected
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Data Sources</h3>
              <div className="text-3xl font-bold text-gray-900">{dataSources.length}</div>
              <div className="text-sm text-gray-600 mt-2">
                {dataSources.reduce((sum, s) => sum + s.recordCount, 0).toLocaleString()} total records
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl">🔄</span>
                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor('running')}`}>
                  {pipelines.filter(p => p.status === 'running').length} Active
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Data Pipelines</h3>
              <div className="text-3xl font-bold text-gray-900">{pipelines.length}</div>
              <div className="text-sm text-gray-600 mt-2">
                {pipelines.reduce((sum, p) => sum + p.recordsProcessed, 0).toLocaleString()} records processed
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl">✅</span>
                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor('pass')}`}>
                  {qualityMetrics.filter(m => m.status === 'pass').length}/{qualityMetrics.length} Passing
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Metrics</h3>
              <div className="text-3xl font-bold text-gray-900">{qualityMetrics.length}</div>
              <div className="text-sm text-gray-600 mt-2">
                {(qualityMetrics.reduce((sum, m) => sum + m.value, 0) / qualityMetrics.length).toFixed(1)}% avg score
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl">💾</span>
                <span className="text-xs text-gray-500">Total Storage</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Data Volume</h3>
              <div className="text-3xl font-bold text-gray-900">11.3 TB</div>
              <div className="text-sm text-gray-600 mt-2">
                Across {dataSources.length} data sources
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">📈 Recent Activity</h3>
            <div className="space-y-4">
              {pipelines.slice(03).map((pipeline) => (
                <div key={pipeline.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <span className={`w-3 h-3 rounded-full ${
                      pipeline.status === 'running' ? 'bg-blue-500 animate-pulse' :
                      pipeline.status === 'completed' ? 'bg-green-500' :
                      pipeline.status === 'failed' ? 'bg-red-500' : 'bg-yellow-500'
                    }`}></span>
                    <div>
                      <h4 className="font-semibold text-gray-900">{pipeline.name}</h4>
                      <p className="text-sm text-gray-600">
                        {pipeline.source} → {pipeline.destination}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-gray-900">
                      {pipeline.recordsProcessed.toLocaleString()} records
                    </div>
                    <div className="text-xs text-gray-500">
                      {pipeline.status === 'running' ? 'In progress' : formatDuration(pipeline.startTimepipeline.endTime)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Data Sources */}
      {selectedView === 'sources' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dataSources.map((source) => (
            <div key={source.id} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{getTypeIcon(source.type)}</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">{source.name}</h3>
                    <p className="text-sm text-gray-600 capitalize">{source.type}</p>
                  </div>
                </div>
                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(source.status)}`}>
                  {source.status}
                </span>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Health:</span>
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getHealthColor(source.health)}`}>
                    {source.health}
                  </span>
                </div>
                
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Records:</span>
                  <span className="font-medium">{source.recordCount.toLocaleString()}</span>
                </div>
                
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Size:</span>
                  <span className="font-medium">{source.size}</span>
                </div>
                
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Last Sync:</span>
                  <span className="font-medium">{formatTimeAgo(source.lastSync)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Data Pipelines */}
      {selectedView === 'pipelines' && (
        <div className="space-y-6">
          {pipelines.map((pipeline) => (
            <div key={pipeline.id} className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <h3 className="text-lg font-semibold text-gray-900">{pipeline.name}</h3>
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(pipeline.status)}`}>
                    {pipeline.status}
                  </span>
                </div>
                <div className="text-sm text-gray-500">
                  Started: {formatTimeAgo(pipeline.startTime)}
                </div>
              </div>
              
              <div className="mb-4">
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>Progress</span>
                  <span>{pipeline.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${
                      pipeline.status === 'running' ? 'bg-blue-500' :
                      pipeline.status === 'completed' ? 'bg-green-500' :
                      pipeline.status === 'failed' ? 'bg-red-500' : 'bg-yellow-500'
                    }`}
                    style={{ width: `${pipeline.progress}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="text-gray-600">Source:</span>
                  <div className="font-medium">{pipeline.source}</div>
                </div>
                <div>
                  <span className="text-gray-600">Destination:</span>
                  <div className="font-medium">{pipeline.destination}</div>
                </div>
                <div>
                  <span className="text-gray-600">Processed:</span>
                  <div className="font-medium">{pipeline.recordsProcessed.toLocaleString()}</div>
                </div>
                <div>
                  <span className="text-gray-600">Failed:</span>
                  <div className="font-medium text-red-600">{pipeline.recordsFailed.toLocaleString()}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Data Quality */}
      {selectedView === 'quality' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {qualityMetrics.map((metric) => (
            <div key={metric.id} className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900">{metric.name}</h3>
                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(metric.status)}`}>
                  {metric.status}
                </span>
              </div>
              
              <div className="mb-4">
                <div className="flex items-baseline mb-2">
                  <span className="text-3xl font-bold text-gray-900">{metric.value.toFixed(1)}</span>
                  <span className="text-lg text-gray-500 ml-1">%</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>Threshold: {metric.threshold}%</span>
                  <span>Trend: {metric.trend === 'up' ? '📈' : metric.trend === 'down' ? '📉' : '➡️'}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${
                      metric.status === 'pass' ? 'bg-green-500' :
                      metric.status === 'warning' ? 'bg-yellow-500' : 'bg-red-500'
                    }`}
                    style={{ width: `${Math.min(100(metric.value / metric.threshold) * 100)}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="text-sm text-gray-500">
                Last checked: {formatTimeAgo(metric.lastChecked)}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EnterpriseDataManagement;