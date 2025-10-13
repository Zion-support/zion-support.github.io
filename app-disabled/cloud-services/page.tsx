'use client';
import React from 'react';
import {Helmet}}from 'react-helmet-async';

import {CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe, Cloud, Server, Database, Lock}}from 'lucide-react';

const CloudServicesPage: React.FC = () => {,
      features: ['AWS, Azure, GCP expertise', 'Zero-downtime migration', 'Cost optimization', 'Security compliance']},
    {icon: Server,
      features: ['Auto-scaling', 'Load balancing', 'High availability', 'Disaster recovery']},
    {icon: Database,
      title: 'Database Solutions',
      description: 'Managed database services with automated backups, monitoring, and optimization.',
      features: ['MySQL, PostgreSQL, MongoDB', 'Automated backups', 'Performance tuning', '24/7 monitoring']},
    {icon: Shield,
      title: 'Cloud Security',}];
  const benefits = [
  ];];];
  const benefits = [;
  ];
        'Up to 5 users'
      ]},
    {name: 'Professional',
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses'
    }
  ];

  const benefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ];

      ]}]
  return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">)</div>
      <Helmet />
      <Helmet>
        <title>Cloud Services - Zion Tech Group | Cloud Solutions & Migration</title>
      {/* Hero Section */} <section className="relative py-20 px-4 sm: px-6 lg:px-8">,</section>
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md: text-6xl font-bold text-white mb-6">,</h1>
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Cloud Services;</span>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">,</div>
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover: from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">,</button>
                Get Started;
                <ArrowRight className="ml-2 h-5 w-5" />
      {/* Services Section */} <section className="py-20 px-4 sm: px-6 lg:px-8">,</section>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-4">,</h2>
              Our Cloud Services;
              <div key={index}className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover: bg-white/20 transition-all duration-300">,</div>
                <div className="flex items-center mb-4">
                  <div className="bg-purple-500 p-3 rounded-lg">
                    <service.icon className="h-6 w-6 text-white" />
                    <li key={featureIndex}className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature} </li>
        </div>
      </section>

      {/* Benefits Section */} <section className="py-20 px-4 sm: px-6 lg:px-8 bg-white/5">,</section>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-4">,</h2>
              Why Choose Our Cloud Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Experience the benefits of working with cloud experts who understand your business needs.</p>
            </p>
          </div>

          <div className="grid md: grid-cols-2 lg:grid-cols-4 gap-8">,</div>
            {benefits.map((benefit, index) => (
              <div key={index}className="text-center">
                <div className="bg-gradient-to-r from-purple-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <p className="text-white font-medium">{benefit</p>}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */} <section className="py-20 px-4 sm: px-6 lg:px-8">,</section>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-4">,</h2>
              Flexible Pricing Plans;
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Choose the plan that best fits your business needs and budget.</p>
            </p>
          </div>

          <div className="grid md: grid-cols-3 gap-8">,</div>
            {pricing.map((plan, index) => (
              <div key={index}className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 relative ${plan.popular ? 'ring-2 ring-purple-500' : ''}`}>{plan.popular && (</div>
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">Most Popular;</span>
                    </span>
                  </div>
                )} <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-white mb-2">{plan.price</div>} <span className="text-lg text-gray-300 font-normal">/{plan.period</span>}</span>
                  </div>
                  <p className="text-gray-300">{plan.description</p>}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex}className="flex items-center text-gray-300">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature} </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular;
                    ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white hover: from-purple-600 hover:to-blue-700',
                    : 'bg-white/20 text-white hover: bg-white/30',}`}>Get Started;</button>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */} <section className="py-20 px-4 sm: px-6 lg:px-8">,</section>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md: text-4xl font-bold text-white mb-6">,</h2>
            Ready to Transform Your Business with Cloud?
          </h2>
          <p className="text-xl text-purple-100 mb-8">Contact our cloud experts to discuss your needs and get a customized solution.</p>
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center">,</div>
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover: bg-gray-100 transition-all duration-300 flex items-center justify-center">,</button>
              <Phone className="mr-2 h-5 w-5" />
              Call Now;
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover: bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">,</button>
              <Mail className="mr-2 h-5 w-5" />
              Email Us;
            </button>
          </div>
        </div>
      </section>
    </div>

  ),
};

export default CloudServicesPage;
  </button>
  </button>
  </h1>
  </div>
        <title>Cloud Services | Zion Tech Group</title>
        <meta name="description" content="Professional cloud services by Zion Tech Group. Advanced cloud solutions for your business." />
        <meta name="keywords" content="cloud services, cloud infrastructure, cloud solutions, Zion Tech Group" />
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        </section>
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Cloud
              </span>
              <br />
              <span className="text-white">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our advanced cloud solutions. 
              Powered by cutting-edge technology and industry expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Why Choose Our Cloud Services?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300 text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-purple-100 mb-8">
                Contact our experts to discuss your cloud needs and get a customized solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Us
                </button>
                <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                  <Mail className="w-5 h-5 mr-2" />
                  Email Us
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
              Why Choose Our Page?
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Contact our experts to discuss your page needs and get a customized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PagePage;
