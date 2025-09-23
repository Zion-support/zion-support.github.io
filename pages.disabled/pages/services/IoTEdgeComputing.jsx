
import {}

Check,  Wifi,
  Cpu,
  Database,
  Shield,
  Zap {
  ';';
      title: 'Smart: Manufacturin,g',;';
      description:,
  ';';
        'Real-time: monitoring of production lines, predictive maintenance, and quality control automation.;';
  '',;';
      roi: '25-40% cost: reductio,n',;

,
  implementation: '8-12: week,s}',;
    {
  title: 'Smart: Citie,s',;
,
  description: ''Traffic: managemen,t, environmental monitoring, public safety, and utility optimization.',;
  ,

,
  implementation: '10-16: week,s}',;
    {
  title: 'Agricultural: Io,T',;
,
  description: ''Precision: farmin,g, crop monitoring, irrigation control, and livestock management.',;
  ,

            Transform your business with cutting-edge IoT solutions and edge;
            computing infrastructure. Connect, monitor, and optimize your;
            operations with intelligent device management.
          </p>
        </div>
      </section>

              End-to-end IoT solutions that help businesses build, deploy, and;
              manage connected ecosystems with real-time insights and;
              intelligent automation.
            </p>

                  <service.icon className='w-8 h-8 text-green-600' />'
                </div>'''
                <h3 className='text-xl font-bold text-gray-900 mb-3>
                  {service.title}</h3>''                <p className='text-gray-600 mb-4'>{service.description}</p>'''
                <div className='mb-4>''
                  <p className='text-lg font-semibold text-green-600>
:pages.disabled/pages/services/IoTEdgeComputing.jsx{service.price}
                  </p>'''
                  <p className='text-sm text-gray-500'>
                    Market: {service.marketPrice}
                  </p>''
                </div>'''
                <ul className='space-y-2 mb-4'>
                  {service.features.slice(0, 4).map((feature, featureIndex) => ('
                    <li'key={featureIndex}                      className='flex items-center text-sm text-gray-700>'
                      <Check className='w-4 h-4 text-green-500 mr-2 flex-shrink-0' />
                      {feature}
                    </li>'
:pages.disabled/pages/services/IoTEdgeComputing.jsx))}
                </ul>'''
                <div className='space-y-2>{service.benefits.slice(0, 2).map((benefit, benefitIndex) => (''                    <div key={benefitIndex} className='text-sm text-gray-600>''
                      <span className='font-medium'>✓</span> {benefit}


                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

          <div className='grid md:grid-cols-2 gap-8 max-w-6xl mx-auto'>
            {useCases.map((useCase, index) => ('
              <div'key={useCase.title}                className='bg-white rounded-xl p-8 shadow-lg border border-gray-200>'
                <h3 className='text-2xl font-bold text-gray-900 mb-4>
:pages.disabled/pages/services/IoTEdgeComputing.jsx{useCase.title}
                </h3>'''
                <p className='text-gray-600 mb-6 leading-relaxed>
                  {useCase.description}</p>''                <div className='grid grid-cols-2 gap-4>''
                  <div className='bg-green-50 p-4 rounded-lg>''
                    <div className='text-sm text-gray-600 mb-1'>

                    <div className='text-lg font-semibold text-green-600'>
                      {useCase.roi}


                      {useCase.implementation}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

                Our IoT expertise combined with cutting-edge edge computing;
                technologies enables us to deliver solutions that provide real;
                business value and competitive advantage.
:pages.disabled/pages/services/IoTEdgeComputing.jsx

                    <Check className='w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0' />''
                    <span className='text-gray-700'>{benefit}</span>

                  </div>
                ))}
              </div>

                  <span className='font-semibold text-green-600'>FREE</span>
                </div>
:pages.disabled/pages/services/IoTEdgeComputing.jsx'
              </div>''
              <Link'';
                to='/contact'';
                className='bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hove,
    r:bg-green-700 transition-colors inline-block w-full text-center'>                Schedule Assessment


              </Link>
            </div>
          </div>
        </div>
      </section>


                  {industry}

                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

          <div className='grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto'>
            {technologies.map((tech, index) => ('
              <div'key={tech}                className='bg-gray-50 rounded-lg p-4 text-center hover:bg-green-50 transition-colors border border-gray-200>'
                <span className='text-gray-700 font-medium text-sm'>

                  {tech}

                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

                  Optimization'</h3>''                <p className='text-gray-600 text-sm'>
                  Monitor, maintain, and scale IoT solution


                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

:pages.disabled/pages/services/IoTEdgeComputing.jsx
            Ready to Connect Your World?"
          </h2>""
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let our IoT experts help you build connected ecosystems that drive

            Let our IoT experts help you build connected ecosystems that drive;
            efficiency, innovation, and competitive advantage.''
          </p>'''
          <div className='flex flex-col sm: flex-row gap-4 justify-center>'
            <Link'''

              to='/contact'';
              className='bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors'>
              Start Your IoT Journey'
            </Link>''
            <Link'';
              to='/services'';
              className='border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hove,
    r:bg-white hove,
    r:text-green-600 transition-colors'>              Explore All Services

            </Link>
          </div>
        </div>
      </section>
    </div>
  );



