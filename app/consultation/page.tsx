'use client';
      features: [
        'AI readiness assessment',
        'Technology roadmap development',
        'ROI analysis and projections',
        'Implementation planning',
        'Risk assessment',
        'Team training recommendations'
      ],
      popular: true
    },
    {
      id: 'technical',
      name: 'Technical Architecture Review',
      description: 'Deep dive into your current technical infrastructure',
      duration: '1-2 weeks',
      price: '$3,000',
      features: [
        'Infrastructure audit',
        'Security assessment',
        'Performance analysis',
        'Scalability recommendations',
        'Technology stack optimization',
        'Migration planning'
      ],
      popular: false
    },
    {
      id: 'digital',
      name: 'Digital Transformation Planning',
      description: 'Complete digital transformation strategy and roadmap',
      duration: '4-6 weeks',
      price: '$8,000',
      features: [
        'Current state analysis',
        'Future state vision',
        'Change management strategy',
        'Technology selection',
        'Implementation timeline',
        'Success metrics definition'
      ],
      popular: false
    }
  ];
  const process = [
    {
      step: '1'},
    {
      step: '2',
      title: 'Strategy Development'},
    {
      step: '3',
      title: 'Implementation Plan'},
    {
      step: '4',
      title: 'Ongoing Support'}
  ]

  return (
    <></>
      <Helmet>
        <title>Consultation Services | Zion Tech Group</title>
        <meta name="description" content="Expert consultation services for AI strategy, cloud migration, and cybersecurity. Get personalized guidance for your technology needs." />
        <meta name="keywords" content="AI consultation, cloud migration, cybersecurity audit, technology consulting, IT strategy" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        <section className="py-20 px-4"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Expert Consultation Services
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Get personalized guidance and strategic insights to transform your business with cutting-edge technology.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              {services.map((service, index) => (</div>
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300"></div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="border-t border-white/10 pt-6"></div>
                    <div className="flex justify-between items-center mb-4"></div>
                      <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                      <span className="text-gray-400 flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {service.duration}
                      </span>
                    </div>
                    <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold py-3 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
                      Get Started
                    </button>
                  </div>
                </div>
              ))}
            </div>

              </div>
            </div>

      description: 'Provide continuous guidance and support throughout implementation.',
      icon: Clock
    }
  ];

  const selectedConsultation = consultationTypes.find(type => type.id === selectedType);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Helmet>
        <title>Consultation - Zion Tech Group | Expert AI & IT Consulting</title>
        <meta name="description" content="Get expert consultation on AI strategy, technical architecture, and digital transformation. Our consultants help you make informed technology decisions." />
        <meta name="keywords" content="AI consultation, IT consulting, digital transformation, technology strategy, technical architecture, business consulting" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4"></section>
        <div className="max-w-7xl mx-auto text-center"></div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Expert</h1> <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Consultation</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Get expert guidance on AI strategy, technical architecture, and digital transformation. 
            Our experienced consultants help you make informed technology decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Schedule Consultation</button>
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </button>
            <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Download Brochure
            </button>
          </div>
        </div>
      </section>

      {/* Consultation Types */}
      <section className="py-16 px-4"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl font-bold text-white mb-6">Consultation Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the consultation type that best fits your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {consultationTypes.map((type) => (</div>
              <div
                key={type.id}
                className={`relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 cursor-pointer hover:scale-105 ${
                  selectedType === type.id
                    ? 'border-blue-400/50 ring-2 ring-blue-400/20'
                    : 'border-white/20 hover:border-white/40'
                }`}
                onClick={() => setSelectedType(type.id)}
              >
                {type.popular && (</div>
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-6"></div>
                  <h3 className="text-2xl font-bold text-white mb-2">{type.name}</h3>
                  <p className="text-gray-300 mb-4">{type.description}</p>
                  <div className="flex items-center justify-center gap-4 mb-4"></div>
                    <span className="text-3xl font-bold text-white">{type.price}</span>
                    <span className="text-gray-400">{type.duration}</span>
                  </div>
                </div>

                <ul className="space-y-3">
                  {type.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" /></CheckCircle>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Consultation Details */}
      {selectedConsultation && (
        <section className="py-16 px-4 bg-white/5"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-12"></div>
              <h2 className="text-4xl font-bold text-white mb-6">{selectedConsultation.name}</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">{selectedConsultation.description}</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12"></div>
              <div></div>
                <h3 className="text-2xl font-bold text-white mb-6">What's Included</h3>
                <ul className="space-y-4">
                  {selectedConsultation.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-gray-300">
                      <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0 mt-0.5" /></CheckCircle>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8"></div>
                <h3 className="text-2xl font-bold text-white mb-6">Schedule Your Consultation</h3>
                <div className="space-y-4"></div>
                  <div className="flex items-center gap-3 text-gray-300"></div>
                    <Calendar className="w-5 h-5 text-blue-400" />
                    <span>Duration: {selectedConsultation.duration}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300"></div>
                    <Clock className="w-5 h-5 text-blue-400" />
                    <span>Investment: {selectedConsultation.price}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300"></div>
                    <Users className="w-5 h-5 text-blue-400" />
                    <span>Team of 2-3 experts</span>
                  </div>
                </div>
                <button className="w-full mt-6 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </section>
    </>
  );
};

      )}

      {/* Process Section */}
      <section className="py-16 px-4"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl font-bold text-white mb-6">Our Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A structured approach to delivering exceptional consultation services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (</div>
              <div key={index} className="text-center"></div>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6"></div>
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-2">Step {step.step}</div>
                <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 bg-white/5"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-12"></div>
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300">Contact our consultation team today</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div>
            <div className="text-center"></div>
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4"></div>
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
              <p className="text-gray-300">+1 (555) 123-4567</p>
              <p className="text-sm text-gray-400">Mon-Fri 9AM-6PM EST</p>
            </div>

            <div className="text-center"></div>
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4"></div>
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
              <p className="text-gray-300">consultation@ziontechgroup.com</p>
              <p className="text-sm text-gray-400">24/7 Response</p>
            </div>

            <div className="text-center"></div>
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4"></div>
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-gray-300">San Francisco, CA</p>
              <p className="text-sm text-gray-400">By Appointment</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4"></section>
        <div className="max-w-4xl mx-auto text-center"></div>
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Transform Your Business Today
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let our expert consultants help you navigate the complex world of AI and technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Schedule Free Consultation</button>
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </button>
              <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConsultationPage;
