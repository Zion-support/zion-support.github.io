'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import {CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe} from 'lucide-react';
const PagePage: React.FC = () => {
    const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency'},
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results'},
    {]
return(<div className="min-h-screenbg-gradient-to-brfrom-slate-900via-purple-900 to-slate-900"></div>)
      <Helmet><title>Page | Zion Tech Group</title>
        <meta name="description" content="AI-powered solution" />
        <meta name="keywords" content="AI, artificial intelligence, business solutions" />
      </Helmet>}{/* Hero Section */}
            <h2>Why Choose Our Page?</h2>
            </h2>
            <p>Our page solutions deliver unmatched performance, security, and scalability.</p>
            </p>
                </div>
                <h3 className="text-xlfont-semiboldtext-whitemb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description</p>}</p>
              </div>
            ))}

          </div>
        </div>
      </section>
            <h2>Key Benefits;</h2>
            </h2>
            <p>Experience the power of our page solutions for your business.</p>
            </p>
              </div>
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards'},
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses'}
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
    <div className="min-h-screenbg-gradient-to-brfrom-slate-900via-purple-900 to-slate-900">
      <Helmet>
        <title>Page | Zion Tech Group
        <meta name="description" content="Professional Page services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="page, AI solutions, IT services, Zion Tech Group, page" />
      {/* Hero Section */}
      <section className="relativepy-20px-4sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xlmd:text-6xlfont-boldtext-white mb-6">
              <span className="bg-gradient-to-rfrom-purple-400to-blue-400bg-clip-text text-transparent">
                Page
              </span>
              <br />
              <span className="text-white">Solutions</span>
            </h1>
            <p className="text-xltext-gray-300mb-8max-w-3xl mx-auto">
              Transform your business with our advanced page solutions. 
              Powered by cutting-edge AI technology and industry expertise.
            </p>
            <div className="flexflex-colsm:flex-rowgap-4 justify-center">
              <button className="bg-gradient-to-rfrom-purple-500to-blue-600text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                Get Started
                <ArrowRight className="ml-2h-5w-5" />
              </button>
              <button className="borderborder-whitetext-whitepx-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20px-4sm:px-6lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xlmd:text-4xl font-boldtext-white mb-4">
              Why Choose Our Page?
            <p className="text-xltext-gray-300max-w-3xlmx-auto">
              Our page solutions deliver unmatched performance, security, and scalability.
            </p>
          </div>

          <div className="gridgrid-cols-1md:grid-cols-2lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10backdrop-blur-smrounded-xlp-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flexitems-centerjustify-centerw-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  <feature.icon className="h-6w-6text-white" />
                </div>
                <h3 className="text-xlfont-semiboldtext-whitemb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20px-4sm:px-6lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xlmd:text-4xl font-boldtext-white mb-4">
              Key Benefits
            </h2>
            <p className="text-xltext-gray-300max-w-3xlmx-auto">
              Experience the power of our page solutions for your business.
            </p>
          </div>

          <div className="gridgrid-cols-1md:grid-cols-2gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flexitems-startspace-x-3">
                <CheckCircle className="h-6w-6text-purple-400mt-1 flex-shrink-0" />
                <p className="text-gray-300text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20px-4sm:px-6lg:px-8">
        <div className="max-w-4xlmx-autotext-center">
          <div className="bg-gradient-to-rfrom-purple-600to-blue-600rounded-2xl p-8 md:p-12">
            <h2 className="text-3xlmd:text-4xl font-boldtext-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xltext-purple-100mb-8">
              Contact our experts to discuss your page needs and get a customized solution.
            </p>
            <div className="flexflex-colsm:flex-rowgap-4 justify-center">
              <button className="bg-whitetext-purple-600px-8py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <Phone className="mr-2h-5w-5" />
                Call Now
              </button>
              <button className="borderborder-whitetext-whitepx-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                <Mail className="mr-2h-5w-5" />
                Email Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )};

export default PagePage;
