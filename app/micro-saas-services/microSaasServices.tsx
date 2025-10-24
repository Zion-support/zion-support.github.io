<<<<<<< HEAD
import React from "react";
import { Mic } from 'lucide-react';
import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
=======
import React  from 'react';
'use client'
import { Helmet } from 'react-helmet-async';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796

<<<<<<< HEAD
import React from 'react';
=======
const MicroSaasServicesPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
=======
export default MicroSaasServicesPage;
'use client'
import {Helmet} from 'react-helmet-async';
import {ArrowRight, Mail, Brain} from 'lucide-react';
  const features = [{icon: Brain,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency',},
    {icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results',},
    {icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards',},
    {icon: Globe,
      title: 'Global Reach',
<<<<<<< HEAD
      description: 'Worldwide deployment and support for international businesses',
    }
  ];

  const benefits = [
    'Advanced AI technology integration',
=======
      description: 'Worldwide deployment and support for international businesses',}];
  const benefits = ['Advanced AI technology integration',
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
<<<<<<< HEAD
    'Proven track record of success'
  ];
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361

interface MicrosaasservicesProps {
  className?: string;
  children?: React.ReactNode;
}
export default function Microsaasservices({ className = '', children, ...props }: MicrosaasservicesProps) {
  return (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    <div className={`microsaasservices-component ${className}`} {...props}>
      {children}
=======
    <>
    
  </>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center"></div>
          <h1 className="text-4xl font-bold text-white mb-6"></h1>
            MicroSaasServices | Zion Tech Group</h1>
          </h1>
          <p className="text-lg text-gray-300 mb-8"></p>
            Professional microsaasservices | zion tech group services coming soon.</p>
          </p>
          <Link 
            href="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hove,
  r:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
          ></Link>
            Contact Us</Link>
            <ArrowRight className="w-5 h-5 ml-2" /></ArrowRight>
          </Link>
        </div>
      </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0210
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
=======
import { Helmet } from 'react-helmet-async';

const MicroSaasServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0659
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900via-purple-900to-slate-900">
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
      <Helmet>
        <title>MicroSaasServices | Zion Tech Group</title>
        <meta name="description" content="Professional MicroSaasServices services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="microSaasServices, AI solutions, IT services, Zion Tech Group, microsaasservices" />
      </Helmet>
<<<<<<< HEAD
<<<<<<< HEAD

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                MicroSaasServices
              </span>
              <br />
=======
      {/* Hero Section */}
      <section className="relative py-20 px-4sm:px-6lg:px-8" />
        <div className="max-w-7xlmx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6" />
              <span className="bg-gradient-to-r from-purple-400 to-blue-400bg-clip-texttext-transparent" />
                MicroSaasServices
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
              <span className="text-white">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our advanced microsaasservices solutions. 
              Powered by cutting-edge AI technology and industry expertise.
            </p>
<<<<<<< HEAD
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
=======
            <div className="flex flex-col sm:flex-rowgap-4justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300flex items-center" />
                Get Started
                <ArrowRight className="ml-2h-5w-5" />
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Learn More
<<<<<<< HEAD
              </button>
            </div></div></div></div>
          </div>
=======
  </
            </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
        </div>
      </section>

      {/* Features Section */}
<<<<<<< HEAD
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
=======
      <section className="py-20 px-4sm:px-6lg:px-8" />
        <div className="max-w-7xlmx-auto">
          <div className="text-centermb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" />
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
              Why Choose Our MicroSaasServices?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our microsaasservices solutions deliver unmatched performance, security, and scalability.
            </p>
<<<<<<< HEAD
          </div></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div></div></div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Key Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of our microsaasservices solutions for your business.
            </p>
          </div></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg">{benefit}</p>
              </div></div>
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
              Contact our experts to discuss your microsaasservices needs and get a customized solution.
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
            </div></div></div>
          </div>
        </div>
      </section>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
    </div>
  );
}
=======
    'Proven track record of success'];
  return (
    <title>5G Data Analytics - Zion Tech Group</title>

        <title>MicroSaasServices | Zion Tech Group</title>
        <meta name="description" content="Professional MicroSaasServices services by Zion Tech Group. Advanced AI and IT solutions for your business."   /></meta>
        <meta name="keywords" content="microSaasServices, AI solutions, IT services, Zion Tech Group, microsaasservices"   /></meta>
      </Helmet>
      {/* Hero Section */}

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

                <p className="text-gray-300">{feature.description}</p>
              </div>
  ))}
          </div>
      </section>
      {/* Benefits Section */}

