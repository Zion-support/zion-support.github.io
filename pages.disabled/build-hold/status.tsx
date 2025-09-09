
,
  status: 'operationa,l, uptime:',;
  99.8%;

,
  status: 'operationa,l, uptime:',;
  99.7%;

,
  status: 'operationa,l, uptime:',;
  100%;

  'minor''    }
  '  ]
  return(
    <MainLayout;
      title='System Status - Zion Tech Group''      description='Check the current status of Zion Tech Group services and infrastructure. Monitor uptime, performance, and any ongoing incidents.''      keywords='system status, uptime, service status, monitoring, incidents, performance''    >'      <div className='min-h-screen bg-gray-50>        {/* Hero Section */}        <section className='bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20>          <div className='container mx-auto px-4 text-center>            <h1 className='text-4xl md: text-5xl font-bold mb-6'>System Status</h1>'            <p className='text-xl text-gray-200 max-w-3xl mx-auto>              Monitor the real-time status of our services and infrastructure. '              All systems are currently operational.
            </p>
          </div>
        </section>
        {/* Overall Status */}
        <section className='py-16 bg-white>          <div className='container mx-auto px-4>            <div className='text-center mb-12>              <div className='flex items-center justify-center mb-4>                <CheckCircle className='w-12 h-12 text-green-500 mr-3' />                <h2 className='text-3xl font-bold text-gray-900'>All Systems Operational</h2>'              </div>'              <p className='text-lg text-gray-600 max-w-3xl mx-auto>                All services are running normally. We&aposre monitoring our systems 24/7 to ensure optimal performance.''              </p>'
  '            </div>
            {/* Status Overview Cards */}
            <div className='grid grid-cols-1 md: grid-cols-3 gap-8 max-w-4xl mx-auto>              <div className='bg-gray-50 rounded-lg p-6 text-center>                <Activity className='w-12 h-12 text-blue-600 mx-auto mb-4' />                <h3 className='text-2xl font-bold text-gray-900 mb-2'>99.9%</h3>'                <p className='text-gray-600'>Overall Uptime</p>'              </div>''
              <div className='bg-gray-50 rounded-lg p-6 text-center>                <Clock className='w-12 h-12 text-blue-600 mx-auto mb-4' />                <h3 className='text-2xl font-bold text-gray-900 mb-2'>85ms</h3>'                <p className='text-gray-600'>Average Response Time</p>'              </div>''
              <div className='bg-gray-50 rounded-lg p-6 text-center>                <CheckCircle className='w-12 h-12 text-green-600 mx-auto mb-4' />                <h3 className='text-2xl font-bold text-gray-900 mb-2'>0</h3>'                <p className='text-gray-600'>Active Incidents</p>'              </div>'            </div>
          </div>
        </section>
        {/* Service Status */}
        <section className='py-16 bg-gray-50>          <div className='container mx-auto px-4>            <div className='text-center mb-12>              <h2 className='text-3xl font-bold text-gray-900 mb-4'>Service Status</h2>'              <p className='text-lg text-gray-600 max-w-3xl mx-auto>                Real-time status of all our services and infrastructure components.'              </p>
            </div>'
            <div className='max-w-4xl mx-auto>              <div className='bg-white rounded-lg shadow-lg overflow-hidden>                <div className='overflow-x-auto>                  <table className='w-full>                    <thead className='bg-gray-50>                      <tr>'                        <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider>                          Service'                        </th>'
                        <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider>                          Status'                        </th>'
                        <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider>                          Uptime'                        </th>'
                        <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider>                          Response Time'                        </th>'
                        <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider>                          Last Incident'                        </th>
                      </tr>
                    </thead>'
                    <tbody className='bg-white divide-y divide-gray-200>                      {services.map((service, index) => ('                        <tr key={index} className='hover: bg-gray-50>                          <td className='px-6 py-4 whitespace-nowrap>                            <div className='flex items-center>                              <Server className='w-5 h-5 text-gray-400 mr-3' />                              <span className='text-sm font-medium text-gray-900'>{service.name}</span>'                            </div>'                          </td>'
                          <td className='px-6 py-4 whitespace-nowrap>                            <div className='flex items-center>                              {getStatusIcon(service.status)}                              <span className={`ml-2 inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(service.status)}`}>`                                {service.status}
                              </span>
                            </div>
                          </td>`
                          <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900>                            {service.uptime}                          </td>'
                          <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900>                            {service.responseTime}                          </td>'
                          <td className='px-6 py-4 text-sm text-gray-500>                            {service.lastIncident}                          </td>

                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

  minor;
  ' ? 'bg-yellow-100: text-yellow-800;';
  ': 'bg-red-100: text-red-800'                          }`}>'                            {incident.impact} impact`                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

            </div>
          </div>
        </section>
      </div>
    </MainLayout>


