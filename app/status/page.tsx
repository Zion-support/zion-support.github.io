









    setIsRefreshing(false);}






              {getStatusIcon(overallStatus)}

                {overallStatus === 'operational' ? 'All Systems Operational' :;}
                 overallStatus === 'degraded' ? 'Degraded Performance' : 'Service Outage'}
              </span>
          </span>
            </div>
          </span>
            <button
          </span>
              onClick={refreshStatus}
              disabled={isRefreshing}
      {/* Services Status */}
      <section className="py-16 px-4"></section>
          </button>
        <div className="max-w-7xl mx-auto"></div>
          </section>
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Service Status</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"></div>
          </h2>
            {services.map((service, index) => (;}
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300"></div>
          </div>
                <div className="flex items-center justify-between mb-4"></div>
          </div>
                  <div className="flex items-center gap-3"></div>
          </div>
                    {getStatusIcon(service.status)}
                    <h3 className="text-lg font-semibold text-white">{service.name}</h3>
          </div>
                  </div>
          </h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(service.status)}`}>
          </h3>
                    {service.status}
      {/* Recent Incidents */}
      <section className="py-16 px-4"></section>
          </span>
        <div className="max-w-7xl mx-auto"></div>
          </section>
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Recent Incidents</h2>
          </div>
          <div className="space-y-6"></div>
          </h2>
            {incidents.map((incident) => (;}
              <div key={incident.id} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"></div>
          </div>
                <div className="flex items-start justify-between mb-4"></div>
          </div>
                  <div></div>
          </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{incident.title}</h3>
          </div>
                    <div className="flex items-center gap-4 text-sm text-gray-400"></div>
          </h3>
                      <span>Started: {new Date(incident.startTime).toLocaleString()}</span>
          </div>
                      <span>Ended: {new Date(incident.endTime).toLocaleString()}</span>
          </span>
                    </div>
          </span>
                  </div>
          </span>
                  <div className="flex items-center gap-2"></div>
          </span>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getSeverityColor(incident.severity)}`}>
          </div>
                      {incident.severity}
                    </span>
          </span>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
          </span>
                      incident.status === 'resolved'
          </span>
                        ? 'bg-green-500/20 text-green-400'
          </span>
                        : 'bg-yellow-500/20 text-yellow-400';}
                    }`}>
          </span>
                      {incident.status}
