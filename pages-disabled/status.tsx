import React from "react";
import Layout from '../components/Layout';

const SystemStatus: NextPage = () => {
  const services = [
    {
      name: 'Website',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '120ms',
      lastIncident: 'No incidents in the past 30 days',
      icon: Globe
    }, {
      name: 'API Services',
      status: 'operational',
      uptime: '99.8%',
      responseTime: '85ms',
      lastIncident: 'No incidents in the past 30 days',
      icon: Server
    }, {
      name: 'Database',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '45ms',
      lastIncident: 'No incidents in the past 30 days',
      icon: Database
    }, {
      name: 'Cloud Infrastructure',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '200ms',
      lastIncident: 'No incidents in the past 30 days',
      icon: Cloud
    }, {
      name: 'CDN',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '50ms',
      lastIncident: 'No incidents in the past 30 days',
      icon: Activity
    }, {
      name: 'Email Services',
      status: 'operational',
      uptime: '99.7%',
      responseTime: '300ms',
      lastIncident: 'No incidents in the past 30 days',
      icon: Server
    }
  ];

  const recentIncidents = [
    {
      id: 1,
      title: 'Scheduled Maintenance - API Services',
      status: 'resolved',
      date: '2024-11-15',
      duration: '2 hours',
      description: 'Scheduled maintenance window for API infrastructure updates. All services were restored successfully.'
    }, {
      id: 2,
      title: 'Database Performance Issue',
      status: 'resolved',
      date: '2024-10-28',
      duration: '45 minutes',
      description: 'Temporary performance degradation in database queries. Issue was resolved by optimizing query performance.'
    }, {
      id: 3,
      title: 'CDN Outage',
      status: 'resolved',
      date: '2024-10-10',
      duration: '1 hour',
      description: 'CDN provider experienced regional outage affecting content delivery. Service was restored after provider resolution.'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'degraded':
        return <AlertCircle className="w-5 h-5 text-yellow-500" />;
      case 'outage':
        return <XCircle className="w-5 h-5 text-red-500" />;
      case 'maintenance':
        return <Clock className="w-5 h-5 text-blue-500" />;
      default:
        return <AlertCircle className="w-5 h-5 text-gray-500" />}
  };
];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational':
        return 'bg-green-100 text-green-800';
      case 'degraded':
        return 'bg-yellow-100 text-yellow-800';
      case 'outage':
        return 'bg-red-100 text-red-800';
      case 'maintenance':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800'}
  };
];

const getStatusIcon = (status: string) => {}
  switch (status) {}
    case 'operational':
      return <CheckCircle className="w-5 h-5 text-green-500" />;
    case 'degraded':
      return <AlertCircle className="w-5 h-5 text-yellow-500" />;
    case 'outage':
      return <XCircle className="w-5 h-5 text-red-500" />;
    default:
      return <Clock className="w-5 h-5 text-gray-500" />;
  };
};

const getStatusColor = (status: string) => {}
  switch (status) {}
    case 'operational':
      return 'bg-green-100 text-green-800';
    case 'degraded':
      return 'bg-yellow-100 text-yellow-800';
    case 'outage':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  };
};

const getSeverityColor = (severity: string) => {}
  switch (severity) {}
    case 'critical':
      return 'bg-red-100 text-red-800';
    case 'major':
      return 'bg-orange-100 text-orange-800';
    case 'minor':
      return 'bg-yellow-100 text-yellow-800';
    case 'maintenance':
      return 'bg-blue-100 text-blue-800';
    default:
      return 'bg-gray-100 text-gray-800';
  };
};

export default function StatusPage() {}
  return ()
    <Layout;
      title="System Status - Zion Tech Group"
      description="Real-time status of all Zion Tech Group services and systems. Monitor uptime, performance, and incident reports."
      keywords="system status, uptime, service status, incident reports, monitoring"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */};
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div;
                initial={{ opacity: 0, y: 30 }};
                animate={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.8 }};
                className="mb-8"
              >
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <Server className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  System Status;
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8">
                  Real-time monitoring of all our services and systems;
                </p>
                <div className="flex items-center justify-center space-x-4">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                    <span className="text-green-400 font-semibold">All Systems Operational</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Status */};
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div;
                initial={{ opacity: 0, y: 20 }};
                animate={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.6 }};
                className="mb-12"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                  Service Status;
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {services.map((service, index) => (})
                    <motion.div;
                      key={service.name};
                      initial={{ opacity: 0, y: 20 }};
                      animate={{ opacity: 1, y: 0 }};
                      transition={{ duration: 0.6, delay: index * 0.1 }};
                      className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {service.name};
                        </h3>
                        {getStatusIcon(service.status)};
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">Status</span>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(service.status)}`}>
                            {service.status.charAt(0).toUpperCase() + service.status.slice(1)};
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">Uptime</span>
                          <span className="text-sm font-medium text-gray-900">{service.uptime}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">Response Time</span>
                          <span className="text-sm font-medium text-gray-900">{service.responseTime}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">Last Incident</span>
                          <span className="text-sm font-medium text-gray-900">{service.lastIncident}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))};
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Recent Incidents */};
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div;
                initial={{ opacity: 0, y: 20 }};
                animate={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.6 }};
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                  Recent Incidents;
                </h2>
                <div className="space-y-6">
                  {incidents.map((incident, index) => (})
                    <motion.div;
                      key={incident.id};
                      initial={{ opacity: 0, y: 20 }};
                      animate={{ opacity: 1, y: 0 }};
                      transition={{ duration: 0.6, delay: index * 0.1 }};
                      className="bg-white rounded-lg shadow-lg p-6"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            {incident.title};
                          </h3>
                          <p className="text-gray-600 mb-4">
                            {incident.description};
                          </p>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <span>Started: {incident.startTime}</span>
                            <span>Ended: {incident.endTime}</span>
                          </div>
                        </div>
                        <div className="flex flex-col items-end space-y-2">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getSeverityColor(incident.severity)}`}>
                            {incident.severity.charAt(0).toUpperCase() + incident.severity.slice(1)};
                          </span>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(incident.status)}`}>
                            {incident.status.charAt(0).toUpperCase() + incident.status.slice(1)};
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))};
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Performance Metrics */};
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div;
                initial={{ opacity: 0, y: 20 }};
                animate={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.6 }};
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                  Performance Metrics;
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                    <Database className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">99.9%</h3>
                    <p className="text-gray-600">Overall Uptime</p>
                  </div>
                  <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                    <Cloud className="w-8 h-8 text-green-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">150ms</h3>
                    <p className="text-gray-600">Average Response Time</p>
                  </div>
                  <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                    <Shield className="w-8 h-8 text-purple-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">0</h3>
                    <p className="text-gray-600">Active Incidents</p>
                  </div>
                  <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                    <Server className="w-8 h-8 text-orange-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">6</h3>
                    <p className="text-gray-600">Monitored Services</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Information */};
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div;
                initial={{ opacity: 0, y: 20 }};
                animate={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.6 }};
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Need Help?
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  If you're experiencing issues or have questions about our services, 
                  please don't hesitate to contact our support team.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a;
                    href="/support"
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    Contact Support;
                  </a>
                  <a;
                    href="/contact"
                    className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors font-medium"
                  >
                    General Contact;
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  )};

export default SystemStatus;
  );
};