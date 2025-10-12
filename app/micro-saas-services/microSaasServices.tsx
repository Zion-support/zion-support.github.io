<<<<<<< HEAD
import React from 'react';
=======

import React from 'react';

>>>>>>> cursor/fix-errors-and-merge-to-main-b882
'use client'
import { Helmet } from 'react-helmet-async';

import { ArrowRight, Mail, Brain } from 'lucide-react';
  const features = [
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency',
    },
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results',
    },
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards',
    },
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses',
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
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
=======

        <title>5G Data Analytics - Zion Tech Group</title>

>>>>>>> cursor/fix-errors-and-merge-to-main-b882
        <title>MicroSaasServices | Zion Tech Group</title>
      {/* Hero Section */}
<<<<<<< HEAD
      <section className="w-5 h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <h1 className="w-5 h-5ml-2" />
              <span className="w-5 h-5ml-2" />
                MicroSaasServices

              <span className="text-white">Solutions</span>
            </h1>
            <p className="w-5 h-5ml-2">Transform your business with our advanced microsaasservices solutions.
              Powered by cutting-edge AI technology and industry expertise.
            </p>
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              <button className="w-5 h-5ml-2" />
                Get Started
                <ArrowRight className="w-5 h-5ml-2" />
              </button>
              <button className="w-5 h-5ml-2" />
                Learn More
  </
            </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="w-5 h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <h2 className="w-5 h-5ml-2" />
              Why Choose Our MicroSaasServices?
            </h2>
            <p className="w-5 h-5ml-2">Our microsaasservices solutions deliver unmatched performance, security, and scalability.
            </p>
          </div>
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20transition-allduration-300" />
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                  <feature.icon className="h-6w-6text-white" />
                </div>
                <h3 className="text-xl font-semiboldtext-whitemb-3">{feature.title}</h3>
=======
    
                MicroSaasServices

              <span className="text-white">Solutions</span>
              Transform your business with our advanced microsaasservices solutions.
              Powered by cutting-edge AI technology and industry expertise.
    
                Get Started
    
                Learn More

      {/* Features Section */}
    
              Why Choose Our MicroSaasServices?
    
              Our microsaasservices solutions deliver unmatched performance, security, and scalability.

 (

                <h3 className="text-xl font-semiboldtext-white mb-3">{feature.title}</h3>
>>>>>>> cursor/fix-errors-and-merge-to-main-b882
                <p className="text-gray-300">{feature.description}</p>
            ))}
<<<<<<< HEAD
          </div>
      </section>
      {/* Benefits Section */}
      <section className="w-5 h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <h2 className="w-5 h-5ml-2" />
              Key Benefits
  </
            <p className="w-5 h-5ml-2">Experience the power of our microsaasservices solutions for your business.
            </p>
          </div>
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            {benefits.map((benefit, index) => (
              <div key={index} className="flexitems-startspace-x-3" />
                <CheckCircle className="w-5 h-5ml-2" />
=======
    
      {/* Benefits Section */}
    
              Key Benefits
  
              Experience the power of our microsaasservices solutions for your business.
    
 (
    
>>>>>>> cursor/fix-errors-and-merge-to-main-b882
                <p className="text-gray-300text-lg">{benefit}</p>
            ))}
<<<<<<< HEAD
          </div>
      </section>
      {/* CTA Section */}
      <section className="w-5 h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <h2 className="w-5 h-5ml-2" />
              Ready to Get Started?
            </h2>
            <p className="w-5 h-5ml-2">Contact our experts to discuss your microsaasservices needs and get a customized solution.
            </p>
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              <button className="w-5 h-5ml-2" />
                <Phone className="w-5 h-5ml-2" />
                Call Now
  </
              <button className="w-5 h-5ml-2" />
                <Mail className="w-5 h-5ml-2" />
                Email Us
  </
            </div>
        </div>
      </section>
    </div>
  )}
export default MicroSaasServicesPage
  </button>
  </button>
  </h2>
  </button>
  </span>
=======
    
      {/* CTA Section */}
    
              Ready to Get Started?
    
              Contact our experts to discuss your microsaasservices needs and get a customized solution.
    
                Call Now

                Email Us

  )}
export default MicroSaasServicesPage
>>>>>>> cursor/fix-errors-and-merge-to-main-b882

    {icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency'}
    },
    {icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results'}
    },
    {icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards'}
    },
    {icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses'}
  ];const benefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
