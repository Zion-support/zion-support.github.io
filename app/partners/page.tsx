
interface Partner {}
  name: string;

  logo: string;

  description: string;

  category: string;

  website?: string;

  tier: 'strategic' | 'preferred' | 'certified});)
}

const PartnersPage: React.FC = () => {}
  const partners: Partner[] = [
    {
      name: 'Microsoft,
      logo: '/images/partners/microsoft.png,
      description: 'Strategic partnership for Azure cloud solutions and AI services,
      category: 'Cloud & AI,
      website: 'https://microsoft.com,
      tier: 'strategic
    },    {
      name: 'Amazon Web Services,
      logo: '/images/partners/aws.png,
      description: 'Leading cloud infrastructure and machine learning platform provider,
      category: 'Cloud Computing,
      website: 'https://aws.amazon.com,
      tier: 'strategic
    },
      tier: 'strategic});)},
    {
      name: 'Google Cloud,
      logo: '/images/partners/google-cloud.png,
      description: 'Advanced AI and machine learning platform with global reach,
      category: 'Cloud & AI,
      website: 'https://cloud.google.com,
      tier: 'strategic
    },    {
      name: 'IBM,
      logo: '/images/partners/ibm.png,
      description: 'Enterprise AI solutions and hybrid cloud platform,
      category: 'Enterprise AI,
      website: 'https://ibm.com,
      tier: 'preferred
    },
    {
      name: 'Salesforce,
      logo: '/images/partners/salesforce.png,
      description: 'Customer relationship management and business automation,
      description: 'Customer relationship management and business automation platform',      category: 'CRM & Automation,
      website: 'https://salesforce.com,
      tier: 'preferred});)
},
    {
      name: 'Oracle,
      logo: '/images/partners/oracle.png,
      description: 'Database solutions and enterprise applications,
      category: 'Database & Enterprise,
      website: 'https://oracle.com,
      tier: 'preferred});)
},
    {
      name: 'ServiceNow,
      logo: '/images/partners/servicenow.png,
      description: 'IT service management and workflow automation,
      category: 'IT Management,
      website: 'https://servicenow.com,
      tier: 'certified});)
},
    {
      name: 'Splunk,
      logo: '/images/partners/splunk.png,
      description: 'Data analytics and security monitoring platform,
      category: 'Analytics & Security,
      website: 'https://splunk.com,
      tier: 'certified
    }  ];

  const benefits = [;;

    'Access to cutting-edge technology platforms,
    'Joint go-to-market strategies,
    'Co-marketing opportunities,
    'Technical support and training,
    'Early access to new features,
    Dedicated partner success manager
  ];

  const partnershipTiers = [;;

    {
      name: 'Strategic,
      description: 'Deep integration and co-innovation,
      bgColor: 'bg-gradient-to-br from-purple-500/20 to-blue-500/20,
      borderColor: 'border-purple-400/50,
      icon: Award
    },
    {
      name: 'Preferred,
      description: 'Enhanced support and collaboration,
      bgColor: 'bg-gradient-to-br from-blue-500/20 to-cyan-500/20,
      borderColor: 'border-blue-400/50,
      icon: Handshake
    },
    {
      name: 'Certified,
      description: 'Verified expertise and capabilities,
      bgColor: 'bg-gradient-to-br from-green-500/20 to-emerald-500/20,
      borderColor: 'border-green-400/50,

const PartnersPage: React.FC = () => {
  const partners = [

      logo: '/api/placeholder/200/100',
      description: 'Strategic partnership for Azure cloud solutions and AI services',
      category: 'Cloud & AI'
      description: 'Strategic cloud and AI solutions partner',
      category: 'Cloud & AI',
      website: 'https://microsoft.com',
      tier: 'strategic'
      logo: '/api/placeholder/200/100',
      description: 'Leading cloud infrastructure and machine learning platform provider',
      category: 'Cloud Computing',
      tier: 'Platinum'
    },
    {
      name: 'Google Cloud',
      logo: '/api/placeholder/200/100',
      description: 'Advanced AI and analytics solutions with Google Cloud Platform',
      category: 'AI & Analytics',
      tier: 'Gold'
    },
    {
      name: 'IBM',
      logo: '/api/placeholder/200/100',
      description: 'Enterprise AI and quantum computing solutions',
      category: 'Enterprise AI',
      tier: 'Gold'
    },
    {
      name: 'Salesforce',
      logo: '/api/placeholder/200/100',
      description: 'CRM and customer experience platform integration',
      category: 'CRM & Sales',
      tier: 'Silver'
    },
    {
      name: 'Oracle',
      logo: '/api/placeholder/200/100',
      description: 'Database and enterprise application solutions',
      category: 'Database & ERP',
      tier: 'Silver'
    },
    {
      name: 'NVIDIA',
      logo: '/api/placeholder/200/100',
      description: 'GPU computing and AI acceleration technologies',
      category: 'AI Hardware',
      tier: 'Silver'
    },
    {
      name: 'Intel',
      logo: '/api/placeholder/200/100',
      description: 'Advanced processor technologies for AI workloads',
      category: 'Hardware',
      tier: 'Silver'
    }
  ];

  const benefits = [
    'Access to cutting-edge technology platforms',
    'Joint go-to-market strategies',
    'Technical training and certification programs',
    'Priority support and escalation',
    'Co-marketing opportunities',
    'Early access to new features and products',
    'Dedicated partner success managers',
    'Revenue sharing opportunities',
    'Technical integration support',
    'Joint customer success programs'
  ];

  const partnerTiers = [
    {
      name: 'Platinum',
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/20',
      borderColor: 'border-cyan-500',
      description: 'Strategic partnerships with maximum benefits'
    },
    {
      name: 'Gold',
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/20',
      borderColor: 'border-yellow-500',
      description: 'Premium partnerships with extensive benefits'
    },
    {
      name: 'Silver',
      color: 'text-gray-400',
      bgColor: 'bg-gray-500/20',
      borderColor: 'border-gray-500',
      description: 'Standard partnerships with core benefits'
    }
  ];

  const getTierInfo = (tier: string) => {
    return partnerTiers.find(t => t.name === tier) || partnerTiers[2];
  };

  return (
    <>
  </>
      <Helmet>
        <title>Partners | Zion Tech Group</title>
        <meta name="description" content="Discover our strategic partnerships with leading technology companies. Learn about our partner ecosystem and collaboration opportunities." />
        <meta name="keywords" content="partners, partnerships, technology partners, strategic alliances, Microsoft, AWS, Google Cloud" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
              Our Partners
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We collaborate with industry leaders to deliver the most advanced AI and IT solutions. 
              Our strategic partnerships enable us to provide cutting-edge technology and comprehensive support.
            </p>
          </div>
        </section>

        {/* Partners Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
              Strategic Technology Partners
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {partners.map((partner, index) => {
                const tierInfo = getTierInfo(partner.tier);
                return (
                  <div
                    key={index}
                    className={`cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300 border ${tierInfo.borderColor}`}
                  >
                    <div className="text-center mb-4">
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="w-24 h-12 object-contain mx-auto mb-4"
                      />
                      <h3 className="text-lg font-bold text-white mb-2">{partner.name}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${tierInfo.bgColor} ${tierInfo.color}`}>
                        {partner.tier} Partner
                      </span>
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-gray-300 text-sm mb-2">{partner.description}</p>
                      <span className="text-cyan-400 text-xs font-medium">{partner.category}</span>
                    </div>
                    
                    <button className="w-full py-2 px-4 bg-gray-800/50 border border-gray-600 rounded-lg text-gray-300 hover:bg-gray-700/50 transition-colors text-sm">
                      Learn More
                      <ExternalLink className="w-4 h-4 inline ml-2" />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Partnership Benefits */}
        <section className="py-16 px-4 bg-gray-900/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
              Partnership Benefits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="cyber-card hologram-card p-8 text-center">
                <Globe className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">Global Reach</h3>
                <p className="text-gray-300">
                  Access to worldwide markets and customer bases through our partner network
                </p>
              </div>
              
              <div className="cyber-card hologram-card p-8 text-center">
                <Zap className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">Innovation</h3>
                <p className="text-gray-300">
                  Early access to cutting-edge technologies and joint innovation programs
                </p>
              </div>
              
              <div className="cyber-card hologram-card p-8 text-center">
                <Shield className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">Support</h3>
                <p className="text-gray-300">
                  Comprehensive technical support and dedicated partner success managers
                </p>
              </div>
            </div>
            
            <div className="mt-12 cyber-card hologram-card p-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">What Our Partners Get</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  ))
                ))}
              </div>
      description: 'Preferred cloud infrastructure partner',
      category: 'Cloud Infrastructure',
      website: 'https://aws.amazon.com',
      tier: 'strategic'
    },
      tier: 'strategic'});;)
},
    {}
      name: 'Google Cloud',
      logo: '/images/partners/google-cloud.png',
      description: 'Advanced AI and machine learning platform with global reach',
      category: 'Cloud & AI',
      website: 'https://cloud.google.com',
      tier: 'strategic'
    },
    {}
      name: 'IBM',
      logo: '/images/partners/ibm.png',
      description: 'Enterprise AI solutions and hybrid cloud platform',
      category: 'Enterprise AI',
      website: 'https://ibm.com',
      tier: 'preferred'
    },
    {}
      name: 'Salesforce',
      logo: '/images/partners/salesforce.png',
      description: 'Customer relationship management and business automation',
      description: 'Customer relationship management and business automation platform',
      category: 'CRM & Automation',
      website: 'https://salesforce.com',
      tier: 'preferred'});;)
},
    {}
      name: 'Splunk',
      logo: '/images/partners/splunk.png',
      description: 'Data analytics and security monitoring platform',
      category: 'Analytics & Security',
      website: 'https://splunk.com',
      tier: 'certified'
    }
  ];

  const benefits = [
      icon: CheckCircle
    }

  ];

  const getTierInfo = (tier: string) => {;;

    return partnershipTiers.find(t => t.name.toLowerCase().includes(tier)) || partnershipTiers[2]});)
};