=======
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2lg:grid-cols-4gap-8">
        </div>
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20transition-allduration-300" />
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600rounded-lgmb-4">
                  <feature.icon className="h-6w-6text-white" />
                </div>
                <h3 className="text-xl font-semiboldtext-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
      </section>
      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6lg:px-8bg-white/5" />
        <div className="max-w-7xlmx-auto">
          <div className="text-centermb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" />
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
              Key Benefits

              Experience the power of our microsaasservices solutions for your business.
<<<<<<< HEAD

 (

                <p className="text-gray-300text-lg">{benefit}</p>
              </div>
  ))}
          </div>
      </section>
      {/* CTA Section */}

              Ready to Get Started?

              Contact our experts to discuss your microsaasservices needs and get a customized solution.

                Call Now

                Email Us

  )}
export default MicroSaasServicesPage

=======
            </p>
          </div>
          <div className="grid grid-cols-1md:grid-cols-2gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-startspace-x-3" />
                <CheckCircle className="h-6 w-6 text-purple-400mt-1flex-shrink-0" />
                <p className="text-gray-300text-lg">{benefit}</p>
              </div>
            ))}
          </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 px-4sm:px-6lg:px-8" />
        <div className="max-w-4xlmx-autotext-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xllp-8md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" />
              Ready to Get Started?
            </h2>
            <p className="text-xltext-purple-100mb-8">
              Contact our experts to discuss your microsaasservices needs and get a customized solution.
            </p>
            <div className="flex flex-col sm:flex-rowgap-4justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-centerjustify-center" />
                <Phone className="mr-2h-5w-5" />
                Call Now
  </
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-centerjustify-center" />
                <Mail className="mr-2h-5w-5" />
                Email Us
  </
            </div>
        </div>
      </section>
    </div>
  )}
export default MicroSaasServicesPage
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
  </button>
  </button>
  </h2>
  </button>
  </span>

  ];const benefits = ['Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
<<<<<<< HEAD
    'Proven track record of success'];return (
    <div>
        </div></div>
        <title>5G Data Analytics - Zion Tech Group</title>

=======
    'Proven track record of success'
  ];return (<div className="min-h-screen bg-gradient-to-br from-slate-900via-purple-900to-slate-900"></div>
      <Helmet>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
        <title>MicroSaasServices | Zion Tech Group</title>
        <meta name="description" content="Professional MicroSaasServices services by Zion Tech Group. Advanced AI and IT solutions for your business."   /></meta>
        <meta name="keywords" content="microSaasServices, AI solutions, IT services, Zion Tech Group, microsaasservices"   /></meta>
      </Helmet>
      {/* Hero Section */}
<<<<<<< HEAD

      <section className="relative py-20 px-4sm:px-6lg:px-8"   /></section>
        </div></div>
          <div className="text-center"   /></div>
                MicroSaasServices

=======
      <section className="relative py-20 px-4sm:px-6lg:px-8"></section>
        <div className="max-w-7xlmx-auto"></div>
          <div className="text-center"></div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6" />
              <span className="bg-gradient-to-r from-purple-400 to-blue-400bg-clip-texttext-transparent" />
                MicroSaasServices
              </span>
              <br />
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
              <span className="text-white">Solutions</span>
              Transform your business with our advanced microsaasservices solutions.
              Powered by cutting-edge AI technology and industry expertise.
            </p>
<<<<<<< HEAD
            <div className="flex flex-col sm:flex-rowgap-4 justify-center"></div>
              <button className="w-5h-5ml-2"   /></button>
                Get Started;
                <ArrowRight className="w-5h-5ml-2"   /></ArrowRight>
              </button>
              <button className="w-5h-5ml-2">Learn More;
=======
            <div className="flex flex-col sm:flex-rowgap-4justify-center"></div>
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300flex items-center" />
                Get Started
                <ArrowRight className="ml-2h-5w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900transition-allduration-300" />
                Learn More
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
              </button>
            </div>
        </div>
      </section>
      {/* Features Section */}
<<<<<<< HEAD
      <section className="py-20px-4s m: px-6lg:px-8"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-centermb-16"></div>
            <h2 className="w-5h-5ml-2"   /></h2>
              Why Choose Our MicroSaasServices?

              Our microsaasservices solutions deliver unmatched performance, security, and scalability.

        </div></div>
 (}

              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20transition-allduration-300"   /></div>
=======
      <section className="py-20 px-4sm:px-6lg:px-8"></section>
        <div className="max-w-7xlmx-auto"></div>
          <div className="text-centermb-16"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" />
              Why Choose Our MicroSaasServices?
            </h2>
            <p className="text-xl text-gray-300max-w-3xlmx-auto">
              Our microsaasservices solutions deliver unmatched performance, security, and scalability.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2lg:grid-cols-4gap-8">
        </div></div>
            {features.map((feature, index) => (}
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20transition-allduration-300" /></div>
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600rounded-lgmb-4">
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
        </div></div>
                <h3 className="text-xl font-semiboldtext-white mb-3">{feature.title}</h3>

                <p className="text-gray-300">{feature.description}</p>
              </div>
  ))}
          </div>
      </section>
      {/* Benefits Section */}
