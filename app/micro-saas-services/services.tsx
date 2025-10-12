import React from \'react\';
'use client'
import { Helmet } from 'react-helmet-async';

import { ArrowRight, Mail, Brain } from 'lucide-react';
const ServicesPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency',
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses',
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
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900via-purple-900to-slate-900" />
      <Helmet />
        <title>Services | Zion Tech Group</title>
        <meta name="description" content="Professional Services services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="services, AI solutions, IT services, Zion Tech Group, services" />
      </Helmet>
      {/* Hero Section */}
      <section className="relative py-20 px-4sm:px-6lg:px-8" />
        <div className="max-w-7xlmx-auto" />
          <div className="text-center" />
            <h1 className="text-4xl md:text-6xl font-boldtext-whitemb-6" />
              <span className="bg-gradient-to-r from-purple-400 to-blue-400bg-clip-texttext-transparent" />
                Services

              <span className="text-white">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8max-w-3xlmx-auto" />
              Transform your business with our advanced services solutions.
              Powered by cutting-edge AI technology and industry expertise.
            </p>
            <div className="flex flex-col sm:flex-rowgap-4justify-center" />
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300flexitems-center" />
                Get Started
                <ArrowRight className="ml-2h-5w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900transition-allduration-300" />
                Learn More
  </
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-20 px-4sm:px-6lg:px-8" />
        <div className="max-w-7xlmx-auto" />
          <div className="text-centermb-16" />
            <h2 className="text-3xl md:text-4xl font-boldtext-whitemb-4" />
              Why Choose Our Services?
            </h2>
            <p className="text-xl text-gray-300max-w-3xlmx-auto" />
              Our services solutions deliver unmatched performance, security, and scalability.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2lg:grid-cols-4gap-8" />
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20transition-allduration-300" />
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600rounded-lgmb-4" />
                  <feature.icon className="h-6w-6text-white" />
                </div>
                <h3 className="text-xl font-semiboldtext-whitemb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6lg:px-8bg-white/5" />
        <div className="max-w-7xlmx-auto" />
          <div className="text-centermb-16" />
            <h2 className="text-3xl md:text-4xl font-boldtext-whitemb-4" />
              Key Benefits
  </
            <p className="text-xl text-gray-300max-w-3xlmx-auto" />
              Experience the power of our services solutions for your business.
            </p>
          </div>
          <div className="grid grid-cols-1md:grid-cols-2gap-6" />
            {benefits.map((benefit, index) => (
              <div key={index} className="flexitems-startspace-x-3" />
                <CheckCircle className="h-6 w-6 text-purple-400mt-1flex-shrink-0" />
                <p className="text-gray-300text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 px-4sm:px-6lg:px-8" />
        <div className="max-w-4xlmx-autotext-center" />
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xlp-8md:p-12" />
            <h2 className="text-3xl md:text-4xl font-boldtext-whitemb-4" />
              Ready to Get Started?
            </h2>
            <p className="text-xltext-purple-100mb-8" />
              Contact our experts to discuss your services needs and get a customized solution.
            </p>
            <div className="flex flex-col sm:flex-rowgap-4justify-center" />
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flexitems-centerjustify-center" />
                <Phone className="mr-2h-5w-5" />
                Call Now
  </
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flexitems-centerjustify-center" />
                <Mail className="mr-2h-5w-5" />
                Email Us
  </
            </div>
          </div>
        </div>
      </section>
    </div>
  )}
export default ServicesPage
  </button>
  </button>
  </h2>
  </button>
  </span>

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
    }
  ];const benefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ];return (<div className="min-h-screen bg-gradient-to-br from-slate-900via-purple-900to-slate-900"></div>
      <Helmet />
        <title>Services | Zion Tech Group</title>
        <meta name="description" content="Professional Services services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="services, AI solutions, IT services, Zion Tech Group, services" />
      </Helmet>
      {/* Hero Section */}
      <section className="relative py-20 px-4sm:px-6lg:px-8"></section>
        <div className="max-w-7xlmx-auto"></div>
          <div className="text-center"></div>
            <h1 className="text-4xl md:text-6xl font-boldtext-whitemb-6" />
              <span className="bg-gradient-to-r from-purple-400 to-blue-400bg-clip-texttext-transparent" />
                Services
              </span>
              <br />
              <span className="text-white">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8max-w-3xlmx-auto" />
              Transform your business with our advanced services solutions.
              Powered by cutting-edge AI technology and industry expertise.
            </p>
            <div className="flex flex-col sm:flex-rowgap-4justify-center"></div>
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300flexitems-center" />
                Get Started
                <ArrowRight className="ml-2h-5w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900transition-allduration-300" />
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-20 px-4sm:px-6lg:px-8"></section>
        <div className="max-w-7xlmx-auto"></div>
          <div className="text-centermb-16"></div>
            <h2 className="text-3xl md:text-4xl font-boldtext-whitemb-4" />
              Why Choose Our Services?
            </h2>
            <p className="text-xl text-gray-300max-w-3xlmx-auto" />
              Our services solutions deliver unmatched performance, security, and scalability.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2lg:grid-cols-4gap-8"></div>
            {features.map((feature, index) => (}
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20transition-allduration-300"></div>
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600rounded-lgmb-4"></div>
                  <feature.icon className="h-6w-6text-white" />
                </div>
                <h3 className="text-xl font-semiboldtext-whitemb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>))}
          </div>
        </div>
      </section>
      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6lg:px-8bg-white/5"></section>
        <div className="max-w-7xlmx-auto"></div>
          <div className="text-centermb-16"></div>
            <h2 className="text-3xl md:text-4xl font-boldtext-whitemb-4" />
              Key Benefits
            </h2>
            <p className="text-xl text-gray-300max-w-3xlmx-auto" />
              Experience the power of our services solutions for your business.
            </p>
          </div>
          <div className="grid grid-cols-1md:grid-cols-2gap-6"></div>
            {benefits.map((benefit, index) => (}
              <div key={index} className="flexitems-startspace-x-3"></div>
                <CheckCircle className="h-6 w-6 text-purple-400mt-1flex-shrink-0" />
                <p className="text-gray-300text-lg">{benefit}</p>
              </div>))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 px-4sm:px-6lg:px-8"></section>
        <div className="max-w-4xlmx-autotext-center"></div>
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xlp-8md:p-12"></div>
            <h2 className="text-3xl md:text-4xl font-boldtext-whitemb-4" />
              Ready to Get Started?
            </h2>
            <p className="text-xltext-purple-100mb-8" />
              Contact our experts to discuss your services needs and get a customized solution.
            </p>
            <div className="flex flex-col sm:flex-rowgap-4justify-center"></div>
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flexitems-centerjustify-center" />
                <Phone className="mr-2h-5w-5" />
                Call Now
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flexitems-centerjustify-center" />
                <Mail className="mr-2h-5w-5" />
                Email Us
              </button>
            </div>
          </div>
        </div>
      </section>