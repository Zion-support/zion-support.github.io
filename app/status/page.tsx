import { CheckCircle, XCircle, AlertTriangle, Clock, RefreshCw, Globe, Server, Database, Cloud, Shield, Zap, Activity, TrendingUp, Users, Eye, BarChart } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const StatusPage: React.FC = () => {
import SEOOptimizer from '../components/SEOOptimizer'
export default function StatusPage() {
const [lastUpdated, setLastUpdated] = useState(new Date())
const [isRefreshing, setIsRefreshing] = useState(false)
const refreshStatus = async () => {

    setIsRefreshing(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    setLastUpdated(new Date())
    setIsRefreshing(false)
  }
  }
const services = [
    {
    name: 'API Services',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '45ms',
      lastIncident: '2024-01-15',
      description: 'Core API endpoints and authentication'
  },
    {
    name: 'AI Services',
      status: 'operational',
      uptime: '99.8%',
      responseTime: '120ms',
      lastIncident: '2024-01-10',
      description: 'Machine learning and AI processing'
  },
    {
    name: 'Cloud Infrastructure',
      status: 'operational',
      uptime: '99.95%',
      responseTime: '25ms',
      lastIncident: '2024-01-05',
      description: 'Cloud hosting and storage services'
  },
    {
    name: 'Database',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '15ms',
      lastIncident: '2024-01-12',
      description: 'Primary and backup databases'
  },
    {
    name: 'CDN',
      status: 'operational',
      uptime: '99.99%',
      responseTime: '8ms',
      lastIncident: '2024-01-08',
      description: 'Content delivery network'
  },
    {
    name: 'Monitoring',
      status: 'operational',
      uptime: '100%',
      responseTime: '5ms',
      lastIncident: 'Never',
      description: 'System monitoring and alerts'
  }
    }
  ]
const incidents = [
    {
    id: 1,
      title: 'API Response Time Degradation',
      status: 'resolved',
      severity: 'minor',
      startTime: '2024-01-15T10:30:00Z',
      endTime: '2024-01-15T11:45:00Z',
      description: 'Some API endpoints experienced increased response times due to high traffic load.',
      affectedServices: ['API Services', 'AI Services']
  },
    {
    id: 2,
      title: 'Database Connection Issues',
      status: 'resolved',
      severity: 'major',
      startTime: '2024-01-12T14:20:00Z',
      endTime: '2024-01-12T16:30:00Z',
      description: 'Intermittent database connection issues affecting some user operations.',
      affectedServices: ['Database', 'API Services']
  }
    }
  ]
const getStatusIcon = (;
    switch (status) {
    case 'operational':;

        return <CheckCircle>
      case 'degraded':;
        return <AlertTriangle>
      case 'outage':;
        return <XCircle>

      default:;) => {
  return (
    <>
      <Helmet>
        <title>System Status - Zion Tech Group</title>
        <meta name="description" content="System Status services by Zion Tech Group. Advanced AI and IT solutions for your business." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              System Status
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Coming soon - Advanced System Status solutions by Zion Tech Group
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default StatusPage
  }
        return <Clock>}
    }
  }
const getStatusColor = (;
    switch (status) {
    case 'operational':;
        return 'text-green-400';
      case 'degraded':;
        return 'text-yellow-400';
      case 'outage':;
        return 'text-red-400';
      default:;) => {
  return (
    $3
  )
  }
        return 'text-gray-400';}
    }
  }
const getSeverityColor = (;
    switch (severity) {
    case 'critical':;
        return 'bg-red-500/20 text-red-400 border-red-500/50';
      case 'major':;
        return 'bg-orange-500/20 text-orange-400 border-orange-500/50';
      case 'minor':;
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50';
      default:;) => {
  return (
    $3
  )
  }
        return 'bg-gray-500/20 text-gray-400 border-gray-500/50';}
    }
  }
const overallStatus = services.every(service => service.status === 'operational');
    ? 'operational';
    : services.some(service => service.status === 'outage')
      ? 'outage'
      : 'degraded'
