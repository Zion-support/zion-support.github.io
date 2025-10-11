<<<<<<< HEAD
'use client';
import React from 'react';
import {Helmet}}from 'react-helmet-async';
import {CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe}}from 'lucide-react';
const AnalyticsToolsPage: React.FC = () => {,
=======
'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react'
const AnalyticsToolsPage: React.FC = () => {
>>>>>>> origin/main
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Analytics',
      description: 'Advanced AI technology to transform your data analysis and business intelligence',},
    {icon: Zap,
      title: 'Real-Time Processing',
      description: 'Lightning-fast data processing and real-time analytics for optimal insights',},
    {icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards for your data',},
    {icon: Globe,
      title: 'Global Scalability',
<<<<<<< HEAD
      description: 'Worldwide deployment and support for international business analytics',}];
=======
      description: 'Worldwide deployment and support for international business analytics'
    }
<<<<<<< HEAD
  ];];];
>>>>>>> origin/main
=======
  ]
>>>>>>> origin/main
  const benefits = [
    'Advanced AI-powered data analysis',
    'Real-time processing and insights',
    'Enterprise-grade security and compliance',
    'Scalable and flexible analytics solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
<<<<<<< HEAD
    'Proven track record of success'
  ];

=======
<<<<<<< HEAD
<<<<<<< HEAD
    'Proven track record of success'
  ]
  return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">)</div>
      <Helmet />
=======
    'Proven track record of success';
  ];
>>>>>>> origin/main
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
>>>>>>> origin/main
        <title>Analytics Tools | Zion Tech Group</title>
=======
    'Proven track record of success'
  ]
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      </div><Helmet>
        </Helmet><title>Analytics Tools | Zion Tech Group</title>
>>>>>>> origin/main
        <meta name="description" content="Professional Analytics Tools services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="analytics tools, AI solutions, IT services, Zion Tech Group, data analytics" />
      </Helmet>
<<<<<<< HEAD

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Page
              </span>
              <br />
              <span className="text-white">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our advanced page solutions. 
              Powered by cutting-edge AI technology and industry expertise.
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
        </div>
=======
<div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">Analytics Tools;</h1>
  </
<<<<<<< HEAD
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Transform your business with our advanced analytics tools.</p>
=======

=======
>>>>>>> main
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business with our advanced analytics tools. 
>>>>>>> origin/main
            Powered by cutting-edge AI technology and industry expertise.
          </p>
>>>>>>> origin/main
      </section>
<<<<<<< HEAD
      {/* Features Section */} <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
<<<<<<< HEAD
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Page?
=======
          <div className="text-center mb-12">
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-4">,</h2>
              Why Choose Our Analytics Tools?
>>>>>>> origin/main
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Our analytics tools deliver unmatched performance, security, and scalability.</p>
            </p>
          </div>
<<<<<<< HEAD

=======
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8">,</div>
            {features.map((feature, index) => (
              <div key={index}className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <feature.icon className="w-12 h-12 text-purple-400 mb-4" />
=======
      {/* Features Section */}
      <section className="py-16 px-4">
        </section>< className="$2 />
          </div><div className="text-center mb-12">
            </div><h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Analytics Tools?
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our analytics tools deliver unmatched performance, security, and scalability.
>>>>>>> origin/main
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              </div><div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                </div><feature.icon className="w-12 h-12 text-purple-400 mb-4" />
>>>>>>> origin/main
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description</p>}</p>
              </div>
            ))}
          </div>
        </div>
<<<<<<< HEAD
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Key Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of our page solutions for your business.
            </p>
          </div>

=======
      <section className="py-16 px-4 bg-white/5">
<<<<<<< HEAD
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-4">,</h2>
              Key Benefits,
  </
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Experience the power of our analytics tools for your business.</p>
=======
        </section>< className="$2 />
          </div><div className="text-center mb-12">
            </div><h2 className="text-3xl md: text-4xl font-bold text-white mb-4">
              Key Benefits,
  
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" /></p>
              Experience the power of our analytics tools for your business.
