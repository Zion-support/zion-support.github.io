import React from 'react';

  });

  const consultationTypes: ConsultationType[] = [
    {}
      id: 1,
  const consultationServices = [;
    'AI Strategy & Implementation,'
    'Cloud Migration Planning,'
    'Cybersecurity Assessment,'
    'Digital Transformation,'
    'IT Infrastructure Review,'
    'Technology Roadmap Development;'
  ];

  const consultationTypes: ConsultationType[] = [
    {
      id: '1,'
      name: 'Discovery Call,'
      description: 'Initial consultation to understand your business needs and challenges,'
      duration: '30 minutes,'
      price: 'Free,'
      features: [
        'Business needs assessment,'
        'Technology evaluation,'
        'Initial recommendations,'
        'Next steps planning]'
      ],
    },
    {}
      id: 2,
      name: 'Strategic Planning,'
      description: 'Comprehensive analysis and strategic roadmap for your AI transformation,'
      duration: '2 hours,'
      price: '$500,'
      features: [
        'Deep dive into current systems,'
        'AI readiness assessment,'
        'Strategic roadmap creation,'
        'Implementation timeline,'
        'ROI projections,'
        'Follow-up support]'
      ],
      popular: true;
    },
    {}
      id: 3,
      name: 'Technical Deep Dive,'
      description: 'Detailed technical analysis and architecture recommendations,'
      duration: '4 hours,'
      price: '$1,200,'
      features: [},
    {
      id: '3,'
      name: 'Technical Deep Dive,'
      description: 'In-depth technical analysis and solution architecture design,'
      duration: '4-8 hours,'
      price: '$1,200,'
      features: [
        'Technical architecture review,'
        'Security assessment,'
        'Performance optimization,'
        'Integration planning,'
        'Scalability analysis,'
        'Detailed technical documentation]'
      ],
    },
    {}
      id: 4,
      name: 'Executive Briefing,'
      description: 'High-level overview for C-level executives and decision makers,'
      duration: '1 hour,'
      price: '$300,'
      features: [
        'Executive summary,'
        'Business impact analysis,'
        'Investment recommendations,'
        'Risk assessment,'
        'Competitive advantages]'
      ],
      ],
      popular: false});)}

const ConsultationPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
    preferredTime: '',
    budget: '
  });

  const services = [
    {
      icon: Brain,
      title: 'AI Strategy & Implementation',
      description: 'Develop and implement AI solutions tailored to your business needs',
      duration: '2-4 hours'
    },
    {
      icon: Cloud,
      title: 'Cloud Migration & Architecture',
      description: 'Plan and execute cloud migration strategies for optimal performance',
      duration: '2-3 hours'
    },
    {
      icon: Shield,
      title: 'Cybersecurity Assessment',
      description: 'Comprehensive security evaluation and risk mitigation strategies',
      duration: '3-4 hours'
    },
    {
      icon: Zap,
      title: 'Digital Transformation',
      description: 'Complete digital transformation roadmap and implementation plan',
      duration: '4-6 hours'
    }
  ];

  const experts = [    {;
      name: 'Dr. Sarah Chen,'
      role: 'AI & Machine Learning Consultant,'
      experience: '15+ years,'
      expertise: ['AI Strategy', 'Machine Learning', 'Data Science],'
      image: '/images/experts/sarah-chen.jpg});)'
},
    {
      name: 'Michael Rodriguez,'
      role: 'Cloud Architecture Specialist,'
      experience: '12+ years,'
      expertise: ['Cloud Migration', 'AWS', 'Azure', 'DevOps],'
      image: '/images/experts/michael-rodriguez.jpg;'
    },
    {      name: 'Alex Thompson,'
      role: 'Cybersecurity Consultant,'
      experience: '10+ years,'
      expertise: ['Security Audits', 'Compliance', 'Risk Management],'
      image: '/images/experts/alex-thompson.jpg});)'
}

  ];

  const handleBooking = (typeId: string) => {;
    setSelectedType(typeId);

    console.log(`Booking consultation: ${typeId});

    }

  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {    const { name, value } = e.target;;

    setFormData(prev => ({
    const { name, value } = e.target;
    setFormData(prev => ({}
      ...prev,
      [name]: value;
    }));

  };

  const handleSubmit = (e: React.FormEvent) => {;;

    e.preventDefault();

    // Handle form submission
    console.log('Form submitted:, formData);'

  };

const PagePage: React.FC = () => {}
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value;
    }));
  };

  return (
    <div>
  )
    </div>
  );
  );
  )
    <>
      <Helmet>
        <title>Consultation - Zion Tech Group | Expert AI & IT Consulting</title>
        <meta name="description" content="Get expert consultation on AI implementation, digital transformation, and IT strategy. Free discovery calls and comprehensive planning sessions available. />"
        <meta name="keywords" content="AI consultation, IT consulting, digital transformation, technology strategy, business consulting />"
        <meta property="og:title" content="Consultation - Zion Tech Group />"
        <meta property="og:description" content="Expert consultation for your AI and IT needs />"
        <meta property="og:type" content="website />"
        <meta property="og:url" content="https://ziontechgroup.com/consultation />
      </Helmet>
  const Component = () => {
  
    return (<div>
  )
        <title>Consultation - Zion Tech Group | Expert IT Consulting<
        <meta name="description" content="Get expert consultation on AI, cloud computing, cybersecurity, and IT strategy. Book a consultation with our experienced team. "
        <meta name="keywords" content="IT consultation, AI consulting, cloud consulting, cybersecurity consulting, technology strategy ;
      <

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900>
        {/* Hero Section */}

        <section className="pt-24 pb-16 px-4">          <div className="max-w-7xl mx-auto text-center>"
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6>"
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent>
                Page;
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8>
              Get personalized guidance from our experts to transform your business with AI and cutting-edge technology;
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 bg-cyan-400 text-slate-900 font-semibold rounded-lg hover:bg-cyan-300 transition-colors;
              >
                <Phone className="w-5 h-5 mr-2 />
                Call Now: (302) 464-0950;
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-colors;
              >
                <Mail className="w-5 h-5 mr-2 />
                Email Us;
              </a>
            </div>
          </div>
        </section>
  );

        {/* Consultation Types */}

        <section className="py-16 px-4>"
          <div className="max-w-7xl mx-auto>"
            <div className="text-center mb-16>"
              <h2 className="text-3xl font-bold text-white mb-4>Choose Your Consultation Type</h2>"
              <p className="text-xl text-gray-300 max-w-3xl mx-auto>
                Select the consultation that best fits your needs and budget              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center>
                <a
                  href="tel:+13024640950"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 px-8 py-4 rounded-lg font-semibold hover:from-cyan-300 hover:to-purple-300 transition-all duration-300;
                >
                  <Phone className="w-5 h-5 />
                  Call Now;
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="inline-flex items-center gap-2 bg-slate-700 text-white px-8 py-4 rounded-lg font-semibold border border-slate-600 hover:bg-slate-600 transition-all duration-300;
                >
                  <Mail className="w-5 h-5 />
                  Email Us;
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8>
              {consultationTypes.map((type) => (

                <div;
                  key={type.id}

                  className={bg-white/10 backdrop-blur-lg rounded-2xl border p-8 hover:border-cyan-400/50 transition-all duration-300 cursor-pointer ${
                    selectedType === type.id ? 'border-cyan-400' : 'border-white/20'
                  } ${type.popular ? 'ring-2 ring-cyan-400/50' : ''}}'

                  onClick={() => setSelectedType(type.id)}

                >
                  {type.popular && (

                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2>"
                      <span className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-semibold>
                        Most Popular;
                      </span>
                    </div>
                  )}

                  <div className="text-center>"
                    <h3 className="text-2xl font-bold text-white mb-4>{type.name}</h3>"
                    <p className="text-gray-300 mb-6 leading-relaxed>{type.description}</p>
                    
                    <div className="mb-6>"
                      <div className="text-3xl font-bold text-cyan-400 mb-2>{type.price}</div>"
                      <div className="flex items-center justify-center text-gray-400>"
                        <Clock className="w-4 h-4 mr-2 />
                        <span>{type.duration}</span>
                      </div>
                    </div>
                    
                    <ul className="space-y-3 mb-8>
                      {type.features.map((feature, index) => (

                        <li key={index} className="flex items-center text-gray-300>"
                          <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0 />"
                          <span className="text-sm>{feature}</span>
                        </li>
                      ))}

                    </ul>
                    
                    <button className="w-full bg-cyan-400 text-slate-900 font-semibold py-3 rounded-lg hover:bg-cyan-300 transition-colors>
                      Select This Option;
                    </button>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </section>

        {/* Why Choose Us */}

        <section className="py-16 px-4>"
          <div className="max-w-7xl mx-auto>"
            <div className="text-center mb-16>"
              <h2 className="text-3xl font-bold text-white mb-4>Why Choose Our Consultation?</h2>"
              <p className="text-xl text-gray-300 max-w-3xl mx-auto>
                Our experts bring decades of experience in AI, quantum computing, and enterprise technology;
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8>"
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center>"
                <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-6>"
                  <Users className="w-8 h-8 text-cyan-400 />
                </div>
                <h3 className="text-xl font-bold text-white mb-4>Expert Team</h3>"
                <p className="text-gray-300>Our consultants have 15+ years of experience in AI, quantum computing, and enterprise technology.</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center>"
                <div className="w-16 h-16 bg-purple-400/20 rounded-full flex items-center justify-center mx-auto mb-6>"
                  <CheckCircle className="w-8 h-8 text-purple-400 />
                </div>
                <h3 className="text-xl font-bold text-white mb-4>Proven Results</h3>"
                <p className="text-gray-300">Weve helped 500+ companies achieve 300% average ROI through strategic AI implementation.</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center>"
                <div className="w-16 h-16 bg-green-400/20 rounded-full flex items-center justify-center mx-auto mb-6>"
                  <Star className="w-8 h-8 text-green-400 />
                </div>
                <h3 className="text-xl font-bold text-white mb-4>98% Satisfaction</h3>"
                <p className="text-gray-300>Our clients consistently rate our consultation services as excellent and highly valuable.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}

        <section className="py-16 px-4>"
          <div className="max-w-4xl mx-auto>"
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20>"
              <div className="text-center mb-8>"
                <h2 className="text-3xl font-bold text-white mb-4>Schedule Your Consultation</h2>"
                <p className="text-xl text-gray-300>
                  Fill out the form below and well get back to you within 24 hours;
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6>"
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name;
                      value={formData.name}

                      onChange={handleInputChange}

                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
                      placeholder="Enter your full name;
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email;
                      value={formData.email}

                      onChange={handleInputChange}

                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
                      placeholder="Enter your email;
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2>
                      Phone Number;
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone;
                      value={formData.phone}

                      onChange={handleInputChange}

                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
                      placeholder="Enter your phone number;
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2>
                      Company Name;
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company;
                      value={formData.company}

                      onChange={handleInputChange}

                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
                      placeholder="Enter your company name;
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="consultationType" className="block text-sm font-medium text-gray-300 mb-2>
                    Preferred Consultation Type;
                  </label>
                  <select
                    id="consultationType"
                    name="consultationType;
                    value={formData.consultationType}

                    onChange={handleInputChange}

                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors;
                  >
                  <label className="block text-white font-semibold mb-2">Tell us about your project</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Describe your current challenges, goals, and what you hope to achieve..."
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
                  >
                    Schedule Free Consultation
                    <ArrowRight className="inline-block ml-2 w-5 h-5" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
  );
}
      {/* Consultation Types */}
      <section id="consultation-types" className="py-16">"
        <div className="container mx-auto px-4">"
          <div className="max-w-6xl mx-auto">"
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Choose Your Consultation Type
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Consultation;
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Contact Info */}

        <section className="py-16 px-4>"
          <div className="max-w-4xl mx-auto text-center>"
            <h2 className="text-3xl font-bold text-white mb-8>Get in Touch</h2>"
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8>"
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20>"
                <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-6>"
                  <Phone className="w-8 h-8 text-cyan-400 />
                </div>
                <h3 className="text-xl font-bold text-white mb-4>Call Us</h3>"
                <p className="text-gray-300 mb-4>Speak directly with our experts</p>"
                <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 font-semibold>
                  (302) 464-0950;
                </a>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20>"
                <div className="w-16 h-16 bg-purple-400/20 rounded-full flex items-center justify-center mx-auto mb-6>"
                  <Mail className="w-8 h-8 text-purple-400 />
                </div>
                <h3 className="text-xl font-bold text-white mb-4>Email Us</h3>"
                <p className="text-gray-300 mb-4>Send us your questions</p>"
                <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 font-semibold>
                  kleber@ziontechgroup.com;
                </a>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20>"
                <div className="w-16 h-16 bg-green-400/20 rounded-full flex items-center justify-center mx-auto mb-6>"
                  <MapPin className="w-8 h-8 text-green-400 />
                </div>
                <h3 className="text-xl font-bold text-white mb-4>Visit Us</h3>"
                <p className="text-gray-300 mb-4>Our headquarters</p>"
                <p className="text-cyan-400 font-semibold>
                  364 E Main St STE 1008<br />
                  Middletown, DE 19709;
                </p>
              </div>              </div>
            ));

          </div>
        </div>
      </section>

      {/* Expert Team */}

      <section className="py-16 px-4 bg-white/5>"
        <div className="max-w-7xl mx-auto>"
          <h2 className="text-3xl font-bold text-white mb-12 text-center>Meet Our Experts</h2>"
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8>
            {experts.map((expert, index) => (

              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300>"
                <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center>"
                  <span className="text-2xl font-bold text-white">{expert.name.split(' ').map(n => n[0]).join(')}</span>'
                </div>
                <h3 className="text-xl font-bold text-white mb-2>{expert.name}</h3>"
                <p className="text-purple-400 mb-2>{expert.role}</p>"
                <p className="text-gray-400 text-sm mb-4>{expert.experience}</p>"
                <div className="flex flex-wrap justify-center gap-2>
                  {expert.expertise.map((skill, skillIndex) => (

                    <span key={skillIndex} className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-xs>
                      {skill}

                    </span>
                  ))}

                </div>
              </div>
            ))}

            </div>
          </div>
        </section>
      </div>
  const handleCheckboxChange = (challenge: string) => {
    setFormData(prev => ({
      ...prev,
      currentChallenges: prev.currentChallenges.includes(challenge)
        ? prev.currentChallenges.filter(c => c !== challenge)
        : [...prev.currentChallenges, challenge]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Consultation request submitted:', formData);
    alert('Thank you for your interest! We will contact you within 24 hours to schedule your free consultation.');
  };

  const Component = () => {
  
    return (
    <div>
  )
    </div>
  );
  );
  )
    <>
      <Helmet>
        <title>Free Consultation - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Get a free consultation with our AI and IT experts. Discover how we can help transform your business with cutting-edge technology." />"
        <meta name="keywords" content="free consultation, AI consulting, IT consulting, business transformation, technology strategy" />"
        <link rel="canonical" href="https://ziontechgroup.com/consultation" />
      </Helmet>
      
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">"
          <div className="max-w-7xl mx-auto text-center">"
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">"
              Free <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Expert Consultation</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get personalized advice from our certified AI and IT experts. No obligation, just valuable insights for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">"
              <div className="flex items-center text-cyan-400">"
                <CheckCircle className="w-5 h-5 mr-2" />
                <span>100% Free</span>
              </div>
              <div className="flex items-center text-cyan-400">"
                <Clock className="w-5 h-5 mr-2" />
                <span>30-90 Minutes</span>
              </div>
              <div className="flex items-center text-cyan-400">"
                <Users className="w-5 h-5 mr-2" />
                <span>Expert Team</span>
              </div>
            </div>
          </div>
        </section>

        {/* Consultation Types */}
        <section className="py-16 px-4">"
          <div className="max-w-7xl mx-auto">"
            <div className="text-center mb-12">"
              <h2 className="text-4xl font-bold text-white mb-4">Choose Your Consultation Type</h2>"
              <p className="text-xl text-gray-300">Select the consultation that best fits your needs</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {consultationTypes.map((type, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">"
                  <div className="text-center mb-6">"
                    <div className={`w-16 h-16 bg-gradient-to-r ${type.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <type.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{type.title}</h3>"
                    <p className="text-gray-300 mb-4">{type.description}</p>"
                    <div className="flex items-center justify-center space-x-4 text-sm">"
                      <span className="text-cyan-400 font-semibold">{type.duration}</span>"
                      <span className="text-gray-400">•</span>"
                      <span className="text-green-400 font-semibold">{type.price}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {type.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">"
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />"
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Consultation Request Form */}
        <section className="py-16 px-4">"
          <div className="max-w-4xl mx-auto">"
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">"
              <div className="text-center mb-8">"
                <h2 className="text-3xl font-bold text-white mb-4">Request Your Free Consultation</h2>"
                <p className="text-gray-300">Fill out the form below and we'll get back to you within 24 hours</p>'
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">"
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="Your company name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number;
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Job Role *
                    </label>
                    <select
                      name="role"
                      value={formData.role}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    >
                      <option value="">Select your role</option>"
                      <option value="ceo">CEO/Founder</option>"
                      <option value="cto">CTO</option>"
                      <option value="it-director">IT Director</option>"
                      <option value="operations">Operations Manager</option>"
                      <option value="marketing">Marketing Director</option>"
                      <option value="finance">Finance Director</option>"
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Company Size *
                    </label>
                    <select
                      name="companySize"
                      value={formData.companySize}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    >
                      <option value="">Select company size</option>
                      {companySizes.map((size, index) => (
                        <option key={index} value={size}>{size}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    Current Challenges (Select all that apply)
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {challenges.map((challenge) => (
                      <label key={challenge} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.currentChallenges.includes(challenge)}
                          onChange={() => handleCheckboxChange(challenge)}
                          className="w-4 h-4 text-cyan-500 bg-white/10 border-white/20 rounded focus:ring-cyan-500"
                        />
                        <span className="text-sm text-gray-300">{challenge}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Budget Range;
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    >
                      <option value="">Select budget range</option>
                      {budgets.map((budget, index) => (
                        <option key={index} value={budget}>{budget}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Timeline;
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    >
                      <option value="">Select timeline</option>
                      {timelines.map((timeline, index) => (
                        <option key={index} value={timeline}>{timeline}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Additional Information;
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="Tell us more about your specific needs, goals, and any questions you have..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full cyber-button py-4 text-lg font-semibold"
                >
                  <Phone className="w-5 h-5 mr-2 inline" />
                  Request Free Consultation;
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Why Choose Our Consultation */}
        <section className="py-16 px-4 bg-white/5">"
          <div className="max-w-7xl mx-auto">"
            <div className="text-center mb-12">"
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Consultation?</h2>"
              <p className="text-xl text-gray-300">Get expert insights that drive real business value</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">"
              <div className="text-center">"
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">"
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Expert Team</h3>"
                <p className="text-gray-300">15+ years average experience in AI and IT solutions</p>
              </div>
              
              <div className="text-center">"
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">"
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Proven Results</h3>"
                <p className="text-gray-300">300% average ROI for our clients</p>
              </div>
              
              <div className="text-center">"
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">"
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Quick Response</h3>"
                <p className="text-gray-300">We respond within 24 hours</p>
              </div>
              
              <div className="text-center">"
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">"
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Actionable Insights</h3>"
                <p className="text-gray-300">Get practical recommendations you can implement immediately</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );

};

export default ConsultationPage;      <section className="py-16 px-4>"
        <div className="max-w-4xl mx-auto text-center>"
          <h2 className="text-3xl font-bold text-white mb-6>Ready to Get Started?</h2>"
          <p className="text-xl text-gray-300 mb-8>
            Book a consultation with our experts and take the first step towards transforming your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center>"
            <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center>"
              <Calendar className="mr-2 h-5 w-5 />              Schedule Now;
            </button>
            <button></button>
              <Mail className="mr-2 h-5 w-5 />
              Contact Us;
            </button>
          </div>
        </div>
      </section>
    </div>
                <
              <
            <
          <
        <
      <
    <)
  );

};

export default PagePage;
export default ConsultationPage;
