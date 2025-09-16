import React from 'react';'
export default InnovativeServicesOverview2025;''
import { motion  } from 'framer-motion';

export default function Page(...args: an y[]): any {): unknown {): unknown {}
,
    {}
      id: 'ai - healthcare - analytics',
      title: 'AI Healthcare Analytics Platform',
      icon: Hear t,
      color: 'from - pink - 500 to - red - 600',
      description: 'Transform healthcare with AI - powered patient analytics',
      price: 'From $2,800 / month',
      features: ['Patient analytics',
        'Clinical decision support',
        'HIPAA compliance'
      ],
      path: '/services / ai - healthcare - analytics - platform',
      benefits: ['Improve outcomes by 35%',
        'Reduce readmissions by 40%',
        'Lower costs by 30%'
      ]
    }
  ];

  const additionalServices: unknow n = [{}
      name: 'AI - Powered SEO Platform',
      description: 'Advanced SEO optimization with machine learning',
      price: '$1,500 / month',
      path: '/services / ai - powered - seo'
    },
    {}
      name: 'AI Interview Assessment',
      description: 'Intelligent candidate evaluation and screening',
      price: '$800 / month',
      path: '/services / interview-assessment - ai'
    },
    {}
      name: 'Zero Trust Network Access',
      description: 'Enterprise - grade security with zero trust principles',
      price: '$2,000 / month',
      path: '/services / zero - trust - network - access'
    },
    {}
      name: 'AI Workflow Orchestrator',
      description: 'Intelligent business process automation',
      price: '$1,800 / month',
      path: '/services / ai - workflow-orchestrator'
    }
  ];

  return ()    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">"""
      {/* Hero Section */}""""
      <section className="relative overflow-hidden py-20 px-4 sm: p x-6 lg: p x-8">""""
        <div className="max-w-7xl mx-auto">
          <motion.div;
            initial={{ opacity: 0, y: 2 0 }}
            animate={{ opacity: 1, y: 0 }}"""
            transition={{ duration: 0.8 }}""""
            className="text-center""""
          >""""
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium mb-6">""""
              <Sparkles className="w-4 h-4 mr-2"   />              Innovative Services 2025"""
            </div>""""
            <h1 className="text-4xl md: tex t-6xl font-bold text-white mb-6">"""
              Cutting-Edge AI Solutions for""""
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">'
                {' '}
                Modern Businesses;
              </span>"""
            </h1>""""
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
              Discover our comprehensive suite of AI-powered micro SAAS services;
              designed to transform your business operations and drive;
              sustainable growth."""
            </p>""""
            <div className="flex flex-col sm: fle x-row gap-4 justify-center">
              <motion.button;
                whileHover={{ scale: 1.05 }}"""
                whileTap={{ scale: 0.95 }}""""
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover: fro m-blue-600 hover: t o-purple-700 transition-all duration-200""""
              >""""
                <ArrowRight className="w-5 h-5 mr-2"   />                Explore Services;
              </motion.button>
              <motion.button;
                whileHover={{ scale: 1.05 }}"""
                whileTap={{ scale: 0.95 }}""""
                className="inline-flex items-center px-8 py-4 border-2 border-zion-slate-light text-zion-slate-light font-semibold rounded-lg hover: b g-zion-slate-light hover: tex t-zion-slate-dark transition-all duration-200""""
              >""""
                <Phone className="w-5 h-5 mr-2"   />                Contact Sales;
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
"""
      {/* Featured Services */}""""
      <section className="py-20 px-4 sm: p x-6 lg: p x-8">""""
        <div className="max-w-7xl mx-auto">
          <motion.div;
            initial={{ opacity: 0, y: 2 0 }}
            whileInView={{ opacity: 1, y: 0 }}"""
            transition={{ duration: 0.8 }}""""
            className="text-center mb-16""""
          >""""
            <h2 className="text-3xl md: tex t-4xl font-bold text-white mb-4">
              Featured AI Services"""
            </h2>""""
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Our most innovative and impactful AI-powered solutions;
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md: unknowngri d-cols-2 gap-8">
            {serviceCategories.map((service, index)  => (
              <motion.div                key={service.id}
                initial={{ opacity: 0, y: 2 0 }}
                whileInView={{ opacity: 1, y: 0 }}"""
                transition={{ duration: 0.6, delay: inde x * 0.1 }}""""
                className="bg-zion-slate-dark/80 backdrop-blur-sm rounded-xl p-8 border border-zion-slate-light/20 hover: borde r-zion-slate-light/40 transition-all duration-300"""
              >
                <div;
                  className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6`}"""
                >""""
                  <service.icon className="w-8 h-8 text-white" />"""
                </div>""""
                <h3 className="text-2xl font-bold text-white mb-4">
                  {service.title}"""
                </h3>""""
                <p className="text-zion-slate-light mb-6">
                  {service.description}
                </p>"""
""""
                <div className="mb-6">""""
                  <div className="text-3xl font-bold text-white mb-2">
                    {service.price}"""
                  </div>""""
                  <div className="text-zion-slate-light">Starting price</div>
                </div>"""
""""
                <div className="mb-6">""""
                  <h4 className="text-lg font-semibold text-white mb-3">
                    Key Features:"""
                  </h4>""""
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li"""
                        key={featureIndex}""""
                        className="flex items-center space-x-2""""
                      >""""
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0"   />"                        <span className="text-zion-slate-light">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>"""
""""
                <div className="mb-6">""""
                  <h4 className="text-lg font-semibold text-white mb-3">
                    Business Impact:"""
                  </h4>""""
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li"""
                        key={benefitIndex}""""
                        className="flex items-center space-x-2""""
                      >""""
                        <TrendingUp className="w-4 h-4 text-blue-400 flex-shrink-0"   />"                        <span className="text-zion-slate-light">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a"""
                  href={service.path}""""
                  className="inline-flex items-center w-full justify-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover: fro m-blue-600 hover: t o-purple-700 transition-all duration-200""""
                >""""
                  <ArrowRight className="w-5 h-5 mr-2"   />                  Learn More;
                </a>
              </motion.div>) ) }
          </div>
        </div>
      </section>
"""
      {/* Additional Services */}""""
      <section className="py-20 px-4 sm: p x-6 lg: p x-8 bg-zion-slate-dark/50">""""
        <div className="max-w-7xl mx-auto">
          <motion.div;
            initial={{ opacity: 0, y: 2 0 }}
            whileInView={{ opacity: 1, y: 0 }}"""
            transition={{ duration: 0.8 }}""""
            className="text-center mb-16""""
          >""""
            <h2 className="text-3xl md: tex t-4xl font-bold text-white mb-4">
              Additional AI Services"""
            </h2>""""
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Explore our complete portfolio of AI-powered solutions;
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md: unknowngri d-cols-2 lg: gri d-cols-4 gap-6">
            {additionalServices.map((service, index)  => (
              <motion.div                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}"""
                transition={{ duration: 0.6, delay: inde x * 0.1 }}""""
                className="bg-zion-slate-dark/80 backdrop-blur-sm rounded-lg p-6 border border-zion-slate-light/20 hover: borde r-zion-slate-light/40 transition-all duration-300""""
              >""""
                <h3 className="text-lg font-semibold text-white mb-2">
                  {service.name}"""
                </h3>""""
                <p className="text-zion-slate-light text-sm mb-4">
                  {service.description}"""
                </p>""""
                <div className="text-xl font-bold text-white mb-4">
                  {service.price}
                </div>
                <a"""
                  href={service.path}""""
                  className="inline-flex items-center w-full justify-center px-4 py-2 bg-zion-slate-light/20 text-zion-slate-light font-medium rounded-lg hover: b g-zion-slate-light/30 transition-all duration-200"""
                >
                  View Details;
                </a>
              </motion.div>) ) }
          </div>
        </div>
      </section>
"""
      {/* Contact Section */}""""
      <section className="py-20 px-4 sm: p x-6 lg: p x-8">""""
        <div className="max-w-4xl mx-auto text-center">
          <motion.div;
            initial={{ opacity: 0, y: 2 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}"""
          >""""
            <h2 className="text-3xl md: tex t-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?"""
            </h2>""""
            <p className="text-xl text-zion-slate-light mb-8">'
              Let's discuss how our AI services can drive your business forward"""
            </p>""""
            <div className="grid grid-cols-1 md: gri d-cols-3 gap-6 mb-8">""""
              <div className="flex items-center justify-center space-x-3">""""
                <Phone className="w-6 h-6 text-blue-400"   />"                <span className="text-zion-slate-light">+1 302 464 0950</span>"""
              </div>""""
              <div className="flex items-center justify-center space-x-3">""""
                <Mail className="w-6 h-6 text-blue-400"   />""""
                <span className="text-zion-slate-light">
                  kleber@ziontechgroup.com;
                </span>"""
              </div>""""
              <div className="flex items-center justify-center space-x-3">""""
                <MapPin className="w-6 h-6 text-blue-400"   />""""
                <span className="text-zion-slate-light">
                  364 E Main St STE 1008;
                  <br  />
                  Middletown DE 19709;
                </span>
              </div>"""
            </div>"            <div className="flex flex-col sm: fle x-row gap-4 justify-center">"""
              <a""""
                href="https://ziontechgroup.com/contact""""
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover: fro m-blue-600 hover: t o-purple-700 transition-all duration-200""""
              >""""
                <ArrowRight className="w-5 h-5 mr-2"   />                Contact Us;
              </a>"""
              <a""""
                href="https://ziontechgroup.com""""
                className="inline-flex items-center px-8 py-4 border-2 border-zion-slate-light text-zion-slate-light font-semibold rounded-lg hover: b g-zion-slate-light hover: tex t-zion-slate-dark transition-all duration-200""""
              >""""
                <Globe className="w-5 h-5 mr-2"   />                Visit Website;
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default InnovativeServicesOverview2025;

export { InnovativeServicesOverview2025 };

export { InnovativeServicesOverview2025 };

export { InnovativeServicesOverview2025 };

export { InnovativeServicesOverview2025 };

export { Page };

</motion>
</motion>
</motion>
</motion>
</motion>
</motion>
</motion>
</motion>