<<<<<<< HEAD

      <section className="py-20 px-4 sm:px-6lg:px-8bg-white/5"   /></section>
        </div></div>
        </div></div>
              Key Benefits

              Experience the power of our microsaasservices solutions for your business.

        </div></div>
 (}

              <div key={index} className="flexitems-startspace-x-3"   /></div>

=======
      <section className="py-20 px-4 sm:px-6lg:px-8bg-white/5"></section>
        <div className="max-w-7xlmx-auto"></div>
          <div className="text-centermb-16"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" />
              Key Benefits
            </h2>
            <p className="text-xl text-gray-300max-w-3xlmx-auto">
              Experience the power of our microsaasservices solutions for your business.
            </p>
          </div>
          <div className="grid grid-cols-1md:grid-cols-2gap-6">
        </div></div>
            {benefits.map((benefit, index) => (}
              <div key={index} className="flex items-startspace-x-3"></div>
                <CheckCircle className="h-6 w-6 text-purple-400mt-1flex-shrink-0" />
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
                <p className="text-gray-300text-lg">{benefit}</p>
              </div>
  ))}
          </div>
      </section>
      {/* CTA Section */}
<<<<<<< HEAD

      <section className="py-20 px-4sm:px-6lg:px-8"   /></section>
        </div></div>
        </div></div>
              Ready to Get Started?

              Contact our experts to discuss your microsaasservices needs and get a customized solution.

        </div></div>
                Call Now

                Email Us

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
=======
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">MicroSaasServices</h1>
          <p className="text-lg text-gray-300 mb-8">Professional microSaasServices services coming soon.</p>
        </div>
      </div>
    </div>
  );
};

export default MicroSaasServicesPage;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0659
=======
      <section className="py-20 px-4sm:px-6lg:px-8"></section>
        <div className="max-w-4xlmx-autotext-center"></div>
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xllp-8md:p-12"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" />
              Ready to Get Started?
            </h2>
            <p className="text-xltext-purple-100mb-8">
              Contact our experts to discuss your microsaasservices needs and get a customized solution.
            </p>
            <div className="flex flex-col sm:flex-rowgap-4justify-center"></div>
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-centerjustify-center" />
                <Phone className="mr-2h-5w-5" />
                Call Now
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-centerjustify-center" />
                <Mail className="mr-2h-5w-5" />
                Email Us
              </button>
            </div>
        </div>
      </section>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
