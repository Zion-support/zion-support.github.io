'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe, Cloud, Server, Database } from 'lucide-react';
;
const CloudMigrationServicesPage: React.FC = () => {const features="[]"
    {}
      icon: Cloud,
      title: 'Cloud Migration',
      description: 'Seamless migration to cloud platforms with minimal downtime'
    },
    {}
      icon: Server,
      title: 'Infrastructure Setup',
      description: 'Complete cloud infrastructure setup and configuration'
    },
    {}
      icon: Database,
      title: 'Database Migration',
      description: 'Secure and efficient database migration services'
    },
    {}
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security and compliance standards'
    }
  ];
;
const benefits="[]"
    'Seamless cloud migration',
    'Minimal downtime during migration',
    'Cost-effective solutions',
    'High availability and reliability',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ];

  return (
    <div className=""min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>"
      <Helmet></Helmet>
        <title>Cloud Migration Services | Zion Tech Group</title>
        <meta name="description" content=""Professional Cloud Migration Services by Zion Tech Group. Advanced AI and IT solutions for your business." /></meta>"
        <meta name="keywords" content=""cloud migration, cloud services, migration services, AI solutions, IT services, Zion Tech Group" /></meta>"
      </Helmet>
      {/* Hero Section */}
      <section className=""relative py-20 px-4"></section>"
        <div className=""max-w-7xl mx-auto text-center"></div>"
          <h1 className=""text-4xl md:text-6xl font-bold text-white mb-6"></h1>"
            Cloud Migration Services;
          </h1>
          <p className=""text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>"
            Transform your business with our advanced cloud migration solutions. 
            Powered by cutting-edge AI technology and industry expertise.
          </p>
        </div>
      </section>
      {/* Features Section */}
      <section className=""py-16 px-4"></section>"
        <div className=""max-w-7xl mx-auto"></div>"
          <div className=""text-center mb-12"></div>"
            <h2 className=""text-3xl md:text-4xl font-bold text-white mb-4"></h2>"
              Why Choose Our Cloud Migration Services?
            </h2>
            <p className=""text-xl text-gray-300 max-w-3xl mx-auto"></p>"
              Our cloud migration solutions deliver unmatched performance, security, and scalability.
            </p>
          </div>
          <div className=""grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>"
            {features.map((feature, index) => (
              <div key={index} className=""bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"></div>"
                <feature.icon className=""w-12 h-12 text-purple-400 mb-4" /></feature>"
                <h3 className=""text-xl font-semibold text-white mb-2">{feature.title}</h3>"
                <p className=""text-gray-300">{feature.description}</p>"
              </div>
            ))
          </div>
        </div>
      </section>
      {/* Benefits Section */}
      <section className=""py-16 px-4 bg-white/5"></section>"
        <div className=""max-w-7xl mx-auto"></div>"
          <div className=""text-center mb-12"></div>"
            <h2 className=""text-3xl md:text-4xl font-bold text-white mb-4"></h2>"
              Key Benefits;
            </h2>
            <p className=""text-xl text-gray-300 max-w-3xl mx-auto"></p>"
              Experience the power of our cloud migration solutions for your business.
            </p>
          </div>
          <div className=""grid grid-cols-1 md:grid-cols-2 gap-6"></div>"
            {benefits.map((benefit, index) => (
              <div key={index} className=""flex items-center space-x-3"></div>"
                <CheckCircle className=""w-6 h-6 text-green-400 flex-shrink-0" /></CheckCircle>"
                <span className=""text-gray-300">{benefit}</span>"
              </div>
            ))
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className=""py-16 px-4"></section>"
        <div className=""max-w-4xl mx-auto text-center"></div>"
          <h2 className=""text-3xl md:text-4xl font-bold text-white mb-4"></h2>"
            Ready to Get Started?
          </h2>
          <p className=""text-xl text-purple-100 mb-8"></p>"
            Contact our experts to discuss your cloud migration needs and get a customized solution.
          </p>
          <div className=""flex flex-col sm:flex-row gap-4 justify-center"></div>"
            <button className=""bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"></button>"
              <Phone className=""mr-2 h-5 w-5" /></Phone>"
              Call Now;
            </button>
            <button className=""border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center"></button>"
              <Mail className=""mr-2 h-5 w-5" /></Mail>"
              Email Us;
            </button>
          </div>
        </div>
      </section>
    </div>)
export default CloudMigrationServicesPage;