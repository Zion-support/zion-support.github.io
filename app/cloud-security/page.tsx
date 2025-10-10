'use client;

import React from 'react;

import { Helmet } from 'react-helmet-async;

import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe, Lock, Eye, ShieldCheck } from lucide-react;

;
<<<<<<< HEAD
const CloudSecurityPage: React.FC = () => {const features = []
    {}
=======

const CloudSecurityPage: React.FC = () => {const features = [;;;

    {
>>>>>>> origin/main
      ico,
    n: Brain,
      title: 'AI-Powered Solutions,
      description: Advanced AI technology to transform your business operations and improve efficiency
    },
    {}
      icon: Zap,
<<<<<<< HEAD
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results'
      icon: Lock,
      title: 'Data Encryption',
      description: 'End-to-end encryption for all data in transit and at rest'
    },
    {}
=======
      title: 'High Performance,
      description: 'Lightning-fast processing and real-time analytics for optimal results
    },    {
>>>>>>> origin/main
      icon: Shield,
      title: 'Security Monitoring,
      description: 24/7 security monitoring and threat detection
    },
    {}
      icon: Eye,
      title: 'Access Control,
      description: Advanced access control and identity management
    },
    {}
      icon: ShieldCheck,
      title: 'Compliance,
      description: Meet industry compliance standards and regulations
    }

  ];
<<<<<<< HEAD
;
const benefits = []
  const benefits = []
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24;
    'Advanced security monitoring',
    'Real-time threat detection',
    'Enterprise-grade encryption',
    'Compliance with industry standards',
    '24/7 security support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ];
  return (<div className=""min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>"
        <title>Page | Zion Tech Group<
        <meta name="description" content=""Professional Page services by Zion Tech Group. Advanced AI and IT solutions for your business."></meta>"
        <meta name="keywords" content=""page, AI solutions, IT services, Zion Tech Group, page"></meta>"
      <

            <
            <p className=""text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>"
=======

;

const benefits = [;
    'Advanced AI technology integration,
    'Real-time processing and analytics,
    'Enterprise-grade security and compliance,
    'Scalable and flexible solutions,
    24
    'Advanced security monitoring',    'Real-time threat detection,
    'Enterprise-grade encryption,
    'Compliance with industry standards,
    '24/7 security support,
    'Easy integration with existing systems,
    'Cost-effective pricing plans,
    Proven track record of success
  ];

  return (<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900>
      
        <title>Page | Zion Tech Group<
        <meta name="description" content="Professional Page services by Zion Tech Group. Advanced AI and IT solutions for your business. 
        <meta name="keywords" content="page, AI solutions, IT services, Zion Tech Group, page 
      <

            <
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto>
>>>>>>> origin/main
              Transform your business with our advanced page solutions. 
              Powered by cutting-edge AI technology and industry expertise.
            <
            <
<<<<<<< HEAD
            <p className=""text-xl text-gray-300 max-w-3xl mx-auto"></p>"
=======
            <p className="text-xl text-gray-300 max-w-3xl mx-auto>
>>>>>>> origin/main
              Our page solutions deliver unmatched performance, security, and scalability.
            <
          <

          <
        <
      <

            <
<<<<<<< HEAD
            <p className=""text-xl text-gray-300 max-w-3xl mx-auto"></p>"
=======
            <p className="text-xl text-gray-300 max-w-3xl mx-auto>
>>>>>>> origin/main
              Experience the power of our page solutions for your business.
            <
          <

          <
        <
      <

              Ready to Get Started?
            <
<<<<<<< HEAD
            <p className=""text-xl text-purple-100 mb-8"></p>"
              Contact our experts to discuss your page needs and get a customized solution.
            <
            <div className=""flex flex-col sm: flex-row gap-4 justify-center"></div>"
              <button className=""bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hove,"></button>"
    r:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <Mail className=""mr-2 h-5 w-5"></Mail>"
                Email Us;
=======
            <p className="text-xl text-purple-100 mb-8>
              Contact our experts to discuss your page needs and get a customized solution.
            <
            <div className="flex flex-col sm: flex-row gap-4 justify-center>
              <button className=bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hove,
    r:bg-gray-100 transition-all duration-300 flex items-center justify-center>
                
                <Mail className="mr-2 h-5 w-5 
                Email Us
>>>>>>> origin/main
              <
            <
          <
        <
      <
    <)
<<<<<<< HEAD
  return (
    <div className=""min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>"
      <Helmet></Helmet>
        <title>Cloud Security | Zion Tech Group</title>
        <meta name="description" content=""Professional Cloud Security services by Zion Tech Group. Advanced AI and IT solutions for your business." /></meta>"
        <meta name="keywords" content=""cloud security, cybersecurity, data protection, AI solutions, IT services, Zion Tech Group" /></meta>"
      </Helmet>
      {/* Hero Section */}
      <section className=""relative py-20 px-4"></section>"
        <div className=""max-w-7xl mx-auto text-center"></div>"
          <h1 className=""text-4xl md:text-6xl font-bold text-white mb-6"></h1>"
            Cloud Security;
          </h1>
          <p className=""text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>"
            Transform your business with our advanced cloud security solutions. 
            Powered by cutting-edge AI technology and industry expertise.
          </p>
        </div>
      </section>
      {/* Features Section */}
      <section className=""py-16 px-4"></section>"
        <div className=""max-w-7xl mx-auto"></div>"
          <div className=""text-center mb-12"></div>"
            <h2 className=""text-3xl md:text-4xl font-bold text-white mb-4"></h2>"
              Why Choose Our Cloud Security?
            </h2>
            <p className=""text-xl text-gray-300 max-w-3xl mx-auto"></p>"
              Our cloud security solutions deliver unmatched performance, security, and scalability.
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
              Experience the power of our cloud security solutions for your business.
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
            Contact our experts to discuss your cloud security needs and get a customized solution.
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
    </div>
=======
    </div>)
>>>>>>> origin/main
  );

};
<<<<<<< HEAD
export default CloudSecurityPage;
=======

export default CloudSecurityPage;
>>>>>>> origin/main
