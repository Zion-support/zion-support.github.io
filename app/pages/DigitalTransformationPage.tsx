import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom
import { ArrowPathIcon,
  UserGroupIcon,
  CloudIcon,'
  CpuChipIcon,;';}
  ArrowRightIcon,';}
  CheckIcon,';}
  ChartBarIcon'}
} from '@heroicons/react/24/outline
const DigitalTransformationPage: React.FC = () => {
  const services = [']
    {'
      icon: ArrowPathIcon,'
      title: 'Process Automation','
      description: 'Streamline and automate business processes to improve efficiency and reduce manual errors.',
      features: ['
        'Workflow Analysis','
        'Process Mapping','}
        'Automation Implementation','}]
        'Performance Monitoring'}]
      ]}
    },
    {
      icon: UserGroupIcon,'
      title: 'Change Management','
      description: 'Guide your team through digital transformation with comprehensive change management strategies.',
      features: ['
        'Training Programs','
        'Change Communication','}
        'Adoption Strategies','}]
        'Performance Metrics'}]
      ]}
    },
    {
      icon: CloudIcon,'
      title: 'Cloud Migration','
      description: 'Migrate your infrastructure to the cloud for improved scalability', security, and cost efficiency.',
      features: ['
        'Cloud Strategy','
        'Data Migration','}
        'Security Implementation','}]
        'Cost Optimization'}]
      ]}
    },
    {
      icon: CpuChipIcon,'
      title: 'AI Integration','
      description: 'Integrate artificial intelligence into your business processes for enhanced decision-making and automation.',
      features: ['
        'AI Strategy','
        'Model Development','}
        'Integration Services','}]
        'Performance Monitoring'}]
      ]}
    }
  ]
  const benefits = [
    {'
      title: 'Increased Efficiency','}
      description: 'Streamline operations and reduce manual work',}
      icon: ChartBarIcon,'}
      value: '40%'}
    },
    {'
      title: 'Cost Reduction','}
      description: 'Optimize processes and reduce operational costs',}
      icon: ChartBarIcon,'}
      value: '30%'}
    },
    {'
      title: 'Better Customer Experience','}
      description: 'Improve customer satisfaction and engagement',}
      icon: ChartBarIcon,'}
      value: '85%'}
    },
    {'
      title: 'Data-Driven Decisions','}
      description: 'Make informed decisions with real-time analytics',}
      icon: ChartBarIcon,'}
      value: '90%'}]
    }]
  ]
  return (
    <></>
      <Helmet>title</Helmet>
      <title>Digital Transformation - Zion Tech Group</title>
        <meta name="description" content="404 - Zion Tech Group" />
        <meta name="keywords" content="digital transformation, process automation, cloud migration, AI integration, change management, business transformation" /></meta>
      </Helmet>

      {/* Hero Section */}
      <section>div</section>
      <div></div>
        </div>
        
        <div>h1</div>
      <h1></h1>

              Digital Transformation)
            </h1>
            <p className="text-xl" md:text-2xl text-gray-300 mb-8 leading-relaxed></p>
              Transform Your Business for the Digital Age
            </p>
            <p className="text-lg" text-gray-400 mb-12 max-w-3xl mx-auto></p>
              Embrace digital transformation with our comprehensive services that modernize your business processes", '
              improve efficiency, and drive growth in today's competitive landscape.
            </p>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover: "from-purple-700 hover:to-cyan-700 transition-all duration-300 inline-flex items-center gap-2
            ></Link>
              Start Your Transformation
              <ArrowRightIcon className="w-5" h-5 /></ArrowRightIcon>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */"}
      <section>div</section>
      <div></div>
            <h2 className="text-4xl" md: "text-5xl font-bold text-white mb-6></h2>
              Our Digital Transformation Services
            </h2>
            <p className="text-xl" text-gray-300 max-w-3xl mx-auto></p>
              Comprehensive solutions to modernize your business operations
            </p>
          </div>
          )
          <div className="grid" md:grid-cols-2 gap-8></div>)
            {services.map((service", index) => (}
              <div>div</div>
      <div>service</div>
      <service></service>
                  </div>
                  <h3 className="text-2xl" font-bold text-white>{service.title"}</h3>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed"></p>
                  {service.description}
                </p>
                )
                <ul className="space-y-3 mb-6"></ul>)
                  {service.features.map((feature, featureIndex) => (}
                    <li>CheckIcon</li>
      <CheckIcon></CheckIcon>
                      {feature})
                    </li>)
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className="inline-flex items-center text-purple-400 hover: "text-purple-300 font-semibold group-hover:gap-2 transition-all
                ></Link>
                  Learn More
                  <ArrowRightIcon className="w-4" h-4 ml-1 group-hover:translate-x-1 transition-transform /></ArrowRightIcon>
                </Link>
              </div>
            ))"}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section>div</section>
      <div></div>
            <h2 className="text-4xl" md: "text-5xl font-bold text-white mb-6></h2>
              Transformation Benefits
            </h2>
            <p className="text-xl" text-gray-300 max-w-3xl mx-auto></p>
              See the measurable impact of digital transformation on your business
            </p>
          </div>
          
          <div className="grid" md:grid-cols-2 lg:grid-cols-4 gap-8></div>
            {benefits.map((benefit", index) => (}
              <div>benefit</div>
      <benefit></benefit>
                </div>
                <div className="text-4xl font-bold text-purple-400 mb-2">{benefit.value}</div>
                <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>)
              </div>)
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section>div</section>
      <div></div>
            <h2 className="text-4xl" md: "text-5xl font-bold text-white mb-6></h2>
              Our Transformation Process
            </h2>
            <p className="text-xl" text-gray-300 max-w-3xl mx-auto></p>
              A structured approach to ensure successful digital transformation
            </p>
          </div>
          
          <div className="grid" md:grid-cols-4 gap-8></div>
            {['"}
              { step: '01', title: 'Assessment', description: 'Analyze current processes and identify transformation opportunities' },'
              { step: '02', title: 'Strategy', description: 'Develop a comprehensive digital transformation roadmap' },'
              { step: '03', title: 'Implementation', description: 'Execute the transformation plan with expert guidance' },']
              { step: '04', title: 'Optimization', description: 'Monitor performance and continuously improve processes' }]
            ].map((phase, index) => (
              <div>span</div>
      <span>{phase.step}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{phase.title}</h3>
                <p className="text-gray-300">{phase.description}</p>
              </div>
            </div>
            <div>button</div>
      <button></button>
                Get Started Today)
              </button>
            </div>)
          </div>;)
const DigitalTransformationPage: "React.FC = () => {
  return (
    <>
      <Helmet></Helmet>
    </>
        <title>DigitalTransformationPage - Zion Tech Group</title>
        <meta name=description content=DigitalTransformationPage - Zion Tech Group />
      </Helmet>
      <div>h1</div>
      <h1>DigitalTransformationPage</h1>
          <p>This page is under construction.</p>"}
        </div>}
      </section>}
}
      {/* CTA Section */}
      <section>div</section>
      <div>h2</div>
      <h2>
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8"></p>'
            Let's discuss how digital transformation can drive your business forward)
          </p>
          <div>Link</div>
      <Link></Link>
              Start Your Journey
            </Link>
            <Link
              to="/demo"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300"
            ></Link>
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>)
    </>)
  )
export default DigitalTransformationPage
'