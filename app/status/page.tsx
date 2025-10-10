'use client',
import React, { useState, useEffect } from 'react',
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import {
  CheckCircle, 
  AlertCircle, 
  XCircle, 
  Clock, 
  RefreshCw, 
  Server, 
  Database, 
  Cloud, 
  Shield,
  Activity,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
} from 'lucide-react',


const refreshStatus = () => {
    setIsRefreshing(true),
    setTimeout(() => {
      setLastUpdated(new Date()),
      setIsRefreshing(false),
    }, 1000),
  },

    }
  },

const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational':
        return 'text-green-400 bg-green-500/10',
      case 'degraded':
        return 'text-yellow-400 bg-yellow-500/10',
      case 'outage':
        return 'text-red-400 bg-red-500/10',
      default:,
        return 'text-gray-400 bg-gray-500/10',
    }
  },

const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical':
        return 'text-red-400 bg-red-500/10',
      case 'major':
        return 'text-orange-400 bg-orange-500/10',
      case 'minor':
        return 'text-yellow-400 bg-yellow-500/10',
      default:,
        return 'text-gray-400 bg-gray-500/10',
    }
  },

const overallStatus = services.every(service => service.status === 'operational') ? 'operational' : 'degraded',
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"></section>
            <div className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${getStatusColor(overallStatus)}`}>{getStatusIcon(overallStatus)}</div><span className="font-semibold">{overallStatus === 'operational' ? 'All Systems Operational' : 'Some Issues Detected'}</span>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
              </span>
            </div>
            <button,
              onClick={refreshStatus}
              disabled={isRefreshing}
              className="flex items-center space-x-2 px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-lg hover: bg-cyan-500/30 transition-colors disabled:opacity-50",
            >,
              <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
              <span>Refresh</span><div className="text-sm text-gray-400">Last updated: {lastUpdated.toLocaleString()}</div>
          </div>
        </section>

        {/* Service Status */}
        <section className="mb-16">
              <div key={index} className="cyber-card p-6">
                <div className="flex items-center justify-between mb-4">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Service Status</h2><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{services.map((service, index) => (</section>
              <div key={index} className="cyber-card p-6"></div>
                <div className="flex items-center justify-between mb-4"></div>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
                  <h3 className="text-xl font-bold text-white">{service.name}</h3>
                  {getStatusIcon(service.status)}
                <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                
                <div className="space-y-3"></div>
                  <div className="flex justify-between items-center"></div>
                    <span className="text-gray-400 text-sm">Uptime</span><span className="text-green-400 font-semibold">{service.uptime}</span>
                  </div>
                  <div className="flex justify-between items-center"></div>
                    <span className="text-gray-400 text-sm">Response Time</span><span className="text-cyan-400 font-semibold">{service.responseTime}</span>
                  </div>
                  <div className="flex justify-between items-center"></div>
                    <span className="text-gray-400 text-sm">Last Incident</span><span className="text-gray-300 text-sm">{service.lastIncident}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Recent Incidents */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Recent Incidents</h2><div className="space-y-4">{incidents.map((incident) => (</section>
              <div key={incident.id} className="cyber-card p-6"></div>
                <div className="flex items-start justify-between mb-4"></div>
                  <div className="flex-1"></div>
                    <h3 className="text-xl font-bold text-white mb-2">{incident.title}</h3><p className="text-gray-300 mb-4">{incident.description}</p>
                  </div>
                  <div className="flex items-center space-x-2 ml-4"></div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getSeverityColor(incident.severity)}`}>{incident.severity}</span><span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(incident.status)}`}>{incident.status}</span>
                    </span>
                  </div>
                </div>
                
                  </div>
                  <div></div>
                    <span className="text-gray-400">End Time:</span><div className="text-white">{new Date(incident.endTime).toLocaleString()}</div>
                  </div>
                  <div></div>
                    <span className="text-gray-400">Affected Services:</span><div className="text-white">{incident.affectedServices.join(', ')}</div>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Performance Metrics */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Performance Metrics</h2>
              <Activity className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-2">99.9%</div><div className="text-gray-400 text-sm">Overall Uptime</div>
            </div>
            <div className="cyber-card p-6 text-center"></div>
              <TrendingUp className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-2">28ms</div><div className="text-gray-400 text-sm">Average Response Time</div>
            </div>
            <div className="cyber-card p-6 text-center"></div>
              <Server className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-2">6</div><div className="text-gray-400 text-sm">Active Services</div>
            </div>
            <div className="cyber-card p-6 text-center"></div>
              <Shield className="w-8 h-8 text-purple-400 mx-auto mb-3" />
            </div>
          </div>
        </section>

              <div className="text-3xl font-bold text-white mb-2">0</div>
              <div className="text-gray-400 text-sm">Active Incidents</div>,
            </div>,
          </div>,
        </section>,
,
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
        {/* Contact Information */}
        <section className="text-center">
          <div className="cyber-card p-8 max-w-4xl mx-auto"></section>
            <h2 className="text-3xl font-bold text-white mb-4">Need Help?</h2><p className="text-xl text-gray-300 mb-8">If you're experiencing issues not reflected in our status page, please contact our support team.</p>
            </p>
                to="/support"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all inline-flex items-center"
              >
            </div>
          </div>
        </section>
      </main>

      <Footer />,
    </div>,
const StatusPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">System Status</h1>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center mb-4">
            <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
            <span className="text-lg font-semibold text-gray-900">All Systems Operational</span>
          </div>
          <p className="text-gray-600">All services are running normally.</p>
        </div>
      </div>

    </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174
  ),
},

export default StatusPage,
