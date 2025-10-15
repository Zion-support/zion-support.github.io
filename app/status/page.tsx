'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const StatusPage: React.FC = () => {
  const [lastUpdated, setLastUpdated] = useState(new Date());

const [isRefreshing, setIsRefreshing] = useState(false);

const services = [
    {
      name: 'API Services',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '45ms',
      description: 'Core API endpoints and authentication',
      icon: <Server className="w-6 h-6" />
    },
    {
      name: 'AI Services',
      status: 'operational',
      uptime: '99.8%',
      responseTime: '120ms',
      description: 'AI content generation and analytics',
      icon: <Activity className="w-6 h-6" />
    },
    {
      name: 'Database',
      status: 'operational',
      uptime: '99.95%',
      responseTime: '25ms',
      description: 'Primary and replica databases',
      icon: <Database className="w-6 h-6" />
    },
    {
      name: 'CDN',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '15ms',
      description: 'Content delivery network',
      icon: <Globe className="w-6 h-6" />
    },
    {
      name: 'Authentication',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '30ms',
      description: 'User authentication and authorization',
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      name: 'File Storage',
      status: 'degraded',
      uptime: '98.5%',
      responseTime: '200ms',
      description: 'File upload and storage services',
      icon: <AlertTriangle className="w-6 h-6" />
    }
  ];

const incidents = [
    {
      id: 1,
      title: 'File Storage Performance Issues',
      status: 'investigating',
      severity: 'minor',
      description: 'We are experiencing slower than usual response times for file uploads. Our team is investigating the issue.',
      startTime: '2024-01-20T14:30:00Z',
      affectedServices: ['File Storage'],
      updates: [
        {
          time: '2024-01-20T15:00:00Z',
          message: 'We have identified the issue and are working on a fix. Expected resolution within 2 hours.'
        },
        {
          time: '2024-01-20T14:30:00Z',
          message: 'We are investigating reports of slow file upload performance.']
        }]]
    },
    {
      id: 2,
      title: 'Scheduled Maintenance - Database Optimization',
      status: 'resolved',
      severity: 'maintenance',
      description: 'Scheduled maintenance to optimize database performance and add new indexes.',
      startTime: '2024-01-19T02:00:00Z',
      endTime: '2024-01-19T04:00:00Z',
      affectedServices: ['Database', 'API Services'],
      updates: [
        {
          time: '2024-01-19T04:00:00Z',
          message: 'Maintenance completed successfully. All services are operational.'
        },
        {
          time: '2024-01-19T02:00:00Z',
          message: 'Scheduled maintenance started. Database services may be temporarily unavailable.']
        }]]
    }
  ];

const overallStatus = services.every(service => service.status === 'operational') ? 'operational' : 'degraded';

const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational': return 'text-green-400';
      case 'degraded': return 'text-yellow-400';
      case 'outage': return 'text-red-400';
      case 'maintenance': return 'text-blue-400';
      default: return 'text-gray-400';
    }
  };

const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational': return <CheckCircle className="w-5 h-5" />;
      case 'degraded': return <AlertTriangle className="w-5 h-5" />;
      case 'outage': return <XCircle className="w-5 h-5" />;
      case 'maintenance': return <Clock className="w-5 h-5" />;
      default: return <Clock className="w-5 h-5" />;
    }
  };

const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'major': return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      case 'minor': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'maintenance': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