const PagePage: React.FC = () => {}
  return (

    <>
      <Helmet>
        <title>Partners - Zion Tech Group | Strategic Technology Partnerships</title>
        <meta name="description" content="Explore our strategic partnerships with leading technology companies. We work with Microsoft, AWS, Google Cloud, and more to deliver cutting-edge solutions. />
        <meta name="keywords" content="technology partners, strategic partnerships, Microsoft, AWS, Google Cloud, IBM, enterprise solutions />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900>
        {/* Hero Section */}

        <section className="py-20 px-4>
          <div className="max-w-7xl mx-auto text-center>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6>
              Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400>Partnerships</span>
            </h1>
            <p></p>
              We partner with industry leaders to deliver cutting-edge AI and IT solutions. Our strategic alliances ensure you get the best technology available.
            </p>

            <div></div>
              <div></div>
                <di></di>50+</div>
                <di></di>Technology Partners</div>
              </div>
              <div></div>
                <di></di>15+</div>
                <di></di>Years of Partnership</div>
              </div>
              <div></div>
                <di></di>100%</div>
                <di></di>Certified Solutions</div>
              </div>
            </div>
          </div>
        </section>

        {/* Partnership Tiers */}

        <section></section>
          <div></div>
            <div></div>
              <h></h>Partnership Tiers</h2>
              <p></p>
                Our partnerships are structured to provide maximum value and support for our clients.
              </p>
            </div>

            <div></div>
              {partnershipTiers.map((tier, index) => (

                <div></div>
                  <div></div>
                    <tier.icon className={`w-8 h-8 ${tier.color}} />
                  </div>
                  <h></h>{tier.name}</h3>
                  <p className="text-gray-300>{tier.description}</p>
                </div>
              ));

            </div>
          </div>
        </section>

        {/* Partners Grid */}

        <section className="py-16 px-4>
          <div className="max-w-7xl mx-auto>
            <div className="text-center mb-16>
              <h2 className="text-3xl font-bold text-white mb-6>Our Technology Partners</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto>
                We work with the worlds leading technology companies to deliver comprehensive solutions.
              </p>
            </div>

            <div></div>
    </>
  )
                return (

    <>
      <div></div>
                    <div></div>
                      <div></div>
                        <di></di>{partner.name.charAt(0);</div>}
                      </div>
                      <h3></h3>
                        {partner.name}

                      </h3>
                      <p className="text-sm text-gray-300 mb-3>{partner.description}</p>
                      <div></div>
                        {partner.category}

                      </div>
                      {partner.website && (

                        <a></a>
                          Visit Website
                          <ExternalLink className="w-3 h-3 />
                        </a>
                      );

                    </div>
                  </div>
                );

              })}

            </div>
          </div>
        </section>

        {/* Partnership Benefits */}

        <section className="py-16 px-4>
          <div className="max-w-7xl mx-auto>
            <div className="text-center mb-16>
              <h2 className="text-3xl font-bold text-white mb-6>Partnership Benefits</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto>
                Our strategic partnerships provide significant advantages for your business.
              </p>
            </div>

            <div></div>
              <div></div>
                {benefits.map((benefit, index) => (

                  <div></div>
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1 />
                    <span className="text-gray-300>{benefit}</span>
                  </div>
                ));

              </div>
            </div>
          </div>
        </section>

        {/* Become a Partner CTA */}

        <section></section>
          <div></div>
            <div></div>
              <h></h>Become a Partner</h2>
              <p></p>
                Interested in partnering with us? Were always looking for innovative companies to join our ecosystem.
              </p>
              <div></div>
                <button></button>
                  <Handshake className="w-5 h-5 />
                  Partner With Us
                </button>
                <button></button>
                  <TrendingUp className="w-5 h-5 />
                  View Partnership Program
                </button>
              </div>
      nam,    e: 'Microsoft,
      logo: /api/placeholder/200
      descriptio,
    n: 'Strategic partnership for Azure cloud solutions and AI services,
      category: Cloud & AI
    },
    {
      name: 'Amazon Web Services,
      logo: /api/placeholder/200
      descriptio,
    n: 'Leading cloud infrastructure and machine learning platform provider,
      category: Cloud Computing
    },
    {
      name: 'Google Cloud,
      logo: /api/placeholder/200
    },
    {
      name: 'IBM,
      logo: /api/placeholder/200
  ];

  return (<div>
                <)
              ))}

            <

            <div className=bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white
              <h2 className="text-2xl font-bold text-white mb-6 text-center>Partnership Benefits<
              <div className=grid grid-cols-1 md: grid-cols-2 l,
    g:grid-cols-3 gap-4>
                {benefits.map((benefit), index) => (<div key={index} className="flex items-center space-x-3>
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 
                    <span className="text-gray-300>{benefit}<
                  <)
                ))}

              <
            <
          <
        <
      <
    <
        <title>Partners - Zion Tech Group | Strategic Technology Partnerships</title>
        <meta name="description" content="Explore our strategic partnerships with leading technology companies. We work with Microsoft, AWS, Google Cloud, and more to deliver cutting-edge solutions. />
        <meta name="keywords" content="technology partners, strategic partnerships, Microsoft, AWS, Google Cloud, IBM, enterprise solutions />
      </Helmet>

      {/* Hero Section */}

      <section className="relative py-20 px-4 sm:px-6 lg:px-8>
        <div className="max-w-7xl mx-auto>
          <div className="text-center>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6>
              Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400>Partnerships</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto>
              Professional Page services by Zion Tech Group. Advanced AI and IT solutions for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center>
              <Link
                to="/contact
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 px-8 py-4 rounded-lg font-semibold hover:from-cyan-300 hover:to-purple-300 transition-all duration-300
              >
                Get Started
                <ArrowRight className="w-5 h-5 />
              </Link>
              <Link
                to="/services
                className="inline-flex items-center gap-2 bg-slate-700 text-white px-8 py-4 rounded-lg font-semibold border border-slate-600 hover:bg-slate-600 transition-all duration-300
              >
                Learn More
                <ArrowRight className="w-5 h-5 />
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}

        <section className="py-16 px-4>
          <div className="max-w-7xl mx-auto>
            <h2 className="text-3xl font-bold text-white mb-12 text-center>Why Choose Our Page Services?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center>
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center>
                  <CheckCircle className="w-8 h-8 text-white />
                </div>
                <h3 className="text-xl font-bold text-white mb-3>Expert Solutions</h3>
                <p className="text-gray-300>Professional Page services with proven results</p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center>
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center>
                  <CheckCircle className="w-8 h-8 text-white />
                </div>
                <h3 className="text-xl font-bold text-white mb-3>24/7 Support</h3>
                <p className="text-gray-300>Round-the-clock assistance for your business needs</p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center>
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center>
                  <CheckCircle className="w-8 h-8 text-white />
                </div>
                <h3 className="text-xl font-bold text-white mb-3>Custom Solutions</h3>
                <p className="text-gray-300>Tailored Page solutions for your specific requirements</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}

        <section className="py-16 px-4>
          <div className="max-w-4xl mx-auto text-center>
            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 md:p-12>
              <h2 className="text-3xl font-bold text-white mb-4>
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8>
                Contact our experts to discuss your Page needs and get a customized solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center>
                <a
                  href="tel:+13024640950
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 px-8 py-4 rounded-lg font-semibold hover:from-cyan-300 hover:to-purple-300 transition-all duration-300
                >
                  <Phone className="w-5 h-5 />
                  Call Now
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com
                  className="inline-flex items-center gap-2 bg-slate-700 text-white px-8 py-4 rounded-lg font-semibold border border-slate-600 hover:bg-slate-600 transition-all duration-300
                >
                  <Mail className="w-5 h-5 />
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Partner Tiers */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
              Partnership Tiers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {partnerTiers.map((tier, index) => (
                <div
                  key={index}
                  className={`cyber-card hologram-card p-8 text-center border ${tier.borderColor}`}
                >
                  <div className={`w-16 h-16 ${tier.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <Star className={`w-8 h-8 ${tier.color}`} />
                  </div>
                  <h3 className={`text-2xl font-bold ${tier.color} mb-4`}>{tier.name}</h3>
                  <p className="text-gray-300 mb-6">{tier.description}</p>
                  <ul className="text-left space-y-2 text-gray-300">
                    <li>• Technical training programs</li>
                    <li>• Marketing support</li>
                    <li>• Co-selling opportunities</li>
                    <li>• Priority support</li>
                    {tier.name === 'Platinum' && (
                      <>
                        <li>• Dedicated success manager</li>
                        <li>• Custom integration support</li>
                        <li>• Revenue sharing</li>
                      </>
                    )}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="cyber-card hologram-card p-12 text-center">
              <h2 className="text-3xl font-bold text-white mb-6 neon-text">
                Become Our Partner
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join our ecosystem of technology leaders and unlock new opportunities for growth, 
                innovation, and customer success.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="cyber-button text-center">
                  Apply for Partnership
                  <ExternalLink className="w-4 h-4 inline ml-2" />
                </button>
                <a
                  href="mailto:partners@ziontechgroup.com"
                  className="border-2 border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300 text-center"
                >
                  Contact Partners Team
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
        </div>
      </section>
    </div>
  );};

export default PartnersPage;
    {
      icon: <Handshake className="w-8 h-8 text-blue-600" />,
      title: 'Strategic Partnerships',
      description: 'Long-term relationships with industry leaders for mutual growth and innovation.'
    },
    {
      icon: <Award className="w-8 h-8 text-green-600" />,
      title: 'Certified Expertise',
      description: 'Certified professionals with deep expertise in partner technologies and solutions.'
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-600" />,
      title: 'Faster Implementation',
      description: 'Accelerated project delivery through proven methodologies and best practices.'
    },
    {
      icon: <Users className="w-8 h-8 text-orange-600" />,
      title: 'Dedicated Support',
      description: 'Access to partner support teams and specialized resources for your projects.'
    }
  ];

  const partnerTiers = {
    strategic: {
      title: 'Strategic Partners',
      description: 'Our most important partnerships with industry leaders',
      color: 'bg-blue-100 text-blue-800'
    },
    preferred: {
      title: 'Preferred Partners',
      description: 'Trusted partners with proven track records',
      color: 'bg-green-100 text-green-800'
    },
    certified: {
      title: 'Certified Partners',
      description: 'Certified solution providers with specialized expertise',
      color: 'bg-purple-100 text-purple-800'
    }
  };

  const groupedPartners = partners.reduce((acc, partner) => {
    if (!acc[partner.tier]) {
      acc[partner.tier] = [];
    }
    acc[partner.tier].push(partner);
    return acc;
  }, {} as Record<string, Partner[]>);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900">
      <Helmet>
        <title>Partners - Zion Tech Group</title>
        <meta name="description" content="Join our partner ecosystem and grow your business with Zion Tech Group's AI and IT solutions." />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(6,182,212,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Partner With
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Zion Tech Group
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join our growing ecosystem of partners and unlock new opportunities for growth, 
            innovation, and success in the AI and IT solutions market.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25">
              Become a Partner
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </button>
            <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              View Partner Portal
            </button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Partner With Us</h2>
            <p className="text-xl text-gray-300">Join our ecosystem of successful partners</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Types Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Partnership Types</h2>
            <p className="text-xl text-gray-300">Choose the partnership model that fits your business</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnerTypes.map((type, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:border-cyan-400/50 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-4">{type.title}</h3>
                <p className="text-gray-300 mb-6">{type.description}</p>
                <ul className="space-y-3">
                  {type.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Partner Success Stories</h2>
            <p className="text-xl text-gray-300">See how our partners have grown with us</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <Star className="w-5 h-5 text-yellow-400 mr-2" />
                <span className="text-yellow-400 font-semibold">5.0 Rating</span>
              </div>
              <p className="text-gray-300 mb-4">
                "Partnering with Zion Tech Group has transformed our business. 
                The AI solutions integration was seamless and our revenue increased by 300%."
              </p>
              <div className="text-cyan-400 font-semibold">- TechCorp Solutions</div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <Award className="w-5 h-5 text-cyan-400 mr-2" />
                <span className="text-cyan-400 font-semibold">Top Performer</span>
              </div>
              <p className="text-gray-300 mb-4">
                "The support and resources provided by Zion Tech Group helped us 
                expand into 15 new markets within 6 months."
              </p>
              <div className="text-cyan-400 font-semibold">- Global Systems Inc</div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <Zap className="w-5 h-5 text-purple-400 mr-2" />
                <span className="text-purple-400 font-semibold">Fast Growth</span>
              </div>
              <p className="text-gray-300 mb-4">
                "Their innovative AI solutions gave us a competitive edge. 
                We've seen 500% growth in our customer base."
              </p>
              <div className="text-cyan-400 font-semibold">- InnovateTech</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Join Our Partner Ecosystem?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can work together to drive mutual success and 
              deliver exceptional value to your customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25">
                Apply to Partner
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Download Partner Kit
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PartnersPage;
