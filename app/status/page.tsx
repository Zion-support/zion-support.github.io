import React from 'react';
import { Helmet } from "react-helmet-async";

const StatusPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Status</title>
        <meta
          name="description"
          content="Professional status solutions and services"
        />
        <meta name="keywords" content="status" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4 xlfont-bold text-white mb-8">Status</h1>
            <p className="text-xl text-gray-300 mb-8">
              Professional status solutions and services
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  Expert Solutions
                </h3>
                <p className="text-blue-700">
                  Our team of experts delivers cutting-edge solutions.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
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
              </div>))}
          </div>
        </div>
      </section>
      {/* Recent Incidents */}
      <section className="py-16 px-4"></section>
        <div className="max-w-7xl mx-auto"></div>
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Recent Incidents</h2>
          <div className="space-y-6"></div>
            {incidents.map((incident) => (}
              <div key={incident.id} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"></div>
                <div className="flex items-start justify-between mb-4"></div>
                  <div></div>
                    <h3 className="text-xl font-semibold text-white mb-2">{incident.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-400"></div>
                      <span>Started: {new Date(incident.startTime).toLocaleString()}</span>
                      <span>Ended: {new Date(incident.endTime).toLocaleString()}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2"></div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getSeverityColor(incident.severity)}`}></span>
                      {incident.severity}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${incident.status === 'resolved'
                        ? 'bg-green-500/20 text-green-400'
                        : 'bg-yellow-500/20 text-yellow-400'}
                    }`}></span>
                      {incident.status}
                    </span>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{incident.description}</p>
                <div></div>
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
                <TrendingUp className="w-6 h-6 text-white" /></TrendingUp>
              </div>
              <div className="text-3xl font-bold text-white mb-2">99.9%</div>
              <div className="text-gray-400">Overall Uptime</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center"></div>
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4"></div>
                <Zap className="w-6 h-6 text-white" /></Zap>
              </div>
              <div className="text-3xl font-bold text-white mb-2">45ms</div>
              <div className="text-gray-400">Avg Response Time</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center"></div>
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4"></div>
                <Users className="w-6 h-6 text-white" /></Users>
              </div>
              <div className="text-3xl font-bold text-white mb-2">50K+</div>
              <div className="text-gray-400">Active Users</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center"></div>
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mx-auto mb-4"></div>
                <Activity className="w-6 h-6 text-white" /></Activity>
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6"></h2>
            Need More Information?
          </h2>
          <p className="text-xl text-purple-100 mb-8"></p>
            Subscribe to status updates or contact our support team for more details.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <button className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors"></button>
              Subscribe to Updates
  </
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-purple-600 transition-colors"></button>
              Contact Support
  </
          </div>
        </div>
      </section>
      <Footer /></Footer>
    </div>
  )}
  </button>
  </button>
  </button>
                    </span>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{incident.description}</p>
                <div></div>
                  <span className="text-gray-400 text-sm">Affected Services: </span>
                  <span className="text-white text-sm">{incident.affectedServices.join(', ')}</span>
                </div>
              </div>))}
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
                <TrendingUp className="w-6 h-6 text-white" /></TrendingUp>
              </div>
              <div className="text-3xl font-bold text-white mb-2">99.9%</div>
              <div className="text-gray-400">Overall Uptime</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center"></div>
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4"></div>
                <Zap className="w-6 h-6 text-white" /></Zap>
              </div>
              <div className="text-3xl font-bold text-white mb-2">45ms</div>
              <div className="text-gray-400">Avg Response Time</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center"></div>
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4"></div>
                <Users className="w-6 h-6 text-white" /></Users>
              </div>
              <div className="text-3xl font-bold text-white mb-2">50K+</div>
              <div className="text-gray-400">Active Users</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center"></div>
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mx-auto mb-4"></div>
                <Activity className="w-6 h-6 text-white" /></Activity>
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6"></h2>
            Need More Information?
          </h2>
          <p className="text-xl text-purple-100 mb-8"></p>
            Subscribe to status updates or contact our support team for more details.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <button className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors"></button>
              Subscribe to Updates
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-purple-600 transition-colors"></button>
              Contact Support
            </button>
          </div>
        </div>
      </section>
      <Footer /></Footer>
    </div>)}