const refreshStatus = async () => {
    setIsRefreshing(true);
    // Simulate API call,
    await new Promise(resolve => setTimeout(resolve, 1000));
    setLastUpdated(new Date());
    setIsRefreshing(false);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setLastUpdated(new Date());
    }, 60000); // Update every minute,
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <Helmet>
        <title>Status - Zion Tech Group</title>
        <meta name="description" content="Zion Tech Group - Status page" />
      </Helmet>
      
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20">
          
        <div className="container mx-auto px-4">
            
        <div className="text-center max-w-4xl mx-auto">
              
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                System <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Status</span>
              </h1>
              
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Real-time status of all Zion Tech Group services and systems.
              </p>
              
        <div className="flex items-center justify-center space-x-4 mb-8">
                
        <div className="flex items-center space-x-2">
                  {getStatusIcon(overallStatus)}
                  <span className={`text-lg font-semibold ${getStatusColor(overallStatus)}`}>
                    {overallStatus === 'operational' ? 'All Systems Operational' : 'Some Services Degraded'}
                  </span>
                </div>
                <button
    const onClick = {refreshStatus} disabled={isRefreshing}
                  className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors disabled:opacity-50"
                >
                  <RefreshCw className={`w-5 h-5 ${isRefreshing ? 'animate-spin' : ''}`} />
                  <span>Refresh</span>
                </button>
              </div>
              
        <div className="text-sm text-gray-400">
                Last updated: {lastUpdated.toLocaleString()}
              </div>
            </div>
          </div>
        </section>
        {/* Services Status */}
        <section className="py-16 px-4">
          
        <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Service Status</h2>
            
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
                  
        <div className="flex items-center justify-between mb-4">
                    
        <div className="flex items-center space-x-3">
                      
        <div className="text-cyan-400">{service.icon}</div>
                      <h3 className="text-lg font-bold text-white">{service.name}</h3>
                    </div>
                    
        <div className="flex items-center space-x-2">
                      {getStatusIcon(service.status)}
                      <span className={`text-sm font-semibold ${getStatusColor(service.status)}`}>
                        {service.status}
                      </span>
                    </div>
                  </div>
                  
          <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                  
        <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-400">Uptime:</span>
                      
        <div className="text-cyan-400 font-semibold">{service.uptime}</div>
                    </div>
                    <div>
                      <span className="text-gray-400">Response Time:</span>
                      
        <div className="text-cyan-400 font-semibold">{service.responseTime}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Incidents */}
        <section className="py-16 px-4 bg-white/5 backdrop-blur-sm">
          
        <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Recent Incidents</h2>
            {incidents.length === 0 ? (
              
        <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No Active Incidents</h3>
                
          <p className="text-gray-300">All systems are operating normally.</p>
              </div>
            ) : (
              
        <div className="space-y-6">
                {incidents.map((incident) => (
                  <div key={incident.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/20">
                    
        <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">{incident.title}</h3>
                        
        <div className="flex items-center space-x-4 text-sm text-gray-400">
                          <span>Started: {new Date(incident.startTime).toLocaleString()}</span>
                          {incident.endTime && (
                            <span>Resolved: {new Date(incident.endTime).toLocaleString()}</span>
                          )}
                        </div>
                      </div>
                      
        <div className="flex items-center space-x-2">
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold border ${getSeverityColor(incident.severity)}`}>
                          {incident.severity}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(incident.status)}`}>
                          {incident.status}
                        </span>
                      </div>
                    </div>
                    
          <p className="text-gray-300 mb-4">{incident.description}</p>
                    
        <div className="mb-4">
                      <h4 className="text-sm font-semibold text-cyan-400 mb-2">Affected Services:</h4>
                      
        <div className="flex flex-wrap gap-2">
                        {incident.affectedServices.map((service, index) => (
                          <span key={index} className="px-2 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded">
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-cyan-400 mb-3">Updates:</h4>
                      
        <div className="space-y-3">
                        {incident.updates.map((update, index) => (
                          <div key={index} className="border-l-2 border-cyan-500/30 pl-4">
                            
        <div className="text-sm text-gray-400 mb-1">
                              {new Date(update.time).toLocaleString()}
                            </div>
                            
          <p className="text-gray-300">{update.message}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
        {/* Metrics */}
        <section className="py-16 px-4">
          
        <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Performance Metrics</h2>
            
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
        <div className="text-center">
                
        <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
                
        <div className="text-gray-300">Overall Uptime</div>
                
        <div className="text-sm text-gray-400 mt-1">Last 30 days</div>
              </div>
              
        <div className="text-center">
                
        <div className="text-4xl font-bold text-cyan-400 mb-2">45ms</div>
                
        <div className="text-gray-300">Average Response Time</div>
                
        <div className="text-sm text-gray-400 mt-1">Last 24 hours</div>
              </div>
              
        <div className="text-center">
                
        <div className="text-4xl font-bold text-cyan-400 mb-2">0</div>
                
        <div className="text-gray-300">Active Incidents</div>
                
        <div className="text-sm text-gray-400 mt-1">Current status</div>
              </div>
            </div>
          </div>
        </section>
        {/* Subscribe to Updates */}
        <section className="py-16 px-4 bg-gradient-to-r from-cyan-600/20 to-purple-600/20">
          
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Stay Updated</h2>
            
          <p className="text-xl text-gray-300 mb-8">
              Subscribe to status updates and get notified about incidents and maintenance windows.
            </p>
            
        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
    type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default StatusPage;