return (
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Real-time status of all our services. We're committed to providing reliable,
            high-performance AI and IT solutions.</p>
          <div className="flex items-center justify-center gap-4 mb-8"></div>
            <div className="flex items-center gap-2"></div>

              {getStatusIcon(overallStatus)}
              <span>
                {
    overallStatus === 'operational' ? 'All Systems Operational' :
  }
                 overallStatus === 'degraded' ? 'Degraded Performance' : 'Service Outage'}
              </span>
            </div>
            <button>
              <RefreshCw>
              Refresh
            </button>
          </div>
          <p>
            Last updated: {lastUpdated.toLocaleString()}
          </p>
        </div>
      </section>

      {/* Services Status */}
      <section className="py-16 px-4"></section>
        <div className="max-w-7xl mx-auto"></div>
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Service Status</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"></div>
            {
    services.map((service, index) => (
  }
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300"></div>
                <div className="flex items-center justify-between mb-4"></div>
                  <div className="flex items-center gap-3"></div>
                    {getStatusIcon(service.status)}
                    <h3 className="text-lg font-semibold text-white">{service.name}</h3>
                  </div>
                  <span>
                    {service.status}

                  </span>
                </div>
                <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                <div className="space-y-2 text-sm"></div>
                  <div className="flex justify-between"></div>
                    <span className="text-gray-400">Uptime:</span>
                    <span className="text-white">{service.uptime}</span>
                  </div>
                  <div className="flex justify-between"></div>
                    <span className="text-gray-400">Response Time:</span>
                    <span className="text-white">{service.responseTime}</span>
                  </div>
                  <div className="flex justify-between"></div>
                    <span className="text-gray-400">Last Incident:</span>
                    <span className="text-white">{service.lastIncident}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Incidents */}
      <section className="py-16 px-4"></section>
        <div className="max-w-7xl mx-auto"></div>
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Recent Incidents</h2>
          <div className="space-y-6"></div>
            {
    incidents.map((incident) => (
  }
              <div key={incident.id} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"></div>
                <div className="flex items-start justify-between mb-4"></div>
                  <div />
                    <h3 className="text-xl font-semibold text-white mb-2">{incident.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-400"></div>
                      <span>Started: {new Date(incident.startTime).toLocaleString()}</span>
                      <span>Ended: {new Date(incident.endTime).toLocaleString()}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2"></div>
                    <span>
                      {incident.severity}
                    </span>
                    <span>
                      {incident.status}

                    </span>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{incident.description}</p>
                <div />
                  <span className="text-gray-400 text-sm">Affected Services: </span>
                  <span className="text-white text-sm">{incident.affectedServices.join(', ')}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Performance Metrics */}
      <section className="py-16 px-4"></section>
        <div className="max-w-7xl mx-auto"></div>
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Performance Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"></div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center"></div>
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center mx-auto mb-4"></div>
                <TrendingUp>
              </div>
              <div className="text-3xl font-bold text-white mb-2">99.9%</div>
              <div className="text-gray-400">Overall Uptime</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center"></div>
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4"></div>
                <Zap>
              </div>
              <div className="text-3xl font-bold text-white mb-2">45ms</div>
              <div className="text-gray-400">Avg Response Time</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center"></div>
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4"></div>
                <Users>
              </div>
              <div className="text-3xl font-bold text-white mb-2">50K+</div>
              <div className="text-gray-400">Active Users</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center"></div>
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mx-auto mb-4"></div>
                <Activity>
              </div>
              <div className="text-3xl font-bold text-white mb-2">1.2M</div>
              <div className="text-gray-400">Requests Today</div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-blue-700"></section>
        <div className="max-w-4xl mx-auto text-center"></div>
          <h2 className="text-4xl font-bold text-white mb-4">Need More Information?</h2>
          <p>
            Subscribe to status updates or contact our support team for more details.
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>
            <button className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-teal-600 hover:to-blue-700 transition-all duration-300">Subscribe to Updates
            </button>
            <button className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-teal-600 hover:to-blue-700 transition-all duration-300">Contact Support
            </button>
          </div>
        </div>
      </section>
      <Footer>
    </div>
  ),
}
