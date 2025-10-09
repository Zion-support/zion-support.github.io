import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
const StatusPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <main className="relative z-10">
        <section className="py-20 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              System Status
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Real-time status of our services
            </p>
          </div>
<<<<<<< HEAD
        </div>
      </section>

      {/* Services Status */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Service Status</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold text-gray-900">{service.name}</h4>
                  {getStatusIcon(service.status)}
                </div>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Uptime:</span>
                    <span className="font-semibold text-gray-900">{service.uptime}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Response Time:</span>
                    <span className="font-semibold text-gray-900">{service.responseTime}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Last Incident:</span>
                    <span className="font-semibold text-gray-900">{service.lastIncident}</span>
                  </div>
                </div>
                <div className="mt-4">
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${getStatusColor(service.status)}`}>
                    {service.status.charAt(0).toUpperCase() + service.status.slice(1)}
                  </span></div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Recent Incidents */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Recent Incidents</h3>
          <div className="space-y-6">
            {incidents.map((incident) => (
              <div key={incident.id} className="bg-white border border-gray-200 rounded-lg shadow-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{incident.title}</h4>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>Started: {formatTime(incident.startTime)}</span>
                      {incident.endTime && (
                        <span>Resolved: {formatTime(incident.endTime)}</span>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${getSeverityColor(incident.severity)}`}>
                      {incident.severity.charAt(0).toUpperCase() + incident.severity.slice(1)}
                    </span>
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${getStatusColor(incident.status)}`}>
                      {incident.status.charAt(0).toUpperCase() + incident.status.slice(1)}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{incident.description}</p>
                <div className="space-y-3">
                  <h5 className="font-semibold text-gray-900">Updates:</h5>
                  {incident.updates.map((update, updateIndex) => (
                    <div key={updateIndex} className="bg-gray-50 rounded-lg p-3">
                      <div className="text-sm text-gray-500 mb-1">
                        {formatTime(update.time)}
                      </div>
                      <div className="text-gray-700">{update.message}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe to Updates */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Stay Updated
          </h3>
          <p className="text-gray-600 mb-6">
            Subscribe to status updates and get notified when incidents occur or are resolved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            We'll only send you status updates. Unsubscribe at any time.
          </p>
        </div>
      </section>

      {/* Footer */}
      <section className="py-8 bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-500 text-sm">
            This status page is updated every minute. For more information, contact our support team.
          </p>
        </div>
      </section></div>
  );
};

export default StatusPage;
=======
        </section>
      </main>
      <Footer />
    </div>
  );
};
export default StatusPage;
>>>>>>> origin/main
