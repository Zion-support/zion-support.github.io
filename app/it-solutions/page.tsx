
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom
import { ServerIcon,
  CloudIcon,
  ShieldCheckIcon,
  CpuChipIcon,'
  ArrowRightIcon,;';}
  CheckIcon,';}
  PhoneIcon,';}
  EnvelopeIcon'}
} from '@heroicons/react/24/outline
const ITSolutionsPage: React.FC = () => {'
  const services = [']
    {'
      title: 'Infrastructure Management','}
      description: 'Complete IT infrastructure setup', monitoring, and maintenance services.',}]
      icon: ServerIcon,'}]
      features: ['24/7 Monitoring', 'Automated Backups', 'Performance Optimization', 'Security Updates']}
    },
    {'
      title: 'Cloud Migration','}
      description: 'Seamless migration to cloud platforms with zero downtime.',}
      icon: CloudIcon,'}
      features: ['AWS/Azure/GCP', 'Data Migration', 'Cost Optimization', 'Security Compliance']}
    },
    {'
      title: 'Cybersecurity Solutions','}
      description: 'Comprehensive security measures to protect your digital assets.',}
      icon: ShieldCheckIcon,'}
      features: ['Threat Detection', 'Vulnerability Assessment', 'Incident Response', 'Security Training']}
    },
    {'
      title: 'AI Integration','}
      description: 'Integrate artificial intelligence into your existing IT infrastructure.',}
      icon: CpuChipIcon,'}
      features: ['Machine Learning', 'Process Automation', 'Data Analytics', 'Predictive Maintenance']}
    }
  ]
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>IT Solutions - Zion Tech Group</title>
        <meta name="description" content="404 - Zion Tech Group" />
        <meta name="keywords" content="IT solutions, infrastructure management, cloud migration, cybersecurity, AI integration" /></meta>
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white"></div>
        {/* Hero Section */}
        <section>div</section>
      <div></div>
              <h1 className="text-5xl" md: "text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent></h1>
                IT Solutions)
              </h1>
              <p className="text-xl" text-gray-300 mb-8 max-w-3xl mx-auto></p>
                Comprehensive IT services designed to modernize your infrastructure", enhance security, and drive digital transformation.
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section>div</section>
      <div></div>
              <h2 className="text-4xl" md: "text-5xl font-bold text-white mb-6></h2>
                Our IT Services
              </h2>
              <p className="text-xl" text-gray-300 max-w-3xl mx-auto></p>
                From infrastructure management to AI integration", we provide end-to-end IT solutions
              </p>
            </div>
            )
            <div className="grid md: "grid-cols-2 gap-8></div>)
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

        {/* CTA Section */}
        <section>div</section>
      <div>h2</div>
      <h2>Ready to Modernize Your IT Infrastructure?</h2>
            <p className="text-xl" text-gray-300 mb-8></p>
              Let our experts help you build a robust", secure, and scalable IT environment
            </p>
            <div>Link</div>
      <Link></Link>
                Get Started Today
              </Link>
              <Link
                to=/demo
                className="border-2" border-purple-400 text-purple-300 px-8 py-3 rounded-lg font-semibold hover: "bg-purple-400 hover:text-white transition-all duration-300
              ></Link>
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  )"}
}
const page = React.lazy(() => import('./page'))
export default page
'