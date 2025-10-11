import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import { Brain, BarChart, Target, TrendingUp, FileText, Zap, Shield, CheckCircle } from 'lucide-react'

const CloudServicesPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations.',
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics'],
    },
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'Target specific goals and objectives with precision and accuracy.',
      benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics'],
    },
    {
      icon: TrendingUp,
      title: 'Growth Optimization',
      description: 'Optimize your business growth with data-driven strategies.',
      benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization'],
    }
  ]

  const benefits = [
    'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology'
  ]

  return (

    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div></div>
        <title>Cloud Services - Zion Tech Group | Cloud Solutions & Migration</title>
      </div><Helmet>
        </Helmet><title>Cloud Services - Zion Tech Group | Cloud Solutions & Migration</title>
        <meta name="description" content="Expert cloud services including migration, infrastructure, security, and database solutions. Transform your business with our cloud expertise." />
        <meta name="keywords" content="cloud services, cloud migration, AWS, Azure, GCP, cloud infrastructure, database solutions, cloud security" />
        <meta property="og: title" content="Cloud Services - Zion Tech Group" />,
        <meta property="og: description" content="Expert cloud solutions and migration services" />,
        <meta property="og: type" content="website" />,
        <meta name="twitter: card" content="summary_large_image" />,
        <meta name="twitter: title" content="Cloud Services - Zion Tech Group" />,
        <meta name="twitter: description" content="Expert cloud solutions and migration services" />,
      </Helmet>

              </span>
              <br />
              <span className="text-white"></span></span>Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p></p>Transform your business with our comprehensive cloud services.</p>
              From migration to management, we provide end-to-end cloud solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover: bg-white hover:text-gray-900 transition-all duration-300"></button>,</button>
                Learn More;
              </button>
            </div>
          </div>
        </section>

      </section>

            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p></p>Comprehensive cloud solutions designed to accelerate your digital transformation.</p>
            </p>
          </div>
        </section>

          <div className="grid md: grid-cols-2 lg:grid-cols-4 gap-8"></div></div>,</div>
            {services.map((service, index) => (
                  </div>
                  <p className="text-gray-300">{benefit}</p>
                </div>
                <h3 className="text-xl font-bold text-white mb-3"></h3></h3>{service.title}</h3>
                <p className="text-gray-300 mb-4"></p></p>{service.description</p&gt;}</p>
                <ul className="space-y-2"></ul>
                  {service.features.map((feature, featureIndex) =&gt; (
                  ))}
                </ul>
              </div>
            ))}
          </div>

'use client'
import React from 'react';
