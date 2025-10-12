import React from 'react';
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
    <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>Services | Zion Tech Group</title>
        <meta name="description" content="Professional Services services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="services, AI solutions, IT services, Zion Tech Group, services" />
      </Helmet>
      {/* Hero Section */}
      <section className="w-5h-5 ml-2" />
        <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            <h1 className="w-5h-5 ml-2" />
              <span className="w-5h-5 ml-2" />
                Services

              <span className="te xt-white">Solutions</span>
            </h1>
            <p className="w-5h-5 ml-2" />
              Transform your business with our advanced services solutions.
              Powered by cutting-edge AI technology and industry expertise.
            </p>
            <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
              <button className="w-5h-5 ml-2" />
                Get Started
                <ArrowRight className="w-5h-5 ml-2" />
              </button>
              <button className="w-5h-5 ml-2" />
                Learn More
  </
            </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="w-5h-5 ml-2" />
        <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            <h2 className="w-5h-5 ml-2" />
              Why Choose Our Services?
            </h2>
            <p className="w-5h-5 ml-2" />
              Our services solutions deliver unmatched performance, security, and scalability.
            </p>
          </div>
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            {features.map((feature, index) => (
              <div key={index} className="bg-w hite/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20transition-allduration-300" />
                <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                  <feature.icon className="h-6w-6te xt-white" />
                </div>
                <h3 className="te xt-xl font-semiboldtext-whitemb-3">{feature.title}</h3>
                <p className="te xt-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
      </section>
      {/* Benefits Section */}
      <section className="w-5h-5 ml-2" />
        <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            <h2 className="w-5h-5 ml-2" />
              Key Benefits
  </
            <p className="w-5h-5 ml-2" />
              Experience the power of our services solutions for your business.
            </p>
          </div>
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            {benefits.map((benefit, index) => (
              <div key={index} className="fl exitems-startspace-x-3" />
                <CheckCircle className="w-5h-5 ml-2" />
                <p className="te xt-gray-300text-lg">{benefit}</p>
              </div>
            ))}
          </div>
      </section>
      {/* CTA Section */}
      <section className="w-5h-5 ml-2" />
        <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            <h2 className="w-5h-5 ml-2" />
              Ready to Get Started?
            </h2>
            <p className="w-5h-5 ml-2" />
              Contact our experts to discuss your services needs and get a customized solution.
            </p>
            <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
              <button className="w-5h-5 ml-2" />
                <Phone className="w-5h-5 ml-2" />
                Call Now
  </
              <button className="w-5h-5 ml-2" />
                <Mail className="w-5h-5 ml-2" />
                Email Us
  </
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
  ];return (<div className="mi n-h-screen bg-gradient-to-br from-slate-900via-purple-900to-slate-900"></div>
      <Helmet>
        <title>Services | Zion Tech Group</title>
        <meta name="description" content="Professional Services services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="services, AI solutions, IT services, Zion Tech Group, services" />
      </Helmet>
      {/* Hero Section */}
      <section className="re lative py-20 px-4sm:px-6lg:px-8"></section>
        <div className="ma x-w-7xl mx-auto"></div>
          <div className="te xt-center"></div>
            <h1 className="w-5h-5 ml-2" />
              <span className="w-5h-5 ml-2" />
                Services
              </span>
              <br />
              <span className="te xt-white">Solutions</span>
            </h1>
            <p className="w-5h-5 ml-2" />
              Transform your business with our advanced services solutions.
              Powered by cutting-edge AI technology and industry expertise.
            </p>
            <div className="fl ex flex-col sm:flex-rowgap-4 justify-center"></div>
              <button className="w-5h-5 ml-2" />
                Get Started
                <ArrowRight className="w-5h-5 ml-2" />
              </button>
              <button className="w-5h-5 ml-2" />
                Learn More
              </button>
            </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-20 p x-4sm:px-6lg:px-8"></section>
        <div className="ma x-w-7xl mx-auto"></div>
          <div className="te xt-centermb-16"></div>
            <h2 className="w-5h-5 ml-2" />
              Why Choose Our Services?
            </h2>
            <p className="w-5h-5 ml-2" />
              Our services solutions deliver unmatched performance, security, and scalability.
            </p>
          </div>
          <div className="gr id grid-cols-1 md:grid-cols-2lg:grid-cols-4 gap-8"></div>
            {features.map((feature, index) => (}
              <div key={index} className="bg-w hite/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20transition-allduration-300"></div>
                <div className="fl ex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600rounded-lg mb-4"></div>
                  <feature.icon className="h-6w-6te xt-white" />
                </div>
                <h3 className="te xt-xl font-semiboldtext-whitemb-3">{feature.title}</h3>
                <p className="te xt-gray-300">{feature.description}</p>
              </div>))}
          </div>
      </section>
      {/* Benefits Section */}
      <section className="py-20 p x-4 sm:px-6lg:px-8bg-white/5"></section>
        <div className="ma x-w-7xl mx-auto"></div>
          <div className="te xt-centermb-16"></div>
            <h2 className="w-5h-5 ml-2" />
              Key Benefits
            </h2>
            <p className="w-5h-5 ml-2" />
              Experience the power of our services solutions for your business.
            </p>
          </div>
          <div className="gr id grid-cols-1md:grid-cols-2gap-6"></div>
            {benefits.map((benefit, index) => (}
              <div key={index} className="fl exitems-startspace-x-3"></div>
                <CheckCircle className="w-5h-5 ml-2" />
                <p className="te xt-gray-300text-lg">{benefit}</p>
              </div>))}
          </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 p x-4sm:px-6lg:px-8"></section>
        <div className="ma x-w-4xlmx-auto text-center"></div>
          <div className="bg-gradient-to-rfrom-purple-600 to-blue-600 rounded-2xlp-8md:p-12"></div>
            <h2 className="w-5h-5 ml-2" />
              Ready to Get Started?
            </h2>
            <p className="w-5h-5 ml-2" />
              Contact our experts to discuss your services needs and get a customized solution.
            </p>
            <div className="fl ex flex-col sm:flex-rowgap-4 justify-center"></div>
              <button className="w-5h-5 ml-2" />
                <Phone className="w-5h-5 ml-2" />
                Call Now
              </button>
              <button className="w-5h-5 ml-2" />
                <Mail className="w-5h-5 ml-2" />
                Email Us
              </button>
            </div>
        </div>
      </section>