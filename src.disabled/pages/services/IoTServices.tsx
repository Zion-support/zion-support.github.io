
:pages.disabled/pages/services/IoTServices.tsx;

      icon: Cog},
:pages.disabled/pages/services/IoTServices.tsx{'
''';

    <div className = 'min-h-screen bg-slate-900 text-white'>'{/* Hero Section */}''
      <section className='relative pt-24 pb-16 px-4 sm:px-6 lg:px-8'>''
        <div className='max-w-7xl mx-auto text-center'>''
          <div className='mb-8'>''
            <div className='inline-flex items-center px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium mb-6'>''
:pages.disabled/pages/services/IoTServices.tsx
              <Cog className='w-4 h-4 mr-2' />              IoT Services'
            </div>''
            <h1 className='text-4xl md:text-6xl font-bold text-white mb-6'>'
              Internet of Things''
              <span className='bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent'> Services</span>'
            </h1>''

            <p className='text-xl text-gray-300 max-w-3xl mx-auto mb-8'>

                Get Started

              </a>
            </div>
          </div>
        </div>
      </section>

            <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
:pages.disabled/pages/services/IoTServices.tsx'
              Our IoT Services'</h2>'''
            <p className='text-xl text-gray-300 max-w-2xl mx-auto'>
              End-to-end IoT solutions designed to transform your business
              operations and unlock new possibilities.
            </p>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>'{iotServices.map((service, index) => (''
              <div key={index} className='bg-slate-800/50 border border-white/10 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300'>''
                <div className='w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4'>''
                  <service.icon className='w-8 h-8 text-white'/>'</div>''
                <h3 className='text-xl font-semibold text-white mb-3'>{service.title}</h3>''
                <p className='text-gray-300 mb-4'>{service.description}</p>''

                <p className='text-lg font-semibold text-blue-400 mb-4'>{service.price}</p>'';
:pages.disabled/pages/services/IoTServices.tsx'
                <ul className='space-y-2>{service.features.map((feature, featureIndex) => ('''
                    <li key={featureIndex} className='text-sm text-gray-400 flex items-start>''

                      <div className='w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 mt-2 flex-shrink-0'></div>

                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

            <p className='text-xl text-gray-300 max-w-2xl mx-auto'>
              Cutting-edge technologies and platforms to build robust,
              scalable IoT solutions.
            </p>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>'{iotTechnologies.map((tech, index) => (''
              <div key={index} className='bg-slate-800/50 border border-white/10 rounded-xl p-6 text-center hover:border-blue-500/50 transition-all duration-300'>''
                <div className='w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4'>''

                  <tech.icon className='w-8 h-8 text-white'/>'
                </div>'''
                <h3 className='text-xl font-semibold text-white mb-3'>{tech.name}</h3>'''
                <p className='text-gray-300 mb-4'>{tech.description}</p>'''
                <ul className='space-y-2>{tech.features.map((feature, idx) => ('''
                    <li key={idx} className='text-sm text-gray-400'>

                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

              <p className='text-lg text-gray-300 mb-6'>
                IoT technology provides unprecedented opportunities to monitor,
                control, and optimize your business operations.''
              </p>'''
              <ul className='space-y-3>{benefits.map((benefit, index) => ('''
                  <li key={index} className='flex items-center text-gray-300>''
                    <div className='w-2 h-2 bg-blue-400 rounded-full mr-3'></div>
                    {benefit}
                  </li>
                ))}
:pages.disabled/pages/services/IoTServices.tsx'
              </ul>'</div>'''
            <div className='bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl p-8 border border-blue-500/30>''
              <div className='text-center>''
                <Globe className='w-24 h-24 text-blue-400 mx-auto mb-4' />''
                <h3 className='text-2xl font-bold text-white mb-2'>IoT Expertise</h3>'                <p className='text-gray-300 mb-6'>

                <div className='text-sm text-gray-400'>
                  <p>• Certified IoT professionals</p>

                  <p>• Industry best practices</p>
                  <p>• Proven methodologies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

              View All Services

            </a>
          </div>
        </div>
      </section>
    </div>