<<<<<<< HEAD
  ];return (<div className="min-h-screen bg-gradient-to-br from-slate-900via-purple-900to-slate-900"></div>
      <Helmet>
=======

  ];return (<div>
        </div></div>
        <title>5G Data Analytics - Zion Tech Group</title>

>>>>>>> cursor/fix-errors-and-merge-to-main-b882
        <title>MicroSaasServices | Zion Tech Group</title>
      {/* Hero Section */}
<<<<<<< HEAD
      <section className="relative py-20 px-4sm:px-6lg:px-8"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center"></div>
            <h1 className="w-5 h-5ml-2" />
              <span className="w-5 h-5ml-2" />
                MicroSaasServices
              </span>
              <br />
              <span className="text-white">Solutions</span>
            </h1>
            <p className="w-5 h-5ml-2">Transform your business with our advanced microsaasservices solutions.
              Powered by cutting-edge AI technology and industry expertise.
            </p>
            <div className="flex flex-col sm:flex-rowgap-4 justify-center"></div>
              <button className="w-5 h-5ml-2" />
                Get Started
                <ArrowRight className="w-5 h-5ml-2" />
              </button>
              <button className="w-5 h-5ml-2">Learn More
              </button>
            </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-20p x-4sm:px-6lg:px-8"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-centermb-16"></div>
            <h2 className="w-5 h-5ml-2" />
              Why Choose Our MicroSaasServices?
            </h2>
            <p className="w-5 h-5ml-2">Our microsaasservices solutions deliver unmatched performance, security, and scalability.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2lg:grid-cols-4 gap-8"></div>
            {features.map((feature, index) => (}
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20transition-allduration-300"></div>
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600rounded-lg mb-4"></div>
                  <feature.icon className="h-6w-6text-white" />
                </div>
                <h3 className="text-xl font-semiboldtext-whitemb-3">{feature.title}</h3>
=======

      <section className="relative py-20 px-4sm:px-6lg:px-8" /></section>
        </div></div>
          <div className="text-center" /></div>
                MicroSaasServices
    
              <span className="text-white">Solutions</span>
              Transform your business with our advanced microsaasservices solutions.
              Powered by cutting-edge AI technology and industry expertise.

        </div></div>
                Get Started
    
                Learn More
    
      {/* Features Section */}

      <section className="py-20 px-4sm:px-6lg:px-8" /></section>
        </div></div>
        </div></div>
              Why Choose Our MicroSaasServices?
    
              Our microsaasservices solutions deliver unmatched performance, security, and scalability.
    
        </div></div>
 (}
    
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20transition-allduration-300" /></div>
        </div></div>
                <h3 className="text-xl font-semiboldtext-white mb-3">{feature.title}</h3>
>>>>>>> cursor/fix-errors-and-merge-to-main-b882
                <p className="text-gray-300">{feature.description}</p>
              </div>))}
      {/* Benefits Section */}
<<<<<<< HEAD
      <section className="py-20p x-4 sm:px-6lg:px-8bg-white/5"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-centermb-16"></div>
            <h2 className="w-5 h-5ml-2" />
              Key Benefits
            </h2>
            <p className="w-5 h-5ml-2">Experience the power of our microsaasservices solutions for your business.
            </p>
          </div>
          <div className="grid grid-cols-1md:grid-cols-2gap-6"></div>
            {benefits.map((benefit, index) => (}
              <div key={index} className="flexitems-startspace-x-3"></div>
                <CheckCircle className="w-5 h-5ml-2" />
=======

      <section className="py-20 px-4 sm:px-6lg:px-8bg-white/5" /></section>
        </div></div>
        </div></div>
              Key Benefits
    
              Experience the power of our microsaasservices solutions for your business.
    
        </div></div>
 (}

              <div key={index} className="flexitems-startspace-x-3" /></div>

>>>>>>> cursor/fix-errors-and-merge-to-main-b882
                <p className="text-gray-300text-lg">{benefit}</p>
              </div>))}
      {/* CTA Section */}
<<<<<<< HEAD
      <section className="py-20p x-4sm:px-6lg:px-8"></section>
        <div className="max-w-4xlmx-auto text-center"></div>
          <div className="bg-gradient-to-rfrom-purple-600to-blue-600 rounded-2xlp-8md:p-12"></div>
            <h2 className="w-5 h-5ml-2" />
              Ready to Get Started?
            </h2>
            <p className="w-5 h-5ml-2">Contact our experts to discuss your microsaasservices needs and get a customized solution.
            </p>
            <div className="flex flex-col sm:flex-rowgap-4 justify-center"></div>
              <button className="w-5 h-5ml-2" />
                <Phone className="w-5 h-5ml-2" />
                Call Now
              </button>
              <button className="w-5 h-5ml-2" />
                <Mail className="w-5 h-5ml-2" />
                Email Us
              </button>
            </div>
        </div>
      </section>
=======

      <section className="py-20 px-4sm:px-6lg:px-8" /></section>
        </div></div>
        </div></div>
              Ready to Get Started?
    
              Contact our experts to discuss your microsaasservices needs and get a customized solution.

        </div></div>
                Call Now
    
                Email Us
    
>>>>>>> cursor/fix-errors-and-merge-to-main-b882