>>>>>>> origin/main
            </p>
          </div>
          <div className="grid grid-cols-1 md: grid-cols-2 gap-6">,</div>
            {benefits.map((benefit, index) => (
<<<<<<< HEAD
              <div key={index}className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">{benefit</span>}</span>
=======
              </div><div key={index} className="flex items-center space-x-3">
                </div><CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
>>>>>>> origin/main
              </div>
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <feature.icon className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}
                <p className="text-gray-300">{feature.description}
            ))}
{/* Benefits Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Key Benefits
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of our analytics tools for your business.
>>>>>>> origin/main
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">{benefit}
            ))}
<<<<<<< HEAD
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
=======
<<<<<<< HEAD
>>>>>>> origin/main
          </div>
        </div>
      </section>
      {/* CTA Section */} <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md: text-4xl font-bold text-white mb-4">,</h2>
            Ready to Get Started?
          </h2>
          <p className="text-xl text-purple-100 mb-8">Contact our experts to discuss your analytics needs and get a customized solution.</p>
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center">,</div>
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover: bg-gray-100 transition-all duration-300 flex items-center justify-center">,</button>
              <Phone className="mr-2 h-5 w-5" />
              Call Now;
  </
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover: bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">,</button>
              <Mail className="mr-2 h-5 w-5" />
<<<<<<< HEAD
<<<<<<< HEAD
              Email Us;
  </
=======
=======
      {/* CTA Section */}
      <section className="py-16 px-4">
        </section>< className="$2 />
          </div><h2 className="text-3xl md: text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-purple-100 mb-8" /></p>
            Contact our experts to discuss your analytics needs and get a customized solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            </div><button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
              </button><Phone className="mr-2 h-5 w-5" />
              Call Now
  
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
              </button><Mail className="mr-2 h-5 w-5" />
>>>>>>> origin/main

>>>>>>> origin/main
=======
              Email Us
  </
>>>>>>> main
          </div>
        </div>
        <div className="text-center">
<<<<<<< HEAD
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
          </h2>
          <p className="text-xl text-purple-100 mb-8">Contact our experts to discuss your analytics needs and get a customized solution.</p>
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center">,</div>
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover: bg-gray-100 transition-all duration-300 flex items-center justify-center">,</button>
              <Phone className="mr-2 h-5 w-5" />
              Call Now;
  </
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover: bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">,</button>
              <Mail className="mr-2 h-5 w-5" />
              Email Us;
  </
=======
          </div><h2 className="text-3xl font-bold text-white mb-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-center" /></div>
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center" /></button>
              <Phone className="mr-2 h-5 w-5" / /></Phone>
              Call Now
  
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center" /></button>
              <Mail className="mr-2 h-5 w-5" / /></Mail>
          </div>
        </div>
        <div className="text-center" /></div>
          <h2 className="text-3xl font-bold text-white mb-6" /></h2>
            Ready to Get Started?
          </h2>
          <p className="text-xl text-purple-100 mb-8" /></p>
            Contact our experts to discuss your analytics needs and get a customized solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            </div><button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
              </button><Phone className="mr-2 h-5 w-5" />
              Call Now
  
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
              </button><Mail className="mr-2 h-5 w-5" />
              Email Us
  
>>>>>>> origin/main
          </div>
        </div>
      </div>
    </div>
  ),
<<<<<<< HEAD
};

<<<<<<< HEAD
export default PagePage;
=======
export default AnalyticsToolsPage;
=======
}
export default AnalyticsToolsPage
>>>>>>> origin/main
  </button>
  </button>
  </button>
  </button>
  </section>
  </h2>
  </section>
  </h1>
          <p className="text-xl text-purple-100 mb-8">
            Contact our experts to discuss your analytics needs and get a customized solution.
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
              <Phone className="mr-2 h-5 w-5" />
              Call Now
              <Mail className="mr-2 h-5 w-5" />
              Email Us
  )
}
export default AnalyticsToolsPage</div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></span></button></button></p></p></p></p></p></p></h1></h2></h2></h2></h2></h3></section></section></section>
>>>>>>> origin/main
