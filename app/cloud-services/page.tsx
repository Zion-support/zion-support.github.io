'use client';
import React from 'react';
import {Helmet}}from 'react-helmet-async';

import {CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe, Cloud, Server, Database, Lock}}from 'lucide-react';

const CloudServicesPage: React.FC = () => {
      icon: Cloud,
      title: 'Cloud Migration',;
      description: 'Seamlessly migrate your infrastructure to the cloud with zero downtime and maximum security.',;
      features: ['AWS, Azure, GCP expertise', 'Zero-downtime migration', 'Cost optimization', 'Security compliance'];
    },
    {
      icon: Server,
      title: 'Cloud Infrastructure',
      description: 'Design and deploy scalable, secure, and cost-effective cloud infrastructure solutions.',
      features: ['Auto-scaling', 'Load balancing', 'High availability', 'Disaster recovery']},
    {icon: Database,
      title: 'Database Solutions',
      description: 'Managed database services with automated backups, monitoring, and optimization.',
      features: ['MySQL, PostgreSQL, MongoDB', 'Automated backups', 'Performance tuning', '24/7 monitoring']
    },
    {
      icon: Shield,
      title: 'Cloud Security',
    }
  ];
  const benefits = [;
  ];
  const pricing = const pricing = const pricing = [
    {
      name: 'Starter',
      price: '$2,999',
      period: 'per month',
      description: 'Perfect for small businesses getting started with cloud',
      features: [,
        'Basic cloud setup',
        'Email support',
        'Monthly monitoring',;
        'Standard security',;
        'Up to 5 users';
      ];
    },
    {
      name: 'Professional',
      price: '$7,999',
      period: 'per month',
      description: 'Ideal for growing businesses with complex needs',
      features: [,
        'Advanced cloud architecture',
        'Priority support',
        '24/7 monitoring',
        'Enhanced security',
        'Up to 25 users',
        'Custom integrations'
      ],
      popular: true;
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'pricing',
      description: 'Tailored solutions for large organizations',
      features: [,
        'Custom cloud strategy',
        'Dedicated support team',
        'Real-time monitoring',
        'Enterprise security',
        'Unlimited users',
        'Custom development'
      ]
    }
  ];];
  return (

    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      </div></div><Helmet>
        <title>Cloud Services - Zion Tech Group | Cloud Solutions & Migration</title>
        <meta name="description" content="Expert cloud services including migration, infrastructure, security, and database solutions. Transform your business with our cloud expertise." />
        <meta name="keywords" content="cloud services, cloud migration, AWS, Azure, GCP, cloud infrastructure, database solutions, cloud security" />
        <meta property="og: title" content="Cloud Services - Zion Tech Group" />,
        <meta property="og: description" content="Expert cloud solutions and migration services" />,
        <meta property="og: type" content="website" />,
        <meta name="twitter: card" content="summary_large_image" />,
        <meta name="twitter: title" content="Cloud Services - Zion Tech Group" />,
        <meta name="twitter: description" content="Expert cloud solutions and migration services" />,
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        </section></section><div className="max-w-7xl mx-auto">
          </div></div><div className="text-center">
            </div></div><h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              </h1></h1><span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Cloud Services;
              </span></span></span>
              <br />
              <span className="text-white">Solutions</span></span></span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Transform your business with our comprehensive cloud services.</p>
              From migration to management, we provide end-to-end cloud solutions.
            </p></p></p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              </div></div><button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                Get Started;
                </button></button><ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Learn More;
              </button></button></button>
            </div>
          </div>
        </div>

      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        </section></section><div className="max-w-7xl mx-auto">
          </div></div><div className="text-center mb-16">
            </div></div><h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Cloud Services;
            </h2></h2></h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive cloud solutions designed to accelerate your digital transformation.
            </p></p></p>
          </div>
)
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">)
            {services.map((service, index) => (
              </div></div><div key=index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                </div></div><div className="flex items-center mb-4">
                  </div></div><div className="bg-purple-500 p-3 rounded-lg">
                    </div></div><service.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3></h3></h3>
                <p className="text-gray-300 mb-4">{service.description}</p></p></p>)
                <ul className="space-y-2">)
                  {service.features.map((feature, featureIndex) => (
                    <li key=featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature})
                    </li>)
                  ))}
                </ul>
              </div>
            ))}
          </div>
