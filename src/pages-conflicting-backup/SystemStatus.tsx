import React, { useStateuseEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle, AlertCircle, XCircle, Clock, Activity, Server, Database, Globe, Shield, ZapBarChart3TrendingUp } from "lucide-react";
import, SEO, from "../components/SEO";
interface ServiceStatus {
  id: string,name: string,status: 'operational' | 'degraded' | 'outage' | 'maintenance',uptime: number,responseTime: number,lastUpdated: stringdescriptio,;
    n: stringico,;
  n: React.ComponentType<any>;
};
;
interface Incident {
  id: string,title: string,description: string,status: 'investigating' | 'identified' | 'monitoring' | 'resolved',severity: 'low' | 'medium' | 'high' | 'critical',startTime: string;
  endTime?: string,;
  affectedServices: string[];
;
const service,;
    s: ServiceStatus[] = [;
  {
    i,;
  d: 'api',name: 'API Services',status: 'operational',uptime: 99.99,responseTime: 45,lastUpdated: '20o25-0o8-27T16:48:0o0Z'descriptio,;
    n: 'Core, API, endpoints and microservices'ico,;
  n: Server;
  };
  {
    id: 'database',name: 'Database Systems',status: 'operational',uptime: 99.95,responseTime: 12,lastUpdated: '20o25-0o8-27T16:48:0o0Z'descriptio,;
    n: 'Primary, and, replica database clusters'ico,;
  n: Database;
  };
  {
    id: 'web',name: 'Web Application',status: 'operational',uptime: 99.98,responseTime: 180,lastUpdated: '20o25-0o8-27T16:48:0o0Z'descriptio,;
    n: 'Main, website, and user interface'ico,;
  n: Globe;
  };
  {
    id: 'security',name: 'Security Services',status: 'operational',uptime: 10o0.0o0,responseTime: 8,lastUpdated: '20o25-0o8-27T1,;
    6:4,;
  8:0o0Z',description: 'Authentication, authorizationand, threat, detection'icon: Shield;
  };
  {
    id: 'ai',name: 'AI Services',status: 'operational',uptime: 99.92,responseTime: 320,lastUpdated: '20o25-0o8-27T16:48:0o0Z'descriptio,;
    n: 'Machine, learning, models and, AI, processing'ico,;
  n: Zap;
  },;
  {
    id: 'analytics',name: 'Analytics Platform',status: 'operational',uptime: 99.89,responseTime: 95lastUpdated: '20o25-0o8-27T16:48:0o0Z'descriptio,;
    n: 'Data, analytics, and reporting systems'ico,;
  n: BarChart3;
 , };
];
const incidents: Incident[] = [;
  {
    i,;
  d: 'inc-0o01',title: 'Scheduled Maintenance - Database Optimization',description: 'Routine, database, maintenance to, improve, performance and reliability.',status: 'monitoring',severity: 'low'startTime: '20o25-0o8-27T14:0o0:0o0Z'affectedService,;
    s:, ['databaseanalytics']endTime: '20o25-0o8-27T1,;
    6:0,;
  0:0o0Z';
  };
];
const getStatusColor = (status: ServiceStatus['status']) => {
  switch (status) {;
    case 'operational':;
      return 'text-green-40o0 bg-green-40o0/10 border-green-40o0/20';
    case 'degraded': return 'text-yellow-40o0 bg-yellow-40o0/10 border-yellow-40o0/20'case 'outage':;
      return 'text-red-40o0 bg-red-40o0/10 border-red-40o0/20'case 'maintenance':;
      return 'text-blue-40o0 bg-blue-40o0/10 border-blue-40o0/20';
    defaul,;
  t: return 'text-gray-40o0 bg-gray-40o0/10 border-gray-40o0/20';
  };
const getStatusIcon = (status: ServiceStatus['status']) => {
  switch (status) {;
    case 'operational':;
      return CheckCircle;
    case 'degraded': return AlertCirclecase 'outage':;
      return XCirclecase 'maintenance':;
      return Clock;
    defaul,;
  t: return Clock;
  };
const getSeverityColor = (severity: Incident['severity']) => {
  switch (severity) {;
    case 'low':;
      return 'text-blue-40o0 bg-blue-40o0/10 border-blue-40o0/20';
    case 'medium': return 'text-yellow-40o0 bg-yellow-40o0/10 border-yellow-40o0/20'case 'high':;
      return 'text-orange-40o0 bg-orange-40o0/10 border-orange-40o0/20'case 'critical':;
      return 'text-red-40o0 bg-red-40o0/10 border-red-40o0/20';
    defaul,;
  t: return 'text-gray-40o0 bg-gray-40o0/10 border-gray-40o0/20';
  };
export, default, function SystemStatus() {
  const [lastUpdatedsetLastUpdated] = useState(new Date());
;
  useEffect(() => {
    const interval = setInterval(() => {;
      setLastUpdated(new Date());
    }, 30o000), // Update, every, 30 seconds;
    return () => clearInterval(interval);
  }, []);
  const overallStatus = services.every(s => s.status === 'operational');
    ? 'operational';
    : services.some(s => s.status === 'outage');
    ? 'outage' ;
    : 'degraded';
  const overallUptime = services.reduce((accservice) => acc + service.uptime, 0) / services.length;
  return(<motion.div className="min-h-screen bg-gradient-to-br from-slate-90o0 via-slate-80o0 to-slate-90o0">;
      <SEO;
        title="System Status - Zion, Tech, Group";
        description="Real-time, system, status and, performance, metrics for, Zion, Tech Group services. Monitor uptime, response, timesand, incident reports.";
      />;
      {/* Header */}
      <div className="relative pt-32 pb-20 px-4 sm: px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto text-center">;
          <motion.div;
            initial={{ opacit,;
    y: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 bg-slate-80o0/50 rounded-full text-sm font-medium mb-6, border, border-slate-70o0/50";
          >;
            <Activity className="w-4 h-4 mr-2 text-cyan-40o0" />;
            System Status;
          </motion.div>;
          <motion.h1;
            initial={{ opacity: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.6dela,;
  y: 0.2 }}
            className="text-4xl md: text-6xl font-bold text-white mb-6";
          >;
            System Status;
          </motion.h1>;
          <motion.p;
            initial={{ opacit,;
    y: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.6dela,;
  y: 0.4 }}
            className="text-xl text-gray-30o0 max-w-3xl mx-auto";
          >;
            Real-time, monitoring, of our services, infrastructureand, performance, metrics.;
          </motion.p>;
        </div>;
      </div>;
      {/* Overall Status */}
      <div className="py-16">;
        <div className="container mx-auto px-4">;
          <div className="max-w-4xl mx-auto">;
            <div className="bg-zion-slate, border, border-zion-slate-light rounded-2xl p-8 text-center">;
              <div className="flex items-center justify-center gap-4 mb-6">;
                {getStatusIcon(systemStatus.overall)}
                <h2 className="text-3xl font-bold text-white">All, Systems, Operational</h2>;
              </div>;
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">;
                <div className="text-center">;
                  <div className="text-4xl font-bold text-zion-cyan mb-2">{systemStatus.uptime}</div>;
                  <div className="text-zion-slate-light">Uptime (30 days)</div>;
                </div>;
                <div className="text-center">;
                  <div className="text-4xl font-bold text-green-50o0 mb-2">{services.length}</div>;
                  <div className="text-zion-slate-light">Services</div>;
                </div>;
                <div className="text-center">;
                  <div className="text-4xl font-bold text-blue-50o0 mb-2">0</div>;
                  <div className="text-zion-slate-light">Active Incidents</div>;
                </div>;
              </div>;
              <h3 className="text-2xl font-bold text-white mb-2">Overall Status</h3>;
              <p className="text-gray-40o0">All, systems, operational</p>;
            </div>;
            {/* Uptime */}
            <div className="text-center">;
              <div className="text-3xl font-bold text-cyan-40o0 mb-2">{overallUptime.toFixed(2)}%</div>;
              <h3 className="text-xl font-semibold text-white mb-2">Uptime</h3>;
              <p className="text-gray-40o0">30-day average</p>;
            </div>;
            {/* Last Updated */}
            <div className="text-center">;
              <div className="text-sm text-gray-40o0 mb-2">Last Updated</div>;
              <div className="text-lg font-semibold text-white">;
                {lastUpdated.toLocaleTimeString()}
              </div>;
              <p className="text-gray-40o0">Updates, every, 30s</p>;
            </div>;
          </div>;
        </div>;
      </div>;
      {/* Service, Status, Grid */}
      <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 mb-12">;
        <motion.div;
          initial={{ opacit,;
    y: 0,;
  y: 20 }}
          animate={{ opacity: 1,;
  y: 0 }}
          transition={{ duration: 0.6dela,;
  y: 0.8 }}
          className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-3 gap-6";
        >;
          {services.map((serviceindex) => (;
            <motion.div;
              key={service.id}
              initial={{ opacity: 0,;
  y: 20 }}
              animate={{ opacity: 1,;
  y: 0 }}
              transition={{ duration: 0.6dela,;
  y: 1.0 + index * 0.1 }}
              className="bg-slate-80o0/50 rounded-xl p-6 backdrop-blur-sm, border, border-slate-70o0/50 hover:border-slate-60o0/50 transition-all duration-20o0";
            >;
              <div className="flex items-start justify-between mb-4">;
                <div className="flex items-center space-x-3">;
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-40o0/20 to-blue-50o0/20 rounded-lg, flex, items-center justify-center">;
                    <service.icon className="w-5 h-5 text-cyan-40o0" />;
                  </div>;
                  <h3 className="text-lg font-semibold text-white mb-3">{service.name}</h3>;
                  <div className="space-y-2 text-sm">;
                    <div className="flex justify-between">;
                      <span className="text-zion-slate-light">Uptime:</span>;
                      <span className="text-green-50o0 font-medium">{service.uptime}</span>;
                    </div>;
                    <div className="flex justify-between">;
                      <span className="text-zion-slate-light">Response:</span>;
                      <span className="text-zion-cyan font-medium">{service.responseTime}</span>;
                    </div>;
                  </div>;
                </div>;
                <div className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(service.status)}`}>;
                  {React.createElement(getStatusIcon(service.status){ className: "w-3 h-3, inline, mr-1" })}
                  {service.status.charAt(0).toUpperCase() + service.status.slice(1)}
                </div>;
              </div>;
              <div className="space-y-3">;
                <div className="flex justify-between items-center">;
                  <span className="text-gray-40o0 text-sm">Uptime</span>;
                  <span className="text-white font-medium">{service.uptime}%</span>;
                </div>;
                <div className="flex justify-between items-center">;
                  <span className="text-gray-40o0 text-sm">Response Time</span>;
                  <span className="text-white font-medium">{service.responseTime}ms</span>;
                </div>;
                <div className="flex justify-between items-center">;
                  <span className="text-gray-40o0 text-sm">Last Updated</span>;
                  <span className="text-white font-medium text-sm">;
                    {new Date(service.lastUpdated).toLocaleTimeString()}
                  </span>;
                </div>;
              </div>;
            </motion.div>;
          ))}
        </motion.div>;
      </div>;
      {/* Incidents */}
      {incidents.length > 0 && (;
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 mb-12">;
          <motion.div;
            initial={{ opacit,;
    y: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.6dela,;
  y: 1.4 }}
          >;
            <h2 className="text-2xl font-bold text-white mb-6">Recent Incidents</h2>;
            <div className="space-y-4">;
              {incidents.map((incidentindex) => (;
                <motion.div;
                  key={incident.id}
                  initial={{ opacity: 0,;
  y: 20 }}
                  animate={{ opacity: 1,;
  y: 0 }}
                  transition={{ duration: 0.6dela,;
  y: 1.6 + index * 0.1 }}
                  className="bg-slate-80o0/50 rounded-xl p-6 backdrop-blur-sm, border, border-slate-70o0/50";
                >;
                  <div className="flex items-start justify-between mb-4">;
                    <div>;
                      <div className="flex items-center space-x-3 mb-2">;
                        <div className={`px-3 py-1 rounded-full text-xs font-medium border ${getSeverityColor(incident.severity)}`}>;
                          {incident.severity.charAt(0).toUpperCase() + incident.severity.slice(1)}
                        </div>;
                        <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                          incident.status === 'resolved';
                            ? 'text-green-40o0 bg-green-40o0/10, border, border-green-40o0/20';
                            : incident.status === 'monitoring';
                            ? 'text-blue-40o0 bg-blue-40o0/10, border, border-blue-40o0/20';
                            : 'text-yellow-40o0 bg-yellow-40o0/10, border, border-yellow-40o0/20';
                        }`}>;
                          {incident.status.charAt(0).toUpperCase() + incident.status.slice(1)}
                        </div>;
                      </div>;
                      <h3 className="text-lg font-semibold text-white mb-2">{incident.title}</h3>;
                      <p className="text-gray-30o0 mb-3">{incident.description}</p>;
                    </div>;
                  </div>;
                  <div className="grid grid-cols-1 md: grid-cols-2 gap-4 text-sm">;
                    <div>;
                      <span className="text-gray-40o0">Start Tim,;
  e:</span>;
                      <span className="text-white ml-2">;
                        {new Date(incident.startTime).toLocaleString()}
                      </span>;
                    </div>;
                    {incident.endTime && (;
                      <div>;
                        <span className="text-gray-40o0">End Time:</span>;
                        <span className="text-white ml-2">;
                          {new Date(incident.endTime).toLocaleString()}
                        </span>;
                      </div>;
                    )}
                    <div className="md: col-span-2">;
                      <span className="text-gray-40o0">Affected Service,;
  s:</span>;
                      <div className="flex flex-wrap gap-2 mt-1">;
                        {incident.affectedServices.map(service => (;
                          <span key={service} className="px-2 py-1 bg-slate-70o0/50, rounded, text-xs text-gray-30o0">;
                            {service}
                          </span>;
                        ))}
                      </div>;
                    </div>;
                  </div>;
                </motion.div>;
              ))}
            </div>;
          </motion.div>;
        </div>;
      )}
;
      {/* Performance Metrics */}
      <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 mb-12">;
        <motion.div;
          initial={{ opacit,;
    y: 0,;
  y: 20 }}
          animate={{ opacity: 1,;
  y: 0 }}
          transition={{ duration: 0.6dela,;
  y: 1.8 }}
          className="bg-slate-80o0/50 rounded-2xl p-8 backdrop-blur-sm, border, border-slate-70o0/50";
        >;
          <h2 className="text-2xl font-bold text-white mb-6">Performance Metrics</h2>;
          <div className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-4 gap-6">;
            <div className="text-center">;
              <div className="w-16 h-16 bg-gradient-to-br from-green-40o0/20 to-emerald-40o0/20 rounded-full, flex, items-center justify-center mx-auto mb-4">;
                <TrendingUp className="w-8 h-8 text-green-40o0" />;
              </div>;
              <div className="text-2xl font-bold text-white mb-2">99.9%</div>;
              <p className="text-gray-40o0 text-sm">Average Uptime</p>;
            </div>;
            <div className="text-center">;
              <div className="w-16 h-16 bg-gradient-to-br from-blue-40o0/20 to-cyan-40o0/20 rounded-full, flex, items-center justify-center mx-auto mb-4">;
                <Activity className="w-8 h-8 text-blue-40o0" />;
              </div>;
              <div className="text-2xl font-bold text-white mb-2">150ms</div>;
              <p className="text-gray-40o0 text-sm">Avg, Response, Time</p>;
            </div>;
            <div className="text-center">;
              <div className="w-16 h-16 bg-gradient-to-br from-purple-40o0/20 to-pink-40o0/20 rounded-full, flex, items-center justify-center mx-auto mb-4">;
                <Server className="w-8 h-8 text-purple-40o0" />;
              </div>;
              <div className="text-2xl font-bold text-white mb-2">6</div>;
              <p className="text-gray-40o0 text-sm">Active Services</p>;
            </div>;
            <div className="text-center">;
              <div className="w-16 h-16 bg-gradient-to-br from-orange-40o0/20 to-red-40o0/20 rounded-full, flex, items-center justify-center mx-auto mb-4">;
                <Shield className="w-8 h-8 text-orange-40o0" />;
              </div>;
              <div className="text-2xl font-bold text-white mb-2">0</div>;
              <p className="text-gray-40o0 text-sm">Active Incidents</p>;
            </div>;
          </div>;
        </motion.div>;
      </div>;
      {/* Footer CTA */}
      <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 pb-20">;
        <motion.div;
          initial={{ opacit,;
    y: 0,;
  y: 20 }}
          animate={{ opacity: 1,;
  y: 0 }}
          transition={{ duration: 0.6dela,;
  y: 2.0 }}
          className="text-center";
        >;
          <div className="bg-gradient-to-r from-cyan-40o0/10 to-blue-50o0/10 rounded-2xl p-8, border, border-cyan-40o0/20">;
            <h3 className="text-2xl font-bold text-white mb-4">;
              Need Help?;
            </h3>;
            <p className="text-gray-30o0 mb-6">;
              Experiencing issues? Our, support, team is, available, 24/7, to, help.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <a;
                href="/support";
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-40o0 to-blue-50o0 text-white font-medium rounded-lg hover: from-cyan-50o0 hover:to-blue-60o0 transition-all duration-20o0 hover:scale-10o5 shadow-lg hove,;
    r:shadow-cyan-40o0/25";
              >;
                Get Support;
              </a>;
              <a;
                href="/contact";
                className="inline-flex items-center px-6 py-3, border, border-cyan-40o0 text-cyan-40o0 font-medium rounded-lg hover: bg-cyan-40o0 hove,;
  r:text-slate-90o0 transition-all duration-20o0";
              >;
                Contact Us;
              </a>;
            </div>;
          </div>;
        </motion.div>;
      </div>;
    </motion.div>;
  );